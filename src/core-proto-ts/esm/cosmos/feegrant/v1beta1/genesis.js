/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Grant } from "./feegrant";
function createBaseGenesisState() {
    return { allowances: [] };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.allowances) {
            Grant.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.allowances.push(Grant.decode(reader, reader.uint32()));
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
            allowances: Array.isArray(object === null || object === void 0 ? void 0 : object.allowances) ? object.allowances.map((e) => Grant.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map((e) => e ? Grant.toJSON(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.allowances = ((_a = object.allowances) === null || _a === void 0 ? void 0 : _a.map((e) => Grant.fromPartial(e))) || [];
        return message;
    },
};
