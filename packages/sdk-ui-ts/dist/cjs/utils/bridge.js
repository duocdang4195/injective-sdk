"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatWeb3Token = exports.getGasPriceForChainId = exports.getGasPriceForCosmosNetwork = exports.getBridgeTransactionType = exports.getNetworkFromAddress = exports.getPeggoGraphQlEndpoint = exports.getTerraExplorerUrl = exports.getSolanaExplorerUrl = exports.getPolygonExplorerUrl = exports.getArbitrumExplorerUrl = exports.getEthereumExplorerUrl = exports.getCosmosExplorerUrl = exports.getExplorerUrl = exports.ibcHashToNativeInjPerCosmosChain = exports.ibcHashToNativeInjPerNetwork = exports.cosmosNativeDenomsFromChainId = exports.tokenDenomsPerNetwork = exports.tokenSelectorDisabledNetworks = exports.EvmWormholeNetworks = exports.CosmosNetworks = exports.CosmostationNetworks = exports.LeapNetworks = exports.KeplrNetworks = exports.FailedStates = exports.InProgressStates = void 0;
const bridge_1 = require("./../types/bridge");
const networks_1 = require("@injectivelabs/networks");
const bridge_2 = require("./../types/bridge");
const constants_1 = require("../constants");
const ts_types_1 = require("@injectivelabs/ts-types");
const token_metadata_1 = require("@injectivelabs/token-metadata");
exports.InProgressStates = [
    bridge_1.BridgeTransactionState.Confirming,
    bridge_1.BridgeTransactionState.Submitted,
    bridge_1.BridgeTransactionState.InjectiveConfirming,
    bridge_1.BridgeTransactionState.EthereumConfirming,
    bridge_1.BridgeTransactionState.RequestingVAA,
    bridge_1.BridgeTransactionState.Redeemable,
];
exports.FailedStates = [
    bridge_1.BridgeTransactionState.Cancelled,
    bridge_1.BridgeTransactionState.Failed,
];
exports.KeplrNetworks = [
    bridge_1.BridgingNetwork.CosmosHub,
    bridge_1.BridgingNetwork.CosmosHubTestnet,
    bridge_1.BridgingNetwork.Chihuahua,
    bridge_1.BridgingNetwork.Osmosis,
    bridge_1.BridgingNetwork.Axelar,
    bridge_1.BridgingNetwork.Juno,
    bridge_1.BridgingNetwork.Persistence,
    bridge_1.BridgingNetwork.Evmos,
    bridge_1.BridgingNetwork.Secret,
    bridge_1.BridgingNetwork.Stride,
    bridge_1.BridgingNetwork.Sommelier,
    bridge_1.BridgingNetwork.Kava,
    bridge_1.BridgingNetwork.Oraichain,
];
exports.LeapNetworks = [
    bridge_1.BridgingNetwork.CosmosHub,
    bridge_1.BridgingNetwork.Osmosis,
    bridge_1.BridgingNetwork.Axelar,
    bridge_1.BridgingNetwork.Juno,
    bridge_1.BridgingNetwork.Persistence,
    bridge_1.BridgingNetwork.Stride,
    bridge_1.BridgingNetwork.Sommelier,
    bridge_1.BridgingNetwork.Canto,
    bridge_1.BridgingNetwork.Kava,
];
exports.CosmostationNetworks = [
    bridge_1.BridgingNetwork.CosmosHub,
    bridge_1.BridgingNetwork.Chihuahua,
    bridge_1.BridgingNetwork.Osmosis,
    bridge_1.BridgingNetwork.Axelar,
    bridge_1.BridgingNetwork.Juno,
    bridge_1.BridgingNetwork.Persistence,
    bridge_1.BridgingNetwork.Evmos,
    bridge_1.BridgingNetwork.Secret,
    bridge_1.BridgingNetwork.Stride,
    bridge_1.BridgingNetwork.Crescent,
    bridge_1.BridgingNetwork.Sommelier,
    bridge_1.BridgingNetwork.Canto,
    bridge_1.BridgingNetwork.Kava,
];
exports.CosmosNetworks = [
    bridge_1.BridgingNetwork.CosmosHub,
    bridge_1.BridgingNetwork.Chihuahua,
    bridge_1.BridgingNetwork.Crescent,
    bridge_1.BridgingNetwork.Osmosis,
    bridge_1.BridgingNetwork.Axelar,
    bridge_1.BridgingNetwork.Juno,
    bridge_1.BridgingNetwork.Persistence,
    bridge_1.BridgingNetwork.Evmos,
    bridge_1.BridgingNetwork.Secret,
    bridge_1.BridgingNetwork.Stride,
    bridge_1.BridgingNetwork.Sommelier,
    bridge_1.BridgingNetwork.Canto,
    bridge_1.BridgingNetwork.Kava,
    bridge_1.BridgingNetwork.Oraichain,
];
exports.EvmWormholeNetworks = [
    bridge_1.BridgingNetwork.EthereumWh,
    bridge_1.BridgingNetwork.Polygon,
    bridge_1.BridgingNetwork.Arbitrum,
    bridge_1.BridgingNetwork.Klaytn,
];
exports.tokenSelectorDisabledNetworks = [
    bridge_1.BridgingNetwork.Juno,
    bridge_1.BridgingNetwork.Moonbeam,
    bridge_1.BridgingNetwork.Chihuahua,
    bridge_1.BridgingNetwork.CosmosHub,
    bridge_1.BridgingNetwork.Persistence,
    bridge_1.BridgingNetwork.CosmosHubTestnet,
    bridge_1.BridgingNetwork.Arbitrum,
    bridge_1.BridgingNetwork.Polygon,
    bridge_1.BridgingNetwork.Sui,
    bridge_1.BridgingNetwork.Klaytn,
];
exports.tokenDenomsPerNetwork = [
    {
        network: bridge_1.BridgingNetwork.CosmosHub,
        denoms: [
            'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        ],
        symbols: ['atom'],
    },
    {
        network: bridge_1.BridgingNetwork.Osmosis,
        denoms: [
            'inj',
            'ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333',
        ],
        symbols: ['osmo', 'inj'],
    },
    {
        network: bridge_1.BridgingNetwork.Chihuahua,
        denoms: [
            'ibc/E7807A46C0B7B44B350DA58F51F278881B863EC4DCA94635DAB39E52C30766CB',
        ],
        symbols: ['huahua'],
    },
    {
        network: bridge_1.BridgingNetwork.Axelar,
        denoms: [
            'dot-planck',
            'ibc/B68C1D2682A8B69E20BB921E34C6A3A2B6D1E13E3E8C0092E373826F546DEE65',
        ],
        symbols: ['axl', 'dot'],
    },
    {
        network: bridge_1.BridgingNetwork.Juno,
        denoms: [
            'ibc/D50E26996253EBAA8C684B9CD653FE2F7665D7BDDCA3D48D5E1378CF6334F211',
        ],
        symbols: ['juno'],
    },
    {
        network: bridge_1.BridgingNetwork.Terra,
        denoms: [
            'ibc/B8AF5D92165F35AB31F3FC7C7B444B9D240760FA5D406C49D24862BD0284E395',
            'ibc/B448C0CA358B958301D328CCDC5D5AD642FC30A6D3AE106FF721DB315F3DDE5C',
        ],
        symbols: ['luna', 'ust'],
    },
    {
        network: bridge_1.BridgingNetwork.Evmos,
        denoms: [
            'ibc/16618B7F7AC551F48C057A13F4CA5503693FBFF507719A85BC6876B8BD75F821',
            'ibc/F6CC233E5C0EA36B1F74AB1AF98471A2D6A80E2542856639703E908B4D93E7C4',
        ],
        symbols: ['evmos', 'neok'],
    },
    {
        network: bridge_1.BridgingNetwork.Persistence,
        denoms: [
            'inj',
            'ibc/B786E7CBBF026F6F15A8DA248E0F18C62A0F7A70CB2DABD9239398C8B5150ABB',
        ],
        symbols: ['xprt'],
    },
    {
        network: bridge_1.BridgingNetwork.Moonbeam,
        denoms: ['dot-planck'],
        symbols: ['dot'],
    },
    {
        network: bridge_1.BridgingNetwork.Secret,
        denoms: [
            'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
        ],
        symbols: ['scrt'],
    },
    {
        network: bridge_1.BridgingNetwork.Stride,
        denoms: [
            'inj',
            'ibc/3FDD002A3A4019B05A33D324B2F29748E77AF501BEA5C96D1F28B2D6755F9F25',
            'ibc/AC87717EA002B0123B10A05063E69BCA274BA2C44D842AEEB41558D2856DCE93',
        ],
        symbols: ['strd', 'inj', 'stinj'],
    },
    {
        network: bridge_1.BridgingNetwork.Crescent,
        denoms: [
            'inj',
            'ibc/3A6DD3358D9F7ADD18CDE79BA10B400511A5DE4AE2C037D7C9639B52ADAF35C6',
        ],
        symbols: ['cre', 'inj'],
    },
    {
        network: bridge_1.BridgingNetwork.Sommelier,
        denoms: [
            'ibc/34346A60A95EB030D62D6F5BDD4B745BE18E8A693372A8A347D5D53DBBB1328B',
        ],
        symbols: ['somm'],
    },
    {
        network: bridge_1.BridgingNetwork.Canto,
        denoms: [
            'ibc/D91A2C4EE7CD86BBAFCE0FA44A60DDD9AFBB7EEB5B2D46C0984DEBCC6FEDFAE8',
        ],
        symbols: ['canto'],
    },
    {
        network: bridge_1.BridgingNetwork.Kava,
        denoms: [
            'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
            'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
        ],
        symbols: ['kava', 'usdtkv'],
    },
    {
        network: bridge_1.BridgingNetwork.Oraichain,
        denoms: [
            'ibc/C20C0A822BD22B2CEF0D067400FCCFB6FAEEE9E91D360B4E0725BD522302D565',
        ],
        symbols: ['orai'],
    },
    {
        network: bridge_1.BridgingNetwork.CosmosHubTestnet,
        denoms: [
            'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        ],
        symbols: ['uphoton'],
    },
    {
        network: bridge_1.BridgingNetwork.Solana,
        denoms: [],
        symbols: ['SOL'],
    },
    {
        network: bridge_1.BridgingNetwork.EthereumWh,
        denoms: [],
        symbols: ['USDCet', 'CHZ', 'LDO', 'BRZ', 'ALPHA'],
    },
    {
        network: bridge_1.BridgingNetwork.Arbitrum,
        denoms: [],
        symbols: ['ARB'],
    },
    {
        network: bridge_1.BridgingNetwork.Polygon,
        denoms: [],
        symbols: ['WMATIC'],
    },
];
exports.cosmosNativeDenomsFromChainId = {
    [ts_types_1.CosmosChainId.Cosmoshub]: Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('ATOM')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9' }),
    [ts_types_1.CosmosChainId.Osmosis]: [
        Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('OSMO')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333' }),
        Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('INJ')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'inj' }),
    ],
    [ts_types_1.CosmosChainId.Terra]: [
        Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('LUNA')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/B8AF5D92165F35AB31F3FC7C7B444B9D240760FA5D406C49D24862BD0284E395' }),
        Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('UST')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/B448C0CA358B958301D328CCDC5D5AD642FC30A6D3AE106FF721DB315F3DDE5C' }),
    ],
    [ts_types_1.CosmosChainId.Injective]: Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('INJ')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'inj' }),
    [ts_types_1.CosmosChainId.Chihuahua]: Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('HUAHUA')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/E7807A46C0B7B44B350DA58F51F278881B863EC4DCA94635DAB39E52C30766CB' }),
    [ts_types_1.CosmosChainId.Juno]: Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('JUNO')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/D50E26996253EBAA8C684B9CD653FE2F7665D7BDDCA3D48D5E1378CF6334F211' }),
    [ts_types_1.CosmosChainId.Axelar]: [
        Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('AXL')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/B68C1D2682A8B69E20BB921E34C6A3A2B6D1E13E3E8C0092E373826F546DEE65' }),
        Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('DOT')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'dot-planck' }),
    ],
    [ts_types_1.CosmosChainId.Evmos]: [
        Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('EVMOS')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/16618B7F7AC551F48C057A13F4CA5503693FBFF507719A85BC6876B8BD75F821' }),
        Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('NEOK')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/F6CC233E5C0EA36B1F74AB1AF98471A2D6A80E2542856639703E908B4D93E7C4' }),
    ],
    [ts_types_1.CosmosChainId.Persistence]: Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('XPRT')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/B786E7CBBF026F6F15A8DA248E0F18C62A0F7A70CB2DABD9239398C8B5150ABB' }),
    [ts_types_1.CosmosChainId.Secret]: Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('SCRT')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A' }),
    [ts_types_1.CosmosChainId.Stride]: [
        Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('STRD')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/3FDD002A3A4019B05A33D324B2F29748E77AF501BEA5C96D1F28B2D6755F9F25' }),
        Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('INJ')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'inj' }),
        Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('STINJ')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/AC87717EA002B0123B10A05063E69BCA274BA2C44D842AEEB41558D2856DCE93' }),
    ],
    [ts_types_1.CosmosChainId.Crescent]: [
        Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('CRE')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/3A6DD3358D9F7ADD18CDE79BA10B400511A5DE4AE2C037D7C9639B52ADAF35C6' }),
        Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('INJ')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'inj' }),
    ],
    [ts_types_1.CosmosChainId.Sommelier]: Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('SOMM')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/34346A60A95EB030D62D6F5BDD4B745BE18E8A693372A8A347D5D53DBBB1328B' }),
    [ts_types_1.CosmosChainId.Canto]: Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('CANTO')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/D91A2C4EE7CD86BBAFCE0FA44A60DDD9AFBB7EEB5B2D46C0984DEBCC6FEDFAE8' }),
    [ts_types_1.CosmosChainId.Kava]: [
        Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('KAVA')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205' }),
        Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('USDTkv')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB' }),
    ],
    [ts_types_1.CosmosChainId.Oraichain]: [
        Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('ORAI')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/C20C0A822BD22B2CEF0D067400FCCFB6FAEEE9E91D360B4E0725BD522302D565' }),
    ],
    [ts_types_1.TestnetCosmosChainId.Cosmoshub]: Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('UPHOTON')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'ibc/48BC9C6ACBDFC1EBA034F1859245D53EA4BF74147189D66F27C23BF966335DFB' }),
    [ts_types_1.TestnetCosmosChainId.Injective]: Object.assign(Object.assign({}, token_metadata_1.tokenMetaUtils.getMetaBySymbol('INJ')), { tokenType: token_metadata_1.TokenType.Ibc, denom: 'inj' }),
};
exports.ibcHashToNativeInjPerNetwork = {
    [bridge_1.BridgingNetwork.Osmosis]: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
    [bridge_1.BridgingNetwork.Crescent]: 'ibc/5A76568E079A31FA12165E4559BA9F1E9D4C97F9C2060B538C84DCD503815E30',
    [bridge_1.BridgingNetwork.Persistence]: 'ibc/D64E84758BCA42602C27E9ED2DB8F4EFDAE6A1E311CF404B516D45FEDF319D73',
    [bridge_1.BridgingNetwork.Stride]: 'ibc/A7454562FF29FE068F42F9DE4805ABEF54F599D1720B345D6518D9B5C64EA6D2',
};
exports.ibcHashToNativeInjPerCosmosChain = {
    [ts_types_1.CosmosChainId.Osmosis]: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
    [ts_types_1.CosmosChainId.Crescent]: 'ibc/5A76568E079A31FA12165E4559BA9F1E9D4C97F9C2060B538C84DCD503815E30',
    [ts_types_1.CosmosChainId.Persistence]: 'ibc/D64E84758BCA42602C27E9ED2DB8F4EFDAE6A1E311CF404B516D45FEDF319D73',
    [ts_types_1.CosmosChainId.Stride]: 'ibc/A7454562FF29FE068F42F9DE4805ABEF54F599D1720B345D6518D9B5C64EA6D2',
};
const getExplorerUrl = (network) => {
    if ((0, networks_1.isDevnet)(network)) {
        return 'https://devnet.explorer.injective.dev';
    }
    if ((0, networks_1.isTestnet)(network)) {
        return 'https://testnet.explorer.injective.network';
    }
    return 'https://explorer.injective.network';
};
exports.getExplorerUrl = getExplorerUrl;
const getCosmosExplorerUrl = (bridgingNetwork = bridge_1.BridgingNetwork.CosmosHub, network) => {
    if (bridgingNetwork === bridge_1.BridgingNetwork.Oraichain) {
        return 'https://scan.orai.io/';
    }
    const mintScanNetworkUrl = bridge_2.MintScanExplorerUrl[bridgingNetwork];
    if ((0, networks_1.isDevnet)(network)) {
        return `https://dev.mintscan.io/${mintScanNetworkUrl}-testnet`;
    }
    if ((0, networks_1.isTestnet)(network)) {
        return `https://testnet.mintscan.io/${mintScanNetworkUrl}-testnet`;
    }
    return `https://www.mintscan.io/${mintScanNetworkUrl}`;
};
exports.getCosmosExplorerUrl = getCosmosExplorerUrl;
const getEthereumExplorerUrl = (network) => {
    if ((0, networks_1.isDevnet)(network)) {
        return 'https://goerli.etherscan.io';
    }
    if ((0, networks_1.isTestnet)(network)) {
        return 'https://goerli.etherscan.io';
    }
    return 'https://etherscan.io';
};
exports.getEthereumExplorerUrl = getEthereumExplorerUrl;
const getArbitrumExplorerUrl = (network) => {
    if ((0, networks_1.isDevnet)(network)) {
        return 'https://goerli.arbiscan.io';
    }
    if ((0, networks_1.isTestnet)(network)) {
        return 'https://goerli.arbiscan.io';
    }
    return 'https://arbiscan.io';
};
exports.getArbitrumExplorerUrl = getArbitrumExplorerUrl;
const getPolygonExplorerUrl = (network) => {
    if ((0, networks_1.isDevnet)(network)) {
        return 'https://mumbai.polygonscan.com';
    }
    if ((0, networks_1.isTestnet)(network)) {
        return 'https://mumbai.polygonscan.com';
    }
    return 'https://polygonscan.com';
};
exports.getPolygonExplorerUrl = getPolygonExplorerUrl;
const getSolanaExplorerUrl = (network) => {
    if ((0, networks_1.isDevnet)(network)) {
        return 'https://explorer.solana.com/?cluster=devnet';
    }
    if ((0, networks_1.isTestnet)(network)) {
        return 'https://explorer.solana.com/?cluster=testnet';
    }
    return 'https://explorer.solana.com/';
};
exports.getSolanaExplorerUrl = getSolanaExplorerUrl;
const getTerraExplorerUrl = (network) => {
    if ((0, networks_1.isDevnet)(network)) {
        return 'https://finder.terra.money/localterra';
    }
    if ((0, networks_1.isTestnet)(network)) {
        return 'https://finder.terra.money/testnet/';
    }
    return 'https://finder.terra.money/mainnet';
};
exports.getTerraExplorerUrl = getTerraExplorerUrl;
const getPeggoGraphQlEndpoint = (network) => {
    if ((0, networks_1.isMainnet)(network)) {
        return constants_1.PEGGY_GRAPH_URL;
    }
    if ((0, networks_1.isTestnet)(network)) {
        return constants_1.PEGGY_TESTNET_GRAPH_URL;
    }
    if (network === networks_1.Network.Devnet) {
        return constants_1.PEGGY_DEVNET_GRAPH_URL;
    }
    if (network === networks_1.Network.Devnet1) {
        return constants_1.PEGGY_DEVNET1_GRAPH_URL;
    }
    if (network === networks_1.Network.Devnet2) {
        return constants_1.PEGGY_DEVNET2_GRAPH_URL;
    }
    return '';
};
exports.getPeggoGraphQlEndpoint = getPeggoGraphQlEndpoint;
const getNetworkFromAddress = (sender) => {
    if (sender.startsWith('juno')) {
        return bridge_1.BridgingNetwork.Juno;
    }
    if (sender.startsWith('terra')) {
        return bridge_1.BridgingNetwork.Terra;
    }
    if (sender.startsWith('osmo')) {
        return bridge_1.BridgingNetwork.Osmosis;
    }
    if (sender.startsWith('chihuahua')) {
        return bridge_1.BridgingNetwork.Chihuahua;
    }
    if (sender.startsWith('axelar')) {
        return bridge_1.BridgingNetwork.Axelar;
    }
    if (sender.startsWith('evmos')) {
        return bridge_1.BridgingNetwork.Evmos;
    }
    if (sender.startsWith('persistence')) {
        return bridge_1.BridgingNetwork.Persistence;
    }
    if (sender.startsWith('secret')) {
        return bridge_1.BridgingNetwork.Secret;
    }
    if (sender.startsWith('stride')) {
        return bridge_1.BridgingNetwork.Stride;
    }
    if (sender.startsWith('cre')) {
        return bridge_1.BridgingNetwork.Crescent;
    }
    if (sender.startsWith('somm')) {
        return bridge_1.BridgingNetwork.Sommelier;
    }
    if (sender.startsWith('canto')) {
        return bridge_1.BridgingNetwork.Canto;
    }
    if (sender.startsWith('kava')) {
        return bridge_1.BridgingNetwork.Kava;
    }
    if (sender.startsWith('orai')) {
        return bridge_1.BridgingNetwork.Oraichain;
    }
    if (sender.startsWith('0x')) {
        return bridge_1.BridgingNetwork.Ethereum;
    }
    return bridge_1.BridgingNetwork.CosmosHub;
};
exports.getNetworkFromAddress = getNetworkFromAddress;
const getBridgeTransactionType = (srcNetwork, dstNetwork) => {
    return `${srcNetwork}-${dstNetwork}`;
};
exports.getBridgeTransactionType = getBridgeTransactionType;
const getGasPriceForCosmosNetwork = (network) => {
    switch (network) {
        case bridge_1.BridgingNetwork.Chihuahua:
            return 0.02;
        case bridge_1.BridgingNetwork.CosmosHub:
            return 0.04;
        case bridge_1.BridgingNetwork.CosmosHubTestnet:
            return 0.04;
        case bridge_1.BridgingNetwork.Osmosis:
            return 0.04;
        case bridge_1.BridgingNetwork.Crescent:
            return 0.02;
        case bridge_1.BridgingNetwork.Stride:
            return 0.04;
        case bridge_1.BridgingNetwork.Secret:
            return 0.25;
        case bridge_1.BridgingNetwork.Persistence:
            return 0.04;
        case bridge_1.BridgingNetwork.Evmos:
            return 0.01;
        case bridge_1.BridgingNetwork.Axelar:
            return 0.01;
        case bridge_1.BridgingNetwork.Juno:
            return 0.01;
        default:
            return 0.01;
    }
};
exports.getGasPriceForCosmosNetwork = getGasPriceForCosmosNetwork;
const getGasPriceForChainId = (chainId) => {
    switch (chainId) {
        case ts_types_1.CosmosChainId.Chihuahua:
            return 0.02;
        case ts_types_1.CosmosChainId.Cosmoshub:
            return 0.04;
        case ts_types_1.CosmosChainId.Osmosis:
            return 0.04;
        case ts_types_1.CosmosChainId.Crescent:
            return 0.02;
        case ts_types_1.CosmosChainId.Stride:
            return 0.04;
        case ts_types_1.CosmosChainId.Secret:
            return 0.25;
        case ts_types_1.CosmosChainId.Persistence:
            return 0.04;
        case ts_types_1.CosmosChainId.Evmos:
            return 0.01;
        case ts_types_1.CosmosChainId.Axelar:
            return 0.01;
        case ts_types_1.CosmosChainId.Juno:
            return 0.01;
        case ts_types_1.CosmosChainId.Kava:
            return 0.01;
        case ts_types_1.CosmosChainId.Injective:
            return 0.01;
        default:
            return 0.01;
    }
};
exports.getGasPriceForChainId = getGasPriceForChainId;
const formatWeb3Token = ({ transaction, tokenFromWeb3, }) => {
    const decimals = tokenFromWeb3.decimals || 18;
    const token = {
        decimals,
        denom: `peggy${transaction.denom}`,
        name: tokenFromWeb3.name || '',
        logo: tokenFromWeb3.logo || '',
        symbol: tokenFromWeb3.symbol || '',
        tokenType: token_metadata_1.TokenType.Erc20,
        coinGeckoId: '',
        erc20: {
            decimals,
            address: transaction.denom,
            tokenType: token_metadata_1.TokenType.Erc20,
        },
    };
    return token;
};
exports.formatWeb3Token = formatWeb3Token;
//# sourceMappingURL=bridge.js.map