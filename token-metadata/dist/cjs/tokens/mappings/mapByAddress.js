"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMappedTokensByCw20Address = exports.getMappedTokensByErc20Address = void 0;
const getMappedTokensByErc20Address = (tokens) => Object.keys(tokens)
    .filter((token) => !!(tokens[token].erc20 || tokens[token].evm))
    .reduce((result, token) => {
    if (!tokens[token].erc20 && !tokens[token].evm) {
        return result;
    }
    if (tokens[token].erc20) {
        return Object.assign(Object.assign({}, result), { [tokens[token].erc20.address]: tokens[token] });
    }
    if (tokens[token].evm) {
        return Object.assign(Object.assign({}, result), { [tokens[token].evm.address]: tokens[token] });
    }
    return result;
}, {});
exports.getMappedTokensByErc20Address = getMappedTokensByErc20Address;
const getMappedTokensByCw20Address = (tokens) => Object.keys(tokens)
    .filter((token) => tokens[token].cw20 || tokens[token].cw20s)
    .reduce((result, token) => {
    if (!tokens[token].cw20 && !tokens[token].cw20s) {
        return result;
    }
    const tokenMeta = tokens[token];
    if (tokenMeta.cw20) {
        return Object.assign(Object.assign({}, result), { [tokenMeta.cw20.address]: tokens[token] });
    }
    if (tokenMeta.cw20s) {
        const cw20Maps = tokenMeta.cw20s.reduce((result, cw20) => (Object.assign(Object.assign({}, result), { [cw20.address]: tokens[token] })), {});
        return Object.assign(Object.assign({}, result), cw20Maps);
    }
    return result;
}, {});
exports.getMappedTokensByCw20Address = getMappedTokensByCw20Address;
//# sourceMappingURL=mapByAddress.js.map