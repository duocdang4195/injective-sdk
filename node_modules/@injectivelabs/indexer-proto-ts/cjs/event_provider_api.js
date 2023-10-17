"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.EventProviderAPIGetCustomEventsRPCDesc = exports.EventProviderAPIGetBlockEventsRPCDesc = exports.EventProviderAPIStreamBlockEventsDesc = exports.EventProviderAPIGetLatestHeightDesc = exports.EventProviderAPIDesc = exports.EventProviderAPIClientImpl = exports.GetCustomEventsRPCResponse = exports.GetCustomEventsRPCRequest = exports.BlockEventsRPC_TxHashesEntry = exports.BlockEventsRPC = exports.GetBlockEventsRPCResponse = exports.GetBlockEventsRPCRequest = exports.BlockEvent = exports.Block = exports.StreamBlockEventsResponse = exports.StreamBlockEventsRequest = exports.LatestBlockHeight = exports.GetLatestHeightResponse = exports.GetLatestHeightRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.protobufPackage = "event_provider_api";
function createBaseGetLatestHeightRequest() {
    return {};
}
exports.GetLatestHeightRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestHeightRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
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
        return exports.GetLatestHeightRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseGetLatestHeightRequest();
        return message;
    },
};
function createBaseGetLatestHeightResponse() {
    return { v: "", s: "", e: "", data: undefined };
}
exports.GetLatestHeightResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.v !== "") {
            writer.uint32(10).string(message.v);
        }
        if (message.s !== "") {
            writer.uint32(18).string(message.s);
        }
        if (message.e !== "") {
            writer.uint32(26).string(message.e);
        }
        if (message.data !== undefined) {
            exports.LatestBlockHeight.encode(message.data, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.v = reader.string();
                    break;
                case 2:
                    message.s = reader.string();
                    break;
                case 3:
                    message.e = reader.string();
                    break;
                case 4:
                    message.data = exports.LatestBlockHeight.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            v: isSet(object.v) ? String(object.v) : "",
            s: isSet(object.s) ? String(object.s) : "",
            e: isSet(object.e) ? String(object.e) : "",
            data: isSet(object.data) ? exports.LatestBlockHeight.fromJSON(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.v !== undefined && (obj.v = message.v);
        message.s !== undefined && (obj.s = message.s);
        message.e !== undefined && (obj.e = message.e);
        message.data !== undefined && (obj.data = message.data ? exports.LatestBlockHeight.toJSON(message.data) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetLatestHeightResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetLatestHeightResponse();
        message.v = (_a = object.v) !== null && _a !== void 0 ? _a : "";
        message.s = (_b = object.s) !== null && _b !== void 0 ? _b : "";
        message.e = (_c = object.e) !== null && _c !== void 0 ? _c : "";
        message.data = (object.data !== undefined && object.data !== null)
            ? exports.LatestBlockHeight.fromPartial(object.data)
            : undefined;
        return message;
    },
};
function createBaseLatestBlockHeight() {
    return { height: "0" };
}
exports.LatestBlockHeight = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).uint64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLatestBlockHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { height: isSet(object.height) ? String(object.height) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    create(base) {
        return exports.LatestBlockHeight.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLatestBlockHeight();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseStreamBlockEventsRequest() {
    return { backend: "", height: 0 };
}
exports.StreamBlockEventsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backend !== "") {
            writer.uint32(10).string(message.backend);
        }
        if (message.height !== 0) {
            writer.uint32(16).sint32(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamBlockEventsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backend = reader.string();
                    break;
                case 2:
                    message.height = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            backend: isSet(object.backend) ? String(object.backend) : "",
            height: isSet(object.height) ? Number(object.height) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.backend !== undefined && (obj.backend = message.backend);
        message.height !== undefined && (obj.height = Math.round(message.height));
        return obj;
    },
    create(base) {
        return exports.StreamBlockEventsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStreamBlockEventsRequest();
        message.backend = (_a = object.backend) !== null && _a !== void 0 ? _a : "";
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseStreamBlockEventsResponse() {
    return { blocks: [] };
}
exports.StreamBlockEventsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.blocks) {
            exports.Block.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamBlockEventsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blocks.push(exports.Block.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { blocks: Array.isArray(object === null || object === void 0 ? void 0 : object.blocks) ? object.blocks.map((e) => exports.Block.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.blocks) {
            obj.blocks = message.blocks.map((e) => e ? exports.Block.toJSON(e) : undefined);
        }
        else {
            obj.blocks = [];
        }
        return obj;
    },
    create(base) {
        return exports.StreamBlockEventsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStreamBlockEventsResponse();
        message.blocks = ((_a = object.blocks) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Block.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBlock() {
    return { height: "0", version: "", events: [], inSync: false };
}
exports.Block = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).sint64(message.height);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        for (const v of message.events) {
            exports.BlockEvent.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.inSync === true) {
            writer.uint32(32).bool(message.inSync);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.sint64());
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.events.push(exports.BlockEvent.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.inSync = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            height: isSet(object.height) ? String(object.height) : "0",
            version: isSet(object.version) ? String(object.version) : "",
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => exports.BlockEvent.fromJSON(e)) : [],
            inSync: isSet(object.inSync) ? Boolean(object.inSync) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.version !== undefined && (obj.version = message.version);
        if (message.events) {
            obj.events = message.events.map((e) => e ? exports.BlockEvent.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        message.inSync !== undefined && (obj.inSync = message.inSync);
        return obj;
    },
    create(base) {
        return exports.Block.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseBlock();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        message.events = ((_c = object.events) === null || _c === void 0 ? void 0 : _c.map((e) => exports.BlockEvent.fromPartial(e))) || [];
        message.inSync = (_d = object.inSync) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseBlockEvent() {
    return { typeUrl: "", value: new Uint8Array(), txHash: new Uint8Array() };
}
exports.BlockEvent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.typeUrl !== "") {
            writer.uint32(10).string(message.typeUrl);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.txHash.length !== 0) {
            writer.uint32(26).bytes(message.txHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.typeUrl = reader.string();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.txHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            typeUrl: isSet(object.typeUrl) ? String(object.typeUrl) : "",
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
            txHash: isSet(object.txHash) ? bytesFromBase64(object.txHash) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.txHash !== undefined &&
            (obj.txHash = base64FromBytes(message.txHash !== undefined ? message.txHash : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.BlockEvent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseBlockEvent();
        message.typeUrl = (_a = object.typeUrl) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.txHash = (_c = object.txHash) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseGetBlockEventsRPCRequest() {
    return { backend: "", height: 0 };
}
exports.GetBlockEventsRPCRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backend !== "") {
            writer.uint32(10).string(message.backend);
        }
        if (message.height !== 0) {
            writer.uint32(16).sint32(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockEventsRPCRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backend = reader.string();
                    break;
                case 2:
                    message.height = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            backend: isSet(object.backend) ? String(object.backend) : "",
            height: isSet(object.height) ? Number(object.height) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.backend !== undefined && (obj.backend = message.backend);
        message.height !== undefined && (obj.height = Math.round(message.height));
        return obj;
    },
    create(base) {
        return exports.GetBlockEventsRPCRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetBlockEventsRPCRequest();
        message.backend = (_a = object.backend) !== null && _a !== void 0 ? _a : "";
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseGetBlockEventsRPCResponse() {
    return { v: "", s: "", e: "", data: undefined };
}
exports.GetBlockEventsRPCResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.v !== "") {
            writer.uint32(10).string(message.v);
        }
        if (message.s !== "") {
            writer.uint32(18).string(message.s);
        }
        if (message.e !== "") {
            writer.uint32(26).string(message.e);
        }
        if (message.data !== undefined) {
            exports.BlockEventsRPC.encode(message.data, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockEventsRPCResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.v = reader.string();
                    break;
                case 2:
                    message.s = reader.string();
                    break;
                case 3:
                    message.e = reader.string();
                    break;
                case 4:
                    message.data = exports.BlockEventsRPC.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            v: isSet(object.v) ? String(object.v) : "",
            s: isSet(object.s) ? String(object.s) : "",
            e: isSet(object.e) ? String(object.e) : "",
            data: isSet(object.data) ? exports.BlockEventsRPC.fromJSON(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.v !== undefined && (obj.v = message.v);
        message.s !== undefined && (obj.s = message.s);
        message.e !== undefined && (obj.e = message.e);
        message.data !== undefined && (obj.data = message.data ? exports.BlockEventsRPC.toJSON(message.data) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetBlockEventsRPCResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetBlockEventsRPCResponse();
        message.v = (_a = object.v) !== null && _a !== void 0 ? _a : "";
        message.s = (_b = object.s) !== null && _b !== void 0 ? _b : "";
        message.e = (_c = object.e) !== null && _c !== void 0 ? _c : "";
        message.data = (object.data !== undefined && object.data !== null)
            ? exports.BlockEventsRPC.fromPartial(object.data)
            : undefined;
        return message;
    },
};
function createBaseBlockEventsRPC() {
    return { types: [], events: [], txHashes: {} };
}
exports.BlockEventsRPC = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.types) {
            writer.uint32(10).string(v);
        }
        for (const v of message.events) {
            writer.uint32(18).bytes(v);
        }
        Object.entries(message.txHashes).forEach(([key, value]) => {
            exports.BlockEventsRPC_TxHashesEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockEventsRPC();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.types.push(reader.string());
                    break;
                case 2:
                    message.events.push(reader.bytes());
                    break;
                case 3:
                    const entry3 = exports.BlockEventsRPC_TxHashesEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.txHashes[entry3.key] = entry3.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            types: Array.isArray(object === null || object === void 0 ? void 0 : object.types) ? object.types.map((e) => String(e)) : [],
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => bytesFromBase64(e)) : [],
            txHashes: isObject(object.txHashes)
                ? Object.entries(object.txHashes).reduce((acc, [key, value]) => {
                    acc[Number(key)] = bytesFromBase64(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.types) {
            obj.types = message.types.map((e) => e);
        }
        else {
            obj.types = [];
        }
        if (message.events) {
            obj.events = message.events.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.events = [];
        }
        obj.txHashes = {};
        if (message.txHashes) {
            Object.entries(message.txHashes).forEach(([k, v]) => {
                obj.txHashes[k] = base64FromBytes(v);
            });
        }
        return obj;
    },
    create(base) {
        return exports.BlockEventsRPC.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseBlockEventsRPC();
        message.types = ((_a = object.types) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.events = ((_b = object.events) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.txHashes = Object.entries((_c = object.txHashes) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[Number(key)] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseBlockEventsRPC_TxHashesEntry() {
    return { key: 0, value: new Uint8Array() };
}
exports.BlockEventsRPC_TxHashesEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== 0) {
            writer.uint32(8).sint32(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockEventsRPC_TxHashesEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.sint32();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? Number(object.key) : 0,
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = Math.round(message.key));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.BlockEventsRPC_TxHashesEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBlockEventsRPC_TxHashesEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : 0;
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseGetCustomEventsRPCRequest() {
    return { backend: "", height: 0, events: "" };
}
exports.GetCustomEventsRPCRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backend !== "") {
            writer.uint32(10).string(message.backend);
        }
        if (message.height !== 0) {
            writer.uint32(16).sint32(message.height);
        }
        if (message.events !== "") {
            writer.uint32(26).string(message.events);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCustomEventsRPCRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backend = reader.string();
                    break;
                case 2:
                    message.height = reader.sint32();
                    break;
                case 3:
                    message.events = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            backend: isSet(object.backend) ? String(object.backend) : "",
            height: isSet(object.height) ? Number(object.height) : 0,
            events: isSet(object.events) ? String(object.events) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.backend !== undefined && (obj.backend = message.backend);
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.events !== undefined && (obj.events = message.events);
        return obj;
    },
    create(base) {
        return exports.GetCustomEventsRPCRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetCustomEventsRPCRequest();
        message.backend = (_a = object.backend) !== null && _a !== void 0 ? _a : "";
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : 0;
        message.events = (_c = object.events) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseGetCustomEventsRPCResponse() {
    return { v: "", s: "", e: "", data: undefined };
}
exports.GetCustomEventsRPCResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.v !== "") {
            writer.uint32(10).string(message.v);
        }
        if (message.s !== "") {
            writer.uint32(18).string(message.s);
        }
        if (message.e !== "") {
            writer.uint32(26).string(message.e);
        }
        if (message.data !== undefined) {
            exports.BlockEventsRPC.encode(message.data, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCustomEventsRPCResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.v = reader.string();
                    break;
                case 2:
                    message.s = reader.string();
                    break;
                case 3:
                    message.e = reader.string();
                    break;
                case 4:
                    message.data = exports.BlockEventsRPC.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            v: isSet(object.v) ? String(object.v) : "",
            s: isSet(object.s) ? String(object.s) : "",
            e: isSet(object.e) ? String(object.e) : "",
            data: isSet(object.data) ? exports.BlockEventsRPC.fromJSON(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.v !== undefined && (obj.v = message.v);
        message.s !== undefined && (obj.s = message.s);
        message.e !== undefined && (obj.e = message.e);
        message.data !== undefined && (obj.data = message.data ? exports.BlockEventsRPC.toJSON(message.data) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetCustomEventsRPCResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetCustomEventsRPCResponse();
        message.v = (_a = object.v) !== null && _a !== void 0 ? _a : "";
        message.s = (_b = object.s) !== null && _b !== void 0 ? _b : "";
        message.e = (_c = object.e) !== null && _c !== void 0 ? _c : "";
        message.data = (object.data !== undefined && object.data !== null)
            ? exports.BlockEventsRPC.fromPartial(object.data)
            : undefined;
        return message;
    },
};
class EventProviderAPIClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.GetLatestHeight = this.GetLatestHeight.bind(this);
        this.StreamBlockEvents = this.StreamBlockEvents.bind(this);
        this.GetBlockEventsRPC = this.GetBlockEventsRPC.bind(this);
        this.GetCustomEventsRPC = this.GetCustomEventsRPC.bind(this);
    }
    GetLatestHeight(request, metadata) {
        return this.rpc.unary(exports.EventProviderAPIGetLatestHeightDesc, exports.GetLatestHeightRequest.fromPartial(request), metadata);
    }
    StreamBlockEvents(request, metadata) {
        return this.rpc.invoke(exports.EventProviderAPIStreamBlockEventsDesc, exports.StreamBlockEventsRequest.fromPartial(request), metadata);
    }
    GetBlockEventsRPC(request, metadata) {
        return this.rpc.unary(exports.EventProviderAPIGetBlockEventsRPCDesc, exports.GetBlockEventsRPCRequest.fromPartial(request), metadata);
    }
    GetCustomEventsRPC(request, metadata) {
        return this.rpc.unary(exports.EventProviderAPIGetCustomEventsRPCDesc, exports.GetCustomEventsRPCRequest.fromPartial(request), metadata);
    }
}
exports.EventProviderAPIClientImpl = EventProviderAPIClientImpl;
exports.EventProviderAPIDesc = { serviceName: "event_provider_api.EventProviderAPI" };
exports.EventProviderAPIGetLatestHeightDesc = {
    methodName: "GetLatestHeight",
    service: exports.EventProviderAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetLatestHeightRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetLatestHeightResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.EventProviderAPIStreamBlockEventsDesc = {
    methodName: "StreamBlockEvents",
    service: exports.EventProviderAPIDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return exports.StreamBlockEventsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.StreamBlockEventsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.EventProviderAPIGetBlockEventsRPCDesc = {
    methodName: "GetBlockEventsRPC",
    service: exports.EventProviderAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetBlockEventsRPCRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetBlockEventsRPCResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.EventProviderAPIGetCustomEventsRPCDesc = {
    methodName: "GetCustomEventsRPC",
    service: exports.EventProviderAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetCustomEventsRPCRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetCustomEventsRPCResponse.decode(data);
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
    invoke(methodDesc, _request, metadata) {
        var _a;
        const upStreamCodes = this.options.upStreamRetryCodes || [];
        const DEFAULT_TIMEOUT_TIME = 3000;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new browser_headers_1.BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new rxjs_1.Observable((observer) => {
            const upStream = (() => {
                const client = grpc_web_1.grpc.invoke(methodDesc, {
                    host: this.host,
                    request,
                    transport: this.options.streamingTransport || this.options.transport,
                    metadata: maybeCombinedMetadata,
                    debug: this.options.debug,
                    onMessage: (next) => observer.next(next),
                    onEnd: (code, message, trailers) => {
                        if (code === 0) {
                            observer.complete();
                        }
                        else if (upStreamCodes.includes(code)) {
                            setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
                        }
                        else {
                            const err = new Error(message);
                            err.code = code;
                            err.metadata = trailers;
                            observer.error(err);
                        }
                    },
                });
                observer.add(() => client.close());
            });
            upStream();
        }).pipe((0, operators_1.share)());
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
function isObject(value) {
    return typeof value === "object" && value !== null;
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
