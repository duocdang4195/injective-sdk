"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiDerivativeTransformer = void 0;
const utils_1 = require("@injectivelabs/utils");
const common_1 = require("../types/common");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const exchange_1 = require("../../utils/exchange");
class UiDerivativeTransformer {
    static derivativeMarketToUiDerivativeMarket(market, subType) {
        return Object.assign(Object.assign(Object.assign(Object.assign({}, market), { type: common_1.MarketType.Derivative, subType: subType }), (0, sdk_ts_1.getDerivativeMarketDecimals)({
            minQuantityTickSize: market.minQuantityTickSize,
            minPriceTickSize: market.minPriceTickSize,
            quoteDecimals: market.quoteToken.decimals,
        })), (0, sdk_ts_1.getDerivativeMarketTensMultiplier)({
            minPriceTickSize: market.minPriceTickSize,
            minQuantityTickSize: market.minQuantityTickSize,
            quoteDecimals: market.quoteToken.decimals,
        }));
    }
    static derivativeMarketSummaryToUiMarketSummary(oldSummary, newSummary) {
        if (new utils_1.BigNumber(oldSummary.price).eq(newSummary.price)) {
            return Object.assign(Object.assign({}, newSummary), { lastPrice: oldSummary.price, lastPriceChange: oldSummary.lastPriceChange || common_1.Change.NoChange });
        }
        return Object.assign(Object.assign({}, newSummary), { lastPrice: oldSummary.price, lastPriceChange: new utils_1.BigNumber(newSummary.price).gte(oldSummary.price)
                ? common_1.Change.Increase
                : common_1.Change.Decrease });
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
        return markets.map((m) => UiDerivativeTransformer.derivativeMarketToUiDerivativeMarket(m, common_1.MarketType.Perpetual));
    }
    static expiryFuturesMarketsToUiExpiryFuturesMarkets(markets) {
        return markets.map((m) => UiDerivativeTransformer.derivativeMarketToUiDerivativeMarket(m, common_1.MarketType.Futures));
    }
    static binaryOptionsMarketsToUiBinaryOptionsMarkets(markets) {
        return markets.map((m) => UiDerivativeTransformer.derivativeMarketToUiDerivativeMarket(m, common_1.MarketType.BinaryOptions));
    }
}
exports.UiDerivativeTransformer = UiDerivativeTransformer;
UiDerivativeTransformer.orderSideToOrderType = exchange_1.orderSideToOrderType;
//# sourceMappingURL=UiDerivativesTransformer.js.map