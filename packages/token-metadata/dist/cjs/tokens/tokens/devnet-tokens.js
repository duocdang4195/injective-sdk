"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.devnetTokens = exports.overrideCw20s = void 0;
const tokens_1 = __importDefault(require("./tokens"));
const types_1 = require("../../types");
const overrideCw20s = (source, cw20sList) => {
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
exports.overrideCw20s = overrideCw20s;
const devnetTokens = () => ({
    INJ: Object.assign(Object.assign({}, tokens_1.default.INJ), { erc20: Object.assign(Object.assign({}, tokens_1.default.INJ.erc20), { address: '0xBe8d71D26525440A03311cc7fa372262c5354A3c' }) }),
    USDC: Object.assign(Object.assign({}, tokens_1.default.USDC), { erc20: Object.assign(Object.assign({}, tokens_1.default.USDC.erc20), { address: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F' }), cw20s: (0, exports.overrideCw20s)({
            decimals: 6,
            symbol: 'USDCet',
            source: types_1.Cw20TokenSource.EthereumWh,
            address: 'inj12sqy9uzzl3h3vqxam7sz9f0yvmhampcgesh3qw',
            tokenType: types_1.TokenType.Cw20,
        }, tokens_1.default.USDC.cw20s) }),
});
exports.devnetTokens = devnetTokens;
//# sourceMappingURL=devnet-tokens.js.map