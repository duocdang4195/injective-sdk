/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { DenomTrace, Params } from "./transfer";
function createBaseQueryDenomTraceRequest() {
    return { hash: "" };
}
export const QueryDenomTraceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTraceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.hash = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { hash: isSet(object.hash) ? String(object.hash) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    create(base) {
        return QueryDenomTraceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomTraceRequest();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDenomTraceResponse() {
    return { denomTrace: undefined };
}
export const QueryDenomTraceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomTrace !== undefined) {
            DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTraceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denomTrace = DenomTrace.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { denomTrace: isSet(object.denomTrace) ? DenomTrace.fromJSON(object.denomTrace) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.denomTrace !== undefined &&
            (obj.denomTrace = message.denomTrace ? DenomTrace.toJSON(message.denomTrace) : undefined);
        return obj;
    },
    create(base) {
        return QueryDenomTraceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTraceResponse();
        message.denomTrace = (object.denomTrace !== undefined && object.denomTrace !== null)
            ? DenomTrace.fromPartial(object.denomTrace)
            : undefined;
        return message;
    },
};
function createBaseQueryDenomTracesRequest() {
    return { pagination: undefined };
}
export const QueryDenomTracesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTracesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryDenomTracesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTracesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDenomTracesResponse() {
    return { denomTraces: [], pagination: undefined };
}
export const QueryDenomTracesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.denomTraces) {
            DenomTrace.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTracesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denomTraces.push(DenomTrace.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            denomTraces: Array.isArray(object === null || object === void 0 ? void 0 : object.denomTraces) ? object.denomTraces.map((e) => DenomTrace.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denomTraces) {
            obj.denomTraces = message.denomTraces.map((e) => e ? DenomTrace.toJSON(e) : undefined);
        }
        else {
            obj.denomTraces = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryDenomTracesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomTracesResponse();
        message.denomTraces = ((_a = object.denomTraces) === null || _a === void 0 ? void 0 : _a.map((e) => DenomTrace.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        return QueryParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
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
        return QueryParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryDenomHashRequest() {
    return { trace: "" };
}
export const QueryDenomHashRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.trace !== "") {
            writer.uint32(10).string(message.trace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.trace = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { trace: isSet(object.trace) ? String(object.trace) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.trace !== undefined && (obj.trace = message.trace);
        return obj;
    },
    create(base) {
        return QueryDenomHashRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomHashRequest();
        message.trace = (_a = object.trace) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDenomHashResponse() {
    return { hash: "" };
}
export const QueryDenomHashResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.hash = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { hash: isSet(object.hash) ? String(object.hash) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    create(base) {
        return QueryDenomHashResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomHashResponse();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryEscrowAddressRequest() {
    return { portId: "", channelId: "" };
}
export const QueryEscrowAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEscrowAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.portId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.channelId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    create(base) {
        return QueryEscrowAddressRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryEscrowAddressRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryEscrowAddressResponse() {
    return { escrowAddress: "" };
}
export const QueryEscrowAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.escrowAddress !== "") {
            writer.uint32(10).string(message.escrowAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEscrowAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.escrowAddress = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { escrowAddress: isSet(object.escrowAddress) ? String(object.escrowAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.escrowAddress !== undefined && (obj.escrowAddress = message.escrowAddress);
        return obj;
    },
    create(base) {
        return QueryEscrowAddressResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryEscrowAddressResponse();
        message.escrowAddress = (_a = object.escrowAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryTotalEscrowForDenomRequest() {
    return { denom: "" };
}
export const QueryTotalEscrowForDenomRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalEscrowForDenomRequest();
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
        return QueryTotalEscrowForDenomRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTotalEscrowForDenomRequest();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryTotalEscrowForDenomResponse() {
    return { amount: undefined };
}
export const QueryTotalEscrowForDenomResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalEscrowForDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return QueryTotalEscrowForDenomResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryTotalEscrowForDenomResponse();
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.DenomTrace = this.DenomTrace.bind(this);
        this.DenomTraces = this.DenomTraces.bind(this);
        this.Params = this.Params.bind(this);
        this.DenomHash = this.DenomHash.bind(this);
        this.EscrowAddress = this.EscrowAddress.bind(this);
        this.TotalEscrowForDenom = this.TotalEscrowForDenom.bind(this);
    }
    DenomTrace(request, metadata) {
        return this.rpc.unary(QueryDenomTraceDesc, QueryDenomTraceRequest.fromPartial(request), metadata);
    }
    DenomTraces(request, metadata) {
        return this.rpc.unary(QueryDenomTracesDesc, QueryDenomTracesRequest.fromPartial(request), metadata);
    }
    Params(request, metadata) {
        return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
    }
    DenomHash(request, metadata) {
        return this.rpc.unary(QueryDenomHashDesc, QueryDenomHashRequest.fromPartial(request), metadata);
    }
    EscrowAddress(request, metadata) {
        return this.rpc.unary(QueryEscrowAddressDesc, QueryEscrowAddressRequest.fromPartial(request), metadata);
    }
    TotalEscrowForDenom(request, metadata) {
        return this.rpc.unary(QueryTotalEscrowForDenomDesc, QueryTotalEscrowForDenomRequest.fromPartial(request), metadata);
    }
}
export const QueryDesc = { serviceName: "ibc.applications.transfer.v1.Query" };
export const QueryDenomTraceDesc = {
    methodName: "DenomTrace",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryDenomTraceRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryDenomTraceResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryDenomTracesDesc = {
    methodName: "DenomTraces",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryDenomTracesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryDenomTracesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryParamsDesc = {
    methodName: "Params",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryParamsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryParamsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryDenomHashDesc = {
    methodName: "DenomHash",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryDenomHashRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryDenomHashResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryEscrowAddressDesc = {
    methodName: "EscrowAddress",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryEscrowAddressRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryEscrowAddressResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryTotalEscrowForDenomDesc = {
    methodName: "TotalEscrowForDenom",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryTotalEscrowForDenomRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryTotalEscrowForDenomResponse.decode(data);
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
