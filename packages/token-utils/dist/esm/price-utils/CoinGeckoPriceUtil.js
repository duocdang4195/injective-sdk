import { HttpRestClient } from '@injectivelabs/utils';
import { HttpRequestException } from '@injectivelabs/exceptions';
import { TokenPriceUtilBase } from './TokenPriceUtilBase';
export default class CoinGeckoPriceUtil extends TokenPriceUtilBase {
    httpClient;
    apiKey;
    constructor({ apiKey, baseUrl }) {
        super();
        this.httpClient = new HttpRestClient(baseUrl);
        this.apiKey = apiKey;
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
}
//# sourceMappingURL=CoinGeckoPriceUtil.js.map