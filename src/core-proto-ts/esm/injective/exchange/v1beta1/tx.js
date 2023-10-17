/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { CommunityPoolSpendProposal } from "../../../cosmos/distribution/v1beta1/distribution";
import { oracleTypeFromJSON, oracleTypeToJSON } from "../../oracle/v1beta1/oracle";
import { CampaignRewardPool, DenomDecimals, DerivativeOrder, FeeDiscountSchedule, MarketFeeMultiplier, marketStatusFromJSON, marketStatusToJSON, Params, PositionDelta, SpotOrder, TradingRewardCampaignInfo, } from "./exchange";
export var ExchangeType;
(function (ExchangeType) {
    ExchangeType[ExchangeType["EXCHANGE_UNSPECIFIED"] = 0] = "EXCHANGE_UNSPECIFIED";
    ExchangeType[ExchangeType["SPOT"] = 1] = "SPOT";
    ExchangeType[ExchangeType["DERIVATIVES"] = 2] = "DERIVATIVES";
    ExchangeType[ExchangeType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ExchangeType || (ExchangeType = {}));
export function exchangeTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "EXCHANGE_UNSPECIFIED":
            return ExchangeType.EXCHANGE_UNSPECIFIED;
        case 1:
        case "SPOT":
            return ExchangeType.SPOT;
        case 2:
        case "DERIVATIVES":
            return ExchangeType.DERIVATIVES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ExchangeType.UNRECOGNIZED;
    }
}
export function exchangeTypeToJSON(object) {
    switch (object) {
        case ExchangeType.EXCHANGE_UNSPECIFIED:
            return "EXCHANGE_UNSPECIFIED";
        case ExchangeType.SPOT:
            return "SPOT";
        case ExchangeType.DERIVATIVES:
            return "DERIVATIVES";
        case ExchangeType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgUpdateParams() {
    return { authority: "", params: undefined };
}
export const MsgUpdateParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authority = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
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
        return {
            authority: isSet(object.authority) ? String(object.authority) : "",
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return MsgUpdateParams.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgUpdateParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        return MsgUpdateParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};
function createBaseMsgDeposit() {
    return { sender: "", subaccountId: "", amount: undefined };
}
export const MsgDeposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
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
                    message.amount = Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return MsgDeposit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgDeposit();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgDepositResponse() {
    return {};
}
export const MsgDepositResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositResponse();
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
        return MsgDepositResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgDepositResponse();
        return message;
    },
};
function createBaseMsgWithdraw() {
    return { sender: "", subaccountId: "", amount: undefined };
}
export const MsgWithdraw = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdraw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
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
                    message.amount = Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return MsgWithdraw.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgWithdraw();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgWithdrawResponse() {
    return {};
}
export const MsgWithdrawResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawResponse();
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
        return MsgWithdrawResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawResponse();
        return message;
    },
};
function createBaseMsgCreateSpotLimitOrder() {
    return { sender: "", order: undefined };
}
export const MsgCreateSpotLimitOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            SpotOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSpotLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.order = SpotOrder.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            order: isSet(object.order) ? SpotOrder.fromJSON(object.order) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.order !== undefined && (obj.order = message.order ? SpotOrder.toJSON(message.order) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateSpotLimitOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateSpotLimitOrder();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.order = (object.order !== undefined && object.order !== null)
            ? SpotOrder.fromPartial(object.order)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateSpotLimitOrderResponse() {
    return { orderHash: "" };
}
export const MsgCreateSpotLimitOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSpotLimitOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { orderHash: isSet(object.orderHash) ? String(object.orderHash) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        return obj;
    },
    create(base) {
        return MsgCreateSpotLimitOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateSpotLimitOrderResponse();
        message.orderHash = (_a = object.orderHash) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgBatchCreateSpotLimitOrders() {
    return { sender: "", orders: [] };
}
export const MsgBatchCreateSpotLimitOrders = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.orders) {
            SpotOrder.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCreateSpotLimitOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.orders.push(SpotOrder.decode(reader, reader.uint32()));
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => SpotOrder.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? SpotOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return MsgBatchCreateSpotLimitOrders.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgBatchCreateSpotLimitOrders();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.orders = ((_b = object.orders) === null || _b === void 0 ? void 0 : _b.map((e) => SpotOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgBatchCreateSpotLimitOrdersResponse() {
    return { orderHashes: [] };
}
export const MsgBatchCreateSpotLimitOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orderHashes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCreateSpotLimitOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { orderHashes: Array.isArray(object === null || object === void 0 ? void 0 : object.orderHashes) ? object.orderHashes.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.orderHashes) {
            obj.orderHashes = message.orderHashes.map((e) => e);
        }
        else {
            obj.orderHashes = [];
        }
        return obj;
    },
    create(base) {
        return MsgBatchCreateSpotLimitOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgBatchCreateSpotLimitOrdersResponse();
        message.orderHashes = ((_a = object.orderHashes) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgInstantSpotMarketLaunch() {
    return { sender: "", ticker: "", baseDenom: "", quoteDenom: "", minPriceTickSize: "", minQuantityTickSize: "" };
}
export const MsgInstantSpotMarketLaunch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.ticker !== "") {
            writer.uint32(18).string(message.ticker);
        }
        if (message.baseDenom !== "") {
            writer.uint32(26).string(message.baseDenom);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(34).string(message.quoteDenom);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(42).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(50).string(message.minQuantityTickSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantSpotMarketLaunch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ticker = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.baseDenom = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.quoteDenom = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.minPriceTickSize = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.minQuantityTickSize = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        return obj;
    },
    create(base) {
        return MsgInstantSpotMarketLaunch.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMsgInstantSpotMarketLaunch();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.ticker = (_b = object.ticker) !== null && _b !== void 0 ? _b : "";
        message.baseDenom = (_c = object.baseDenom) !== null && _c !== void 0 ? _c : "";
        message.quoteDenom = (_d = object.quoteDenom) !== null && _d !== void 0 ? _d : "";
        message.minPriceTickSize = (_e = object.minPriceTickSize) !== null && _e !== void 0 ? _e : "";
        message.minQuantityTickSize = (_f = object.minQuantityTickSize) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseMsgInstantSpotMarketLaunchResponse() {
    return {};
}
export const MsgInstantSpotMarketLaunchResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantSpotMarketLaunchResponse();
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
        return MsgInstantSpotMarketLaunchResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgInstantSpotMarketLaunchResponse();
        return message;
    },
};
function createBaseMsgInstantPerpetualMarketLaunch() {
    return {
        sender: "",
        ticker: "",
        quoteDenom: "",
        oracleBase: "",
        oracleQuote: "",
        oracleScaleFactor: 0,
        oracleType: 0,
        makerFeeRate: "",
        takerFeeRate: "",
        initialMarginRatio: "",
        maintenanceMarginRatio: "",
        minPriceTickSize: "",
        minQuantityTickSize: "",
    };
}
export const MsgInstantPerpetualMarketLaunch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.ticker !== "") {
            writer.uint32(18).string(message.ticker);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(26).string(message.quoteDenom);
        }
        if (message.oracleBase !== "") {
            writer.uint32(34).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(42).string(message.oracleQuote);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(48).uint32(message.oracleScaleFactor);
        }
        if (message.oracleType !== 0) {
            writer.uint32(56).int32(message.oracleType);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(66).string(message.makerFeeRate);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(74).string(message.takerFeeRate);
        }
        if (message.initialMarginRatio !== "") {
            writer.uint32(82).string(message.initialMarginRatio);
        }
        if (message.maintenanceMarginRatio !== "") {
            writer.uint32(90).string(message.maintenanceMarginRatio);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(98).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(106).string(message.minQuantityTickSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantPerpetualMarketLaunch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ticker = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.quoteDenom = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.oracleBase = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.oracleQuote = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.oracleScaleFactor = reader.uint32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.oracleType = reader.int32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.makerFeeRate = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.takerFeeRate = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.initialMarginRatio = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.maintenanceMarginRatio = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.minPriceTickSize = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.minQuantityTickSize = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
            oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
            oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
            oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
            makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
            takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
            initialMarginRatio: isSet(object.initialMarginRatio) ? String(object.initialMarginRatio) : "",
            maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : "",
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.oracleBase !== undefined && (obj.oracleBase = message.oracleBase);
        message.oracleQuote !== undefined && (obj.oracleQuote = message.oracleQuote);
        message.oracleScaleFactor !== undefined && (obj.oracleScaleFactor = Math.round(message.oracleScaleFactor));
        message.oracleType !== undefined && (obj.oracleType = oracleTypeToJSON(message.oracleType));
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.initialMarginRatio !== undefined && (obj.initialMarginRatio = message.initialMarginRatio);
        message.maintenanceMarginRatio !== undefined && (obj.maintenanceMarginRatio = message.maintenanceMarginRatio);
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        return obj;
    },
    create(base) {
        return MsgInstantPerpetualMarketLaunch.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseMsgInstantPerpetualMarketLaunch();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.ticker = (_b = object.ticker) !== null && _b !== void 0 ? _b : "";
        message.quoteDenom = (_c = object.quoteDenom) !== null && _c !== void 0 ? _c : "";
        message.oracleBase = (_d = object.oracleBase) !== null && _d !== void 0 ? _d : "";
        message.oracleQuote = (_e = object.oracleQuote) !== null && _e !== void 0 ? _e : "";
        message.oracleScaleFactor = (_f = object.oracleScaleFactor) !== null && _f !== void 0 ? _f : 0;
        message.oracleType = (_g = object.oracleType) !== null && _g !== void 0 ? _g : 0;
        message.makerFeeRate = (_h = object.makerFeeRate) !== null && _h !== void 0 ? _h : "";
        message.takerFeeRate = (_j = object.takerFeeRate) !== null && _j !== void 0 ? _j : "";
        message.initialMarginRatio = (_k = object.initialMarginRatio) !== null && _k !== void 0 ? _k : "";
        message.maintenanceMarginRatio = (_l = object.maintenanceMarginRatio) !== null && _l !== void 0 ? _l : "";
        message.minPriceTickSize = (_m = object.minPriceTickSize) !== null && _m !== void 0 ? _m : "";
        message.minQuantityTickSize = (_o = object.minQuantityTickSize) !== null && _o !== void 0 ? _o : "";
        return message;
    },
};
function createBaseMsgInstantPerpetualMarketLaunchResponse() {
    return {};
}
export const MsgInstantPerpetualMarketLaunchResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantPerpetualMarketLaunchResponse();
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
        return MsgInstantPerpetualMarketLaunchResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgInstantPerpetualMarketLaunchResponse();
        return message;
    },
};
function createBaseMsgInstantBinaryOptionsMarketLaunch() {
    return {
        sender: "",
        ticker: "",
        oracleSymbol: "",
        oracleProvider: "",
        oracleType: 0,
        oracleScaleFactor: 0,
        makerFeeRate: "",
        takerFeeRate: "",
        expirationTimestamp: "0",
        settlementTimestamp: "0",
        admin: "",
        quoteDenom: "",
        minPriceTickSize: "",
        minQuantityTickSize: "",
    };
}
export const MsgInstantBinaryOptionsMarketLaunch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.ticker !== "") {
            writer.uint32(18).string(message.ticker);
        }
        if (message.oracleSymbol !== "") {
            writer.uint32(26).string(message.oracleSymbol);
        }
        if (message.oracleProvider !== "") {
            writer.uint32(34).string(message.oracleProvider);
        }
        if (message.oracleType !== 0) {
            writer.uint32(40).int32(message.oracleType);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(48).uint32(message.oracleScaleFactor);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(58).string(message.makerFeeRate);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(66).string(message.takerFeeRate);
        }
        if (message.expirationTimestamp !== "0") {
            writer.uint32(72).int64(message.expirationTimestamp);
        }
        if (message.settlementTimestamp !== "0") {
            writer.uint32(80).int64(message.settlementTimestamp);
        }
        if (message.admin !== "") {
            writer.uint32(90).string(message.admin);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(98).string(message.quoteDenom);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(106).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(114).string(message.minQuantityTickSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantBinaryOptionsMarketLaunch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ticker = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.oracleSymbol = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.oracleProvider = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.oracleType = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.oracleScaleFactor = reader.uint32();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.makerFeeRate = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.takerFeeRate = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.expirationTimestamp = longToString(reader.int64());
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.settlementTimestamp = longToString(reader.int64());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.quoteDenom = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.minPriceTickSize = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.minQuantityTickSize = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            oracleSymbol: isSet(object.oracleSymbol) ? String(object.oracleSymbol) : "",
            oracleProvider: isSet(object.oracleProvider) ? String(object.oracleProvider) : "",
            oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
            oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
            makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
            takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
            expirationTimestamp: isSet(object.expirationTimestamp) ? String(object.expirationTimestamp) : "0",
            settlementTimestamp: isSet(object.settlementTimestamp) ? String(object.settlementTimestamp) : "0",
            admin: isSet(object.admin) ? String(object.admin) : "",
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.oracleSymbol !== undefined && (obj.oracleSymbol = message.oracleSymbol);
        message.oracleProvider !== undefined && (obj.oracleProvider = message.oracleProvider);
        message.oracleType !== undefined && (obj.oracleType = oracleTypeToJSON(message.oracleType));
        message.oracleScaleFactor !== undefined && (obj.oracleScaleFactor = Math.round(message.oracleScaleFactor));
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.expirationTimestamp !== undefined && (obj.expirationTimestamp = message.expirationTimestamp);
        message.settlementTimestamp !== undefined && (obj.settlementTimestamp = message.settlementTimestamp);
        message.admin !== undefined && (obj.admin = message.admin);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        return obj;
    },
    create(base) {
        return MsgInstantBinaryOptionsMarketLaunch.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const message = createBaseMsgInstantBinaryOptionsMarketLaunch();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.ticker = (_b = object.ticker) !== null && _b !== void 0 ? _b : "";
        message.oracleSymbol = (_c = object.oracleSymbol) !== null && _c !== void 0 ? _c : "";
        message.oracleProvider = (_d = object.oracleProvider) !== null && _d !== void 0 ? _d : "";
        message.oracleType = (_e = object.oracleType) !== null && _e !== void 0 ? _e : 0;
        message.oracleScaleFactor = (_f = object.oracleScaleFactor) !== null && _f !== void 0 ? _f : 0;
        message.makerFeeRate = (_g = object.makerFeeRate) !== null && _g !== void 0 ? _g : "";
        message.takerFeeRate = (_h = object.takerFeeRate) !== null && _h !== void 0 ? _h : "";
        message.expirationTimestamp = (_j = object.expirationTimestamp) !== null && _j !== void 0 ? _j : "0";
        message.settlementTimestamp = (_k = object.settlementTimestamp) !== null && _k !== void 0 ? _k : "0";
        message.admin = (_l = object.admin) !== null && _l !== void 0 ? _l : "";
        message.quoteDenom = (_m = object.quoteDenom) !== null && _m !== void 0 ? _m : "";
        message.minPriceTickSize = (_o = object.minPriceTickSize) !== null && _o !== void 0 ? _o : "";
        message.minQuantityTickSize = (_p = object.minQuantityTickSize) !== null && _p !== void 0 ? _p : "";
        return message;
    },
};
function createBaseMsgInstantBinaryOptionsMarketLaunchResponse() {
    return {};
}
export const MsgInstantBinaryOptionsMarketLaunchResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantBinaryOptionsMarketLaunchResponse();
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
        return MsgInstantBinaryOptionsMarketLaunchResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgInstantBinaryOptionsMarketLaunchResponse();
        return message;
    },
};
function createBaseMsgInstantExpiryFuturesMarketLaunch() {
    return {
        sender: "",
        ticker: "",
        quoteDenom: "",
        oracleBase: "",
        oracleQuote: "",
        oracleType: 0,
        oracleScaleFactor: 0,
        expiry: "0",
        makerFeeRate: "",
        takerFeeRate: "",
        initialMarginRatio: "",
        maintenanceMarginRatio: "",
        minPriceTickSize: "",
        minQuantityTickSize: "",
    };
}
export const MsgInstantExpiryFuturesMarketLaunch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.ticker !== "") {
            writer.uint32(18).string(message.ticker);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(26).string(message.quoteDenom);
        }
        if (message.oracleBase !== "") {
            writer.uint32(34).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(42).string(message.oracleQuote);
        }
        if (message.oracleType !== 0) {
            writer.uint32(48).int32(message.oracleType);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(56).uint32(message.oracleScaleFactor);
        }
        if (message.expiry !== "0") {
            writer.uint32(64).int64(message.expiry);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(74).string(message.makerFeeRate);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(82).string(message.takerFeeRate);
        }
        if (message.initialMarginRatio !== "") {
            writer.uint32(90).string(message.initialMarginRatio);
        }
        if (message.maintenanceMarginRatio !== "") {
            writer.uint32(98).string(message.maintenanceMarginRatio);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(106).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(114).string(message.minQuantityTickSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantExpiryFuturesMarketLaunch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ticker = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.quoteDenom = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.oracleBase = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.oracleQuote = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.oracleType = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.oracleScaleFactor = reader.uint32();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.expiry = longToString(reader.int64());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.makerFeeRate = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.takerFeeRate = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.initialMarginRatio = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.maintenanceMarginRatio = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.minPriceTickSize = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.minQuantityTickSize = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
            oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
            oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
            oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
            expiry: isSet(object.expiry) ? String(object.expiry) : "0",
            makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
            takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
            initialMarginRatio: isSet(object.initialMarginRatio) ? String(object.initialMarginRatio) : "",
            maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : "",
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.oracleBase !== undefined && (obj.oracleBase = message.oracleBase);
        message.oracleQuote !== undefined && (obj.oracleQuote = message.oracleQuote);
        message.oracleType !== undefined && (obj.oracleType = oracleTypeToJSON(message.oracleType));
        message.oracleScaleFactor !== undefined && (obj.oracleScaleFactor = Math.round(message.oracleScaleFactor));
        message.expiry !== undefined && (obj.expiry = message.expiry);
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.initialMarginRatio !== undefined && (obj.initialMarginRatio = message.initialMarginRatio);
        message.maintenanceMarginRatio !== undefined && (obj.maintenanceMarginRatio = message.maintenanceMarginRatio);
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        return obj;
    },
    create(base) {
        return MsgInstantExpiryFuturesMarketLaunch.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const message = createBaseMsgInstantExpiryFuturesMarketLaunch();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.ticker = (_b = object.ticker) !== null && _b !== void 0 ? _b : "";
        message.quoteDenom = (_c = object.quoteDenom) !== null && _c !== void 0 ? _c : "";
        message.oracleBase = (_d = object.oracleBase) !== null && _d !== void 0 ? _d : "";
        message.oracleQuote = (_e = object.oracleQuote) !== null && _e !== void 0 ? _e : "";
        message.oracleType = (_f = object.oracleType) !== null && _f !== void 0 ? _f : 0;
        message.oracleScaleFactor = (_g = object.oracleScaleFactor) !== null && _g !== void 0 ? _g : 0;
        message.expiry = (_h = object.expiry) !== null && _h !== void 0 ? _h : "0";
        message.makerFeeRate = (_j = object.makerFeeRate) !== null && _j !== void 0 ? _j : "";
        message.takerFeeRate = (_k = object.takerFeeRate) !== null && _k !== void 0 ? _k : "";
        message.initialMarginRatio = (_l = object.initialMarginRatio) !== null && _l !== void 0 ? _l : "";
        message.maintenanceMarginRatio = (_m = object.maintenanceMarginRatio) !== null && _m !== void 0 ? _m : "";
        message.minPriceTickSize = (_o = object.minPriceTickSize) !== null && _o !== void 0 ? _o : "";
        message.minQuantityTickSize = (_p = object.minQuantityTickSize) !== null && _p !== void 0 ? _p : "";
        return message;
    },
};
function createBaseMsgInstantExpiryFuturesMarketLaunchResponse() {
    return {};
}
export const MsgInstantExpiryFuturesMarketLaunchResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantExpiryFuturesMarketLaunchResponse();
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
        return MsgInstantExpiryFuturesMarketLaunchResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgInstantExpiryFuturesMarketLaunchResponse();
        return message;
    },
};
function createBaseMsgCreateSpotMarketOrder() {
    return { sender: "", order: undefined };
}
export const MsgCreateSpotMarketOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            SpotOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSpotMarketOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.order = SpotOrder.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            order: isSet(object.order) ? SpotOrder.fromJSON(object.order) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.order !== undefined && (obj.order = message.order ? SpotOrder.toJSON(message.order) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateSpotMarketOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateSpotMarketOrder();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.order = (object.order !== undefined && object.order !== null)
            ? SpotOrder.fromPartial(object.order)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateSpotMarketOrderResponse() {
    return { orderHash: "", results: undefined };
}
export const MsgCreateSpotMarketOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        if (message.results !== undefined) {
            SpotMarketOrderResults.encode(message.results, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSpotMarketOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orderHash = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.results = SpotMarketOrderResults.decode(reader, reader.uint32());
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
            orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
            results: isSet(object.results) ? SpotMarketOrderResults.fromJSON(object.results) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        message.results !== undefined &&
            (obj.results = message.results ? SpotMarketOrderResults.toJSON(message.results) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateSpotMarketOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateSpotMarketOrderResponse();
        message.orderHash = (_a = object.orderHash) !== null && _a !== void 0 ? _a : "";
        message.results = (object.results !== undefined && object.results !== null)
            ? SpotMarketOrderResults.fromPartial(object.results)
            : undefined;
        return message;
    },
};
function createBaseSpotMarketOrderResults() {
    return { quantity: "", price: "", fee: "" };
}
export const SpotMarketOrderResults = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.quantity !== "") {
            writer.uint32(10).string(message.quantity);
        }
        if (message.price !== "") {
            writer.uint32(18).string(message.price);
        }
        if (message.fee !== "") {
            writer.uint32(26).string(message.fee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotMarketOrderResults();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.quantity = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.price = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.fee = reader.string();
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
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            price: isSet(object.price) ? String(object.price) : "",
            fee: isSet(object.fee) ? String(object.fee) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.price !== undefined && (obj.price = message.price);
        message.fee !== undefined && (obj.fee = message.fee);
        return obj;
    },
    create(base) {
        return SpotMarketOrderResults.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSpotMarketOrderResults();
        message.quantity = (_a = object.quantity) !== null && _a !== void 0 ? _a : "";
        message.price = (_b = object.price) !== null && _b !== void 0 ? _b : "";
        message.fee = (_c = object.fee) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgCreateDerivativeLimitOrder() {
    return { sender: "", order: undefined };
}
export const MsgCreateDerivativeLimitOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDerivativeLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.order = DerivativeOrder.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            order: isSet(object.order) ? DerivativeOrder.fromJSON(object.order) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.order !== undefined && (obj.order = message.order ? DerivativeOrder.toJSON(message.order) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateDerivativeLimitOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateDerivativeLimitOrder();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.order = (object.order !== undefined && object.order !== null)
            ? DerivativeOrder.fromPartial(object.order)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateDerivativeLimitOrderResponse() {
    return { orderHash: "" };
}
export const MsgCreateDerivativeLimitOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDerivativeLimitOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { orderHash: isSet(object.orderHash) ? String(object.orderHash) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        return obj;
    },
    create(base) {
        return MsgCreateDerivativeLimitOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateDerivativeLimitOrderResponse();
        message.orderHash = (_a = object.orderHash) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgCreateBinaryOptionsLimitOrder() {
    return { sender: "", order: undefined };
}
export const MsgCreateBinaryOptionsLimitOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBinaryOptionsLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.order = DerivativeOrder.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            order: isSet(object.order) ? DerivativeOrder.fromJSON(object.order) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.order !== undefined && (obj.order = message.order ? DerivativeOrder.toJSON(message.order) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateBinaryOptionsLimitOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateBinaryOptionsLimitOrder();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.order = (object.order !== undefined && object.order !== null)
            ? DerivativeOrder.fromPartial(object.order)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateBinaryOptionsLimitOrderResponse() {
    return { orderHash: "" };
}
export const MsgCreateBinaryOptionsLimitOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBinaryOptionsLimitOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { orderHash: isSet(object.orderHash) ? String(object.orderHash) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        return obj;
    },
    create(base) {
        return MsgCreateBinaryOptionsLimitOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateBinaryOptionsLimitOrderResponse();
        message.orderHash = (_a = object.orderHash) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgBatchCreateDerivativeLimitOrders() {
    return { sender: "", orders: [] };
}
export const MsgBatchCreateDerivativeLimitOrders = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.orders) {
            DerivativeOrder.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCreateDerivativeLimitOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.orders.push(DerivativeOrder.decode(reader, reader.uint32()));
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => DerivativeOrder.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? DerivativeOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return MsgBatchCreateDerivativeLimitOrders.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgBatchCreateDerivativeLimitOrders();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.orders = ((_b = object.orders) === null || _b === void 0 ? void 0 : _b.map((e) => DerivativeOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgBatchCreateDerivativeLimitOrdersResponse() {
    return { orderHashes: [] };
}
export const MsgBatchCreateDerivativeLimitOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orderHashes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCreateDerivativeLimitOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { orderHashes: Array.isArray(object === null || object === void 0 ? void 0 : object.orderHashes) ? object.orderHashes.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.orderHashes) {
            obj.orderHashes = message.orderHashes.map((e) => e);
        }
        else {
            obj.orderHashes = [];
        }
        return obj;
    },
    create(base) {
        return MsgBatchCreateDerivativeLimitOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgBatchCreateDerivativeLimitOrdersResponse();
        message.orderHashes = ((_a = object.orderHashes) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgCancelSpotOrder() {
    return { sender: "", marketId: "", subaccountId: "", orderHash: "" };
}
export const MsgCancelSpotOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(26).string(message.subaccountId);
        }
        if (message.orderHash !== "") {
            writer.uint32(34).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelSpotOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        return obj;
    },
    create(base) {
        return MsgCancelSpotOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgCancelSpotOrder();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.subaccountId = (_c = object.subaccountId) !== null && _c !== void 0 ? _c : "";
        message.orderHash = (_d = object.orderHash) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgCancelSpotOrderResponse() {
    return {};
}
export const MsgCancelSpotOrderResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelSpotOrderResponse();
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
        return MsgCancelSpotOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCancelSpotOrderResponse();
        return message;
    },
};
function createBaseMsgBatchCancelSpotOrders() {
    return { sender: "", data: [] };
}
export const MsgBatchCancelSpotOrders = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.data) {
            OrderData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCancelSpotOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.data.push(OrderData.decode(reader, reader.uint32()));
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => OrderData.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.data) {
            obj.data = message.data.map((e) => e ? OrderData.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    create(base) {
        return MsgBatchCancelSpotOrders.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgBatchCancelSpotOrders();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.data = ((_b = object.data) === null || _b === void 0 ? void 0 : _b.map((e) => OrderData.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgBatchCancelSpotOrdersResponse() {
    return { success: [] };
}
export const MsgBatchCancelSpotOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.success) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCancelSpotOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        message.success.push(reader.bool());
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.success.push(reader.bool());
                        }
                        continue;
                    }
                    break;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { success: Array.isArray(object === null || object === void 0 ? void 0 : object.success) ? object.success.map((e) => Boolean(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.success) {
            obj.success = message.success.map((e) => e);
        }
        else {
            obj.success = [];
        }
        return obj;
    },
    create(base) {
        return MsgBatchCancelSpotOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgBatchCancelSpotOrdersResponse();
        message.success = ((_a = object.success) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgBatchCancelBinaryOptionsOrders() {
    return { sender: "", data: [] };
}
export const MsgBatchCancelBinaryOptionsOrders = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.data) {
            OrderData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCancelBinaryOptionsOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.data.push(OrderData.decode(reader, reader.uint32()));
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => OrderData.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.data) {
            obj.data = message.data.map((e) => e ? OrderData.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    create(base) {
        return MsgBatchCancelBinaryOptionsOrders.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgBatchCancelBinaryOptionsOrders();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.data = ((_b = object.data) === null || _b === void 0 ? void 0 : _b.map((e) => OrderData.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgBatchCancelBinaryOptionsOrdersResponse() {
    return { success: [] };
}
export const MsgBatchCancelBinaryOptionsOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.success) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCancelBinaryOptionsOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        message.success.push(reader.bool());
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.success.push(reader.bool());
                        }
                        continue;
                    }
                    break;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { success: Array.isArray(object === null || object === void 0 ? void 0 : object.success) ? object.success.map((e) => Boolean(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.success) {
            obj.success = message.success.map((e) => e);
        }
        else {
            obj.success = [];
        }
        return obj;
    },
    create(base) {
        return MsgBatchCancelBinaryOptionsOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgBatchCancelBinaryOptionsOrdersResponse();
        message.success = ((_a = object.success) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgBatchUpdateOrders() {
    return {
        sender: "",
        subaccountId: "",
        spotMarketIdsToCancelAll: [],
        derivativeMarketIdsToCancelAll: [],
        spotOrdersToCancel: [],
        derivativeOrdersToCancel: [],
        spotOrdersToCreate: [],
        derivativeOrdersToCreate: [],
        binaryOptionsOrdersToCancel: [],
        binaryOptionsMarketIdsToCancelAll: [],
        binaryOptionsOrdersToCreate: [],
    };
}
export const MsgBatchUpdateOrders = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        for (const v of message.spotMarketIdsToCancelAll) {
            writer.uint32(26).string(v);
        }
        for (const v of message.derivativeMarketIdsToCancelAll) {
            writer.uint32(34).string(v);
        }
        for (const v of message.spotOrdersToCancel) {
            OrderData.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.derivativeOrdersToCancel) {
            OrderData.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.spotOrdersToCreate) {
            SpotOrder.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.derivativeOrdersToCreate) {
            DerivativeOrder.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.binaryOptionsOrdersToCancel) {
            OrderData.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.binaryOptionsMarketIdsToCancelAll) {
            writer.uint32(82).string(v);
        }
        for (const v of message.binaryOptionsOrdersToCreate) {
            DerivativeOrder.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchUpdateOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
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
                    message.spotMarketIdsToCancelAll.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.derivativeMarketIdsToCancelAll.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.spotOrdersToCancel.push(OrderData.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.derivativeOrdersToCancel.push(OrderData.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.spotOrdersToCreate.push(SpotOrder.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.derivativeOrdersToCreate.push(DerivativeOrder.decode(reader, reader.uint32()));
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.binaryOptionsOrdersToCancel.push(OrderData.decode(reader, reader.uint32()));
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.binaryOptionsMarketIdsToCancelAll.push(reader.string());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.binaryOptionsOrdersToCreate.push(DerivativeOrder.decode(reader, reader.uint32()));
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            spotMarketIdsToCancelAll: Array.isArray(object === null || object === void 0 ? void 0 : object.spotMarketIdsToCancelAll)
                ? object.spotMarketIdsToCancelAll.map((e) => String(e))
                : [],
            derivativeMarketIdsToCancelAll: Array.isArray(object === null || object === void 0 ? void 0 : object.derivativeMarketIdsToCancelAll)
                ? object.derivativeMarketIdsToCancelAll.map((e) => String(e))
                : [],
            spotOrdersToCancel: Array.isArray(object === null || object === void 0 ? void 0 : object.spotOrdersToCancel)
                ? object.spotOrdersToCancel.map((e) => OrderData.fromJSON(e))
                : [],
            derivativeOrdersToCancel: Array.isArray(object === null || object === void 0 ? void 0 : object.derivativeOrdersToCancel)
                ? object.derivativeOrdersToCancel.map((e) => OrderData.fromJSON(e))
                : [],
            spotOrdersToCreate: Array.isArray(object === null || object === void 0 ? void 0 : object.spotOrdersToCreate)
                ? object.spotOrdersToCreate.map((e) => SpotOrder.fromJSON(e))
                : [],
            derivativeOrdersToCreate: Array.isArray(object === null || object === void 0 ? void 0 : object.derivativeOrdersToCreate)
                ? object.derivativeOrdersToCreate.map((e) => DerivativeOrder.fromJSON(e))
                : [],
            binaryOptionsOrdersToCancel: Array.isArray(object === null || object === void 0 ? void 0 : object.binaryOptionsOrdersToCancel)
                ? object.binaryOptionsOrdersToCancel.map((e) => OrderData.fromJSON(e))
                : [],
            binaryOptionsMarketIdsToCancelAll: Array.isArray(object === null || object === void 0 ? void 0 : object.binaryOptionsMarketIdsToCancelAll)
                ? object.binaryOptionsMarketIdsToCancelAll.map((e) => String(e))
                : [],
            binaryOptionsOrdersToCreate: Array.isArray(object === null || object === void 0 ? void 0 : object.binaryOptionsOrdersToCreate)
                ? object.binaryOptionsOrdersToCreate.map((e) => DerivativeOrder.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        if (message.spotMarketIdsToCancelAll) {
            obj.spotMarketIdsToCancelAll = message.spotMarketIdsToCancelAll.map((e) => e);
        }
        else {
            obj.spotMarketIdsToCancelAll = [];
        }
        if (message.derivativeMarketIdsToCancelAll) {
            obj.derivativeMarketIdsToCancelAll = message.derivativeMarketIdsToCancelAll.map((e) => e);
        }
        else {
            obj.derivativeMarketIdsToCancelAll = [];
        }
        if (message.spotOrdersToCancel) {
            obj.spotOrdersToCancel = message.spotOrdersToCancel.map((e) => e ? OrderData.toJSON(e) : undefined);
        }
        else {
            obj.spotOrdersToCancel = [];
        }
        if (message.derivativeOrdersToCancel) {
            obj.derivativeOrdersToCancel = message.derivativeOrdersToCancel.map((e) => e ? OrderData.toJSON(e) : undefined);
        }
        else {
            obj.derivativeOrdersToCancel = [];
        }
        if (message.spotOrdersToCreate) {
            obj.spotOrdersToCreate = message.spotOrdersToCreate.map((e) => e ? SpotOrder.toJSON(e) : undefined);
        }
        else {
            obj.spotOrdersToCreate = [];
        }
        if (message.derivativeOrdersToCreate) {
            obj.derivativeOrdersToCreate = message.derivativeOrdersToCreate.map((e) => e ? DerivativeOrder.toJSON(e) : undefined);
        }
        else {
            obj.derivativeOrdersToCreate = [];
        }
        if (message.binaryOptionsOrdersToCancel) {
            obj.binaryOptionsOrdersToCancel = message.binaryOptionsOrdersToCancel.map((e) => e ? OrderData.toJSON(e) : undefined);
        }
        else {
            obj.binaryOptionsOrdersToCancel = [];
        }
        if (message.binaryOptionsMarketIdsToCancelAll) {
            obj.binaryOptionsMarketIdsToCancelAll = message.binaryOptionsMarketIdsToCancelAll.map((e) => e);
        }
        else {
            obj.binaryOptionsMarketIdsToCancelAll = [];
        }
        if (message.binaryOptionsOrdersToCreate) {
            obj.binaryOptionsOrdersToCreate = message.binaryOptionsOrdersToCreate.map((e) => e ? DerivativeOrder.toJSON(e) : undefined);
        }
        else {
            obj.binaryOptionsOrdersToCreate = [];
        }
        return obj;
    },
    create(base) {
        return MsgBatchUpdateOrders.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseMsgBatchUpdateOrders();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.spotMarketIdsToCancelAll = ((_c = object.spotMarketIdsToCancelAll) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.derivativeMarketIdsToCancelAll = ((_d = object.derivativeMarketIdsToCancelAll) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.spotOrdersToCancel = ((_e = object.spotOrdersToCancel) === null || _e === void 0 ? void 0 : _e.map((e) => OrderData.fromPartial(e))) || [];
        message.derivativeOrdersToCancel = ((_f = object.derivativeOrdersToCancel) === null || _f === void 0 ? void 0 : _f.map((e) => OrderData.fromPartial(e))) || [];
        message.spotOrdersToCreate = ((_g = object.spotOrdersToCreate) === null || _g === void 0 ? void 0 : _g.map((e) => SpotOrder.fromPartial(e))) || [];
        message.derivativeOrdersToCreate = ((_h = object.derivativeOrdersToCreate) === null || _h === void 0 ? void 0 : _h.map((e) => DerivativeOrder.fromPartial(e))) ||
            [];
        message.binaryOptionsOrdersToCancel = ((_j = object.binaryOptionsOrdersToCancel) === null || _j === void 0 ? void 0 : _j.map((e) => OrderData.fromPartial(e))) ||
            [];
        message.binaryOptionsMarketIdsToCancelAll = ((_k = object.binaryOptionsMarketIdsToCancelAll) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.binaryOptionsOrdersToCreate =
            ((_l = object.binaryOptionsOrdersToCreate) === null || _l === void 0 ? void 0 : _l.map((e) => DerivativeOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgBatchUpdateOrdersResponse() {
    return {
        spotCancelSuccess: [],
        derivativeCancelSuccess: [],
        spotOrderHashes: [],
        derivativeOrderHashes: [],
        binaryOptionsCancelSuccess: [],
        binaryOptionsOrderHashes: [],
    };
}
export const MsgBatchUpdateOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.spotCancelSuccess) {
            writer.bool(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (const v of message.derivativeCancelSuccess) {
            writer.bool(v);
        }
        writer.ldelim();
        for (const v of message.spotOrderHashes) {
            writer.uint32(26).string(v);
        }
        for (const v of message.derivativeOrderHashes) {
            writer.uint32(34).string(v);
        }
        writer.uint32(42).fork();
        for (const v of message.binaryOptionsCancelSuccess) {
            writer.bool(v);
        }
        writer.ldelim();
        for (const v of message.binaryOptionsOrderHashes) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchUpdateOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        message.spotCancelSuccess.push(reader.bool());
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.spotCancelSuccess.push(reader.bool());
                        }
                        continue;
                    }
                    break;
                case 2:
                    if (tag === 16) {
                        message.derivativeCancelSuccess.push(reader.bool());
                        continue;
                    }
                    if (tag === 18) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.derivativeCancelSuccess.push(reader.bool());
                        }
                        continue;
                    }
                    break;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.spotOrderHashes.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.derivativeOrderHashes.push(reader.string());
                    continue;
                case 5:
                    if (tag === 40) {
                        message.binaryOptionsCancelSuccess.push(reader.bool());
                        continue;
                    }
                    if (tag === 42) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.binaryOptionsCancelSuccess.push(reader.bool());
                        }
                        continue;
                    }
                    break;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.binaryOptionsOrderHashes.push(reader.string());
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
            spotCancelSuccess: Array.isArray(object === null || object === void 0 ? void 0 : object.spotCancelSuccess)
                ? object.spotCancelSuccess.map((e) => Boolean(e))
                : [],
            derivativeCancelSuccess: Array.isArray(object === null || object === void 0 ? void 0 : object.derivativeCancelSuccess)
                ? object.derivativeCancelSuccess.map((e) => Boolean(e))
                : [],
            spotOrderHashes: Array.isArray(object === null || object === void 0 ? void 0 : object.spotOrderHashes) ? object.spotOrderHashes.map((e) => String(e)) : [],
            derivativeOrderHashes: Array.isArray(object === null || object === void 0 ? void 0 : object.derivativeOrderHashes)
                ? object.derivativeOrderHashes.map((e) => String(e))
                : [],
            binaryOptionsCancelSuccess: Array.isArray(object === null || object === void 0 ? void 0 : object.binaryOptionsCancelSuccess)
                ? object.binaryOptionsCancelSuccess.map((e) => Boolean(e))
                : [],
            binaryOptionsOrderHashes: Array.isArray(object === null || object === void 0 ? void 0 : object.binaryOptionsOrderHashes)
                ? object.binaryOptionsOrderHashes.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.spotCancelSuccess) {
            obj.spotCancelSuccess = message.spotCancelSuccess.map((e) => e);
        }
        else {
            obj.spotCancelSuccess = [];
        }
        if (message.derivativeCancelSuccess) {
            obj.derivativeCancelSuccess = message.derivativeCancelSuccess.map((e) => e);
        }
        else {
            obj.derivativeCancelSuccess = [];
        }
        if (message.spotOrderHashes) {
            obj.spotOrderHashes = message.spotOrderHashes.map((e) => e);
        }
        else {
            obj.spotOrderHashes = [];
        }
        if (message.derivativeOrderHashes) {
            obj.derivativeOrderHashes = message.derivativeOrderHashes.map((e) => e);
        }
        else {
            obj.derivativeOrderHashes = [];
        }
        if (message.binaryOptionsCancelSuccess) {
            obj.binaryOptionsCancelSuccess = message.binaryOptionsCancelSuccess.map((e) => e);
        }
        else {
            obj.binaryOptionsCancelSuccess = [];
        }
        if (message.binaryOptionsOrderHashes) {
            obj.binaryOptionsOrderHashes = message.binaryOptionsOrderHashes.map((e) => e);
        }
        else {
            obj.binaryOptionsOrderHashes = [];
        }
        return obj;
    },
    create(base) {
        return MsgBatchUpdateOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMsgBatchUpdateOrdersResponse();
        message.spotCancelSuccess = ((_a = object.spotCancelSuccess) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.derivativeCancelSuccess = ((_b = object.derivativeCancelSuccess) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.spotOrderHashes = ((_c = object.spotOrderHashes) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.derivativeOrderHashes = ((_d = object.derivativeOrderHashes) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.binaryOptionsCancelSuccess = ((_e = object.binaryOptionsCancelSuccess) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.binaryOptionsOrderHashes = ((_f = object.binaryOptionsOrderHashes) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgCreateDerivativeMarketOrder() {
    return { sender: "", order: undefined };
}
export const MsgCreateDerivativeMarketOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDerivativeMarketOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.order = DerivativeOrder.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            order: isSet(object.order) ? DerivativeOrder.fromJSON(object.order) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.order !== undefined && (obj.order = message.order ? DerivativeOrder.toJSON(message.order) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateDerivativeMarketOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateDerivativeMarketOrder();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.order = (object.order !== undefined && object.order !== null)
            ? DerivativeOrder.fromPartial(object.order)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateDerivativeMarketOrderResponse() {
    return { orderHash: "", results: undefined };
}
export const MsgCreateDerivativeMarketOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        if (message.results !== undefined) {
            DerivativeMarketOrderResults.encode(message.results, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDerivativeMarketOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orderHash = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.results = DerivativeMarketOrderResults.decode(reader, reader.uint32());
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
            orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
            results: isSet(object.results) ? DerivativeMarketOrderResults.fromJSON(object.results) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        message.results !== undefined &&
            (obj.results = message.results ? DerivativeMarketOrderResults.toJSON(message.results) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateDerivativeMarketOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateDerivativeMarketOrderResponse();
        message.orderHash = (_a = object.orderHash) !== null && _a !== void 0 ? _a : "";
        message.results = (object.results !== undefined && object.results !== null)
            ? DerivativeMarketOrderResults.fromPartial(object.results)
            : undefined;
        return message;
    },
};
function createBaseDerivativeMarketOrderResults() {
    return { quantity: "", price: "", fee: "", positionDelta: undefined, payout: "" };
}
export const DerivativeMarketOrderResults = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.quantity !== "") {
            writer.uint32(10).string(message.quantity);
        }
        if (message.price !== "") {
            writer.uint32(18).string(message.price);
        }
        if (message.fee !== "") {
            writer.uint32(26).string(message.fee);
        }
        if (message.positionDelta !== undefined) {
            PositionDelta.encode(message.positionDelta, writer.uint32(34).fork()).ldelim();
        }
        if (message.payout !== "") {
            writer.uint32(42).string(message.payout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeMarketOrderResults();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.quantity = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.price = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.fee = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.positionDelta = PositionDelta.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.payout = reader.string();
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
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            price: isSet(object.price) ? String(object.price) : "",
            fee: isSet(object.fee) ? String(object.fee) : "",
            positionDelta: isSet(object.positionDelta) ? PositionDelta.fromJSON(object.positionDelta) : undefined,
            payout: isSet(object.payout) ? String(object.payout) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.price !== undefined && (obj.price = message.price);
        message.fee !== undefined && (obj.fee = message.fee);
        message.positionDelta !== undefined &&
            (obj.positionDelta = message.positionDelta ? PositionDelta.toJSON(message.positionDelta) : undefined);
        message.payout !== undefined && (obj.payout = message.payout);
        return obj;
    },
    create(base) {
        return DerivativeMarketOrderResults.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseDerivativeMarketOrderResults();
        message.quantity = (_a = object.quantity) !== null && _a !== void 0 ? _a : "";
        message.price = (_b = object.price) !== null && _b !== void 0 ? _b : "";
        message.fee = (_c = object.fee) !== null && _c !== void 0 ? _c : "";
        message.positionDelta = (object.positionDelta !== undefined && object.positionDelta !== null)
            ? PositionDelta.fromPartial(object.positionDelta)
            : undefined;
        message.payout = (_d = object.payout) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgCreateBinaryOptionsMarketOrder() {
    return { sender: "", order: undefined };
}
export const MsgCreateBinaryOptionsMarketOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBinaryOptionsMarketOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.order = DerivativeOrder.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            order: isSet(object.order) ? DerivativeOrder.fromJSON(object.order) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.order !== undefined && (obj.order = message.order ? DerivativeOrder.toJSON(message.order) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateBinaryOptionsMarketOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateBinaryOptionsMarketOrder();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.order = (object.order !== undefined && object.order !== null)
            ? DerivativeOrder.fromPartial(object.order)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateBinaryOptionsMarketOrderResponse() {
    return { orderHash: "", results: undefined };
}
export const MsgCreateBinaryOptionsMarketOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        if (message.results !== undefined) {
            DerivativeMarketOrderResults.encode(message.results, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBinaryOptionsMarketOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orderHash = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.results = DerivativeMarketOrderResults.decode(reader, reader.uint32());
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
            orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
            results: isSet(object.results) ? DerivativeMarketOrderResults.fromJSON(object.results) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        message.results !== undefined &&
            (obj.results = message.results ? DerivativeMarketOrderResults.toJSON(message.results) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateBinaryOptionsMarketOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateBinaryOptionsMarketOrderResponse();
        message.orderHash = (_a = object.orderHash) !== null && _a !== void 0 ? _a : "";
        message.results = (object.results !== undefined && object.results !== null)
            ? DerivativeMarketOrderResults.fromPartial(object.results)
            : undefined;
        return message;
    },
};
function createBaseMsgCancelDerivativeOrder() {
    return { sender: "", marketId: "", subaccountId: "", orderHash: "", orderMask: 0 };
}
export const MsgCancelDerivativeOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(26).string(message.subaccountId);
        }
        if (message.orderHash !== "") {
            writer.uint32(34).string(message.orderHash);
        }
        if (message.orderMask !== 0) {
            writer.uint32(40).int32(message.orderMask);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelDerivativeOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.orderHash = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.orderMask = reader.int32();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
            orderMask: isSet(object.orderMask) ? Number(object.orderMask) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        message.orderMask !== undefined && (obj.orderMask = Math.round(message.orderMask));
        return obj;
    },
    create(base) {
        return MsgCancelDerivativeOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgCancelDerivativeOrder();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.subaccountId = (_c = object.subaccountId) !== null && _c !== void 0 ? _c : "";
        message.orderHash = (_d = object.orderHash) !== null && _d !== void 0 ? _d : "";
        message.orderMask = (_e = object.orderMask) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseMsgCancelDerivativeOrderResponse() {
    return {};
}
export const MsgCancelDerivativeOrderResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelDerivativeOrderResponse();
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
        return MsgCancelDerivativeOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCancelDerivativeOrderResponse();
        return message;
    },
};
function createBaseMsgCancelBinaryOptionsOrder() {
    return { sender: "", marketId: "", subaccountId: "", orderHash: "", orderMask: 0 };
}
export const MsgCancelBinaryOptionsOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(26).string(message.subaccountId);
        }
        if (message.orderHash !== "") {
            writer.uint32(34).string(message.orderHash);
        }
        if (message.orderMask !== 0) {
            writer.uint32(40).int32(message.orderMask);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelBinaryOptionsOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.orderHash = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.orderMask = reader.int32();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
            orderMask: isSet(object.orderMask) ? Number(object.orderMask) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        message.orderMask !== undefined && (obj.orderMask = Math.round(message.orderMask));
        return obj;
    },
    create(base) {
        return MsgCancelBinaryOptionsOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgCancelBinaryOptionsOrder();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.subaccountId = (_c = object.subaccountId) !== null && _c !== void 0 ? _c : "";
        message.orderHash = (_d = object.orderHash) !== null && _d !== void 0 ? _d : "";
        message.orderMask = (_e = object.orderMask) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseMsgCancelBinaryOptionsOrderResponse() {
    return {};
}
export const MsgCancelBinaryOptionsOrderResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelBinaryOptionsOrderResponse();
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
        return MsgCancelBinaryOptionsOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCancelBinaryOptionsOrderResponse();
        return message;
    },
};
function createBaseOrderData() {
    return { marketId: "", subaccountId: "", orderHash: "", orderMask: 0 };
}
export const OrderData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.orderHash !== "") {
            writer.uint32(26).string(message.orderHash);
        }
        if (message.orderMask !== 0) {
            writer.uint32(32).int32(message.orderMask);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderData();
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
                    message.orderHash = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.orderMask = reader.int32();
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
            orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
            orderMask: isSet(object.orderMask) ? Number(object.orderMask) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        message.orderMask !== undefined && (obj.orderMask = Math.round(message.orderMask));
        return obj;
    },
    create(base) {
        return OrderData.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseOrderData();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.orderHash = (_c = object.orderHash) !== null && _c !== void 0 ? _c : "";
        message.orderMask = (_d = object.orderMask) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseMsgBatchCancelDerivativeOrders() {
    return { sender: "", data: [] };
}
export const MsgBatchCancelDerivativeOrders = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.data) {
            OrderData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCancelDerivativeOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.data.push(OrderData.decode(reader, reader.uint32()));
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => OrderData.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.data) {
            obj.data = message.data.map((e) => e ? OrderData.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    create(base) {
        return MsgBatchCancelDerivativeOrders.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgBatchCancelDerivativeOrders();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.data = ((_b = object.data) === null || _b === void 0 ? void 0 : _b.map((e) => OrderData.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgBatchCancelDerivativeOrdersResponse() {
    return { success: [] };
}
export const MsgBatchCancelDerivativeOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.success) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCancelDerivativeOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        message.success.push(reader.bool());
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.success.push(reader.bool());
                        }
                        continue;
                    }
                    break;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { success: Array.isArray(object === null || object === void 0 ? void 0 : object.success) ? object.success.map((e) => Boolean(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.success) {
            obj.success = message.success.map((e) => e);
        }
        else {
            obj.success = [];
        }
        return obj;
    },
    create(base) {
        return MsgBatchCancelDerivativeOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgBatchCancelDerivativeOrdersResponse();
        message.success = ((_a = object.success) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgSubaccountTransfer() {
    return { sender: "", sourceSubaccountId: "", destinationSubaccountId: "", amount: undefined };
}
export const MsgSubaccountTransfer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.sourceSubaccountId !== "") {
            writer.uint32(18).string(message.sourceSubaccountId);
        }
        if (message.destinationSubaccountId !== "") {
            writer.uint32(26).string(message.destinationSubaccountId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubaccountTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sourceSubaccountId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.destinationSubaccountId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.amount = Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            sourceSubaccountId: isSet(object.sourceSubaccountId) ? String(object.sourceSubaccountId) : "",
            destinationSubaccountId: isSet(object.destinationSubaccountId) ? String(object.destinationSubaccountId) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.sourceSubaccountId !== undefined && (obj.sourceSubaccountId = message.sourceSubaccountId);
        message.destinationSubaccountId !== undefined && (obj.destinationSubaccountId = message.destinationSubaccountId);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return MsgSubaccountTransfer.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgSubaccountTransfer();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.sourceSubaccountId = (_b = object.sourceSubaccountId) !== null && _b !== void 0 ? _b : "";
        message.destinationSubaccountId = (_c = object.destinationSubaccountId) !== null && _c !== void 0 ? _c : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgSubaccountTransferResponse() {
    return {};
}
export const MsgSubaccountTransferResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubaccountTransferResponse();
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
        return MsgSubaccountTransferResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgSubaccountTransferResponse();
        return message;
    },
};
function createBaseMsgExternalTransfer() {
    return { sender: "", sourceSubaccountId: "", destinationSubaccountId: "", amount: undefined };
}
export const MsgExternalTransfer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.sourceSubaccountId !== "") {
            writer.uint32(18).string(message.sourceSubaccountId);
        }
        if (message.destinationSubaccountId !== "") {
            writer.uint32(26).string(message.destinationSubaccountId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExternalTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sourceSubaccountId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.destinationSubaccountId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.amount = Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            sourceSubaccountId: isSet(object.sourceSubaccountId) ? String(object.sourceSubaccountId) : "",
            destinationSubaccountId: isSet(object.destinationSubaccountId) ? String(object.destinationSubaccountId) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.sourceSubaccountId !== undefined && (obj.sourceSubaccountId = message.sourceSubaccountId);
        message.destinationSubaccountId !== undefined && (obj.destinationSubaccountId = message.destinationSubaccountId);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return MsgExternalTransfer.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgExternalTransfer();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.sourceSubaccountId = (_b = object.sourceSubaccountId) !== null && _b !== void 0 ? _b : "";
        message.destinationSubaccountId = (_c = object.destinationSubaccountId) !== null && _c !== void 0 ? _c : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgExternalTransferResponse() {
    return {};
}
export const MsgExternalTransferResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExternalTransferResponse();
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
        return MsgExternalTransferResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgExternalTransferResponse();
        return message;
    },
};
function createBaseMsgLiquidatePosition() {
    return { sender: "", subaccountId: "", marketId: "", order: undefined };
}
export const MsgLiquidatePosition = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(26).string(message.marketId);
        }
        if (message.order !== undefined) {
            DerivativeOrder.encode(message.order, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLiquidatePosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
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
                    message.marketId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.order = DerivativeOrder.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            order: isSet(object.order) ? DerivativeOrder.fromJSON(object.order) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.order !== undefined && (obj.order = message.order ? DerivativeOrder.toJSON(message.order) : undefined);
        return obj;
    },
    create(base) {
        return MsgLiquidatePosition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgLiquidatePosition();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.marketId = (_c = object.marketId) !== null && _c !== void 0 ? _c : "";
        message.order = (object.order !== undefined && object.order !== null)
            ? DerivativeOrder.fromPartial(object.order)
            : undefined;
        return message;
    },
};
function createBaseMsgLiquidatePositionResponse() {
    return {};
}
export const MsgLiquidatePositionResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLiquidatePositionResponse();
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
        return MsgLiquidatePositionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgLiquidatePositionResponse();
        return message;
    },
};
function createBaseMsgIncreasePositionMargin() {
    return { sender: "", sourceSubaccountId: "", destinationSubaccountId: "", marketId: "", amount: "" };
}
export const MsgIncreasePositionMargin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.sourceSubaccountId !== "") {
            writer.uint32(18).string(message.sourceSubaccountId);
        }
        if (message.destinationSubaccountId !== "") {
            writer.uint32(26).string(message.destinationSubaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(34).string(message.marketId);
        }
        if (message.amount !== "") {
            writer.uint32(42).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIncreasePositionMargin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sourceSubaccountId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.destinationSubaccountId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.amount = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            sourceSubaccountId: isSet(object.sourceSubaccountId) ? String(object.sourceSubaccountId) : "",
            destinationSubaccountId: isSet(object.destinationSubaccountId) ? String(object.destinationSubaccountId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.sourceSubaccountId !== undefined && (obj.sourceSubaccountId = message.sourceSubaccountId);
        message.destinationSubaccountId !== undefined && (obj.destinationSubaccountId = message.destinationSubaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    create(base) {
        return MsgIncreasePositionMargin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgIncreasePositionMargin();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.sourceSubaccountId = (_b = object.sourceSubaccountId) !== null && _b !== void 0 ? _b : "";
        message.destinationSubaccountId = (_c = object.destinationSubaccountId) !== null && _c !== void 0 ? _c : "";
        message.marketId = (_d = object.marketId) !== null && _d !== void 0 ? _d : "";
        message.amount = (_e = object.amount) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseMsgIncreasePositionMarginResponse() {
    return {};
}
export const MsgIncreasePositionMarginResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIncreasePositionMarginResponse();
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
        return MsgIncreasePositionMarginResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgIncreasePositionMarginResponse();
        return message;
    },
};
function createBaseMsgPrivilegedExecuteContract() {
    return { sender: "", funds: "", contractAddress: "", data: "" };
}
export const MsgPrivilegedExecuteContract = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.funds !== "") {
            writer.uint32(18).string(message.funds);
        }
        if (message.contractAddress !== "") {
            writer.uint32(26).string(message.contractAddress);
        }
        if (message.data !== "") {
            writer.uint32(34).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPrivilegedExecuteContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.funds = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.contractAddress = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.data = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            funds: isSet(object.funds) ? String(object.funds) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            data: isSet(object.data) ? String(object.data) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.funds !== undefined && (obj.funds = message.funds);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    create(base) {
        return MsgPrivilegedExecuteContract.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgPrivilegedExecuteContract();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.funds = (_b = object.funds) !== null && _b !== void 0 ? _b : "";
        message.contractAddress = (_c = object.contractAddress) !== null && _c !== void 0 ? _c : "";
        message.data = (_d = object.data) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgPrivilegedExecuteContractResponse() {
    return { fundsDiff: [] };
}
export const MsgPrivilegedExecuteContractResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.fundsDiff) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPrivilegedExecuteContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fundsDiff.push(Coin.decode(reader, reader.uint32()));
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
        return { fundsDiff: Array.isArray(object === null || object === void 0 ? void 0 : object.fundsDiff) ? object.fundsDiff.map((e) => Coin.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.fundsDiff) {
            obj.fundsDiff = message.fundsDiff.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.fundsDiff = [];
        }
        return obj;
    },
    create(base) {
        return MsgPrivilegedExecuteContractResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgPrivilegedExecuteContractResponse();
        message.fundsDiff = ((_a = object.fundsDiff) === null || _a === void 0 ? void 0 : _a.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSpotMarketParamUpdateProposal() {
    return {
        title: "",
        description: "",
        marketId: "",
        makerFeeRate: "",
        takerFeeRate: "",
        relayerFeeShareRate: "",
        minPriceTickSize: "",
        minQuantityTickSize: "",
        status: 0,
    };
}
export const SpotMarketParamUpdateProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.marketId !== "") {
            writer.uint32(26).string(message.marketId);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(34).string(message.makerFeeRate);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(42).string(message.takerFeeRate);
        }
        if (message.relayerFeeShareRate !== "") {
            writer.uint32(50).string(message.relayerFeeShareRate);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(58).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(66).string(message.minQuantityTickSize);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotMarketParamUpdateProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.makerFeeRate = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.takerFeeRate = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.relayerFeeShareRate = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.minPriceTickSize = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.minQuantityTickSize = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.status = reader.int32();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
            takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
            relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : "",
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
            status: isSet(object.status) ? marketStatusFromJSON(object.status) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.relayerFeeShareRate !== undefined && (obj.relayerFeeShareRate = message.relayerFeeShareRate);
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        message.status !== undefined && (obj.status = marketStatusToJSON(message.status));
        return obj;
    },
    create(base) {
        return SpotMarketParamUpdateProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseSpotMarketParamUpdateProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.marketId = (_c = object.marketId) !== null && _c !== void 0 ? _c : "";
        message.makerFeeRate = (_d = object.makerFeeRate) !== null && _d !== void 0 ? _d : "";
        message.takerFeeRate = (_e = object.takerFeeRate) !== null && _e !== void 0 ? _e : "";
        message.relayerFeeShareRate = (_f = object.relayerFeeShareRate) !== null && _f !== void 0 ? _f : "";
        message.minPriceTickSize = (_g = object.minPriceTickSize) !== null && _g !== void 0 ? _g : "";
        message.minQuantityTickSize = (_h = object.minQuantityTickSize) !== null && _h !== void 0 ? _h : "";
        message.status = (_j = object.status) !== null && _j !== void 0 ? _j : 0;
        return message;
    },
};
function createBaseExchangeEnableProposal() {
    return { title: "", description: "", exchangeType: 0 };
}
export const ExchangeEnableProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.exchangeType !== 0) {
            writer.uint32(24).int32(message.exchangeType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExchangeEnableProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.exchangeType = reader.int32();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            exchangeType: isSet(object.exchangeType) ? exchangeTypeFromJSON(object.exchangeType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.exchangeType !== undefined && (obj.exchangeType = exchangeTypeToJSON(message.exchangeType));
        return obj;
    },
    create(base) {
        return ExchangeEnableProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseExchangeEnableProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.exchangeType = (_c = object.exchangeType) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseBatchExchangeModificationProposal() {
    return {
        title: "",
        description: "",
        spotMarketParamUpdateProposals: [],
        derivativeMarketParamUpdateProposals: [],
        spotMarketLaunchProposals: [],
        perpetualMarketLaunchProposals: [],
        expiryFuturesMarketLaunchProposals: [],
        tradingRewardCampaignUpdateProposal: undefined,
        binaryOptionsMarketLaunchProposals: [],
        binaryOptionsParamUpdateProposals: [],
        denomDecimalsUpdateProposal: undefined,
    };
}
export const BatchExchangeModificationProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.spotMarketParamUpdateProposals) {
            SpotMarketParamUpdateProposal.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.derivativeMarketParamUpdateProposals) {
            DerivativeMarketParamUpdateProposal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.spotMarketLaunchProposals) {
            SpotMarketLaunchProposal.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.perpetualMarketLaunchProposals) {
            PerpetualMarketLaunchProposal.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.expiryFuturesMarketLaunchProposals) {
            ExpiryFuturesMarketLaunchProposal.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.tradingRewardCampaignUpdateProposal !== undefined) {
            TradingRewardCampaignUpdateProposal.encode(message.tradingRewardCampaignUpdateProposal, writer.uint32(66).fork())
                .ldelim();
        }
        for (const v of message.binaryOptionsMarketLaunchProposals) {
            BinaryOptionsMarketLaunchProposal.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.binaryOptionsParamUpdateProposals) {
            BinaryOptionsMarketParamUpdateProposal.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.denomDecimalsUpdateProposal !== undefined) {
            UpdateDenomDecimalsProposal.encode(message.denomDecimalsUpdateProposal, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchExchangeModificationProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.spotMarketParamUpdateProposals.push(SpotMarketParamUpdateProposal.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.derivativeMarketParamUpdateProposals.push(DerivativeMarketParamUpdateProposal.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.spotMarketLaunchProposals.push(SpotMarketLaunchProposal.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.perpetualMarketLaunchProposals.push(PerpetualMarketLaunchProposal.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.expiryFuturesMarketLaunchProposals.push(ExpiryFuturesMarketLaunchProposal.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.tradingRewardCampaignUpdateProposal = TradingRewardCampaignUpdateProposal.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.binaryOptionsMarketLaunchProposals.push(BinaryOptionsMarketLaunchProposal.decode(reader, reader.uint32()));
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.binaryOptionsParamUpdateProposals.push(BinaryOptionsMarketParamUpdateProposal.decode(reader, reader.uint32()));
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.denomDecimalsUpdateProposal = UpdateDenomDecimalsProposal.decode(reader, reader.uint32());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            spotMarketParamUpdateProposals: Array.isArray(object === null || object === void 0 ? void 0 : object.spotMarketParamUpdateProposals)
                ? object.spotMarketParamUpdateProposals.map((e) => SpotMarketParamUpdateProposal.fromJSON(e))
                : [],
            derivativeMarketParamUpdateProposals: Array.isArray(object === null || object === void 0 ? void 0 : object.derivativeMarketParamUpdateProposals)
                ? object.derivativeMarketParamUpdateProposals.map((e) => DerivativeMarketParamUpdateProposal.fromJSON(e))
                : [],
            spotMarketLaunchProposals: Array.isArray(object === null || object === void 0 ? void 0 : object.spotMarketLaunchProposals)
                ? object.spotMarketLaunchProposals.map((e) => SpotMarketLaunchProposal.fromJSON(e))
                : [],
            perpetualMarketLaunchProposals: Array.isArray(object === null || object === void 0 ? void 0 : object.perpetualMarketLaunchProposals)
                ? object.perpetualMarketLaunchProposals.map((e) => PerpetualMarketLaunchProposal.fromJSON(e))
                : [],
            expiryFuturesMarketLaunchProposals: Array.isArray(object === null || object === void 0 ? void 0 : object.expiryFuturesMarketLaunchProposals)
                ? object.expiryFuturesMarketLaunchProposals.map((e) => ExpiryFuturesMarketLaunchProposal.fromJSON(e))
                : [],
            tradingRewardCampaignUpdateProposal: isSet(object.tradingRewardCampaignUpdateProposal)
                ? TradingRewardCampaignUpdateProposal.fromJSON(object.tradingRewardCampaignUpdateProposal)
                : undefined,
            binaryOptionsMarketLaunchProposals: Array.isArray(object === null || object === void 0 ? void 0 : object.binaryOptionsMarketLaunchProposals)
                ? object.binaryOptionsMarketLaunchProposals.map((e) => BinaryOptionsMarketLaunchProposal.fromJSON(e))
                : [],
            binaryOptionsParamUpdateProposals: Array.isArray(object === null || object === void 0 ? void 0 : object.binaryOptionsParamUpdateProposals)
                ? object.binaryOptionsParamUpdateProposals.map((e) => BinaryOptionsMarketParamUpdateProposal.fromJSON(e))
                : [],
            denomDecimalsUpdateProposal: isSet(object.denomDecimalsUpdateProposal)
                ? UpdateDenomDecimalsProposal.fromJSON(object.denomDecimalsUpdateProposal)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.spotMarketParamUpdateProposals) {
            obj.spotMarketParamUpdateProposals = message.spotMarketParamUpdateProposals.map((e) => e ? SpotMarketParamUpdateProposal.toJSON(e) : undefined);
        }
        else {
            obj.spotMarketParamUpdateProposals = [];
        }
        if (message.derivativeMarketParamUpdateProposals) {
            obj.derivativeMarketParamUpdateProposals = message.derivativeMarketParamUpdateProposals.map((e) => e ? DerivativeMarketParamUpdateProposal.toJSON(e) : undefined);
        }
        else {
            obj.derivativeMarketParamUpdateProposals = [];
        }
        if (message.spotMarketLaunchProposals) {
            obj.spotMarketLaunchProposals = message.spotMarketLaunchProposals.map((e) => e ? SpotMarketLaunchProposal.toJSON(e) : undefined);
        }
        else {
            obj.spotMarketLaunchProposals = [];
        }
        if (message.perpetualMarketLaunchProposals) {
            obj.perpetualMarketLaunchProposals = message.perpetualMarketLaunchProposals.map((e) => e ? PerpetualMarketLaunchProposal.toJSON(e) : undefined);
        }
        else {
            obj.perpetualMarketLaunchProposals = [];
        }
        if (message.expiryFuturesMarketLaunchProposals) {
            obj.expiryFuturesMarketLaunchProposals = message.expiryFuturesMarketLaunchProposals.map((e) => e ? ExpiryFuturesMarketLaunchProposal.toJSON(e) : undefined);
        }
        else {
            obj.expiryFuturesMarketLaunchProposals = [];
        }
        message.tradingRewardCampaignUpdateProposal !== undefined &&
            (obj.tradingRewardCampaignUpdateProposal = message.tradingRewardCampaignUpdateProposal
                ? TradingRewardCampaignUpdateProposal.toJSON(message.tradingRewardCampaignUpdateProposal)
                : undefined);
        if (message.binaryOptionsMarketLaunchProposals) {
            obj.binaryOptionsMarketLaunchProposals = message.binaryOptionsMarketLaunchProposals.map((e) => e ? BinaryOptionsMarketLaunchProposal.toJSON(e) : undefined);
        }
        else {
            obj.binaryOptionsMarketLaunchProposals = [];
        }
        if (message.binaryOptionsParamUpdateProposals) {
            obj.binaryOptionsParamUpdateProposals = message.binaryOptionsParamUpdateProposals.map((e) => e ? BinaryOptionsMarketParamUpdateProposal.toJSON(e) : undefined);
        }
        else {
            obj.binaryOptionsParamUpdateProposals = [];
        }
        message.denomDecimalsUpdateProposal !== undefined &&
            (obj.denomDecimalsUpdateProposal = message.denomDecimalsUpdateProposal
                ? UpdateDenomDecimalsProposal.toJSON(message.denomDecimalsUpdateProposal)
                : undefined);
        return obj;
    },
    create(base) {
        return BatchExchangeModificationProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseBatchExchangeModificationProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.spotMarketParamUpdateProposals =
            ((_c = object.spotMarketParamUpdateProposals) === null || _c === void 0 ? void 0 : _c.map((e) => SpotMarketParamUpdateProposal.fromPartial(e))) || [];
        message.derivativeMarketParamUpdateProposals =
            ((_d = object.derivativeMarketParamUpdateProposals) === null || _d === void 0 ? void 0 : _d.map((e) => DerivativeMarketParamUpdateProposal.fromPartial(e))) || [];
        message.spotMarketLaunchProposals =
            ((_e = object.spotMarketLaunchProposals) === null || _e === void 0 ? void 0 : _e.map((e) => SpotMarketLaunchProposal.fromPartial(e))) || [];
        message.perpetualMarketLaunchProposals =
            ((_f = object.perpetualMarketLaunchProposals) === null || _f === void 0 ? void 0 : _f.map((e) => PerpetualMarketLaunchProposal.fromPartial(e))) || [];
        message.expiryFuturesMarketLaunchProposals =
            ((_g = object.expiryFuturesMarketLaunchProposals) === null || _g === void 0 ? void 0 : _g.map((e) => ExpiryFuturesMarketLaunchProposal.fromPartial(e))) || [];
        message.tradingRewardCampaignUpdateProposal =
            (object.tradingRewardCampaignUpdateProposal !== undefined && object.tradingRewardCampaignUpdateProposal !== null)
                ? TradingRewardCampaignUpdateProposal.fromPartial(object.tradingRewardCampaignUpdateProposal)
                : undefined;
        message.binaryOptionsMarketLaunchProposals =
            ((_h = object.binaryOptionsMarketLaunchProposals) === null || _h === void 0 ? void 0 : _h.map((e) => BinaryOptionsMarketLaunchProposal.fromPartial(e))) || [];
        message.binaryOptionsParamUpdateProposals =
            ((_j = object.binaryOptionsParamUpdateProposals) === null || _j === void 0 ? void 0 : _j.map((e) => BinaryOptionsMarketParamUpdateProposal.fromPartial(e))) || [];
        message.denomDecimalsUpdateProposal =
            (object.denomDecimalsUpdateProposal !== undefined && object.denomDecimalsUpdateProposal !== null)
                ? UpdateDenomDecimalsProposal.fromPartial(object.denomDecimalsUpdateProposal)
                : undefined;
        return message;
    },
};
function createBaseSpotMarketLaunchProposal() {
    return {
        title: "",
        description: "",
        ticker: "",
        baseDenom: "",
        quoteDenom: "",
        minPriceTickSize: "",
        minQuantityTickSize: "",
        makerFeeRate: "",
        takerFeeRate: "",
    };
}
export const SpotMarketLaunchProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.ticker !== "") {
            writer.uint32(26).string(message.ticker);
        }
        if (message.baseDenom !== "") {
            writer.uint32(34).string(message.baseDenom);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(42).string(message.quoteDenom);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(50).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(58).string(message.minQuantityTickSize);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(66).string(message.makerFeeRate);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(74).string(message.takerFeeRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotMarketLaunchProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.ticker = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.baseDenom = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.quoteDenom = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.minPriceTickSize = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.minQuantityTickSize = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.makerFeeRate = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.takerFeeRate = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
            makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
            takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        return obj;
    },
    create(base) {
        return SpotMarketLaunchProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseSpotMarketLaunchProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.ticker = (_c = object.ticker) !== null && _c !== void 0 ? _c : "";
        message.baseDenom = (_d = object.baseDenom) !== null && _d !== void 0 ? _d : "";
        message.quoteDenom = (_e = object.quoteDenom) !== null && _e !== void 0 ? _e : "";
        message.minPriceTickSize = (_f = object.minPriceTickSize) !== null && _f !== void 0 ? _f : "";
        message.minQuantityTickSize = (_g = object.minQuantityTickSize) !== null && _g !== void 0 ? _g : "";
        message.makerFeeRate = (_h = object.makerFeeRate) !== null && _h !== void 0 ? _h : "";
        message.takerFeeRate = (_j = object.takerFeeRate) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
function createBasePerpetualMarketLaunchProposal() {
    return {
        title: "",
        description: "",
        ticker: "",
        quoteDenom: "",
        oracleBase: "",
        oracleQuote: "",
        oracleScaleFactor: 0,
        oracleType: 0,
        initialMarginRatio: "",
        maintenanceMarginRatio: "",
        makerFeeRate: "",
        takerFeeRate: "",
        minPriceTickSize: "",
        minQuantityTickSize: "",
    };
}
export const PerpetualMarketLaunchProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.ticker !== "") {
            writer.uint32(26).string(message.ticker);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(34).string(message.quoteDenom);
        }
        if (message.oracleBase !== "") {
            writer.uint32(42).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(50).string(message.oracleQuote);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(56).uint32(message.oracleScaleFactor);
        }
        if (message.oracleType !== 0) {
            writer.uint32(64).int32(message.oracleType);
        }
        if (message.initialMarginRatio !== "") {
            writer.uint32(74).string(message.initialMarginRatio);
        }
        if (message.maintenanceMarginRatio !== "") {
            writer.uint32(82).string(message.maintenanceMarginRatio);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(90).string(message.makerFeeRate);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(98).string(message.takerFeeRate);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(106).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(114).string(message.minQuantityTickSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketLaunchProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.ticker = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.quoteDenom = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.oracleBase = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.oracleQuote = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.oracleScaleFactor = reader.uint32();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.oracleType = reader.int32();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.initialMarginRatio = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.maintenanceMarginRatio = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.makerFeeRate = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.takerFeeRate = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.minPriceTickSize = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.minQuantityTickSize = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
            oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
            oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
            oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
            initialMarginRatio: isSet(object.initialMarginRatio) ? String(object.initialMarginRatio) : "",
            maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : "",
            makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
            takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.oracleBase !== undefined && (obj.oracleBase = message.oracleBase);
        message.oracleQuote !== undefined && (obj.oracleQuote = message.oracleQuote);
        message.oracleScaleFactor !== undefined && (obj.oracleScaleFactor = Math.round(message.oracleScaleFactor));
        message.oracleType !== undefined && (obj.oracleType = oracleTypeToJSON(message.oracleType));
        message.initialMarginRatio !== undefined && (obj.initialMarginRatio = message.initialMarginRatio);
        message.maintenanceMarginRatio !== undefined && (obj.maintenanceMarginRatio = message.maintenanceMarginRatio);
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        return obj;
    },
    create(base) {
        return PerpetualMarketLaunchProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const message = createBasePerpetualMarketLaunchProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.ticker = (_c = object.ticker) !== null && _c !== void 0 ? _c : "";
        message.quoteDenom = (_d = object.quoteDenom) !== null && _d !== void 0 ? _d : "";
        message.oracleBase = (_e = object.oracleBase) !== null && _e !== void 0 ? _e : "";
        message.oracleQuote = (_f = object.oracleQuote) !== null && _f !== void 0 ? _f : "";
        message.oracleScaleFactor = (_g = object.oracleScaleFactor) !== null && _g !== void 0 ? _g : 0;
        message.oracleType = (_h = object.oracleType) !== null && _h !== void 0 ? _h : 0;
        message.initialMarginRatio = (_j = object.initialMarginRatio) !== null && _j !== void 0 ? _j : "";
        message.maintenanceMarginRatio = (_k = object.maintenanceMarginRatio) !== null && _k !== void 0 ? _k : "";
        message.makerFeeRate = (_l = object.makerFeeRate) !== null && _l !== void 0 ? _l : "";
        message.takerFeeRate = (_m = object.takerFeeRate) !== null && _m !== void 0 ? _m : "";
        message.minPriceTickSize = (_o = object.minPriceTickSize) !== null && _o !== void 0 ? _o : "";
        message.minQuantityTickSize = (_p = object.minQuantityTickSize) !== null && _p !== void 0 ? _p : "";
        return message;
    },
};
function createBaseBinaryOptionsMarketLaunchProposal() {
    return {
        title: "",
        description: "",
        ticker: "",
        oracleSymbol: "",
        oracleProvider: "",
        oracleType: 0,
        oracleScaleFactor: 0,
        expirationTimestamp: "0",
        settlementTimestamp: "0",
        admin: "",
        quoteDenom: "",
        makerFeeRate: "",
        takerFeeRate: "",
        minPriceTickSize: "",
        minQuantityTickSize: "",
    };
}
export const BinaryOptionsMarketLaunchProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.ticker !== "") {
            writer.uint32(26).string(message.ticker);
        }
        if (message.oracleSymbol !== "") {
            writer.uint32(34).string(message.oracleSymbol);
        }
        if (message.oracleProvider !== "") {
            writer.uint32(42).string(message.oracleProvider);
        }
        if (message.oracleType !== 0) {
            writer.uint32(48).int32(message.oracleType);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(56).uint32(message.oracleScaleFactor);
        }
        if (message.expirationTimestamp !== "0") {
            writer.uint32(64).int64(message.expirationTimestamp);
        }
        if (message.settlementTimestamp !== "0") {
            writer.uint32(72).int64(message.settlementTimestamp);
        }
        if (message.admin !== "") {
            writer.uint32(82).string(message.admin);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(90).string(message.quoteDenom);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(98).string(message.makerFeeRate);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(106).string(message.takerFeeRate);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(114).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(122).string(message.minQuantityTickSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBinaryOptionsMarketLaunchProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.ticker = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.oracleSymbol = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.oracleProvider = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.oracleType = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.oracleScaleFactor = reader.uint32();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.expirationTimestamp = longToString(reader.int64());
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.settlementTimestamp = longToString(reader.int64());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.quoteDenom = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.makerFeeRate = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.takerFeeRate = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.minPriceTickSize = reader.string();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.minQuantityTickSize = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            oracleSymbol: isSet(object.oracleSymbol) ? String(object.oracleSymbol) : "",
            oracleProvider: isSet(object.oracleProvider) ? String(object.oracleProvider) : "",
            oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
            oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
            expirationTimestamp: isSet(object.expirationTimestamp) ? String(object.expirationTimestamp) : "0",
            settlementTimestamp: isSet(object.settlementTimestamp) ? String(object.settlementTimestamp) : "0",
            admin: isSet(object.admin) ? String(object.admin) : "",
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
            takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.oracleSymbol !== undefined && (obj.oracleSymbol = message.oracleSymbol);
        message.oracleProvider !== undefined && (obj.oracleProvider = message.oracleProvider);
        message.oracleType !== undefined && (obj.oracleType = oracleTypeToJSON(message.oracleType));
        message.oracleScaleFactor !== undefined && (obj.oracleScaleFactor = Math.round(message.oracleScaleFactor));
        message.expirationTimestamp !== undefined && (obj.expirationTimestamp = message.expirationTimestamp);
        message.settlementTimestamp !== undefined && (obj.settlementTimestamp = message.settlementTimestamp);
        message.admin !== undefined && (obj.admin = message.admin);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        return obj;
    },
    create(base) {
        return BinaryOptionsMarketLaunchProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const message = createBaseBinaryOptionsMarketLaunchProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.ticker = (_c = object.ticker) !== null && _c !== void 0 ? _c : "";
        message.oracleSymbol = (_d = object.oracleSymbol) !== null && _d !== void 0 ? _d : "";
        message.oracleProvider = (_e = object.oracleProvider) !== null && _e !== void 0 ? _e : "";
        message.oracleType = (_f = object.oracleType) !== null && _f !== void 0 ? _f : 0;
        message.oracleScaleFactor = (_g = object.oracleScaleFactor) !== null && _g !== void 0 ? _g : 0;
        message.expirationTimestamp = (_h = object.expirationTimestamp) !== null && _h !== void 0 ? _h : "0";
        message.settlementTimestamp = (_j = object.settlementTimestamp) !== null && _j !== void 0 ? _j : "0";
        message.admin = (_k = object.admin) !== null && _k !== void 0 ? _k : "";
        message.quoteDenom = (_l = object.quoteDenom) !== null && _l !== void 0 ? _l : "";
        message.makerFeeRate = (_m = object.makerFeeRate) !== null && _m !== void 0 ? _m : "";
        message.takerFeeRate = (_o = object.takerFeeRate) !== null && _o !== void 0 ? _o : "";
        message.minPriceTickSize = (_p = object.minPriceTickSize) !== null && _p !== void 0 ? _p : "";
        message.minQuantityTickSize = (_q = object.minQuantityTickSize) !== null && _q !== void 0 ? _q : "";
        return message;
    },
};
function createBaseExpiryFuturesMarketLaunchProposal() {
    return {
        title: "",
        description: "",
        ticker: "",
        quoteDenom: "",
        oracleBase: "",
        oracleQuote: "",
        oracleScaleFactor: 0,
        oracleType: 0,
        expiry: "0",
        initialMarginRatio: "",
        maintenanceMarginRatio: "",
        makerFeeRate: "",
        takerFeeRate: "",
        minPriceTickSize: "",
        minQuantityTickSize: "",
    };
}
export const ExpiryFuturesMarketLaunchProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.ticker !== "") {
            writer.uint32(26).string(message.ticker);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(34).string(message.quoteDenom);
        }
        if (message.oracleBase !== "") {
            writer.uint32(42).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(50).string(message.oracleQuote);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(56).uint32(message.oracleScaleFactor);
        }
        if (message.oracleType !== 0) {
            writer.uint32(64).int32(message.oracleType);
        }
        if (message.expiry !== "0") {
            writer.uint32(72).int64(message.expiry);
        }
        if (message.initialMarginRatio !== "") {
            writer.uint32(82).string(message.initialMarginRatio);
        }
        if (message.maintenanceMarginRatio !== "") {
            writer.uint32(90).string(message.maintenanceMarginRatio);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(98).string(message.makerFeeRate);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(106).string(message.takerFeeRate);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(114).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(122).string(message.minQuantityTickSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExpiryFuturesMarketLaunchProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.ticker = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.quoteDenom = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.oracleBase = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.oracleQuote = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.oracleScaleFactor = reader.uint32();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.oracleType = reader.int32();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.expiry = longToString(reader.int64());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.initialMarginRatio = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.maintenanceMarginRatio = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.makerFeeRate = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.takerFeeRate = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.minPriceTickSize = reader.string();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.minQuantityTickSize = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
            oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
            oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
            oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
            expiry: isSet(object.expiry) ? String(object.expiry) : "0",
            initialMarginRatio: isSet(object.initialMarginRatio) ? String(object.initialMarginRatio) : "",
            maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : "",
            makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
            takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.oracleBase !== undefined && (obj.oracleBase = message.oracleBase);
        message.oracleQuote !== undefined && (obj.oracleQuote = message.oracleQuote);
        message.oracleScaleFactor !== undefined && (obj.oracleScaleFactor = Math.round(message.oracleScaleFactor));
        message.oracleType !== undefined && (obj.oracleType = oracleTypeToJSON(message.oracleType));
        message.expiry !== undefined && (obj.expiry = message.expiry);
        message.initialMarginRatio !== undefined && (obj.initialMarginRatio = message.initialMarginRatio);
        message.maintenanceMarginRatio !== undefined && (obj.maintenanceMarginRatio = message.maintenanceMarginRatio);
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        return obj;
    },
    create(base) {
        return ExpiryFuturesMarketLaunchProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const message = createBaseExpiryFuturesMarketLaunchProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.ticker = (_c = object.ticker) !== null && _c !== void 0 ? _c : "";
        message.quoteDenom = (_d = object.quoteDenom) !== null && _d !== void 0 ? _d : "";
        message.oracleBase = (_e = object.oracleBase) !== null && _e !== void 0 ? _e : "";
        message.oracleQuote = (_f = object.oracleQuote) !== null && _f !== void 0 ? _f : "";
        message.oracleScaleFactor = (_g = object.oracleScaleFactor) !== null && _g !== void 0 ? _g : 0;
        message.oracleType = (_h = object.oracleType) !== null && _h !== void 0 ? _h : 0;
        message.expiry = (_j = object.expiry) !== null && _j !== void 0 ? _j : "0";
        message.initialMarginRatio = (_k = object.initialMarginRatio) !== null && _k !== void 0 ? _k : "";
        message.maintenanceMarginRatio = (_l = object.maintenanceMarginRatio) !== null && _l !== void 0 ? _l : "";
        message.makerFeeRate = (_m = object.makerFeeRate) !== null && _m !== void 0 ? _m : "";
        message.takerFeeRate = (_o = object.takerFeeRate) !== null && _o !== void 0 ? _o : "";
        message.minPriceTickSize = (_p = object.minPriceTickSize) !== null && _p !== void 0 ? _p : "";
        message.minQuantityTickSize = (_q = object.minQuantityTickSize) !== null && _q !== void 0 ? _q : "";
        return message;
    },
};
function createBaseDerivativeMarketParamUpdateProposal() {
    return {
        title: "",
        description: "",
        marketId: "",
        initialMarginRatio: "",
        maintenanceMarginRatio: "",
        makerFeeRate: "",
        takerFeeRate: "",
        relayerFeeShareRate: "",
        minPriceTickSize: "",
        minQuantityTickSize: "",
        HourlyInterestRate: "",
        HourlyFundingRateCap: "",
        status: 0,
        oracleParams: undefined,
    };
}
export const DerivativeMarketParamUpdateProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.marketId !== "") {
            writer.uint32(26).string(message.marketId);
        }
        if (message.initialMarginRatio !== "") {
            writer.uint32(34).string(message.initialMarginRatio);
        }
        if (message.maintenanceMarginRatio !== "") {
            writer.uint32(42).string(message.maintenanceMarginRatio);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(50).string(message.makerFeeRate);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(58).string(message.takerFeeRate);
        }
        if (message.relayerFeeShareRate !== "") {
            writer.uint32(66).string(message.relayerFeeShareRate);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(74).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(82).string(message.minQuantityTickSize);
        }
        if (message.HourlyInterestRate !== "") {
            writer.uint32(90).string(message.HourlyInterestRate);
        }
        if (message.HourlyFundingRateCap !== "") {
            writer.uint32(98).string(message.HourlyFundingRateCap);
        }
        if (message.status !== 0) {
            writer.uint32(104).int32(message.status);
        }
        if (message.oracleParams !== undefined) {
            OracleParams.encode(message.oracleParams, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeMarketParamUpdateProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.initialMarginRatio = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.maintenanceMarginRatio = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.makerFeeRate = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.takerFeeRate = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.relayerFeeShareRate = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.minPriceTickSize = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.minQuantityTickSize = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.HourlyInterestRate = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.HourlyFundingRateCap = reader.string();
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.oracleParams = OracleParams.decode(reader, reader.uint32());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            initialMarginRatio: isSet(object.initialMarginRatio) ? String(object.initialMarginRatio) : "",
            maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : "",
            makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
            takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
            relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : "",
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
            HourlyInterestRate: isSet(object.HourlyInterestRate) ? String(object.HourlyInterestRate) : "",
            HourlyFundingRateCap: isSet(object.HourlyFundingRateCap) ? String(object.HourlyFundingRateCap) : "",
            status: isSet(object.status) ? marketStatusFromJSON(object.status) : 0,
            oracleParams: isSet(object.oracleParams) ? OracleParams.fromJSON(object.oracleParams) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.initialMarginRatio !== undefined && (obj.initialMarginRatio = message.initialMarginRatio);
        message.maintenanceMarginRatio !== undefined && (obj.maintenanceMarginRatio = message.maintenanceMarginRatio);
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.relayerFeeShareRate !== undefined && (obj.relayerFeeShareRate = message.relayerFeeShareRate);
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        message.HourlyInterestRate !== undefined && (obj.HourlyInterestRate = message.HourlyInterestRate);
        message.HourlyFundingRateCap !== undefined && (obj.HourlyFundingRateCap = message.HourlyFundingRateCap);
        message.status !== undefined && (obj.status = marketStatusToJSON(message.status));
        message.oracleParams !== undefined &&
            (obj.oracleParams = message.oracleParams ? OracleParams.toJSON(message.oracleParams) : undefined);
        return obj;
    },
    create(base) {
        return DerivativeMarketParamUpdateProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseDerivativeMarketParamUpdateProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.marketId = (_c = object.marketId) !== null && _c !== void 0 ? _c : "";
        message.initialMarginRatio = (_d = object.initialMarginRatio) !== null && _d !== void 0 ? _d : "";
        message.maintenanceMarginRatio = (_e = object.maintenanceMarginRatio) !== null && _e !== void 0 ? _e : "";
        message.makerFeeRate = (_f = object.makerFeeRate) !== null && _f !== void 0 ? _f : "";
        message.takerFeeRate = (_g = object.takerFeeRate) !== null && _g !== void 0 ? _g : "";
        message.relayerFeeShareRate = (_h = object.relayerFeeShareRate) !== null && _h !== void 0 ? _h : "";
        message.minPriceTickSize = (_j = object.minPriceTickSize) !== null && _j !== void 0 ? _j : "";
        message.minQuantityTickSize = (_k = object.minQuantityTickSize) !== null && _k !== void 0 ? _k : "";
        message.HourlyInterestRate = (_l = object.HourlyInterestRate) !== null && _l !== void 0 ? _l : "";
        message.HourlyFundingRateCap = (_m = object.HourlyFundingRateCap) !== null && _m !== void 0 ? _m : "";
        message.status = (_o = object.status) !== null && _o !== void 0 ? _o : 0;
        message.oracleParams = (object.oracleParams !== undefined && object.oracleParams !== null)
            ? OracleParams.fromPartial(object.oracleParams)
            : undefined;
        return message;
    },
};
function createBaseMarketForcedSettlementProposal() {
    return { title: "", description: "", marketId: "", settlementPrice: "" };
}
export const MarketForcedSettlementProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.marketId !== "") {
            writer.uint32(26).string(message.marketId);
        }
        if (message.settlementPrice !== "") {
            writer.uint32(34).string(message.settlementPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketForcedSettlementProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.settlementPrice = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.settlementPrice !== undefined && (obj.settlementPrice = message.settlementPrice);
        return obj;
    },
    create(base) {
        return MarketForcedSettlementProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMarketForcedSettlementProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.marketId = (_c = object.marketId) !== null && _c !== void 0 ? _c : "";
        message.settlementPrice = (_d = object.settlementPrice) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseUpdateDenomDecimalsProposal() {
    return { title: "", description: "", denomDecimals: [] };
}
export const UpdateDenomDecimalsProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.denomDecimals) {
            DenomDecimals.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateDenomDecimalsProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            denomDecimals: Array.isArray(object === null || object === void 0 ? void 0 : object.denomDecimals)
                ? object.denomDecimals.map((e) => DenomDecimals.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.denomDecimals) {
            obj.denomDecimals = message.denomDecimals.map((e) => e ? DenomDecimals.toJSON(e) : undefined);
        }
        else {
            obj.denomDecimals = [];
        }
        return obj;
    },
    create(base) {
        return UpdateDenomDecimalsProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUpdateDenomDecimalsProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.denomDecimals = ((_c = object.denomDecimals) === null || _c === void 0 ? void 0 : _c.map((e) => DenomDecimals.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBinaryOptionsMarketParamUpdateProposal() {
    return {
        title: "",
        description: "",
        marketId: "",
        makerFeeRate: "",
        takerFeeRate: "",
        relayerFeeShareRate: "",
        minPriceTickSize: "",
        minQuantityTickSize: "",
        expirationTimestamp: "0",
        settlementTimestamp: "0",
        settlementPrice: "",
        admin: "",
        status: 0,
        oracleParams: undefined,
    };
}
export const BinaryOptionsMarketParamUpdateProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.marketId !== "") {
            writer.uint32(26).string(message.marketId);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(34).string(message.makerFeeRate);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(42).string(message.takerFeeRate);
        }
        if (message.relayerFeeShareRate !== "") {
            writer.uint32(50).string(message.relayerFeeShareRate);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(58).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(66).string(message.minQuantityTickSize);
        }
        if (message.expirationTimestamp !== "0") {
            writer.uint32(72).int64(message.expirationTimestamp);
        }
        if (message.settlementTimestamp !== "0") {
            writer.uint32(80).int64(message.settlementTimestamp);
        }
        if (message.settlementPrice !== "") {
            writer.uint32(90).string(message.settlementPrice);
        }
        if (message.admin !== "") {
            writer.uint32(98).string(message.admin);
        }
        if (message.status !== 0) {
            writer.uint32(104).int32(message.status);
        }
        if (message.oracleParams !== undefined) {
            ProviderOracleParams.encode(message.oracleParams, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBinaryOptionsMarketParamUpdateProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.makerFeeRate = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.takerFeeRate = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.relayerFeeShareRate = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.minPriceTickSize = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.minQuantityTickSize = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.expirationTimestamp = longToString(reader.int64());
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.settlementTimestamp = longToString(reader.int64());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.settlementPrice = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.oracleParams = ProviderOracleParams.decode(reader, reader.uint32());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
            takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
            relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : "",
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
            expirationTimestamp: isSet(object.expirationTimestamp) ? String(object.expirationTimestamp) : "0",
            settlementTimestamp: isSet(object.settlementTimestamp) ? String(object.settlementTimestamp) : "0",
            settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : "",
            admin: isSet(object.admin) ? String(object.admin) : "",
            status: isSet(object.status) ? marketStatusFromJSON(object.status) : 0,
            oracleParams: isSet(object.oracleParams) ? ProviderOracleParams.fromJSON(object.oracleParams) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.relayerFeeShareRate !== undefined && (obj.relayerFeeShareRate = message.relayerFeeShareRate);
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        message.expirationTimestamp !== undefined && (obj.expirationTimestamp = message.expirationTimestamp);
        message.settlementTimestamp !== undefined && (obj.settlementTimestamp = message.settlementTimestamp);
        message.settlementPrice !== undefined && (obj.settlementPrice = message.settlementPrice);
        message.admin !== undefined && (obj.admin = message.admin);
        message.status !== undefined && (obj.status = marketStatusToJSON(message.status));
        message.oracleParams !== undefined &&
            (obj.oracleParams = message.oracleParams ? ProviderOracleParams.toJSON(message.oracleParams) : undefined);
        return obj;
    },
    create(base) {
        return BinaryOptionsMarketParamUpdateProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseBinaryOptionsMarketParamUpdateProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.marketId = (_c = object.marketId) !== null && _c !== void 0 ? _c : "";
        message.makerFeeRate = (_d = object.makerFeeRate) !== null && _d !== void 0 ? _d : "";
        message.takerFeeRate = (_e = object.takerFeeRate) !== null && _e !== void 0 ? _e : "";
        message.relayerFeeShareRate = (_f = object.relayerFeeShareRate) !== null && _f !== void 0 ? _f : "";
        message.minPriceTickSize = (_g = object.minPriceTickSize) !== null && _g !== void 0 ? _g : "";
        message.minQuantityTickSize = (_h = object.minQuantityTickSize) !== null && _h !== void 0 ? _h : "";
        message.expirationTimestamp = (_j = object.expirationTimestamp) !== null && _j !== void 0 ? _j : "0";
        message.settlementTimestamp = (_k = object.settlementTimestamp) !== null && _k !== void 0 ? _k : "0";
        message.settlementPrice = (_l = object.settlementPrice) !== null && _l !== void 0 ? _l : "";
        message.admin = (_m = object.admin) !== null && _m !== void 0 ? _m : "";
        message.status = (_o = object.status) !== null && _o !== void 0 ? _o : 0;
        message.oracleParams = (object.oracleParams !== undefined && object.oracleParams !== null)
            ? ProviderOracleParams.fromPartial(object.oracleParams)
            : undefined;
        return message;
    },
};
function createBaseProviderOracleParams() {
    return { symbol: "", provider: "", oracleScaleFactor: 0, oracleType: 0 };
}
export const ProviderOracleParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        if (message.provider !== "") {
            writer.uint32(18).string(message.provider);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(24).uint32(message.oracleScaleFactor);
        }
        if (message.oracleType !== 0) {
            writer.uint32(32).int32(message.oracleType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProviderOracleParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.symbol = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.provider = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.oracleScaleFactor = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.oracleType = reader.int32();
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
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            provider: isSet(object.provider) ? String(object.provider) : "",
            oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
            oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.provider !== undefined && (obj.provider = message.provider);
        message.oracleScaleFactor !== undefined && (obj.oracleScaleFactor = Math.round(message.oracleScaleFactor));
        message.oracleType !== undefined && (obj.oracleType = oracleTypeToJSON(message.oracleType));
        return obj;
    },
    create(base) {
        return ProviderOracleParams.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseProviderOracleParams();
        message.symbol = (_a = object.symbol) !== null && _a !== void 0 ? _a : "";
        message.provider = (_b = object.provider) !== null && _b !== void 0 ? _b : "";
        message.oracleScaleFactor = (_c = object.oracleScaleFactor) !== null && _c !== void 0 ? _c : 0;
        message.oracleType = (_d = object.oracleType) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseOracleParams() {
    return { oracleBase: "", oracleQuote: "", oracleScaleFactor: 0, oracleType: 0 };
}
export const OracleParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.oracleBase !== "") {
            writer.uint32(10).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(18).string(message.oracleQuote);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(24).uint32(message.oracleScaleFactor);
        }
        if (message.oracleType !== 0) {
            writer.uint32(32).int32(message.oracleType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOracleParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.oracleBase = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.oracleQuote = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.oracleScaleFactor = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.oracleType = reader.int32();
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
            oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
            oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
            oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
            oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.oracleBase !== undefined && (obj.oracleBase = message.oracleBase);
        message.oracleQuote !== undefined && (obj.oracleQuote = message.oracleQuote);
        message.oracleScaleFactor !== undefined && (obj.oracleScaleFactor = Math.round(message.oracleScaleFactor));
        message.oracleType !== undefined && (obj.oracleType = oracleTypeToJSON(message.oracleType));
        return obj;
    },
    create(base) {
        return OracleParams.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseOracleParams();
        message.oracleBase = (_a = object.oracleBase) !== null && _a !== void 0 ? _a : "";
        message.oracleQuote = (_b = object.oracleQuote) !== null && _b !== void 0 ? _b : "";
        message.oracleScaleFactor = (_c = object.oracleScaleFactor) !== null && _c !== void 0 ? _c : 0;
        message.oracleType = (_d = object.oracleType) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseTradingRewardCampaignLaunchProposal() {
    return { title: "", description: "", campaignInfo: undefined, campaignRewardPools: [] };
}
export const TradingRewardCampaignLaunchProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.campaignInfo !== undefined) {
            TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.campaignRewardPools) {
            CampaignRewardPool.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardCampaignLaunchProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.campaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.campaignRewardPools.push(CampaignRewardPool.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            campaignInfo: isSet(object.campaignInfo) ? TradingRewardCampaignInfo.fromJSON(object.campaignInfo) : undefined,
            campaignRewardPools: Array.isArray(object === null || object === void 0 ? void 0 : object.campaignRewardPools)
                ? object.campaignRewardPools.map((e) => CampaignRewardPool.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.campaignInfo !== undefined &&
            (obj.campaignInfo = message.campaignInfo ? TradingRewardCampaignInfo.toJSON(message.campaignInfo) : undefined);
        if (message.campaignRewardPools) {
            obj.campaignRewardPools = message.campaignRewardPools.map((e) => e ? CampaignRewardPool.toJSON(e) : undefined);
        }
        else {
            obj.campaignRewardPools = [];
        }
        return obj;
    },
    create(base) {
        return TradingRewardCampaignLaunchProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTradingRewardCampaignLaunchProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.campaignInfo = (object.campaignInfo !== undefined && object.campaignInfo !== null)
            ? TradingRewardCampaignInfo.fromPartial(object.campaignInfo)
            : undefined;
        message.campaignRewardPools = ((_c = object.campaignRewardPools) === null || _c === void 0 ? void 0 : _c.map((e) => CampaignRewardPool.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTradingRewardCampaignUpdateProposal() {
    return {
        title: "",
        description: "",
        campaignInfo: undefined,
        campaignRewardPoolsAdditions: [],
        campaignRewardPoolsUpdates: [],
    };
}
export const TradingRewardCampaignUpdateProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.campaignInfo !== undefined) {
            TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.campaignRewardPoolsAdditions) {
            CampaignRewardPool.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.campaignRewardPoolsUpdates) {
            CampaignRewardPool.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardCampaignUpdateProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.campaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.campaignRewardPoolsAdditions.push(CampaignRewardPool.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.campaignRewardPoolsUpdates.push(CampaignRewardPool.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            campaignInfo: isSet(object.campaignInfo) ? TradingRewardCampaignInfo.fromJSON(object.campaignInfo) : undefined,
            campaignRewardPoolsAdditions: Array.isArray(object === null || object === void 0 ? void 0 : object.campaignRewardPoolsAdditions)
                ? object.campaignRewardPoolsAdditions.map((e) => CampaignRewardPool.fromJSON(e))
                : [],
            campaignRewardPoolsUpdates: Array.isArray(object === null || object === void 0 ? void 0 : object.campaignRewardPoolsUpdates)
                ? object.campaignRewardPoolsUpdates.map((e) => CampaignRewardPool.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.campaignInfo !== undefined &&
            (obj.campaignInfo = message.campaignInfo ? TradingRewardCampaignInfo.toJSON(message.campaignInfo) : undefined);
        if (message.campaignRewardPoolsAdditions) {
            obj.campaignRewardPoolsAdditions = message.campaignRewardPoolsAdditions.map((e) => e ? CampaignRewardPool.toJSON(e) : undefined);
        }
        else {
            obj.campaignRewardPoolsAdditions = [];
        }
        if (message.campaignRewardPoolsUpdates) {
            obj.campaignRewardPoolsUpdates = message.campaignRewardPoolsUpdates.map((e) => e ? CampaignRewardPool.toJSON(e) : undefined);
        }
        else {
            obj.campaignRewardPoolsUpdates = [];
        }
        return obj;
    },
    create(base) {
        return TradingRewardCampaignUpdateProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTradingRewardCampaignUpdateProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.campaignInfo = (object.campaignInfo !== undefined && object.campaignInfo !== null)
            ? TradingRewardCampaignInfo.fromPartial(object.campaignInfo)
            : undefined;
        message.campaignRewardPoolsAdditions =
            ((_c = object.campaignRewardPoolsAdditions) === null || _c === void 0 ? void 0 : _c.map((e) => CampaignRewardPool.fromPartial(e))) || [];
        message.campaignRewardPoolsUpdates =
            ((_d = object.campaignRewardPoolsUpdates) === null || _d === void 0 ? void 0 : _d.map((e) => CampaignRewardPool.fromPartial(e))) || [];
        return message;
    },
};
function createBaseRewardPointUpdate() {
    return { accountAddress: "", newPoints: "" };
}
export const RewardPointUpdate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        if (message.newPoints !== "") {
            writer.uint32(98).string(message.newPoints);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardPointUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.newPoints = reader.string();
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
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            newPoints: isSet(object.newPoints) ? String(object.newPoints) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.newPoints !== undefined && (obj.newPoints = message.newPoints);
        return obj;
    },
    create(base) {
        return RewardPointUpdate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRewardPointUpdate();
        message.accountAddress = (_a = object.accountAddress) !== null && _a !== void 0 ? _a : "";
        message.newPoints = (_b = object.newPoints) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTradingRewardPendingPointsUpdateProposal() {
    return { title: "", description: "", pendingPoolTimestamp: "0", rewardPointUpdates: [] };
}
export const TradingRewardPendingPointsUpdateProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.pendingPoolTimestamp !== "0") {
            writer.uint32(24).int64(message.pendingPoolTimestamp);
        }
        for (const v of message.rewardPointUpdates) {
            RewardPointUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardPendingPointsUpdateProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.pendingPoolTimestamp = longToString(reader.int64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.rewardPointUpdates.push(RewardPointUpdate.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            pendingPoolTimestamp: isSet(object.pendingPoolTimestamp) ? String(object.pendingPoolTimestamp) : "0",
            rewardPointUpdates: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardPointUpdates)
                ? object.rewardPointUpdates.map((e) => RewardPointUpdate.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.pendingPoolTimestamp !== undefined && (obj.pendingPoolTimestamp = message.pendingPoolTimestamp);
        if (message.rewardPointUpdates) {
            obj.rewardPointUpdates = message.rewardPointUpdates.map((e) => e ? RewardPointUpdate.toJSON(e) : undefined);
        }
        else {
            obj.rewardPointUpdates = [];
        }
        return obj;
    },
    create(base) {
        return TradingRewardPendingPointsUpdateProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTradingRewardPendingPointsUpdateProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.pendingPoolTimestamp = (_c = object.pendingPoolTimestamp) !== null && _c !== void 0 ? _c : "0";
        message.rewardPointUpdates = ((_d = object.rewardPointUpdates) === null || _d === void 0 ? void 0 : _d.map((e) => RewardPointUpdate.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFeeDiscountProposal() {
    return { title: "", description: "", schedule: undefined };
}
export const FeeDiscountProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.schedule !== undefined) {
            FeeDiscountSchedule.encode(message.schedule, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeDiscountProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.schedule = FeeDiscountSchedule.decode(reader, reader.uint32());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            schedule: isSet(object.schedule) ? FeeDiscountSchedule.fromJSON(object.schedule) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.schedule !== undefined &&
            (obj.schedule = message.schedule ? FeeDiscountSchedule.toJSON(message.schedule) : undefined);
        return obj;
    },
    create(base) {
        return FeeDiscountProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFeeDiscountProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.schedule = (object.schedule !== undefined && object.schedule !== null)
            ? FeeDiscountSchedule.fromPartial(object.schedule)
            : undefined;
        return message;
    },
};
function createBaseBatchCommunityPoolSpendProposal() {
    return { title: "", description: "", proposals: [] };
}
export const BatchCommunityPoolSpendProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.proposals) {
            CommunityPoolSpendProposal.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchCommunityPoolSpendProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proposals.push(CommunityPoolSpendProposal.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals)
                ? object.proposals.map((e) => CommunityPoolSpendProposal.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.proposals) {
            obj.proposals = message.proposals.map((e) => e ? CommunityPoolSpendProposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        return obj;
    },
    create(base) {
        return BatchCommunityPoolSpendProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseBatchCommunityPoolSpendProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.proposals = ((_c = object.proposals) === null || _c === void 0 ? void 0 : _c.map((e) => CommunityPoolSpendProposal.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgRewardsOptOut() {
    return { sender: "" };
}
export const MsgRewardsOptOut = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRewardsOptOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
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
        return { sender: isSet(object.sender) ? String(object.sender) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    create(base) {
        return MsgRewardsOptOut.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgRewardsOptOut();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgRewardsOptOutResponse() {
    return {};
}
export const MsgRewardsOptOutResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRewardsOptOutResponse();
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
        return MsgRewardsOptOutResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRewardsOptOutResponse();
        return message;
    },
};
function createBaseMsgReclaimLockedFunds() {
    return { sender: "", lockedAccountPubKey: new Uint8Array(), signature: new Uint8Array() };
}
export const MsgReclaimLockedFunds = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockedAccountPubKey.length !== 0) {
            writer.uint32(18).bytes(message.lockedAccountPubKey);
        }
        if (message.signature.length !== 0) {
            writer.uint32(26).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReclaimLockedFunds();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.lockedAccountPubKey = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.signature = reader.bytes();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            lockedAccountPubKey: isSet(object.lockedAccountPubKey)
                ? bytesFromBase64(object.lockedAccountPubKey)
                : new Uint8Array(),
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.lockedAccountPubKey !== undefined &&
            (obj.lockedAccountPubKey = base64FromBytes(message.lockedAccountPubKey !== undefined ? message.lockedAccountPubKey : new Uint8Array()));
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    create(base) {
        return MsgReclaimLockedFunds.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgReclaimLockedFunds();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.lockedAccountPubKey = (_b = object.lockedAccountPubKey) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.signature = (_c = object.signature) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseMsgReclaimLockedFundsResponse() {
    return {};
}
export const MsgReclaimLockedFundsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReclaimLockedFundsResponse();
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
        return MsgReclaimLockedFundsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgReclaimLockedFundsResponse();
        return message;
    },
};
function createBaseMsgSignData() {
    return { Signer: new Uint8Array(), Data: new Uint8Array() };
}
export const MsgSignData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.Signer.length !== 0) {
            writer.uint32(10).bytes(message.Signer);
        }
        if (message.Data.length !== 0) {
            writer.uint32(18).bytes(message.Data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Signer = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.Data = reader.bytes();
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
            Signer: isSet(object.Signer) ? bytesFromBase64(object.Signer) : new Uint8Array(),
            Data: isSet(object.Data) ? bytesFromBase64(object.Data) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.Signer !== undefined &&
            (obj.Signer = base64FromBytes(message.Signer !== undefined ? message.Signer : new Uint8Array()));
        message.Data !== undefined &&
            (obj.Data = base64FromBytes(message.Data !== undefined ? message.Data : new Uint8Array()));
        return obj;
    },
    create(base) {
        return MsgSignData.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgSignData();
        message.Signer = (_a = object.Signer) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.Data = (_b = object.Data) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseMsgSignDoc() {
    return { signType: "", value: undefined };
}
export const MsgSignDoc = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.signType !== "") {
            writer.uint32(10).string(message.signType);
        }
        if (message.value !== undefined) {
            MsgSignData.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignDoc();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.signType = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = MsgSignData.decode(reader, reader.uint32());
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
            signType: isSet(object.signType) ? String(object.signType) : "",
            value: isSet(object.value) ? MsgSignData.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.signType !== undefined && (obj.signType = message.signType);
        message.value !== undefined && (obj.value = message.value ? MsgSignData.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return MsgSignDoc.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgSignDoc();
        message.signType = (_a = object.signType) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? MsgSignData.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseMsgAdminUpdateBinaryOptionsMarket() {
    return {
        sender: "",
        marketId: "",
        settlementPrice: "",
        expirationTimestamp: "0",
        settlementTimestamp: "0",
        status: 0,
    };
}
export const MsgAdminUpdateBinaryOptionsMarket = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.settlementPrice !== "") {
            writer.uint32(26).string(message.settlementPrice);
        }
        if (message.expirationTimestamp !== "0") {
            writer.uint32(32).int64(message.expirationTimestamp);
        }
        if (message.settlementTimestamp !== "0") {
            writer.uint32(40).int64(message.settlementTimestamp);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAdminUpdateBinaryOptionsMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.settlementPrice = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.expirationTimestamp = longToString(reader.int64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.settlementTimestamp = longToString(reader.int64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.status = reader.int32();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : "",
            expirationTimestamp: isSet(object.expirationTimestamp) ? String(object.expirationTimestamp) : "0",
            settlementTimestamp: isSet(object.settlementTimestamp) ? String(object.settlementTimestamp) : "0",
            status: isSet(object.status) ? marketStatusFromJSON(object.status) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.settlementPrice !== undefined && (obj.settlementPrice = message.settlementPrice);
        message.expirationTimestamp !== undefined && (obj.expirationTimestamp = message.expirationTimestamp);
        message.settlementTimestamp !== undefined && (obj.settlementTimestamp = message.settlementTimestamp);
        message.status !== undefined && (obj.status = marketStatusToJSON(message.status));
        return obj;
    },
    create(base) {
        return MsgAdminUpdateBinaryOptionsMarket.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMsgAdminUpdateBinaryOptionsMarket();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.settlementPrice = (_c = object.settlementPrice) !== null && _c !== void 0 ? _c : "";
        message.expirationTimestamp = (_d = object.expirationTimestamp) !== null && _d !== void 0 ? _d : "0";
        message.settlementTimestamp = (_e = object.settlementTimestamp) !== null && _e !== void 0 ? _e : "0";
        message.status = (_f = object.status) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseMsgAdminUpdateBinaryOptionsMarketResponse() {
    return {};
}
export const MsgAdminUpdateBinaryOptionsMarketResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAdminUpdateBinaryOptionsMarketResponse();
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
        return MsgAdminUpdateBinaryOptionsMarketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgAdminUpdateBinaryOptionsMarketResponse();
        return message;
    },
};
function createBaseAtomicMarketOrderFeeMultiplierScheduleProposal() {
    return { title: "", description: "", marketFeeMultipliers: [] };
}
export const AtomicMarketOrderFeeMultiplierScheduleProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.marketFeeMultipliers) {
            MarketFeeMultiplier.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAtomicMarketOrderFeeMultiplierScheduleProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.marketFeeMultipliers.push(MarketFeeMultiplier.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            marketFeeMultipliers: Array.isArray(object === null || object === void 0 ? void 0 : object.marketFeeMultipliers)
                ? object.marketFeeMultipliers.map((e) => MarketFeeMultiplier.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.marketFeeMultipliers) {
            obj.marketFeeMultipliers = message.marketFeeMultipliers.map((e) => e ? MarketFeeMultiplier.toJSON(e) : undefined);
        }
        else {
            obj.marketFeeMultipliers = [];
        }
        return obj;
    },
    create(base) {
        return AtomicMarketOrderFeeMultiplierScheduleProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAtomicMarketOrderFeeMultiplierScheduleProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.marketFeeMultipliers = ((_c = object.marketFeeMultipliers) === null || _c === void 0 ? void 0 : _c.map((e) => MarketFeeMultiplier.fromPartial(e))) || [];
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Deposit = this.Deposit.bind(this);
        this.Withdraw = this.Withdraw.bind(this);
        this.InstantSpotMarketLaunch = this.InstantSpotMarketLaunch.bind(this);
        this.InstantPerpetualMarketLaunch = this.InstantPerpetualMarketLaunch.bind(this);
        this.InstantExpiryFuturesMarketLaunch = this.InstantExpiryFuturesMarketLaunch.bind(this);
        this.CreateSpotLimitOrder = this.CreateSpotLimitOrder.bind(this);
        this.BatchCreateSpotLimitOrders = this.BatchCreateSpotLimitOrders.bind(this);
        this.CreateSpotMarketOrder = this.CreateSpotMarketOrder.bind(this);
        this.CancelSpotOrder = this.CancelSpotOrder.bind(this);
        this.BatchCancelSpotOrders = this.BatchCancelSpotOrders.bind(this);
        this.BatchUpdateOrders = this.BatchUpdateOrders.bind(this);
        this.PrivilegedExecuteContract = this.PrivilegedExecuteContract.bind(this);
        this.CreateDerivativeLimitOrder = this.CreateDerivativeLimitOrder.bind(this);
        this.BatchCreateDerivativeLimitOrders = this.BatchCreateDerivativeLimitOrders.bind(this);
        this.CreateDerivativeMarketOrder = this.CreateDerivativeMarketOrder.bind(this);
        this.CancelDerivativeOrder = this.CancelDerivativeOrder.bind(this);
        this.BatchCancelDerivativeOrders = this.BatchCancelDerivativeOrders.bind(this);
        this.InstantBinaryOptionsMarketLaunch = this.InstantBinaryOptionsMarketLaunch.bind(this);
        this.CreateBinaryOptionsLimitOrder = this.CreateBinaryOptionsLimitOrder.bind(this);
        this.CreateBinaryOptionsMarketOrder = this.CreateBinaryOptionsMarketOrder.bind(this);
        this.CancelBinaryOptionsOrder = this.CancelBinaryOptionsOrder.bind(this);
        this.BatchCancelBinaryOptionsOrders = this.BatchCancelBinaryOptionsOrders.bind(this);
        this.SubaccountTransfer = this.SubaccountTransfer.bind(this);
        this.ExternalTransfer = this.ExternalTransfer.bind(this);
        this.LiquidatePosition = this.LiquidatePosition.bind(this);
        this.IncreasePositionMargin = this.IncreasePositionMargin.bind(this);
        this.RewardsOptOut = this.RewardsOptOut.bind(this);
        this.AdminUpdateBinaryOptionsMarket = this.AdminUpdateBinaryOptionsMarket.bind(this);
        this.ReclaimLockedFunds = this.ReclaimLockedFunds.bind(this);
        this.UpdateParams = this.UpdateParams.bind(this);
    }
    Deposit(request, metadata) {
        return this.rpc.unary(MsgDepositDesc, MsgDeposit.fromPartial(request), metadata);
    }
    Withdraw(request, metadata) {
        return this.rpc.unary(MsgWithdrawDesc, MsgWithdraw.fromPartial(request), metadata);
    }
    InstantSpotMarketLaunch(request, metadata) {
        return this.rpc.unary(MsgInstantSpotMarketLaunchDesc, MsgInstantSpotMarketLaunch.fromPartial(request), metadata);
    }
    InstantPerpetualMarketLaunch(request, metadata) {
        return this.rpc.unary(MsgInstantPerpetualMarketLaunchDesc, MsgInstantPerpetualMarketLaunch.fromPartial(request), metadata);
    }
    InstantExpiryFuturesMarketLaunch(request, metadata) {
        return this.rpc.unary(MsgInstantExpiryFuturesMarketLaunchDesc, MsgInstantExpiryFuturesMarketLaunch.fromPartial(request), metadata);
    }
    CreateSpotLimitOrder(request, metadata) {
        return this.rpc.unary(MsgCreateSpotLimitOrderDesc, MsgCreateSpotLimitOrder.fromPartial(request), metadata);
    }
    BatchCreateSpotLimitOrders(request, metadata) {
        return this.rpc.unary(MsgBatchCreateSpotLimitOrdersDesc, MsgBatchCreateSpotLimitOrders.fromPartial(request), metadata);
    }
    CreateSpotMarketOrder(request, metadata) {
        return this.rpc.unary(MsgCreateSpotMarketOrderDesc, MsgCreateSpotMarketOrder.fromPartial(request), metadata);
    }
    CancelSpotOrder(request, metadata) {
        return this.rpc.unary(MsgCancelSpotOrderDesc, MsgCancelSpotOrder.fromPartial(request), metadata);
    }
    BatchCancelSpotOrders(request, metadata) {
        return this.rpc.unary(MsgBatchCancelSpotOrdersDesc, MsgBatchCancelSpotOrders.fromPartial(request), metadata);
    }
    BatchUpdateOrders(request, metadata) {
        return this.rpc.unary(MsgBatchUpdateOrdersDesc, MsgBatchUpdateOrders.fromPartial(request), metadata);
    }
    PrivilegedExecuteContract(request, metadata) {
        return this.rpc.unary(MsgPrivilegedExecuteContractDesc, MsgPrivilegedExecuteContract.fromPartial(request), metadata);
    }
    CreateDerivativeLimitOrder(request, metadata) {
        return this.rpc.unary(MsgCreateDerivativeLimitOrderDesc, MsgCreateDerivativeLimitOrder.fromPartial(request), metadata);
    }
    BatchCreateDerivativeLimitOrders(request, metadata) {
        return this.rpc.unary(MsgBatchCreateDerivativeLimitOrdersDesc, MsgBatchCreateDerivativeLimitOrders.fromPartial(request), metadata);
    }
    CreateDerivativeMarketOrder(request, metadata) {
        return this.rpc.unary(MsgCreateDerivativeMarketOrderDesc, MsgCreateDerivativeMarketOrder.fromPartial(request), metadata);
    }
    CancelDerivativeOrder(request, metadata) {
        return this.rpc.unary(MsgCancelDerivativeOrderDesc, MsgCancelDerivativeOrder.fromPartial(request), metadata);
    }
    BatchCancelDerivativeOrders(request, metadata) {
        return this.rpc.unary(MsgBatchCancelDerivativeOrdersDesc, MsgBatchCancelDerivativeOrders.fromPartial(request), metadata);
    }
    InstantBinaryOptionsMarketLaunch(request, metadata) {
        return this.rpc.unary(MsgInstantBinaryOptionsMarketLaunchDesc, MsgInstantBinaryOptionsMarketLaunch.fromPartial(request), metadata);
    }
    CreateBinaryOptionsLimitOrder(request, metadata) {
        return this.rpc.unary(MsgCreateBinaryOptionsLimitOrderDesc, MsgCreateBinaryOptionsLimitOrder.fromPartial(request), metadata);
    }
    CreateBinaryOptionsMarketOrder(request, metadata) {
        return this.rpc.unary(MsgCreateBinaryOptionsMarketOrderDesc, MsgCreateBinaryOptionsMarketOrder.fromPartial(request), metadata);
    }
    CancelBinaryOptionsOrder(request, metadata) {
        return this.rpc.unary(MsgCancelBinaryOptionsOrderDesc, MsgCancelBinaryOptionsOrder.fromPartial(request), metadata);
    }
    BatchCancelBinaryOptionsOrders(request, metadata) {
        return this.rpc.unary(MsgBatchCancelBinaryOptionsOrdersDesc, MsgBatchCancelBinaryOptionsOrders.fromPartial(request), metadata);
    }
    SubaccountTransfer(request, metadata) {
        return this.rpc.unary(MsgSubaccountTransferDesc, MsgSubaccountTransfer.fromPartial(request), metadata);
    }
    ExternalTransfer(request, metadata) {
        return this.rpc.unary(MsgExternalTransferDesc, MsgExternalTransfer.fromPartial(request), metadata);
    }
    LiquidatePosition(request, metadata) {
        return this.rpc.unary(MsgLiquidatePositionDesc, MsgLiquidatePosition.fromPartial(request), metadata);
    }
    IncreasePositionMargin(request, metadata) {
        return this.rpc.unary(MsgIncreasePositionMarginDesc, MsgIncreasePositionMargin.fromPartial(request), metadata);
    }
    RewardsOptOut(request, metadata) {
        return this.rpc.unary(MsgRewardsOptOutDesc, MsgRewardsOptOut.fromPartial(request), metadata);
    }
    AdminUpdateBinaryOptionsMarket(request, metadata) {
        return this.rpc.unary(MsgAdminUpdateBinaryOptionsMarketDesc, MsgAdminUpdateBinaryOptionsMarket.fromPartial(request), metadata);
    }
    ReclaimLockedFunds(request, metadata) {
        return this.rpc.unary(MsgReclaimLockedFundsDesc, MsgReclaimLockedFunds.fromPartial(request), metadata);
    }
    UpdateParams(request, metadata) {
        return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request), metadata);
    }
}
export const MsgDesc = { serviceName: "injective.exchange.v1beta1.Msg" };
export const MsgDepositDesc = {
    methodName: "Deposit",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgDeposit.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgDepositResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgWithdrawDesc = {
    methodName: "Withdraw",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgWithdraw.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgWithdrawResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgInstantSpotMarketLaunchDesc = {
    methodName: "InstantSpotMarketLaunch",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgInstantSpotMarketLaunch.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgInstantSpotMarketLaunchResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgInstantPerpetualMarketLaunchDesc = {
    methodName: "InstantPerpetualMarketLaunch",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgInstantPerpetualMarketLaunch.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgInstantPerpetualMarketLaunchResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgInstantExpiryFuturesMarketLaunchDesc = {
    methodName: "InstantExpiryFuturesMarketLaunch",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgInstantExpiryFuturesMarketLaunch.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgInstantExpiryFuturesMarketLaunchResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgCreateSpotLimitOrderDesc = {
    methodName: "CreateSpotLimitOrder",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgCreateSpotLimitOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgCreateSpotLimitOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgBatchCreateSpotLimitOrdersDesc = {
    methodName: "BatchCreateSpotLimitOrders",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgBatchCreateSpotLimitOrders.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgBatchCreateSpotLimitOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgCreateSpotMarketOrderDesc = {
    methodName: "CreateSpotMarketOrder",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgCreateSpotMarketOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgCreateSpotMarketOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgCancelSpotOrderDesc = {
    methodName: "CancelSpotOrder",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgCancelSpotOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgCancelSpotOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgBatchCancelSpotOrdersDesc = {
    methodName: "BatchCancelSpotOrders",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgBatchCancelSpotOrders.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgBatchCancelSpotOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgBatchUpdateOrdersDesc = {
    methodName: "BatchUpdateOrders",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgBatchUpdateOrders.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgBatchUpdateOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgPrivilegedExecuteContractDesc = {
    methodName: "PrivilegedExecuteContract",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgPrivilegedExecuteContract.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgPrivilegedExecuteContractResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgCreateDerivativeLimitOrderDesc = {
    methodName: "CreateDerivativeLimitOrder",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgCreateDerivativeLimitOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgCreateDerivativeLimitOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgBatchCreateDerivativeLimitOrdersDesc = {
    methodName: "BatchCreateDerivativeLimitOrders",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgBatchCreateDerivativeLimitOrders.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgBatchCreateDerivativeLimitOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgCreateDerivativeMarketOrderDesc = {
    methodName: "CreateDerivativeMarketOrder",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgCreateDerivativeMarketOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgCreateDerivativeMarketOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgCancelDerivativeOrderDesc = {
    methodName: "CancelDerivativeOrder",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgCancelDerivativeOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgCancelDerivativeOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgBatchCancelDerivativeOrdersDesc = {
    methodName: "BatchCancelDerivativeOrders",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgBatchCancelDerivativeOrders.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgBatchCancelDerivativeOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgInstantBinaryOptionsMarketLaunchDesc = {
    methodName: "InstantBinaryOptionsMarketLaunch",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgInstantBinaryOptionsMarketLaunch.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgInstantBinaryOptionsMarketLaunchResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgCreateBinaryOptionsLimitOrderDesc = {
    methodName: "CreateBinaryOptionsLimitOrder",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgCreateBinaryOptionsLimitOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgCreateBinaryOptionsLimitOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgCreateBinaryOptionsMarketOrderDesc = {
    methodName: "CreateBinaryOptionsMarketOrder",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgCreateBinaryOptionsMarketOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgCreateBinaryOptionsMarketOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgCancelBinaryOptionsOrderDesc = {
    methodName: "CancelBinaryOptionsOrder",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgCancelBinaryOptionsOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgCancelBinaryOptionsOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgBatchCancelBinaryOptionsOrdersDesc = {
    methodName: "BatchCancelBinaryOptionsOrders",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgBatchCancelBinaryOptionsOrders.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgBatchCancelBinaryOptionsOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgSubaccountTransferDesc = {
    methodName: "SubaccountTransfer",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgSubaccountTransfer.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgSubaccountTransferResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgExternalTransferDesc = {
    methodName: "ExternalTransfer",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgExternalTransfer.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgExternalTransferResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgLiquidatePositionDesc = {
    methodName: "LiquidatePosition",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgLiquidatePosition.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgLiquidatePositionResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgIncreasePositionMarginDesc = {
    methodName: "IncreasePositionMargin",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgIncreasePositionMargin.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgIncreasePositionMarginResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgRewardsOptOutDesc = {
    methodName: "RewardsOptOut",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgRewardsOptOut.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgRewardsOptOutResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgAdminUpdateBinaryOptionsMarketDesc = {
    methodName: "AdminUpdateBinaryOptionsMarket",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgAdminUpdateBinaryOptionsMarket.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgAdminUpdateBinaryOptionsMarketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgReclaimLockedFundsDesc = {
    methodName: "ReclaimLockedFunds",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgReclaimLockedFunds.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgReclaimLockedFundsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgUpdateParamsDesc = {
    methodName: "UpdateParams",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgUpdateParams.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgUpdateParamsResponse.decode(data);
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
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function longToString(long) {
    return long.toString();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
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
