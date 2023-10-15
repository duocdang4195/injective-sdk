"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = exports.VoteSetBits = exports.VoteSetMaj23 = exports.HasVote = exports.Vote = exports.BlockPart = exports.ProposalPOL = exports.Proposal = exports.NewValidBlock = exports.NewRoundStep = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const types_1 = require("../libs/bits/types");
const types_2 = require("../types/types");
function createBaseNewRoundStep() {
    return { height: "0", round: 0, step: 0, secondsSinceStartTime: "0", lastCommitRound: 0 };
}
exports.NewRoundStep = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.step !== 0) {
            writer.uint32(24).uint32(message.step);
        }
        if (message.secondsSinceStartTime !== "0") {
            writer.uint32(32).int64(message.secondsSinceStartTime);
        }
        if (message.lastCommitRound !== 0) {
            writer.uint32(40).int32(message.lastCommitRound);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNewRoundStep();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.round = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.step = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.secondsSinceStartTime = longToString(reader.int64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.lastCommitRound = reader.int32();
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
            height: isSet(object.height) ? String(object.height) : "0",
            round: isSet(object.round) ? Number(object.round) : 0,
            step: isSet(object.step) ? Number(object.step) : 0,
            secondsSinceStartTime: isSet(object.secondsSinceStartTime) ? String(object.secondsSinceStartTime) : "0",
            lastCommitRound: isSet(object.lastCommitRound) ? Number(object.lastCommitRound) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.step !== undefined && (obj.step = Math.round(message.step));
        message.secondsSinceStartTime !== undefined && (obj.secondsSinceStartTime = message.secondsSinceStartTime);
        message.lastCommitRound !== undefined && (obj.lastCommitRound = Math.round(message.lastCommitRound));
        return obj;
    },
    create(base) {
        return exports.NewRoundStep.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseNewRoundStep();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.step = (_c = object.step) !== null && _c !== void 0 ? _c : 0;
        message.secondsSinceStartTime = (_d = object.secondsSinceStartTime) !== null && _d !== void 0 ? _d : "0";
        message.lastCommitRound = (_e = object.lastCommitRound) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseNewValidBlock() {
    return { height: "0", round: 0, blockPartSetHeader: undefined, blockParts: undefined, isCommit: false };
}
exports.NewValidBlock = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.blockPartSetHeader !== undefined) {
            types_2.PartSetHeader.encode(message.blockPartSetHeader, writer.uint32(26).fork()).ldelim();
        }
        if (message.blockParts !== undefined) {
            types_1.BitArray.encode(message.blockParts, writer.uint32(34).fork()).ldelim();
        }
        if (message.isCommit === true) {
            writer.uint32(40).bool(message.isCommit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNewValidBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.round = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.blockPartSetHeader = types_2.PartSetHeader.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.blockParts = types_1.BitArray.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.isCommit = reader.bool();
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
            height: isSet(object.height) ? String(object.height) : "0",
            round: isSet(object.round) ? Number(object.round) : 0,
            blockPartSetHeader: isSet(object.blockPartSetHeader)
                ? types_2.PartSetHeader.fromJSON(object.blockPartSetHeader)
                : undefined,
            blockParts: isSet(object.blockParts) ? types_1.BitArray.fromJSON(object.blockParts) : undefined,
            isCommit: isSet(object.isCommit) ? Boolean(object.isCommit) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.blockPartSetHeader !== undefined && (obj.blockPartSetHeader = message.blockPartSetHeader
            ? types_2.PartSetHeader.toJSON(message.blockPartSetHeader)
            : undefined);
        message.blockParts !== undefined &&
            (obj.blockParts = message.blockParts ? types_1.BitArray.toJSON(message.blockParts) : undefined);
        message.isCommit !== undefined && (obj.isCommit = message.isCommit);
        return obj;
    },
    create(base) {
        return exports.NewValidBlock.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseNewValidBlock();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.blockPartSetHeader = (object.blockPartSetHeader !== undefined && object.blockPartSetHeader !== null)
            ? types_2.PartSetHeader.fromPartial(object.blockPartSetHeader)
            : undefined;
        message.blockParts = (object.blockParts !== undefined && object.blockParts !== null)
            ? types_1.BitArray.fromPartial(object.blockParts)
            : undefined;
        message.isCommit = (_c = object.isCommit) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseProposal() {
    return { proposal: undefined };
}
exports.Proposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proposal !== undefined) {
            types_2.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.proposal = types_2.Proposal.decode(reader, reader.uint32());
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
        return { proposal: isSet(object.proposal) ? types_2.Proposal.fromJSON(object.proposal) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined &&
            (obj.proposal = message.proposal ? types_2.Proposal.toJSON(message.proposal) : undefined);
        return obj;
    },
    create(base) {
        return exports.Proposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.proposal = (object.proposal !== undefined && object.proposal !== null)
            ? types_2.Proposal.fromPartial(object.proposal)
            : undefined;
        return message;
    },
};
function createBaseProposalPOL() {
    return { height: "0", proposalPolRound: 0, proposalPol: undefined };
}
exports.ProposalPOL = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.proposalPolRound !== 0) {
            writer.uint32(16).int32(message.proposalPolRound);
        }
        if (message.proposalPol !== undefined) {
            types_1.BitArray.encode(message.proposalPol, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposalPOL();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.proposalPolRound = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proposalPol = types_1.BitArray.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? String(object.height) : "0",
            proposalPolRound: isSet(object.proposalPolRound) ? Number(object.proposalPolRound) : 0,
            proposalPol: isSet(object.proposalPol) ? types_1.BitArray.fromJSON(object.proposalPol) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.proposalPolRound !== undefined && (obj.proposalPolRound = Math.round(message.proposalPolRound));
        message.proposalPol !== undefined &&
            (obj.proposalPol = message.proposalPol ? types_1.BitArray.toJSON(message.proposalPol) : undefined);
        return obj;
    },
    create(base) {
        return exports.ProposalPOL.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseProposalPOL();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.proposalPolRound = (_b = object.proposalPolRound) !== null && _b !== void 0 ? _b : 0;
        message.proposalPol = (object.proposalPol !== undefined && object.proposalPol !== null)
            ? types_1.BitArray.fromPartial(object.proposalPol)
            : undefined;
        return message;
    },
};
function createBaseBlockPart() {
    return { height: "0", round: 0, part: undefined };
}
exports.BlockPart = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.part !== undefined) {
            types_2.Part.encode(message.part, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockPart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.round = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.part = types_2.Part.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? String(object.height) : "0",
            round: isSet(object.round) ? Number(object.round) : 0,
            part: isSet(object.part) ? types_2.Part.fromJSON(object.part) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.part !== undefined && (obj.part = message.part ? types_2.Part.toJSON(message.part) : undefined);
        return obj;
    },
    create(base) {
        return exports.BlockPart.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBlockPart();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.part = (object.part !== undefined && object.part !== null) ? types_2.Part.fromPartial(object.part) : undefined;
        return message;
    },
};
function createBaseVote() {
    return { vote: undefined };
}
exports.Vote = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.vote !== undefined) {
            types_2.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.vote = types_2.Vote.decode(reader, reader.uint32());
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
        return { vote: isSet(object.vote) ? types_2.Vote.fromJSON(object.vote) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? types_2.Vote.toJSON(message.vote) : undefined);
        return obj;
    },
    create(base) {
        return exports.Vote.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.vote = (object.vote !== undefined && object.vote !== null) ? types_2.Vote.fromPartial(object.vote) : undefined;
        return message;
    },
};
function createBaseHasVote() {
    return { height: "0", round: 0, type: 0, index: 0 };
}
exports.HasVote = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.index !== 0) {
            writer.uint32(32).int32(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHasVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.round = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.index = reader.int32();
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
            height: isSet(object.height) ? String(object.height) : "0",
            round: isSet(object.round) ? Number(object.round) : 0,
            type: isSet(object.type) ? (0, types_2.signedMsgTypeFromJSON)(object.type) : 0,
            index: isSet(object.index) ? Number(object.index) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.type !== undefined && (obj.type = (0, types_2.signedMsgTypeToJSON)(message.type));
        message.index !== undefined && (obj.index = Math.round(message.index));
        return obj;
    },
    create(base) {
        return exports.HasVote.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseHasVote();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.index = (_d = object.index) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseVoteSetMaj23() {
    return { height: "0", round: 0, type: 0, blockId: undefined };
}
exports.VoteSetMaj23 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.blockId !== undefined) {
            types_2.BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteSetMaj23();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.round = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.blockId = types_2.BlockID.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? String(object.height) : "0",
            round: isSet(object.round) ? Number(object.round) : 0,
            type: isSet(object.type) ? (0, types_2.signedMsgTypeFromJSON)(object.type) : 0,
            blockId: isSet(object.blockId) ? types_2.BlockID.fromJSON(object.blockId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.type !== undefined && (obj.type = (0, types_2.signedMsgTypeToJSON)(message.type));
        message.blockId !== undefined && (obj.blockId = message.blockId ? types_2.BlockID.toJSON(message.blockId) : undefined);
        return obj;
    },
    create(base) {
        return exports.VoteSetMaj23.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseVoteSetMaj23();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.blockId = (object.blockId !== undefined && object.blockId !== null)
            ? types_2.BlockID.fromPartial(object.blockId)
            : undefined;
        return message;
    },
};
function createBaseVoteSetBits() {
    return { height: "0", round: 0, type: 0, blockId: undefined, votes: undefined };
}
exports.VoteSetBits = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.blockId !== undefined) {
            types_2.BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
        }
        if (message.votes !== undefined) {
            types_1.BitArray.encode(message.votes, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteSetBits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.round = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.blockId = types_2.BlockID.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.votes = types_1.BitArray.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? String(object.height) : "0",
            round: isSet(object.round) ? Number(object.round) : 0,
            type: isSet(object.type) ? (0, types_2.signedMsgTypeFromJSON)(object.type) : 0,
            blockId: isSet(object.blockId) ? types_2.BlockID.fromJSON(object.blockId) : undefined,
            votes: isSet(object.votes) ? types_1.BitArray.fromJSON(object.votes) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.type !== undefined && (obj.type = (0, types_2.signedMsgTypeToJSON)(message.type));
        message.blockId !== undefined && (obj.blockId = message.blockId ? types_2.BlockID.toJSON(message.blockId) : undefined);
        message.votes !== undefined && (obj.votes = message.votes ? types_1.BitArray.toJSON(message.votes) : undefined);
        return obj;
    },
    create(base) {
        return exports.VoteSetBits.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseVoteSetBits();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.blockId = (object.blockId !== undefined && object.blockId !== null)
            ? types_2.BlockID.fromPartial(object.blockId)
            : undefined;
        message.votes = (object.votes !== undefined && object.votes !== null)
            ? types_1.BitArray.fromPartial(object.votes)
            : undefined;
        return message;
    },
};
function createBaseMessage() {
    return {
        newRoundStep: undefined,
        newValidBlock: undefined,
        proposal: undefined,
        proposalPol: undefined,
        blockPart: undefined,
        vote: undefined,
        hasVote: undefined,
        voteSetMaj23: undefined,
        voteSetBits: undefined,
    };
}
exports.Message = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.newRoundStep !== undefined) {
            exports.NewRoundStep.encode(message.newRoundStep, writer.uint32(10).fork()).ldelim();
        }
        if (message.newValidBlock !== undefined) {
            exports.NewValidBlock.encode(message.newValidBlock, writer.uint32(18).fork()).ldelim();
        }
        if (message.proposal !== undefined) {
            exports.Proposal.encode(message.proposal, writer.uint32(26).fork()).ldelim();
        }
        if (message.proposalPol !== undefined) {
            exports.ProposalPOL.encode(message.proposalPol, writer.uint32(34).fork()).ldelim();
        }
        if (message.blockPart !== undefined) {
            exports.BlockPart.encode(message.blockPart, writer.uint32(42).fork()).ldelim();
        }
        if (message.vote !== undefined) {
            exports.Vote.encode(message.vote, writer.uint32(50).fork()).ldelim();
        }
        if (message.hasVote !== undefined) {
            exports.HasVote.encode(message.hasVote, writer.uint32(58).fork()).ldelim();
        }
        if (message.voteSetMaj23 !== undefined) {
            exports.VoteSetMaj23.encode(message.voteSetMaj23, writer.uint32(66).fork()).ldelim();
        }
        if (message.voteSetBits !== undefined) {
            exports.VoteSetBits.encode(message.voteSetBits, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.newRoundStep = exports.NewRoundStep.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.newValidBlock = exports.NewValidBlock.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proposal = exports.Proposal.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proposalPol = exports.ProposalPOL.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.blockPart = exports.BlockPart.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.vote = exports.Vote.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.hasVote = exports.HasVote.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.voteSetMaj23 = exports.VoteSetMaj23.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.voteSetBits = exports.VoteSetBits.decode(reader, reader.uint32());
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
            newRoundStep: isSet(object.newRoundStep) ? exports.NewRoundStep.fromJSON(object.newRoundStep) : undefined,
            newValidBlock: isSet(object.newValidBlock) ? exports.NewValidBlock.fromJSON(object.newValidBlock) : undefined,
            proposal: isSet(object.proposal) ? exports.Proposal.fromJSON(object.proposal) : undefined,
            proposalPol: isSet(object.proposalPol) ? exports.ProposalPOL.fromJSON(object.proposalPol) : undefined,
            blockPart: isSet(object.blockPart) ? exports.BlockPart.fromJSON(object.blockPart) : undefined,
            vote: isSet(object.vote) ? exports.Vote.fromJSON(object.vote) : undefined,
            hasVote: isSet(object.hasVote) ? exports.HasVote.fromJSON(object.hasVote) : undefined,
            voteSetMaj23: isSet(object.voteSetMaj23) ? exports.VoteSetMaj23.fromJSON(object.voteSetMaj23) : undefined,
            voteSetBits: isSet(object.voteSetBits) ? exports.VoteSetBits.fromJSON(object.voteSetBits) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.newRoundStep !== undefined &&
            (obj.newRoundStep = message.newRoundStep ? exports.NewRoundStep.toJSON(message.newRoundStep) : undefined);
        message.newValidBlock !== undefined &&
            (obj.newValidBlock = message.newValidBlock ? exports.NewValidBlock.toJSON(message.newValidBlock) : undefined);
        message.proposal !== undefined && (obj.proposal = message.proposal ? exports.Proposal.toJSON(message.proposal) : undefined);
        message.proposalPol !== undefined &&
            (obj.proposalPol = message.proposalPol ? exports.ProposalPOL.toJSON(message.proposalPol) : undefined);
        message.blockPart !== undefined &&
            (obj.blockPart = message.blockPart ? exports.BlockPart.toJSON(message.blockPart) : undefined);
        message.vote !== undefined && (obj.vote = message.vote ? exports.Vote.toJSON(message.vote) : undefined);
        message.hasVote !== undefined && (obj.hasVote = message.hasVote ? exports.HasVote.toJSON(message.hasVote) : undefined);
        message.voteSetMaj23 !== undefined &&
            (obj.voteSetMaj23 = message.voteSetMaj23 ? exports.VoteSetMaj23.toJSON(message.voteSetMaj23) : undefined);
        message.voteSetBits !== undefined &&
            (obj.voteSetBits = message.voteSetBits ? exports.VoteSetBits.toJSON(message.voteSetBits) : undefined);
        return obj;
    },
    create(base) {
        return exports.Message.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMessage();
        message.newRoundStep = (object.newRoundStep !== undefined && object.newRoundStep !== null)
            ? exports.NewRoundStep.fromPartial(object.newRoundStep)
            : undefined;
        message.newValidBlock = (object.newValidBlock !== undefined && object.newValidBlock !== null)
            ? exports.NewValidBlock.fromPartial(object.newValidBlock)
            : undefined;
        message.proposal = (object.proposal !== undefined && object.proposal !== null)
            ? exports.Proposal.fromPartial(object.proposal)
            : undefined;
        message.proposalPol = (object.proposalPol !== undefined && object.proposalPol !== null)
            ? exports.ProposalPOL.fromPartial(object.proposalPol)
            : undefined;
        message.blockPart = (object.blockPart !== undefined && object.blockPart !== null)
            ? exports.BlockPart.fromPartial(object.blockPart)
            : undefined;
        message.vote = (object.vote !== undefined && object.vote !== null) ? exports.Vote.fromPartial(object.vote) : undefined;
        message.hasVote = (object.hasVote !== undefined && object.hasVote !== null)
            ? exports.HasVote.fromPartial(object.hasVote)
            : undefined;
        message.voteSetMaj23 = (object.voteSetMaj23 !== undefined && object.voteSetMaj23 !== null)
            ? exports.VoteSetMaj23.fromPartial(object.voteSetMaj23)
            : undefined;
        message.voteSetBits = (object.voteSetBits !== undefined && object.voteSetBits !== null)
            ? exports.VoteSetBits.fromPartial(object.voteSetBits)
            : undefined;
        return message;
    },
};
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
