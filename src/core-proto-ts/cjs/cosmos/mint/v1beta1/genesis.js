"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const mint_1 = require("./mint");
function createBaseGenesisState() {
    return { minter: undefined, params: undefined };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.minter !== undefined) {
            mint_1.Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            mint_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.minter = mint_1.Minter.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.params = mint_1.Params.decode(reader, reader.uint32());
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
            minter: isSet(object.minter) ? mint_1.Minter.fromJSON(object.minter) : undefined,
            params: isSet(object.params) ? mint_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.minter !== undefined && (obj.minter = message.minter ? mint_1.Minter.toJSON(message.minter) : undefined);
        message.params !== undefined && (obj.params = message.params ? mint_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.minter = (object.minter !== undefined && object.minter !== null)
            ? mint_1.Minter.fromPartial(object.minter)
            : undefined;
        message.params = (object.params !== undefined && object.params !== null)
            ? mint_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
