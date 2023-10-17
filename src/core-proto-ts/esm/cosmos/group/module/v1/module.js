/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";
function createBaseModule() {
    return { maxExecutionPeriod: undefined, maxMetadataLen: "0" };
}
export const Module = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxExecutionPeriod !== undefined) {
            Duration.encode(message.maxExecutionPeriod, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxMetadataLen !== "0") {
            writer.uint32(16).uint64(message.maxMetadataLen);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.maxExecutionPeriod = Duration.decode(reader, reader.uint32());
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
            maxExecutionPeriod: isSet(object.maxExecutionPeriod) ? Duration.fromJSON(object.maxExecutionPeriod) : undefined,
            maxMetadataLen: isSet(object.maxMetadataLen) ? String(object.maxMetadataLen) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxExecutionPeriod !== undefined &&
            (obj.maxExecutionPeriod = message.maxExecutionPeriod ? Duration.toJSON(message.maxExecutionPeriod) : undefined);
        message.maxMetadataLen !== undefined && (obj.maxMetadataLen = message.maxMetadataLen);
        return obj;
    },
    create(base) {
        return Module.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseModule();
        message.maxExecutionPeriod = (object.maxExecutionPeriod !== undefined && object.maxExecutionPeriod !== null)
            ? Duration.fromPartial(object.maxExecutionPeriod)
            : undefined;
        message.maxMetadataLen = (_a = object.maxMetadataLen) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
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
