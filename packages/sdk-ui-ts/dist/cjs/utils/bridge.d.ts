import { NetworkConfig, BridgeTransactionState, BridgingNetwork } from './../types/bridge';
import { Network } from '@injectivelabs/networks';
import { UiBridgeTransaction } from './../types/bridge';
import { CosmosChainId } from '@injectivelabs/ts-types';
import { Token, TokenType } from '@injectivelabs/token-metadata';
import { TokenMetadataResponse } from 'alchemy-sdk';
export declare const InProgressStates: BridgeTransactionState[];
export declare const FailedStates: BridgeTransactionState[];
export declare const KeplrNetworks: BridgingNetwork[];
export declare const LeapNetworks: BridgingNetwork[];
export declare const CosmostationNetworks: BridgingNetwork[];
export declare const CosmosNetworks: BridgingNetwork[];
export declare const EvmWormholeNetworks: BridgingNetwork[];
export declare const tokenSelectorDisabledNetworks: BridgingNetwork[];
export declare const tokenDenomsPerNetwork: NetworkConfig[];
export declare const cosmosNativeDenomsFromChainId: Record<string, Token | Token[]>;
export declare const ibcHashToNativeInjPerNetwork: Partial<Record<BridgingNetwork, string>>;
export declare const ibcHashToNativeInjPerCosmosChain: Partial<Record<CosmosChainId, string>>;
export declare const getExplorerUrl: (network: Network) => string;
export declare const getCosmosExplorerUrl: (bridgingNetwork: BridgingNetwork | undefined, network: Network) => string;
export declare const getEthereumExplorerUrl: (network: Network) => string;
export declare const getArbitrumExplorerUrl: (network: Network) => string;
export declare const getPolygonExplorerUrl: (network: Network) => string;
export declare const getSolanaExplorerUrl: (network: Network) => string;
export declare const getTerraExplorerUrl: (network: Network) => string;
export declare const getPeggoGraphQlEndpoint: (network: Network) => string;
export declare const getNetworkFromAddress: (sender: string) => BridgingNetwork;
export declare const getBridgeTransactionType: (srcNetwork: BridgingNetwork, dstNetwork: BridgingNetwork) => `${BridgingNetwork}-${BridgingNetwork}`;
export declare const getGasPriceForCosmosNetwork: (network: BridgingNetwork) => 0.01 | 0.02 | 0.04 | 0.25;
export declare const getGasPriceForChainId: (chainId: CosmosChainId) => 0.01 | 0.02 | 0.04 | 0.25;
export declare const formatWeb3Token: ({ transaction, tokenFromWeb3, }: {
    transaction: UiBridgeTransaction;
    tokenFromWeb3: TokenMetadataResponse;
}) => {
    decimals: number;
    denom: string;
    name: string;
    logo: string;
    symbol: string;
    tokenType: TokenType;
    coinGeckoId: string;
    erc20: {
        decimals: number;
        address: string;
        tokenType: TokenType;
    };
};
//# sourceMappingURL=bridge.d.ts.map