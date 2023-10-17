/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params, ValidatorSigningInfo } from "./slashing";
function createBaseGenesisState() {
    return { params: undefined, signingInfos: [], missedBlocks: [] };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signingInfos) {
            SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.missedBlocks) {
            ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.signingInfos.push(SigningInfo.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.missedBlocks.push(ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
            signingInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.signingInfos)
                ? object.signingInfos.map((e) => SigningInfo.fromJSON(e))
                : [],
            missedBlocks: Array.isArray(object === null || object === void 0 ? void 0 : object.missedBlocks)
                ? object.missedBlocks.map((e) => ValidatorMissedBlocks.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.signingInfos) {
            obj.signingInfos = message.signingInfos.map((e) => e ? SigningInfo.toJSON(e) : undefined);
        }
        else {
            obj.signingInfos = [];
        }
        if (message.missedBlocks) {
            obj.missedBlocks = message.missedBlocks.map((e) => e ? ValidatorMissedBlocks.toJSON(e) : undefined);
        }
        else {
            obj.missedBlocks = [];
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        message.signingInfos = ((_a = object.signingInfos) === null || _a === void 0 ? void 0 : _a.map((e) => SigningInfo.fromPartial(e))) || [];
        message.missedBlocks = ((_b = object.missedBlocks) === null || _b === void 0 ? void 0 : _b.map((e) => ValidatorMissedBlocks.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSigningInfo() {
    return { address: "", validatorSigningInfo: undefined };
}
export const SigningInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.validatorSigningInfo !== undefined) {
            ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningInfo();
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
                    message.validatorSigningInfo = ValidatorSigningInfo.decode(reader, reader.uint32());
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
            validatorSigningInfo: isSet(object.validatorSigningInfo)
                ? ValidatorSigningInfo.fromJSON(object.validatorSigningInfo)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.validatorSigningInfo !== undefined && (obj.validatorSigningInfo = message.validatorSigningInfo
            ? ValidatorSigningInfo.toJSON(message.validatorSigningInfo)
            : undefined);
        return obj;
    },
    create(base) {
        return SigningInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSigningInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.validatorSigningInfo = (object.validatorSigningInfo !== undefined && object.validatorSigningInfo !== null)
            ? ValidatorSigningInfo.fromPartial(object.validatorSigningInfo)
            : undefined;
        return message;
    },
};
function createBaseValidatorMissedBlocks() {
    return { address: "", missedBlocks: [] };
}
export const ValidatorMissedBlocks = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.missedBlocks) {
            MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorMissedBlocks();
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
                    message.missedBlocks.push(MissedBlock.decode(reader, reader.uint32()));
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
            missedBlocks: Array.isArray(object === null || object === void 0 ? void 0 : object.missedBlocks)
                ? object.missedBlocks.map((e) => MissedBlock.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.missedBlocks) {
            obj.missedBlocks = message.missedBlocks.map((e) => e ? MissedBlock.toJSON(e) : undefined);
        }
        else {
            obj.missedBlocks = [];
        }
        return obj;
    },
    create(base) {
        return ValidatorMissedBlocks.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseValidatorMissedBlocks();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.missedBlocks = ((_b = object.missedBlocks) === null || _b === void 0 ? void 0 : _b.map((e) => MissedBlock.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMissedBlock() {
    return { index: "0", missed: false };
}
export const MissedBlock = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.index !== "0") {
            writer.uint32(8).int64(message.index);
        }
        if (message.missed === true) {
            writer.uint32(16).bool(message.missed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissedBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.index = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.missed = reader.bool();
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
            index: isSet(object.index) ? String(object.index) : "0",
            missed: isSet(object.missed) ? Boolean(object.missed) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.missed !== undefined && (obj.missed = message.missed);
        return obj;
    },
    create(base) {
        return MissedBlock.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMissedBlock();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.missed = (_b = object.missed) !== null && _b !== void 0 ? _b : false;
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
