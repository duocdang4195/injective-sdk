import { BigNumber } from '@injectivelabs/utils';
import { Change, MarketType } from '../types/common';
import { getSpotMarketTensMultiplier, getSpotMarketDecimals, } from '@injectivelabs/sdk-ts';
import { orderSideToOrderType } from '../../utils/exchange';
export class UiSpotTransformer {
    static orderSideToOrderType = orderSideToOrderType;
    static spotMarketToUiSpotMarket(market) {
        return {
            ...market,
            type: MarketType.Spot,
            subType: MarketType.Spot,
            ...getSpotMarketDecimals({
                minPriceTickSize: market.minPriceTickSize,
                minQuantityTickSize: market.minQuantityTickSize,
                baseDecimals: market.baseToken.decimals,
                quoteDecimals: market.quoteToken.decimals,
            }),
            ...getSpotMarketTensMultiplier({
                minPriceTickSize: market.minPriceTickSize,
                minQuantityTickSize: market.minQuantityTickSize,
                baseDecimals: market.baseToken.decimals,
                quoteDecimals: market.quoteToken.decimals,
            }),
        };
    }
    static spotMarketSummaryToUiMarketSummary(oldSummary, newSummary) {
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
    static spotMarketsSummaryToUiMarketsSummary(oldSummaries = [], newSummaries = []) {
        return oldSummaries.map((oldSummary) => {
            const newSummary = newSummaries.find((m) => m.marketId === oldSummary.marketId);
            // Sometimes, chronos returns zeros
            const actualNewSummary = newSummary && newSummary.price ? newSummary : oldSummary;
            return UiSpotTransformer.spotMarketSummaryToUiMarketSummary(oldSummary, actualNewSummary);
        });
    }
    static spotMarketsSummaryComparisons(newMarketSummary, oldMarketsSummary) {
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
        return UiSpotTransformer.spotMarketsSummaryToUiMarketsSummary(marketsWithOldSummaries, newMarketSummary);
    }
    static spotMarketsToUiSpotMarkets(markets) {
        return markets.map(UiSpotTransformer.spotMarketToUiSpotMarket);
    }
}
//# sourceMappingURL=UiSpotTransformer.js.map