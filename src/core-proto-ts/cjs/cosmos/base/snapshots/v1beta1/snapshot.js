"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotSchema = exports.SnapshotKVItem = exports.SnapshotExtensionPayload = exports.SnapshotExtensionMeta = exports.SnapshotIAVLItem = exports.SnapshotStoreItem = exports.SnapshotItem = exports.Metadata = exports.Snapshot = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseSnapshot() {
    return { height: "0", format: 0, chunks: 0, hash: new Uint8Array(), metadata: undefined };
}
exports.Snapshot = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata !== undefined) {
            exports.Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.format = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.chunks = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.hash = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.metadata = exports.Metadata.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? String(object.height) : "0",
            format: isSet(object.format) ? Number(object.format) : 0,
            chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
            metadata: isSet(object.metadata) ? exports.Metadata.fromJSON(object.metadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined && (obj.metadata = message.metadata ? exports.Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    create(base) {
        return exports.Snapshot.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSnapshot();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        message.chunks = (_c = object.chunks) !== null && _c !== void 0 ? _c : 0;
        message.hash = (_d = object.hash) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? exports.Metadata.fromPartial(object.metadata)
            : undefined;
        return message;
    },
};
function createBaseMetadata() {
    return { chunkHashes: [] };
}
exports.Metadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.chunkHashes) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.chunkHashes.push(reader.bytes());
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
            chunkHashes: Array.isArray(object === null || object === void 0 ? void 0 : object.chunkHashes) ? object.chunkHashes.map((e) => bytesFromBase64(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.chunkHashes) {
            obj.chunkHashes = message.chunkHashes.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.chunkHashes = [];
        }
        return obj;
    },
    create(base) {
        return exports.Metadata.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMetadata();
        message.chunkHashes = ((_a = object.chunkHashes) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseSnapshotItem() {
    return {
        store: undefined,
        iavl: undefined,
        extension: undefined,
        extensionPayload: undefined,
        kv: undefined,
        schema: undefined,
    };
}
exports.SnapshotItem = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.store !== undefined) {
            exports.SnapshotStoreItem.encode(message.store, writer.uint32(10).fork()).ldelim();
        }
        if (message.iavl !== undefined) {
            exports.SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).ldelim();
        }
        if (message.extension !== undefined) {
            exports.SnapshotExtensionMeta.encode(message.extension, writer.uint32(26).fork()).ldelim();
        }
        if (message.extensionPayload !== undefined) {
            exports.SnapshotExtensionPayload.encode(message.extensionPayload, writer.uint32(34).fork()).ldelim();
        }
        if (message.kv !== undefined) {
            exports.SnapshotKVItem.encode(message.kv, writer.uint32(42).fork()).ldelim();
        }
        if (message.schema !== undefined) {
            exports.SnapshotSchema.encode(message.schema, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.store = exports.SnapshotStoreItem.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.iavl = exports.SnapshotIAVLItem.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.extension = exports.SnapshotExtensionMeta.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.extensionPayload = exports.SnapshotExtensionPayload.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.kv = exports.SnapshotKVItem.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.schema = exports.SnapshotSchema.decode(reader, reader.uint32());
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
            store: isSet(object.store) ? exports.SnapshotStoreItem.fromJSON(object.store) : undefined,
            iavl: isSet(object.iavl) ? exports.SnapshotIAVLItem.fromJSON(object.iavl) : undefined,
            extension: isSet(object.extension) ? exports.SnapshotExtensionMeta.fromJSON(object.extension) : undefined,
            extensionPayload: isSet(object.extensionPayload)
                ? exports.SnapshotExtensionPayload.fromJSON(object.extensionPayload)
                : undefined,
            kv: isSet(object.kv) ? exports.SnapshotKVItem.fromJSON(object.kv) : undefined,
            schema: isSet(object.schema) ? exports.SnapshotSchema.fromJSON(object.schema) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.store !== undefined && (obj.store = message.store ? exports.SnapshotStoreItem.toJSON(message.store) : undefined);
        message.iavl !== undefined && (obj.iavl = message.iavl ? exports.SnapshotIAVLItem.toJSON(message.iavl) : undefined);
        message.extension !== undefined &&
            (obj.extension = message.extension ? exports.SnapshotExtensionMeta.toJSON(message.extension) : undefined);
        message.extensionPayload !== undefined && (obj.extensionPayload = message.extensionPayload
            ? exports.SnapshotExtensionPayload.toJSON(message.extensionPayload)
            : undefined);
        message.kv !== undefined && (obj.kv = message.kv ? exports.SnapshotKVItem.toJSON(message.kv) : undefined);
        message.schema !== undefined && (obj.schema = message.schema ? exports.SnapshotSchema.toJSON(message.schema) : undefined);
        return obj;
    },
    create(base) {
        return exports.SnapshotItem.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSnapshotItem();
        message.store = (object.store !== undefined && object.store !== null)
            ? exports.SnapshotStoreItem.fromPartial(object.store)
            : undefined;
        message.iavl = (object.iavl !== undefined && object.iavl !== null)
            ? exports.SnapshotIAVLItem.fromPartial(object.iavl)
            : undefined;
        message.extension = (object.extension !== undefined && object.extension !== null)
            ? exports.SnapshotExtensionMeta.fromPartial(object.extension)
            : undefined;
        message.extensionPayload = (object.extensionPayload !== undefined && object.extensionPayload !== null)
            ? exports.SnapshotExtensionPayload.fromPartial(object.extensionPayload)
            : undefined;
        message.kv = (object.kv !== undefined && object.kv !== null) ? exports.SnapshotKVItem.fromPartial(object.kv) : undefined;
        message.schema = (object.schema !== undefined && object.schema !== null)
            ? exports.SnapshotSchema.fromPartial(object.schema)
            : undefined;
        return message;
    },
};
function createBaseSnapshotStoreItem() {
    return { name: "" };
}
exports.SnapshotStoreItem = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotStoreItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
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
        return { name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    create(base) {
        return exports.SnapshotStoreItem.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSnapshotStoreItem();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSnapshotIAVLItem() {
    return { key: new Uint8Array(), value: new Uint8Array(), version: "0", height: 0 };
}
exports.SnapshotIAVLItem = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.version !== "0") {
            writer.uint32(24).int64(message.version);
        }
        if (message.height !== 0) {
            writer.uint32(32).int32(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotIAVLItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.version = longToString(reader.int64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.height = reader.int32();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
            version: isSet(object.version) ? String(object.version) : "0",
            height: isSet(object.height) ? Number(object.height) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.version !== undefined && (obj.version = message.version);
        message.height !== undefined && (obj.height = Math.round(message.height));
        return obj;
    },
    create(base) {
        return exports.SnapshotIAVLItem.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSnapshotIAVLItem();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : "0";
        message.height = (_d = object.height) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseSnapshotExtensionMeta() {
    return { name: "", format: 0 };
}
exports.SnapshotExtensionMeta = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotExtensionMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.format = reader.uint32();
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
            name: isSet(object.name) ? String(object.name) : "",
            format: isSet(object.format) ? Number(object.format) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.format !== undefined && (obj.format = Math.round(message.format));
        return obj;
    },
    create(base) {
        return exports.SnapshotExtensionMeta.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSnapshotExtensionMeta();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseSnapshotExtensionPayload() {
    return { payload: new Uint8Array() };
}
exports.SnapshotExtensionPayload = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.payload.length !== 0) {
            writer.uint32(10).bytes(message.payload);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotExtensionPayload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.payload = reader.bytes();
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
        return { payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array() };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined &&
            (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.SnapshotExtensionPayload.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSnapshotExtensionPayload();
        message.payload = (_a = object.payload) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseSnapshotKVItem() {
    return { key: new Uint8Array(), value: new Uint8Array() };
}
exports.SnapshotKVItem = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotKVItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.bytes();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.SnapshotKVItem.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSnapshotKVItem();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseSnapshotSchema() {
    return { keys: [] };
}
exports.SnapshotSchema = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.keys) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotSchema();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.keys.push(reader.bytes());
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
        return { keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map((e) => bytesFromBase64(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    create(base) {
        return exports.SnapshotSchema.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSnapshotSchema();
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
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
