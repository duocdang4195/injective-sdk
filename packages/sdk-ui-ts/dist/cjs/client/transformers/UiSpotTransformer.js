"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiSpotTransformer = void 0;
const utils_1 = require("@injectivelabs/utils");
const common_1 = require("../types/common");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const exchange_1 = require("../../utils/exchange");
class UiSpotTransformer {
    static spotMarketToUiSpotMarket(market) {
        return Object.assign(Object.assign(Object.assign(Object.assign({}, market), { type: common_1.MarketType.Spot, subType: common_1.MarketType.Spot }), (0, sdk_ts_1.getSpotMarketDecimals)({
            minPriceTickSize: market.minPriceTickSize,
            minQuantityTickSize: market.minQuantityTickSize,
            baseDecimals: market.baseToken.decimals,
            quoteDecimals: market.quoteToken.decimals,
        })), (0, sdk_ts_1.getSpotMarketTensMultiplier)({
            minPriceTickSize: market.minPriceTickSize,
            minQuantityTickSize: market.minQuantityTickSize,
            baseDecimals: market.baseToken.decimals,
            quoteDecimals: market.quoteToken.decimals,
        }));
    }
    static spotMarketSummaryToUiMarketSummary(oldSummary, newSummary) {
        if (new utils_1.BigNumber(oldSummary.price).eq(newSummary.price)) {
            return Object.assign(Object.assign({}, newSummary), { lastPrice: oldSummary.price, lastPriceChange: oldSummary.lastPriceChange || common_1.Change.NoChange });
        }
        return Object.assign(Object.assign({}, newSummary), { lastPrice: oldSummary.price, lastPriceChange: new utils_1.BigNumber(newSummary.price).gte(oldSummary.price)
                ? common_1.Change.Increase
                : common_1.Change.Decrease });
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
exports.UiSpotTransformer = UiSpotTransformer;
UiSpotTransformer.orderSideToOrderType = exchange_1.orderSideToOrderType;
//# sourceMappingURL=UiSpotTransformer.js.map