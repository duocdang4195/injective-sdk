/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BitArray } from "../libs/bits/types";
import { BlockID, Part, PartSetHeader, Proposal as Proposal1, signedMsgTypeFromJSON, signedMsgTypeToJSON, Vote as Vote2, } from "../types/types";
function createBaseNewRoundStep() {
    return { height: "0", round: 0, step: 0, secondsSinceStartTime: "0", lastCommitRound: 0 };
}
export const NewRoundStep = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return NewRoundStep.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const NewValidBlock = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.blockPartSetHeader !== undefined) {
            PartSetHeader.encode(message.blockPartSetHeader, writer.uint32(26).fork()).ldelim();
        }
        if (message.blockParts !== undefined) {
            BitArray.encode(message.blockParts, writer.uint32(34).fork()).ldelim();
        }
        if (message.isCommit === true) {
            writer.uint32(40).bool(message.isCommit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.blockPartSetHeader = PartSetHeader.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.blockParts = BitArray.decode(reader, reader.uint32());
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
                ? PartSetHeader.fromJSON(object.blockPartSetHeader)
                : undefined,
            blockParts: isSet(object.blockParts) ? BitArray.fromJSON(object.blockParts) : undefined,
            isCommit: isSet(object.isCommit) ? Boolean(object.isCommit) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.blockPartSetHeader !== undefined && (obj.blockPartSetHeader = message.blockPartSetHeader
            ? PartSetHeader.toJSON(message.blockPartSetHeader)
            : undefined);
        message.blockParts !== undefined &&
            (obj.blockParts = message.blockParts ? BitArray.toJSON(message.blockParts) : undefined);
        message.isCommit !== undefined && (obj.isCommit = message.isCommit);
        return obj;
    },
    create(base) {
        return NewValidBlock.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseNewValidBlock();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.blockPartSetHeader = (object.blockPartSetHeader !== undefined && object.blockPartSetHeader !== null)
            ? PartSetHeader.fromPartial(object.blockPartSetHeader)
            : undefined;
        message.blockParts = (object.blockParts !== undefined && object.blockParts !== null)
            ? BitArray.fromPartial(object.blockParts)
            : undefined;
        message.isCommit = (_c = object.isCommit) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseProposal() {
    return { proposal: undefined };
}
export const Proposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposal !== undefined) {
            Proposal1.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.proposal = Proposal1.decode(reader, reader.uint32());
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
        return { proposal: isSet(object.proposal) ? Proposal1.fromJSON(object.proposal) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined &&
            (obj.proposal = message.proposal ? Proposal1.toJSON(message.proposal) : undefined);
        return obj;
    },
    create(base) {
        return Proposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.proposal = (object.proposal !== undefined && object.proposal !== null)
            ? Proposal1.fromPartial(object.proposal)
            : undefined;
        return message;
    },
};
function createBaseProposalPOL() {
    return { height: "0", proposalPolRound: 0, proposalPol: undefined };
}
export const ProposalPOL = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.proposalPolRound !== 0) {
            writer.uint32(16).int32(message.proposalPolRound);
        }
        if (message.proposalPol !== undefined) {
            BitArray.encode(message.proposalPol, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.proposalPol = BitArray.decode(reader, reader.uint32());
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
            proposalPol: isSet(object.proposalPol) ? BitArray.fromJSON(object.proposalPol) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.proposalPolRound !== undefined && (obj.proposalPolRound = Math.round(message.proposalPolRound));
        message.proposalPol !== undefined &&
            (obj.proposalPol = message.proposalPol ? BitArray.toJSON(message.proposalPol) : undefined);
        return obj;
    },
    create(base) {
        return ProposalPOL.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseProposalPOL();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.proposalPolRound = (_b = object.proposalPolRound) !== null && _b !== void 0 ? _b : 0;
        message.proposalPol = (object.proposalPol !== undefined && object.proposalPol !== null)
            ? BitArray.fromPartial(object.proposalPol)
            : undefined;
        return message;
    },
};
function createBaseBlockPart() {
    return { height: "0", round: 0, part: undefined };
}
export const BlockPart = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.part !== undefined) {
            Part.encode(message.part, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.part = Part.decode(reader, reader.uint32());
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
            part: isSet(object.part) ? Part.fromJSON(object.part) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.part !== undefined && (obj.part = message.part ? Part.toJSON(message.part) : undefined);
        return obj;
    },
    create(base) {
        return BlockPart.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBlockPart();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.part = (object.part !== undefined && object.part !== null) ? Part.fromPartial(object.part) : undefined;
        return message;
    },
};
function createBaseVote() {
    return { vote: undefined };
}
export const Vote = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vote !== undefined) {
            Vote2.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.vote = Vote2.decode(reader, reader.uint32());
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
        return { vote: isSet(object.vote) ? Vote2.fromJSON(object.vote) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? Vote2.toJSON(message.vote) : undefined);
        return obj;
    },
    create(base) {
        return Vote.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.vote = (object.vote !== undefined && object.vote !== null) ? Vote2.fromPartial(object.vote) : undefined;
        return message;
    },
};
function createBaseHasVote() {
    return { height: "0", round: 0, type: 0, index: 0 };
}
export const HasVote = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
            type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
            index: isSet(object.index) ? Number(object.index) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        message.index !== undefined && (obj.index = Math.round(message.index));
        return obj;
    },
    create(base) {
        return HasVote.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const VoteSetMaj23 = {
    encode(message, writer = _m0.Writer.create()) {
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
            BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.blockId = BlockID.decode(reader, reader.uint32());
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
            type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
            blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
        return obj;
    },
    create(base) {
        return VoteSetMaj23.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseVoteSetMaj23();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.blockId = (object.blockId !== undefined && object.blockId !== null)
            ? BlockID.fromPartial(object.blockId)
            : undefined;
        return message;
    },
};
function createBaseVoteSetBits() {
    return { height: "0", round: 0, type: 0, blockId: undefined, votes: undefined };
}
export const VoteSetBits = {
    encode(message, writer = _m0.Writer.create()) {
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
            BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
        }
        if (message.votes !== undefined) {
            BitArray.encode(message.votes, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.blockId = BlockID.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.votes = BitArray.decode(reader, reader.uint32());
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
            type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
            blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
            votes: isSet(object.votes) ? BitArray.fromJSON(object.votes) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
        message.votes !== undefined && (obj.votes = message.votes ? BitArray.toJSON(message.votes) : undefined);
        return obj;
    },
    create(base) {
        return VoteSetBits.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseVoteSetBits();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.blockId = (object.blockId !== undefined && object.blockId !== null)
            ? BlockID.fromPartial(object.blockId)
            : undefined;
        message.votes = (object.votes !== undefined && object.votes !== null)
            ? BitArray.fromPartial(object.votes)
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
export const Message = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.newRoundStep !== undefined) {
            NewRoundStep.encode(message.newRoundStep, writer.uint32(10).fork()).ldelim();
        }
        if (message.newValidBlock !== undefined) {
            NewValidBlock.encode(message.newValidBlock, writer.uint32(18).fork()).ldelim();
        }
        if (message.proposal !== undefined) {
            Proposal.encode(message.proposal, writer.uint32(26).fork()).ldelim();
        }
        if (message.proposalPol !== undefined) {
            ProposalPOL.encode(message.proposalPol, writer.uint32(34).fork()).ldelim();
        }
        if (message.blockPart !== undefined) {
            BlockPart.encode(message.blockPart, writer.uint32(42).fork()).ldelim();
        }
        if (message.vote !== undefined) {
            Vote.encode(message.vote, writer.uint32(50).fork()).ldelim();
        }
        if (message.hasVote !== undefined) {
            HasVote.encode(message.hasVote, writer.uint32(58).fork()).ldelim();
        }
        if (message.voteSetMaj23 !== undefined) {
            VoteSetMaj23.encode(message.voteSetMaj23, writer.uint32(66).fork()).ldelim();
        }
        if (message.voteSetBits !== undefined) {
            VoteSetBits.encode(message.voteSetBits, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.newRoundStep = NewRoundStep.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.newValidBlock = NewValidBlock.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proposal = Proposal.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proposalPol = ProposalPOL.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.blockPart = BlockPart.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.vote = Vote.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.hasVote = HasVote.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.voteSetMaj23 = VoteSetMaj23.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.voteSetBits = VoteSetBits.decode(reader, reader.uint32());
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
            newRoundStep: isSet(object.newRoundStep) ? NewRoundStep.fromJSON(object.newRoundStep) : undefined,
            newValidBlock: isSet(object.newValidBlock) ? NewValidBlock.fromJSON(object.newValidBlock) : undefined,
            proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
            proposalPol: isSet(object.proposalPol) ? ProposalPOL.fromJSON(object.proposalPol) : undefined,
            blockPart: isSet(object.blockPart) ? BlockPart.fromJSON(object.blockPart) : undefined,
            vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
            hasVote: isSet(object.hasVote) ? HasVote.fromJSON(object.hasVote) : undefined,
            voteSetMaj23: isSet(object.voteSetMaj23) ? VoteSetMaj23.fromJSON(object.voteSetMaj23) : undefined,
            voteSetBits: isSet(object.voteSetBits) ? VoteSetBits.fromJSON(object.voteSetBits) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.newRoundStep !== undefined &&
            (obj.newRoundStep = message.newRoundStep ? NewRoundStep.toJSON(message.newRoundStep) : undefined);
        message.newValidBlock !== undefined &&
            (obj.newValidBlock = message.newValidBlock ? NewValidBlock.toJSON(message.newValidBlock) : undefined);
        message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
        message.proposalPol !== undefined &&
            (obj.proposalPol = message.proposalPol ? ProposalPOL.toJSON(message.proposalPol) : undefined);
        message.blockPart !== undefined &&
            (obj.blockPart = message.blockPart ? BlockPart.toJSON(message.blockPart) : undefined);
        message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
        message.hasVote !== undefined && (obj.hasVote = message.hasVote ? HasVote.toJSON(message.hasVote) : undefined);
        message.voteSetMaj23 !== undefined &&
            (obj.voteSetMaj23 = message.voteSetMaj23 ? VoteSetMaj23.toJSON(message.voteSetMaj23) : undefined);
        message.voteSetBits !== undefined &&
            (obj.voteSetBits = message.voteSetBits ? VoteSetBits.toJSON(message.voteSetBits) : undefined);
        return obj;
    },
    create(base) {
        return Message.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMessage();
        message.newRoundStep = (object.newRoundStep !== undefined && object.newRoundStep !== null)
            ? NewRoundStep.fromPartial(object.newRoundStep)
            : undefined;
        message.newValidBlock = (object.newValidBlock !== undefined && object.newValidBlock !== null)
            ? NewValidBlock.fromPartial(object.newValidBlock)
            : undefined;
        message.proposal = (object.proposal !== undefined && object.proposal !== null)
            ? Proposal.fromPartial(object.proposal)
            : undefined;
        message.proposalPol = (object.proposalPol !== undefined && object.proposalPol !== null)
            ? ProposalPOL.fromPartial(object.proposalPol)
            : undefined;
        message.blockPart = (object.blockPart !== undefined && object.blockPart !== null)
            ? BlockPart.fromPartial(object.blockPart)
            : undefined;
        message.vote = (object.vote !== undefined && object.vote !== null) ? Vote.fromPartial(object.vote) : undefined;
        message.hasVote = (object.hasVote !== undefined && object.hasVote !== null)
            ? HasVote.fromPartial(object.hasVote)
            : undefined;
        message.voteSetMaj23 = (object.voteSetMaj23 !== undefined && object.voteSetMaj23 !== null)
            ? VoteSetMaj23.fromPartial(object.voteSetMaj23)
            : undefined;
        message.voteSetBits = (object.voteSetBits !== undefined && object.voteSetBits !== null)
            ? VoteSetBits.fromPartial(object.voteSetBits)
            : undefined;
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
