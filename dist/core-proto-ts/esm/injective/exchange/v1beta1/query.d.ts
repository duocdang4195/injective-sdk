import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
import { MetadataStatistics } from "../../oracle/v1beta1/oracle";
import { AggregateAccountVolumeRecord, BinaryOptionsMarket, CampaignRewardPool, DenomDecimals, Deposit, DerivativeMarket, ExpiryFuturesMarketInfo, FeeDiscountSchedule, FeeDiscountTierInfo, FeeDiscountTierTTL, Level, MarketVolume, MidPriceAndTOB, Params, PerpetualMarketFunding, PerpetualMarketInfo, Position, SpotMarket, SubaccountOrderbookMetadata, SubaccountOrderData, TradeRecord, TradeRecords, TradingRewardCampaignInfo, VolumeRecord } from "./exchange";
import { Balance, DerivativePosition, GenesisState } from "./genesis";
export declare enum OrderSide {
    /** Side_Unspecified - will return both */
    Side_Unspecified = 0,
    Buy = 1,
    Sell = 2,
    UNRECOGNIZED = -1
}
export declare function orderSideFromJSON(object: any): OrderSide;
export declare function orderSideToJSON(object: OrderSide): string;
/** CancellationStrategy is the list of cancellation strategies. */
export declare enum CancellationStrategy {
    /** UnspecifiedOrder - just cancelling in random order in most efficient way */
    UnspecifiedOrder = 0,
    /** FromWorstToBest - e.g. for buy orders from lowest to highest price */
    FromWorstToBest = 1,
    /** FromBestToWorst - e.g. for buy orders from higest to lowest price */
    FromBestToWorst = 2,
    UNRECOGNIZED = -1
}
export declare function cancellationStrategyFromJSON(object: any): CancellationStrategy;
export declare function cancellationStrategyToJSON(object: CancellationStrategy): string;
export interface Subaccount {
    trader: string;
    subaccountNonce: number;
}
export interface QuerySubaccountOrdersRequest {
    subaccountId: string;
    marketId: string;
}
export interface QuerySubaccountOrdersResponse {
    buyOrders: SubaccountOrderData[];
    sellOrders: SubaccountOrderData[];
}
export interface SubaccountOrderbookMetadataWithMarket {
    metadata: SubaccountOrderbookMetadata | undefined;
    marketId: string;
    isBuy: boolean;
}
/**
 * QueryExchangeParamsRequest is the request type for the Query/ExchangeParams
 * RPC method.
 */
export interface QueryExchangeParamsRequest {
}
/**
 * QueryExchangeParamsRequest is the response type for the Query/ExchangeParams
 * RPC method.
 */
export interface QueryExchangeParamsResponse {
    params: Params | undefined;
}
/**
 * QuerySubaccountDepositsRequest is the request type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositsRequest {
    subaccountId: string;
    subaccount: Subaccount | undefined;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositsResponse {
    deposits: {
        [key: string]: Deposit;
    };
}
export interface QuerySubaccountDepositsResponse_DepositsEntry {
    key: string;
    value: Deposit | undefined;
}
/**
 * QueryExchangeBalancesRequest is the request type for the
 * Query/ExchangeBalances RPC method.
 */
export interface QueryExchangeBalancesRequest {
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QueryExchangeBalancesResponse {
    balances: Balance[];
}
/**
 * QueryAggregateVolumeRequest is the request type for the Query/AggregateVolume
 * RPC method.
 */
export interface QueryAggregateVolumeRequest {
    /** can either be an address or a subaccount */
    account: string;
}
/**
 * QueryAggregateVolumeResponse is the response type for the
 * Query/AggregateVolume RPC method.
 */
export interface QueryAggregateVolumeResponse {
    /**
     * if an address is specified, then the aggregate_volumes will aggregate the
     * volumes across all subaccounts for the address
     */
    aggregateVolumes: MarketVolume[];
}
/**
 * QueryAggregateVolumesRequest is the request type for the
 * Query/AggregateVolumes RPC method.
 */
export interface QueryAggregateVolumesRequest {
    accounts: string[];
    marketIds: string[];
}
/**
 * QueryAggregateVolumesResponse is the response type for the
 * Query/AggregateVolumes RPC method.
 */
export interface QueryAggregateVolumesResponse {
    /** the aggregate volume records for the accounts specified */
    aggregateAccountVolumes: AggregateAccountVolumeRecord[];
    /** the aggregate volumes for the markets specified */
    aggregateMarketVolumes: MarketVolume[];
}
/**
 * QueryAggregateMarketVolumeRequest is the request type for the
 * Query/AggregateMarketVolume RPC method.
 */
export interface QueryAggregateMarketVolumeRequest {
    marketId: string;
}
/**
 * QueryAggregateMarketVolumeResponse is the response type for the
 * Query/AggregateMarketVolume RPC method.
 */
export interface QueryAggregateMarketVolumeResponse {
    volume: VolumeRecord | undefined;
}
/**
 * QueryDenomDecimalRequest is the request type for the Query/DenomDecimal RPC
 * method.
 */
export interface QueryDenomDecimalRequest {
    denom: string;
}
/**
 * QueryDenomDecimalResponse is the response type for the Query/DenomDecimal RPC
 * method.
 */
export interface QueryDenomDecimalResponse {
    decimal: string;
}
/**
 * QueryDenomDecimalsRequest is the request type for the Query/DenomDecimals RPC
 * method.
 */
export interface QueryDenomDecimalsRequest {
    /** denoms can be empty to query all denom decimals */
    denoms: string[];
}
/**
 * QueryDenomDecimalsRequest is the response type for the Query/DenomDecimals
 * RPC method.
 */
export interface QueryDenomDecimalsResponse {
    denomDecimals: DenomDecimals[];
}
/**
 * QueryAggregateMarketVolumesRequest is the request type for the
 * Query/AggregateMarketVolumes RPC method.
 */
export interface QueryAggregateMarketVolumesRequest {
    marketIds: string[];
}
/**
 * QueryAggregateMarketVolumesResponse is the response type for the
 * Query/AggregateMarketVolumes RPC method.
 */
export interface QueryAggregateMarketVolumesResponse {
    /** the aggregate volumes for the entire market */
    volumes: MarketVolume[];
}
/**
 * QuerySubaccountDepositsRequest is the request type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositRequest {
    subaccountId: string;
    denom: string;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositResponse {
    deposits: Deposit | undefined;
}
/**
 * QuerySpotMarketsRequest is the request type for the Query/SpotMarkets RPC
 * method.
 */
export interface QuerySpotMarketsRequest {
    /** Status of the market, for convenience it is set to string - not enum */
    status: string;
    /** Filter by market IDs */
    marketIds: string[];
}
/**
 * QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC
 * method.
 */
export interface QuerySpotMarketsResponse {
    markets: SpotMarket[];
}
/**
 * QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC
 * method.
 */
export interface QuerySpotMarketRequest {
    /** Market ID for the market */
    marketId: string;
}
/**
 * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
 * method.
 */
export interface QuerySpotMarketResponse {
    market: SpotMarket | undefined;
}
/**
 * QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC
 * method.
 */
export interface QuerySpotOrderbookRequest {
    /** Market ID for the market */
    marketId: string;
    limit: string;
    orderSide: OrderSide;
    limitCumulativeNotional: string;
    limitCumulativeQuantity: string;
}
/**
 * QuerySpotOrderbookResponse is the response type for the Query/SpotOrderbook
 * RPC method.
 */
export interface QuerySpotOrderbookResponse {
    buysPriceLevel: Level[];
    sellsPriceLevel: Level[];
}
export interface FullSpotMarket {
    market: SpotMarket | undefined;
    /**
     * mid_price_and_tob defines the mid price for this market and the best ask
     * and bid orders
     */
    midPriceAndTob: MidPriceAndTOB | undefined;
}
/**
 * QueryFullSpotMarketsRequest is the request type for the Query/FullSpotMarkets
 * RPC method.
 */
export interface QueryFullSpotMarketsRequest {
    /** Status of the market, for convenience it is set to string - not enum */
    status: string;
    /** Filter by market IDs */
    marketIds: string[];
    /**
     * Flag to return the markets mid price and top of the book buy and sell
     * orders.
     */
    withMidPriceAndTob: boolean;
}
/**
 * QueryFullSpotMarketsResponse is the response type for the
 * Query/FullSpotMarkets RPC method.
 */
export interface QueryFullSpotMarketsResponse {
    markets: FullSpotMarket[];
}
/**
 * QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC
 * method.
 */
export interface QueryFullSpotMarketRequest {
    /** Market ID for the market */
    marketId: string;
    /**
     * Flag to return the markets mid price and top of the book buy and sell
     * orders.
     */
    withMidPriceAndTob: boolean;
}
/**
 * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
 * method.
 */
export interface QueryFullSpotMarketResponse {
    market: FullSpotMarket | undefined;
}
/**
 * QuerySpotOrdersByHashesRequest is the request type for the
 * Query/SpotOrdersByHashes RPC method.
 */
export interface QuerySpotOrdersByHashesRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
    /** the order hashes */
    orderHashes: string[];
}
/**
 * QuerySpotOrdersByHashesResponse is the response type for the
 * Query/SpotOrdersByHashes RPC method.
 */
export interface QuerySpotOrdersByHashesResponse {
    orders: TrimmedSpotLimitOrder[];
}
/**
 * QueryTraderSpotOrdersRequest is the request type for the
 * Query/TraderSpotOrders RPC method.
 */
export interface QueryTraderSpotOrdersRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
}
/**
 * QueryAccountAddressSpotOrdersRequest is the request type for the
 * Query/AccountAddressSpotOrders RPC method.
 */
export interface QueryAccountAddressSpotOrdersRequest {
    /** Market ID for the market */
    marketId: string;
    /** Account address of the trader */
    accountAddress: string;
}
export interface TrimmedSpotLimitOrder {
    /** price of the order */
    price: string;
    /** quantity of the order */
    quantity: string;
    /** the amount of the quantity remaining fillable */
    fillable: string;
    /** true if the order is a buy */
    isBuy: boolean;
    orderHash: string;
}
/**
 * QueryTraderSpotOrdersResponse is the response type for the
 * Query/TraderSpotOrders RPC method.
 */
export interface QueryTraderSpotOrdersResponse {
    orders: TrimmedSpotLimitOrder[];
}
/**
 * QueryAccountAddressSpotOrdersResponse is the response type for the
 * Query/AccountAddressSpotOrders RPC method.
 */
export interface QueryAccountAddressSpotOrdersResponse {
    orders: TrimmedSpotLimitOrder[];
}
/**
 * QuerySpotMidPriceAndTOBRequest is the request type for the
 * Query/SpotMidPriceAndTOB RPC method.
 */
export interface QuerySpotMidPriceAndTOBRequest {
    /** Market ID for the market */
    marketId: string;
}
/**
 * QuerySpotMidPriceAndTOBResponse is the response type for the
 * Query/SpotMidPriceAndTOB RPC method.
 */
export interface QuerySpotMidPriceAndTOBResponse {
    /** mid price of the market */
    midPrice: string;
    /** best buy price of the market */
    bestBuyPrice: string;
    /** best sell price of the market */
    bestSellPrice: string;
}
/**
 * QueryDerivativeMidPriceAndTOBRequest is the request type for the
 * Query/GetDerivativeMidPriceAndTOB RPC method.
 */
export interface QueryDerivativeMidPriceAndTOBRequest {
    /** Market ID for the market */
    marketId: string;
}
/**
 * QueryDerivativeMidPriceAndTOBResponse is the response type for the
 * Query/GetDerivativeMidPriceAndTOB RPC method.
 */
export interface QueryDerivativeMidPriceAndTOBResponse {
    /** mid price of the market */
    midPrice: string;
    /** best buy price of the market */
    bestBuyPrice: string;
    /** best sell price of the market */
    bestSellPrice: string;
}
/**
 * QueryDerivativeOrderbookRequest is the request type for the
 * Query/DerivativeOrderbook RPC method.
 */
export interface QueryDerivativeOrderbookRequest {
    /** Market ID for the market */
    marketId: string;
    limit: string;
    limitCumulativeNotional: string;
}
/**
 * QueryDerivativeOrderbookResponse is the response type for the
 * Query/DerivativeOrderbook RPC method.
 */
export interface QueryDerivativeOrderbookResponse {
    buysPriceLevel: Level[];
    sellsPriceLevel: Level[];
}
/**
 * QueryTraderSpotOrdersToCancelUpToAmountRequest is the request type for the
 * Query/TraderSpotOrdersToCancelUpToAmountRequest RPC method.
 */
export interface QueryTraderSpotOrdersToCancelUpToAmountRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
    /** the base amount to cancel (free up) */
    baseAmount: string;
    /** the quote amount to cancel (free up) */
    quoteAmount: string;
    /** The cancellation strategy */
    strategy: CancellationStrategy;
    /**
     * The reference price for the cancellation strategy, e.g. mid price or mark
     * price
     */
    referencePrice: string;
}
/**
 * QueryTraderDerivativeOrdersToCancelUpToAmountRequest is the request type for
 * the Query/TraderDerivativeOrdersToCancelUpToAmountRequest RPC method.
 */
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
    /** the quote amount to cancel (free up) */
    quoteAmount: string;
    /** The cancellation strategy */
    strategy: CancellationStrategy;
    /**
     * The reference price for the cancellation strategy, e.g. mid price or mark
     * price
     */
    referencePrice: string;
}
/**
 * QueryTraderDerivativeOrdersRequest is the request type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeOrdersRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
}
/**
 * QueryAccountAddressSpotOrdersRequest is the request type for the
 * Query/AccountAddressDerivativeOrders RPC method.
 */
export interface QueryAccountAddressDerivativeOrdersRequest {
    /** Market ID for the market */
    marketId: string;
    /** Account address of the trader */
    accountAddress: string;
}
export interface TrimmedDerivativeLimitOrder {
    /** price of the order */
    price: string;
    /** quantity of the order */
    quantity: string;
    /** margin of the order */
    margin: string;
    /** the amount of the quantity remaining fillable */
    fillable: string;
    /** true if the order is a buy */
    isBuy: boolean;
    orderHash: string;
}
/**
 * QueryTraderDerivativeOrdersResponse is the response type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeOrdersResponse {
    orders: TrimmedDerivativeLimitOrder[];
}
/**
 * QueryAccountAddressDerivativeOrdersResponse is the response type for the
 * Query/AccountAddressDerivativeOrders RPC method.
 */
export interface QueryAccountAddressDerivativeOrdersResponse {
    orders: TrimmedDerivativeLimitOrder[];
}
/**
 * QueryTraderDerivativeOrdersRequest is the request type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryDerivativeOrdersByHashesRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
    /** the order hashes */
    orderHashes: string[];
}
/**
 * QueryDerivativeOrdersByHashesResponse is the response type for the
 * Query/DerivativeOrdersByHashes RPC method.
 */
export interface QueryDerivativeOrdersByHashesResponse {
    orders: TrimmedDerivativeLimitOrder[];
}
/**
 * QueryDerivativeMarketsRequest is the request type for the
 * Query/DerivativeMarkets RPC method.
 */
