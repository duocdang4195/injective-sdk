/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MetadataStatistics } from "../../oracle/v1beta1/oracle";
import { AggregateAccountVolumeRecord, BinaryOptionsMarket, CampaignRewardPool, DenomDecimals, Deposit, DerivativeMarket, ExpiryFuturesMarketInfo, FeeDiscountSchedule, FeeDiscountTierInfo, FeeDiscountTierTTL, Level, MarketVolume, MidPriceAndTOB, Params, PerpetualMarketFunding, PerpetualMarketInfo, Position, SpotMarket, SubaccountOrderbookMetadata, SubaccountOrderData, TradeRecord, TradeRecords, TradingRewardCampaignInfo, VolumeRecord, } from "./exchange";
import { Balance, DerivativePosition, GenesisState } from "./genesis";
export var OrderSide;
(function (OrderSide) {
    /** Side_Unspecified - will return both */
    OrderSide[OrderSide["Side_Unspecified"] = 0] = "Side_Unspecified";
    OrderSide[OrderSide["Buy"] = 1] = "Buy";
    OrderSide[OrderSide["Sell"] = 2] = "Sell";
    OrderSide[OrderSide["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderSide || (OrderSide = {}));
export function orderSideFromJSON(object) {
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
export function orderSideToJSON(object) {
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
/** CancellationStrategy is the list of cancellation strategies. */
export var CancellationStrategy;
(function (CancellationStrategy) {
    /** UnspecifiedOrder - just cancelling in random order in most efficient way */
    CancellationStrategy[CancellationStrategy["UnspecifiedOrder"] = 0] = "UnspecifiedOrder";
    /** FromWorstToBest - e.g. for buy orders from lowest to highest price */
    CancellationStrategy[CancellationStrategy["FromWorstToBest"] = 1] = "FromWorstToBest";
    /** FromBestToWorst - e.g. for buy orders from higest to lowest price */
    CancellationStrategy[CancellationStrategy["FromBestToWorst"] = 2] = "FromBestToWorst";
    CancellationStrategy[CancellationStrategy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CancellationStrategy || (CancellationStrategy = {}));
export function cancellationStrategyFromJSON(object) {
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
export function cancellationStrategyToJSON(object) {
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
function createBaseSubaccount() {
    return { trader: "", subaccountNonce: 0 };
}
export const Subaccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.trader !== "") {
            writer.uint32(10).string(message.trader);
        }
        if (message.subaccountNonce !== 0) {
            writer.uint32(16).uint32(message.subaccountNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return Subaccount.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QuerySubaccountOrdersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QuerySubaccountOrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QuerySubaccountOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.buyOrders) {
            SubaccountOrderData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sellOrders) {
            SubaccountOrderData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.buyOrders.push(SubaccountOrderData.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sellOrders.push(SubaccountOrderData.decode(reader, reader.uint32()));
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
                ? object.buyOrders.map((e) => SubaccountOrderData.fromJSON(e))
                : [],
            sellOrders: Array.isArray(object === null || object === void 0 ? void 0 : object.sellOrders)
                ? object.sellOrders.map((e) => SubaccountOrderData.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.buyOrders) {
            obj.buyOrders = message.buyOrders.map((e) => e ? SubaccountOrderData.toJSON(e) : undefined);
        }
        else {
            obj.buyOrders = [];
        }
        if (message.sellOrders) {
            obj.sellOrders = message.sellOrders.map((e) => e ? SubaccountOrderData.toJSON(e) : undefined);
        }
        else {
            obj.sellOrders = [];
        }
        return obj;
    },
    create(base) {
        return QuerySubaccountOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuerySubaccountOrdersResponse();
        message.buyOrders = ((_a = object.buyOrders) === null || _a === void 0 ? void 0 : _a.map((e) => SubaccountOrderData.fromPartial(e))) || [];
        message.sellOrders = ((_b = object.sellOrders) === null || _b === void 0 ? void 0 : _b.map((e) => SubaccountOrderData.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSubaccountOrderbookMetadataWithMarket() {
    return { metadata: undefined, marketId: "", isBuy: false };
}
export const SubaccountOrderbookMetadataWithMarket = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.metadata !== undefined) {
            SubaccountOrderbookMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountOrderbookMetadataWithMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.metadata = SubaccountOrderbookMetadata.decode(reader, reader.uint32());
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
            metadata: isSet(object.metadata) ? SubaccountOrderbookMetadata.fromJSON(object.metadata) : undefined,
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.metadata !== undefined &&
            (obj.metadata = message.metadata ? SubaccountOrderbookMetadata.toJSON(message.metadata) : undefined);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.isBuy !== undefined && (obj.isBuy = message.isBuy);
        return obj;
    },
    create(base) {
        return SubaccountOrderbookMetadataWithMarket.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubaccountOrderbookMetadataWithMarket();
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? SubaccountOrderbookMetadata.fromPartial(object.metadata)
            : undefined;
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.isBuy = (_b = object.isBuy) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseQueryExchangeParamsRequest() {
    return {};
}
export const QueryExchangeParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryExchangeParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryExchangeParamsRequest();
        return message;
    },
};
function createBaseQueryExchangeParamsResponse() {
    return { params: undefined };
}
export const QueryExchangeParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = Params.decode(reader, reader.uint32());
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
        return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return QueryExchangeParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryExchangeParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQuerySubaccountDepositsRequest() {
    return { subaccountId: "", subaccount: undefined };
}
export const QuerySubaccountDepositsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.subaccount !== undefined) {
            Subaccount.encode(message.subaccount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.subaccount = Subaccount.decode(reader, reader.uint32());
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
            subaccount: isSet(object.subaccount) ? Subaccount.fromJSON(object.subaccount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.subaccount !== undefined &&
            (obj.subaccount = message.subaccount ? Subaccount.toJSON(message.subaccount) : undefined);
        return obj;
    },
    create(base) {
        return QuerySubaccountDepositsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySubaccountDepositsRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.subaccount = (object.subaccount !== undefined && object.subaccount !== null)
            ? Subaccount.fromPartial(object.subaccount)
            : undefined;
        return message;
    },
};
function createBaseQuerySubaccountDepositsResponse() {
    return { deposits: {} };
}
export const QuerySubaccountDepositsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        Object.entries(message.deposits).forEach(([key, value]) => {
            QuerySubaccountDepositsResponse_DepositsEntry.encode({ key: key, value }, writer.uint32(10).fork())
                .ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountDepositsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    const entry1 = QuerySubaccountDepositsResponse_DepositsEntry.decode(reader, reader.uint32());
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
                    acc[key] = Deposit.fromJSON(value);
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
                obj.deposits[k] = Deposit.toJSON(v);
            });
        }
        return obj;
    },
    create(base) {
        return QuerySubaccountDepositsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySubaccountDepositsResponse();
        message.deposits = Object.entries((_a = object.deposits) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Deposit.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseQuerySubaccountDepositsResponse_DepositsEntry() {
    return { key: "", value: undefined };
}
export const QuerySubaccountDepositsResponse_DepositsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            Deposit.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.value = Deposit.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? Deposit.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? Deposit.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return QuerySubaccountDepositsResponse_DepositsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? Deposit.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseQueryExchangeBalancesRequest() {
    return {};
}
export const QueryExchangeBalancesRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryExchangeBalancesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryExchangeBalancesRequest();
        return message;
    },
};
function createBaseQueryExchangeBalancesResponse() {
    return { balances: [] };
}
export const QueryExchangeBalancesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.balances) {
            Balance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.balances.push(Balance.decode(reader, reader.uint32()));
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
        return { balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances) ? object.balances.map((e) => Balance.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.balances) {
            obj.balances = message.balances.map((e) => e ? Balance.toJSON(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        return obj;
    },
    create(base) {
        return QueryExchangeBalancesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExchangeBalancesResponse();
        message.balances = ((_a = object.balances) === null || _a === void 0 ? void 0 : _a.map((e) => Balance.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAggregateVolumeRequest() {
    return { account: "" };
}
export const QueryAggregateVolumeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryAggregateVolumeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryAggregateVolumeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.aggregateVolumes) {
            MarketVolume.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateVolumeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.aggregateVolumes.push(MarketVolume.decode(reader, reader.uint32()));
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
                ? object.aggregateVolumes.map((e) => MarketVolume.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.aggregateVolumes) {
            obj.aggregateVolumes = message.aggregateVolumes.map((e) => e ? MarketVolume.toJSON(e) : undefined);
        }
        else {
            obj.aggregateVolumes = [];
        }
        return obj;
    },
    create(base) {
        return QueryAggregateVolumeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAggregateVolumeResponse();
        message.aggregateVolumes = ((_a = object.aggregateVolumes) === null || _a === void 0 ? void 0 : _a.map((e) => MarketVolume.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAggregateVolumesRequest() {
    return { accounts: [], marketIds: [] };
}
export const QueryAggregateVolumesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accounts) {
            writer.uint32(10).string(v);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryAggregateVolumesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryAggregateVolumesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.aggregateAccountVolumes) {
            AggregateAccountVolumeRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.aggregateMarketVolumes) {
            MarketVolume.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateVolumesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.aggregateAccountVolumes.push(AggregateAccountVolumeRecord.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.aggregateMarketVolumes.push(MarketVolume.decode(reader, reader.uint32()));
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
                ? object.aggregateAccountVolumes.map((e) => AggregateAccountVolumeRecord.fromJSON(e))
                : [],
            aggregateMarketVolumes: Array.isArray(object === null || object === void 0 ? void 0 : object.aggregateMarketVolumes)
                ? object.aggregateMarketVolumes.map((e) => MarketVolume.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.aggregateAccountVolumes) {
            obj.aggregateAccountVolumes = message.aggregateAccountVolumes.map((e) => e ? AggregateAccountVolumeRecord.toJSON(e) : undefined);
        }
        else {
            obj.aggregateAccountVolumes = [];
        }
        if (message.aggregateMarketVolumes) {
            obj.aggregateMarketVolumes = message.aggregateMarketVolumes.map((e) => e ? MarketVolume.toJSON(e) : undefined);
        }
        else {
            obj.aggregateMarketVolumes = [];
        }
        return obj;
    },
    create(base) {
        return QueryAggregateVolumesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryAggregateVolumesResponse();
        message.aggregateAccountVolumes =
            ((_a = object.aggregateAccountVolumes) === null || _a === void 0 ? void 0 : _a.map((e) => AggregateAccountVolumeRecord.fromPartial(e))) || [];
        message.aggregateMarketVolumes = ((_b = object.aggregateMarketVolumes) === null || _b === void 0 ? void 0 : _b.map((e) => MarketVolume.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAggregateMarketVolumeRequest() {
    return { marketId: "" };
}
export const QueryAggregateMarketVolumeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryAggregateMarketVolumeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryAggregateMarketVolumeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.volume !== undefined) {
            VolumeRecord.encode(message.volume, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateMarketVolumeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.volume = VolumeRecord.decode(reader, reader.uint32());
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
        return { volume: isSet(object.volume) ? VolumeRecord.fromJSON(object.volume) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.volume !== undefined && (obj.volume = message.volume ? VolumeRecord.toJSON(message.volume) : undefined);
        return obj;
    },
    create(base) {
        return QueryAggregateMarketVolumeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryAggregateMarketVolumeResponse();
        message.volume = (object.volume !== undefined && object.volume !== null)
            ? VolumeRecord.fromPartial(object.volume)
            : undefined;
        return message;
    },
};
function createBaseQueryDenomDecimalRequest() {
    return { denom: "" };
}
export const QueryDenomDecimalRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDenomDecimalRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDenomDecimalResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.decimal !== "0") {
            writer.uint32(8).uint64(message.decimal);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDenomDecimalResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDenomDecimalsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDenomDecimalsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDenomDecimalsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.denomDecimals) {
            DenomDecimals.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomDecimalsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denomDecimals.push(DenomDecimals.decode(reader, reader.uint32()));
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
                ? object.denomDecimals.map((e) => DenomDecimals.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denomDecimals) {
            obj.denomDecimals = message.denomDecimals.map((e) => e ? DenomDecimals.toJSON(e) : undefined);
        }
        else {
            obj.denomDecimals = [];
        }
        return obj;
    },
    create(base) {
        return QueryDenomDecimalsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomDecimalsResponse();
        message.denomDecimals = ((_a = object.denomDecimals) === null || _a === void 0 ? void 0 : _a.map((e) => DenomDecimals.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAggregateMarketVolumesRequest() {
    return { marketIds: [] };
}
export const QueryAggregateMarketVolumesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.marketIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryAggregateMarketVolumesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryAggregateMarketVolumesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.volumes) {
            MarketVolume.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateMarketVolumesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.volumes.push(MarketVolume.decode(reader, reader.uint32()));
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
        return { volumes: Array.isArray(object === null || object === void 0 ? void 0 : object.volumes) ? object.volumes.map((e) => MarketVolume.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.volumes) {
            obj.volumes = message.volumes.map((e) => e ? MarketVolume.toJSON(e) : undefined);
        }
        else {
            obj.volumes = [];
        }
        return obj;
    },
    create(base) {
        return QueryAggregateMarketVolumesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAggregateMarketVolumesResponse();
        message.volumes = ((_a = object.volumes) === null || _a === void 0 ? void 0 : _a.map((e) => MarketVolume.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQuerySubaccountDepositRequest() {
    return { subaccountId: "", denom: "" };
}
export const QuerySubaccountDepositRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QuerySubaccountDepositRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QuerySubaccountDepositResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deposits !== undefined) {
            Deposit.encode(message.deposits, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.deposits = Deposit.decode(reader, reader.uint32());
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
        return { deposits: isSet(object.deposits) ? Deposit.fromJSON(object.deposits) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.deposits !== undefined && (obj.deposits = message.deposits ? Deposit.toJSON(message.deposits) : undefined);
        return obj;
    },
    create(base) {
        return QuerySubaccountDepositResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountDepositResponse();
        message.deposits = (object.deposits !== undefined && object.deposits !== null)
            ? Deposit.fromPartial(object.deposits)
            : undefined;
        return message;
    },
};
function createBaseQuerySpotMarketsRequest() {
    return { status: "", marketIds: [] };
}
export const QuerySpotMarketsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QuerySpotMarketsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QuerySpotMarketsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.markets) {
            SpotMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.markets.push(SpotMarket.decode(reader, reader.uint32()));
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
        return { markets: Array.isArray(object === null || object === void 0 ? void 0 : object.markets) ? object.markets.map((e) => SpotMarket.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map((e) => e ? SpotMarket.toJSON(e) : undefined);
        }
        else {
            obj.markets = [];
        }
        return obj;
    },
    create(base) {
        return QuerySpotMarketsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySpotMarketsResponse();
        message.markets = ((_a = object.markets) === null || _a === void 0 ? void 0 : _a.map((e) => SpotMarket.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQuerySpotMarketRequest() {
    return { marketId: "" };
}
export const QuerySpotMarketRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QuerySpotMarketRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QuerySpotMarketResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.market !== undefined) {
            SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.market = SpotMarket.decode(reader, reader.uint32());
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
        return { market: isSet(object.market) ? SpotMarket.fromJSON(object.market) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined && (obj.market = message.market ? SpotMarket.toJSON(message.market) : undefined);
        return obj;
    },
    create(base) {
        return QuerySpotMarketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQuerySpotMarketResponse();
        message.market = (object.market !== undefined && object.market !== null)
            ? SpotMarket.fromPartial(object.market)
            : undefined;
        return message;
    },
};
function createBaseQuerySpotOrderbookRequest() {
    return { marketId: "", limit: "0", orderSide: 0, limitCumulativeNotional: "", limitCumulativeQuantity: "" };
}
export const QuerySpotOrderbookRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QuerySpotOrderbookRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QuerySpotOrderbookResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.buysPriceLevel) {
            Level.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sellsPriceLevel) {
            Level.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotOrderbookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.buysPriceLevel.push(Level.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sellsPriceLevel.push(Level.decode(reader, reader.uint32()));
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
                ? object.buysPriceLevel.map((e) => Level.fromJSON(e))
                : [],
            sellsPriceLevel: Array.isArray(object === null || object === void 0 ? void 0 : object.sellsPriceLevel)
                ? object.sellsPriceLevel.map((e) => Level.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.buysPriceLevel) {
            obj.buysPriceLevel = message.buysPriceLevel.map((e) => e ? Level.toJSON(e) : undefined);
        }
        else {
            obj.buysPriceLevel = [];
        }
        if (message.sellsPriceLevel) {
            obj.sellsPriceLevel = message.sellsPriceLevel.map((e) => e ? Level.toJSON(e) : undefined);
        }
        else {
            obj.sellsPriceLevel = [];
        }
        return obj;
    },
    create(base) {
        return QuerySpotOrderbookResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuerySpotOrderbookResponse();
        message.buysPriceLevel = ((_a = object.buysPriceLevel) === null || _a === void 0 ? void 0 : _a.map((e) => Level.fromPartial(e))) || [];
        message.sellsPriceLevel = ((_b = object.sellsPriceLevel) === null || _b === void 0 ? void 0 : _b.map((e) => Level.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFullSpotMarket() {
    return { market: undefined, midPriceAndTob: undefined };
}
export const FullSpotMarket = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.market !== undefined) {
            SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        if (message.midPriceAndTob !== undefined) {
            MidPriceAndTOB.encode(message.midPriceAndTob, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFullSpotMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.market = SpotMarket.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.midPriceAndTob = MidPriceAndTOB.decode(reader, reader.uint32());
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
            market: isSet(object.market) ? SpotMarket.fromJSON(object.market) : undefined,
            midPriceAndTob: isSet(object.midPriceAndTob) ? MidPriceAndTOB.fromJSON(object.midPriceAndTob) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined && (obj.market = message.market ? SpotMarket.toJSON(message.market) : undefined);
        message.midPriceAndTob !== undefined &&
            (obj.midPriceAndTob = message.midPriceAndTob ? MidPriceAndTOB.toJSON(message.midPriceAndTob) : undefined);
        return obj;
    },
    create(base) {
        return FullSpotMarket.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseFullSpotMarket();
        message.market = (object.market !== undefined && object.market !== null)
            ? SpotMarket.fromPartial(object.market)
            : undefined;
        message.midPriceAndTob = (object.midPriceAndTob !== undefined && object.midPriceAndTob !== null)
            ? MidPriceAndTOB.fromPartial(object.midPriceAndTob)
            : undefined;
        return message;
    },
};
function createBaseQueryFullSpotMarketsRequest() {
    return { status: "", marketIds: [], withMidPriceAndTob: false };
}
export const QueryFullSpotMarketsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryFullSpotMarketsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryFullSpotMarketsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.markets) {
            FullSpotMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFullSpotMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.markets.push(FullSpotMarket.decode(reader, reader.uint32()));
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
            markets: Array.isArray(object === null || object === void 0 ? void 0 : object.markets) ? object.markets.map((e) => FullSpotMarket.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map((e) => e ? FullSpotMarket.toJSON(e) : undefined);
        }
        else {
            obj.markets = [];
        }
        return obj;
    },
    create(base) {
        return QueryFullSpotMarketsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFullSpotMarketsResponse();
        message.markets = ((_a = object.markets) === null || _a === void 0 ? void 0 : _a.map((e) => FullSpotMarket.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryFullSpotMarketRequest() {
    return { marketId: "", withMidPriceAndTob: false };
}
export const QueryFullSpotMarketRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.withMidPriceAndTob === true) {
            writer.uint32(16).bool(message.withMidPriceAndTob);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryFullSpotMarketRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryFullSpotMarketResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.market !== undefined) {
            FullSpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFullSpotMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.market = FullSpotMarket.decode(reader, reader.uint32());
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
        return { market: isSet(object.market) ? FullSpotMarket.fromJSON(object.market) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined && (obj.market = message.market ? FullSpotMarket.toJSON(message.market) : undefined);
        return obj;
    },
    create(base) {
        return QueryFullSpotMarketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryFullSpotMarketResponse();
        message.market = (object.market !== undefined && object.market !== null)
            ? FullSpotMarket.fromPartial(object.market)
            : undefined;
        return message;
    },
};
function createBaseQuerySpotOrdersByHashesRequest() {
    return { marketId: "", subaccountId: "", orderHashes: [] };
}
export const QuerySpotOrdersByHashesRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QuerySpotOrdersByHashesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QuerySpotOrdersByHashesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            TrimmedSpotLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotOrdersByHashesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
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
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => TrimmedSpotLimitOrder.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? TrimmedSpotLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return QuerySpotOrdersByHashesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySpotOrdersByHashesResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => TrimmedSpotLimitOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryTraderSpotOrdersRequest() {
    return { marketId: "", subaccountId: "" };
}
export const QueryTraderSpotOrdersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryTraderSpotOrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryAccountAddressSpotOrdersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryAccountAddressSpotOrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const TrimmedSpotLimitOrder = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return TrimmedSpotLimitOrder.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryTraderSpotOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            TrimmedSpotLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderSpotOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
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
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => TrimmedSpotLimitOrder.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? TrimmedSpotLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return QueryTraderSpotOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTraderSpotOrdersResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => TrimmedSpotLimitOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAccountAddressSpotOrdersResponse() {
    return { orders: [] };
}
export const QueryAccountAddressSpotOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            TrimmedSpotLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountAddressSpotOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
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
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => TrimmedSpotLimitOrder.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? TrimmedSpotLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return QueryAccountAddressSpotOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAccountAddressSpotOrdersResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => TrimmedSpotLimitOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQuerySpotMidPriceAndTOBRequest() {
    return { marketId: "" };
}
export const QuerySpotMidPriceAndTOBRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QuerySpotMidPriceAndTOBRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QuerySpotMidPriceAndTOBResponse = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QuerySpotMidPriceAndTOBResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDerivativeMidPriceAndTOBRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDerivativeMidPriceAndTOBRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDerivativeMidPriceAndTOBResponse = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDerivativeMidPriceAndTOBResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDerivativeOrderbookRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDerivativeOrderbookRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDerivativeOrderbookResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.buysPriceLevel) {
            Level.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sellsPriceLevel) {
            Level.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeOrderbookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.buysPriceLevel.push(Level.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sellsPriceLevel.push(Level.decode(reader, reader.uint32()));
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
                ? object.buysPriceLevel.map((e) => Level.fromJSON(e))
                : [],
            sellsPriceLevel: Array.isArray(object === null || object === void 0 ? void 0 : object.sellsPriceLevel)
                ? object.sellsPriceLevel.map((e) => Level.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.buysPriceLevel) {
            obj.buysPriceLevel = message.buysPriceLevel.map((e) => e ? Level.toJSON(e) : undefined);
        }
        else {
            obj.buysPriceLevel = [];
        }
        if (message.sellsPriceLevel) {
            obj.sellsPriceLevel = message.sellsPriceLevel.map((e) => e ? Level.toJSON(e) : undefined);
        }
        else {
            obj.sellsPriceLevel = [];
        }
        return obj;
    },
    create(base) {
        return QueryDerivativeOrderbookResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDerivativeOrderbookResponse();
        message.buysPriceLevel = ((_a = object.buysPriceLevel) === null || _a === void 0 ? void 0 : _a.map((e) => Level.fromPartial(e))) || [];
        message.sellsPriceLevel = ((_b = object.sellsPriceLevel) === null || _b === void 0 ? void 0 : _b.map((e) => Level.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest() {
    return { marketId: "", subaccountId: "", baseAmount: "", quoteAmount: "", strategy: 0, referencePrice: "" };
}
export const QueryTraderSpotOrdersToCancelUpToAmountRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryTraderSpotOrdersToCancelUpToAmountRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryTraderDerivativeOrdersToCancelUpToAmountRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryTraderDerivativeOrdersToCancelUpToAmountRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryTraderDerivativeOrdersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryTraderDerivativeOrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryAccountAddressDerivativeOrdersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryAccountAddressDerivativeOrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const TrimmedDerivativeLimitOrder = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return TrimmedDerivativeLimitOrder.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryTraderDerivativeOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            TrimmedDerivativeLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderDerivativeOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
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
                ? object.orders.map((e) => TrimmedDerivativeLimitOrder.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? TrimmedDerivativeLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return QueryTraderDerivativeOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTraderDerivativeOrdersResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => TrimmedDerivativeLimitOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAccountAddressDerivativeOrdersResponse() {
    return { orders: [] };
}
export const QueryAccountAddressDerivativeOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            TrimmedDerivativeLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountAddressDerivativeOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
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
                ? object.orders.map((e) => TrimmedDerivativeLimitOrder.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? TrimmedDerivativeLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return QueryAccountAddressDerivativeOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAccountAddressDerivativeOrdersResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => TrimmedDerivativeLimitOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryDerivativeOrdersByHashesRequest() {
    return { marketId: "", subaccountId: "", orderHashes: [] };
}
export const QueryDerivativeOrdersByHashesRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDerivativeOrdersByHashesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDerivativeOrdersByHashesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            TrimmedDerivativeLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeOrdersByHashesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
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
                ? object.orders.map((e) => TrimmedDerivativeLimitOrder.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? TrimmedDerivativeLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return QueryDerivativeOrdersByHashesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDerivativeOrdersByHashesResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => TrimmedDerivativeLimitOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryDerivativeMarketsRequest() {
    return { status: "", marketIds: [], withMidPriceAndTob: false };
}
export const QueryDerivativeMarketsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDerivativeMarketsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const PriceLevel = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(message.quantity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return PriceLevel.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const PerpetualMarketState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketInfo !== undefined) {
            PerpetualMarketInfo.encode(message.marketInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.fundingInfo !== undefined) {
            PerpetualMarketFunding.encode(message.fundingInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketInfo = PerpetualMarketInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.fundingInfo = PerpetualMarketFunding.decode(reader, reader.uint32());
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
            marketInfo: isSet(object.marketInfo) ? PerpetualMarketInfo.fromJSON(object.marketInfo) : undefined,
            fundingInfo: isSet(object.fundingInfo) ? PerpetualMarketFunding.fromJSON(object.fundingInfo) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketInfo !== undefined &&
            (obj.marketInfo = message.marketInfo ? PerpetualMarketInfo.toJSON(message.marketInfo) : undefined);
        message.fundingInfo !== undefined &&
            (obj.fundingInfo = message.fundingInfo ? PerpetualMarketFunding.toJSON(message.fundingInfo) : undefined);
        return obj;
    },
    create(base) {
        return PerpetualMarketState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBasePerpetualMarketState();
        message.marketInfo = (object.marketInfo !== undefined && object.marketInfo !== null)
            ? PerpetualMarketInfo.fromPartial(object.marketInfo)
            : undefined;
        message.fundingInfo = (object.fundingInfo !== undefined && object.fundingInfo !== null)
            ? PerpetualMarketFunding.fromPartial(object.fundingInfo)
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
export const FullDerivativeMarket = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.market !== undefined) {
            DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        if (message.perpetualInfo !== undefined) {
            PerpetualMarketState.encode(message.perpetualInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.futuresInfo !== undefined) {
            ExpiryFuturesMarketInfo.encode(message.futuresInfo, writer.uint32(26).fork()).ldelim();
        }
        if (message.markPrice !== "") {
            writer.uint32(34).string(message.markPrice);
        }
        if (message.midPriceAndTob !== undefined) {
            MidPriceAndTOB.encode(message.midPriceAndTob, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFullDerivativeMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.market = DerivativeMarket.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.perpetualInfo = PerpetualMarketState.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.futuresInfo = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
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
                    message.midPriceAndTob = MidPriceAndTOB.decode(reader, reader.uint32());
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
            market: isSet(object.market) ? DerivativeMarket.fromJSON(object.market) : undefined,
            perpetualInfo: isSet(object.perpetualInfo) ? PerpetualMarketState.fromJSON(object.perpetualInfo) : undefined,
            futuresInfo: isSet(object.futuresInfo) ? ExpiryFuturesMarketInfo.fromJSON(object.futuresInfo) : undefined,
            markPrice: isSet(object.markPrice) ? String(object.markPrice) : "",
            midPriceAndTob: isSet(object.midPriceAndTob) ? MidPriceAndTOB.fromJSON(object.midPriceAndTob) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined && (obj.market = message.market ? DerivativeMarket.toJSON(message.market) : undefined);
        message.perpetualInfo !== undefined &&
            (obj.perpetualInfo = message.perpetualInfo ? PerpetualMarketState.toJSON(message.perpetualInfo) : undefined);
        message.futuresInfo !== undefined &&
            (obj.futuresInfo = message.futuresInfo ? ExpiryFuturesMarketInfo.toJSON(message.futuresInfo) : undefined);
        message.markPrice !== undefined && (obj.markPrice = message.markPrice);
        message.midPriceAndTob !== undefined &&
            (obj.midPriceAndTob = message.midPriceAndTob ? MidPriceAndTOB.toJSON(message.midPriceAndTob) : undefined);
        return obj;
    },
    create(base) {
        return FullDerivativeMarket.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFullDerivativeMarket();
        message.market = (object.market !== undefined && object.market !== null)
            ? DerivativeMarket.fromPartial(object.market)
            : undefined;
        message.perpetualInfo = (object.perpetualInfo !== undefined && object.perpetualInfo !== null)
            ? PerpetualMarketState.fromPartial(object.perpetualInfo)
            : undefined;
        message.futuresInfo = (object.futuresInfo !== undefined && object.futuresInfo !== null)
            ? ExpiryFuturesMarketInfo.fromPartial(object.futuresInfo)
            : undefined;
        message.markPrice = (_a = object.markPrice) !== null && _a !== void 0 ? _a : "";
        message.midPriceAndTob = (object.midPriceAndTob !== undefined && object.midPriceAndTob !== null)
            ? MidPriceAndTOB.fromPartial(object.midPriceAndTob)
            : undefined;
        return message;
    },
};
function createBaseQueryDerivativeMarketsResponse() {
    return { markets: [] };
}
export const QueryDerivativeMarketsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.markets) {
            FullDerivativeMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.markets.push(FullDerivativeMarket.decode(reader, reader.uint32()));
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
            markets: Array.isArray(object === null || object === void 0 ? void 0 : object.markets) ? object.markets.map((e) => FullDerivativeMarket.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map((e) => e ? FullDerivativeMarket.toJSON(e) : undefined);
        }
        else {
            obj.markets = [];
        }
        return obj;
    },
    create(base) {
        return QueryDerivativeMarketsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDerivativeMarketsResponse();
        message.markets = ((_a = object.markets) === null || _a === void 0 ? void 0 : _a.map((e) => FullDerivativeMarket.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryDerivativeMarketRequest() {
    return { marketId: "" };
}
export const QueryDerivativeMarketRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDerivativeMarketRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDerivativeMarketResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.market !== undefined) {
            FullDerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.market = FullDerivativeMarket.decode(reader, reader.uint32());
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
        return { market: isSet(object.market) ? FullDerivativeMarket.fromJSON(object.market) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined &&
            (obj.market = message.market ? FullDerivativeMarket.toJSON(message.market) : undefined);
        return obj;
    },
    create(base) {
        return QueryDerivativeMarketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDerivativeMarketResponse();
        message.market = (object.market !== undefined && object.market !== null)
            ? FullDerivativeMarket.fromPartial(object.market)
            : undefined;
        return message;
    },
};
function createBaseQueryDerivativeMarketAddressRequest() {
    return { marketId: "" };
}
export const QueryDerivativeMarketAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDerivativeMarketAddressRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDerivativeMarketAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDerivativeMarketAddressResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QuerySubaccountTradeNonceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QuerySubaccountTradeNonceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QuerySubaccountPositionsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QuerySubaccountPositionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QuerySubaccountPositionInMarketRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QuerySubaccountPositionInMarketRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QuerySubaccountEffectivePositionInMarketRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QuerySubaccountEffectivePositionInMarketRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QuerySubaccountOrderMetadataRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QuerySubaccountOrderMetadataRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QuerySubaccountPositionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.state) {
            DerivativePosition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state.push(DerivativePosition.decode(reader, reader.uint32()));
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
        return { state: Array.isArray(object === null || object === void 0 ? void 0 : object.state) ? object.state.map((e) => DerivativePosition.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.state) {
            obj.state = message.state.map((e) => e ? DerivativePosition.toJSON(e) : undefined);
        }
        else {
            obj.state = [];
        }
        return obj;
    },
    create(base) {
        return QuerySubaccountPositionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySubaccountPositionsResponse();
        message.state = ((_a = object.state) === null || _a === void 0 ? void 0 : _a.map((e) => DerivativePosition.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQuerySubaccountPositionInMarketResponse() {
    return { state: undefined };
}
export const QuerySubaccountPositionInMarketResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.state !== undefined) {
            Position.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountPositionInMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state = Position.decode(reader, reader.uint32());
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
        return { state: isSet(object.state) ? Position.fromJSON(object.state) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state ? Position.toJSON(message.state) : undefined);
        return obj;
    },
    create(base) {
        return QuerySubaccountPositionInMarketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountPositionInMarketResponse();
        message.state = (object.state !== undefined && object.state !== null)
            ? Position.fromPartial(object.state)
            : undefined;
        return message;
    },
};
function createBaseEffectivePosition() {
    return { isLong: false, quantity: "", entryPrice: "", effectiveMargin: "" };
}
export const EffectivePosition = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return EffectivePosition.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QuerySubaccountEffectivePositionInMarketResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.state !== undefined) {
            EffectivePosition.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state = EffectivePosition.decode(reader, reader.uint32());
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
        return { state: isSet(object.state) ? EffectivePosition.fromJSON(object.state) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state ? EffectivePosition.toJSON(message.state) : undefined);
        return obj;
    },
    create(base) {
        return QuerySubaccountEffectivePositionInMarketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
        message.state = (object.state !== undefined && object.state !== null)
            ? EffectivePosition.fromPartial(object.state)
            : undefined;
        return message;
    },
};
function createBaseQueryPerpetualMarketInfoRequest() {
    return { marketId: "" };
}
export const QueryPerpetualMarketInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryPerpetualMarketInfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryPerpetualMarketInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.info !== undefined) {
            PerpetualMarketInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPerpetualMarketInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.info = PerpetualMarketInfo.decode(reader, reader.uint32());
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
        return { info: isSet(object.info) ? PerpetualMarketInfo.fromJSON(object.info) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? PerpetualMarketInfo.toJSON(message.info) : undefined);
        return obj;
    },
    create(base) {
        return QueryPerpetualMarketInfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryPerpetualMarketInfoResponse();
        message.info = (object.info !== undefined && object.info !== null)
            ? PerpetualMarketInfo.fromPartial(object.info)
            : undefined;
        return message;
    },
};
function createBaseQueryExpiryFuturesMarketInfoRequest() {
    return { marketId: "" };
}
export const QueryExpiryFuturesMarketInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryExpiryFuturesMarketInfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryExpiryFuturesMarketInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.info !== undefined) {
            ExpiryFuturesMarketInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExpiryFuturesMarketInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.info = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
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
        return { info: isSet(object.info) ? ExpiryFuturesMarketInfo.fromJSON(object.info) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? ExpiryFuturesMarketInfo.toJSON(message.info) : undefined);
        return obj;
    },
    create(base) {
        return QueryExpiryFuturesMarketInfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryExpiryFuturesMarketInfoResponse();
        message.info = (object.info !== undefined && object.info !== null)
            ? ExpiryFuturesMarketInfo.fromPartial(object.info)
            : undefined;
        return message;
    },
};
function createBaseQueryPerpetualMarketFundingRequest() {
    return { marketId: "" };
}
export const QueryPerpetualMarketFundingRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryPerpetualMarketFundingRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryPerpetualMarketFundingResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.state !== undefined) {
            PerpetualMarketFunding.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPerpetualMarketFundingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state = PerpetualMarketFunding.decode(reader, reader.uint32());
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
        return { state: isSet(object.state) ? PerpetualMarketFunding.fromJSON(object.state) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined &&
            (obj.state = message.state ? PerpetualMarketFunding.toJSON(message.state) : undefined);
        return obj;
    },
    create(base) {
        return QueryPerpetualMarketFundingResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryPerpetualMarketFundingResponse();
        message.state = (object.state !== undefined && object.state !== null)
            ? PerpetualMarketFunding.fromPartial(object.state)
            : undefined;
        return message;
    },
};
function createBaseQuerySubaccountOrderMetadataResponse() {
    return { metadata: [] };
}
export const QuerySubaccountOrderMetadataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.metadata) {
            SubaccountOrderbookMetadataWithMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountOrderMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.metadata.push(SubaccountOrderbookMetadataWithMarket.decode(reader, reader.uint32()));
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
                ? object.metadata.map((e) => SubaccountOrderbookMetadataWithMarket.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.metadata) {
            obj.metadata = message.metadata.map((e) => e ? SubaccountOrderbookMetadataWithMarket.toJSON(e) : undefined);
        }
        else {
            obj.metadata = [];
        }
        return obj;
    },
    create(base) {
        return QuerySubaccountOrderMetadataResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySubaccountOrderMetadataResponse();
        message.metadata = ((_a = object.metadata) === null || _a === void 0 ? void 0 : _a.map((e) => SubaccountOrderbookMetadataWithMarket.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQuerySubaccountTradeNonceResponse() {
    return { nonce: 0 };
}
export const QuerySubaccountTradeNonceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint32(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QuerySubaccountTradeNonceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryModuleStateRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryModuleStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
};
function createBaseQueryModuleStateResponse() {
    return { state: undefined };
}
export const QueryModuleStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.state !== undefined) {
            GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state = GenesisState.decode(reader, reader.uint32());
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
        return { state: isSet(object.state) ? GenesisState.fromJSON(object.state) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state ? GenesisState.toJSON(message.state) : undefined);
        return obj;
    },
    create(base) {
        return QueryModuleStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryModuleStateResponse();
        message.state = (object.state !== undefined && object.state !== null)
            ? GenesisState.fromPartial(object.state)
            : undefined;
        return message;
    },
};
function createBaseQueryPositionsRequest() {
    return {};
}
export const QueryPositionsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryPositionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryPositionsRequest();
        return message;
    },
};
function createBaseQueryPositionsResponse() {
    return { state: [] };
}
export const QueryPositionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.state) {
            DerivativePosition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state.push(DerivativePosition.decode(reader, reader.uint32()));
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
        return { state: Array.isArray(object === null || object === void 0 ? void 0 : object.state) ? object.state.map((e) => DerivativePosition.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.state) {
            obj.state = message.state.map((e) => e ? DerivativePosition.toJSON(e) : undefined);
        }
        else {
            obj.state = [];
        }
        return obj;
    },
    create(base) {
        return QueryPositionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPositionsResponse();
        message.state = ((_a = object.state) === null || _a === void 0 ? void 0 : _a.map((e) => DerivativePosition.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryTradeRewardPointsRequest() {
    return { accounts: [], pendingPoolTimestamp: "0" };
}
export const QueryTradeRewardPointsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accounts) {
            writer.uint32(10).string(v);
        }
        if (message.pendingPoolTimestamp !== "0") {
            writer.uint32(16).int64(message.pendingPoolTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryTradeRewardPointsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryTradeRewardPointsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accountTradeRewardPoints) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryTradeRewardPointsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryTradeRewardCampaignRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryTradeRewardCampaignRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryTradeRewardCampaignResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tradingRewardCampaignInfo !== undefined) {
            TradingRewardCampaignInfo.encode(message.tradingRewardCampaignInfo, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tradingRewardPoolCampaignSchedule) {
            CampaignRewardPool.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalTradeRewardPoints !== "") {
            writer.uint32(26).string(message.totalTradeRewardPoints);
        }
        for (const v of message.pendingTradingRewardPoolCampaignSchedule) {
            CampaignRewardPool.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.pendingTotalTradeRewardPoints) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTradeRewardCampaignResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tradingRewardCampaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.tradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
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
                    message.pendingTradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
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
                ? TradingRewardCampaignInfo.fromJSON(object.tradingRewardCampaignInfo)
                : undefined,
            tradingRewardPoolCampaignSchedule: Array.isArray(object === null || object === void 0 ? void 0 : object.tradingRewardPoolCampaignSchedule)
                ? object.tradingRewardPoolCampaignSchedule.map((e) => CampaignRewardPool.fromJSON(e))
                : [],
            totalTradeRewardPoints: isSet(object.totalTradeRewardPoints) ? String(object.totalTradeRewardPoints) : "",
            pendingTradingRewardPoolCampaignSchedule: Array.isArray(object === null || object === void 0 ? void 0 : object.pendingTradingRewardPoolCampaignSchedule)
                ? object.pendingTradingRewardPoolCampaignSchedule.map((e) => CampaignRewardPool.fromJSON(e))
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
                ? TradingRewardCampaignInfo.toJSON(message.tradingRewardCampaignInfo)
                : undefined);
        if (message.tradingRewardPoolCampaignSchedule) {
            obj.tradingRewardPoolCampaignSchedule = message.tradingRewardPoolCampaignSchedule.map((e) => e ? CampaignRewardPool.toJSON(e) : undefined);
        }
        else {
            obj.tradingRewardPoolCampaignSchedule = [];
        }
        message.totalTradeRewardPoints !== undefined && (obj.totalTradeRewardPoints = message.totalTradeRewardPoints);
        if (message.pendingTradingRewardPoolCampaignSchedule) {
            obj.pendingTradingRewardPoolCampaignSchedule = message.pendingTradingRewardPoolCampaignSchedule.map((e) => e ? CampaignRewardPool.toJSON(e) : undefined);
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
        return QueryTradeRewardCampaignResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseQueryTradeRewardCampaignResponse();
        message.tradingRewardCampaignInfo =
            (object.tradingRewardCampaignInfo !== undefined && object.tradingRewardCampaignInfo !== null)
                ? TradingRewardCampaignInfo.fromPartial(object.tradingRewardCampaignInfo)
                : undefined;
        message.tradingRewardPoolCampaignSchedule =
            ((_a = object.tradingRewardPoolCampaignSchedule) === null || _a === void 0 ? void 0 : _a.map((e) => CampaignRewardPool.fromPartial(e))) || [];
        message.totalTradeRewardPoints = (_b = object.totalTradeRewardPoints) !== null && _b !== void 0 ? _b : "";
        message.pendingTradingRewardPoolCampaignSchedule =
            ((_c = object.pendingTradingRewardPoolCampaignSchedule) === null || _c === void 0 ? void 0 : _c.map((e) => CampaignRewardPool.fromPartial(e))) || [];
        message.pendingTotalTradeRewardPoints = ((_d = object.pendingTotalTradeRewardPoints) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryIsOptedOutOfRewardsRequest() {
    return { account: "" };
}
export const QueryIsOptedOutOfRewardsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryIsOptedOutOfRewardsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryIsOptedOutOfRewardsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.isOptedOut === true) {
            writer.uint32(8).bool(message.isOptedOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryIsOptedOutOfRewardsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryOptedOutOfRewardsAccountsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryOptedOutOfRewardsAccountsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryOptedOutOfRewardsAccountsRequest();
        return message;
    },
};
function createBaseQueryOptedOutOfRewardsAccountsResponse() {
    return { accounts: [] };
}
export const QueryOptedOutOfRewardsAccountsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accounts) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryOptedOutOfRewardsAccountsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryFeeDiscountAccountInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryFeeDiscountAccountInfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryFeeDiscountAccountInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tierLevel !== "0") {
            writer.uint32(8).uint64(message.tierLevel);
        }
        if (message.accountInfo !== undefined) {
            FeeDiscountTierInfo.encode(message.accountInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.accountTtl !== undefined) {
            FeeDiscountTierTTL.encode(message.accountTtl, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.accountInfo = FeeDiscountTierInfo.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.accountTtl = FeeDiscountTierTTL.decode(reader, reader.uint32());
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
            accountInfo: isSet(object.accountInfo) ? FeeDiscountTierInfo.fromJSON(object.accountInfo) : undefined,
            accountTtl: isSet(object.accountTtl) ? FeeDiscountTierTTL.fromJSON(object.accountTtl) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tierLevel !== undefined && (obj.tierLevel = message.tierLevel);
        message.accountInfo !== undefined &&
            (obj.accountInfo = message.accountInfo ? FeeDiscountTierInfo.toJSON(message.accountInfo) : undefined);
        message.accountTtl !== undefined &&
            (obj.accountTtl = message.accountTtl ? FeeDiscountTierTTL.toJSON(message.accountTtl) : undefined);
        return obj;
    },
    create(base) {
        return QueryFeeDiscountAccountInfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFeeDiscountAccountInfoResponse();
        message.tierLevel = (_a = object.tierLevel) !== null && _a !== void 0 ? _a : "0";
        message.accountInfo = (object.accountInfo !== undefined && object.accountInfo !== null)
            ? FeeDiscountTierInfo.fromPartial(object.accountInfo)
            : undefined;
        message.accountTtl = (object.accountTtl !== undefined && object.accountTtl !== null)
            ? FeeDiscountTierTTL.fromPartial(object.accountTtl)
            : undefined;
        return message;
    },
};
function createBaseQueryFeeDiscountScheduleRequest() {
    return {};
}
export const QueryFeeDiscountScheduleRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryFeeDiscountScheduleRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryFeeDiscountScheduleRequest();
        return message;
    },
};
function createBaseQueryFeeDiscountScheduleResponse() {
    return { feeDiscountSchedule: undefined };
}
export const QueryFeeDiscountScheduleResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feeDiscountSchedule !== undefined) {
            FeeDiscountSchedule.encode(message.feeDiscountSchedule, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountScheduleResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feeDiscountSchedule = FeeDiscountSchedule.decode(reader, reader.uint32());
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
                ? FeeDiscountSchedule.fromJSON(object.feeDiscountSchedule)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.feeDiscountSchedule !== undefined && (obj.feeDiscountSchedule = message.feeDiscountSchedule
            ? FeeDiscountSchedule.toJSON(message.feeDiscountSchedule)
            : undefined);
        return obj;
    },
    create(base) {
        return QueryFeeDiscountScheduleResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryFeeDiscountScheduleResponse();
        message.feeDiscountSchedule = (object.feeDiscountSchedule !== undefined && object.feeDiscountSchedule !== null)
            ? FeeDiscountSchedule.fromPartial(object.feeDiscountSchedule)
            : undefined;
        return message;
    },
};
function createBaseQueryBalanceMismatchesRequest() {
    return { dustFactor: "0" };
}
export const QueryBalanceMismatchesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dustFactor !== "0") {
            writer.uint32(8).int64(message.dustFactor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryBalanceMismatchesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const BalanceMismatch = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return BalanceMismatch.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryBalanceMismatchesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.balanceMismatches) {
            BalanceMismatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceMismatchesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.balanceMismatches.push(BalanceMismatch.decode(reader, reader.uint32()));
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
                ? object.balanceMismatches.map((e) => BalanceMismatch.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.balanceMismatches) {
            obj.balanceMismatches = message.balanceMismatches.map((e) => e ? BalanceMismatch.toJSON(e) : undefined);
        }
        else {
            obj.balanceMismatches = [];
        }
        return obj;
    },
    create(base) {
        return QueryBalanceMismatchesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBalanceMismatchesResponse();
        message.balanceMismatches = ((_a = object.balanceMismatches) === null || _a === void 0 ? void 0 : _a.map((e) => BalanceMismatch.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryBalanceWithBalanceHoldsRequest() {
    return {};
}
export const QueryBalanceWithBalanceHoldsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryBalanceWithBalanceHoldsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryBalanceWithBalanceHoldsRequest();
        return message;
    },
};
function createBaseBalanceWithMarginHold() {
    return { subaccountId: "", denom: "", available: "", total: "", balanceHold: "" };
}
export const BalanceWithMarginHold = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return BalanceWithMarginHold.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryBalanceWithBalanceHoldsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.balanceWithBalanceHolds) {
            BalanceWithMarginHold.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceWithBalanceHoldsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.balanceWithBalanceHolds.push(BalanceWithMarginHold.decode(reader, reader.uint32()));
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
                ? object.balanceWithBalanceHolds.map((e) => BalanceWithMarginHold.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.balanceWithBalanceHolds) {
            obj.balanceWithBalanceHolds = message.balanceWithBalanceHolds.map((e) => e ? BalanceWithMarginHold.toJSON(e) : undefined);
        }
        else {
            obj.balanceWithBalanceHolds = [];
        }
        return obj;
    },
    create(base) {
        return QueryBalanceWithBalanceHoldsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBalanceWithBalanceHoldsResponse();
        message.balanceWithBalanceHolds =
            ((_a = object.balanceWithBalanceHolds) === null || _a === void 0 ? void 0 : _a.map((e) => BalanceWithMarginHold.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryFeeDiscountTierStatisticsRequest() {
    return {};
}
export const QueryFeeDiscountTierStatisticsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryFeeDiscountTierStatisticsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryFeeDiscountTierStatisticsRequest();
        return message;
    },
};
function createBaseTierStatistic() {
    return { tier: "0", count: "0" };
}
export const TierStatistic = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tier !== "0") {
            writer.uint32(8).uint64(message.tier);
        }
        if (message.count !== "0") {
            writer.uint32(16).uint64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return TierStatistic.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryFeeDiscountTierStatisticsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.statistics) {
            TierStatistic.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountTierStatisticsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.statistics.push(TierStatistic.decode(reader, reader.uint32()));
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
            statistics: Array.isArray(object === null || object === void 0 ? void 0 : object.statistics) ? object.statistics.map((e) => TierStatistic.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.statistics) {
            obj.statistics = message.statistics.map((e) => e ? TierStatistic.toJSON(e) : undefined);
        }
        else {
            obj.statistics = [];
        }
        return obj;
    },
    create(base) {
        return QueryFeeDiscountTierStatisticsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFeeDiscountTierStatisticsResponse();
        message.statistics = ((_a = object.statistics) === null || _a === void 0 ? void 0 : _a.map((e) => TierStatistic.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMitoVaultInfosRequest() {
    return {};
}
export const MitoVaultInfosRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return MitoVaultInfosRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMitoVaultInfosRequest();
        return message;
    },
};
function createBaseMitoVaultInfosResponse() {
    return { masterAddresses: [], derivativeAddresses: [], spotAddresses: [], cw20Addresses: [] };
}
export const MitoVaultInfosResponse = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return MitoVaultInfosResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryMarketIDFromVaultRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vaultAddress !== "") {
            writer.uint32(10).string(message.vaultAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryMarketIDFromVaultRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryMarketIDFromVaultResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryMarketIDFromVaultResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryHistoricalTradeRecordsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryHistoricalTradeRecordsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryHistoricalTradeRecordsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tradeRecords) {
            TradeRecords.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalTradeRecordsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tradeRecords.push(TradeRecords.decode(reader, reader.uint32()));
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
                ? object.tradeRecords.map((e) => TradeRecords.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tradeRecords) {
            obj.tradeRecords = message.tradeRecords.map((e) => e ? TradeRecords.toJSON(e) : undefined);
        }
        else {
            obj.tradeRecords = [];
        }
        return obj;
    },
    create(base) {
        return QueryHistoricalTradeRecordsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryHistoricalTradeRecordsResponse();
        message.tradeRecords = ((_a = object.tradeRecords) === null || _a === void 0 ? void 0 : _a.map((e) => TradeRecords.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTradeHistoryOptions() {
    return { tradeGroupingSec: "0", maxAge: "0", includeRawHistory: false, includeMetadata: false };
}
export const TradeHistoryOptions = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return TradeHistoryOptions.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryMarketVolatilityRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.tradeHistoryOptions !== undefined) {
            TradeHistoryOptions.encode(message.tradeHistoryOptions, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.tradeHistoryOptions = TradeHistoryOptions.decode(reader, reader.uint32());
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
                ? TradeHistoryOptions.fromJSON(object.tradeHistoryOptions)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.tradeHistoryOptions !== undefined && (obj.tradeHistoryOptions = message.tradeHistoryOptions
            ? TradeHistoryOptions.toJSON(message.tradeHistoryOptions)
            : undefined);
        return obj;
    },
    create(base) {
        return QueryMarketVolatilityRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryMarketVolatilityRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.tradeHistoryOptions = (object.tradeHistoryOptions !== undefined && object.tradeHistoryOptions !== null)
            ? TradeHistoryOptions.fromPartial(object.tradeHistoryOptions)
            : undefined;
        return message;
    },
};
function createBaseQueryMarketVolatilityResponse() {
    return { volatility: "", historyMetadata: undefined, rawHistory: [] };
}
export const QueryMarketVolatilityResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.volatility !== "") {
            writer.uint32(10).string(message.volatility);
        }
        if (message.historyMetadata !== undefined) {
            MetadataStatistics.encode(message.historyMetadata, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.rawHistory) {
            TradeRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.historyMetadata = MetadataStatistics.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.rawHistory.push(TradeRecord.decode(reader, reader.uint32()));
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
            historyMetadata: isSet(object.historyMetadata) ? MetadataStatistics.fromJSON(object.historyMetadata) : undefined,
            rawHistory: Array.isArray(object === null || object === void 0 ? void 0 : object.rawHistory) ? object.rawHistory.map((e) => TradeRecord.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.volatility !== undefined && (obj.volatility = message.volatility);
        message.historyMetadata !== undefined &&
            (obj.historyMetadata = message.historyMetadata ? MetadataStatistics.toJSON(message.historyMetadata) : undefined);
        if (message.rawHistory) {
            obj.rawHistory = message.rawHistory.map((e) => e ? TradeRecord.toJSON(e) : undefined);
        }
        else {
            obj.rawHistory = [];
        }
        return obj;
    },
    create(base) {
        return QueryMarketVolatilityResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryMarketVolatilityResponse();
        message.volatility = (_a = object.volatility) !== null && _a !== void 0 ? _a : "";
        message.historyMetadata = (object.historyMetadata !== undefined && object.historyMetadata !== null)
            ? MetadataStatistics.fromPartial(object.historyMetadata)
            : undefined;
        message.rawHistory = ((_b = object.rawHistory) === null || _b === void 0 ? void 0 : _b.map((e) => TradeRecord.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryBinaryMarketsRequest() {
    return { status: "" };
}
export const QueryBinaryMarketsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryBinaryMarketsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryBinaryMarketsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.markets) {
            BinaryOptionsMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBinaryMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.markets.push(BinaryOptionsMarket.decode(reader, reader.uint32()));
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
            markets: Array.isArray(object === null || object === void 0 ? void 0 : object.markets) ? object.markets.map((e) => BinaryOptionsMarket.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map((e) => e ? BinaryOptionsMarket.toJSON(e) : undefined);
        }
        else {
            obj.markets = [];
        }
        return obj;
    },
    create(base) {
        return QueryBinaryMarketsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBinaryMarketsResponse();
        message.markets = ((_a = object.markets) === null || _a === void 0 ? void 0 : _a.map((e) => BinaryOptionsMarket.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryTraderDerivativeConditionalOrdersRequest() {
    return { subaccountId: "", marketId: "" };
}
export const QueryTraderDerivativeConditionalOrdersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryTraderDerivativeConditionalOrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const TrimmedDerivativeConditionalOrder = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return TrimmedDerivativeConditionalOrder.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryTraderDerivativeConditionalOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            TrimmedDerivativeConditionalOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(TrimmedDerivativeConditionalOrder.decode(reader, reader.uint32()));
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
                ? object.orders.map((e) => TrimmedDerivativeConditionalOrder.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? TrimmedDerivativeConditionalOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return QueryTraderDerivativeConditionalOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => TrimmedDerivativeConditionalOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryMarketAtomicExecutionFeeMultiplierRequest() {
    return { marketId: "" };
}
export const QueryMarketAtomicExecutionFeeMultiplierRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryMarketAtomicExecutionFeeMultiplierRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryMarketAtomicExecutionFeeMultiplierResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.multiplier !== "") {
            writer.uint32(10).string(message.multiplier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryMarketAtomicExecutionFeeMultiplierResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryMarketAtomicExecutionFeeMultiplierResponse();
        message.multiplier = (_a = object.multiplier) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
export class QueryClientImpl {
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
        return this.rpc.unary(QueryQueryExchangeParamsDesc, QueryExchangeParamsRequest.fromPartial(request), metadata);
    }
    SubaccountDeposits(request, metadata) {
        return this.rpc.unary(QuerySubaccountDepositsDesc, QuerySubaccountDepositsRequest.fromPartial(request), metadata);
    }
    SubaccountDeposit(request, metadata) {
        return this.rpc.unary(QuerySubaccountDepositDesc, QuerySubaccountDepositRequest.fromPartial(request), metadata);
    }
    ExchangeBalances(request, metadata) {
        return this.rpc.unary(QueryExchangeBalancesDesc, QueryExchangeBalancesRequest.fromPartial(request), metadata);
    }
    AggregateVolume(request, metadata) {
        return this.rpc.unary(QueryAggregateVolumeDesc, QueryAggregateVolumeRequest.fromPartial(request), metadata);
    }
    AggregateVolumes(request, metadata) {
        return this.rpc.unary(QueryAggregateVolumesDesc, QueryAggregateVolumesRequest.fromPartial(request), metadata);
    }
    AggregateMarketVolume(request, metadata) {
        return this.rpc.unary(QueryAggregateMarketVolumeDesc, QueryAggregateMarketVolumeRequest.fromPartial(request), metadata);
    }
    AggregateMarketVolumes(request, metadata) {
        return this.rpc.unary(QueryAggregateMarketVolumesDesc, QueryAggregateMarketVolumesRequest.fromPartial(request), metadata);
    }
    DenomDecimal(request, metadata) {
        return this.rpc.unary(QueryDenomDecimalDesc, QueryDenomDecimalRequest.fromPartial(request), metadata);
    }
    DenomDecimals(request, metadata) {
        return this.rpc.unary(QueryDenomDecimalsDesc, QueryDenomDecimalsRequest.fromPartial(request), metadata);
    }
    SpotMarkets(request, metadata) {
        return this.rpc.unary(QuerySpotMarketsDesc, QuerySpotMarketsRequest.fromPartial(request), metadata);
    }
    SpotMarket(request, metadata) {
        return this.rpc.unary(QuerySpotMarketDesc, QuerySpotMarketRequest.fromPartial(request), metadata);
    }
    FullSpotMarkets(request, metadata) {
        return this.rpc.unary(QueryFullSpotMarketsDesc, QueryFullSpotMarketsRequest.fromPartial(request), metadata);
    }
    FullSpotMarket(request, metadata) {
        return this.rpc.unary(QueryFullSpotMarketDesc, QueryFullSpotMarketRequest.fromPartial(request), metadata);
    }
    SpotOrderbook(request, metadata) {
        return this.rpc.unary(QuerySpotOrderbookDesc, QuerySpotOrderbookRequest.fromPartial(request), metadata);
    }
    TraderSpotOrders(request, metadata) {
        return this.rpc.unary(QueryTraderSpotOrdersDesc, QueryTraderSpotOrdersRequest.fromPartial(request), metadata);
    }
    AccountAddressSpotOrders(request, metadata) {
        return this.rpc.unary(QueryAccountAddressSpotOrdersDesc, QueryAccountAddressSpotOrdersRequest.fromPartial(request), metadata);
    }
    SpotOrdersByHashes(request, metadata) {
        return this.rpc.unary(QuerySpotOrdersByHashesDesc, QuerySpotOrdersByHashesRequest.fromPartial(request), metadata);
    }
    SubaccountOrders(request, metadata) {
        return this.rpc.unary(QuerySubaccountOrdersDesc, QuerySubaccountOrdersRequest.fromPartial(request), metadata);
    }
    TraderSpotTransientOrders(request, metadata) {
        return this.rpc.unary(QueryTraderSpotTransientOrdersDesc, QueryTraderSpotOrdersRequest.fromPartial(request), metadata);
    }
    SpotMidPriceAndTOB(request, metadata) {
        return this.rpc.unary(QuerySpotMidPriceAndTOBDesc, QuerySpotMidPriceAndTOBRequest.fromPartial(request), metadata);
    }
    DerivativeMidPriceAndTOB(request, metadata) {
        return this.rpc.unary(QueryDerivativeMidPriceAndTOBDesc, QueryDerivativeMidPriceAndTOBRequest.fromPartial(request), metadata);
    }
    DerivativeOrderbook(request, metadata) {
        return this.rpc.unary(QueryDerivativeOrderbookDesc, QueryDerivativeOrderbookRequest.fromPartial(request), metadata);
    }
    TraderDerivativeOrders(request, metadata) {
        return this.rpc.unary(QueryTraderDerivativeOrdersDesc, QueryTraderDerivativeOrdersRequest.fromPartial(request), metadata);
    }
    AccountAddressDerivativeOrders(request, metadata) {
        return this.rpc.unary(QueryAccountAddressDerivativeOrdersDesc, QueryAccountAddressDerivativeOrdersRequest.fromPartial(request), metadata);
    }
    DerivativeOrdersByHashes(request, metadata) {
        return this.rpc.unary(QueryDerivativeOrdersByHashesDesc, QueryDerivativeOrdersByHashesRequest.fromPartial(request), metadata);
    }
    TraderDerivativeTransientOrders(request, metadata) {
        return this.rpc.unary(QueryTraderDerivativeTransientOrdersDesc, QueryTraderDerivativeOrdersRequest.fromPartial(request), metadata);
    }
    DerivativeMarkets(request, metadata) {
        return this.rpc.unary(QueryDerivativeMarketsDesc, QueryDerivativeMarketsRequest.fromPartial(request), metadata);
    }
    DerivativeMarket(request, metadata) {
        return this.rpc.unary(QueryDerivativeMarketDesc, QueryDerivativeMarketRequest.fromPartial(request), metadata);
    }
    DerivativeMarketAddress(request, metadata) {
        return this.rpc.unary(QueryDerivativeMarketAddressDesc, QueryDerivativeMarketAddressRequest.fromPartial(request), metadata);
    }
    SubaccountTradeNonce(request, metadata) {
        return this.rpc.unary(QuerySubaccountTradeNonceDesc, QuerySubaccountTradeNonceRequest.fromPartial(request), metadata);
    }
    ExchangeModuleState(request, metadata) {
        return this.rpc.unary(QueryExchangeModuleStateDesc, QueryModuleStateRequest.fromPartial(request), metadata);
    }
    Positions(request, metadata) {
        return this.rpc.unary(QueryPositionsDesc, QueryPositionsRequest.fromPartial(request), metadata);
    }
    SubaccountPositions(request, metadata) {
        return this.rpc.unary(QuerySubaccountPositionsDesc, QuerySubaccountPositionsRequest.fromPartial(request), metadata);
    }
    SubaccountPositionInMarket(request, metadata) {
        return this.rpc.unary(QuerySubaccountPositionInMarketDesc, QuerySubaccountPositionInMarketRequest.fromPartial(request), metadata);
    }
    SubaccountEffectivePositionInMarket(request, metadata) {
        return this.rpc.unary(QuerySubaccountEffectivePositionInMarketDesc, QuerySubaccountEffectivePositionInMarketRequest.fromPartial(request), metadata);
    }
    PerpetualMarketInfo(request, metadata) {
        return this.rpc.unary(QueryPerpetualMarketInfoDesc, QueryPerpetualMarketInfoRequest.fromPartial(request), metadata);
    }
    ExpiryFuturesMarketInfo(request, metadata) {
        return this.rpc.unary(QueryExpiryFuturesMarketInfoDesc, QueryExpiryFuturesMarketInfoRequest.fromPartial(request), metadata);
    }
    PerpetualMarketFunding(request, metadata) {
        return this.rpc.unary(QueryPerpetualMarketFundingDesc, QueryPerpetualMarketFundingRequest.fromPartial(request), metadata);
    }
    SubaccountOrderMetadata(request, metadata) {
        return this.rpc.unary(QuerySubaccountOrderMetadataDesc, QuerySubaccountOrderMetadataRequest.fromPartial(request), metadata);
    }
    TradeRewardPoints(request, metadata) {
        return this.rpc.unary(QueryTradeRewardPointsDesc, QueryTradeRewardPointsRequest.fromPartial(request), metadata);
    }
    PendingTradeRewardPoints(request, metadata) {
        return this.rpc.unary(QueryPendingTradeRewardPointsDesc, QueryTradeRewardPointsRequest.fromPartial(request), metadata);
    }
    TradeRewardCampaign(request, metadata) {
        return this.rpc.unary(QueryTradeRewardCampaignDesc, QueryTradeRewardCampaignRequest.fromPartial(request), metadata);
    }
    FeeDiscountAccountInfo(request, metadata) {
        return this.rpc.unary(QueryFeeDiscountAccountInfoDesc, QueryFeeDiscountAccountInfoRequest.fromPartial(request), metadata);
    }
    FeeDiscountSchedule(request, metadata) {
        return this.rpc.unary(QueryFeeDiscountScheduleDesc, QueryFeeDiscountScheduleRequest.fromPartial(request), metadata);
    }
    BalanceMismatches(request, metadata) {
        return this.rpc.unary(QueryBalanceMismatchesDesc, QueryBalanceMismatchesRequest.fromPartial(request), metadata);
    }
    BalanceWithBalanceHolds(request, metadata) {
        return this.rpc.unary(QueryBalanceWithBalanceHoldsDesc, QueryBalanceWithBalanceHoldsRequest.fromPartial(request), metadata);
    }
    FeeDiscountTierStatistics(request, metadata) {
        return this.rpc.unary(QueryFeeDiscountTierStatisticsDesc, QueryFeeDiscountTierStatisticsRequest.fromPartial(request), metadata);
    }
    MitoVaultInfos(request, metadata) {
        return this.rpc.unary(QueryMitoVaultInfosDesc, MitoVaultInfosRequest.fromPartial(request), metadata);
    }
    QueryMarketIDFromVault(request, metadata) {
        return this.rpc.unary(QueryQueryMarketIDFromVaultDesc, QueryMarketIDFromVaultRequest.fromPartial(request), metadata);
    }
    HistoricalTradeRecords(request, metadata) {
        return this.rpc.unary(QueryHistoricalTradeRecordsDesc, QueryHistoricalTradeRecordsRequest.fromPartial(request), metadata);
    }
    IsOptedOutOfRewards(request, metadata) {
        return this.rpc.unary(QueryIsOptedOutOfRewardsDesc, QueryIsOptedOutOfRewardsRequest.fromPartial(request), metadata);
    }
    OptedOutOfRewardsAccounts(request, metadata) {
        return this.rpc.unary(QueryOptedOutOfRewardsAccountsDesc, QueryOptedOutOfRewardsAccountsRequest.fromPartial(request), metadata);
    }
    MarketVolatility(request, metadata) {
        return this.rpc.unary(QueryMarketVolatilityDesc, QueryMarketVolatilityRequest.fromPartial(request), metadata);
    }
    BinaryOptionsMarkets(request, metadata) {
        return this.rpc.unary(QueryBinaryOptionsMarketsDesc, QueryBinaryMarketsRequest.fromPartial(request), metadata);
    }
    TraderDerivativeConditionalOrders(request, metadata) {
        return this.rpc.unary(QueryTraderDerivativeConditionalOrdersDesc, QueryTraderDerivativeConditionalOrdersRequest.fromPartial(request), metadata);
    }
    MarketAtomicExecutionFeeMultiplier(request, metadata) {
        return this.rpc.unary(QueryMarketAtomicExecutionFeeMultiplierDesc, QueryMarketAtomicExecutionFeeMultiplierRequest.fromPartial(request), metadata);
    }
}
export const QueryDesc = { serviceName: "injective.exchange.v1beta1.Query" };
export const QueryQueryExchangeParamsDesc = {
    methodName: "QueryExchangeParams",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryExchangeParamsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryExchangeParamsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QuerySubaccountDepositsDesc = {
    methodName: "SubaccountDeposits",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QuerySubaccountDepositsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QuerySubaccountDepositsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QuerySubaccountDepositDesc = {
    methodName: "SubaccountDeposit",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QuerySubaccountDepositRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QuerySubaccountDepositResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryExchangeBalancesDesc = {
    methodName: "ExchangeBalances",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryExchangeBalancesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryExchangeBalancesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryAggregateVolumeDesc = {
    methodName: "AggregateVolume",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryAggregateVolumeRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryAggregateVolumeResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryAggregateVolumesDesc = {
    methodName: "AggregateVolumes",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryAggregateVolumesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryAggregateVolumesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryAggregateMarketVolumeDesc = {
    methodName: "AggregateMarketVolume",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryAggregateMarketVolumeRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryAggregateMarketVolumeResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryAggregateMarketVolumesDesc = {
    methodName: "AggregateMarketVolumes",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryAggregateMarketVolumesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryAggregateMarketVolumesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryDenomDecimalDesc = {
    methodName: "DenomDecimal",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryDenomDecimalRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryDenomDecimalResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryDenomDecimalsDesc = {
    methodName: "DenomDecimals",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryDenomDecimalsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryDenomDecimalsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QuerySpotMarketsDesc = {
    methodName: "SpotMarkets",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QuerySpotMarketsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QuerySpotMarketsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QuerySpotMarketDesc = {
    methodName: "SpotMarket",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QuerySpotMarketRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QuerySpotMarketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryFullSpotMarketsDesc = {
    methodName: "FullSpotMarkets",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryFullSpotMarketsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryFullSpotMarketsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryFullSpotMarketDesc = {
    methodName: "FullSpotMarket",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryFullSpotMarketRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryFullSpotMarketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QuerySpotOrderbookDesc = {
    methodName: "SpotOrderbook",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QuerySpotOrderbookRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QuerySpotOrderbookResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryTraderSpotOrdersDesc = {
    methodName: "TraderSpotOrders",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryTraderSpotOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryTraderSpotOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryAccountAddressSpotOrdersDesc = {
    methodName: "AccountAddressSpotOrders",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryAccountAddressSpotOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryAccountAddressSpotOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QuerySpotOrdersByHashesDesc = {
    methodName: "SpotOrdersByHashes",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QuerySpotOrdersByHashesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QuerySpotOrdersByHashesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QuerySubaccountOrdersDesc = {
    methodName: "SubaccountOrders",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QuerySubaccountOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QuerySubaccountOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryTraderSpotTransientOrdersDesc = {
    methodName: "TraderSpotTransientOrders",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryTraderSpotOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryTraderSpotOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QuerySpotMidPriceAndTOBDesc = {
    methodName: "SpotMidPriceAndTOB",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QuerySpotMidPriceAndTOBRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QuerySpotMidPriceAndTOBResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryDerivativeMidPriceAndTOBDesc = {
    methodName: "DerivativeMidPriceAndTOB",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryDerivativeMidPriceAndTOBRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryDerivativeMidPriceAndTOBResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryDerivativeOrderbookDesc = {
    methodName: "DerivativeOrderbook",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryDerivativeOrderbookRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryDerivativeOrderbookResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryTraderDerivativeOrdersDesc = {
    methodName: "TraderDerivativeOrders",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryTraderDerivativeOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryTraderDerivativeOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryAccountAddressDerivativeOrdersDesc = {
    methodName: "AccountAddressDerivativeOrders",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryAccountAddressDerivativeOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryAccountAddressDerivativeOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryDerivativeOrdersByHashesDesc = {
    methodName: "DerivativeOrdersByHashes",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryDerivativeOrdersByHashesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryDerivativeOrdersByHashesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryTraderDerivativeTransientOrdersDesc = {
    methodName: "TraderDerivativeTransientOrders",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryTraderDerivativeOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryTraderDerivativeOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryDerivativeMarketsDesc = {
    methodName: "DerivativeMarkets",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryDerivativeMarketsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryDerivativeMarketsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryDerivativeMarketDesc = {
    methodName: "DerivativeMarket",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryDerivativeMarketRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryDerivativeMarketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryDerivativeMarketAddressDesc = {
    methodName: "DerivativeMarketAddress",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryDerivativeMarketAddressRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryDerivativeMarketAddressResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QuerySubaccountTradeNonceDesc = {
    methodName: "SubaccountTradeNonce",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QuerySubaccountTradeNonceRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QuerySubaccountTradeNonceResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryExchangeModuleStateDesc = {
    methodName: "ExchangeModuleState",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryModuleStateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryModuleStateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryPositionsDesc = {
    methodName: "Positions",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryPositionsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryPositionsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QuerySubaccountPositionsDesc = {
    methodName: "SubaccountPositions",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QuerySubaccountPositionsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QuerySubaccountPositionsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QuerySubaccountPositionInMarketDesc = {
    methodName: "SubaccountPositionInMarket",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QuerySubaccountPositionInMarketRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QuerySubaccountPositionInMarketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QuerySubaccountEffectivePositionInMarketDesc = {
    methodName: "SubaccountEffectivePositionInMarket",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QuerySubaccountEffectivePositionInMarketRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QuerySubaccountEffectivePositionInMarketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryPerpetualMarketInfoDesc = {
    methodName: "PerpetualMarketInfo",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryPerpetualMarketInfoRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryPerpetualMarketInfoResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryExpiryFuturesMarketInfoDesc = {
    methodName: "ExpiryFuturesMarketInfo",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryExpiryFuturesMarketInfoRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryExpiryFuturesMarketInfoResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryPerpetualMarketFundingDesc = {
    methodName: "PerpetualMarketFunding",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryPerpetualMarketFundingRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryPerpetualMarketFundingResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QuerySubaccountOrderMetadataDesc = {
    methodName: "SubaccountOrderMetadata",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QuerySubaccountOrderMetadataRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QuerySubaccountOrderMetadataResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryTradeRewardPointsDesc = {
    methodName: "TradeRewardPoints",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryTradeRewardPointsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryTradeRewardPointsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryPendingTradeRewardPointsDesc = {
    methodName: "PendingTradeRewardPoints",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryTradeRewardPointsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryTradeRewardPointsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryTradeRewardCampaignDesc = {
    methodName: "TradeRewardCampaign",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryTradeRewardCampaignRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryTradeRewardCampaignResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryFeeDiscountAccountInfoDesc = {
    methodName: "FeeDiscountAccountInfo",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryFeeDiscountAccountInfoRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryFeeDiscountAccountInfoResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryFeeDiscountScheduleDesc = {
    methodName: "FeeDiscountSchedule",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryFeeDiscountScheduleRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryFeeDiscountScheduleResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryBalanceMismatchesDesc = {
    methodName: "BalanceMismatches",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryBalanceMismatchesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryBalanceMismatchesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryBalanceWithBalanceHoldsDesc = {
    methodName: "BalanceWithBalanceHolds",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryBalanceWithBalanceHoldsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryBalanceWithBalanceHoldsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryFeeDiscountTierStatisticsDesc = {
    methodName: "FeeDiscountTierStatistics",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryFeeDiscountTierStatisticsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryFeeDiscountTierStatisticsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryMitoVaultInfosDesc = {
    methodName: "MitoVaultInfos",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MitoVaultInfosRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MitoVaultInfosResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryQueryMarketIDFromVaultDesc = {
    methodName: "QueryMarketIDFromVault",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryMarketIDFromVaultRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryMarketIDFromVaultResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryHistoricalTradeRecordsDesc = {
    methodName: "HistoricalTradeRecords",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryHistoricalTradeRecordsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryHistoricalTradeRecordsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryIsOptedOutOfRewardsDesc = {
    methodName: "IsOptedOutOfRewards",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryIsOptedOutOfRewardsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryIsOptedOutOfRewardsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryOptedOutOfRewardsAccountsDesc = {
    methodName: "OptedOutOfRewardsAccounts",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryOptedOutOfRewardsAccountsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryOptedOutOfRewardsAccountsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryMarketVolatilityDesc = {
    methodName: "MarketVolatility",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryMarketVolatilityRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryMarketVolatilityResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryBinaryOptionsMarketsDesc = {
    methodName: "BinaryOptionsMarkets",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryBinaryMarketsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryBinaryMarketsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryTraderDerivativeConditionalOrdersDesc = {
    methodName: "TraderDerivativeConditionalOrders",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryTraderDerivativeConditionalOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryTraderDerivativeConditionalOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryMarketAtomicExecutionFeeMultiplierDesc = {
    methodName: "MarketAtomicExecutionFeeMultiplier",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryMarketAtomicExecutionFeeMultiplierRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryMarketAtomicExecutionFeeMultiplierResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export class GrpcWebImpl {
    constructor(host, options) {
        this.host = host;
        this.options = options;
    }
    unary(methodDesc, _request, metadata) {
        var _a;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new Promise((resolve, reject) => {
            grpc.unary(methodDesc, {
                request,
                host: this.host,
                metadata: maybeCombinedMetadata,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (response) {
                    if (response.status === grpc.Code.OK) {
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
export class GrpcWebError extends tsProtoGlobalThis.Error {
    constructor(message, code, metadata) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}
