"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.QuerySigningInfosDesc = exports.QuerySigningInfoDesc = exports.QueryParamsDesc = exports.QueryDesc = exports.QueryClientImpl = exports.QuerySigningInfosResponse = exports.QuerySigningInfosRequest = exports.QuerySigningInfoResponse = exports.QuerySigningInfoRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../base/query/v1beta1/pagination");
const slashing_1 = require("./slashing");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.QueryParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            slashing_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = slashing_1.Params.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { params: isSet(object.params) ? slashing_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? slashing_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? slashing_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQuerySigningInfoRequest() {
    return { consAddress: "" };
}
exports.QuerySigningInfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.consAddress !== "") {
            writer.uint32(10).string(message.consAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySigningInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.consAddress = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { consAddress: isSet(object.consAddress) ? String(object.consAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.consAddress !== undefined && (obj.consAddress = message.consAddress);
        return obj;
    },
    create(base) {
        return exports.QuerySigningInfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySigningInfoRequest();
        message.consAddress = (_a = object.consAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySigningInfoResponse() {
    return { valSigningInfo: undefined };
}
exports.QuerySigningInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.valSigningInfo !== undefined) {
            slashing_1.ValidatorSigningInfo.encode(message.valSigningInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySigningInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.valSigningInfo = slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            valSigningInfo: isSet(object.valSigningInfo) ? slashing_1.ValidatorSigningInfo.fromJSON(object.valSigningInfo) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.valSigningInfo !== undefined &&
            (obj.valSigningInfo = message.valSigningInfo ? slashing_1.ValidatorSigningInfo.toJSON(message.valSigningInfo) : undefined);
        return obj;
    },
    create(base) {
        return exports.QuerySigningInfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQuerySigningInfoResponse();
        message.valSigningInfo = (object.valSigningInfo !== undefined && object.valSigningInfo !== null)
            ? slashing_1.ValidatorSigningInfo.fromPartial(object.valSigningInfo)
            : undefined;
        return message;
    },
};
function createBaseQuerySigningInfosRequest() {
    return { pagination: undefined };
}
exports.QuerySigningInfosRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySigningInfosRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QuerySigningInfosRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQuerySigningInfosRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQuerySigningInfosResponse() {
    return { info: [], pagination: undefined };
}
exports.QuerySigningInfosResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.info) {
            slashing_1.ValidatorSigningInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySigningInfosResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.info.push(slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            info: Array.isArray(object === null || object === void 0 ? void 0 : object.info) ? object.info.map((e) => slashing_1.ValidatorSigningInfo.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.info) {
            obj.info = message.info.map((e) => e ? slashing_1.ValidatorSigningInfo.toJSON(e) : undefined);
        }
        else {
            obj.info = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QuerySigningInfosResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySigningInfosResponse();
        message.info = ((_a = object.info) === null || _a === void 0 ? void 0 : _a.map((e) => slashing_1.ValidatorSigningInfo.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.SigningInfo = this.SigningInfo.bind(this);
        this.SigningInfos = this.SigningInfos.bind(this);
    }
    Params(request, metadata) {
        return this.rpc.unary(exports.QueryParamsDesc, exports.QueryParamsRequest.fromPartial(request), metadata);
    }
    SigningInfo(request, metadata) {
        return this.rpc.unary(exports.QuerySigningInfoDesc, exports.QuerySigningInfoRequest.fromPartial(request), metadata);
    }
    SigningInfos(request, metadata) {
        return this.rpc.unary(exports.QuerySigningInfosDesc, exports.QuerySigningInfosRequest.fromPartial(request), metadata);
    }
}
exports.QueryClientImpl = QueryClientImpl;
exports.QueryDesc = { serviceName: "cosmos.slashing.v1beta1.Query" };
exports.QueryParamsDesc = {
    methodName: "Params",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryParamsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryParamsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QuerySigningInfoDesc = {
    methodName: "SigningInfo",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QuerySigningInfoRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QuerySigningInfoResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QuerySigningInfosDesc = {
    methodName: "SigningInfos",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QuerySigningInfosRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QuerySigningInfosResponse.decode(data);
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
