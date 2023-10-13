import { Network } from '@injectivelabs/networks';
import { CosmosTxResponse, KeplrWalletResponse, TerraWalletResponse } from '../../types/cosmos';
import { IBCTransferTx, PeggyDepositTx, BridgingNetwork, PeggyTxResponse, PeggyWithdrawalTx, MoonbeamTxResponse, WormholeTxResponse, UiBridgeTransaction, BridgeTransactionState } from './../../types/bridge';
import { UserDeposit } from '@injectivelabs/sdk-ts';
export declare const convertCosmosWalletToUiBridgeTransaction: ({ transaction, network, }: {
    transaction: KeplrWalletResponse;
    network: Network;
}) => Promise<UiBridgeTransaction | undefined>;
export declare const convertPeggyToUiBridgeTransaction: ({ transaction, network, blockHeight, }: {
    transaction: PeggyTxResponse;
    network: Network;
    blockHeight?: number | undefined;
}) => Promise<UiBridgeTransaction>;
export declare const convertInjectiveIBCToUiBridgeTransaction: ({ transaction, network, }: {
    transaction: CosmosTxResponse;
    network: Network;
}) => Promise<UiBridgeTransaction>;
export declare const convertPeggoToUiBridgeTransaction: ({ transaction, network, }: {
    transaction: UserDeposit;
    network: Network;
}) => Promise<UiBridgeTransaction>;
export declare const convertTerraToUiBridgeTransaction: ({ transaction, network, }: {
    transaction: TerraWalletResponse;
    network: Network;
}) => Promise<{
    denom: string;
    sender: string;
    receiver: string;
    timeoutTimestamp: string;
    type: "axelar-axelar" | "axelar-canto" | "axelar-chihuahua" | "axelar-cosmosHub" | "axelar-cosmosHub-testnet" | "axelar-ethereum" | "axelar-ethereumWh" | "axelar-evmos" | "axelar-injective" | "axelar-juno" | "axelar-osmosis" | "axelar-Persistence" | "axelar-terra" | "axelar-moonbeam" | "axelar-secret" | "axelar-stride" | "axelar-crescent" | "axelar-solana" | "axelar-sommelier" | "axelar-arbitrum" | "axelar-polygon" | "axelar-klaytn" | "axelar-sui" | "axelar-kava" | "axelar-oraichain" | "canto-axelar" | "canto-canto" | "canto-chihuahua" | "canto-cosmosHub" | "canto-cosmosHub-testnet" | "canto-ethereum" | "canto-ethereumWh" | "canto-evmos" | "canto-injective" | "canto-juno" | "canto-osmosis" | "canto-Persistence" | "canto-terra" | "canto-moonbeam" | "canto-secret" | "canto-stride" | "canto-crescent" | "canto-solana" | "canto-sommelier" | "canto-arbitrum" | "canto-polygon" | "canto-klaytn" | "canto-sui" | "canto-kava" | "canto-oraichain" | "chihuahua-axelar" | "chihuahua-canto" | "chihuahua-chihuahua" | "chihuahua-cosmosHub" | "chihuahua-cosmosHub-testnet" | "chihuahua-ethereum" | "chihuahua-ethereumWh" | "chihuahua-evmos" | "chihuahua-injective" | "chihuahua-juno" | "chihuahua-osmosis" | "chihuahua-Persistence" | "chihuahua-terra" | "chihuahua-moonbeam" | "chihuahua-secret" | "chihuahua-stride" | "chihuahua-crescent" | "chihuahua-solana" | "chihuahua-sommelier" | "chihuahua-arbitrum" | "chihuahua-polygon" | "chihuahua-klaytn" | "chihuahua-sui" | "chihuahua-kava" | "chihuahua-oraichain" | "cosmosHub-axelar" | "cosmosHub-canto" | "cosmosHub-chihuahua" | "cosmosHub-cosmosHub" | "cosmosHub-cosmosHub-testnet" | "cosmosHub-ethereum" | "cosmosHub-ethereumWh" | "cosmosHub-evmos" | "cosmosHub-injective" | "cosmosHub-juno" | "cosmosHub-osmosis" | "cosmosHub-Persistence" | "cosmosHub-terra" | "cosmosHub-moonbeam" | "cosmosHub-secret" | "cosmosHub-stride" | "cosmosHub-crescent" | "cosmosHub-solana" | "cosmosHub-sommelier" | "cosmosHub-arbitrum" | "cosmosHub-polygon" | "cosmosHub-klaytn" | "cosmosHub-sui" | "cosmosHub-kava" | "cosmosHub-oraichain" | "cosmosHub-testnet-axelar" | "cosmosHub-testnet-canto" | "cosmosHub-testnet-chihuahua" | "cosmosHub-testnet-cosmosHub" | "cosmosHub-testnet-cosmosHub-testnet" | "cosmosHub-testnet-ethereum" | "cosmosHub-testnet-ethereumWh" | "cosmosHub-testnet-evmos" | "cosmosHub-testnet-injective" | "cosmosHub-testnet-juno" | "cosmosHub-testnet-osmosis" | "cosmosHub-testnet-Persistence" | "cosmosHub-testnet-terra" | "cosmosHub-testnet-moonbeam" | "cosmosHub-testnet-secret" | "cosmosHub-testnet-stride" | "cosmosHub-testnet-crescent" | "cosmosHub-testnet-solana" | "cosmosHub-testnet-sommelier" | "cosmosHub-testnet-arbitrum" | "cosmosHub-testnet-polygon" | "cosmosHub-testnet-klaytn" | "cosmosHub-testnet-sui" | "cosmosHub-testnet-kava" | "cosmosHub-testnet-oraichain" | "ethereum-axelar" | "ethereum-canto" | "ethereum-chihuahua" | "ethereum-cosmosHub" | "ethereum-cosmosHub-testnet" | "ethereum-ethereum" | "ethereum-ethereumWh" | "ethereum-evmos" | "ethereum-injective" | "ethereum-juno" | "ethereum-osmosis" | "ethereum-Persistence" | "ethereum-terra" | "ethereum-moonbeam" | "ethereum-secret" | "ethereum-stride" | "ethereum-crescent" | "ethereum-solana" | "ethereum-sommelier" | "ethereum-arbitrum" | "ethereum-polygon" | "ethereum-klaytn" | "ethereum-sui" | "ethereum-kava" | "ethereum-oraichain" | "ethereumWh-axelar" | "ethereumWh-canto" | "ethereumWh-chihuahua" | "ethereumWh-cosmosHub" | "ethereumWh-cosmosHub-testnet" | "ethereumWh-ethereum" | "ethereumWh-ethereumWh" | "ethereumWh-evmos" | "ethereumWh-injective" | "ethereumWh-juno" | "ethereumWh-osmosis" | "ethereumWh-Persistence" | "ethereumWh-terra" | "ethereumWh-moonbeam" | "ethereumWh-secret" | "ethereumWh-stride" | "ethereumWh-crescent" | "ethereumWh-solana" | "ethereumWh-sommelier" | "ethereumWh-arbitrum" | "ethereumWh-polygon" | "ethereumWh-klaytn" | "ethereumWh-sui" | "ethereumWh-kava" | "ethereumWh-oraichain" | "evmos-axelar" | "evmos-canto" | "evmos-chihuahua" | "evmos-cosmosHub" | "evmos-cosmosHub-testnet" | "evmos-ethereum" | "evmos-ethereumWh" | "evmos-evmos" | "evmos-injective" | "evmos-juno" | "evmos-osmosis" | "evmos-Persistence" | "evmos-terra" | "evmos-moonbeam" | "evmos-secret" | "evmos-stride" | "evmos-crescent" | "evmos-solana" | "evmos-sommelier" | "evmos-arbitrum" | "evmos-polygon" | "evmos-klaytn" | "evmos-sui" | "evmos-kava" | "evmos-oraichain" | "injective-axelar" | "injective-canto" | "injective-chihuahua" | "injective-cosmosHub" | "injective-cosmosHub-testnet" | "injective-ethereum" | "injective-ethereumWh" | "injective-evmos" | "injective-injective" | "injective-juno" | "injective-osmosis" | "injective-Persistence" | "injective-terra" | "injective-moonbeam" | "injective-secret" | "injective-stride" | "injective-crescent" | "injective-solana" | "injective-sommelier" | "injective-arbitrum" | "injective-polygon" | "injective-klaytn" | "injective-sui" | "injective-kava" | "injective-oraichain" | "juno-axelar" | "juno-canto" | "juno-chihuahua" | "juno-cosmosHub" | "juno-cosmosHub-testnet" | "juno-ethereum" | "juno-ethereumWh" | "juno-evmos" | "juno-injective" | "juno-juno" | "juno-osmosis" | "juno-Persistence" | "juno-terra" | "juno-moonbeam" | "juno-secret" | "juno-stride" | "juno-crescent" | "juno-solana" | "juno-sommelier" | "juno-arbitrum" | "juno-polygon" | "juno-klaytn" | "juno-sui" | "juno-kava" | "juno-oraichain" | "osmosis-axelar" | "osmosis-canto" | "osmosis-chihuahua" | "osmosis-cosmosHub" | "osmosis-cosmosHub-testnet" | "osmosis-ethereum" | "osmosis-ethereumWh" | "osmosis-evmos" | "osmosis-injective" | "osmosis-juno" | "osmosis-osmosis" | "osmosis-Persistence" | "osmosis-terra" | "osmosis-moonbeam" | "osmosis-secret" | "osmosis-stride" | "osmosis-crescent" | "osmosis-solana" | "osmosis-sommelier" | "osmosis-arbitrum" | "osmosis-polygon" | "osmosis-klaytn" | "osmosis-sui" | "osmosis-kava" | "osmosis-oraichain" | "Persistence-axelar" | "Persistence-canto" | "Persistence-chihuahua" | "Persistence-cosmosHub" | "Persistence-cosmosHub-testnet" | "Persistence-ethereum" | "Persistence-ethereumWh" | "Persistence-evmos" | "Persistence-injective" | "Persistence-juno" | "Persistence-osmosis" | "Persistence-Persistence" | "Persistence-terra" | "Persistence-moonbeam" | "Persistence-secret" | "Persistence-stride" | "Persistence-crescent" | "Persistence-solana" | "Persistence-sommelier" | "Persistence-arbitrum" | "Persistence-polygon" | "Persistence-klaytn" | "Persistence-sui" | "Persistence-kava" | "Persistence-oraichain" | "terra-axelar" | "terra-canto" | "terra-chihuahua" | "terra-cosmosHub" | "terra-cosmosHub-testnet" | "terra-ethereum" | "terra-ethereumWh" | "terra-evmos" | "terra-injective" | "terra-juno" | "terra-osmosis" | "terra-Persistence" | "terra-terra" | "terra-moonbeam" | "terra-secret" | "terra-stride" | "terra-crescent" | "terra-solana" | "terra-sommelier" | "terra-arbitrum" | "terra-polygon" | "terra-klaytn" | "terra-sui" | "terra-kava" | "terra-oraichain" | "moonbeam-axelar" | "moonbeam-canto" | "moonbeam-chihuahua" | "moonbeam-cosmosHub" | "moonbeam-cosmosHub-testnet" | "moonbeam-ethereum" | "moonbeam-ethereumWh" | "moonbeam-evmos" | "moonbeam-injective" | "moonbeam-juno" | "moonbeam-osmosis" | "moonbeam-Persistence" | "moonbeam-terra" | "moonbeam-moonbeam" | "moonbeam-secret" | "moonbeam-stride" | "moonbeam-crescent" | "moonbeam-solana" | "moonbeam-sommelier" | "moonbeam-arbitrum" | "moonbeam-polygon" | "moonbeam-klaytn" | "moonbeam-sui" | "moonbeam-kava" | "moonbeam-oraichain" | "secret-axelar" | "secret-canto" | "secret-chihuahua" | "secret-cosmosHub" | "secret-cosmosHub-testnet" | "secret-ethereum" | "secret-ethereumWh" | "secret-evmos" | "secret-injective" | "secret-juno" | "secret-osmosis" | "secret-Persistence" | "secret-terra" | "secret-moonbeam" | "secret-secret" | "secret-stride" | "secret-crescent" | "secret-solana" | "secret-sommelier" | "secret-arbitrum" | "secret-polygon" | "secret-klaytn" | "secret-sui" | "secret-kava" | "secret-oraichain" | "stride-axelar" | "stride-canto" | "stride-chihuahua" | "stride-cosmosHub" | "stride-cosmosHub-testnet" | "stride-ethereum" | "stride-ethereumWh" | "stride-evmos" | "stride-injective" | "stride-juno" | "stride-osmosis" | "stride-Persistence" | "stride-terra" | "stride-moonbeam" | "stride-secret" | "stride-stride" | "stride-crescent" | "stride-solana" | "stride-sommelier" | "stride-arbitrum" | "stride-polygon" | "stride-klaytn" | "stride-sui" | "stride-kava" | "stride-oraichain" | "crescent-axelar" | "crescent-canto" | "crescent-chihuahua" | "crescent-cosmosHub" | "crescent-cosmosHub-testnet" | "crescent-ethereum" | "crescent-ethereumWh" | "crescent-evmos" | "crescent-injective" | "crescent-juno" | "crescent-osmosis" | "crescent-Persistence" | "crescent-terra" | "crescent-moonbeam" | "crescent-secret" | "crescent-stride" | "crescent-crescent" | "crescent-solana" | "crescent-sommelier" | "crescent-arbitrum" | "crescent-polygon" | "crescent-klaytn" | "crescent-sui" | "crescent-kava" | "crescent-oraichain" | "solana-axelar" | "solana-canto" | "solana-chihuahua" | "solana-cosmosHub" | "solana-cosmosHub-testnet" | "solana-ethereum" | "solana-ethereumWh" | "solana-evmos" | "solana-injective" | "solana-juno" | "solana-osmosis" | "solana-Persistence" | "solana-terra" | "solana-moonbeam" | "solana-secret" | "solana-stride" | "solana-crescent" | "solana-solana" | "solana-sommelier" | "solana-arbitrum" | "solana-polygon" | "solana-klaytn" | "solana-sui" | "solana-kava" | "solana-oraichain" | "sommelier-axelar" | "sommelier-canto" | "sommelier-chihuahua" | "sommelier-cosmosHub" | "sommelier-cosmosHub-testnet" | "sommelier-ethereum" | "sommelier-ethereumWh" | "sommelier-evmos" | "sommelier-injective" | "sommelier-juno" | "sommelier-osmosis" | "sommelier-Persistence" | "sommelier-terra" | "sommelier-moonbeam" | "sommelier-secret" | "sommelier-stride" | "sommelier-crescent" | "sommelier-solana" | "sommelier-sommelier" | "sommelier-arbitrum" | "sommelier-polygon" | "sommelier-klaytn" | "sommelier-sui" | "sommelier-kava" | "sommelier-oraichain" | "arbitrum-axelar" | "arbitrum-canto" | "arbitrum-chihuahua" | "arbitrum-cosmosHub" | "arbitrum-cosmosHub-testnet" | "arbitrum-ethereum" | "arbitrum-ethereumWh" | "arbitrum-evmos" | "arbitrum-injective" | "arbitrum-juno" | "arbitrum-osmosis" | "arbitrum-Persistence" | "arbitrum-terra" | "arbitrum-moonbeam" | "arbitrum-secret" | "arbitrum-stride" | "arbitrum-crescent" | "arbitrum-solana" | "arbitrum-sommelier" | "arbitrum-arbitrum" | "arbitrum-polygon" | "arbitrum-klaytn" | "arbitrum-sui" | "arbitrum-kava" | "arbitrum-oraichain" | "polygon-axelar" | "polygon-canto" | "polygon-chihuahua" | "polygon-cosmosHub" | "polygon-cosmosHub-testnet" | "polygon-ethereum" | "polygon-ethereumWh" | "polygon-evmos" | "polygon-injective" | "polygon-juno" | "polygon-osmosis" | "polygon-Persistence" | "polygon-terra" | "polygon-moonbeam" | "polygon-secret" | "polygon-stride" | "polygon-crescent" | "polygon-solana" | "polygon-sommelier" | "polygon-arbitrum" | "polygon-polygon" | "polygon-klaytn" | "polygon-sui" | "polygon-kava" | "polygon-oraichain" | "klaytn-axelar" | "klaytn-canto" | "klaytn-chihuahua" | "klaytn-cosmosHub" | "klaytn-cosmosHub-testnet" | "klaytn-ethereum" | "klaytn-ethereumWh" | "klaytn-evmos" | "klaytn-injective" | "klaytn-juno" | "klaytn-osmosis" | "klaytn-Persistence" | "klaytn-terra" | "klaytn-moonbeam" | "klaytn-secret" | "klaytn-stride" | "klaytn-crescent" | "klaytn-solana" | "klaytn-sommelier" | "klaytn-arbitrum" | "klaytn-polygon" | "klaytn-klaytn" | "klaytn-sui" | "klaytn-kava" | "klaytn-oraichain" | "sui-axelar" | "sui-canto" | "sui-chihuahua" | "sui-cosmosHub" | "sui-cosmosHub-testnet" | "sui-ethereum" | "sui-ethereumWh" | "sui-evmos" | "sui-injective" | "sui-juno" | "sui-osmosis" | "sui-Persistence" | "sui-terra" | "sui-moonbeam" | "sui-secret" | "sui-stride" | "sui-crescent" | "sui-solana" | "sui-sommelier" | "sui-arbitrum" | "sui-polygon" | "sui-klaytn" | "sui-sui" | "sui-kava" | "sui-oraichain" | "kava-axelar" | "kava-canto" | "kava-chihuahua" | "kava-cosmosHub" | "kava-cosmosHub-testnet" | "kava-ethereum" | "kava-ethereumWh" | "kava-evmos" | "kava-injective" | "kava-juno" | "kava-osmosis" | "kava-Persistence" | "kava-terra" | "kava-moonbeam" | "kava-secret" | "kava-stride" | "kava-crescent" | "kava-solana" | "kava-sommelier" | "kava-arbitrum" | "kava-polygon" | "kava-klaytn" | "kava-sui" | "kava-kava" | "kava-oraichain" | "oraichain-axelar" | "oraichain-canto" | "oraichain-chihuahua" | "oraichain-cosmosHub" | "oraichain-cosmosHub-testnet" | "oraichain-ethereum" | "oraichain-ethereumWh" | "oraichain-evmos" | "oraichain-injective" | "oraichain-juno" | "oraichain-osmosis" | "oraichain-Persistence" | "oraichain-terra" | "oraichain-moonbeam" | "oraichain-secret" | "oraichain-stride" | "oraichain-crescent" | "oraichain-solana" | "oraichain-sommelier" | "oraichain-arbitrum" | "oraichain-polygon" | "oraichain-klaytn" | "oraichain-sui" | "oraichain-kava" | "oraichain-oraichain";
    amount: any;
    timestamp: number;
    state: BridgeTransactionState;
    txHash: string;
    explorerLink: string;
}>;
export declare const convertIBCTransferTxToUiBridgeTransaction: ({ transaction, network, }: {
    transaction: IBCTransferTx;
    network: Network;
}) => Promise<UiBridgeTransaction>;
export declare const convertPeggyDepositTxToUiBridgeTransaction: ({ transaction, network, }: {
    transaction: PeggyDepositTx;
    network: Network;
}) => Promise<UiBridgeTransaction>;
export declare const convertPeggyWithdrawalTxToUiBridgeTransaction: ({ transaction, network, }: {
    transaction: PeggyWithdrawalTx;
    network: Network;
}) => Promise<UiBridgeTransaction>;
export declare const convertMoonbeamToUiBridgeTransaction: (transaction: MoonbeamTxResponse) => Promise<UiBridgeTransaction>;
export declare const convertWormholeToUiBridgeTransaction: ({ transaction, network, }: {
    transaction: WormholeTxResponse;
    network: Network;
}) => Promise<UiBridgeTransaction>;
/**
 * @deprecated - way to abstract for usage
 */
