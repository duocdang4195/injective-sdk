import { CoinGeckoApi } from '@injectivelabs/token-utils';
import { sleep, splitArrayToChunks, BigNumberInBase, HttpRestClient, } from '@injectivelabs/utils';
import { HttpRequestException } from '@injectivelabs/exceptions';
import { ASSET_PRICE_SERVICE_URL } from '../constants';
export class TokenPrice {
    coinGeckoApi;
    restClient;
    cache = {}; // coinGeckoId -> priceInUsd
    constructor(coinGeckoOptions) {
        this.restClient = new HttpRestClient(ASSET_PRICE_SERVICE_URL);
        this.coinGeckoApi = coinGeckoOptions
            ? new CoinGeckoApi(coinGeckoOptions)
            : undefined;
    }
    async fetchUsdTokensPrice(coinIds) {
        if (coinIds.length === 0) {
            return {};
        }
        let prices = {};
        const pricesFromCache = coinIds.reduce((prices, coinId) => {
            try {
                const priceFromCache = this.cache[coinId];
                if (priceFromCache) {
                    return { ...prices, [coinId]: priceFromCache };
                }
                return prices;
            }
            catch (e) {
                return prices;
            }
        }, {});
        prices = { ...prices, ...pricesFromCache };
        const coinIdsNotInCache = coinIds.filter((coinId) => !Object.keys(prices).includes(coinId));
        if (coinIdsNotInCache.length === 0) {
            return prices;
        }
        const pricesFromInjectiveService = await this.fetchUsdPricesFromInjectiveService();
        prices = { ...prices, ...pricesFromInjectiveService };
        const coinIdsNotInCacheAndInjectiveService = coinIds.filter((coinId) => !Object.keys(prices).includes(coinId));
        if (coinIdsNotInCacheAndInjectiveService.length === 0) {
            return prices;
        }
        const pricesFromCoinGecko = await this.fetchUsdTokenPriceFromCoinGeckoInChunks(coinIdsNotInCacheAndInjectiveService);
        prices = { ...prices, ...pricesFromCoinGecko };
        const coinIdsNotInCacheAndInjectiveServiceAndCoinGecko = coinIds.filter((coinId) => !Object.keys(prices).includes(coinId));
        if (coinIdsNotInCacheAndInjectiveServiceAndCoinGecko.length === 0) {
            return prices;
        }
        const coinIdsWithoutPrice = Object.keys(coinIdsNotInCacheAndInjectiveService).reduce((prices, key) => ({ ...prices, [key]: 0 }), {});
        return { ...prices, ...coinIdsWithoutPrice };
    }
    async fetchUsdTokenPrice(coinId) {
        if (!coinId) {
            return 0;
        }
        try {
            try {
                const priceFromCache = await this.getUsdTokenPriceFromCache(coinId);
                if (priceFromCache) {
                    return priceFromCache;
                }
            }
            catch (e) {
                //
            }
            try {
                const priceInUsdFromInjectiveService = await this.fetchUsdTokenPriceFromInjectiveService(coinId);
                if (priceInUsdFromInjectiveService) {
                    return priceInUsdFromInjectiveService;
                }
            }
            catch (e) {
                //
            }
            const priceInUsdFromCoinGecko = await this.fetchUsdTokenPriceFromCoinGecko(coinId);
            if (priceInUsdFromCoinGecko) {
                return priceInUsdFromCoinGecko;
            }
            return 0;
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message));
        }
    }
    async fetchUsdTokenPriceFromInjectiveService(coinId) {
        if (!coinId) {
            return 0;
        }
        try {
            const pricesResponse = (await this.restClient.get('coin/price', {
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
            const priceInUsd = new BigNumberInBase(currentPrice).toNumber();
            this.cache[coinId] = priceInUsd;
            return priceInUsd;
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message));
        }
    }
    async fetchUsdTokenPriceFromCoinGecko(coinId) {
        if (!coinId) {
            return 0;
        }
        if (!this.coinGeckoApi) {
            return 0;
        }
        try {
            const currentPrice = await this.coinGeckoApi.fetchUsdPrice(coinId);
            if (!currentPrice) {
                return 0;
            }
            const priceInUsd = new BigNumberInBase(currentPrice).toNumber();
            this.cache[coinId] = priceInUsd;
            return priceInUsd;
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message));
        }
    }
    async fetchUsdTokenPriceFromCoinGeckoNoThrow(coinId) {
        if (!coinId) {
            return 0;
        }
        if (!this.coinGeckoApi) {
            return 0;
        }
        try {
            const priceInUsd = await this.coinGeckoApi.fetchUsdPrice(coinId);
            if (!priceInUsd) {
                return 0;
            }
            return new BigNumberInBase(priceInUsd).toNumber();
        }
        catch (e) {
            return 0;
        }
    }
    async getUsdTokenPriceFromCache(coinId) {
        try {
            const cacheIsEmpty = Object.keys(this.cache).length === 0;
            if (cacheIsEmpty) {
                await this.initCache();
            }
        }
        catch (e) {
            throw new HttpRequestException(new Error(e.message));
        }
        if (this.cache[coinId]) {
            return this.cache[coinId];
        }
        return undefined;
    }
    fetchUsdPricesFromInjectiveService = async () => {
        try {
            const pricesResponse = (await this.restClient.get('coin/prices'));
            if (pricesResponse.data.data.length === 0) {
                return {};
            }
            const prices = pricesResponse.data.data.reduce((cache, coin) => ({
                ...cache,
                [coin.id]: new BigNumberInBase(coin.current_price).toNumber(),
            }), {});
            this.cache = { ...this.cache, ...prices };
            return prices;
        }
        catch (e) {
            return {};
        }
    };
    fetchUsdTokenPriceFromCoinGeckoInChunks = async (coinIds) => {
        const CHUNK_SIZE = 5;
        const chunks = splitArrayToChunks({
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
        const response = await Promise.all(chunks.map(async (chunk, index) => {
            let prices = {};
            for (let i = 0; i < chunk.length; i += 1) {
                const price = await this.fetchUsdTokenPriceFromCoinGeckoNoThrow(chunk[i]);
                prices[chunk[i]] = price;
            }
            if (index < chunks.length - 1) {
                await sleep(500);
            }
            return prices;
        }));
        const prices = response.reduce((prices, chunkResponse) => {
            return { ...prices, ...chunkResponse };
        }, {});
        this.cache = { ...this.cache, ...prices };
        return prices;
    };
    async initCache() {
        try {
            const pricesResponse = (await this.restClient.get('coin/prices'));
            if (pricesResponse.data.data.length === 0) {
                return;
            }
            this.cache = pricesResponse.data.data.reduce((cache, coin) => ({
                ...cache,
                [coin.id]: new BigNumberInBase(coin.current_price).toNumber(),
            }), {});
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message));
        }
    }
}
//# sourceMappingURL=TokenPrice.js.map