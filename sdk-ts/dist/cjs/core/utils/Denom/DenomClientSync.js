"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DenomClientSync = void 0;
const token_metadata_1 = require("@injectivelabs/token-metadata");
const networks_1 = require("@injectivelabs/networks");
/**
 * This client can be used to fetch token
 * denoms in a fully sync way (without API calls)
 *
 * @category Utility Classes
 *
 * @deprecated use DenomClient instead (they are the same)
 */
class DenomClientSync {
    constructor(network = networks_1.Network.Mainnet) {
        this.tokenFactory = token_metadata_1.TokenFactory.make(network);
        this.tokenMetaUtils = token_metadata_1.TokenMetaUtilsFactory.make(network);
    }
    getDenomTokenInfo(denom) {
        return this.tokenFactory.toTokenInfo(denom);
    }
    getDenomToken(denom) {
        return this.tokenFactory.toToken(denom);
    }
    getDenomsToken(denoms) {
        return denoms.map((denom) => this.getDenomToken(denom));
    }
    getDenomsTokenInfo(denoms) {
        return denoms.map((denom) => this.getDenomTokenInfo(denom));
    }
    getTokenMetaDataBySymbol(symbol) {
        return this.tokenMetaUtils.getMetaBySymbol(symbol);
    }
    getTokenMetaDataByAddress(address) {
        return this.tokenMetaUtils.getMetaByAddress(address);
    }
    getTokenMetaDataByName(name) {
        return this.tokenMetaUtils.getMetaByName(name);
    }
    getCoinGeckoId(denom) {
        return this.tokenMetaUtils.getCoinGeckoIdFromSymbol(denom);
    }
}
exports.DenomClientSync = DenomClientSync;
//# sourceMappingURL=DenomClientSync.js.map