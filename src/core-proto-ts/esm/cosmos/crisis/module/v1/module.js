/* eslint-disable */
import _m0 from "protobufjs/minimal";
function createBaseModule() {
    return { feeCollectorName: "", authority: "" };
}
export const Module = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feeCollectorName !== "") {
            writer.uint32(10).string(message.feeCollectorName);
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
                    if (tag !== 10) {
                        break;
                    }
                    message.feeCollectorName = reader.string();
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
            feeCollectorName: isSet(object.feeCollectorName) ? String(object.feeCollectorName) : "",
            authority: isSet(object.authority) ? String(object.authority) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.feeCollectorName !== undefined && (obj.feeCollectorName = message.feeCollectorName);
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    create(base) {
        return Module.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseModule();
        message.feeCollectorName = (_a = object.feeCollectorName) !== null && _a !== void 0 ? _a : "";
        message.authority = (_b = object.authority) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
