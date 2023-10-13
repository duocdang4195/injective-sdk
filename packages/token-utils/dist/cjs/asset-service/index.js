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
exports.InjectiveAssetService = void 0;
const utils_1 = require("@injectivelabs/utils");
const exceptions_1 = require("@injectivelabs/exceptions");
class InjectiveAssetService {
    constructor(endpoint) {
        this.client = new utils_1.HttpRestClient(endpoint);
        this.endpoint = endpoint;
    }
    fetchPrice(coinId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pricesResponse = (yield this.client.get('/coins/price', {
                    coinIds: coinId,
                    currency: 'usd',
                }));
                if (pricesResponse.data.data.length === 0) {
                    throw new exceptions_1.HttpRequestException(new Error(`The price for ${coinId} could not be fetched`));
                }
                const [response] = pricesResponse.data.data;
                if (!response) {
                    throw new exceptions_1.HttpRequestException(new Error(`The price for ${coinId} could not be fetched`));
                }
                return response;
            }
            catch (e) {
                throw new exceptions_1.HttpRequestException(new Error(e.message), {
                    context: `${this.endpoint}/coins/price `,
                    contextModule: 'asset-service',
                });
            }
        });
    }
    fetchCoin(coinId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = (yield this.client.get(`/coins/${coinId}`, options));
                return data;
            }
            catch (e) {
                if (e instanceof exceptions_1.HttpRequestException) {
                    throw e;
                }
                throw new exceptions_1.HttpRequestException(new Error(e.message), {
                    context: `${this.endpoint}/coins/${coinId}`,
                    contextModule: 'asset-service',
                });
            }
        });
    }
    fetchCoins(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (yield this.client.get('/coins/list', params));
            }
            catch (e) {
                if (e instanceof exceptions_1.HttpRequestException) {
                    throw e;
                }
                throw new exceptions_1.HttpRequestException(new Error(e.message), {
                    context: `${this.endpoint}/coins/list`,
                    contextModule: 'asset-service',
                });
            }
        });
    }
    fetchChart(id, params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = (yield this.client.get(`/coins/${id}/market_chart/range`, params));
                return data;
            }
            catch (e) {
                if (e instanceof exceptions_1.HttpRequestException) {
                    throw e;
                }
                throw new exceptions_1.HttpRequestException(new Error(e.message), {
                    context: `${this.endpoint}/coins/${id}/market_chart/range`,
                    contextModule: 'asset-service',
                });
            }
        });
    }
    fetchHistory(id, params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = (yield this.client.get(`/coins/${id}/history`, params));
                return data;
            }
            catch (e) {
                if (e instanceof exceptions_1.HttpRequestException) {
                    throw e;
                }
                throw new exceptions_1.HttpRequestException(new Error(e.message), {
                    context: `${this.endpoint}/coins/${id}/history`,
                    contextModule: 'asset-service',
                });
            }
        });
    }
}
exports.InjectiveAssetService = InjectiveAssetService;
//# sourceMappingURL=index.js.map