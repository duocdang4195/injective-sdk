import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
/** Since: cosmos-sdk 0.43 */
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance: Any | undefined;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponse {
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponse {
}
export declare const MsgGrantAllowance: {
    encode(message: MsgGrantAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowance;
    fromJSON(object: any): MsgGrantAllowance;
    toJSON(message: MsgGrantAllowance): unknown;
    create(base?: DeepPartial<MsgGrantAllowance>): MsgGrantAllowance;
    fromPartial(object: DeepPartial<MsgGrantAllowance>): MsgGrantAllowance;
};
export declare const MsgGrantAllowanceResponse: {
    encode(_: MsgGrantAllowanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowanceResponse;
    fromJSON(_: any): MsgGrantAllowanceResponse;
    toJSON(_: MsgGrantAllowanceResponse): unknown;
    create(base?: DeepPartial<MsgGrantAllowanceResponse>): MsgGrantAllowanceResponse;
    fromPartial(_: DeepPartial<MsgGrantAllowanceResponse>): MsgGrantAllowanceResponse;
};
export declare const MsgRevokeAllowance: {
    encode(message: MsgRevokeAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowance;
    fromJSON(object: any): MsgRevokeAllowance;
    toJSON(message: MsgRevokeAllowance): unknown;
    create(base?: DeepPartial<MsgRevokeAllowance>): MsgRevokeAllowance;
    fromPartial(object: DeepPartial<MsgRevokeAllowance>): MsgRevokeAllowance;
};
export declare const MsgRevokeAllowanceResponse: {
    encode(_: MsgRevokeAllowanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowanceResponse;
    fromJSON(_: any): MsgRevokeAllowanceResponse;
    toJSON(_: MsgRevokeAllowanceResponse): unknown;
    create(base?: DeepPartial<MsgRevokeAllowanceResponse>): MsgRevokeAllowanceResponse;
    fromPartial(_: DeepPartial<MsgRevokeAllowanceResponse>): MsgRevokeAllowanceResponse;
};
/** Msg defines the feegrant msg service. */
export interface Msg {
    /**
     * GrantAllowance grants fee allowance to the grantee on the granter's
     * account with the provided expiration time.
     */
    GrantAllowance(request: DeepPartial<MsgGrantAllowance>, metadata?: grpc.Metadata): Promise<MsgGrantAllowanceResponse>;
    /**
     * RevokeAllowance revokes any fee allowance of granter's account that
     * has been granted to the grantee.
     */
    RevokeAllowance(request: DeepPartial<MsgRevokeAllowance>, metadata?: grpc.Metadata): Promise<MsgRevokeAllowanceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    GrantAllowance(request: DeepPartial<MsgGrantAllowance>, metadata?: grpc.Metadata): Promise<MsgGrantAllowanceResponse>;
    RevokeAllowance(request: DeepPartial<MsgRevokeAllowance>, metadata?: grpc.Metadata): Promise<MsgRevokeAllowanceResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgGrantAllowanceDesc: UnaryMethodDefinitionish;
export declare const MsgRevokeAllowanceDesc: UnaryMethodDefinitionish;
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
