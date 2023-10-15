"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fraction = exports.Header = exports.Misbehaviour = exports.ConsensusState = exports.ClientState = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const proofs_1 = require("../../../../cosmos/ics23/v1/proofs");
const duration_1 = require("../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const types_1 = require("../../../../tendermint/types/types");
const validator_1 = require("../../../../tendermint/types/validator");
const client_1 = require("../../../core/client/v1/client");
const commitment_1 = require("../../../core/commitment/v1/commitment");
function createBaseClientState() {
    return {
        chainId: "",
        trustLevel: undefined,
        trustingPeriod: undefined,
        unbondingPeriod: undefined,
        maxClockDrift: undefined,
        frozenHeight: undefined,
        latestHeight: undefined,
        proofSpecs: [],
        upgradePath: [],
        allowUpdateAfterExpiry: false,
        allowUpdateAfterMisbehaviour: false,
    };
}
exports.ClientState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.trustLevel !== undefined) {
            exports.Fraction.encode(message.trustLevel, writer.uint32(18).fork()).ldelim();
        }
        if (message.trustingPeriod !== undefined) {
            duration_1.Duration.encode(message.trustingPeriod, writer.uint32(26).fork()).ldelim();
        }
        if (message.unbondingPeriod !== undefined) {
            duration_1.Duration.encode(message.unbondingPeriod, writer.uint32(34).fork()).ldelim();
        }
        if (message.maxClockDrift !== undefined) {
            duration_1.Duration.encode(message.maxClockDrift, writer.uint32(42).fork()).ldelim();
        }
        if (message.frozenHeight !== undefined) {
            client_1.Height.encode(message.frozenHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.latestHeight !== undefined) {
            client_1.Height.encode(message.latestHeight, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.proofSpecs) {
            proofs_1.ProofSpec.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.upgradePath) {
            writer.uint32(74).string(v);
        }
        if (message.allowUpdateAfterExpiry === true) {
            writer.uint32(80).bool(message.allowUpdateAfterExpiry);
        }
        if (message.allowUpdateAfterMisbehaviour === true) {
            writer.uint32(88).bool(message.allowUpdateAfterMisbehaviour);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.chainId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.trustLevel = exports.Fraction.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.trustingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.unbondingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.maxClockDrift = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.frozenHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.latestHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.proofSpecs.push(proofs_1.ProofSpec.decode(reader, reader.uint32()));
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.upgradePath.push(reader.string());
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.allowUpdateAfterExpiry = reader.bool();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.allowUpdateAfterMisbehaviour = reader.bool();
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            trustLevel: isSet(object.trustLevel) ? exports.Fraction.fromJSON(object.trustLevel) : undefined,
            trustingPeriod: isSet(object.trustingPeriod) ? duration_1.Duration.fromJSON(object.trustingPeriod) : undefined,
            unbondingPeriod: isSet(object.unbondingPeriod) ? duration_1.Duration.fromJSON(object.unbondingPeriod) : undefined,
            maxClockDrift: isSet(object.maxClockDrift) ? duration_1.Duration.fromJSON(object.maxClockDrift) : undefined,
            frozenHeight: isSet(object.frozenHeight) ? client_1.Height.fromJSON(object.frozenHeight) : undefined,
            latestHeight: isSet(object.latestHeight) ? client_1.Height.fromJSON(object.latestHeight) : undefined,
            proofSpecs: Array.isArray(object === null || object === void 0 ? void 0 : object.proofSpecs) ? object.proofSpecs.map((e) => proofs_1.ProofSpec.fromJSON(e)) : [],
            upgradePath: Array.isArray(object === null || object === void 0 ? void 0 : object.upgradePath) ? object.upgradePath.map((e) => String(e)) : [],
            allowUpdateAfterExpiry: isSet(object.allowUpdateAfterExpiry) ? Boolean(object.allowUpdateAfterExpiry) : false,
            allowUpdateAfterMisbehaviour: isSet(object.allowUpdateAfterMisbehaviour)
                ? Boolean(object.allowUpdateAfterMisbehaviour)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.trustLevel !== undefined &&
            (obj.trustLevel = message.trustLevel ? exports.Fraction.toJSON(message.trustLevel) : undefined);
        message.trustingPeriod !== undefined &&
            (obj.trustingPeriod = message.trustingPeriod ? duration_1.Duration.toJSON(message.trustingPeriod) : undefined);
        message.unbondingPeriod !== undefined &&
            (obj.unbondingPeriod = message.unbondingPeriod ? duration_1.Duration.toJSON(message.unbondingPeriod) : undefined);
        message.maxClockDrift !== undefined &&
            (obj.maxClockDrift = message.maxClockDrift ? duration_1.Duration.toJSON(message.maxClockDrift) : undefined);
        message.frozenHeight !== undefined &&
            (obj.frozenHeight = message.frozenHeight ? client_1.Height.toJSON(message.frozenHeight) : undefined);
        message.latestHeight !== undefined &&
            (obj.latestHeight = message.latestHeight ? client_1.Height.toJSON(message.latestHeight) : undefined);
        if (message.proofSpecs) {
            obj.proofSpecs = message.proofSpecs.map((e) => e ? proofs_1.ProofSpec.toJSON(e) : undefined);
        }
        else {
            obj.proofSpecs = [];
        }
        if (message.upgradePath) {
            obj.upgradePath = message.upgradePath.map((e) => e);
        }
        else {
            obj.upgradePath = [];
        }
        message.allowUpdateAfterExpiry !== undefined && (obj.allowUpdateAfterExpiry = message.allowUpdateAfterExpiry);
        message.allowUpdateAfterMisbehaviour !== undefined &&
            (obj.allowUpdateAfterMisbehaviour = message.allowUpdateAfterMisbehaviour);
        return obj;
    },
    create(base) {
        return exports.ClientState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseClientState();
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        message.trustLevel = (object.trustLevel !== undefined && object.trustLevel !== null)
            ? exports.Fraction.fromPartial(object.trustLevel)
            : undefined;
        message.trustingPeriod = (object.trustingPeriod !== undefined && object.trustingPeriod !== null)
            ? duration_1.Duration.fromPartial(object.trustingPeriod)
            : undefined;
        message.unbondingPeriod = (object.unbondingPeriod !== undefined && object.unbondingPeriod !== null)
            ? duration_1.Duration.fromPartial(object.unbondingPeriod)
            : undefined;
        message.maxClockDrift = (object.maxClockDrift !== undefined && object.maxClockDrift !== null)
            ? duration_1.Duration.fromPartial(object.maxClockDrift)
            : undefined;
        message.frozenHeight = (object.frozenHeight !== undefined && object.frozenHeight !== null)
            ? client_1.Height.fromPartial(object.frozenHeight)
            : undefined;
        message.latestHeight = (object.latestHeight !== undefined && object.latestHeight !== null)
            ? client_1.Height.fromPartial(object.latestHeight)
            : undefined;
        message.proofSpecs = ((_b = object.proofSpecs) === null || _b === void 0 ? void 0 : _b.map((e) => proofs_1.ProofSpec.fromPartial(e))) || [];
        message.upgradePath = ((_c = object.upgradePath) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.allowUpdateAfterExpiry = (_d = object.allowUpdateAfterExpiry) !== null && _d !== void 0 ? _d : false;
        message.allowUpdateAfterMisbehaviour = (_e = object.allowUpdateAfterMisbehaviour) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseConsensusState() {
    return { timestamp: undefined, root: undefined, nextValidatorsHash: new Uint8Array() };
}
exports.ConsensusState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        if (message.root !== undefined) {
            commitment_1.MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(26).bytes(message.nextValidatorsHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.root = commitment_1.MerkleRoot.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nextValidatorsHash = reader.bytes();
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
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            root: isSet(object.root) ? commitment_1.MerkleRoot.fromJSON(object.root) : undefined,
            nextValidatorsHash: isSet(object.nextValidatorsHash)
                ? bytesFromBase64(object.nextValidatorsHash)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.root !== undefined && (obj.root = message.root ? commitment_1.MerkleRoot.toJSON(message.root) : undefined);
        message.nextValidatorsHash !== undefined &&
            (obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.ConsensusState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseConsensusState();
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : undefined;
        message.root = (object.root !== undefined && object.root !== null)
            ? commitment_1.MerkleRoot.fromPartial(object.root)
            : undefined;
        message.nextValidatorsHash = (_b = object.nextValidatorsHash) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseMisbehaviour() {
    return { clientId: "", header1: undefined, header2: undefined };
}
exports.Misbehaviour = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.header1 !== undefined) {
            exports.Header.encode(message.header1, writer.uint32(18).fork()).ldelim();
        }
        if (message.header2 !== undefined) {
            exports.Header.encode(message.header2, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMisbehaviour();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.header1 = exports.Header.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.header2 = exports.Header.decode(reader, reader.uint32());
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            header1: isSet(object.header1) ? exports.Header.fromJSON(object.header1) : undefined,
            header2: isSet(object.header2) ? exports.Header.fromJSON(object.header2) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.header1 !== undefined && (obj.header1 = message.header1 ? exports.Header.toJSON(message.header1) : undefined);
        message.header2 !== undefined && (obj.header2 = message.header2 ? exports.Header.toJSON(message.header2) : undefined);
        return obj;
    },
    create(base) {
        return exports.Misbehaviour.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMisbehaviour();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.header1 = (object.header1 !== undefined && object.header1 !== null)
            ? exports.Header.fromPartial(object.header1)
            : undefined;
        message.header2 = (object.header2 !== undefined && object.header2 !== null)
            ? exports.Header.fromPartial(object.header2)
            : undefined;
        return message;
    },
};
function createBaseHeader() {
    return { signedHeader: undefined, validatorSet: undefined, trustedHeight: undefined, trustedValidators: undefined };
}
exports.Header = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signedHeader !== undefined) {
            types_1.SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorSet !== undefined) {
            validator_1.ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
        }
        if (message.trustedHeight !== undefined) {
            client_1.Height.encode(message.trustedHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.trustedValidators !== undefined) {
            validator_1.ValidatorSet.encode(message.trustedValidators, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.signedHeader = types_1.SignedHeader.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.validatorSet = validator_1.ValidatorSet.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.trustedHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.trustedValidators = validator_1.ValidatorSet.decode(reader, reader.uint32());
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
            signedHeader: isSet(object.signedHeader) ? types_1.SignedHeader.fromJSON(object.signedHeader) : undefined,
            validatorSet: isSet(object.validatorSet) ? validator_1.ValidatorSet.fromJSON(object.validatorSet) : undefined,
            trustedHeight: isSet(object.trustedHeight) ? client_1.Height.fromJSON(object.trustedHeight) : undefined,
            trustedValidators: isSet(object.trustedValidators) ? validator_1.ValidatorSet.fromJSON(object.trustedValidators) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.signedHeader !== undefined &&
            (obj.signedHeader = message.signedHeader ? types_1.SignedHeader.toJSON(message.signedHeader) : undefined);
        message.validatorSet !== undefined &&
            (obj.validatorSet = message.validatorSet ? validator_1.ValidatorSet.toJSON(message.validatorSet) : undefined);
        message.trustedHeight !== undefined &&
            (obj.trustedHeight = message.trustedHeight ? client_1.Height.toJSON(message.trustedHeight) : undefined);
        message.trustedValidators !== undefined &&
            (obj.trustedValidators = message.trustedValidators ? validator_1.ValidatorSet.toJSON(message.trustedValidators) : undefined);
        return obj;
    },
    create(base) {
        return exports.Header.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.signedHeader = (object.signedHeader !== undefined && object.signedHeader !== null)
            ? types_1.SignedHeader.fromPartial(object.signedHeader)
            : undefined;
        message.validatorSet = (object.validatorSet !== undefined && object.validatorSet !== null)
            ? validator_1.ValidatorSet.fromPartial(object.validatorSet)
            : undefined;
        message.trustedHeight = (object.trustedHeight !== undefined && object.trustedHeight !== null)
            ? client_1.Height.fromPartial(object.trustedHeight)
            : undefined;
        message.trustedValidators = (object.trustedValidators !== undefined && object.trustedValidators !== null)
            ? validator_1.ValidatorSet.fromPartial(object.trustedValidators)
            : undefined;
        return message;
    },
};
function createBaseFraction() {
    return { numerator: "0", denominator: "0" };
}
exports.Fraction = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.numerator !== "0") {
            writer.uint32(8).uint64(message.numerator);
        }
        if (message.denominator !== "0") {
            writer.uint32(16).uint64(message.denominator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFraction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.numerator = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.denominator = longToString(reader.uint64());
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
            numerator: isSet(object.numerator) ? String(object.numerator) : "0",
            denominator: isSet(object.denominator) ? String(object.denominator) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.numerator !== undefined && (obj.numerator = message.numerator);
        message.denominator !== undefined && (obj.denominator = message.denominator);
        return obj;
    },
    create(base) {
        return exports.Fraction.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFraction();
        message.numerator = (_a = object.numerator) !== null && _a !== void 0 ? _a : "0";
        message.denominator = (_b = object.denominator) !== null && _b !== void 0 ? _b : "0";
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
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function longToString(long) {
    return long.toString();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
