import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
export declare const protobufPackage = "injective_spot_exchange_rpc";
export interface MarketsRequest {
    /** Filter by market status */
    marketStatus: string;
    /** Filter by the Coin denomination of the base currency */
    baseDenom: string;
    /** Filter by the Coin denomination of the quote currency */
    quoteDenom: string;
    marketStatuses: string[];
}
export interface MarketsResponse {
    /** Spot Markets list */
    markets: SpotMarketInfo[];
}
export interface SpotMarketInfo {
    /** SpotMarket ID is keccak265(baseDenom || quoteDenom) */
    marketId: string;
    /** The status of the market */
    marketStatus: string;
    /**
     * A name of the pair in format AAA/BBB, where AAA is base asset, BBB is quote
     * asset.
     */
    ticker: string;
    /** Coin denom used for the base asset. */
    baseDenom: string;
    /** Token metadata for base asset, only for Ethereum-based assets */
    baseTokenMeta: TokenMeta | undefined;
    /** Coin denom used for the quote asset. */
    quoteDenom: string;
    /** Token metadata for quote asset, only for Ethereum-based assets */
    quoteTokenMeta: TokenMeta | undefined;
    /** Defines the fee percentage makers pay when trading (in quote asset) */
    makerFeeRate: string;
    /** Defines the fee percentage takers pay when trading (in quote asset) */
    takerFeeRate: string;
    /** Percentage of the transaction fee shared with the service provider */
    serviceProviderFee: string;
    /** Defines the minimum required tick size for the order's price */
    minPriceTickSize: string;
    /** Defines the minimum required tick size for the order's quantity */
    minQuantityTickSize: string;
}
export interface TokenMeta {
    /** Token full name */
    name: string;
    /** Token Ethereum contract address */
    address: string;
    /** Token symbol short name */
    symbol: string;
    /** URL to the logo image */
    logo: string;
    /** Token decimals */
    decimals: number;
    /** Token metadata fetched timestamp in UNIX millis. */
    updatedAt: string;
}
export interface MarketRequest {
    /** MarketId of the market we want to fetch */
    marketId: string;
}
export interface MarketResponse {
    /** Info about particular spot market */
    market: SpotMarketInfo | undefined;
}
export interface StreamMarketsRequest {
    /** List of market IDs for updates streaming, empty means 'ALL' spot markets */
    marketIds: string[];
}
export interface StreamMarketsResponse {
    /** Info about particular spot market */
    market: SpotMarketInfo | undefined;
    /** Update type */
    operationType: string;
    /** Operation timestamp in UNIX millis. */
    timestamp: string;
}
export interface OrderbookV2Request {
    /** MarketId of the market's orderbook we want to fetch */
    marketId: string;
}
export interface OrderbookV2Response {
    /** Orderbook of a particular spot market */
    orderbook: SpotLimitOrderbookV2 | undefined;
}
export interface SpotLimitOrderbookV2 {
    /** Array of price levels for buys */
    buys: PriceLevel[];
    /** Array of price levels for sells */
    sells: PriceLevel[];
    /** market orderbook sequence */
    sequence: string;
    /** Last update timestamp in UNIX millis. */
    timestamp: string;
}
export interface PriceLevel {
    /** Price number of the price level. */
    price: string;
    /** Quantity of the price level. */
    quantity: string;
    /** Price level last updated timestamp in UNIX millis. */
    timestamp: string;
}
export interface OrderbooksV2Request {
    /** MarketIds of the markets */
    marketIds: string[];
}
export interface OrderbooksV2Response {
    orderbooks: SingleSpotLimitOrderbookV2[];
}
export interface SingleSpotLimitOrderbookV2 {
    /** market's ID */
    marketId: string;
    /** Orderbook of the market */
    orderbook: SpotLimitOrderbookV2 | undefined;
}
export interface StreamOrderbookV2Request {
    /** List of market IDs for orderbook streaming, empty means 'ALL' spot markets */
    marketIds: string[];
}
export interface StreamOrderbookV2Response {
    /** Orderbook of a Spot Market */
    orderbook: SpotLimitOrderbookV2 | undefined;
    /** Order update type */
    operationType: string;
    /** Operation timestamp in UNIX millis. */
    timestamp: string;
    /** MarketId of the market's orderbook */
    marketId: string;
}
export interface StreamOrderbookUpdateRequest {
    /** List of market IDs for orderbook streaming, empty means 'ALL' spot markets */
    marketIds: string[];
}
export interface StreamOrderbookUpdateResponse {
    /** Orderbook level updates of a Spot Market */
    orderbookLevelUpdates: OrderbookLevelUpdates | undefined;
    /** Order update type */
    operationType: string;
    /** Operation timestamp in UNIX millis. */
    timestamp: string;
    /** MarketId of the market's orderbook */
    marketId: string;
}
export interface OrderbookLevelUpdates {
    /** market's ID */
    marketId: string;
    /** orderbook update sequence */
    sequence: string;
    /** buy levels */
    buys: PriceLevelUpdate[];
    /** sell levels */
    sells: PriceLevelUpdate[];
    /** updates timestamp */
    updatedAt: string;
}
export interface PriceLevelUpdate {
    /** Price number of the price level. */
    price: string;
    /** Quantity of the price level. */
    quantity: string;
    /** Price level status. */
    isActive: boolean;
    /** Price level last updated timestamp in UNIX millis. */
    timestamp: string;
}
export interface OrdersRequest {
    /** MarketId of the market's orderbook we want to fetch */
    marketId: string;
    /** Look for specific order side */
    orderSide: string;
    /** Look for specific subaccountId of an order */
    subaccountId: string;
    /** Skip will skip the first n item from the result */
    skip: string;
    /** Limit is used to specify the maximum number of items to be returned. */
    limit: number;
    /**
     * The starting timestamp in UNIX milliseconds that the trades must be equal or
     * older than
     */
    startTime: string;
    /**
     * The ending timestamp in UNIX milliseconds that the trades must be equal or
     * younger than
     */
    endTime: string;
    /** MarketIds of the markets of which we want to get trades */
    marketIds: string[];
    /** Should include inactive orders */
    includeInactive: boolean;
    /** Choose to return subaccount total orders */
    subaccountTotalOrders: boolean;
    /** TradeId of the order we want to fetch */
    tradeId: string;
}
export interface OrdersResponse {
    orders: SpotLimitOrder[];
    paging: Paging | undefined;
}
export interface SpotLimitOrder {
    /** Hash of the order */
    orderHash: string;
    /** The side of the order */
    orderSide: string;
    /** Spot Market ID is keccak265(baseDenom + quoteDenom) */
    marketId: string;
    /** The subaccountId that this order belongs to */
    subaccountId: string;
    /** Price of the order */
    price: string;
    /** Quantity of the order */
    quantity: string;
    /** The amount of the quantity remaining unfilled */
    unfilledQuantity: string;
    /**
     * Trigger price is the trigger price used by stop/take orders. 0 if the
     * trigger price is not set.
     */
    triggerPrice: string;
    /** Fee recipient address */
    feeRecipient: string;
    /** Order state */
    state: string;
    /** Order committed timestamp in UNIX millis. */
    createdAt: string;
    /** Order updated timestamp in UNIX millis. */
    updatedAt: string;
    /** Transaction Hash where order is created. Not all orders have this field */
    txHash: string;
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
export interface StreamOrdersRequest {
    /** MarketId of the market's orderbook we want to fetch */
    marketId: string;
    /** Look for specific order side */
    orderSide: string;
    /** Look for specific subaccountId of an order */
    subaccountId: string;
    /** Skip will skip the first n item from the result */
    skip: string;
    /** Limit is used to specify the maximum number of items to be returned. */
    limit: number;
    /**
     * The starting timestamp in UNIX milliseconds that the trades must be equal or
     * older than
     */
    startTime: string;
    /**
     * The ending timestamp in UNIX milliseconds that the trades must be equal or
     * younger than
     */
    endTime: string;
    /** MarketIds of the markets of which we want to get trades */
    marketIds: string[];
    /** Should include inactive orders */
    includeInactive: boolean;
    /** Choose to return subaccount total orders */
    subaccountTotalOrders: boolean;
    /** TradeId of the order we want to fetch */
    tradeId: string;
}
export interface StreamOrdersResponse {
    /** Updated market order */
    order: SpotLimitOrder | undefined;
    /** Order update type */
    operationType: string;
    /** Operation timestamp in UNIX millis. */
    timestamp: string;
}
export interface TradesRequest {
    /** MarketId of the market's orderbook we want to fetch */
    marketId: string;
    /** Filter by execution side of the trade */
    executionSide: string;
    /** Filter by direction the trade */
    direction: string;
    /** SubaccountId of the trader we want to get the trades from */
    subaccountId: string;
    /** Skip will skip the first n item from the item result */
    skip: string;
    /** Limit is used to specify the maximum number of items to be returned. */
    limit: number;
    /**
     * The starting timestamp in UNIX milliseconds that the trades must be equal or
     * older than
     */
    startTime: string;
    /**
     * The ending timestamp in UNIX milliseconds that the trades must be equal or
     * younger than
     */
    endTime: string;
    /** MarketIds of the markets of which we want to get trades */
    marketIds: string[];
    /** Subaccount ids of traders we want to get trades */
    subaccountIds: string[];
    executionTypes: string[];
    /** Filter by the tradeId of the trade */
    tradeId: string;
    /** Account address */
    accountAddress: string;
}
export interface TradesResponse {
    /** Trades of a Spot Market */
    trades: SpotTrade[];
    /** Paging indicates pages response is on */
    paging: Paging | undefined;
}
export interface SpotTrade {
    /** Maker order hash. */
    orderHash: string;
    /** The subaccountId that executed the trade */
    subaccountId: string;
    /** The ID of the market that this trade is in */
    marketId: string;
    /** The execution type of the trade */
    tradeExecutionType: string;
    /** The direction the trade */
    tradeDirection: string;
    /** Price level at which trade has been executed */
    price: PriceLevel | undefined;
    /** The fee associated with the trade (quote asset denom) */
    fee: string;
    /** Timestamp of trade execution in UNIX millis */
    executedAt: string;
    /** Fee recipient address */
    feeRecipient: string;
    /** A unique string that helps differentiate between trades */
    tradeId: string;
    /** Trade's execution side, marker/taker */
    executionSide: string;
}
export interface StreamTradesRequest {
    /** MarketId of the market's orderbook we want to fetch */
    marketId: string;
    /** Filter by execution side of the trade */
    executionSide: string;
    /** Filter by direction the trade */
    direction: string;
    /** SubaccountId of the trader we want to get the trades from */
    subaccountId: string;
    /** Skip will skip the first n item from the item result */
    skip: string;
    /** Limit is used to specify the maximum number of items to be returned. */
    limit: number;
    /**
     * The starting timestamp in UNIX milliseconds that the trades must be equal or
     * older than
     */
    startTime: string;
    /**
     * The ending timestamp in UNIX milliseconds that the trades must be equal or
     * younger than
     */
    endTime: string;
    /** MarketIds of the markets of which we want to get trades */
    marketIds: string[];
    /** Subaccount ids of traders we want to get trades */
    subaccountIds: string[];
    executionTypes: string[];
    /** Filter by the tradeId of the trade */
    tradeId: string;
    /** Account address */
    accountAddress: string;
}
export interface StreamTradesResponse {
    /** New spot market trade */
    trade: SpotTrade | undefined;
    /** Executed trades update type */
    operationType: string;
    /** Operation timestamp in UNIX millis. */
    timestamp: string;
}
export interface SubaccountOrdersListRequest {
    /** subaccount ID to filter orders for specific subaccount */
    subaccountId: string;
    /** Market ID to filter orders for specific market */
    marketId: string;
    /** Skip will skip the first n item from the result */
    skip: string;
    /** Limit is used to specify the maximum number of items to be returned */
    limit: number;
}
export interface SubaccountOrdersListResponse {
    orders: SpotLimitOrder[];
    paging: Paging | undefined;
}
export interface SubaccountTradesListRequest {
    /** SubaccountId of the trader we want to get the trades from */
    subaccountId: string;
    /** Filter trades by market ID */
    marketId: string;
    /** Filter by execution type of trades */
    executionType: string;
    /** Filter by direction trades */
    direction: string;
    /** Skip will skip the first n item from the result */
    skip: string;
    /** Limit is used to specify the maximum number of items to be returned */
    limit: number;
}
export interface SubaccountTradesListResponse {
    /** List of spot market trades */
    trades: SpotTrade[];
}
export interface OrdersHistoryRequest {
    /** subaccount ID to filter orders for specific subaccount */
    subaccountId: string;
    /** Market ID to filter orders for specific market */
    marketId: string;
    /** Skip will skip the first n item from the result */
    skip: string;
    /** Limit is used to specify the maximum number of items to be returned */
    limit: number;
    /** filter by order types */
    orderTypes: string[];
    /** order side filter */
    direction: string;
    /** Search for orders which createdAt >= startTime, time in millisecond */
    startTime: string;
    /** Search for orders which createdAt <= endTime, time in millisecond */
    endTime: string;
    /** Filter by order state */
    state: string;
    executionTypes: string[];
    marketIds: string[];
    /** TradeId of the order we want to fetch */
    tradeId: string;
    /** Return only orders for active markets */
    activeMarketsOnly: boolean;
}
export interface OrdersHistoryResponse {
    /** List of history spot orders */
    orders: SpotOrderHistory[];
    paging: Paging | undefined;
}
export interface SpotOrderHistory {
    /** Hash of the order */
    orderHash: string;
    /** Spot Market ID is keccak265(baseDenom + quoteDenom) */
    marketId: string;
    /** active state of the order */
    isActive: boolean;
    /** The subaccountId that this order belongs to */
    subaccountId: string;
    /** The execution type */
    executionType: string;
    /** The side of the order */
    orderType: string;
    /** Price of the order */
    price: string;
    /** Trigger price */
    triggerPrice: string;
    /** Quantity of the order */
    quantity: string;
    /** Filled amount */
    filledQuantity: string;
    /** Order state */
    state: string;
    /** Order committed timestamp in UNIX millis. */
    createdAt: string;
    /** Order updated timestamp in UNIX millis. */
    updatedAt: string;
    /** Order direction (order side) */
    direction: string;
    /** Transaction Hash where order is created. Not all orders have this field */
    txHash: string;
}
export interface StreamOrdersHistoryRequest {
    /** subaccount ID to filter orders for specific subaccount */
    subaccountId: string;
    /** Market ID to filter orders for specific market */
    marketId: string;
    /** filter by order types */
    orderTypes: string[];
    /** order side filter */
    direction: string;
    /** Filter by order state */
    state: string;
    executionTypes: string[];
}
export interface StreamOrdersHistoryResponse {
    /** Updated order */
    order: SpotOrderHistory | undefined;
    /** Order update type */
    operationType: string;
    /** Operation timestamp in UNIX millis. */
    timestamp: string;
}
export interface AtomicSwapHistoryRequest {
    /** sender of the atomic swap */
    address: string;
    /** atomic swap contract address to filter */
    contractAddress: string;
    /** skip some swaps */
    skip: number;
    /** limit number of swaps returned by this API */
    limit: number;
    /** lowerbound of atomic swap index */
    fromNumber: number;
    /** upperbound of atomic swap index */
    toNumber: number;
}
export interface AtomicSwapHistoryResponse {
    /** Paging indicates total number of records with this filter */
    paging: Paging | undefined;
    /** swap data */
    data: AtomicSwap[];
}
export interface AtomicSwap {
    /** executor of the swap */
    sender: string;
    /** swap route */
    route: string;
    /** source coin */
    sourceCoin: Coin | undefined;
    /** destination received coin */
    destCoin: Coin | undefined;
    /** fees of each steps in route */
    fees: Coin[];
    /** contract address that executes to make this swap */
    contractAddress: string;
    /** Numerical index by sender to use in pagination from_number and to_number */
    indexBySender: number;
    /**
     * Numerical index by sender + acontract to use in pagination from_number and
     * to_number, that support contract filter
     */
    indexBySenderContract: number;
    /** transaction hash of the swap */
    txHash: string;
    /** transaction timestamp of the swap */
    executedAt: string;
    /** Refunded amount of the swap */
    refundAmount: string;
}
export interface Coin {
    /** Denom of the coin */
    denom: string;
    amount: string;
}
export declare const MarketsRequest: {
    encode(message: MarketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketsRequest;
    fromJSON(object: any): MarketsRequest;
    toJSON(message: MarketsRequest): unknown;
    create(base?: DeepPartial<MarketsRequest>): MarketsRequest;
    fromPartial(object: DeepPartial<MarketsRequest>): MarketsRequest;
};
export declare const MarketsResponse: {
    encode(message: MarketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketsResponse;
    fromJSON(object: any): MarketsResponse;
    toJSON(message: MarketsResponse): unknown;
    create(base?: DeepPartial<MarketsResponse>): MarketsResponse;
    fromPartial(object: DeepPartial<MarketsResponse>): MarketsResponse;
};
export declare const SpotMarketInfo: {
    encode(message: SpotMarketInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotMarketInfo;
    fromJSON(object: any): SpotMarketInfo;
    toJSON(message: SpotMarketInfo): unknown;
    create(base?: DeepPartial<SpotMarketInfo>): SpotMarketInfo;
    fromPartial(object: DeepPartial<SpotMarketInfo>): SpotMarketInfo;
};
export declare const TokenMeta: {
    encode(message: TokenMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenMeta;
    fromJSON(object: any): TokenMeta;
    toJSON(message: TokenMeta): unknown;
    create(base?: DeepPartial<TokenMeta>): TokenMeta;
    fromPartial(object: DeepPartial<TokenMeta>): TokenMeta;
};
export declare const MarketRequest: {
    encode(message: MarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketRequest;
    fromJSON(object: any): MarketRequest;
    toJSON(message: MarketRequest): unknown;
    create(base?: DeepPartial<MarketRequest>): MarketRequest;
    fromPartial(object: DeepPartial<MarketRequest>): MarketRequest;
};
export declare const MarketResponse: {
    encode(message: MarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketResponse;
    fromJSON(object: any): MarketResponse;
    toJSON(message: MarketResponse): unknown;
    create(base?: DeepPartial<MarketResponse>): MarketResponse;
    fromPartial(object: DeepPartial<MarketResponse>): MarketResponse;
};
export declare const StreamMarketsRequest: {
    encode(message: StreamMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamMarketsRequest;
    fromJSON(object: any): StreamMarketsRequest;
    toJSON(message: StreamMarketsRequest): unknown;
    create(base?: DeepPartial<StreamMarketsRequest>): StreamMarketsRequest;
    fromPartial(object: DeepPartial<StreamMarketsRequest>): StreamMarketsRequest;
};
export declare const StreamMarketsResponse: {
    encode(message: StreamMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamMarketsResponse;
    fromJSON(object: any): StreamMarketsResponse;
    toJSON(message: StreamMarketsResponse): unknown;
    create(base?: DeepPartial<StreamMarketsResponse>): StreamMarketsResponse;
    fromPartial(object: DeepPartial<StreamMarketsResponse>): StreamMarketsResponse;
};
export declare const OrderbookV2Request: {
    encode(message: OrderbookV2Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderbookV2Request;
    fromJSON(object: any): OrderbookV2Request;
    toJSON(message: OrderbookV2Request): unknown;
    create(base?: DeepPartial<OrderbookV2Request>): OrderbookV2Request;
    fromPartial(object: DeepPartial<OrderbookV2Request>): OrderbookV2Request;
};
export declare const OrderbookV2Response: {
    encode(message: OrderbookV2Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderbookV2Response;
    fromJSON(object: any): OrderbookV2Response;
    toJSON(message: OrderbookV2Response): unknown;
    create(base?: DeepPartial<OrderbookV2Response>): OrderbookV2Response;
    fromPartial(object: DeepPartial<OrderbookV2Response>): OrderbookV2Response;
};
export declare const SpotLimitOrderbookV2: {
    encode(message: SpotLimitOrderbookV2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotLimitOrderbookV2;
    fromJSON(object: any): SpotLimitOrderbookV2;
    toJSON(message: SpotLimitOrderbookV2): unknown;
    create(base?: DeepPartial<SpotLimitOrderbookV2>): SpotLimitOrderbookV2;
    fromPartial(object: DeepPartial<SpotLimitOrderbookV2>): SpotLimitOrderbookV2;
};
export declare const PriceLevel: {
    encode(message: PriceLevel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PriceLevel;
    fromJSON(object: any): PriceLevel;
    toJSON(message: PriceLevel): unknown;
    create(base?: DeepPartial<PriceLevel>): PriceLevel;
    fromPartial(object: DeepPartial<PriceLevel>): PriceLevel;
};
export declare const OrderbooksV2Request: {
    encode(message: OrderbooksV2Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderbooksV2Request;
    fromJSON(object: any): OrderbooksV2Request;
    toJSON(message: OrderbooksV2Request): unknown;
    create(base?: DeepPartial<OrderbooksV2Request>): OrderbooksV2Request;
    fromPartial(object: DeepPartial<OrderbooksV2Request>): OrderbooksV2Request;
};
export declare const OrderbooksV2Response: {
    encode(message: OrderbooksV2Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderbooksV2Response;
    fromJSON(object: any): OrderbooksV2Response;
    toJSON(message: OrderbooksV2Response): unknown;
    create(base?: DeepPartial<OrderbooksV2Response>): OrderbooksV2Response;
    fromPartial(object: DeepPartial<OrderbooksV2Response>): OrderbooksV2Response;
};
export declare const SingleSpotLimitOrderbookV2: {
    encode(message: SingleSpotLimitOrderbookV2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SingleSpotLimitOrderbookV2;
    fromJSON(object: any): SingleSpotLimitOrderbookV2;
    toJSON(message: SingleSpotLimitOrderbookV2): unknown;
    create(base?: DeepPartial<SingleSpotLimitOrderbookV2>): SingleSpotLimitOrderbookV2;
    fromPartial(object: DeepPartial<SingleSpotLimitOrderbookV2>): SingleSpotLimitOrderbookV2;
};
export declare const StreamOrderbookV2Request: {
    encode(message: StreamOrderbookV2Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamOrderbookV2Request;
    fromJSON(object: any): StreamOrderbookV2Request;
    toJSON(message: StreamOrderbookV2Request): unknown;
    create(base?: DeepPartial<StreamOrderbookV2Request>): StreamOrderbookV2Request;
    fromPartial(object: DeepPartial<StreamOrderbookV2Request>): StreamOrderbookV2Request;
};
export declare const StreamOrderbookV2Response: {
    encode(message: StreamOrderbookV2Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamOrderbookV2Response;
    fromJSON(object: any): StreamOrderbookV2Response;
    toJSON(message: StreamOrderbookV2Response): unknown;
    create(base?: DeepPartial<StreamOrderbookV2Response>): StreamOrderbookV2Response;
    fromPartial(object: DeepPartial<StreamOrderbookV2Response>): StreamOrderbookV2Response;
};
export declare const StreamOrderbookUpdateRequest: {
    encode(message: StreamOrderbookUpdateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamOrderbookUpdateRequest;
    fromJSON(object: any): StreamOrderbookUpdateRequest;
    toJSON(message: StreamOrderbookUpdateRequest): unknown;
    create(base?: DeepPartial<StreamOrderbookUpdateRequest>): StreamOrderbookUpdateRequest;
    fromPartial(object: DeepPartial<StreamOrderbookUpdateRequest>): StreamOrderbookUpdateRequest;
};
export declare const StreamOrderbookUpdateResponse: {
    encode(message: StreamOrderbookUpdateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamOrderbookUpdateResponse;
    fromJSON(object: any): StreamOrderbookUpdateResponse;
    toJSON(message: StreamOrderbookUpdateResponse): unknown;
    create(base?: DeepPartial<StreamOrderbookUpdateResponse>): StreamOrderbookUpdateResponse;
    fromPartial(object: DeepPartial<StreamOrderbookUpdateResponse>): StreamOrderbookUpdateResponse;
};
export declare const OrderbookLevelUpdates: {
    encode(message: OrderbookLevelUpdates, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderbookLevelUpdates;
    fromJSON(object: any): OrderbookLevelUpdates;
    toJSON(message: OrderbookLevelUpdates): unknown;
    create(base?: DeepPartial<OrderbookLevelUpdates>): OrderbookLevelUpdates;
    fromPartial(object: DeepPartial<OrderbookLevelUpdates>): OrderbookLevelUpdates;
};
export declare const PriceLevelUpdate: {
    encode(message: PriceLevelUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PriceLevelUpdate;
    fromJSON(object: any): PriceLevelUpdate;
    toJSON(message: PriceLevelUpdate): unknown;
    create(base?: DeepPartial<PriceLevelUpdate>): PriceLevelUpdate;
    fromPartial(object: DeepPartial<PriceLevelUpdate>): PriceLevelUpdate;
};
export declare const OrdersRequest: {
    encode(message: OrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrdersRequest;
    fromJSON(object: any): OrdersRequest;
    toJSON(message: OrdersRequest): unknown;
    create(base?: DeepPartial<OrdersRequest>): OrdersRequest;
    fromPartial(object: DeepPartial<OrdersRequest>): OrdersRequest;
};
export declare const OrdersResponse: {
    encode(message: OrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrdersResponse;
    fromJSON(object: any): OrdersResponse;
    toJSON(message: OrdersResponse): unknown;
    create(base?: DeepPartial<OrdersResponse>): OrdersResponse;
    fromPartial(object: DeepPartial<OrdersResponse>): OrdersResponse;
};
export declare const SpotLimitOrder: {
    encode(message: SpotLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotLimitOrder;
    fromJSON(object: any): SpotLimitOrder;
    toJSON(message: SpotLimitOrder): unknown;
    create(base?: DeepPartial<SpotLimitOrder>): SpotLimitOrder;
    fromPartial(object: DeepPartial<SpotLimitOrder>): SpotLimitOrder;
};
export declare const Paging: {
    encode(message: Paging, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Paging;
    fromJSON(object: any): Paging;
    toJSON(message: Paging): unknown;
    create(base?: DeepPartial<Paging>): Paging;
    fromPartial(object: DeepPartial<Paging>): Paging;
};
export declare const StreamOrdersRequest: {
    encode(message: StreamOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamOrdersRequest;
    fromJSON(object: any): StreamOrdersRequest;
    toJSON(message: StreamOrdersRequest): unknown;
    create(base?: DeepPartial<StreamOrdersRequest>): StreamOrdersRequest;
    fromPartial(object: DeepPartial<StreamOrdersRequest>): StreamOrdersRequest;
};
export declare const StreamOrdersResponse: {
    encode(message: StreamOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamOrdersResponse;
    fromJSON(object: any): StreamOrdersResponse;
    toJSON(message: StreamOrdersResponse): unknown;
    create(base?: DeepPartial<StreamOrdersResponse>): StreamOrdersResponse;
    fromPartial(object: DeepPartial<StreamOrdersResponse>): StreamOrdersResponse;
};
export declare const TradesRequest: {
    encode(message: TradesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradesRequest;
    fromJSON(object: any): TradesRequest;
    toJSON(message: TradesRequest): unknown;
    create(base?: DeepPartial<TradesRequest>): TradesRequest;
    fromPartial(object: DeepPartial<TradesRequest>): TradesRequest;
};
export declare const TradesResponse: {
    encode(message: TradesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradesResponse;
    fromJSON(object: any): TradesResponse;
    toJSON(message: TradesResponse): unknown;
    create(base?: DeepPartial<TradesResponse>): TradesResponse;
    fromPartial(object: DeepPartial<TradesResponse>): TradesResponse;
};
export declare const SpotTrade: {
    encode(message: SpotTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotTrade;
    fromJSON(object: any): SpotTrade;
    toJSON(message: SpotTrade): unknown;
    create(base?: DeepPartial<SpotTrade>): SpotTrade;
    fromPartial(object: DeepPartial<SpotTrade>): SpotTrade;
};
export declare const StreamTradesRequest: {
    encode(message: StreamTradesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamTradesRequest;
    fromJSON(object: any): StreamTradesRequest;
    toJSON(message: StreamTradesRequest): unknown;
    create(base?: DeepPartial<StreamTradesRequest>): StreamTradesRequest;
    fromPartial(object: DeepPartial<StreamTradesRequest>): StreamTradesRequest;
};
export declare const StreamTradesResponse: {
    encode(message: StreamTradesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamTradesResponse;
    fromJSON(object: any): StreamTradesResponse;
    toJSON(message: StreamTradesResponse): unknown;
    create(base?: DeepPartial<StreamTradesResponse>): StreamTradesResponse;
    fromPartial(object: DeepPartial<StreamTradesResponse>): StreamTradesResponse;
};
export declare const SubaccountOrdersListRequest: {
    encode(message: SubaccountOrdersListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountOrdersListRequest;
    fromJSON(object: any): SubaccountOrdersListRequest;
    toJSON(message: SubaccountOrdersListRequest): unknown;
    create(base?: DeepPartial<SubaccountOrdersListRequest>): SubaccountOrdersListRequest;
    fromPartial(object: DeepPartial<SubaccountOrdersListRequest>): SubaccountOrdersListRequest;
};
export declare const SubaccountOrdersListResponse: {
    encode(message: SubaccountOrdersListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountOrdersListResponse;
    fromJSON(object: any): SubaccountOrdersListResponse;
    toJSON(message: SubaccountOrdersListResponse): unknown;
    create(base?: DeepPartial<SubaccountOrdersListResponse>): SubaccountOrdersListResponse;
    fromPartial(object: DeepPartial<SubaccountOrdersListResponse>): SubaccountOrdersListResponse;
};
export declare const SubaccountTradesListRequest: {
    encode(message: SubaccountTradesListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountTradesListRequest;
    fromJSON(object: any): SubaccountTradesListRequest;
    toJSON(message: SubaccountTradesListRequest): unknown;
    create(base?: DeepPartial<SubaccountTradesListRequest>): SubaccountTradesListRequest;
    fromPartial(object: DeepPartial<SubaccountTradesListRequest>): SubaccountTradesListRequest;
};
export declare const SubaccountTradesListResponse: {
    encode(message: SubaccountTradesListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountTradesListResponse;
    fromJSON(object: any): SubaccountTradesListResponse;
    toJSON(message: SubaccountTradesListResponse): unknown;
    create(base?: DeepPartial<SubaccountTradesListResponse>): SubaccountTradesListResponse;
    fromPartial(object: DeepPartial<SubaccountTradesListResponse>): SubaccountTradesListResponse;
};
export declare const OrdersHistoryRequest: {
    encode(message: OrdersHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrdersHistoryRequest;
    fromJSON(object: any): OrdersHistoryRequest;
    toJSON(message: OrdersHistoryRequest): unknown;
    create(base?: DeepPartial<OrdersHistoryRequest>): OrdersHistoryRequest;
    fromPartial(object: DeepPartial<OrdersHistoryRequest>): OrdersHistoryRequest;
};
export declare const OrdersHistoryResponse: {
    encode(message: OrdersHistoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrdersHistoryResponse;
    fromJSON(object: any): OrdersHistoryResponse;
    toJSON(message: OrdersHistoryResponse): unknown;
    create(base?: DeepPartial<OrdersHistoryResponse>): OrdersHistoryResponse;
    fromPartial(object: DeepPartial<OrdersHistoryResponse>): OrdersHistoryResponse;
};
export declare const SpotOrderHistory: {
    encode(message: SpotOrderHistory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotOrderHistory;
    fromJSON(object: any): SpotOrderHistory;
    toJSON(message: SpotOrderHistory): unknown;
    create(base?: DeepPartial<SpotOrderHistory>): SpotOrderHistory;
    fromPartial(object: DeepPartial<SpotOrderHistory>): SpotOrderHistory;
};
export declare const StreamOrdersHistoryRequest: {
    encode(message: StreamOrdersHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamOrdersHistoryRequest;
    fromJSON(object: any): StreamOrdersHistoryRequest;
    toJSON(message: StreamOrdersHistoryRequest): unknown;
    create(base?: DeepPartial<StreamOrdersHistoryRequest>): StreamOrdersHistoryRequest;
    fromPartial(object: DeepPartial<StreamOrdersHistoryRequest>): StreamOrdersHistoryRequest;
};
export declare const StreamOrdersHistoryResponse: {
    encode(message: StreamOrdersHistoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamOrdersHistoryResponse;
    fromJSON(object: any): StreamOrdersHistoryResponse;
    toJSON(message: StreamOrdersHistoryResponse): unknown;
    create(base?: DeepPartial<StreamOrdersHistoryResponse>): StreamOrdersHistoryResponse;
    fromPartial(object: DeepPartial<StreamOrdersHistoryResponse>): StreamOrdersHistoryResponse;
};
export declare const AtomicSwapHistoryRequest: {
    encode(message: AtomicSwapHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AtomicSwapHistoryRequest;
    fromJSON(object: any): AtomicSwapHistoryRequest;
    toJSON(message: AtomicSwapHistoryRequest): unknown;
    create(base?: DeepPartial<AtomicSwapHistoryRequest>): AtomicSwapHistoryRequest;
    fromPartial(object: DeepPartial<AtomicSwapHistoryRequest>): AtomicSwapHistoryRequest;
};
export declare const AtomicSwapHistoryResponse: {
    encode(message: AtomicSwapHistoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AtomicSwapHistoryResponse;
    fromJSON(object: any): AtomicSwapHistoryResponse;
    toJSON(message: AtomicSwapHistoryResponse): unknown;
    create(base?: DeepPartial<AtomicSwapHistoryResponse>): AtomicSwapHistoryResponse;
    fromPartial(object: DeepPartial<AtomicSwapHistoryResponse>): AtomicSwapHistoryResponse;
};
export declare const AtomicSwap: {
    encode(message: AtomicSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AtomicSwap;
    fromJSON(object: any): AtomicSwap;
    toJSON(message: AtomicSwap): unknown;
    create(base?: DeepPartial<AtomicSwap>): AtomicSwap;
    fromPartial(object: DeepPartial<AtomicSwap>): AtomicSwap;
};
export declare const Coin: {
    encode(message: Coin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Coin;
    fromJSON(object: any): Coin;
    toJSON(message: Coin): unknown;
    create(base?: DeepPartial<Coin>): Coin;
    fromPartial(object: DeepPartial<Coin>): Coin;
};
/** InjectiveSpotExchangeRPC defines gRPC API of Spot Exchange provider. */
export interface InjectiveSpotExchangeRPC {
    /** Get a list of Spot Markets */
    Markets(request: DeepPartial<MarketsRequest>, metadata?: grpc.Metadata): Promise<MarketsResponse>;
    /** Get details of a single spot market */
    Market(request: DeepPartial<MarketRequest>, metadata?: grpc.Metadata): Promise<MarketResponse>;
    /** Stream live updates of selected spot markets */
    StreamMarkets(request: DeepPartial<StreamMarketsRequest>, metadata?: grpc.Metadata): Observable<StreamMarketsResponse>;
    /** Orderbook of a Spot Market */
    OrderbookV2(request: DeepPartial<OrderbookV2Request>, metadata?: grpc.Metadata): Promise<OrderbookV2Response>;
    /** Orderbook of Spot Markets */
    OrderbooksV2(request: DeepPartial<OrderbooksV2Request>, metadata?: grpc.Metadata): Promise<OrderbooksV2Response>;
    /** Stream live snapshot updates of selected spot market orderbook */
    StreamOrderbookV2(request: DeepPartial<StreamOrderbookV2Request>, metadata?: grpc.Metadata): Observable<StreamOrderbookV2Response>;
    /** Stream live level updates of selected spot market orderbook */
    StreamOrderbookUpdate(request: DeepPartial<StreamOrderbookUpdateRequest>, metadata?: grpc.Metadata): Observable<StreamOrderbookUpdateResponse>;
    /** Orders of a Spot Market */
    Orders(request: DeepPartial<OrdersRequest>, metadata?: grpc.Metadata): Promise<OrdersResponse>;
    /** Stream updates to individual orders of a Spot Market */
    StreamOrders(request: DeepPartial<StreamOrdersRequest>, metadata?: grpc.Metadata): Observable<StreamOrdersResponse>;
    /** Trades of a Spot Market */
    Trades(request: DeepPartial<TradesRequest>, metadata?: grpc.Metadata): Promise<TradesResponse>;
    /** Stream newly executed trades from Spot Market */
    StreamTrades(request: DeepPartial<StreamTradesRequest>, metadata?: grpc.Metadata): Observable<StreamTradesResponse>;
    /** List orders posted from this subaccount */
    SubaccountOrdersList(request: DeepPartial<SubaccountOrdersListRequest>, metadata?: grpc.Metadata): Promise<SubaccountOrdersListResponse>;
    /** List trades executed by this subaccount */
    SubaccountTradesList(request: DeepPartial<SubaccountTradesListRequest>, metadata?: grpc.Metadata): Promise<SubaccountTradesListResponse>;
    /** Lists history orders posted from this subaccount */
    OrdersHistory(request: DeepPartial<OrdersHistoryRequest>, metadata?: grpc.Metadata): Promise<OrdersHistoryResponse>;
    /** Stream updates to historical orders of a spot Market */
    StreamOrdersHistory(request: DeepPartial<StreamOrdersHistoryRequest>, metadata?: grpc.Metadata): Observable<StreamOrdersHistoryResponse>;
    /** Get historical atomic swaps */
    AtomicSwapHistory(request: DeepPartial<AtomicSwapHistoryRequest>, metadata?: grpc.Metadata): Promise<AtomicSwapHistoryResponse>;
}
export declare class InjectiveSpotExchangeRPCClientImpl implements InjectiveSpotExchangeRPC {
    private readonly rpc;
    constructor(rpc: Rpc);
    Markets(request: DeepPartial<MarketsRequest>, metadata?: grpc.Metadata): Promise<MarketsResponse>;
    Market(request: DeepPartial<MarketRequest>, metadata?: grpc.Metadata): Promise<MarketResponse>;
    StreamMarkets(request: DeepPartial<StreamMarketsRequest>, metadata?: grpc.Metadata): Observable<StreamMarketsResponse>;
    OrderbookV2(request: DeepPartial<OrderbookV2Request>, metadata?: grpc.Metadata): Promise<OrderbookV2Response>;
    OrderbooksV2(request: DeepPartial<OrderbooksV2Request>, metadata?: grpc.Metadata): Promise<OrderbooksV2Response>;
    StreamOrderbookV2(request: DeepPartial<StreamOrderbookV2Request>, metadata?: grpc.Metadata): Observable<StreamOrderbookV2Response>;
    StreamOrderbookUpdate(request: DeepPartial<StreamOrderbookUpdateRequest>, metadata?: grpc.Metadata): Observable<StreamOrderbookUpdateResponse>;
    Orders(request: DeepPartial<OrdersRequest>, metadata?: grpc.Metadata): Promise<OrdersResponse>;
    StreamOrders(request: DeepPartial<StreamOrdersRequest>, metadata?: grpc.Metadata): Observable<StreamOrdersResponse>;
    Trades(request: DeepPartial<TradesRequest>, metadata?: grpc.Metadata): Promise<TradesResponse>;
    StreamTrades(request: DeepPartial<StreamTradesRequest>, metadata?: grpc.Metadata): Observable<StreamTradesResponse>;
    SubaccountOrdersList(request: DeepPartial<SubaccountOrdersListRequest>, metadata?: grpc.Metadata): Promise<SubaccountOrdersListResponse>;
    SubaccountTradesList(request: DeepPartial<SubaccountTradesListRequest>, metadata?: grpc.Metadata): Promise<SubaccountTradesListResponse>;
    OrdersHistory(request: DeepPartial<OrdersHistoryRequest>, metadata?: grpc.Metadata): Promise<OrdersHistoryResponse>;
    StreamOrdersHistory(request: DeepPartial<StreamOrdersHistoryRequest>, metadata?: grpc.Metadata): Observable<StreamOrdersHistoryResponse>;
    AtomicSwapHistory(request: DeepPartial<AtomicSwapHistoryRequest>, metadata?: grpc.Metadata): Promise<AtomicSwapHistoryResponse>;
}
export declare const InjectiveSpotExchangeRPCDesc: {
    serviceName: string;
};
export declare const InjectiveSpotExchangeRPCMarketsDesc: UnaryMethodDefinitionish;
export declare const InjectiveSpotExchangeRPCMarketDesc: UnaryMethodDefinitionish;
export declare const InjectiveSpotExchangeRPCStreamMarketsDesc: UnaryMethodDefinitionish;
export declare const InjectiveSpotExchangeRPCOrderbookV2Desc: UnaryMethodDefinitionish;
export declare const InjectiveSpotExchangeRPCOrderbooksV2Desc: UnaryMethodDefinitionish;
export declare const InjectiveSpotExchangeRPCStreamOrderbookV2Desc: UnaryMethodDefinitionish;
export declare const InjectiveSpotExchangeRPCStreamOrderbookUpdateDesc: UnaryMethodDefinitionish;
export declare const InjectiveSpotExchangeRPCOrdersDesc: UnaryMethodDefinitionish;
export declare const InjectiveSpotExchangeRPCStreamOrdersDesc: UnaryMethodDefinitionish;
export declare const InjectiveSpotExchangeRPCTradesDesc: UnaryMethodDefinitionish;
export declare const InjectiveSpotExchangeRPCStreamTradesDesc: UnaryMethodDefinitionish;
export declare const InjectiveSpotExchangeRPCSubaccountOrdersListDesc: UnaryMethodDefinitionish;
export declare const InjectiveSpotExchangeRPCSubaccountTradesListDesc: UnaryMethodDefinitionish;
export declare const InjectiveSpotExchangeRPCOrdersHistoryDesc: UnaryMethodDefinitionish;
export declare const InjectiveSpotExchangeRPCStreamOrdersHistoryDesc: UnaryMethodDefinitionish;
export declare const InjectiveSpotExchangeRPCAtomicSwapHistoryDesc: UnaryMethodDefinitionish;
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
