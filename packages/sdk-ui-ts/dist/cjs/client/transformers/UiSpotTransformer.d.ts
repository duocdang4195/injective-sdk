import { UiBaseSpotMarketWithToken, UiSpotMarketWithToken, UiSpotMarketSummary } from '../types/spot';
export declare class UiSpotTransformer {
    static orderSideToOrderType: (orderType: import("@injectivelabs/ts-types").OrderSide) => import("@injectivelabs/core-proto-ts/cjs/injective/exchange/v1beta1/exchange").OrderType;
    static spotMarketToUiSpotMarket(market: UiBaseSpotMarketWithToken): UiSpotMarketWithToken;
    static spotMarketSummaryToUiMarketSummary(oldSummary: UiSpotMarketSummary, newSummary: UiSpotMarketSummary): UiSpotMarketSummary;
    static spotMarketsSummaryToUiMarketsSummary(oldSummaries?: UiSpotMarketSummary[], newSummaries?: UiSpotMarketSummary[]): UiSpotMarketSummary[];
    static spotMarketsSummaryComparisons(newMarketSummary?: UiSpotMarketSummary[], oldMarketsSummary?: UiSpotMarketSummary[]): UiSpotMarketSummary[] | undefined;
    static spotMarketsToUiSpotMarkets(markets: UiBaseSpotMarketWithToken[]): UiSpotMarketWithToken[];
}
//# sourceMappingURL=UiSpotTransformer.d.ts.map