"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgBatchCancelDerivativeOrdersResponse = exports.MsgBatchCancelDerivativeOrders = exports.OrderData = exports.MsgCancelBinaryOptionsOrderResponse = exports.MsgCancelBinaryOptionsOrder = exports.MsgCancelDerivativeOrderResponse = exports.MsgCancelDerivativeOrder = exports.MsgCreateBinaryOptionsMarketOrderResponse = exports.MsgCreateBinaryOptionsMarketOrder = exports.DerivativeMarketOrderResults = exports.MsgCreateDerivativeMarketOrderResponse = exports.MsgCreateDerivativeMarketOrder = exports.MsgBatchUpdateOrdersResponse = exports.MsgBatchUpdateOrders = exports.MsgBatchCancelBinaryOptionsOrdersResponse = exports.MsgBatchCancelBinaryOptionsOrders = exports.MsgBatchCancelSpotOrdersResponse = exports.MsgBatchCancelSpotOrders = exports.MsgCancelSpotOrderResponse = exports.MsgCancelSpotOrder = exports.MsgBatchCreateDerivativeLimitOrdersResponse = exports.MsgBatchCreateDerivativeLimitOrders = exports.MsgCreateBinaryOptionsLimitOrderResponse = exports.MsgCreateBinaryOptionsLimitOrder = exports.MsgCreateDerivativeLimitOrderResponse = exports.MsgCreateDerivativeLimitOrder = exports.SpotMarketOrderResults = exports.MsgCreateSpotMarketOrderResponse = exports.MsgCreateSpotMarketOrder = exports.MsgInstantExpiryFuturesMarketLaunchResponse = exports.MsgInstantExpiryFuturesMarketLaunch = exports.MsgInstantBinaryOptionsMarketLaunchResponse = exports.MsgInstantBinaryOptionsMarketLaunch = exports.MsgInstantPerpetualMarketLaunchResponse = exports.MsgInstantPerpetualMarketLaunch = exports.MsgInstantSpotMarketLaunchResponse = exports.MsgInstantSpotMarketLaunch = exports.MsgBatchCreateSpotLimitOrdersResponse = exports.MsgBatchCreateSpotLimitOrders = exports.MsgCreateSpotLimitOrderResponse = exports.MsgCreateSpotLimitOrder = exports.MsgWithdrawResponse = exports.MsgWithdraw = exports.MsgDepositResponse = exports.MsgDeposit = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.exchangeTypeToJSON = exports.exchangeTypeFromJSON = exports.ExchangeType = void 0;
exports.MsgBatchCancelSpotOrdersDesc = exports.MsgCancelSpotOrderDesc = exports.MsgCreateSpotMarketOrderDesc = exports.MsgBatchCreateSpotLimitOrdersDesc = exports.MsgCreateSpotLimitOrderDesc = exports.MsgInstantExpiryFuturesMarketLaunchDesc = exports.MsgInstantPerpetualMarketLaunchDesc = exports.MsgInstantSpotMarketLaunchDesc = exports.MsgWithdrawDesc = exports.MsgDepositDesc = exports.MsgDesc = exports.MsgClientImpl = exports.AtomicMarketOrderFeeMultiplierScheduleProposal = exports.MsgAdminUpdateBinaryOptionsMarketResponse = exports.MsgAdminUpdateBinaryOptionsMarket = exports.MsgSignDoc = exports.MsgSignData = exports.MsgReclaimLockedFundsResponse = exports.MsgReclaimLockedFunds = exports.MsgRewardsOptOutResponse = exports.MsgRewardsOptOut = exports.BatchCommunityPoolSpendProposal = exports.FeeDiscountProposal = exports.TradingRewardPendingPointsUpdateProposal = exports.RewardPointUpdate = exports.TradingRewardCampaignUpdateProposal = exports.TradingRewardCampaignLaunchProposal = exports.OracleParams = exports.ProviderOracleParams = exports.BinaryOptionsMarketParamUpdateProposal = exports.UpdateDenomDecimalsProposal = exports.MarketForcedSettlementProposal = exports.DerivativeMarketParamUpdateProposal = exports.ExpiryFuturesMarketLaunchProposal = exports.BinaryOptionsMarketLaunchProposal = exports.PerpetualMarketLaunchProposal = exports.SpotMarketLaunchProposal = exports.BatchExchangeModificationProposal = exports.ExchangeEnableProposal = exports.SpotMarketParamUpdateProposal = exports.MsgPrivilegedExecuteContractResponse = exports.MsgPrivilegedExecuteContract = exports.MsgIncreasePositionMarginResponse = exports.MsgIncreasePositionMargin = exports.MsgLiquidatePositionResponse = exports.MsgLiquidatePosition = exports.MsgExternalTransferResponse = exports.MsgExternalTransfer = exports.MsgSubaccountTransferResponse = exports.MsgSubaccountTransfer = void 0;
exports.GrpcWebError = exports.GrpcWebImpl = exports.MsgUpdateParamsDesc = exports.MsgReclaimLockedFundsDesc = exports.MsgAdminUpdateBinaryOptionsMarketDesc = exports.MsgRewardsOptOutDesc = exports.MsgIncreasePositionMarginDesc = exports.MsgLiquidatePositionDesc = exports.MsgExternalTransferDesc = exports.MsgSubaccountTransferDesc = exports.MsgBatchCancelBinaryOptionsOrdersDesc = exports.MsgCancelBinaryOptionsOrderDesc = exports.MsgCreateBinaryOptionsMarketOrderDesc = exports.MsgCreateBinaryOptionsLimitOrderDesc = exports.MsgInstantBinaryOptionsMarketLaunchDesc = exports.MsgBatchCancelDerivativeOrdersDesc = exports.MsgCancelDerivativeOrderDesc = exports.MsgCreateDerivativeMarketOrderDesc = exports.MsgBatchCreateDerivativeLimitOrdersDesc = exports.MsgCreateDerivativeLimitOrderDesc = exports.MsgPrivilegedExecuteContractDesc = exports.MsgBatchUpdateOrdersDesc = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const distribution_1 = require("../../../cosmos/distribution/v1beta1/distribution");
const oracle_1 = require("../../oracle/v1beta1/oracle");
const exchange_1 = require("./exchange");
var ExchangeType;
(function (ExchangeType) {
    ExchangeType[ExchangeType["EXCHANGE_UNSPECIFIED"] = 0] = "EXCHANGE_UNSPECIFIED";
    ExchangeType[ExchangeType["SPOT"] = 1] = "SPOT";
    ExchangeType[ExchangeType["DERIVATIVES"] = 2] = "DERIVATIVES";
    ExchangeType[ExchangeType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ExchangeType = exports.ExchangeType || (exports.ExchangeType = {}));
function exchangeTypeFromJSON(object) {
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
exports.exchangeTypeFromJSON = exchangeTypeFromJSON;
function exchangeTypeToJSON(object) {
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
exports.exchangeTypeToJSON = exchangeTypeToJSON;
function createBaseMsgUpdateParams() {
    return { authority: "", params: undefined };
}
exports.MsgUpdateParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            exchange_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return {
            authority: isSet(object.authority) ? String(object.authority) : "",
            params: isSet(object.params) ? exchange_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? exchange_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgUpdateParams.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgUpdateParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = (object.params !== undefined && object.params !== null)
            ? exchange_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgUpdateParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};
function createBaseMsgDeposit() {
    return { sender: "", subaccountId: "", amount: undefined };
}
exports.MsgDeposit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
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
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgDeposit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgDeposit();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? coin_1.Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgDepositResponse() {
    return {};
}
exports.MsgDepositResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgDepositResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgDepositResponse();
        return message;
    },
};
function createBaseMsgWithdraw() {
    return { sender: "", subaccountId: "", amount: undefined };
}
exports.MsgWithdraw = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
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
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgWithdraw.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgWithdraw();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? coin_1.Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgWithdrawResponse() {
    return {};
}
exports.MsgWithdrawResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgWithdrawResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawResponse();
        return message;
    },
};
function createBaseMsgCreateSpotLimitOrder() {
    return { sender: "", order: undefined };
}
exports.MsgCreateSpotLimitOrder = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            exchange_1.SpotOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.order = exchange_1.SpotOrder.decode(reader, reader.uint32());
                    continue;
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
            order: isSet(object.order) ? exchange_1.SpotOrder.fromJSON(object.order) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.order !== undefined && (obj.order = message.order ? exchange_1.SpotOrder.toJSON(message.order) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgCreateSpotLimitOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateSpotLimitOrder();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.order = (object.order !== undefined && object.order !== null)
            ? exchange_1.SpotOrder.fromPartial(object.order)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateSpotLimitOrderResponse() {
    return { orderHash: "" };
}
exports.MsgCreateSpotLimitOrderResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgCreateSpotLimitOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgBatchCreateSpotLimitOrders = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.orders) {
            exchange_1.SpotOrder.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.orders.push(exchange_1.SpotOrder.decode(reader, reader.uint32()));
                    continue;
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
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => exchange_1.SpotOrder.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? exchange_1.SpotOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgBatchCreateSpotLimitOrders.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgBatchCreateSpotLimitOrders();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.orders = ((_b = object.orders) === null || _b === void 0 ? void 0 : _b.map((e) => exchange_1.SpotOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgBatchCreateSpotLimitOrdersResponse() {
    return { orderHashes: [] };
}
exports.MsgBatchCreateSpotLimitOrdersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.orderHashes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgBatchCreateSpotLimitOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgInstantSpotMarketLaunch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgInstantSpotMarketLaunch.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgInstantSpotMarketLaunchResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgInstantSpotMarketLaunchResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgInstantPerpetualMarketLaunch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
            oracleType: isSet(object.oracleType) ? (0, oracle_1.oracleTypeFromJSON)(object.oracleType) : 0,
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
        message.oracleType !== undefined && (obj.oracleType = (0, oracle_1.oracleTypeToJSON)(message.oracleType));
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.initialMarginRatio !== undefined && (obj.initialMarginRatio = message.initialMarginRatio);
        message.maintenanceMarginRatio !== undefined && (obj.maintenanceMarginRatio = message.maintenanceMarginRatio);
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        return obj;
    },
    create(base) {
        return exports.MsgInstantPerpetualMarketLaunch.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgInstantPerpetualMarketLaunchResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgInstantPerpetualMarketLaunchResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgInstantBinaryOptionsMarketLaunch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
            oracleType: isSet(object.oracleType) ? (0, oracle_1.oracleTypeFromJSON)(object.oracleType) : 0,
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
        message.oracleType !== undefined && (obj.oracleType = (0, oracle_1.oracleTypeToJSON)(message.oracleType));
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
        return exports.MsgInstantBinaryOptionsMarketLaunch.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgInstantBinaryOptionsMarketLaunchResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgInstantBinaryOptionsMarketLaunchResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgInstantExpiryFuturesMarketLaunch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
            oracleType: isSet(object.oracleType) ? (0, oracle_1.oracleTypeFromJSON)(object.oracleType) : 0,
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
        message.oracleType !== undefined && (obj.oracleType = (0, oracle_1.oracleTypeToJSON)(message.oracleType));
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
        return exports.MsgInstantExpiryFuturesMarketLaunch.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgInstantExpiryFuturesMarketLaunchResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgInstantExpiryFuturesMarketLaunchResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgInstantExpiryFuturesMarketLaunchResponse();
        return message;
    },
};
function createBaseMsgCreateSpotMarketOrder() {
    return { sender: "", order: undefined };
}
exports.MsgCreateSpotMarketOrder = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            exchange_1.SpotOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.order = exchange_1.SpotOrder.decode(reader, reader.uint32());
                    continue;
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
            order: isSet(object.order) ? exchange_1.SpotOrder.fromJSON(object.order) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.order !== undefined && (obj.order = message.order ? exchange_1.SpotOrder.toJSON(message.order) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgCreateSpotMarketOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateSpotMarketOrder();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.order = (object.order !== undefined && object.order !== null)
            ? exchange_1.SpotOrder.fromPartial(object.order)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateSpotMarketOrderResponse() {
    return { orderHash: "", results: undefined };
}
exports.MsgCreateSpotMarketOrderResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        if (message.results !== undefined) {
            exports.SpotMarketOrderResults.encode(message.results, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.results = exports.SpotMarketOrderResults.decode(reader, reader.uint32());
                    continue;
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
            results: isSet(object.results) ? exports.SpotMarketOrderResults.fromJSON(object.results) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        message.results !== undefined &&
            (obj.results = message.results ? exports.SpotMarketOrderResults.toJSON(message.results) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgCreateSpotMarketOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateSpotMarketOrderResponse();
        message.orderHash = (_a = object.orderHash) !== null && _a !== void 0 ? _a : "";
        message.results = (object.results !== undefined && object.results !== null)
            ? exports.SpotMarketOrderResults.fromPartial(object.results)
            : undefined;
        return message;
    },
};
function createBaseSpotMarketOrderResults() {
    return { quantity: "", price: "", fee: "" };
}
exports.SpotMarketOrderResults = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.SpotMarketOrderResults.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgCreateDerivativeLimitOrder = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            exchange_1.DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.order = exchange_1.DerivativeOrder.decode(reader, reader.uint32());
                    continue;
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
            order: isSet(object.order) ? exchange_1.DerivativeOrder.fromJSON(object.order) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.order !== undefined && (obj.order = message.order ? exchange_1.DerivativeOrder.toJSON(message.order) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgCreateDerivativeLimitOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateDerivativeLimitOrder();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.order = (object.order !== undefined && object.order !== null)
            ? exchange_1.DerivativeOrder.fromPartial(object.order)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateDerivativeLimitOrderResponse() {
    return { orderHash: "" };
}
exports.MsgCreateDerivativeLimitOrderResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgCreateDerivativeLimitOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgCreateBinaryOptionsLimitOrder = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            exchange_1.DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.order = exchange_1.DerivativeOrder.decode(reader, reader.uint32());
                    continue;
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
            order: isSet(object.order) ? exchange_1.DerivativeOrder.fromJSON(object.order) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.order !== undefined && (obj.order = message.order ? exchange_1.DerivativeOrder.toJSON(message.order) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgCreateBinaryOptionsLimitOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateBinaryOptionsLimitOrder();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.order = (object.order !== undefined && object.order !== null)
            ? exchange_1.DerivativeOrder.fromPartial(object.order)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateBinaryOptionsLimitOrderResponse() {
    return { orderHash: "" };
}
exports.MsgCreateBinaryOptionsLimitOrderResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgCreateBinaryOptionsLimitOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgBatchCreateDerivativeLimitOrders = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.orders) {
            exchange_1.DerivativeOrder.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.orders.push(exchange_1.DerivativeOrder.decode(reader, reader.uint32()));
                    continue;
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
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => exchange_1.DerivativeOrder.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? exchange_1.DerivativeOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgBatchCreateDerivativeLimitOrders.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgBatchCreateDerivativeLimitOrders();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.orders = ((_b = object.orders) === null || _b === void 0 ? void 0 : _b.map((e) => exchange_1.DerivativeOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgBatchCreateDerivativeLimitOrdersResponse() {
    return { orderHashes: [] };
}
exports.MsgBatchCreateDerivativeLimitOrdersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.orderHashes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgBatchCreateDerivativeLimitOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgCancelSpotOrder = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgCancelSpotOrder.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgCancelSpotOrderResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgCancelSpotOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCancelSpotOrderResponse();
        return message;
    },
};
function createBaseMsgBatchCancelSpotOrders() {
    return { sender: "", data: [] };
}
exports.MsgBatchCancelSpotOrders = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.data) {
            exports.OrderData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.data.push(exports.OrderData.decode(reader, reader.uint32()));
                    continue;
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
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => exports.OrderData.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.data) {
            obj.data = message.data.map((e) => e ? exports.OrderData.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgBatchCancelSpotOrders.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgBatchCancelSpotOrders();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.data = ((_b = object.data) === null || _b === void 0 ? void 0 : _b.map((e) => exports.OrderData.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgBatchCancelSpotOrdersResponse() {
    return { success: [] };
}
exports.MsgBatchCancelSpotOrdersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.success) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgBatchCancelSpotOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgBatchCancelBinaryOptionsOrders = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.data) {
            exports.OrderData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.data.push(exports.OrderData.decode(reader, reader.uint32()));
                    continue;
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
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => exports.OrderData.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.data) {
            obj.data = message.data.map((e) => e ? exports.OrderData.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgBatchCancelBinaryOptionsOrders.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgBatchCancelBinaryOptionsOrders();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.data = ((_b = object.data) === null || _b === void 0 ? void 0 : _b.map((e) => exports.OrderData.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgBatchCancelBinaryOptionsOrdersResponse() {
    return { success: [] };
}
exports.MsgBatchCancelBinaryOptionsOrdersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.success) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgBatchCancelBinaryOptionsOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgBatchUpdateOrders = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            exports.OrderData.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.derivativeOrdersToCancel) {
            exports.OrderData.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.spotOrdersToCreate) {
            exchange_1.SpotOrder.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.derivativeOrdersToCreate) {
            exchange_1.DerivativeOrder.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.binaryOptionsOrdersToCancel) {
            exports.OrderData.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.binaryOptionsMarketIdsToCancelAll) {
            writer.uint32(82).string(v);
        }
        for (const v of message.binaryOptionsOrdersToCreate) {
            exchange_1.DerivativeOrder.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.spotOrdersToCancel.push(exports.OrderData.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.derivativeOrdersToCancel.push(exports.OrderData.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.spotOrdersToCreate.push(exchange_1.SpotOrder.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.derivativeOrdersToCreate.push(exchange_1.DerivativeOrder.decode(reader, reader.uint32()));
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.binaryOptionsOrdersToCancel.push(exports.OrderData.decode(reader, reader.uint32()));
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
                    message.binaryOptionsOrdersToCreate.push(exchange_1.DerivativeOrder.decode(reader, reader.uint32()));
                    continue;
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
                ? object.spotOrdersToCancel.map((e) => exports.OrderData.fromJSON(e))
                : [],
            derivativeOrdersToCancel: Array.isArray(object === null || object === void 0 ? void 0 : object.derivativeOrdersToCancel)
                ? object.derivativeOrdersToCancel.map((e) => exports.OrderData.fromJSON(e))
                : [],
            spotOrdersToCreate: Array.isArray(object === null || object === void 0 ? void 0 : object.spotOrdersToCreate)
                ? object.spotOrdersToCreate.map((e) => exchange_1.SpotOrder.fromJSON(e))
                : [],
            derivativeOrdersToCreate: Array.isArray(object === null || object === void 0 ? void 0 : object.derivativeOrdersToCreate)
                ? object.derivativeOrdersToCreate.map((e) => exchange_1.DerivativeOrder.fromJSON(e))
                : [],
            binaryOptionsOrdersToCancel: Array.isArray(object === null || object === void 0 ? void 0 : object.binaryOptionsOrdersToCancel)
                ? object.binaryOptionsOrdersToCancel.map((e) => exports.OrderData.fromJSON(e))
                : [],
            binaryOptionsMarketIdsToCancelAll: Array.isArray(object === null || object === void 0 ? void 0 : object.binaryOptionsMarketIdsToCancelAll)
                ? object.binaryOptionsMarketIdsToCancelAll.map((e) => String(e))
                : [],
            binaryOptionsOrdersToCreate: Array.isArray(object === null || object === void 0 ? void 0 : object.binaryOptionsOrdersToCreate)
                ? object.binaryOptionsOrdersToCreate.map((e) => exchange_1.DerivativeOrder.fromJSON(e))
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
            obj.spotOrdersToCancel = message.spotOrdersToCancel.map((e) => e ? exports.OrderData.toJSON(e) : undefined);
        }
        else {
            obj.spotOrdersToCancel = [];
        }
        if (message.derivativeOrdersToCancel) {
            obj.derivativeOrdersToCancel = message.derivativeOrdersToCancel.map((e) => e ? exports.OrderData.toJSON(e) : undefined);
        }
        else {
            obj.derivativeOrdersToCancel = [];
        }
        if (message.spotOrdersToCreate) {
            obj.spotOrdersToCreate = message.spotOrdersToCreate.map((e) => e ? exchange_1.SpotOrder.toJSON(e) : undefined);
        }
        else {
            obj.spotOrdersToCreate = [];
        }
        if (message.derivativeOrdersToCreate) {
            obj.derivativeOrdersToCreate = message.derivativeOrdersToCreate.map((e) => e ? exchange_1.DerivativeOrder.toJSON(e) : undefined);
        }
        else {
            obj.derivativeOrdersToCreate = [];
        }
        if (message.binaryOptionsOrdersToCancel) {
            obj.binaryOptionsOrdersToCancel = message.binaryOptionsOrdersToCancel.map((e) => e ? exports.OrderData.toJSON(e) : undefined);
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
            obj.binaryOptionsOrdersToCreate = message.binaryOptionsOrdersToCreate.map((e) => e ? exchange_1.DerivativeOrder.toJSON(e) : undefined);
        }
        else {
            obj.binaryOptionsOrdersToCreate = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgBatchUpdateOrders.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseMsgBatchUpdateOrders();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.spotMarketIdsToCancelAll = ((_c = object.spotMarketIdsToCancelAll) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.derivativeMarketIdsToCancelAll = ((_d = object.derivativeMarketIdsToCancelAll) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.spotOrdersToCancel = ((_e = object.spotOrdersToCancel) === null || _e === void 0 ? void 0 : _e.map((e) => exports.OrderData.fromPartial(e))) || [];
        message.derivativeOrdersToCancel = ((_f = object.derivativeOrdersToCancel) === null || _f === void 0 ? void 0 : _f.map((e) => exports.OrderData.fromPartial(e))) || [];
        message.spotOrdersToCreate = ((_g = object.spotOrdersToCreate) === null || _g === void 0 ? void 0 : _g.map((e) => exchange_1.SpotOrder.fromPartial(e))) || [];
        message.derivativeOrdersToCreate = ((_h = object.derivativeOrdersToCreate) === null || _h === void 0 ? void 0 : _h.map((e) => exchange_1.DerivativeOrder.fromPartial(e))) ||
            [];
        message.binaryOptionsOrdersToCancel = ((_j = object.binaryOptionsOrdersToCancel) === null || _j === void 0 ? void 0 : _j.map((e) => exports.OrderData.fromPartial(e))) ||
            [];
        message.binaryOptionsMarketIdsToCancelAll = ((_k = object.binaryOptionsMarketIdsToCancelAll) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.binaryOptionsOrdersToCreate =
            ((_l = object.binaryOptionsOrdersToCreate) === null || _l === void 0 ? void 0 : _l.map((e) => exchange_1.DerivativeOrder.fromPartial(e))) || [];
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
exports.MsgBatchUpdateOrdersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgBatchUpdateOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgCreateDerivativeMarketOrder = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            exchange_1.DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.order = exchange_1.DerivativeOrder.decode(reader, reader.uint32());
                    continue;
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
            order: isSet(object.order) ? exchange_1.DerivativeOrder.fromJSON(object.order) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.order !== undefined && (obj.order = message.order ? exchange_1.DerivativeOrder.toJSON(message.order) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgCreateDerivativeMarketOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateDerivativeMarketOrder();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.order = (object.order !== undefined && object.order !== null)
            ? exchange_1.DerivativeOrder.fromPartial(object.order)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateDerivativeMarketOrderResponse() {
    return { orderHash: "", results: undefined };
}
exports.MsgCreateDerivativeMarketOrderResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        if (message.results !== undefined) {
            exports.DerivativeMarketOrderResults.encode(message.results, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.results = exports.DerivativeMarketOrderResults.decode(reader, reader.uint32());
                    continue;
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
            results: isSet(object.results) ? exports.DerivativeMarketOrderResults.fromJSON(object.results) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        message.results !== undefined &&
            (obj.results = message.results ? exports.DerivativeMarketOrderResults.toJSON(message.results) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgCreateDerivativeMarketOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateDerivativeMarketOrderResponse();
        message.orderHash = (_a = object.orderHash) !== null && _a !== void 0 ? _a : "";
        message.results = (object.results !== undefined && object.results !== null)
            ? exports.DerivativeMarketOrderResults.fromPartial(object.results)
            : undefined;
        return message;
    },
};
function createBaseDerivativeMarketOrderResults() {
    return { quantity: "", price: "", fee: "", positionDelta: undefined, payout: "" };
}
exports.DerivativeMarketOrderResults = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            exchange_1.PositionDelta.encode(message.positionDelta, writer.uint32(34).fork()).ldelim();
        }
        if (message.payout !== "") {
            writer.uint32(42).string(message.payout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.positionDelta = exchange_1.PositionDelta.decode(reader, reader.uint32());
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
            positionDelta: isSet(object.positionDelta) ? exchange_1.PositionDelta.fromJSON(object.positionDelta) : undefined,
            payout: isSet(object.payout) ? String(object.payout) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.price !== undefined && (obj.price = message.price);
        message.fee !== undefined && (obj.fee = message.fee);
        message.positionDelta !== undefined &&
            (obj.positionDelta = message.positionDelta ? exchange_1.PositionDelta.toJSON(message.positionDelta) : undefined);
        message.payout !== undefined && (obj.payout = message.payout);
        return obj;
    },
    create(base) {
        return exports.DerivativeMarketOrderResults.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseDerivativeMarketOrderResults();
        message.quantity = (_a = object.quantity) !== null && _a !== void 0 ? _a : "";
        message.price = (_b = object.price) !== null && _b !== void 0 ? _b : "";
        message.fee = (_c = object.fee) !== null && _c !== void 0 ? _c : "";
        message.positionDelta = (object.positionDelta !== undefined && object.positionDelta !== null)
            ? exchange_1.PositionDelta.fromPartial(object.positionDelta)
            : undefined;
        message.payout = (_d = object.payout) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgCreateBinaryOptionsMarketOrder() {
    return { sender: "", order: undefined };
}
exports.MsgCreateBinaryOptionsMarketOrder = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            exchange_1.DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.order = exchange_1.DerivativeOrder.decode(reader, reader.uint32());
                    continue;
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
            order: isSet(object.order) ? exchange_1.DerivativeOrder.fromJSON(object.order) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.order !== undefined && (obj.order = message.order ? exchange_1.DerivativeOrder.toJSON(message.order) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgCreateBinaryOptionsMarketOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateBinaryOptionsMarketOrder();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.order = (object.order !== undefined && object.order !== null)
            ? exchange_1.DerivativeOrder.fromPartial(object.order)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateBinaryOptionsMarketOrderResponse() {
    return { orderHash: "", results: undefined };
}
exports.MsgCreateBinaryOptionsMarketOrderResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        if (message.results !== undefined) {
            exports.DerivativeMarketOrderResults.encode(message.results, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.results = exports.DerivativeMarketOrderResults.decode(reader, reader.uint32());
                    continue;
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
            results: isSet(object.results) ? exports.DerivativeMarketOrderResults.fromJSON(object.results) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        message.results !== undefined &&
            (obj.results = message.results ? exports.DerivativeMarketOrderResults.toJSON(message.results) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgCreateBinaryOptionsMarketOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateBinaryOptionsMarketOrderResponse();
        message.orderHash = (_a = object.orderHash) !== null && _a !== void 0 ? _a : "";
        message.results = (object.results !== undefined && object.results !== null)
            ? exports.DerivativeMarketOrderResults.fromPartial(object.results)
            : undefined;
        return message;
    },
};
function createBaseMsgCancelDerivativeOrder() {
    return { sender: "", marketId: "", subaccountId: "", orderHash: "", orderMask: 0 };
}
exports.MsgCancelDerivativeOrder = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgCancelDerivativeOrder.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgCancelDerivativeOrderResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgCancelDerivativeOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCancelDerivativeOrderResponse();
        return message;
    },
};
function createBaseMsgCancelBinaryOptionsOrder() {
    return { sender: "", marketId: "", subaccountId: "", orderHash: "", orderMask: 0 };
}
exports.MsgCancelBinaryOptionsOrder = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgCancelBinaryOptionsOrder.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgCancelBinaryOptionsOrderResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgCancelBinaryOptionsOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCancelBinaryOptionsOrderResponse();
        return message;
    },
};
function createBaseOrderData() {
    return { marketId: "", subaccountId: "", orderHash: "", orderMask: 0 };
}
exports.OrderData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.OrderData.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgBatchCancelDerivativeOrders = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.data) {
            exports.OrderData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.data.push(exports.OrderData.decode(reader, reader.uint32()));
                    continue;
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
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => exports.OrderData.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.data) {
            obj.data = message.data.map((e) => e ? exports.OrderData.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgBatchCancelDerivativeOrders.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgBatchCancelDerivativeOrders();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.data = ((_b = object.data) === null || _b === void 0 ? void 0 : _b.map((e) => exports.OrderData.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgBatchCancelDerivativeOrdersResponse() {
    return { success: [] };
}
exports.MsgBatchCancelDerivativeOrdersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.success) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgBatchCancelDerivativeOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgSubaccountTransfer = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            coin_1.Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
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
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.sourceSubaccountId !== undefined && (obj.sourceSubaccountId = message.sourceSubaccountId);
        message.destinationSubaccountId !== undefined && (obj.destinationSubaccountId = message.destinationSubaccountId);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgSubaccountTransfer.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgSubaccountTransfer();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.sourceSubaccountId = (_b = object.sourceSubaccountId) !== null && _b !== void 0 ? _b : "";
        message.destinationSubaccountId = (_c = object.destinationSubaccountId) !== null && _c !== void 0 ? _c : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? coin_1.Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgSubaccountTransferResponse() {
    return {};
}
exports.MsgSubaccountTransferResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgSubaccountTransferResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgSubaccountTransferResponse();
        return message;
    },
};
function createBaseMsgExternalTransfer() {
    return { sender: "", sourceSubaccountId: "", destinationSubaccountId: "", amount: undefined };
}
exports.MsgExternalTransfer = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            coin_1.Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
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
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.sourceSubaccountId !== undefined && (obj.sourceSubaccountId = message.sourceSubaccountId);
        message.destinationSubaccountId !== undefined && (obj.destinationSubaccountId = message.destinationSubaccountId);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgExternalTransfer.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgExternalTransfer();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.sourceSubaccountId = (_b = object.sourceSubaccountId) !== null && _b !== void 0 ? _b : "";
        message.destinationSubaccountId = (_c = object.destinationSubaccountId) !== null && _c !== void 0 ? _c : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? coin_1.Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgExternalTransferResponse() {
    return {};
}
exports.MsgExternalTransferResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgExternalTransferResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgExternalTransferResponse();
        return message;
    },
};
function createBaseMsgLiquidatePosition() {
    return { sender: "", subaccountId: "", marketId: "", order: undefined };
}
exports.MsgLiquidatePosition = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            exchange_1.DerivativeOrder.encode(message.order, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.order = exchange_1.DerivativeOrder.decode(reader, reader.uint32());
                    continue;
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
            order: isSet(object.order) ? exchange_1.DerivativeOrder.fromJSON(object.order) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.order !== undefined && (obj.order = message.order ? exchange_1.DerivativeOrder.toJSON(message.order) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgLiquidatePosition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgLiquidatePosition();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.marketId = (_c = object.marketId) !== null && _c !== void 0 ? _c : "";
        message.order = (object.order !== undefined && object.order !== null)
            ? exchange_1.DerivativeOrder.fromPartial(object.order)
            : undefined;
        return message;
    },
};
function createBaseMsgLiquidatePositionResponse() {
    return {};
}
exports.MsgLiquidatePositionResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgLiquidatePositionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgLiquidatePositionResponse();
        return message;
    },
};
function createBaseMsgIncreasePositionMargin() {
    return { sender: "", sourceSubaccountId: "", destinationSubaccountId: "", marketId: "", amount: "" };
}
exports.MsgIncreasePositionMargin = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgIncreasePositionMargin.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgIncreasePositionMarginResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgIncreasePositionMarginResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgIncreasePositionMarginResponse();
        return message;
    },
};
function createBaseMsgPrivilegedExecuteContract() {
    return { sender: "", funds: "", contractAddress: "", data: "" };
}
exports.MsgPrivilegedExecuteContract = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgPrivilegedExecuteContract.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgPrivilegedExecuteContractResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.fundsDiff) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPrivilegedExecuteContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fundsDiff.push(coin_1.Coin.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { fundsDiff: Array.isArray(object === null || object === void 0 ? void 0 : object.fundsDiff) ? object.fundsDiff.map((e) => coin_1.Coin.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.fundsDiff) {
            obj.fundsDiff = message.fundsDiff.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.fundsDiff = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgPrivilegedExecuteContractResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgPrivilegedExecuteContractResponse();
        message.fundsDiff = ((_a = object.fundsDiff) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
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
exports.SpotMarketParamUpdateProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
            status: isSet(object.status) ? (0, exchange_1.marketStatusFromJSON)(object.status) : 0,
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
        message.status !== undefined && (obj.status = (0, exchange_1.marketStatusToJSON)(message.status));
        return obj;
    },
    create(base) {
        return exports.SpotMarketParamUpdateProposal.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.ExchangeEnableProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.ExchangeEnableProposal.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.BatchExchangeModificationProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.spotMarketParamUpdateProposals) {
            exports.SpotMarketParamUpdateProposal.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.derivativeMarketParamUpdateProposals) {
            exports.DerivativeMarketParamUpdateProposal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.spotMarketLaunchProposals) {
            exports.SpotMarketLaunchProposal.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.perpetualMarketLaunchProposals) {
            exports.PerpetualMarketLaunchProposal.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.expiryFuturesMarketLaunchProposals) {
            exports.ExpiryFuturesMarketLaunchProposal.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.tradingRewardCampaignUpdateProposal !== undefined) {
            exports.TradingRewardCampaignUpdateProposal.encode(message.tradingRewardCampaignUpdateProposal, writer.uint32(66).fork())
                .ldelim();
        }
        for (const v of message.binaryOptionsMarketLaunchProposals) {
            exports.BinaryOptionsMarketLaunchProposal.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.binaryOptionsParamUpdateProposals) {
            exports.BinaryOptionsMarketParamUpdateProposal.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.denomDecimalsUpdateProposal !== undefined) {
            exports.UpdateDenomDecimalsProposal.encode(message.denomDecimalsUpdateProposal, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.spotMarketParamUpdateProposals.push(exports.SpotMarketParamUpdateProposal.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.derivativeMarketParamUpdateProposals.push(exports.DerivativeMarketParamUpdateProposal.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.spotMarketLaunchProposals.push(exports.SpotMarketLaunchProposal.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.perpetualMarketLaunchProposals.push(exports.PerpetualMarketLaunchProposal.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.expiryFuturesMarketLaunchProposals.push(exports.ExpiryFuturesMarketLaunchProposal.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.tradingRewardCampaignUpdateProposal = exports.TradingRewardCampaignUpdateProposal.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.binaryOptionsMarketLaunchProposals.push(exports.BinaryOptionsMarketLaunchProposal.decode(reader, reader.uint32()));
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.binaryOptionsParamUpdateProposals.push(exports.BinaryOptionsMarketParamUpdateProposal.decode(reader, reader.uint32()));
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.denomDecimalsUpdateProposal = exports.UpdateDenomDecimalsProposal.decode(reader, reader.uint32());
                    continue;
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
                ? object.spotMarketParamUpdateProposals.map((e) => exports.SpotMarketParamUpdateProposal.fromJSON(e))
                : [],
            derivativeMarketParamUpdateProposals: Array.isArray(object === null || object === void 0 ? void 0 : object.derivativeMarketParamUpdateProposals)
                ? object.derivativeMarketParamUpdateProposals.map((e) => exports.DerivativeMarketParamUpdateProposal.fromJSON(e))
                : [],
            spotMarketLaunchProposals: Array.isArray(object === null || object === void 0 ? void 0 : object.spotMarketLaunchProposals)
                ? object.spotMarketLaunchProposals.map((e) => exports.SpotMarketLaunchProposal.fromJSON(e))
                : [],
            perpetualMarketLaunchProposals: Array.isArray(object === null || object === void 0 ? void 0 : object.perpetualMarketLaunchProposals)
                ? object.perpetualMarketLaunchProposals.map((e) => exports.PerpetualMarketLaunchProposal.fromJSON(e))
                : [],
            expiryFuturesMarketLaunchProposals: Array.isArray(object === null || object === void 0 ? void 0 : object.expiryFuturesMarketLaunchProposals)
                ? object.expiryFuturesMarketLaunchProposals.map((e) => exports.ExpiryFuturesMarketLaunchProposal.fromJSON(e))
                : [],
            tradingRewardCampaignUpdateProposal: isSet(object.tradingRewardCampaignUpdateProposal)
                ? exports.TradingRewardCampaignUpdateProposal.fromJSON(object.tradingRewardCampaignUpdateProposal)
                : undefined,
            binaryOptionsMarketLaunchProposals: Array.isArray(object === null || object === void 0 ? void 0 : object.binaryOptionsMarketLaunchProposals)
                ? object.binaryOptionsMarketLaunchProposals.map((e) => exports.BinaryOptionsMarketLaunchProposal.fromJSON(e))
                : [],
            binaryOptionsParamUpdateProposals: Array.isArray(object === null || object === void 0 ? void 0 : object.binaryOptionsParamUpdateProposals)
                ? object.binaryOptionsParamUpdateProposals.map((e) => exports.BinaryOptionsMarketParamUpdateProposal.fromJSON(e))
                : [],
            denomDecimalsUpdateProposal: isSet(object.denomDecimalsUpdateProposal)
                ? exports.UpdateDenomDecimalsProposal.fromJSON(object.denomDecimalsUpdateProposal)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.spotMarketParamUpdateProposals) {
            obj.spotMarketParamUpdateProposals = message.spotMarketParamUpdateProposals.map((e) => e ? exports.SpotMarketParamUpdateProposal.toJSON(e) : undefined);
        }
        else {
            obj.spotMarketParamUpdateProposals = [];
        }
        if (message.derivativeMarketParamUpdateProposals) {
            obj.derivativeMarketParamUpdateProposals = message.derivativeMarketParamUpdateProposals.map((e) => e ? exports.DerivativeMarketParamUpdateProposal.toJSON(e) : undefined);
        }
        else {
            obj.derivativeMarketParamUpdateProposals = [];
        }
        if (message.spotMarketLaunchProposals) {
            obj.spotMarketLaunchProposals = message.spotMarketLaunchProposals.map((e) => e ? exports.SpotMarketLaunchProposal.toJSON(e) : undefined);
        }
        else {
            obj.spotMarketLaunchProposals = [];
        }
        if (message.perpetualMarketLaunchProposals) {
            obj.perpetualMarketLaunchProposals = message.perpetualMarketLaunchProposals.map((e) => e ? exports.PerpetualMarketLaunchProposal.toJSON(e) : undefined);
        }
        else {
            obj.perpetualMarketLaunchProposals = [];
        }
        if (message.expiryFuturesMarketLaunchProposals) {
            obj.expiryFuturesMarketLaunchProposals = message.expiryFuturesMarketLaunchProposals.map((e) => e ? exports.ExpiryFuturesMarketLaunchProposal.toJSON(e) : undefined);
        }
        else {
            obj.expiryFuturesMarketLaunchProposals = [];
        }
        message.tradingRewardCampaignUpdateProposal !== undefined &&
            (obj.tradingRewardCampaignUpdateProposal = message.tradingRewardCampaignUpdateProposal
                ? exports.TradingRewardCampaignUpdateProposal.toJSON(message.tradingRewardCampaignUpdateProposal)
                : undefined);
        if (message.binaryOptionsMarketLaunchProposals) {
            obj.binaryOptionsMarketLaunchProposals = message.binaryOptionsMarketLaunchProposals.map((e) => e ? exports.BinaryOptionsMarketLaunchProposal.toJSON(e) : undefined);
        }
        else {
            obj.binaryOptionsMarketLaunchProposals = [];
        }
        if (message.binaryOptionsParamUpdateProposals) {
            obj.binaryOptionsParamUpdateProposals = message.binaryOptionsParamUpdateProposals.map((e) => e ? exports.BinaryOptionsMarketParamUpdateProposal.toJSON(e) : undefined);
        }
        else {
            obj.binaryOptionsParamUpdateProposals = [];
        }
        message.denomDecimalsUpdateProposal !== undefined &&
            (obj.denomDecimalsUpdateProposal = message.denomDecimalsUpdateProposal
                ? exports.UpdateDenomDecimalsProposal.toJSON(message.denomDecimalsUpdateProposal)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.BatchExchangeModificationProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseBatchExchangeModificationProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.spotMarketParamUpdateProposals =
            ((_c = object.spotMarketParamUpdateProposals) === null || _c === void 0 ? void 0 : _c.map((e) => exports.SpotMarketParamUpdateProposal.fromPartial(e))) || [];
        message.derivativeMarketParamUpdateProposals =
            ((_d = object.derivativeMarketParamUpdateProposals) === null || _d === void 0 ? void 0 : _d.map((e) => exports.DerivativeMarketParamUpdateProposal.fromPartial(e))) || [];
        message.spotMarketLaunchProposals =
            ((_e = object.spotMarketLaunchProposals) === null || _e === void 0 ? void 0 : _e.map((e) => exports.SpotMarketLaunchProposal.fromPartial(e))) || [];
        message.perpetualMarketLaunchProposals =
            ((_f = object.perpetualMarketLaunchProposals) === null || _f === void 0 ? void 0 : _f.map((e) => exports.PerpetualMarketLaunchProposal.fromPartial(e))) || [];
        message.expiryFuturesMarketLaunchProposals =
            ((_g = object.expiryFuturesMarketLaunchProposals) === null || _g === void 0 ? void 0 : _g.map((e) => exports.ExpiryFuturesMarketLaunchProposal.fromPartial(e))) || [];
        message.tradingRewardCampaignUpdateProposal =
            (object.tradingRewardCampaignUpdateProposal !== undefined && object.tradingRewardCampaignUpdateProposal !== null)
                ? exports.TradingRewardCampaignUpdateProposal.fromPartial(object.tradingRewardCampaignUpdateProposal)
                : undefined;
        message.binaryOptionsMarketLaunchProposals =
            ((_h = object.binaryOptionsMarketLaunchProposals) === null || _h === void 0 ? void 0 : _h.map((e) => exports.BinaryOptionsMarketLaunchProposal.fromPartial(e))) || [];
        message.binaryOptionsParamUpdateProposals =
            ((_j = object.binaryOptionsParamUpdateProposals) === null || _j === void 0 ? void 0 : _j.map((e) => exports.BinaryOptionsMarketParamUpdateProposal.fromPartial(e))) || [];
        message.denomDecimalsUpdateProposal =
            (object.denomDecimalsUpdateProposal !== undefined && object.denomDecimalsUpdateProposal !== null)
                ? exports.UpdateDenomDecimalsProposal.fromPartial(object.denomDecimalsUpdateProposal)
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
exports.SpotMarketLaunchProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.SpotMarketLaunchProposal.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.PerpetualMarketLaunchProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
            oracleType: isSet(object.oracleType) ? (0, oracle_1.oracleTypeFromJSON)(object.oracleType) : 0,
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
        message.oracleType !== undefined && (obj.oracleType = (0, oracle_1.oracleTypeToJSON)(message.oracleType));
        message.initialMarginRatio !== undefined && (obj.initialMarginRatio = message.initialMarginRatio);
        message.maintenanceMarginRatio !== undefined && (obj.maintenanceMarginRatio = message.maintenanceMarginRatio);
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        return obj;
    },
    create(base) {
        return exports.PerpetualMarketLaunchProposal.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.BinaryOptionsMarketLaunchProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
            oracleType: isSet(object.oracleType) ? (0, oracle_1.oracleTypeFromJSON)(object.oracleType) : 0,
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
        message.oracleType !== undefined && (obj.oracleType = (0, oracle_1.oracleTypeToJSON)(message.oracleType));
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
        return exports.BinaryOptionsMarketLaunchProposal.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.ExpiryFuturesMarketLaunchProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
            oracleType: isSet(object.oracleType) ? (0, oracle_1.oracleTypeFromJSON)(object.oracleType) : 0,
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
        message.oracleType !== undefined && (obj.oracleType = (0, oracle_1.oracleTypeToJSON)(message.oracleType));
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
        return exports.ExpiryFuturesMarketLaunchProposal.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.DerivativeMarketParamUpdateProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            exports.OracleParams.encode(message.oracleParams, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.oracleParams = exports.OracleParams.decode(reader, reader.uint32());
                    continue;
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
            status: isSet(object.status) ? (0, exchange_1.marketStatusFromJSON)(object.status) : 0,
            oracleParams: isSet(object.oracleParams) ? exports.OracleParams.fromJSON(object.oracleParams) : undefined,
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
        message.status !== undefined && (obj.status = (0, exchange_1.marketStatusToJSON)(message.status));
        message.oracleParams !== undefined &&
            (obj.oracleParams = message.oracleParams ? exports.OracleParams.toJSON(message.oracleParams) : undefined);
        return obj;
    },
    create(base) {
        return exports.DerivativeMarketParamUpdateProposal.fromPartial(base !== null && base !== void 0 ? base : {});
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
            ? exports.OracleParams.fromPartial(object.oracleParams)
            : undefined;
        return message;
    },
};
function createBaseMarketForcedSettlementProposal() {
    return { title: "", description: "", marketId: "", settlementPrice: "" };
}
exports.MarketForcedSettlementProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MarketForcedSettlementProposal.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.UpdateDenomDecimalsProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.denomDecimals) {
            exchange_1.DenomDecimals.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            denomDecimals: Array.isArray(object === null || object === void 0 ? void 0 : object.denomDecimals)
                ? object.denomDecimals.map((e) => exchange_1.DenomDecimals.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.denomDecimals) {
            obj.denomDecimals = message.denomDecimals.map((e) => e ? exchange_1.DenomDecimals.toJSON(e) : undefined);
        }
        else {
            obj.denomDecimals = [];
        }
        return obj;
    },
    create(base) {
        return exports.UpdateDenomDecimalsProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUpdateDenomDecimalsProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.denomDecimals = ((_c = object.denomDecimals) === null || _c === void 0 ? void 0 : _c.map((e) => exchange_1.DenomDecimals.fromPartial(e))) || [];
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
exports.BinaryOptionsMarketParamUpdateProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            exports.ProviderOracleParams.encode(message.oracleParams, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.oracleParams = exports.ProviderOracleParams.decode(reader, reader.uint32());
                    continue;
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
            status: isSet(object.status) ? (0, exchange_1.marketStatusFromJSON)(object.status) : 0,
            oracleParams: isSet(object.oracleParams) ? exports.ProviderOracleParams.fromJSON(object.oracleParams) : undefined,
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
        message.status !== undefined && (obj.status = (0, exchange_1.marketStatusToJSON)(message.status));
        message.oracleParams !== undefined &&
            (obj.oracleParams = message.oracleParams ? exports.ProviderOracleParams.toJSON(message.oracleParams) : undefined);
        return obj;
    },
    create(base) {
        return exports.BinaryOptionsMarketParamUpdateProposal.fromPartial(base !== null && base !== void 0 ? base : {});
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
            ? exports.ProviderOracleParams.fromPartial(object.oracleParams)
            : undefined;
        return message;
    },
};
function createBaseProviderOracleParams() {
    return { symbol: "", provider: "", oracleScaleFactor: 0, oracleType: 0 };
}
exports.ProviderOracleParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
            oracleType: isSet(object.oracleType) ? (0, oracle_1.oracleTypeFromJSON)(object.oracleType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.provider !== undefined && (obj.provider = message.provider);
        message.oracleScaleFactor !== undefined && (obj.oracleScaleFactor = Math.round(message.oracleScaleFactor));
        message.oracleType !== undefined && (obj.oracleType = (0, oracle_1.oracleTypeToJSON)(message.oracleType));
        return obj;
    },
    create(base) {
        return exports.ProviderOracleParams.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.OracleParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
            oracleType: isSet(object.oracleType) ? (0, oracle_1.oracleTypeFromJSON)(object.oracleType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.oracleBase !== undefined && (obj.oracleBase = message.oracleBase);
        message.oracleQuote !== undefined && (obj.oracleQuote = message.oracleQuote);
        message.oracleScaleFactor !== undefined && (obj.oracleScaleFactor = Math.round(message.oracleScaleFactor));
        message.oracleType !== undefined && (obj.oracleType = (0, oracle_1.oracleTypeToJSON)(message.oracleType));
        return obj;
    },
    create(base) {
        return exports.OracleParams.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.TradingRewardCampaignLaunchProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.campaignInfo !== undefined) {
            exchange_1.TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.campaignRewardPools) {
            exchange_1.CampaignRewardPool.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.campaignInfo = exchange_1.TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.campaignRewardPools.push(exchange_1.CampaignRewardPool.decode(reader, reader.uint32()));
                    continue;
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
            campaignInfo: isSet(object.campaignInfo) ? exchange_1.TradingRewardCampaignInfo.fromJSON(object.campaignInfo) : undefined,
            campaignRewardPools: Array.isArray(object === null || object === void 0 ? void 0 : object.campaignRewardPools)
                ? object.campaignRewardPools.map((e) => exchange_1.CampaignRewardPool.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.campaignInfo !== undefined &&
            (obj.campaignInfo = message.campaignInfo ? exchange_1.TradingRewardCampaignInfo.toJSON(message.campaignInfo) : undefined);
        if (message.campaignRewardPools) {
            obj.campaignRewardPools = message.campaignRewardPools.map((e) => e ? exchange_1.CampaignRewardPool.toJSON(e) : undefined);
        }
        else {
            obj.campaignRewardPools = [];
        }
        return obj;
    },
    create(base) {
        return exports.TradingRewardCampaignLaunchProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTradingRewardCampaignLaunchProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.campaignInfo = (object.campaignInfo !== undefined && object.campaignInfo !== null)
            ? exchange_1.TradingRewardCampaignInfo.fromPartial(object.campaignInfo)
            : undefined;
        message.campaignRewardPools = ((_c = object.campaignRewardPools) === null || _c === void 0 ? void 0 : _c.map((e) => exchange_1.CampaignRewardPool.fromPartial(e))) || [];
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
exports.TradingRewardCampaignUpdateProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.campaignInfo !== undefined) {
            exchange_1.TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.campaignRewardPoolsAdditions) {
            exchange_1.CampaignRewardPool.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.campaignRewardPoolsUpdates) {
            exchange_1.CampaignRewardPool.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.campaignInfo = exchange_1.TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.campaignRewardPoolsAdditions.push(exchange_1.CampaignRewardPool.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.campaignRewardPoolsUpdates.push(exchange_1.CampaignRewardPool.decode(reader, reader.uint32()));
                    continue;
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
            campaignInfo: isSet(object.campaignInfo) ? exchange_1.TradingRewardCampaignInfo.fromJSON(object.campaignInfo) : undefined,
            campaignRewardPoolsAdditions: Array.isArray(object === null || object === void 0 ? void 0 : object.campaignRewardPoolsAdditions)
                ? object.campaignRewardPoolsAdditions.map((e) => exchange_1.CampaignRewardPool.fromJSON(e))
                : [],
            campaignRewardPoolsUpdates: Array.isArray(object === null || object === void 0 ? void 0 : object.campaignRewardPoolsUpdates)
                ? object.campaignRewardPoolsUpdates.map((e) => exchange_1.CampaignRewardPool.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.campaignInfo !== undefined &&
            (obj.campaignInfo = message.campaignInfo ? exchange_1.TradingRewardCampaignInfo.toJSON(message.campaignInfo) : undefined);
        if (message.campaignRewardPoolsAdditions) {
            obj.campaignRewardPoolsAdditions = message.campaignRewardPoolsAdditions.map((e) => e ? exchange_1.CampaignRewardPool.toJSON(e) : undefined);
        }
        else {
            obj.campaignRewardPoolsAdditions = [];
        }
        if (message.campaignRewardPoolsUpdates) {
            obj.campaignRewardPoolsUpdates = message.campaignRewardPoolsUpdates.map((e) => e ? exchange_1.CampaignRewardPool.toJSON(e) : undefined);
        }
        else {
            obj.campaignRewardPoolsUpdates = [];
        }
        return obj;
    },
    create(base) {
        return exports.TradingRewardCampaignUpdateProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTradingRewardCampaignUpdateProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.campaignInfo = (object.campaignInfo !== undefined && object.campaignInfo !== null)
            ? exchange_1.TradingRewardCampaignInfo.fromPartial(object.campaignInfo)
            : undefined;
        message.campaignRewardPoolsAdditions =
            ((_c = object.campaignRewardPoolsAdditions) === null || _c === void 0 ? void 0 : _c.map((e) => exchange_1.CampaignRewardPool.fromPartial(e))) || [];
        message.campaignRewardPoolsUpdates =
            ((_d = object.campaignRewardPoolsUpdates) === null || _d === void 0 ? void 0 : _d.map((e) => exchange_1.CampaignRewardPool.fromPartial(e))) || [];
        return message;
    },
};
function createBaseRewardPointUpdate() {
    return { accountAddress: "", newPoints: "" };
}
exports.RewardPointUpdate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        if (message.newPoints !== "") {
            writer.uint32(98).string(message.newPoints);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.RewardPointUpdate.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.TradingRewardPendingPointsUpdateProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            exports.RewardPointUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.rewardPointUpdates.push(exports.RewardPointUpdate.decode(reader, reader.uint32()));
                    continue;
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
                ? object.rewardPointUpdates.map((e) => exports.RewardPointUpdate.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.pendingPoolTimestamp !== undefined && (obj.pendingPoolTimestamp = message.pendingPoolTimestamp);
        if (message.rewardPointUpdates) {
            obj.rewardPointUpdates = message.rewardPointUpdates.map((e) => e ? exports.RewardPointUpdate.toJSON(e) : undefined);
        }
        else {
            obj.rewardPointUpdates = [];
        }
        return obj;
    },
    create(base) {
        return exports.TradingRewardPendingPointsUpdateProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTradingRewardPendingPointsUpdateProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.pendingPoolTimestamp = (_c = object.pendingPoolTimestamp) !== null && _c !== void 0 ? _c : "0";
        message.rewardPointUpdates = ((_d = object.rewardPointUpdates) === null || _d === void 0 ? void 0 : _d.map((e) => exports.RewardPointUpdate.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFeeDiscountProposal() {
    return { title: "", description: "", schedule: undefined };
}
exports.FeeDiscountProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.schedule !== undefined) {
            exchange_1.FeeDiscountSchedule.encode(message.schedule, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.schedule = exchange_1.FeeDiscountSchedule.decode(reader, reader.uint32());
                    continue;
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
            schedule: isSet(object.schedule) ? exchange_1.FeeDiscountSchedule.fromJSON(object.schedule) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.schedule !== undefined &&
            (obj.schedule = message.schedule ? exchange_1.FeeDiscountSchedule.toJSON(message.schedule) : undefined);
        return obj;
    },
    create(base) {
        return exports.FeeDiscountProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFeeDiscountProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.schedule = (object.schedule !== undefined && object.schedule !== null)
            ? exchange_1.FeeDiscountSchedule.fromPartial(object.schedule)
            : undefined;
        return message;
    },
};
function createBaseBatchCommunityPoolSpendProposal() {
    return { title: "", description: "", proposals: [] };
}
exports.BatchCommunityPoolSpendProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.proposals) {
            distribution_1.CommunityPoolSpendProposal.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.proposals.push(distribution_1.CommunityPoolSpendProposal.decode(reader, reader.uint32()));
                    continue;
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
                ? object.proposals.map((e) => distribution_1.CommunityPoolSpendProposal.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.proposals) {
            obj.proposals = message.proposals.map((e) => e ? distribution_1.CommunityPoolSpendProposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        return obj;
    },
    create(base) {
        return exports.BatchCommunityPoolSpendProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseBatchCommunityPoolSpendProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.proposals = ((_c = object.proposals) === null || _c === void 0 ? void 0 : _c.map((e) => distribution_1.CommunityPoolSpendProposal.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgRewardsOptOut() {
    return { sender: "" };
}
exports.MsgRewardsOptOut = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgRewardsOptOut.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgRewardsOptOutResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgRewardsOptOutResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRewardsOptOutResponse();
        return message;
    },
};
function createBaseMsgReclaimLockedFunds() {
    return { sender: "", lockedAccountPubKey: new Uint8Array(), signature: new Uint8Array() };
}
exports.MsgReclaimLockedFunds = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgReclaimLockedFunds.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgReclaimLockedFundsResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgReclaimLockedFundsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgReclaimLockedFundsResponse();
        return message;
    },
};
function createBaseMsgSignData() {
    return { Signer: new Uint8Array(), Data: new Uint8Array() };
}
exports.MsgSignData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.Signer.length !== 0) {
            writer.uint32(10).bytes(message.Signer);
        }
        if (message.Data.length !== 0) {
            writer.uint32(18).bytes(message.Data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgSignData.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgSignDoc = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signType !== "") {
            writer.uint32(10).string(message.signType);
        }
        if (message.value !== undefined) {
            exports.MsgSignData.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.value = exports.MsgSignData.decode(reader, reader.uint32());
                    continue;
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
            value: isSet(object.value) ? exports.MsgSignData.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.signType !== undefined && (obj.signType = message.signType);
        message.value !== undefined && (obj.value = message.value ? exports.MsgSignData.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgSignDoc.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgSignDoc();
        message.signType = (_a = object.signType) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.MsgSignData.fromPartial(object.value)
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
exports.MsgAdminUpdateBinaryOptionsMarket = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
            status: isSet(object.status) ? (0, exchange_1.marketStatusFromJSON)(object.status) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.settlementPrice !== undefined && (obj.settlementPrice = message.settlementPrice);
        message.expirationTimestamp !== undefined && (obj.expirationTimestamp = message.expirationTimestamp);
        message.settlementTimestamp !== undefined && (obj.settlementTimestamp = message.settlementTimestamp);
        message.status !== undefined && (obj.status = (0, exchange_1.marketStatusToJSON)(message.status));
        return obj;
    },
    create(base) {
        return exports.MsgAdminUpdateBinaryOptionsMarket.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MsgAdminUpdateBinaryOptionsMarketResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.MsgAdminUpdateBinaryOptionsMarketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgAdminUpdateBinaryOptionsMarketResponse();
        return message;
    },
};
function createBaseAtomicMarketOrderFeeMultiplierScheduleProposal() {
    return { title: "", description: "", marketFeeMultipliers: [] };
}
exports.AtomicMarketOrderFeeMultiplierScheduleProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.marketFeeMultipliers) {
            exchange_1.MarketFeeMultiplier.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.marketFeeMultipliers.push(exchange_1.MarketFeeMultiplier.decode(reader, reader.uint32()));
                    continue;
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
                ? object.marketFeeMultipliers.map((e) => exchange_1.MarketFeeMultiplier.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.marketFeeMultipliers) {
            obj.marketFeeMultipliers = message.marketFeeMultipliers.map((e) => e ? exchange_1.MarketFeeMultiplier.toJSON(e) : undefined);
        }
        else {
            obj.marketFeeMultipliers = [];
        }
        return obj;
    },
    create(base) {
        return exports.AtomicMarketOrderFeeMultiplierScheduleProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAtomicMarketOrderFeeMultiplierScheduleProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.marketFeeMultipliers = ((_c = object.marketFeeMultipliers) === null || _c === void 0 ? void 0 : _c.map((e) => exchange_1.MarketFeeMultiplier.fromPartial(e))) || [];
        return message;
    },
};
class MsgClientImpl {
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
        return this.rpc.unary(exports.MsgDepositDesc, exports.MsgDeposit.fromPartial(request), metadata);
    }
    Withdraw(request, metadata) {
        return this.rpc.unary(exports.MsgWithdrawDesc, exports.MsgWithdraw.fromPartial(request), metadata);
    }
    InstantSpotMarketLaunch(request, metadata) {
        return this.rpc.unary(exports.MsgInstantSpotMarketLaunchDesc, exports.MsgInstantSpotMarketLaunch.fromPartial(request), metadata);
    }
    InstantPerpetualMarketLaunch(request, metadata) {
        return this.rpc.unary(exports.MsgInstantPerpetualMarketLaunchDesc, exports.MsgInstantPerpetualMarketLaunch.fromPartial(request), metadata);
    }
    InstantExpiryFuturesMarketLaunch(request, metadata) {
        return this.rpc.unary(exports.MsgInstantExpiryFuturesMarketLaunchDesc, exports.MsgInstantExpiryFuturesMarketLaunch.fromPartial(request), metadata);
    }
    CreateSpotLimitOrder(request, metadata) {
        return this.rpc.unary(exports.MsgCreateSpotLimitOrderDesc, exports.MsgCreateSpotLimitOrder.fromPartial(request), metadata);
    }
    BatchCreateSpotLimitOrders(request, metadata) {
        return this.rpc.unary(exports.MsgBatchCreateSpotLimitOrdersDesc, exports.MsgBatchCreateSpotLimitOrders.fromPartial(request), metadata);
    }
    CreateSpotMarketOrder(request, metadata) {
        return this.rpc.unary(exports.MsgCreateSpotMarketOrderDesc, exports.MsgCreateSpotMarketOrder.fromPartial(request), metadata);
    }
    CancelSpotOrder(request, metadata) {
        return this.rpc.unary(exports.MsgCancelSpotOrderDesc, exports.MsgCancelSpotOrder.fromPartial(request), metadata);
    }
    BatchCancelSpotOrders(request, metadata) {
        return this.rpc.unary(exports.MsgBatchCancelSpotOrdersDesc, exports.MsgBatchCancelSpotOrders.fromPartial(request), metadata);
    }
    BatchUpdateOrders(request, metadata) {
        return this.rpc.unary(exports.MsgBatchUpdateOrdersDesc, exports.MsgBatchUpdateOrders.fromPartial(request), metadata);
    }
    PrivilegedExecuteContract(request, metadata) {
        return this.rpc.unary(exports.MsgPrivilegedExecuteContractDesc, exports.MsgPrivilegedExecuteContract.fromPartial(request), metadata);
    }
    CreateDerivativeLimitOrder(request, metadata) {
        return this.rpc.unary(exports.MsgCreateDerivativeLimitOrderDesc, exports.MsgCreateDerivativeLimitOrder.fromPartial(request), metadata);
    }
    BatchCreateDerivativeLimitOrders(request, metadata) {
        return this.rpc.unary(exports.MsgBatchCreateDerivativeLimitOrdersDesc, exports.MsgBatchCreateDerivativeLimitOrders.fromPartial(request), metadata);
    }
    CreateDerivativeMarketOrder(request, metadata) {
        return this.rpc.unary(exports.MsgCreateDerivativeMarketOrderDesc, exports.MsgCreateDerivativeMarketOrder.fromPartial(request), metadata);
    }
    CancelDerivativeOrder(request, metadata) {
        return this.rpc.unary(exports.MsgCancelDerivativeOrderDesc, exports.MsgCancelDerivativeOrder.fromPartial(request), metadata);
    }
    BatchCancelDerivativeOrders(request, metadata) {
        return this.rpc.unary(exports.MsgBatchCancelDerivativeOrdersDesc, exports.MsgBatchCancelDerivativeOrders.fromPartial(request), metadata);
    }
    InstantBinaryOptionsMarketLaunch(request, metadata) {
        return this.rpc.unary(exports.MsgInstantBinaryOptionsMarketLaunchDesc, exports.MsgInstantBinaryOptionsMarketLaunch.fromPartial(request), metadata);
    }
    CreateBinaryOptionsLimitOrder(request, metadata) {
        return this.rpc.unary(exports.MsgCreateBinaryOptionsLimitOrderDesc, exports.MsgCreateBinaryOptionsLimitOrder.fromPartial(request), metadata);
    }
    CreateBinaryOptionsMarketOrder(request, metadata) {
        return this.rpc.unary(exports.MsgCreateBinaryOptionsMarketOrderDesc, exports.MsgCreateBinaryOptionsMarketOrder.fromPartial(request), metadata);
    }
    CancelBinaryOptionsOrder(request, metadata) {
        return this.rpc.unary(exports.MsgCancelBinaryOptionsOrderDesc, exports.MsgCancelBinaryOptionsOrder.fromPartial(request), metadata);
    }
    BatchCancelBinaryOptionsOrders(request, metadata) {
        return this.rpc.unary(exports.MsgBatchCancelBinaryOptionsOrdersDesc, exports.MsgBatchCancelBinaryOptionsOrders.fromPartial(request), metadata);
    }
    SubaccountTransfer(request, metadata) {
        return this.rpc.unary(exports.MsgSubaccountTransferDesc, exports.MsgSubaccountTransfer.fromPartial(request), metadata);
    }
    ExternalTransfer(request, metadata) {
        return this.rpc.unary(exports.MsgExternalTransferDesc, exports.MsgExternalTransfer.fromPartial(request), metadata);
    }
    LiquidatePosition(request, metadata) {
        return this.rpc.unary(exports.MsgLiquidatePositionDesc, exports.MsgLiquidatePosition.fromPartial(request), metadata);
    }
    IncreasePositionMargin(request, metadata) {
        return this.rpc.unary(exports.MsgIncreasePositionMarginDesc, exports.MsgIncreasePositionMargin.fromPartial(request), metadata);
    }
    RewardsOptOut(request, metadata) {
        return this.rpc.unary(exports.MsgRewardsOptOutDesc, exports.MsgRewardsOptOut.fromPartial(request), metadata);
    }
    AdminUpdateBinaryOptionsMarket(request, metadata) {
        return this.rpc.unary(exports.MsgAdminUpdateBinaryOptionsMarketDesc, exports.MsgAdminUpdateBinaryOptionsMarket.fromPartial(request), metadata);
    }
    ReclaimLockedFunds(request, metadata) {
        return this.rpc.unary(exports.MsgReclaimLockedFundsDesc, exports.MsgReclaimLockedFunds.fromPartial(request), metadata);
    }
    UpdateParams(request, metadata) {
        return this.rpc.unary(exports.MsgUpdateParamsDesc, exports.MsgUpdateParams.fromPartial(request), metadata);
    }
}
exports.MsgClientImpl = MsgClientImpl;
exports.MsgDesc = { serviceName: "injective.exchange.v1beta1.Msg" };
exports.MsgDepositDesc = {
    methodName: "Deposit",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgDeposit.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgDepositResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgWithdrawDesc = {
    methodName: "Withdraw",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgWithdraw.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgWithdrawResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgInstantSpotMarketLaunchDesc = {
    methodName: "InstantSpotMarketLaunch",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgInstantSpotMarketLaunch.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgInstantSpotMarketLaunchResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgInstantPerpetualMarketLaunchDesc = {
    methodName: "InstantPerpetualMarketLaunch",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgInstantPerpetualMarketLaunch.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgInstantPerpetualMarketLaunchResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgInstantExpiryFuturesMarketLaunchDesc = {
    methodName: "InstantExpiryFuturesMarketLaunch",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgInstantExpiryFuturesMarketLaunch.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgInstantExpiryFuturesMarketLaunchResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgCreateSpotLimitOrderDesc = {
    methodName: "CreateSpotLimitOrder",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgCreateSpotLimitOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgCreateSpotLimitOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgBatchCreateSpotLimitOrdersDesc = {
    methodName: "BatchCreateSpotLimitOrders",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgBatchCreateSpotLimitOrders.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgBatchCreateSpotLimitOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgCreateSpotMarketOrderDesc = {
    methodName: "CreateSpotMarketOrder",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgCreateSpotMarketOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgCreateSpotMarketOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgCancelSpotOrderDesc = {
    methodName: "CancelSpotOrder",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgCancelSpotOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgCancelSpotOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgBatchCancelSpotOrdersDesc = {
    methodName: "BatchCancelSpotOrders",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgBatchCancelSpotOrders.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgBatchCancelSpotOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgBatchUpdateOrdersDesc = {
    methodName: "BatchUpdateOrders",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgBatchUpdateOrders.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgBatchUpdateOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgPrivilegedExecuteContractDesc = {
    methodName: "PrivilegedExecuteContract",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgPrivilegedExecuteContract.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgPrivilegedExecuteContractResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgCreateDerivativeLimitOrderDesc = {
    methodName: "CreateDerivativeLimitOrder",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgCreateDerivativeLimitOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgCreateDerivativeLimitOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgBatchCreateDerivativeLimitOrdersDesc = {
    methodName: "BatchCreateDerivativeLimitOrders",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgBatchCreateDerivativeLimitOrders.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgBatchCreateDerivativeLimitOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgCreateDerivativeMarketOrderDesc = {
    methodName: "CreateDerivativeMarketOrder",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgCreateDerivativeMarketOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgCreateDerivativeMarketOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgCancelDerivativeOrderDesc = {
    methodName: "CancelDerivativeOrder",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgCancelDerivativeOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgCancelDerivativeOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgBatchCancelDerivativeOrdersDesc = {
    methodName: "BatchCancelDerivativeOrders",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgBatchCancelDerivativeOrders.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgBatchCancelDerivativeOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgInstantBinaryOptionsMarketLaunchDesc = {
    methodName: "InstantBinaryOptionsMarketLaunch",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgInstantBinaryOptionsMarketLaunch.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgInstantBinaryOptionsMarketLaunchResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgCreateBinaryOptionsLimitOrderDesc = {
    methodName: "CreateBinaryOptionsLimitOrder",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgCreateBinaryOptionsLimitOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgCreateBinaryOptionsLimitOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgCreateBinaryOptionsMarketOrderDesc = {
    methodName: "CreateBinaryOptionsMarketOrder",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgCreateBinaryOptionsMarketOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgCreateBinaryOptionsMarketOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgCancelBinaryOptionsOrderDesc = {
    methodName: "CancelBinaryOptionsOrder",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgCancelBinaryOptionsOrder.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgCancelBinaryOptionsOrderResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgBatchCancelBinaryOptionsOrdersDesc = {
    methodName: "BatchCancelBinaryOptionsOrders",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgBatchCancelBinaryOptionsOrders.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgBatchCancelBinaryOptionsOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgSubaccountTransferDesc = {
    methodName: "SubaccountTransfer",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgSubaccountTransfer.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgSubaccountTransferResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgExternalTransferDesc = {
    methodName: "ExternalTransfer",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgExternalTransfer.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgExternalTransferResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgLiquidatePositionDesc = {
    methodName: "LiquidatePosition",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgLiquidatePosition.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgLiquidatePositionResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgIncreasePositionMarginDesc = {
    methodName: "IncreasePositionMargin",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgIncreasePositionMargin.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgIncreasePositionMarginResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgRewardsOptOutDesc = {
    methodName: "RewardsOptOut",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgRewardsOptOut.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgRewardsOptOutResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgAdminUpdateBinaryOptionsMarketDesc = {
    methodName: "AdminUpdateBinaryOptionsMarket",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgAdminUpdateBinaryOptionsMarket.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgAdminUpdateBinaryOptionsMarketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgReclaimLockedFundsDesc = {
    methodName: "ReclaimLockedFunds",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgReclaimLockedFunds.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgReclaimLockedFundsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgUpdateParamsDesc = {
    methodName: "UpdateParams",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgUpdateParams.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgUpdateParamsResponse.decode(data);
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
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
