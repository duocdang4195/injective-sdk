"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseConfig() {
    return { skipAnteHandler: false, skipPostHandler: false };
}
exports.Config = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.skipAnteHandler === true) {
            writer.uint32(8).bool(message.skipAnteHandler);
        }
        if (message.skipPostHandler === true) {
            writer.uint32(16).bool(message.skipPostHandler);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.skipAnteHandler = reader.bool();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.skipPostHandler = reader.bool();
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
            skipAnteHandler: isSet(object.skipAnteHandler) ? Boolean(object.skipAnteHandler) : false,
            skipPostHandler: isSet(object.skipPostHandler) ? Boolean(object.skipPostHandler) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.skipAnteHandler !== undefined && (obj.skipAnteHandler = message.skipAnteHandler);
        message.skipPostHandler !== undefined && (obj.skipPostHandler = message.skipPostHandler);
        return obj;
    },
    create(base) {
        return exports.Config.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseConfig();
        message.skipAnteHandler = (_a = object.skipAnteHandler) !== null && _a !== void 0 ? _a : false;
        message.skipPostHandler = (_b = object.skipPostHandler) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
