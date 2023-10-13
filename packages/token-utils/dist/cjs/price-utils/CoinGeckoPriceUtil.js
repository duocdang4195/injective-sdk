"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@injectivelabs/utils");
const exceptions_1 = require("@injectivelabs/exceptions");
const TokenPriceUtilBase_1 = require("./TokenPriceUtilBase");
class CoinGeckoPriceUtil extends TokenPriceUtilBase_1.TokenPriceUtilBase {
    constructor({ apiKey, baseUrl }) {
        super();
        this.httpClient = new utils_1.HttpRestClient(baseUrl);
        this.apiKey = apiKey;
    }
    fetchPrice(coinId, options = {}) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const actualParams = Object.assign({ localization: false, community_data: false, tickers: false, sparkline: false, developer_data: false, x_cg_pro_api_key: this.apiKey }, options);
                const { data } = (yield this.httpClient.get(`/coins/${coinId}`, actualParams));
                return (_a = data === null || data === void 0 ? void 0 : data.market_data) === null || _a === void 0 ? void 0 : _a.current_price;
            }
            catch (e) {
                if (e instanceof exceptions_1.HttpRequestException) {
                    throw e;
                }
                throw new exceptions_1.HttpRequestException(new Error(e.message));
            }
        });
    }
    fetchUsdPrice(coinId, options = {}) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const actualParams = Object.assign({ localization: false, community_data: false, tickers: false, sparkline: false, developer_data: false, x_cg_pro_api_key: this.apiKey }, options);
                const { data } = (yield this.httpClient.get(`/coins/${coinId}`, actualParams));
                return (_b = (_a = data === null || data === void 0 ? void 0 : data.market_data) === null || _a === void 0 ? void 0 : _a.current_price) === null || _b === void 0 ? void 0 : _b.usd;
            }
            catch (e) {
                if (e instanceof exceptions_1.HttpRequestException) {
                    throw e;
                }
                throw new exceptions_1.HttpRequestException(new Error(e.message));
            }
        });
    }
}
exports.default = CoinGeckoPriceUtil;
//# sourceMappingURL=CoinGeckoPriceUtil.js.map