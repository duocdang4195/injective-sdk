import { BaseWasmQuery } from '../../BaseWasmQuery';
export declare namespace QueryLockedLpFundsArg {
    interface Params {
        subaccountId: string;
        userAddress: string;
    }
}
export declare class QueryLockedLpFunds extends BaseWasmQuery<QueryLockedLpFundsArg.Params> {
    toPayload(): string;
}
//# sourceMappingURL=QueryLockedLpFunds.d.ts.map