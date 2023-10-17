"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterchainAccount = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const auth_1 = require("../../../../cosmos/auth/v1beta1/auth");
function createBaseInterchainAccount() {
    return { baseAccount: undefined, accountOwner: "" };
}
exports.InterchainAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.baseAccount !== undefined) {
            auth_1.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.accountOwner !== "") {
            writer.uint32(18).string(message.accountOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterchainAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.baseAccount = auth_1.BaseAccount.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.accountOwner = reader.string();
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
            baseAccount: isSet(object.baseAccount) ? auth_1.BaseAccount.fromJSON(object.baseAccount) : undefined,
            accountOwner: isSet(object.accountOwner) ? String(object.accountOwner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseAccount !== undefined &&
            (obj.baseAccount = message.baseAccount ? auth_1.BaseAccount.toJSON(message.baseAccount) : undefined);
        message.accountOwner !== undefined && (obj.accountOwner = message.accountOwner);
        return obj;
    },
    create(base) {
        return exports.InterchainAccount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseInterchainAccount();
        message.baseAccount = (object.baseAccount !== undefined && object.baseAccount !== null)
            ? auth_1.BaseAccount.fromPartial(object.baseAccount)
            : undefined;
        message.accountOwner = (_a = object.accountOwner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
