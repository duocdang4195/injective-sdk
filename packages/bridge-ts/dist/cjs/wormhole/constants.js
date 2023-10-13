"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WORMHOLE_NATIVE_WRAPPED_ADDRESS = exports.WORMHOLE_CONTRACTS = exports.WORMHOLE_CHAINS = exports.WORMHOLE_APTOS_CONTRACT_BY_NETWORK = exports.WORMHOLE_KLAYTN_CONTRACT_BY_NETWORK = exports.WORMHOLE_SUI_CONTRACT_BY_NETWORK = exports.WORMHOLE_POLYGON_CONTRACT_BY_NETWORK = exports.WORMHOLE_ARBITRUM_CONTRACT_BY_NETWORK = exports.WORMHOLE_ETHEREUM_CONTRACT_BY_NETWORK = exports.WORMHOLE_SOLANA_CONTRACT_BY_NETWORK = exports.WORMHOLE_CONTRACT_BY_NETWORK = void 0;
const networks_1 = require("@injectivelabs/networks");
const wormhole_sdk_1 = require("@injectivelabs/wormhole-sdk");
const types_1 = require("./types");
const WORMHOLE_CONTRACT_BY_NETWORK = (network) => {
    if ((0, networks_1.isTestnet)(network) || (0, networks_1.isDevnet)(network)) {
        return wormhole_sdk_1.CONTRACTS.TESTNET.injective;
    }
    return wormhole_sdk_1.CONTRACTS.MAINNET.injective;
};
exports.WORMHOLE_CONTRACT_BY_NETWORK = WORMHOLE_CONTRACT_BY_NETWORK;
const WORMHOLE_SOLANA_CONTRACT_BY_NETWORK = (network) => {
    if ((0, networks_1.isTestnet)(network) || (0, networks_1.isDevnet)(network)) {
        return wormhole_sdk_1.CONTRACTS.TESTNET.solana;
    }
    return wormhole_sdk_1.CONTRACTS.MAINNET.solana;
};
exports.WORMHOLE_SOLANA_CONTRACT_BY_NETWORK = WORMHOLE_SOLANA_CONTRACT_BY_NETWORK;
const WORMHOLE_ETHEREUM_CONTRACT_BY_NETWORK = (network) => {
    if ((0, networks_1.isTestnet)(network) || (0, networks_1.isDevnet)(network)) {
        return wormhole_sdk_1.CONTRACTS.TESTNET.ethereum;
    }
    return wormhole_sdk_1.CONTRACTS.MAINNET.ethereum;
};
exports.WORMHOLE_ETHEREUM_CONTRACT_BY_NETWORK = WORMHOLE_ETHEREUM_CONTRACT_BY_NETWORK;
const WORMHOLE_ARBITRUM_CONTRACT_BY_NETWORK = (network) => {
    if ((0, networks_1.isTestnet)(network) || (0, networks_1.isDevnet)(network)) {
        return wormhole_sdk_1.CONTRACTS.TESTNET.arbitrum;
    }
    return wormhole_sdk_1.CONTRACTS.MAINNET.arbitrum;
};
exports.WORMHOLE_ARBITRUM_CONTRACT_BY_NETWORK = WORMHOLE_ARBITRUM_CONTRACT_BY_NETWORK;
const WORMHOLE_POLYGON_CONTRACT_BY_NETWORK = (network) => {
    if ((0, networks_1.isTestnet)(network) || (0, networks_1.isDevnet)(network)) {
        return wormhole_sdk_1.CONTRACTS.TESTNET.polygon;
    }
    return wormhole_sdk_1.CONTRACTS.MAINNET.polygon;
};
exports.WORMHOLE_POLYGON_CONTRACT_BY_NETWORK = WORMHOLE_POLYGON_CONTRACT_BY_NETWORK;
const WORMHOLE_SUI_CONTRACT_BY_NETWORK = (network) => {
    if ((0, networks_1.isTestnet)(network) || (0, networks_1.isDevnet)(network)) {
        return wormhole_sdk_1.CONTRACTS.TESTNET.sui;
    }
    return wormhole_sdk_1.CONTRACTS.MAINNET.sui;
};
exports.WORMHOLE_SUI_CONTRACT_BY_NETWORK = WORMHOLE_SUI_CONTRACT_BY_NETWORK;
const WORMHOLE_KLAYTN_CONTRACT_BY_NETWORK = (network) => {
    if ((0, networks_1.isTestnet)(network) || (0, networks_1.isDevnet)(network)) {
        return wormhole_sdk_1.CONTRACTS.TESTNET.klaytn;
    }
    return wormhole_sdk_1.CONTRACTS.MAINNET.klaytn;
};
exports.WORMHOLE_KLAYTN_CONTRACT_BY_NETWORK = WORMHOLE_KLAYTN_CONTRACT_BY_NETWORK;
const WORMHOLE_APTOS_CONTRACT_BY_NETWORK = (network) => {
    if ((0, networks_1.isTestnet)(network) || (0, networks_1.isDevnet)(network)) {
        return wormhole_sdk_1.CONTRACTS.TESTNET.aptos;
    }
    return wormhole_sdk_1.CONTRACTS.MAINNET.aptos;
};
exports.WORMHOLE_APTOS_CONTRACT_BY_NETWORK = WORMHOLE_APTOS_CONTRACT_BY_NETWORK;
exports.WORMHOLE_CHAINS = wormhole_sdk_1.CHAINS;
exports.WORMHOLE_CONTRACTS = wormhole_sdk_1.CONTRACTS;
const WORMHOLE_NATIVE_WRAPPED_ADDRESS = (network) => {
    if ((0, networks_1.isTestnet)(network) || (0, networks_1.isDevnet)(network)) {
        return {
        //
        };
    }
    return {
        [types_1.WormholeSource.Ethereum]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        [types_1.WormholeSource.Polygon]: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    };
};
exports.WORMHOLE_NATIVE_WRAPPED_ADDRESS = WORMHOLE_NATIVE_WRAPPED_ADDRESS;
//# sourceMappingURL=constants.js.map