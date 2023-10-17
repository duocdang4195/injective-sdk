"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.ValidatorSigningInfo = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../google/protobuf/duration");
const timestamp_1 = require("../../../google/protobuf/timestamp");
function createBaseValidatorSigningInfo() {
    return {
        address: "",
        startHeight: "0",
        indexOffset: "0",
        jailedUntil: undefined,
        tombstoned: false,
        missedBlocksCounter: "0",
    };
}
exports.ValidatorSigningInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.startHeight !== "0") {
            writer.uint32(16).int64(message.startHeight);
        }
        if (message.indexOffset !== "0") {
            writer.uint32(24).int64(message.indexOffset);
        }
        if (message.jailedUntil !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.jailedUntil), writer.uint32(34).fork()).ldelim();
        }
        if (message.tombstoned === true) {
            writer.uint32(40).bool(message.tombstoned);
        }
        if (message.missedBlocksCounter !== "0") {
            writer.uint32(48).int64(message.missedBlocksCounter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSigningInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.startHeight = longToString(reader.int64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.indexOffset = longToString(reader.int64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.jailedUntil = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.tombstoned = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.missedBlocksCounter = longToString(reader.int64());
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
            address: isSet(object.address) ? String(object.address) : "",
            startHeight: isSet(object.startHeight) ? String(object.startHeight) : "0",
            indexOffset: isSet(object.indexOffset) ? String(object.indexOffset) : "0",
            jailedUntil: isSet(object.jailedUntil) ? fromJsonTimestamp(object.jailedUntil) : undefined,
            tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
            missedBlocksCounter: isSet(object.missedBlocksCounter) ? String(object.missedBlocksCounter) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.startHeight !== undefined && (obj.startHeight = message.startHeight);
        message.indexOffset !== undefined && (obj.indexOffset = message.indexOffset);
        message.jailedUntil !== undefined && (obj.jailedUntil = message.jailedUntil.toISOString());
        message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
        message.missedBlocksCounter !== undefined && (obj.missedBlocksCounter = message.missedBlocksCounter);
        return obj;
    },
    create(base) {
        return exports.ValidatorSigningInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseValidatorSigningInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.startHeight = (_b = object.startHeight) !== null && _b !== void 0 ? _b : "0";
        message.indexOffset = (_c = object.indexOffset) !== null && _c !== void 0 ? _c : "0";
        message.jailedUntil = (_d = object.jailedUntil) !== null && _d !== void 0 ? _d : undefined;
        message.tombstoned = (_e = object.tombstoned) !== null && _e !== void 0 ? _e : false;
        message.missedBlocksCounter = (_f = object.missedBlocksCounter) !== null && _f !== void 0 ? _f : "0";
        return message;
    },
};
function createBaseParams() {
    return {
        signedBlocksWindow: "0",
        minSignedPerWindow: new Uint8Array(),
        downtimeJailDuration: undefined,
        slashFractionDoubleSign: new Uint8Array(),
        slashFractionDowntime: new Uint8Array(),
    };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signedBlocksWindow !== "0") {
            writer.uint32(8).int64(message.signedBlocksWindow);
        }
        if (message.minSignedPerWindow.length !== 0) {
            writer.uint32(18).bytes(message.minSignedPerWindow);
        }
        if (message.downtimeJailDuration !== undefined) {
            duration_1.Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
        }
        if (message.slashFractionDoubleSign.length !== 0) {
            writer.uint32(34).bytes(message.slashFractionDoubleSign);
        }
        if (message.slashFractionDowntime.length !== 0) {
            writer.uint32(42).bytes(message.slashFractionDowntime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.signedBlocksWindow = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.minSignedPerWindow = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.downtimeJailDuration = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.slashFractionDoubleSign = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.slashFractionDowntime = reader.bytes();
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
            signedBlocksWindow: isSet(object.signedBlocksWindow) ? String(object.signedBlocksWindow) : "0",
            minSignedPerWindow: isSet(object.minSignedPerWindow)
                ? bytesFromBase64(object.minSignedPerWindow)
                : new Uint8Array(),
            downtimeJailDuration: isSet(object.downtimeJailDuration)
                ? duration_1.Duration.fromJSON(object.downtimeJailDuration)
                : undefined,
            slashFractionDoubleSign: isSet(object.slashFractionDoubleSign)
                ? bytesFromBase64(object.slashFractionDoubleSign)
                : new Uint8Array(),
            slashFractionDowntime: isSet(object.slashFractionDowntime)
                ? bytesFromBase64(object.slashFractionDowntime)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.signedBlocksWindow !== undefined && (obj.signedBlocksWindow = message.signedBlocksWindow);
        message.minSignedPerWindow !== undefined &&
            (obj.minSignedPerWindow = base64FromBytes(message.minSignedPerWindow !== undefined ? message.minSignedPerWindow : new Uint8Array()));
        message.downtimeJailDuration !== undefined && (obj.downtimeJailDuration = message.downtimeJailDuration
            ? duration_1.Duration.toJSON(message.downtimeJailDuration)
            : undefined);
        message.slashFractionDoubleSign !== undefined &&
            (obj.slashFractionDoubleSign = base64FromBytes(message.slashFractionDoubleSign !== undefined ? message.slashFractionDoubleSign : new Uint8Array()));
        message.slashFractionDowntime !== undefined &&
            (obj.slashFractionDowntime = base64FromBytes(message.slashFractionDowntime !== undefined ? message.slashFractionDowntime : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseParams();
        message.signedBlocksWindow = (_a = object.signedBlocksWindow) !== null && _a !== void 0 ? _a : "0";
        message.minSignedPerWindow = (_b = object.minSignedPerWindow) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.downtimeJailDuration = (object.downtimeJailDuration !== undefined && object.downtimeJailDuration !== null)
            ? duration_1.Duration.fromPartial(object.downtimeJailDuration)
            : undefined;
        message.slashFractionDoubleSign = (_c = object.slashFractionDoubleSign) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.slashFractionDowntime = (_d = object.slashFractionDowntime) !== null && _d !== void 0 ? _d : new Uint8Array();
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
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1000).toString();
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (Number(t.seconds) || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
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
