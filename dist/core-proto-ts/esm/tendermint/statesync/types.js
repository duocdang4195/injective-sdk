/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
function createBaseMessage() {
    return {
        snapshotsRequest: undefined,
        snapshotsResponse: undefined,
        chunkRequest: undefined,
        chunkResponse: undefined,
    };
}
export const Message = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.snapshotsRequest !== undefined) {
            SnapshotsRequest.encode(message.snapshotsRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.snapshotsResponse !== undefined) {
            SnapshotsResponse.encode(message.snapshotsResponse, writer.uint32(18).fork()).ldelim();
        }
        if (message.chunkRequest !== undefined) {
            ChunkRequest.encode(message.chunkRequest, writer.uint32(26).fork()).ldelim();
        }
        if (message.chunkResponse !== undefined) {
            ChunkResponse.encode(message.chunkResponse, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.snapshotsRequest = SnapshotsRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.snapshotsResponse = SnapshotsResponse.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.chunkRequest = ChunkRequest.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.chunkResponse = ChunkResponse.decode(reader, reader.uint32());
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
            snapshotsRequest: isSet(object.snapshotsRequest) ? SnapshotsRequest.fromJSON(object.snapshotsRequest) : undefined,
            snapshotsResponse: isSet(object.snapshotsResponse)
                ? SnapshotsResponse.fromJSON(object.snapshotsResponse)
                : undefined,
            chunkRequest: isSet(object.chunkRequest) ? ChunkRequest.fromJSON(object.chunkRequest) : undefined,
            chunkResponse: isSet(object.chunkResponse) ? ChunkResponse.fromJSON(object.chunkResponse) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.snapshotsRequest !== undefined &&
            (obj.snapshotsRequest = message.snapshotsRequest ? SnapshotsRequest.toJSON(message.snapshotsRequest) : undefined);
        message.snapshotsResponse !== undefined && (obj.snapshotsResponse = message.snapshotsResponse
            ? SnapshotsResponse.toJSON(message.snapshotsResponse)
            : undefined);
        message.chunkRequest !== undefined &&
            (obj.chunkRequest = message.chunkRequest ? ChunkRequest.toJSON(message.chunkRequest) : undefined);
        message.chunkResponse !== undefined &&
            (obj.chunkResponse = message.chunkResponse ? ChunkResponse.toJSON(message.chunkResponse) : undefined);
        return obj;
    },
    create(base) {
        return Message.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMessage();
        message.snapshotsRequest = (object.snapshotsRequest !== undefined && object.snapshotsRequest !== null)
            ? SnapshotsRequest.fromPartial(object.snapshotsRequest)
            : undefined;
        message.snapshotsResponse = (object.snapshotsResponse !== undefined && object.snapshotsResponse !== null)
            ? SnapshotsResponse.fromPartial(object.snapshotsResponse)
            : undefined;
        message.chunkRequest = (object.chunkRequest !== undefined && object.chunkRequest !== null)
            ? ChunkRequest.fromPartial(object.chunkRequest)
            : undefined;
        message.chunkResponse = (object.chunkResponse !== undefined && object.chunkResponse !== null)
            ? ChunkResponse.fromPartial(object.chunkResponse)
            : undefined;
        return message;
    },
};
function createBaseSnapshotsRequest() {
    return {};
}
export const SnapshotsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotsRequest();
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
        return SnapshotsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseSnapshotsRequest();
        return message;
    },
};
function createBaseSnapshotsResponse() {
    return { height: "0", format: 0, chunks: 0, hash: new Uint8Array(), metadata: new Uint8Array() };
}
export const SnapshotsResponse = {
    encode(message, writer = _m0.Writer.create()) {
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
        if (message.metadata.length !== 0) {
            writer.uint32(42).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotsResponse();
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
                    message.metadata = reader.bytes();
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
            metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined &&
            (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
        return obj;
    },
    create(base) {
        return SnapshotsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseSnapshotsResponse();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        message.chunks = (_c = object.chunks) !== null && _c !== void 0 ? _c : 0;
        message.hash = (_d = object.hash) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.metadata = (_e = object.metadata) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    },
};
function createBaseChunkRequest() {
    return { height: "0", format: 0, index: 0 };
}
export const ChunkRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.index !== 0) {
            writer.uint32(24).uint32(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChunkRequest();
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
                    message.index = reader.uint32();
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
            index: isSet(object.index) ? Number(object.index) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.index !== undefined && (obj.index = Math.round(message.index));
        return obj;
    },
    create(base) {
        return ChunkRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseChunkRequest();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        message.index = (_c = object.index) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseChunkResponse() {
    return { height: "0", format: 0, index: 0, chunk: new Uint8Array(), missing: false };
}
export const ChunkResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.index !== 0) {
            writer.uint32(24).uint32(message.index);
        }
        if (message.chunk.length !== 0) {
            writer.uint32(34).bytes(message.chunk);
        }
        if (message.missing === true) {
            writer.uint32(40).bool(message.missing);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChunkResponse();
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
                    message.index = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.chunk = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.missing = reader.bool();
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
            index: isSet(object.index) ? Number(object.index) : 0,
            chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(),
            missing: isSet(object.missing) ? Boolean(object.missing) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.chunk !== undefined &&
            (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        message.missing !== undefined && (obj.missing = message.missing);
        return obj;
    },
    create(base) {
        return ChunkResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseChunkResponse();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        message.index = (_c = object.index) !== null && _c !== void 0 ? _c : 0;
        message.chunk = (_d = object.chunk) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.missing = (_e = object.missing) !== null && _e !== void 0 ? _e : false;
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
