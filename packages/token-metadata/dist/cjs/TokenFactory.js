"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenFactory = void 0;
const networks_1 = require("@injectivelabs/networks");
const exceptions_1 = require("@injectivelabs/exceptions");
const utils_1 = require("@injectivelabs/utils");
const TokenInfo_1 = require("./TokenInfo");
const TokenMetaUtils_1 = require("./TokenMetaUtils");
const network_1 = require("./tokens/network");
const types_1 = require("./types");
const tokens_1 = __importDefault(require("./tokens/tokens"));
const utils_2 = require("./utils");
class TokenFactory {
    constructor(tokenMetaUtils) {
        this.tokenMetaUtils = tokenMetaUtils;
    }
    static make(network = networks_1.Network.Mainnet) {
        if ((0, networks_1.isTestnet)(network)) {
            return new TokenFactory(new TokenMetaUtils_1.TokenMetaUtils((0, network_1.getTokensBySymbolForTestnet)()));
        }
        if (network === networks_1.Network.Devnet) {
            return new TokenFactory(new TokenMetaUtils_1.TokenMetaUtils((0, network_1.getTokensBySymbolForDevnet)()));
        }
        if (network === networks_1.Network.Devnet1) {
            return new TokenFactory(new TokenMetaUtils_1.TokenMetaUtils((0, network_1.getTokensBySymbolForDevnet1)()));
        }
        if (network === networks_1.Network.Devnet2) {
            return new TokenFactory(new TokenMetaUtils_1.TokenMetaUtils((0, network_1.getTokensBySymbolForDevnet2)()));
        }
        return new TokenFactory(new TokenMetaUtils_1.TokenMetaUtils(tokens_1.default));
    }
    toToken(denom) {
        const isDenom = denom.startsWith('ibc/') ||
            denom.startsWith('peggy') ||
            denom.startsWith('factory/');
        if (denom === utils_1.INJ_DENOM) {
            return (0, utils_2.getTokenFromMeta)(this.tokenMetaUtils.getMetaBySymbol(denom), denom);
        }
        try {
            if (!isDenom) {
                const bySymbol = this.tokenMetaUtils.getMetaBySymbol(denom);
                if (bySymbol) {
                    return (0, utils_2.getTokenFromMeta)(bySymbol, denom);
                }
                const byAddress = this.tokenMetaUtils.getMetaByAddress(denom);
                if (byAddress) {
                    return (0, utils_2.getTokenFromMeta)(byAddress, denom);
                }
                const byName = this.tokenMetaUtils.getMetaByName(denom);
                if (byName) {
                    return (0, utils_2.getTokenFromMeta)(byName, denom);
                }
                return;
            }
            if (denom.startsWith('ibc/')) {
                const meta = this.getIbcDenomTokenMeta(denom);
                return meta ? (0, utils_2.getTokenFromMeta)(meta, denom) : undefined;
            }
            if (denom.startsWith('factory/')) {
                const meta = this.getFactoryDenomTokenMeta(denom);
                return meta ? (0, utils_2.getTokenFromMeta)(meta, denom) : undefined;
            }
            if (denom.startsWith('peggy')) {
                const meta = this.getPeggyDenomTokenMeta(denom);
                return meta ? (0, utils_2.getTokenFromMeta)(meta, denom) : undefined;
            }
            const meta = this.getCw20DenomTokenMeta(denom);
            return meta ? (0, utils_2.getTokenFromMeta)(meta, denom) : undefined;
        }
        catch (e) {
            return undefined;
        }
    }
    toTokenInfo(denom) {
        const token = this.toToken(denom);
        return token ? TokenInfo_1.TokenInfo.fromToken(token) : undefined;
    }
    getPeggyDenomTokenMeta(denom) {
        const address = denom.startsWith('peggy')
            ? denom.replace('peggy', '')
            : denom;
        if (!address.startsWith('0x')) {
            throw new exceptions_1.GeneralException(new Error(`The address ${address} is not a valid ERC20 address`));
        }
        if (address.length !== 42) {
            throw new exceptions_1.GeneralException(new Error(`The address ${address} is not a valid ERC20 address`));
        }
        return this.tokenMetaUtils.getMetaByAddress(address);
    }
    getCw20DenomTokenMeta(address) {
        if (!address.startsWith('inj')) {
            throw new exceptions_1.GeneralException(new Error(`The address ${address} is not a valid CW20 address`));
        }
        return this.tokenMetaUtils.getMetaByAddress(address);
    }
    getIbcDenomTokenMeta(hash) {
        return this.tokenMetaUtils.getMetaByHash(hash);
    }
    getFactoryDenomTokenMeta(denom) {
        const [address] = denom.split('/').reverse();
        if (!address) {
            throw new exceptions_1.GeneralException(new Error(`The address ${address} is not a valid CW20 address`));
        }
        if (address.startsWith('inj')) {
            const tokenMeta = this.tokenMetaUtils.getMetaByAddress(address);
            return tokenMeta
                ? Object.assign(Object.assign({}, tokenMeta), { tokenType: types_1.TokenType.TokenFactory }) : undefined;
        }
        const tokenMeta = this.tokenMetaUtils.getMetaBySymbol(address) ||
            this.tokenMetaUtils.getMetaByName(address);
        return tokenMeta
            ? Object.assign(Object.assign({}, tokenMeta), { tokenType: types_1.TokenType.TokenFactory }) : undefined;
    }
}
exports.TokenFactory = TokenFactory;
//# sourceMappingURL=TokenFactory.js.map