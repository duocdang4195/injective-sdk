import { TokenType, TokenVerification, } from '@injectivelabs/token-metadata';
export const getTokenFromDenomsMetadata = (denom, response) => {
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
        tokenType: TokenType.TokenFactory,
        tokenVerification: TokenVerification.Internal,
    };
};
//# sourceMappingURL=factory.js.map