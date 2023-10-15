import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
export declare const protobufPackage = "injective_accounts_rpc";
export interface PortfolioRequest {
    /** Account address */
    accountAddress: string;
}
export interface PortfolioResponse {
    /** The portfolio of this account */
    portfolio: AccountPortfolio | undefined;
}
export interface AccountPortfolio {
    /** The account's portfolio value in USD. */
    portfolioValue: string;
    /** The account's available balance value in USD. */
    availableBalance: string;
    /** The account's locked balance value in USD. */
    lockedBalance: string;
    /** The account's total unrealized PnL value in USD. */
    unrealizedPnl: string;
    /** List of all subaccounts' portfolio */
    subaccounts: SubaccountPortfolio[];
}
export interface SubaccountPortfolio {
    /** The ID of this subaccount */
    subaccountId: string;
    /** The subaccount's available balance value in USD. */
    availableBalance: string;
    /** The subaccount's locked balance value in USD. */
    lockedBalance: string;
    /** The subaccount's total unrealized PnL value in USD. */
    unrealizedPnl: string;
}
export interface OrderStatesRequest {
    spotOrderHashes: string[];
    derivativeOrderHashes: string[];
}
export interface OrderStatesResponse {
    /** List of the spot order state records */
    spotOrderStates: OrderStateRecord[];
    /** List of the derivative order state records */
    derivativeOrderStates: OrderStateRecord[];
}
export interface OrderStateRecord {
    /** Hash of the order */
    orderHash: string;
    /** The subaccountId that this order belongs to */
    subaccountId: string;
    /** The Market ID of the order */
    marketId: string;
    /** The type of the order */
    orderType: string;
    /** The side of the order */
    orderSide: string;
    /** The state (status) of the order */
    state: string;
    /** The filled quantity of the order */
    quantityFilled: string;
    /** The filled quantity of the order */
    quantityRemaining: string;
    /** Order committed timestamp in UNIX millis. */
    createdAt: string;
    /** Order updated timestamp in UNIX millis. */
    updatedAt: string;
}
export interface SubaccountsListRequest {
    /** Account address, the subaccounts owner */
    accountAddress: string;
}
export interface SubaccountsListResponse {
    subaccounts: string[];
}
export interface SubaccountBalancesListRequest {
    /** SubaccountId of the trader we want to get the trades from */
    subaccountId: string;
    /**
     * Filter balances by denoms. If not set, the balances of all the denoms for
     * the subaccount are provided.
     */
    denoms: string[];
}
export interface SubaccountBalancesListResponse {
    /** List of subaccount balances */
    balances: SubaccountBalance[];
}
export interface SubaccountBalance {
    /** Related subaccount ID */
    subaccountId: string;
    /** Account address, owner of this subaccount */
    accountAddress: string;
    /** Coin denom on the chain. */
    denom: string;
    deposit: SubaccountDeposit | undefined;
}
export interface SubaccountDeposit {
    totalBalance: string;
    availableBalance: string;
}
export interface SubaccountBalanceEndpointRequest {
    /** SubaccountId of the trader we want to get the trades from */
    subaccountId: string;
    /** Specify denom to get balance */
    denom: string;
}
export interface SubaccountBalanceEndpointResponse {
    /** Subaccount balance */
    balance: SubaccountBalance | undefined;
}
export interface StreamSubaccountBalanceRequest {
    /** SubaccountId of the trader we want to get the trades from */
    subaccountId: string;
    /**
     * Filter balances by denoms. If not set, the balances of all the denoms for
     * the subaccount are provided.
     */
    denoms: string[];
}
export interface StreamSubaccountBalanceResponse {
    /** Subaccount balance */
    balance: SubaccountBalance | undefined;
    /** Operation timestamp in UNIX millis. */
    timestamp: string;
}
export interface SubaccountHistoryRequest {
    /** SubaccountId of the trader we want to get the history from */
    subaccountId: string;
    /** Filter history by denom */
    denom: string;
    /** Filter history by transfer type */
    transferTypes: string[];
    /** Skip will skip the first n item from the result */
    skip: string;
    /** Limit is used to specify the maximum number of items to be returned */
    limit: number;
    /** Upper bound of account transfer history's executedAt */
    endTime: string;
}
export interface SubaccountHistoryResponse {
    /** List of subaccount transfers */
    transfers: SubaccountBalanceTransfer[];
    paging: Paging | undefined;
}
export interface SubaccountBalanceTransfer {
    /** Type of the subaccount balance transfer */
    transferType: string;
    /** Subaccount ID of the sending side */
    srcSubaccountId: string;
    /** Account address of the sending side */
    srcAccountAddress: string;
    /** Subaccount ID of the receiving side */
    dstSubaccountId: string;
    /** Account address of the receiving side */
    dstAccountAddress: string;
    /** Coin amount of the transfer */
    amount: CosmosCoin | undefined;
    /** Timestamp of the transfer in UNIX millis */
    executedAt: string;
}
export interface CosmosCoin {
    /** Coin denominator */
    denom: string;
    /** Coin amount (big int) */
    amount: string;
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
export interface SubaccountOrderSummaryRequest {
    /** SubaccountId of the trader we want to get the summary from */
    subaccountId: string;
    /** MarketId is limiting order summary to specific market only */
    marketId: string;
    /** Filter by direction of the orders */
    orderDirection: string;
}
export interface SubaccountOrderSummaryResponse {
    /** Total count of subaccount's spot orders in given market and direction */
    spotOrdersTotal: string;
    /** Total count of subaccount's derivative orders in given market and direction */
    derivativeOrdersTotal: string;
}
export interface RewardsRequest {
    /** The distribution epoch sequence number. -1 for latest. */
    epoch: string;
    /** Account address for the rewards distribution */
    accountAddress: string;
}
export interface RewardsResponse {
    /** The trading rewards distributed */
    rewards: Reward[];
}
export interface Reward {
    /** Account address */
    accountAddress: string;
    /** Reward coins distributed */
    rewards: Coin[];
    /** Rewards distribution timestamp in UNIX millis. */
    distributedAt: string;
}
export interface Coin {
    /** Denom of the coin */
    denom: string;
    amount: string;
}
export declare const PortfolioRequest: {
    encode(message: PortfolioRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PortfolioRequest;
    fromJSON(object: any): PortfolioRequest;
    toJSON(message: PortfolioRequest): unknown;
    create(base?: DeepPartial<PortfolioRequest>): PortfolioRequest;
    fromPartial(object: DeepPartial<PortfolioRequest>): PortfolioRequest;
};
export declare const PortfolioResponse: {
    encode(message: PortfolioResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PortfolioResponse;
    fromJSON(object: any): PortfolioResponse;
    toJSON(message: PortfolioResponse): unknown;
    create(base?: DeepPartial<PortfolioResponse>): PortfolioResponse;
    fromPartial(object: DeepPartial<PortfolioResponse>): PortfolioResponse;
};
export declare const AccountPortfolio: {
    encode(message: AccountPortfolio, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountPortfolio;
    fromJSON(object: any): AccountPortfolio;
    toJSON(message: AccountPortfolio): unknown;
    create(base?: DeepPartial<AccountPortfolio>): AccountPortfolio;
    fromPartial(object: DeepPartial<AccountPortfolio>): AccountPortfolio;
};
export declare const SubaccountPortfolio: {
    encode(message: SubaccountPortfolio, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountPortfolio;
    fromJSON(object: any): SubaccountPortfolio;
    toJSON(message: SubaccountPortfolio): unknown;
    create(base?: DeepPartial<SubaccountPortfolio>): SubaccountPortfolio;
    fromPartial(object: DeepPartial<SubaccountPortfolio>): SubaccountPortfolio;
};
export declare const OrderStatesRequest: {
    encode(message: OrderStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderStatesRequest;
    fromJSON(object: any): OrderStatesRequest;
    toJSON(message: OrderStatesRequest): unknown;
    create(base?: DeepPartial<OrderStatesRequest>): OrderStatesRequest;
    fromPartial(object: DeepPartial<OrderStatesRequest>): OrderStatesRequest;
};
export declare const OrderStatesResponse: {
    encode(message: OrderStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderStatesResponse;
    fromJSON(object: any): OrderStatesResponse;
    toJSON(message: OrderStatesResponse): unknown;
    create(base?: DeepPartial<OrderStatesResponse>): OrderStatesResponse;
    fromPartial(object: DeepPartial<OrderStatesResponse>): OrderStatesResponse;
};
export declare const OrderStateRecord: {
    encode(message: OrderStateRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderStateRecord;
    fromJSON(object: any): OrderStateRecord;
    toJSON(message: OrderStateRecord): unknown;
    create(base?: DeepPartial<OrderStateRecord>): OrderStateRecord;
    fromPartial(object: DeepPartial<OrderStateRecord>): OrderStateRecord;
};
export declare const SubaccountsListRequest: {
    encode(message: SubaccountsListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountsListRequest;
    fromJSON(object: any): SubaccountsListRequest;
    toJSON(message: SubaccountsListRequest): unknown;
    create(base?: DeepPartial<SubaccountsListRequest>): SubaccountsListRequest;
    fromPartial(object: DeepPartial<SubaccountsListRequest>): SubaccountsListRequest;
};
export declare const SubaccountsListResponse: {
    encode(message: SubaccountsListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountsListResponse;
    fromJSON(object: any): SubaccountsListResponse;
    toJSON(message: SubaccountsListResponse): unknown;
    create(base?: DeepPartial<SubaccountsListResponse>): SubaccountsListResponse;
    fromPartial(object: DeepPartial<SubaccountsListResponse>): SubaccountsListResponse;
};
export declare const SubaccountBalancesListRequest: {
    encode(message: SubaccountBalancesListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountBalancesListRequest;
    fromJSON(object: any): SubaccountBalancesListRequest;
    toJSON(message: SubaccountBalancesListRequest): unknown;
    create(base?: DeepPartial<SubaccountBalancesListRequest>): SubaccountBalancesListRequest;
    fromPartial(object: DeepPartial<SubaccountBalancesListRequest>): SubaccountBalancesListRequest;
};
export declare const SubaccountBalancesListResponse: {
    encode(message: SubaccountBalancesListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountBalancesListResponse;
    fromJSON(object: any): SubaccountBalancesListResponse;
    toJSON(message: SubaccountBalancesListResponse): unknown;
    create(base?: DeepPartial<SubaccountBalancesListResponse>): SubaccountBalancesListResponse;
    fromPartial(object: DeepPartial<SubaccountBalancesListResponse>): SubaccountBalancesListResponse;
};
export declare const SubaccountBalance: {
    encode(message: SubaccountBalance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountBalance;
    fromJSON(object: any): SubaccountBalance;
    toJSON(message: SubaccountBalance): unknown;
    create(base?: DeepPartial<SubaccountBalance>): SubaccountBalance;
    fromPartial(object: DeepPartial<SubaccountBalance>): SubaccountBalance;
};
export declare const SubaccountDeposit: {
    encode(message: SubaccountDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountDeposit;
    fromJSON(object: any): SubaccountDeposit;
    toJSON(message: SubaccountDeposit): unknown;
    create(base?: DeepPartial<SubaccountDeposit>): SubaccountDeposit;
    fromPartial(object: DeepPartial<SubaccountDeposit>): SubaccountDeposit;
};
export declare const SubaccountBalanceEndpointRequest: {
    encode(message: SubaccountBalanceEndpointRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountBalanceEndpointRequest;
    fromJSON(object: any): SubaccountBalanceEndpointRequest;
    toJSON(message: SubaccountBalanceEndpointRequest): unknown;
    create(base?: DeepPartial<SubaccountBalanceEndpointRequest>): SubaccountBalanceEndpointRequest;
    fromPartial(object: DeepPartial<SubaccountBalanceEndpointRequest>): SubaccountBalanceEndpointRequest;
};
export declare const SubaccountBalanceEndpointResponse: {
    encode(message: SubaccountBalanceEndpointResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountBalanceEndpointResponse;
    fromJSON(object: any): SubaccountBalanceEndpointResponse;
    toJSON(message: SubaccountBalanceEndpointResponse): unknown;
    create(base?: DeepPartial<SubaccountBalanceEndpointResponse>): SubaccountBalanceEndpointResponse;
    fromPartial(object: DeepPartial<SubaccountBalanceEndpointResponse>): SubaccountBalanceEndpointResponse;
};
export declare const StreamSubaccountBalanceRequest: {
    encode(message: StreamSubaccountBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamSubaccountBalanceRequest;
    fromJSON(object: any): StreamSubaccountBalanceRequest;
    toJSON(message: StreamSubaccountBalanceRequest): unknown;
    create(base?: DeepPartial<StreamSubaccountBalanceRequest>): StreamSubaccountBalanceRequest;
    fromPartial(object: DeepPartial<StreamSubaccountBalanceRequest>): StreamSubaccountBalanceRequest;
};
export declare const StreamSubaccountBalanceResponse: {
    encode(message: StreamSubaccountBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamSubaccountBalanceResponse;
    fromJSON(object: any): StreamSubaccountBalanceResponse;
    toJSON(message: StreamSubaccountBalanceResponse): unknown;
    create(base?: DeepPartial<StreamSubaccountBalanceResponse>): StreamSubaccountBalanceResponse;
    fromPartial(object: DeepPartial<StreamSubaccountBalanceResponse>): StreamSubaccountBalanceResponse;
};
export declare const SubaccountHistoryRequest: {
    encode(message: SubaccountHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountHistoryRequest;
    fromJSON(object: any): SubaccountHistoryRequest;
    toJSON(message: SubaccountHistoryRequest): unknown;
    create(base?: DeepPartial<SubaccountHistoryRequest>): SubaccountHistoryRequest;
    fromPartial(object: DeepPartial<SubaccountHistoryRequest>): SubaccountHistoryRequest;
};
export declare const SubaccountHistoryResponse: {
    encode(message: SubaccountHistoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountHistoryResponse;
    fromJSON(object: any): SubaccountHistoryResponse;
    toJSON(message: SubaccountHistoryResponse): unknown;
    create(base?: DeepPartial<SubaccountHistoryResponse>): SubaccountHistoryResponse;
    fromPartial(object: DeepPartial<SubaccountHistoryResponse>): SubaccountHistoryResponse;
};
export declare const SubaccountBalanceTransfer: {
    encode(message: SubaccountBalanceTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountBalanceTransfer;
    fromJSON(object: any): SubaccountBalanceTransfer;
    toJSON(message: SubaccountBalanceTransfer): unknown;
    create(base?: DeepPartial<SubaccountBalanceTransfer>): SubaccountBalanceTransfer;
    fromPartial(object: DeepPartial<SubaccountBalanceTransfer>): SubaccountBalanceTransfer;
};
export declare const CosmosCoin: {
    encode(message: CosmosCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CosmosCoin;
    fromJSON(object: any): CosmosCoin;
    toJSON(message: CosmosCoin): unknown;
    create(base?: DeepPartial<CosmosCoin>): CosmosCoin;
    fromPartial(object: DeepPartial<CosmosCoin>): CosmosCoin;
};
export declare const Paging: {
    encode(message: Paging, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Paging;
    fromJSON(object: any): Paging;
    toJSON(message: Paging): unknown;
    create(base?: DeepPartial<Paging>): Paging;
    fromPartial(object: DeepPartial<Paging>): Paging;
};
export declare const SubaccountOrderSummaryRequest: {
    encode(message: SubaccountOrderSummaryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountOrderSummaryRequest;
    fromJSON(object: any): SubaccountOrderSummaryRequest;
    toJSON(message: SubaccountOrderSummaryRequest): unknown;
    create(base?: DeepPartial<SubaccountOrderSummaryRequest>): SubaccountOrderSummaryRequest;
    fromPartial(object: DeepPartial<SubaccountOrderSummaryRequest>): SubaccountOrderSummaryRequest;
};
export declare const SubaccountOrderSummaryResponse: {
    encode(message: SubaccountOrderSummaryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountOrderSummaryResponse;
    fromJSON(object: any): SubaccountOrderSummaryResponse;
    toJSON(message: SubaccountOrderSummaryResponse): unknown;
    create(base?: DeepPartial<SubaccountOrderSummaryResponse>): SubaccountOrderSummaryResponse;
    fromPartial(object: DeepPartial<SubaccountOrderSummaryResponse>): SubaccountOrderSummaryResponse;
};
export declare const RewardsRequest: {
    encode(message: RewardsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardsRequest;
    fromJSON(object: any): RewardsRequest;
    toJSON(message: RewardsRequest): unknown;
    create(base?: DeepPartial<RewardsRequest>): RewardsRequest;
    fromPartial(object: DeepPartial<RewardsRequest>): RewardsRequest;
};
export declare const RewardsResponse: {
    encode(message: RewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardsResponse;
    fromJSON(object: any): RewardsResponse;
    toJSON(message: RewardsResponse): unknown;
    create(base?: DeepPartial<RewardsResponse>): RewardsResponse;
    fromPartial(object: DeepPartial<RewardsResponse>): RewardsResponse;
};
export declare const Reward: {
    encode(message: Reward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Reward;
    fromJSON(object: any): Reward;
    toJSON(message: Reward): unknown;
    create(base?: DeepPartial<Reward>): Reward;
    fromPartial(object: DeepPartial<Reward>): Reward;
};
export declare const Coin: {
    encode(message: Coin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Coin;
    fromJSON(object: any): Coin;
    toJSON(message: Coin): unknown;
    create(base?: DeepPartial<Coin>): Coin;
    fromPartial(object: DeepPartial<Coin>): Coin;
};
/** InjectiveAccountsRPC defines API of Exchange Accounts provider. */
export interface InjectiveAccountsRPC {
    /** Provide the account's portfolio value in USD. */
    Portfolio(request: DeepPartial<PortfolioRequest>, metadata?: grpc.Metadata): Promise<PortfolioResponse>;
    /** List order states by order hashes */
    OrderStates(request: DeepPartial<OrderStatesRequest>, metadata?: grpc.Metadata): Promise<OrderStatesResponse>;
    /** List all subaccounts IDs of an account address */
    SubaccountsList(request: DeepPartial<SubaccountsListRequest>, metadata?: grpc.Metadata): Promise<SubaccountsListResponse>;
    /** List subaccount balances for the provided denoms. */
    SubaccountBalancesList(request: DeepPartial<SubaccountBalancesListRequest>, metadata?: grpc.Metadata): Promise<SubaccountBalancesListResponse>;
    /** Gets a balance for specific coin denom */
    SubaccountBalanceEndpoint(request: DeepPartial<SubaccountBalanceEndpointRequest>, metadata?: grpc.Metadata): Promise<SubaccountBalanceEndpointResponse>;
    /**
     * StreamSubaccountBalance streams new balance changes for a specified
     * subaccount and denoms. If no denoms are provided, all denom changes are
     * streamed.
     */
    StreamSubaccountBalance(request: DeepPartial<StreamSubaccountBalanceRequest>, metadata?: grpc.Metadata): Observable<StreamSubaccountBalanceResponse>;
    /** Get subaccount's deposits and withdrawals history */
    SubaccountHistory(request: DeepPartial<SubaccountHistoryRequest>, metadata?: grpc.Metadata): Promise<SubaccountHistoryResponse>;
    /** Get subaccount's orders summary */
    SubaccountOrderSummary(request: DeepPartial<SubaccountOrderSummaryRequest>, metadata?: grpc.Metadata): Promise<SubaccountOrderSummaryResponse>;
    /** Provide historical trading rewards */
    Rewards(request: DeepPartial<RewardsRequest>, metadata?: grpc.Metadata): Promise<RewardsResponse>;
}
export declare class InjectiveAccountsRPCClientImpl implements InjectiveAccountsRPC {
    private readonly rpc;
    constructor(rpc: Rpc);
    Portfolio(request: DeepPartial<PortfolioRequest>, metadata?: grpc.Metadata): Promise<PortfolioResponse>;
    OrderStates(request: DeepPartial<OrderStatesRequest>, metadata?: grpc.Metadata): Promise<OrderStatesResponse>;
    SubaccountsList(request: DeepPartial<SubaccountsListRequest>, metadata?: grpc.Metadata): Promise<SubaccountsListResponse>;
    SubaccountBalancesList(request: DeepPartial<SubaccountBalancesListRequest>, metadata?: grpc.Metadata): Promise<SubaccountBalancesListResponse>;
    SubaccountBalanceEndpoint(request: DeepPartial<SubaccountBalanceEndpointRequest>, metadata?: grpc.Metadata): Promise<SubaccountBalanceEndpointResponse>;
    StreamSubaccountBalance(request: DeepPartial<StreamSubaccountBalanceRequest>, metadata?: grpc.Metadata): Observable<StreamSubaccountBalanceResponse>;
    SubaccountHistory(request: DeepPartial<SubaccountHistoryRequest>, metadata?: grpc.Metadata): Promise<SubaccountHistoryResponse>;
    SubaccountOrderSummary(request: DeepPartial<SubaccountOrderSummaryRequest>, metadata?: grpc.Metadata): Promise<SubaccountOrderSummaryResponse>;
    Rewards(request: DeepPartial<RewardsRequest>, metadata?: grpc.Metadata): Promise<RewardsResponse>;
}
export declare const InjectiveAccountsRPCDesc: {
    serviceName: string;
};
export declare const InjectiveAccountsRPCPortfolioDesc: UnaryMethodDefinitionish;
export declare const InjectiveAccountsRPCOrderStatesDesc: UnaryMethodDefinitionish;
export declare const InjectiveAccountsRPCSubaccountsListDesc: UnaryMethodDefinitionish;
export declare const InjectiveAccountsRPCSubaccountBalancesListDesc: UnaryMethodDefinitionish;
export declare const InjectiveAccountsRPCSubaccountBalanceEndpointDesc: UnaryMethodDefinitionish;
export declare const InjectiveAccountsRPCStreamSubaccountBalanceDesc: UnaryMethodDefinitionish;
export declare const InjectiveAccountsRPCSubaccountHistoryDesc: UnaryMethodDefinitionish;
export declare const InjectiveAccountsRPCSubaccountOrderSummaryDesc: UnaryMethodDefinitionish;
export declare const InjectiveAccountsRPCRewardsDesc: UnaryMethodDefinitionish;
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
