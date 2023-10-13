import { TokenType, TokenVerification } from '@injectivelabs/token-metadata';
export const getKeyFromRpcUrl = (rpcUrl) => {
    if (!rpcUrl.includes('alchemyapi.io')) {
        return rpcUrl;
    }
    const [key] = rpcUrl.split('/').reverse();
    return key;
};
export const getTokenFromAlchemyTokenMetaResponse = (denom, response) => {
    return {
        denom,
        name: response.name || 'Unknown',
        symbol: response.symbol || response.name || 'Unknown',
        decimals: response.decimals || 18,
        logo: response.logo || 'untracked.svg',
        coinGeckoId: '',
        tokenType: TokenType.Erc20,
        tokenVerification: TokenVerification.External,
        erc20: {
            decimals: response.decimals || 18,
            address: denom.replace('peggy', ''),
            symbol: response.symbol || response.name || 'Unknown',
            tokenType: TokenType.Erc20,
        },
    };
};
//# sourceMappingURL=alchemy.js.map