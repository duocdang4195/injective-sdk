/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Deposit, DepositParams, Params, Proposal, TallyParams, Vote, VotingParams } from "./gov";
function createBaseGenesisState() {
    return {
        startingProposalId: "0",
        deposits: [],
        votes: [],
        proposals: [],
        depositParams: undefined,
        votingParams: undefined,
        tallyParams: undefined,
        params: undefined,
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.startingProposalId !== "0") {
            writer.uint32(8).uint64(message.startingProposalId);
        }
        for (const v of message.deposits) {
            Deposit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.proposals) {
            Proposal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.depositParams !== undefined) {
            DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
        }
        if (message.votingParams !== undefined) {
            VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
        }
        if (message.tallyParams !== undefined) {
            TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(66).fork()).ldelim();
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
                    if (tag !== 8) {
                        break;
                    }
                    message.startingProposalId = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.deposits.push(Deposit.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.votes.push(Vote.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proposals.push(Proposal.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.depositParams = DepositParams.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.votingParams = VotingParams.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.tallyParams = TallyParams.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.params = Params.decode(reader, reader.uint32());
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
            startingProposalId: isSet(object.startingProposalId) ? String(object.startingProposalId) : "0",
            deposits: Array.isArray(object === null || object === void 0 ? void 0 : object.deposits) ? object.deposits.map((e) => Deposit.fromJSON(e)) : [],
            votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map((e) => Vote.fromJSON(e)) : [],
            proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map((e) => Proposal.fromJSON(e)) : [],
            depositParams: isSet(object.depositParams) ? DepositParams.fromJSON(object.depositParams) : undefined,
            votingParams: isSet(object.votingParams) ? VotingParams.fromJSON(object.votingParams) : undefined,
            tallyParams: isSet(object.tallyParams) ? TallyParams.fromJSON(object.tallyParams) : undefined,
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.startingProposalId !== undefined && (obj.startingProposalId = message.startingProposalId);
        if (message.deposits) {
            obj.deposits = message.deposits.map((e) => e ? Deposit.toJSON(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map((e) => e ? Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map((e) => e ? Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.depositParams !== undefined &&
            (obj.depositParams = message.depositParams ? DepositParams.toJSON(message.depositParams) : undefined);
        message.votingParams !== undefined &&
            (obj.votingParams = message.votingParams ? VotingParams.toJSON(message.votingParams) : undefined);
        message.tallyParams !== undefined &&
            (obj.tallyParams = message.tallyParams ? TallyParams.toJSON(message.tallyParams) : undefined);
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGenesisState();
        message.startingProposalId = (_a = object.startingProposalId) !== null && _a !== void 0 ? _a : "0";
        message.deposits = ((_b = object.deposits) === null || _b === void 0 ? void 0 : _b.map((e) => Deposit.fromPartial(e))) || [];
        message.votes = ((_c = object.votes) === null || _c === void 0 ? void 0 : _c.map((e) => Vote.fromPartial(e))) || [];
        message.proposals = ((_d = object.proposals) === null || _d === void 0 ? void 0 : _d.map((e) => Proposal.fromPartial(e))) || [];
        message.depositParams = (object.depositParams !== undefined && object.depositParams !== null)
            ? DepositParams.fromPartial(object.depositParams)
            : undefined;
        message.votingParams = (object.votingParams !== undefined && object.votingParams !== null)
            ? VotingParams.fromPartial(object.votingParams)
            : undefined;
        message.tallyParams = (object.tallyParams !== undefined && object.tallyParams !== null)
            ? TallyParams.fromPartial(object.tallyParams)
            : undefined;
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
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
