import { BroadcastMode } from '@cosmjs/launchpad';
import { TxRestApi } from '@injectivelabs/sdk-ts';
import { ErrorType, CosmosWalletException, TransactionException, UnspecifiedErrorCode, WalletErrorActionModule, } from '@injectivelabs/exceptions';
import { getEndpointsFromChainId } from '../cosmos/endpoints';
import { CosmosTxV1Beta1Tx } from '@injectivelabs/sdk-ts';
const $window = (typeof window !== 'undefined' ? window : {});
export class LeapWallet {
    chainId;
    endpoints;
    constructor(chainId, endpoints) {
        this.chainId = chainId;
        this.endpoints = endpoints || getEndpointsFromChainId(chainId);
    }
    async getLeapWallet() {
        const { chainId } = this;
        const leap = this.getLeap();
        try {
            await leap.enable(chainId);
            return leap;
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message));
        }
    }
    async getAccounts() {
        const { chainId } = this;
        const leap = this.getLeap();
        try {
            return leap.getOfflineSigner(chainId).getAccounts();
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                contextModule: WalletErrorActionModule.GetAccounts,
            });
        }
    }
    async getKey() {
        const leap = await this.getLeapWallet();
        try {
            return leap.getKey(this.chainId);
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                contextModule: 'Leap',
            });
        }
    }
    async getOfflineSigner() {
        const { chainId } = this;
        const leap = await this.getLeapWallet();
        try {
            return leap.getOfflineSigner(chainId);
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                contextModule: 'Leap',
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
        const leap = await this.getLeapWallet();
        try {
            const result = await leap.sendTx(chainId, CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish(), BroadcastMode.Sync);
            if (!result || result.length === 0) {
                throw new TransactionException(new Error('Transaction failed to be broadcasted'), { contextModule: 'Leap' });
            }
            return Buffer.from(result).toString('hex');
        }
        catch (e) {
            if (e instanceof TransactionException) {
                throw e;
            }
            throw new CosmosWalletException(new Error(e.message), {
                context: 'broadcast-tx',
                contextModule: 'Leap',
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
        const leap = await this.getLeapWallet();
        try {
            const result = await leap.sendTx(chainId, CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish(), BroadcastMode.Block);
            if (!result || result.length === 0) {
                throw new TransactionException(new Error('Transaction failed to be broadcasted'), { contextModule: 'Leap' });
            }
            return Buffer.from(result).toString('hex');
        }
        catch (e) {
            if (e instanceof TransactionException) {
                throw e;
            }
            throw new CosmosWalletException(new Error(e.message), {
                context: 'broadcast-tx',
                contextModule: 'Leap',
            });
        }
    }
    async waitTxBroadcasted(txHash, endpoint) {
        return new TxRestApi(endpoint || this.endpoints.rest).fetchTxPoll(txHash);
    }
    checkChainIdSupport = async () => {
        const { chainId } = this;
        const leap = this.getLeap();
        try {
            await leap.getKey(chainId);
            // Chain exists already on Leap
            return true;
        }
        catch (e) {
            return false;
        }
    };
    getLeap() {
        if (!$window) {
            throw new CosmosWalletException(new Error('Please install Leap extension'), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletNotInstalledError,
                contextModule: 'Leap',
            });
        }
        if (!$window.leap) {
            throw new CosmosWalletException(new Error('Please install Leap extension'), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletNotInstalledError,
                contextModule: 'Leap',
            });
        }
        return $window.leap;
    }
}
//# sourceMappingURL=LeapWallet.js.map