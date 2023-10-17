"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisDenom = exports.GenesisState = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const authorityMetadata_1 = require("./authorityMetadata");
const params_1 = require("./params");
function createBaseGenesisState() {
    return { params: undefined, factoryDenoms: [] };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.factoryDenoms) {
            exports.GenesisDenom.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.factoryDenoms.push(exports.GenesisDenom.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            factoryDenoms: Array.isArray(object === null || object === void 0 ? void 0 : object.factoryDenoms)
                ? object.factoryDenoms.map((e) => exports.GenesisDenom.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.factoryDenoms) {
            obj.factoryDenoms = message.factoryDenoms.map((e) => e ? exports.GenesisDenom.toJSON(e) : undefined);
        }
        else {
            obj.factoryDenoms = [];
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.Params.fromPartial(object.params)
            : undefined;
        message.factoryDenoms = ((_a = object.factoryDenoms) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GenesisDenom.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGenesisDenom() {
    return { denom: "", authorityMetadata: undefined };
}
exports.GenesisDenom = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.authorityMetadata !== undefined) {
            authorityMetadata_1.DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.authorityMetadata = authorityMetadata_1.DenomAuthorityMetadata.decode(reader, reader.uint32());
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
                ? authorityMetadata_1.DenomAuthorityMetadata.fromJSON(object.authorityMetadata)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.authorityMetadata !== undefined && (obj.authorityMetadata = message.authorityMetadata
            ? authorityMetadata_1.DenomAuthorityMetadata.toJSON(message.authorityMetadata)
            : undefined);
        return obj;
    },
    create(base) {
        return exports.GenesisDenom.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisDenom();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.authorityMetadata = (object.authorityMetadata !== undefined && object.authorityMetadata !== null)
            ? authorityMetadata_1.DenomAuthorityMetadata.fromPartial(object.authorityMetadata)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