export interface QueryDerivativeMarketsRequest {
    /** Status of the market, for convenience it is set to string - not enum */
    status: string;
    /** Filter by market IDs */
    marketIds: string[];
    /**
     * Flag to return the markets mid price and top of the book buy and sell
     * orders.
     */
    withMidPriceAndTob: boolean;
}
export interface PriceLevel {
    price: string;
    /** quantity */
    quantity: string;
}
export interface PerpetualMarketState {
    marketInfo: PerpetualMarketInfo | undefined;
    fundingInfo: PerpetualMarketFunding | undefined;
}
export interface FullDerivativeMarket {
    market: DerivativeMarket | undefined;
    perpetualInfo?: PerpetualMarketState | undefined;
    futuresInfo?: ExpiryFuturesMarketInfo | undefined;
    markPrice: string;
    /**
     * mid_price_and_tob defines the mid price for this market and the best ask
     * and bid orders
     */
    midPriceAndTob: MidPriceAndTOB | undefined;
}
/**
 * QueryDerivativeMarketsResponse is the response type for the
 * Query/DerivativeMarkets RPC method.
 */
export interface QueryDerivativeMarketsResponse {
    markets: FullDerivativeMarket[];
}
/**
 * QueryDerivativeMarketRequest is the request type for the
 * Query/DerivativeMarket RPC method.
 */
export interface QueryDerivativeMarketRequest {
    /** Market ID for the market */
    marketId: string;
}
/**
 * QueryDerivativeMarketResponse is the response type for the
 * Query/DerivativeMarket RPC method.
 */
export interface QueryDerivativeMarketResponse {
    market: FullDerivativeMarket | undefined;
}
/**
 * QueryDerivativeMarketAddressRequest is the request type for the
 * Query/DerivativeMarketAddress RPC method.
 */
export interface QueryDerivativeMarketAddressRequest {
    /** Market ID for the market */
    marketId: string;
}
/**
 * QueryDerivativeMarketAddressResponse is the response type for the
 * Query/DerivativeMarketAddress RPC method.
 */
export interface QueryDerivativeMarketAddressResponse {
    /** address for the market */
    address: string;
    /** subaccountID for the market */
    subaccountId: string;
}
/**
 * QuerySubaccountTradeNonceRequest is the request type for the
 * Query/SubaccountTradeNonce RPC method.
 */
export interface QuerySubaccountTradeNonceRequest {
    subaccountId: string;
}
/**
 * QuerySubaccountPositionsRequest is the request type for the
 * Query/SubaccountPositions RPC method.
 */
export interface QuerySubaccountPositionsRequest {
    subaccountId: string;
}
/**
 * QuerySubaccountPositionInMarketRequest is the request type for the
 * Query/SubaccountPositionInMarket RPC method.
 */
export interface QuerySubaccountPositionInMarketRequest {
    subaccountId: string;
    marketId: string;
}
/**
 * QuerySubaccountEffectivePositionInMarketRequest is the request type for the
 * Query/SubaccountEffectivePositionInMarket RPC method.
 */
export interface QuerySubaccountEffectivePositionInMarketRequest {
    subaccountId: string;
    marketId: string;
}
/**
 * QuerySubaccountOrderMetadataRequest is the request type for the
 * Query/SubaccountOrderMetadata RPC method.
 */
export interface QuerySubaccountOrderMetadataRequest {
    subaccountId: string;
}
/**
 * QuerySubaccountPositionsResponse is the response type for the
 * Query/SubaccountPositions RPC method.
 */
export interface QuerySubaccountPositionsResponse {
    state: DerivativePosition[];
}
/**
 * QuerySubaccountPositionInMarketResponse is the response type for the
 * Query/SubaccountPositionInMarket RPC method.
 */
export interface QuerySubaccountPositionInMarketResponse {
    state: Position | undefined;
}
export interface EffectivePosition {
    isLong: boolean;
    quantity: string;
    entryPrice: string;
    effectiveMargin: string;
}
/**
 * QuerySubaccountEffectivePositionInMarketResponse is the response type for the
 * Query/SubaccountEffectivePositionInMarket RPC method.
 */
export interface QuerySubaccountEffectivePositionInMarketResponse {
    state: EffectivePosition | undefined;
}
/**
 * QueryPerpetualMarketInfoRequest is the request type for the
 * Query/PerpetualMarketInfo RPC method.
 */
export interface QueryPerpetualMarketInfoRequest {
    marketId: string;
}
/**
 * QueryPerpetualMarketInfoResponse is the response type for the
 * Query/PerpetualMarketInfo RPC method.
 */
export interface QueryPerpetualMarketInfoResponse {
    info: PerpetualMarketInfo | undefined;
}
/**
 * QueryExpiryFuturesMarketInfoRequest is the request type for the Query/
 * ExpiryFuturesMarketInfo RPC method.
 */
export interface QueryExpiryFuturesMarketInfoRequest {
    marketId: string;
}
/**
 * QueryExpiryFuturesMarketInfoResponse is the response type for the Query/
 * ExpiryFuturesMarketInfo RPC method.
 */
export interface QueryExpiryFuturesMarketInfoResponse {
    info: ExpiryFuturesMarketInfo | undefined;
}
/**
 * QueryPerpetualMarketFundingRequest is the request type for the
 * Query/PerpetualMarketFunding RPC method.
 */
export interface QueryPerpetualMarketFundingRequest {
    marketId: string;
}
/**
 * QueryPerpetualMarketFundingResponse is the response type for the
 * Query/PerpetualMarketFunding RPC method.
 */
export interface QueryPerpetualMarketFundingResponse {
    state: PerpetualMarketFunding | undefined;
}
/**
 * QuerySubaccountOrderMetadataResponse is the response type for the
 * Query/SubaccountOrderMetadata RPC method.
 */
export interface QuerySubaccountOrderMetadataResponse {
    metadata: SubaccountOrderbookMetadataWithMarket[];
}
/**
 * QuerySubaccountTradeNonceResponse is the response type for the
 * Query/SubaccountTradeNonce RPC method.
 */
export interface QuerySubaccountTradeNonceResponse {
    nonce: number;
}
/**
 * QueryModuleStateRequest is the request type for the Query/ExchangeModuleState
 * RPC method.
 */
