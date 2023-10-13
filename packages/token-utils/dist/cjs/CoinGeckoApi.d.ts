import { CoinGeckoCoin, CoinGeckoReturnObject, CoinGeckoMarketChartResponse, CoinGeckoCoinResponse } from './types';
export default class CoinGeckoApi {
    private httpClient;
    private apiKey;
    constructor({ apiKey, baseUrl }: {
        apiKey: string;
        baseUrl: string;
    });
    fetchCoin(coinId: string, options?: Record<string, any> | undefined): Promise<CoinGeckoCoinResponse>;
    fetchPrice(coinId: string, options?: Record<string, any> | undefined): Promise<{
        chf: number;
        eur: number;
        gbp: number;
        usd: number;
    }>;
    fetchUsdPrice(coinId: string, options?: Record<string, any> | undefined): Promise<number>;
    fetchCoins(params?: Record<string, any> | undefined): Promise<CoinGeckoReturnObject<CoinGeckoCoin[]>>;
    fetchChart(id: string, params?: Record<string, any> | undefined): Promise<CoinGeckoMarketChartResponse>;
    fetchHistory(id: string, params?: Record<string, any> | undefined): Promise<CoinGeckoCoinResponse>;
}
//# sourceMappingURL=CoinGeckoApi.d.ts.map