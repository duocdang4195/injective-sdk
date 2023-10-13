import { MarketType } from '../types/common';
import { ExpiryFuturesMarketWithTokenAndSlug, PerpetualMarketWithTokenAndSlug, BinaryOptionsMarketWithTokenAndSlug, UiDerivativeMarketSummary, UiPerpetualMarketWithToken, UiExpiryFuturesMarketWithToken, UiBinaryOptionsMarketWithToken } from '../types/derivatives';
export declare class UiDerivativeTransformer {
    static orderSideToOrderType: (orderType: import("@injectivelabs/ts-types").OrderSide) => import("@injectivelabs/core-proto-ts/cjs/injective/exchange/v1beta1/exchange").OrderType;
    static derivativeMarketToUiDerivativeMarket<T extends PerpetualMarketWithTokenAndSlug | ExpiryFuturesMarketWithTokenAndSlug | BinaryOptionsMarketWithTokenAndSlug, R extends UiPerpetualMarketWithToken | UiExpiryFuturesMarketWithToken | UiBinaryOptionsMarketWithToken>(market: T, subType: MarketType): R;
    static derivativeMarketSummaryToUiMarketSummary(oldSummary: UiDerivativeMarketSummary, newSummary: UiDerivativeMarketSummary): UiDerivativeMarketSummary;
    static derivativeMarketsSummaryToUiMarketsSummary(oldSummaries?: UiDerivativeMarketSummary[], newSummaries?: UiDerivativeMarketSummary[]): UiDerivativeMarketSummary[];
    static derivativeMarketsSummaryComparisons(newMarketSummary?: UiDerivativeMarketSummary[], oldMarketsSummary?: UiDerivativeMarketSummary[]): UiDerivativeMarketSummary[] | undefined;
    static perpetualMarketsToUiPerpetualMarkets(markets: Array<PerpetualMarketWithTokenAndSlug>): UiPerpetualMarketWithToken[];
    static expiryFuturesMarketsToUiExpiryFuturesMarkets(markets: Array<ExpiryFuturesMarketWithTokenAndSlug>): UiExpiryFuturesMarketWithToken[];
    static binaryOptionsMarketsToUiBinaryOptionsMarkets(markets: BinaryOptionsMarketWithTokenAndSlug[]): UiBinaryOptionsMarketWithToken[];
}
//# sourceMappingURL=UiDerivativesTransformer.d.ts.map