export declare const computeLatestTransactions: ({ latestTransactions, peggoUserDeposits, ibcTransferBridgeTransactions, peggyDepositBridgeTransactions, peggyWithdrawalBridgeTransactions, }: {
    latestTransactions?: UiBridgeTransaction[] | undefined;
    peggoUserDeposits?: UiBridgeTransaction[] | undefined;
    ibcTransferBridgeTransactions?: UiBridgeTransaction[] | undefined;
    peggyDepositBridgeTransactions?: UiBridgeTransaction[] | undefined;
    peggyWithdrawalBridgeTransactions?: UiBridgeTransaction[] | undefined;
}) => UiBridgeTransaction[];
export declare class UiBridgeTransformer {
    private network;
    constructor(network: Network);
    static getNetworkFromAddress: (sender: string) => BridgingNetwork;
    static mergeAllTransactions: ({ latestTransactions, peggoUserDeposits, ibcTransferBridgeTransactions, peggyDepositBridgeTransactions, peggyWithdrawalBridgeTransactions, }: {
        latestTransactions?: UiBridgeTransaction[] | undefined;
        peggoUserDeposits?: UiBridgeTransaction[] | undefined;
        ibcTransferBridgeTransactions?: UiBridgeTransaction[] | undefined;
        peggyDepositBridgeTransactions?: UiBridgeTransaction[] | undefined;
        peggyWithdrawalBridgeTransactions?: UiBridgeTransaction[] | undefined;
    }) => UiBridgeTransaction[];
    /**
     * We use this method to update the
     * current transaction state based on
     * the transactions fetched from the API
     */
    static getLatestSelectedTransaction: ({ selectedTransaction, peggoUserDeposits, transactions, }: {
        selectedTransaction: UiBridgeTransaction;
        peggoUserDeposits: UiBridgeTransaction[];
        transactions: UiBridgeTransaction[];
    }) => UiBridgeTransaction;
    /**
     * BE returns 2 in progress transaction
     **/
    static removeDuplicatedTransactionByTxHash: (ibcTransferBridgeTransactions: UiBridgeTransaction[]) => UiBridgeTransaction[];
    /**
     * remove stuck in progress transactions
     **/
    static removeDuplicatedInProgressIbxTransfers: (ibcTransferBridgeTransactions: UiBridgeTransaction[]) => UiBridgeTransaction[];
    convertCosmosWalletToUiBridgeTransaction(transaction: KeplrWalletResponse): Promise<UiBridgeTransaction | undefined>;
    convertMoonbeamToUiBridgeTransaction(transaction: MoonbeamTxResponse): Promise<UiBridgeTransaction>;
    convertWormholeToUiBridgeTransaction(transaction: WormholeTxResponse): Promise<UiBridgeTransaction>;
    convertPeggyToUiBridgeTransaction(transaction: PeggyTxResponse, blockHeight?: number): Promise<UiBridgeTransaction>;
    convertInjectiveIBCToUiBridgeTransaction(transaction: CosmosTxResponse): Promise<UiBridgeTransaction>;
    convertPeggoToUiBridgeTransaction(transaction: UserDeposit): Promise<UiBridgeTransaction>;
    convertTerraToUiBridgeTransaction(transaction: TerraWalletResponse): Promise<{
        denom: string;
        sender: string;
        receiver: string;
        timeoutTimestamp: string;
        type: "axelar-axelar" | "axelar-canto" | "axelar-chihuahua" | "axelar-cosmosHub" | "axelar-cosmosHub-testnet" | "axelar-ethereum" | "axelar-ethereumWh" | "axelar-evmos" | "axelar-injective" | "axelar-juno" | "axelar-osmosis" | "axelar-Persistence" | "axelar-terra" | "axelar-moonbeam" | "axelar-secret" | "axelar-stride" | "axelar-crescent" | "axelar-solana" | "axelar-sommelier" | "axelar-arbitrum" | "axelar-polygon" | "axelar-klaytn" | "axelar-sui" | "axelar-kava" | "axelar-oraichain" | "canto-axelar" | "canto-canto" | "canto-chihuahua" | "canto-cosmosHub" | "canto-cosmosHub-testnet" | "canto-ethereum" | "canto-ethereumWh" | "canto-evmos" | "canto-injective" | "canto-juno" | "canto-osmosis" | "canto-Persistence" | "canto-terra" | "canto-moonbeam" | "canto-secret" | "canto-stride" | "canto-crescent" | "canto-solana" | "canto-sommelier" | "canto-arbitrum" | "canto-polygon" | "canto-klaytn" | "canto-sui" | "canto-kava" | "canto-oraichain" | "chihuahua-axelar" | "chihuahua-canto" | "chihuahua-chihuahua" | "chihuahua-cosmosHub" | "chihuahua-cosmosHub-testnet" | "chihuahua-ethereum" | "chihuahua-ethereumWh" | "chihuahua-evmos" | "chihuahua-injective" | "chihuahua-juno" | "chihuahua-osmosis" | "chihuahua-Persistence" | "chihuahua-terra" | "chihuahua-moonbeam" | "chihuahua-secret" | "chihuahua-stride" | "chihuahua-crescent" | "chihuahua-solana" | "chihuahua-sommelier" | "chihuahua-arbitrum" | "chihuahua-polygon" | "chihuahua-klaytn" | "chihuahua-sui" | "chihuahua-kava" | "chihuahua-oraichain" | "cosmosHub-axelar" | "cosmosHub-canto" | "cosmosHub-chihuahua" | "cosmosHub-cosmosHub" | "cosmosHub-cosmosHub-testnet" | "cosmosHub-ethereum" | "cosmosHub-ethereumWh" | "cosmosHub-evmos" | "cosmosHub-injective" | "cosmosHub-juno" | "cosmosHub-osmosis" | "cosmosHub-Persistence" | "cosmosHub-terra" | "cosmosHub-moonbeam" | "cosmosHub-secret" | "cosmosHub-stride" | "cosmosHub-crescent" | "cosmosHub-solana" | "cosmosHub-sommelier" | "cosmosHub-arbitrum" | "cosmosHub-polygon" | "cosmosHub-klaytn" | "cosmosHub-sui" | "cosmosHub-kava" | "cosmosHub-oraichain" | "cosmosHub-testnet-axelar" | "cosmosHub-testnet-canto" | "cosmosHub-testnet-chihuahua" | "cosmosHub-testnet-cosmosHub" | "cosmosHub-testnet-cosmosHub-testnet" | "cosmosHub-testnet-ethereum" | "cosmosHub-testnet-ethereumWh" | "cosmosHub-testnet-evmos" | "cosmosHub-testnet-injective" | "cosmosHub-testnet-juno" | "cosmosHub-testnet-osmosis" | "cosmosHub-testnet-Persistence" | "cosmosHub-testnet-terra" | "cosmosHub-testnet-moonbeam" | "cosmosHub-testnet-secret" | "cosmosHub-testnet-stride" | "cosmosHub-testnet-crescent" | "cosmosHub-testnet-solana" | "cosmosHub-testnet-sommelier" | "cosmosHub-testnet-arbitrum" | "cosmosHub-testnet-polygon" | "cosmosHub-testnet-klaytn" | "cosmosHub-testnet-sui" | "cosmosHub-testnet-kava" | "cosmosHub-testnet-oraichain" | "ethereum-axelar" | "ethereum-canto" | "ethereum-chihuahua" | "ethereum-cosmosHub" | "ethereum-cosmosHub-testnet" | "ethereum-ethereum" | "ethereum-ethereumWh" | "ethereum-evmos" | "ethereum-injective" | "ethereum-juno" | "ethereum-osmosis" | "ethereum-Persistence" | "ethereum-terra" | "ethereum-moonbeam" | "ethereum-secret" | "ethereum-stride" | "ethereum-crescent" | "ethereum-solana" | "ethereum-sommelier" | "ethereum-arbitrum" | "ethereum-polygon" | "ethereum-klaytn" | "ethereum-sui" | "ethereum-kava" | "ethereum-oraichain" | "ethereumWh-axelar" | "ethereumWh-canto" | "ethereumWh-chihuahua" | "ethereumWh-cosmosHub" | "ethereumWh-cosmosHub-testnet" | "ethereumWh-ethereum" | "ethereumWh-ethereumWh" | "ethereumWh-evmos" | "ethereumWh-injective" | "ethereumWh-juno" | "ethereumWh-osmosis" | "ethereumWh-Persistence" | "ethereumWh-terra" | "ethereumWh-moonbeam" | "ethereumWh-secret" | "ethereumWh-stride" | "ethereumWh-crescent" | "ethereumWh-solana" | "ethereumWh-sommelier" | "ethereumWh-arbitrum" | "ethereumWh-polygon" | "ethereumWh-klaytn" | "ethereumWh-sui" | "ethereumWh-kava" | "ethereumWh-oraichain" | "evmos-axelar" | "evmos-canto" | "evmos-chihuahua" | "evmos-cosmosHub" | "evmos-cosmosHub-testnet" | "evmos-ethereum" | "evmos-ethereumWh" | "evmos-evmos" | "evmos-injective" | "evmos-juno" | "evmos-osmosis" | "evmos-Persistence" | "evmos-terra" | "evmos-moonbeam" | "evmos-secret" | "evmos-stride" | "evmos-crescent" | "evmos-solana" | "evmos-sommelier" | "evmos-arbitrum" | "evmos-polygon" | "evmos-klaytn" | "evmos-sui" | "evmos-kava" | "evmos-oraichain" | "injective-axelar" | "injective-canto" | "injective-chihuahua" | "injective-cosmosHub" | "injective-cosmosHub-testnet" | "injective-ethereum" | "injective-ethereumWh" | "injective-evmos" | "injective-injective" | "injective-juno" | "injective-osmosis" | "injective-Persistence" | "injective-terra" | "injective-moonbeam" | "injective-secret" | "injective-stride" | "injective-crescent" | "injective-solana" | "injective-sommelier" | "injective-arbitrum" | "injective-polygon" | "injective-klaytn" | "injective-sui" | "injective-kava" | "injective-oraichain" | "juno-axelar" | "juno-canto" | "juno-chihuahua" | "juno-cosmosHub" | "juno-cosmosHub-testnet" | "juno-ethereum" | "juno-ethereumWh" | "juno-evmos" | "juno-injective" | "juno-juno" | "juno-osmosis" | "juno-Persistence" | "juno-terra" | "juno-moonbeam" | "juno-secret" | "juno-stride" | "juno-crescent" | "juno-solana" | "juno-sommelier" | "juno-arbitrum" | "juno-polygon" | "juno-klaytn" | "juno-sui" | "juno-kava" | "juno-oraichain" | "osmosis-axelar" | "osmosis-canto" | "osmosis-chihuahua" | "osmosis-cosmosHub" | "osmosis-cosmosHub-testnet" | "osmosis-ethereum" | "osmosis-ethereumWh" | "osmosis-evmos" | "osmosis-injective" | "osmosis-juno" | "osmosis-osmosis" | "osmosis-Persistence" | "osmosis-terra" | "osmosis-moonbeam" | "osmosis-secret" | "osmosis-stride" | "osmosis-crescent" | "osmosis-solana" | "osmosis-sommelier" | "osmosis-arbitrum" | "osmosis-polygon" | "osmosis-klaytn" | "osmosis-sui" | "osmosis-kava" | "osmosis-oraichain" | "Persistence-axelar" | "Persistence-canto" | "Persistence-chihuahua" | "Persistence-cosmosHub" | "Persistence-cosmosHub-testnet" | "Persistence-ethereum" | "Persistence-ethereumWh" | "Persistence-evmos" | "Persistence-injective" | "Persistence-juno" | "Persistence-osmosis" | "Persistence-Persistence" | "Persistence-terra" | "Persistence-moonbeam" | "Persistence-secret" | "Persistence-stride" | "Persistence-crescent" | "Persistence-solana" | "Persistence-sommelier" | "Persistence-arbitrum" | "Persistence-polygon" | "Persistence-klaytn" | "Persistence-sui" | "Persistence-kava" | "Persistence-oraichain" | "terra-axelar" | "terra-canto" | "terra-chihuahua" | "terra-cosmosHub" | "terra-cosmosHub-testnet" | "terra-ethereum" | "terra-ethereumWh" | "terra-evmos" | "terra-injective" | "terra-juno" | "terra-osmosis" | "terra-Persistence" | "terra-terra" | "terra-moonbeam" | "terra-secret" | "terra-stride" | "terra-crescent" | "terra-solana" | "terra-sommelier" | "terra-arbitrum" | "terra-polygon" | "terra-klaytn" | "terra-sui" | "terra-kava" | "terra-oraichain" | "moonbeam-axelar" | "moonbeam-canto" | "moonbeam-chihuahua" | "moonbeam-cosmosHub" | "moonbeam-cosmosHub-testnet" | "moonbeam-ethereum" | "moonbeam-ethereumWh" | "moonbeam-evmos" | "moonbeam-injective" | "moonbeam-juno" | "moonbeam-osmosis" | "moonbeam-Persistence" | "moonbeam-terra" | "moonbeam-moonbeam" | "moonbeam-secret" | "moonbeam-stride" | "moonbeam-crescent" | "moonbeam-solana" | "moonbeam-sommelier" | "moonbeam-arbitrum" | "moonbeam-polygon" | "moonbeam-klaytn" | "moonbeam-sui" | "moonbeam-kava" | "moonbeam-oraichain" | "secret-axelar" | "secret-canto" | "secret-chihuahua" | "secret-cosmosHub" | "secret-cosmosHub-testnet" | "secret-ethereum" | "secret-ethereumWh" | "secret-evmos" | "secret-injective" | "secret-juno" | "secret-osmosis" | "secret-Persistence" | "secret-terra" | "secret-moonbeam" | "secret-secret" | "secret-stride" | "secret-crescent" | "secret-solana" | "secret-sommelier" | "secret-arbitrum" | "secret-polygon" | "secret-klaytn" | "secret-sui" | "secret-kava" | "secret-oraichain" | "stride-axelar" | "stride-canto" | "stride-chihuahua" | "stride-cosmosHub" | "stride-cosmosHub-testnet" | "stride-ethereum" | "stride-ethereumWh" | "stride-evmos" | "stride-injective" | "stride-juno" | "stride-osmosis" | "stride-Persistence" | "stride-terra" | "stride-moonbeam" | "stride-secret" | "stride-stride" | "stride-crescent" | "stride-solana" | "stride-sommelier" | "stride-arbitrum" | "stride-polygon" | "stride-klaytn" | "stride-sui" | "stride-kava" | "stride-oraichain" | "crescent-axelar" | "crescent-canto" | "crescent-chihuahua" | "crescent-cosmosHub" | "crescent-cosmosHub-testnet" | "crescent-ethereum" | "crescent-ethereumWh" | "crescent-evmos" | "crescent-injective" | "crescent-juno" | "crescent-osmosis" | "crescent-Persistence" | "crescent-terra" | "crescent-moonbeam" | "crescent-secret" | "crescent-stride" | "crescent-crescent" | "crescent-solana" | "crescent-sommelier" | "crescent-arbitrum" | "crescent-polygon" | "crescent-klaytn" | "crescent-sui" | "crescent-kava" | "crescent-oraichain" | "solana-axelar" | "solana-canto" | "solana-chihuahua" | "solana-cosmosHub" | "solana-cosmosHub-testnet" | "solana-ethereum" | "solana-ethereumWh" | "solana-evmos" | "solana-injective" | "solana-juno" | "solana-osmosis" | "solana-Persistence" | "solana-terra" | "solana-moonbeam" | "solana-secret" | "solana-stride" | "solana-crescent" | "solana-solana" | "solana-sommelier" | "solana-arbitrum" | "solana-polygon" | "solana-klaytn" | "solana-sui" | "solana-kava" | "solana-oraichain" | "sommelier-axelar" | "sommelier-canto" | "sommelier-chihuahua" | "sommelier-cosmosHub" | "sommelier-cosmosHub-testnet" | "sommelier-ethereum" | "sommelier-ethereumWh" | "sommelier-evmos" | "sommelier-injective" | "sommelier-juno" | "sommelier-osmosis" | "sommelier-Persistence" | "sommelier-terra" | "sommelier-moonbeam" | "sommelier-secret" | "sommelier-stride" | "sommelier-crescent" | "sommelier-solana" | "sommelier-sommelier" | "sommelier-arbitrum" | "sommelier-polygon" | "sommelier-klaytn" | "sommelier-sui" | "sommelier-kava" | "sommelier-oraichain" | "arbitrum-axelar" | "arbitrum-canto" | "arbitrum-chihuahua" | "arbitrum-cosmosHub" | "arbitrum-cosmosHub-testnet" | "arbitrum-ethereum" | "arbitrum-ethereumWh" | "arbitrum-evmos" | "arbitrum-injective" | "arbitrum-juno" | "arbitrum-osmosis" | "arbitrum-Persistence" | "arbitrum-terra" | "arbitrum-moonbeam" | "arbitrum-secret" | "arbitrum-stride" | "arbitrum-crescent" | "arbitrum-solana" | "arbitrum-sommelier" | "arbitrum-arbitrum" | "arbitrum-polygon" | "arbitrum-klaytn" | "arbitrum-sui" | "arbitrum-kava" | "arbitrum-oraichain" | "polygon-axelar" | "polygon-canto" | "polygon-chihuahua" | "polygon-cosmosHub" | "polygon-cosmosHub-testnet" | "polygon-ethereum" | "polygon-ethereumWh" | "polygon-evmos" | "polygon-injective" | "polygon-juno" | "polygon-osmosis" | "polygon-Persistence" | "polygon-terra" | "polygon-moonbeam" | "polygon-secret" | "polygon-stride" | "polygon-crescent" | "polygon-solana" | "polygon-sommelier" | "polygon-arbitrum" | "polygon-polygon" | "polygon-klaytn" | "polygon-sui" | "polygon-kava" | "polygon-oraichain" | "klaytn-axelar" | "klaytn-canto" | "klaytn-chihuahua" | "klaytn-cosmosHub" | "klaytn-cosmosHub-testnet" | "klaytn-ethereum" | "klaytn-ethereumWh" | "klaytn-evmos" | "klaytn-injective" | "klaytn-juno" | "klaytn-osmosis" | "klaytn-Persistence" | "klaytn-terra" | "klaytn-moonbeam" | "klaytn-secret" | "klaytn-stride" | "klaytn-crescent" | "klaytn-solana" | "klaytn-sommelier" | "klaytn-arbitrum" | "klaytn-polygon" | "klaytn-klaytn" | "klaytn-sui" | "klaytn-kava" | "klaytn-oraichain" | "sui-axelar" | "sui-canto" | "sui-chihuahua" | "sui-cosmosHub" | "sui-cosmosHub-testnet" | "sui-ethereum" | "sui-ethereumWh" | "sui-evmos" | "sui-injective" | "sui-juno" | "sui-osmosis" | "sui-Persistence" | "sui-terra" | "sui-moonbeam" | "sui-secret" | "sui-stride" | "sui-crescent" | "sui-solana" | "sui-sommelier" | "sui-arbitrum" | "sui-polygon" | "sui-klaytn" | "sui-sui" | "sui-kava" | "sui-oraichain" | "kava-axelar" | "kava-canto" | "kava-chihuahua" | "kava-cosmosHub" | "kava-cosmosHub-testnet" | "kava-ethereum" | "kava-ethereumWh" | "kava-evmos" | "kava-injective" | "kava-juno" | "kava-osmosis" | "kava-Persistence" | "kava-terra" | "kava-moonbeam" | "kava-secret" | "kava-stride" | "kava-crescent" | "kava-solana" | "kava-sommelier" | "kava-arbitrum" | "kava-polygon" | "kava-klaytn" | "kava-sui" | "kava-kava" | "kava-oraichain" | "oraichain-axelar" | "oraichain-canto" | "oraichain-chihuahua" | "oraichain-cosmosHub" | "oraichain-cosmosHub-testnet" | "oraichain-ethereum" | "oraichain-ethereumWh" | "oraichain-evmos" | "oraichain-injective" | "oraichain-juno" | "oraichain-osmosis" | "oraichain-Persistence" | "oraichain-terra" | "oraichain-moonbeam" | "oraichain-secret" | "oraichain-stride" | "oraichain-crescent" | "oraichain-solana" | "oraichain-sommelier" | "oraichain-arbitrum" | "oraichain-polygon" | "oraichain-klaytn" | "oraichain-sui" | "oraichain-kava" | "oraichain-oraichain";
        amount: any;
        timestamp: number;
        state: BridgeTransactionState;
        txHash: string;
        explorerLink: string;
    }>;
    convertIBCTransferTxToUiBridgeTransaction(transaction: IBCTransferTx): Promise<UiBridgeTransaction>;
    convertPeggyDepositTxToUiBridgeTransaction(transaction: PeggyDepositTx): Promise<UiBridgeTransaction>;
    convertPeggyWithdrawalTxToUiBridgeTransaction(transaction: PeggyWithdrawalTx): Promise<UiBridgeTransaction>;
}
//# sourceMappingURL=UiBridgeTransformer.d.ts.map