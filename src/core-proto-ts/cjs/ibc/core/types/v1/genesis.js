"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const genesis_1 = require("../../channel/v1/genesis");
const genesis_2 = require("../../client/v1/genesis");
const genesis_3 = require("../../connection/v1/genesis");
function createBaseGenesisState() {
    return { clientGenesis: undefined, connectionGenesis: undefined, channelGenesis: undefined };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientGenesis !== undefined) {
            genesis_2.GenesisState.encode(message.clientGenesis, writer.uint32(10).fork()).ldelim();
        }
        if (message.connectionGenesis !== undefined) {
            genesis_3.GenesisState.encode(message.connectionGenesis, writer.uint32(18).fork()).ldelim();
        }
        if (message.channelGenesis !== undefined) {
            genesis_1.GenesisState.encode(message.channelGenesis, writer.uint32(26).fork()).ldelim();
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
                    message.clientGenesis = genesis_2.GenesisState.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.connectionGenesis = genesis_3.GenesisState.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.channelGenesis = genesis_1.GenesisState.decode(reader, reader.uint32());
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
            clientGenesis: isSet(object.clientGenesis) ? genesis_2.GenesisState.fromJSON(object.clientGenesis) : undefined,
            connectionGenesis: isSet(object.connectionGenesis) ? genesis_3.GenesisState.fromJSON(object.connectionGenesis) : undefined,
            channelGenesis: isSet(object.channelGenesis) ? genesis_1.GenesisState.fromJSON(object.channelGenesis) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientGenesis !== undefined &&
            (obj.clientGenesis = message.clientGenesis ? genesis_2.GenesisState.toJSON(message.clientGenesis) : undefined);
        message.connectionGenesis !== undefined &&
            (obj.connectionGenesis = message.connectionGenesis ? genesis_3.GenesisState.toJSON(message.connectionGenesis) : undefined);
        message.channelGenesis !== undefined &&
            (obj.channelGenesis = message.channelGenesis ? genesis_1.GenesisState.toJSON(message.channelGenesis) : undefined);
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.clientGenesis = (object.clientGenesis !== undefined && object.clientGenesis !== null)
            ? genesis_2.GenesisState.fromPartial(object.clientGenesis)
            : undefined;
        message.connectionGenesis = (object.connectionGenesis !== undefined && object.connectionGenesis !== null)
            ? genesis_3.GenesisState.fromPartial(object.connectionGenesis)
            : undefined;
        message.channelGenesis = (object.channelGenesis !== undefined && object.channelGenesis !== null)
            ? genesis_1.GenesisState.fromPartial(object.channelGenesis)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
