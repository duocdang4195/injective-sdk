export class UiAccountTransformer {
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
        return {
            ...balance,
            amount: balance.amount.amount,
            denom: balance.amount.denom,
        };
    }
}
//# sourceMappingURL=UiAccountTransformer.js.map