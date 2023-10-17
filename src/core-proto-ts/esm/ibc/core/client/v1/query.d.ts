import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { ConsensusStateWithHeight, Height, IdentifiedClientState, Params } from "./client";
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequest {
    /** client state unique identifier */
    clientId: string;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponse {
    /** client state associated with the request identifier */
    clientState: Any | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height | undefined;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequest {
    /** pagination request */
    pagination: PageRequest | undefined;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponse {
    /** list of stored ClientStates of the chain. */
    clientStates: IdentifiedClientState[];
    /** pagination response */
    pagination: PageResponse | undefined;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequest {
    /** client identifier */
    clientId: string;
    /** consensus state revision number */
    revisionNumber: string;
    /** consensus state revision height */
    revisionHeight: string;
    /**
     * latest_height overrrides the height field and queries the latest stored
     * ConsensusState
     */
    latestHeight: boolean;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponse {
    /** consensus state associated with the client identifier at the given height */
    consensusState: Any | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height | undefined;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequest {
    /** client identifier */
    clientId: string;
    /** pagination request */
    pagination: PageRequest | undefined;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponse {
    /** consensus states associated with the identifier */
    consensusStates: ConsensusStateWithHeight[];
    /** pagination response */
    pagination: PageResponse | undefined;
}
/**
 * QueryConsensusStateHeightsRequest is the request type for Query/ConsensusStateHeights
 * RPC method.
 */
export interface QueryConsensusStateHeightsRequest {
    /** client identifier */
    clientId: string;
    /** pagination request */
    pagination: PageRequest | undefined;
}
/**
 * QueryConsensusStateHeightsResponse is the response type for the
 * Query/ConsensusStateHeights RPC method
 */
export interface QueryConsensusStateHeightsResponse {
    /** consensus state heights */
    consensusStateHeights: Height[];
    /** pagination response */
    pagination: PageResponse | undefined;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */
export interface QueryClientStatusRequest {
    /** client unique identifier */
    clientId: string;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */
export interface QueryClientStatusResponse {
    status: string;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsRequest {
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */
export interface QueryUpgradedClientStateRequest {
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */
export interface QueryUpgradedClientStateResponse {
    /** client state associated with the request identifier */
    upgradedClientState: Any | undefined;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */
export interface QueryUpgradedConsensusStateRequest {
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */
export interface QueryUpgradedConsensusStateResponse {
    /** Consensus state associated with the request identifier */
    upgradedConsensusState: Any | undefined;
}
export declare const QueryClientStateRequest: {
    encode(message: QueryClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStateRequest;
    fromJSON(object: any): QueryClientStateRequest;
    toJSON(message: QueryClientStateRequest): unknown;
    create(base?: DeepPartial<QueryClientStateRequest>): QueryClientStateRequest;
    fromPartial(object: DeepPartial<QueryClientStateRequest>): QueryClientStateRequest;
};
export declare const QueryClientStateResponse: {
    encode(message: QueryClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStateResponse;
    fromJSON(object: any): QueryClientStateResponse;
    toJSON(message: QueryClientStateResponse): unknown;
    create(base?: DeepPartial<QueryClientStateResponse>): QueryClientStateResponse;
    fromPartial(object: DeepPartial<QueryClientStateResponse>): QueryClientStateResponse;
};
export declare const QueryClientStatesRequest: {
    encode(message: QueryClientStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatesRequest;
    fromJSON(object: any): QueryClientStatesRequest;
    toJSON(message: QueryClientStatesRequest): unknown;
    create(base?: DeepPartial<QueryClientStatesRequest>): QueryClientStatesRequest;
    fromPartial(object: DeepPartial<QueryClientStatesRequest>): QueryClientStatesRequest;
};
export declare const QueryClientStatesResponse: {
    encode(message: QueryClientStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatesResponse;
    fromJSON(object: any): QueryClientStatesResponse;
    toJSON(message: QueryClientStatesResponse): unknown;
    create(base?: DeepPartial<QueryClientStatesResponse>): QueryClientStatesResponse;
    fromPartial(object: DeepPartial<QueryClientStatesResponse>): QueryClientStatesResponse;
};
export declare const QueryConsensusStateRequest: {
    encode(message: QueryConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateRequest;
    fromJSON(object: any): QueryConsensusStateRequest;
    toJSON(message: QueryConsensusStateRequest): unknown;
    create(base?: DeepPartial<QueryConsensusStateRequest>): QueryConsensusStateRequest;
    fromPartial(object: DeepPartial<QueryConsensusStateRequest>): QueryConsensusStateRequest;
};
export declare const QueryConsensusStateResponse: {
    encode(message: QueryConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateResponse;
    fromJSON(object: any): QueryConsensusStateResponse;
    toJSON(message: QueryConsensusStateResponse): unknown;
    create(base?: DeepPartial<QueryConsensusStateResponse>): QueryConsensusStateResponse;
    fromPartial(object: DeepPartial<QueryConsensusStateResponse>): QueryConsensusStateResponse;
};
export declare const QueryConsensusStatesRequest: {
    encode(message: QueryConsensusStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStatesRequest;
    fromJSON(object: any): QueryConsensusStatesRequest;
    toJSON(message: QueryConsensusStatesRequest): unknown;
    create(base?: DeepPartial<QueryConsensusStatesRequest>): QueryConsensusStatesRequest;
    fromPartial(object: DeepPartial<QueryConsensusStatesRequest>): QueryConsensusStatesRequest;
};
export declare const QueryConsensusStatesResponse: {
    encode(message: QueryConsensusStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStatesResponse;
    fromJSON(object: any): QueryConsensusStatesResponse;
    toJSON(message: QueryConsensusStatesResponse): unknown;
    create(base?: DeepPartial<QueryConsensusStatesResponse>): QueryConsensusStatesResponse;
    fromPartial(object: DeepPartial<QueryConsensusStatesResponse>): QueryConsensusStatesResponse;
};
export declare const QueryConsensusStateHeightsRequest: {
    encode(message: QueryConsensusStateHeightsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateHeightsRequest;
    fromJSON(object: any): QueryConsensusStateHeightsRequest;
    toJSON(message: QueryConsensusStateHeightsRequest): unknown;
    create(base?: DeepPartial<QueryConsensusStateHeightsRequest>): QueryConsensusStateHeightsRequest;
    fromPartial(object: DeepPartial<QueryConsensusStateHeightsRequest>): QueryConsensusStateHeightsRequest;
};
export declare const QueryConsensusStateHeightsResponse: {
    encode(message: QueryConsensusStateHeightsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateHeightsResponse;
    fromJSON(object: any): QueryConsensusStateHeightsResponse;
    toJSON(message: QueryConsensusStateHeightsResponse): unknown;
    create(base?: DeepPartial<QueryConsensusStateHeightsResponse>): QueryConsensusStateHeightsResponse;
    fromPartial(object: DeepPartial<QueryConsensusStateHeightsResponse>): QueryConsensusStateHeightsResponse;
};
export declare const QueryClientStatusRequest: {
    encode(message: QueryClientStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatusRequest;
    fromJSON(object: any): QueryClientStatusRequest;
    toJSON(message: QueryClientStatusRequest): unknown;
    create(base?: DeepPartial<QueryClientStatusRequest>): QueryClientStatusRequest;
    fromPartial(object: DeepPartial<QueryClientStatusRequest>): QueryClientStatusRequest;
};
export declare const QueryClientStatusResponse: {
    encode(message: QueryClientStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatusResponse;
    fromJSON(object: any): QueryClientStatusResponse;
    toJSON(message: QueryClientStatusResponse): unknown;
    create(base?: DeepPartial<QueryClientStatusResponse>): QueryClientStatusResponse;
    fromPartial(object: DeepPartial<QueryClientStatusResponse>): QueryClientStatusResponse;
};
export declare const QueryClientParamsRequest: {
    encode(_: QueryClientParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientParamsRequest;
    fromJSON(_: any): QueryClientParamsRequest;
    toJSON(_: QueryClientParamsRequest): unknown;
    create(base?: DeepPartial<QueryClientParamsRequest>): QueryClientParamsRequest;
    fromPartial(_: DeepPartial<QueryClientParamsRequest>): QueryClientParamsRequest;
};
export declare const QueryClientParamsResponse: {
    encode(message: QueryClientParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientParamsResponse;
    fromJSON(object: any): QueryClientParamsResponse;
    toJSON(message: QueryClientParamsResponse): unknown;
    create(base?: DeepPartial<QueryClientParamsResponse>): QueryClientParamsResponse;
    fromPartial(object: DeepPartial<QueryClientParamsResponse>): QueryClientParamsResponse;
};
export declare const QueryUpgradedClientStateRequest: {
    encode(_: QueryUpgradedClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedClientStateRequest;
    fromJSON(_: any): QueryUpgradedClientStateRequest;
    toJSON(_: QueryUpgradedClientStateRequest): unknown;
    create(base?: DeepPartial<QueryUpgradedClientStateRequest>): QueryUpgradedClientStateRequest;
    fromPartial(_: DeepPartial<QueryUpgradedClientStateRequest>): QueryUpgradedClientStateRequest;
};
export declare const QueryUpgradedClientStateResponse: {
    encode(message: QueryUpgradedClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedClientStateResponse;
    fromJSON(object: any): QueryUpgradedClientStateResponse;
    toJSON(message: QueryUpgradedClientStateResponse): unknown;
    create(base?: DeepPartial<QueryUpgradedClientStateResponse>): QueryUpgradedClientStateResponse;
    fromPartial(object: DeepPartial<QueryUpgradedClientStateResponse>): QueryUpgradedClientStateResponse;
};
export declare const QueryUpgradedConsensusStateRequest: {
    encode(_: QueryUpgradedConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest;
    fromJSON(_: any): QueryUpgradedConsensusStateRequest;
    toJSON(_: QueryUpgradedConsensusStateRequest): unknown;
    create(base?: DeepPartial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest;
    fromPartial(_: DeepPartial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest;
};
export declare const QueryUpgradedConsensusStateResponse: {
    encode(message: QueryUpgradedConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse;
    fromJSON(object: any): QueryUpgradedConsensusStateResponse;
    toJSON(message: QueryUpgradedConsensusStateResponse): unknown;
    create(base?: DeepPartial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse;
    fromPartial(object: DeepPartial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse;
};
/** Query provides defines the gRPC querier service */
export interface Query {
    /** ClientState queries an IBC light client. */
    ClientState(request: DeepPartial<QueryClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryClientStateResponse>;
    /** ClientStates queries all the IBC light clients of a chain. */
    ClientStates(request: DeepPartial<QueryClientStatesRequest>, metadata?: grpc.Metadata): Promise<QueryClientStatesResponse>;
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    ConsensusState(request: DeepPartial<QueryConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStateResponse>;
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    ConsensusStates(request: DeepPartial<QueryConsensusStatesRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStatesResponse>;
    /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */
    ConsensusStateHeights(request: DeepPartial<QueryConsensusStateHeightsRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStateHeightsResponse>;
    /** Status queries the status of an IBC client. */
    ClientStatus(request: DeepPartial<QueryClientStatusRequest>, metadata?: grpc.Metadata): Promise<QueryClientStatusResponse>;
    /** ClientParams queries all parameters of the ibc client submodule. */
    ClientParams(request: DeepPartial<QueryClientParamsRequest>, metadata?: grpc.Metadata): Promise<QueryClientParamsResponse>;
    /** UpgradedClientState queries an Upgraded IBC light client. */
    UpgradedClientState(request: DeepPartial<QueryUpgradedClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedClientStateResponse>;
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
    UpgradedConsensusState(request: DeepPartial<QueryUpgradedConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedConsensusStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ClientState(request: DeepPartial<QueryClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryClientStateResponse>;
    ClientStates(request: DeepPartial<QueryClientStatesRequest>, metadata?: grpc.Metadata): Promise<QueryClientStatesResponse>;
    ConsensusState(request: DeepPartial<QueryConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStateResponse>;
    ConsensusStates(request: DeepPartial<QueryConsensusStatesRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStatesResponse>;
    ConsensusStateHeights(request: DeepPartial<QueryConsensusStateHeightsRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStateHeightsResponse>;
    ClientStatus(request: DeepPartial<QueryClientStatusRequest>, metadata?: grpc.Metadata): Promise<QueryClientStatusResponse>;
    ClientParams(request: DeepPartial<QueryClientParamsRequest>, metadata?: grpc.Metadata): Promise<QueryClientParamsResponse>;
    UpgradedClientState(request: DeepPartial<QueryUpgradedClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedClientStateResponse>;
    UpgradedConsensusState(request: DeepPartial<QueryUpgradedConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedConsensusStateResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryClientStateDesc: UnaryMethodDefinitionish;
export declare const QueryClientStatesDesc: UnaryMethodDefinitionish;
export declare const QueryConsensusStateDesc: UnaryMethodDefinitionish;
export declare const QueryConsensusStatesDesc: UnaryMethodDefinitionish;
export declare const QueryConsensusStateHeightsDesc: UnaryMethodDefinitionish;
export declare const QueryClientStatusDesc: UnaryMethodDefinitionish;
export declare const QueryClientParamsDesc: UnaryMethodDefinitionish;
export declare const QueryUpgradedClientStateDesc: UnaryMethodDefinitionish;
export declare const QueryUpgradedConsensusStateDesc: UnaryMethodDefinitionish;
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
