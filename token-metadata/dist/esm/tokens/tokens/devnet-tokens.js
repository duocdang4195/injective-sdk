import tokens from './tokens';
import { TokenType, Cw20TokenSource, } from '../../types';
export const overrideCw20s = (source, cw20sList) => {
    if (!cw20sList) {
        return [source];
    }
    const overrideCw20ItemIndex = cw20sList.findIndex(({ symbol }) => symbol === source.symbol);
    if (overrideCw20ItemIndex === -1) {
        return [...cw20sList, source];
    }
    cw20sList[overrideCw20ItemIndex] = source;
    return cw20sList;
};
export const devnetTokens = () => ({
    INJ: {
        ...tokens.INJ,
        erc20: {
            ...tokens.INJ.erc20,
            address: '0xBe8d71D26525440A03311cc7fa372262c5354A3c',
        },
    },
    USDC: {
        ...tokens.USDC,
        erc20: {
            ...tokens.USDC.erc20,
            address: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
        },
        cw20s: overrideCw20s({
            decimals: 6,
            symbol: 'USDCet',
            source: Cw20TokenSource.EthereumWh,
            address: 'inj12sqy9uzzl3h3vqxam7sz9f0yvmhampcgesh3qw',
            tokenType: TokenType.Cw20,
        }, tokens.USDC.cw20s),
    },
});
//# sourceMappingURL=devnet-tokens.js.map