export class UiMarketsHistoryTransformer {
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
//# sourceMappingURL=UiMarketsHistoryTransformer.js.map