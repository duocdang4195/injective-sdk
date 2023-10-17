import _m0 from "protobufjs/minimal";
import { FundingMode } from "./proposal";
export interface Params {
    /**
     * Set the status to active to indicate that contracts can be executed in
     * begin blocker.
     */
    isExecutionEnabled: boolean;
    /**
     * Maximum aggregate total gas to be used for the contract executions in the
     * BeginBlocker.
     */
    maxBeginBlockTotalGas: string;
    /**
     * the maximum gas limit each individual contract can consume in the
     * BeginBlocker.
     */
    maxContractGasLimit: string;
    /**
     * min_gas_price defines the minimum gas price the contracts must pay to be
     * executed in the BeginBlocker.
     */
    minGasPrice: string;
}
export interface RegisteredContract {
    /** limit of gas per BB execution */
    gasLimit: string;
    /** gas price that contract is willing to pay for execution in BeginBlocker */
    gasPrice: string;
    /** is contract currently active */
    isExecutable: boolean;
    /**
     * code_id that is allowed to be executed (to prevent malicious updates) - if
     * nil/0 any code_id can be executed
     */
    codeId: string;
    /** optional - admin addr that is allowed to update contract data */
    adminAddress: string;
    /**
     * Optional: address of the contract granting fee
     * Must be set if fund_mode is GrantOnly
     */
    granterAddress: string;
    /** funding mode */
    fundMode: FundingMode;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    create(base?: DeepPartial<Params>): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const RegisteredContract: {
    encode(message: RegisteredContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredContract;
    fromJSON(object: any): RegisteredContract;
    toJSON(message: RegisteredContract): unknown;
    create(base?: DeepPartial<RegisteredContract>): RegisteredContract;
    fromPartial(object: DeepPartial<RegisteredContract>): RegisteredContract;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
