/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Height } from "../../../core/client/v1/client";
function createBaseMsgTransfer() {
    return {
        sourcePort: "",
        sourceChannel: "",
        token: undefined,
        sender: "",
        receiver: "",
        timeoutHeight: undefined,
        timeoutTimestamp: "0",
        memo: "",
    };
}
export const MsgTransfer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sourcePort !== "") {
            writer.uint32(10).string(message.sourcePort);
        }
        if (message.sourceChannel !== "") {
            writer.uint32(18).string(message.sourceChannel);
        }
        if (message.token !== undefined) {
            Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(42).string(message.receiver);
        }
        if (message.timeoutHeight !== undefined) {
            Height.encode(message.timeoutHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.timeoutTimestamp !== "0") {
            writer.uint32(56).uint64(message.timeoutTimestamp);
        }
        if (message.memo !== "") {
            writer.uint32(66).string(message.memo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sourcePort = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sourceChannel = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.token = Coin.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.receiver = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.timeoutHeight = Height.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.timeoutTimestamp = longToString(reader.uint64());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.memo = reader.string();
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
            sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
            sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
            token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            timeoutHeight: isSet(object.timeoutHeight) ? Height.fromJSON(object.timeoutHeight) : undefined,
            timeoutTimestamp: isSet(object.timeoutTimestamp) ? String(object.timeoutTimestamp) : "0",
            memo: isSet(object.memo) ? String(object.memo) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
        message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
        message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.timeoutHeight !== undefined &&
            (obj.timeoutHeight = message.timeoutHeight ? Height.toJSON(message.timeoutHeight) : undefined);
        message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = message.timeoutTimestamp);
        message.memo !== undefined && (obj.memo = message.memo);
        return obj;
    },
    create(base) {
        return MsgTransfer.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMsgTransfer();
        message.sourcePort = (_a = object.sourcePort) !== null && _a !== void 0 ? _a : "";
        message.sourceChannel = (_b = object.sourceChannel) !== null && _b !== void 0 ? _b : "";
        message.token = (object.token !== undefined && object.token !== null) ? Coin.fromPartial(object.token) : undefined;
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        message.receiver = (_d = object.receiver) !== null && _d !== void 0 ? _d : "";
        message.timeoutHeight = (object.timeoutHeight !== undefined && object.timeoutHeight !== null)
            ? Height.fromPartial(object.timeoutHeight)
            : undefined;
        message.timeoutTimestamp = (_e = object.timeoutTimestamp) !== null && _e !== void 0 ? _e : "0";
        message.memo = (_f = object.memo) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseMsgTransferResponse() {
    return { sequence: "0" };
}
export const MsgTransferResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sequence !== "0") {
            writer.uint32(8).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.sequence = longToString(reader.uint64());
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
        return { sequence: isSet(object.sequence) ? String(object.sequence) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    create(base) {
        return MsgTransferResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgTransferResponse();
        message.sequence = (_a = object.sequence) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Transfer = this.Transfer.bind(this);
    }
    Transfer(request, metadata) {
        return this.rpc.unary(MsgTransferDesc, MsgTransfer.fromPartial(request), metadata);
    }
}
export const MsgDesc = { serviceName: "ibc.applications.transfer.v1.Msg" };
export const MsgTransferDesc = {
    methodName: "Transfer",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgTransfer.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgTransferResponse.decode(data);
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
