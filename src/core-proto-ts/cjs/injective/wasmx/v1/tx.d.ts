import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
import { ContractRegistrationRequest } from "./proposal";
import { Params } from "./wasmx";
/**
 * MsgExecuteContractCompat submits the given message data to a smart contract,
 * compatible with EIP712
 */
export interface MsgExecuteContractCompat {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: string;
    /** Funds coins that are transferred to the contract on execution */
    funds: string;
}
/** MsgExecuteContractCompatResponse returns execution result data. */
export interface MsgExecuteContractCompatResponse {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgUpdateContract {
    sender: string;
    /** Unique Identifier for contract instance to be registered. */
    contractAddress: string;
    /** Maximum gas to be used for the smart contract execution. */
    gasLimit: string;
    /** gas price to be used for the smart contract execution. */
    gasPrice: string;
    /** optional - admin account that will be allowed to perform any changes */
    adminAddress: string;
}
export interface MsgUpdateContractResponse {
}
export interface MsgActivateContract {
    sender: string;
    /** Unique Identifier for contract instance to be activated. */
    contractAddress: string;
}
export interface MsgActivateContractResponse {
}
export interface MsgDeactivateContract {
    sender: string;
    /** Unique Identifier for contract instance to be deactivated. */
    contractAddress: string;
}
export interface MsgDeactivateContractResponse {
}
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the wasmx parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params | undefined;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgRegisterContract {
    sender: string;
    contractRegistrationRequest: ContractRegistrationRequest | undefined;
}
export interface MsgRegisterContractResponse {
}
export declare const MsgExecuteContractCompat: {
    encode(message: MsgExecuteContractCompat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContractCompat;
    fromJSON(object: any): MsgExecuteContractCompat;
    toJSON(message: MsgExecuteContractCompat): unknown;
    create(base?: DeepPartial<MsgExecuteContractCompat>): MsgExecuteContractCompat;
    fromPartial(object: DeepPartial<MsgExecuteContractCompat>): MsgExecuteContractCompat;
};
export declare const MsgExecuteContractCompatResponse: {
    encode(message: MsgExecuteContractCompatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContractCompatResponse;
    fromJSON(object: any): MsgExecuteContractCompatResponse;
    toJSON(message: MsgExecuteContractCompatResponse): unknown;
    create(base?: DeepPartial<MsgExecuteContractCompatResponse>): MsgExecuteContractCompatResponse;
    fromPartial(object: DeepPartial<MsgExecuteContractCompatResponse>): MsgExecuteContractCompatResponse;
};
export declare const MsgUpdateContract: {
    encode(message: MsgUpdateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateContract;
    fromJSON(object: any): MsgUpdateContract;
    toJSON(message: MsgUpdateContract): unknown;
    create(base?: DeepPartial<MsgUpdateContract>): MsgUpdateContract;
    fromPartial(object: DeepPartial<MsgUpdateContract>): MsgUpdateContract;
};
export declare const MsgUpdateContractResponse: {
    encode(_: MsgUpdateContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateContractResponse;
    fromJSON(_: any): MsgUpdateContractResponse;
    toJSON(_: MsgUpdateContractResponse): unknown;
    create(base?: DeepPartial<MsgUpdateContractResponse>): MsgUpdateContractResponse;
    fromPartial(_: DeepPartial<MsgUpdateContractResponse>): MsgUpdateContractResponse;
};
export declare const MsgActivateContract: {
    encode(message: MsgActivateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateContract;
    fromJSON(object: any): MsgActivateContract;
    toJSON(message: MsgActivateContract): unknown;
    create(base?: DeepPartial<MsgActivateContract>): MsgActivateContract;
    fromPartial(object: DeepPartial<MsgActivateContract>): MsgActivateContract;
};
export declare const MsgActivateContractResponse: {
    encode(_: MsgActivateContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateContractResponse;
    fromJSON(_: any): MsgActivateContractResponse;
    toJSON(_: MsgActivateContractResponse): unknown;
    create(base?: DeepPartial<MsgActivateContractResponse>): MsgActivateContractResponse;
    fromPartial(_: DeepPartial<MsgActivateContractResponse>): MsgActivateContractResponse;
};
export declare const MsgDeactivateContract: {
    encode(message: MsgDeactivateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateContract;
    fromJSON(object: any): MsgDeactivateContract;
    toJSON(message: MsgDeactivateContract): unknown;
    create(base?: DeepPartial<MsgDeactivateContract>): MsgDeactivateContract;
    fromPartial(object: DeepPartial<MsgDeactivateContract>): MsgDeactivateContract;
};
export declare const MsgDeactivateContractResponse: {
    encode(_: MsgDeactivateContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateContractResponse;
    fromJSON(_: any): MsgDeactivateContractResponse;
    toJSON(_: MsgDeactivateContractResponse): unknown;
    create(base?: DeepPartial<MsgDeactivateContractResponse>): MsgDeactivateContractResponse;
    fromPartial(_: DeepPartial<MsgDeactivateContractResponse>): MsgDeactivateContractResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    create(base?: DeepPartial<MsgUpdateParams>): MsgUpdateParams;
    fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    create(base?: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
export declare const MsgRegisterContract: {
    encode(message: MsgRegisterContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterContract;
    fromJSON(object: any): MsgRegisterContract;
    toJSON(message: MsgRegisterContract): unknown;
    create(base?: DeepPartial<MsgRegisterContract>): MsgRegisterContract;
    fromPartial(object: DeepPartial<MsgRegisterContract>): MsgRegisterContract;
};
export declare const MsgRegisterContractResponse: {
    encode(_: MsgRegisterContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterContractResponse;
    fromJSON(_: any): MsgRegisterContractResponse;
    toJSON(_: MsgRegisterContractResponse): unknown;
    create(base?: DeepPartial<MsgRegisterContractResponse>): MsgRegisterContractResponse;
    fromPartial(_: DeepPartial<MsgRegisterContractResponse>): MsgRegisterContractResponse;
};
/** Msg defines the wasmx Msg service. */
export interface Msg {
    UpdateRegistryContractParams(request: DeepPartial<MsgUpdateContract>, metadata?: grpc.Metadata): Promise<MsgUpdateContractResponse>;
    ActivateRegistryContract(request: DeepPartial<MsgActivateContract>, metadata?: grpc.Metadata): Promise<MsgActivateContractResponse>;
    DeactivateRegistryContract(request: DeepPartial<MsgDeactivateContract>, metadata?: grpc.Metadata): Promise<MsgDeactivateContractResponse>;
    ExecuteContractCompat(request: DeepPartial<MsgExecuteContractCompat>, metadata?: grpc.Metadata): Promise<MsgExecuteContractCompatResponse>;
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    RegisterContract(request: DeepPartial<MsgRegisterContract>, metadata?: grpc.Metadata): Promise<MsgRegisterContractResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UpdateRegistryContractParams(request: DeepPartial<MsgUpdateContract>, metadata?: grpc.Metadata): Promise<MsgUpdateContractResponse>;
    ActivateRegistryContract(request: DeepPartial<MsgActivateContract>, metadata?: grpc.Metadata): Promise<MsgActivateContractResponse>;
    DeactivateRegistryContract(request: DeepPartial<MsgDeactivateContract>, metadata?: grpc.Metadata): Promise<MsgDeactivateContractResponse>;
    ExecuteContractCompat(request: DeepPartial<MsgExecuteContractCompat>, metadata?: grpc.Metadata): Promise<MsgExecuteContractCompatResponse>;
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    RegisterContract(request: DeepPartial<MsgRegisterContract>, metadata?: grpc.Metadata): Promise<MsgRegisterContractResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgUpdateRegistryContractParamsDesc: UnaryMethodDefinitionish;
export declare const MsgActivateRegistryContractDesc: UnaryMethodDefinitionish;
export declare const MsgDeactivateRegistryContractDesc: UnaryMethodDefinitionish;
export declare const MsgExecuteContractCompatDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateParamsDesc: UnaryMethodDefinitionish;
export declare const MsgRegisterContractDesc: UnaryMethodDefinitionish;
interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
    requestStream: any;
    responseStream: any;
}
type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;
interface Rpc {
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export declare class GrpcWebImpl {
    private host;
    private options;
    constructor(host: string, options: {
        transport?: grpc.TransportFactory;
        debug?: boolean;
        metadata?: grpc.Metadata;
        upStreamRetryCodes?: number[];
    });
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
declare var tsProtoGlobalThis: any;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export declare class GrpcWebError extends tsProtoGlobalThis.Error {
    code: grpc.Code;
    metadata: grpc.Metadata;
    constructor(message: string, code: grpc.Code, metadata: grpc.Metadata);
}
export {};
