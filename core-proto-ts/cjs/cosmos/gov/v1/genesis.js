"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const gov_1 = require("./gov");
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
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.startingProposalId !== "0") {
            writer.uint32(8).uint64(message.startingProposalId);
        }
        for (const v of message.deposits) {
            gov_1.Deposit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.votes) {
            gov_1.Vote.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.proposals) {
            gov_1.Proposal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.depositParams !== undefined) {
            gov_1.DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
        }
        if (message.votingParams !== undefined) {
            gov_1.VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
        }
        if (message.tallyParams !== undefined) {
            gov_1.TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
        }
        if (message.params !== undefined) {
            gov_1.Params.encode(message.params, writer.uint32(66).fork()).ldelim();
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
                    if (tag !== 8) {
                        break;
                    }
                    message.startingProposalId = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.deposits.push(gov_1.Deposit.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.votes.push(gov_1.Vote.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proposals.push(gov_1.Proposal.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.depositParams = gov_1.DepositParams.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.votingParams = gov_1.VotingParams.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.tallyParams = gov_1.TallyParams.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.params = gov_1.Params.decode(reader, reader.uint32());
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
            deposits: Array.isArray(object === null || object === void 0 ? void 0 : object.deposits) ? object.deposits.map((e) => gov_1.Deposit.fromJSON(e)) : [],
            votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map((e) => gov_1.Vote.fromJSON(e)) : [],
            proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map((e) => gov_1.Proposal.fromJSON(e)) : [],
            depositParams: isSet(object.depositParams) ? gov_1.DepositParams.fromJSON(object.depositParams) : undefined,
            votingParams: isSet(object.votingParams) ? gov_1.VotingParams.fromJSON(object.votingParams) : undefined,
            tallyParams: isSet(object.tallyParams) ? gov_1.TallyParams.fromJSON(object.tallyParams) : undefined,
            params: isSet(object.params) ? gov_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.startingProposalId !== undefined && (obj.startingProposalId = message.startingProposalId);
        if (message.deposits) {
            obj.deposits = message.deposits.map((e) => e ? gov_1.Deposit.toJSON(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map((e) => e ? gov_1.Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map((e) => e ? gov_1.Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.depositParams !== undefined &&
            (obj.depositParams = message.depositParams ? gov_1.DepositParams.toJSON(message.depositParams) : undefined);
        message.votingParams !== undefined &&
            (obj.votingParams = message.votingParams ? gov_1.VotingParams.toJSON(message.votingParams) : undefined);
        message.tallyParams !== undefined &&
            (obj.tallyParams = message.tallyParams ? gov_1.TallyParams.toJSON(message.tallyParams) : undefined);
        message.params !== undefined && (obj.params = message.params ? gov_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGenesisState();
        message.startingProposalId = (_a = object.startingProposalId) !== null && _a !== void 0 ? _a : "0";
        message.deposits = ((_b = object.deposits) === null || _b === void 0 ? void 0 : _b.map((e) => gov_1.Deposit.fromPartial(e))) || [];
        message.votes = ((_c = object.votes) === null || _c === void 0 ? void 0 : _c.map((e) => gov_1.Vote.fromPartial(e))) || [];
        message.proposals = ((_d = object.proposals) === null || _d === void 0 ? void 0 : _d.map((e) => gov_1.Proposal.fromPartial(e))) || [];
        message.depositParams = (object.depositParams !== undefined && object.depositParams !== null)
            ? gov_1.DepositParams.fromPartial(object.depositParams)
            : undefined;
        message.votingParams = (object.votingParams !== undefined && object.votingParams !== null)
            ? gov_1.VotingParams.fromPartial(object.votingParams)
            : undefined;
        message.tallyParams = (object.tallyParams !== undefined && object.tallyParams !== null)
            ? gov_1.TallyParams.fromPartial(object.tallyParams)
            : undefined;
        message.params = (object.params !== undefined && object.params !== null)
            ? gov_1.Params.fromPartial(object.params)
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
