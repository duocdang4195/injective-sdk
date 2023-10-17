/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params, RegisteredContract } from "./wasmx";
function createBaseRegisteredContractWithAddress() {
    return { address: "", registeredContract: undefined };
}
export const RegisteredContractWithAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.registeredContract !== undefined) {
            RegisteredContract.encode(message.registeredContract, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.registeredContract = RegisteredContract.decode(reader, reader.uint32());
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
                ? RegisteredContract.fromJSON(object.registeredContract)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.registeredContract !== undefined && (obj.registeredContract = message.registeredContract
            ? RegisteredContract.toJSON(message.registeredContract)
            : undefined);
        return obj;
    },
    create(base) {
        return RegisteredContractWithAddress.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRegisteredContractWithAddress();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.registeredContract = (object.registeredContract !== undefined && object.registeredContract !== null)
            ? RegisteredContract.fromPartial(object.registeredContract)
            : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return { params: undefined, registeredContracts: [] };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.registeredContracts) {
            RegisteredContractWithAddress.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.registeredContracts.push(RegisteredContractWithAddress.decode(reader, reader.uint32()));
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
            registeredContracts: Array.isArray(object === null || object === void 0 ? void 0 : object.registeredContracts)
                ? object.registeredContracts.map((e) => RegisteredContractWithAddress.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.registeredContracts) {
            obj.registeredContracts = message.registeredContracts.map((e) => e ? RegisteredContractWithAddress.toJSON(e) : undefined);
        }
        else {
            obj.registeredContracts = [];
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
        message.registeredContracts =
            ((_a = object.registeredContracts) === null || _a === void 0 ? void 0 : _a.map((e) => RegisteredContractWithAddress.fromPartial(e))) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
