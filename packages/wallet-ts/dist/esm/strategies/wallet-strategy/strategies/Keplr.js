/* eslint-disable class-methods-use-this */
import { CosmosChainId, } from '@injectivelabs/ts-types';
import { createTxRawFromSigResponse, createCosmosSignDocFromSignDoc, createSignDocFromTransaction, } from '@injectivelabs/sdk-ts';
import { ErrorType, TransactionException, UnspecifiedErrorCode, CosmosWalletException, } from '@injectivelabs/exceptions';
import { KeplrWallet } from '../../../utils/wallets/keplr';
import BaseConcreteStrategy from './Base';
import { WalletAction, WalletDeviceType } from '../../../types/enums';
export default class Keplr extends BaseConcreteStrategy {
    keplrWallet;
    constructor(args) {
        super(args);
        this.chainId = args.chainId || CosmosChainId.Injective;
        this.keplrWallet = new KeplrWallet(args.chainId, args.endpoints);
    }
    async getWalletDeviceType() {
        const keplrWallet = this.getKeplrWallet();
        const key = await keplrWallet.getKey();
        return key.isNanoLedger
            ? Promise.resolve(WalletDeviceType.Hardware)
            : Promise.resolve(WalletDeviceType.Browser);
    }
    async getAddresses() {
        const keplrWallet = this.getKeplrWallet();
        try {
            if (!(await keplrWallet.checkChainIdSupport())) {
                await keplrWallet.experimentalSuggestChain();
            }
            const accounts = await keplrWallet.getAccounts();
            return accounts.map((account) => account.address);
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: WalletAction.GetAccounts,
            });
        }
    }
    async confirm(address) {
        return Promise.resolve(`0x${Buffer.from(`Confirmation for ${address} at time: ${Date.now()}`).toString('hex')}`);
    }
    // eslint-disable-next-line class-methods-use-this
    async sendEthereumTransaction(_transaction, _options) {
        throw new CosmosWalletException(new Error('sendEthereumTransaction is not supported. Keplr only supports sending cosmos transactions'), {
            code: UnspecifiedErrorCode,
            context: WalletAction.SendEthereumTransaction,
        });
    }
    async sendTransaction(transaction, options) {
        const { keplrWallet } = this;
        const txRaw = createTxRawFromSigResponse(transaction);
        try {
            return await keplrWallet.waitTxBroadcasted(await keplrWallet.broadcastTx(txRaw), options.endpoints?.rest);
        }
        catch (e) {
            if (e instanceof TransactionException) {
                throw e;
            }
            throw new TransactionException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: WalletAction.SendTransaction,
            });
        }
    }
    /** @deprecated */
    async signTransaction(transaction, injectiveAddress) {
        return this.signCosmosTransaction({
            ...transaction,
            address: injectiveAddress,
        });
    }
    async signCosmosTransaction(transaction) {
        const keplrWallet = this.getKeplrWallet();
        const signer = await keplrWallet.getOfflineSigner();
        const signDoc = createSignDocFromTransaction(transaction);
        try {
            return await signer.signDirect(transaction.address, createCosmosSignDocFromSignDoc(signDoc));
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: WalletAction.SendTransaction,
            });
        }
    }
    async signEip712TypedData(_transaction, _address) {
        throw new CosmosWalletException(new Error('This wallet does not support signing Ethereum transactions'), {
            code: UnspecifiedErrorCode,
            context: WalletAction.SendTransaction,
        });
    }
    async signArbitrary(signer, data) {
        const keplrWallet = this.getKeplrWallet();
        const keplr = await keplrWallet.getKeplrWallet();
        try {
            const signature = await keplr.signArbitrary(this.chainId, signer, data);
            return signature.signature;
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: WalletAction.SignArbitrary,
            });
        }
    }
    async getEthereumChainId() {
        throw new CosmosWalletException(new Error('getEthereumChainId is not supported on Keplr'), {
            code: UnspecifiedErrorCode,
            context: WalletAction.GetChainId,
        });
    }
    async getEthereumTransactionReceipt(_txHash) {
        throw new CosmosWalletException(new Error('getEthereumTransactionReceipt is not supported on Keplr'), {
            code: UnspecifiedErrorCode,
            context: WalletAction.GetEthereumTransactionReceipt,
        });
    }
    async getPubKey() {
        const keplrWallet = this.getKeplrWallet();
        const key = await keplrWallet.getKey();
        return Buffer.from(key.pubKey).toString('base64');
    }
    getKeplrWallet() {
        const { keplrWallet } = this;
        if (!keplrWallet) {
            throw new CosmosWalletException(new Error('Please install the Keplr wallet extension'), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletNotInstalledError,
                context: WalletAction.SignTransaction,
            });
        }
        return keplrWallet;
    }
}
//# sourceMappingURL=Keplr.js.map