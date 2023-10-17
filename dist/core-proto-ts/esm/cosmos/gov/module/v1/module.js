/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
function createBaseModule() {
    return { maxMetadataLen: "0", authority: "" };
}
export const Module = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxMetadataLen !== "0") {
            writer.uint32(8).uint64(message.maxMetadataLen);
        }
        if (message.authority !== "") {
            writer.uint32(18).string(message.authority);
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
                    if (tag !== 8) {
                        break;
                    }
                    message.maxMetadataLen = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.authority = reader.string();
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
            maxMetadataLen: isSet(object.maxMetadataLen) ? String(object.maxMetadataLen) : "0",
            authority: isSet(object.authority) ? String(object.authority) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxMetadataLen !== undefined && (obj.maxMetadataLen = message.maxMetadataLen);
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    create(base) {
        return Module.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseModule();
        message.maxMetadataLen = (_a = object.maxMetadataLen) !== null && _a !== void 0 ? _a : "0";
        message.authority = (_b = object.authority) !== null && _b !== void 0 ? _b : "";
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
