"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenFromContractStateResponse = void 0;
const token_metadata_1 = require("@injectivelabs/token-metadata");
const getTokenFromContractStateResponse = (denom, response) => {
    const { tokenInfo, contractInfo } = response;
    const contractAddress = denom.startsWith('factory')
        ? denom.split('/')[2]
        : denom;
    return {
        denom,
        name: tokenInfo.name || contractInfo.label || 'Unknown',
        symbol: tokenInfo.symbol || tokenInfo.name || 'Unknown',
        decimals: tokenInfo.decimals || 18,
        logo: 'unknown.svg',
        coinGeckoId: '',
        tokenType: token_metadata_1.TokenType.Cw20,
        tokenVerification: token_metadata_1.TokenVerification.Internal,
        cw20: {
            decimals: tokenInfo.decimals || 18,
            address: contractAddress,
            symbol: tokenInfo.symbol || tokenInfo.name || 'Unknown',
            tokenType: token_metadata_1.TokenType.Cw20,
        },
    };
};
exports.getTokenFromContractStateResponse = getTokenFromContractStateResponse;
//# sourceMappingURL=cw20.js.map