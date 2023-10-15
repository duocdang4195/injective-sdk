"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.MsgPayPacketFeeAsyncDesc = exports.MsgPayPacketFeeDesc = exports.MsgRegisterCounterpartyPayeeDesc = exports.MsgRegisterPayeeDesc = exports.MsgDesc = exports.MsgClientImpl = exports.MsgPayPacketFeeAsyncResponse = exports.MsgPayPacketFeeAsync = exports.MsgPayPacketFeeResponse = exports.MsgPayPacketFee = exports.MsgRegisterCounterpartyPayeeResponse = exports.MsgRegisterCounterpartyPayee = exports.MsgRegisterPayeeResponse = exports.MsgRegisterPayee = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const channel_1 = require("../../../core/channel/v1/channel");
const fee_1 = require("./fee");
function createBaseMsgRegisterPayee() {
    return { portId: "", channelId: "", relayer: "", payee: "" };
}
exports.MsgRegisterPayee = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(26).string(message.relayer);
        }
        if (message.payee !== "") {
            writer.uint32(34).string(message.payee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterPayee();
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
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.relayer = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.payee = reader.string();
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
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
            payee: isSet(object.payee) ? String(object.payee) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.relayer !== undefined && (obj.relayer = message.relayer);
        message.payee !== undefined && (obj.payee = message.payee);
        return obj;
    },
    create(base) {
        return exports.MsgRegisterPayee.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgRegisterPayee();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.relayer = (_c = object.relayer) !== null && _c !== void 0 ? _c : "";
        message.payee = (_d = object.payee) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgRegisterPayeeResponse() {
    return {};
}
exports.MsgRegisterPayeeResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterPayeeResponse();
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
        return exports.MsgRegisterPayeeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRegisterPayeeResponse();
        return message;
    },
};
function createBaseMsgRegisterCounterpartyPayee() {
    return { portId: "", channelId: "", relayer: "", counterpartyPayee: "" };
}
exports.MsgRegisterCounterpartyPayee = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(26).string(message.relayer);
        }
        if (message.counterpartyPayee !== "") {
            writer.uint32(34).string(message.counterpartyPayee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterCounterpartyPayee();
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
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.relayer = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.counterpartyPayee = reader.string();
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
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
            counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.relayer !== undefined && (obj.relayer = message.relayer);
        message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
        return obj;
    },
    create(base) {
        return exports.MsgRegisterCounterpartyPayee.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgRegisterCounterpartyPayee();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.relayer = (_c = object.relayer) !== null && _c !== void 0 ? _c : "";
        message.counterpartyPayee = (_d = object.counterpartyPayee) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgRegisterCounterpartyPayeeResponse() {
    return {};
}
exports.MsgRegisterCounterpartyPayeeResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterCounterpartyPayeeResponse();
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
        return exports.MsgRegisterCounterpartyPayeeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRegisterCounterpartyPayeeResponse();
        return message;
    },
};
function createBaseMsgPayPacketFee() {
    return { fee: undefined, sourcePortId: "", sourceChannelId: "", signer: "", relayers: [] };
}
exports.MsgPayPacketFee = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fee !== undefined) {
            fee_1.Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
        }
        if (message.sourcePortId !== "") {
            writer.uint32(18).string(message.sourcePortId);
        }
        if (message.sourceChannelId !== "") {
            writer.uint32(26).string(message.sourceChannelId);
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        for (const v of message.relayers) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPayPacketFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fee = fee_1.Fee.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sourcePortId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.sourceChannelId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.signer = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.relayers.push(reader.string());
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
            fee: isSet(object.fee) ? fee_1.Fee.fromJSON(object.fee) : undefined,
            sourcePortId: isSet(object.sourcePortId) ? String(object.sourcePortId) : "",
            sourceChannelId: isSet(object.sourceChannelId) ? String(object.sourceChannelId) : "",
            signer: isSet(object.signer) ? String(object.signer) : "",
            relayers: Array.isArray(object === null || object === void 0 ? void 0 : object.relayers) ? object.relayers.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.fee !== undefined && (obj.fee = message.fee ? fee_1.Fee.toJSON(message.fee) : undefined);
        message.sourcePortId !== undefined && (obj.sourcePortId = message.sourcePortId);
        message.sourceChannelId !== undefined && (obj.sourceChannelId = message.sourceChannelId);
        message.signer !== undefined && (obj.signer = message.signer);
        if (message.relayers) {
            obj.relayers = message.relayers.map((e) => e);
        }
        else {
            obj.relayers = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgPayPacketFee.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgPayPacketFee();
        message.fee = (object.fee !== undefined && object.fee !== null) ? fee_1.Fee.fromPartial(object.fee) : undefined;
        message.sourcePortId = (_a = object.sourcePortId) !== null && _a !== void 0 ? _a : "";
        message.sourceChannelId = (_b = object.sourceChannelId) !== null && _b !== void 0 ? _b : "";
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        message.relayers = ((_d = object.relayers) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgPayPacketFeeResponse() {
    return {};
}
exports.MsgPayPacketFeeResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPayPacketFeeResponse();
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
        return exports.MsgPayPacketFeeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgPayPacketFeeResponse();
        return message;
    },
};
function createBaseMsgPayPacketFeeAsync() {
    return { packetId: undefined, packetFee: undefined };
}
exports.MsgPayPacketFeeAsync = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.packetId !== undefined) {
            channel_1.PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        if (message.packetFee !== undefined) {
            fee_1.PacketFee.encode(message.packetFee, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPayPacketFeeAsync();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packetId = channel_1.PacketId.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.packetFee = fee_1.PacketFee.decode(reader, reader.uint32());
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
            packetId: isSet(object.packetId) ? channel_1.PacketId.fromJSON(object.packetId) : undefined,
            packetFee: isSet(object.packetFee) ? fee_1.PacketFee.fromJSON(object.packetFee) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.packetId !== undefined && (obj.packetId = message.packetId ? channel_1.PacketId.toJSON(message.packetId) : undefined);
        message.packetFee !== undefined &&
            (obj.packetFee = message.packetFee ? fee_1.PacketFee.toJSON(message.packetFee) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgPayPacketFeeAsync.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgPayPacketFeeAsync();
        message.packetId = (object.packetId !== undefined && object.packetId !== null)
            ? channel_1.PacketId.fromPartial(object.packetId)
            : undefined;
        message.packetFee = (object.packetFee !== undefined && object.packetFee !== null)
            ? fee_1.PacketFee.fromPartial(object.packetFee)
            : undefined;
        return message;
    },
};
function createBaseMsgPayPacketFeeAsyncResponse() {
    return {};
}
exports.MsgPayPacketFeeAsyncResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPayPacketFeeAsyncResponse();
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
        return exports.MsgPayPacketFeeAsyncResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgPayPacketFeeAsyncResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.RegisterPayee = this.RegisterPayee.bind(this);
        this.RegisterCounterpartyPayee = this.RegisterCounterpartyPayee.bind(this);
        this.PayPacketFee = this.PayPacketFee.bind(this);
        this.PayPacketFeeAsync = this.PayPacketFeeAsync.bind(this);
    }
    RegisterPayee(request, metadata) {
        return this.rpc.unary(exports.MsgRegisterPayeeDesc, exports.MsgRegisterPayee.fromPartial(request), metadata);
    }
    RegisterCounterpartyPayee(request, metadata) {
        return this.rpc.unary(exports.MsgRegisterCounterpartyPayeeDesc, exports.MsgRegisterCounterpartyPayee.fromPartial(request), metadata);
    }
    PayPacketFee(request, metadata) {
        return this.rpc.unary(exports.MsgPayPacketFeeDesc, exports.MsgPayPacketFee.fromPartial(request), metadata);
    }
    PayPacketFeeAsync(request, metadata) {
        return this.rpc.unary(exports.MsgPayPacketFeeAsyncDesc, exports.MsgPayPacketFeeAsync.fromPartial(request), metadata);
    }
}
exports.MsgClientImpl = MsgClientImpl;
exports.MsgDesc = { serviceName: "ibc.applications.fee.v1.Msg" };
exports.MsgRegisterPayeeDesc = {
    methodName: "RegisterPayee",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgRegisterPayee.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgRegisterPayeeResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgRegisterCounterpartyPayeeDesc = {
    methodName: "RegisterCounterpartyPayee",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgRegisterCounterpartyPayee.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgRegisterCounterpartyPayeeResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgPayPacketFeeDesc = {
    methodName: "PayPacketFee",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgPayPacketFee.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgPayPacketFeeResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgPayPacketFeeAsyncDesc = {
    methodName: "PayPacketFeeAsync",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgPayPacketFeeAsync.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgPayPacketFeeAsyncResponse.decode(data);
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