export interface QueryModuleStateRequest {
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/ExchangeModuleState RPC method.
 */
export interface QueryModuleStateResponse {
    state: GenesisState | undefined;
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequest {
}
/**
 * QueryPositionsResponse is the response type for the Query/Positions RPC
 * method.
 */
export interface QueryPositionsResponse {
    state: DerivativePosition[];
}
/**
 * QueryTradeRewardPointsRequest is the request type for the
 * Query/TradeRewardPoints RPC method.
 */
export interface QueryTradeRewardPointsRequest {
    accounts: string[];
    pendingPoolTimestamp: string;
}
/**
 * QueryTradeRewardPointsResponse is the response type for the
 * Query/TradeRewardPoints RPC method.
 */
export interface QueryTradeRewardPointsResponse {
    accountTradeRewardPoints: string[];
}
/**
 * QueryTradeRewardCampaignRequest is the request type for the
 * Query/TradeRewardCampaign RPC method.
 */
export interface QueryTradeRewardCampaignRequest {
}
/**
 * QueryTradeRewardCampaignResponse is the response type for the
 * Query/TradeRewardCampaign RPC method.
 */
export interface QueryTradeRewardCampaignResponse {
    tradingRewardCampaignInfo: TradingRewardCampaignInfo | undefined;
    tradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    totalTradeRewardPoints: string;
    pendingTradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    pendingTotalTradeRewardPoints: string[];
}
/**
 * QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM
 * RPC method.
 */
export interface QueryIsOptedOutOfRewardsRequest {
    account: string;
}
/**
 * QueryIsRegisteredDMMResponse is the response type for the
 * Query/IsRegisteredDMM RPC method.
 */
export interface QueryIsOptedOutOfRewardsResponse {
    isOptedOut: boolean;
}
/**
 * QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs
 * RPC method.
 */
export interface QueryOptedOutOfRewardsAccountsRequest {
}
/**
 * QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs
 * RPC method.
 */
export interface QueryOptedOutOfRewardsAccountsResponse {
    accounts: string[];
}
/**
 * QueryFeeDiscountAccountInfoRequest is the request type for the
 * Query/FeeDiscountAccountInfo RPC method.
 */
export interface QueryFeeDiscountAccountInfoRequest {
    account: string;
}
/**
 * QueryFeeDiscountAccountInfoResponse is the response type for the
 * Query/FeeDiscountAccountInfo RPC method.
 */
export interface QueryFeeDiscountAccountInfoResponse {
    tierLevel: string;
    accountInfo: FeeDiscountTierInfo | undefined;
    accountTtl: FeeDiscountTierTTL | undefined;
}
/**
 * QueryFeeDiscountScheduleRequest is the request type for the
 * Query/FeeDiscountSchedule RPC method.
 */
export interface QueryFeeDiscountScheduleRequest {
}
/**
 * QueryFeeDiscountScheduleResponse is the response type for the
 * Query/FeeDiscountSchedule RPC method.
 */
export interface QueryFeeDiscountScheduleResponse {
    feeDiscountSchedule: FeeDiscountSchedule | undefined;
}
/**
 * QueryBalanceMismatchesRequest is the request type for the
 * Query/QueryBalanceMismatches RPC method.
 */
export interface QueryBalanceMismatchesRequest {
    dustFactor: string;
}
export interface BalanceMismatch {
    subaccountId: string;
    denom: string;
    available: string;
    total: string;
    balanceHold: string;
    expectedTotal: string;
    difference: string;
}
/**
 * QueryBalanceMismatchesResponse is the response type for the
 * Query/QueryBalanceMismatches RPC method.
 */
export interface QueryBalanceMismatchesResponse {
    balanceMismatches: BalanceMismatch[];
}
/**
 * QueryBalanceWithBalanceHoldsRequest is the request type for the
 * Query/QueryBalanceWithBalanceHolds RPC method.
 */
export interface QueryBalanceWithBalanceHoldsRequest {
}
export interface BalanceWithMarginHold {
    subaccountId: string;
    denom: string;
    available: string;
    total: string;
    balanceHold: string;
}
/**
 * QueryBalanceWithBalanceHoldsResponse is the response type for the
 * Query/QueryBalanceWithBalanceHolds RPC method.
 */
export interface QueryBalanceWithBalanceHoldsResponse {
    balanceWithBalanceHolds: BalanceWithMarginHold[];
}
/**
 * QueryFeeDiscountTierStatisticsRequest is the request type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsRequest {
}
export interface TierStatistic {
    tier: string;
    count: string;
}
/**
 * QueryFeeDiscountTierStatisticsResponse is the response type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsResponse {
    statistics: TierStatistic[];
}
/**
 * MitoVaultInfosRequest is the request type for the Query/MitoVaultInfos RPC
 * method.
 */
export interface MitoVaultInfosRequest {
}
/**
 * MitoVaultInfosResponse is the response type for the Query/MitoVaultInfos RPC
 * method.
 */
export interface MitoVaultInfosResponse {
    masterAddresses: string[];
    derivativeAddresses: string[];
    spotAddresses: string[];
    cw20Addresses: string[];
}
/** QueryMarketIDFromVaultRequest is the request type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultRequest {
    vaultAddress: string;
}
/**
 * QueryMarketIDFromVaultResponse is the response type for the
 * Query/QueryMarketIDFromVault RPC method.
 */
export interface QueryMarketIDFromVaultResponse {
    marketId: string;
}
export interface QueryHistoricalTradeRecordsRequest {
    marketId: string;
}
export interface QueryHistoricalTradeRecordsResponse {
    tradeRecords: TradeRecords[];
}
/**
 * TradeHistoryOptions are the optional params for Query/MarketVolatility RPC
 * method.
 */
export interface TradeHistoryOptions {
    /** TradeGroupingSec of 0 means use the chain's default grouping */
    tradeGroupingSec: string;
    /**
     * MaxAge restricts the trade records oldest age in seconds from the current block time to consider.
     * A value of 0 means use all the records present on the chain.
     */
    maxAge: string;
    /**
     * If IncludeRawHistory is true, the raw underlying data used for the
     * computation is included in the response
     */
    includeRawHistory: boolean;
    /**
     * If IncludeMetadata is true, metadata on the computation is included in the
     * response
     */
    includeMetadata: boolean;
}
/**
 * QueryMarketVolatilityRequest are the request params for the
 * Query/MarketVolatility RPC method.
 */
export interface QueryMarketVolatilityRequest {
    marketId: string;
    tradeHistoryOptions: TradeHistoryOptions | undefined;
}
/**
 * QueryMarketVolatilityResponse is the response type for the
 * Query/MarketVolatility RPC method.
 */
export interface QueryMarketVolatilityResponse {
    volatility: string;
    historyMetadata: MetadataStatistics | undefined;
    rawHistory: TradeRecord[];
}
/**
 * QuerBinaryMarketsRequest is the request type for the Query/BinaryMarkets RPC
 * method.
 */
export interface QueryBinaryMarketsRequest {
    /** Status of the market, for convenience it is set to string - not enum */
    status: string;
}
/**
 * QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets
 * RPC method.
 */
export interface QueryBinaryMarketsResponse {
    markets: BinaryOptionsMarket[];
}
/**
 * QueryConditionalOrdersRequest is the request type for the
 * Query/ConditionalOrders RPC method.
 */
export interface QueryTraderDerivativeConditionalOrdersRequest {
    subaccountId: string;
    marketId: string;
}
export interface TrimmedDerivativeConditionalOrder {
    /** price of the order */
    price: string;
    /** quantity of the order */
    quantity: string;
    /** margin of the order */
    margin: string;
    /** price to trigger the order */
    triggerPrice: string;
    /** true if the order is a buy */
    isBuy: boolean;
    isLimit: boolean;
    orderHash: string;
}
/**
 * QueryTraderDerivativeOrdersResponse is the response type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeConditionalOrdersResponse {
    orders: TrimmedDerivativeConditionalOrder[];
}
export interface QueryMarketAtomicExecutionFeeMultiplierRequest {
    marketId: string;
}
export interface QueryMarketAtomicExecutionFeeMultiplierResponse {
    multiplier: string;
}
export declare const Subaccount: {
    encode(message: Subaccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subaccount;
    fromJSON(object: any): Subaccount;
    toJSON(message: Subaccount): unknown;
    create(base?: DeepPartial<Subaccount>): Subaccount;
    fromPartial(object: DeepPartial<Subaccount>): Subaccount;
};
export declare const QuerySubaccountOrdersRequest: {
    encode(message: QuerySubaccountOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountOrdersRequest;
    fromJSON(object: any): QuerySubaccountOrdersRequest;
    toJSON(message: QuerySubaccountOrdersRequest): unknown;
    create(base?: DeepPartial<QuerySubaccountOrdersRequest>): QuerySubaccountOrdersRequest;
    fromPartial(object: DeepPartial<QuerySubaccountOrdersRequest>): QuerySubaccountOrdersRequest;
};
export declare const QuerySubaccountOrdersResponse: {
    encode(message: QuerySubaccountOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountOrdersResponse;
    fromJSON(object: any): QuerySubaccountOrdersResponse;
    toJSON(message: QuerySubaccountOrdersResponse): unknown;
    create(base?: DeepPartial<QuerySubaccountOrdersResponse>): QuerySubaccountOrdersResponse;
    fromPartial(object: DeepPartial<QuerySubaccountOrdersResponse>): QuerySubaccountOrdersResponse;
};
export declare const SubaccountOrderbookMetadataWithMarket: {
    encode(message: SubaccountOrderbookMetadataWithMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountOrderbookMetadataWithMarket;
    fromJSON(object: any): SubaccountOrderbookMetadataWithMarket;
    toJSON(message: SubaccountOrderbookMetadataWithMarket): unknown;
    create(base?: DeepPartial<SubaccountOrderbookMetadataWithMarket>): SubaccountOrderbookMetadataWithMarket;
    fromPartial(object: DeepPartial<SubaccountOrderbookMetadataWithMarket>): SubaccountOrderbookMetadataWithMarket;
};
export declare const QueryExchangeParamsRequest: {
    encode(_: QueryExchangeParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeParamsRequest;
    fromJSON(_: any): QueryExchangeParamsRequest;
    toJSON(_: QueryExchangeParamsRequest): unknown;
    create(base?: DeepPartial<QueryExchangeParamsRequest>): QueryExchangeParamsRequest;
    fromPartial(_: DeepPartial<QueryExchangeParamsRequest>): QueryExchangeParamsRequest;
};
export declare const QueryExchangeParamsResponse: {
    encode(message: QueryExchangeParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeParamsResponse;
    fromJSON(object: any): QueryExchangeParamsResponse;
    toJSON(message: QueryExchangeParamsResponse): unknown;
    create(base?: DeepPartial<QueryExchangeParamsResponse>): QueryExchangeParamsResponse;
    fromPartial(object: DeepPartial<QueryExchangeParamsResponse>): QueryExchangeParamsResponse;
};
export declare const QuerySubaccountDepositsRequest: {
    encode(message: QuerySubaccountDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountDepositsRequest;
    fromJSON(object: any): QuerySubaccountDepositsRequest;
    toJSON(message: QuerySubaccountDepositsRequest): unknown;
    create(base?: DeepPartial<QuerySubaccountDepositsRequest>): QuerySubaccountDepositsRequest;
    fromPartial(object: DeepPartial<QuerySubaccountDepositsRequest>): QuerySubaccountDepositsRequest;
};
export declare const QuerySubaccountDepositsResponse: {
    encode(message: QuerySubaccountDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountDepositsResponse;
    fromJSON(object: any): QuerySubaccountDepositsResponse;
    toJSON(message: QuerySubaccountDepositsResponse): unknown;
    create(base?: DeepPartial<QuerySubaccountDepositsResponse>): QuerySubaccountDepositsResponse;
    fromPartial(object: DeepPartial<QuerySubaccountDepositsResponse>): QuerySubaccountDepositsResponse;
};
export declare const QuerySubaccountDepositsResponse_DepositsEntry: {
    encode(message: QuerySubaccountDepositsResponse_DepositsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountDepositsResponse_DepositsEntry;
    fromJSON(object: any): QuerySubaccountDepositsResponse_DepositsEntry;
    toJSON(message: QuerySubaccountDepositsResponse_DepositsEntry): unknown;
    create(base?: DeepPartial<QuerySubaccountDepositsResponse_DepositsEntry>): QuerySubaccountDepositsResponse_DepositsEntry;
    fromPartial(object: DeepPartial<QuerySubaccountDepositsResponse_DepositsEntry>): QuerySubaccountDepositsResponse_DepositsEntry;
};
export declare const QueryExchangeBalancesRequest: {
    encode(_: QueryExchangeBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeBalancesRequest;
    fromJSON(_: any): QueryExchangeBalancesRequest;
    toJSON(_: QueryExchangeBalancesRequest): unknown;
    create(base?: DeepPartial<QueryExchangeBalancesRequest>): QueryExchangeBalancesRequest;
    fromPartial(_: DeepPartial<QueryExchangeBalancesRequest>): QueryExchangeBalancesRequest;
};
export declare const QueryExchangeBalancesResponse: {
    encode(message: QueryExchangeBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeBalancesResponse;
    fromJSON(object: any): QueryExchangeBalancesResponse;
    toJSON(message: QueryExchangeBalancesResponse): unknown;
    create(base?: DeepPartial<QueryExchangeBalancesResponse>): QueryExchangeBalancesResponse;
    fromPartial(object: DeepPartial<QueryExchangeBalancesResponse>): QueryExchangeBalancesResponse;
};
export declare const QueryAggregateVolumeRequest: {
    encode(message: QueryAggregateVolumeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVolumeRequest;
    fromJSON(object: any): QueryAggregateVolumeRequest;
    toJSON(message: QueryAggregateVolumeRequest): unknown;
    create(base?: DeepPartial<QueryAggregateVolumeRequest>): QueryAggregateVolumeRequest;
    fromPartial(object: DeepPartial<QueryAggregateVolumeRequest>): QueryAggregateVolumeRequest;
};
export declare const QueryAggregateVolumeResponse: {
    encode(message: QueryAggregateVolumeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVolumeResponse;
    fromJSON(object: any): QueryAggregateVolumeResponse;
    toJSON(message: QueryAggregateVolumeResponse): unknown;
    create(base?: DeepPartial<QueryAggregateVolumeResponse>): QueryAggregateVolumeResponse;
    fromPartial(object: DeepPartial<QueryAggregateVolumeResponse>): QueryAggregateVolumeResponse;
};
export declare const QueryAggregateVolumesRequest: {
    encode(message: QueryAggregateVolumesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVolumesRequest;
    fromJSON(object: any): QueryAggregateVolumesRequest;
    toJSON(message: QueryAggregateVolumesRequest): unknown;
    create(base?: DeepPartial<QueryAggregateVolumesRequest>): QueryAggregateVolumesRequest;
    fromPartial(object: DeepPartial<QueryAggregateVolumesRequest>): QueryAggregateVolumesRequest;
};
export declare const QueryAggregateVolumesResponse: {
    encode(message: QueryAggregateVolumesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVolumesResponse;
    fromJSON(object: any): QueryAggregateVolumesResponse;
    toJSON(message: QueryAggregateVolumesResponse): unknown;
    create(base?: DeepPartial<QueryAggregateVolumesResponse>): QueryAggregateVolumesResponse;
    fromPartial(object: DeepPartial<QueryAggregateVolumesResponse>): QueryAggregateVolumesResponse;
};
export declare const QueryAggregateMarketVolumeRequest: {
    encode(message: QueryAggregateMarketVolumeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateMarketVolumeRequest;
    fromJSON(object: any): QueryAggregateMarketVolumeRequest;
    toJSON(message: QueryAggregateMarketVolumeRequest): unknown;
    create(base?: DeepPartial<QueryAggregateMarketVolumeRequest>): QueryAggregateMarketVolumeRequest;
    fromPartial(object: DeepPartial<QueryAggregateMarketVolumeRequest>): QueryAggregateMarketVolumeRequest;
};
export declare const QueryAggregateMarketVolumeResponse: {
    encode(message: QueryAggregateMarketVolumeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateMarketVolumeResponse;
    fromJSON(object: any): QueryAggregateMarketVolumeResponse;
    toJSON(message: QueryAggregateMarketVolumeResponse): unknown;
    create(base?: DeepPartial<QueryAggregateMarketVolumeResponse>): QueryAggregateMarketVolumeResponse;
    fromPartial(object: DeepPartial<QueryAggregateMarketVolumeResponse>): QueryAggregateMarketVolumeResponse;
};
export declare const QueryDenomDecimalRequest: {
    encode(message: QueryDenomDecimalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomDecimalRequest;
    fromJSON(object: any): QueryDenomDecimalRequest;
    toJSON(message: QueryDenomDecimalRequest): unknown;
    create(base?: DeepPartial<QueryDenomDecimalRequest>): QueryDenomDecimalRequest;
    fromPartial(object: DeepPartial<QueryDenomDecimalRequest>): QueryDenomDecimalRequest;
};
export declare const QueryDenomDecimalResponse: {
    encode(message: QueryDenomDecimalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomDecimalResponse;
    fromJSON(object: any): QueryDenomDecimalResponse;
    toJSON(message: QueryDenomDecimalResponse): unknown;
    create(base?: DeepPartial<QueryDenomDecimalResponse>): QueryDenomDecimalResponse;
    fromPartial(object: DeepPartial<QueryDenomDecimalResponse>): QueryDenomDecimalResponse;
};
export declare const QueryDenomDecimalsRequest: {
    encode(message: QueryDenomDecimalsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomDecimalsRequest;
    fromJSON(object: any): QueryDenomDecimalsRequest;
    toJSON(message: QueryDenomDecimalsRequest): unknown;
    create(base?: DeepPartial<QueryDenomDecimalsRequest>): QueryDenomDecimalsRequest;
    fromPartial(object: DeepPartial<QueryDenomDecimalsRequest>): QueryDenomDecimalsRequest;
};
export declare const QueryDenomDecimalsResponse: {
    encode(message: QueryDenomDecimalsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomDecimalsResponse;
    fromJSON(object: any): QueryDenomDecimalsResponse;
    toJSON(message: QueryDenomDecimalsResponse): unknown;
    create(base?: DeepPartial<QueryDenomDecimalsResponse>): QueryDenomDecimalsResponse;
    fromPartial(object: DeepPartial<QueryDenomDecimalsResponse>): QueryDenomDecimalsResponse;
};
export declare const QueryAggregateMarketVolumesRequest: {
    encode(message: QueryAggregateMarketVolumesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateMarketVolumesRequest;
    fromJSON(object: any): QueryAggregateMarketVolumesRequest;
    toJSON(message: QueryAggregateMarketVolumesRequest): unknown;
    create(base?: DeepPartial<QueryAggregateMarketVolumesRequest>): QueryAggregateMarketVolumesRequest;
    fromPartial(object: DeepPartial<QueryAggregateMarketVolumesRequest>): QueryAggregateMarketVolumesRequest;
};
export declare const QueryAggregateMarketVolumesResponse: {
    encode(message: QueryAggregateMarketVolumesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateMarketVolumesResponse;
    fromJSON(object: any): QueryAggregateMarketVolumesResponse;
    toJSON(message: QueryAggregateMarketVolumesResponse): unknown;
    create(base?: DeepPartial<QueryAggregateMarketVolumesResponse>): QueryAggregateMarketVolumesResponse;
    fromPartial(object: DeepPartial<QueryAggregateMarketVolumesResponse>): QueryAggregateMarketVolumesResponse;
};
export declare const QuerySubaccountDepositRequest: {
    encode(message: QuerySubaccountDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountDepositRequest;
    fromJSON(object: any): QuerySubaccountDepositRequest;
    toJSON(message: QuerySubaccountDepositRequest): unknown;
    create(base?: DeepPartial<QuerySubaccountDepositRequest>): QuerySubaccountDepositRequest;
    fromPartial(object: DeepPartial<QuerySubaccountDepositRequest>): QuerySubaccountDepositRequest;
};
export declare const QuerySubaccountDepositResponse: {
    encode(message: QuerySubaccountDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountDepositResponse;
    fromJSON(object: any): QuerySubaccountDepositResponse;
    toJSON(message: QuerySubaccountDepositResponse): unknown;
    create(base?: DeepPartial<QuerySubaccountDepositResponse>): QuerySubaccountDepositResponse;
    fromPartial(object: DeepPartial<QuerySubaccountDepositResponse>): QuerySubaccountDepositResponse;
};
export declare const QuerySpotMarketsRequest: {
    encode(message: QuerySpotMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMarketsRequest;
    fromJSON(object: any): QuerySpotMarketsRequest;
    toJSON(message: QuerySpotMarketsRequest): unknown;
    create(base?: DeepPartial<QuerySpotMarketsRequest>): QuerySpotMarketsRequest;
    fromPartial(object: DeepPartial<QuerySpotMarketsRequest>): QuerySpotMarketsRequest;
};
export declare const QuerySpotMarketsResponse: {
    encode(message: QuerySpotMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMarketsResponse;
    fromJSON(object: any): QuerySpotMarketsResponse;
    toJSON(message: QuerySpotMarketsResponse): unknown;
    create(base?: DeepPartial<QuerySpotMarketsResponse>): QuerySpotMarketsResponse;
    fromPartial(object: DeepPartial<QuerySpotMarketsResponse>): QuerySpotMarketsResponse;
};
export declare const QuerySpotMarketRequest: {
    encode(message: QuerySpotMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMarketRequest;
    fromJSON(object: any): QuerySpotMarketRequest;
    toJSON(message: QuerySpotMarketRequest): unknown;
    create(base?: DeepPartial<QuerySpotMarketRequest>): QuerySpotMarketRequest;
    fromPartial(object: DeepPartial<QuerySpotMarketRequest>): QuerySpotMarketRequest;
};
export declare const QuerySpotMarketResponse: {
    encode(message: QuerySpotMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMarketResponse;
    fromJSON(object: any): QuerySpotMarketResponse;
    toJSON(message: QuerySpotMarketResponse): unknown;
    create(base?: DeepPartial<QuerySpotMarketResponse>): QuerySpotMarketResponse;
    fromPartial(object: DeepPartial<QuerySpotMarketResponse>): QuerySpotMarketResponse;
};
export declare const QuerySpotOrderbookRequest: {
    encode(message: QuerySpotOrderbookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotOrderbookRequest;
    fromJSON(object: any): QuerySpotOrderbookRequest;
    toJSON(message: QuerySpotOrderbookRequest): unknown;
    create(base?: DeepPartial<QuerySpotOrderbookRequest>): QuerySpotOrderbookRequest;
    fromPartial(object: DeepPartial<QuerySpotOrderbookRequest>): QuerySpotOrderbookRequest;
};
export declare const QuerySpotOrderbookResponse: {
    encode(message: QuerySpotOrderbookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotOrderbookResponse;
    fromJSON(object: any): QuerySpotOrderbookResponse;
    toJSON(message: QuerySpotOrderbookResponse): unknown;
    create(base?: DeepPartial<QuerySpotOrderbookResponse>): QuerySpotOrderbookResponse;
    fromPartial(object: DeepPartial<QuerySpotOrderbookResponse>): QuerySpotOrderbookResponse;
};
export declare const FullSpotMarket: {
    encode(message: FullSpotMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FullSpotMarket;
    fromJSON(object: any): FullSpotMarket;
    toJSON(message: FullSpotMarket): unknown;
    create(base?: DeepPartial<FullSpotMarket>): FullSpotMarket;
    fromPartial(object: DeepPartial<FullSpotMarket>): FullSpotMarket;
};
export declare const QueryFullSpotMarketsRequest: {
    encode(message: QueryFullSpotMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFullSpotMarketsRequest;
    fromJSON(object: any): QueryFullSpotMarketsRequest;
    toJSON(message: QueryFullSpotMarketsRequest): unknown;
    create(base?: DeepPartial<QueryFullSpotMarketsRequest>): QueryFullSpotMarketsRequest;
    fromPartial(object: DeepPartial<QueryFullSpotMarketsRequest>): QueryFullSpotMarketsRequest;
};
export declare const QueryFullSpotMarketsResponse: {
    encode(message: QueryFullSpotMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFullSpotMarketsResponse;
    fromJSON(object: any): QueryFullSpotMarketsResponse;
    toJSON(message: QueryFullSpotMarketsResponse): unknown;
    create(base?: DeepPartial<QueryFullSpotMarketsResponse>): QueryFullSpotMarketsResponse;
    fromPartial(object: DeepPartial<QueryFullSpotMarketsResponse>): QueryFullSpotMarketsResponse;
};
export declare const QueryFullSpotMarketRequest: {
    encode(message: QueryFullSpotMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFullSpotMarketRequest;
    fromJSON(object: any): QueryFullSpotMarketRequest;
    toJSON(message: QueryFullSpotMarketRequest): unknown;
    create(base?: DeepPartial<QueryFullSpotMarketRequest>): QueryFullSpotMarketRequest;
    fromPartial(object: DeepPartial<QueryFullSpotMarketRequest>): QueryFullSpotMarketRequest;
};
export declare const QueryFullSpotMarketResponse: {
    encode(message: QueryFullSpotMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFullSpotMarketResponse;
    fromJSON(object: any): QueryFullSpotMarketResponse;
    toJSON(message: QueryFullSpotMarketResponse): unknown;
    create(base?: DeepPartial<QueryFullSpotMarketResponse>): QueryFullSpotMarketResponse;
    fromPartial(object: DeepPartial<QueryFullSpotMarketResponse>): QueryFullSpotMarketResponse;
};
export declare const QuerySpotOrdersByHashesRequest: {
    encode(message: QuerySpotOrdersByHashesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotOrdersByHashesRequest;
    fromJSON(object: any): QuerySpotOrdersByHashesRequest;
    toJSON(message: QuerySpotOrdersByHashesRequest): unknown;
    create(base?: DeepPartial<QuerySpotOrdersByHashesRequest>): QuerySpotOrdersByHashesRequest;
    fromPartial(object: DeepPartial<QuerySpotOrdersByHashesRequest>): QuerySpotOrdersByHashesRequest;
};
export declare const QuerySpotOrdersByHashesResponse: {
    encode(message: QuerySpotOrdersByHashesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotOrdersByHashesResponse;
    fromJSON(object: any): QuerySpotOrdersByHashesResponse;
    toJSON(message: QuerySpotOrdersByHashesResponse): unknown;
    create(base?: DeepPartial<QuerySpotOrdersByHashesResponse>): QuerySpotOrdersByHashesResponse;
    fromPartial(object: DeepPartial<QuerySpotOrdersByHashesResponse>): QuerySpotOrdersByHashesResponse;
};
export declare const QueryTraderSpotOrdersRequest: {
    encode(message: QueryTraderSpotOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderSpotOrdersRequest;
    fromJSON(object: any): QueryTraderSpotOrdersRequest;
    toJSON(message: QueryTraderSpotOrdersRequest): unknown;
    create(base?: DeepPartial<QueryTraderSpotOrdersRequest>): QueryTraderSpotOrdersRequest;
    fromPartial(object: DeepPartial<QueryTraderSpotOrdersRequest>): QueryTraderSpotOrdersRequest;
};
export declare const QueryAccountAddressSpotOrdersRequest: {
    encode(message: QueryAccountAddressSpotOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountAddressSpotOrdersRequest;
    fromJSON(object: any): QueryAccountAddressSpotOrdersRequest;
    toJSON(message: QueryAccountAddressSpotOrdersRequest): unknown;
    create(base?: DeepPartial<QueryAccountAddressSpotOrdersRequest>): QueryAccountAddressSpotOrdersRequest;
    fromPartial(object: DeepPartial<QueryAccountAddressSpotOrdersRequest>): QueryAccountAddressSpotOrdersRequest;
};
export declare const TrimmedSpotLimitOrder: {
    encode(message: TrimmedSpotLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrimmedSpotLimitOrder;
    fromJSON(object: any): TrimmedSpotLimitOrder;
    toJSON(message: TrimmedSpotLimitOrder): unknown;
    create(base?: DeepPartial<TrimmedSpotLimitOrder>): TrimmedSpotLimitOrder;
    fromPartial(object: DeepPartial<TrimmedSpotLimitOrder>): TrimmedSpotLimitOrder;
};
export declare const QueryTraderSpotOrdersResponse: {
    encode(message: QueryTraderSpotOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderSpotOrdersResponse;
    fromJSON(object: any): QueryTraderSpotOrdersResponse;
    toJSON(message: QueryTraderSpotOrdersResponse): unknown;
    create(base?: DeepPartial<QueryTraderSpotOrdersResponse>): QueryTraderSpotOrdersResponse;
    fromPartial(object: DeepPartial<QueryTraderSpotOrdersResponse>): QueryTraderSpotOrdersResponse;
};
export declare const QueryAccountAddressSpotOrdersResponse: {
    encode(message: QueryAccountAddressSpotOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountAddressSpotOrdersResponse;
    fromJSON(object: any): QueryAccountAddressSpotOrdersResponse;
    toJSON(message: QueryAccountAddressSpotOrdersResponse): unknown;
    create(base?: DeepPartial<QueryAccountAddressSpotOrdersResponse>): QueryAccountAddressSpotOrdersResponse;
    fromPartial(object: DeepPartial<QueryAccountAddressSpotOrdersResponse>): QueryAccountAddressSpotOrdersResponse;
};
export declare const QuerySpotMidPriceAndTOBRequest: {
    encode(message: QuerySpotMidPriceAndTOBRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMidPriceAndTOBRequest;
    fromJSON(object: any): QuerySpotMidPriceAndTOBRequest;
    toJSON(message: QuerySpotMidPriceAndTOBRequest): unknown;
    create(base?: DeepPartial<QuerySpotMidPriceAndTOBRequest>): QuerySpotMidPriceAndTOBRequest;
    fromPartial(object: DeepPartial<QuerySpotMidPriceAndTOBRequest>): QuerySpotMidPriceAndTOBRequest;
};
export declare const QuerySpotMidPriceAndTOBResponse: {
    encode(message: QuerySpotMidPriceAndTOBResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMidPriceAndTOBResponse;
    fromJSON(object: any): QuerySpotMidPriceAndTOBResponse;
    toJSON(message: QuerySpotMidPriceAndTOBResponse): unknown;
    create(base?: DeepPartial<QuerySpotMidPriceAndTOBResponse>): QuerySpotMidPriceAndTOBResponse;
    fromPartial(object: DeepPartial<QuerySpotMidPriceAndTOBResponse>): QuerySpotMidPriceAndTOBResponse;
};
export declare const QueryDerivativeMidPriceAndTOBRequest: {
    encode(message: QueryDerivativeMidPriceAndTOBRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMidPriceAndTOBRequest;
    fromJSON(object: any): QueryDerivativeMidPriceAndTOBRequest;
    toJSON(message: QueryDerivativeMidPriceAndTOBRequest): unknown;
    create(base?: DeepPartial<QueryDerivativeMidPriceAndTOBRequest>): QueryDerivativeMidPriceAndTOBRequest;
    fromPartial(object: DeepPartial<QueryDerivativeMidPriceAndTOBRequest>): QueryDerivativeMidPriceAndTOBRequest;
};
export declare const QueryDerivativeMidPriceAndTOBResponse: {
    encode(message: QueryDerivativeMidPriceAndTOBResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMidPriceAndTOBResponse;
    fromJSON(object: any): QueryDerivativeMidPriceAndTOBResponse;
    toJSON(message: QueryDerivativeMidPriceAndTOBResponse): unknown;
    create(base?: DeepPartial<QueryDerivativeMidPriceAndTOBResponse>): QueryDerivativeMidPriceAndTOBResponse;
    fromPartial(object: DeepPartial<QueryDerivativeMidPriceAndTOBResponse>): QueryDerivativeMidPriceAndTOBResponse;
};
export declare const QueryDerivativeOrderbookRequest: {
    encode(message: QueryDerivativeOrderbookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeOrderbookRequest;
    fromJSON(object: any): QueryDerivativeOrderbookRequest;
    toJSON(message: QueryDerivativeOrderbookRequest): unknown;
    create(base?: DeepPartial<QueryDerivativeOrderbookRequest>): QueryDerivativeOrderbookRequest;
    fromPartial(object: DeepPartial<QueryDerivativeOrderbookRequest>): QueryDerivativeOrderbookRequest;
};
export declare const QueryDerivativeOrderbookResponse: {
    encode(message: QueryDerivativeOrderbookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeOrderbookResponse;
    fromJSON(object: any): QueryDerivativeOrderbookResponse;
    toJSON(message: QueryDerivativeOrderbookResponse): unknown;
    create(base?: DeepPartial<QueryDerivativeOrderbookResponse>): QueryDerivativeOrderbookResponse;
    fromPartial(object: DeepPartial<QueryDerivativeOrderbookResponse>): QueryDerivativeOrderbookResponse;
};
export declare const QueryTraderSpotOrdersToCancelUpToAmountRequest: {
    encode(message: QueryTraderSpotOrdersToCancelUpToAmountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    fromJSON(object: any): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    toJSON(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): unknown;
    create(base?: DeepPartial<QueryTraderSpotOrdersToCancelUpToAmountRequest>): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    fromPartial(object: DeepPartial<QueryTraderSpotOrdersToCancelUpToAmountRequest>): QueryTraderSpotOrdersToCancelUpToAmountRequest;
};
export declare const QueryTraderDerivativeOrdersToCancelUpToAmountRequest: {
    encode(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    fromJSON(object: any): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    toJSON(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): unknown;
    create(base?: DeepPartial<QueryTraderDerivativeOrdersToCancelUpToAmountRequest>): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    fromPartial(object: DeepPartial<QueryTraderDerivativeOrdersToCancelUpToAmountRequest>): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
};
export declare const QueryTraderDerivativeOrdersRequest: {
    encode(message: QueryTraderDerivativeOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderDerivativeOrdersRequest;
    fromJSON(object: any): QueryTraderDerivativeOrdersRequest;
    toJSON(message: QueryTraderDerivativeOrdersRequest): unknown;
    create(base?: DeepPartial<QueryTraderDerivativeOrdersRequest>): QueryTraderDerivativeOrdersRequest;
    fromPartial(object: DeepPartial<QueryTraderDerivativeOrdersRequest>): QueryTraderDerivativeOrdersRequest;
};
export declare const QueryAccountAddressDerivativeOrdersRequest: {
    encode(message: QueryAccountAddressDerivativeOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountAddressDerivativeOrdersRequest;
    fromJSON(object: any): QueryAccountAddressDerivativeOrdersRequest;
    toJSON(message: QueryAccountAddressDerivativeOrdersRequest): unknown;
    create(base?: DeepPartial<QueryAccountAddressDerivativeOrdersRequest>): QueryAccountAddressDerivativeOrdersRequest;
    fromPartial(object: DeepPartial<QueryAccountAddressDerivativeOrdersRequest>): QueryAccountAddressDerivativeOrdersRequest;
};
export declare const TrimmedDerivativeLimitOrder: {
    encode(message: TrimmedDerivativeLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrimmedDerivativeLimitOrder;
    fromJSON(object: any): TrimmedDerivativeLimitOrder;
    toJSON(message: TrimmedDerivativeLimitOrder): unknown;
    create(base?: DeepPartial<TrimmedDerivativeLimitOrder>): TrimmedDerivativeLimitOrder;
    fromPartial(object: DeepPartial<TrimmedDerivativeLimitOrder>): TrimmedDerivativeLimitOrder;
};
export declare const QueryTraderDerivativeOrdersResponse: {
    encode(message: QueryTraderDerivativeOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderDerivativeOrdersResponse;
    fromJSON(object: any): QueryTraderDerivativeOrdersResponse;
    toJSON(message: QueryTraderDerivativeOrdersResponse): unknown;
    create(base?: DeepPartial<QueryTraderDerivativeOrdersResponse>): QueryTraderDerivativeOrdersResponse;
    fromPartial(object: DeepPartial<QueryTraderDerivativeOrdersResponse>): QueryTraderDerivativeOrdersResponse;
};
export declare const QueryAccountAddressDerivativeOrdersResponse: {
    encode(message: QueryAccountAddressDerivativeOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountAddressDerivativeOrdersResponse;
    fromJSON(object: any): QueryAccountAddressDerivativeOrdersResponse;
    toJSON(message: QueryAccountAddressDerivativeOrdersResponse): unknown;
    create(base?: DeepPartial<QueryAccountAddressDerivativeOrdersResponse>): QueryAccountAddressDerivativeOrdersResponse;
    fromPartial(object: DeepPartial<QueryAccountAddressDerivativeOrdersResponse>): QueryAccountAddressDerivativeOrdersResponse;
};
export declare const QueryDerivativeOrdersByHashesRequest: {
    encode(message: QueryDerivativeOrdersByHashesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeOrdersByHashesRequest;
    fromJSON(object: any): QueryDerivativeOrdersByHashesRequest;
    toJSON(message: QueryDerivativeOrdersByHashesRequest): unknown;
    create(base?: DeepPartial<QueryDerivativeOrdersByHashesRequest>): QueryDerivativeOrdersByHashesRequest;
    fromPartial(object: DeepPartial<QueryDerivativeOrdersByHashesRequest>): QueryDerivativeOrdersByHashesRequest;
};
export declare const QueryDerivativeOrdersByHashesResponse: {
    encode(message: QueryDerivativeOrdersByHashesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeOrdersByHashesResponse;
    fromJSON(object: any): QueryDerivativeOrdersByHashesResponse;
    toJSON(message: QueryDerivativeOrdersByHashesResponse): unknown;
    create(base?: DeepPartial<QueryDerivativeOrdersByHashesResponse>): QueryDerivativeOrdersByHashesResponse;
    fromPartial(object: DeepPartial<QueryDerivativeOrdersByHashesResponse>): QueryDerivativeOrdersByHashesResponse;
};
export declare const QueryDerivativeMarketsRequest: {
    encode(message: QueryDerivativeMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketsRequest;
    fromJSON(object: any): QueryDerivativeMarketsRequest;
    toJSON(message: QueryDerivativeMarketsRequest): unknown;
    create(base?: DeepPartial<QueryDerivativeMarketsRequest>): QueryDerivativeMarketsRequest;
    fromPartial(object: DeepPartial<QueryDerivativeMarketsRequest>): QueryDerivativeMarketsRequest;
};
export declare const PriceLevel: {
    encode(message: PriceLevel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PriceLevel;
    fromJSON(object: any): PriceLevel;
    toJSON(message: PriceLevel): unknown;
    create(base?: DeepPartial<PriceLevel>): PriceLevel;
    fromPartial(object: DeepPartial<PriceLevel>): PriceLevel;
};
export declare const PerpetualMarketState: {
    encode(message: PerpetualMarketState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualMarketState;
    fromJSON(object: any): PerpetualMarketState;
    toJSON(message: PerpetualMarketState): unknown;
    create(base?: DeepPartial<PerpetualMarketState>): PerpetualMarketState;
    fromPartial(object: DeepPartial<PerpetualMarketState>): PerpetualMarketState;
};
export declare const FullDerivativeMarket: {
    encode(message: FullDerivativeMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FullDerivativeMarket;
    fromJSON(object: any): FullDerivativeMarket;
    toJSON(message: FullDerivativeMarket): unknown;
    create(base?: DeepPartial<FullDerivativeMarket>): FullDerivativeMarket;
    fromPartial(object: DeepPartial<FullDerivativeMarket>): FullDerivativeMarket;
};
export declare const QueryDerivativeMarketsResponse: {
    encode(message: QueryDerivativeMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketsResponse;
    fromJSON(object: any): QueryDerivativeMarketsResponse;
    toJSON(message: QueryDerivativeMarketsResponse): unknown;
    create(base?: DeepPartial<QueryDerivativeMarketsResponse>): QueryDerivativeMarketsResponse;
    fromPartial(object: DeepPartial<QueryDerivativeMarketsResponse>): QueryDerivativeMarketsResponse;
};
export declare const QueryDerivativeMarketRequest: {
    encode(message: QueryDerivativeMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketRequest;
    fromJSON(object: any): QueryDerivativeMarketRequest;
    toJSON(message: QueryDerivativeMarketRequest): unknown;
    create(base?: DeepPartial<QueryDerivativeMarketRequest>): QueryDerivativeMarketRequest;
    fromPartial(object: DeepPartial<QueryDerivativeMarketRequest>): QueryDerivativeMarketRequest;
};
export declare const QueryDerivativeMarketResponse: {
    encode(message: QueryDerivativeMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketResponse;
    fromJSON(object: any): QueryDerivativeMarketResponse;
    toJSON(message: QueryDerivativeMarketResponse): unknown;
    create(base?: DeepPartial<QueryDerivativeMarketResponse>): QueryDerivativeMarketResponse;
    fromPartial(object: DeepPartial<QueryDerivativeMarketResponse>): QueryDerivativeMarketResponse;
};
export declare const QueryDerivativeMarketAddressRequest: {
    encode(message: QueryDerivativeMarketAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketAddressRequest;
    fromJSON(object: any): QueryDerivativeMarketAddressRequest;
    toJSON(message: QueryDerivativeMarketAddressRequest): unknown;
    create(base?: DeepPartial<QueryDerivativeMarketAddressRequest>): QueryDerivativeMarketAddressRequest;
    fromPartial(object: DeepPartial<QueryDerivativeMarketAddressRequest>): QueryDerivativeMarketAddressRequest;
};
export declare const QueryDerivativeMarketAddressResponse: {
    encode(message: QueryDerivativeMarketAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketAddressResponse;
    fromJSON(object: any): QueryDerivativeMarketAddressResponse;
    toJSON(message: QueryDerivativeMarketAddressResponse): unknown;
    create(base?: DeepPartial<QueryDerivativeMarketAddressResponse>): QueryDerivativeMarketAddressResponse;
    fromPartial(object: DeepPartial<QueryDerivativeMarketAddressResponse>): QueryDerivativeMarketAddressResponse;
};
export declare const QuerySubaccountTradeNonceRequest: {
    encode(message: QuerySubaccountTradeNonceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountTradeNonceRequest;
    fromJSON(object: any): QuerySubaccountTradeNonceRequest;
    toJSON(message: QuerySubaccountTradeNonceRequest): unknown;
    create(base?: DeepPartial<QuerySubaccountTradeNonceRequest>): QuerySubaccountTradeNonceRequest;
    fromPartial(object: DeepPartial<QuerySubaccountTradeNonceRequest>): QuerySubaccountTradeNonceRequest;
};
export declare const QuerySubaccountPositionsRequest: {
    encode(message: QuerySubaccountPositionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountPositionsRequest;
    fromJSON(object: any): QuerySubaccountPositionsRequest;
    toJSON(message: QuerySubaccountPositionsRequest): unknown;
    create(base?: DeepPartial<QuerySubaccountPositionsRequest>): QuerySubaccountPositionsRequest;
    fromPartial(object: DeepPartial<QuerySubaccountPositionsRequest>): QuerySubaccountPositionsRequest;
};
export declare const QuerySubaccountPositionInMarketRequest: {
    encode(message: QuerySubaccountPositionInMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountPositionInMarketRequest;
    fromJSON(object: any): QuerySubaccountPositionInMarketRequest;
    toJSON(message: QuerySubaccountPositionInMarketRequest): unknown;
    create(base?: DeepPartial<QuerySubaccountPositionInMarketRequest>): QuerySubaccountPositionInMarketRequest;
    fromPartial(object: DeepPartial<QuerySubaccountPositionInMarketRequest>): QuerySubaccountPositionInMarketRequest;
};
export declare const QuerySubaccountEffectivePositionInMarketRequest: {
    encode(message: QuerySubaccountEffectivePositionInMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountEffectivePositionInMarketRequest;
    fromJSON(object: any): QuerySubaccountEffectivePositionInMarketRequest;
    toJSON(message: QuerySubaccountEffectivePositionInMarketRequest): unknown;
    create(base?: DeepPartial<QuerySubaccountEffectivePositionInMarketRequest>): QuerySubaccountEffectivePositionInMarketRequest;
    fromPartial(object: DeepPartial<QuerySubaccountEffectivePositionInMarketRequest>): QuerySubaccountEffectivePositionInMarketRequest;
};
export declare const QuerySubaccountOrderMetadataRequest: {
    encode(message: QuerySubaccountOrderMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountOrderMetadataRequest;
    fromJSON(object: any): QuerySubaccountOrderMetadataRequest;
    toJSON(message: QuerySubaccountOrderMetadataRequest): unknown;
    create(base?: DeepPartial<QuerySubaccountOrderMetadataRequest>): QuerySubaccountOrderMetadataRequest;
    fromPartial(object: DeepPartial<QuerySubaccountOrderMetadataRequest>): QuerySubaccountOrderMetadataRequest;
};
export declare const QuerySubaccountPositionsResponse: {
    encode(message: QuerySubaccountPositionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountPositionsResponse;
    fromJSON(object: any): QuerySubaccountPositionsResponse;
    toJSON(message: QuerySubaccountPositionsResponse): unknown;
    create(base?: DeepPartial<QuerySubaccountPositionsResponse>): QuerySubaccountPositionsResponse;
    fromPartial(object: DeepPartial<QuerySubaccountPositionsResponse>): QuerySubaccountPositionsResponse;
};
export declare const QuerySubaccountPositionInMarketResponse: {
    encode(message: QuerySubaccountPositionInMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountPositionInMarketResponse;
    fromJSON(object: any): QuerySubaccountPositionInMarketResponse;
    toJSON(message: QuerySubaccountPositionInMarketResponse): unknown;
    create(base?: DeepPartial<QuerySubaccountPositionInMarketResponse>): QuerySubaccountPositionInMarketResponse;
    fromPartial(object: DeepPartial<QuerySubaccountPositionInMarketResponse>): QuerySubaccountPositionInMarketResponse;
};
export declare const EffectivePosition: {
    encode(message: EffectivePosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EffectivePosition;
    fromJSON(object: any): EffectivePosition;
    toJSON(message: EffectivePosition): unknown;
    create(base?: DeepPartial<EffectivePosition>): EffectivePosition;
    fromPartial(object: DeepPartial<EffectivePosition>): EffectivePosition;
};
export declare const QuerySubaccountEffectivePositionInMarketResponse: {
    encode(message: QuerySubaccountEffectivePositionInMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountEffectivePositionInMarketResponse;
    fromJSON(object: any): QuerySubaccountEffectivePositionInMarketResponse;
    toJSON(message: QuerySubaccountEffectivePositionInMarketResponse): unknown;
    create(base?: DeepPartial<QuerySubaccountEffectivePositionInMarketResponse>): QuerySubaccountEffectivePositionInMarketResponse;
    fromPartial(object: DeepPartial<QuerySubaccountEffectivePositionInMarketResponse>): QuerySubaccountEffectivePositionInMarketResponse;
};
export declare const QueryPerpetualMarketInfoRequest: {
    encode(message: QueryPerpetualMarketInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPerpetualMarketInfoRequest;
    fromJSON(object: any): QueryPerpetualMarketInfoRequest;
    toJSON(message: QueryPerpetualMarketInfoRequest): unknown;
    create(base?: DeepPartial<QueryPerpetualMarketInfoRequest>): QueryPerpetualMarketInfoRequest;
    fromPartial(object: DeepPartial<QueryPerpetualMarketInfoRequest>): QueryPerpetualMarketInfoRequest;
};
export declare const QueryPerpetualMarketInfoResponse: {
    encode(message: QueryPerpetualMarketInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPerpetualMarketInfoResponse;
    fromJSON(object: any): QueryPerpetualMarketInfoResponse;
    toJSON(message: QueryPerpetualMarketInfoResponse): unknown;
    create(base?: DeepPartial<QueryPerpetualMarketInfoResponse>): QueryPerpetualMarketInfoResponse;
    fromPartial(object: DeepPartial<QueryPerpetualMarketInfoResponse>): QueryPerpetualMarketInfoResponse;
};
export declare const QueryExpiryFuturesMarketInfoRequest: {
    encode(message: QueryExpiryFuturesMarketInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExpiryFuturesMarketInfoRequest;
    fromJSON(object: any): QueryExpiryFuturesMarketInfoRequest;
    toJSON(message: QueryExpiryFuturesMarketInfoRequest): unknown;
    create(base?: DeepPartial<QueryExpiryFuturesMarketInfoRequest>): QueryExpiryFuturesMarketInfoRequest;
    fromPartial(object: DeepPartial<QueryExpiryFuturesMarketInfoRequest>): QueryExpiryFuturesMarketInfoRequest;
};
export declare const QueryExpiryFuturesMarketInfoResponse: {
    encode(message: QueryExpiryFuturesMarketInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExpiryFuturesMarketInfoResponse;
    fromJSON(object: any): QueryExpiryFuturesMarketInfoResponse;
    toJSON(message: QueryExpiryFuturesMarketInfoResponse): unknown;
    create(base?: DeepPartial<QueryExpiryFuturesMarketInfoResponse>): QueryExpiryFuturesMarketInfoResponse;
    fromPartial(object: DeepPartial<QueryExpiryFuturesMarketInfoResponse>): QueryExpiryFuturesMarketInfoResponse;
};
export declare const QueryPerpetualMarketFundingRequest: {
    encode(message: QueryPerpetualMarketFundingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPerpetualMarketFundingRequest;
    fromJSON(object: any): QueryPerpetualMarketFundingRequest;
    toJSON(message: QueryPerpetualMarketFundingRequest): unknown;
    create(base?: DeepPartial<QueryPerpetualMarketFundingRequest>): QueryPerpetualMarketFundingRequest;
    fromPartial(object: DeepPartial<QueryPerpetualMarketFundingRequest>): QueryPerpetualMarketFundingRequest;
};
export declare const QueryPerpetualMarketFundingResponse: {
    encode(message: QueryPerpetualMarketFundingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPerpetualMarketFundingResponse;
    fromJSON(object: any): QueryPerpetualMarketFundingResponse;
    toJSON(message: QueryPerpetualMarketFundingResponse): unknown;
    create(base?: DeepPartial<QueryPerpetualMarketFundingResponse>): QueryPerpetualMarketFundingResponse;
    fromPartial(object: DeepPartial<QueryPerpetualMarketFundingResponse>): QueryPerpetualMarketFundingResponse;
};
export declare const QuerySubaccountOrderMetadataResponse: {
    encode(message: QuerySubaccountOrderMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountOrderMetadataResponse;
    fromJSON(object: any): QuerySubaccountOrderMetadataResponse;
    toJSON(message: QuerySubaccountOrderMetadataResponse): unknown;
    create(base?: DeepPartial<QuerySubaccountOrderMetadataResponse>): QuerySubaccountOrderMetadataResponse;
    fromPartial(object: DeepPartial<QuerySubaccountOrderMetadataResponse>): QuerySubaccountOrderMetadataResponse;
};
export declare const QuerySubaccountTradeNonceResponse: {
    encode(message: QuerySubaccountTradeNonceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountTradeNonceResponse;
    fromJSON(object: any): QuerySubaccountTradeNonceResponse;
    toJSON(message: QuerySubaccountTradeNonceResponse): unknown;
    create(base?: DeepPartial<QuerySubaccountTradeNonceResponse>): QuerySubaccountTradeNonceResponse;
    fromPartial(object: DeepPartial<QuerySubaccountTradeNonceResponse>): QuerySubaccountTradeNonceResponse;
};
export declare const QueryModuleStateRequest: {
    encode(_: QueryModuleStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateRequest;
    fromJSON(_: any): QueryModuleStateRequest;
    toJSON(_: QueryModuleStateRequest): unknown;
    create(base?: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest;
    fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest;
};
export declare const QueryModuleStateResponse: {
    encode(message: QueryModuleStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateResponse;
    fromJSON(object: any): QueryModuleStateResponse;
    toJSON(message: QueryModuleStateResponse): unknown;
    create(base?: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse;
    fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse;
};
export declare const QueryPositionsRequest: {
    encode(_: QueryPositionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionsRequest;
    fromJSON(_: any): QueryPositionsRequest;
    toJSON(_: QueryPositionsRequest): unknown;
    create(base?: DeepPartial<QueryPositionsRequest>): QueryPositionsRequest;
    fromPartial(_: DeepPartial<QueryPositionsRequest>): QueryPositionsRequest;
};
export declare const QueryPositionsResponse: {
    encode(message: QueryPositionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionsResponse;
    fromJSON(object: any): QueryPositionsResponse;
    toJSON(message: QueryPositionsResponse): unknown;
    create(base?: DeepPartial<QueryPositionsResponse>): QueryPositionsResponse;
    fromPartial(object: DeepPartial<QueryPositionsResponse>): QueryPositionsResponse;
};
export declare const QueryTradeRewardPointsRequest: {
    encode(message: QueryTradeRewardPointsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeRewardPointsRequest;
    fromJSON(object: any): QueryTradeRewardPointsRequest;
    toJSON(message: QueryTradeRewardPointsRequest): unknown;
    create(base?: DeepPartial<QueryTradeRewardPointsRequest>): QueryTradeRewardPointsRequest;
    fromPartial(object: DeepPartial<QueryTradeRewardPointsRequest>): QueryTradeRewardPointsRequest;
};
export declare const QueryTradeRewardPointsResponse: {
    encode(message: QueryTradeRewardPointsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeRewardPointsResponse;
    fromJSON(object: any): QueryTradeRewardPointsResponse;
    toJSON(message: QueryTradeRewardPointsResponse): unknown;
    create(base?: DeepPartial<QueryTradeRewardPointsResponse>): QueryTradeRewardPointsResponse;
    fromPartial(object: DeepPartial<QueryTradeRewardPointsResponse>): QueryTradeRewardPointsResponse;
};
export declare const QueryTradeRewardCampaignRequest: {
    encode(_: QueryTradeRewardCampaignRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeRewardCampaignRequest;
    fromJSON(_: any): QueryTradeRewardCampaignRequest;
    toJSON(_: QueryTradeRewardCampaignRequest): unknown;
    create(base?: DeepPartial<QueryTradeRewardCampaignRequest>): QueryTradeRewardCampaignRequest;
    fromPartial(_: DeepPartial<QueryTradeRewardCampaignRequest>): QueryTradeRewardCampaignRequest;
};
export declare const QueryTradeRewardCampaignResponse: {
    encode(message: QueryTradeRewardCampaignResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeRewardCampaignResponse;
    fromJSON(object: any): QueryTradeRewardCampaignResponse;
    toJSON(message: QueryTradeRewardCampaignResponse): unknown;
    create(base?: DeepPartial<QueryTradeRewardCampaignResponse>): QueryTradeRewardCampaignResponse;
    fromPartial(object: DeepPartial<QueryTradeRewardCampaignResponse>): QueryTradeRewardCampaignResponse;
};
export declare const QueryIsOptedOutOfRewardsRequest: {
    encode(message: QueryIsOptedOutOfRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIsOptedOutOfRewardsRequest;
    fromJSON(object: any): QueryIsOptedOutOfRewardsRequest;
    toJSON(message: QueryIsOptedOutOfRewardsRequest): unknown;
    create(base?: DeepPartial<QueryIsOptedOutOfRewardsRequest>): QueryIsOptedOutOfRewardsRequest;
    fromPartial(object: DeepPartial<QueryIsOptedOutOfRewardsRequest>): QueryIsOptedOutOfRewardsRequest;
};
export declare const QueryIsOptedOutOfRewardsResponse: {
    encode(message: QueryIsOptedOutOfRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIsOptedOutOfRewardsResponse;
    fromJSON(object: any): QueryIsOptedOutOfRewardsResponse;
    toJSON(message: QueryIsOptedOutOfRewardsResponse): unknown;
    create(base?: DeepPartial<QueryIsOptedOutOfRewardsResponse>): QueryIsOptedOutOfRewardsResponse;
    fromPartial(object: DeepPartial<QueryIsOptedOutOfRewardsResponse>): QueryIsOptedOutOfRewardsResponse;
};
export declare const QueryOptedOutOfRewardsAccountsRequest: {
    encode(_: QueryOptedOutOfRewardsAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOptedOutOfRewardsAccountsRequest;
    fromJSON(_: any): QueryOptedOutOfRewardsAccountsRequest;
    toJSON(_: QueryOptedOutOfRewardsAccountsRequest): unknown;
    create(base?: DeepPartial<QueryOptedOutOfRewardsAccountsRequest>): QueryOptedOutOfRewardsAccountsRequest;
    fromPartial(_: DeepPartial<QueryOptedOutOfRewardsAccountsRequest>): QueryOptedOutOfRewardsAccountsRequest;
};
export declare const QueryOptedOutOfRewardsAccountsResponse: {
    encode(message: QueryOptedOutOfRewardsAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOptedOutOfRewardsAccountsResponse;
    fromJSON(object: any): QueryOptedOutOfRewardsAccountsResponse;
    toJSON(message: QueryOptedOutOfRewardsAccountsResponse): unknown;
    create(base?: DeepPartial<QueryOptedOutOfRewardsAccountsResponse>): QueryOptedOutOfRewardsAccountsResponse;
    fromPartial(object: DeepPartial<QueryOptedOutOfRewardsAccountsResponse>): QueryOptedOutOfRewardsAccountsResponse;
};
export declare const QueryFeeDiscountAccountInfoRequest: {
    encode(message: QueryFeeDiscountAccountInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountAccountInfoRequest;
    fromJSON(object: any): QueryFeeDiscountAccountInfoRequest;
    toJSON(message: QueryFeeDiscountAccountInfoRequest): unknown;
    create(base?: DeepPartial<QueryFeeDiscountAccountInfoRequest>): QueryFeeDiscountAccountInfoRequest;
    fromPartial(object: DeepPartial<QueryFeeDiscountAccountInfoRequest>): QueryFeeDiscountAccountInfoRequest;
};
export declare const QueryFeeDiscountAccountInfoResponse: {
    encode(message: QueryFeeDiscountAccountInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountAccountInfoResponse;
    fromJSON(object: any): QueryFeeDiscountAccountInfoResponse;
    toJSON(message: QueryFeeDiscountAccountInfoResponse): unknown;
    create(base?: DeepPartial<QueryFeeDiscountAccountInfoResponse>): QueryFeeDiscountAccountInfoResponse;
    fromPartial(object: DeepPartial<QueryFeeDiscountAccountInfoResponse>): QueryFeeDiscountAccountInfoResponse;
};
export declare const QueryFeeDiscountScheduleRequest: {
    encode(_: QueryFeeDiscountScheduleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountScheduleRequest;
    fromJSON(_: any): QueryFeeDiscountScheduleRequest;
    toJSON(_: QueryFeeDiscountScheduleRequest): unknown;
    create(base?: DeepPartial<QueryFeeDiscountScheduleRequest>): QueryFeeDiscountScheduleRequest;
    fromPartial(_: DeepPartial<QueryFeeDiscountScheduleRequest>): QueryFeeDiscountScheduleRequest;
};
export declare const QueryFeeDiscountScheduleResponse: {
    encode(message: QueryFeeDiscountScheduleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountScheduleResponse;
    fromJSON(object: any): QueryFeeDiscountScheduleResponse;
    toJSON(message: QueryFeeDiscountScheduleResponse): unknown;
    create(base?: DeepPartial<QueryFeeDiscountScheduleResponse>): QueryFeeDiscountScheduleResponse;
    fromPartial(object: DeepPartial<QueryFeeDiscountScheduleResponse>): QueryFeeDiscountScheduleResponse;
};
export declare const QueryBalanceMismatchesRequest: {
    encode(message: QueryBalanceMismatchesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceMismatchesRequest;
    fromJSON(object: any): QueryBalanceMismatchesRequest;
    toJSON(message: QueryBalanceMismatchesRequest): unknown;
    create(base?: DeepPartial<QueryBalanceMismatchesRequest>): QueryBalanceMismatchesRequest;
    fromPartial(object: DeepPartial<QueryBalanceMismatchesRequest>): QueryBalanceMismatchesRequest;
};
export declare const BalanceMismatch: {
    encode(message: BalanceMismatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BalanceMismatch;
    fromJSON(object: any): BalanceMismatch;
    toJSON(message: BalanceMismatch): unknown;
    create(base?: DeepPartial<BalanceMismatch>): BalanceMismatch;
    fromPartial(object: DeepPartial<BalanceMismatch>): BalanceMismatch;
};
export declare const QueryBalanceMismatchesResponse: {
    encode(message: QueryBalanceMismatchesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceMismatchesResponse;
    fromJSON(object: any): QueryBalanceMismatchesResponse;
    toJSON(message: QueryBalanceMismatchesResponse): unknown;
    create(base?: DeepPartial<QueryBalanceMismatchesResponse>): QueryBalanceMismatchesResponse;
    fromPartial(object: DeepPartial<QueryBalanceMismatchesResponse>): QueryBalanceMismatchesResponse;
};
export declare const QueryBalanceWithBalanceHoldsRequest: {
    encode(_: QueryBalanceWithBalanceHoldsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceWithBalanceHoldsRequest;
    fromJSON(_: any): QueryBalanceWithBalanceHoldsRequest;
    toJSON(_: QueryBalanceWithBalanceHoldsRequest): unknown;
    create(base?: DeepPartial<QueryBalanceWithBalanceHoldsRequest>): QueryBalanceWithBalanceHoldsRequest;
    fromPartial(_: DeepPartial<QueryBalanceWithBalanceHoldsRequest>): QueryBalanceWithBalanceHoldsRequest;
};
export declare const BalanceWithMarginHold: {
    encode(message: BalanceWithMarginHold, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BalanceWithMarginHold;
    fromJSON(object: any): BalanceWithMarginHold;
    toJSON(message: BalanceWithMarginHold): unknown;
    create(base?: DeepPartial<BalanceWithMarginHold>): BalanceWithMarginHold;
    fromPartial(object: DeepPartial<BalanceWithMarginHold>): BalanceWithMarginHold;
};
export declare const QueryBalanceWithBalanceHoldsResponse: {
    encode(message: QueryBalanceWithBalanceHoldsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceWithBalanceHoldsResponse;
    fromJSON(object: any): QueryBalanceWithBalanceHoldsResponse;
    toJSON(message: QueryBalanceWithBalanceHoldsResponse): unknown;
    create(base?: DeepPartial<QueryBalanceWithBalanceHoldsResponse>): QueryBalanceWithBalanceHoldsResponse;
    fromPartial(object: DeepPartial<QueryBalanceWithBalanceHoldsResponse>): QueryBalanceWithBalanceHoldsResponse;
};
export declare const QueryFeeDiscountTierStatisticsRequest: {
    encode(_: QueryFeeDiscountTierStatisticsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountTierStatisticsRequest;
    fromJSON(_: any): QueryFeeDiscountTierStatisticsRequest;
    toJSON(_: QueryFeeDiscountTierStatisticsRequest): unknown;
    create(base?: DeepPartial<QueryFeeDiscountTierStatisticsRequest>): QueryFeeDiscountTierStatisticsRequest;
    fromPartial(_: DeepPartial<QueryFeeDiscountTierStatisticsRequest>): QueryFeeDiscountTierStatisticsRequest;
};
export declare const TierStatistic: {
    encode(message: TierStatistic, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TierStatistic;
    fromJSON(object: any): TierStatistic;
    toJSON(message: TierStatistic): unknown;
    create(base?: DeepPartial<TierStatistic>): TierStatistic;
    fromPartial(object: DeepPartial<TierStatistic>): TierStatistic;
};
export declare const QueryFeeDiscountTierStatisticsResponse: {
    encode(message: QueryFeeDiscountTierStatisticsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountTierStatisticsResponse;
    fromJSON(object: any): QueryFeeDiscountTierStatisticsResponse;
    toJSON(message: QueryFeeDiscountTierStatisticsResponse): unknown;
    create(base?: DeepPartial<QueryFeeDiscountTierStatisticsResponse>): QueryFeeDiscountTierStatisticsResponse;
    fromPartial(object: DeepPartial<QueryFeeDiscountTierStatisticsResponse>): QueryFeeDiscountTierStatisticsResponse;
};
export declare const MitoVaultInfosRequest: {
    encode(_: MitoVaultInfosRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MitoVaultInfosRequest;
    fromJSON(_: any): MitoVaultInfosRequest;
    toJSON(_: MitoVaultInfosRequest): unknown;
    create(base?: DeepPartial<MitoVaultInfosRequest>): MitoVaultInfosRequest;
    fromPartial(_: DeepPartial<MitoVaultInfosRequest>): MitoVaultInfosRequest;
};
export declare const MitoVaultInfosResponse: {
    encode(message: MitoVaultInfosResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MitoVaultInfosResponse;
    fromJSON(object: any): MitoVaultInfosResponse;
    toJSON(message: MitoVaultInfosResponse): unknown;
    create(base?: DeepPartial<MitoVaultInfosResponse>): MitoVaultInfosResponse;
    fromPartial(object: DeepPartial<MitoVaultInfosResponse>): MitoVaultInfosResponse;
};
export declare const QueryMarketIDFromVaultRequest: {
    encode(message: QueryMarketIDFromVaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketIDFromVaultRequest;
    fromJSON(object: any): QueryMarketIDFromVaultRequest;
    toJSON(message: QueryMarketIDFromVaultRequest): unknown;
    create(base?: DeepPartial<QueryMarketIDFromVaultRequest>): QueryMarketIDFromVaultRequest;
    fromPartial(object: DeepPartial<QueryMarketIDFromVaultRequest>): QueryMarketIDFromVaultRequest;
};
export declare const QueryMarketIDFromVaultResponse: {
    encode(message: QueryMarketIDFromVaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketIDFromVaultResponse;
    fromJSON(object: any): QueryMarketIDFromVaultResponse;
    toJSON(message: QueryMarketIDFromVaultResponse): unknown;
    create(base?: DeepPartial<QueryMarketIDFromVaultResponse>): QueryMarketIDFromVaultResponse;
    fromPartial(object: DeepPartial<QueryMarketIDFromVaultResponse>): QueryMarketIDFromVaultResponse;
};
export declare const QueryHistoricalTradeRecordsRequest: {
    encode(message: QueryHistoricalTradeRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalTradeRecordsRequest;
    fromJSON(object: any): QueryHistoricalTradeRecordsRequest;
    toJSON(message: QueryHistoricalTradeRecordsRequest): unknown;
    create(base?: DeepPartial<QueryHistoricalTradeRecordsRequest>): QueryHistoricalTradeRecordsRequest;
    fromPartial(object: DeepPartial<QueryHistoricalTradeRecordsRequest>): QueryHistoricalTradeRecordsRequest;
};
export declare const QueryHistoricalTradeRecordsResponse: {
    encode(message: QueryHistoricalTradeRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalTradeRecordsResponse;
    fromJSON(object: any): QueryHistoricalTradeRecordsResponse;
    toJSON(message: QueryHistoricalTradeRecordsResponse): unknown;
    create(base?: DeepPartial<QueryHistoricalTradeRecordsResponse>): QueryHistoricalTradeRecordsResponse;
    fromPartial(object: DeepPartial<QueryHistoricalTradeRecordsResponse>): QueryHistoricalTradeRecordsResponse;
};
export declare const TradeHistoryOptions: {
    encode(message: TradeHistoryOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradeHistoryOptions;
    fromJSON(object: any): TradeHistoryOptions;
    toJSON(message: TradeHistoryOptions): unknown;
    create(base?: DeepPartial<TradeHistoryOptions>): TradeHistoryOptions;
    fromPartial(object: DeepPartial<TradeHistoryOptions>): TradeHistoryOptions;
};
export declare const QueryMarketVolatilityRequest: {
    encode(message: QueryMarketVolatilityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketVolatilityRequest;
    fromJSON(object: any): QueryMarketVolatilityRequest;
    toJSON(message: QueryMarketVolatilityRequest): unknown;
    create(base?: DeepPartial<QueryMarketVolatilityRequest>): QueryMarketVolatilityRequest;
    fromPartial(object: DeepPartial<QueryMarketVolatilityRequest>): QueryMarketVolatilityRequest;
};
export declare const QueryMarketVolatilityResponse: {
    encode(message: QueryMarketVolatilityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketVolatilityResponse;
    fromJSON(object: any): QueryMarketVolatilityResponse;
    toJSON(message: QueryMarketVolatilityResponse): unknown;
    create(base?: DeepPartial<QueryMarketVolatilityResponse>): QueryMarketVolatilityResponse;
    fromPartial(object: DeepPartial<QueryMarketVolatilityResponse>): QueryMarketVolatilityResponse;
};
export declare const QueryBinaryMarketsRequest: {
    encode(message: QueryBinaryMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBinaryMarketsRequest;
    fromJSON(object: any): QueryBinaryMarketsRequest;
    toJSON(message: QueryBinaryMarketsRequest): unknown;
    create(base?: DeepPartial<QueryBinaryMarketsRequest>): QueryBinaryMarketsRequest;
    fromPartial(object: DeepPartial<QueryBinaryMarketsRequest>): QueryBinaryMarketsRequest;
};
export declare const QueryBinaryMarketsResponse: {
    encode(message: QueryBinaryMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBinaryMarketsResponse;
    fromJSON(object: any): QueryBinaryMarketsResponse;
    toJSON(message: QueryBinaryMarketsResponse): unknown;
    create(base?: DeepPartial<QueryBinaryMarketsResponse>): QueryBinaryMarketsResponse;
    fromPartial(object: DeepPartial<QueryBinaryMarketsResponse>): QueryBinaryMarketsResponse;
};
export declare const QueryTraderDerivativeConditionalOrdersRequest: {
    encode(message: QueryTraderDerivativeConditionalOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderDerivativeConditionalOrdersRequest;
    fromJSON(object: any): QueryTraderDerivativeConditionalOrdersRequest;
    toJSON(message: QueryTraderDerivativeConditionalOrdersRequest): unknown;
    create(base?: DeepPartial<QueryTraderDerivativeConditionalOrdersRequest>): QueryTraderDerivativeConditionalOrdersRequest;
    fromPartial(object: DeepPartial<QueryTraderDerivativeConditionalOrdersRequest>): QueryTraderDerivativeConditionalOrdersRequest;
};
export declare const TrimmedDerivativeConditionalOrder: {
    encode(message: TrimmedDerivativeConditionalOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrimmedDerivativeConditionalOrder;
    fromJSON(object: any): TrimmedDerivativeConditionalOrder;
    toJSON(message: TrimmedDerivativeConditionalOrder): unknown;
    create(base?: DeepPartial<TrimmedDerivativeConditionalOrder>): TrimmedDerivativeConditionalOrder;
    fromPartial(object: DeepPartial<TrimmedDerivativeConditionalOrder>): TrimmedDerivativeConditionalOrder;
};
export declare const QueryTraderDerivativeConditionalOrdersResponse: {
    encode(message: QueryTraderDerivativeConditionalOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderDerivativeConditionalOrdersResponse;
    fromJSON(object: any): QueryTraderDerivativeConditionalOrdersResponse;
    toJSON(message: QueryTraderDerivativeConditionalOrdersResponse): unknown;
    create(base?: DeepPartial<QueryTraderDerivativeConditionalOrdersResponse>): QueryTraderDerivativeConditionalOrdersResponse;
    fromPartial(object: DeepPartial<QueryTraderDerivativeConditionalOrdersResponse>): QueryTraderDerivativeConditionalOrdersResponse;
};
export declare const QueryMarketAtomicExecutionFeeMultiplierRequest: {
    encode(message: QueryMarketAtomicExecutionFeeMultiplierRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketAtomicExecutionFeeMultiplierRequest;
    fromJSON(object: any): QueryMarketAtomicExecutionFeeMultiplierRequest;
    toJSON(message: QueryMarketAtomicExecutionFeeMultiplierRequest): unknown;
    create(base?: DeepPartial<QueryMarketAtomicExecutionFeeMultiplierRequest>): QueryMarketAtomicExecutionFeeMultiplierRequest;
    fromPartial(object: DeepPartial<QueryMarketAtomicExecutionFeeMultiplierRequest>): QueryMarketAtomicExecutionFeeMultiplierRequest;
};
export declare const QueryMarketAtomicExecutionFeeMultiplierResponse: {
    encode(message: QueryMarketAtomicExecutionFeeMultiplierResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketAtomicExecutionFeeMultiplierResponse;
    fromJSON(object: any): QueryMarketAtomicExecutionFeeMultiplierResponse;
    toJSON(message: QueryMarketAtomicExecutionFeeMultiplierResponse): unknown;
    create(base?: DeepPartial<QueryMarketAtomicExecutionFeeMultiplierResponse>): QueryMarketAtomicExecutionFeeMultiplierResponse;
    fromPartial(object: DeepPartial<QueryMarketAtomicExecutionFeeMultiplierResponse>): QueryMarketAtomicExecutionFeeMultiplierResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Retrieves exchange params */
    QueryExchangeParams(request: DeepPartial<QueryExchangeParamsRequest>, metadata?: grpc.Metadata): Promise<QueryExchangeParamsResponse>;
    /** Retrieves a Subaccount's Deposits */
    SubaccountDeposits(request: DeepPartial<QuerySubaccountDepositsRequest>, metadata?: grpc.Metadata): Promise<QuerySubaccountDepositsResponse>;
    /** Retrieves a Subaccount's Deposits */
    SubaccountDeposit(request: DeepPartial<QuerySubaccountDepositRequest>, metadata?: grpc.Metadata): Promise<QuerySubaccountDepositResponse>;
    /** Retrieves all of the balances of all users on the exchange. */
    ExchangeBalances(request: DeepPartial<QueryExchangeBalancesRequest>, metadata?: grpc.Metadata): Promise<QueryExchangeBalancesResponse>;
    /** Retrieves the aggregate volumes for the specified account or subaccount */
    AggregateVolume(request: DeepPartial<QueryAggregateVolumeRequest>, metadata?: grpc.Metadata): Promise<QueryAggregateVolumeResponse>;
    /** Retrieves the aggregate volumes for specified accounts */
    AggregateVolumes(request: DeepPartial<QueryAggregateVolumesRequest>, metadata?: grpc.Metadata): Promise<QueryAggregateVolumesResponse>;
    /** Retrieves the aggregate volume for the specified market */
    AggregateMarketVolume(request: DeepPartial<QueryAggregateMarketVolumeRequest>, metadata?: grpc.Metadata): Promise<QueryAggregateMarketVolumeResponse>;
    /** Retrieves the aggregate market volumes for specified markets */
    AggregateMarketVolumes(request: DeepPartial<QueryAggregateMarketVolumesRequest>, metadata?: grpc.Metadata): Promise<QueryAggregateMarketVolumesResponse>;
    /** Retrieves the denom decimals for a denom. */
    DenomDecimal(request: DeepPartial<QueryDenomDecimalRequest>, metadata?: grpc.Metadata): Promise<QueryDenomDecimalResponse>;
    /**
     * Retrieves the denom decimals for multiple denoms. Returns all denom
     * decimals if unspecified.
     */
    DenomDecimals(request: DeepPartial<QueryDenomDecimalsRequest>, metadata?: grpc.Metadata): Promise<QueryDenomDecimalsResponse>;
    /** Retrieves a list of spot markets. */
    SpotMarkets(request: DeepPartial<QuerySpotMarketsRequest>, metadata?: grpc.Metadata): Promise<QuerySpotMarketsResponse>;
    /** Retrieves a spot market by ticker */
    SpotMarket(request: DeepPartial<QuerySpotMarketRequest>, metadata?: grpc.Metadata): Promise<QuerySpotMarketResponse>;
    /** Retrieves a list of spot markets with extra information. */
    FullSpotMarkets(request: DeepPartial<QueryFullSpotMarketsRequest>, metadata?: grpc.Metadata): Promise<QueryFullSpotMarketsResponse>;
    /** Retrieves a spot market with extra information. */
    FullSpotMarket(request: DeepPartial<QueryFullSpotMarketRequest>, metadata?: grpc.Metadata): Promise<QueryFullSpotMarketResponse>;
    /** Retrieves a spot market's orderbook by marketID */
    SpotOrderbook(request: DeepPartial<QuerySpotOrderbookRequest>, metadata?: grpc.Metadata): Promise<QuerySpotOrderbookResponse>;
    /** Retrieves a trader's spot orders */
    TraderSpotOrders(request: DeepPartial<QueryTraderSpotOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryTraderSpotOrdersResponse>;
    /** Retrieves all account address spot orders */
    AccountAddressSpotOrders(request: DeepPartial<QueryAccountAddressSpotOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryAccountAddressSpotOrdersResponse>;
    /**
     * Retrieves spot orders corresponding to specified order hashes for a given
     * subaccountID and marketID
     */
    SpotOrdersByHashes(request: DeepPartial<QuerySpotOrdersByHashesRequest>, metadata?: grpc.Metadata): Promise<QuerySpotOrdersByHashesResponse>;
    /** Retrieves subaccount's orders */
    SubaccountOrders(request: DeepPartial<QuerySubaccountOrdersRequest>, metadata?: grpc.Metadata): Promise<QuerySubaccountOrdersResponse>;
    /** Retrieves a trader's transient spot orders */
    TraderSpotTransientOrders(request: DeepPartial<QueryTraderSpotOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryTraderSpotOrdersResponse>;
    /** Retrieves a spot market's mid-price */
    SpotMidPriceAndTOB(request: DeepPartial<QuerySpotMidPriceAndTOBRequest>, metadata?: grpc.Metadata): Promise<QuerySpotMidPriceAndTOBResponse>;
    /** Retrieves a derivative market's mid-price */
    DerivativeMidPriceAndTOB(request: DeepPartial<QueryDerivativeMidPriceAndTOBRequest>, metadata?: grpc.Metadata): Promise<QueryDerivativeMidPriceAndTOBResponse>;
    /** Retrieves a derivative market's orderbook by marketID */
    DerivativeOrderbook(request: DeepPartial<QueryDerivativeOrderbookRequest>, metadata?: grpc.Metadata): Promise<QueryDerivativeOrderbookResponse>;
    /** Retrieves a trader's derivative orders */
    TraderDerivativeOrders(request: DeepPartial<QueryTraderDerivativeOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryTraderDerivativeOrdersResponse>;
    /** Retrieves all account address derivative orders */
    AccountAddressDerivativeOrders(request: DeepPartial<QueryAccountAddressDerivativeOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryAccountAddressDerivativeOrdersResponse>;
    /** Retrieves a trader's derivative orders */
    DerivativeOrdersByHashes(request: DeepPartial<QueryDerivativeOrdersByHashesRequest>, metadata?: grpc.Metadata): Promise<QueryDerivativeOrdersByHashesResponse>;
    /** Retrieves a trader's transient derivative orders */
    TraderDerivativeTransientOrders(request: DeepPartial<QueryTraderDerivativeOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryTraderDerivativeOrdersResponse>;
    /** Retrieves a list of derivative markets. */
    DerivativeMarkets(request: DeepPartial<QueryDerivativeMarketsRequest>, metadata?: grpc.Metadata): Promise<QueryDerivativeMarketsResponse>;
    /** Retrieves a derivative market by ticker */
    DerivativeMarket(request: DeepPartial<QueryDerivativeMarketRequest>, metadata?: grpc.Metadata): Promise<QueryDerivativeMarketResponse>;
    /**
     * Retrieves a derivative market's corresponding address for fees that
     * contribute to the market's insurance fund
     */
    DerivativeMarketAddress(request: DeepPartial<QueryDerivativeMarketAddressRequest>, metadata?: grpc.Metadata): Promise<QueryDerivativeMarketAddressResponse>;
    /** Retrieves a subaccount's trade nonce */
    SubaccountTradeNonce(request: DeepPartial<QuerySubaccountTradeNonceRequest>, metadata?: grpc.Metadata): Promise<QuerySubaccountTradeNonceResponse>;
    /** Retrieves the entire exchange module's state */
    ExchangeModuleState(request: DeepPartial<QueryModuleStateRequest>, metadata?: grpc.Metadata): Promise<QueryModuleStateResponse>;
    /** Retrieves the entire exchange module's positions */
    Positions(request: DeepPartial<QueryPositionsRequest>, metadata?: grpc.Metadata): Promise<QueryPositionsResponse>;
    /** Retrieves subaccount's positions */
    SubaccountPositions(request: DeepPartial<QuerySubaccountPositionsRequest>, metadata?: grpc.Metadata): Promise<QuerySubaccountPositionsResponse>;
    /** Retrieves subaccount's position in market */
    SubaccountPositionInMarket(request: DeepPartial<QuerySubaccountPositionInMarketRequest>, metadata?: grpc.Metadata): Promise<QuerySubaccountPositionInMarketResponse>;
    /** Retrieves subaccount's position in market */
    SubaccountEffectivePositionInMarket(request: DeepPartial<QuerySubaccountEffectivePositionInMarketRequest>, metadata?: grpc.Metadata): Promise<QuerySubaccountEffectivePositionInMarketResponse>;
    /** Retrieves perpetual market info */
    PerpetualMarketInfo(request: DeepPartial<QueryPerpetualMarketInfoRequest>, metadata?: grpc.Metadata): Promise<QueryPerpetualMarketInfoResponse>;
    /** Retrieves expiry market info */
    ExpiryFuturesMarketInfo(request: DeepPartial<QueryExpiryFuturesMarketInfoRequest>, metadata?: grpc.Metadata): Promise<QueryExpiryFuturesMarketInfoResponse>;
    /** Retrieves perpetual market funding */
    PerpetualMarketFunding(request: DeepPartial<QueryPerpetualMarketFundingRequest>, metadata?: grpc.Metadata): Promise<QueryPerpetualMarketFundingResponse>;
    /** Retrieves subaccount's order metadata */
    SubaccountOrderMetadata(request: DeepPartial<QuerySubaccountOrderMetadataRequest>, metadata?: grpc.Metadata): Promise<QuerySubaccountOrderMetadataResponse>;
    /** Retrieves the account and total trade rewards points */
    TradeRewardPoints(request: DeepPartial<QueryTradeRewardPointsRequest>, metadata?: grpc.Metadata): Promise<QueryTradeRewardPointsResponse>;
    /** Retrieves the pending account and total trade rewards points */
    PendingTradeRewardPoints(request: DeepPartial<QueryTradeRewardPointsRequest>, metadata?: grpc.Metadata): Promise<QueryTradeRewardPointsResponse>;
    /** Retrieves the trade reward campaign */
    TradeRewardCampaign(request: DeepPartial<QueryTradeRewardCampaignRequest>, metadata?: grpc.Metadata): Promise<QueryTradeRewardCampaignResponse>;
    /** Retrieves the account's fee discount info */
    FeeDiscountAccountInfo(request: DeepPartial<QueryFeeDiscountAccountInfoRequest>, metadata?: grpc.Metadata): Promise<QueryFeeDiscountAccountInfoResponse>;
    /** Retrieves the fee discount schedule */
    FeeDiscountSchedule(request: DeepPartial<QueryFeeDiscountScheduleRequest>, metadata?: grpc.Metadata): Promise<QueryFeeDiscountScheduleResponse>;
    /** Retrieves mismatches between available vs. total balance */
    BalanceMismatches(request: DeepPartial<QueryBalanceMismatchesRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceMismatchesResponse>;
    /** Retrieves available and total balances with balance holds */
    BalanceWithBalanceHolds(request: DeepPartial<QueryBalanceWithBalanceHoldsRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceWithBalanceHoldsResponse>;
    /** Retrieves fee discount tier stats */
    FeeDiscountTierStatistics(request: DeepPartial<QueryFeeDiscountTierStatisticsRequest>, metadata?: grpc.Metadata): Promise<QueryFeeDiscountTierStatisticsResponse>;
    /** Retrieves market making pool info */
    MitoVaultInfos(request: DeepPartial<MitoVaultInfosRequest>, metadata?: grpc.Metadata): Promise<MitoVaultInfosResponse>;
    /** QueryMarketIDFromVault returns the market ID for a given vault subaccount ID */
    QueryMarketIDFromVault(request: DeepPartial<QueryMarketIDFromVaultRequest>, metadata?: grpc.Metadata): Promise<QueryMarketIDFromVaultResponse>;
    /** Retrieves historical trade records for a given market ID */
    HistoricalTradeRecords(request: DeepPartial<QueryHistoricalTradeRecordsRequest>, metadata?: grpc.Metadata): Promise<QueryHistoricalTradeRecordsResponse>;
    /** Retrieves if the account is opted out of rewards */
    IsOptedOutOfRewards(request: DeepPartial<QueryIsOptedOutOfRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryIsOptedOutOfRewardsResponse>;
    /** Retrieves all accounts opted out of rewards */
    OptedOutOfRewardsAccounts(request: DeepPartial<QueryOptedOutOfRewardsAccountsRequest>, metadata?: grpc.Metadata): Promise<QueryOptedOutOfRewardsAccountsResponse>;
    /**
     * MarketVolatility computes the volatility for spot and derivative markets
     * trading history.
     */
    MarketVolatility(request: DeepPartial<QueryMarketVolatilityRequest>, metadata?: grpc.Metadata): Promise<QueryMarketVolatilityResponse>;
    /** Retrieves a spot market's orderbook by marketID */
    BinaryOptionsMarkets(request: DeepPartial<QueryBinaryMarketsRequest>, metadata?: grpc.Metadata): Promise<QueryBinaryMarketsResponse>;
    /** Retrieves a trader's derivative conditional orders */
    TraderDerivativeConditionalOrders(request: DeepPartial<QueryTraderDerivativeConditionalOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryTraderDerivativeConditionalOrdersResponse>;
    MarketAtomicExecutionFeeMultiplier(request: DeepPartial<QueryMarketAtomicExecutionFeeMultiplierRequest>, metadata?: grpc.Metadata): Promise<QueryMarketAtomicExecutionFeeMultiplierResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    QueryExchangeParams(request: DeepPartial<QueryExchangeParamsRequest>, metadata?: grpc.Metadata): Promise<QueryExchangeParamsResponse>;
    SubaccountDeposits(request: DeepPartial<QuerySubaccountDepositsRequest>, metadata?: grpc.Metadata): Promise<QuerySubaccountDepositsResponse>;
    SubaccountDeposit(request: DeepPartial<QuerySubaccountDepositRequest>, metadata?: grpc.Metadata): Promise<QuerySubaccountDepositResponse>;
    ExchangeBalances(request: DeepPartial<QueryExchangeBalancesRequest>, metadata?: grpc.Metadata): Promise<QueryExchangeBalancesResponse>;
    AggregateVolume(request: DeepPartial<QueryAggregateVolumeRequest>, metadata?: grpc.Metadata): Promise<QueryAggregateVolumeResponse>;
    AggregateVolumes(request: DeepPartial<QueryAggregateVolumesRequest>, metadata?: grpc.Metadata): Promise<QueryAggregateVolumesResponse>;
    AggregateMarketVolume(request: DeepPartial<QueryAggregateMarketVolumeRequest>, metadata?: grpc.Metadata): Promise<QueryAggregateMarketVolumeResponse>;
    AggregateMarketVolumes(request: DeepPartial<QueryAggregateMarketVolumesRequest>, metadata?: grpc.Metadata): Promise<QueryAggregateMarketVolumesResponse>;
    DenomDecimal(request: DeepPartial<QueryDenomDecimalRequest>, metadata?: grpc.Metadata): Promise<QueryDenomDecimalResponse>;
    DenomDecimals(request: DeepPartial<QueryDenomDecimalsRequest>, metadata?: grpc.Metadata): Promise<QueryDenomDecimalsResponse>;
    SpotMarkets(request: DeepPartial<QuerySpotMarketsRequest>, metadata?: grpc.Metadata): Promise<QuerySpotMarketsResponse>;
    SpotMarket(request: DeepPartial<QuerySpotMarketRequest>, metadata?: grpc.Metadata): Promise<QuerySpotMarketResponse>;
    FullSpotMarkets(request: DeepPartial<QueryFullSpotMarketsRequest>, metadata?: grpc.Metadata): Promise<QueryFullSpotMarketsResponse>;
    FullSpotMarket(request: DeepPartial<QueryFullSpotMarketRequest>, metadata?: grpc.Metadata): Promise<QueryFullSpotMarketResponse>;
    SpotOrderbook(request: DeepPartial<QuerySpotOrderbookRequest>, metadata?: grpc.Metadata): Promise<QuerySpotOrderbookResponse>;
    TraderSpotOrders(request: DeepPartial<QueryTraderSpotOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryTraderSpotOrdersResponse>;
    AccountAddressSpotOrders(request: DeepPartial<QueryAccountAddressSpotOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryAccountAddressSpotOrdersResponse>;
    SpotOrdersByHashes(request: DeepPartial<QuerySpotOrdersByHashesRequest>, metadata?: grpc.Metadata): Promise<QuerySpotOrdersByHashesResponse>;
    SubaccountOrders(request: DeepPartial<QuerySubaccountOrdersRequest>, metadata?: grpc.Metadata): Promise<QuerySubaccountOrdersResponse>;
    TraderSpotTransientOrders(request: DeepPartial<QueryTraderSpotOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryTraderSpotOrdersResponse>;
    SpotMidPriceAndTOB(request: DeepPartial<QuerySpotMidPriceAndTOBRequest>, metadata?: grpc.Metadata): Promise<QuerySpotMidPriceAndTOBResponse>;
    DerivativeMidPriceAndTOB(request: DeepPartial<QueryDerivativeMidPriceAndTOBRequest>, metadata?: grpc.Metadata): Promise<QueryDerivativeMidPriceAndTOBResponse>;
    DerivativeOrderbook(request: DeepPartial<QueryDerivativeOrderbookRequest>, metadata?: grpc.Metadata): Promise<QueryDerivativeOrderbookResponse>;
    TraderDerivativeOrders(request: DeepPartial<QueryTraderDerivativeOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryTraderDerivativeOrdersResponse>;
    AccountAddressDerivativeOrders(request: DeepPartial<QueryAccountAddressDerivativeOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryAccountAddressDerivativeOrdersResponse>;
    DerivativeOrdersByHashes(request: DeepPartial<QueryDerivativeOrdersByHashesRequest>, metadata?: grpc.Metadata): Promise<QueryDerivativeOrdersByHashesResponse>;
    TraderDerivativeTransientOrders(request: DeepPartial<QueryTraderDerivativeOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryTraderDerivativeOrdersResponse>;
    DerivativeMarkets(request: DeepPartial<QueryDerivativeMarketsRequest>, metadata?: grpc.Metadata): Promise<QueryDerivativeMarketsResponse>;
    DerivativeMarket(request: DeepPartial<QueryDerivativeMarketRequest>, metadata?: grpc.Metadata): Promise<QueryDerivativeMarketResponse>;
    DerivativeMarketAddress(request: DeepPartial<QueryDerivativeMarketAddressRequest>, metadata?: grpc.Metadata): Promise<QueryDerivativeMarketAddressResponse>;
    SubaccountTradeNonce(request: DeepPartial<QuerySubaccountTradeNonceRequest>, metadata?: grpc.Metadata): Promise<QuerySubaccountTradeNonceResponse>;
    ExchangeModuleState(request: DeepPartial<QueryModuleStateRequest>, metadata?: grpc.Metadata): Promise<QueryModuleStateResponse>;
    Positions(request: DeepPartial<QueryPositionsRequest>, metadata?: grpc.Metadata): Promise<QueryPositionsResponse>;
    SubaccountPositions(request: DeepPartial<QuerySubaccountPositionsRequest>, metadata?: grpc.Metadata): Promise<QuerySubaccountPositionsResponse>;
    SubaccountPositionInMarket(request: DeepPartial<QuerySubaccountPositionInMarketRequest>, metadata?: grpc.Metadata): Promise<QuerySubaccountPositionInMarketResponse>;
    SubaccountEffectivePositionInMarket(request: DeepPartial<QuerySubaccountEffectivePositionInMarketRequest>, metadata?: grpc.Metadata): Promise<QuerySubaccountEffectivePositionInMarketResponse>;
    PerpetualMarketInfo(request: DeepPartial<QueryPerpetualMarketInfoRequest>, metadata?: grpc.Metadata): Promise<QueryPerpetualMarketInfoResponse>;
    ExpiryFuturesMarketInfo(request: DeepPartial<QueryExpiryFuturesMarketInfoRequest>, metadata?: grpc.Metadata): Promise<QueryExpiryFuturesMarketInfoResponse>;
    PerpetualMarketFunding(request: DeepPartial<QueryPerpetualMarketFundingRequest>, metadata?: grpc.Metadata): Promise<QueryPerpetualMarketFundingResponse>;
    SubaccountOrderMetadata(request: DeepPartial<QuerySubaccountOrderMetadataRequest>, metadata?: grpc.Metadata): Promise<QuerySubaccountOrderMetadataResponse>;
    TradeRewardPoints(request: DeepPartial<QueryTradeRewardPointsRequest>, metadata?: grpc.Metadata): Promise<QueryTradeRewardPointsResponse>;
    PendingTradeRewardPoints(request: DeepPartial<QueryTradeRewardPointsRequest>, metadata?: grpc.Metadata): Promise<QueryTradeRewardPointsResponse>;
    TradeRewardCampaign(request: DeepPartial<QueryTradeRewardCampaignRequest>, metadata?: grpc.Metadata): Promise<QueryTradeRewardCampaignResponse>;
    FeeDiscountAccountInfo(request: DeepPartial<QueryFeeDiscountAccountInfoRequest>, metadata?: grpc.Metadata): Promise<QueryFeeDiscountAccountInfoResponse>;
    FeeDiscountSchedule(request: DeepPartial<QueryFeeDiscountScheduleRequest>, metadata?: grpc.Metadata): Promise<QueryFeeDiscountScheduleResponse>;
    BalanceMismatches(request: DeepPartial<QueryBalanceMismatchesRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceMismatchesResponse>;
    BalanceWithBalanceHolds(request: DeepPartial<QueryBalanceWithBalanceHoldsRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceWithBalanceHoldsResponse>;
    FeeDiscountTierStatistics(request: DeepPartial<QueryFeeDiscountTierStatisticsRequest>, metadata?: grpc.Metadata): Promise<QueryFeeDiscountTierStatisticsResponse>;
    MitoVaultInfos(request: DeepPartial<MitoVaultInfosRequest>, metadata?: grpc.Metadata): Promise<MitoVaultInfosResponse>;
    QueryMarketIDFromVault(request: DeepPartial<QueryMarketIDFromVaultRequest>, metadata?: grpc.Metadata): Promise<QueryMarketIDFromVaultResponse>;
    HistoricalTradeRecords(request: DeepPartial<QueryHistoricalTradeRecordsRequest>, metadata?: grpc.Metadata): Promise<QueryHistoricalTradeRecordsResponse>;
    IsOptedOutOfRewards(request: DeepPartial<QueryIsOptedOutOfRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryIsOptedOutOfRewardsResponse>;
    OptedOutOfRewardsAccounts(request: DeepPartial<QueryOptedOutOfRewardsAccountsRequest>, metadata?: grpc.Metadata): Promise<QueryOptedOutOfRewardsAccountsResponse>;
    MarketVolatility(request: DeepPartial<QueryMarketVolatilityRequest>, metadata?: grpc.Metadata): Promise<QueryMarketVolatilityResponse>;
    BinaryOptionsMarkets(request: DeepPartial<QueryBinaryMarketsRequest>, metadata?: grpc.Metadata): Promise<QueryBinaryMarketsResponse>;
    TraderDerivativeConditionalOrders(request: DeepPartial<QueryTraderDerivativeConditionalOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryTraderDerivativeConditionalOrdersResponse>;
    MarketAtomicExecutionFeeMultiplier(request: DeepPartial<QueryMarketAtomicExecutionFeeMultiplierRequest>, metadata?: grpc.Metadata): Promise<QueryMarketAtomicExecutionFeeMultiplierResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryQueryExchangeParamsDesc: UnaryMethodDefinitionish;
export declare const QuerySubaccountDepositsDesc: UnaryMethodDefinitionish;
export declare const QuerySubaccountDepositDesc: UnaryMethodDefinitionish;
export declare const QueryExchangeBalancesDesc: UnaryMethodDefinitionish;
export declare const QueryAggregateVolumeDesc: UnaryMethodDefinitionish;
export declare const QueryAggregateVolumesDesc: UnaryMethodDefinitionish;
export declare const QueryAggregateMarketVolumeDesc: UnaryMethodDefinitionish;
export declare const QueryAggregateMarketVolumesDesc: UnaryMethodDefinitionish;
export declare const QueryDenomDecimalDesc: UnaryMethodDefinitionish;
export declare const QueryDenomDecimalsDesc: UnaryMethodDefinitionish;
export declare const QuerySpotMarketsDesc: UnaryMethodDefinitionish;
export declare const QuerySpotMarketDesc: UnaryMethodDefinitionish;
export declare const QueryFullSpotMarketsDesc: UnaryMethodDefinitionish;
export declare const QueryFullSpotMarketDesc: UnaryMethodDefinitionish;
export declare const QuerySpotOrderbookDesc: UnaryMethodDefinitionish;
export declare const QueryTraderSpotOrdersDesc: UnaryMethodDefinitionish;
export declare const QueryAccountAddressSpotOrdersDesc: UnaryMethodDefinitionish;
export declare const QuerySpotOrdersByHashesDesc: UnaryMethodDefinitionish;
export declare const QuerySubaccountOrdersDesc: UnaryMethodDefinitionish;
export declare const QueryTraderSpotTransientOrdersDesc: UnaryMethodDefinitionish;
export declare const QuerySpotMidPriceAndTOBDesc: UnaryMethodDefinitionish;
export declare const QueryDerivativeMidPriceAndTOBDesc: UnaryMethodDefinitionish;
export declare const QueryDerivativeOrderbookDesc: UnaryMethodDefinitionish;
export declare const QueryTraderDerivativeOrdersDesc: UnaryMethodDefinitionish;
export declare const QueryAccountAddressDerivativeOrdersDesc: UnaryMethodDefinitionish;
export declare const QueryDerivativeOrdersByHashesDesc: UnaryMethodDefinitionish;
export declare const QueryTraderDerivativeTransientOrdersDesc: UnaryMethodDefinitionish;
export declare const QueryDerivativeMarketsDesc: UnaryMethodDefinitionish;
export declare const QueryDerivativeMarketDesc: UnaryMethodDefinitionish;
export declare const QueryDerivativeMarketAddressDesc: UnaryMethodDefinitionish;
export declare const QuerySubaccountTradeNonceDesc: UnaryMethodDefinitionish;
export declare const QueryExchangeModuleStateDesc: UnaryMethodDefinitionish;
export declare const QueryPositionsDesc: UnaryMethodDefinitionish;
export declare const QuerySubaccountPositionsDesc: UnaryMethodDefinitionish;
export declare const QuerySubaccountPositionInMarketDesc: UnaryMethodDefinitionish;
export declare const QuerySubaccountEffectivePositionInMarketDesc: UnaryMethodDefinitionish;
export declare const QueryPerpetualMarketInfoDesc: UnaryMethodDefinitionish;
export declare const QueryExpiryFuturesMarketInfoDesc: UnaryMethodDefinitionish;
export declare const QueryPerpetualMarketFundingDesc: UnaryMethodDefinitionish;
export declare const QuerySubaccountOrderMetadataDesc: UnaryMethodDefinitionish;
export declare const QueryTradeRewardPointsDesc: UnaryMethodDefinitionish;
export declare const QueryPendingTradeRewardPointsDesc: UnaryMethodDefinitionish;
export declare const QueryTradeRewardCampaignDesc: UnaryMethodDefinitionish;
export declare const QueryFeeDiscountAccountInfoDesc: UnaryMethodDefinitionish;
export declare const QueryFeeDiscountScheduleDesc: UnaryMethodDefinitionish;
export declare const QueryBalanceMismatchesDesc: UnaryMethodDefinitionish;
export declare const QueryBalanceWithBalanceHoldsDesc: UnaryMethodDefinitionish;
export declare const QueryFeeDiscountTierStatisticsDesc: UnaryMethodDefinitionish;
export declare const QueryMitoVaultInfosDesc: UnaryMethodDefinitionish;
export declare const QueryQueryMarketIDFromVaultDesc: UnaryMethodDefinitionish;
export declare const QueryHistoricalTradeRecordsDesc: UnaryMethodDefinitionish;
export declare const QueryIsOptedOutOfRewardsDesc: UnaryMethodDefinitionish;
export declare const QueryOptedOutOfRewardsAccountsDesc: UnaryMethodDefinitionish;
export declare const QueryMarketVolatilityDesc: UnaryMethodDefinitionish;
export declare const QueryBinaryOptionsMarketsDesc: UnaryMethodDefinitionish;
export declare const QueryTraderDerivativeConditionalOrdersDesc: UnaryMethodDefinitionish;
export declare const QueryMarketAtomicExecutionFeeMultiplierDesc: UnaryMethodDefinitionish;
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
