"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.InjectiveAccountsRPCRewardsDesc = exports.InjectiveAccountsRPCSubaccountOrderSummaryDesc = exports.InjectiveAccountsRPCSubaccountHistoryDesc = exports.InjectiveAccountsRPCStreamSubaccountBalanceDesc = exports.InjectiveAccountsRPCSubaccountBalanceEndpointDesc = exports.InjectiveAccountsRPCSubaccountBalancesListDesc = exports.InjectiveAccountsRPCSubaccountsListDesc = exports.InjectiveAccountsRPCOrderStatesDesc = exports.InjectiveAccountsRPCPortfolioDesc = exports.InjectiveAccountsRPCDesc = exports.InjectiveAccountsRPCClientImpl = exports.Coin = exports.Reward = exports.RewardsResponse = exports.RewardsRequest = exports.SubaccountOrderSummaryResponse = exports.SubaccountOrderSummaryRequest = exports.Paging = exports.CosmosCoin = exports.SubaccountBalanceTransfer = exports.SubaccountHistoryResponse = exports.SubaccountHistoryRequest = exports.StreamSubaccountBalanceResponse = exports.StreamSubaccountBalanceRequest = exports.SubaccountBalanceEndpointResponse = exports.SubaccountBalanceEndpointRequest = exports.SubaccountDeposit = exports.SubaccountBalance = exports.SubaccountBalancesListResponse = exports.SubaccountBalancesListRequest = exports.SubaccountsListResponse = exports.SubaccountsListRequest = exports.OrderStateRecord = exports.OrderStatesResponse = exports.OrderStatesRequest = exports.SubaccountPortfolio = exports.AccountPortfolio = exports.PortfolioResponse = exports.PortfolioRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.protobufPackage = "injective_accounts_rpc";
function createBasePortfolioRequest() {
    return { accountAddress: "" };
}
exports.PortfolioRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePortfolioRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return exports.PortfolioRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePortfolioRequest();
        message.accountAddress = (_a = object.accountAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBasePortfolioResponse() {
    return { portfolio: undefined };
}
exports.PortfolioResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portfolio !== undefined) {
            exports.AccountPortfolio.encode(message.portfolio, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePortfolioResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portfolio = exports.AccountPortfolio.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { portfolio: isSet(object.portfolio) ? exports.AccountPortfolio.fromJSON(object.portfolio) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.portfolio !== undefined &&
            (obj.portfolio = message.portfolio ? exports.AccountPortfolio.toJSON(message.portfolio) : undefined);
        return obj;
    },
    create(base) {
        return exports.PortfolioResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBasePortfolioResponse();
        message.portfolio = (object.portfolio !== undefined && object.portfolio !== null)
            ? exports.AccountPortfolio.fromPartial(object.portfolio)
            : undefined;
        return message;
    },
};
function createBaseAccountPortfolio() {
    return { portfolioValue: "", availableBalance: "", lockedBalance: "", unrealizedPnl: "", subaccounts: [] };
}
exports.AccountPortfolio = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portfolioValue !== "") {
            writer.uint32(10).string(message.portfolioValue);
        }
        if (message.availableBalance !== "") {
            writer.uint32(18).string(message.availableBalance);
        }
        if (message.lockedBalance !== "") {
            writer.uint32(26).string(message.lockedBalance);
        }
        if (message.unrealizedPnl !== "") {
            writer.uint32(34).string(message.unrealizedPnl);
        }
        for (const v of message.subaccounts) {
            exports.SubaccountPortfolio.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountPortfolio();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portfolioValue = reader.string();
                    break;
                case 2:
                    message.availableBalance = reader.string();
                    break;
                case 3:
                    message.lockedBalance = reader.string();
                    break;
                case 4:
                    message.unrealizedPnl = reader.string();
                    break;
                case 5:
                    message.subaccounts.push(exports.SubaccountPortfolio.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            portfolioValue: isSet(object.portfolioValue) ? String(object.portfolioValue) : "",
            availableBalance: isSet(object.availableBalance) ? String(object.availableBalance) : "",
            lockedBalance: isSet(object.lockedBalance) ? String(object.lockedBalance) : "",
            unrealizedPnl: isSet(object.unrealizedPnl) ? String(object.unrealizedPnl) : "",
            subaccounts: Array.isArray(object === null || object === void 0 ? void 0 : object.subaccounts)
                ? object.subaccounts.map((e) => exports.SubaccountPortfolio.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.portfolioValue !== undefined && (obj.portfolioValue = message.portfolioValue);
        message.availableBalance !== undefined && (obj.availableBalance = message.availableBalance);
        message.lockedBalance !== undefined && (obj.lockedBalance = message.lockedBalance);
        message.unrealizedPnl !== undefined && (obj.unrealizedPnl = message.unrealizedPnl);
        if (message.subaccounts) {
            obj.subaccounts = message.subaccounts.map((e) => e ? exports.SubaccountPortfolio.toJSON(e) : undefined);
        }
        else {
            obj.subaccounts = [];
        }
        return obj;
    },
    create(base) {
        return exports.AccountPortfolio.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseAccountPortfolio();
        message.portfolioValue = (_a = object.portfolioValue) !== null && _a !== void 0 ? _a : "";
        message.availableBalance = (_b = object.availableBalance) !== null && _b !== void 0 ? _b : "";
        message.lockedBalance = (_c = object.lockedBalance) !== null && _c !== void 0 ? _c : "";
        message.unrealizedPnl = (_d = object.unrealizedPnl) !== null && _d !== void 0 ? _d : "";
        message.subaccounts = ((_e = object.subaccounts) === null || _e === void 0 ? void 0 : _e.map((e) => exports.SubaccountPortfolio.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSubaccountPortfolio() {
    return { subaccountId: "", availableBalance: "", lockedBalance: "", unrealizedPnl: "" };
}
exports.SubaccountPortfolio = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.availableBalance !== "") {
            writer.uint32(18).string(message.availableBalance);
        }
        if (message.lockedBalance !== "") {
            writer.uint32(26).string(message.lockedBalance);
        }
        if (message.unrealizedPnl !== "") {
            writer.uint32(34).string(message.unrealizedPnl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountPortfolio();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.availableBalance = reader.string();
                    break;
                case 3:
                    message.lockedBalance = reader.string();
                    break;
                case 4:
                    message.unrealizedPnl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            availableBalance: isSet(object.availableBalance) ? String(object.availableBalance) : "",
            lockedBalance: isSet(object.lockedBalance) ? String(object.lockedBalance) : "",
            unrealizedPnl: isSet(object.unrealizedPnl) ? String(object.unrealizedPnl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.availableBalance !== undefined && (obj.availableBalance = message.availableBalance);
        message.lockedBalance !== undefined && (obj.lockedBalance = message.lockedBalance);
        message.unrealizedPnl !== undefined && (obj.unrealizedPnl = message.unrealizedPnl);
        return obj;
    },
    create(base) {
        return exports.SubaccountPortfolio.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSubaccountPortfolio();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.availableBalance = (_b = object.availableBalance) !== null && _b !== void 0 ? _b : "";
        message.lockedBalance = (_c = object.lockedBalance) !== null && _c !== void 0 ? _c : "";
        message.unrealizedPnl = (_d = object.unrealizedPnl) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseOrderStatesRequest() {
    return { spotOrderHashes: [], derivativeOrderHashes: [] };
}
exports.OrderStatesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.spotOrderHashes) {
            writer.uint32(10).string(v);
        }
        for (const v of message.derivativeOrderHashes) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderStatesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spotOrderHashes.push(reader.string());
                    break;
                case 2:
                    message.derivativeOrderHashes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            spotOrderHashes: Array.isArray(object === null || object === void 0 ? void 0 : object.spotOrderHashes) ? object.spotOrderHashes.map((e) => String(e)) : [],
            derivativeOrderHashes: Array.isArray(object === null || object === void 0 ? void 0 : object.derivativeOrderHashes)
                ? object.derivativeOrderHashes.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
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
        return obj;
    },
    create(base) {
        return exports.OrderStatesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOrderStatesRequest();
        message.spotOrderHashes = ((_a = object.spotOrderHashes) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.derivativeOrderHashes = ((_b = object.derivativeOrderHashes) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseOrderStatesResponse() {
    return { spotOrderStates: [], derivativeOrderStates: [] };
}
exports.OrderStatesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.spotOrderStates) {
            exports.OrderStateRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.derivativeOrderStates) {
            exports.OrderStateRecord.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spotOrderStates.push(exports.OrderStateRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.derivativeOrderStates.push(exports.OrderStateRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            spotOrderStates: Array.isArray(object === null || object === void 0 ? void 0 : object.spotOrderStates)
                ? object.spotOrderStates.map((e) => exports.OrderStateRecord.fromJSON(e))
                : [],
            derivativeOrderStates: Array.isArray(object === null || object === void 0 ? void 0 : object.derivativeOrderStates)
                ? object.derivativeOrderStates.map((e) => exports.OrderStateRecord.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.spotOrderStates) {
            obj.spotOrderStates = message.spotOrderStates.map((e) => e ? exports.OrderStateRecord.toJSON(e) : undefined);
        }
        else {
            obj.spotOrderStates = [];
        }
        if (message.derivativeOrderStates) {
            obj.derivativeOrderStates = message.derivativeOrderStates.map((e) => e ? exports.OrderStateRecord.toJSON(e) : undefined);
        }
        else {
            obj.derivativeOrderStates = [];
        }
        return obj;
    },
    create(base) {
        return exports.OrderStatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOrderStatesResponse();
        message.spotOrderStates = ((_a = object.spotOrderStates) === null || _a === void 0 ? void 0 : _a.map((e) => exports.OrderStateRecord.fromPartial(e))) || [];
        message.derivativeOrderStates = ((_b = object.derivativeOrderStates) === null || _b === void 0 ? void 0 : _b.map((e) => exports.OrderStateRecord.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOrderStateRecord() {
    return {
        orderHash: "",
        subaccountId: "",
        marketId: "",
        orderType: "",
        orderSide: "",
        state: "",
        quantityFilled: "",
        quantityRemaining: "",
        createdAt: "0",
        updatedAt: "0",
    };
}
exports.OrderStateRecord = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(26).string(message.marketId);
        }
        if (message.orderType !== "") {
            writer.uint32(34).string(message.orderType);
        }
        if (message.orderSide !== "") {
            writer.uint32(42).string(message.orderSide);
        }
        if (message.state !== "") {
            writer.uint32(50).string(message.state);
        }
        if (message.quantityFilled !== "") {
            writer.uint32(58).string(message.quantityFilled);
        }
        if (message.quantityRemaining !== "") {
            writer.uint32(66).string(message.quantityRemaining);
        }
        if (message.createdAt !== "0") {
            writer.uint32(72).sint64(message.createdAt);
        }
        if (message.updatedAt !== "0") {
            writer.uint32(80).sint64(message.updatedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderStateRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderHash = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.string();
                    break;
                case 3:
                    message.marketId = reader.string();
                    break;
                case 4:
                    message.orderType = reader.string();
                    break;
                case 5:
                    message.orderSide = reader.string();
                    break;
                case 6:
                    message.state = reader.string();
                    break;
                case 7:
                    message.quantityFilled = reader.string();
                    break;
                case 8:
                    message.quantityRemaining = reader.string();
                    break;
                case 9:
                    message.createdAt = longToString(reader.sint64());
                    break;
                case 10:
                    message.updatedAt = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            orderType: isSet(object.orderType) ? String(object.orderType) : "",
            orderSide: isSet(object.orderSide) ? String(object.orderSide) : "",
            state: isSet(object.state) ? String(object.state) : "",
            quantityFilled: isSet(object.quantityFilled) ? String(object.quantityFilled) : "",
            quantityRemaining: isSet(object.quantityRemaining) ? String(object.quantityRemaining) : "",
            createdAt: isSet(object.createdAt) ? String(object.createdAt) : "0",
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.orderType !== undefined && (obj.orderType = message.orderType);
        message.orderSide !== undefined && (obj.orderSide = message.orderSide);
        message.state !== undefined && (obj.state = message.state);
        message.quantityFilled !== undefined && (obj.quantityFilled = message.quantityFilled);
        message.quantityRemaining !== undefined && (obj.quantityRemaining = message.quantityRemaining);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        return obj;
    },
    create(base) {
        return exports.OrderStateRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseOrderStateRecord();
        message.orderHash = (_a = object.orderHash) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.marketId = (_c = object.marketId) !== null && _c !== void 0 ? _c : "";
        message.orderType = (_d = object.orderType) !== null && _d !== void 0 ? _d : "";
        message.orderSide = (_e = object.orderSide) !== null && _e !== void 0 ? _e : "";
        message.state = (_f = object.state) !== null && _f !== void 0 ? _f : "";
        message.quantityFilled = (_g = object.quantityFilled) !== null && _g !== void 0 ? _g : "";
        message.quantityRemaining = (_h = object.quantityRemaining) !== null && _h !== void 0 ? _h : "";
        message.createdAt = (_j = object.createdAt) !== null && _j !== void 0 ? _j : "0";
        message.updatedAt = (_k = object.updatedAt) !== null && _k !== void 0 ? _k : "0";
        return message;
    },
};
function createBaseSubaccountsListRequest() {
    return { accountAddress: "" };
}
exports.SubaccountsListRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountsListRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return exports.SubaccountsListRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSubaccountsListRequest();
        message.accountAddress = (_a = object.accountAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSubaccountsListResponse() {
    return { subaccounts: [] };
}
exports.SubaccountsListResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.subaccounts) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountsListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccounts.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { subaccounts: Array.isArray(object === null || object === void 0 ? void 0 : object.subaccounts) ? object.subaccounts.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.subaccounts) {
            obj.subaccounts = message.subaccounts.map((e) => e);
        }
        else {
            obj.subaccounts = [];
        }
        return obj;
    },
    create(base) {
        return exports.SubaccountsListResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSubaccountsListResponse();
        message.subaccounts = ((_a = object.subaccounts) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseSubaccountBalancesListRequest() {
    return { subaccountId: "", denoms: [] };
}
exports.SubaccountBalancesListRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.denoms) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountBalancesListRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.denoms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            denoms: Array.isArray(object === null || object === void 0 ? void 0 : object.denoms) ? object.denoms.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        if (message.denoms) {
            obj.denoms = message.denoms.map((e) => e);
        }
        else {
            obj.denoms = [];
        }
        return obj;
    },
    create(base) {
        return exports.SubaccountBalancesListRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubaccountBalancesListRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.denoms = ((_b = object.denoms) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseSubaccountBalancesListResponse() {
    return { balances: [] };
}
exports.SubaccountBalancesListResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.balances) {
            exports.SubaccountBalance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountBalancesListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(exports.SubaccountBalance.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances) ? object.balances.map((e) => exports.SubaccountBalance.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.balances) {
            obj.balances = message.balances.map((e) => e ? exports.SubaccountBalance.toJSON(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        return obj;
    },
    create(base) {
        return exports.SubaccountBalancesListResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSubaccountBalancesListResponse();
        message.balances = ((_a = object.balances) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SubaccountBalance.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSubaccountBalance() {
    return { subaccountId: "", accountAddress: "", denom: "", deposit: undefined };
}
exports.SubaccountBalance = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (message.deposit !== undefined) {
            exports.SubaccountDeposit.encode(message.deposit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.accountAddress = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.deposit = exports.SubaccountDeposit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            deposit: isSet(object.deposit) ? exports.SubaccountDeposit.fromJSON(object.deposit) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.denom !== undefined && (obj.denom = message.denom);
        message.deposit !== undefined &&
            (obj.deposit = message.deposit ? exports.SubaccountDeposit.toJSON(message.deposit) : undefined);
        return obj;
    },
    create(base) {
        return exports.SubaccountBalance.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSubaccountBalance();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.accountAddress = (_b = object.accountAddress) !== null && _b !== void 0 ? _b : "";
        message.denom = (_c = object.denom) !== null && _c !== void 0 ? _c : "";
        message.deposit = (object.deposit !== undefined && object.deposit !== null)
            ? exports.SubaccountDeposit.fromPartial(object.deposit)
            : undefined;
        return message;
    },
};
function createBaseSubaccountDeposit() {
    return { totalBalance: "", availableBalance: "" };
}
exports.SubaccountDeposit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.totalBalance !== "") {
            writer.uint32(10).string(message.totalBalance);
        }
        if (message.availableBalance !== "") {
            writer.uint32(18).string(message.availableBalance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalBalance = reader.string();
                    break;
                case 2:
                    message.availableBalance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            totalBalance: isSet(object.totalBalance) ? String(object.totalBalance) : "",
            availableBalance: isSet(object.availableBalance) ? String(object.availableBalance) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalBalance !== undefined && (obj.totalBalance = message.totalBalance);
        message.availableBalance !== undefined && (obj.availableBalance = message.availableBalance);
        return obj;
    },
    create(base) {
        return exports.SubaccountDeposit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubaccountDeposit();
        message.totalBalance = (_a = object.totalBalance) !== null && _a !== void 0 ? _a : "";
        message.availableBalance = (_b = object.availableBalance) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseSubaccountBalanceEndpointRequest() {
    return { subaccountId: "", denom: "" };
}
exports.SubaccountBalanceEndpointRequest = {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountBalanceEndpointRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
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
        return exports.SubaccountBalanceEndpointRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubaccountBalanceEndpointRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseSubaccountBalanceEndpointResponse() {
    return { balance: undefined };
}
exports.SubaccountBalanceEndpointResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.balance !== undefined) {
            exports.SubaccountBalance.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountBalanceEndpointResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = exports.SubaccountBalance.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { balance: isSet(object.balance) ? exports.SubaccountBalance.fromJSON(object.balance) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.balance !== undefined &&
            (obj.balance = message.balance ? exports.SubaccountBalance.toJSON(message.balance) : undefined);
        return obj;
    },
    create(base) {
        return exports.SubaccountBalanceEndpointResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSubaccountBalanceEndpointResponse();
        message.balance = (object.balance !== undefined && object.balance !== null)
            ? exports.SubaccountBalance.fromPartial(object.balance)
            : undefined;
        return message;
    },
};
function createBaseStreamSubaccountBalanceRequest() {
    return { subaccountId: "", denoms: [] };
}
exports.StreamSubaccountBalanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.denoms) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamSubaccountBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.denoms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            denoms: Array.isArray(object === null || object === void 0 ? void 0 : object.denoms) ? object.denoms.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        if (message.denoms) {
            obj.denoms = message.denoms.map((e) => e);
        }
        else {
            obj.denoms = [];
        }
        return obj;
    },
    create(base) {
        return exports.StreamSubaccountBalanceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStreamSubaccountBalanceRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.denoms = ((_b = object.denoms) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseStreamSubaccountBalanceResponse() {
    return { balance: undefined, timestamp: "0" };
}
exports.StreamSubaccountBalanceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.balance !== undefined) {
            exports.SubaccountBalance.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        if (message.timestamp !== "0") {
            writer.uint32(16).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamSubaccountBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = exports.SubaccountBalance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.timestamp = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            balance: isSet(object.balance) ? exports.SubaccountBalance.fromJSON(object.balance) : undefined,
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.balance !== undefined &&
            (obj.balance = message.balance ? exports.SubaccountBalance.toJSON(message.balance) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return exports.StreamSubaccountBalanceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStreamSubaccountBalanceResponse();
        message.balance = (object.balance !== undefined && object.balance !== null)
            ? exports.SubaccountBalance.fromPartial(object.balance)
            : undefined;
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseSubaccountHistoryRequest() {
    return { subaccountId: "", denom: "", transferTypes: [], skip: "0", limit: 0, endTime: "0" };
}
exports.SubaccountHistoryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        for (const v of message.transferTypes) {
            writer.uint32(26).string(v);
        }
        if (message.skip !== "0") {
            writer.uint32(32).uint64(message.skip);
        }
        if (message.limit !== 0) {
            writer.uint32(40).sint32(message.limit);
        }
        if (message.endTime !== "0") {
            writer.uint32(48).sint64(message.endTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.transferTypes.push(reader.string());
                    break;
                case 4:
                    message.skip = longToString(reader.uint64());
                    break;
                case 5:
                    message.limit = reader.sint32();
                    break;
                case 6:
                    message.endTime = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            transferTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.transferTypes) ? object.transferTypes.map((e) => String(e)) : [],
            skip: isSet(object.skip) ? String(object.skip) : "0",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            endTime: isSet(object.endTime) ? String(object.endTime) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.denom !== undefined && (obj.denom = message.denom);
        if (message.transferTypes) {
            obj.transferTypes = message.transferTypes.map((e) => e);
        }
        else {
            obj.transferTypes = [];
        }
        message.skip !== undefined && (obj.skip = message.skip);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.endTime !== undefined && (obj.endTime = message.endTime);
        return obj;
    },
    create(base) {
        return exports.SubaccountHistoryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseSubaccountHistoryRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.transferTypes = ((_c = object.transferTypes) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.skip = (_d = object.skip) !== null && _d !== void 0 ? _d : "0";
        message.limit = (_e = object.limit) !== null && _e !== void 0 ? _e : 0;
        message.endTime = (_f = object.endTime) !== null && _f !== void 0 ? _f : "0";
        return message;
    },
};
function createBaseSubaccountHistoryResponse() {
    return { transfers: [], paging: undefined };
}
exports.SubaccountHistoryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.transfers) {
            exports.SubaccountBalanceTransfer.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transfers.push(exports.SubaccountBalanceTransfer.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.paging = exports.Paging.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            transfers: Array.isArray(object === null || object === void 0 ? void 0 : object.transfers)
                ? object.transfers.map((e) => exports.SubaccountBalanceTransfer.fromJSON(e))
                : [],
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.transfers) {
            obj.transfers = message.transfers.map((e) => e ? exports.SubaccountBalanceTransfer.toJSON(e) : undefined);
        }
        else {
            obj.transfers = [];
        }
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        return obj;
    },
    create(base) {
        return exports.SubaccountHistoryResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSubaccountHistoryResponse();
        message.transfers = ((_a = object.transfers) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SubaccountBalanceTransfer.fromPartial(e))) || [];
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        return message;
    },
};
function createBaseSubaccountBalanceTransfer() {
    return {
        transferType: "",
        srcSubaccountId: "",
        srcAccountAddress: "",
        dstSubaccountId: "",
        dstAccountAddress: "",
        amount: undefined,
        executedAt: "0",
    };
}
exports.SubaccountBalanceTransfer = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.transferType !== "") {
            writer.uint32(10).string(message.transferType);
        }
        if (message.srcSubaccountId !== "") {
            writer.uint32(18).string(message.srcSubaccountId);
        }
        if (message.srcAccountAddress !== "") {
            writer.uint32(26).string(message.srcAccountAddress);
        }
        if (message.dstSubaccountId !== "") {
            writer.uint32(34).string(message.dstSubaccountId);
        }
        if (message.dstAccountAddress !== "") {
            writer.uint32(42).string(message.dstAccountAddress);
        }
        if (message.amount !== undefined) {
            exports.CosmosCoin.encode(message.amount, writer.uint32(50).fork()).ldelim();
        }
        if (message.executedAt !== "0") {
            writer.uint32(56).sint64(message.executedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountBalanceTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transferType = reader.string();
                    break;
                case 2:
                    message.srcSubaccountId = reader.string();
                    break;
                case 3:
                    message.srcAccountAddress = reader.string();
                    break;
                case 4:
                    message.dstSubaccountId = reader.string();
                    break;
                case 5:
                    message.dstAccountAddress = reader.string();
                    break;
                case 6:
                    message.amount = exports.CosmosCoin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.executedAt = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            transferType: isSet(object.transferType) ? String(object.transferType) : "",
            srcSubaccountId: isSet(object.srcSubaccountId) ? String(object.srcSubaccountId) : "",
            srcAccountAddress: isSet(object.srcAccountAddress) ? String(object.srcAccountAddress) : "",
            dstSubaccountId: isSet(object.dstSubaccountId) ? String(object.dstSubaccountId) : "",
            dstAccountAddress: isSet(object.dstAccountAddress) ? String(object.dstAccountAddress) : "",
            amount: isSet(object.amount) ? exports.CosmosCoin.fromJSON(object.amount) : undefined,
            executedAt: isSet(object.executedAt) ? String(object.executedAt) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.transferType !== undefined && (obj.transferType = message.transferType);
        message.srcSubaccountId !== undefined && (obj.srcSubaccountId = message.srcSubaccountId);
        message.srcAccountAddress !== undefined && (obj.srcAccountAddress = message.srcAccountAddress);
        message.dstSubaccountId !== undefined && (obj.dstSubaccountId = message.dstSubaccountId);
        message.dstAccountAddress !== undefined && (obj.dstAccountAddress = message.dstAccountAddress);
        message.amount !== undefined && (obj.amount = message.amount ? exports.CosmosCoin.toJSON(message.amount) : undefined);
        message.executedAt !== undefined && (obj.executedAt = message.executedAt);
        return obj;
    },
    create(base) {
        return exports.SubaccountBalanceTransfer.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseSubaccountBalanceTransfer();
        message.transferType = (_a = object.transferType) !== null && _a !== void 0 ? _a : "";
        message.srcSubaccountId = (_b = object.srcSubaccountId) !== null && _b !== void 0 ? _b : "";
        message.srcAccountAddress = (_c = object.srcAccountAddress) !== null && _c !== void 0 ? _c : "";
        message.dstSubaccountId = (_d = object.dstSubaccountId) !== null && _d !== void 0 ? _d : "";
        message.dstAccountAddress = (_e = object.dstAccountAddress) !== null && _e !== void 0 ? _e : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? exports.CosmosCoin.fromPartial(object.amount)
            : undefined;
        message.executedAt = (_f = object.executedAt) !== null && _f !== void 0 ? _f : "0";
        return message;
    },
};
function createBaseCosmosCoin() {
    return { denom: "", amount: "" };
}
exports.CosmosCoin = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCosmosCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            denom: isSet(object.denom) ? String(object.denom) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    create(base) {
        return exports.CosmosCoin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCosmosCoin();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBasePaging() {
    return { total: "0", from: 0, to: 0, countBySubaccount: "0", next: [] };
}
exports.Paging = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.total !== "0") {
            writer.uint32(8).sint64(message.total);
        }
        if (message.from !== 0) {
            writer.uint32(16).sint32(message.from);
        }
        if (message.to !== 0) {
            writer.uint32(24).sint32(message.to);
        }
        if (message.countBySubaccount !== "0") {
            writer.uint32(32).sint64(message.countBySubaccount);
        }
        for (const v of message.next) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePaging();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = longToString(reader.sint64());
                    break;
                case 2:
                    message.from = reader.sint32();
                    break;
                case 3:
                    message.to = reader.sint32();
                    break;
                case 4:
                    message.countBySubaccount = longToString(reader.sint64());
                    break;
                case 5:
                    message.next.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            total: isSet(object.total) ? String(object.total) : "0",
            from: isSet(object.from) ? Number(object.from) : 0,
            to: isSet(object.to) ? Number(object.to) : 0,
            countBySubaccount: isSet(object.countBySubaccount) ? String(object.countBySubaccount) : "0",
            next: Array.isArray(object === null || object === void 0 ? void 0 : object.next) ? object.next.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.total !== undefined && (obj.total = message.total);
        message.from !== undefined && (obj.from = Math.round(message.from));
        message.to !== undefined && (obj.to = Math.round(message.to));
        message.countBySubaccount !== undefined && (obj.countBySubaccount = message.countBySubaccount);
        if (message.next) {
            obj.next = message.next.map((e) => e);
        }
        else {
            obj.next = [];
        }
        return obj;
    },
    create(base) {
        return exports.Paging.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBasePaging();
        message.total = (_a = object.total) !== null && _a !== void 0 ? _a : "0";
        message.from = (_b = object.from) !== null && _b !== void 0 ? _b : 0;
        message.to = (_c = object.to) !== null && _c !== void 0 ? _c : 0;
        message.countBySubaccount = (_d = object.countBySubaccount) !== null && _d !== void 0 ? _d : "0";
        message.next = ((_e = object.next) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
function createBaseSubaccountOrderSummaryRequest() {
    return { subaccountId: "", marketId: "", orderDirection: "" };
}
exports.SubaccountOrderSummaryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.orderDirection !== "") {
            writer.uint32(26).string(message.orderDirection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountOrderSummaryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.orderDirection = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            orderDirection: isSet(object.orderDirection) ? String(object.orderDirection) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.orderDirection !== undefined && (obj.orderDirection = message.orderDirection);
        return obj;
    },
    create(base) {
        return exports.SubaccountOrderSummaryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSubaccountOrderSummaryRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.orderDirection = (_c = object.orderDirection) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseSubaccountOrderSummaryResponse() {
    return { spotOrdersTotal: "0", derivativeOrdersTotal: "0" };
}
exports.SubaccountOrderSummaryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.spotOrdersTotal !== "0") {
            writer.uint32(8).sint64(message.spotOrdersTotal);
        }
        if (message.derivativeOrdersTotal !== "0") {
            writer.uint32(16).sint64(message.derivativeOrdersTotal);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountOrderSummaryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spotOrdersTotal = longToString(reader.sint64());
                    break;
                case 2:
                    message.derivativeOrdersTotal = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            spotOrdersTotal: isSet(object.spotOrdersTotal) ? String(object.spotOrdersTotal) : "0",
            derivativeOrdersTotal: isSet(object.derivativeOrdersTotal) ? String(object.derivativeOrdersTotal) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.spotOrdersTotal !== undefined && (obj.spotOrdersTotal = message.spotOrdersTotal);
        message.derivativeOrdersTotal !== undefined && (obj.derivativeOrdersTotal = message.derivativeOrdersTotal);
        return obj;
    },
    create(base) {
        return exports.SubaccountOrderSummaryResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubaccountOrderSummaryResponse();
        message.spotOrdersTotal = (_a = object.spotOrdersTotal) !== null && _a !== void 0 ? _a : "0";
        message.derivativeOrdersTotal = (_b = object.derivativeOrdersTotal) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseRewardsRequest() {
    return { epoch: "0", accountAddress: "" };
}
exports.RewardsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epoch !== "0") {
            writer.uint32(8).sint64(message.epoch);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epoch = longToString(reader.sint64());
                    break;
                case 2:
                    message.accountAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epoch: isSet(object.epoch) ? String(object.epoch) : "0",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.epoch !== undefined && (obj.epoch = message.epoch);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return exports.RewardsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRewardsRequest();
        message.epoch = (_a = object.epoch) !== null && _a !== void 0 ? _a : "0";
        message.accountAddress = (_b = object.accountAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRewardsResponse() {
    return { rewards: [] };
}
exports.RewardsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.rewards) {
            exports.Reward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(exports.Reward.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map((e) => exports.Reward.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => e ? exports.Reward.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    create(base) {
        return exports.RewardsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRewardsResponse();
        message.rewards = ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Reward.fromPartial(e))) || [];
        return message;
    },
};
function createBaseReward() {
    return { accountAddress: "", rewards: [], distributedAt: "0" };
}
exports.Reward = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        for (const v of message.rewards) {
            exports.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.distributedAt !== "0") {
            writer.uint32(24).sint64(message.distributedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountAddress = reader.string();
                    break;
                case 2:
                    message.rewards.push(exports.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.distributedAt = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map((e) => exports.Coin.fromJSON(e)) : [],
            distributedAt: isSet(object.distributedAt) ? String(object.distributedAt) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => e ? exports.Coin.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        message.distributedAt !== undefined && (obj.distributedAt = message.distributedAt);
        return obj;
    },
    create(base) {
        return exports.Reward.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseReward();
        message.accountAddress = (_a = object.accountAddress) !== null && _a !== void 0 ? _a : "";
        message.rewards = ((_b = object.rewards) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Coin.fromPartial(e))) || [];
        message.distributedAt = (_c = object.distributedAt) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseCoin() {
    return { denom: "", amount: "" };
}
exports.Coin = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            denom: isSet(object.denom) ? String(object.denom) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    create(base) {
        return exports.Coin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCoin();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
class InjectiveAccountsRPCClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Portfolio = this.Portfolio.bind(this);
        this.OrderStates = this.OrderStates.bind(this);
        this.SubaccountsList = this.SubaccountsList.bind(this);
        this.SubaccountBalancesList = this.SubaccountBalancesList.bind(this);
        this.SubaccountBalanceEndpoint = this.SubaccountBalanceEndpoint.bind(this);
        this.StreamSubaccountBalance = this.StreamSubaccountBalance.bind(this);
        this.SubaccountHistory = this.SubaccountHistory.bind(this);
        this.SubaccountOrderSummary = this.SubaccountOrderSummary.bind(this);
        this.Rewards = this.Rewards.bind(this);
    }
    Portfolio(request, metadata) {
        return this.rpc.unary(exports.InjectiveAccountsRPCPortfolioDesc, exports.PortfolioRequest.fromPartial(request), metadata);
    }
    OrderStates(request, metadata) {
        return this.rpc.unary(exports.InjectiveAccountsRPCOrderStatesDesc, exports.OrderStatesRequest.fromPartial(request), metadata);
    }
    SubaccountsList(request, metadata) {
        return this.rpc.unary(exports.InjectiveAccountsRPCSubaccountsListDesc, exports.SubaccountsListRequest.fromPartial(request), metadata);
    }
    SubaccountBalancesList(request, metadata) {
        return this.rpc.unary(exports.InjectiveAccountsRPCSubaccountBalancesListDesc, exports.SubaccountBalancesListRequest.fromPartial(request), metadata);
    }
    SubaccountBalanceEndpoint(request, metadata) {
        return this.rpc.unary(exports.InjectiveAccountsRPCSubaccountBalanceEndpointDesc, exports.SubaccountBalanceEndpointRequest.fromPartial(request), metadata);
    }
    StreamSubaccountBalance(request, metadata) {
        return this.rpc.invoke(exports.InjectiveAccountsRPCStreamSubaccountBalanceDesc, exports.StreamSubaccountBalanceRequest.fromPartial(request), metadata);
    }
    SubaccountHistory(request, metadata) {
        return this.rpc.unary(exports.InjectiveAccountsRPCSubaccountHistoryDesc, exports.SubaccountHistoryRequest.fromPartial(request), metadata);
    }
    SubaccountOrderSummary(request, metadata) {
        return this.rpc.unary(exports.InjectiveAccountsRPCSubaccountOrderSummaryDesc, exports.SubaccountOrderSummaryRequest.fromPartial(request), metadata);
    }
    Rewards(request, metadata) {
        return this.rpc.unary(exports.InjectiveAccountsRPCRewardsDesc, exports.RewardsRequest.fromPartial(request), metadata);
    }
}
exports.InjectiveAccountsRPCClientImpl = InjectiveAccountsRPCClientImpl;
exports.InjectiveAccountsRPCDesc = { serviceName: "injective_accounts_rpc.InjectiveAccountsRPC" };
exports.InjectiveAccountsRPCPortfolioDesc = {
    methodName: "Portfolio",
    service: exports.InjectiveAccountsRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.PortfolioRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.PortfolioResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveAccountsRPCOrderStatesDesc = {
    methodName: "OrderStates",
    service: exports.InjectiveAccountsRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.OrderStatesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.OrderStatesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveAccountsRPCSubaccountsListDesc = {
    methodName: "SubaccountsList",
    service: exports.InjectiveAccountsRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.SubaccountsListRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.SubaccountsListResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveAccountsRPCSubaccountBalancesListDesc = {
    methodName: "SubaccountBalancesList",
    service: exports.InjectiveAccountsRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.SubaccountBalancesListRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.SubaccountBalancesListResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveAccountsRPCSubaccountBalanceEndpointDesc = {
    methodName: "SubaccountBalanceEndpoint",
    service: exports.InjectiveAccountsRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.SubaccountBalanceEndpointRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.SubaccountBalanceEndpointResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveAccountsRPCStreamSubaccountBalanceDesc = {
    methodName: "StreamSubaccountBalance",
    service: exports.InjectiveAccountsRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return exports.StreamSubaccountBalanceRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.StreamSubaccountBalanceResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveAccountsRPCSubaccountHistoryDesc = {
    methodName: "SubaccountHistory",
    service: exports.InjectiveAccountsRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.SubaccountHistoryRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.SubaccountHistoryResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveAccountsRPCSubaccountOrderSummaryDesc = {
    methodName: "SubaccountOrderSummary",
    service: exports.InjectiveAccountsRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.SubaccountOrderSummaryRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.SubaccountOrderSummaryResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveAccountsRPCRewardsDesc = {
    methodName: "Rewards",
    service: exports.InjectiveAccountsRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.RewardsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.RewardsResponse.decode(data);
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
    invoke(methodDesc, _request, metadata) {
        var _a;
        const upStreamCodes = this.options.upStreamRetryCodes || [];
        const DEFAULT_TIMEOUT_TIME = 3000;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new browser_headers_1.BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new rxjs_1.Observable((observer) => {
            const upStream = (() => {
                const client = grpc_web_1.grpc.invoke(methodDesc, {
                    host: this.host,
                    request,
                    transport: this.options.streamingTransport || this.options.transport,
                    metadata: maybeCombinedMetadata,
                    debug: this.options.debug,
                    onMessage: (next) => observer.next(next),
                    onEnd: (code, message, trailers) => {
                        if (code === 0) {
                            observer.complete();
                        }
                        else if (upStreamCodes.includes(code)) {
                            setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
                        }
                        else {
                            const err = new Error(message);
                            err.code = code;
                            err.metadata = trailers;
                            observer.error(err);
                        }
                    },
                });
                observer.add(() => client.close());
            });
            upStream();
        }).pipe((0, operators_1.share)());
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
