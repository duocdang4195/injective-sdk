"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseModule() {
    return { blockedModuleAccountsOverride: [], authority: "" };
}
exports.Module = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.blockedModuleAccountsOverride) {
            writer.uint32(10).string(v);
        }
        if (message.authority !== "") {
            writer.uint32(18).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.blockedModuleAccountsOverride.push(reader.string());
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
            blockedModuleAccountsOverride: Array.isArray(object === null || object === void 0 ? void 0 : object.blockedModuleAccountsOverride)
                ? object.blockedModuleAccountsOverride.map((e) => String(e))
                : [],
            authority: isSet(object.authority) ? String(object.authority) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.blockedModuleAccountsOverride) {
            obj.blockedModuleAccountsOverride = message.blockedModuleAccountsOverride.map((e) => e);
        }
        else {
            obj.blockedModuleAccountsOverride = [];
        }
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    create(base) {
        return exports.Module.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseModule();
        message.blockedModuleAccountsOverride = ((_a = object.blockedModuleAccountsOverride) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.authority = (_b = object.authority) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
