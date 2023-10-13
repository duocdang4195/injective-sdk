import { NetworkEndpoints } from '@injectivelabs/networks';
import { ChainId, EthereumChainId } from '@injectivelabs/ts-types';
import { MsgBroadcasterOptions, MsgBroadcasterTxOptions } from './types';
/**
 * This class is used to broadcast transactions
 * using the WalletStrategy as a handler
 * for the sign/broadcast flow of the transactions
 *
 * Mainly used for building UI products
 */
export declare class MsgBroadcaster {
    options: MsgBroadcasterOptions;
    endpoints: NetworkEndpoints;
    chainId: ChainId;
    ethereumChainId?: EthereumChainId;
    constructor(options: MsgBroadcasterOptions);
    /**
     * Broadcasting the transaction using the client
     * side approach for both cosmos and ethereum native wallets
     *
     * @param tx
     * @returns {string} transaction hash
     */
    broadcast(tx: MsgBroadcasterTxOptions): Promise<import("@injectivelabs/sdk-ts").TxResponse>;
    /**
     * Broadcasting the transaction using the client
     * side approach for cosmos native wallets
     * and feeDelegation support approach for ethereum native
     * wallets (default one)
     *
     * @param tx
     * @returns {string} transaction hash
     * @deprecated
     */
    broadcastOld(tx: MsgBroadcasterTxOptions): Promise<import("@injectivelabs/sdk-ts").TxResponse>;
    /**
     * Broadcasting the transaction using the feeDelegation
     * support approach for both cosmos and ethereum native wallets
     *
     * @param tx
     * @returns {string} transaction hash
     */
    broadcastWithFeeDelegation(tx: MsgBroadcasterTxOptions): Promise<import("@injectivelabs/sdk-ts").TxResponse>;
    /**
     * Prepare/sign/broadcast transaction using
     * Ethereum native wallets on the client side.
     *
     * Note: Gas estimation not available
     *
     * @param tx The transaction that needs to be broadcasted
     * @returns transaction hash
     */
    private broadcastWeb3;
    /**
     * Prepare/sign/broadcast transaction using
     * Ethereum native wallets using the Web3Gateway.
     *
     * @param tx The transaction that needs to be broadcasted
     * @returns transaction hash
     */
    private broadcastWeb3WithFeeDelegation;
    /**
     * Prepare/sign/broadcast transaction using
     * Cosmos native wallets on the client side.
     *
     * @param tx The transaction that needs to be broadcasted
     * @returns transaction hash
     */
    private broadcastCosmos;
    /**
     * We use this method only when we want to broadcast a transaction using Ledger on Keplr for Injective
     *
     * Note: Gas estimation not available
     * @param tx the transaction that needs to be broadcasted
     */
    private experimentalBroadcastKeplrWithLedger;
    /**
     * Prepare/sign/broadcast transaction using
     * Cosmos native wallets using the Web3Gateway.
     *
     * @param tx The transaction that needs to be broadcasted
     * @returns transaction hash
     */
    private broadcastCosmosWithFeeDelegation;
    /**
     * Fetch the fee payer's pub key from the web3 gateway
     *
     * Returns a base64 version of it
     */
    private fetchFeePayerPubKey;
    /**
     * In case we don't want to simulate the transaction
     * we get the gas limit based on the message type.
     *
     * If we want to simulate the transaction we set the
     * gas limit based on the simulation and add a small multiplier
     * to be safe (factor of 1.2)
     */
    private getTxWithSignersAndStdFee;
    /**
     * Create TxRaw and simulate it
     */
    private simulateTxRaw;
    /**
     * Create TxRaw and simulate it
     */
    private simulateTxWithSigners;
}
//# sourceMappingURL=MsgBroadcaster.d.ts.map