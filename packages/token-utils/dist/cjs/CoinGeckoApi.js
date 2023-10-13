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
class CoinGeckoApi {
    constructor({ apiKey, baseUrl }) {
        const headers = {
            'Content-Type': 'application/json',
        };
        if (apiKey) {
            headers['X-Cg-Pro-Api-Key'] = apiKey;
        }
        this.apiKey = apiKey;
        this.httpClient = new utils_1.HttpRestClient(baseUrl, { timeout: 1500 }).setConfig({
            headers,
        });
    }
    fetchCoin(coinId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const actualParams = Object.assign({ localization: false, community_data: false, tickers: false, sparkline: false, developer_data: false, x_cg_pro_api_key: this.apiKey }, options);
                const { data } = (yield this.httpClient.get(`/coins/${coinId}`, actualParams));
                return data;
            }
            catch (e) {
                if (e instanceof exceptions_1.HttpRequestException) {
                    throw e;
                }
                throw new exceptions_1.HttpRequestException(new Error(e.message));
            }
        });
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
    fetchCoins(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const actualParams = Object.assign({ include_platform: false, x_cg_pro_api_key: this.apiKey }, params);
                return (yield this.httpClient.get('/coins/list', actualParams));
            }
            catch (e) {
                if (e instanceof exceptions_1.HttpRequestException) {
                    throw e;
                }
                throw new exceptions_1.HttpRequestException(new Error(e.message));
            }
        });
    }
    fetchChart(id, params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const actualParams = Object.assign(Object.assign({}, params), { x_cg_pro_api_key: this.apiKey });
                const { data } = (yield this.httpClient.get(`/coins/${id}/market_chart/range`, actualParams));
                return data;
            }
            catch (e) {
                if (e instanceof exceptions_1.HttpRequestException) {
                    throw e;
                }
                throw new exceptions_1.HttpRequestException(new Error(e.message));
            }
        });
    }
    fetchHistory(id, params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const actualParams = Object.assign(Object.assign({}, params), { x_cg_pro_api_key: this.apiKey });
                const { data } = (yield this.httpClient.get(`/coins/${id}/history`, actualParams));
                return data;
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
exports.default = CoinGeckoApi;
//# sourceMappingURL=CoinGeckoApi.js.map