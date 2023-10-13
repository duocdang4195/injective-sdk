import { Network } from '@injectivelabs/networks';
import { Connection } from '@solana/web3.js';
import { WormholeSource } from './types';
export declare const getSolanaTransactionInfo: (transactionId: string, connection: Connection) => Promise<import("@solana/web3.js").TransactionResponse | null>;
export declare const getEthereumContractAddresses: (network: Network) => {
    injectiveContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: undefined;
    };
    associatedChainContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: string;
    };
};
export declare const getSolanaContractAddresses: (network: Network) => {
    injectiveContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: undefined;
    };
    associatedChainContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: string;
    };
};
export declare const getArbitrumContractAddresses: (network: Network) => {
    injectiveContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: undefined;
    };
    associatedChainContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: string;
    };
};
export declare const getPolygonContractAddresses: (network: Network) => {
    injectiveContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: undefined;
    };
    associatedChainContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: string;
    };
};
export declare const getSuiContractAddresses: (network: Network) => {
    injectiveContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: undefined;
    };
    associatedChainContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: undefined;
    };
};
export declare const getKlaytnContractAddresses: (network: Network) => {
    injectiveContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: undefined;
    };
    associatedChainContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: string;
    };
};
export declare const getAptosContractAddresses: (network: Network) => {
    injectiveContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: undefined;
    };
    associatedChainContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: string;
    };
};
export declare const getContractAddresses: (network: Network, source?: WormholeSource) => {
    injectiveContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: undefined;
    };
    associatedChainContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: string;
    };
} | {
    injectiveContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: undefined;
    };
    associatedChainContractAddresses: {
        core: string;
        token_bridge: string;
        nft_bridge: undefined;
    };
};
export declare const getAssociatedChain: (source?: WormholeSource) => 1 | 2 | 5 | 13 | 21 | 22 | 23;
export declare const getAssociatedChainRecipient: (recipient: string, source?: WormholeSource) => string;
export declare const getEvmNativeAddress: (network: Network, source?: WormholeSource) => string;
export declare const getEvmChainName: (chainId: number) => "Ethereum" | "Arbitrum" | "Polygon";
//# sourceMappingURL=utils.d.ts.map