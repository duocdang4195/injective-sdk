import { Change } from '../client/types/common';
export const zeroDerivativeMarketSummary = (marketId) => ({
    marketId,
    change: NaN,
    high: NaN,
    low: NaN,
    open: NaN,
    price: NaN,
    volume: NaN,
    lastPrice: NaN,
    lastPriceChange: Change.NoChange,
});
//# sourceMappingURL=derivatives.js.map