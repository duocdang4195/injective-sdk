import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
export declare const protobufPackage = "injective_derivative_exchange_rpc";
export interface MarketsRequest {
    /** Filter by market status */
    marketStatus: string;
    /** Filter by the Coin denomination of the quote currency */
    quoteDenom: string;
    marketStatuses: string[];
}
export interface MarketsResponse {
    /** Derivative Markets list */
    markets: DerivativeMarketInfo[];
}
export interface DerivativeMarketInfo {
    /**
     * DerivativeMarket ID is crypto.Keccak256Hash([]byte((oracleType.String() +
     * ticker + quoteDenom + oracleBase + oracleQuote))) for perpetual markets and
     * crypto.Keccak256Hash([]byte((oracleType.String() + ticker + quoteDenom +
     * oracleBase + oracleQuote + strconv.Itoa(int(expiry))))) for expiry futures
     * markets
     */
    marketId: string;
    /** The status of the market */
    marketStatus: string;
    /**
     * A name of the pair in format AAA/BBB, where AAA is base asset, BBB is quote
     * asset.
     */
    ticker: string;
    /** Oracle base currency */
    oracleBase: string;
    /** Oracle quote currency */
    oracleQuote: string;
    /** Oracle Type */
    oracleType: string;
    /** OracleScaleFactor */
    oracleScaleFactor: number;
    /** Defines the initial margin ratio of a derivative market */
    initialMarginRatio: string;
    /** Defines the maintenance margin ratio of a derivative market */
    maintenanceMarginRatio: string;
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
    /** True if the market is a perpetual swap market */
    isPerpetual: boolean;
    /** Defines the minimum required tick size for the order's price */
    minPriceTickSize: string;
    /** Defines the minimum required tick size for the order's quantity */
    minQuantityTickSize: string;
    perpetualMarketInfo: PerpetualMarketInfo | undefined;
    perpetualMarketFunding: PerpetualMarketFunding | undefined;
    expiryFuturesMarketInfo: ExpiryFuturesMarketInfo | undefined;
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
export interface PerpetualMarketInfo {
    /**
     * Defines the default maximum absolute value of the hourly funding rate of the
     * perpetual market.
     */
    hourlyFundingRateCap: string;
    /** Defines the hourly interest rate of the perpetual market. */
    hourlyInterestRate: string;
    /**
     * Defines the next funding timestamp in seconds of a perpetual market in UNIX
     * seconds.
     */
    nextFundingTimestamp: string;
    /** Defines the funding interval in seconds of a perpetual market in seconds. */
    fundingInterval: string;
}
export interface PerpetualMarketFunding {
    /** Defines the cumulative funding of a perpetual market. */
    cumulativeFunding: string;
    /**
     * Defines defines the cumulative price for the current hour up to the last
     * timestamp.
     */
    cumulativePrice: string;
    /**
     * Defines the last funding timestamp in seconds of a perpetual market in UNIX
     * seconds.
     */
    lastTimestamp: string;
}
export interface ExpiryFuturesMarketInfo {
    /** Defines the expiration time for a time expiry futures market in UNIX seconds. */
    expirationTimestamp: string;
    /** Defines the settlement price for a time expiry futures market. */
    settlementPrice: string;
}
export interface MarketRequest {
    /** MarketId of the market we want to fetch */
    marketId: string;
}
export interface MarketResponse {
    /** Info about particular derivative market */
    market: DerivativeMarketInfo | undefined;
}
export interface StreamMarketRequest {
    /**
     * List of market IDs for updates streaming, empty means 'ALL' derivative
     * markets
     */
    marketIds: string[];
}
export interface StreamMarketResponse {
    /** Info about particular derivative market */
    market: DerivativeMarketInfo | undefined;
    /** Update type */
    operationType: string;
    /** Operation timestamp in UNIX millis. */
    timestamp: string;
}
export interface BinaryOptionsMarketsRequest {
    /** Filter by market status */
    marketStatus: string;
    /** Filter by the Coin denomination of the quote currency */
    quoteDenom: string;
    /** Skip will skip the first n item from the result */
    skip: string;
    /** Limit is used to specify the maximum number of items to be returned. */
    limit: number;
}
export interface BinaryOptionsMarketsResponse {
    /** Binary Options Markets list */
    markets: BinaryOptionsMarketInfo[];
    paging: Paging | undefined;
}
export interface BinaryOptionsMarketInfo {
    /**
     * Binary Options Market ID is crypto.Keccak256Hash([]byte((oracleType.String()
     * + ticker + quoteDenom + oracleSymbol + oracleProvider)))
     */
    marketId: string;
    /** The status of the market */
    marketStatus: string;
    /** A name of the binary options market. */
    ticker: string;
    /** Oracle symbol */
    oracleSymbol: string;
    /** Oracle provider */
    oracleProvider: string;
    /** Oracle Type */
    oracleType: string;
    /** OracleScaleFactor */
    oracleScaleFactor: number;
    /** Defines the expiration time for the market in UNIX seconds. */
    expirationTimestamp: string;
    /** Defines the settlement time for the market in UNIX seconds. */
    settlementTimestamp: string;
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
    /** Defines the settlement price of the market */
    settlementPrice: string;
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
export interface BinaryOptionsMarketRequest {
    /** MarketId of the market we want to fetch */
    marketId: string;
}
export interface BinaryOptionsMarketResponse {
    /** Info about particular derivative market */
    market: BinaryOptionsMarketInfo | undefined;
}
export interface OrderbookV2Request {
    /** MarketId of the market's orderbook we want to fetch */
    marketId: string;
}
export interface OrderbookV2Response {
    /** Orderbook of a particular derivative market */
    orderbook: DerivativeLimitOrderbookV2 | undefined;
}
export interface DerivativeLimitOrderbookV2 {
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
    orderbooks: SingleDerivativeLimitOrderbookV2[];
}
export interface SingleDerivativeLimitOrderbookV2 {
    /** market's ID */
    marketId: string;
    /** Orderbook of the market */
    orderbook: DerivativeLimitOrderbookV2 | undefined;
}
export interface StreamOrderbookV2Request {
    /**
     * List of market IDs for orderbook streaming, empty means 'ALL' derivative
     * markets
     */
    marketIds: string[];
}
export interface StreamOrderbookV2Response {
    /** Orderbook of a Derivative Market */
    orderbook: DerivativeLimitOrderbookV2 | undefined;
    /** Order update type */
    operationType: string;
    /** Operation timestamp in UNIX millis. */
    timestamp: string;
    /** MarketId of the market's orderbook */
    marketId: string;
}
export interface StreamOrderbookUpdateRequest {
    /**
     * List of market IDs for orderbook streaming, empty means 'ALL' derivative
     * markets
     */
    marketIds: string[];
}
export interface StreamOrderbookUpdateResponse {
    /** Orderbook level updates of a Derivative Market */
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
    /**
     * MarketId of market we want to fetch orders from. Using this field for one
     * single marketId
     */
    marketId: string;
    /** Look for specific order side */
    orderSide: string;
    /** Look for specific subaccountId of an order */
    subaccountId: string;
    /** Skip will skip the first n item from the result */
    skip: string;
    /** Limit is used to specify the maximum number of items to be returned */
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
    /**
     * MarketIds of the markets of which we want to get order from, use this field
     * for fetching orders from multiple markets
     */
    marketIds: string[];
    /** Only search for conditional/non-conditional orders */
    isConditional: string;
    /** Search for specific order type */
    orderType: string;
    /** Should include inactive orders */
    includeInactive: boolean;
    /** Choose to return subaccount total orders */
    subaccountTotalOrders: boolean;
    /** TradeId of the order we want to fetch */
    tradeId: string;
}
export interface OrdersResponse {
    orders: DerivativeLimitOrder[];
    paging: Paging | undefined;
}
export interface DerivativeLimitOrder {
    /** Hash of the order */
    orderHash: string;
    /** The side of the order */
    orderSide: string;
    /** Derivative Market ID */
    marketId: string;
    /** The subaccountId that this order belongs to */
    subaccountId: string;
    /** True if the order is a reduce-only order */
    isReduceOnly: boolean;
    /** Margin of the order */
    margin: string;
    /** Price of the order */
    price: string;
    /** Quantity of the order */
    quantity: string;
    /** The amount of the quantity remaining unfilled */
    unfilledQuantity: string;
    /** Trigger price is the trigger price used by stop/take orders */
    triggerPrice: string;
    /** Fee recipient address */
    feeRecipient: string;
    /** Order state */
    state: string;
    /** Order committed timestamp in UNIX millis. */
    createdAt: string;
    /** Order updated timestamp in UNIX millis. */
    updatedAt: string;
    /** Order number of subaccount */
    orderNumber: string;
    /** Order type */
    orderType: string;
    /** Order type */
    isConditional: boolean;
    /** Trigger timestamp, only exists for conditional orders */
    triggerAt: string;
    /** OrderHash of order that is triggered by this conditional order */
    placedOrderHash: string;
    /** Execution type of conditional order */
    executionType: string;
    /** Transaction Hash where order is created. Not all orders have this field */
    txHash: string;
}
export interface PositionsRequest {
    /** SubaccountId of the trader we want to get the positions from */
    subaccountId: string;
    /**
     * MarketId of the position we want to fetch. Use this field for fetching from
     * single market
     */
    marketId: string;
    /** Skip will skip the first n item from the result */
    skip: string;
    /** Limit is used to specify the maximum number of items to be returned */
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
    /**
     * MarketIds of the markets we want to filter. Use this field for fetching from
     * multiple markets
     */
    marketIds: string[];
    /** filter by direction of the position */
    direction: string;
    /** set to True to return subaccount total positions */
    subaccountTotalPositions: boolean;
}
export interface PositionsResponse {
    positions: DerivativePosition[];
    paging: Paging | undefined;
}
export interface DerivativePosition {
    /** Ticker of the derivative market */
    ticker: string;
    /** Derivative Market ID */
    marketId: string;
    /** The subaccountId that the position belongs to */
    subaccountId: string;
    /** Direction of the position */
    direction: string;
    /** Quantity of the position */
    quantity: string;
    /** Price of the position */
    entryPrice: string;
    /** Margin of the position */
    margin: string;
    /** LiquidationPrice of the position */
    liquidationPrice: string;
    /** MarkPrice of the position */
    markPrice: string;
    /** Aggregate Quantity of the Reduce Only orders associated with the position */
    aggregateReduceOnlyQuantity: string;
    /** Position updated timestamp in UNIX millis. */
    updatedAt: string;
    /** Position created timestamp in UNIX millis. */
    createdAt: string;
}
export interface LiquidablePositionsRequest {
    /** Market ID to filter orders for specific market */
    marketId: string;
    /** Skip will skip the first n item from the result */
    skip: string;
    /** Limit is used to specify the maximum number of items to be returned. */
    limit: number;
}
export interface LiquidablePositionsResponse {
    /** List of derivative positions */
    positions: DerivativePosition[];
}
export interface FundingPaymentsRequest {
    /** SubaccountId of the trader we want to get the positions from */
    subaccountId: string;
    /**
     * MarketIds of the funding payment we want to fetch. Using this for only one
     * market id. This field is prioritized
     */
    marketId: string;
    /** Skip will skip the first n item from the result */
    skip: string;
    /** Limit is used to specify the maximum number of items to be returned. */
    limit: number;
    /** Upper bound of funding payment updatedAt */
    endTime: string;
    /**
     * Filter by market ids. Using this field for fetching funding payments from
     * multiple market ids
     */
    marketIds: string[];
}
export interface FundingPaymentsResponse {
    /** List of funding payments */
    payments: FundingPayment[];
    paging: Paging | undefined;
}
export interface FundingPayment {
    /** Derivative Market ID */
    marketId: string;
    /** The subaccountId that the position belongs to */
    subaccountId: string;
    /** Amount of the funding payment */
    amount: string;
    /** Timestamp of funding payment in UNIX millis */
    timestamp: string;
}
export interface FundingRatesRequest {
    /** MarketId of the position we want to fetch */
    marketId: string;
    /** Skip will skip the first n item from the result */
    skip: string;
    /** Limit is used to specify the maximum number of items to be returned. */
    limit: number;
    /** Upper bound of funding timestamp */
    endTime: string;
}
export interface FundingRatesResponse {
    /** List of funding rates */
    fundingRates: FundingRate[];
    paging: Paging | undefined;
}
export interface FundingRate {
    /** Derivative Market ID */
    marketId: string;
    /** Value of the funding rate */
    rate: string;
    /** Timestamp of funding rate in UNIX millis */
    timestamp: string;
}
export interface StreamPositionsRequest {
    /** SubaccountId of the trader we want to get the positions from */
    subaccountId: string;
    /** Backward compat single market ID of position we want to stream */
    marketId: string;
    /** List of market IDs of the positions we want to stream */
    marketIds: string[];
    /** Subaccount ids of traders we want to get positions */
    subaccountIds: string[];
}
export interface StreamPositionsResponse {
    /** Updated Derivative Position */
    position: DerivativePosition | undefined;
    /** Operation timestamp in UNIX millis. */
    timestamp: string;
}
export interface StreamOrdersRequest {
    /**
     * MarketId of market we want to fetch orders from. Using this field for one
     * single marketId
     */
    marketId: string;
    /** Look for specific order side */
    orderSide: string;
    /** Look for specific subaccountId of an order */
    subaccountId: string;
    /** Skip will skip the first n item from the result */
    skip: string;
    /** Limit is used to specify the maximum number of items to be returned */
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
    /**
     * MarketIds of the markets of which we want to get order from, use this field
     * for fetching orders from multiple markets
     */
    marketIds: string[];
    /** Only search for conditional/non-conditional orders */
    isConditional: string;
    /** Search for specific order type */
    orderType: string;
    /** Should include inactive orders */
    includeInactive: boolean;
    /** Choose to return subaccount total orders */
    subaccountTotalOrders: boolean;
    /** TradeId of the order we want to fetch */
    tradeId: string;
}
export interface StreamOrdersResponse {
    /** Updated market order */
    order: DerivativeLimitOrder | undefined;
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
    /**
     * Subaccount ids of traders we want to get trades. Use this field for fetching
     * trades from multiple subaccounts
     */
    subaccountIds: string[];
    executionTypes: string[];
    /** Filter by the tradeId of the trade */
    tradeId: string;
    /** Account address */
    accountAddress: string;
}
export interface TradesResponse {
    /** Trades of a Derivative Market */
    trades: DerivativeTrade[];
    paging: Paging | undefined;
}
export interface DerivativeTrade {
    /** Order hash. */
    orderHash: string;
    /** The subaccountId that executed the trade */
    subaccountId: string;
    /** The ID of the market that this trade is in */
    marketId: string;
    /** The execution type of the trade */
    tradeExecutionType: string;
    /** True if the trade is a liquidation */
    isLiquidation: boolean;
    /** Position Delta from the trade */
    positionDelta: PositionDelta | undefined;
    /** The payout associated with the trade */
    payout: string;
    /** The fee associated with the trade */
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
export interface PositionDelta {
    /** The direction the trade */
    tradeDirection: string;
    /** Execution Price of the trade. */
    executionPrice: string;
    /** Execution Quantity of the trade. */
    executionQuantity: string;
    /** Execution Margin of the trade. */
    executionMargin: string;
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
    /**
     * Subaccount ids of traders we want to get trades. Use this field for fetching
     * trades from multiple subaccounts
     */
    subaccountIds: string[];
    executionTypes: string[];
    /** Filter by the tradeId of the trade */
    tradeId: string;
    /** Account address */
    accountAddress: string;
}
export interface StreamTradesResponse {
    /** New derivative market trade */
    trade: DerivativeTrade | undefined;
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
    /** List of derivative orders */
    orders: DerivativeLimitOrder[];
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
    /** List of derivative market trades */
    trades: DerivativeTrade[];
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
    /** Only search for conditional/non-conditional orders */
    isConditional: string;
    /** filter by order type */
    orderType: string;
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
    /** List of historical derivative orders */
    orders: DerivativeOrderHistory[];
    paging: Paging | undefined;
}
export interface DerivativeOrderHistory {
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
    /** True if an order is reduce only */
    isReduceOnly: boolean;
    /** Order direction (order side) */
    direction: string;
    /** True if this is conditional order, otherwise false */
    isConditional: boolean;
    /** Trigger timestamp in unix milli */
    triggerAt: string;
    /** Order hash placed when this triggers */
    placedOrderHash: string;
    /** Order's margin */
    margin: string;
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
    order: DerivativeOrderHistory | undefined;
    /** Order update type */
    operationType: string;
    /** Operation timestamp in UNIX millis. */
    timestamp: string;
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
export declare const DerivativeMarketInfo: {
    encode(message: DerivativeMarketInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeMarketInfo;
    fromJSON(object: any): DerivativeMarketInfo;
    toJSON(message: DerivativeMarketInfo): unknown;
    create(base?: DeepPartial<DerivativeMarketInfo>): DerivativeMarketInfo;
    fromPartial(object: DeepPartial<DerivativeMarketInfo>): DerivativeMarketInfo;
};
export declare const TokenMeta: {
    encode(message: TokenMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenMeta;
    fromJSON(object: any): TokenMeta;
    toJSON(message: TokenMeta): unknown;
    create(base?: DeepPartial<TokenMeta>): TokenMeta;
    fromPartial(object: DeepPartial<TokenMeta>): TokenMeta;
};
export declare const PerpetualMarketInfo: {
    encode(message: PerpetualMarketInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualMarketInfo;
    fromJSON(object: any): PerpetualMarketInfo;
    toJSON(message: PerpetualMarketInfo): unknown;
    create(base?: DeepPartial<PerpetualMarketInfo>): PerpetualMarketInfo;
    fromPartial(object: DeepPartial<PerpetualMarketInfo>): PerpetualMarketInfo;
};
export declare const PerpetualMarketFunding: {
    encode(message: PerpetualMarketFunding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualMarketFunding;
    fromJSON(object: any): PerpetualMarketFunding;
    toJSON(message: PerpetualMarketFunding): unknown;
    create(base?: DeepPartial<PerpetualMarketFunding>): PerpetualMarketFunding;
    fromPartial(object: DeepPartial<PerpetualMarketFunding>): PerpetualMarketFunding;
};
export declare const ExpiryFuturesMarketInfo: {
    encode(message: ExpiryFuturesMarketInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExpiryFuturesMarketInfo;
    fromJSON(object: any): ExpiryFuturesMarketInfo;
    toJSON(message: ExpiryFuturesMarketInfo): unknown;
    create(base?: DeepPartial<ExpiryFuturesMarketInfo>): ExpiryFuturesMarketInfo;
    fromPartial(object: DeepPartial<ExpiryFuturesMarketInfo>): ExpiryFuturesMarketInfo;
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
export declare const StreamMarketRequest: {
    encode(message: StreamMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamMarketRequest;
    fromJSON(object: any): StreamMarketRequest;
    toJSON(message: StreamMarketRequest): unknown;
    create(base?: DeepPartial<StreamMarketRequest>): StreamMarketRequest;
    fromPartial(object: DeepPartial<StreamMarketRequest>): StreamMarketRequest;
};
export declare const StreamMarketResponse: {
    encode(message: StreamMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamMarketResponse;
    fromJSON(object: any): StreamMarketResponse;
    toJSON(message: StreamMarketResponse): unknown;
    create(base?: DeepPartial<StreamMarketResponse>): StreamMarketResponse;
    fromPartial(object: DeepPartial<StreamMarketResponse>): StreamMarketResponse;
};
export declare const BinaryOptionsMarketsRequest: {
    encode(message: BinaryOptionsMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BinaryOptionsMarketsRequest;
    fromJSON(object: any): BinaryOptionsMarketsRequest;
    toJSON(message: BinaryOptionsMarketsRequest): unknown;
    create(base?: DeepPartial<BinaryOptionsMarketsRequest>): BinaryOptionsMarketsRequest;
    fromPartial(object: DeepPartial<BinaryOptionsMarketsRequest>): BinaryOptionsMarketsRequest;
};
export declare const BinaryOptionsMarketsResponse: {
    encode(message: BinaryOptionsMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BinaryOptionsMarketsResponse;
    fromJSON(object: any): BinaryOptionsMarketsResponse;
    toJSON(message: BinaryOptionsMarketsResponse): unknown;
    create(base?: DeepPartial<BinaryOptionsMarketsResponse>): BinaryOptionsMarketsResponse;
    fromPartial(object: DeepPartial<BinaryOptionsMarketsResponse>): BinaryOptionsMarketsResponse;
};
export declare const BinaryOptionsMarketInfo: {
    encode(message: BinaryOptionsMarketInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BinaryOptionsMarketInfo;
    fromJSON(object: any): BinaryOptionsMarketInfo;
    toJSON(message: BinaryOptionsMarketInfo): unknown;
    create(base?: DeepPartial<BinaryOptionsMarketInfo>): BinaryOptionsMarketInfo;
    fromPartial(object: DeepPartial<BinaryOptionsMarketInfo>): BinaryOptionsMarketInfo;
};
export declare const Paging: {
    encode(message: Paging, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Paging;
    fromJSON(object: any): Paging;
    toJSON(message: Paging): unknown;
    create(base?: DeepPartial<Paging>): Paging;
    fromPartial(object: DeepPartial<Paging>): Paging;
};
export declare const BinaryOptionsMarketRequest: {
    encode(message: BinaryOptionsMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BinaryOptionsMarketRequest;
    fromJSON(object: any): BinaryOptionsMarketRequest;
    toJSON(message: BinaryOptionsMarketRequest): unknown;
    create(base?: DeepPartial<BinaryOptionsMarketRequest>): BinaryOptionsMarketRequest;
    fromPartial(object: DeepPartial<BinaryOptionsMarketRequest>): BinaryOptionsMarketRequest;
};
export declare const BinaryOptionsMarketResponse: {
    encode(message: BinaryOptionsMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BinaryOptionsMarketResponse;
    fromJSON(object: any): BinaryOptionsMarketResponse;
    toJSON(message: BinaryOptionsMarketResponse): unknown;
    create(base?: DeepPartial<BinaryOptionsMarketResponse>): BinaryOptionsMarketResponse;
    fromPartial(object: DeepPartial<BinaryOptionsMarketResponse>): BinaryOptionsMarketResponse;
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
export declare const DerivativeLimitOrderbookV2: {
    encode(message: DerivativeLimitOrderbookV2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeLimitOrderbookV2;
    fromJSON(object: any): DerivativeLimitOrderbookV2;
    toJSON(message: DerivativeLimitOrderbookV2): unknown;
    create(base?: DeepPartial<DerivativeLimitOrderbookV2>): DerivativeLimitOrderbookV2;
    fromPartial(object: DeepPartial<DerivativeLimitOrderbookV2>): DerivativeLimitOrderbookV2;
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
export declare const SingleDerivativeLimitOrderbookV2: {
    encode(message: SingleDerivativeLimitOrderbookV2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SingleDerivativeLimitOrderbookV2;
    fromJSON(object: any): SingleDerivativeLimitOrderbookV2;
    toJSON(message: SingleDerivativeLimitOrderbookV2): unknown;
    create(base?: DeepPartial<SingleDerivativeLimitOrderbookV2>): SingleDerivativeLimitOrderbookV2;
    fromPartial(object: DeepPartial<SingleDerivativeLimitOrderbookV2>): SingleDerivativeLimitOrderbookV2;
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
export declare const DerivativeLimitOrder: {
    encode(message: DerivativeLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeLimitOrder;
    fromJSON(object: any): DerivativeLimitOrder;
    toJSON(message: DerivativeLimitOrder): unknown;
    create(base?: DeepPartial<DerivativeLimitOrder>): DerivativeLimitOrder;
    fromPartial(object: DeepPartial<DerivativeLimitOrder>): DerivativeLimitOrder;
};
export declare const PositionsRequest: {
    encode(message: PositionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PositionsRequest;
    fromJSON(object: any): PositionsRequest;
    toJSON(message: PositionsRequest): unknown;
    create(base?: DeepPartial<PositionsRequest>): PositionsRequest;
    fromPartial(object: DeepPartial<PositionsRequest>): PositionsRequest;
};
export declare const PositionsResponse: {
    encode(message: PositionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PositionsResponse;
    fromJSON(object: any): PositionsResponse;
    toJSON(message: PositionsResponse): unknown;
    create(base?: DeepPartial<PositionsResponse>): PositionsResponse;
    fromPartial(object: DeepPartial<PositionsResponse>): PositionsResponse;
};
export declare const DerivativePosition: {
    encode(message: DerivativePosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativePosition;
    fromJSON(object: any): DerivativePosition;
    toJSON(message: DerivativePosition): unknown;
    create(base?: DeepPartial<DerivativePosition>): DerivativePosition;
    fromPartial(object: DeepPartial<DerivativePosition>): DerivativePosition;
};
export declare const LiquidablePositionsRequest: {
    encode(message: LiquidablePositionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidablePositionsRequest;
    fromJSON(object: any): LiquidablePositionsRequest;
    toJSON(message: LiquidablePositionsRequest): unknown;
    create(base?: DeepPartial<LiquidablePositionsRequest>): LiquidablePositionsRequest;
    fromPartial(object: DeepPartial<LiquidablePositionsRequest>): LiquidablePositionsRequest;
};
export declare const LiquidablePositionsResponse: {
    encode(message: LiquidablePositionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidablePositionsResponse;
    fromJSON(object: any): LiquidablePositionsResponse;
    toJSON(message: LiquidablePositionsResponse): unknown;
    create(base?: DeepPartial<LiquidablePositionsResponse>): LiquidablePositionsResponse;
    fromPartial(object: DeepPartial<LiquidablePositionsResponse>): LiquidablePositionsResponse;
};
export declare const FundingPaymentsRequest: {
    encode(message: FundingPaymentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FundingPaymentsRequest;
    fromJSON(object: any): FundingPaymentsRequest;
    toJSON(message: FundingPaymentsRequest): unknown;
    create(base?: DeepPartial<FundingPaymentsRequest>): FundingPaymentsRequest;
    fromPartial(object: DeepPartial<FundingPaymentsRequest>): FundingPaymentsRequest;
};
export declare const FundingPaymentsResponse: {
    encode(message: FundingPaymentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FundingPaymentsResponse;
    fromJSON(object: any): FundingPaymentsResponse;
    toJSON(message: FundingPaymentsResponse): unknown;
    create(base?: DeepPartial<FundingPaymentsResponse>): FundingPaymentsResponse;
    fromPartial(object: DeepPartial<FundingPaymentsResponse>): FundingPaymentsResponse;
};
export declare const FundingPayment: {
    encode(message: FundingPayment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FundingPayment;
    fromJSON(object: any): FundingPayment;
    toJSON(message: FundingPayment): unknown;
    create(base?: DeepPartial<FundingPayment>): FundingPayment;
    fromPartial(object: DeepPartial<FundingPayment>): FundingPayment;
};
export declare const FundingRatesRequest: {
    encode(message: FundingRatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FundingRatesRequest;
    fromJSON(object: any): FundingRatesRequest;
    toJSON(message: FundingRatesRequest): unknown;
    create(base?: DeepPartial<FundingRatesRequest>): FundingRatesRequest;
    fromPartial(object: DeepPartial<FundingRatesRequest>): FundingRatesRequest;
};
export declare const FundingRatesResponse: {
    encode(message: FundingRatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FundingRatesResponse;
    fromJSON(object: any): FundingRatesResponse;
    toJSON(message: FundingRatesResponse): unknown;
    create(base?: DeepPartial<FundingRatesResponse>): FundingRatesResponse;
    fromPartial(object: DeepPartial<FundingRatesResponse>): FundingRatesResponse;
};
export declare const FundingRate: {
    encode(message: FundingRate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FundingRate;
    fromJSON(object: any): FundingRate;
    toJSON(message: FundingRate): unknown;
    create(base?: DeepPartial<FundingRate>): FundingRate;
    fromPartial(object: DeepPartial<FundingRate>): FundingRate;
};
export declare const StreamPositionsRequest: {
    encode(message: StreamPositionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamPositionsRequest;
    fromJSON(object: any): StreamPositionsRequest;
    toJSON(message: StreamPositionsRequest): unknown;
    create(base?: DeepPartial<StreamPositionsRequest>): StreamPositionsRequest;
    fromPartial(object: DeepPartial<StreamPositionsRequest>): StreamPositionsRequest;
};
export declare const StreamPositionsResponse: {
    encode(message: StreamPositionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamPositionsResponse;
    fromJSON(object: any): StreamPositionsResponse;
    toJSON(message: StreamPositionsResponse): unknown;
    create(base?: DeepPartial<StreamPositionsResponse>): StreamPositionsResponse;
    fromPartial(object: DeepPartial<StreamPositionsResponse>): StreamPositionsResponse;
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
export declare const DerivativeTrade: {
    encode(message: DerivativeTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeTrade;
    fromJSON(object: any): DerivativeTrade;
    toJSON(message: DerivativeTrade): unknown;
    create(base?: DeepPartial<DerivativeTrade>): DerivativeTrade;
    fromPartial(object: DeepPartial<DerivativeTrade>): DerivativeTrade;
};
export declare const PositionDelta: {
    encode(message: PositionDelta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PositionDelta;
    fromJSON(object: any): PositionDelta;
    toJSON(message: PositionDelta): unknown;
    create(base?: DeepPartial<PositionDelta>): PositionDelta;
    fromPartial(object: DeepPartial<PositionDelta>): PositionDelta;
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
export declare const DerivativeOrderHistory: {
    encode(message: DerivativeOrderHistory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeOrderHistory;
    fromJSON(object: any): DerivativeOrderHistory;
    toJSON(message: DerivativeOrderHistory): unknown;
    create(base?: DeepPartial<DerivativeOrderHistory>): DerivativeOrderHistory;
    fromPartial(object: DeepPartial<DerivativeOrderHistory>): DerivativeOrderHistory;
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
/**
 * InjectiveDerivativeExchangeRPC defines gRPC API of Derivative Markets
 * provider.
 */
export interface InjectiveDerivativeExchangeRPC {
    /** Markets gets a list of Derivative Markets */
    Markets(request: DeepPartial<MarketsRequest>, metadata?: grpc.Metadata): Promise<MarketsResponse>;
    /** Market gets details of a single derivative market */
    Market(request: DeepPartial<MarketRequest>, metadata?: grpc.Metadata): Promise<MarketResponse>;
    /** StreamMarket streams live updates of selected derivative markets */
    StreamMarket(request: DeepPartial<StreamMarketRequest>, metadata?: grpc.Metadata): Observable<StreamMarketResponse>;
    /** BinaryOptionsMarkets gets a list of Binary Options Markets */
    BinaryOptionsMarkets(request: DeepPartial<BinaryOptionsMarketsRequest>, metadata?: grpc.Metadata): Promise<BinaryOptionsMarketsResponse>;
    /** BinaryOptionMarket gets details of a single binary options market */
    BinaryOptionsMarket(request: DeepPartial<BinaryOptionsMarketRequest>, metadata?: grpc.Metadata): Promise<BinaryOptionsMarketResponse>;
    /** Orderbook gets the Orderbook of a Derivative Market */
    OrderbookV2(request: DeepPartial<OrderbookV2Request>, metadata?: grpc.Metadata): Promise<OrderbookV2Response>;
    /** Orderbooks gets the Orderbooks of requested derivative markets */
    OrderbooksV2(request: DeepPartial<OrderbooksV2Request>, metadata?: grpc.Metadata): Promise<OrderbooksV2Response>;
    /** Stream live snapshot updates of selected derivative market orderbook */
    StreamOrderbookV2(request: DeepPartial<StreamOrderbookV2Request>, metadata?: grpc.Metadata): Observable<StreamOrderbookV2Response>;
    /** Stream live level updates of selected derivative market orderbook */
    StreamOrderbookUpdate(request: DeepPartial<StreamOrderbookUpdateRequest>, metadata?: grpc.Metadata): Observable<StreamOrderbookUpdateResponse>;
    /** DerivativeLimitOrders gets the limit orders of a derivative Market. */
    Orders(request: DeepPartial<OrdersRequest>, metadata?: grpc.Metadata): Promise<OrdersResponse>;
    /** Positions gets the positions for a trader. */
    Positions(request: DeepPartial<PositionsRequest>, metadata?: grpc.Metadata): Promise<PositionsResponse>;
    /** LiquidablePositions gets all the liquidable positions. */
    LiquidablePositions(request: DeepPartial<LiquidablePositionsRequest>, metadata?: grpc.Metadata): Promise<LiquidablePositionsResponse>;
    /** FundingPayments gets the funding payments for a trader. */
    FundingPayments(request: DeepPartial<FundingPaymentsRequest>, metadata?: grpc.Metadata): Promise<FundingPaymentsResponse>;
    /** FundingRates gets the historical funding rates for a market. */
    FundingRates(request: DeepPartial<FundingRatesRequest>, metadata?: grpc.Metadata): Promise<FundingRatesResponse>;
    /** StreamPositions streams derivatives position updates. */
    StreamPositions(request: DeepPartial<StreamPositionsRequest>, metadata?: grpc.Metadata): Observable<StreamPositionsResponse>;
    /** StreamOrders streams updates to individual orders of a Derivative Market. */
    StreamOrders(request: DeepPartial<StreamOrdersRequest>, metadata?: grpc.Metadata): Observable<StreamOrdersResponse>;
    /** Trades gets the trades of a Derivative Market. */
    Trades(request: DeepPartial<TradesRequest>, metadata?: grpc.Metadata): Promise<TradesResponse>;
    /** StreamTrades streams newly executed trades from Derivative Market. */
    StreamTrades(request: DeepPartial<StreamTradesRequest>, metadata?: grpc.Metadata): Observable<StreamTradesResponse>;
    /** SubaccountOrdersList lists orders posted from this subaccount. */
    SubaccountOrdersList(request: DeepPartial<SubaccountOrdersListRequest>, metadata?: grpc.Metadata): Promise<SubaccountOrdersListResponse>;
    /**
     * SubaccountTradesList gets a list of derivatives trades executed by this
     * subaccount.
     */
    SubaccountTradesList(request: DeepPartial<SubaccountTradesListRequest>, metadata?: grpc.Metadata): Promise<SubaccountTradesListResponse>;
    /** Lists history orders posted from a subaccount */
    OrdersHistory(request: DeepPartial<OrdersHistoryRequest>, metadata?: grpc.Metadata): Promise<OrdersHistoryResponse>;
    /** Stream updates to historical orders of a derivative Market */
    StreamOrdersHistory(request: DeepPartial<StreamOrdersHistoryRequest>, metadata?: grpc.Metadata): Observable<StreamOrdersHistoryResponse>;
}
export declare class InjectiveDerivativeExchangeRPCClientImpl implements InjectiveDerivativeExchangeRPC {
    private readonly rpc;
    constructor(rpc: Rpc);
    Markets(request: DeepPartial<MarketsRequest>, metadata?: grpc.Metadata): Promise<MarketsResponse>;
    Market(request: DeepPartial<MarketRequest>, metadata?: grpc.Metadata): Promise<MarketResponse>;
    StreamMarket(request: DeepPartial<StreamMarketRequest>, metadata?: grpc.Metadata): Observable<StreamMarketResponse>;
    BinaryOptionsMarkets(request: DeepPartial<BinaryOptionsMarketsRequest>, metadata?: grpc.Metadata): Promise<BinaryOptionsMarketsResponse>;
    BinaryOptionsMarket(request: DeepPartial<BinaryOptionsMarketRequest>, metadata?: grpc.Metadata): Promise<BinaryOptionsMarketResponse>;
    OrderbookV2(request: DeepPartial<OrderbookV2Request>, metadata?: grpc.Metadata): Promise<OrderbookV2Response>;
    OrderbooksV2(request: DeepPartial<OrderbooksV2Request>, metadata?: grpc.Metadata): Promise<OrderbooksV2Response>;
    StreamOrderbookV2(request: DeepPartial<StreamOrderbookV2Request>, metadata?: grpc.Metadata): Observable<StreamOrderbookV2Response>;
    StreamOrderbookUpdate(request: DeepPartial<StreamOrderbookUpdateRequest>, metadata?: grpc.Metadata): Observable<StreamOrderbookUpdateResponse>;
    Orders(request: DeepPartial<OrdersRequest>, metadata?: grpc.Metadata): Promise<OrdersResponse>;
    Positions(request: DeepPartial<PositionsRequest>, metadata?: grpc.Metadata): Promise<PositionsResponse>;
    LiquidablePositions(request: DeepPartial<LiquidablePositionsRequest>, metadata?: grpc.Metadata): Promise<LiquidablePositionsResponse>;
    FundingPayments(request: DeepPartial<FundingPaymentsRequest>, metadata?: grpc.Metadata): Promise<FundingPaymentsResponse>;
    FundingRates(request: DeepPartial<FundingRatesRequest>, metadata?: grpc.Metadata): Promise<FundingRatesResponse>;
    StreamPositions(request: DeepPartial<StreamPositionsRequest>, metadata?: grpc.Metadata): Observable<StreamPositionsResponse>;
    StreamOrders(request: DeepPartial<StreamOrdersRequest>, metadata?: grpc.Metadata): Observable<StreamOrdersResponse>;
    Trades(request: DeepPartial<TradesRequest>, metadata?: grpc.Metadata): Promise<TradesResponse>;
    StreamTrades(request: DeepPartial<StreamTradesRequest>, metadata?: grpc.Metadata): Observable<StreamTradesResponse>;
    SubaccountOrdersList(request: DeepPartial<SubaccountOrdersListRequest>, metadata?: grpc.Metadata): Promise<SubaccountOrdersListResponse>;
    SubaccountTradesList(request: DeepPartial<SubaccountTradesListRequest>, metadata?: grpc.Metadata): Promise<SubaccountTradesListResponse>;
    OrdersHistory(request: DeepPartial<OrdersHistoryRequest>, metadata?: grpc.Metadata): Promise<OrdersHistoryResponse>;
    StreamOrdersHistory(request: DeepPartial<StreamOrdersHistoryRequest>, metadata?: grpc.Metadata): Observable<StreamOrdersHistoryResponse>;
}
export declare const InjectiveDerivativeExchangeRPCDesc: {
    serviceName: string;
};
export declare const InjectiveDerivativeExchangeRPCMarketsDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCMarketDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCStreamMarketDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCBinaryOptionsMarketsDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCBinaryOptionsMarketDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCOrderbookV2Desc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCOrderbooksV2Desc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCStreamOrderbookV2Desc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCStreamOrderbookUpdateDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCOrdersDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCPositionsDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCLiquidablePositionsDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCFundingPaymentsDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCFundingRatesDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCStreamPositionsDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCStreamOrdersDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCTradesDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCStreamTradesDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCSubaccountOrdersListDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCSubaccountTradesListDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCOrdersHistoryDesc: UnaryMethodDefinitionish;
export declare const InjectiveDerivativeExchangeRPCStreamOrdersHistoryDesc: UnaryMethodDefinitionish;
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
