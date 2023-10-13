/* eslint-disable class-methods-use-this */
import { sleep } from '@injectivelabs/utils';
import { EthereumChainId, } from '@injectivelabs/ts-types';
import { ErrorType, MetamaskException, TransactionException, UnspecifiedErrorCode, WalletException, } from '@injectivelabs/exceptions';
import TorusWallet from '@toruslabs/torus-embed';
import { TxGrpcApi, toUtf8 } from '@injectivelabs/sdk-ts';
import BaseConcreteStrategy from './Base';
import { WalletAction, WalletDeviceType } from '../../../types/enums';
export const getNetworkFromChainId = (chainId) => {
    if (chainId === EthereumChainId.Goerli) {
        return {
            host: 'goerli',
            networkName: 'Goerli Test Network',
        };
    }
    if (chainId === EthereumChainId.Kovan) {
        return {
            host: 'kovan',
            networkName: 'Kovan Test Network',
        };
    }
    return {
        host: 'mainnet',
        networkName: 'Main Ethereum Network',
    };
};
export default class Torus extends BaseConcreteStrategy {
    torus;
    connected = false;
    constructor(args) {
        super(args);
        this.torus = new TorusWallet();
    }
    async getWalletDeviceType() {
        return Promise.resolve(WalletDeviceType.Browser);
    }
    async connect() {
        const { connected, torus, ethereumChainId } = this;
        if (connected) {
            return;
        }
        if (!ethereumChainId) {
            throw new WalletException(new Error('Please provide Ethereum chainId'));
        }
        await torus.init({
            buildEnv: 'production',
            network: {
                chainId: ethereumChainId,
                ...getNetworkFromChainId(ethereumChainId),
            },
            showTorusButton: false,
        });
        await this.torus.login();
        this.connected = true;
    }
    async getAddresses() {
        await this.connect();
        try {
            const accounts = await this.torus.ethereum.request({
                method: 'eth_requestAccounts',
            });
            return accounts && accounts.length > 0 ? accounts : [];
        }
        catch (e) {
            throw new MetamaskException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
                contextModule: WalletAction.GetAccounts,
            });
        }
    }
    // eslint-disable-next-line class-methods-use-this
    async confirm(address) {
        await this.connect();
        return Promise.resolve(`0x${Buffer.from(`Confirmation for ${address} at time: ${Date.now()}`).toString('hex')}`);
    }
    async sendEthereumTransaction(transaction, _options) {
        await this.connect();
        try {
            const response = await this.torus.ethereum.request({
                method: 'eth_sendTransaction',
                params: [transaction],
            });
            return response || '';
        }
        catch (e) {
            throw new MetamaskException(new Error(e.message), {
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
        await this.connect();
        try {
            const response = await this.torus.ethereum.request({
                method: 'eth_signTypedData_v4',
                params: [address, eip712json],
            });
            return response || '';
        }
        catch (e) {
            throw new MetamaskException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
                contextModule: WalletAction.SignTransaction,
            });
        }
    }
    async signArbitrary(signer, data) {
        await this.connect();
        try {
            const signature = await this.torus.ethereum.request({
                method: 'personal_sign',
                params: [toUtf8(data), signer],
            });
            if (!signature) {
                throw new WalletException(new Error('No signature returned'));
            }
            return signature;
        }
        catch (e) {
            throw new WalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
                contextModule: WalletAction.SignArbitrary,
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
    async getEthereumChainId() {
        await this.connect();
        try {
            const response = await this.torus.ethereum.request({
                method: 'eth_chainId',
            });
            return response || '';
        }
        catch (e) {
            throw new MetamaskException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
                contextModule: WalletAction.GetChainId,
            });
        }
    }
    async getEthereumTransactionReceipt(txHash) {
        await this.connect();
        const interval = 1000;
        const transactionReceiptRetry = async () => {
            const receipt = await this.torus.ethereum.request({
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
            throw new MetamaskException(new Error(e.message), {
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
}
//# sourceMappingURL=Torus.js.map