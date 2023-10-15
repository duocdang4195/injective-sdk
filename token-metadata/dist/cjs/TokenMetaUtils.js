"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenMetaUtils = void 0;
const mapByAddress_1 = require("./tokens/mappings/mapByAddress");
const mapByName_1 = require("./tokens/mappings/mapByName");
const mapByHash_1 = require("./tokens/mappings/mapByHash");
const mapBySymbol_1 = require("./tokens/mappings/mapBySymbol");
const types_1 = require("./types");
class TokenMetaUtils {
    constructor(tokens) {
        this.tokens = (0, mapBySymbol_1.getMappedTokensBySymbol)(tokens);
        this.tokensByErc20Address = (0, mapByAddress_1.getMappedTokensByErc20Address)(this.tokens);
        this.tokensByCw20Address = (0, mapByAddress_1.getMappedTokensByCw20Address)(this.tokens);
        this.tokensByHash = (0, mapByHash_1.getMappedTokensByHash)(this.tokens);
        this.tokensByName = (0, mapByName_1.getMappedTokensByName)(this.tokens);
    }
    /**
     * Symbol can be:
     * - Main symbol of the token meta,
     * - BaseDenom based on the ibc hash
     * - Variation of a symbol for multiple versions of the same token (ex: USDC, USDCet, USDCso)
     */
    getMetaBySymbol(symbol) {
        const { tokens: tokensBySymbol } = this;
        const tokenSymbol = symbol.toUpperCase();
        if (!tokensBySymbol[tokenSymbol] && !tokensBySymbol[symbol]) {
            return;
        }
        const tokenMeta = tokensBySymbol[tokenSymbol] || tokensBySymbol[symbol];
        return Object.assign(Object.assign({}, tokenMeta), { tokenVerification: types_1.TokenVerification.Verified });
    }
    getMetaByAddress(address) {
        return address.startsWith('0x')
            ? this.getMetaByErc20Address(address)
            : this.getMetaByCw20Address(address);
    }
    getMetaByCw20Address(address) {
        const { tokensByCw20Address } = this;
        const contractAddress = address.toLowerCase();
        if (!tokensByCw20Address[contractAddress] &&
            !tokensByCw20Address[address]) {
            return;
        }
        const tokenMeta = tokensByCw20Address[contractAddress] || tokensByCw20Address[address];
        return tokenMeta
            ? Object.assign(Object.assign({}, tokenMeta), { tokenType: types_1.TokenType.Cw20, tokenVerification: types_1.TokenVerification.Verified }) : undefined;
    }
    getMetaByErc20Address(address) {
        const { tokensByErc20Address } = this;
        const contractAddress = address.toLowerCase();
        if (!tokensByErc20Address[contractAddress] &&
            !tokensByErc20Address[address]) {
            const checksumAddress = Object.keys(tokensByErc20Address).find((checksumAddress) => checksumAddress.toLowerCase() === address ||
                checksumAddress.toLowerCase() === contractAddress);
            if (checksumAddress) {
                const tokenMeta = tokensByErc20Address[checksumAddress];
                return Object.assign(Object.assign({}, tokenMeta), { tokenType: tokenMeta.erc20 ? types_1.TokenType.Erc20 : types_1.TokenType.Evm, tokenVerification: types_1.TokenVerification.Verified });
            }
            return;
        }
        const tokenMeta = tokensByErc20Address[contractAddress] || tokensByErc20Address[address];
        return tokenMeta
            ? Object.assign(Object.assign({}, tokenMeta), { tokenType: tokenMeta.erc20 ? types_1.TokenType.Erc20 : types_1.TokenType.Evm, tokenVerification: types_1.TokenVerification.Verified }) : undefined;
    }
    getMetaByHash(hash) {
        const { tokensByHash } = this;
        const ibcHash = hash
            .toUpperCase()
            .replace('IBC/', '');
        if (!tokensByHash[ibcHash] && !tokensByHash[hash]) {
            return;
        }
        const tokenMeta = tokensByHash[ibcHash] || tokensByHash[hash];
        return tokenMeta
            ? Object.assign(Object.assign({}, tokenMeta), { tokenType: types_1.TokenType.Ibc, tokenVerification: types_1.TokenVerification.Verified }) : undefined;
    }
    getMetaByName(name) {
        const { tokensByName } = this;
        const tokenName = name.toLowerCase();
        if (!tokensByName[tokenName] && !tokensByName[name]) {
            return;
        }
        const tokenMeta = tokensByName[tokenName] || tokensByName[name];
        return Object.assign(Object.assign({}, tokenMeta), { tokenVerification: types_1.TokenVerification.Verified });
    }
    getCoinGeckoIdFromSymbol(symbol) {
        const { tokens: tokensBySymbol } = this;
        const symbolToUppercase = symbol.toUpperCase();
        if (!tokensBySymbol[symbolToUppercase]) {
            return '';
        }
        return tokensBySymbol[symbolToUppercase].coinGeckoId || '';
    }
}
exports.TokenMetaUtils = TokenMetaUtils;
//# sourceMappingURL=TokenMetaUtils.js.map