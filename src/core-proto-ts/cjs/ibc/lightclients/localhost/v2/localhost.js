"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientState = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const client_1 = require("../../../core/client/v1/client");
function createBaseClientState() {
    return { latestHeight: undefined };
}
exports.ClientState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.latestHeight !== undefined) {
            client_1.Height.encode(message.latestHeight, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.latestHeight = client_1.Height.decode(reader, reader.uint32());
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
        return { latestHeight: isSet(object.latestHeight) ? client_1.Height.fromJSON(object.latestHeight) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.latestHeight !== undefined &&
            (obj.latestHeight = message.latestHeight ? client_1.Height.toJSON(message.latestHeight) : undefined);
        return obj;
    },
    create(base) {
        return exports.ClientState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.latestHeight = (object.latestHeight !== undefined && object.latestHeight !== null)
            ? client_1.Height.fromPartial(object.latestHeight)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
