/* eslint-disable class-methods-use-this */
import { sleep } from '@injectivelabs/utils';
import { ErrorType, WalletException, TrustWalletException, UnspecifiedErrorCode, TransactionException, } from '@injectivelabs/exceptions';
import { toUtf8, TxGrpcApi } from '@injectivelabs/sdk-ts';
import BaseConcreteStrategy from './../Base';
import { WalletAction, WalletDeviceType } from '../../../../types/enums';
import { getTrustWalletProvider } from './utils';
export default class TrustWallet extends BaseConcreteStrategy {
    constructor(args) {
        super(args);
    }
    async getWalletDeviceType() {
        return Promise.resolve(WalletDeviceType.Browser);
    }
    async getAddresses() {
        const ethereum = await this.getEthereum();
        try {
            return await ethereum.request({
                method: 'eth_requestAccounts',
            });
        }
        catch (e) {
            throw new TrustWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
                contextModule: WalletAction.GetAccounts,
            });
        }
    }
    // eslint-disable-next-line class-methods-use-this
    async confirm(address) {
        return Promise.resolve(`0x${Buffer.from(`Confirmation for ${address} at time: ${Date.now()}`).toString('hex')}`);
    }
    async sendEthereumTransaction(transaction, _options) {
        const ethereum = await this.getEthereum();
        try {
            return await ethereum.request({
                method: 'eth_sendTransaction',
                params: [transaction],
            });
        }
        catch (e) {
            throw new TrustWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
                contextModule: WalletAction.SendEthereumTransaction,
            });
        }
    }
    async sendTransaction(transaction, options) {
        const { endpoints } = options;
        if (!endpoints) {
            throw new WalletException(new Error('You have to pass endpoints within the options for using Ethereum native wallets'));
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
        const ethereum = await this.getEthereum();
        try {
            return await ethereum.request({
                method: 'eth_signTypedData_v4',
                params: [address, eip712json],
            });
        }
        catch (e) {
            throw new TrustWalletException(new Error(e.message), {
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
        const ethereum = await this.getEthereum();
        try {
            const signature = await ethereum.request({
                method: 'personal_sign',
                params: [toUtf8(data), signer],
            });
            return signature;
        }
        catch (e) {
            throw new TrustWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
                contextModule: WalletAction.SignArbitrary,
            });
        }
    }
    async getEthereumChainId() {
        const ethereum = await this.getEthereum();
        try {
            return ethereum.request({ method: 'eth_chainId' });
        }
        catch (e) {
            throw new TrustWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
                contextModule: WalletAction.GetChainId,
            });
        }
    }
    async getEthereumTransactionReceipt(txHash) {
        const ethereum = await this.getEthereum();
        const interval = 1000;
        const transactionReceiptRetry = async () => {
            const receipt = await ethereum.request({
                method: 'eth_getTransactionReceipt',
                params: [txHash],
            });
            if (!receipt) {
                await sleep(interval);
                await transactionReceiptRetry();
            }
            return receipt;
        };
        try {
            return await transactionReceiptRetry();
        }
        catch (e) {
            throw new TrustWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
                contextModule: WalletAction.GetEthereumTransactionReceipt,
            });
        }
    }
    // eslint-disable-next-line class-methods-use-this
    async getPubKey() {
        throw new WalletException(new Error('You can only fetch PubKey from Cosmos native wallets'));
    }
    onChainIdChanged(_callback) {
        //
    }
    onAccountChange(_callback) {
        //
    }
    cancelOnChainIdChange() {
        //
    }
    cancelOnAccountChange() {
        //
    }
    cancelAllEvents() {
        //
    }
    async getEthereum() {
        const provider = await getTrustWalletProvider();
        if (!provider) {
            throw new TrustWalletException(new Error('Please install the TrustWallet wallet extension.'), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletNotInstalledError,
                contextModule: WalletAction.GetAccounts,
            });
        }
        return provider;
    }
}
//# sourceMappingURL=index.js.map