import { BigNumber } from '@injectivelabs/utils';
import { MarketType, Change } from '../types/common';
import { getDerivativeMarketTensMultiplier, getDerivativeMarketDecimals, } from '@injectivelabs/sdk-ts';
import { orderSideToOrderType } from '../../utils/exchange';
export class UiDerivativeTransformer {
    static orderSideToOrderType = orderSideToOrderType;
    static derivativeMarketToUiDerivativeMarket(market, subType) {
        return {
            ...market,
            type: MarketType.Derivative,
            subType: subType,
            ...getDerivativeMarketDecimals({
                minQuantityTickSize: market.minQuantityTickSize,
                minPriceTickSize: market.minPriceTickSize,
                quoteDecimals: market.quoteToken.decimals,
            }),
            ...getDerivativeMarketTensMultiplier({
                minPriceTickSize: market.minPriceTickSize,
                minQuantityTickSize: market.minQuantityTickSize,
                quoteDecimals: market.quoteToken.decimals,
            }),
        };
    }
    static derivativeMarketSummaryToUiMarketSummary(oldSummary, newSummary) {
        if (new BigNumber(oldSummary.price).eq(newSummary.price)) {
            return {
                ...newSummary,
                lastPrice: oldSummary.price,
                lastPriceChange: oldSummary.lastPriceChange || Change.NoChange,
            };
        }
        return {
            ...newSummary,
            lastPrice: oldSummary.price,
            lastPriceChange: new BigNumber(newSummary.price).gte(oldSummary.price)
                ? Change.Increase
                : Change.Decrease,
        };
    }
    static derivativeMarketsSummaryToUiMarketsSummary(oldSummaries = [], newSummaries = []) {
        return oldSummaries.map((oldSummary) => {
            const newSummary = newSummaries.find((m) => m.marketId === oldSummary.marketId);
            // Sometimes, chronos returns zeros
            const actualNewSummary = newSummary && newSummary.price ? newSummary : oldSummary;
            return UiDerivativeTransformer.derivativeMarketSummaryToUiMarketSummary(oldSummary, actualNewSummary);
        });
    }
    static derivativeMarketsSummaryComparisons(newMarketSummary, oldMarketsSummary) {
        if (!oldMarketsSummary && !newMarketSummary) {
            return undefined;
        }
        if (!newMarketSummary) {
            return oldMarketsSummary;
        }
        if (!oldMarketsSummary) {
            return newMarketSummary;
        }
        const marketsWithOldSummaries = oldMarketsSummary.filter((market) => newMarketSummary.find((m) => m.marketId === market.marketId));
        return UiDerivativeTransformer.derivativeMarketsSummaryToUiMarketsSummary(marketsWithOldSummaries, newMarketSummary);
    }
    static perpetualMarketsToUiPerpetualMarkets(markets) {
        return markets.map((m) => UiDerivativeTransformer.derivativeMarketToUiDerivativeMarket(m, MarketType.Perpetual));
    }
    static expiryFuturesMarketsToUiExpiryFuturesMarkets(markets) {
        return markets.map((m) => UiDerivativeTransformer.derivativeMarketToUiDerivativeMarket(m, MarketType.Futures));
    }
    static binaryOptionsMarketsToUiBinaryOptionsMarkets(markets) {
        return markets.map((m) => UiDerivativeTransformer.derivativeMarketToUiDerivativeMarket(m, MarketType.BinaryOptions));
    }
}
//# sourceMappingURL=UiDerivativesTransformer.js.map