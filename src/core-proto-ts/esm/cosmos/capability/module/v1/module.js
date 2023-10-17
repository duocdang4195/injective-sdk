/* eslint-disable */
import _m0 from "protobufjs/minimal";
function createBaseModule() {
    return { sealKeeper: false };
}
export const Module = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sealKeeper === true) {
            writer.uint32(8).bool(message.sealKeeper);
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
                    message.sealKeeper = reader.bool();
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
        return { sealKeeper: isSet(object.sealKeeper) ? Boolean(object.sealKeeper) : false };
    },
    toJSON(message) {
        const obj = {};
        message.sealKeeper !== undefined && (obj.sealKeeper = message.sealKeeper);
        return obj;
    },
    create(base) {
        return Module.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseModule();
        message.sealKeeper = (_a = object.sealKeeper) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
