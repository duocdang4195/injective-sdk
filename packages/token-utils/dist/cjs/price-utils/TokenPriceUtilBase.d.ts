export declare abstract class TokenPriceUtilBase {
    abstract fetchPrice(symbol: string, options: any): Promise<{
        chf?: number;
        eur?: number;
        gbp?: number;
        usd: number;
    }>;
    abstract fetchUsdPrice(symbol: string, options: any): Promise<number>;
}
//# sourceMappingURL=TokenPriceUtilBase.d.ts.map