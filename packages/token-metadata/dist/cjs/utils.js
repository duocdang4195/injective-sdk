"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnknownTokenWithSymbol = exports.getUnknownToken = exports.getTokenFromMeta = exports.getCw20TokenSingle = exports.getTokenAddress = exports.getTokenDecimals = exports.getTokenSymbol = exports.getTokenTypeFromDenom = exports.getIbcTokenMetaFromDenomTrace = void 0;
const utils_1 = require("@injectivelabs/utils");
const types_1 = require("./types");
const tokens_1 = require("./tokens/tokens");
const ibc_1 = require("./ibc");
const getCw20Meta = (token) => {
    var _a;
    const denomToLowerCase = token.denom;
    const cw20MetaFromCw20s = (_a = token.cw20s) === null || _a === void 0 ? void 0 : _a.find((meta) => denomToLowerCase.includes(meta.address));
    return cw20MetaFromCw20s || token.cw20 || undefined;
};
const getIbcTokenMetaFromDenomTrace = ({ hash, path, decimals, baseDenom, }) => ({
    hash,
    path,
    baseDenom,
    decimals,
    channelId: (0, ibc_1.getChannelIdFromPath)(path),
    isNative: !baseDenom.startsWith('ibc'),
});
exports.getIbcTokenMetaFromDenomTrace = getIbcTokenMetaFromDenomTrace;
const getTokenTypeFromDenom = (denom) => {
    if (denom === utils_1.INJ_DENOM) {
        return types_1.TokenType.Native;
    }
    if (denom.startsWith('inj')) {
        return types_1.TokenType.Cw20;
    }
    if (denom.startsWith('ibc')) {
        return types_1.TokenType.Ibc;
    }
    if (denom.startsWith('factory/')) {
        return types_1.TokenType.TokenFactory;
    }
    if (denom.startsWith('peggy')) {
        return types_1.TokenType.Erc20;
    }
    if (denom.startsWith('share')) {
        return types_1.TokenType.InsuranceFund;
    }
    return types_1.TokenType.Cw20;
};
exports.getTokenTypeFromDenom = getTokenTypeFromDenom;
const getTokenSymbol = (token) => {
    var _a, _b;
    if (token.denom.startsWith('factory/')) {
        const meta = getCw20Meta(token);
        return (meta === null || meta === void 0 ? void 0 : meta.symbol) || token.symbol;
    }
    if (token.denom.startsWith('peggy')) {
        return ((_a = token.erc20) === null || _a === void 0 ? void 0 : _a.symbol) || token.symbol;
    }
    if (token.denom.startsWith('ibc')) {
        return ((_b = token.ibc) === null || _b === void 0 ? void 0 : _b.symbol) || token.symbol;
    }
    return token.symbol;
};
exports.getTokenSymbol = getTokenSymbol;
const getTokenDecimals = (token) => {
    var _a, _b, _c;
    if (token.denom === utils_1.INJ_DENOM) {
        return token.decimals;
    }
    if (token.denom.startsWith('inj')) {
        return ((_a = token.cw20) === null || _a === void 0 ? void 0 : _a.decimals) || token.decimals;
    }
    if (token.denom.startsWith('factory/')) {
        const meta = getCw20Meta(token);
        return (meta === null || meta === void 0 ? void 0 : meta.decimals) || token.decimals;
    }
    if (token.denom.startsWith('ibc')) {
        return ((_b = token.ibc) === null || _b === void 0 ? void 0 : _b.decimals) || token.decimals;
    }
    if (token.denom.startsWith('peggy')) {
        return ((_c = token.erc20) === null || _c === void 0 ? void 0 : _c.decimals) || token.decimals;
    }
    if (token.denom.startsWith('share')) {
        return token.decimals;
    }
    return token.decimals;
};
exports.getTokenDecimals = getTokenDecimals;
const getTokenAddress = (token) => {
    var _a, _b, _c;
    if (token.denom === utils_1.INJ_DENOM) {
        return (_a = token.erc20) === null || _a === void 0 ? void 0 : _a.address;
    }
    if (token.denom.startsWith('inj')) {
        return (_b = token.cw20) === null || _b === void 0 ? void 0 : _b.address;
    }
    if (token.denom.startsWith('factory/')) {
        const [, , address] = token.denom;
        return address;
    }
    if (token.denom.startsWith('peggy')) {
        return (_c = token.erc20) === null || _c === void 0 ? void 0 : _c.address;
    }
    if (token.denom.startsWith('share')) {
        return '';
    }
    return '';
};
exports.getTokenAddress = getTokenAddress;
/**
 * This function can be used to get a token with
 * cw20 information when we have multiple
 * cw20 variations of the same token based on the address/denom
 */
