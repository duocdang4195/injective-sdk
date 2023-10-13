export declare class TokenPrice {
    private coinGeckoApi;
    private restClient;
    private cache;
    constructor(coinGeckoOptions?: {
        baseUrl: string;
        apiKey: string;
    });
    fetchUsdTokensPrice(coinIds: string[]): Promise<Record<string, number>>;
    fetchUsdTokenPrice(coinId: string): Promise<number>;
    fetchUsdTokenPriceFromInjectiveService(coinId: string): Promise<number>;
    fetchUsdTokenPriceFromCoinGecko(coinId: string): Promise<number>;
    fetchUsdTokenPriceFromCoinGeckoNoThrow(coinId: string): Promise<number>;
    private getUsdTokenPriceFromCache;
    private fetchUsdPricesFromInjectiveService;
    private fetchUsdTokenPriceFromCoinGeckoInChunks;
    private initCache;
}
//# sourceMappingURL=TokenPrice.d.ts.map