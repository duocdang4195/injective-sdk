/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { oracleTypeFromJSON, oracleTypeToJSON } from "../../oracle/v1beta1/oracle";
import { Params } from "./insurance";
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
export const MsgCreateInsuranceFund = {
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
        if (message.expiry !== "0") {
            writer.uint32(56).int64(message.expiry);
        }
        if (message.initialDeposit !== undefined) {
            Coin.encode(message.initialDeposit, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.initialDeposit = Coin.decode(reader, reader.uint32());
                    continue;
            }
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
            expiry: isSet(object.expiry) ? String(object.expiry) : "0",
            initialDeposit: isSet(object.initialDeposit) ? Coin.fromJSON(object.initialDeposit) : undefined,
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
        message.expiry !== undefined && (obj.expiry = message.expiry);
        message.initialDeposit !== undefined &&
            (obj.initialDeposit = message.initialDeposit ? Coin.toJSON(message.initialDeposit) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateInsuranceFund.fromPartial(base !== null && base !== void 0 ? base : {});
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
            ? Coin.fromPartial(object.initialDeposit)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateInsuranceFundResponse() {
    return {};
}
export const MsgCreateInsuranceFundResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return MsgCreateInsuranceFundResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateInsuranceFundResponse();
        return message;
    },
};
function createBaseMsgUnderwrite() {
    return { sender: "", marketId: "", deposit: undefined };
}
export const MsgUnderwrite = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.deposit !== undefined) {
            Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.deposit = Coin.decode(reader, reader.uint32());
                    continue;
            }
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
            deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
        return obj;
    },
    create(base) {
        return MsgUnderwrite.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUnderwrite();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.deposit = (object.deposit !== undefined && object.deposit !== null)
            ? Coin.fromPartial(object.deposit)
            : undefined;
        return message;
    },
};
function createBaseMsgUnderwriteResponse() {
    return {};
}
export const MsgUnderwriteResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return MsgUnderwriteResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUnderwriteResponse();
        return message;
    },
};
function createBaseMsgRequestRedemption() {
    return { sender: "", marketId: "", amount: undefined };
}
export const MsgRequestRedemption = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return MsgRequestRedemption.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgRequestRedemption();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgRequestRedemptionResponse() {
    return {};
}
export const MsgRequestRedemptionResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return MsgRequestRedemptionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRequestRedemptionResponse();
        return message;
    },
};
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
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateInsuranceFund = this.CreateInsuranceFund.bind(this);
        this.Underwrite = this.Underwrite.bind(this);
        this.RequestRedemption = this.RequestRedemption.bind(this);
        this.UpdateParams = this.UpdateParams.bind(this);
    }
    CreateInsuranceFund(request, metadata) {
        return this.rpc.unary(MsgCreateInsuranceFundDesc, MsgCreateInsuranceFund.fromPartial(request), metadata);
    }
    Underwrite(request, metadata) {
        return this.rpc.unary(MsgUnderwriteDesc, MsgUnderwrite.fromPartial(request), metadata);
    }
    RequestRedemption(request, metadata) {
        return this.rpc.unary(MsgRequestRedemptionDesc, MsgRequestRedemption.fromPartial(request), metadata);
    }
    UpdateParams(request, metadata) {
        return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request), metadata);
    }
}
export const MsgDesc = { serviceName: "injective.insurance.v1beta1.Msg" };
export const MsgCreateInsuranceFundDesc = {
    methodName: "CreateInsuranceFund",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgCreateInsuranceFund.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgCreateInsuranceFundResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgUnderwriteDesc = {
    methodName: "Underwrite",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgUnderwrite.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgUnderwriteResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgRequestRedemptionDesc = {
    methodName: "RequestRedemption",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgRequestRedemption.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgRequestRedemptionResponse.decode(data);
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
