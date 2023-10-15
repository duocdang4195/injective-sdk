/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ConnectionPaths, IdentifiedConnection, Params } from "./connection";
function createBaseGenesisState() {
    return { connections: [], clientConnectionPaths: [], nextConnectionSequence: "0", params: undefined };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.connections) {
            IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.clientConnectionPaths) {
            ConnectionPaths.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextConnectionSequence !== "0") {
            writer.uint32(24).uint64(message.nextConnectionSequence);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
                    message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.clientConnectionPaths.push(ConnectionPaths.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.nextConnectionSequence = longToString(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.params = Params.decode(reader, reader.uint32());
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
            connections: Array.isArray(object === null || object === void 0 ? void 0 : object.connections)
                ? object.connections.map((e) => IdentifiedConnection.fromJSON(e))
                : [],
            clientConnectionPaths: Array.isArray(object === null || object === void 0 ? void 0 : object.clientConnectionPaths)
                ? object.clientConnectionPaths.map((e) => ConnectionPaths.fromJSON(e))
                : [],
            nextConnectionSequence: isSet(object.nextConnectionSequence) ? String(object.nextConnectionSequence) : "0",
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map((e) => e ? IdentifiedConnection.toJSON(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        if (message.clientConnectionPaths) {
            obj.clientConnectionPaths = message.clientConnectionPaths.map((e) => e ? ConnectionPaths.toJSON(e) : undefined);
        }
        else {
            obj.clientConnectionPaths = [];
        }
        message.nextConnectionSequence !== undefined && (obj.nextConnectionSequence = message.nextConnectionSequence);
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGenesisState();
        message.connections = ((_a = object.connections) === null || _a === void 0 ? void 0 : _a.map((e) => IdentifiedConnection.fromPartial(e))) || [];
        message.clientConnectionPaths = ((_b = object.clientConnectionPaths) === null || _b === void 0 ? void 0 : _b.map((e) => ConnectionPaths.fromPartial(e))) || [];
        message.nextConnectionSequence = (_c = object.nextConnectionSequence) !== null && _c !== void 0 ? _c : "0";
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function longToString(long) {
    return long.toString();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
