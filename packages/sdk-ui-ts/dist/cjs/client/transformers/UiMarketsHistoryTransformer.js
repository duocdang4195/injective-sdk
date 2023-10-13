"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiMarketsHistoryTransformer = void 0;
class UiMarketsHistoryTransformer {
    static marketsHistoryToUiMarketsHistory(marketsHistory) {
        return marketsHistory.map((m) => {
            return {
                marketId: m.marketID,
                resolution: m.resolution,
                time: m.t,
                volume: m.v,
                closePrice: m.c,
                highPrice: m.h,
                lowPrice: m.l,
                openPrice: m.o,
            };
        });
    }
}
exports.UiMarketsHistoryTransformer = UiMarketsHistoryTransformer;
//# sourceMappingURL=UiMarketsHistoryTransformer.js.map