"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.InjectiveTradingRPCListTradingStrategiesDesc = exports.InjectiveTradingRPCDesc = exports.InjectiveTradingRPCClientImpl = exports.Paging = exports.TradingStrategy = exports.ListTradingStrategiesResponse = exports.ListTradingStrategiesRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "injective_trading_rpc";
function createBaseListTradingStrategiesRequest() {
    return {
        state: "",
        marketId: "",
        subaccountId: "",
        accountAddress: "",
        startTime: "0",
        endTime: "0",
        limit: 0,
        skip: "0",
    };
}
exports.ListTradingStrategiesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== "") {
            writer.uint32(10).string(message.state);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(26).string(message.subaccountId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(34).string(message.accountAddress);
        }
        if (message.startTime !== "0") {
            writer.uint32(40).sint64(message.startTime);
        }
        if (message.endTime !== "0") {
            writer.uint32(48).sint64(message.endTime);
        }
        if (message.limit !== 0) {
            writer.uint32(56).sint32(message.limit);
        }
        if (message.skip !== "0") {
            writer.uint32(64).uint64(message.skip);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListTradingStrategiesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.subaccountId = reader.string();
                    break;
                case 4:
                    message.accountAddress = reader.string();
                    break;
                case 5:
                    message.startTime = longToString(reader.sint64());
                    break;
                case 6:
                    message.endTime = longToString(reader.sint64());
                    break;
                case 7:
                    message.limit = reader.sint32();
                    break;
                case 8:
                    message.skip = longToString(reader.uint64());
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
            state: isSet(object.state) ? String(object.state) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            startTime: isSet(object.startTime) ? String(object.startTime) : "0",
            endTime: isSet(object.endTime) ? String(object.endTime) : "0",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            skip: isSet(object.skip) ? String(object.skip) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.skip !== undefined && (obj.skip = message.skip);
        return obj;
    },
    create(base) {
        return exports.ListTradingStrategiesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseListTradingStrategiesRequest();
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.subaccountId = (_c = object.subaccountId) !== null && _c !== void 0 ? _c : "";
        message.accountAddress = (_d = object.accountAddress) !== null && _d !== void 0 ? _d : "";
        message.startTime = (_e = object.startTime) !== null && _e !== void 0 ? _e : "0";
        message.endTime = (_f = object.endTime) !== null && _f !== void 0 ? _f : "0";
        message.limit = (_g = object.limit) !== null && _g !== void 0 ? _g : 0;
        message.skip = (_h = object.skip) !== null && _h !== void 0 ? _h : "0";
        return message;
    },
};
function createBaseListTradingStrategiesResponse() {
    return { strategies: [], paging: undefined };
}
exports.ListTradingStrategiesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.strategies) {
            exports.TradingStrategy.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListTradingStrategiesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.strategies.push(exports.TradingStrategy.decode(reader, reader.uint32()));
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
            strategies: Array.isArray(object === null || object === void 0 ? void 0 : object.strategies)
                ? object.strategies.map((e) => exports.TradingStrategy.fromJSON(e))
                : [],
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.strategies) {
            obj.strategies = message.strategies.map((e) => e ? exports.TradingStrategy.toJSON(e) : undefined);
        }
        else {
            obj.strategies = [];
        }
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        return obj;
    },
    create(base) {
        return exports.ListTradingStrategiesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListTradingStrategiesResponse();
        message.strategies = ((_a = object.strategies) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TradingStrategy.fromPartial(e))) || [];
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        return message;
    },
};
function createBaseTradingStrategy() {
    return {
        state: "",
        marketId: "",
        subaccountId: "",
        accountAddress: "",
        contractAddress: "",
        executionPrice: "",
        baseQuantity: "",
        quoteQuantity: "",
        lowerBound: "",
        upperBound: "",
        stopLoss: "",
        takeProfit: "",
        swapFee: "",
        baseDeposit: "",
        quoteDeposit: "",
        marketMidPrice: "",
        createdHeight: "0",
        removedHeight: "0",
        createdAt: "0",
        updatedAt: "0",
    };
}
exports.TradingStrategy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== "") {
            writer.uint32(10).string(message.state);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(26).string(message.subaccountId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(34).string(message.accountAddress);
        }
        if (message.contractAddress !== "") {
            writer.uint32(42).string(message.contractAddress);
        }
        if (message.executionPrice !== "") {
            writer.uint32(50).string(message.executionPrice);
        }
        if (message.baseQuantity !== "") {
            writer.uint32(58).string(message.baseQuantity);
        }
        if (message.quoteQuantity !== "") {
            writer.uint32(162).string(message.quoteQuantity);
        }
        if (message.lowerBound !== "") {
            writer.uint32(66).string(message.lowerBound);
        }
        if (message.upperBound !== "") {
            writer.uint32(74).string(message.upperBound);
        }
        if (message.stopLoss !== "") {
            writer.uint32(82).string(message.stopLoss);
        }
        if (message.takeProfit !== "") {
            writer.uint32(90).string(message.takeProfit);
        }
        if (message.swapFee !== "") {
            writer.uint32(98).string(message.swapFee);
        }
        if (message.baseDeposit !== "") {
            writer.uint32(138).string(message.baseDeposit);
        }
        if (message.quoteDeposit !== "") {
            writer.uint32(146).string(message.quoteDeposit);
        }
        if (message.marketMidPrice !== "") {
            writer.uint32(154).string(message.marketMidPrice);
        }
        if (message.createdHeight !== "0") {
            writer.uint32(104).sint64(message.createdHeight);
        }
        if (message.removedHeight !== "0") {
            writer.uint32(112).sint64(message.removedHeight);
        }
        if (message.createdAt !== "0") {
            writer.uint32(120).sint64(message.createdAt);
        }
        if (message.updatedAt !== "0") {
            writer.uint32(128).sint64(message.updatedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingStrategy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.subaccountId = reader.string();
                    break;
                case 4:
                    message.accountAddress = reader.string();
                    break;
                case 5:
                    message.contractAddress = reader.string();
                    break;
                case 6:
                    message.executionPrice = reader.string();
                    break;
                case 7:
                    message.baseQuantity = reader.string();
                    break;
                case 20:
                    message.quoteQuantity = reader.string();
                    break;
                case 8:
                    message.lowerBound = reader.string();
                    break;
                case 9:
                    message.upperBound = reader.string();
                    break;
                case 10:
                    message.stopLoss = reader.string();
                    break;
                case 11:
                    message.takeProfit = reader.string();
                    break;
                case 12:
                    message.swapFee = reader.string();
                    break;
                case 17:
                    message.baseDeposit = reader.string();
                    break;
                case 18:
                    message.quoteDeposit = reader.string();
                    break;
                case 19:
                    message.marketMidPrice = reader.string();
                    break;
                case 13:
                    message.createdHeight = longToString(reader.sint64());
                    break;
                case 14:
                    message.removedHeight = longToString(reader.sint64());
                    break;
                case 15:
                    message.createdAt = longToString(reader.sint64());
                    break;
                case 16:
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
            state: isSet(object.state) ? String(object.state) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            executionPrice: isSet(object.executionPrice) ? String(object.executionPrice) : "",
            baseQuantity: isSet(object.baseQuantity) ? String(object.baseQuantity) : "",
            quoteQuantity: isSet(object.quoteQuantity) ? String(object.quoteQuantity) : "",
            lowerBound: isSet(object.lowerBound) ? String(object.lowerBound) : "",
            upperBound: isSet(object.upperBound) ? String(object.upperBound) : "",
            stopLoss: isSet(object.stopLoss) ? String(object.stopLoss) : "",
            takeProfit: isSet(object.takeProfit) ? String(object.takeProfit) : "",
            swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
            baseDeposit: isSet(object.baseDeposit) ? String(object.baseDeposit) : "",
            quoteDeposit: isSet(object.quoteDeposit) ? String(object.quoteDeposit) : "",
            marketMidPrice: isSet(object.marketMidPrice) ? String(object.marketMidPrice) : "",
            createdHeight: isSet(object.createdHeight) ? String(object.createdHeight) : "0",
            removedHeight: isSet(object.removedHeight) ? String(object.removedHeight) : "0",
            createdAt: isSet(object.createdAt) ? String(object.createdAt) : "0",
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.executionPrice !== undefined && (obj.executionPrice = message.executionPrice);
        message.baseQuantity !== undefined && (obj.baseQuantity = message.baseQuantity);
        message.quoteQuantity !== undefined && (obj.quoteQuantity = message.quoteQuantity);
        message.lowerBound !== undefined && (obj.lowerBound = message.lowerBound);
        message.upperBound !== undefined && (obj.upperBound = message.upperBound);
        message.stopLoss !== undefined && (obj.stopLoss = message.stopLoss);
        message.takeProfit !== undefined && (obj.takeProfit = message.takeProfit);
        message.swapFee !== undefined && (obj.swapFee = message.swapFee);
        message.baseDeposit !== undefined && (obj.baseDeposit = message.baseDeposit);
        message.quoteDeposit !== undefined && (obj.quoteDeposit = message.quoteDeposit);
        message.marketMidPrice !== undefined && (obj.marketMidPrice = message.marketMidPrice);
        message.createdHeight !== undefined && (obj.createdHeight = message.createdHeight);
        message.removedHeight !== undefined && (obj.removedHeight = message.removedHeight);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        return obj;
    },
    create(base) {
        return exports.TradingStrategy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        const message = createBaseTradingStrategy();
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.subaccountId = (_c = object.subaccountId) !== null && _c !== void 0 ? _c : "";
        message.accountAddress = (_d = object.accountAddress) !== null && _d !== void 0 ? _d : "";
        message.contractAddress = (_e = object.contractAddress) !== null && _e !== void 0 ? _e : "";
        message.executionPrice = (_f = object.executionPrice) !== null && _f !== void 0 ? _f : "";
        message.baseQuantity = (_g = object.baseQuantity) !== null && _g !== void 0 ? _g : "";
        message.quoteQuantity = (_h = object.quoteQuantity) !== null && _h !== void 0 ? _h : "";
        message.lowerBound = (_j = object.lowerBound) !== null && _j !== void 0 ? _j : "";
        message.upperBound = (_k = object.upperBound) !== null && _k !== void 0 ? _k : "";
        message.stopLoss = (_l = object.stopLoss) !== null && _l !== void 0 ? _l : "";
        message.takeProfit = (_m = object.takeProfit) !== null && _m !== void 0 ? _m : "";
        message.swapFee = (_o = object.swapFee) !== null && _o !== void 0 ? _o : "";
        message.baseDeposit = (_p = object.baseDeposit) !== null && _p !== void 0 ? _p : "";
        message.quoteDeposit = (_q = object.quoteDeposit) !== null && _q !== void 0 ? _q : "";
        message.marketMidPrice = (_r = object.marketMidPrice) !== null && _r !== void 0 ? _r : "";
        message.createdHeight = (_s = object.createdHeight) !== null && _s !== void 0 ? _s : "0";
        message.removedHeight = (_t = object.removedHeight) !== null && _t !== void 0 ? _t : "0";
        message.createdAt = (_u = object.createdAt) !== null && _u !== void 0 ? _u : "0";
        message.updatedAt = (_v = object.updatedAt) !== null && _v !== void 0 ? _v : "0";
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
class InjectiveTradingRPCClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.ListTradingStrategies = this.ListTradingStrategies.bind(this);
    }
    ListTradingStrategies(request, metadata) {
        return this.rpc.unary(exports.InjectiveTradingRPCListTradingStrategiesDesc, exports.ListTradingStrategiesRequest.fromPartial(request), metadata);
    }
}
exports.InjectiveTradingRPCClientImpl = InjectiveTradingRPCClientImpl;
exports.InjectiveTradingRPCDesc = { serviceName: "injective_trading_rpc.InjectiveTradingRPC" };
exports.InjectiveTradingRPCListTradingStrategiesDesc = {
    methodName: "ListTradingStrategies",
    service: exports.InjectiveTradingRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListTradingStrategiesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ListTradingStrategiesResponse.decode(data);
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
