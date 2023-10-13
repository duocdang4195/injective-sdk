import { TokenPriceUtilBase } from './TokenPriceUtilBase';
import { TokenPriceUtilOptions } from './types';
export default class CoinGeckoPriceUtil extends TokenPriceUtilBase {
    private httpClient;
    private apiKey;
    constructor({ apiKey, baseUrl }: TokenPriceUtilOptions);
    fetchPrice(coinId: string, options?: Record<string, any> | undefined): Promise<{
        chf: number;
        eur: number;
        gbp: number;
        usd: number;
    }>;
    fetchUsdPrice(coinId: string, options?: Record<string, any> | undefined): Promise<number>;
}
//# sourceMappingURL=CoinGeckoPriceUtil.d.ts.map