"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const types_1 = require("./types");
function createBaseGenesisState() {
    return {
        groupSeq: "0",
        groups: [],
        groupMembers: [],
        groupPolicySeq: "0",
        groupPolicies: [],
        proposalSeq: "0",
        proposals: [],
        votes: [],
    };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupSeq !== "0") {
            writer.uint32(8).uint64(message.groupSeq);
        }
        for (const v of message.groups) {
            types_1.GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.groupMembers) {
            types_1.GroupMember.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.groupPolicySeq !== "0") {
            writer.uint32(32).uint64(message.groupPolicySeq);
        }
        for (const v of message.groupPolicies) {
            types_1.GroupPolicyInfo.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.proposalSeq !== "0") {
            writer.uint32(48).uint64(message.proposalSeq);
        }
        for (const v of message.proposals) {
            types_1.Proposal.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.votes) {
            types_1.Vote.encode(v, writer.uint32(66).fork()).ldelim();
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
                    message.groupSeq = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groups.push(types_1.GroupInfo.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.groupMembers.push(types_1.GroupMember.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.groupPolicySeq = longToString(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.groupPolicies.push(types_1.GroupPolicyInfo.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.proposalSeq = longToString(reader.uint64());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.proposals.push(types_1.Proposal.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.votes.push(types_1.Vote.decode(reader, reader.uint32()));
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
            groupSeq: isSet(object.groupSeq) ? String(object.groupSeq) : "0",
            groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map((e) => types_1.GroupInfo.fromJSON(e)) : [],
            groupMembers: Array.isArray(object === null || object === void 0 ? void 0 : object.groupMembers)
                ? object.groupMembers.map((e) => types_1.GroupMember.fromJSON(e))
                : [],
            groupPolicySeq: isSet(object.groupPolicySeq) ? String(object.groupPolicySeq) : "0",
            groupPolicies: Array.isArray(object === null || object === void 0 ? void 0 : object.groupPolicies)
                ? object.groupPolicies.map((e) => types_1.GroupPolicyInfo.fromJSON(e))
                : [],
            proposalSeq: isSet(object.proposalSeq) ? String(object.proposalSeq) : "0",
            proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map((e) => types_1.Proposal.fromJSON(e)) : [],
            votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map((e) => types_1.Vote.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupSeq !== undefined && (obj.groupSeq = message.groupSeq);
        if (message.groups) {
            obj.groups = message.groups.map((e) => e ? types_1.GroupInfo.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        if (message.groupMembers) {
            obj.groupMembers = message.groupMembers.map((e) => e ? types_1.GroupMember.toJSON(e) : undefined);
        }
        else {
            obj.groupMembers = [];
        }
        message.groupPolicySeq !== undefined && (obj.groupPolicySeq = message.groupPolicySeq);
        if (message.groupPolicies) {
            obj.groupPolicies = message.groupPolicies.map((e) => e ? types_1.GroupPolicyInfo.toJSON(e) : undefined);
        }
        else {
            obj.groupPolicies = [];
        }
        message.proposalSeq !== undefined && (obj.proposalSeq = message.proposalSeq);
        if (message.proposals) {
            obj.proposals = message.proposals.map((e) => e ? types_1.Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map((e) => e ? types_1.Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseGenesisState();
        message.groupSeq = (_a = object.groupSeq) !== null && _a !== void 0 ? _a : "0";
        message.groups = ((_b = object.groups) === null || _b === void 0 ? void 0 : _b.map((e) => types_1.GroupInfo.fromPartial(e))) || [];
        message.groupMembers = ((_c = object.groupMembers) === null || _c === void 0 ? void 0 : _c.map((e) => types_1.GroupMember.fromPartial(e))) || [];
        message.groupPolicySeq = (_d = object.groupPolicySeq) !== null && _d !== void 0 ? _d : "0";
        message.groupPolicies = ((_e = object.groupPolicies) === null || _e === void 0 ? void 0 : _e.map((e) => types_1.GroupPolicyInfo.fromPartial(e))) || [];
        message.proposalSeq = (_f = object.proposalSeq) !== null && _f !== void 0 ? _f : "0";
        message.proposals = ((_g = object.proposals) === null || _g === void 0 ? void 0 : _g.map((e) => types_1.Proposal.fromPartial(e))) || [];
        message.votes = ((_h = object.votes) === null || _h === void 0 ? void 0 : _h.map((e) => types_1.Vote.fromPartial(e))) || [];
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
