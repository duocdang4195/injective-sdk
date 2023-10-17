"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DenomAuthorityMetadata = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseDenomAuthorityMetadata() {
    return { admin: "" };
}
exports.DenomAuthorityMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomAuthorityMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
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
        return { admin: isSet(object.admin) ? String(object.admin) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        return obj;
    },
    create(base) {
        return exports.DenomAuthorityMetadata.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDenomAuthorityMetadata();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
