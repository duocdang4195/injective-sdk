import _m0 from "protobufjs/minimal";
import { StoreCodeProposal } from "../../../cosmwasm/wasm/v1/proposal";
export declare enum FundingMode {
    Unspecified = 0,
    SelfFunded = 1,
    GrantOnly = 2,
    Dual = 3,
    UNRECOGNIZED = -1
}
export declare function fundingModeFromJSON(object: any): FundingMode;
export declare function fundingModeToJSON(object: FundingMode): string;
export interface ContractRegistrationRequestProposal {
    title: string;
    description: string;
    contractRegistrationRequest: ContractRegistrationRequest | undefined;
}
export interface BatchContractRegistrationRequestProposal {
    title: string;
    description: string;
    contractRegistrationRequests: ContractRegistrationRequest[];
}
export interface BatchContractDeregistrationProposal {
    title: string;
    description: string;
    contracts: string[];
}
export interface ContractRegistrationRequest {
    /** Unique Identifier for contract instance to be registered. */
    contractAddress: string;
    /** Maximum gas to be used for the smart contract execution. */
    gasLimit: string;
    /** gas price to be used for the smart contract execution. */
    gasPrice: string;
    shouldPinContract: boolean;
    /**
     * if true contract owner can update it, if false only current code_id will be
     * allowed to be executed
     */
    isMigrationAllowed: boolean;
    /**
     * code_id of the contract being registered - will be verified upon every
     * execution but only if is_migration_allowed is false
     */
    codeId: string;
    /**
     * Optional address of admin account (that will be allowed to pause or update
     * contract params)
     */
    adminAddress: string;
    /**
     * Optional address of the contract that grants fees. Must be set if
     * funding_mode is other than SelfFunded
     */
    granterAddress: string;
    /** Specifies how the contract will fund its execution */
    fundingMode: FundingMode;
}
export interface BatchStoreCodeProposal {
    title: string;
    description: string;
    proposals: StoreCodeProposal[];
}
export declare const ContractRegistrationRequestProposal: {
    encode(message: ContractRegistrationRequestProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractRegistrationRequestProposal;
    fromJSON(object: any): ContractRegistrationRequestProposal;
    toJSON(message: ContractRegistrationRequestProposal): unknown;
    create(base?: DeepPartial<ContractRegistrationRequestProposal>): ContractRegistrationRequestProposal;
    fromPartial(object: DeepPartial<ContractRegistrationRequestProposal>): ContractRegistrationRequestProposal;
};
export declare const BatchContractRegistrationRequestProposal: {
    encode(message: BatchContractRegistrationRequestProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchContractRegistrationRequestProposal;
    fromJSON(object: any): BatchContractRegistrationRequestProposal;
    toJSON(message: BatchContractRegistrationRequestProposal): unknown;
    create(base?: DeepPartial<BatchContractRegistrationRequestProposal>): BatchContractRegistrationRequestProposal;
    fromPartial(object: DeepPartial<BatchContractRegistrationRequestProposal>): BatchContractRegistrationRequestProposal;
};
export declare const BatchContractDeregistrationProposal: {
    encode(message: BatchContractDeregistrationProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchContractDeregistrationProposal;
    fromJSON(object: any): BatchContractDeregistrationProposal;
    toJSON(message: BatchContractDeregistrationProposal): unknown;
    create(base?: DeepPartial<BatchContractDeregistrationProposal>): BatchContractDeregistrationProposal;
    fromPartial(object: DeepPartial<BatchContractDeregistrationProposal>): BatchContractDeregistrationProposal;
};
export declare const ContractRegistrationRequest: {
    encode(message: ContractRegistrationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractRegistrationRequest;
    fromJSON(object: any): ContractRegistrationRequest;
    toJSON(message: ContractRegistrationRequest): unknown;
    create(base?: DeepPartial<ContractRegistrationRequest>): ContractRegistrationRequest;
    fromPartial(object: DeepPartial<ContractRegistrationRequest>): ContractRegistrationRequest;
};
export declare const BatchStoreCodeProposal: {
    encode(message: BatchStoreCodeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchStoreCodeProposal;
    fromJSON(object: any): BatchStoreCodeProposal;
    toJSON(message: BatchStoreCodeProposal): unknown;
    create(base?: DeepPartial<BatchStoreCodeProposal>): BatchStoreCodeProposal;
    fromPartial(object: DeepPartial<BatchStoreCodeProposal>): BatchStoreCodeProposal;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
