"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseMetadata() {
    return { version: "", controllerConnectionId: "", hostConnectionId: "", address: "", encoding: "", txType: "" };
}
exports.Metadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.controllerConnectionId !== "") {
            writer.uint32(18).string(message.controllerConnectionId);
        }
        if (message.hostConnectionId !== "") {
            writer.uint32(26).string(message.hostConnectionId);
        }
        if (message.address !== "") {
            writer.uint32(34).string(message.address);
        }
        if (message.encoding !== "") {
            writer.uint32(42).string(message.encoding);
        }
        if (message.txType !== "") {
            writer.uint32(50).string(message.txType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.controllerConnectionId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.hostConnectionId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.encoding = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.txType = reader.string();
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
            version: isSet(object.version) ? String(object.version) : "",
            controllerConnectionId: isSet(object.controllerConnectionId) ? String(object.controllerConnectionId) : "",
            hostConnectionId: isSet(object.hostConnectionId) ? String(object.hostConnectionId) : "",
            address: isSet(object.address) ? String(object.address) : "",
            encoding: isSet(object.encoding) ? String(object.encoding) : "",
            txType: isSet(object.txType) ? String(object.txType) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.controllerConnectionId !== undefined && (obj.controllerConnectionId = message.controllerConnectionId);
        message.hostConnectionId !== undefined && (obj.hostConnectionId = message.hostConnectionId);
        message.address !== undefined && (obj.address = message.address);
        message.encoding !== undefined && (obj.encoding = message.encoding);
        message.txType !== undefined && (obj.txType = message.txType);
        return obj;
    },
    create(base) {
        return exports.Metadata.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMetadata();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.controllerConnectionId = (_b = object.controllerConnectionId) !== null && _b !== void 0 ? _b : "";
        message.hostConnectionId = (_c = object.hostConnectionId) !== null && _c !== void 0 ? _c : "";
        message.address = (_d = object.address) !== null && _d !== void 0 ? _d : "";
        message.encoding = (_e = object.encoding) !== null && _e !== void 0 ? _e : "";
        message.txType = (_f = object.txType) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
