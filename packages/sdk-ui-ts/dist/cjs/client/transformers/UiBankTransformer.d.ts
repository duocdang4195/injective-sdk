import { Coin } from '@injectivelabs/ts-types';
export declare class UiBankTransformer {
    static bankBalancesToUiBankBalances(balances: Coin[]): {
        bankBalances: {
            [x: string]: string;
        };
        ibcBankBalances: {
            [x: string]: string;
        };
    };
    static supplyToUiSupply(supply: Coin[]): {
        bankSupply: Coin[];
        ibcBankSupply: Coin[];
    };
}
//# sourceMappingURL=UiBankTransformer.d.ts.map