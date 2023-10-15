"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySpotMidPriceAndTOBRequest = exports.QueryAccountAddressSpotOrdersResponse = exports.QueryTraderSpotOrdersResponse = exports.TrimmedSpotLimitOrder = exports.QueryAccountAddressSpotOrdersRequest = exports.QueryTraderSpotOrdersRequest = exports.QuerySpotOrdersByHashesResponse = exports.QuerySpotOrdersByHashesRequest = exports.QueryFullSpotMarketResponse = exports.QueryFullSpotMarketRequest = exports.QueryFullSpotMarketsResponse = exports.QueryFullSpotMarketsRequest = exports.FullSpotMarket = exports.QuerySpotOrderbookResponse = exports.QuerySpotOrderbookRequest = exports.QuerySpotMarketResponse = exports.QuerySpotMarketRequest = exports.QuerySpotMarketsResponse = exports.QuerySpotMarketsRequest = exports.QuerySubaccountDepositResponse = exports.QuerySubaccountDepositRequest = exports.QueryAggregateMarketVolumesResponse = exports.QueryAggregateMarketVolumesRequest = exports.QueryDenomDecimalsResponse = exports.QueryDenomDecimalsRequest = exports.QueryDenomDecimalResponse = exports.QueryDenomDecimalRequest = exports.QueryAggregateMarketVolumeResponse = exports.QueryAggregateMarketVolumeRequest = exports.QueryAggregateVolumesResponse = exports.QueryAggregateVolumesRequest = exports.QueryAggregateVolumeResponse = exports.QueryAggregateVolumeRequest = exports.QueryExchangeBalancesResponse = exports.QueryExchangeBalancesRequest = exports.QuerySubaccountDepositsResponse_DepositsEntry = exports.QuerySubaccountDepositsResponse = exports.QuerySubaccountDepositsRequest = exports.QueryExchangeParamsResponse = exports.QueryExchangeParamsRequest = exports.SubaccountOrderbookMetadataWithMarket = exports.QuerySubaccountOrdersResponse = exports.QuerySubaccountOrdersRequest = exports.Subaccount = exports.cancellationStrategyToJSON = exports.cancellationStrategyFromJSON = exports.CancellationStrategy = exports.orderSideToJSON = exports.orderSideFromJSON = exports.OrderSide = void 0;
exports.QueryIsOptedOutOfRewardsResponse = exports.QueryIsOptedOutOfRewardsRequest = exports.QueryTradeRewardCampaignResponse = exports.QueryTradeRewardCampaignRequest = exports.QueryTradeRewardPointsResponse = exports.QueryTradeRewardPointsRequest = exports.QueryPositionsResponse = exports.QueryPositionsRequest = exports.QueryModuleStateResponse = exports.QueryModuleStateRequest = exports.QuerySubaccountTradeNonceResponse = exports.QuerySubaccountOrderMetadataResponse = exports.QueryPerpetualMarketFundingResponse = exports.QueryPerpetualMarketFundingRequest = exports.QueryExpiryFuturesMarketInfoResponse = exports.QueryExpiryFuturesMarketInfoRequest = exports.QueryPerpetualMarketInfoResponse = exports.QueryPerpetualMarketInfoRequest = exports.QuerySubaccountEffectivePositionInMarketResponse = exports.EffectivePosition = exports.QuerySubaccountPositionInMarketResponse = exports.QuerySubaccountPositionsResponse = exports.QuerySubaccountOrderMetadataRequest = exports.QuerySubaccountEffectivePositionInMarketRequest = exports.QuerySubaccountPositionInMarketRequest = exports.QuerySubaccountPositionsRequest = exports.QuerySubaccountTradeNonceRequest = exports.QueryDerivativeMarketAddressResponse = exports.QueryDerivativeMarketAddressRequest = exports.QueryDerivativeMarketResponse = exports.QueryDerivativeMarketRequest = exports.QueryDerivativeMarketsResponse = exports.FullDerivativeMarket = exports.PerpetualMarketState = exports.PriceLevel = exports.QueryDerivativeMarketsRequest = exports.QueryDerivativeOrdersByHashesResponse = exports.QueryDerivativeOrdersByHashesRequest = exports.QueryAccountAddressDerivativeOrdersResponse = exports.QueryTraderDerivativeOrdersResponse = exports.TrimmedDerivativeLimitOrder = exports.QueryAccountAddressDerivativeOrdersRequest = exports.QueryTraderDerivativeOrdersRequest = exports.QueryTraderDerivativeOrdersToCancelUpToAmountRequest = exports.QueryTraderSpotOrdersToCancelUpToAmountRequest = exports.QueryDerivativeOrderbookResponse = exports.QueryDerivativeOrderbookRequest = exports.QueryDerivativeMidPriceAndTOBResponse = exports.QueryDerivativeMidPriceAndTOBRequest = exports.QuerySpotMidPriceAndTOBResponse = void 0;
exports.QueryAccountAddressSpotOrdersDesc = exports.QueryTraderSpotOrdersDesc = exports.QuerySpotOrderbookDesc = exports.QueryFullSpotMarketDesc = exports.QueryFullSpotMarketsDesc = exports.QuerySpotMarketDesc = exports.QuerySpotMarketsDesc = exports.QueryDenomDecimalsDesc = exports.QueryDenomDecimalDesc = exports.QueryAggregateMarketVolumesDesc = exports.QueryAggregateMarketVolumeDesc = exports.QueryAggregateVolumesDesc = exports.QueryAggregateVolumeDesc = exports.QueryExchangeBalancesDesc = exports.QuerySubaccountDepositDesc = exports.QuerySubaccountDepositsDesc = exports.QueryQueryExchangeParamsDesc = exports.QueryDesc = exports.QueryClientImpl = exports.QueryMarketAtomicExecutionFeeMultiplierResponse = exports.QueryMarketAtomicExecutionFeeMultiplierRequest = exports.QueryTraderDerivativeConditionalOrdersResponse = exports.TrimmedDerivativeConditionalOrder = exports.QueryTraderDerivativeConditionalOrdersRequest = exports.QueryBinaryMarketsResponse = exports.QueryBinaryMarketsRequest = exports.QueryMarketVolatilityResponse = exports.QueryMarketVolatilityRequest = exports.TradeHistoryOptions = exports.QueryHistoricalTradeRecordsResponse = exports.QueryHistoricalTradeRecordsRequest = exports.QueryMarketIDFromVaultResponse = exports.QueryMarketIDFromVaultRequest = exports.MitoVaultInfosResponse = exports.MitoVaultInfosRequest = exports.QueryFeeDiscountTierStatisticsResponse = exports.TierStatistic = exports.QueryFeeDiscountTierStatisticsRequest = exports.QueryBalanceWithBalanceHoldsResponse = exports.BalanceWithMarginHold = exports.QueryBalanceWithBalanceHoldsRequest = exports.QueryBalanceMismatchesResponse = exports.BalanceMismatch = exports.QueryBalanceMismatchesRequest = exports.QueryFeeDiscountScheduleResponse = exports.QueryFeeDiscountScheduleRequest = exports.QueryFeeDiscountAccountInfoResponse = exports.QueryFeeDiscountAccountInfoRequest = exports.QueryOptedOutOfRewardsAccountsResponse = exports.QueryOptedOutOfRewardsAccountsRequest = void 0;
exports.GrpcWebError = exports.GrpcWebImpl = exports.QueryMarketAtomicExecutionFeeMultiplierDesc = exports.QueryTraderDerivativeConditionalOrdersDesc = exports.QueryBinaryOptionsMarketsDesc = exports.QueryMarketVolatilityDesc = exports.QueryOptedOutOfRewardsAccountsDesc = exports.QueryIsOptedOutOfRewardsDesc = exports.QueryHistoricalTradeRecordsDesc = exports.QueryQueryMarketIDFromVaultDesc = exports.QueryMitoVaultInfosDesc = exports.QueryFeeDiscountTierStatisticsDesc = exports.QueryBalanceWithBalanceHoldsDesc = exports.QueryBalanceMismatchesDesc = exports.QueryFeeDiscountScheduleDesc = exports.QueryFeeDiscountAccountInfoDesc = exports.QueryTradeRewardCampaignDesc = exports.QueryPendingTradeRewardPointsDesc = exports.QueryTradeRewardPointsDesc = exports.QuerySubaccountOrderMetadataDesc = exports.QueryPerpetualMarketFundingDesc = exports.QueryExpiryFuturesMarketInfoDesc = exports.QueryPerpetualMarketInfoDesc = exports.QuerySubaccountEffectivePositionInMarketDesc = exports.QuerySubaccountPositionInMarketDesc = exports.QuerySubaccountPositionsDesc = exports.QueryPositionsDesc = exports.QueryExchangeModuleStateDesc = exports.QuerySubaccountTradeNonceDesc = exports.QueryDerivativeMarketAddressDesc = exports.QueryDerivativeMarketDesc = exports.QueryDerivativeMarketsDesc = exports.QueryTraderDerivativeTransientOrdersDesc = exports.QueryDerivativeOrdersByHashesDesc = exports.QueryAccountAddressDerivativeOrdersDesc = exports.QueryTraderDerivativeOrdersDesc = exports.QueryDerivativeOrderbookDesc = exports.QueryDerivativeMidPriceAndTOBDesc = exports.QuerySpotMidPriceAndTOBDesc = exports.QueryTraderSpotTransientOrdersDesc = exports.QuerySubaccountOrdersDesc = exports.QuerySpotOrdersByHashesDesc = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const oracle_1 = require("../../oracle/v1beta1/oracle");
const exchange_1 = require("./exchange");
const genesis_1 = require("./genesis");
var OrderSide;
(function (OrderSide) {
    /** Side_Unspecified - will return both */
    OrderSide[OrderSide["Side_Unspecified"] = 0] = "Side_Unspecified";
    OrderSide[OrderSide["Buy"] = 1] = "Buy";
    OrderSide[OrderSide["Sell"] = 2] = "Sell";
    OrderSide[OrderSide["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderSide = exports.OrderSide || (exports.OrderSide = {}));
function orderSideFromJSON(object) {
    switch (object) {
        case 0:
        case "Side_Unspecified":
            return OrderSide.Side_Unspecified;
        case 1:
        case "Buy":
            return OrderSide.Buy;
        case 2:
        case "Sell":
            return OrderSide.Sell;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderSide.UNRECOGNIZED;
    }
}
exports.orderSideFromJSON = orderSideFromJSON;
function orderSideToJSON(object) {
    switch (object) {
        case OrderSide.Side_Unspecified:
            return "Side_Unspecified";
        case OrderSide.Buy:
            return "Buy";
        case OrderSide.Sell:
            return "Sell";
        case OrderSide.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.orderSideToJSON = orderSideToJSON;
/** CancellationStrategy is the list of cancellation strategies. */
var CancellationStrategy;
(function (CancellationStrategy) {
    /** UnspecifiedOrder - just cancelling in random order in most efficient way */
    CancellationStrategy[CancellationStrategy["UnspecifiedOrder"] = 0] = "UnspecifiedOrder";
    /** FromWorstToBest - e.g. for buy orders from lowest to highest price */
    CancellationStrategy[CancellationStrategy["FromWorstToBest"] = 1] = "FromWorstToBest";
    /** FromBestToWorst - e.g. for buy orders from higest to lowest price */
    CancellationStrategy[CancellationStrategy["FromBestToWorst"] = 2] = "FromBestToWorst";
    CancellationStrategy[CancellationStrategy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CancellationStrategy = exports.CancellationStrategy || (exports.CancellationStrategy = {}));
function cancellationStrategyFromJSON(object) {
    switch (object) {
        case 0:
        case "UnspecifiedOrder":
            return CancellationStrategy.UnspecifiedOrder;
        case 1:
        case "FromWorstToBest":
            return CancellationStrategy.FromWorstToBest;
        case 2:
        case "FromBestToWorst":
            return CancellationStrategy.FromBestToWorst;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CancellationStrategy.UNRECOGNIZED;
    }
}
exports.cancellationStrategyFromJSON = cancellationStrategyFromJSON;
function cancellationStrategyToJSON(object) {
    switch (object) {
        case CancellationStrategy.UnspecifiedOrder:
            return "UnspecifiedOrder";
        case CancellationStrategy.FromWorstToBest:
            return "FromWorstToBest";
        case CancellationStrategy.FromBestToWorst:
            return "FromBestToWorst";
        case CancellationStrategy.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.cancellationStrategyToJSON = cancellationStrategyToJSON;
function createBaseSubaccount() {
    return { trader: "", subaccountNonce: 0 };
}
exports.Subaccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.trader !== "") {
            writer.uint32(10).string(message.trader);
        }
        if (message.subaccountNonce !== 0) {
            writer.uint32(16).uint32(message.subaccountNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.trader = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.subaccountNonce = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            trader: isSet(object.trader) ? String(object.trader) : "",
            subaccountNonce: isSet(object.subaccountNonce) ? Number(object.subaccountNonce) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.trader !== undefined && (obj.trader = message.trader);
        message.subaccountNonce !== undefined && (obj.subaccountNonce = Math.round(message.subaccountNonce));
        return obj;
    },
    create(base) {
        return exports.Subaccount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubaccount();
        message.trader = (_a = object.trader) !== null && _a !== void 0 ? _a : "";
        message.subaccountNonce = (_b = object.subaccountNonce) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseQuerySubaccountOrdersRequest() {
    return { subaccountId: "", marketId: "" };
}
exports.QuerySubaccountOrdersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountOrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuerySubaccountOrdersRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQuerySubaccountOrdersResponse() {
    return { buyOrders: [], sellOrders: [] };
}
exports.QuerySubaccountOrdersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.buyOrders) {
            exchange_1.SubaccountOrderData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sellOrders) {
            exchange_1.SubaccountOrderData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.buyOrders.push(exchange_1.SubaccountOrderData.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sellOrders.push(exchange_1.SubaccountOrderData.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            buyOrders: Array.isArray(object === null || object === void 0 ? void 0 : object.buyOrders)
                ? object.buyOrders.map((e) => exchange_1.SubaccountOrderData.fromJSON(e))
                : [],
            sellOrders: Array.isArray(object === null || object === void 0 ? void 0 : object.sellOrders)
                ? object.sellOrders.map((e) => exchange_1.SubaccountOrderData.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.buyOrders) {
            obj.buyOrders = message.buyOrders.map((e) => e ? exchange_1.SubaccountOrderData.toJSON(e) : undefined);
        }
        else {
            obj.buyOrders = [];
        }
        if (message.sellOrders) {
            obj.sellOrders = message.sellOrders.map((e) => e ? exchange_1.SubaccountOrderData.toJSON(e) : undefined);
        }
        else {
            obj.sellOrders = [];
        }
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuerySubaccountOrdersResponse();
        message.buyOrders = ((_a = object.buyOrders) === null || _a === void 0 ? void 0 : _a.map((e) => exchange_1.SubaccountOrderData.fromPartial(e))) || [];
        message.sellOrders = ((_b = object.sellOrders) === null || _b === void 0 ? void 0 : _b.map((e) => exchange_1.SubaccountOrderData.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSubaccountOrderbookMetadataWithMarket() {
    return { metadata: undefined, marketId: "", isBuy: false };
}
exports.SubaccountOrderbookMetadataWithMarket = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.metadata !== undefined) {
            exchange_1.SubaccountOrderbookMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.isBuy === true) {
            writer.uint32(24).bool(message.isBuy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountOrderbookMetadataWithMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.metadata = exchange_1.SubaccountOrderbookMetadata.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isBuy = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            metadata: isSet(object.metadata) ? exchange_1.SubaccountOrderbookMetadata.fromJSON(object.metadata) : undefined,
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.metadata !== undefined &&
            (obj.metadata = message.metadata ? exchange_1.SubaccountOrderbookMetadata.toJSON(message.metadata) : undefined);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.isBuy !== undefined && (obj.isBuy = message.isBuy);
        return obj;
    },
    create(base) {
        return exports.SubaccountOrderbookMetadataWithMarket.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubaccountOrderbookMetadataWithMarket();
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? exchange_1.SubaccountOrderbookMetadata.fromPartial(object.metadata)
            : undefined;
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.isBuy = (_b = object.isBuy) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseQueryExchangeParamsRequest() {
    return {};
}
exports.QueryExchangeParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.QueryExchangeParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryExchangeParamsRequest();
        return message;
    },
};
function createBaseQueryExchangeParamsResponse() {
    return { params: undefined };
}
exports.QueryExchangeParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            exchange_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = exchange_1.Params.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { params: isSet(object.params) ? exchange_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? exchange_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryExchangeParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryExchangeParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? exchange_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQuerySubaccountDepositsRequest() {
    return { subaccountId: "", subaccount: undefined };
}
exports.QuerySubaccountDepositsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.subaccount !== undefined) {
            exports.Subaccount.encode(message.subaccount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.subaccount = exports.Subaccount.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            subaccount: isSet(object.subaccount) ? exports.Subaccount.fromJSON(object.subaccount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.subaccount !== undefined &&
            (obj.subaccount = message.subaccount ? exports.Subaccount.toJSON(message.subaccount) : undefined);
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountDepositsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySubaccountDepositsRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.subaccount = (object.subaccount !== undefined && object.subaccount !== null)
            ? exports.Subaccount.fromPartial(object.subaccount)
            : undefined;
        return message;
    },
};
function createBaseQuerySubaccountDepositsResponse() {
    return { deposits: {} };
}
exports.QuerySubaccountDepositsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.deposits).forEach(([key, value]) => {
            exports.QuerySubaccountDepositsResponse_DepositsEntry.encode({ key: key, value }, writer.uint32(10).fork())
                .ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountDepositsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    const entry1 = exports.QuerySubaccountDepositsResponse_DepositsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.deposits[entry1.key] = entry1.value;
                    }
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            deposits: isObject(object.deposits)
                ? Object.entries(object.deposits).reduce((acc, [key, value]) => {
                    acc[key] = exchange_1.Deposit.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        obj.deposits = {};
        if (message.deposits) {
            Object.entries(message.deposits).forEach(([k, v]) => {
                obj.deposits[k] = exchange_1.Deposit.toJSON(v);
            });
        }
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountDepositsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySubaccountDepositsResponse();
        message.deposits = Object.entries((_a = object.deposits) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exchange_1.Deposit.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseQuerySubaccountDepositsResponse_DepositsEntry() {
    return { key: "", value: undefined };
}
exports.QuerySubaccountDepositsResponse_DepositsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exchange_1.Deposit.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exchange_1.Deposit.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exchange_1.Deposit.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? exchange_1.Deposit.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountDepositsResponse_DepositsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exchange_1.Deposit.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseQueryExchangeBalancesRequest() {
    return {};
}
exports.QueryExchangeBalancesRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeBalancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.QueryExchangeBalancesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryExchangeBalancesRequest();
        return message;
    },
};
function createBaseQueryExchangeBalancesResponse() {
    return { balances: [] };
}
exports.QueryExchangeBalancesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.balances) {
            genesis_1.Balance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.balances.push(genesis_1.Balance.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances) ? object.balances.map((e) => genesis_1.Balance.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.balances) {
            obj.balances = message.balances.map((e) => e ? genesis_1.Balance.toJSON(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryExchangeBalancesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExchangeBalancesResponse();
        message.balances = ((_a = object.balances) === null || _a === void 0 ? void 0 : _a.map((e) => genesis_1.Balance.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAggregateVolumeRequest() {
    return { account: "" };
}
exports.QueryAggregateVolumeRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateVolumeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { account: isSet(object.account) ? String(object.account) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    create(base) {
        return exports.QueryAggregateVolumeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAggregateVolumeRequest();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryAggregateVolumeResponse() {
    return { aggregateVolumes: [] };
}
exports.QueryAggregateVolumeResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.aggregateVolumes) {
            exchange_1.MarketVolume.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateVolumeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.aggregateVolumes.push(exchange_1.MarketVolume.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            aggregateVolumes: Array.isArray(object === null || object === void 0 ? void 0 : object.aggregateVolumes)
                ? object.aggregateVolumes.map((e) => exchange_1.MarketVolume.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.aggregateVolumes) {
            obj.aggregateVolumes = message.aggregateVolumes.map((e) => e ? exchange_1.MarketVolume.toJSON(e) : undefined);
        }
        else {
            obj.aggregateVolumes = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryAggregateVolumeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAggregateVolumeResponse();
        message.aggregateVolumes = ((_a = object.aggregateVolumes) === null || _a === void 0 ? void 0 : _a.map((e) => exchange_1.MarketVolume.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAggregateVolumesRequest() {
    return { accounts: [], marketIds: [] };
}
exports.QueryAggregateVolumesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accounts) {
            writer.uint32(10).string(v);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateVolumesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accounts.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketIds.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map((e) => String(e)) : [],
            marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e);
        }
        else {
            obj.accounts = [];
        }
        if (message.marketIds) {
            obj.marketIds = message.marketIds.map((e) => e);
        }
        else {
            obj.marketIds = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryAggregateVolumesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryAggregateVolumesRequest();
        message.accounts = ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.marketIds = ((_b = object.marketIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryAggregateVolumesResponse() {
    return { aggregateAccountVolumes: [], aggregateMarketVolumes: [] };
}
exports.QueryAggregateVolumesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.aggregateAccountVolumes) {
            exchange_1.AggregateAccountVolumeRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.aggregateMarketVolumes) {
            exchange_1.MarketVolume.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateVolumesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.aggregateAccountVolumes.push(exchange_1.AggregateAccountVolumeRecord.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.aggregateMarketVolumes.push(exchange_1.MarketVolume.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            aggregateAccountVolumes: Array.isArray(object === null || object === void 0 ? void 0 : object.aggregateAccountVolumes)
                ? object.aggregateAccountVolumes.map((e) => exchange_1.AggregateAccountVolumeRecord.fromJSON(e))
                : [],
            aggregateMarketVolumes: Array.isArray(object === null || object === void 0 ? void 0 : object.aggregateMarketVolumes)
                ? object.aggregateMarketVolumes.map((e) => exchange_1.MarketVolume.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.aggregateAccountVolumes) {
            obj.aggregateAccountVolumes = message.aggregateAccountVolumes.map((e) => e ? exchange_1.AggregateAccountVolumeRecord.toJSON(e) : undefined);
        }
        else {
            obj.aggregateAccountVolumes = [];
        }
        if (message.aggregateMarketVolumes) {
            obj.aggregateMarketVolumes = message.aggregateMarketVolumes.map((e) => e ? exchange_1.MarketVolume.toJSON(e) : undefined);
        }
        else {
            obj.aggregateMarketVolumes = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryAggregateVolumesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryAggregateVolumesResponse();
        message.aggregateAccountVolumes =
            ((_a = object.aggregateAccountVolumes) === null || _a === void 0 ? void 0 : _a.map((e) => exchange_1.AggregateAccountVolumeRecord.fromPartial(e))) || [];
        message.aggregateMarketVolumes = ((_b = object.aggregateMarketVolumes) === null || _b === void 0 ? void 0 : _b.map((e) => exchange_1.MarketVolume.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAggregateMarketVolumeRequest() {
    return { marketId: "" };
}
exports.QueryAggregateMarketVolumeRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateMarketVolumeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.QueryAggregateMarketVolumeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAggregateMarketVolumeRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryAggregateMarketVolumeResponse() {
    return { volume: undefined };
}
exports.QueryAggregateMarketVolumeResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.volume !== undefined) {
            exchange_1.VolumeRecord.encode(message.volume, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateMarketVolumeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.volume = exchange_1.VolumeRecord.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { volume: isSet(object.volume) ? exchange_1.VolumeRecord.fromJSON(object.volume) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.volume !== undefined && (obj.volume = message.volume ? exchange_1.VolumeRecord.toJSON(message.volume) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryAggregateMarketVolumeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryAggregateMarketVolumeResponse();
        message.volume = (object.volume !== undefined && object.volume !== null)
            ? exchange_1.VolumeRecord.fromPartial(object.volume)
            : undefined;
        return message;
    },
};
function createBaseQueryDenomDecimalRequest() {
    return { denom: "" };
}
exports.QueryDenomDecimalRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomDecimalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { denom: isSet(object.denom) ? String(object.denom) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    create(base) {
        return exports.QueryDenomDecimalRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomDecimalRequest();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDenomDecimalResponse() {
    return { decimal: "0" };
}
exports.QueryDenomDecimalResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.decimal !== "0") {
            writer.uint32(8).uint64(message.decimal);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomDecimalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.decimal = longToString(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { decimal: isSet(object.decimal) ? String(object.decimal) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.decimal !== undefined && (obj.decimal = message.decimal);
        return obj;
    },
    create(base) {
        return exports.QueryDenomDecimalResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomDecimalResponse();
        message.decimal = (_a = object.decimal) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryDenomDecimalsRequest() {
    return { denoms: [] };
}
exports.QueryDenomDecimalsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomDecimalsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denoms.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { denoms: Array.isArray(object === null || object === void 0 ? void 0 : object.denoms) ? object.denoms.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map((e) => e);
        }
        else {
            obj.denoms = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryDenomDecimalsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomDecimalsRequest();
        message.denoms = ((_a = object.denoms) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryDenomDecimalsResponse() {
    return { denomDecimals: [] };
}
exports.QueryDenomDecimalsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.denomDecimals) {
            exchange_1.DenomDecimals.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomDecimalsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denomDecimals.push(exchange_1.DenomDecimals.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            denomDecimals: Array.isArray(object === null || object === void 0 ? void 0 : object.denomDecimals)
                ? object.denomDecimals.map((e) => exchange_1.DenomDecimals.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denomDecimals) {
            obj.denomDecimals = message.denomDecimals.map((e) => e ? exchange_1.DenomDecimals.toJSON(e) : undefined);
        }
        else {
            obj.denomDecimals = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryDenomDecimalsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomDecimalsResponse();
        message.denomDecimals = ((_a = object.denomDecimals) === null || _a === void 0 ? void 0 : _a.map((e) => exchange_1.DenomDecimals.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAggregateMarketVolumesRequest() {
    return { marketIds: [] };
}
exports.QueryAggregateMarketVolumesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.marketIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateMarketVolumesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketIds.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.marketIds) {
            obj.marketIds = message.marketIds.map((e) => e);
        }
        else {
            obj.marketIds = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryAggregateMarketVolumesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAggregateMarketVolumesRequest();
        message.marketIds = ((_a = object.marketIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryAggregateMarketVolumesResponse() {
    return { volumes: [] };
}
exports.QueryAggregateMarketVolumesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.volumes) {
            exchange_1.MarketVolume.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateMarketVolumesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.volumes.push(exchange_1.MarketVolume.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { volumes: Array.isArray(object === null || object === void 0 ? void 0 : object.volumes) ? object.volumes.map((e) => exchange_1.MarketVolume.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.volumes) {
            obj.volumes = message.volumes.map((e) => e ? exchange_1.MarketVolume.toJSON(e) : undefined);
        }
        else {
            obj.volumes = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryAggregateMarketVolumesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAggregateMarketVolumesResponse();
        message.volumes = ((_a = object.volumes) === null || _a === void 0 ? void 0 : _a.map((e) => exchange_1.MarketVolume.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQuerySubaccountDepositRequest() {
    return { subaccountId: "", denom: "" };
}
exports.QuerySubaccountDepositRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountDepositRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountDepositRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuerySubaccountDepositRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQuerySubaccountDepositResponse() {
    return { deposits: undefined };
}
exports.QuerySubaccountDepositResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deposits !== undefined) {
            exchange_1.Deposit.encode(message.deposits, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.deposits = exchange_1.Deposit.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { deposits: isSet(object.deposits) ? exchange_1.Deposit.fromJSON(object.deposits) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.deposits !== undefined && (obj.deposits = message.deposits ? exchange_1.Deposit.toJSON(message.deposits) : undefined);
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountDepositResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountDepositResponse();
        message.deposits = (object.deposits !== undefined && object.deposits !== null)
            ? exchange_1.Deposit.fromPartial(object.deposits)
            : undefined;
        return message;
    },
};
function createBaseQuerySpotMarketsRequest() {
    return { status: "", marketIds: [] };
}
exports.QuerySpotMarketsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMarketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketIds.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            status: isSet(object.status) ? String(object.status) : "",
            marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        if (message.marketIds) {
            obj.marketIds = message.marketIds.map((e) => e);
        }
        else {
            obj.marketIds = [];
        }
        return obj;
    },
    create(base) {
        return exports.QuerySpotMarketsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuerySpotMarketsRequest();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        message.marketIds = ((_b = object.marketIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseQuerySpotMarketsResponse() {
    return { markets: [] };
}
exports.QuerySpotMarketsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.markets) {
            exchange_1.SpotMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.markets.push(exchange_1.SpotMarket.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { markets: Array.isArray(object === null || object === void 0 ? void 0 : object.markets) ? object.markets.map((e) => exchange_1.SpotMarket.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map((e) => e ? exchange_1.SpotMarket.toJSON(e) : undefined);
        }
        else {
            obj.markets = [];
        }
        return obj;
    },
    create(base) {
        return exports.QuerySpotMarketsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySpotMarketsResponse();
        message.markets = ((_a = object.markets) === null || _a === void 0 ? void 0 : _a.map((e) => exchange_1.SpotMarket.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQuerySpotMarketRequest() {
    return { marketId: "" };
}
exports.QuerySpotMarketRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.QuerySpotMarketRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySpotMarketRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySpotMarketResponse() {
    return { market: undefined };
}
exports.QuerySpotMarketResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.market !== undefined) {
            exchange_1.SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.market = exchange_1.SpotMarket.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { market: isSet(object.market) ? exchange_1.SpotMarket.fromJSON(object.market) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined && (obj.market = message.market ? exchange_1.SpotMarket.toJSON(message.market) : undefined);
        return obj;
    },
    create(base) {
        return exports.QuerySpotMarketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQuerySpotMarketResponse();
        message.market = (object.market !== undefined && object.market !== null)
            ? exchange_1.SpotMarket.fromPartial(object.market)
            : undefined;
        return message;
    },
};
function createBaseQuerySpotOrderbookRequest() {
    return { marketId: "", limit: "0", orderSide: 0, limitCumulativeNotional: "", limitCumulativeQuantity: "" };
}
exports.QuerySpotOrderbookRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.limit !== "0") {
            writer.uint32(16).uint64(message.limit);
        }
        if (message.orderSide !== 0) {
            writer.uint32(24).int32(message.orderSide);
        }
        if (message.limitCumulativeNotional !== "") {
            writer.uint32(34).string(message.limitCumulativeNotional);
        }
        if (message.limitCumulativeQuantity !== "") {
            writer.uint32(42).string(message.limitCumulativeQuantity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotOrderbookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.limit = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.orderSide = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.limitCumulativeNotional = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.limitCumulativeQuantity = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            limit: isSet(object.limit) ? String(object.limit) : "0",
            orderSide: isSet(object.orderSide) ? orderSideFromJSON(object.orderSide) : 0,
            limitCumulativeNotional: isSet(object.limitCumulativeNotional) ? String(object.limitCumulativeNotional) : "",
            limitCumulativeQuantity: isSet(object.limitCumulativeQuantity) ? String(object.limitCumulativeQuantity) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.limit !== undefined && (obj.limit = message.limit);
        message.orderSide !== undefined && (obj.orderSide = orderSideToJSON(message.orderSide));
        message.limitCumulativeNotional !== undefined && (obj.limitCumulativeNotional = message.limitCumulativeNotional);
        message.limitCumulativeQuantity !== undefined && (obj.limitCumulativeQuantity = message.limitCumulativeQuantity);
        return obj;
    },
    create(base) {
        return exports.QuerySpotOrderbookRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseQuerySpotOrderbookRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.limit = (_b = object.limit) !== null && _b !== void 0 ? _b : "0";
        message.orderSide = (_c = object.orderSide) !== null && _c !== void 0 ? _c : 0;
        message.limitCumulativeNotional = (_d = object.limitCumulativeNotional) !== null && _d !== void 0 ? _d : "";
        message.limitCumulativeQuantity = (_e = object.limitCumulativeQuantity) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseQuerySpotOrderbookResponse() {
    return { buysPriceLevel: [], sellsPriceLevel: [] };
}
exports.QuerySpotOrderbookResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.buysPriceLevel) {
            exchange_1.Level.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sellsPriceLevel) {
            exchange_1.Level.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotOrderbookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.buysPriceLevel.push(exchange_1.Level.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sellsPriceLevel.push(exchange_1.Level.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            buysPriceLevel: Array.isArray(object === null || object === void 0 ? void 0 : object.buysPriceLevel)
                ? object.buysPriceLevel.map((e) => exchange_1.Level.fromJSON(e))
                : [],
            sellsPriceLevel: Array.isArray(object === null || object === void 0 ? void 0 : object.sellsPriceLevel)
                ? object.sellsPriceLevel.map((e) => exchange_1.Level.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.buysPriceLevel) {
            obj.buysPriceLevel = message.buysPriceLevel.map((e) => e ? exchange_1.Level.toJSON(e) : undefined);
        }
        else {
            obj.buysPriceLevel = [];
        }
        if (message.sellsPriceLevel) {
            obj.sellsPriceLevel = message.sellsPriceLevel.map((e) => e ? exchange_1.Level.toJSON(e) : undefined);
        }
        else {
            obj.sellsPriceLevel = [];
        }
        return obj;
    },
    create(base) {
        return exports.QuerySpotOrderbookResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuerySpotOrderbookResponse();
        message.buysPriceLevel = ((_a = object.buysPriceLevel) === null || _a === void 0 ? void 0 : _a.map((e) => exchange_1.Level.fromPartial(e))) || [];
        message.sellsPriceLevel = ((_b = object.sellsPriceLevel) === null || _b === void 0 ? void 0 : _b.map((e) => exchange_1.Level.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFullSpotMarket() {
    return { market: undefined, midPriceAndTob: undefined };
}
exports.FullSpotMarket = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.market !== undefined) {
            exchange_1.SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        if (message.midPriceAndTob !== undefined) {
            exchange_1.MidPriceAndTOB.encode(message.midPriceAndTob, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFullSpotMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.market = exchange_1.SpotMarket.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.midPriceAndTob = exchange_1.MidPriceAndTOB.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            market: isSet(object.market) ? exchange_1.SpotMarket.fromJSON(object.market) : undefined,
            midPriceAndTob: isSet(object.midPriceAndTob) ? exchange_1.MidPriceAndTOB.fromJSON(object.midPriceAndTob) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined && (obj.market = message.market ? exchange_1.SpotMarket.toJSON(message.market) : undefined);
        message.midPriceAndTob !== undefined &&
            (obj.midPriceAndTob = message.midPriceAndTob ? exchange_1.MidPriceAndTOB.toJSON(message.midPriceAndTob) : undefined);
        return obj;
    },
    create(base) {
        return exports.FullSpotMarket.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseFullSpotMarket();
        message.market = (object.market !== undefined && object.market !== null)
            ? exchange_1.SpotMarket.fromPartial(object.market)
            : undefined;
        message.midPriceAndTob = (object.midPriceAndTob !== undefined && object.midPriceAndTob !== null)
            ? exchange_1.MidPriceAndTOB.fromPartial(object.midPriceAndTob)
            : undefined;
        return message;
    },
};
function createBaseQueryFullSpotMarketsRequest() {
    return { status: "", marketIds: [], withMidPriceAndTob: false };
}
exports.QueryFullSpotMarketsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        if (message.withMidPriceAndTob === true) {
            writer.uint32(24).bool(message.withMidPriceAndTob);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFullSpotMarketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketIds.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.withMidPriceAndTob = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            status: isSet(object.status) ? String(object.status) : "",
            marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [],
            withMidPriceAndTob: isSet(object.withMidPriceAndTob) ? Boolean(object.withMidPriceAndTob) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        if (message.marketIds) {
            obj.marketIds = message.marketIds.map((e) => e);
        }
        else {
            obj.marketIds = [];
        }
        message.withMidPriceAndTob !== undefined && (obj.withMidPriceAndTob = message.withMidPriceAndTob);
        return obj;
    },
    create(base) {
        return exports.QueryFullSpotMarketsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryFullSpotMarketsRequest();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        message.marketIds = ((_b = object.marketIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.withMidPriceAndTob = (_c = object.withMidPriceAndTob) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseQueryFullSpotMarketsResponse() {
    return { markets: [] };
}
exports.QueryFullSpotMarketsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.markets) {
            exports.FullSpotMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFullSpotMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.markets.push(exports.FullSpotMarket.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            markets: Array.isArray(object === null || object === void 0 ? void 0 : object.markets) ? object.markets.map((e) => exports.FullSpotMarket.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map((e) => e ? exports.FullSpotMarket.toJSON(e) : undefined);
        }
        else {
            obj.markets = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryFullSpotMarketsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFullSpotMarketsResponse();
        message.markets = ((_a = object.markets) === null || _a === void 0 ? void 0 : _a.map((e) => exports.FullSpotMarket.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryFullSpotMarketRequest() {
    return { marketId: "", withMidPriceAndTob: false };
}
exports.QueryFullSpotMarketRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.withMidPriceAndTob === true) {
            writer.uint32(16).bool(message.withMidPriceAndTob);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFullSpotMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.withMidPriceAndTob = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            withMidPriceAndTob: isSet(object.withMidPriceAndTob) ? Boolean(object.withMidPriceAndTob) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.withMidPriceAndTob !== undefined && (obj.withMidPriceAndTob = message.withMidPriceAndTob);
        return obj;
    },
    create(base) {
        return exports.QueryFullSpotMarketRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryFullSpotMarketRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.withMidPriceAndTob = (_b = object.withMidPriceAndTob) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseQueryFullSpotMarketResponse() {
    return { market: undefined };
}
exports.QueryFullSpotMarketResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.market !== undefined) {
            exports.FullSpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFullSpotMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.market = exports.FullSpotMarket.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { market: isSet(object.market) ? exports.FullSpotMarket.fromJSON(object.market) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined && (obj.market = message.market ? exports.FullSpotMarket.toJSON(message.market) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryFullSpotMarketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryFullSpotMarketResponse();
        message.market = (object.market !== undefined && object.market !== null)
            ? exports.FullSpotMarket.fromPartial(object.market)
            : undefined;
        return message;
    },
};
function createBaseQuerySpotOrdersByHashesRequest() {
    return { marketId: "", subaccountId: "", orderHashes: [] };
}
exports.QuerySpotOrdersByHashesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        for (const v of message.orderHashes) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotOrdersByHashesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.orderHashes.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            orderHashes: Array.isArray(object === null || object === void 0 ? void 0 : object.orderHashes) ? object.orderHashes.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        if (message.orderHashes) {
            obj.orderHashes = message.orderHashes.map((e) => e);
        }
        else {
            obj.orderHashes = [];
        }
        return obj;
    },
    create(base) {
        return exports.QuerySpotOrdersByHashesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQuerySpotOrdersByHashesRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.orderHashes = ((_c = object.orderHashes) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseQuerySpotOrdersByHashesResponse() {
    return { orders: [] };
}
exports.QuerySpotOrdersByHashesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.orders) {
            exports.TrimmedSpotLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotOrdersByHashesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(exports.TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => exports.TrimmedSpotLimitOrder.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? exports.TrimmedSpotLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return exports.QuerySpotOrdersByHashesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySpotOrdersByHashesResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TrimmedSpotLimitOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryTraderSpotOrdersRequest() {
    return { marketId: "", subaccountId: "" };
}
exports.QueryTraderSpotOrdersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderSpotOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        return obj;
    },
    create(base) {
        return exports.QueryTraderSpotOrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryTraderSpotOrdersRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryAccountAddressSpotOrdersRequest() {
    return { marketId: "", accountAddress: "" };
}
exports.QueryAccountAddressSpotOrdersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountAddressSpotOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return exports.QueryAccountAddressSpotOrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryAccountAddressSpotOrdersRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.accountAddress = (_b = object.accountAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTrimmedSpotLimitOrder() {
    return { price: "", quantity: "", fillable: "", isBuy: false, orderHash: "" };
}
exports.TrimmedSpotLimitOrder = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(message.quantity);
        }
        if (message.fillable !== "") {
            writer.uint32(26).string(message.fillable);
        }
        if (message.isBuy === true) {
            writer.uint32(32).bool(message.isBuy);
        }
        if (message.orderHash !== "") {
            writer.uint32(42).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrimmedSpotLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.price = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.quantity = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.fillable = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isBuy = reader.bool();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.orderHash = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            price: isSet(object.price) ? String(object.price) : "",
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            fillable: isSet(object.fillable) ? String(object.fillable) : "",
            isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false,
            orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.fillable !== undefined && (obj.fillable = message.fillable);
        message.isBuy !== undefined && (obj.isBuy = message.isBuy);
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        return obj;
    },
    create(base) {
        return exports.TrimmedSpotLimitOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseTrimmedSpotLimitOrder();
        message.price = (_a = object.price) !== null && _a !== void 0 ? _a : "";
        message.quantity = (_b = object.quantity) !== null && _b !== void 0 ? _b : "";
        message.fillable = (_c = object.fillable) !== null && _c !== void 0 ? _c : "";
        message.isBuy = (_d = object.isBuy) !== null && _d !== void 0 ? _d : false;
        message.orderHash = (_e = object.orderHash) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseQueryTraderSpotOrdersResponse() {
    return { orders: [] };
}
exports.QueryTraderSpotOrdersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.orders) {
            exports.TrimmedSpotLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderSpotOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(exports.TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => exports.TrimmedSpotLimitOrder.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? exports.TrimmedSpotLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryTraderSpotOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTraderSpotOrdersResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TrimmedSpotLimitOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAccountAddressSpotOrdersResponse() {
    return { orders: [] };
}
exports.QueryAccountAddressSpotOrdersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.orders) {
            exports.TrimmedSpotLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountAddressSpotOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(exports.TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => exports.TrimmedSpotLimitOrder.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? exports.TrimmedSpotLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryAccountAddressSpotOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAccountAddressSpotOrdersResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TrimmedSpotLimitOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQuerySpotMidPriceAndTOBRequest() {
    return { marketId: "" };
}
exports.QuerySpotMidPriceAndTOBRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMidPriceAndTOBRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.QuerySpotMidPriceAndTOBRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySpotMidPriceAndTOBRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySpotMidPriceAndTOBResponse() {
    return { midPrice: "", bestBuyPrice: "", bestSellPrice: "" };
}
exports.QuerySpotMidPriceAndTOBResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.midPrice !== "") {
            writer.uint32(10).string(message.midPrice);
        }
        if (message.bestBuyPrice !== "") {
            writer.uint32(18).string(message.bestBuyPrice);
        }
        if (message.bestSellPrice !== "") {
            writer.uint32(26).string(message.bestSellPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMidPriceAndTOBResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.midPrice = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.bestBuyPrice = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.bestSellPrice = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            midPrice: isSet(object.midPrice) ? String(object.midPrice) : "",
            bestBuyPrice: isSet(object.bestBuyPrice) ? String(object.bestBuyPrice) : "",
            bestSellPrice: isSet(object.bestSellPrice) ? String(object.bestSellPrice) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.midPrice !== undefined && (obj.midPrice = message.midPrice);
        message.bestBuyPrice !== undefined && (obj.bestBuyPrice = message.bestBuyPrice);
        message.bestSellPrice !== undefined && (obj.bestSellPrice = message.bestSellPrice);
        return obj;
    },
    create(base) {
        return exports.QuerySpotMidPriceAndTOBResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQuerySpotMidPriceAndTOBResponse();
        message.midPrice = (_a = object.midPrice) !== null && _a !== void 0 ? _a : "";
        message.bestBuyPrice = (_b = object.bestBuyPrice) !== null && _b !== void 0 ? _b : "";
        message.bestSellPrice = (_c = object.bestSellPrice) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseQueryDerivativeMidPriceAndTOBRequest() {
    return { marketId: "" };
}
exports.QueryDerivativeMidPriceAndTOBRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMidPriceAndTOBRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.QueryDerivativeMidPriceAndTOBRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDerivativeMidPriceAndTOBRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDerivativeMidPriceAndTOBResponse() {
    return { midPrice: "", bestBuyPrice: "", bestSellPrice: "" };
}
exports.QueryDerivativeMidPriceAndTOBResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.midPrice !== "") {
            writer.uint32(10).string(message.midPrice);
        }
        if (message.bestBuyPrice !== "") {
            writer.uint32(18).string(message.bestBuyPrice);
        }
        if (message.bestSellPrice !== "") {
            writer.uint32(26).string(message.bestSellPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMidPriceAndTOBResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.midPrice = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.bestBuyPrice = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.bestSellPrice = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            midPrice: isSet(object.midPrice) ? String(object.midPrice) : "",
            bestBuyPrice: isSet(object.bestBuyPrice) ? String(object.bestBuyPrice) : "",
            bestSellPrice: isSet(object.bestSellPrice) ? String(object.bestSellPrice) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.midPrice !== undefined && (obj.midPrice = message.midPrice);
        message.bestBuyPrice !== undefined && (obj.bestBuyPrice = message.bestBuyPrice);
        message.bestSellPrice !== undefined && (obj.bestSellPrice = message.bestSellPrice);
        return obj;
    },
    create(base) {
        return exports.QueryDerivativeMidPriceAndTOBResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryDerivativeMidPriceAndTOBResponse();
        message.midPrice = (_a = object.midPrice) !== null && _a !== void 0 ? _a : "";
        message.bestBuyPrice = (_b = object.bestBuyPrice) !== null && _b !== void 0 ? _b : "";
        message.bestSellPrice = (_c = object.bestSellPrice) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseQueryDerivativeOrderbookRequest() {
    return { marketId: "", limit: "0", limitCumulativeNotional: "" };
}
exports.QueryDerivativeOrderbookRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.limit !== "0") {
            writer.uint32(16).uint64(message.limit);
        }
        if (message.limitCumulativeNotional !== "") {
            writer.uint32(26).string(message.limitCumulativeNotional);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeOrderbookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.limit = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.limitCumulativeNotional = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            limit: isSet(object.limit) ? String(object.limit) : "0",
            limitCumulativeNotional: isSet(object.limitCumulativeNotional) ? String(object.limitCumulativeNotional) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.limit !== undefined && (obj.limit = message.limit);
        message.limitCumulativeNotional !== undefined && (obj.limitCumulativeNotional = message.limitCumulativeNotional);
        return obj;
    },
    create(base) {
        return exports.QueryDerivativeOrderbookRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryDerivativeOrderbookRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.limit = (_b = object.limit) !== null && _b !== void 0 ? _b : "0";
        message.limitCumulativeNotional = (_c = object.limitCumulativeNotional) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseQueryDerivativeOrderbookResponse() {
    return { buysPriceLevel: [], sellsPriceLevel: [] };
}
exports.QueryDerivativeOrderbookResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.buysPriceLevel) {
            exchange_1.Level.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sellsPriceLevel) {
            exchange_1.Level.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeOrderbookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.buysPriceLevel.push(exchange_1.Level.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sellsPriceLevel.push(exchange_1.Level.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            buysPriceLevel: Array.isArray(object === null || object === void 0 ? void 0 : object.buysPriceLevel)
                ? object.buysPriceLevel.map((e) => exchange_1.Level.fromJSON(e))
                : [],
            sellsPriceLevel: Array.isArray(object === null || object === void 0 ? void 0 : object.sellsPriceLevel)
                ? object.sellsPriceLevel.map((e) => exchange_1.Level.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.buysPriceLevel) {
            obj.buysPriceLevel = message.buysPriceLevel.map((e) => e ? exchange_1.Level.toJSON(e) : undefined);
        }
        else {
            obj.buysPriceLevel = [];
        }
        if (message.sellsPriceLevel) {
            obj.sellsPriceLevel = message.sellsPriceLevel.map((e) => e ? exchange_1.Level.toJSON(e) : undefined);
        }
        else {
            obj.sellsPriceLevel = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryDerivativeOrderbookResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDerivativeOrderbookResponse();
        message.buysPriceLevel = ((_a = object.buysPriceLevel) === null || _a === void 0 ? void 0 : _a.map((e) => exchange_1.Level.fromPartial(e))) || [];
        message.sellsPriceLevel = ((_b = object.sellsPriceLevel) === null || _b === void 0 ? void 0 : _b.map((e) => exchange_1.Level.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest() {
    return { marketId: "", subaccountId: "", baseAmount: "", quoteAmount: "", strategy: 0, referencePrice: "" };
}
exports.QueryTraderSpotOrdersToCancelUpToAmountRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.baseAmount !== "") {
            writer.uint32(26).string(message.baseAmount);
        }
        if (message.quoteAmount !== "") {
            writer.uint32(34).string(message.quoteAmount);
        }
        if (message.strategy !== 0) {
            writer.uint32(40).int32(message.strategy);
        }
        if (message.referencePrice !== "") {
            writer.uint32(50).string(message.referencePrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.baseAmount = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.quoteAmount = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.strategy = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.referencePrice = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            baseAmount: isSet(object.baseAmount) ? String(object.baseAmount) : "",
            quoteAmount: isSet(object.quoteAmount) ? String(object.quoteAmount) : "",
            strategy: isSet(object.strategy) ? cancellationStrategyFromJSON(object.strategy) : 0,
            referencePrice: isSet(object.referencePrice) ? String(object.referencePrice) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.baseAmount !== undefined && (obj.baseAmount = message.baseAmount);
        message.quoteAmount !== undefined && (obj.quoteAmount = message.quoteAmount);
        message.strategy !== undefined && (obj.strategy = cancellationStrategyToJSON(message.strategy));
        message.referencePrice !== undefined && (obj.referencePrice = message.referencePrice);
        return obj;
    },
    create(base) {
        return exports.QueryTraderSpotOrdersToCancelUpToAmountRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.baseAmount = (_c = object.baseAmount) !== null && _c !== void 0 ? _c : "";
        message.quoteAmount = (_d = object.quoteAmount) !== null && _d !== void 0 ? _d : "";
        message.strategy = (_e = object.strategy) !== null && _e !== void 0 ? _e : 0;
        message.referencePrice = (_f = object.referencePrice) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest() {
    return { marketId: "", subaccountId: "", quoteAmount: "", strategy: 0, referencePrice: "" };
}
exports.QueryTraderDerivativeOrdersToCancelUpToAmountRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.quoteAmount !== "") {
            writer.uint32(26).string(message.quoteAmount);
        }
        if (message.strategy !== 0) {
            writer.uint32(32).int32(message.strategy);
        }
        if (message.referencePrice !== "") {
            writer.uint32(42).string(message.referencePrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.quoteAmount = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.strategy = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.referencePrice = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            quoteAmount: isSet(object.quoteAmount) ? String(object.quoteAmount) : "",
            strategy: isSet(object.strategy) ? cancellationStrategyFromJSON(object.strategy) : 0,
            referencePrice: isSet(object.referencePrice) ? String(object.referencePrice) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.quoteAmount !== undefined && (obj.quoteAmount = message.quoteAmount);
        message.strategy !== undefined && (obj.strategy = cancellationStrategyToJSON(message.strategy));
        message.referencePrice !== undefined && (obj.referencePrice = message.referencePrice);
        return obj;
    },
    create(base) {
        return exports.QueryTraderDerivativeOrdersToCancelUpToAmountRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.quoteAmount = (_c = object.quoteAmount) !== null && _c !== void 0 ? _c : "";
        message.strategy = (_d = object.strategy) !== null && _d !== void 0 ? _d : 0;
        message.referencePrice = (_e = object.referencePrice) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseQueryTraderDerivativeOrdersRequest() {
    return { marketId: "", subaccountId: "" };
}
exports.QueryTraderDerivativeOrdersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderDerivativeOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        return obj;
    },
    create(base) {
        return exports.QueryTraderDerivativeOrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryTraderDerivativeOrdersRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryAccountAddressDerivativeOrdersRequest() {
    return { marketId: "", accountAddress: "" };
}
exports.QueryAccountAddressDerivativeOrdersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountAddressDerivativeOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return exports.QueryAccountAddressDerivativeOrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryAccountAddressDerivativeOrdersRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.accountAddress = (_b = object.accountAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTrimmedDerivativeLimitOrder() {
    return { price: "", quantity: "", margin: "", fillable: "", isBuy: false, orderHash: "" };
}
exports.TrimmedDerivativeLimitOrder = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(message.quantity);
        }
        if (message.margin !== "") {
            writer.uint32(26).string(message.margin);
        }
        if (message.fillable !== "") {
            writer.uint32(34).string(message.fillable);
        }
        if (message.isBuy === true) {
            writer.uint32(40).bool(message.isBuy);
        }
        if (message.orderHash !== "") {
            writer.uint32(50).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrimmedDerivativeLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.price = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.quantity = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.margin = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.fillable = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.isBuy = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.orderHash = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            price: isSet(object.price) ? String(object.price) : "",
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            margin: isSet(object.margin) ? String(object.margin) : "",
            fillable: isSet(object.fillable) ? String(object.fillable) : "",
            isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false,
            orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.margin !== undefined && (obj.margin = message.margin);
        message.fillable !== undefined && (obj.fillable = message.fillable);
        message.isBuy !== undefined && (obj.isBuy = message.isBuy);
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        return obj;
    },
    create(base) {
        return exports.TrimmedDerivativeLimitOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseTrimmedDerivativeLimitOrder();
        message.price = (_a = object.price) !== null && _a !== void 0 ? _a : "";
        message.quantity = (_b = object.quantity) !== null && _b !== void 0 ? _b : "";
        message.margin = (_c = object.margin) !== null && _c !== void 0 ? _c : "";
        message.fillable = (_d = object.fillable) !== null && _d !== void 0 ? _d : "";
        message.isBuy = (_e = object.isBuy) !== null && _e !== void 0 ? _e : false;
        message.orderHash = (_f = object.orderHash) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseQueryTraderDerivativeOrdersResponse() {
    return { orders: [] };
}
exports.QueryTraderDerivativeOrdersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.orders) {
            exports.TrimmedDerivativeLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderDerivativeOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(exports.TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders)
                ? object.orders.map((e) => exports.TrimmedDerivativeLimitOrder.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? exports.TrimmedDerivativeLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryTraderDerivativeOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTraderDerivativeOrdersResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TrimmedDerivativeLimitOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAccountAddressDerivativeOrdersResponse() {
    return { orders: [] };
}
exports.QueryAccountAddressDerivativeOrdersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.orders) {
            exports.TrimmedDerivativeLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountAddressDerivativeOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(exports.TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders)
                ? object.orders.map((e) => exports.TrimmedDerivativeLimitOrder.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? exports.TrimmedDerivativeLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryAccountAddressDerivativeOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAccountAddressDerivativeOrdersResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TrimmedDerivativeLimitOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryDerivativeOrdersByHashesRequest() {
    return { marketId: "", subaccountId: "", orderHashes: [] };
}
exports.QueryDerivativeOrdersByHashesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        for (const v of message.orderHashes) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeOrdersByHashesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.orderHashes.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            orderHashes: Array.isArray(object === null || object === void 0 ? void 0 : object.orderHashes) ? object.orderHashes.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        if (message.orderHashes) {
            obj.orderHashes = message.orderHashes.map((e) => e);
        }
        else {
            obj.orderHashes = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryDerivativeOrdersByHashesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryDerivativeOrdersByHashesRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.orderHashes = ((_c = object.orderHashes) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryDerivativeOrdersByHashesResponse() {
    return { orders: [] };
}
exports.QueryDerivativeOrdersByHashesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.orders) {
            exports.TrimmedDerivativeLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeOrdersByHashesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(exports.TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders)
                ? object.orders.map((e) => exports.TrimmedDerivativeLimitOrder.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? exports.TrimmedDerivativeLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryDerivativeOrdersByHashesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDerivativeOrdersByHashesResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TrimmedDerivativeLimitOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryDerivativeMarketsRequest() {
    return { status: "", marketIds: [], withMidPriceAndTob: false };
}
exports.QueryDerivativeMarketsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        if (message.withMidPriceAndTob === true) {
            writer.uint32(24).bool(message.withMidPriceAndTob);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMarketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketIds.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.withMidPriceAndTob = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            status: isSet(object.status) ? String(object.status) : "",
            marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [],
            withMidPriceAndTob: isSet(object.withMidPriceAndTob) ? Boolean(object.withMidPriceAndTob) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        if (message.marketIds) {
            obj.marketIds = message.marketIds.map((e) => e);
        }
        else {
            obj.marketIds = [];
        }
        message.withMidPriceAndTob !== undefined && (obj.withMidPriceAndTob = message.withMidPriceAndTob);
        return obj;
    },
    create(base) {
        return exports.QueryDerivativeMarketsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryDerivativeMarketsRequest();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        message.marketIds = ((_b = object.marketIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.withMidPriceAndTob = (_c = object.withMidPriceAndTob) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBasePriceLevel() {
    return { price: "", quantity: "" };
}
exports.PriceLevel = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(message.quantity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePriceLevel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.price = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.quantity = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            price: isSet(object.price) ? String(object.price) : "",
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        return obj;
    },
    create(base) {
        return exports.PriceLevel.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePriceLevel();
        message.price = (_a = object.price) !== null && _a !== void 0 ? _a : "";
        message.quantity = (_b = object.quantity) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBasePerpetualMarketState() {
    return { marketInfo: undefined, fundingInfo: undefined };
}
exports.PerpetualMarketState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketInfo !== undefined) {
            exchange_1.PerpetualMarketInfo.encode(message.marketInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.fundingInfo !== undefined) {
            exchange_1.PerpetualMarketFunding.encode(message.fundingInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketInfo = exchange_1.PerpetualMarketInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.fundingInfo = exchange_1.PerpetualMarketFunding.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketInfo: isSet(object.marketInfo) ? exchange_1.PerpetualMarketInfo.fromJSON(object.marketInfo) : undefined,
            fundingInfo: isSet(object.fundingInfo) ? exchange_1.PerpetualMarketFunding.fromJSON(object.fundingInfo) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketInfo !== undefined &&
            (obj.marketInfo = message.marketInfo ? exchange_1.PerpetualMarketInfo.toJSON(message.marketInfo) : undefined);
        message.fundingInfo !== undefined &&
            (obj.fundingInfo = message.fundingInfo ? exchange_1.PerpetualMarketFunding.toJSON(message.fundingInfo) : undefined);
        return obj;
    },
    create(base) {
        return exports.PerpetualMarketState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBasePerpetualMarketState();
        message.marketInfo = (object.marketInfo !== undefined && object.marketInfo !== null)
            ? exchange_1.PerpetualMarketInfo.fromPartial(object.marketInfo)
            : undefined;
        message.fundingInfo = (object.fundingInfo !== undefined && object.fundingInfo !== null)
            ? exchange_1.PerpetualMarketFunding.fromPartial(object.fundingInfo)
            : undefined;
        return message;
    },
};
function createBaseFullDerivativeMarket() {
    return {
        market: undefined,
        perpetualInfo: undefined,
        futuresInfo: undefined,
        markPrice: "",
        midPriceAndTob: undefined,
    };
}
exports.FullDerivativeMarket = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.market !== undefined) {
            exchange_1.DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        if (message.perpetualInfo !== undefined) {
            exports.PerpetualMarketState.encode(message.perpetualInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.futuresInfo !== undefined) {
            exchange_1.ExpiryFuturesMarketInfo.encode(message.futuresInfo, writer.uint32(26).fork()).ldelim();
        }
        if (message.markPrice !== "") {
            writer.uint32(34).string(message.markPrice);
        }
        if (message.midPriceAndTob !== undefined) {
            exchange_1.MidPriceAndTOB.encode(message.midPriceAndTob, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFullDerivativeMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.market = exchange_1.DerivativeMarket.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.perpetualInfo = exports.PerpetualMarketState.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.futuresInfo = exchange_1.ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.markPrice = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.midPriceAndTob = exchange_1.MidPriceAndTOB.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            market: isSet(object.market) ? exchange_1.DerivativeMarket.fromJSON(object.market) : undefined,
            perpetualInfo: isSet(object.perpetualInfo) ? exports.PerpetualMarketState.fromJSON(object.perpetualInfo) : undefined,
            futuresInfo: isSet(object.futuresInfo) ? exchange_1.ExpiryFuturesMarketInfo.fromJSON(object.futuresInfo) : undefined,
            markPrice: isSet(object.markPrice) ? String(object.markPrice) : "",
            midPriceAndTob: isSet(object.midPriceAndTob) ? exchange_1.MidPriceAndTOB.fromJSON(object.midPriceAndTob) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined && (obj.market = message.market ? exchange_1.DerivativeMarket.toJSON(message.market) : undefined);
        message.perpetualInfo !== undefined &&
            (obj.perpetualInfo = message.perpetualInfo ? exports.PerpetualMarketState.toJSON(message.perpetualInfo) : undefined);
        message.futuresInfo !== undefined &&
            (obj.futuresInfo = message.futuresInfo ? exchange_1.ExpiryFuturesMarketInfo.toJSON(message.futuresInfo) : undefined);
        message.markPrice !== undefined && (obj.markPrice = message.markPrice);
        message.midPriceAndTob !== undefined &&
            (obj.midPriceAndTob = message.midPriceAndTob ? exchange_1.MidPriceAndTOB.toJSON(message.midPriceAndTob) : undefined);
        return obj;
    },
    create(base) {
        return exports.FullDerivativeMarket.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFullDerivativeMarket();
        message.market = (object.market !== undefined && object.market !== null)
            ? exchange_1.DerivativeMarket.fromPartial(object.market)
            : undefined;
        message.perpetualInfo = (object.perpetualInfo !== undefined && object.perpetualInfo !== null)
            ? exports.PerpetualMarketState.fromPartial(object.perpetualInfo)
            : undefined;
        message.futuresInfo = (object.futuresInfo !== undefined && object.futuresInfo !== null)
            ? exchange_1.ExpiryFuturesMarketInfo.fromPartial(object.futuresInfo)
            : undefined;
        message.markPrice = (_a = object.markPrice) !== null && _a !== void 0 ? _a : "";
        message.midPriceAndTob = (object.midPriceAndTob !== undefined && object.midPriceAndTob !== null)
            ? exchange_1.MidPriceAndTOB.fromPartial(object.midPriceAndTob)
            : undefined;
        return message;
    },
};
function createBaseQueryDerivativeMarketsResponse() {
    return { markets: [] };
}
exports.QueryDerivativeMarketsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.markets) {
            exports.FullDerivativeMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.markets.push(exports.FullDerivativeMarket.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            markets: Array.isArray(object === null || object === void 0 ? void 0 : object.markets) ? object.markets.map((e) => exports.FullDerivativeMarket.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map((e) => e ? exports.FullDerivativeMarket.toJSON(e) : undefined);
        }
        else {
            obj.markets = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryDerivativeMarketsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDerivativeMarketsResponse();
        message.markets = ((_a = object.markets) === null || _a === void 0 ? void 0 : _a.map((e) => exports.FullDerivativeMarket.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryDerivativeMarketRequest() {
    return { marketId: "" };
}
exports.QueryDerivativeMarketRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.QueryDerivativeMarketRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDerivativeMarketRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDerivativeMarketResponse() {
    return { market: undefined };
}
exports.QueryDerivativeMarketResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.market !== undefined) {
            exports.FullDerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.market = exports.FullDerivativeMarket.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { market: isSet(object.market) ? exports.FullDerivativeMarket.fromJSON(object.market) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined &&
            (obj.market = message.market ? exports.FullDerivativeMarket.toJSON(message.market) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryDerivativeMarketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDerivativeMarketResponse();
        message.market = (object.market !== undefined && object.market !== null)
            ? exports.FullDerivativeMarket.fromPartial(object.market)
            : undefined;
        return message;
    },
};
function createBaseQueryDerivativeMarketAddressRequest() {
    return { marketId: "" };
}
exports.QueryDerivativeMarketAddressRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMarketAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.QueryDerivativeMarketAddressRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDerivativeMarketAddressRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDerivativeMarketAddressResponse() {
    return { address: "", subaccountId: "" };
}
exports.QueryDerivativeMarketAddressResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMarketAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        return obj;
    },
    create(base) {
        return exports.QueryDerivativeMarketAddressResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDerivativeMarketAddressResponse();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQuerySubaccountTradeNonceRequest() {
    return { subaccountId: "" };
}
exports.QuerySubaccountTradeNonceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountTradeNonceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountTradeNonceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySubaccountTradeNonceRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySubaccountPositionsRequest() {
    return { subaccountId: "" };
}
exports.QuerySubaccountPositionsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountPositionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountPositionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySubaccountPositionsRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySubaccountPositionInMarketRequest() {
    return { subaccountId: "", marketId: "" };
}
exports.QuerySubaccountPositionInMarketRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountPositionInMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountPositionInMarketRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuerySubaccountPositionInMarketRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQuerySubaccountEffectivePositionInMarketRequest() {
    return { subaccountId: "", marketId: "" };
}
exports.QuerySubaccountEffectivePositionInMarketRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountEffectivePositionInMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountEffectivePositionInMarketRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuerySubaccountEffectivePositionInMarketRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQuerySubaccountOrderMetadataRequest() {
    return { subaccountId: "" };
}
exports.QuerySubaccountOrderMetadataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountOrderMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountOrderMetadataRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySubaccountOrderMetadataRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySubaccountPositionsResponse() {
    return { state: [] };
}
exports.QuerySubaccountPositionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.state) {
            genesis_1.DerivativePosition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state.push(genesis_1.DerivativePosition.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { state: Array.isArray(object === null || object === void 0 ? void 0 : object.state) ? object.state.map((e) => genesis_1.DerivativePosition.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.state) {
            obj.state = message.state.map((e) => e ? genesis_1.DerivativePosition.toJSON(e) : undefined);
        }
        else {
            obj.state = [];
        }
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountPositionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySubaccountPositionsResponse();
        message.state = ((_a = object.state) === null || _a === void 0 ? void 0 : _a.map((e) => genesis_1.DerivativePosition.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQuerySubaccountPositionInMarketResponse() {
    return { state: undefined };
}
exports.QuerySubaccountPositionInMarketResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== undefined) {
            exchange_1.Position.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountPositionInMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state = exchange_1.Position.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { state: isSet(object.state) ? exchange_1.Position.fromJSON(object.state) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state ? exchange_1.Position.toJSON(message.state) : undefined);
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountPositionInMarketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountPositionInMarketResponse();
        message.state = (object.state !== undefined && object.state !== null)
            ? exchange_1.Position.fromPartial(object.state)
            : undefined;
        return message;
    },
};
function createBaseEffectivePosition() {
    return { isLong: false, quantity: "", entryPrice: "", effectiveMargin: "" };
}
exports.EffectivePosition = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.isLong === true) {
            writer.uint32(8).bool(message.isLong);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(message.quantity);
        }
        if (message.entryPrice !== "") {
            writer.uint32(26).string(message.entryPrice);
        }
        if (message.effectiveMargin !== "") {
            writer.uint32(34).string(message.effectiveMargin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEffectivePosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.isLong = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.quantity = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.entryPrice = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.effectiveMargin = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            isLong: isSet(object.isLong) ? Boolean(object.isLong) : false,
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            entryPrice: isSet(object.entryPrice) ? String(object.entryPrice) : "",
            effectiveMargin: isSet(object.effectiveMargin) ? String(object.effectiveMargin) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.isLong !== undefined && (obj.isLong = message.isLong);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.entryPrice !== undefined && (obj.entryPrice = message.entryPrice);
        message.effectiveMargin !== undefined && (obj.effectiveMargin = message.effectiveMargin);
        return obj;
    },
    create(base) {
        return exports.EffectivePosition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseEffectivePosition();
        message.isLong = (_a = object.isLong) !== null && _a !== void 0 ? _a : false;
        message.quantity = (_b = object.quantity) !== null && _b !== void 0 ? _b : "";
        message.entryPrice = (_c = object.entryPrice) !== null && _c !== void 0 ? _c : "";
        message.effectiveMargin = (_d = object.effectiveMargin) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseQuerySubaccountEffectivePositionInMarketResponse() {
    return { state: undefined };
}
exports.QuerySubaccountEffectivePositionInMarketResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== undefined) {
            exports.EffectivePosition.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state = exports.EffectivePosition.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { state: isSet(object.state) ? exports.EffectivePosition.fromJSON(object.state) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state ? exports.EffectivePosition.toJSON(message.state) : undefined);
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountEffectivePositionInMarketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
        message.state = (object.state !== undefined && object.state !== null)
            ? exports.EffectivePosition.fromPartial(object.state)
            : undefined;
        return message;
    },
};
function createBaseQueryPerpetualMarketInfoRequest() {
    return { marketId: "" };
}
exports.QueryPerpetualMarketInfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPerpetualMarketInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.QueryPerpetualMarketInfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPerpetualMarketInfoRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryPerpetualMarketInfoResponse() {
    return { info: undefined };
}
exports.QueryPerpetualMarketInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.info !== undefined) {
            exchange_1.PerpetualMarketInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPerpetualMarketInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.info = exchange_1.PerpetualMarketInfo.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { info: isSet(object.info) ? exchange_1.PerpetualMarketInfo.fromJSON(object.info) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? exchange_1.PerpetualMarketInfo.toJSON(message.info) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryPerpetualMarketInfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryPerpetualMarketInfoResponse();
        message.info = (object.info !== undefined && object.info !== null)
            ? exchange_1.PerpetualMarketInfo.fromPartial(object.info)
            : undefined;
        return message;
    },
};
function createBaseQueryExpiryFuturesMarketInfoRequest() {
    return { marketId: "" };
}
exports.QueryExpiryFuturesMarketInfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExpiryFuturesMarketInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.QueryExpiryFuturesMarketInfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExpiryFuturesMarketInfoRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryExpiryFuturesMarketInfoResponse() {
    return { info: undefined };
}
exports.QueryExpiryFuturesMarketInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.info !== undefined) {
            exchange_1.ExpiryFuturesMarketInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExpiryFuturesMarketInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.info = exchange_1.ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { info: isSet(object.info) ? exchange_1.ExpiryFuturesMarketInfo.fromJSON(object.info) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? exchange_1.ExpiryFuturesMarketInfo.toJSON(message.info) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryExpiryFuturesMarketInfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryExpiryFuturesMarketInfoResponse();
        message.info = (object.info !== undefined && object.info !== null)
            ? exchange_1.ExpiryFuturesMarketInfo.fromPartial(object.info)
            : undefined;
        return message;
    },
};
function createBaseQueryPerpetualMarketFundingRequest() {
    return { marketId: "" };
}
exports.QueryPerpetualMarketFundingRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPerpetualMarketFundingRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.QueryPerpetualMarketFundingRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPerpetualMarketFundingRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryPerpetualMarketFundingResponse() {
    return { state: undefined };
}
exports.QueryPerpetualMarketFundingResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== undefined) {
            exchange_1.PerpetualMarketFunding.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPerpetualMarketFundingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state = exchange_1.PerpetualMarketFunding.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { state: isSet(object.state) ? exchange_1.PerpetualMarketFunding.fromJSON(object.state) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined &&
            (obj.state = message.state ? exchange_1.PerpetualMarketFunding.toJSON(message.state) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryPerpetualMarketFundingResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryPerpetualMarketFundingResponse();
        message.state = (object.state !== undefined && object.state !== null)
            ? exchange_1.PerpetualMarketFunding.fromPartial(object.state)
            : undefined;
        return message;
    },
};
function createBaseQuerySubaccountOrderMetadataResponse() {
    return { metadata: [] };
}
exports.QuerySubaccountOrderMetadataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.metadata) {
            exports.SubaccountOrderbookMetadataWithMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountOrderMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.metadata.push(exports.SubaccountOrderbookMetadataWithMarket.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            metadata: Array.isArray(object === null || object === void 0 ? void 0 : object.metadata)
                ? object.metadata.map((e) => exports.SubaccountOrderbookMetadataWithMarket.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.metadata) {
            obj.metadata = message.metadata.map((e) => e ? exports.SubaccountOrderbookMetadataWithMarket.toJSON(e) : undefined);
        }
        else {
            obj.metadata = [];
        }
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountOrderMetadataResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySubaccountOrderMetadataResponse();
        message.metadata = ((_a = object.metadata) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SubaccountOrderbookMetadataWithMarket.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQuerySubaccountTradeNonceResponse() {
    return { nonce: 0 };
}
exports.QuerySubaccountTradeNonceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint32(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountTradeNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nonce = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { nonce: isSet(object.nonce) ? Number(object.nonce) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
        return obj;
    },
    create(base) {
        return exports.QuerySubaccountTradeNonceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySubaccountTradeNonceResponse();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseQueryModuleStateRequest() {
    return {};
}
exports.QueryModuleStateRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.QueryModuleStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
};
function createBaseQueryModuleStateResponse() {
    return { state: undefined };
}
exports.QueryModuleStateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== undefined) {
            genesis_1.GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state = genesis_1.GenesisState.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { state: isSet(object.state) ? genesis_1.GenesisState.fromJSON(object.state) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state ? genesis_1.GenesisState.toJSON(message.state) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryModuleStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryModuleStateResponse();
        message.state = (object.state !== undefined && object.state !== null)
            ? genesis_1.GenesisState.fromPartial(object.state)
            : undefined;
        return message;
    },
};
function createBaseQueryPositionsRequest() {
    return {};
}
exports.QueryPositionsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPositionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.QueryPositionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryPositionsRequest();
        return message;
    },
};
function createBaseQueryPositionsResponse() {
    return { state: [] };
}
exports.QueryPositionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.state) {
            genesis_1.DerivativePosition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state.push(genesis_1.DerivativePosition.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { state: Array.isArray(object === null || object === void 0 ? void 0 : object.state) ? object.state.map((e) => genesis_1.DerivativePosition.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.state) {
            obj.state = message.state.map((e) => e ? genesis_1.DerivativePosition.toJSON(e) : undefined);
        }
        else {
            obj.state = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryPositionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPositionsResponse();
        message.state = ((_a = object.state) === null || _a === void 0 ? void 0 : _a.map((e) => genesis_1.DerivativePosition.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryTradeRewardPointsRequest() {
    return { accounts: [], pendingPoolTimestamp: "0" };
}
exports.QueryTradeRewardPointsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accounts) {
            writer.uint32(10).string(v);
        }
        if (message.pendingPoolTimestamp !== "0") {
            writer.uint32(16).int64(message.pendingPoolTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTradeRewardPointsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accounts.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.pendingPoolTimestamp = longToString(reader.int64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map((e) => String(e)) : [],
            pendingPoolTimestamp: isSet(object.pendingPoolTimestamp) ? String(object.pendingPoolTimestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e);
        }
        else {
            obj.accounts = [];
        }
        message.pendingPoolTimestamp !== undefined && (obj.pendingPoolTimestamp = message.pendingPoolTimestamp);
        return obj;
    },
    create(base) {
        return exports.QueryTradeRewardPointsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryTradeRewardPointsRequest();
        message.accounts = ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.pendingPoolTimestamp = (_b = object.pendingPoolTimestamp) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseQueryTradeRewardPointsResponse() {
    return { accountTradeRewardPoints: [] };
}
exports.QueryTradeRewardPointsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accountTradeRewardPoints) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTradeRewardPointsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accountTradeRewardPoints.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            accountTradeRewardPoints: Array.isArray(object === null || object === void 0 ? void 0 : object.accountTradeRewardPoints)
                ? object.accountTradeRewardPoints.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accountTradeRewardPoints) {
            obj.accountTradeRewardPoints = message.accountTradeRewardPoints.map((e) => e);
        }
        else {
            obj.accountTradeRewardPoints = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryTradeRewardPointsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTradeRewardPointsResponse();
        message.accountTradeRewardPoints = ((_a = object.accountTradeRewardPoints) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryTradeRewardCampaignRequest() {
    return {};
}
exports.QueryTradeRewardCampaignRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTradeRewardCampaignRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.QueryTradeRewardCampaignRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryTradeRewardCampaignRequest();
        return message;
    },
};
function createBaseQueryTradeRewardCampaignResponse() {
    return {
        tradingRewardCampaignInfo: undefined,
        tradingRewardPoolCampaignSchedule: [],
        totalTradeRewardPoints: "",
        pendingTradingRewardPoolCampaignSchedule: [],
        pendingTotalTradeRewardPoints: [],
    };
}
exports.QueryTradeRewardCampaignResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tradingRewardCampaignInfo !== undefined) {
            exchange_1.TradingRewardCampaignInfo.encode(message.tradingRewardCampaignInfo, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tradingRewardPoolCampaignSchedule) {
            exchange_1.CampaignRewardPool.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalTradeRewardPoints !== "") {
            writer.uint32(26).string(message.totalTradeRewardPoints);
        }
        for (const v of message.pendingTradingRewardPoolCampaignSchedule) {
            exchange_1.CampaignRewardPool.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.pendingTotalTradeRewardPoints) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTradeRewardCampaignResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tradingRewardCampaignInfo = exchange_1.TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.tradingRewardPoolCampaignSchedule.push(exchange_1.CampaignRewardPool.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.totalTradeRewardPoints = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.pendingTradingRewardPoolCampaignSchedule.push(exchange_1.CampaignRewardPool.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.pendingTotalTradeRewardPoints.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            tradingRewardCampaignInfo: isSet(object.tradingRewardCampaignInfo)
                ? exchange_1.TradingRewardCampaignInfo.fromJSON(object.tradingRewardCampaignInfo)
                : undefined,
            tradingRewardPoolCampaignSchedule: Array.isArray(object === null || object === void 0 ? void 0 : object.tradingRewardPoolCampaignSchedule)
                ? object.tradingRewardPoolCampaignSchedule.map((e) => exchange_1.CampaignRewardPool.fromJSON(e))
                : [],
            totalTradeRewardPoints: isSet(object.totalTradeRewardPoints) ? String(object.totalTradeRewardPoints) : "",
            pendingTradingRewardPoolCampaignSchedule: Array.isArray(object === null || object === void 0 ? void 0 : object.pendingTradingRewardPoolCampaignSchedule)
                ? object.pendingTradingRewardPoolCampaignSchedule.map((e) => exchange_1.CampaignRewardPool.fromJSON(e))
                : [],
            pendingTotalTradeRewardPoints: Array.isArray(object === null || object === void 0 ? void 0 : object.pendingTotalTradeRewardPoints)
                ? object.pendingTotalTradeRewardPoints.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.tradingRewardCampaignInfo !== undefined &&
            (obj.tradingRewardCampaignInfo = message.tradingRewardCampaignInfo
                ? exchange_1.TradingRewardCampaignInfo.toJSON(message.tradingRewardCampaignInfo)
                : undefined);
        if (message.tradingRewardPoolCampaignSchedule) {
            obj.tradingRewardPoolCampaignSchedule = message.tradingRewardPoolCampaignSchedule.map((e) => e ? exchange_1.CampaignRewardPool.toJSON(e) : undefined);
        }
        else {
            obj.tradingRewardPoolCampaignSchedule = [];
        }
        message.totalTradeRewardPoints !== undefined && (obj.totalTradeRewardPoints = message.totalTradeRewardPoints);
        if (message.pendingTradingRewardPoolCampaignSchedule) {
            obj.pendingTradingRewardPoolCampaignSchedule = message.pendingTradingRewardPoolCampaignSchedule.map((e) => e ? exchange_1.CampaignRewardPool.toJSON(e) : undefined);
        }
        else {
            obj.pendingTradingRewardPoolCampaignSchedule = [];
        }
        if (message.pendingTotalTradeRewardPoints) {
            obj.pendingTotalTradeRewardPoints = message.pendingTotalTradeRewardPoints.map((e) => e);
        }
        else {
            obj.pendingTotalTradeRewardPoints = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryTradeRewardCampaignResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseQueryTradeRewardCampaignResponse();
        message.tradingRewardCampaignInfo =
            (object.tradingRewardCampaignInfo !== undefined && object.tradingRewardCampaignInfo !== null)
                ? exchange_1.TradingRewardCampaignInfo.fromPartial(object.tradingRewardCampaignInfo)
                : undefined;
        message.tradingRewardPoolCampaignSchedule =
            ((_a = object.tradingRewardPoolCampaignSchedule) === null || _a === void 0 ? void 0 : _a.map((e) => exchange_1.CampaignRewardPool.fromPartial(e))) || [];
        message.totalTradeRewardPoints = (_b = object.totalTradeRewardPoints) !== null && _b !== void 0 ? _b : "";
        message.pendingTradingRewardPoolCampaignSchedule =
            ((_c = object.pendingTradingRewardPoolCampaignSchedule) === null || _c === void 0 ? void 0 : _c.map((e) => exchange_1.CampaignRewardPool.fromPartial(e))) || [];
        message.pendingTotalTradeRewardPoints = ((_d = object.pendingTotalTradeRewardPoints) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryIsOptedOutOfRewardsRequest() {
    return { account: "" };
}
exports.QueryIsOptedOutOfRewardsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIsOptedOutOfRewardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { account: isSet(object.account) ? String(object.account) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    create(base) {
        return exports.QueryIsOptedOutOfRewardsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryIsOptedOutOfRewardsRequest();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryIsOptedOutOfRewardsResponse() {
    return { isOptedOut: false };
}
exports.QueryIsOptedOutOfRewardsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.isOptedOut === true) {
            writer.uint32(8).bool(message.isOptedOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIsOptedOutOfRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.isOptedOut = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { isOptedOut: isSet(object.isOptedOut) ? Boolean(object.isOptedOut) : false };
    },
    toJSON(message) {
        const obj = {};
        message.isOptedOut !== undefined && (obj.isOptedOut = message.isOptedOut);
        return obj;
    },
    create(base) {
        return exports.QueryIsOptedOutOfRewardsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryIsOptedOutOfRewardsResponse();
        message.isOptedOut = (_a = object.isOptedOut) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseQueryOptedOutOfRewardsAccountsRequest() {
    return {};
}
exports.QueryOptedOutOfRewardsAccountsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOptedOutOfRewardsAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.QueryOptedOutOfRewardsAccountsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryOptedOutOfRewardsAccountsRequest();
        return message;
    },
};
function createBaseQueryOptedOutOfRewardsAccountsResponse() {
    return { accounts: [] };
}
exports.QueryOptedOutOfRewardsAccountsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accounts) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOptedOutOfRewardsAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accounts.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryOptedOutOfRewardsAccountsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOptedOutOfRewardsAccountsResponse();
        message.accounts = ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryFeeDiscountAccountInfoRequest() {
    return { account: "" };
}
exports.QueryFeeDiscountAccountInfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountAccountInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { account: isSet(object.account) ? String(object.account) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    create(base) {
        return exports.QueryFeeDiscountAccountInfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFeeDiscountAccountInfoRequest();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryFeeDiscountAccountInfoResponse() {
    return { tierLevel: "0", accountInfo: undefined, accountTtl: undefined };
}
exports.QueryFeeDiscountAccountInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tierLevel !== "0") {
            writer.uint32(8).uint64(message.tierLevel);
        }
        if (message.accountInfo !== undefined) {
            exchange_1.FeeDiscountTierInfo.encode(message.accountInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.accountTtl !== undefined) {
            exchange_1.FeeDiscountTierTTL.encode(message.accountTtl, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountAccountInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.tierLevel = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.accountInfo = exchange_1.FeeDiscountTierInfo.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.accountTtl = exchange_1.FeeDiscountTierTTL.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            tierLevel: isSet(object.tierLevel) ? String(object.tierLevel) : "0",
            accountInfo: isSet(object.accountInfo) ? exchange_1.FeeDiscountTierInfo.fromJSON(object.accountInfo) : undefined,
            accountTtl: isSet(object.accountTtl) ? exchange_1.FeeDiscountTierTTL.fromJSON(object.accountTtl) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tierLevel !== undefined && (obj.tierLevel = message.tierLevel);
        message.accountInfo !== undefined &&
            (obj.accountInfo = message.accountInfo ? exchange_1.FeeDiscountTierInfo.toJSON(message.accountInfo) : undefined);
        message.accountTtl !== undefined &&
            (obj.accountTtl = message.accountTtl ? exchange_1.FeeDiscountTierTTL.toJSON(message.accountTtl) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryFeeDiscountAccountInfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFeeDiscountAccountInfoResponse();
        message.tierLevel = (_a = object.tierLevel) !== null && _a !== void 0 ? _a : "0";
        message.accountInfo = (object.accountInfo !== undefined && object.accountInfo !== null)
            ? exchange_1.FeeDiscountTierInfo.fromPartial(object.accountInfo)
            : undefined;
        message.accountTtl = (object.accountTtl !== undefined && object.accountTtl !== null)
            ? exchange_1.FeeDiscountTierTTL.fromPartial(object.accountTtl)
            : undefined;
        return message;
    },
};
function createBaseQueryFeeDiscountScheduleRequest() {
    return {};
}
exports.QueryFeeDiscountScheduleRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountScheduleRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.QueryFeeDiscountScheduleRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryFeeDiscountScheduleRequest();
        return message;
    },
};
function createBaseQueryFeeDiscountScheduleResponse() {
    return { feeDiscountSchedule: undefined };
}
exports.QueryFeeDiscountScheduleResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feeDiscountSchedule !== undefined) {
            exchange_1.FeeDiscountSchedule.encode(message.feeDiscountSchedule, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountScheduleResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feeDiscountSchedule = exchange_1.FeeDiscountSchedule.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            feeDiscountSchedule: isSet(object.feeDiscountSchedule)
                ? exchange_1.FeeDiscountSchedule.fromJSON(object.feeDiscountSchedule)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.feeDiscountSchedule !== undefined && (obj.feeDiscountSchedule = message.feeDiscountSchedule
            ? exchange_1.FeeDiscountSchedule.toJSON(message.feeDiscountSchedule)
            : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryFeeDiscountScheduleResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryFeeDiscountScheduleResponse();
        message.feeDiscountSchedule = (object.feeDiscountSchedule !== undefined && object.feeDiscountSchedule !== null)
            ? exchange_1.FeeDiscountSchedule.fromPartial(object.feeDiscountSchedule)
            : undefined;
        return message;
    },
};
function createBaseQueryBalanceMismatchesRequest() {
    return { dustFactor: "0" };
}
exports.QueryBalanceMismatchesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dustFactor !== "0") {
            writer.uint32(8).int64(message.dustFactor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceMismatchesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.dustFactor = longToString(reader.int64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { dustFactor: isSet(object.dustFactor) ? String(object.dustFactor) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.dustFactor !== undefined && (obj.dustFactor = message.dustFactor);
        return obj;
    },
    create(base) {
        return exports.QueryBalanceMismatchesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBalanceMismatchesRequest();
        message.dustFactor = (_a = object.dustFactor) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseBalanceMismatch() {
    return { subaccountId: "", denom: "", available: "", total: "", balanceHold: "", expectedTotal: "", difference: "" };
}
exports.BalanceMismatch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.available !== "") {
            writer.uint32(26).string(message.available);
        }
        if (message.total !== "") {
            writer.uint32(34).string(message.total);
        }
        if (message.balanceHold !== "") {
            writer.uint32(42).string(message.balanceHold);
        }
        if (message.expectedTotal !== "") {
            writer.uint32(50).string(message.expectedTotal);
        }
        if (message.difference !== "") {
            writer.uint32(58).string(message.difference);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalanceMismatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.available = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.total = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.balanceHold = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.expectedTotal = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.difference = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            available: isSet(object.available) ? String(object.available) : "",
            total: isSet(object.total) ? String(object.total) : "",
            balanceHold: isSet(object.balanceHold) ? String(object.balanceHold) : "",
            expectedTotal: isSet(object.expectedTotal) ? String(object.expectedTotal) : "",
            difference: isSet(object.difference) ? String(object.difference) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.denom !== undefined && (obj.denom = message.denom);
        message.available !== undefined && (obj.available = message.available);
        message.total !== undefined && (obj.total = message.total);
        message.balanceHold !== undefined && (obj.balanceHold = message.balanceHold);
        message.expectedTotal !== undefined && (obj.expectedTotal = message.expectedTotal);
        message.difference !== undefined && (obj.difference = message.difference);
        return obj;
    },
    create(base) {
        return exports.BalanceMismatch.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseBalanceMismatch();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.available = (_c = object.available) !== null && _c !== void 0 ? _c : "";
        message.total = (_d = object.total) !== null && _d !== void 0 ? _d : "";
        message.balanceHold = (_e = object.balanceHold) !== null && _e !== void 0 ? _e : "";
        message.expectedTotal = (_f = object.expectedTotal) !== null && _f !== void 0 ? _f : "";
        message.difference = (_g = object.difference) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseQueryBalanceMismatchesResponse() {
    return { balanceMismatches: [] };
}
exports.QueryBalanceMismatchesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.balanceMismatches) {
            exports.BalanceMismatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceMismatchesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.balanceMismatches.push(exports.BalanceMismatch.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            balanceMismatches: Array.isArray(object === null || object === void 0 ? void 0 : object.balanceMismatches)
                ? object.balanceMismatches.map((e) => exports.BalanceMismatch.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.balanceMismatches) {
            obj.balanceMismatches = message.balanceMismatches.map((e) => e ? exports.BalanceMismatch.toJSON(e) : undefined);
        }
        else {
            obj.balanceMismatches = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryBalanceMismatchesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBalanceMismatchesResponse();
        message.balanceMismatches = ((_a = object.balanceMismatches) === null || _a === void 0 ? void 0 : _a.map((e) => exports.BalanceMismatch.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryBalanceWithBalanceHoldsRequest() {
    return {};
}
exports.QueryBalanceWithBalanceHoldsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceWithBalanceHoldsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.QueryBalanceWithBalanceHoldsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryBalanceWithBalanceHoldsRequest();
        return message;
    },
};
function createBaseBalanceWithMarginHold() {
    return { subaccountId: "", denom: "", available: "", total: "", balanceHold: "" };
}
exports.BalanceWithMarginHold = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.available !== "") {
            writer.uint32(26).string(message.available);
        }
        if (message.total !== "") {
            writer.uint32(34).string(message.total);
        }
        if (message.balanceHold !== "") {
            writer.uint32(42).string(message.balanceHold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalanceWithMarginHold();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.available = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.total = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.balanceHold = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            available: isSet(object.available) ? String(object.available) : "",
            total: isSet(object.total) ? String(object.total) : "",
            balanceHold: isSet(object.balanceHold) ? String(object.balanceHold) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.denom !== undefined && (obj.denom = message.denom);
        message.available !== undefined && (obj.available = message.available);
        message.total !== undefined && (obj.total = message.total);
        message.balanceHold !== undefined && (obj.balanceHold = message.balanceHold);
        return obj;
    },
    create(base) {
        return exports.BalanceWithMarginHold.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseBalanceWithMarginHold();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.available = (_c = object.available) !== null && _c !== void 0 ? _c : "";
        message.total = (_d = object.total) !== null && _d !== void 0 ? _d : "";
        message.balanceHold = (_e = object.balanceHold) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseQueryBalanceWithBalanceHoldsResponse() {
    return { balanceWithBalanceHolds: [] };
}
exports.QueryBalanceWithBalanceHoldsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.balanceWithBalanceHolds) {
            exports.BalanceWithMarginHold.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceWithBalanceHoldsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.balanceWithBalanceHolds.push(exports.BalanceWithMarginHold.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            balanceWithBalanceHolds: Array.isArray(object === null || object === void 0 ? void 0 : object.balanceWithBalanceHolds)
                ? object.balanceWithBalanceHolds.map((e) => exports.BalanceWithMarginHold.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.balanceWithBalanceHolds) {
            obj.balanceWithBalanceHolds = message.balanceWithBalanceHolds.map((e) => e ? exports.BalanceWithMarginHold.toJSON(e) : undefined);
        }
        else {
            obj.balanceWithBalanceHolds = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryBalanceWithBalanceHoldsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBalanceWithBalanceHoldsResponse();
        message.balanceWithBalanceHolds =
            ((_a = object.balanceWithBalanceHolds) === null || _a === void 0 ? void 0 : _a.map((e) => exports.BalanceWithMarginHold.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryFeeDiscountTierStatisticsRequest() {
    return {};
}
exports.QueryFeeDiscountTierStatisticsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountTierStatisticsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.QueryFeeDiscountTierStatisticsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryFeeDiscountTierStatisticsRequest();
        return message;
    },
};
function createBaseTierStatistic() {
    return { tier: "0", count: "0" };
}
exports.TierStatistic = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tier !== "0") {
            writer.uint32(8).uint64(message.tier);
        }
        if (message.count !== "0") {
            writer.uint32(16).uint64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTierStatistic();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.tier = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.count = longToString(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            tier: isSet(object.tier) ? String(object.tier) : "0",
            count: isSet(object.count) ? String(object.count) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.tier !== undefined && (obj.tier = message.tier);
        message.count !== undefined && (obj.count = message.count);
        return obj;
    },
    create(base) {
        return exports.TierStatistic.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTierStatistic();
        message.tier = (_a = object.tier) !== null && _a !== void 0 ? _a : "0";
        message.count = (_b = object.count) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseQueryFeeDiscountTierStatisticsResponse() {
    return { statistics: [] };
}
exports.QueryFeeDiscountTierStatisticsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.statistics) {
            exports.TierStatistic.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountTierStatisticsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.statistics.push(exports.TierStatistic.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            statistics: Array.isArray(object === null || object === void 0 ? void 0 : object.statistics) ? object.statistics.map((e) => exports.TierStatistic.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.statistics) {
            obj.statistics = message.statistics.map((e) => e ? exports.TierStatistic.toJSON(e) : undefined);
        }
        else {
            obj.statistics = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryFeeDiscountTierStatisticsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFeeDiscountTierStatisticsResponse();
        message.statistics = ((_a = object.statistics) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TierStatistic.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMitoVaultInfosRequest() {
    return {};
}
exports.MitoVaultInfosRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMitoVaultInfosRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MitoVaultInfosRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMitoVaultInfosRequest();
        return message;
    },
};
function createBaseMitoVaultInfosResponse() {
    return { masterAddresses: [], derivativeAddresses: [], spotAddresses: [], cw20Addresses: [] };
}
exports.MitoVaultInfosResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.masterAddresses) {
            writer.uint32(10).string(v);
        }
        for (const v of message.derivativeAddresses) {
            writer.uint32(18).string(v);
        }
        for (const v of message.spotAddresses) {
            writer.uint32(26).string(v);
        }
        for (const v of message.cw20Addresses) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMitoVaultInfosResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.masterAddresses.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.derivativeAddresses.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.spotAddresses.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.cw20Addresses.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            masterAddresses: Array.isArray(object === null || object === void 0 ? void 0 : object.masterAddresses) ? object.masterAddresses.map((e) => String(e)) : [],
            derivativeAddresses: Array.isArray(object === null || object === void 0 ? void 0 : object.derivativeAddresses)
                ? object.derivativeAddresses.map((e) => String(e))
                : [],
            spotAddresses: Array.isArray(object === null || object === void 0 ? void 0 : object.spotAddresses) ? object.spotAddresses.map((e) => String(e)) : [],
            cw20Addresses: Array.isArray(object === null || object === void 0 ? void 0 : object.cw20Addresses) ? object.cw20Addresses.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.masterAddresses) {
            obj.masterAddresses = message.masterAddresses.map((e) => e);
        }
        else {
            obj.masterAddresses = [];
        }
        if (message.derivativeAddresses) {
            obj.derivativeAddresses = message.derivativeAddresses.map((e) => e);
        }
        else {
            obj.derivativeAddresses = [];
        }
        if (message.spotAddresses) {
            obj.spotAddresses = message.spotAddresses.map((e) => e);
        }
        else {
            obj.spotAddresses = [];
        }
        if (message.cw20Addresses) {
            obj.cw20Addresses = message.cw20Addresses.map((e) => e);
        }
        else {
            obj.cw20Addresses = [];
        }
        return obj;
    },
    create(base) {
        return exports.MitoVaultInfosResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMitoVaultInfosResponse();
        message.masterAddresses = ((_a = object.masterAddresses) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.derivativeAddresses = ((_b = object.derivativeAddresses) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.spotAddresses = ((_c = object.spotAddresses) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.cw20Addresses = ((_d = object.cw20Addresses) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryMarketIDFromVaultRequest() {
    return { vaultAddress: "" };
}
exports.QueryMarketIDFromVaultRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.vaultAddress !== "") {
            writer.uint32(10).string(message.vaultAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketIDFromVaultRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.vaultAddress = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { vaultAddress: isSet(object.vaultAddress) ? String(object.vaultAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.vaultAddress !== undefined && (obj.vaultAddress = message.vaultAddress);
        return obj;
    },
    create(base) {
        return exports.QueryMarketIDFromVaultRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryMarketIDFromVaultRequest();
        message.vaultAddress = (_a = object.vaultAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryMarketIDFromVaultResponse() {
    return { marketId: "" };
}
exports.QueryMarketIDFromVaultResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketIDFromVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.QueryMarketIDFromVaultResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryMarketIDFromVaultResponse();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryHistoricalTradeRecordsRequest() {
    return { marketId: "" };
}
exports.QueryHistoricalTradeRecordsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalTradeRecordsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.QueryHistoricalTradeRecordsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryHistoricalTradeRecordsRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryHistoricalTradeRecordsResponse() {
    return { tradeRecords: [] };
}
exports.QueryHistoricalTradeRecordsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.tradeRecords) {
            exchange_1.TradeRecords.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalTradeRecordsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tradeRecords.push(exchange_1.TradeRecords.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            tradeRecords: Array.isArray(object === null || object === void 0 ? void 0 : object.tradeRecords)
                ? object.tradeRecords.map((e) => exchange_1.TradeRecords.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tradeRecords) {
            obj.tradeRecords = message.tradeRecords.map((e) => e ? exchange_1.TradeRecords.toJSON(e) : undefined);
        }
        else {
            obj.tradeRecords = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryHistoricalTradeRecordsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryHistoricalTradeRecordsResponse();
        message.tradeRecords = ((_a = object.tradeRecords) === null || _a === void 0 ? void 0 : _a.map((e) => exchange_1.TradeRecords.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTradeHistoryOptions() {
    return { tradeGroupingSec: "0", maxAge: "0", includeRawHistory: false, includeMetadata: false };
}
exports.TradeHistoryOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tradeGroupingSec !== "0") {
            writer.uint32(8).uint64(message.tradeGroupingSec);
        }
        if (message.maxAge !== "0") {
            writer.uint32(16).uint64(message.maxAge);
        }
        if (message.includeRawHistory === true) {
            writer.uint32(32).bool(message.includeRawHistory);
        }
        if (message.includeMetadata === true) {
            writer.uint32(40).bool(message.includeMetadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradeHistoryOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.tradeGroupingSec = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.maxAge = longToString(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.includeRawHistory = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.includeMetadata = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            tradeGroupingSec: isSet(object.tradeGroupingSec) ? String(object.tradeGroupingSec) : "0",
            maxAge: isSet(object.maxAge) ? String(object.maxAge) : "0",
            includeRawHistory: isSet(object.includeRawHistory) ? Boolean(object.includeRawHistory) : false,
            includeMetadata: isSet(object.includeMetadata) ? Boolean(object.includeMetadata) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tradeGroupingSec !== undefined && (obj.tradeGroupingSec = message.tradeGroupingSec);
        message.maxAge !== undefined && (obj.maxAge = message.maxAge);
        message.includeRawHistory !== undefined && (obj.includeRawHistory = message.includeRawHistory);
        message.includeMetadata !== undefined && (obj.includeMetadata = message.includeMetadata);
        return obj;
    },
    create(base) {
        return exports.TradeHistoryOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTradeHistoryOptions();
        message.tradeGroupingSec = (_a = object.tradeGroupingSec) !== null && _a !== void 0 ? _a : "0";
        message.maxAge = (_b = object.maxAge) !== null && _b !== void 0 ? _b : "0";
        message.includeRawHistory = (_c = object.includeRawHistory) !== null && _c !== void 0 ? _c : false;
        message.includeMetadata = (_d = object.includeMetadata) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseQueryMarketVolatilityRequest() {
    return { marketId: "", tradeHistoryOptions: undefined };
}
exports.QueryMarketVolatilityRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.tradeHistoryOptions !== undefined) {
            exports.TradeHistoryOptions.encode(message.tradeHistoryOptions, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketVolatilityRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.tradeHistoryOptions = exports.TradeHistoryOptions.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            tradeHistoryOptions: isSet(object.tradeHistoryOptions)
                ? exports.TradeHistoryOptions.fromJSON(object.tradeHistoryOptions)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.tradeHistoryOptions !== undefined && (obj.tradeHistoryOptions = message.tradeHistoryOptions
            ? exports.TradeHistoryOptions.toJSON(message.tradeHistoryOptions)
            : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryMarketVolatilityRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryMarketVolatilityRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.tradeHistoryOptions = (object.tradeHistoryOptions !== undefined && object.tradeHistoryOptions !== null)
            ? exports.TradeHistoryOptions.fromPartial(object.tradeHistoryOptions)
            : undefined;
        return message;
    },
};
function createBaseQueryMarketVolatilityResponse() {
    return { volatility: "", historyMetadata: undefined, rawHistory: [] };
}
exports.QueryMarketVolatilityResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.volatility !== "") {
            writer.uint32(10).string(message.volatility);
        }
        if (message.historyMetadata !== undefined) {
            oracle_1.MetadataStatistics.encode(message.historyMetadata, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.rawHistory) {
            exchange_1.TradeRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketVolatilityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.volatility = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.historyMetadata = oracle_1.MetadataStatistics.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.rawHistory.push(exchange_1.TradeRecord.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            volatility: isSet(object.volatility) ? String(object.volatility) : "",
            historyMetadata: isSet(object.historyMetadata) ? oracle_1.MetadataStatistics.fromJSON(object.historyMetadata) : undefined,
            rawHistory: Array.isArray(object === null || object === void 0 ? void 0 : object.rawHistory) ? object.rawHistory.map((e) => exchange_1.TradeRecord.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.volatility !== undefined && (obj.volatility = message.volatility);
        message.historyMetadata !== undefined &&
            (obj.historyMetadata = message.historyMetadata ? oracle_1.MetadataStatistics.toJSON(message.historyMetadata) : undefined);
        if (message.rawHistory) {
            obj.rawHistory = message.rawHistory.map((e) => e ? exchange_1.TradeRecord.toJSON(e) : undefined);
        }
        else {
            obj.rawHistory = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryMarketVolatilityResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryMarketVolatilityResponse();
        message.volatility = (_a = object.volatility) !== null && _a !== void 0 ? _a : "";
        message.historyMetadata = (object.historyMetadata !== undefined && object.historyMetadata !== null)
            ? oracle_1.MetadataStatistics.fromPartial(object.historyMetadata)
            : undefined;
        message.rawHistory = ((_b = object.rawHistory) === null || _b === void 0 ? void 0 : _b.map((e) => exchange_1.TradeRecord.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryBinaryMarketsRequest() {
    return { status: "" };
}
exports.QueryBinaryMarketsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBinaryMarketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return exports.QueryBinaryMarketsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBinaryMarketsRequest();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryBinaryMarketsResponse() {
    return { markets: [] };
}
exports.QueryBinaryMarketsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.markets) {
            exchange_1.BinaryOptionsMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBinaryMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.markets.push(exchange_1.BinaryOptionsMarket.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            markets: Array.isArray(object === null || object === void 0 ? void 0 : object.markets) ? object.markets.map((e) => exchange_1.BinaryOptionsMarket.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map((e) => e ? exchange_1.BinaryOptionsMarket.toJSON(e) : undefined);
        }
        else {
            obj.markets = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryBinaryMarketsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBinaryMarketsResponse();
        message.markets = ((_a = object.markets) === null || _a === void 0 ? void 0 : _a.map((e) => exchange_1.BinaryOptionsMarket.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryTraderDerivativeConditionalOrdersRequest() {
    return { subaccountId: "", marketId: "" };
}
exports.QueryTraderDerivativeConditionalOrdersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderDerivativeConditionalOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.QueryTraderDerivativeConditionalOrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryTraderDerivativeConditionalOrdersRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTrimmedDerivativeConditionalOrder() {
    return { price: "", quantity: "", margin: "", triggerPrice: "", isBuy: false, isLimit: false, orderHash: "" };
}
exports.TrimmedDerivativeConditionalOrder = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(message.quantity);
        }
        if (message.margin !== "") {
            writer.uint32(26).string(message.margin);
        }
        if (message.triggerPrice !== "") {
            writer.uint32(34).string(message.triggerPrice);
        }
        if (message.isBuy === true) {
            writer.uint32(40).bool(message.isBuy);
        }
        if (message.isLimit === true) {
            writer.uint32(48).bool(message.isLimit);
        }
        if (message.orderHash !== "") {
            writer.uint32(58).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrimmedDerivativeConditionalOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.price = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.quantity = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.margin = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.triggerPrice = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.isBuy = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.isLimit = reader.bool();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.orderHash = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            price: isSet(object.price) ? String(object.price) : "",
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            margin: isSet(object.margin) ? String(object.margin) : "",
            triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : "",
            isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false,
            isLimit: isSet(object.isLimit) ? Boolean(object.isLimit) : false,
            orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.margin !== undefined && (obj.margin = message.margin);
        message.triggerPrice !== undefined && (obj.triggerPrice = message.triggerPrice);
        message.isBuy !== undefined && (obj.isBuy = message.isBuy);
        message.isLimit !== undefined && (obj.isLimit = message.isLimit);
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        return obj;
    },
    create(base) {
        return exports.TrimmedDerivativeConditionalOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseTrimmedDerivativeConditionalOrder();
        message.price = (_a = object.price) !== null && _a !== void 0 ? _a : "";
        message.quantity = (_b = object.quantity) !== null && _b !== void 0 ? _b : "";
        message.margin = (_c = object.margin) !== null && _c !== void 0 ? _c : "";
        message.triggerPrice = (_d = object.triggerPrice) !== null && _d !== void 0 ? _d : "";
        message.isBuy = (_e = object.isBuy) !== null && _e !== void 0 ? _e : false;
        message.isLimit = (_f = object.isLimit) !== null && _f !== void 0 ? _f : false;
        message.orderHash = (_g = object.orderHash) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseQueryTraderDerivativeConditionalOrdersResponse() {
    return { orders: [] };
}
exports.QueryTraderDerivativeConditionalOrdersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.orders) {
            exports.TrimmedDerivativeConditionalOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(exports.TrimmedDerivativeConditionalOrder.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders)
                ? object.orders.map((e) => exports.TrimmedDerivativeConditionalOrder.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? exports.TrimmedDerivativeConditionalOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryTraderDerivativeConditionalOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TrimmedDerivativeConditionalOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryMarketAtomicExecutionFeeMultiplierRequest() {
    return { marketId: "" };
}
exports.QueryMarketAtomicExecutionFeeMultiplierRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketAtomicExecutionFeeMultiplierRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.QueryMarketAtomicExecutionFeeMultiplierRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryMarketAtomicExecutionFeeMultiplierRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryMarketAtomicExecutionFeeMultiplierResponse() {
    return { multiplier: "" };
}
exports.QueryMarketAtomicExecutionFeeMultiplierResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.multiplier !== "") {
            writer.uint32(10).string(message.multiplier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketAtomicExecutionFeeMultiplierResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.multiplier = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { multiplier: isSet(object.multiplier) ? String(object.multiplier) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.multiplier !== undefined && (obj.multiplier = message.multiplier);
        return obj;
    },
    create(base) {
        return exports.QueryMarketAtomicExecutionFeeMultiplierResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryMarketAtomicExecutionFeeMultiplierResponse();
        message.multiplier = (_a = object.multiplier) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryExchangeParams = this.QueryExchangeParams.bind(this);
        this.SubaccountDeposits = this.SubaccountDeposits.bind(this);
        this.SubaccountDeposit = this.SubaccountDeposit.bind(this);
        this.ExchangeBalances = this.ExchangeBalances.bind(this);
        this.AggregateVolume = this.AggregateVolume.bind(this);
        this.AggregateVolumes = this.AggregateVolumes.bind(this);
        this.AggregateMarketVolume = this.AggregateMarketVolume.bind(this);
        this.AggregateMarketVolumes = this.AggregateMarketVolumes.bind(this);
        this.DenomDecimal = this.DenomDecimal.bind(this);
        this.DenomDecimals = this.DenomDecimals.bind(this);
        this.SpotMarkets = this.SpotMarkets.bind(this);
        this.SpotMarket = this.SpotMarket.bind(this);
        this.FullSpotMarkets = this.FullSpotMarkets.bind(this);
        this.FullSpotMarket = this.FullSpotMarket.bind(this);
        this.SpotOrderbook = this.SpotOrderbook.bind(this);
        this.TraderSpotOrders = this.TraderSpotOrders.bind(this);
        this.AccountAddressSpotOrders = this.AccountAddressSpotOrders.bind(this);
        this.SpotOrdersByHashes = this.SpotOrdersByHashes.bind(this);
        this.SubaccountOrders = this.SubaccountOrders.bind(this);
        this.TraderSpotTransientOrders = this.TraderSpotTransientOrders.bind(this);
        this.SpotMidPriceAndTOB = this.SpotMidPriceAndTOB.bind(this);
        this.DerivativeMidPriceAndTOB = this.DerivativeMidPriceAndTOB.bind(this);
        this.DerivativeOrderbook = this.DerivativeOrderbook.bind(this);
        this.TraderDerivativeOrders = this.TraderDerivativeOrders.bind(this);
        this.AccountAddressDerivativeOrders = this.AccountAddressDerivativeOrders.bind(this);
        this.DerivativeOrdersByHashes = this.DerivativeOrdersByHashes.bind(this);
        this.TraderDerivativeTransientOrders = this.TraderDerivativeTransientOrders.bind(this);
        this.DerivativeMarkets = this.DerivativeMarkets.bind(this);
        this.DerivativeMarket = this.DerivativeMarket.bind(this);
        this.DerivativeMarketAddress = this.DerivativeMarketAddress.bind(this);
        this.SubaccountTradeNonce = this.SubaccountTradeNonce.bind(this);
        this.ExchangeModuleState = this.ExchangeModuleState.bind(this);
        this.Positions = this.Positions.bind(this);
        this.SubaccountPositions = this.SubaccountPositions.bind(this);
        this.SubaccountPositionInMarket = this.SubaccountPositionInMarket.bind(this);
        this.SubaccountEffectivePositionInMarket = this.SubaccountEffectivePositionInMarket.bind(this);
        this.PerpetualMarketInfo = this.PerpetualMarketInfo.bind(this);
        this.ExpiryFuturesMarketInfo = this.ExpiryFuturesMarketInfo.bind(this);
        this.PerpetualMarketFunding = this.PerpetualMarketFunding.bind(this);
        this.SubaccountOrderMetadata = this.SubaccountOrderMetadata.bind(this);
        this.TradeRewardPoints = this.TradeRewardPoints.bind(this);
        this.PendingTradeRewardPoints = this.PendingTradeRewardPoints.bind(this);
        this.TradeRewardCampaign = this.TradeRewardCampaign.bind(this);
        this.FeeDiscountAccountInfo = this.FeeDiscountAccountInfo.bind(this);
        this.FeeDiscountSchedule = this.FeeDiscountSchedule.bind(this);
        this.BalanceMismatches = this.BalanceMismatches.bind(this);
        this.BalanceWithBalanceHolds = this.BalanceWithBalanceHolds.bind(this);
        this.FeeDiscountTierStatistics = this.FeeDiscountTierStatistics.bind(this);
        this.MitoVaultInfos = this.MitoVaultInfos.bind(this);
        this.QueryMarketIDFromVault = this.QueryMarketIDFromVault.bind(this);
        this.HistoricalTradeRecords = this.HistoricalTradeRecords.bind(this);
        this.IsOptedOutOfRewards = this.IsOptedOutOfRewards.bind(this);
        this.OptedOutOfRewardsAccounts = this.OptedOutOfRewardsAccounts.bind(this);
        this.MarketVolatility = this.MarketVolatility.bind(this);
        this.BinaryOptionsMarkets = this.BinaryOptionsMarkets.bind(this);
        this.TraderDerivativeConditionalOrders = this.TraderDerivativeConditionalOrders.bind(this);
        this.MarketAtomicExecutionFeeMultiplier = this.MarketAtomicExecutionFeeMultiplier.bind(this);
    }
    QueryExchangeParams(request, metadata) {
        return this.rpc.unary(exports.QueryQueryExchangeParamsDesc, exports.QueryExchangeParamsRequest.fromPartial(request), metadata);
    }
    SubaccountDeposits(request, metadata) {
        return this.rpc.unary(exports.QuerySubaccountDepositsDesc, exports.QuerySubaccountDepositsRequest.fromPartial(request), metadata);
    }
    SubaccountDeposit(request, metadata) {
        return this.rpc.unary(exports.QuerySubaccountDepositDesc, exports.QuerySubaccountDepositRequest.fromPartial(request), metadata);
    }
    ExchangeBalances(request, metadata) {
        return this.rpc.unary(exports.QueryExchangeBalancesDesc, exports.QueryExchangeBalancesRequest.fromPartial(request), metadata);
    }
    AggregateVolume(request, metadata) {
        return this.rpc.unary(exports.QueryAggregateVolumeDesc, exports.QueryAggregateVolumeRequest.fromPartial(request), metadata);
    }
    AggregateVolumes(request, metadata) {
        return this.rpc.unary(exports.QueryAggregateVolumesDesc, exports.QueryAggregateVolumesRequest.fromPartial(request), metadata);
    }
    AggregateMarketVolume(request, metadata) {
        return this.rpc.unary(exports.QueryAggregateMarketVolumeDesc, exports.QueryAggregateMarketVolumeRequest.fromPartial(request), metadata);
    }
    AggregateMarketVolumes(request, metadata) {
        return this.rpc.unary(exports.QueryAggregateMarketVolumesDesc, exports.QueryAggregateMarketVolumesRequest.fromPartial(request), metadata);
    }
    DenomDecimal(request, metadata) {
        return this.rpc.unary(exports.QueryDenomDecimalDesc, exports.QueryDenomDecimalRequest.fromPartial(request), metadata);
    }
    DenomDecimals(request, metadata) {
        return this.rpc.unary(exports.QueryDenomDecimalsDesc, exports.QueryDenomDecimalsRequest.fromPartial(request), metadata);
    }
    SpotMarkets(request, metadata) {
        return this.rpc.unary(exports.QuerySpotMarketsDesc, exports.QuerySpotMarketsRequest.fromPartial(request), metadata);
    }
    SpotMarket(request, metadata) {
        return this.rpc.unary(exports.QuerySpotMarketDesc, exports.QuerySpotMarketRequest.fromPartial(request), metadata);
    }
    FullSpotMarkets(request, metadata) {
        return this.rpc.unary(exports.QueryFullSpotMarketsDesc, exports.QueryFullSpotMarketsRequest.fromPartial(request), metadata);
    }
    FullSpotMarket(request, metadata) {
        return this.rpc.unary(exports.QueryFullSpotMarketDesc, exports.QueryFullSpotMarketRequest.fromPartial(request), metadata);
    }
    SpotOrderbook(request, metadata) {
        return this.rpc.unary(exports.QuerySpotOrderbookDesc, exports.QuerySpotOrderbookRequest.fromPartial(request), metadata);
    }
    TraderSpotOrders(request, metadata) {
        return this.rpc.unary(exports.QueryTraderSpotOrdersDesc, exports.QueryTraderSpotOrdersRequest.fromPartial(request), metadata);
    }
    AccountAddressSpotOrders(request, metadata) {
        return this.rpc.unary(exports.QueryAccountAddressSpotOrdersDesc, exports.QueryAccountAddressSpotOrdersRequest.fromPartial(request), metadata);
    }
    SpotOrdersByHashes(request, metadata) {
        return this.rpc.unary(exports.QuerySpotOrdersByHashesDesc, exports.QuerySpotOrdersByHashesRequest.fromPartial(request), metadata);
    }
    SubaccountOrders(request, metadata) {
        return this.rpc.unary(exports.QuerySubaccountOrdersDesc, exports.QuerySubaccountOrdersRequest.fromPartial(request), metadata);
    }
    TraderSpotTransientOrders(request, metadata) {
        return this.rpc.unary(exports.QueryTraderSpotTransientOrdersDesc, exports.QueryTraderSpotOrdersRequest.fromPartial(request), metadata);
    }
    SpotMidPriceAndTOB(request, metadata) {
        return this.rpc.unary(exports.QuerySpotMidPriceAndTOBDesc, exports.QuerySpotMidPriceAndTOBRequest.fromPartial(request), metadata);
    }
    DerivativeMidPriceAndTOB(request, metadata) {
        return this.rpc.unary(exports.QueryDerivativeMidPriceAndTOBDesc, exports.QueryDerivativeMidPriceAndTOBRequest.fromPartial(request), metadata);
    }
    DerivativeOrderbook(request, metadata) {
        return this.rpc.unary(exports.QueryDerivativeOrderbookDesc, exports.QueryDerivativeOrderbookRequest.fromPartial(request), metadata);
    }
    TraderDerivativeOrders(request, metadata) {
        return this.rpc.unary(exports.QueryTraderDerivativeOrdersDesc, exports.QueryTraderDerivativeOrdersRequest.fromPartial(request), metadata);
    }
    AccountAddressDerivativeOrders(request, metadata) {
        return this.rpc.unary(exports.QueryAccountAddressDerivativeOrdersDesc, exports.QueryAccountAddressDerivativeOrdersRequest.fromPartial(request), metadata);
    }
    DerivativeOrdersByHashes(request, metadata) {
        return this.rpc.unary(exports.QueryDerivativeOrdersByHashesDesc, exports.QueryDerivativeOrdersByHashesRequest.fromPartial(request), metadata);
    }
    TraderDerivativeTransientOrders(request, metadata) {
        return this.rpc.unary(exports.QueryTraderDerivativeTransientOrdersDesc, exports.QueryTraderDerivativeOrdersRequest.fromPartial(request), metadata);
    }
    DerivativeMarkets(request, metadata) {
        return this.rpc.unary(exports.QueryDerivativeMarketsDesc, exports.QueryDerivativeMarketsRequest.fromPartial(request), metadata);
    }
    DerivativeMarket(request, metadata) {
        return this.rpc.unary(exports.QueryDerivativeMarketDesc, exports.QueryDerivativeMarketRequest.fromPartial(request), metadata);
    }
    DerivativeMarketAddress(request, metadata) {
        return this.rpc.unary(exports.QueryDerivativeMarketAddressDesc, exports.QueryDerivativeMarketAddressRequest.fromPartial(request), metadata);
    }
    SubaccountTradeNonce(request, metadata) {
        return this.rpc.unary(exports.QuerySubaccountTradeNonceDesc, exports.QuerySubaccountTradeNonceRequest.fromPartial(request), metadata);
    }
    ExchangeModuleState(request, metadata) {
        return this.rpc.unary(exports.QueryExchangeModuleStateDesc, exports.QueryModuleStateRequest.fromPartial(request), metadata);
    }
    Positions(request, metadata) {
        return this.rpc.unary(exports.QueryPositionsDesc, exports.QueryPositionsRequest.fromPartial(request), metadata);
    }
    SubaccountPositions(request, metadata) {
        return this.rpc.unary(exports.QuerySubaccountPositionsDesc, exports.QuerySubaccountPositionsRequest.fromPartial(request), metadata);
    }
    SubaccountPositionInMarket(request, metadata) {
        return this.rpc.unary(exports.QuerySubaccountPositionInMarketDesc, exports.QuerySubaccountPositionInMarketRequest.fromPartial(request), metadata);
    }
    SubaccountEffectivePositionInMarket(request, metadata) {
        return this.rpc.unary(exports.QuerySubaccountEffectivePositionInMarketDesc, exports.QuerySubaccountEffectivePositionInMarketRequest.fromPartial(request), metadata);
    }
    PerpetualMarketInfo(request, metadata) {
        return this.rpc.unary(exports.QueryPerpetualMarketInfoDesc, exports.QueryPerpetualMarketInfoRequest.fromPartial(request), metadata);
    }
    ExpiryFuturesMarketInfo(request, metadata) {
        return this.rpc.unary(exports.QueryExpiryFuturesMarketInfoDesc, exports.QueryExpiryFuturesMarketInfoRequest.fromPartial(request), metadata);
    }
    PerpetualMarketFunding(request, metadata) {
        return this.rpc.unary(exports.QueryPerpetualMarketFundingDesc, exports.QueryPerpetualMarketFundingRequest.fromPartial(request), metadata);
    }
    SubaccountOrderMetadata(request, metadata) {
        return this.rpc.unary(exports.QuerySubaccountOrderMetadataDesc, exports.QuerySubaccountOrderMetadataRequest.fromPartial(request), metadata);
    }
    TradeRewardPoints(request, metadata) {
        return this.rpc.unary(exports.QueryTradeRewardPointsDesc, exports.QueryTradeRewardPointsRequest.fromPartial(request), metadata);
    }
    PendingTradeRewardPoints(request, metadata) {
        return this.rpc.unary(exports.QueryPendingTradeRewardPointsDesc, exports.QueryTradeRewardPointsRequest.fromPartial(request), metadata);
    }
    TradeRewardCampaign(request, metadata) {
        return this.rpc.unary(exports.QueryTradeRewardCampaignDesc, exports.QueryTradeRewardCampaignRequest.fromPartial(request), metadata);
    }
    FeeDiscountAccountInfo(request, metadata) {
        return this.rpc.unary(exports.QueryFeeDiscountAccountInfoDesc, exports.QueryFeeDiscountAccountInfoRequest.fromPartial(request), metadata);
    }
    FeeDiscountSchedule(request, metadata) {
        return this.rpc.unary(exports.QueryFeeDiscountScheduleDesc, exports.QueryFeeDiscountScheduleRequest.fromPartial(request), metadata);
    }
    BalanceMismatches(request, metadata) {
        return this.rpc.unary(exports.QueryBalanceMismatchesDesc, exports.QueryBalanceMismatchesRequest.fromPartial(request), metadata);
    }
    BalanceWithBalanceHolds(request, metadata) {
        return this.rpc.unary(exports.QueryBalanceWithBalanceHoldsDesc, exports.QueryBalanceWithBalanceHoldsRequest.fromPartial(request), metadata);
    }
    FeeDiscountTierStatistics(request, metadata) {
        return this.rpc.unary(exports.QueryFeeDiscountTierStatisticsDesc, exports.QueryFeeDiscountTierStatisticsRequest.fromPartial(request), metadata);
    }
    MitoVaultInfos(request, metadata) {
        return this.rpc.unary(exports.QueryMitoVaultInfosDesc, exports.MitoVaultInfosRequest.fromPartial(request), metadata);
    }
    QueryMarketIDFromVault(request, metadata) {
        return this.rpc.unary(exports.QueryQueryMarketIDFromVaultDesc, exports.QueryMarketIDFromVaultRequest.fromPartial(request), metadata);
    }
    HistoricalTradeRecords(request, metadata) {
        return this.rpc.unary(exports.QueryHistoricalTradeRecordsDesc, exports.QueryHistoricalTradeRecordsRequest.fromPartial(request), metadata);
    }
    IsOptedOutOfRewards(request, metadata) {
        return this.rpc.unary(exports.QueryIsOptedOutOfRewardsDesc, exports.QueryIsOptedOutOfRewardsRequest.fromPartial(request), metadata);
    }
    OptedOutOfRewardsAccounts(request, metadata) {
        return this.rpc.unary(exports.QueryOptedOutOfRewardsAccountsDesc, exports.QueryOptedOutOfRewardsAccountsRequest.fromPartial(request), metadata);
    }
    MarketVolatility(request, metadata) {
        return this.rpc.unary(exports.QueryMarketVolatilityDesc, exports.QueryMarketVolatilityRequest.fromPartial(request), metadata);
    }
    BinaryOptionsMarkets(request, metadata) {
        return this.rpc.unary(exports.QueryBinaryOptionsMarketsDesc, exports.QueryBinaryMarketsRequest.fromPartial(request), metadata);
    }
    TraderDerivativeConditionalOrders(request, metadata) {
        return this.rpc.unary(exports.QueryTraderDerivativeConditionalOrdersDesc, exports.QueryTraderDerivativeConditionalOrdersRequest.fromPartial(request), metadata);
    }
    MarketAtomicExecutionFeeMultiplier(request, metadata) {
        return this.rpc.unary(exports.QueryMarketAtomicExecutionFeeMultiplierDesc, exports.QueryMarketAtomicExecutionFeeMultiplierRequest.fromPartial(request), metadata);
    }
}
exports.QueryClientImpl = QueryClientImpl;
exports.QueryDesc = { serviceName: "injective.exchange.v1beta1.Query" };
exports.QueryQueryExchangeParamsDesc = {
    methodName: "QueryExchangeParams",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryExchangeParamsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryExchangeParamsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QuerySubaccountDepositsDesc = {
    methodName: "SubaccountDeposits",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QuerySubaccountDepositsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QuerySubaccountDepositsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QuerySubaccountDepositDesc = {
    methodName: "SubaccountDeposit",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QuerySubaccountDepositRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QuerySubaccountDepositResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryExchangeBalancesDesc = {
    methodName: "ExchangeBalances",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryExchangeBalancesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryExchangeBalancesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryAggregateVolumeDesc = {
    methodName: "AggregateVolume",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryAggregateVolumeRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryAggregateVolumeResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryAggregateVolumesDesc = {
    methodName: "AggregateVolumes",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryAggregateVolumesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryAggregateVolumesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryAggregateMarketVolumeDesc = {
    methodName: "AggregateMarketVolume",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryAggregateMarketVolumeRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryAggregateMarketVolumeResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryAggregateMarketVolumesDesc = {
    methodName: "AggregateMarketVolumes",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryAggregateMarketVolumesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryAggregateMarketVolumesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryDenomDecimalDesc = {
    methodName: "DenomDecimal",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryDenomDecimalRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryDenomDecimalResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryDenomDecimalsDesc = {
    methodName: "DenomDecimals",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryDenomDecimalsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryDenomDecimalsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QuerySpotMarketsDesc = {
    methodName: "SpotMarkets",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QuerySpotMarketsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QuerySpotMarketsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QuerySpotMarketDesc = {
    methodName: "SpotMarket",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QuerySpotMarketRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QuerySpotMarketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryFullSpotMarketsDesc = {
    methodName: "FullSpotMarkets",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryFullSpotMarketsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryFullSpotMarketsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryFullSpotMarketDesc = {
    methodName: "FullSpotMarket",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryFullSpotMarketRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryFullSpotMarketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QuerySpotOrderbookDesc = {
    methodName: "SpotOrderbook",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QuerySpotOrderbookRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QuerySpotOrderbookResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryTraderSpotOrdersDesc = {
    methodName: "TraderSpotOrders",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryTraderSpotOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryTraderSpotOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryAccountAddressSpotOrdersDesc = {
    methodName: "AccountAddressSpotOrders",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryAccountAddressSpotOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryAccountAddressSpotOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QuerySpotOrdersByHashesDesc = {
    methodName: "SpotOrdersByHashes",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QuerySpotOrdersByHashesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QuerySpotOrdersByHashesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QuerySubaccountOrdersDesc = {
    methodName: "SubaccountOrders",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QuerySubaccountOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QuerySubaccountOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryTraderSpotTransientOrdersDesc = {
    methodName: "TraderSpotTransientOrders",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryTraderSpotOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryTraderSpotOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QuerySpotMidPriceAndTOBDesc = {
    methodName: "SpotMidPriceAndTOB",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QuerySpotMidPriceAndTOBRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QuerySpotMidPriceAndTOBResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryDerivativeMidPriceAndTOBDesc = {
    methodName: "DerivativeMidPriceAndTOB",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryDerivativeMidPriceAndTOBRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryDerivativeMidPriceAndTOBResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryDerivativeOrderbookDesc = {
    methodName: "DerivativeOrderbook",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryDerivativeOrderbookRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryDerivativeOrderbookResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryTraderDerivativeOrdersDesc = {
    methodName: "TraderDerivativeOrders",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryTraderDerivativeOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryTraderDerivativeOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryAccountAddressDerivativeOrdersDesc = {
    methodName: "AccountAddressDerivativeOrders",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryAccountAddressDerivativeOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryAccountAddressDerivativeOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryDerivativeOrdersByHashesDesc = {
    methodName: "DerivativeOrdersByHashes",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryDerivativeOrdersByHashesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryDerivativeOrdersByHashesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryTraderDerivativeTransientOrdersDesc = {
    methodName: "TraderDerivativeTransientOrders",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryTraderDerivativeOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryTraderDerivativeOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryDerivativeMarketsDesc = {
    methodName: "DerivativeMarkets",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryDerivativeMarketsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryDerivativeMarketsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryDerivativeMarketDesc = {
    methodName: "DerivativeMarket",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryDerivativeMarketRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryDerivativeMarketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryDerivativeMarketAddressDesc = {
    methodName: "DerivativeMarketAddress",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryDerivativeMarketAddressRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryDerivativeMarketAddressResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QuerySubaccountTradeNonceDesc = {
    methodName: "SubaccountTradeNonce",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QuerySubaccountTradeNonceRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QuerySubaccountTradeNonceResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryExchangeModuleStateDesc = {
    methodName: "ExchangeModuleState",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryModuleStateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryModuleStateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryPositionsDesc = {
    methodName: "Positions",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryPositionsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryPositionsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QuerySubaccountPositionsDesc = {
    methodName: "SubaccountPositions",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QuerySubaccountPositionsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QuerySubaccountPositionsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QuerySubaccountPositionInMarketDesc = {
    methodName: "SubaccountPositionInMarket",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QuerySubaccountPositionInMarketRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QuerySubaccountPositionInMarketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QuerySubaccountEffectivePositionInMarketDesc = {
    methodName: "SubaccountEffectivePositionInMarket",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QuerySubaccountEffectivePositionInMarketRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QuerySubaccountEffectivePositionInMarketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryPerpetualMarketInfoDesc = {
    methodName: "PerpetualMarketInfo",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryPerpetualMarketInfoRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryPerpetualMarketInfoResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryExpiryFuturesMarketInfoDesc = {
    methodName: "ExpiryFuturesMarketInfo",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryExpiryFuturesMarketInfoRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryExpiryFuturesMarketInfoResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryPerpetualMarketFundingDesc = {
    methodName: "PerpetualMarketFunding",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryPerpetualMarketFundingRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryPerpetualMarketFundingResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QuerySubaccountOrderMetadataDesc = {
    methodName: "SubaccountOrderMetadata",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QuerySubaccountOrderMetadataRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QuerySubaccountOrderMetadataResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryTradeRewardPointsDesc = {
    methodName: "TradeRewardPoints",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryTradeRewardPointsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryTradeRewardPointsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryPendingTradeRewardPointsDesc = {
    methodName: "PendingTradeRewardPoints",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryTradeRewardPointsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryTradeRewardPointsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryTradeRewardCampaignDesc = {
    methodName: "TradeRewardCampaign",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryTradeRewardCampaignRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryTradeRewardCampaignResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryFeeDiscountAccountInfoDesc = {
    methodName: "FeeDiscountAccountInfo",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryFeeDiscountAccountInfoRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryFeeDiscountAccountInfoResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryFeeDiscountScheduleDesc = {
    methodName: "FeeDiscountSchedule",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryFeeDiscountScheduleRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryFeeDiscountScheduleResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryBalanceMismatchesDesc = {
    methodName: "BalanceMismatches",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryBalanceMismatchesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryBalanceMismatchesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryBalanceWithBalanceHoldsDesc = {
    methodName: "BalanceWithBalanceHolds",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryBalanceWithBalanceHoldsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryBalanceWithBalanceHoldsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryFeeDiscountTierStatisticsDesc = {
    methodName: "FeeDiscountTierStatistics",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryFeeDiscountTierStatisticsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryFeeDiscountTierStatisticsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryMitoVaultInfosDesc = {
    methodName: "MitoVaultInfos",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MitoVaultInfosRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MitoVaultInfosResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryQueryMarketIDFromVaultDesc = {
    methodName: "QueryMarketIDFromVault",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryMarketIDFromVaultRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryMarketIDFromVaultResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryHistoricalTradeRecordsDesc = {
    methodName: "HistoricalTradeRecords",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryHistoricalTradeRecordsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryHistoricalTradeRecordsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryIsOptedOutOfRewardsDesc = {
    methodName: "IsOptedOutOfRewards",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryIsOptedOutOfRewardsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryIsOptedOutOfRewardsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryOptedOutOfRewardsAccountsDesc = {
    methodName: "OptedOutOfRewardsAccounts",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryOptedOutOfRewardsAccountsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryOptedOutOfRewardsAccountsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryMarketVolatilityDesc = {
    methodName: "MarketVolatility",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryMarketVolatilityRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryMarketVolatilityResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryBinaryOptionsMarketsDesc = {
    methodName: "BinaryOptionsMarkets",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryBinaryMarketsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryBinaryMarketsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryTraderDerivativeConditionalOrdersDesc = {
    methodName: "TraderDerivativeConditionalOrders",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryTraderDerivativeConditionalOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryTraderDerivativeConditionalOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryMarketAtomicExecutionFeeMultiplierDesc = {
    methodName: "MarketAtomicExecutionFeeMultiplier",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryMarketAtomicExecutionFeeMultiplierRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryMarketAtomicExecutionFeeMultiplierResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
class GrpcWebImpl {
    constructor(host, options) {
        this.host = host;
        this.options = options;
    }
    unary(methodDesc, _request, metadata) {
        var _a;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new browser_headers_1.BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new Promise((resolve, reject) => {
            grpc_web_1.grpc.unary(methodDesc, {
                request,
                host: this.host,
                metadata: maybeCombinedMetadata,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (response) {
                    if (response.status === grpc_web_1.grpc.Code.OK) {
                        resolve(response.message.toObject());
                    }
                    else {
                        const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
                        reject(err);
                    }
                },
            });
        });
    }
}
exports.GrpcWebImpl = GrpcWebImpl;
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function longToString(long) {
    return long.toString();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
class GrpcWebError extends tsProtoGlobalThis.Error {
    constructor(message, code, metadata) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}
exports.GrpcWebError = GrpcWebError;
