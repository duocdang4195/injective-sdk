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
exports.TokenPrice = void 0;
const token_utils_1 = require("@injectivelabs/token-utils");
const utils_1 = require("@injectivelabs/utils");
const exceptions_1 = require("@injectivelabs/exceptions");
const constants_1 = require("../constants");
class TokenPrice {
    constructor(coinGeckoOptions) {
        this.cache = {}; // coinGeckoId -> priceInUsd
        this.fetchUsdPricesFromInjectiveService = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const pricesResponse = (yield this.restClient.get('coin/prices'));
                if (pricesResponse.data.data.length === 0) {
                    return {};
                }
                const prices = pricesResponse.data.data.reduce((cache, coin) => (Object.assign(Object.assign({}, cache), { [coin.id]: new utils_1.BigNumberInBase(coin.current_price).toNumber() })), {});
                this.cache = Object.assign(Object.assign({}, this.cache), prices);
                return prices;
            }
            catch (e) {
                return {};
            }
        });
        this.fetchUsdTokenPriceFromCoinGeckoInChunks = (coinIds) => __awaiter(this, void 0, void 0, function* () {
            const CHUNK_SIZE = 5;
            const chunks = (0, utils_1.splitArrayToChunks)({
                array: coinIds,
                chunkSize: CHUNK_SIZE,
                filter: (c) => !!c,
            });
            /**
             * We make chunks to ensure that we don't hit the
             * rate limits on CoinGecko by querying multiple
             * prices at the same time as we do multiple
             * calls at the same time
             */
            const response = yield Promise.all(chunks.map((chunk, index) => __awaiter(this, void 0, void 0, function* () {
                let prices = {};
                for (let i = 0; i < chunk.length; i += 1) {
                    const price = yield this.fetchUsdTokenPriceFromCoinGeckoNoThrow(chunk[i]);
                    prices[chunk[i]] = price;
                }
                if (index < chunks.length - 1) {
                    yield (0, utils_1.sleep)(500);
                }
                return prices;
            })));
            const prices = response.reduce((prices, chunkResponse) => {
                return Object.assign(Object.assign({}, prices), chunkResponse);
            }, {});
            this.cache = Object.assign(Object.assign({}, this.cache), prices);
            return prices;
        });
        this.restClient = new utils_1.HttpRestClient(constants_1.ASSET_PRICE_SERVICE_URL);
        this.coinGeckoApi = coinGeckoOptions
            ? new token_utils_1.CoinGeckoApi(coinGeckoOptions)
            : undefined;
    }
    fetchUsdTokensPrice(coinIds) {
        return __awaiter(this, void 0, void 0, function* () {
            if (coinIds.length === 0) {
                return {};
            }
            let prices = {};
            const pricesFromCache = coinIds.reduce((prices, coinId) => {
                try {
                    const priceFromCache = this.cache[coinId];
                    if (priceFromCache) {
                        return Object.assign(Object.assign({}, prices), { [coinId]: priceFromCache });
                    }
                    return prices;
                }
                catch (e) {
                    return prices;
                }
            }, {});
            prices = Object.assign(Object.assign({}, prices), pricesFromCache);
            const coinIdsNotInCache = coinIds.filter((coinId) => !Object.keys(prices).includes(coinId));
            if (coinIdsNotInCache.length === 0) {
                return prices;
            }
            const pricesFromInjectiveService = yield this.fetchUsdPricesFromInjectiveService();
            prices = Object.assign(Object.assign({}, prices), pricesFromInjectiveService);
            const coinIdsNotInCacheAndInjectiveService = coinIds.filter((coinId) => !Object.keys(prices).includes(coinId));
            if (coinIdsNotInCacheAndInjectiveService.length === 0) {
                return prices;
            }
            const pricesFromCoinGecko = yield this.fetchUsdTokenPriceFromCoinGeckoInChunks(coinIdsNotInCacheAndInjectiveService);
            prices = Object.assign(Object.assign({}, prices), pricesFromCoinGecko);
            const coinIdsNotInCacheAndInjectiveServiceAndCoinGecko = coinIds.filter((coinId) => !Object.keys(prices).includes(coinId));
            if (coinIdsNotInCacheAndInjectiveServiceAndCoinGecko.length === 0) {
                return prices;
            }
            const coinIdsWithoutPrice = Object.keys(coinIdsNotInCacheAndInjectiveService).reduce((prices, key) => (Object.assign(Object.assign({}, prices), { [key]: 0 })), {});
            return Object.assign(Object.assign({}, prices), coinIdsWithoutPrice);
        });
    }
    fetchUsdTokenPrice(coinId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!coinId) {
                return 0;
            }
            try {
                try {
                    const priceFromCache = yield this.getUsdTokenPriceFromCache(coinId);
                    if (priceFromCache) {
                        return priceFromCache;
                    }
                }
                catch (e) {
                    //
                }
                try {
                    const priceInUsdFromInjectiveService = yield this.fetchUsdTokenPriceFromInjectiveService(coinId);
                    if (priceInUsdFromInjectiveService) {
                        return priceInUsdFromInjectiveService;
                    }
                }
                catch (e) {
                    //
                }
                const priceInUsdFromCoinGecko = yield this.fetchUsdTokenPriceFromCoinGecko(coinId);
                if (priceInUsdFromCoinGecko) {
                    return priceInUsdFromCoinGecko;
                }
                return 0;
            }
            catch (e) {
                if (e instanceof exceptions_1.HttpRequestException) {
                    throw e;
                }
                throw new exceptions_1.HttpRequestException(new Error(e.message));
            }
        });
    }
    fetchUsdTokenPriceFromInjectiveService(coinId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!coinId) {
                return 0;
            }
            try {
                const pricesResponse = (yield this.restClient.get('coin/price', {
                    coinIds: coinId,
                    currency: 'usd',
                }));
                if (pricesResponse.data.data.length === 0) {
                    return 0;
                }
                const [priceResponse] = pricesResponse.data.data;
                if (!priceResponse) {
                    return 0;
                }
                const { current_price: currentPrice } = priceResponse;
                if (!currentPrice) {
                    return 0;
                }
                const priceInUsd = new utils_1.BigNumberInBase(currentPrice).toNumber();
                this.cache[coinId] = priceInUsd;
                return priceInUsd;
            }
            catch (e) {
                if (e instanceof exceptions_1.HttpRequestException) {
                    throw e;
                }
                throw new exceptions_1.HttpRequestException(new Error(e.message));
            }
        });
    }
    fetchUsdTokenPriceFromCoinGecko(coinId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!coinId) {
                return 0;
            }
            if (!this.coinGeckoApi) {
                return 0;
            }
            try {
                const currentPrice = yield this.coinGeckoApi.fetchUsdPrice(coinId);
                if (!currentPrice) {
                    return 0;
                }
                const priceInUsd = new utils_1.BigNumberInBase(currentPrice).toNumber();
                this.cache[coinId] = priceInUsd;
                return priceInUsd;
            }
            catch (e) {
                if (e instanceof exceptions_1.HttpRequestException) {
                    throw e;
                }
                throw new exceptions_1.HttpRequestException(new Error(e.message));
            }
        });
    }
    fetchUsdTokenPriceFromCoinGeckoNoThrow(coinId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!coinId) {
                return 0;
            }
            if (!this.coinGeckoApi) {
                return 0;
            }
            try {
                const priceInUsd = yield this.coinGeckoApi.fetchUsdPrice(coinId);
                if (!priceInUsd) {
                    return 0;
                }
                return new utils_1.BigNumberInBase(priceInUsd).toNumber();
            }
            catch (e) {
                return 0;
            }
        });
    }
    getUsdTokenPriceFromCache(coinId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cacheIsEmpty = Object.keys(this.cache).length === 0;
                if (cacheIsEmpty) {
                    yield this.initCache();
                }
            }
            catch (e) {
                throw new exceptions_1.HttpRequestException(new Error(e.message));
            }
            if (this.cache[coinId]) {
                return this.cache[coinId];
            }
            return undefined;
        });
    }
    initCache() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pricesResponse = (yield this.restClient.get('coin/prices'));
                if (pricesResponse.data.data.length === 0) {
                    return;
                }
                this.cache = pricesResponse.data.data.reduce((cache, coin) => (Object.assign(Object.assign({}, cache), { [coin.id]: new utils_1.BigNumberInBase(coin.current_price).toNumber() })), {});
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
exports.TokenPrice = TokenPrice;
//# sourceMappingURL=TokenPrice.js.map