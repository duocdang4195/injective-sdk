/* eslint-disable class-methods-use-this */
import { CosmosChainId } from '@injectivelabs/ts-types';
import { ErrorType, UnspecifiedErrorCode, CosmosWalletException, TransactionException, } from '@injectivelabs/exceptions';
import { createTxRawFromSigResponse, createCosmosSignDocFromSignDoc, createSignDocFromTransaction, } from '@injectivelabs/sdk-ts';
import { LeapWallet } from '../../../utils/wallets/leap';
import { WalletAction, WalletDeviceType } from '../../../types/enums';
export default class Leap {
    chainId;
    leapWallet;
    constructor(args) {
        this.chainId = args.chainId || CosmosChainId.Injective;
        this.leapWallet = new LeapWallet(args.chainId);
    }
    async getWalletDeviceType() {
        return Promise.resolve(WalletDeviceType.Browser);
    }
    async isChainIdSupported(chainId) {
        const leapWallet = chainId ? new LeapWallet(chainId) : this.getLeapWallet();
        return leapWallet.checkChainIdSupport();
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
    async sendTransaction(transaction) {
        const { leapWallet } = this;
        const txRaw = createTxRawFromSigResponse(transaction);
        try {
            return await leapWallet.waitTxBroadcasted(await leapWallet.broadcastTx(txRaw));
        }
        catch (e) {
            throw new TransactionException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: WalletAction.SendTransaction,
            });
        }
    }
    async signTransaction(transaction) {
        const leapWallet = this.getLeapWallet();
        const signer = await leapWallet.getOfflineSigner();
        const signDoc = createSignDocFromTransaction(transaction);
        try {
            return signer.signDirect(transaction.address, createCosmosSignDocFromSignDoc(signDoc));
        }
        catch (e) {
            if (e instanceof TransactionException) {
                throw e;
            }
            throw new CosmosWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: WalletAction.SendTransaction,
            });
        }
    }
    async signAminoTransaction(_transaction) {
        throw new CosmosWalletException(new Error('signAminoTransaction not supported on Leap'));
    }
    async getPubKey() {
        const leapWallet = this.getLeapWallet();
        try {
            const key = await leapWallet.getKey();
            return Buffer.from(key.pubKey).toString('base64');
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: WalletAction.GetAccounts,
            });
        }
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