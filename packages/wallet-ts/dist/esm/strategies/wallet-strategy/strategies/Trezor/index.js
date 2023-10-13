/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { EthereumChainId, } from '@injectivelabs/ts-types';
import { Alchemy, Network as AlchemyNetwork } from 'alchemy-sdk';
import { addHexPrefix } from 'ethereumjs-util';
import { FeeMarketEIP1559Transaction } from '@ethereumjs/tx';
import { Common, Chain, Hardfork } from '@ethereumjs/common';
import TrezorConnect from '@trezor/connect-web';
import { ErrorType, GeneralException, TransactionException, TrezorException, UnspecifiedErrorCode, WalletException, } from '@injectivelabs/exceptions';
import { TxGrpcApi, toUtf8 } from '@injectivelabs/sdk-ts';
import { TIP_IN_GWEI } from '../../../../utils/constants';
import BaseConcreteStrategy from '../Base';
import { DEFAULT_ADDRESS_SEARCH_LIMIT, DEFAULT_NUM_ADDRESSES_TO_FETCH, } from '../../constants';
import TrezorHW from './hw';
import { transformTypedData } from './utils';
import { WalletAction, WalletDeviceType } from '../../../../types/enums';
import { getKeyFromRpcUrl } from '../../../../utils/alchemy';
const getNetworkFromChainId = (chainId) => {
    if (chainId === EthereumChainId.Goerli) {
        return Chain.Goerli;
    }
    if (chainId === EthereumChainId.Kovan) {
        return Chain.Goerli;
    }
    return Chain.Mainnet;
};
export default class Trezor extends BaseConcreteStrategy {
    trezor;
    ethereumOptions;
    alchemy;
    constructor(args) {
        super(args);
        this.trezor = new TrezorHW();
        this.ethereumOptions = args.ethereumOptions;
    }
    async getWalletDeviceType() {
        return Promise.resolve(WalletDeviceType.Hardware);
    }
    async getAddresses() {
        try {
            await this.trezor.connect();
            const accountManager = await this.trezor.getAccountManager();
            const wallets = await accountManager.getWallets();
            return wallets.map((k) => k.address);
        }
        catch (e) {
            throw new TrezorException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
                contextModule: WalletAction.GetAccounts,
            });
        }
    }
    async confirm(address) {
        return Promise.resolve(`0x${Buffer.from(`Confirmation for ${address} at time: ${Date.now()}`).toString('hex')}`);
    }
    async sendEthereumTransaction(txData, options) {
        const signedTransaction = await this.signEthereumTransaction(txData, options);
        try {
            const alchemy = await this.getAlchemy();
            const txReceipt = await alchemy.core.sendTransaction(addHexPrefix(signedTransaction.serialize().toString('hex')));
            return txReceipt.hash;
        }
        catch (e) {
            throw new TrezorException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
                contextModule: WalletAction.SendEthereumTransaction,
            });
        }
    }
    async sendTransaction(transaction, options) {
        const { endpoints } = options;
        if (!endpoints) {
            throw new WalletException(new Error('You have to pass endpoints.grpc within the options for using Ethereum native wallets'));
        }
        const txApi = new TxGrpcApi(endpoints.grpc);
        const response = await txApi.broadcast(transaction);
        if (response.code !== 0) {
            throw new TransactionException(new Error(response.rawLog), {
                code: UnspecifiedErrorCode,
                contextCode: response.code,
                contextModule: response.codespace,
            });
        }
        return response;
    }
    /** @deprecated */
    async signTransaction(eip712json, address) {
        return this.signEip712TypedData(eip712json, address);
    }
    async signEip712TypedData(eip712json, address) {
        const object = JSON.parse(eip712json);
        const compatibleObject = {
            ...object,
            domain: {
                ...object.domain,
                chainId: object.domain.chainId,
                salt: '0',
            },
        };
        const dataWithHashes = transformTypedData(compatibleObject);
        const { types: { EIP712Domain = [], ...otherTypes } = {}, message = {}, domain = {}, primaryType, domain_separator_hash, message_hash, } = dataWithHashes;
        try {
            await this.trezor.connect();
            const { derivationPath } = await this.getWalletForAddress(address);
            const response = await TrezorConnect.ethereumSignTypedData({
                path: derivationPath,
                data: {
                    types: { EIP712Domain, ...otherTypes },
                    message,
                    domain,
                    primaryType,
                },
                message_hash,
                domain_separator_hash,
                metamask_v4_compat: true,
            });
            if (!response.success) {
                // noinspection ExceptionCaughtLocallyJS
                throw new Error((response.payload && response.payload.error) || 'Unknown error');
            }
            return response.payload.signature;
        }
        catch (e) {
            throw new TrezorException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
                contextModule: WalletAction.SignTransaction,
            });
        }
    }
    // eslint-disable-next-line class-methods-use-this
    async signCosmosTransaction(_transaction) {
        throw new WalletException(new Error('This wallet does not support signing Cosmos transactions'), {
            code: UnspecifiedErrorCode,
            type: ErrorType.WalletError,
            contextModule: WalletAction.SendTransaction,
        });
    }
    async signArbitrary(signer, data) {
        try {
            await this.trezor.connect();
            const { derivationPath } = await this.getWalletForAddress(signer);
            const response = await TrezorConnect.ethereumSignMessage({
                path: derivationPath,
                message: toUtf8(data),
            });
            if (!response.success) {
                throw new Error((response.payload && response.payload.error) || 'Unknown error');
            }
            return response.payload.signature;
        }
        catch (e) {
            throw new TrezorException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
                contextModule: WalletAction.SignTransaction,
            });
        }
    }
    async getEthereumChainId() {
        const alchemy = await this.getAlchemy();
        const alchemyProvider = await alchemy.config.getProvider();
        return alchemyProvider.network.chainId.toString();
    }
    async getEthereumTransactionReceipt(txHash) {
        return Promise.resolve(txHash);
    }
    // eslint-disable-next-line class-methods-use-this
    async getPubKey() {
        throw new WalletException(new Error('You can only fetch PubKey from Cosmos native wallets'));
    }
    async signEthereumTransaction(txData, options) {
        const chainId = parseInt(options.ethereumChainId.toString(), 10);
        const alchemy = await this.getAlchemy();
        const nonce = await alchemy.core.getTransactionCount(options.address);
        const common = new Common({
            chain: getNetworkFromChainId(chainId),
            hardfork: Hardfork.London,
        });
        const eip1559TxData = {
            from: txData.from,
            data: txData.data,
            to: txData.to,
            nonce: addHexPrefix(nonce.toString(16)),
            gas: addHexPrefix(txData.gas),
            gasLimit: addHexPrefix(txData.gas),
            maxFeePerGas: addHexPrefix(txData.gasPrice || txData.maxFeePerGas),
            maxPriorityFeePerGas: addHexPrefix(txData.maxPriorityFeePerGas || TIP_IN_GWEI.toString(16)),
        };
        const tx = FeeMarketEIP1559Transaction.fromTxData(eip1559TxData, {
            common,
        });
        const transaction = {
            ...tx.toJSON(),
            chainId,
        };
        try {
            await this.trezor.connect();
            const { derivationPath } = await this.getWalletForAddress(options.address);
            const response = await TrezorConnect.ethereumSignTransaction({
                path: derivationPath,
                transaction,
            });
            if (!response.success) {
                throw new TrezorException(new Error((response.payload && response.payload.error) ||
                    'Something happened while signing with Trezor'), {
                    code: UnspecifiedErrorCode,
                    type: ErrorType.WalletError,
                    contextModule: WalletAction.SignEthereumTransaction,
                });
            }
            const signedTxData = {
                ...eip1559TxData,
                v: `${response.payload.v}`,
                r: `${response.payload.r}`,
                s: `${response.payload.s}`,
            };
            return FeeMarketEIP1559Transaction.fromTxData(signedTxData, {
                common,
            });
        }
        catch (e) {
            if (e instanceof TrezorException) {
                throw e;
            }
            throw new TrezorException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
                contextModule: WalletAction.SignEthereumTransaction,
            });
        }
    }
    async getWalletForAddress(address) {
        const accountManager = await this.trezor.getAccountManager();
        if (!accountManager.hasWalletForAddress(address)) {
            for (let i = 0; i < DEFAULT_ADDRESS_SEARCH_LIMIT / DEFAULT_NUM_ADDRESSES_TO_FETCH; i += 1) {
                await accountManager.getWallets();
                if (accountManager.hasWalletForAddress(address)) {
                    return (await accountManager.getWalletForAddress(address));
                }
            }
        }
        return (await accountManager.getWalletForAddress(address));
    }
    async getAlchemy() {
        if (this.alchemy) {
            return this.alchemy;
        }
        const { rpcUrl, ethereumChainId } = this.ethereumOptions;
        if (!rpcUrl) {
            throw new GeneralException(new Error('Please pass rpcUrl within the ethereumOptions'));
        }
        this.alchemy = new Alchemy({
            apiKey: getKeyFromRpcUrl(rpcUrl),
            network: ethereumChainId === EthereumChainId.Mainnet
                ? AlchemyNetwork.ETH_MAINNET
                : AlchemyNetwork.ETH_GOERLI,
        });
        return this.alchemy;
    }
}
//# sourceMappingURL=index.js.map