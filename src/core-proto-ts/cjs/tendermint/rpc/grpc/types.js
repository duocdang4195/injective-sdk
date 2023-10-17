"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.BroadcastAPIBroadcastTxDesc = exports.BroadcastAPIPingDesc = exports.BroadcastAPIDesc = exports.BroadcastAPIClientImpl = exports.ResponseBroadcastTx = exports.ResponsePing = exports.RequestBroadcastTx = exports.RequestPing = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const types_1 = require("../../abci/types");
function createBaseRequestPing() {
    return {};
}
exports.RequestPing = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestPing();
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
        return exports.RequestPing.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseRequestPing();
        return message;
    },
};
function createBaseRequestBroadcastTx() {
    return { tx: new Uint8Array() };
}
exports.RequestBroadcastTx = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestBroadcastTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tx = reader.bytes();
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
        return { tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array() };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.RequestBroadcastTx.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRequestBroadcastTx();
        message.tx = (_a = object.tx) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseResponsePing() {
    return {};
}
exports.ResponsePing = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponsePing();
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
        return exports.ResponsePing.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseResponsePing();
        return message;
    },
};
function createBaseResponseBroadcastTx() {
    return { checkTx: undefined, deliverTx: undefined };
}
exports.ResponseBroadcastTx = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.checkTx !== undefined) {
            types_1.ResponseCheckTx.encode(message.checkTx, writer.uint32(10).fork()).ldelim();
        }
        if (message.deliverTx !== undefined) {
            types_1.ResponseDeliverTx.encode(message.deliverTx, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseBroadcastTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.checkTx = types_1.ResponseCheckTx.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.deliverTx = types_1.ResponseDeliverTx.decode(reader, reader.uint32());
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
            checkTx: isSet(object.checkTx) ? types_1.ResponseCheckTx.fromJSON(object.checkTx) : undefined,
            deliverTx: isSet(object.deliverTx) ? types_1.ResponseDeliverTx.fromJSON(object.deliverTx) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.checkTx !== undefined &&
            (obj.checkTx = message.checkTx ? types_1.ResponseCheckTx.toJSON(message.checkTx) : undefined);
        message.deliverTx !== undefined &&
            (obj.deliverTx = message.deliverTx ? types_1.ResponseDeliverTx.toJSON(message.deliverTx) : undefined);
        return obj;
    },
    create(base) {
        return exports.ResponseBroadcastTx.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseResponseBroadcastTx();
        message.checkTx = (object.checkTx !== undefined && object.checkTx !== null)
            ? types_1.ResponseCheckTx.fromPartial(object.checkTx)
            : undefined;
        message.deliverTx = (object.deliverTx !== undefined && object.deliverTx !== null)
            ? types_1.ResponseDeliverTx.fromPartial(object.deliverTx)
            : undefined;
        return message;
    },
};
class BroadcastAPIClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Ping = this.Ping.bind(this);
        this.BroadcastTx = this.BroadcastTx.bind(this);
    }
    Ping(request, metadata) {
        return this.rpc.unary(exports.BroadcastAPIPingDesc, exports.RequestPing.fromPartial(request), metadata);
    }
    BroadcastTx(request, metadata) {
        return this.rpc.unary(exports.BroadcastAPIBroadcastTxDesc, exports.RequestBroadcastTx.fromPartial(request), metadata);
    }
}
exports.BroadcastAPIClientImpl = BroadcastAPIClientImpl;
exports.BroadcastAPIDesc = { serviceName: "tendermint.rpc.grpc.BroadcastAPI" };
exports.BroadcastAPIPingDesc = {
    methodName: "Ping",
    service: exports.BroadcastAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.RequestPing.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ResponsePing.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.BroadcastAPIBroadcastTxDesc = {
    methodName: "BroadcastTx",
    service: exports.BroadcastAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.RequestBroadcastTx.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ResponseBroadcastTx.decode(data);
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
