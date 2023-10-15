/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Height } from "../../client/v1/client";
import { Counterparty, Version } from "./connection";
function createBaseMsgConnectionOpenInit() {
    return { clientId: "", counterparty: undefined, version: undefined, delayPeriod: "0", signer: "" };
}
export const MsgConnectionOpenInit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.counterparty !== undefined) {
            Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
        }
        if (message.version !== undefined) {
            Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (message.delayPeriod !== "0") {
            writer.uint32(32).uint64(message.delayPeriod);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.counterparty = Counterparty.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.version = Version.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.delayPeriod = longToString(reader.uint64());
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
            version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
            delayPeriod: isSet(object.delayPeriod) ? String(object.delayPeriod) : "0",
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
        message.version !== undefined && (obj.version = message.version ? Version.toJSON(message.version) : undefined);
        message.delayPeriod !== undefined && (obj.delayPeriod = message.delayPeriod);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    create(base) {
        return MsgConnectionOpenInit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgConnectionOpenInit();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.counterparty = (object.counterparty !== undefined && object.counterparty !== null)
            ? Counterparty.fromPartial(object.counterparty)
            : undefined;
        message.version = (object.version !== undefined && object.version !== null)
            ? Version.fromPartial(object.version)
            : undefined;
        message.delayPeriod = (_b = object.delayPeriod) !== null && _b !== void 0 ? _b : "0";
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgConnectionOpenInitResponse() {
    return {};
}
export const MsgConnectionOpenInitResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenInitResponse();
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
        return MsgConnectionOpenInitResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgConnectionOpenInitResponse();
        return message;
    },
};
function createBaseMsgConnectionOpenTry() {
    return {
        clientId: "",
        previousConnectionId: "",
        clientState: undefined,
        counterparty: undefined,
        delayPeriod: "0",
        counterpartyVersions: [],
        proofHeight: undefined,
        proofInit: new Uint8Array(),
        proofClient: new Uint8Array(),
        proofConsensus: new Uint8Array(),
        consensusHeight: undefined,
        signer: "",
        hostConsensusStateProof: new Uint8Array(),
    };
}
export const MsgConnectionOpenTry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.previousConnectionId !== "") {
            writer.uint32(18).string(message.previousConnectionId);
        }
        if (message.clientState !== undefined) {
            Any.encode(message.clientState, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterparty !== undefined) {
            Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (message.delayPeriod !== "0") {
            writer.uint32(40).uint64(message.delayPeriod);
        }
        for (const v of message.counterpartyVersions) {
            Version.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
        }
        if (message.proofInit.length !== 0) {
            writer.uint32(66).bytes(message.proofInit);
        }
        if (message.proofClient.length !== 0) {
            writer.uint32(74).bytes(message.proofClient);
        }
        if (message.proofConsensus.length !== 0) {
            writer.uint32(82).bytes(message.proofConsensus);
        }
        if (message.consensusHeight !== undefined) {
            Height.encode(message.consensusHeight, writer.uint32(90).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(98).string(message.signer);
        }
        if (message.hostConsensusStateProof.length !== 0) {
            writer.uint32(106).bytes(message.hostConsensusStateProof);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenTry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.previousConnectionId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.clientState = Any.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.counterparty = Counterparty.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.delayPeriod = longToString(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.counterpartyVersions.push(Version.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.proofHeight = Height.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.proofInit = reader.bytes();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.proofClient = reader.bytes();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.proofConsensus = reader.bytes();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.consensusHeight = Height.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.signer = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.hostConsensusStateProof = reader.bytes();
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            previousConnectionId: isSet(object.previousConnectionId) ? String(object.previousConnectionId) : "",
            clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
            counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
            delayPeriod: isSet(object.delayPeriod) ? String(object.delayPeriod) : "0",
            counterpartyVersions: Array.isArray(object === null || object === void 0 ? void 0 : object.counterpartyVersions)
                ? object.counterpartyVersions.map((e) => Version.fromJSON(e))
                : [],
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
            proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(),
            proofClient: isSet(object.proofClient) ? bytesFromBase64(object.proofClient) : new Uint8Array(),
            proofConsensus: isSet(object.proofConsensus) ? bytesFromBase64(object.proofConsensus) : new Uint8Array(),
            consensusHeight: isSet(object.consensusHeight) ? Height.fromJSON(object.consensusHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
            hostConsensusStateProof: isSet(object.hostConsensusStateProof)
                ? bytesFromBase64(object.hostConsensusStateProof)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.previousConnectionId !== undefined && (obj.previousConnectionId = message.previousConnectionId);
        message.clientState !== undefined &&
            (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
        message.delayPeriod !== undefined && (obj.delayPeriod = message.delayPeriod);
        if (message.counterpartyVersions) {
            obj.counterpartyVersions = message.counterpartyVersions.map((e) => e ? Version.toJSON(e) : undefined);
        }
        else {
            obj.counterpartyVersions = [];
        }
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        message.proofInit !== undefined &&
            (obj.proofInit = base64FromBytes(message.proofInit !== undefined ? message.proofInit : new Uint8Array()));
        message.proofClient !== undefined &&
            (obj.proofClient = base64FromBytes(message.proofClient !== undefined ? message.proofClient : new Uint8Array()));
        message.proofConsensus !== undefined &&
            (obj.proofConsensus = base64FromBytes(message.proofConsensus !== undefined ? message.proofConsensus : new Uint8Array()));
        message.consensusHeight !== undefined &&
            (obj.consensusHeight = message.consensusHeight ? Height.toJSON(message.consensusHeight) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        message.hostConsensusStateProof !== undefined &&
            (obj.hostConsensusStateProof = base64FromBytes(message.hostConsensusStateProof !== undefined ? message.hostConsensusStateProof : new Uint8Array()));
        return obj;
    },
    create(base) {
        return MsgConnectionOpenTry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseMsgConnectionOpenTry();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.previousConnectionId = (_b = object.previousConnectionId) !== null && _b !== void 0 ? _b : "";
        message.clientState = (object.clientState !== undefined && object.clientState !== null)
            ? Any.fromPartial(object.clientState)
            : undefined;
        message.counterparty = (object.counterparty !== undefined && object.counterparty !== null)
            ? Counterparty.fromPartial(object.counterparty)
            : undefined;
        message.delayPeriod = (_c = object.delayPeriod) !== null && _c !== void 0 ? _c : "0";
        message.counterpartyVersions = ((_d = object.counterpartyVersions) === null || _d === void 0 ? void 0 : _d.map((e) => Version.fromPartial(e))) || [];
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        message.proofInit = (_e = object.proofInit) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.proofClient = (_f = object.proofClient) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.proofConsensus = (_g = object.proofConsensus) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.consensusHeight = (object.consensusHeight !== undefined && object.consensusHeight !== null)
            ? Height.fromPartial(object.consensusHeight)
            : undefined;
        message.signer = (_h = object.signer) !== null && _h !== void 0 ? _h : "";
        message.hostConsensusStateProof = (_j = object.hostConsensusStateProof) !== null && _j !== void 0 ? _j : new Uint8Array();
        return message;
    },
};
function createBaseMsgConnectionOpenTryResponse() {
    return {};
}
export const MsgConnectionOpenTryResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenTryResponse();
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
        return MsgConnectionOpenTryResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgConnectionOpenTryResponse();
        return message;
    },
};
function createBaseMsgConnectionOpenAck() {
    return {
        connectionId: "",
        counterpartyConnectionId: "",
        version: undefined,
        clientState: undefined,
        proofHeight: undefined,
        proofTry: new Uint8Array(),
        proofClient: new Uint8Array(),
        proofConsensus: new Uint8Array(),
        consensusHeight: undefined,
        signer: "",
        hostConsensusStateProof: new Uint8Array(),
    };
}
export const MsgConnectionOpenAck = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.counterpartyConnectionId !== "") {
            writer.uint32(18).string(message.counterpartyConnectionId);
        }
        if (message.version !== undefined) {
            Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (message.clientState !== undefined) {
            Any.encode(message.clientState, writer.uint32(34).fork()).ldelim();
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
        }
        if (message.proofTry.length !== 0) {
            writer.uint32(50).bytes(message.proofTry);
        }
        if (message.proofClient.length !== 0) {
            writer.uint32(58).bytes(message.proofClient);
        }
        if (message.proofConsensus.length !== 0) {
            writer.uint32(66).bytes(message.proofConsensus);
        }
        if (message.consensusHeight !== undefined) {
            Height.encode(message.consensusHeight, writer.uint32(74).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(82).string(message.signer);
        }
        if (message.hostConsensusStateProof.length !== 0) {
            writer.uint32(90).bytes(message.hostConsensusStateProof);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenAck();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.connectionId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.counterpartyConnectionId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.version = Version.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.clientState = Any.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.proofHeight = Height.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.proofTry = reader.bytes();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.proofClient = reader.bytes();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.proofConsensus = reader.bytes();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.consensusHeight = Height.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.signer = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.hostConsensusStateProof = reader.bytes();
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
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            counterpartyConnectionId: isSet(object.counterpartyConnectionId) ? String(object.counterpartyConnectionId) : "",
            version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
            clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
            proofTry: isSet(object.proofTry) ? bytesFromBase64(object.proofTry) : new Uint8Array(),
            proofClient: isSet(object.proofClient) ? bytesFromBase64(object.proofClient) : new Uint8Array(),
            proofConsensus: isSet(object.proofConsensus) ? bytesFromBase64(object.proofConsensus) : new Uint8Array(),
            consensusHeight: isSet(object.consensusHeight) ? Height.fromJSON(object.consensusHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
            hostConsensusStateProof: isSet(object.hostConsensusStateProof)
                ? bytesFromBase64(object.hostConsensusStateProof)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.counterpartyConnectionId !== undefined && (obj.counterpartyConnectionId = message.counterpartyConnectionId);
        message.version !== undefined && (obj.version = message.version ? Version.toJSON(message.version) : undefined);
        message.clientState !== undefined &&
            (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        message.proofTry !== undefined &&
            (obj.proofTry = base64FromBytes(message.proofTry !== undefined ? message.proofTry : new Uint8Array()));
        message.proofClient !== undefined &&
            (obj.proofClient = base64FromBytes(message.proofClient !== undefined ? message.proofClient : new Uint8Array()));
        message.proofConsensus !== undefined &&
            (obj.proofConsensus = base64FromBytes(message.proofConsensus !== undefined ? message.proofConsensus : new Uint8Array()));
        message.consensusHeight !== undefined &&
            (obj.consensusHeight = message.consensusHeight ? Height.toJSON(message.consensusHeight) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        message.hostConsensusStateProof !== undefined &&
            (obj.hostConsensusStateProof = base64FromBytes(message.hostConsensusStateProof !== undefined ? message.hostConsensusStateProof : new Uint8Array()));
        return obj;
    },
    create(base) {
        return MsgConnectionOpenAck.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseMsgConnectionOpenAck();
        message.connectionId = (_a = object.connectionId) !== null && _a !== void 0 ? _a : "";
        message.counterpartyConnectionId = (_b = object.counterpartyConnectionId) !== null && _b !== void 0 ? _b : "";
        message.version = (object.version !== undefined && object.version !== null)
            ? Version.fromPartial(object.version)
            : undefined;
        message.clientState = (object.clientState !== undefined && object.clientState !== null)
            ? Any.fromPartial(object.clientState)
            : undefined;
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        message.proofTry = (_c = object.proofTry) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.proofClient = (_d = object.proofClient) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.proofConsensus = (_e = object.proofConsensus) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.consensusHeight = (object.consensusHeight !== undefined && object.consensusHeight !== null)
            ? Height.fromPartial(object.consensusHeight)
            : undefined;
        message.signer = (_f = object.signer) !== null && _f !== void 0 ? _f : "";
        message.hostConsensusStateProof = (_g = object.hostConsensusStateProof) !== null && _g !== void 0 ? _g : new Uint8Array();
        return message;
    },
};
function createBaseMsgConnectionOpenAckResponse() {
    return {};
}
export const MsgConnectionOpenAckResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenAckResponse();
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
        return MsgConnectionOpenAckResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgConnectionOpenAckResponse();
        return message;
    },
};
function createBaseMsgConnectionOpenConfirm() {
    return { connectionId: "", proofAck: new Uint8Array(), proofHeight: undefined, signer: "" };
}
export const MsgConnectionOpenConfirm = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.proofAck.length !== 0) {
            writer.uint32(18).bytes(message.proofAck);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.connectionId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proofAck = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            proofAck: isSet(object.proofAck) ? bytesFromBase64(object.proofAck) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.proofAck !== undefined &&
            (obj.proofAck = base64FromBytes(message.proofAck !== undefined ? message.proofAck : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    create(base) {
        return MsgConnectionOpenConfirm.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgConnectionOpenConfirm();
        message.connectionId = (_a = object.connectionId) !== null && _a !== void 0 ? _a : "";
        message.proofAck = (_b = object.proofAck) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgConnectionOpenConfirmResponse() {
    return {};
}
export const MsgConnectionOpenConfirmResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenConfirmResponse();
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
        return MsgConnectionOpenConfirmResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgConnectionOpenConfirmResponse();
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.ConnectionOpenInit = this.ConnectionOpenInit.bind(this);
        this.ConnectionOpenTry = this.ConnectionOpenTry.bind(this);
        this.ConnectionOpenAck = this.ConnectionOpenAck.bind(this);
        this.ConnectionOpenConfirm = this.ConnectionOpenConfirm.bind(this);
    }
    ConnectionOpenInit(request, metadata) {
        return this.rpc.unary(MsgConnectionOpenInitDesc, MsgConnectionOpenInit.fromPartial(request), metadata);
    }
    ConnectionOpenTry(request, metadata) {
        return this.rpc.unary(MsgConnectionOpenTryDesc, MsgConnectionOpenTry.fromPartial(request), metadata);
    }
    ConnectionOpenAck(request, metadata) {
        return this.rpc.unary(MsgConnectionOpenAckDesc, MsgConnectionOpenAck.fromPartial(request), metadata);
    }
    ConnectionOpenConfirm(request, metadata) {
        return this.rpc.unary(MsgConnectionOpenConfirmDesc, MsgConnectionOpenConfirm.fromPartial(request), metadata);
    }
}
export const MsgDesc = { serviceName: "ibc.core.connection.v1.Msg" };
export const MsgConnectionOpenInitDesc = {
    methodName: "ConnectionOpenInit",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgConnectionOpenInit.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgConnectionOpenInitResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgConnectionOpenTryDesc = {
    methodName: "ConnectionOpenTry",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgConnectionOpenTry.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgConnectionOpenTryResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgConnectionOpenAckDesc = {
    methodName: "ConnectionOpenAck",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgConnectionOpenAck.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgConnectionOpenAckResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgConnectionOpenConfirmDesc = {
    methodName: "ConnectionOpenConfirm",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgConnectionOpenConfirm.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgConnectionOpenConfirmResponse.decode(data);
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
