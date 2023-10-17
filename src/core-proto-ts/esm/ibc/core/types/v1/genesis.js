/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis";
import { GenesisState as GenesisState1 } from "../../client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis";
function createBaseGenesisState() {
    return { clientGenesis: undefined, connectionGenesis: undefined, channelGenesis: undefined };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientGenesis !== undefined) {
            GenesisState1.encode(message.clientGenesis, writer.uint32(10).fork()).ldelim();
        }
        if (message.connectionGenesis !== undefined) {
            GenesisState2.encode(message.connectionGenesis, writer.uint32(18).fork()).ldelim();
        }
        if (message.channelGenesis !== undefined) {
            GenesisState3.encode(message.channelGenesis, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientGenesis = GenesisState1.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.connectionGenesis = GenesisState2.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.channelGenesis = GenesisState3.decode(reader, reader.uint32());
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
            clientGenesis: isSet(object.clientGenesis) ? GenesisState1.fromJSON(object.clientGenesis) : undefined,
            connectionGenesis: isSet(object.connectionGenesis) ? GenesisState2.fromJSON(object.connectionGenesis) : undefined,
            channelGenesis: isSet(object.channelGenesis) ? GenesisState3.fromJSON(object.channelGenesis) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientGenesis !== undefined &&
            (obj.clientGenesis = message.clientGenesis ? GenesisState1.toJSON(message.clientGenesis) : undefined);
        message.connectionGenesis !== undefined &&
            (obj.connectionGenesis = message.connectionGenesis ? GenesisState2.toJSON(message.connectionGenesis) : undefined);
        message.channelGenesis !== undefined &&
            (obj.channelGenesis = message.channelGenesis ? GenesisState3.toJSON(message.channelGenesis) : undefined);
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.clientGenesis = (object.clientGenesis !== undefined && object.clientGenesis !== null)
            ? GenesisState1.fromPartial(object.clientGenesis)
            : undefined;
        message.connectionGenesis = (object.connectionGenesis !== undefined && object.connectionGenesis !== null)
            ? GenesisState2.fromPartial(object.connectionGenesis)
            : undefined;
        message.channelGenesis = (object.channelGenesis !== undefined && object.channelGenesis !== null)
            ? GenesisState3.fromPartial(object.channelGenesis)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
