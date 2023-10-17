"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.RegisteredContractWithAddress = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wasmx_1 = require("./wasmx");
function createBaseRegisteredContractWithAddress() {
    return { address: "", registeredContract: undefined };
}
exports.RegisteredContractWithAddress = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.registeredContract !== undefined) {
            wasmx_1.RegisteredContract.encode(message.registeredContract, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisteredContractWithAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.registeredContract = wasmx_1.RegisteredContract.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? String(object.address) : "",
            registeredContract: isSet(object.registeredContract)
                ? wasmx_1.RegisteredContract.fromJSON(object.registeredContract)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.registeredContract !== undefined && (obj.registeredContract = message.registeredContract
            ? wasmx_1.RegisteredContract.toJSON(message.registeredContract)
            : undefined);
        return obj;
    },
    create(base) {
        return exports.RegisteredContractWithAddress.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRegisteredContractWithAddress();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.registeredContract = (object.registeredContract !== undefined && object.registeredContract !== null)
            ? wasmx_1.RegisteredContract.fromPartial(object.registeredContract)
            : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return { params: undefined, registeredContracts: [] };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            wasmx_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.registeredContracts) {
            exports.RegisteredContractWithAddress.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = wasmx_1.Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.registeredContracts.push(exports.RegisteredContractWithAddress.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? wasmx_1.Params.fromJSON(object.params) : undefined,
            registeredContracts: Array.isArray(object === null || object === void 0 ? void 0 : object.registeredContracts)
                ? object.registeredContracts.map((e) => exports.RegisteredContractWithAddress.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? wasmx_1.Params.toJSON(message.params) : undefined);
        if (message.registeredContracts) {
            obj.registeredContracts = message.registeredContracts.map((e) => e ? exports.RegisteredContractWithAddress.toJSON(e) : undefined);
        }
        else {
            obj.registeredContracts = [];
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
            ? wasmx_1.Params.fromPartial(object.params)
            : undefined;
        message.registeredContracts =
            ((_a = object.registeredContracts) === null || _a === void 0 ? void 0 : _a.map((e) => exports.RegisteredContractWithAddress.fromPartial(e))) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
