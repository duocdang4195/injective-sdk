/* eslint-disable class-methods-use-this */
import { CosmosChainId } from '@injectivelabs/ts-types';
import { createTxRawFromSigResponse, createCosmosSignDocFromSignDoc, createSignDocFromTransaction, } from '@injectivelabs/sdk-ts';
import { ErrorType, TransactionException, UnspecifiedErrorCode, CosmosWalletException, } from '@injectivelabs/exceptions';
import { KeplrWallet } from '../../../utils/wallets/keplr';
import { WalletAction, WalletDeviceType } from '../../../types/enums';
export default class Keplr {
    chainId;
    keplrWallet;
    constructor(args) {
        this.chainId = args.chainId || CosmosChainId.Injective;
        this.keplrWallet = new KeplrWallet(args.chainId);
    }
    async getWalletDeviceType() {
        const keplrWallet = this.getKeplrWallet();
        const key = await keplrWallet.getKey();
        return key.isNanoLedger
            ? Promise.resolve(WalletDeviceType.Hardware)
            : Promise.resolve(WalletDeviceType.Browser);
    }
    async isChainIdSupported(chainId) {
        const keplrWallet = chainId
            ? new KeplrWallet(chainId)
            : this.getKeplrWallet();
        return keplrWallet.checkChainIdSupport();
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
    async sendTransaction(transaction) {
        const { keplrWallet } = this;
        const txRaw = createTxRawFromSigResponse(transaction);
        try {
            return await keplrWallet.waitTxBroadcasted(await keplrWallet.broadcastTx(txRaw));
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
    async signTransaction(transaction) {
        const keplrWallet = this.getKeplrWallet();
        const signer = await keplrWallet.getOfflineSigner();
        const signDoc = createSignDocFromTransaction(transaction);
        try {
            return signer.signDirect(transaction.address, createCosmosSignDocFromSignDoc(signDoc));
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: WalletAction.SendTransaction,
            });
        }
    }
    async signAminoTransaction(transaction) {
        const keplrWallet = this.getKeplrWallet();
        const signer = await keplrWallet.getOfflineAminoSigner();
        const walletDeviceType = await this.getWalletDeviceType();
        if (walletDeviceType !== WalletDeviceType.Hardware) {
            throw new CosmosWalletException(new Error('signAminoTransaction is only supported when using Keplr + Ledger'), {
                code: UnspecifiedErrorCode,
                context: WalletAction.SignTransaction,
            });
        }
        try {
            return signer.signAmino(transaction.address, transaction.stdSignDoc);
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: WalletAction.SendTransaction,
            });
        }
    }
    async getPubKey() {
        const keplrWallet = this.getKeplrWallet();
        try {
            const key = await keplrWallet.getKey();
            return Buffer.from(key.pubKey).toString('base64');
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: WalletAction.GetAccounts,
            });
        }
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