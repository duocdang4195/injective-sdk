"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../../google/protobuf/duration");
function createBaseModule() {
    return { maxExecutionPeriod: undefined, maxMetadataLen: "0" };
}
exports.Module = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxExecutionPeriod !== undefined) {
            duration_1.Duration.encode(message.maxExecutionPeriod, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxMetadataLen !== "0") {
            writer.uint32(16).uint64(message.maxMetadataLen);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.maxExecutionPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.maxMetadataLen = longToString(reader.uint64());
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
            maxExecutionPeriod: isSet(object.maxExecutionPeriod) ? duration_1.Duration.fromJSON(object.maxExecutionPeriod) : undefined,
            maxMetadataLen: isSet(object.maxMetadataLen) ? String(object.maxMetadataLen) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxExecutionPeriod !== undefined &&
            (obj.maxExecutionPeriod = message.maxExecutionPeriod ? duration_1.Duration.toJSON(message.maxExecutionPeriod) : undefined);
        message.maxMetadataLen !== undefined && (obj.maxMetadataLen = message.maxMetadataLen);
        return obj;
    },
    create(base) {
        return exports.Module.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseModule();
        message.maxExecutionPeriod = (object.maxExecutionPeriod !== undefined && object.maxExecutionPeriod !== null)
            ? duration_1.Duration.fromPartial(object.maxExecutionPeriod)
            : undefined;
        message.maxMetadataLen = (_a = object.maxMetadataLen) !== null && _a !== void 0 ? _a : "0";
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
