import { Change } from '../client/types/common';
export const zeroSpotMarketSummary = (marketId) => ({
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
//# sourceMappingURL=spot.js.map