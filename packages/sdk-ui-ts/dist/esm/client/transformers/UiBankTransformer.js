export class UiBankTransformer {
    static bankBalancesToUiBankBalances(balances) {
        const bankBalances = balances
            .filter((balance) => !balance.denom.startsWith('ibc'))
            .reduce((balances, balance) => ({
            ...balances,
            [balance.denom]: balance.amount,
        }), {});
        const ibcBankBalances = balances
            .filter((balance) => balance.denom.startsWith('ibc'))
            .reduce((balances, balance) => ({
            ...balances,
            [balance.denom]: balance.amount,
        }), {});
        return {
            bankBalances,
            ibcBankBalances,
        };
    }
    static supplyToUiSupply(supply) {
        return {
            bankSupply: supply.filter((coin) => !coin.denom.startsWith('ibc')),
            ibcBankSupply: supply.filter((coin) => coin.denom.startsWith('ibc')),
        };
    }
}
//# sourceMappingURL=UiBankTransformer.js.map