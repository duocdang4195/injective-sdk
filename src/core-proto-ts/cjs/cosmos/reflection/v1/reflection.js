"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.ReflectionServiceFileDescriptorsDesc = exports.ReflectionServiceDesc = exports.ReflectionServiceClientImpl = exports.FileDescriptorsResponse = exports.FileDescriptorsRequest = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const descriptor_1 = require("../../../google/protobuf/descriptor");
function createBaseFileDescriptorsRequest() {
    return {};
}
exports.FileDescriptorsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorsRequest();
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
        return exports.FileDescriptorsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseFileDescriptorsRequest();
        return message;
    },
};
function createBaseFileDescriptorsResponse() {
    return { files: [] };
}
exports.FileDescriptorsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.files) {
            descriptor_1.FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.files.push(descriptor_1.FileDescriptorProto.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { files: Array.isArray(object === null || object === void 0 ? void 0 : object.files) ? object.files.map((e) => descriptor_1.FileDescriptorProto.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.files) {
            obj.files = message.files.map((e) => e ? descriptor_1.FileDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.files = [];
        }
        return obj;
    },
    create(base) {
        return exports.FileDescriptorsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFileDescriptorsResponse();
        message.files = ((_a = object.files) === null || _a === void 0 ? void 0 : _a.map((e) => descriptor_1.FileDescriptorProto.fromPartial(e))) || [];
        return message;
    },
};
class ReflectionServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.FileDescriptors = this.FileDescriptors.bind(this);
    }
    FileDescriptors(request, metadata) {
        return this.rpc.unary(exports.ReflectionServiceFileDescriptorsDesc, exports.FileDescriptorsRequest.fromPartial(request), metadata);
    }
}
exports.ReflectionServiceClientImpl = ReflectionServiceClientImpl;
exports.ReflectionServiceDesc = { serviceName: "cosmos.reflection.v1.ReflectionService" };
exports.ReflectionServiceFileDescriptorsDesc = {
    methodName: "FileDescriptors",
    service: exports.ReflectionServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.FileDescriptorsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.FileDescriptorsResponse.decode(data);
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
class GrpcWebError extends tsProtoGlobalThis.Error {
    constructor(message, code, metadata) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}
exports.GrpcWebError = GrpcWebError;
