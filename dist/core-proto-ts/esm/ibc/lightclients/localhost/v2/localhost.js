/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Height } from "../../../core/client/v1/client";
function createBaseClientState() {
    return { latestHeight: undefined };
}
export const ClientState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.latestHeight !== undefined) {
            Height.encode(message.latestHeight, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.latestHeight = Height.decode(reader, reader.uint32());
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
        return { latestHeight: isSet(object.latestHeight) ? Height.fromJSON(object.latestHeight) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.latestHeight !== undefined &&
            (obj.latestHeight = message.latestHeight ? Height.toJSON(message.latestHeight) : undefined);
        return obj;
    },
    create(base) {
        return ClientState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.latestHeight = (object.latestHeight !== undefined && object.latestHeight !== null)
            ? Height.fromPartial(object.latestHeight)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
