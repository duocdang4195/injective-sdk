"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidenceList = exports.LightClientAttackEvidence = exports.DuplicateVoteEvidence = exports.Evidence = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../google/protobuf/timestamp");
const types_1 = require("./types");
const validator_1 = require("./validator");
function createBaseEvidence() {
    return { duplicateVoteEvidence: undefined, lightClientAttackEvidence: undefined };
}
exports.Evidence = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.duplicateVoteEvidence !== undefined) {
            exports.DuplicateVoteEvidence.encode(message.duplicateVoteEvidence, writer.uint32(10).fork()).ldelim();
        }
        if (message.lightClientAttackEvidence !== undefined) {
            exports.LightClientAttackEvidence.encode(message.lightClientAttackEvidence, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.duplicateVoteEvidence = exports.DuplicateVoteEvidence.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.lightClientAttackEvidence = exports.LightClientAttackEvidence.decode(reader, reader.uint32());
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
            duplicateVoteEvidence: isSet(object.duplicateVoteEvidence)
                ? exports.DuplicateVoteEvidence.fromJSON(object.duplicateVoteEvidence)
                : undefined,
            lightClientAttackEvidence: isSet(object.lightClientAttackEvidence)
                ? exports.LightClientAttackEvidence.fromJSON(object.lightClientAttackEvidence)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.duplicateVoteEvidence !== undefined && (obj.duplicateVoteEvidence = message.duplicateVoteEvidence
            ? exports.DuplicateVoteEvidence.toJSON(message.duplicateVoteEvidence)
            : undefined);
        message.lightClientAttackEvidence !== undefined &&
            (obj.lightClientAttackEvidence = message.lightClientAttackEvidence
                ? exports.LightClientAttackEvidence.toJSON(message.lightClientAttackEvidence)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.Evidence.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseEvidence();
        message.duplicateVoteEvidence =
            (object.duplicateVoteEvidence !== undefined && object.duplicateVoteEvidence !== null)
                ? exports.DuplicateVoteEvidence.fromPartial(object.duplicateVoteEvidence)
                : undefined;
        message.lightClientAttackEvidence =
            (object.lightClientAttackEvidence !== undefined && object.lightClientAttackEvidence !== null)
                ? exports.LightClientAttackEvidence.fromPartial(object.lightClientAttackEvidence)
                : undefined;
        return message;
    },
};
function createBaseDuplicateVoteEvidence() {
    return { voteA: undefined, voteB: undefined, totalVotingPower: "0", validatorPower: "0", timestamp: undefined };
}
exports.DuplicateVoteEvidence = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.voteA !== undefined) {
            types_1.Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
        }
        if (message.voteB !== undefined) {
            types_1.Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalVotingPower !== "0") {
            writer.uint32(24).int64(message.totalVotingPower);
        }
        if (message.validatorPower !== "0") {
            writer.uint32(32).int64(message.validatorPower);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDuplicateVoteEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.voteA = types_1.Vote.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.voteB = types_1.Vote.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.totalVotingPower = longToString(reader.int64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.validatorPower = longToString(reader.int64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            voteA: isSet(object.voteA) ? types_1.Vote.fromJSON(object.voteA) : undefined,
            voteB: isSet(object.voteB) ? types_1.Vote.fromJSON(object.voteB) : undefined,
            totalVotingPower: isSet(object.totalVotingPower) ? String(object.totalVotingPower) : "0",
            validatorPower: isSet(object.validatorPower) ? String(object.validatorPower) : "0",
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.voteA !== undefined && (obj.voteA = message.voteA ? types_1.Vote.toJSON(message.voteA) : undefined);
        message.voteB !== undefined && (obj.voteB = message.voteB ? types_1.Vote.toJSON(message.voteB) : undefined);
        message.totalVotingPower !== undefined && (obj.totalVotingPower = message.totalVotingPower);
        message.validatorPower !== undefined && (obj.validatorPower = message.validatorPower);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    create(base) {
        return exports.DuplicateVoteEvidence.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDuplicateVoteEvidence();
        message.voteA = (object.voteA !== undefined && object.voteA !== null) ? types_1.Vote.fromPartial(object.voteA) : undefined;
        message.voteB = (object.voteB !== undefined && object.voteB !== null) ? types_1.Vote.fromPartial(object.voteB) : undefined;
        message.totalVotingPower = (_a = object.totalVotingPower) !== null && _a !== void 0 ? _a : "0";
        message.validatorPower = (_b = object.validatorPower) !== null && _b !== void 0 ? _b : "0";
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseLightClientAttackEvidence() {
    return {
        conflictingBlock: undefined,
        commonHeight: "0",
        byzantineValidators: [],
        totalVotingPower: "0",
        timestamp: undefined,
    };
}
exports.LightClientAttackEvidence = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.conflictingBlock !== undefined) {
            types_1.LightBlock.encode(message.conflictingBlock, writer.uint32(10).fork()).ldelim();
        }
        if (message.commonHeight !== "0") {
            writer.uint32(16).int64(message.commonHeight);
        }
        for (const v of message.byzantineValidators) {
            validator_1.Validator.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.totalVotingPower !== "0") {
            writer.uint32(32).int64(message.totalVotingPower);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLightClientAttackEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.conflictingBlock = types_1.LightBlock.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.commonHeight = longToString(reader.int64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.byzantineValidators.push(validator_1.Validator.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.totalVotingPower = longToString(reader.int64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            conflictingBlock: isSet(object.conflictingBlock) ? types_1.LightBlock.fromJSON(object.conflictingBlock) : undefined,
            commonHeight: isSet(object.commonHeight) ? String(object.commonHeight) : "0",
            byzantineValidators: Array.isArray(object === null || object === void 0 ? void 0 : object.byzantineValidators)
                ? object.byzantineValidators.map((e) => validator_1.Validator.fromJSON(e))
                : [],
            totalVotingPower: isSet(object.totalVotingPower) ? String(object.totalVotingPower) : "0",
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.conflictingBlock !== undefined &&
            (obj.conflictingBlock = message.conflictingBlock ? types_1.LightBlock.toJSON(message.conflictingBlock) : undefined);
        message.commonHeight !== undefined && (obj.commonHeight = message.commonHeight);
        if (message.byzantineValidators) {
            obj.byzantineValidators = message.byzantineValidators.map((e) => e ? validator_1.Validator.toJSON(e) : undefined);
        }
        else {
            obj.byzantineValidators = [];
        }
        message.totalVotingPower !== undefined && (obj.totalVotingPower = message.totalVotingPower);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    create(base) {
        return exports.LightClientAttackEvidence.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseLightClientAttackEvidence();
        message.conflictingBlock = (object.conflictingBlock !== undefined && object.conflictingBlock !== null)
            ? types_1.LightBlock.fromPartial(object.conflictingBlock)
            : undefined;
        message.commonHeight = (_a = object.commonHeight) !== null && _a !== void 0 ? _a : "0";
        message.byzantineValidators = ((_b = object.byzantineValidators) === null || _b === void 0 ? void 0 : _b.map((e) => validator_1.Validator.fromPartial(e))) || [];
        message.totalVotingPower = (_c = object.totalVotingPower) !== null && _c !== void 0 ? _c : "0";
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseEvidenceList() {
    return { evidence: [] };
}
exports.EvidenceList = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.evidence) {
            exports.Evidence.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidenceList();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.evidence.push(exports.Evidence.decode(reader, reader.uint32()));
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
        return { evidence: Array.isArray(object === null || object === void 0 ? void 0 : object.evidence) ? object.evidence.map((e) => exports.Evidence.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map((e) => e ? exports.Evidence.toJSON(e) : undefined);
        }
        else {
            obj.evidence = [];
        }
        return obj;
    },
    create(base) {
        return exports.EvidenceList.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEvidenceList();
        message.evidence = ((_a = object.evidence) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Evidence.fromPartial(e))) || [];
        return message;
    },
};
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
