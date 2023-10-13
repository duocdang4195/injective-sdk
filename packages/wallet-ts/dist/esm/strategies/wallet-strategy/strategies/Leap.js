/* eslint-disable class-methods-use-this */
import { CosmosChainId, } from '@injectivelabs/ts-types';
import { ErrorType, UnspecifiedErrorCode, CosmosWalletException, TransactionException, } from '@injectivelabs/exceptions';
import { createTxRawFromSigResponse, createCosmosSignDocFromSignDoc, createSignDocFromTransaction, } from '@injectivelabs/sdk-ts';
import { LeapWallet } from '../../../utils/wallets/leap';
import BaseConcreteStrategy from './Base';
import { WalletAction, WalletDeviceType } from '../../../types/enums';
export default class Leap extends BaseConcreteStrategy {
    leapWallet;
    constructor(args) {
        super(args);
        this.chainId = args.chainId || CosmosChainId.Injective;
        this.leapWallet = new LeapWallet(args.chainId, args.endpoints);
    }
    async getWalletDeviceType() {
        return Promise.resolve(WalletDeviceType.Browser);
    }
    async getAddresses() {
        const { chainId } = this;
        const leapWallet = this.getLeapWallet();
        try {
            if (!(await leapWallet.checkChainIdSupport())) {
                throw new CosmosWalletException(new Error(`The ${chainId} is not supported on Leap.`), { type: ErrorType.WalletError });
            }
            const accounts = await leapWallet.getAccounts();
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
        throw new CosmosWalletException(new Error('sendEthereumTransaction is not supported. Leap only supports sending cosmos transactions'), {
            code: UnspecifiedErrorCode,
            context: WalletAction.SendEthereumTransaction,
        });
    }
    async sendTransaction(transaction, options) {
        const { leapWallet } = this;
        const txRaw = createTxRawFromSigResponse(transaction);
        try {
            return await leapWallet.waitTxBroadcasted(await leapWallet.broadcastTx(txRaw), options.endpoints?.rest);
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
        const leapWallet = this.getLeapWallet();
        const signer = await leapWallet.getOfflineSigner();
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
    async signArbitrary(signer, data) {
        const leapWallet = this.getLeapWallet();
        const leap = await leapWallet.getLeapWallet();
        try {
            const signature = await leap.signArbitrary(this.chainId, signer, data);
            return signature.signature;
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: WalletAction.SignArbitrary,
            });
        }
    }
    async signEip712TypedData(_eip712TypedData, _address) {
        throw new CosmosWalletException(new Error('This wallet does not support signing Ethereum transactions'), {
            code: UnspecifiedErrorCode,
            context: WalletAction.SendTransaction,
        });
    }
    async getEthereumChainId() {
        throw new CosmosWalletException(new Error('getEthereumChainId is not supported on Leap'), {
            code: UnspecifiedErrorCode,
            context: WalletAction.GetChainId,
        });
    }
    async getEthereumTransactionReceipt(_txHash) {
        throw new CosmosWalletException(new Error('getEthereumTransactionReceipt is not supported on Leap'), {
            code: UnspecifiedErrorCode,
            context: WalletAction.GetEthereumTransactionReceipt,
        });
    }
    async getPubKey() {
        const keplrWallet = this.getLeapWallet();
        const key = await keplrWallet.getKey();
        return Buffer.from(key.pubKey).toString('base64');
    }
    getLeapWallet() {
        const { leapWallet } = this;
        if (!leapWallet) {
            throw new CosmosWalletException(new Error('Please install the Leap wallet extension'), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletNotInstalledError,
                context: WalletAction.SignTransaction,
            });
        }
        return leapWallet;
    }
}
//# sourceMappingURL=Leap.js.map