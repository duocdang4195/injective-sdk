/* eslint-disable */
import _m0 from "protobufjs/minimal";
function createBaseModule() {
    return { hooksOrder: [], authority: "" };
}
export const Module = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.hooksOrder) {
            writer.uint32(10).string(v);
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
                    message.hooksOrder.push(reader.string());
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
            hooksOrder: Array.isArray(object === null || object === void 0 ? void 0 : object.hooksOrder) ? object.hooksOrder.map((e) => String(e)) : [],
            authority: isSet(object.authority) ? String(object.authority) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.hooksOrder) {
            obj.hooksOrder = message.hooksOrder.map((e) => e);
        }
        else {
            obj.hooksOrder = [];
        }
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    create(base) {
        return Module.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseModule();
        message.hooksOrder = ((_a = object.hooksOrder) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.authority = (_b = object.authority) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
