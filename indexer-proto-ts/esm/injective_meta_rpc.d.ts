import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
export declare const protobufPackage = "injective_meta_rpc";
export interface PingRequest {
}
export interface PingResponse {
}
export interface VersionRequest {
}
export interface VersionResponse {
    /** injective-exchange code version. */
    version: string;
    /** Additional build meta info. */
    build: {
        [key: string]: string;
    };
}
export interface VersionResponse_BuildEntry {
    key: string;
    value: string;
}
export interface InfoRequest {
    /** Provide current system UNIX timestamp in millis */
    timestamp: string;
}
export interface InfoResponse {
    /** The original timestamp value in millis. */
    timestamp: string;
    /** UNIX time on the server in millis. */
    serverTime: string;
    /** injective-exchange code version. */
    version: string;
    /** Additional build meta info. */
    build: {
        [key: string]: string;
    };
    /** Server's location region */
    region: string;
}
export interface InfoResponse_BuildEntry {
    key: string;
    value: string;
}
export interface StreamKeepaliveRequest {
}
export interface StreamKeepaliveResponse {
    /** Server event */
    event: string;
    /** New conection endpoint for the gRPC API */
    newEndpoint: string;
    /** Operation timestamp in UNIX millis. */
    timestamp: string;
}
export interface TokenMetadataRequest {
    denoms: string[];
}
export interface TokenMetadataResponse {
    /** tokens and their metadata list */
    tokens: TokenMetadataElement[];
}
export interface TokenMetadataElement {
    /** Token's Ethereum address, not all token have this information */
    ethereumAddress: string;
    /** Token's CoinGecko id for price references */
    coingeckoId: string;
    /** Token's denom on injective chain */
    denom: string;
    /** Token name */
    name: string;
    /** Token symbol */
    symbol: string;
    /** Number of decimal places used to represent the token's smallest unit */
    decimals: number;
    /** Token logo URL */
    logo: string;
}
export declare const PingRequest: {
    encode(_: PingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PingRequest;
    fromJSON(_: any): PingRequest;
    toJSON(_: PingRequest): unknown;
    create(base?: DeepPartial<PingRequest>): PingRequest;
    fromPartial(_: DeepPartial<PingRequest>): PingRequest;
};
export declare const PingResponse: {
    encode(_: PingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PingResponse;
    fromJSON(_: any): PingResponse;
    toJSON(_: PingResponse): unknown;
    create(base?: DeepPartial<PingResponse>): PingResponse;
    fromPartial(_: DeepPartial<PingResponse>): PingResponse;
};
export declare const VersionRequest: {
    encode(_: VersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VersionRequest;
    fromJSON(_: any): VersionRequest;
    toJSON(_: VersionRequest): unknown;
    create(base?: DeepPartial<VersionRequest>): VersionRequest;
    fromPartial(_: DeepPartial<VersionRequest>): VersionRequest;
};
export declare const VersionResponse: {
    encode(message: VersionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VersionResponse;
    fromJSON(object: any): VersionResponse;
    toJSON(message: VersionResponse): unknown;
    create(base?: DeepPartial<VersionResponse>): VersionResponse;
    fromPartial(object: DeepPartial<VersionResponse>): VersionResponse;
};
export declare const VersionResponse_BuildEntry: {
    encode(message: VersionResponse_BuildEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VersionResponse_BuildEntry;
    fromJSON(object: any): VersionResponse_BuildEntry;
    toJSON(message: VersionResponse_BuildEntry): unknown;
    create(base?: DeepPartial<VersionResponse_BuildEntry>): VersionResponse_BuildEntry;
    fromPartial(object: DeepPartial<VersionResponse_BuildEntry>): VersionResponse_BuildEntry;
};
export declare const InfoRequest: {
    encode(message: InfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InfoRequest;
    fromJSON(object: any): InfoRequest;
    toJSON(message: InfoRequest): unknown;
    create(base?: DeepPartial<InfoRequest>): InfoRequest;
    fromPartial(object: DeepPartial<InfoRequest>): InfoRequest;
};
export declare const InfoResponse: {
    encode(message: InfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InfoResponse;
    fromJSON(object: any): InfoResponse;
    toJSON(message: InfoResponse): unknown;
    create(base?: DeepPartial<InfoResponse>): InfoResponse;
    fromPartial(object: DeepPartial<InfoResponse>): InfoResponse;
};
export declare const InfoResponse_BuildEntry: {
    encode(message: InfoResponse_BuildEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InfoResponse_BuildEntry;
    fromJSON(object: any): InfoResponse_BuildEntry;
    toJSON(message: InfoResponse_BuildEntry): unknown;
    create(base?: DeepPartial<InfoResponse_BuildEntry>): InfoResponse_BuildEntry;
    fromPartial(object: DeepPartial<InfoResponse_BuildEntry>): InfoResponse_BuildEntry;
};
export declare const StreamKeepaliveRequest: {
    encode(_: StreamKeepaliveRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamKeepaliveRequest;
    fromJSON(_: any): StreamKeepaliveRequest;
    toJSON(_: StreamKeepaliveRequest): unknown;
    create(base?: DeepPartial<StreamKeepaliveRequest>): StreamKeepaliveRequest;
    fromPartial(_: DeepPartial<StreamKeepaliveRequest>): StreamKeepaliveRequest;
};
export declare const StreamKeepaliveResponse: {
    encode(message: StreamKeepaliveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamKeepaliveResponse;
    fromJSON(object: any): StreamKeepaliveResponse;
    toJSON(message: StreamKeepaliveResponse): unknown;
    create(base?: DeepPartial<StreamKeepaliveResponse>): StreamKeepaliveResponse;
    fromPartial(object: DeepPartial<StreamKeepaliveResponse>): StreamKeepaliveResponse;
};
export declare const TokenMetadataRequest: {
    encode(message: TokenMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenMetadataRequest;
    fromJSON(object: any): TokenMetadataRequest;
    toJSON(message: TokenMetadataRequest): unknown;
    create(base?: DeepPartial<TokenMetadataRequest>): TokenMetadataRequest;
    fromPartial(object: DeepPartial<TokenMetadataRequest>): TokenMetadataRequest;
};
export declare const TokenMetadataResponse: {
    encode(message: TokenMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenMetadataResponse;
    fromJSON(object: any): TokenMetadataResponse;
    toJSON(message: TokenMetadataResponse): unknown;
    create(base?: DeepPartial<TokenMetadataResponse>): TokenMetadataResponse;
    fromPartial(object: DeepPartial<TokenMetadataResponse>): TokenMetadataResponse;
};
export declare const TokenMetadataElement: {
    encode(message: TokenMetadataElement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenMetadataElement;
    fromJSON(object: any): TokenMetadataElement;
    toJSON(message: TokenMetadataElement): unknown;
    create(base?: DeepPartial<TokenMetadataElement>): TokenMetadataElement;
    fromPartial(object: DeepPartial<TokenMetadataElement>): TokenMetadataElement;
};
/** InjectiveMetaRPC is a special API subset to get info about server. */
export interface InjectiveMetaRPC {
    /** Endpoint for checking server health. */
    Ping(request: DeepPartial<PingRequest>, metadata?: grpc.Metadata): Promise<PingResponse>;
    /** Returns injective-exchange version. */
    Version(request: DeepPartial<VersionRequest>, metadata?: grpc.Metadata): Promise<VersionResponse>;
    /** Gets connection info */
    Info(request: DeepPartial<InfoRequest>, metadata?: grpc.Metadata): Promise<InfoResponse>;
    /**
     * Stream keepalive, if server exits, a shutdown event will be sent over this
     * channel.
     */
    StreamKeepalive(request: DeepPartial<StreamKeepaliveRequest>, metadata?: grpc.Metadata): Observable<StreamKeepaliveResponse>;
    /** Get tokens metadata. Can be filtered by denom */
    TokenMetadata(request: DeepPartial<TokenMetadataRequest>, metadata?: grpc.Metadata): Promise<TokenMetadataResponse>;
}
export declare class InjectiveMetaRPCClientImpl implements InjectiveMetaRPC {
    private readonly rpc;
    constructor(rpc: Rpc);
    Ping(request: DeepPartial<PingRequest>, metadata?: grpc.Metadata): Promise<PingResponse>;
    Version(request: DeepPartial<VersionRequest>, metadata?: grpc.Metadata): Promise<VersionResponse>;
    Info(request: DeepPartial<InfoRequest>, metadata?: grpc.Metadata): Promise<InfoResponse>;
    StreamKeepalive(request: DeepPartial<StreamKeepaliveRequest>, metadata?: grpc.Metadata): Observable<StreamKeepaliveResponse>;
    TokenMetadata(request: DeepPartial<TokenMetadataRequest>, metadata?: grpc.Metadata): Promise<TokenMetadataResponse>;
}
export declare const InjectiveMetaRPCDesc: {
    serviceName: string;
};
export declare const InjectiveMetaRPCPingDesc: UnaryMethodDefinitionish;
export declare const InjectiveMetaRPCVersionDesc: UnaryMethodDefinitionish;
export declare const InjectiveMetaRPCInfoDesc: UnaryMethodDefinitionish;
export declare const InjectiveMetaRPCStreamKeepaliveDesc: UnaryMethodDefinitionish;
export declare const InjectiveMetaRPCTokenMetadataDesc: UnaryMethodDefinitionish;
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
