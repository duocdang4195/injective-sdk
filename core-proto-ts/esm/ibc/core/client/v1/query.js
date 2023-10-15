/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { ConsensusStateWithHeight, Height, IdentifiedClientState, Params } from "./client";
function createBaseQueryClientStateRequest() {
    return { clientId: "" };
}
export const QueryClientStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
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
        return { clientId: isSet(object.clientId) ? String(object.clientId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        return obj;
    },
    create(base) {
        return QueryClientStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryClientStateRequest();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryClientStateResponse() {
    return { clientState: undefined, proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryClientStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientState !== undefined) {
            Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientState = Any.decode(reader, reader.uint32());
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
            clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientState !== undefined &&
            (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    create(base) {
        return QueryClientStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryClientStateResponse();
        message.clientState = (object.clientState !== undefined && object.clientState !== null)
            ? Any.fromPartial(object.clientState)
            : undefined;
        message.proof = (_a = object.proof) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryClientStatesRequest() {
    return { pagination: undefined };
}
export const QueryClientStatesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatesRequest();
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
        return QueryClientStatesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryClientStatesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryClientStatesResponse() {
    return { clientStates: [], pagination: undefined };
}
export const QueryClientStatesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.clientStates) {
            IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientStates.push(IdentifiedClientState.decode(reader, reader.uint32()));
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
            clientStates: Array.isArray(object === null || object === void 0 ? void 0 : object.clientStates)
                ? object.clientStates.map((e) => IdentifiedClientState.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.clientStates) {
            obj.clientStates = message.clientStates.map((e) => e ? IdentifiedClientState.toJSON(e) : undefined);
        }
        else {
            obj.clientStates = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryClientStatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryClientStatesResponse();
        message.clientStates = ((_a = object.clientStates) === null || _a === void 0 ? void 0 : _a.map((e) => IdentifiedClientState.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryConsensusStateRequest() {
    return { clientId: "", revisionNumber: "0", revisionHeight: "0", latestHeight: false };
}
export const QueryConsensusStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.revisionNumber !== "0") {
            writer.uint32(16).uint64(message.revisionNumber);
        }
        if (message.revisionHeight !== "0") {
            writer.uint32(24).uint64(message.revisionHeight);
        }
        if (message.latestHeight === true) {
            writer.uint32(32).bool(message.latestHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateRequest();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.revisionNumber = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.revisionHeight = longToString(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.latestHeight = reader.bool();
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
            revisionNumber: isSet(object.revisionNumber) ? String(object.revisionNumber) : "0",
            revisionHeight: isSet(object.revisionHeight) ? String(object.revisionHeight) : "0",
            latestHeight: isSet(object.latestHeight) ? Boolean(object.latestHeight) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.revisionNumber !== undefined && (obj.revisionNumber = message.revisionNumber);
        message.revisionHeight !== undefined && (obj.revisionHeight = message.revisionHeight);
        message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight);
        return obj;
    },
    create(base) {
        return QueryConsensusStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseQueryConsensusStateRequest();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.revisionNumber = (_b = object.revisionNumber) !== null && _b !== void 0 ? _b : "0";
        message.revisionHeight = (_c = object.revisionHeight) !== null && _c !== void 0 ? _c : "0";
        message.latestHeight = (_d = object.latestHeight) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseQueryConsensusStateResponse() {
    return { consensusState: undefined, proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryConsensusStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.consensusState !== undefined) {
            Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryConsensusStateResponse();
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
            consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensusState !== undefined &&
            (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    create(base) {
        return QueryConsensusStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConsensusStateResponse();
        message.consensusState = (object.consensusState !== undefined && object.consensusState !== null)
            ? Any.fromPartial(object.consensusState)
            : undefined;
        message.proof = (_a = object.proof) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryConsensusStatesRequest() {
    return { clientId: "", pagination: undefined };
}
export const QueryConsensusStatesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStatesRequest();
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryConsensusStatesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConsensusStatesRequest();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryConsensusStatesResponse() {
    return { consensusStates: [], pagination: undefined };
}
export const QueryConsensusStatesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.consensusStates) {
            ConsensusStateWithHeight.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.consensusStates.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
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
            consensusStates: Array.isArray(object === null || object === void 0 ? void 0 : object.consensusStates)
                ? object.consensusStates.map((e) => ConsensusStateWithHeight.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.consensusStates) {
            obj.consensusStates = message.consensusStates.map((e) => e ? ConsensusStateWithHeight.toJSON(e) : undefined);
        }
        else {
            obj.consensusStates = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryConsensusStatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConsensusStatesResponse();
        message.consensusStates = ((_a = object.consensusStates) === null || _a === void 0 ? void 0 : _a.map((e) => ConsensusStateWithHeight.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryConsensusStateHeightsRequest() {
    return { clientId: "", pagination: undefined };
}
export const QueryConsensusStateHeightsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateHeightsRequest();
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryConsensusStateHeightsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConsensusStateHeightsRequest();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryConsensusStateHeightsResponse() {
    return { consensusStateHeights: [], pagination: undefined };
}
export const QueryConsensusStateHeightsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.consensusStateHeights) {
            Height.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateHeightsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.consensusStateHeights.push(Height.decode(reader, reader.uint32()));
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
            consensusStateHeights: Array.isArray(object === null || object === void 0 ? void 0 : object.consensusStateHeights)
                ? object.consensusStateHeights.map((e) => Height.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.consensusStateHeights) {
            obj.consensusStateHeights = message.consensusStateHeights.map((e) => e ? Height.toJSON(e) : undefined);
        }
        else {
            obj.consensusStateHeights = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryConsensusStateHeightsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConsensusStateHeightsResponse();
        message.consensusStateHeights = ((_a = object.consensusStateHeights) === null || _a === void 0 ? void 0 : _a.map((e) => Height.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryClientStatusRequest() {
    return { clientId: "" };
}
export const QueryClientStatusRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatusRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
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
        return { clientId: isSet(object.clientId) ? String(object.clientId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        return obj;
    },
    create(base) {
        return QueryClientStatusRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryClientStatusRequest();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryClientStatusResponse() {
    return { status: "" };
}
export const QueryClientStatusResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.status = reader.string();
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
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return QueryClientStatusResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryClientStatusResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryClientParamsRequest() {
    return {};
}
export const QueryClientParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientParamsRequest();
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
        return QueryClientParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryClientParamsRequest();
        return message;
    },
};
function createBaseQueryClientParamsResponse() {
    return { params: undefined };
}
export const QueryClientParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientParamsResponse();
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
        return QueryClientParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryClientParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryUpgradedClientStateRequest() {
    return {};
}
export const QueryUpgradedClientStateRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedClientStateRequest();
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
        return QueryUpgradedClientStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryUpgradedClientStateRequest();
        return message;
    },
};
function createBaseQueryUpgradedClientStateResponse() {
    return { upgradedClientState: undefined };
}
export const QueryUpgradedClientStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.upgradedClientState !== undefined) {
            Any.encode(message.upgradedClientState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.upgradedClientState = Any.decode(reader, reader.uint32());
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
            upgradedClientState: isSet(object.upgradedClientState) ? Any.fromJSON(object.upgradedClientState) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.upgradedClientState !== undefined &&
            (obj.upgradedClientState = message.upgradedClientState ? Any.toJSON(message.upgradedClientState) : undefined);
        return obj;
    },
    create(base) {
        return QueryUpgradedClientStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedClientStateResponse();
        message.upgradedClientState = (object.upgradedClientState !== undefined && object.upgradedClientState !== null)
            ? Any.fromPartial(object.upgradedClientState)
            : undefined;
        return message;
    },
};
function createBaseQueryUpgradedConsensusStateRequest() {
    return {};
}
export const QueryUpgradedConsensusStateRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateRequest();
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
        return QueryUpgradedConsensusStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        return message;
    },
};
function createBaseQueryUpgradedConsensusStateResponse() {
    return { upgradedConsensusState: undefined };
}
export const QueryUpgradedConsensusStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.upgradedConsensusState !== undefined) {
            Any.encode(message.upgradedConsensusState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.upgradedConsensusState = Any.decode(reader, reader.uint32());
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
            upgradedConsensusState: isSet(object.upgradedConsensusState)
                ? Any.fromJSON(object.upgradedConsensusState)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.upgradedConsensusState !== undefined && (obj.upgradedConsensusState = message.upgradedConsensusState
            ? Any.toJSON(message.upgradedConsensusState)
            : undefined);
        return obj;
    },
    create(base) {
        return QueryUpgradedConsensusStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgradedConsensusState =
            (object.upgradedConsensusState !== undefined && object.upgradedConsensusState !== null)
                ? Any.fromPartial(object.upgradedConsensusState)
                : undefined;
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.ClientState = this.ClientState.bind(this);
        this.ClientStates = this.ClientStates.bind(this);
        this.ConsensusState = this.ConsensusState.bind(this);
        this.ConsensusStates = this.ConsensusStates.bind(this);
        this.ConsensusStateHeights = this.ConsensusStateHeights.bind(this);
        this.ClientStatus = this.ClientStatus.bind(this);
        this.ClientParams = this.ClientParams.bind(this);
        this.UpgradedClientState = this.UpgradedClientState.bind(this);
        this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
    }
    ClientState(request, metadata) {
        return this.rpc.unary(QueryClientStateDesc, QueryClientStateRequest.fromPartial(request), metadata);
    }
    ClientStates(request, metadata) {
        return this.rpc.unary(QueryClientStatesDesc, QueryClientStatesRequest.fromPartial(request), metadata);
    }
    ConsensusState(request, metadata) {
        return this.rpc.unary(QueryConsensusStateDesc, QueryConsensusStateRequest.fromPartial(request), metadata);
    }
    ConsensusStates(request, metadata) {
        return this.rpc.unary(QueryConsensusStatesDesc, QueryConsensusStatesRequest.fromPartial(request), metadata);
    }
    ConsensusStateHeights(request, metadata) {
        return this.rpc.unary(QueryConsensusStateHeightsDesc, QueryConsensusStateHeightsRequest.fromPartial(request), metadata);
    }
    ClientStatus(request, metadata) {
        return this.rpc.unary(QueryClientStatusDesc, QueryClientStatusRequest.fromPartial(request), metadata);
    }
    ClientParams(request, metadata) {
        return this.rpc.unary(QueryClientParamsDesc, QueryClientParamsRequest.fromPartial(request), metadata);
    }
    UpgradedClientState(request, metadata) {
        return this.rpc.unary(QueryUpgradedClientStateDesc, QueryUpgradedClientStateRequest.fromPartial(request), metadata);
    }
    UpgradedConsensusState(request, metadata) {
        return this.rpc.unary(QueryUpgradedConsensusStateDesc, QueryUpgradedConsensusStateRequest.fromPartial(request), metadata);
    }
}
export const QueryDesc = { serviceName: "ibc.core.client.v1.Query" };
export const QueryClientStateDesc = {
    methodName: "ClientState",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryClientStateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryClientStateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryClientStatesDesc = {
    methodName: "ClientStates",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryClientStatesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryClientStatesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryConsensusStateDesc = {
    methodName: "ConsensusState",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryConsensusStateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryConsensusStateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryConsensusStatesDesc = {
    methodName: "ConsensusStates",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryConsensusStatesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryConsensusStatesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryConsensusStateHeightsDesc = {
    methodName: "ConsensusStateHeights",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryConsensusStateHeightsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryConsensusStateHeightsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryClientStatusDesc = {
    methodName: "ClientStatus",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryClientStatusRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryClientStatusResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryClientParamsDesc = {
    methodName: "ClientParams",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryClientParamsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryClientParamsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryUpgradedClientStateDesc = {
    methodName: "UpgradedClientState",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryUpgradedClientStateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryUpgradedClientStateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryUpgradedConsensusStateDesc = {
    methodName: "UpgradedConsensusState",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryUpgradedConsensusStateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryUpgradedConsensusStateResponse.decode(data);
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
