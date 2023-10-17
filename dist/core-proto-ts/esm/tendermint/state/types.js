/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import { ResponseBeginBlock, ResponseDeliverTx, ResponseEndBlock } from "../abci/types";
import { ConsensusParams } from "../types/params";
import { BlockID } from "../types/types";
import { ValidatorSet } from "../types/validator";
import { Consensus } from "../version/types";
function createBaseABCIResponses() {
    return { deliverTxs: [], endBlock: undefined, beginBlock: undefined };
}
export const ABCIResponses = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.deliverTxs) {
            ResponseDeliverTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.endBlock !== undefined) {
            ResponseEndBlock.encode(message.endBlock, writer.uint32(18).fork()).ldelim();
        }
        if (message.beginBlock !== undefined) {
            ResponseBeginBlock.encode(message.beginBlock, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIResponses();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.deliverTxs.push(ResponseDeliverTx.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.endBlock = ResponseEndBlock.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.beginBlock = ResponseBeginBlock.decode(reader, reader.uint32());
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
            deliverTxs: Array.isArray(object === null || object === void 0 ? void 0 : object.deliverTxs)
                ? object.deliverTxs.map((e) => ResponseDeliverTx.fromJSON(e))
                : [],
            endBlock: isSet(object.endBlock) ? ResponseEndBlock.fromJSON(object.endBlock) : undefined,
            beginBlock: isSet(object.beginBlock) ? ResponseBeginBlock.fromJSON(object.beginBlock) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deliverTxs) {
            obj.deliverTxs = message.deliverTxs.map((e) => e ? ResponseDeliverTx.toJSON(e) : undefined);
        }
        else {
            obj.deliverTxs = [];
        }
        message.endBlock !== undefined &&
            (obj.endBlock = message.endBlock ? ResponseEndBlock.toJSON(message.endBlock) : undefined);
        message.beginBlock !== undefined &&
            (obj.beginBlock = message.beginBlock ? ResponseBeginBlock.toJSON(message.beginBlock) : undefined);
        return obj;
    },
    create(base) {
        return ABCIResponses.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseABCIResponses();
        message.deliverTxs = ((_a = object.deliverTxs) === null || _a === void 0 ? void 0 : _a.map((e) => ResponseDeliverTx.fromPartial(e))) || [];
        message.endBlock = (object.endBlock !== undefined && object.endBlock !== null)
            ? ResponseEndBlock.fromPartial(object.endBlock)
            : undefined;
        message.beginBlock = (object.beginBlock !== undefined && object.beginBlock !== null)
            ? ResponseBeginBlock.fromPartial(object.beginBlock)
            : undefined;
        return message;
    },
};
function createBaseValidatorsInfo() {
    return { validatorSet: undefined, lastHeightChanged: "0" };
}
export const ValidatorsInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorSet !== undefined) {
            ValidatorSet.encode(message.validatorSet, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastHeightChanged !== "0") {
            writer.uint32(16).int64(message.lastHeightChanged);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorsInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.lastHeightChanged = longToString(reader.int64());
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
            validatorSet: isSet(object.validatorSet) ? ValidatorSet.fromJSON(object.validatorSet) : undefined,
            lastHeightChanged: isSet(object.lastHeightChanged) ? String(object.lastHeightChanged) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorSet !== undefined &&
            (obj.validatorSet = message.validatorSet ? ValidatorSet.toJSON(message.validatorSet) : undefined);
        message.lastHeightChanged !== undefined && (obj.lastHeightChanged = message.lastHeightChanged);
        return obj;
    },
    create(base) {
        return ValidatorsInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorsInfo();
        message.validatorSet = (object.validatorSet !== undefined && object.validatorSet !== null)
            ? ValidatorSet.fromPartial(object.validatorSet)
            : undefined;
        message.lastHeightChanged = (_a = object.lastHeightChanged) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseConsensusParamsInfo() {
    return { consensusParams: undefined, lastHeightChanged: "0" };
}
export const ConsensusParamsInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.consensusParams !== undefined) {
            ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastHeightChanged !== "0") {
            writer.uint32(16).int64(message.lastHeightChanged);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusParamsInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.lastHeightChanged = longToString(reader.int64());
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
            consensusParams: isSet(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : undefined,
            lastHeightChanged: isSet(object.lastHeightChanged) ? String(object.lastHeightChanged) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensusParams !== undefined &&
            (obj.consensusParams = message.consensusParams ? ConsensusParams.toJSON(message.consensusParams) : undefined);
        message.lastHeightChanged !== undefined && (obj.lastHeightChanged = message.lastHeightChanged);
        return obj;
    },
    create(base) {
        return ConsensusParamsInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseConsensusParamsInfo();
        message.consensusParams = (object.consensusParams !== undefined && object.consensusParams !== null)
            ? ConsensusParams.fromPartial(object.consensusParams)
            : undefined;
        message.lastHeightChanged = (_a = object.lastHeightChanged) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseABCIResponsesInfo() {
    return { abciResponses: undefined, height: "0" };
}
export const ABCIResponsesInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.abciResponses !== undefined) {
            ABCIResponses.encode(message.abciResponses, writer.uint32(10).fork()).ldelim();
        }
        if (message.height !== "0") {
            writer.uint32(16).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIResponsesInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.abciResponses = ABCIResponses.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.height = longToString(reader.int64());
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
            abciResponses: isSet(object.abciResponses) ? ABCIResponses.fromJSON(object.abciResponses) : undefined,
            height: isSet(object.height) ? String(object.height) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.abciResponses !== undefined &&
            (obj.abciResponses = message.abciResponses ? ABCIResponses.toJSON(message.abciResponses) : undefined);
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    create(base) {
        return ABCIResponsesInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseABCIResponsesInfo();
        message.abciResponses = (object.abciResponses !== undefined && object.abciResponses !== null)
            ? ABCIResponses.fromPartial(object.abciResponses)
            : undefined;
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseVersion() {
    return { consensus: undefined, software: "" };
}
export const Version = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.consensus !== undefined) {
            Consensus.encode(message.consensus, writer.uint32(10).fork()).ldelim();
        }
        if (message.software !== "") {
            writer.uint32(18).string(message.software);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.consensus = Consensus.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.software = reader.string();
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
            consensus: isSet(object.consensus) ? Consensus.fromJSON(object.consensus) : undefined,
            software: isSet(object.software) ? String(object.software) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus !== undefined &&
            (obj.consensus = message.consensus ? Consensus.toJSON(message.consensus) : undefined);
        message.software !== undefined && (obj.software = message.software);
        return obj;
    },
    create(base) {
        return Version.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseVersion();
        message.consensus = (object.consensus !== undefined && object.consensus !== null)
            ? Consensus.fromPartial(object.consensus)
            : undefined;
        message.software = (_a = object.software) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseState() {
    return {
        version: undefined,
        chainId: "",
        initialHeight: "0",
        lastBlockHeight: "0",
        lastBlockId: undefined,
        lastBlockTime: undefined,
        nextValidators: undefined,
        validators: undefined,
        lastValidators: undefined,
        lastHeightValidatorsChanged: "0",
        consensusParams: undefined,
        lastHeightConsensusParamsChanged: "0",
        lastResultsHash: new Uint8Array(),
        appHash: new Uint8Array(),
    };
}
export const State = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.version !== undefined) {
            Version.encode(message.version, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (message.initialHeight !== "0") {
            writer.uint32(112).int64(message.initialHeight);
        }
        if (message.lastBlockHeight !== "0") {
            writer.uint32(24).int64(message.lastBlockHeight);
        }
        if (message.lastBlockId !== undefined) {
            BlockID.encode(message.lastBlockId, writer.uint32(34).fork()).ldelim();
        }
        if (message.lastBlockTime !== undefined) {
            Timestamp.encode(toTimestamp(message.lastBlockTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.nextValidators !== undefined) {
            ValidatorSet.encode(message.nextValidators, writer.uint32(50).fork()).ldelim();
        }
        if (message.validators !== undefined) {
            ValidatorSet.encode(message.validators, writer.uint32(58).fork()).ldelim();
        }
        if (message.lastValidators !== undefined) {
            ValidatorSet.encode(message.lastValidators, writer.uint32(66).fork()).ldelim();
        }
        if (message.lastHeightValidatorsChanged !== "0") {
            writer.uint32(72).int64(message.lastHeightValidatorsChanged);
        }
        if (message.consensusParams !== undefined) {
            ConsensusParams.encode(message.consensusParams, writer.uint32(82).fork()).ldelim();
        }
        if (message.lastHeightConsensusParamsChanged !== "0") {
            writer.uint32(88).int64(message.lastHeightConsensusParamsChanged);
        }
        if (message.lastResultsHash.length !== 0) {
            writer.uint32(98).bytes(message.lastResultsHash);
        }
        if (message.appHash.length !== 0) {
            writer.uint32(106).bytes(message.appHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.version = Version.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.chainId = reader.string();
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }
                    message.initialHeight = longToString(reader.int64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.lastBlockHeight = longToString(reader.int64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.lastBlockId = BlockID.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.lastBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.nextValidators = ValidatorSet.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.validators = ValidatorSet.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.lastValidators = ValidatorSet.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.lastHeightValidatorsChanged = longToString(reader.int64());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.lastHeightConsensusParamsChanged = longToString(reader.int64());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.lastResultsHash = reader.bytes();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.appHash = reader.bytes();
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
            version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            initialHeight: isSet(object.initialHeight) ? String(object.initialHeight) : "0",
            lastBlockHeight: isSet(object.lastBlockHeight) ? String(object.lastBlockHeight) : "0",
            lastBlockId: isSet(object.lastBlockId) ? BlockID.fromJSON(object.lastBlockId) : undefined,
            lastBlockTime: isSet(object.lastBlockTime) ? fromJsonTimestamp(object.lastBlockTime) : undefined,
            nextValidators: isSet(object.nextValidators) ? ValidatorSet.fromJSON(object.nextValidators) : undefined,
            validators: isSet(object.validators) ? ValidatorSet.fromJSON(object.validators) : undefined,
            lastValidators: isSet(object.lastValidators) ? ValidatorSet.fromJSON(object.lastValidators) : undefined,
            lastHeightValidatorsChanged: isSet(object.lastHeightValidatorsChanged)
                ? String(object.lastHeightValidatorsChanged)
                : "0",
            consensusParams: isSet(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : undefined,
            lastHeightConsensusParamsChanged: isSet(object.lastHeightConsensusParamsChanged)
                ? String(object.lastHeightConsensusParamsChanged)
                : "0",
            lastResultsHash: isSet(object.lastResultsHash) ? bytesFromBase64(object.lastResultsHash) : new Uint8Array(),
            appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version ? Version.toJSON(message.version) : undefined);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.initialHeight !== undefined && (obj.initialHeight = message.initialHeight);
        message.lastBlockHeight !== undefined && (obj.lastBlockHeight = message.lastBlockHeight);
        message.lastBlockId !== undefined &&
            (obj.lastBlockId = message.lastBlockId ? BlockID.toJSON(message.lastBlockId) : undefined);
        message.lastBlockTime !== undefined && (obj.lastBlockTime = message.lastBlockTime.toISOString());
        message.nextValidators !== undefined &&
            (obj.nextValidators = message.nextValidators ? ValidatorSet.toJSON(message.nextValidators) : undefined);
        message.validators !== undefined &&
            (obj.validators = message.validators ? ValidatorSet.toJSON(message.validators) : undefined);
        message.lastValidators !== undefined &&
            (obj.lastValidators = message.lastValidators ? ValidatorSet.toJSON(message.lastValidators) : undefined);
        message.lastHeightValidatorsChanged !== undefined &&
            (obj.lastHeightValidatorsChanged = message.lastHeightValidatorsChanged);
        message.consensusParams !== undefined &&
            (obj.consensusParams = message.consensusParams ? ConsensusParams.toJSON(message.consensusParams) : undefined);
        message.lastHeightConsensusParamsChanged !== undefined &&
            (obj.lastHeightConsensusParamsChanged = message.lastHeightConsensusParamsChanged);
        message.lastResultsHash !== undefined &&
            (obj.lastResultsHash = base64FromBytes(message.lastResultsHash !== undefined ? message.lastResultsHash : new Uint8Array()));
        message.appHash !== undefined &&
            (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
        return obj;
    },
    create(base) {
        return State.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseState();
        message.version = (object.version !== undefined && object.version !== null)
            ? Version.fromPartial(object.version)
            : undefined;
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        message.initialHeight = (_b = object.initialHeight) !== null && _b !== void 0 ? _b : "0";
        message.lastBlockHeight = (_c = object.lastBlockHeight) !== null && _c !== void 0 ? _c : "0";
        message.lastBlockId = (object.lastBlockId !== undefined && object.lastBlockId !== null)
            ? BlockID.fromPartial(object.lastBlockId)
            : undefined;
        message.lastBlockTime = (_d = object.lastBlockTime) !== null && _d !== void 0 ? _d : undefined;
        message.nextValidators = (object.nextValidators !== undefined && object.nextValidators !== null)
            ? ValidatorSet.fromPartial(object.nextValidators)
            : undefined;
        message.validators = (object.validators !== undefined && object.validators !== null)
            ? ValidatorSet.fromPartial(object.validators)
            : undefined;
        message.lastValidators = (object.lastValidators !== undefined && object.lastValidators !== null)
            ? ValidatorSet.fromPartial(object.lastValidators)
            : undefined;
        message.lastHeightValidatorsChanged = (_e = object.lastHeightValidatorsChanged) !== null && _e !== void 0 ? _e : "0";
        message.consensusParams = (object.consensusParams !== undefined && object.consensusParams !== null)
            ? ConsensusParams.fromPartial(object.consensusParams)
            : undefined;
        message.lastHeightConsensusParamsChanged = (_f = object.lastHeightConsensusParamsChanged) !== null && _f !== void 0 ? _f : "0";
        message.lastResultsHash = (_g = object.lastResultsHash) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.appHash = (_h = object.appHash) !== null && _h !== void 0 ? _h : new Uint8Array();
        return message;
    },
};
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1000).toString();
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (Number(t.seconds) || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
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
