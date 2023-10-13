import { Network } from '@injectivelabs/networks';
export declare const WORMHOLE_CONTRACT_BY_NETWORK: (network: Network) => {
    core: string;
    token_bridge: string;
    nft_bridge: undefined;
};
export declare const WORMHOLE_SOLANA_CONTRACT_BY_NETWORK: (network: Network) => {
    core: string;
    token_bridge: string;
    nft_bridge: string;
};
export declare const WORMHOLE_ETHEREUM_CONTRACT_BY_NETWORK: (network: Network) => {
    core: string;
    token_bridge: string;
    nft_bridge: string;
};
export declare const WORMHOLE_ARBITRUM_CONTRACT_BY_NETWORK: (network: Network) => {
    core: string;
    token_bridge: string;
    nft_bridge: string;
};
export declare const WORMHOLE_POLYGON_CONTRACT_BY_NETWORK: (network: Network) => {
    core: string;
    token_bridge: string;
    nft_bridge: string;
};
export declare const WORMHOLE_SUI_CONTRACT_BY_NETWORK: (network: Network) => {
    core: string;
    token_bridge: string;
    nft_bridge: undefined;
};
export declare const WORMHOLE_KLAYTN_CONTRACT_BY_NETWORK: (network: Network) => {
    core: string;
    token_bridge: string;
    nft_bridge: string;
};
export declare const WORMHOLE_APTOS_CONTRACT_BY_NETWORK: (network: Network) => {
    core: string;
    token_bridge: string;
    nft_bridge: string;
} | {
    core: string;
    token_bridge: string;
    nft_bridge: undefined;
};
export declare const WORMHOLE_CHAINS: {
    readonly unset: 0;
    readonly solana: 1;
    readonly ethereum: 2;
    readonly terra: 3;
    readonly bsc: 4;
    readonly polygon: 5;
    readonly avalanche: 6;
    readonly oasis: 7;
    readonly algorand: 8;
    readonly aurora: 9;
    readonly fantom: 10;
    readonly karura: 11;
    readonly acala: 12;
    readonly klaytn: 13;
    readonly celo: 14;
    readonly near: 15;
    readonly moonbeam: 16;
    readonly neon: 17;
    readonly terra2: 18;
    readonly injective: 19;
    readonly osmosis: 20;
    readonly sui: 21;
    readonly aptos: 22;
    readonly arbitrum: 23;
    readonly optimism: 24;
    readonly gnosis: 25;
    readonly pythnet: 26;
    readonly xpla: 28;
    readonly btc: 29;
    readonly base: 30;
    readonly sei: 32;
    readonly wormchain: 3104;
    readonly sepolia: 10002;
};
export declare const WORMHOLE_CONTRACTS: {
    MAINNET: {
        unset: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        solana: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        ethereum: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        terra: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        bsc: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        polygon: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        avalanche: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        oasis: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        algorand: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        aurora: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        fantom: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        karura: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        acala: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        klaytn: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        celo: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        near: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        injective: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        osmosis: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        aptos: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        sui: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        moonbeam: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        neon: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        terra2: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        arbitrum: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        optimism: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        gnosis: {
            core: string;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        pythnet: {
            core: string;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        xpla: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        btc: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        base: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        sei: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        wormchain: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        sepolia: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
    };
    TESTNET: {
        unset: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        solana: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        terra: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        ethereum: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        bsc: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        polygon: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        avalanche: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        oasis: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        algorand: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        aurora: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        fantom: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        karura: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        acala: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        klaytn: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        celo: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        near: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        injective: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        osmosis: {
            core: string;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        aptos: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        sui: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        moonbeam: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        neon: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        terra2: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        arbitrum: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        optimism: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        gnosis: {
            core: string;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        pythnet: {
            core: string;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        xpla: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        btc: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        base: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        sei: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        wormchain: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        sepolia: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
    };
    DEVNET: {
        unset: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        solana: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        terra: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        ethereum: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        bsc: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        polygon: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        avalanche: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        oasis: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        algorand: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        aurora: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        fantom: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        karura: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        acala: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        klaytn: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        celo: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        near: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        injective: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        osmosis: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        aptos: {
            core: string;
            token_bridge: string;
            nft_bridge: string;
        };
        sui: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        moonbeam: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        neon: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        terra2: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        arbitrum: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        optimism: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        gnosis: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        pythnet: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        xpla: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        btc: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        base: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        sei: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
        wormchain: {
            core: string;
            token_bridge: string;
            nft_bridge: undefined;
        };
        sepolia: {
            core: undefined;
            token_bridge: undefined;
            nft_bridge: undefined;
        };
    };
};
export declare const WORMHOLE_NATIVE_WRAPPED_ADDRESS: (network: Network) => {
    ethereum?: undefined;
    polygon?: undefined;
} | {
    ethereum: string;
    polygon: string;
};
//# sourceMappingURL=constants.d.ts.map