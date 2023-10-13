import { BroadcastMode } from '@cosmjs/launchpad';
import { SigningStargateClient } from '@cosmjs/stargate';
import { TxRestApi } from '@injectivelabs/sdk-ts';
import { ErrorType, CosmosWalletException, TransactionException, UnspecifiedErrorCode, WalletErrorActionModule, GeneralException, } from '@injectivelabs/exceptions';
import { getExperimentalChainConfigBasedOnChainId } from './utils';
import { getEndpointsFromChainId } from '../cosmos/endpoints';
import { CosmosTxV1Beta1Tx } from '@injectivelabs/sdk-ts';
const $window = (typeof window !== 'undefined' ? window : {});
export class KeplrWallet {
    chainId;
    endpoints;
    constructor(chainId, endpoints) {
        this.chainId = chainId;
        this.endpoints = endpoints || getEndpointsFromChainId(chainId);
    }
    static async experimentalSuggestChainWithChainData(chainData) {
        if (!$window || ($window && !$window.keplr)) {
            throw new CosmosWalletException(new Error('Please install Keplr extension'), { code: UnspecifiedErrorCode, type: ErrorType.WalletNotInstalledError });
        }
        try {
            await $window.keplr.experimentalSuggestChain(chainData);
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message));
        }
    }
    async getKeplrWallet() {
        const { chainId } = this;
        const keplr = this.getKeplr();
        try {
            await keplr.enable(chainId);
            return keplr;
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message));
        }
    }
    async experimentalSuggestChain() {
        const { chainId } = this;
        const keplr = this.getKeplr();
        const chainData = getExperimentalChainConfigBasedOnChainId(chainId);
        if (!chainData) {
            throw new CosmosWalletException(new Error(`Keplr doesn't support ${chainId} chainId. Please use another wallet`));
        }
        try {
            await keplr.experimentalSuggestChain(chainData);
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message));
        }
    }
    async getAccounts() {
        const { chainId } = this;
        const keplr = this.getKeplr();
        try {
            return keplr.getOfflineSigner(chainId).getAccounts();
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                context: WalletErrorActionModule.GetAccounts,
            });
        }
    }
    async getKey() {
        const keplr = await this.getKeplrWallet();
        try {
            return keplr.getKey(this.chainId);
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                context: 'Keplr',
            });
        }
    }
    async getOfflineSigner() {
        const { chainId } = this;
        const keplr = await this.getKeplrWallet();
        try {
            return keplr.getOfflineSigner(chainId);
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                context: 'Keplr',
            });
        }
    }
    async getOfflineAminoSigner() {
        const { chainId } = this;
        const keplr = await this.getKeplrWallet();
        try {
            return keplr.getOfflineSignerOnlyAmino(chainId);
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                context: 'Keplr',
            });
        }
    }
    /**
     * This method is used to broadcast a transaction to the network.
     * Since it uses the `Sync` mode, it will not wait for the transaction to be included in a block,
     * so we have to make sure the transaction is included in a block after its broadcasted
     *
     * @param txRaw - raw transaction to broadcast
     * @returns tx hash
     */
    async broadcastTx(txRaw) {
        const { chainId } = this;
        const keplr = await this.getKeplrWallet();
        try {
            const result = await keplr.sendTx(chainId, CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish(), BroadcastMode.Sync);
            if (!result || result.length === 0) {
                throw new TransactionException(new Error('Transaction failed to be broadcasted'), { context: 'Keplr' });
            }
            return Buffer.from(result).toString('hex');
        }
        catch (e) {
            if (e instanceof TransactionException) {
                throw e;
            }
            throw new CosmosWalletException(new Error(e.message), {
                context: 'Keplr',
                contextModule: 'broadcast-tx',
            });
        }
    }
    /**
     * This method is used to broadcast a transaction to the network.
     * Since it uses the `Block` mode, and it will wait for the transaction to be included in a block,
     *
     * @param txRaw - raw transaction to broadcast
     * @returns tx hash
     */
    async broadcastTxBlock(txRaw) {
        const { chainId } = this;
        const keplr = await this.getKeplrWallet();
        try {
            const result = await keplr.sendTx(chainId, CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish(), BroadcastMode.Block);
            if (!result || result.length === 0) {
                throw new TransactionException(new Error('Transaction failed to be broadcasted'), { context: 'Keplr' });
            }
            return Buffer.from(result).toString('hex');
        }
        catch (e) {
            if (e instanceof TransactionException) {
                throw e;
            }
            throw new CosmosWalletException(new Error(e.message), {
                context: 'Keplr',
                contextModule: 'broadcast-tx-block',
            });
        }
    }
    async waitTxBroadcasted(txHash, endpoint) {
        return new TxRestApi(endpoint || this.endpoints.rest).fetchTxPoll(txHash);
    }
    async signAndBroadcastAminoUsingCosmjs(messages, stdFee) {
        const { chainId, endpoints } = this;
        const keplr = await this.getKeplrWallet();
        if (!endpoints.rpc) {
            throw new GeneralException(new Error(`Please provide rpc endpoint`));
        }
        const offlineSigner = keplr.getOfflineSignerOnlyAmino(chainId);
        const [account] = await offlineSigner.getAccounts();
        const client = await SigningStargateClient.connectWithSigner(endpoints.rpc, offlineSigner);
        const txResponse = await client.signAndBroadcast(account.address, messages, stdFee);
        return txResponse;
    }
    async signEIP712CosmosTx({ eip712, signDoc, }) {
        const { chainId } = this;
        const keplr = await this.getKeplrWallet();
        const key = await this.getKey();
        try {
            return keplr.experimentalSignEIP712CosmosTx_v0(chainId, key.bech32Address, eip712, signDoc);
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                context: 'Keplr',
                contextModule: 'sign-eip712-cosmos-tx',
            });
        }
    }
    async checkChainIdSupport() {
        const { chainId } = this;
        const keplr = this.getKeplr();
        try {
            await keplr.getKey(chainId);
            // Chain exists already on Keplr
            return true;
        }
        catch (e) {
            return false;
        }
    }
    getKeplr() {
        if (!$window) {
            throw new CosmosWalletException(new Error('Please install Keplr extension'), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletNotInstalledError,
                context: 'Keplr',
            });
        }
        if (!$window.keplr) {
            throw new CosmosWalletException(new Error('Please install Keplr extension'), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletNotInstalledError,
                context: 'Keplr',
            });
        }
        return $window.keplr;
    }
    disableGasCheck() {
        const keplr = this.getKeplr();
        // Temporary disable tx gas check for fee delegation purposes
        keplr.defaultOptions = {
            ...keplr.defaultOptions,
            sign: {
                ...keplr.defaultOptions.sign,
                disableBalanceCheck: true,
            },
        };
    }
    enableGasCheck() {
        const keplr = this.getKeplr();
        // Temporary disable tx gas check for fee delegation purposes
        keplr.defaultOptions = {
            ...keplr.defaultOptions,
            sign: {
                ...keplr.defaultOptions.sign,
                disableBalanceCheck: false,
            },
        };
    }
}
//# sourceMappingURL=KeplrWallet.js.map