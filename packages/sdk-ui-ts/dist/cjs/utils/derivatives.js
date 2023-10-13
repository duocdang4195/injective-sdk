"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroDerivativeMarketSummary = void 0;
const common_1 = require("../client/types/common");
const zeroDerivativeMarketSummary = (marketId) => ({
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
exports.zeroDerivativeMarketSummary = zeroDerivativeMarketSummary;
//# sourceMappingURL=derivatives.js.map