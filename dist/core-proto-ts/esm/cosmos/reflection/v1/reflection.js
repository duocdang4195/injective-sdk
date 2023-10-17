/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { FileDescriptorProto } from "../../../google/protobuf/descriptor";
function createBaseFileDescriptorsRequest() {
    return {};
}
export const FileDescriptorsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return FileDescriptorsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseFileDescriptorsRequest();
        return message;
    },
};
function createBaseFileDescriptorsResponse() {
    return { files: [] };
}
export const FileDescriptorsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.files) {
            FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.files.push(FileDescriptorProto.decode(reader, reader.uint32()));
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
        return { files: Array.isArray(object === null || object === void 0 ? void 0 : object.files) ? object.files.map((e) => FileDescriptorProto.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.files) {
            obj.files = message.files.map((e) => e ? FileDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.files = [];
        }
        return obj;
    },
    create(base) {
        return FileDescriptorsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFileDescriptorsResponse();
        message.files = ((_a = object.files) === null || _a === void 0 ? void 0 : _a.map((e) => FileDescriptorProto.fromPartial(e))) || [];
        return message;
    },
};
export class ReflectionServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.FileDescriptors = this.FileDescriptors.bind(this);
    }
    FileDescriptors(request, metadata) {
        return this.rpc.unary(ReflectionServiceFileDescriptorsDesc, FileDescriptorsRequest.fromPartial(request), metadata);
    }
}
export const ReflectionServiceDesc = { serviceName: "cosmos.reflection.v1.ReflectionService" };
export const ReflectionServiceFileDescriptorsDesc = {
    methodName: "FileDescriptors",
    service: ReflectionServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return FileDescriptorsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = FileDescriptorsResponse.decode(data);
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
export class GrpcWebError extends tsProtoGlobalThis.Error {
    constructor(message, code, metadata) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}
