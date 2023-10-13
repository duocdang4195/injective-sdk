"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenFromAlchemyTokenMetaResponse = exports.getKeyFromRpcUrl = void 0;
const token_metadata_1 = require("@injectivelabs/token-metadata");
const getKeyFromRpcUrl = (rpcUrl) => {
    if (!rpcUrl.includes('alchemyapi.io')) {
        return rpcUrl;
    }
    const [key] = rpcUrl.split('/').reverse();
    return key;
};
exports.getKeyFromRpcUrl = getKeyFromRpcUrl;
const getTokenFromAlchemyTokenMetaResponse = (denom, response) => {
    return {
        denom,
        name: response.name || 'Unknown',
        symbol: response.symbol || response.name || 'Unknown',
        decimals: response.decimals || 18,
        logo: response.logo || 'untracked.svg',
        coinGeckoId: '',
        tokenType: token_metadata_1.TokenType.Erc20,
        tokenVerification: token_metadata_1.TokenVerification.External,
        erc20: {
            decimals: response.decimals || 18,
            address: denom.replace('peggy', ''),
            symbol: response.symbol || response.name || 'Unknown',
            tokenType: token_metadata_1.TokenType.Erc20,
        },
    };
};
exports.getTokenFromAlchemyTokenMetaResponse = getTokenFromAlchemyTokenMetaResponse;
//# sourceMappingURL=alchemy.js.map