"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiAccountTransformer = void 0;
class UiAccountTransformer {
    static accountBalanceToUiAccountBalance(balance) {
        return {
            denom: balance.denom,
            totalBalance: balance.deposit ? balance.deposit.totalBalance : '0',
            availableBalance: balance.deposit
                ? balance.deposit.availableBalance
                : '0',
        };
    }
    static grpcAccountTransferToUiAccountTransfer(balance) {
        return Object.assign(Object.assign({}, balance), { amount: balance.amount.amount, denom: balance.amount.denom });
    }
}
exports.UiAccountTransformer = UiAccountTransformer;
//# sourceMappingURL=UiAccountTransformer.js.map