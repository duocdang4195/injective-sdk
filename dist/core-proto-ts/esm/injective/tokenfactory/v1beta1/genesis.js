/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { Params } from "./params";
function createBaseGenesisState() {
    return { params: undefined, factoryDenoms: [] };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.factoryDenoms) {
            GenesisDenom.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.factoryDenoms.push(GenesisDenom.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            factoryDenoms: Array.isArray(object === null || object === void 0 ? void 0 : object.factoryDenoms)
                ? object.factoryDenoms.map((e) => GenesisDenom.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.factoryDenoms) {
            obj.factoryDenoms = message.factoryDenoms.map((e) => e ? GenesisDenom.toJSON(e) : undefined);
        }
        else {
            obj.factoryDenoms = [];
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        message.factoryDenoms = ((_a = object.factoryDenoms) === null || _a === void 0 ? void 0 : _a.map((e) => GenesisDenom.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGenesisDenom() {
    return { denom: "", authorityMetadata: undefined };
}
export const GenesisDenom = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.authorityMetadata !== undefined) {
            DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            authorityMetadata: isSet(object.authorityMetadata)
                ? DenomAuthorityMetadata.fromJSON(object.authorityMetadata)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.authorityMetadata !== undefined && (obj.authorityMetadata = message.authorityMetadata
            ? DenomAuthorityMetadata.toJSON(message.authorityMetadata)
            : undefined);
        return obj;
    },
    create(base) {
        return GenesisDenom.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisDenom();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.authorityMetadata = (object.authorityMetadata !== undefined && object.authorityMetadata !== null)
            ? DenomAuthorityMetadata.fromPartial(object.authorityMetadata)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
