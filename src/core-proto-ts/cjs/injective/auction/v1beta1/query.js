"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.QueryAuctionModuleStateDesc = exports.QueryCurrentAuctionBasketDesc = exports.QueryAuctionParamsDesc = exports.QueryDesc = exports.QueryClientImpl = exports.QueryModuleStateResponse = exports.QueryModuleStateRequest = exports.QueryCurrentAuctionBasketResponse = exports.QueryCurrentAuctionBasketRequest = exports.QueryAuctionParamsResponse = exports.QueryAuctionParamsRequest = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const auction_1 = require("./auction");
const genesis_1 = require("./genesis");
function createBaseQueryAuctionParamsRequest() {
    return {};
}
exports.QueryAuctionParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionParamsRequest();
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
        return exports.QueryAuctionParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryAuctionParamsRequest();
        return message;
    },
};
function createBaseQueryAuctionParamsResponse() {
    return { params: undefined };
}
exports.QueryAuctionParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            auction_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = auction_1.Params.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { params: isSet(object.params) ? auction_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? auction_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryAuctionParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryAuctionParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? auction_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryCurrentAuctionBasketRequest() {
    return {};
}
exports.QueryCurrentAuctionBasketRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentAuctionBasketRequest();
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
        return exports.QueryCurrentAuctionBasketRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryCurrentAuctionBasketRequest();
        return message;
    },
};
function createBaseQueryCurrentAuctionBasketResponse() {
    return { amount: [], auctionRound: "0", auctionClosingTime: "0", highestBidder: "", highestBidAmount: "" };
}
exports.QueryCurrentAuctionBasketResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.auctionRound !== "0") {
            writer.uint32(16).uint64(message.auctionRound);
        }
        if (message.auctionClosingTime !== "0") {
            writer.uint32(24).int64(message.auctionClosingTime);
        }
        if (message.highestBidder !== "") {
            writer.uint32(34).string(message.highestBidder);
        }
        if (message.highestBidAmount !== "") {
            writer.uint32(42).string(message.highestBidAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentAuctionBasketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.auctionRound = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.auctionClosingTime = longToString(reader.int64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.highestBidder = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.highestBidAmount = reader.string();
                    continue;
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
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
            auctionRound: isSet(object.auctionRound) ? String(object.auctionRound) : "0",
            auctionClosingTime: isSet(object.auctionClosingTime) ? String(object.auctionClosingTime) : "0",
            highestBidder: isSet(object.highestBidder) ? String(object.highestBidder) : "",
            highestBidAmount: isSet(object.highestBidAmount) ? String(object.highestBidAmount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.auctionRound !== undefined && (obj.auctionRound = message.auctionRound);
        message.auctionClosingTime !== undefined && (obj.auctionClosingTime = message.auctionClosingTime);
        message.highestBidder !== undefined && (obj.highestBidder = message.highestBidder);
        message.highestBidAmount !== undefined && (obj.highestBidAmount = message.highestBidAmount);
        return obj;
    },
    create(base) {
        return exports.QueryCurrentAuctionBasketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseQueryCurrentAuctionBasketResponse();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.auctionRound = (_b = object.auctionRound) !== null && _b !== void 0 ? _b : "0";
        message.auctionClosingTime = (_c = object.auctionClosingTime) !== null && _c !== void 0 ? _c : "0";
        message.highestBidder = (_d = object.highestBidder) !== null && _d !== void 0 ? _d : "";
        message.highestBidAmount = (_e = object.highestBidAmount) !== null && _e !== void 0 ? _e : "";
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
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.AuctionParams = this.AuctionParams.bind(this);
        this.CurrentAuctionBasket = this.CurrentAuctionBasket.bind(this);
        this.AuctionModuleState = this.AuctionModuleState.bind(this);
    }
    AuctionParams(request, metadata) {
        return this.rpc.unary(exports.QueryAuctionParamsDesc, exports.QueryAuctionParamsRequest.fromPartial(request), metadata);
    }
    CurrentAuctionBasket(request, metadata) {
        return this.rpc.unary(exports.QueryCurrentAuctionBasketDesc, exports.QueryCurrentAuctionBasketRequest.fromPartial(request), metadata);
    }
    AuctionModuleState(request, metadata) {
        return this.rpc.unary(exports.QueryAuctionModuleStateDesc, exports.QueryModuleStateRequest.fromPartial(request), metadata);
    }
}
exports.QueryClientImpl = QueryClientImpl;
exports.QueryDesc = { serviceName: "injective.auction.v1beta1.Query" };
exports.QueryAuctionParamsDesc = {
    methodName: "AuctionParams",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryAuctionParamsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryAuctionParamsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryCurrentAuctionBasketDesc = {
    methodName: "CurrentAuctionBasket",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryCurrentAuctionBasketRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryCurrentAuctionBasketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryAuctionModuleStateDesc = {
    methodName: "AuctionModuleState",
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