const getCw20TokenSingle = (token, source) => {
    const { cw20, cw20s } = token;
    const denom = token.denom || '';
    if (!cw20 && !cw20s) {
        return;
    }
    if (cw20) {
        return Object.assign(Object.assign({}, token), { cw20, denom: cw20.address, tokenType: (0, exports.getTokenTypeFromDenom)(cw20.address) });
    }
    if (cw20s) {
        if (denom) {
            const [cw20Address] = denom.startsWith('inj')
                ? [denom]
                : denom.split('/').reverse();
            const cw20 = cw20s.find((cw20) => cw20.address === cw20Address);
            return cw20
                ? Object.assign(Object.assign({}, token), { cw20, denom: cw20.address, symbol: cw20.symbol, tokenType: (0, exports.getTokenTypeFromDenom)(cw20.address) }) : undefined;
        }
        if (source) {
            const cw20 = cw20s.find((cw20) => cw20.source === source);
            return cw20
                ? Object.assign(Object.assign({}, token), { cw20, denom: cw20.address, symbol: cw20.symbol, tokenType: (0, exports.getTokenTypeFromDenom)(cw20.address) }) : undefined;
        }
    }
    return undefined;
};
exports.getCw20TokenSingle = getCw20TokenSingle;
const getTokenFromMeta = (meta, denom) => {
    var _a;
    const isBaseIbcDenom = tokens_1.ibcBaseDenoms.includes(denom || '') || ((_a = meta.ibc) === null || _a === void 0 ? void 0 : _a.baseDenom) === denom;
    const tokenType = isBaseIbcDenom
        ? types_1.TokenType.Ibc
        : (0, exports.getTokenTypeFromDenom)(denom || '');
    const token = Object.assign(Object.assign({}, meta), { tokenType, denom: denom || '' });
    const tokenWithDecimalsAndSymbol = Object.assign(Object.assign({}, token), { tokenType, decimals: (0, exports.getTokenDecimals)(token), symbol: (0, exports.getTokenSymbol)(token) });
    if (![types_1.TokenType.TokenFactory, types_1.TokenType.Cw20].includes(tokenType)) {
        return tokenWithDecimalsAndSymbol;
    }
    /**
     * If there are multiple cw20 variations
     * of the token we find the one that corresponds
     * to the contract address and set it on the cw20 field
     *
     * If there is only one cw20 version then we use that one
     * as the default version
     */
    if (tokenWithDecimalsAndSymbol.cw20) {
        return Object.assign(Object.assign({}, tokenWithDecimalsAndSymbol), { cw20s: [] });
    }
    if (tokenWithDecimalsAndSymbol.cw20s) {
        return Object.assign(Object.assign(Object.assign({}, tokenWithDecimalsAndSymbol), (0, exports.getCw20TokenSingle)(Object.assign(Object.assign({}, tokenWithDecimalsAndSymbol), { denom, tokenType: types_1.TokenType.Cw20 }))), { tokenType, denom: tokenWithDecimalsAndSymbol.denom });
    }
    return tokenWithDecimalsAndSymbol;
};
exports.getTokenFromMeta = getTokenFromMeta;
const getUnknownToken = (denom) => {
    return {
        denom,
        name: denom,
        symbol: denom,
        decimals: 18,
        logo: 'untracked.svg',
        coinGeckoId: '',
        tokenType: types_1.TokenType.Unknown,
        tokenVerification: types_1.TokenVerification.Unverified,
    };
};
exports.getUnknownToken = getUnknownToken;
const getUnknownTokenWithSymbol = (denom) => {
    return {
        denom,
        name: denom,
        symbol: 'UNTRACKED',
        decimals: 0,
        logo: 'untracked.svg',
        coinGeckoId: '',
        tokenType: types_1.TokenType.Unknown,
        tokenVerification: types_1.TokenVerification.Unverified,
    };
};
exports.getUnknownTokenWithSymbol = getUnknownTokenWithSymbol;
//# sourceMappingURL=utils.js.map