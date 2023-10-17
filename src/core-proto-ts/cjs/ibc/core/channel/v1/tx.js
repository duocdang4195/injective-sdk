"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.MsgAcknowledgementDesc = exports.MsgTimeoutOnCloseDesc = exports.MsgTimeoutDesc = exports.MsgRecvPacketDesc = exports.MsgChannelCloseConfirmDesc = exports.MsgChannelCloseInitDesc = exports.MsgChannelOpenConfirmDesc = exports.MsgChannelOpenAckDesc = exports.MsgChannelOpenTryDesc = exports.MsgChannelOpenInitDesc = exports.MsgDesc = exports.MsgClientImpl = exports.MsgAcknowledgementResponse = exports.MsgAcknowledgement = exports.MsgTimeoutOnCloseResponse = exports.MsgTimeoutOnClose = exports.MsgTimeoutResponse = exports.MsgTimeout = exports.MsgRecvPacketResponse = exports.MsgRecvPacket = exports.MsgChannelCloseConfirmResponse = exports.MsgChannelCloseConfirm = exports.MsgChannelCloseInitResponse = exports.MsgChannelCloseInit = exports.MsgChannelOpenConfirmResponse = exports.MsgChannelOpenConfirm = exports.MsgChannelOpenAckResponse = exports.MsgChannelOpenAck = exports.MsgChannelOpenTryResponse = exports.MsgChannelOpenTry = exports.MsgChannelOpenInitResponse = exports.MsgChannelOpenInit = exports.responseResultTypeToJSON = exports.responseResultTypeFromJSON = exports.ResponseResultType = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const client_1 = require("../../client/v1/client");
const channel_1 = require("./channel");
/** ResponseResultType defines the possible outcomes of the execution of a message */
var ResponseResultType;
(function (ResponseResultType) {
    /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_UNSPECIFIED"] = 0] = "RESPONSE_RESULT_TYPE_UNSPECIFIED";
    /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_NOOP"] = 1] = "RESPONSE_RESULT_TYPE_NOOP";
    /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_SUCCESS"] = 2] = "RESPONSE_RESULT_TYPE_SUCCESS";
    ResponseResultType[ResponseResultType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseResultType = exports.ResponseResultType || (exports.ResponseResultType = {}));
function responseResultTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "RESPONSE_RESULT_TYPE_UNSPECIFIED":
            return ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED;
        case 1:
        case "RESPONSE_RESULT_TYPE_NOOP":
            return ResponseResultType.RESPONSE_RESULT_TYPE_NOOP;
        case 2:
        case "RESPONSE_RESULT_TYPE_SUCCESS":
            return ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseResultType.UNRECOGNIZED;
    }
}
exports.responseResultTypeFromJSON = responseResultTypeFromJSON;
function responseResultTypeToJSON(object) {
    switch (object) {
        case ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED:
            return "RESPONSE_RESULT_TYPE_UNSPECIFIED";
        case ResponseResultType.RESPONSE_RESULT_TYPE_NOOP:
            return "RESPONSE_RESULT_TYPE_NOOP";
        case ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS:
            return "RESPONSE_RESULT_TYPE_SUCCESS";
        case ResponseResultType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.responseResultTypeToJSON = responseResultTypeToJSON;
function createBaseMsgChannelOpenInit() {
    return { portId: "", channel: undefined, signer: "" };
}
exports.MsgChannelOpenInit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenInit();
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
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.signer = reader.string();
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
            channel: isSet(object.channel) ? channel_1.Channel.fromJSON(object.channel) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channel !== undefined && (obj.channel = message.channel ? channel_1.Channel.toJSON(message.channel) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    create(base) {
        return exports.MsgChannelOpenInit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgChannelOpenInit();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channel = (object.channel !== undefined && object.channel !== null)
            ? channel_1.Channel.fromPartial(object.channel)
            : undefined;
        message.signer = (_b = object.signer) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgChannelOpenInitResponse() {
    return { channelId: "", version: "" };
}
exports.MsgChannelOpenInitResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenInitResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.channelId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.version = reader.string();
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
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            version: isSet(object.version) ? String(object.version) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    create(base) {
        return exports.MsgChannelOpenInitResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgChannelOpenInitResponse();
        message.channelId = (_a = object.channelId) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgChannelOpenTry() {
    return {
        portId: "",
        previousChannelId: "",
        channel: undefined,
        counterpartyVersion: "",
        proofInit: new Uint8Array(),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgChannelOpenTry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.previousChannelId !== "") {
            writer.uint32(18).string(message.previousChannelId);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterpartyVersion !== "") {
            writer.uint32(34).string(message.counterpartyVersion);
        }
        if (message.proofInit.length !== 0) {
            writer.uint32(42).bytes(message.proofInit);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenTry();
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
                    message.previousChannelId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.counterpartyVersion = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.proofInit = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.signer = reader.string();
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
            previousChannelId: isSet(object.previousChannelId) ? String(object.previousChannelId) : "",
            channel: isSet(object.channel) ? channel_1.Channel.fromJSON(object.channel) : undefined,
            counterpartyVersion: isSet(object.counterpartyVersion) ? String(object.counterpartyVersion) : "",
            proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.previousChannelId !== undefined && (obj.previousChannelId = message.previousChannelId);
        message.channel !== undefined && (obj.channel = message.channel ? channel_1.Channel.toJSON(message.channel) : undefined);
        message.counterpartyVersion !== undefined && (obj.counterpartyVersion = message.counterpartyVersion);
        message.proofInit !== undefined &&
            (obj.proofInit = base64FromBytes(message.proofInit !== undefined ? message.proofInit : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    create(base) {
        return exports.MsgChannelOpenTry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgChannelOpenTry();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.previousChannelId = (_b = object.previousChannelId) !== null && _b !== void 0 ? _b : "";
        message.channel = (object.channel !== undefined && object.channel !== null)
            ? channel_1.Channel.fromPartial(object.channel)
            : undefined;
        message.counterpartyVersion = (_c = object.counterpartyVersion) !== null && _c !== void 0 ? _c : "";
        message.proofInit = (_d = object.proofInit) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = (_e = object.signer) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseMsgChannelOpenTryResponse() {
    return { version: "", channelId: "" };
}
exports.MsgChannelOpenTryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenTryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.version = reader.string();
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
            version: isSet(object.version) ? String(object.version) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    create(base) {
        return exports.MsgChannelOpenTryResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgChannelOpenTryResponse();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgChannelOpenAck() {
    return {
        portId: "",
        channelId: "",
        counterpartyChannelId: "",
        counterpartyVersion: "",
        proofTry: new Uint8Array(),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgChannelOpenAck = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.counterpartyChannelId !== "") {
            writer.uint32(26).string(message.counterpartyChannelId);
        }
        if (message.counterpartyVersion !== "") {
            writer.uint32(34).string(message.counterpartyVersion);
        }
        if (message.proofTry.length !== 0) {
            writer.uint32(42).bytes(message.proofTry);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenAck();
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
                    message.counterpartyChannelId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.counterpartyVersion = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.proofTry = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.signer = reader.string();
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
            counterpartyChannelId: isSet(object.counterpartyChannelId) ? String(object.counterpartyChannelId) : "",
            counterpartyVersion: isSet(object.counterpartyVersion) ? String(object.counterpartyVersion) : "",
            proofTry: isSet(object.proofTry) ? bytesFromBase64(object.proofTry) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.counterpartyChannelId !== undefined && (obj.counterpartyChannelId = message.counterpartyChannelId);
        message.counterpartyVersion !== undefined && (obj.counterpartyVersion = message.counterpartyVersion);
        message.proofTry !== undefined &&
            (obj.proofTry = base64FromBytes(message.proofTry !== undefined ? message.proofTry : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    create(base) {
        return exports.MsgChannelOpenAck.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMsgChannelOpenAck();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.counterpartyChannelId = (_c = object.counterpartyChannelId) !== null && _c !== void 0 ? _c : "";
        message.counterpartyVersion = (_d = object.counterpartyVersion) !== null && _d !== void 0 ? _d : "";
        message.proofTry = (_e = object.proofTry) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = (_f = object.signer) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseMsgChannelOpenAckResponse() {
    return {};
}
exports.MsgChannelOpenAckResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenAckResponse();
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
        return exports.MsgChannelOpenAckResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgChannelOpenAckResponse();
        return message;
    },
};
function createBaseMsgChannelOpenConfirm() {
    return { portId: "", channelId: "", proofAck: new Uint8Array(), proofHeight: undefined, signer: "" };
}
exports.MsgChannelOpenConfirm = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.proofAck.length !== 0) {
            writer.uint32(26).bytes(message.proofAck);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenConfirm();
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
                    message.proofAck = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.signer = reader.string();
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
            proofAck: isSet(object.proofAck) ? bytesFromBase64(object.proofAck) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.proofAck !== undefined &&
            (obj.proofAck = base64FromBytes(message.proofAck !== undefined ? message.proofAck : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    create(base) {
        return exports.MsgChannelOpenConfirm.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgChannelOpenConfirm();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.proofAck = (_c = object.proofAck) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = (_d = object.signer) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgChannelOpenConfirmResponse() {
    return {};
}
exports.MsgChannelOpenConfirmResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenConfirmResponse();
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
        return exports.MsgChannelOpenConfirmResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgChannelOpenConfirmResponse();
        return message;
    },
};
function createBaseMsgChannelCloseInit() {
    return { portId: "", channelId: "", signer: "" };
}
exports.MsgChannelCloseInit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseInit();
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
                    message.signer = reader.string();
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
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    create(base) {
        return exports.MsgChannelCloseInit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgChannelCloseInit();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgChannelCloseInitResponse() {
    return {};
}
exports.MsgChannelCloseInitResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseInitResponse();
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
        return exports.MsgChannelCloseInitResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgChannelCloseInitResponse();
        return message;
    },
};
function createBaseMsgChannelCloseConfirm() {
    return { portId: "", channelId: "", proofInit: new Uint8Array(), proofHeight: undefined, signer: "" };
}
exports.MsgChannelCloseConfirm = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.proofInit.length !== 0) {
            writer.uint32(26).bytes(message.proofInit);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseConfirm();
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
                    message.proofInit = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.signer = reader.string();
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
            proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.proofInit !== undefined &&
            (obj.proofInit = base64FromBytes(message.proofInit !== undefined ? message.proofInit : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    create(base) {
        return exports.MsgChannelCloseConfirm.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgChannelCloseConfirm();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.proofInit = (_c = object.proofInit) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = (_d = object.signer) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgChannelCloseConfirmResponse() {
    return {};
}
exports.MsgChannelCloseConfirmResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseConfirmResponse();
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
        return exports.MsgChannelCloseConfirmResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgChannelCloseConfirmResponse();
        return message;
    },
};
function createBaseMsgRecvPacket() {
    return { packet: undefined, proofCommitment: new Uint8Array(), proofHeight: undefined, signer: "" };
}
exports.MsgRecvPacket = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofCommitment.length !== 0) {
            writer.uint32(18).bytes(message.proofCommitment);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecvPacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proofCommitment = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.signer = reader.string();
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
            packet: isSet(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            proofCommitment: isSet(object.proofCommitment) ? bytesFromBase64(object.proofCommitment) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined && (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
        message.proofCommitment !== undefined &&
            (obj.proofCommitment = base64FromBytes(message.proofCommitment !== undefined ? message.proofCommitment : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    create(base) {
        return exports.MsgRecvPacket.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgRecvPacket();
        message.packet = (object.packet !== undefined && object.packet !== null)
            ? channel_1.Packet.fromPartial(object.packet)
            : undefined;
        message.proofCommitment = (_a = object.proofCommitment) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = (_b = object.signer) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgRecvPacketResponse() {
    return { result: 0 };
}
exports.MsgRecvPacketResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecvPacketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.result = reader.int32();
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
        return { result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
        return obj;
    },
    create(base) {
        return exports.MsgRecvPacketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgRecvPacketResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseMsgTimeout() {
    return {
        packet: undefined,
        proofUnreceived: new Uint8Array(),
        proofHeight: undefined,
        nextSequenceRecv: "0",
        signer: "",
    };
}
exports.MsgTimeout = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofUnreceived.length !== 0) {
            writer.uint32(18).bytes(message.proofUnreceived);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.nextSequenceRecv !== "0") {
            writer.uint32(32).uint64(message.nextSequenceRecv);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeout();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proofUnreceived = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.nextSequenceRecv = longToString(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.signer = reader.string();
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
            packet: isSet(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            proofUnreceived: isSet(object.proofUnreceived) ? bytesFromBase64(object.proofUnreceived) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            nextSequenceRecv: isSet(object.nextSequenceRecv) ? String(object.nextSequenceRecv) : "0",
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined && (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
        message.proofUnreceived !== undefined &&
            (obj.proofUnreceived = base64FromBytes(message.proofUnreceived !== undefined ? message.proofUnreceived : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        message.nextSequenceRecv !== undefined && (obj.nextSequenceRecv = message.nextSequenceRecv);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    create(base) {
        return exports.MsgTimeout.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgTimeout();
        message.packet = (object.packet !== undefined && object.packet !== null)
            ? channel_1.Packet.fromPartial(object.packet)
            : undefined;
        message.proofUnreceived = (_a = object.proofUnreceived) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.nextSequenceRecv = (_b = object.nextSequenceRecv) !== null && _b !== void 0 ? _b : "0";
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgTimeoutResponse() {
    return { result: 0 };
}
exports.MsgTimeoutResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.result = reader.int32();
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
        return { result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
        return obj;
    },
    create(base) {
        return exports.MsgTimeoutResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgTimeoutResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseMsgTimeoutOnClose() {
    return {
        packet: undefined,
        proofUnreceived: new Uint8Array(),
        proofClose: new Uint8Array(),
        proofHeight: undefined,
        nextSequenceRecv: "0",
        signer: "",
    };
}
exports.MsgTimeoutOnClose = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofUnreceived.length !== 0) {
            writer.uint32(18).bytes(message.proofUnreceived);
        }
        if (message.proofClose.length !== 0) {
            writer.uint32(26).bytes(message.proofClose);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.nextSequenceRecv !== "0") {
            writer.uint32(40).uint64(message.nextSequenceRecv);
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutOnClose();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proofUnreceived = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofClose = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.nextSequenceRecv = longToString(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.signer = reader.string();
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
            packet: isSet(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            proofUnreceived: isSet(object.proofUnreceived) ? bytesFromBase64(object.proofUnreceived) : new Uint8Array(),
            proofClose: isSet(object.proofClose) ? bytesFromBase64(object.proofClose) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            nextSequenceRecv: isSet(object.nextSequenceRecv) ? String(object.nextSequenceRecv) : "0",
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined && (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
        message.proofUnreceived !== undefined &&
            (obj.proofUnreceived = base64FromBytes(message.proofUnreceived !== undefined ? message.proofUnreceived : new Uint8Array()));
        message.proofClose !== undefined &&
            (obj.proofClose = base64FromBytes(message.proofClose !== undefined ? message.proofClose : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        message.nextSequenceRecv !== undefined && (obj.nextSequenceRecv = message.nextSequenceRecv);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    create(base) {
        return exports.MsgTimeoutOnClose.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgTimeoutOnClose();
        message.packet = (object.packet !== undefined && object.packet !== null)
            ? channel_1.Packet.fromPartial(object.packet)
            : undefined;
        message.proofUnreceived = (_a = object.proofUnreceived) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proofClose = (_b = object.proofClose) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.nextSequenceRecv = (_c = object.nextSequenceRecv) !== null && _c !== void 0 ? _c : "0";
        message.signer = (_d = object.signer) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgTimeoutOnCloseResponse() {
    return { result: 0 };
}
exports.MsgTimeoutOnCloseResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutOnCloseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.result = reader.int32();
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
        return { result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
        return obj;
    },
    create(base) {
        return exports.MsgTimeoutOnCloseResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgTimeoutOnCloseResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseMsgAcknowledgement() {
    return {
        packet: undefined,
        acknowledgement: new Uint8Array(),
        proofAcked: new Uint8Array(),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgAcknowledgement = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        if (message.proofAcked.length !== 0) {
            writer.uint32(26).bytes(message.proofAcked);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcknowledgement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.acknowledgement = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofAcked = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.signer = reader.string();
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
            packet: isSet(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
            proofAcked: isSet(object.proofAcked) ? bytesFromBase64(object.proofAcked) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined && (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
        message.acknowledgement !== undefined &&
            (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
        message.proofAcked !== undefined &&
            (obj.proofAcked = base64FromBytes(message.proofAcked !== undefined ? message.proofAcked : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    create(base) {
        return exports.MsgAcknowledgement.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgAcknowledgement();
        message.packet = (object.packet !== undefined && object.packet !== null)
            ? channel_1.Packet.fromPartial(object.packet)
            : undefined;
        message.acknowledgement = (_a = object.acknowledgement) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proofAcked = (_b = object.proofAcked) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgAcknowledgementResponse() {
    return { result: 0 };
}
exports.MsgAcknowledgementResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcknowledgementResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.result = reader.int32();
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
        return { result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
        return obj;
    },
    create(base) {
        return exports.MsgAcknowledgementResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgAcknowledgementResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.ChannelOpenInit = this.ChannelOpenInit.bind(this);
        this.ChannelOpenTry = this.ChannelOpenTry.bind(this);
        this.ChannelOpenAck = this.ChannelOpenAck.bind(this);
        this.ChannelOpenConfirm = this.ChannelOpenConfirm.bind(this);
        this.ChannelCloseInit = this.ChannelCloseInit.bind(this);
        this.ChannelCloseConfirm = this.ChannelCloseConfirm.bind(this);
        this.RecvPacket = this.RecvPacket.bind(this);
        this.Timeout = this.Timeout.bind(this);
        this.TimeoutOnClose = this.TimeoutOnClose.bind(this);
        this.Acknowledgement = this.Acknowledgement.bind(this);
    }
    ChannelOpenInit(request, metadata) {
        return this.rpc.unary(exports.MsgChannelOpenInitDesc, exports.MsgChannelOpenInit.fromPartial(request), metadata);
    }
    ChannelOpenTry(request, metadata) {
        return this.rpc.unary(exports.MsgChannelOpenTryDesc, exports.MsgChannelOpenTry.fromPartial(request), metadata);
    }
    ChannelOpenAck(request, metadata) {
        return this.rpc.unary(exports.MsgChannelOpenAckDesc, exports.MsgChannelOpenAck.fromPartial(request), metadata);
    }
    ChannelOpenConfirm(request, metadata) {
        return this.rpc.unary(exports.MsgChannelOpenConfirmDesc, exports.MsgChannelOpenConfirm.fromPartial(request), metadata);
    }
    ChannelCloseInit(request, metadata) {
        return this.rpc.unary(exports.MsgChannelCloseInitDesc, exports.MsgChannelCloseInit.fromPartial(request), metadata);
    }
    ChannelCloseConfirm(request, metadata) {
        return this.rpc.unary(exports.MsgChannelCloseConfirmDesc, exports.MsgChannelCloseConfirm.fromPartial(request), metadata);
    }
    RecvPacket(request, metadata) {
        return this.rpc.unary(exports.MsgRecvPacketDesc, exports.MsgRecvPacket.fromPartial(request), metadata);
    }
    Timeout(request, metadata) {
        return this.rpc.unary(exports.MsgTimeoutDesc, exports.MsgTimeout.fromPartial(request), metadata);
    }
    TimeoutOnClose(request, metadata) {
        return this.rpc.unary(exports.MsgTimeoutOnCloseDesc, exports.MsgTimeoutOnClose.fromPartial(request), metadata);
    }
    Acknowledgement(request, metadata) {
        return this.rpc.unary(exports.MsgAcknowledgementDesc, exports.MsgAcknowledgement.fromPartial(request), metadata);
    }
}
exports.MsgClientImpl = MsgClientImpl;
exports.MsgDesc = { serviceName: "ibc.core.channel.v1.Msg" };
exports.MsgChannelOpenInitDesc = {
    methodName: "ChannelOpenInit",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgChannelOpenInit.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgChannelOpenInitResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgChannelOpenTryDesc = {
    methodName: "ChannelOpenTry",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgChannelOpenTry.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgChannelOpenTryResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgChannelOpenAckDesc = {
    methodName: "ChannelOpenAck",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgChannelOpenAck.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgChannelOpenAckResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgChannelOpenConfirmDesc = {
    methodName: "ChannelOpenConfirm",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgChannelOpenConfirm.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgChannelOpenConfirmResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgChannelCloseInitDesc = {
    methodName: "ChannelCloseInit",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgChannelCloseInit.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgChannelCloseInitResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgChannelCloseConfirmDesc = {
    methodName: "ChannelCloseConfirm",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgChannelCloseConfirm.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgChannelCloseConfirmResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgRecvPacketDesc = {
    methodName: "RecvPacket",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgRecvPacket.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgRecvPacketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgTimeoutDesc = {
    methodName: "Timeout",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgTimeout.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgTimeoutResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgTimeoutOnCloseDesc = {
    methodName: "TimeoutOnClose",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgTimeoutOnClose.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgTimeoutOnCloseResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgAcknowledgementDesc = {
    methodName: "Acknowledgement",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgAcknowledgement.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgAcknowledgementResponse.decode(data);
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
