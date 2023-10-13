import { CoinPriceFromInjectiveService } from './types';
import { CoinGeckoCoin, CoinGeckoCoinResponse, CoinGeckoMarketChartResponse, CoinGeckoReturnObject } from '../types';
export declare class InjectiveAssetService {
    private client;
    endpoint: string;
    constructor(endpoint: string);
    fetchPrice(coinId: string): Promise<CoinPriceFromInjectiveService>;
    fetchCoin(coinId: string, options?: Record<string, any> | undefined): Promise<CoinGeckoCoinResponse>;
    fetchCoins(params?: Record<string, any> | undefined): Promise<CoinGeckoReturnObject<CoinGeckoCoin[]>>;
    fetchChart(id: string, params?: Record<string, any> | undefined): Promise<CoinGeckoMarketChartResponse>;
    fetchHistory(id: string, params?: Record<string, any> | undefined): Promise<CoinGeckoCoinResponse>;
}
//# sourceMappingURL=index.d.ts.map