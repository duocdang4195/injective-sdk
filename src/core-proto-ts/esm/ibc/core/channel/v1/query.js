/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Channel, IdentifiedChannel, PacketState } from "./channel";
function createBaseQueryChannelRequest() {
    return { portId: "", channelId: "" };
}
export const QueryChannelRequest = {
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
        const message = createBaseQueryChannelRequest();
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
        return QueryChannelRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryChannelRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryChannelResponse() {
    return { channel: undefined, proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryChannelResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channel !== undefined) {
            Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.channel = Channel.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    create(base) {
        return QueryChannelResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryChannelResponse();
        message.channel = (object.channel !== undefined && object.channel !== null)
            ? Channel.fromPartial(object.channel)
            : undefined;
        message.proof = (_a = object.proof) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryChannelsRequest() {
    return { pagination: undefined };
}
export const QueryChannelsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelsRequest();
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
        return QueryChannelsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryChannelsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryChannelsResponse() {
    return { channels: [], pagination: undefined, height: undefined };
}
export const QueryChannelsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.channels) {
            IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.height = Height.decode(reader, reader.uint32());
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
            channels: Array.isArray(object === null || object === void 0 ? void 0 : object.channels) ? object.channels.map((e) => IdentifiedChannel.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map((e) => e ? IdentifiedChannel.toJSON(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    create(base) {
        return QueryChannelsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryChannelsResponse();
        message.channels = ((_a = object.channels) === null || _a === void 0 ? void 0 : _a.map((e) => IdentifiedChannel.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        message.height = (object.height !== undefined && object.height !== null)
            ? Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryConnectionChannelsRequest() {
    return { connection: "", pagination: undefined };
}
export const QueryConnectionChannelsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection !== "") {
            writer.uint32(10).string(message.connection);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionChannelsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.connection = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
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
        return {
            connection: isSet(object.connection) ? String(object.connection) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined && (obj.connection = message.connection);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryConnectionChannelsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConnectionChannelsRequest();
        message.connection = (_a = object.connection) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryConnectionChannelsResponse() {
    return { channels: [], pagination: undefined, height: undefined };
}
export const QueryConnectionChannelsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.channels) {
            IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.height = Height.decode(reader, reader.uint32());
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
            channels: Array.isArray(object === null || object === void 0 ? void 0 : object.channels) ? object.channels.map((e) => IdentifiedChannel.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map((e) => e ? IdentifiedChannel.toJSON(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    create(base) {
        return QueryConnectionChannelsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConnectionChannelsResponse();
        message.channels = ((_a = object.channels) === null || _a === void 0 ? void 0 : _a.map((e) => IdentifiedChannel.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        message.height = (object.height !== undefined && object.height !== null)
            ? Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryChannelClientStateRequest() {
    return { portId: "", channelId: "" };
}
export const QueryChannelClientStateRequest = {
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
        const message = createBaseQueryChannelClientStateRequest();
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
        return QueryChannelClientStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryChannelClientStateRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryChannelClientStateResponse() {
    return { identifiedClientState: undefined, proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryChannelClientStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.identifiedClientState !== undefined) {
            IdentifiedClientState.encode(message.identifiedClientState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.identifiedClientState = IdentifiedClientState.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            identifiedClientState: isSet(object.identifiedClientState)
                ? IdentifiedClientState.fromJSON(object.identifiedClientState)
                : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.identifiedClientState !== undefined && (obj.identifiedClientState = message.identifiedClientState
            ? IdentifiedClientState.toJSON(message.identifiedClientState)
            : undefined);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    create(base) {
        return QueryChannelClientStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryChannelClientStateResponse();
        message.identifiedClientState =
            (object.identifiedClientState !== undefined && object.identifiedClientState !== null)
                ? IdentifiedClientState.fromPartial(object.identifiedClientState)
                : undefined;
        message.proof = (_a = object.proof) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryChannelConsensusStateRequest() {
    return { portId: "", channelId: "", revisionNumber: "0", revisionHeight: "0" };
}
export const QueryChannelConsensusStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.revisionNumber !== "0") {
            writer.uint32(24).uint64(message.revisionNumber);
        }
        if (message.revisionHeight !== "0") {
            writer.uint32(32).uint64(message.revisionHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelConsensusStateRequest();
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
                    if (tag !== 24) {
                        break;
                    }
                    message.revisionNumber = longToString(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.revisionHeight = longToString(reader.uint64());
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
            revisionNumber: isSet(object.revisionNumber) ? String(object.revisionNumber) : "0",
            revisionHeight: isSet(object.revisionHeight) ? String(object.revisionHeight) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.revisionNumber !== undefined && (obj.revisionNumber = message.revisionNumber);
        message.revisionHeight !== undefined && (obj.revisionHeight = message.revisionHeight);
        return obj;
    },
    create(base) {
        return QueryChannelConsensusStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseQueryChannelConsensusStateRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.revisionNumber = (_c = object.revisionNumber) !== null && _c !== void 0 ? _c : "0";
        message.revisionHeight = (_d = object.revisionHeight) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseQueryChannelConsensusStateResponse() {
    return { consensusState: undefined, clientId: "", proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryChannelConsensusStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.consensusState !== undefined) {
            Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
        }
        if (message.clientId !== "") {
            writer.uint32(18).string(message.clientId);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.consensusState = Any.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensusState !== undefined &&
            (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    create(base) {
        return QueryChannelConsensusStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryChannelConsensusStateResponse();
        message.consensusState = (object.consensusState !== undefined && object.consensusState !== null)
            ? Any.fromPartial(object.consensusState)
            : undefined;
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.proof = (_b = object.proof) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketCommitmentRequest() {
    return { portId: "", channelId: "", sequence: "0" };
}
export const QueryPacketCommitmentRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== "0") {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentRequest();
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
                    if (tag !== 24) {
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
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    create(base) {
        return QueryPacketCommitmentRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryPacketCommitmentRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.sequence = (_c = object.sequence) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseQueryPacketCommitmentResponse() {
    return { commitment: new Uint8Array(), proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryPacketCommitmentResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.commitment.length !== 0) {
            writer.uint32(10).bytes(message.commitment);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.commitment = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array(),
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.commitment !== undefined &&
            (obj.commitment = base64FromBytes(message.commitment !== undefined ? message.commitment : new Uint8Array()));
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    create(base) {
        return QueryPacketCommitmentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryPacketCommitmentResponse();
        message.commitment = (_a = object.commitment) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proof = (_b = object.proof) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketCommitmentsRequest() {
    return { portId: "", channelId: "", pagination: undefined };
}
export const QueryPacketCommitmentsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentsRequest();
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
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryPacketCommitmentsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryPacketCommitmentsRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketCommitmentsResponse() {
    return { commitments: [], pagination: undefined, height: undefined };
}
export const QueryPacketCommitmentsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.commitments) {
            PacketState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.commitments.push(PacketState.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.height = Height.decode(reader, reader.uint32());
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
            commitments: Array.isArray(object === null || object === void 0 ? void 0 : object.commitments)
                ? object.commitments.map((e) => PacketState.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.commitments) {
            obj.commitments = message.commitments.map((e) => e ? PacketState.toJSON(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    create(base) {
        return QueryPacketCommitmentsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPacketCommitmentsResponse();
        message.commitments = ((_a = object.commitments) === null || _a === void 0 ? void 0 : _a.map((e) => PacketState.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        message.height = (object.height !== undefined && object.height !== null)
            ? Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketReceiptRequest() {
    return { portId: "", channelId: "", sequence: "0" };
}
export const QueryPacketReceiptRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== "0") {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketReceiptRequest();
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
                    if (tag !== 24) {
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
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    create(base) {
        return QueryPacketReceiptRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryPacketReceiptRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.sequence = (_c = object.sequence) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseQueryPacketReceiptResponse() {
    return { received: false, proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryPacketReceiptResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.received === true) {
            writer.uint32(16).bool(message.received);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketReceiptResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.received = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            received: isSet(object.received) ? Boolean(object.received) : false,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.received !== undefined && (obj.received = message.received);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    create(base) {
        return QueryPacketReceiptResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryPacketReceiptResponse();
        message.received = (_a = object.received) !== null && _a !== void 0 ? _a : false;
        message.proof = (_b = object.proof) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketAcknowledgementRequest() {
    return { portId: "", channelId: "", sequence: "0" };
}
export const QueryPacketAcknowledgementRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== "0") {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementRequest();
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
                    if (tag !== 24) {
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
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    create(base) {
        return QueryPacketAcknowledgementRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryPacketAcknowledgementRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.sequence = (_c = object.sequence) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseQueryPacketAcknowledgementResponse() {
    return { acknowledgement: new Uint8Array(), proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryPacketAcknowledgementResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.acknowledgement.length !== 0) {
            writer.uint32(10).bytes(message.acknowledgement);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.acknowledgement = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.acknowledgement !== undefined &&
            (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    create(base) {
        return QueryPacketAcknowledgementResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryPacketAcknowledgementResponse();
        message.acknowledgement = (_a = object.acknowledgement) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proof = (_b = object.proof) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketAcknowledgementsRequest() {
    return { portId: "", channelId: "", pagination: undefined, packetCommitmentSequences: [] };
}
export const QueryPacketAcknowledgementsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.packetCommitmentSequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementsRequest();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag === 32) {
                        message.packetCommitmentSequences.push(longToString(reader.uint64()));
                        continue;
                    }
                    if (tag === 34) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packetCommitmentSequences.push(longToString(reader.uint64()));
                        }
                        continue;
                    }
                    break;
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
            packetCommitmentSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.packetCommitmentSequences)
                ? object.packetCommitmentSequences.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        if (message.packetCommitmentSequences) {
            obj.packetCommitmentSequences = message.packetCommitmentSequences.map((e) => e);
        }
        else {
            obj.packetCommitmentSequences = [];
        }
        return obj;
    },
    create(base) {
        return QueryPacketAcknowledgementsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryPacketAcknowledgementsRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        message.packetCommitmentSequences = ((_c = object.packetCommitmentSequences) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryPacketAcknowledgementsResponse() {
    return { acknowledgements: [], pagination: undefined, height: undefined };
}
export const QueryPacketAcknowledgementsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.acknowledgements) {
            PacketState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.height = Height.decode(reader, reader.uint32());
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
            acknowledgements: Array.isArray(object === null || object === void 0 ? void 0 : object.acknowledgements)
                ? object.acknowledgements.map((e) => PacketState.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map((e) => e ? PacketState.toJSON(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    create(base) {
        return QueryPacketAcknowledgementsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPacketAcknowledgementsResponse();
        message.acknowledgements = ((_a = object.acknowledgements) === null || _a === void 0 ? void 0 : _a.map((e) => PacketState.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        message.height = (object.height !== undefined && object.height !== null)
            ? Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryUnreceivedPacketsRequest() {
    return { portId: "", channelId: "", packetCommitmentSequences: [] };
}
export const QueryUnreceivedPacketsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        writer.uint32(26).fork();
        for (const v of message.packetCommitmentSequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedPacketsRequest();
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
                    if (tag === 24) {
                        message.packetCommitmentSequences.push(longToString(reader.uint64()));
                        continue;
                    }
                    if (tag === 26) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packetCommitmentSequences.push(longToString(reader.uint64()));
                        }
                        continue;
                    }
                    break;
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
            packetCommitmentSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.packetCommitmentSequences)
                ? object.packetCommitmentSequences.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.packetCommitmentSequences) {
            obj.packetCommitmentSequences = message.packetCommitmentSequences.map((e) => e);
        }
        else {
            obj.packetCommitmentSequences = [];
        }
        return obj;
    },
    create(base) {
        return QueryUnreceivedPacketsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryUnreceivedPacketsRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.packetCommitmentSequences = ((_c = object.packetCommitmentSequences) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryUnreceivedPacketsResponse() {
    return { sequences: [], height: undefined };
}
export const QueryUnreceivedPacketsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedPacketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        message.sequences.push(longToString(reader.uint64()));
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sequences.push(longToString(reader.uint64()));
                        }
                        continue;
                    }
                    break;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.height = Height.decode(reader, reader.uint32());
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
            sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences) ? object.sequences.map((e) => String(e)) : [],
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map((e) => e);
        }
        else {
            obj.sequences = [];
        }
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    create(base) {
        return QueryUnreceivedPacketsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUnreceivedPacketsResponse();
        message.sequences = ((_a = object.sequences) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.height = (object.height !== undefined && object.height !== null)
            ? Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryUnreceivedAcksRequest() {
    return { portId: "", channelId: "", packetAckSequences: [] };
}
export const QueryUnreceivedAcksRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        writer.uint32(26).fork();
        for (const v of message.packetAckSequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedAcksRequest();
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
                    if (tag === 24) {
                        message.packetAckSequences.push(longToString(reader.uint64()));
                        continue;
                    }
                    if (tag === 26) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packetAckSequences.push(longToString(reader.uint64()));
                        }
                        continue;
                    }
                    break;
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
            packetAckSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.packetAckSequences)
                ? object.packetAckSequences.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.packetAckSequences) {
            obj.packetAckSequences = message.packetAckSequences.map((e) => e);
        }
        else {
            obj.packetAckSequences = [];
        }
        return obj;
    },
    create(base) {
        return QueryUnreceivedAcksRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryUnreceivedAcksRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.packetAckSequences = ((_c = object.packetAckSequences) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryUnreceivedAcksResponse() {
    return { sequences: [], height: undefined };
}
export const QueryUnreceivedAcksResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedAcksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        message.sequences.push(longToString(reader.uint64()));
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sequences.push(longToString(reader.uint64()));
                        }
                        continue;
                    }
                    break;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.height = Height.decode(reader, reader.uint32());
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
            sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences) ? object.sequences.map((e) => String(e)) : [],
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map((e) => e);
        }
        else {
            obj.sequences = [];
        }
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    create(base) {
        return QueryUnreceivedAcksResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUnreceivedAcksResponse();
        message.sequences = ((_a = object.sequences) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.height = (object.height !== undefined && object.height !== null)
            ? Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryNextSequenceReceiveRequest() {
    return { portId: "", channelId: "" };
}
export const QueryNextSequenceReceiveRequest = {
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
        const message = createBaseQueryNextSequenceReceiveRequest();
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
        return QueryNextSequenceReceiveRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryNextSequenceReceiveRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryNextSequenceReceiveResponse() {
    return { nextSequenceReceive: "0", proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryNextSequenceReceiveResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nextSequenceReceive !== "0") {
            writer.uint32(8).uint64(message.nextSequenceReceive);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNextSequenceReceiveResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nextSequenceReceive = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            nextSequenceReceive: isSet(object.nextSequenceReceive) ? String(object.nextSequenceReceive) : "0",
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.nextSequenceReceive !== undefined && (obj.nextSequenceReceive = message.nextSequenceReceive);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    create(base) {
        return QueryNextSequenceReceiveResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryNextSequenceReceiveResponse();
        message.nextSequenceReceive = (_a = object.nextSequenceReceive) !== null && _a !== void 0 ? _a : "0";
        message.proof = (_b = object.proof) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryNextSequenceSendRequest() {
    return { portId: "", channelId: "" };
}
export const QueryNextSequenceSendRequest = {
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
        const message = createBaseQueryNextSequenceSendRequest();
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
        return QueryNextSequenceSendRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryNextSequenceSendRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryNextSequenceSendResponse() {
    return { nextSequenceSend: "0", proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryNextSequenceSendResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nextSequenceSend !== "0") {
            writer.uint32(8).uint64(message.nextSequenceSend);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNextSequenceSendResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nextSequenceSend = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            nextSequenceSend: isSet(object.nextSequenceSend) ? String(object.nextSequenceSend) : "0",
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.nextSequenceSend !== undefined && (obj.nextSequenceSend = message.nextSequenceSend);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    create(base) {
        return QueryNextSequenceSendResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryNextSequenceSendResponse();
        message.nextSequenceSend = (_a = object.nextSequenceSend) !== null && _a !== void 0 ? _a : "0";
        message.proof = (_b = object.proof) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Channel = this.Channel.bind(this);
        this.Channels = this.Channels.bind(this);
        this.ConnectionChannels = this.ConnectionChannels.bind(this);
        this.ChannelClientState = this.ChannelClientState.bind(this);
        this.ChannelConsensusState = this.ChannelConsensusState.bind(this);
        this.PacketCommitment = this.PacketCommitment.bind(this);
        this.PacketCommitments = this.PacketCommitments.bind(this);
        this.PacketReceipt = this.PacketReceipt.bind(this);
        this.PacketAcknowledgement = this.PacketAcknowledgement.bind(this);
        this.PacketAcknowledgements = this.PacketAcknowledgements.bind(this);
        this.UnreceivedPackets = this.UnreceivedPackets.bind(this);
        this.UnreceivedAcks = this.UnreceivedAcks.bind(this);
        this.NextSequenceReceive = this.NextSequenceReceive.bind(this);
        this.NextSequenceSend = this.NextSequenceSend.bind(this);
    }
    Channel(request, metadata) {
        return this.rpc.unary(QueryChannelDesc, QueryChannelRequest.fromPartial(request), metadata);
    }
    Channels(request, metadata) {
        return this.rpc.unary(QueryChannelsDesc, QueryChannelsRequest.fromPartial(request), metadata);
    }
    ConnectionChannels(request, metadata) {
        return this.rpc.unary(QueryConnectionChannelsDesc, QueryConnectionChannelsRequest.fromPartial(request), metadata);
    }
    ChannelClientState(request, metadata) {
        return this.rpc.unary(QueryChannelClientStateDesc, QueryChannelClientStateRequest.fromPartial(request), metadata);
    }
    ChannelConsensusState(request, metadata) {
        return this.rpc.unary(QueryChannelConsensusStateDesc, QueryChannelConsensusStateRequest.fromPartial(request), metadata);
    }
    PacketCommitment(request, metadata) {
        return this.rpc.unary(QueryPacketCommitmentDesc, QueryPacketCommitmentRequest.fromPartial(request), metadata);
    }
    PacketCommitments(request, metadata) {
        return this.rpc.unary(QueryPacketCommitmentsDesc, QueryPacketCommitmentsRequest.fromPartial(request), metadata);
    }
    PacketReceipt(request, metadata) {
        return this.rpc.unary(QueryPacketReceiptDesc, QueryPacketReceiptRequest.fromPartial(request), metadata);
    }
    PacketAcknowledgement(request, metadata) {
        return this.rpc.unary(QueryPacketAcknowledgementDesc, QueryPacketAcknowledgementRequest.fromPartial(request), metadata);
    }
    PacketAcknowledgements(request, metadata) {
        return this.rpc.unary(QueryPacketAcknowledgementsDesc, QueryPacketAcknowledgementsRequest.fromPartial(request), metadata);
    }
    UnreceivedPackets(request, metadata) {
        return this.rpc.unary(QueryUnreceivedPacketsDesc, QueryUnreceivedPacketsRequest.fromPartial(request), metadata);
    }
    UnreceivedAcks(request, metadata) {
        return this.rpc.unary(QueryUnreceivedAcksDesc, QueryUnreceivedAcksRequest.fromPartial(request), metadata);
    }
    NextSequenceReceive(request, metadata) {
        return this.rpc.unary(QueryNextSequenceReceiveDesc, QueryNextSequenceReceiveRequest.fromPartial(request), metadata);
    }
    NextSequenceSend(request, metadata) {
        return this.rpc.unary(QueryNextSequenceSendDesc, QueryNextSequenceSendRequest.fromPartial(request), metadata);
    }
}
export const QueryDesc = { serviceName: "ibc.core.channel.v1.Query" };
export const QueryChannelDesc = {
    methodName: "Channel",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryChannelRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryChannelResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryChannelsDesc = {
    methodName: "Channels",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryChannelsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryChannelsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryConnectionChannelsDesc = {
    methodName: "ConnectionChannels",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryConnectionChannelsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryConnectionChannelsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryChannelClientStateDesc = {
    methodName: "ChannelClientState",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryChannelClientStateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryChannelClientStateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryChannelConsensusStateDesc = {
    methodName: "ChannelConsensusState",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryChannelConsensusStateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryChannelConsensusStateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryPacketCommitmentDesc = {
    methodName: "PacketCommitment",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryPacketCommitmentRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryPacketCommitmentResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryPacketCommitmentsDesc = {
    methodName: "PacketCommitments",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryPacketCommitmentsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryPacketCommitmentsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryPacketReceiptDesc = {
    methodName: "PacketReceipt",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryPacketReceiptRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryPacketReceiptResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryPacketAcknowledgementDesc = {
    methodName: "PacketAcknowledgement",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryPacketAcknowledgementRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryPacketAcknowledgementResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryPacketAcknowledgementsDesc = {
    methodName: "PacketAcknowledgements",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryPacketAcknowledgementsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryPacketAcknowledgementsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryUnreceivedPacketsDesc = {
    methodName: "UnreceivedPackets",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryUnreceivedPacketsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryUnreceivedPacketsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryUnreceivedAcksDesc = {
    methodName: "UnreceivedAcks",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryUnreceivedAcksRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryUnreceivedAcksResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryNextSequenceReceiveDesc = {
    methodName: "NextSequenceReceive",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryNextSequenceReceiveRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryNextSequenceReceiveResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryNextSequenceSendDesc = {
    methodName: "NextSequenceSend",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryNextSequenceSendRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryNextSequenceSendResponse.decode(data);
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
