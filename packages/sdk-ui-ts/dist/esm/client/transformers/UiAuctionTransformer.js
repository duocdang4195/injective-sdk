export class UiAuctionTransformer {
    static grpcAuctionModuleStateToModuleState(state) {
        const highestBidAmount = state.highestBid ? state.highestBid.amount : '0';
        const highestBidAmountWithoutDenom = decodeURI(highestBidAmount).replace(/[^0-9]/g, '');
        return {
            ...state,
            highestBid: {
                bidder: state.highestBid ? state.highestBid.bidder : '',
                amount: highestBidAmountWithoutDenom,
            },
        };
    }
}
//# sourceMappingURL=UiAuctionTransformer.js.map