"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiAuctionTransformer = void 0;
class UiAuctionTransformer {
    static grpcAuctionModuleStateToModuleState(state) {
        const highestBidAmount = state.highestBid ? state.highestBid.amount : '0';
        const highestBidAmountWithoutDenom = decodeURI(highestBidAmount).replace(/[^0-9]/g, '');
        return Object.assign(Object.assign({}, state), { highestBid: {
                bidder: state.highestBid ? state.highestBid.bidder : '',
                amount: highestBidAmountWithoutDenom,
            } });
    }
}
exports.UiAuctionTransformer = UiAuctionTransformer;
//# sourceMappingURL=UiAuctionTransformer.js.map