"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroSpotMarketSummary = void 0;
const common_1 = require("../client/types/common");
const zeroSpotMarketSummary = (marketId) => ({
    marketId,
    change: NaN,
    high: NaN,
    low: NaN,
    open: NaN,
    price: NaN,
    volume: NaN,
    lastPrice: NaN,
    lastPriceChange: common_1.Change.NoChange,
});
exports.zeroSpotMarketSummary = zeroSpotMarketSummary;
//# sourceMappingURL=spot.js.map