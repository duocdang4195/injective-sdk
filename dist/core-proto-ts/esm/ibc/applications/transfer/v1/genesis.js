/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { DenomTrace, Params } from "./transfer";
function createBaseGenesisState() {
    return { portId: "", denomTraces: [], params: undefined, totalEscrowed: [] };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        for (const v of message.denomTraces) {
            DenomTrace.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.totalEscrowed) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.portId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.denomTraces.push(DenomTrace.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.params = Params.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.totalEscrowed.push(Coin.decode(reader, reader.uint32()));
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            denomTraces: Array.isArray(object === null || object === void 0 ? void 0 : object.denomTraces) ? object.denomTraces.map((e) => DenomTrace.fromJSON(e)) : [],
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            totalEscrowed: Array.isArray(object === null || object === void 0 ? void 0 : object.totalEscrowed) ? object.totalEscrowed.map((e) => Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        if (message.denomTraces) {
            obj.denomTraces = message.denomTraces.map((e) => e ? DenomTrace.toJSON(e) : undefined);
        }
        else {
            obj.denomTraces = [];
        }
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.totalEscrowed) {
            obj.totalEscrowed = message.totalEscrowed.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.totalEscrowed = [];
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGenesisState();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.denomTraces = ((_b = object.denomTraces) === null || _b === void 0 ? void 0 : _b.map((e) => DenomTrace.fromPartial(e))) || [];
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        message.totalEscrowed = ((_c = object.totalEscrowed) === null || _c === void 0 ? void 0 : _c.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
