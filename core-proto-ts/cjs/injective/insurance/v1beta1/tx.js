"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.MsgUpdateParamsDesc = exports.MsgRequestRedemptionDesc = exports.MsgUnderwriteDesc = exports.MsgCreateInsuranceFundDesc = exports.MsgDesc = exports.MsgClientImpl = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgRequestRedemptionResponse = exports.MsgRequestRedemption = exports.MsgUnderwriteResponse = exports.MsgUnderwrite = exports.MsgCreateInsuranceFundResponse = exports.MsgCreateInsuranceFund = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const oracle_1 = require("../../oracle/v1beta1/oracle");
const insurance_1 = require("./insurance");
function createBaseMsgCreateInsuranceFund() {
    return {
        sender: "",
        ticker: "",
        quoteDenom: "",
        oracleBase: "",
        oracleQuote: "",
        oracleType: 0,
        expiry: "0",
        initialDeposit: undefined,
    };
}
exports.MsgCreateInsuranceFund = {
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
        if (message.expiry !== "0") {
            writer.uint32(56).int64(message.expiry);
        }
        if (message.initialDeposit !== undefined) {
            coin_1.Coin.encode(message.initialDeposit, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateInsuranceFund();
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
                    message.expiry = longToString(reader.int64());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.initialDeposit = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
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
            expiry: isSet(object.expiry) ? String(object.expiry) : "0",
            initialDeposit: isSet(object.initialDeposit) ? coin_1.Coin.fromJSON(object.initialDeposit) : undefined,
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
        message.expiry !== undefined && (obj.expiry = message.expiry);
        message.initialDeposit !== undefined &&
            (obj.initialDeposit = message.initialDeposit ? coin_1.Coin.toJSON(message.initialDeposit) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgCreateInsuranceFund.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseMsgCreateInsuranceFund();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.ticker = (_b = object.ticker) !== null && _b !== void 0 ? _b : "";
        message.quoteDenom = (_c = object.quoteDenom) !== null && _c !== void 0 ? _c : "";
        message.oracleBase = (_d = object.oracleBase) !== null && _d !== void 0 ? _d : "";
        message.oracleQuote = (_e = object.oracleQuote) !== null && _e !== void 0 ? _e : "";
        message.oracleType = (_f = object.oracleType) !== null && _f !== void 0 ? _f : 0;
        message.expiry = (_g = object.expiry) !== null && _g !== void 0 ? _g : "0";
        message.initialDeposit = (object.initialDeposit !== undefined && object.initialDeposit !== null)
            ? coin_1.Coin.fromPartial(object.initialDeposit)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateInsuranceFundResponse() {
    return {};
}
exports.MsgCreateInsuranceFundResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateInsuranceFundResponse();
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
        return exports.MsgCreateInsuranceFundResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateInsuranceFundResponse();
        return message;
    },
};
function createBaseMsgUnderwrite() {
    return { sender: "", marketId: "", deposit: undefined };
}
exports.MsgUnderwrite = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnderwrite();
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
                    message.deposit = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
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
            deposit: isSet(object.deposit) ? coin_1.Coin.fromJSON(object.deposit) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.deposit !== undefined && (obj.deposit = message.deposit ? coin_1.Coin.toJSON(message.deposit) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgUnderwrite.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUnderwrite();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.deposit = (object.deposit !== undefined && object.deposit !== null)
            ? coin_1.Coin.fromPartial(object.deposit)
            : undefined;
        return message;
    },
};
function createBaseMsgUnderwriteResponse() {
    return {};
}
exports.MsgUnderwriteResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnderwriteResponse();
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
        return exports.MsgUnderwriteResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUnderwriteResponse();
        return message;
    },
};
function createBaseMsgRequestRedemption() {
    return { sender: "", marketId: "", amount: undefined };
}
exports.MsgRequestRedemption = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestRedemption();
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
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgRequestRedemption.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgRequestRedemption();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? coin_1.Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgRequestRedemptionResponse() {
    return {};
}
exports.MsgRequestRedemptionResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestRedemptionResponse();
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
        return exports.MsgRequestRedemptionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRequestRedemptionResponse();
        return message;
    },
};
function createBaseMsgUpdateParams() {
    return { authority: "", params: undefined };
}
exports.MsgUpdateParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            insurance_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.params = insurance_1.Params.decode(reader, reader.uint32());
                    continue;
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
            params: isSet(object.params) ? insurance_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? insurance_1.Params.toJSON(message.params) : undefined);
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
            ? insurance_1.Params.fromPartial(object.params)
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
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateInsuranceFund = this.CreateInsuranceFund.bind(this);
        this.Underwrite = this.Underwrite.bind(this);
        this.RequestRedemption = this.RequestRedemption.bind(this);
        this.UpdateParams = this.UpdateParams.bind(this);
    }
    CreateInsuranceFund(request, metadata) {
        return this.rpc.unary(exports.MsgCreateInsuranceFundDesc, exports.MsgCreateInsuranceFund.fromPartial(request), metadata);
    }
    Underwrite(request, metadata) {
        return this.rpc.unary(exports.MsgUnderwriteDesc, exports.MsgUnderwrite.fromPartial(request), metadata);
    }
    RequestRedemption(request, metadata) {
        return this.rpc.unary(exports.MsgRequestRedemptionDesc, exports.MsgRequestRedemption.fromPartial(request), metadata);
    }
    UpdateParams(request, metadata) {
        return this.rpc.unary(exports.MsgUpdateParamsDesc, exports.MsgUpdateParams.fromPartial(request), metadata);
    }
}
exports.MsgClientImpl = MsgClientImpl;
exports.MsgDesc = { serviceName: "injective.insurance.v1beta1.Msg" };
exports.MsgCreateInsuranceFundDesc = {
    methodName: "CreateInsuranceFund",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgCreateInsuranceFund.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgCreateInsuranceFundResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgUnderwriteDesc = {
    methodName: "Underwrite",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgUnderwrite.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgUnderwriteResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgRequestRedemptionDesc = {
    methodName: "RequestRedemption",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgRequestRedemption.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgRequestRedemptionResponse.decode(data);
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
