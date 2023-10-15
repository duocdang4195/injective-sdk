/* eslint-disable */
import _m0 from "protobufjs/minimal";
function createBaseMetadata() {
    return { feeVersion: "", appVersion: "" };
}
export const Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feeVersion !== "") {
            writer.uint32(10).string(message.feeVersion);
        }
        if (message.appVersion !== "") {
            writer.uint32(18).string(message.appVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feeVersion = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.appVersion = reader.string();
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
            feeVersion: isSet(object.feeVersion) ? String(object.feeVersion) : "",
            appVersion: isSet(object.appVersion) ? String(object.appVersion) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.feeVersion !== undefined && (obj.feeVersion = message.feeVersion);
        message.appVersion !== undefined && (obj.appVersion = message.appVersion);
        return obj;
    },
    create(base) {
        return Metadata.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMetadata();
        message.feeVersion = (_a = object.feeVersion) !== null && _a !== void 0 ? _a : "";
        message.appVersion = (_b = object.appVersion) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
