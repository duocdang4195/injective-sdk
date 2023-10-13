import { HttpRestClient } from '@injectivelabs/utils';
import { HttpRequestException } from '@injectivelabs/exceptions';
export class InjectiveAssetService {
    client;
    endpoint;
    constructor(endpoint) {
        this.client = new HttpRestClient(endpoint);
        this.endpoint = endpoint;
    }
    async fetchPrice(coinId) {
        try {
            const pricesResponse = (await this.client.get('/coins/price', {
                coinIds: coinId,
                currency: 'usd',
            }));
            if (pricesResponse.data.data.length === 0) {
                throw new HttpRequestException(new Error(`The price for ${coinId} could not be fetched`));
            }
            const [response] = pricesResponse.data.data;
            if (!response) {
                throw new HttpRequestException(new Error(`The price for ${coinId} could not be fetched`));
            }
            return response;
        }
        catch (e) {
            throw new HttpRequestException(new Error(e.message), {
                context: `${this.endpoint}/coins/price `,
                contextModule: 'asset-service',
            });
        }
    }
    async fetchCoin(coinId, options = {}) {
        try {
            const { data } = (await this.client.get(`/coins/${coinId}`, options));
            return data;
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                context: `${this.endpoint}/coins/${coinId}`,
                contextModule: 'asset-service',
            });
        }
    }
    async fetchCoins(params = {}) {
        try {
            return (await this.client.get('/coins/list', params));
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                context: `${this.endpoint}/coins/list`,
                contextModule: 'asset-service',
            });
        }
    }
    async fetchChart(id, params = {}) {
        try {
            const { data } = (await this.client.get(`/coins/${id}/market_chart/range`, params));
            return data;
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                context: `${this.endpoint}/coins/${id}/market_chart/range`,
                contextModule: 'asset-service',
            });
        }
    }
    async fetchHistory(id, params = {}) {
        try {
            const { data } = (await this.client.get(`/coins/${id}/history`, params));
            return data;
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                context: `${this.endpoint}/coins/${id}/history`,
                contextModule: 'asset-service',
            });
        }
    }
}
//# sourceMappingURL=index.js.map