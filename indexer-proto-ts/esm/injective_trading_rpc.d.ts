import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "injective_trading_rpc";
export interface ListTradingStrategiesRequest {
    state: string;
    /** MarketId of the trading strategy */
    marketId: string;
    /** subaccount ID to filter by */
    subaccountId: string;
    /** Account address */
    accountAddress: string;
    /**
     * The starting timestamp in UNIX milliseconds for the creation time of the
     * trading strategy
     */
    startTime: string;
    /**
     * The ending timestamp in UNIX milliseconds for the creation time of the
     * trading strategy
     */
    endTime: string;
    limit: number;
    skip: string;
}
export interface ListTradingStrategiesResponse {
    /** The trading strategies */
    strategies: TradingStrategy[];
    paging: Paging | undefined;
}
export interface TradingStrategy {
    state: string;
    /** MarketId of the trading strategy */
    marketId: string;
    /** subaccount ID of the trading strategy */
    subaccountId: string;
    /** Account address */
    accountAddress: string;
    /** Contract address */
    contractAddress: string;
    /** Execution price of the trading strategy */
    executionPrice: string;
    /** Base quantity of the trading strategy */
    baseQuantity: string;
    /** Quote quantity of the trading strategy */
    quoteQuantity: string;
    /** Lower bound of the trading strategy */
    lowerBound: string;
    /** Upper bound of the trading strategy */
    upperBound: string;
    /** Stop loss limit of the trading strategy */
    stopLoss: string;
    /** Take profit limit of the trading strategy */
    takeProfit: string;
    /** Swap fee of the trading strategy */
    swapFee: string;
    /** Base deposit at the time of closing the trading strategy */
    baseDeposit: string;
    /** Quote deposit at the time of closing the trading strategy */
    quoteDeposit: string;
    /** Market mid price at the time of closing the trading strategy */
    marketMidPrice: string;
    /** Block height when the strategy was created. */
    createdHeight: string;
    /** Block height when the strategy was removed. */
    removedHeight: string;
    /** UpdatedAt timestamp in UNIX millis. */
    createdAt: string;
    /** UpdatedAt timestamp in UNIX millis. */
    updatedAt: string;
}
/** Paging defines the structure for required params for handling pagination */
export interface Paging {
    /** total number of txs saved in database */
    total: string;
    /** can be either block height or index num */
    from: number;
    /** can be either block height or index num */
    to: number;
    /** count entries by subaccount, serving some places on helix */
    countBySubaccount: string;
    /** array of tokens to navigate to the next pages */
    next: string[];
}
export declare const ListTradingStrategiesRequest: {
    encode(message: ListTradingStrategiesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListTradingStrategiesRequest;
    fromJSON(object: any): ListTradingStrategiesRequest;
    toJSON(message: ListTradingStrategiesRequest): unknown;
    create(base?: DeepPartial<ListTradingStrategiesRequest>): ListTradingStrategiesRequest;
    fromPartial(object: DeepPartial<ListTradingStrategiesRequest>): ListTradingStrategiesRequest;
};
export declare const ListTradingStrategiesResponse: {
    encode(message: ListTradingStrategiesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListTradingStrategiesResponse;
    fromJSON(object: any): ListTradingStrategiesResponse;
    toJSON(message: ListTradingStrategiesResponse): unknown;
    create(base?: DeepPartial<ListTradingStrategiesResponse>): ListTradingStrategiesResponse;
    fromPartial(object: DeepPartial<ListTradingStrategiesResponse>): ListTradingStrategiesResponse;
};
export declare const TradingStrategy: {
    encode(message: TradingStrategy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingStrategy;
    fromJSON(object: any): TradingStrategy;
    toJSON(message: TradingStrategy): unknown;
    create(base?: DeepPartial<TradingStrategy>): TradingStrategy;
    fromPartial(object: DeepPartial<TradingStrategy>): TradingStrategy;
};
export declare const Paging: {
    encode(message: Paging, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Paging;
    fromJSON(object: any): Paging;
    toJSON(message: Paging): unknown;
    create(base?: DeepPartial<Paging>): Paging;
    fromPartial(object: DeepPartial<Paging>): Paging;
};
/**
 * InjectiveTradingStrategiesRPC defined a gRPC service for Injective Trading
 * Strategies.
 */
export interface InjectiveTradingRPC {
    /** Lists all trading strategies */
    ListTradingStrategies(request: DeepPartial<ListTradingStrategiesRequest>, metadata?: grpc.Metadata): Promise<ListTradingStrategiesResponse>;
}
export declare class InjectiveTradingRPCClientImpl implements InjectiveTradingRPC {
    private readonly rpc;
    constructor(rpc: Rpc);
    ListTradingStrategies(request: DeepPartial<ListTradingStrategiesRequest>, metadata?: grpc.Metadata): Promise<ListTradingStrategiesResponse>;
}
export declare const InjectiveTradingRPCDesc: {
    serviceName: string;
};
export declare const InjectiveTradingRPCListTradingStrategiesDesc: UnaryMethodDefinitionish;
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
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export declare class GrpcWebError extends tsProtoGlobalThis.Error {
    code: grpc.Code;
    metadata: grpc.Metadata;
    constructor(message: string, code: grpc.Code, metadata: grpc.Metadata);
}
export {};
