/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
function createBaseLegacyAminoPubKey() {
    return { threshold: 0, publicKeys: [] };
}
export const LegacyAminoPubKey = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.threshold !== 0) {
            writer.uint32(8).uint32(message.threshold);
        }
        for (const v of message.publicKeys) {
            Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLegacyAminoPubKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.threshold = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.publicKeys.push(Any.decode(reader, reader.uint32()));
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
            threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
            publicKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.publicKeys) ? object.publicKeys.map((e) => Any.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.threshold !== undefined && (obj.threshold = Math.round(message.threshold));
        if (message.publicKeys) {
            obj.publicKeys = message.publicKeys.map((e) => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.publicKeys = [];
        }
        return obj;
    },
    create(base) {
        return LegacyAminoPubKey.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLegacyAminoPubKey();
        message.threshold = (_a = object.threshold) !== null && _a !== void 0 ? _a : 0;
        message.publicKeys = ((_b = object.publicKeys) === null || _b === void 0 ? void 0 : _b.map((e) => Any.fromPartial(e))) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
