import { HttpRestClient } from '@injectivelabs/utils';
import { HttpRequestException } from '@injectivelabs/exceptions';
export default class CoinGeckoApi {
    httpClient;
    apiKey;
    constructor({ apiKey, baseUrl }) {
        const headers = {
            'Content-Type': 'application/json',
        };
        if (apiKey) {
            headers['X-Cg-Pro-Api-Key'] = apiKey;
        }
        this.apiKey = apiKey;
        this.httpClient = new HttpRestClient(baseUrl, { timeout: 1500 }).setConfig({
            headers,
        });
    }
    async fetchCoin(coinId, options = {}) {
        try {
            const actualParams = {
                localization: false,
                community_data: false,
                tickers: false,
                sparkline: false,
                developer_data: false,
                x_cg_pro_api_key: this.apiKey,
                ...options,
            };
            const { data } = (await this.httpClient.get(`/coins/${coinId}`, actualParams));
            return data;
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message));
        }
    }
    async fetchPrice(coinId, options = {}) {
        try {
            const actualParams = {
                localization: false,
                community_data: false,
                tickers: false,
                sparkline: false,
                developer_data: false,
                x_cg_pro_api_key: this.apiKey,
                ...options,
            };
            const { data } = (await this.httpClient.get(`/coins/${coinId}`, actualParams));
            return data?.market_data?.current_price;
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message));
        }
    }
    async fetchUsdPrice(coinId, options = {}) {
        try {
            const actualParams = {
                localization: false,
                community_data: false,
                tickers: false,
                sparkline: false,
                developer_data: false,
                x_cg_pro_api_key: this.apiKey,
                ...options,
            };
            const { data } = (await this.httpClient.get(`/coins/${coinId}`, actualParams));
            return data?.market_data?.current_price?.usd;
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message));
        }
    }
    async fetchCoins(params = {}) {
        try {
            const actualParams = {
                include_platform: false,
                x_cg_pro_api_key: this.apiKey,
                ...params,
            };
            return (await this.httpClient.get('/coins/list', actualParams));
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message));
        }
    }
    async fetchChart(id, params = {}) {
        try {
            const actualParams = {
                ...params,
                x_cg_pro_api_key: this.apiKey,
            };
            const { data } = (await this.httpClient.get(`/coins/${id}/market_chart/range`, actualParams));
            return data;
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message));
        }
    }
    async fetchHistory(id, params = {}) {
        try {
            const actualParams = {
                ...params,
                x_cg_pro_api_key: this.apiKey,
            };
            const { data } = (await this.httpClient.get(`/coins/${id}/history`, actualParams));
            return data;
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message));
        }
    }
}
//# sourceMappingURL=CoinGeckoApi.js.map