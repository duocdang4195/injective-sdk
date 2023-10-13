"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenFromDenomsMetadata = void 0;
const token_metadata_1 = require("@injectivelabs/token-metadata");
const getTokenFromDenomsMetadata = (denom, response) => {
    const [denomUnit] = response.denomUnits.reverse();
    return {
        denom,
        name: response.name || response.symbol || denom,
        display: response.display,
        description: response.description,
        symbol: response.symbol || response.name || 'Unknown',
        decimals: denomUnit.exponent || 0,
        logo: response.uri || 'unknown.svg',
        coinGeckoId: '',
        tokenType: token_metadata_1.TokenType.TokenFactory,
        tokenVerification: token_metadata_1.TokenVerification.Internal,
    };
};
exports.getTokenFromDenomsMetadata = getTokenFromDenomsMetadata;
//# sourceMappingURL=factory.js.map