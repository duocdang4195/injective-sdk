import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { DenomTrace, Params } from "./transfer";
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequest {
    /** hash (in hex format) or denom (full denom with ibc prefix) of the denomination trace information. */
    hash: string;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponse {
    /** denom_trace returns the requested denomination trace information. */
    denomTrace: DenomTrace | undefined;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponse {
    /** denom_traces returns all denominations trace information. */
    denomTraces: DenomTrace[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}
/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */
export interface QueryDenomHashRequest {
    /** The denomination trace ([port_id]/[channel_id])+/[denom] */
    trace: string;
}
/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */
export interface QueryDenomHashResponse {
    /** hash (in hex format) of the denomination trace information. */
    hash: string;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequest {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponse {
    /** the escrow account address */
    escrowAddress: string;
}
/** QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomRequest {
    denom: string;
}
/** QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomResponse {
    amount: Coin | undefined;
}
export declare const QueryDenomTraceRequest: {
    encode(message: QueryDenomTraceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTraceRequest;
    fromJSON(object: any): QueryDenomTraceRequest;
    toJSON(message: QueryDenomTraceRequest): unknown;
    create(base?: DeepPartial<QueryDenomTraceRequest>): QueryDenomTraceRequest;
    fromPartial(object: DeepPartial<QueryDenomTraceRequest>): QueryDenomTraceRequest;
};
export declare const QueryDenomTraceResponse: {
    encode(message: QueryDenomTraceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTraceResponse;
    fromJSON(object: any): QueryDenomTraceResponse;
    toJSON(message: QueryDenomTraceResponse): unknown;
    create(base?: DeepPartial<QueryDenomTraceResponse>): QueryDenomTraceResponse;
    fromPartial(object: DeepPartial<QueryDenomTraceResponse>): QueryDenomTraceResponse;
};
export declare const QueryDenomTracesRequest: {
    encode(message: QueryDenomTracesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTracesRequest;
    fromJSON(object: any): QueryDenomTracesRequest;
    toJSON(message: QueryDenomTracesRequest): unknown;
    create(base?: DeepPartial<QueryDenomTracesRequest>): QueryDenomTracesRequest;
    fromPartial(object: DeepPartial<QueryDenomTracesRequest>): QueryDenomTracesRequest;
};
export declare const QueryDenomTracesResponse: {
    encode(message: QueryDenomTracesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTracesResponse;
    fromJSON(object: any): QueryDenomTracesResponse;
    toJSON(message: QueryDenomTracesResponse): unknown;
    create(base?: DeepPartial<QueryDenomTracesResponse>): QueryDenomTracesResponse;
    fromPartial(object: DeepPartial<QueryDenomTracesResponse>): QueryDenomTracesResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    create(base?: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    create(base?: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryDenomHashRequest: {
    encode(message: QueryDenomHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomHashRequest;
    fromJSON(object: any): QueryDenomHashRequest;
    toJSON(message: QueryDenomHashRequest): unknown;
    create(base?: DeepPartial<QueryDenomHashRequest>): QueryDenomHashRequest;
    fromPartial(object: DeepPartial<QueryDenomHashRequest>): QueryDenomHashRequest;
};
export declare const QueryDenomHashResponse: {
    encode(message: QueryDenomHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomHashResponse;
    fromJSON(object: any): QueryDenomHashResponse;
    toJSON(message: QueryDenomHashResponse): unknown;
    create(base?: DeepPartial<QueryDenomHashResponse>): QueryDenomHashResponse;
    fromPartial(object: DeepPartial<QueryDenomHashResponse>): QueryDenomHashResponse;
};
export declare const QueryEscrowAddressRequest: {
    encode(message: QueryEscrowAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEscrowAddressRequest;
    fromJSON(object: any): QueryEscrowAddressRequest;
    toJSON(message: QueryEscrowAddressRequest): unknown;
    create(base?: DeepPartial<QueryEscrowAddressRequest>): QueryEscrowAddressRequest;
    fromPartial(object: DeepPartial<QueryEscrowAddressRequest>): QueryEscrowAddressRequest;
};
export declare const QueryEscrowAddressResponse: {
    encode(message: QueryEscrowAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEscrowAddressResponse;
    fromJSON(object: any): QueryEscrowAddressResponse;
    toJSON(message: QueryEscrowAddressResponse): unknown;
    create(base?: DeepPartial<QueryEscrowAddressResponse>): QueryEscrowAddressResponse;
    fromPartial(object: DeepPartial<QueryEscrowAddressResponse>): QueryEscrowAddressResponse;
};
export declare const QueryTotalEscrowForDenomRequest: {
    encode(message: QueryTotalEscrowForDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalEscrowForDenomRequest;
    fromJSON(object: any): QueryTotalEscrowForDenomRequest;
    toJSON(message: QueryTotalEscrowForDenomRequest): unknown;
    create(base?: DeepPartial<QueryTotalEscrowForDenomRequest>): QueryTotalEscrowForDenomRequest;
    fromPartial(object: DeepPartial<QueryTotalEscrowForDenomRequest>): QueryTotalEscrowForDenomRequest;
};
export declare const QueryTotalEscrowForDenomResponse: {
    encode(message: QueryTotalEscrowForDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalEscrowForDenomResponse;
    fromJSON(object: any): QueryTotalEscrowForDenomResponse;
    toJSON(message: QueryTotalEscrowForDenomResponse): unknown;
    create(base?: DeepPartial<QueryTotalEscrowForDenomResponse>): QueryTotalEscrowForDenomResponse;
    fromPartial(object: DeepPartial<QueryTotalEscrowForDenomResponse>): QueryTotalEscrowForDenomResponse;
};
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** DenomTrace queries a denomination trace information. */
    DenomTrace(request: DeepPartial<QueryDenomTraceRequest>, metadata?: grpc.Metadata): Promise<QueryDenomTraceResponse>;
    /** DenomTraces queries all denomination traces. */
    DenomTraces(request: DeepPartial<QueryDenomTracesRequest>, metadata?: grpc.Metadata): Promise<QueryDenomTracesResponse>;
    /** Params queries all parameters of the ibc-transfer module. */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    /** DenomHash queries a denomination hash information. */
    DenomHash(request: DeepPartial<QueryDenomHashRequest>, metadata?: grpc.Metadata): Promise<QueryDenomHashResponse>;
    /** EscrowAddress returns the escrow address for a particular port and channel id. */
    EscrowAddress(request: DeepPartial<QueryEscrowAddressRequest>, metadata?: grpc.Metadata): Promise<QueryEscrowAddressResponse>;
    /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
    TotalEscrowForDenom(request: DeepPartial<QueryTotalEscrowForDenomRequest>, metadata?: grpc.Metadata): Promise<QueryTotalEscrowForDenomResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    DenomTrace(request: DeepPartial<QueryDenomTraceRequest>, metadata?: grpc.Metadata): Promise<QueryDenomTraceResponse>;
    DenomTraces(request: DeepPartial<QueryDenomTracesRequest>, metadata?: grpc.Metadata): Promise<QueryDenomTracesResponse>;
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    DenomHash(request: DeepPartial<QueryDenomHashRequest>, metadata?: grpc.Metadata): Promise<QueryDenomHashResponse>;
    EscrowAddress(request: DeepPartial<QueryEscrowAddressRequest>, metadata?: grpc.Metadata): Promise<QueryEscrowAddressResponse>;
    TotalEscrowForDenom(request: DeepPartial<QueryTotalEscrowForDenomRequest>, metadata?: grpc.Metadata): Promise<QueryTotalEscrowForDenomResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryDenomTraceDesc: UnaryMethodDefinitionish;
export declare const QueryDenomTracesDesc: UnaryMethodDefinitionish;
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
export declare const QueryDenomHashDesc: UnaryMethodDefinitionish;
export declare const QueryEscrowAddressDesc: UnaryMethodDefinitionish;
export declare const QueryTotalEscrowForDenomDesc: UnaryMethodDefinitionish;
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
