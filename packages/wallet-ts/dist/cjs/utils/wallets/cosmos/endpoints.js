"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpointsFromChainId = void 0;
const ts_types_1 = require("@injectivelabs/ts-types");
const exceptions_1 = require("@injectivelabs/exceptions");
/** @deprecated - pass endpoints directly to the methods */
const getEndpointsFromChainId = (chainId) => {
    switch (chainId) {
        case ts_types_1.CosmosChainId.Injective:
            return {
                rpc: 'https://tm.injective.network',
                rest: 'https://lcd.injective.network',
            };
        case ts_types_1.TestnetCosmosChainId.Injective:
            return {
                rpc: 'https://testnet.tm.injective.network',
                rest: 'https://testnet.lcd.injective.network',
            };
        case ts_types_1.DevnetCosmosChainId.Injective:
            return {
                rpc: 'https://devnet.tm.injective.dev',
                rest: 'https://devnet.lcd.injective.dev',
            };
        case ts_types_1.CosmosChainId.Cosmoshub:
            return {
                rpc: 'https://rpc.cosmos.directory/cosmoshub',
                rest: 'https://rest.cosmos.directory/cosmoshub',
            };
        case ts_types_1.CosmosChainId.Osmosis:
            return {
                rpc: 'https://rpc.cosmos.directory/osmosis',
                rest: 'https://rest.cosmos.directory/osmosis',
            };
        case ts_types_1.CosmosChainId.Juno:
            return {
                rpc: 'https://rpc.cosmos.directory/juno',
                rest: 'https://rest.cosmos.directory/juno',
            };
        case ts_types_1.CosmosChainId.Terra:
            return {
                rpc: 'https://rpc.cosmos.directory/terra',
                rest: 'https://rest.cosmos.directory/terra',
            };
        case ts_types_1.CosmosChainId.TerraUST:
            return {
                rpc: 'https://rpc.cosmos.directory/terra',
                rest: 'https://rest.cosmos.directory/terra',
            };
        case ts_types_1.CosmosChainId.Axelar:
            return {
                rpc: 'https://rpc.cosmos.directory/axelar',
                rest: 'https://rest.cosmos.directory/axelar',
            };
        case ts_types_1.CosmosChainId.Evmos:
            return {
                rpc: 'https://rpc.cosmos.directory/evmos',
                rest: 'https://rest.cosmos.directory/evmos',
            };
        case ts_types_1.CosmosChainId.Persistence:
            return {
                rpc: 'https://rpc.cosmos.directory/persistence',
                rest: 'https://rest.cosmos.directory/persistence',
            };
        case ts_types_1.CosmosChainId.Secret:
            return {
                rpc: 'https://rpc.cosmos.directory/secretnetwork',
                rest: 'https://rest.cosmos.directory/secretnetwork',
            };
        case ts_types_1.CosmosChainId.Stride:
            return {
                rpc: 'https://rpc.cosmos.directory/stride',
                rest: 'https://rest.cosmos.directory/stride',
            };
        case ts_types_1.CosmosChainId.Chihuahua:
            return {
                rpc: 'https://rpc.chihuahua.wtf',
                rest: 'https://api.chihuahua.wtf',
            };
        case ts_types_1.CosmosChainId.Crescent:
            return {
                rpc: 'https://rpc.cosmos.directory/crescent',
                rest: 'https://rest.cosmos.directory/crescent',
            };
        case ts_types_1.CosmosChainId.Sommelier:
            return {
                rpc: 'https://rpc.cosmos.directory/sommelier',
                rest: 'https://rest.cosmos.directory/sommelier',
            };
        case ts_types_1.CosmosChainId.Canto:
            return {
                rpc: 'https://rpc.cosmos.directory/canto',
                rest: 'https://rest.cosmos.directory/canto',
            };
        case ts_types_1.CosmosChainId.Kava:
            return {
                rpc: 'https://rpc.cosmos.directory/kava',
                rest: 'https://rest.cosmos.directory/kava',
            };
        case ts_types_1.CosmosChainId.Oraichain:
            return {
                rpc: 'https://rpc.cosmos.directory/oraichain',
                rest: 'https://rest.cosmos.directory/oraichain',
            };
        case ts_types_1.TestnetCosmosChainId.Cosmoshub:
            return {
                rpc: 'https://testnet.tm.cosmos.injective.dev',
                rest: 'https://testnet.lcd.cosmos.injective.dev',
            };
        default:
            throw new exceptions_1.GeneralException(new Error(`Endpoints for ${chainId} not found`));
    }
};
exports.getEndpointsFromChainId = getEndpointsFromChainId;
//# sourceMappingURL=endpoints.js.map