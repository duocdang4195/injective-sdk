import { Bech32Address } from '@keplr-wallet/cosmos';
import { TestnetCosmosChainId, DevnetCosmosChainId, CosmosChainId, } from '@injectivelabs/ts-types';
import { getEndpointsFromChainId } from '../../cosmos/endpoints';
export const experimentalChainsConfig = {
    [CosmosChainId.Injective]: {
        ...getEndpointsFromChainId(CosmosChainId.Injective),
        rpcConfig: undefined,
        restConfig: undefined,
        chainId: 'injective-1',
        chainName: 'Injective v1.1',
        stakeCurrency: {
            coinDenom: 'INJ',
            coinMinimalDenom: 'inj',
            coinDecimals: 18,
            coinGeckoId: 'injective-protocol',
        },
        walletUrl: 'https://hub.injective.network/',
        walletUrlForStaking: 'https://hub.injective.network/',
        bip44: {
            coinType: 60,
        },
        bech32Config: Bech32Address.defaultBech32Config('inj'),
        currencies: [
            {
                coinDenom: 'INJ',
                coinMinimalDenom: 'inj',
                coinDecimals: 18,
                coinGeckoId: 'injective-protocol',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'INJ',
                coinMinimalDenom: 'inj',
                coinDecimals: 18,
                coinGeckoId: 'injective-protocol',
                gasPriceStep: {
                    low: 5000000000,
                    average: 25000000000,
                    high: 50000000000,
                },
            },
        ],
        features: ['ibc-transfer', 'ibc-go', 'eth-address-gen', 'eth-key-sign'],
        beta: true,
    },
    [TestnetCosmosChainId.Cosmoshub]: {
        ...getEndpointsFromChainId(TestnetCosmosChainId.Cosmoshub),
        rpcConfig: undefined,
        restConfig: undefined,
        chainId: 'cosmoshub-testnet',
        chainName: 'Cosmos Testnet',
        stakeCurrency: {
            coinDenom: 'UPHOTON',
            coinMinimalDenom: 'uphoton',
            coinDecimals: 6,
            coinGeckoId: 'cosmos',
        },
        walletUrl: 'https://wallet.keplr.app/#/cosmoshub/stake',
        walletUrlForStaking: 'https://wallet.keplr.app/#/cosmoshub/stake',
        bip44: {
            coinType: 118,
        },
        bech32Config: Bech32Address.defaultBech32Config('cosmos'),
        currencies: [
            {
                coinDenom: 'UPHOTON',
                coinMinimalDenom: 'uphoton',
                coinDecimals: 6,
                coinGeckoId: 'cosmos',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'UPHOTON',
                coinMinimalDenom: 'uphoton',
                coinDecimals: 6,
                coinGeckoId: 'cosmos',
            },
        ],
        coinType: 118,
        features: ['ibc-transfer'],
    },
    [TestnetCosmosChainId.Injective]: {
        ...getEndpointsFromChainId(TestnetCosmosChainId.Injective),
        rpcConfig: undefined,
        restConfig: undefined,
        chainId: 'injective-888',
        chainName: 'Injective Testnet',
        stakeCurrency: {
            coinDenom: 'INJ',
            coinMinimalDenom: 'inj',
            coinDecimals: 18,
            coinGeckoId: 'injective-protocol',
        },
        walletUrl: 'https://hub.injective.dev/',
        walletUrlForStaking: 'https://hub.injective.dev/',
        bip44: {
            coinType: 60,
        },
        bech32Config: Bech32Address.defaultBech32Config('inj'),
        currencies: [
            {
                coinDenom: 'INJ',
                coinMinimalDenom: 'inj',
                coinDecimals: 18,
                coinGeckoId: 'injective-protocol',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'INJ',
                coinMinimalDenom: 'inj',
                coinDecimals: 18,
                coinGeckoId: 'injective-protocol',
                gasPriceStep: {
                    low: 5000000000,
                    average: 25000000000,
                    high: 40000000000,
                },
            },
        ],
        coinType: 60,
        features: ['ibc-transfer', 'ibc-go', 'eth-address-gen', 'eth-key-sign'],
    },
    [DevnetCosmosChainId.Injective]: {
        ...getEndpointsFromChainId(DevnetCosmosChainId.Injective),
        rpcConfig: undefined,
        restConfig: undefined,
        chainId: 'injective-777',
        chainName: 'Injective - Devnet',
        stakeCurrency: {
            coinDenom: 'INJ',
            coinMinimalDenom: 'inj',
            coinDecimals: 18,
            coinGeckoId: 'injective-protocol',
        },
        walletUrl: 'https://hub.injective.dev/',
        walletUrlForStaking: 'https://hub.injective.dev/',
        bip44: {
            coinType: 60,
        },
        bech32Config: Bech32Address.defaultBech32Config('inj'),
        currencies: [
            {
                coinDenom: 'INJ',
                coinMinimalDenom: 'inj',
                coinDecimals: 18,
                coinGeckoId: 'injective-protocol',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'INJ',
                coinMinimalDenom: 'inj',
                coinDecimals: 18,
                coinGeckoId: 'injective-protocol',
                gasPriceStep: {
                    low: 5000000000,
                    average: 25000000000,
                    high: 40000000000,
                },
            },
        ],
        coinType: 60,
        features: ['ibc-transfer', 'ibc-go', 'eth-address-gen', 'eth-key-sign'],
    },
    [CosmosChainId.Oraichain]: {
        ...getEndpointsFromChainId(CosmosChainId.Oraichain),
        chainId: 'Oraichain',
        chainName: 'Oraichain',
        stakeCurrency: {
            coinDenom: 'ORAI',
            coinMinimalDenom: 'orai',
            coinDecimals: 6,
            coinGeckoId: 'oraichain-token',
            coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png',
        },
        bip44: {
            coinType: 118,
        },
        bech32Config: {
            bech32PrefixAccAddr: 'orai',
            bech32PrefixAccPub: 'oraipub',
            bech32PrefixValAddr: 'oraivaloper',
            bech32PrefixValPub: 'oraivaloperpub',
            bech32PrefixConsAddr: 'oraivalcons',
            bech32PrefixConsPub: 'oraivalconspub',
        },
        currencies: [
            {
                coinDenom: 'ORAI',
                coinMinimalDenom: 'orai',
                coinDecimals: 6,
                coinGeckoId: 'oraichain-token',
                coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png',
            },
            {
                coinDenom: 'AIRI',
                coinMinimalDenom: 'cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg:aiRight Token',
                coinDecimals: 6,
                coinGeckoId: 'airight',
                coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11563.png',
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'ORAI',
                coinMinimalDenom: 'orai',
                coinDecimals: 6,
                coinGeckoId: 'oraichain-token',
                coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png',
                gasPriceStep: {
                    low: 0.003,
                    average: 0.005,
                    high: 0.007,
                },
            },
        ],
        walletUrlForStaking: 'https://scan.orai.io/validators',
        features: [
            'stargate',
            'no-legacy-stdTx',
            'ibc-transfer',
            'cosmwasm',
            'wasmd_0.24+',
        ],
        beta: true,
    },
};
export const getExperimentalChainConfigBasedOnChainId = (chainId) => experimentalChainsConfig[chainId];
//# sourceMappingURL=experimental-chains.js.map