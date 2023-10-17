"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitArray = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseBitArray() {
    return { bits: "0", elems: [] };
}
exports.BitArray = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bits !== "0") {
            writer.uint32(8).int64(message.bits);
        }
        writer.uint32(18).fork();
        for (const v of message.elems) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBitArray();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.bits = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag === 16) {
                        message.elems.push(longToString(reader.uint64()));
                        continue;
                    }
                    if (tag === 18) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.elems.push(longToString(reader.uint64()));
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
            bits: isSet(object.bits) ? String(object.bits) : "0",
            elems: Array.isArray(object === null || object === void 0 ? void 0 : object.elems) ? object.elems.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.bits !== undefined && (obj.bits = message.bits);
        if (message.elems) {
            obj.elems = message.elems.map((e) => e);
        }
        else {
            obj.elems = [];
        }
        return obj;
    },
    create(base) {
        return exports.BitArray.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBitArray();
        message.bits = (_a = object.bits) !== null && _a !== void 0 ? _a : "0";
        message.elems = ((_b = object.elems) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
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
