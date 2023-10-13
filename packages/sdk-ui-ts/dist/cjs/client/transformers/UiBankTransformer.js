"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiBankTransformer = void 0;
class UiBankTransformer {
    static bankBalancesToUiBankBalances(balances) {
        const bankBalances = balances
            .filter((balance) => !balance.denom.startsWith('ibc'))
            .reduce((balances, balance) => (Object.assign(Object.assign({}, balances), { [balance.denom]: balance.amount })), {});
        const ibcBankBalances = balances
            .filter((balance) => balance.denom.startsWith('ibc'))
            .reduce((balances, balance) => (Object.assign(Object.assign({}, balances), { [balance.denom]: balance.amount })), {});
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
exports.UiBankTransformer = UiBankTransformer;
//# sourceMappingURL=UiBankTransformer.js.map