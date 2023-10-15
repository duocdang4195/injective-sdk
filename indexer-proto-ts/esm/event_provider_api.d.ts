import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
export declare const protobufPackage = "event_provider_api";
export interface GetLatestHeightRequest {
}
export interface GetLatestHeightResponse {
    /** Response version. */
    v: string;
    /** Status of the response. */
    s: string;
    /** Error message. */
    e: string;
    data: LatestBlockHeight | undefined;
}
/** Latest block height from event provider db */
export interface LatestBlockHeight {
    height: string;
}
export interface StreamBlockEventsRequest {
    /** Select backend processor */
    backend: string;
    height: number;
}
export interface StreamBlockEventsResponse {
    blocks: Block[];
}
export interface Block {
    height: string;
    version: string;
    /** Processed block events in the block */
    events: BlockEvent[];
    /** Indicates whether the block is the latest one available in the event provider */
    inSync: boolean;
}
export interface BlockEvent {
    /** Event type */
    typeUrl: string;
    /** Event data */
    value: Uint8Array;
    /** TX hash */
    txHash: Uint8Array;
}
export interface GetBlockEventsRPCRequest {
    /** Select backend processor */
    backend: string;
    height: number;
}
export interface GetBlockEventsRPCResponse {
    /** Response version. */
    v: string;
    /** Status of the response. */
    s: string;
    /** Error message. */
    e: string;
    data: BlockEventsRPC | undefined;
}
/** Processed block events for backend processor to consume */
export interface BlockEventsRPC {
    /** Array of event types */
    types: string[];
    /** Array of parsed events */
    events: Uint8Array[];
    /** Map of event index - tx hash */
    txHashes: {
        [key: number]: Uint8Array;
    };
}
export interface BlockEventsRPC_TxHashesEntry {
    key: number;
    value: Uint8Array;
}
export interface GetCustomEventsRPCRequest {
    /** Select backend processor */
    backend: string;
    height: number;
    /** Specify custom events to get */
    events: string;
}
export interface GetCustomEventsRPCResponse {
    /** Response version. */
    v: string;
    /** Status of the response. */
    s: string;
    /** Error message. */
    e: string;
    data: BlockEventsRPC | undefined;
}
export declare const GetLatestHeightRequest: {
    encode(_: GetLatestHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestHeightRequest;
    fromJSON(_: any): GetLatestHeightRequest;
    toJSON(_: GetLatestHeightRequest): unknown;
    create(base?: DeepPartial<GetLatestHeightRequest>): GetLatestHeightRequest;
    fromPartial(_: DeepPartial<GetLatestHeightRequest>): GetLatestHeightRequest;
};
export declare const GetLatestHeightResponse: {
    encode(message: GetLatestHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestHeightResponse;
    fromJSON(object: any): GetLatestHeightResponse;
    toJSON(message: GetLatestHeightResponse): unknown;
    create(base?: DeepPartial<GetLatestHeightResponse>): GetLatestHeightResponse;
    fromPartial(object: DeepPartial<GetLatestHeightResponse>): GetLatestHeightResponse;
};
export declare const LatestBlockHeight: {
    encode(message: LatestBlockHeight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LatestBlockHeight;
    fromJSON(object: any): LatestBlockHeight;
    toJSON(message: LatestBlockHeight): unknown;
    create(base?: DeepPartial<LatestBlockHeight>): LatestBlockHeight;
    fromPartial(object: DeepPartial<LatestBlockHeight>): LatestBlockHeight;
};
export declare const StreamBlockEventsRequest: {
    encode(message: StreamBlockEventsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamBlockEventsRequest;
    fromJSON(object: any): StreamBlockEventsRequest;
    toJSON(message: StreamBlockEventsRequest): unknown;
    create(base?: DeepPartial<StreamBlockEventsRequest>): StreamBlockEventsRequest;
    fromPartial(object: DeepPartial<StreamBlockEventsRequest>): StreamBlockEventsRequest;
};
export declare const StreamBlockEventsResponse: {
    encode(message: StreamBlockEventsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamBlockEventsResponse;
    fromJSON(object: any): StreamBlockEventsResponse;
    toJSON(message: StreamBlockEventsResponse): unknown;
    create(base?: DeepPartial<StreamBlockEventsResponse>): StreamBlockEventsResponse;
    fromPartial(object: DeepPartial<StreamBlockEventsResponse>): StreamBlockEventsResponse;
};
export declare const Block: {
    encode(message: Block, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Block;
    fromJSON(object: any): Block;
    toJSON(message: Block): unknown;
    create(base?: DeepPartial<Block>): Block;
    fromPartial(object: DeepPartial<Block>): Block;
};
export declare const BlockEvent: {
    encode(message: BlockEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockEvent;
    fromJSON(object: any): BlockEvent;
    toJSON(message: BlockEvent): unknown;
    create(base?: DeepPartial<BlockEvent>): BlockEvent;
    fromPartial(object: DeepPartial<BlockEvent>): BlockEvent;
};
export declare const GetBlockEventsRPCRequest: {
    encode(message: GetBlockEventsRPCRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockEventsRPCRequest;
    fromJSON(object: any): GetBlockEventsRPCRequest;
    toJSON(message: GetBlockEventsRPCRequest): unknown;
    create(base?: DeepPartial<GetBlockEventsRPCRequest>): GetBlockEventsRPCRequest;
    fromPartial(object: DeepPartial<GetBlockEventsRPCRequest>): GetBlockEventsRPCRequest;
};
export declare const GetBlockEventsRPCResponse: {
    encode(message: GetBlockEventsRPCResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockEventsRPCResponse;
    fromJSON(object: any): GetBlockEventsRPCResponse;
    toJSON(message: GetBlockEventsRPCResponse): unknown;
    create(base?: DeepPartial<GetBlockEventsRPCResponse>): GetBlockEventsRPCResponse;
    fromPartial(object: DeepPartial<GetBlockEventsRPCResponse>): GetBlockEventsRPCResponse;
};
export declare const BlockEventsRPC: {
    encode(message: BlockEventsRPC, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockEventsRPC;
    fromJSON(object: any): BlockEventsRPC;
    toJSON(message: BlockEventsRPC): unknown;
    create(base?: DeepPartial<BlockEventsRPC>): BlockEventsRPC;
    fromPartial(object: DeepPartial<BlockEventsRPC>): BlockEventsRPC;
};
export declare const BlockEventsRPC_TxHashesEntry: {
    encode(message: BlockEventsRPC_TxHashesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockEventsRPC_TxHashesEntry;
    fromJSON(object: any): BlockEventsRPC_TxHashesEntry;
    toJSON(message: BlockEventsRPC_TxHashesEntry): unknown;
    create(base?: DeepPartial<BlockEventsRPC_TxHashesEntry>): BlockEventsRPC_TxHashesEntry;
    fromPartial(object: DeepPartial<BlockEventsRPC_TxHashesEntry>): BlockEventsRPC_TxHashesEntry;
};
export declare const GetCustomEventsRPCRequest: {
    encode(message: GetCustomEventsRPCRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomEventsRPCRequest;
    fromJSON(object: any): GetCustomEventsRPCRequest;
    toJSON(message: GetCustomEventsRPCRequest): unknown;
    create(base?: DeepPartial<GetCustomEventsRPCRequest>): GetCustomEventsRPCRequest;
    fromPartial(object: DeepPartial<GetCustomEventsRPCRequest>): GetCustomEventsRPCRequest;
};
export declare const GetCustomEventsRPCResponse: {
    encode(message: GetCustomEventsRPCResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomEventsRPCResponse;
    fromJSON(object: any): GetCustomEventsRPCResponse;
    toJSON(message: GetCustomEventsRPCResponse): unknown;
    create(base?: DeepPartial<GetCustomEventsRPCResponse>): GetCustomEventsRPCResponse;
    fromPartial(object: DeepPartial<GetCustomEventsRPCResponse>): GetCustomEventsRPCResponse;
};
/** EventProviderAPI provides processed block events for different backends. */
export interface EventProviderAPI {
    /** Get latest block from event provider */
    GetLatestHeight(request: DeepPartial<GetLatestHeightRequest>, metadata?: grpc.Metadata): Promise<GetLatestHeightResponse>;
    /** Stream processed block events for selected backend */
    StreamBlockEvents(request: DeepPartial<StreamBlockEventsRequest>, metadata?: grpc.Metadata): Observable<StreamBlockEventsResponse>;
    /** Get processed block events for selected backend */
    GetBlockEventsRPC(request: DeepPartial<GetBlockEventsRPCRequest>, metadata?: grpc.Metadata): Promise<GetBlockEventsRPCResponse>;
    /** Get custom processed block events for selected backend */
    GetCustomEventsRPC(request: DeepPartial<GetCustomEventsRPCRequest>, metadata?: grpc.Metadata): Promise<GetCustomEventsRPCResponse>;
}
export declare class EventProviderAPIClientImpl implements EventProviderAPI {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetLatestHeight(request: DeepPartial<GetLatestHeightRequest>, metadata?: grpc.Metadata): Promise<GetLatestHeightResponse>;
    StreamBlockEvents(request: DeepPartial<StreamBlockEventsRequest>, metadata?: grpc.Metadata): Observable<StreamBlockEventsResponse>;
    GetBlockEventsRPC(request: DeepPartial<GetBlockEventsRPCRequest>, metadata?: grpc.Metadata): Promise<GetBlockEventsRPCResponse>;
    GetCustomEventsRPC(request: DeepPartial<GetCustomEventsRPCRequest>, metadata?: grpc.Metadata): Promise<GetCustomEventsRPCResponse>;
}
export declare const EventProviderAPIDesc: {
    serviceName: string;
};
export declare const EventProviderAPIGetLatestHeightDesc: UnaryMethodDefinitionish;
export declare const EventProviderAPIStreamBlockEventsDesc: UnaryMethodDefinitionish;
export declare const EventProviderAPIGetBlockEventsRPCDesc: UnaryMethodDefinitionish;
export declare const EventProviderAPIGetCustomEventsRPCDesc: UnaryMethodDefinitionish;
interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
    requestStream: any;
    responseStream: any;
}
type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;
interface Rpc {
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
    invoke<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Observable<any>;
}
export declare class GrpcWebImpl {
    private host;
    private options;
    constructor(host: string, options: {
        transport?: grpc.TransportFactory;
        streamingTransport?: grpc.TransportFactory;
        debug?: boolean;
        metadata?: grpc.Metadata;
        upStreamRetryCodes?: number[];
    });
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Promise<any>;
    invoke<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Observable<any>;
}
declare var tsProtoGlobalThis: any;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export declare class GrpcWebError extends tsProtoGlobalThis.Error {
    code: grpc.Code;
    metadata: grpc.Metadata;
    constructor(message: string, code: grpc.Code, metadata: grpc.Metadata);
}
export {};
