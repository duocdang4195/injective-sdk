/* eslint-disable class-methods-use-this */
import { EthereumChainId, } from '@injectivelabs/ts-types';
import { bufferToHex, addHexPrefix } from 'ethereumjs-util';
import { Common, Chain, Hardfork } from '@ethereumjs/common';
import { FeeMarketEIP1559Transaction } from '@ethereumjs/tx';
import { ErrorType, GeneralException, LedgerException, TransactionException, UnspecifiedErrorCode, WalletException, } from '@injectivelabs/exceptions';
import { TxGrpcApi, toUtf8 } from '@injectivelabs/sdk-ts';
import { TIP_IN_GWEI } from '../../../../utils/constants';
import BaseConcreteStrategy from '../Base';
import { DEFAULT_BASE_DERIVATION_PATH, DEFAULT_ADDRESS_SEARCH_LIMIT, DEFAULT_NUM_ADDRESSES_TO_FETCH, } from '../../constants';
import LedgerHW from './hw';
import { domainHash, messageHash } from './utils';
import { WalletAction, WalletDeviceType } from '../../../../types/enums';
import { getKeyFromRpcUrl } from '../../../../utils/alchemy';
import { Alchemy, Network as AlchemyNetwork } from 'alchemy-sdk';
const getNetworkFromChainId = (chainId) => {
    if (chainId === EthereumChainId.Goerli) {
        return Chain.Goerli;
    }
    if (chainId === EthereumChainId.Kovan) {
        return Chain.Goerli;
    }
    return Chain.Mainnet;
};
export default class LedgerBase extends BaseConcreteStrategy {
    baseDerivationPath;
    derivationPathType;
    ledger;
    ethereumOptions;
    alchemy;
    constructor(args) {
        super(args);
        this.baseDerivationPath = DEFAULT_BASE_DERIVATION_PATH;
        this.derivationPathType = args.derivationPathType;
        this.ledger = new LedgerHW();
        this.ethereumOptions = args.ethereumOptions;
    }
    async getWalletDeviceType() {
        return Promise.resolve(WalletDeviceType.Hardware);
    }
    async getAddresses() {
        const { baseDerivationPath, derivationPathType } = this;
        try {
            const accountManager = await this.ledger.getAccountManager();
            const wallets = await accountManager.getWallets(baseDerivationPath, derivationPathType);
            return wallets.map((k) => k.address);
        }
        catch (e) {
            throw new LedgerException(new Error(e.message), {
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
            throw new LedgerException(new Error(e.message), {
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
        const { derivationPath } = await this.getWalletForAddress(address);
        const object = JSON.parse(eip712json);
        try {
            const ledger = await this.ledger.getInstance();
            const result = await ledger.signEIP712HashedMessage(derivationPath, bufferToHex(domainHash(object)), bufferToHex(messageHash(object)));
            const combined = `${result.r}${result.s}${result.v.toString(16)}`;
            return combined.startsWith('0x') ? combined : `0x${combined}`;
        }
        catch (e) {
            throw new LedgerException(new Error(e.message), {
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
            const { derivationPath } = await this.getWalletForAddress(signer);
            const ledger = await this.ledger.getInstance();
            const result = await ledger.signPersonalMessage(derivationPath, Buffer.from(toUtf8(data), 'utf8').toString('hex'));
            const combined = `${result.r}${result.s}${result.v.toString(16)}`;
            return combined.startsWith('0x') ? combined : `0x${combined}`;
        }
        catch (e) {
            throw new LedgerException(new Error(e.message), {
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
        const alchemy = await this.getAlchemy();
        const chainId = parseInt(options.ethereumChainId.toString(), 10);
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
        const tx = FeeMarketEIP1559Transaction.fromTxData(eip1559TxData, { common });
        const msg = tx.getMessageToSign(false);
        // const encodedMessage = msg
        const encodedMessageHex = msg.toString('hex');
        try {
            const ledger = await this.ledger.getInstance();
            const { derivationPath } = await this.getWalletForAddress(options.address);
            const ledgerService = await import('@ledgerhq/hw-app-eth/lib/services/ledger');
            const resolution = await ledgerService.default.resolveTransaction(encodedMessageHex, {}, {});
            const txSig = await ledger.signTransaction(derivationPath, encodedMessageHex, resolution);
            const signedTxData = {
                ...eip1559TxData,
                v: `0x${txSig.v}`,
                r: `0x${txSig.r}`,
                s: `0x${txSig.s}`,
            };
            return FeeMarketEIP1559Transaction.fromTxData(signedTxData, {
                common,
            });
        }
        catch (e) {
            throw new LedgerException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
                contextModule: WalletAction.SignEthereumTransaction,
            });
        }
    }
    async getWalletForAddress(address) {
        const { baseDerivationPath, derivationPathType } = this;
        const accountManager = await this.ledger.getAccountManager();
        if (!accountManager.hasWalletForAddress(address)) {
            for (let i = 0; i < DEFAULT_ADDRESS_SEARCH_LIMIT / DEFAULT_NUM_ADDRESSES_TO_FETCH; i += 1) {
                await accountManager.getWallets(baseDerivationPath, derivationPathType);
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
//# sourceMappingURL=Base.js.map