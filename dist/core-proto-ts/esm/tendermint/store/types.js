/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
function createBaseBlockStoreState() {
    return { base: "0", height: "0" };
}
export const BlockStoreState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.base !== "0") {
            writer.uint32(8).int64(message.base);
        }
        if (message.height !== "0") {
            writer.uint32(16).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockStoreState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.base = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.height = longToString(reader.int64());
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
            base: isSet(object.base) ? String(object.base) : "0",
            height: isSet(object.height) ? String(object.height) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.base !== undefined && (obj.base = message.base);
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    create(base) {
        return BlockStoreState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBlockStoreState();
        message.base = (_a = object.base) !== null && _a !== void 0 ? _a : "0";
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : "0";
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
