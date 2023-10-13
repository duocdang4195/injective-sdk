"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenPriceUtilFactory = void 0;
const types_1 = require("./types");
const CoinGeckoPriceUtil_1 = __importDefault(require("./CoinGeckoPriceUtil"));
class TokenPriceUtilFactory {
    static make(type, options) {
        switch (type) {
            case types_1.TokenPriceType.CoinGecko:
                return new CoinGeckoPriceUtil_1.default(options);
            default:
                return new CoinGeckoPriceUtil_1.default(options);
        }
    }
}
exports.TokenPriceUtilFactory = TokenPriceUtilFactory;
//# sourceMappingURL=TokenPriceUtilFactory.js.map