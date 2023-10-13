import { BaseWasmQuery } from '../../BaseWasmQuery';
export declare namespace QueryContractAllowanceArg {
    interface Params {
        owner: string;
        spender: string;
    }
}
export declare class QueryContractAllowance extends BaseWasmQuery<QueryContractAllowanceArg.Params> {
    toPayload(): string;
}
//# sourceMappingURL=QueryContractAllowance.d.ts.map