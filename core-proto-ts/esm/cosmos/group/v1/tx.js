/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { MemberRequest, proposalExecutorResultFromJSON, proposalExecutorResultToJSON, voteOptionFromJSON, voteOptionToJSON, } from "./types";
/** Since: cosmos-sdk 0.46 */
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export var Exec;
(function (Exec) {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    Exec[Exec["EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    Exec[Exec["EXEC_TRY"] = 1] = "EXEC_TRY";
    Exec[Exec["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Exec || (Exec = {}));
export function execFromJSON(object) {
    switch (object) {
        case 0:
        case "EXEC_UNSPECIFIED":
            return Exec.EXEC_UNSPECIFIED;
        case 1:
        case "EXEC_TRY":
            return Exec.EXEC_TRY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Exec.UNRECOGNIZED;
    }
}
export function execToJSON(object) {
    switch (object) {
        case Exec.EXEC_UNSPECIFIED:
            return "EXEC_UNSPECIFIED";
        case Exec.EXEC_TRY:
            return "EXEC_TRY";
        case Exec.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgCreateGroup() {
    return { admin: "", members: [], metadata: "" };
}
export const MsgCreateGroup = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.members.push(MemberRequest.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map((e) => MemberRequest.fromJSON(e)) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.members) {
            obj.members = message.members.map((e) => e ? MemberRequest.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    create(base) {
        return MsgCreateGroup.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgCreateGroup();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.members = ((_b = object.members) === null || _b === void 0 ? void 0 : _b.map((e) => MemberRequest.fromPartial(e))) || [];
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgCreateGroupResponse() {
    return { groupId: "0" };
}
export const MsgCreateGroupResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.groupId !== "0") {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.groupId = longToString(reader.uint64());
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
        return { groupId: isSet(object.groupId) ? String(object.groupId) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        return obj;
    },
    create(base) {
        return MsgCreateGroupResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateGroupResponse();
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseMsgUpdateGroupMembers() {
    return { admin: "", groupId: "0", memberUpdates: [] };
}
export const MsgUpdateGroupMembers = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== "0") {
            writer.uint32(16).uint64(message.groupId);
        }
        for (const v of message.memberUpdates) {
            MemberRequest.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMembers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.groupId = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.memberUpdates.push(MemberRequest.decode(reader, reader.uint32()));
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? String(object.groupId) : "0",
            memberUpdates: Array.isArray(object === null || object === void 0 ? void 0 : object.memberUpdates)
                ? object.memberUpdates.map((e) => MemberRequest.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupId !== undefined && (obj.groupId = message.groupId);
        if (message.memberUpdates) {
            obj.memberUpdates = message.memberUpdates.map((e) => e ? MemberRequest.toJSON(e) : undefined);
        }
        else {
            obj.memberUpdates = [];
        }
        return obj;
    },
    create(base) {
        return MsgUpdateGroupMembers.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgUpdateGroupMembers();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.groupId = (_b = object.groupId) !== null && _b !== void 0 ? _b : "0";
        message.memberUpdates = ((_c = object.memberUpdates) === null || _c === void 0 ? void 0 : _c.map((e) => MemberRequest.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgUpdateGroupMembersResponse() {
    return {};
}
export const MsgUpdateGroupMembersResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMembersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgUpdateGroupMembersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupMembersResponse();
        return message;
    },
};
function createBaseMsgUpdateGroupAdmin() {
    return { admin: "", groupId: "0", newAdmin: "" };
}
export const MsgUpdateGroupAdmin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== "0") {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.groupId = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.newAdmin = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? String(object.groupId) : "0",
            newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
        return obj;
    },
    create(base) {
        return MsgUpdateGroupAdmin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgUpdateGroupAdmin();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.groupId = (_b = object.groupId) !== null && _b !== void 0 ? _b : "0";
        message.newAdmin = (_c = object.newAdmin) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgUpdateGroupAdminResponse() {
    return {};
}
export const MsgUpdateGroupAdminResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgUpdateGroupAdminResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupAdminResponse();
        return message;
    },
};
function createBaseMsgUpdateGroupMetadata() {
    return { admin: "", groupId: "0", metadata: "" };
}
export const MsgUpdateGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== "0") {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.groupId = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? String(object.groupId) : "0",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    create(base) {
        return MsgUpdateGroupMetadata.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgUpdateGroupMetadata();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.groupId = (_b = object.groupId) !== null && _b !== void 0 ? _b : "0";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgUpdateGroupMetadataResponse() {
    return {};
}
export const MsgUpdateGroupMetadataResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgUpdateGroupMetadataResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupMetadataResponse();
        return message;
    },
};
function createBaseMsgCreateGroupPolicy() {
    return { admin: "", groupId: "0", metadata: "", decisionPolicy: undefined };
}
export const MsgCreateGroupPolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== "0") {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.decisionPolicy !== undefined) {
            Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.groupId = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.metadata = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.decisionPolicy = Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? String(object.groupId) : "0",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.decisionPolicy !== undefined &&
            (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateGroupPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgCreateGroupPolicy();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.groupId = (_b = object.groupId) !== null && _b !== void 0 ? _b : "0";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        message.decisionPolicy = (object.decisionPolicy !== undefined && object.decisionPolicy !== null)
            ? Any.fromPartial(object.decisionPolicy)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateGroupPolicyResponse() {
    return { address: "" };
}
export const MsgCreateGroupPolicyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
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
        return { address: isSet(object.address) ? String(object.address) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    create(base) {
        return MsgCreateGroupPolicyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateGroupPolicyResponse();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyAdmin() {
    return { admin: "", groupPolicyAddress: "", newAdmin: "" };
}
export const MsgUpdateGroupPolicyAdmin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groupPolicyAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.newAdmin = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
            newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
        message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
        return obj;
    },
    create(base) {
        return MsgUpdateGroupPolicyAdmin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.groupPolicyAddress = (_b = object.groupPolicyAddress) !== null && _b !== void 0 ? _b : "";
        message.newAdmin = (_c = object.newAdmin) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyAdminResponse() {
    return {};
}
export const MsgUpdateGroupPolicyAdminResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgUpdateGroupPolicyAdminResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
        return message;
    },
};
function createBaseMsgCreateGroupWithPolicy() {
    return {
        admin: "",
        members: [],
        groupMetadata: "",
        groupPolicyMetadata: "",
        groupPolicyAsAdmin: false,
        decisionPolicy: undefined,
    };
}
export const MsgCreateGroupWithPolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.groupMetadata !== "") {
            writer.uint32(26).string(message.groupMetadata);
        }
        if (message.groupPolicyMetadata !== "") {
            writer.uint32(34).string(message.groupPolicyMetadata);
        }
        if (message.groupPolicyAsAdmin === true) {
            writer.uint32(40).bool(message.groupPolicyAsAdmin);
        }
        if (message.decisionPolicy !== undefined) {
            Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupWithPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.members.push(MemberRequest.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.groupMetadata = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.groupPolicyMetadata = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.groupPolicyAsAdmin = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.decisionPolicy = Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map((e) => MemberRequest.fromJSON(e)) : [],
            groupMetadata: isSet(object.groupMetadata) ? String(object.groupMetadata) : "",
            groupPolicyMetadata: isSet(object.groupPolicyMetadata) ? String(object.groupPolicyMetadata) : "",
            groupPolicyAsAdmin: isSet(object.groupPolicyAsAdmin) ? Boolean(object.groupPolicyAsAdmin) : false,
            decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.members) {
            obj.members = message.members.map((e) => e ? MemberRequest.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.groupMetadata !== undefined && (obj.groupMetadata = message.groupMetadata);
        message.groupPolicyMetadata !== undefined && (obj.groupPolicyMetadata = message.groupPolicyMetadata);
        message.groupPolicyAsAdmin !== undefined && (obj.groupPolicyAsAdmin = message.groupPolicyAsAdmin);
        message.decisionPolicy !== undefined &&
            (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateGroupWithPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgCreateGroupWithPolicy();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.members = ((_b = object.members) === null || _b === void 0 ? void 0 : _b.map((e) => MemberRequest.fromPartial(e))) || [];
        message.groupMetadata = (_c = object.groupMetadata) !== null && _c !== void 0 ? _c : "";
        message.groupPolicyMetadata = (_d = object.groupPolicyMetadata) !== null && _d !== void 0 ? _d : "";
        message.groupPolicyAsAdmin = (_e = object.groupPolicyAsAdmin) !== null && _e !== void 0 ? _e : false;
        message.decisionPolicy = (object.decisionPolicy !== undefined && object.decisionPolicy !== null)
            ? Any.fromPartial(object.decisionPolicy)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateGroupWithPolicyResponse() {
    return { groupId: "0", groupPolicyAddress: "" };
}
export const MsgCreateGroupWithPolicyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.groupId !== "0") {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupWithPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.groupId = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groupPolicyAddress = reader.string();
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
            groupId: isSet(object.groupId) ? String(object.groupId) : "0",
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
        return obj;
    },
    create(base) {
        return MsgCreateGroupWithPolicyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgCreateGroupWithPolicyResponse();
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "0";
        message.groupPolicyAddress = (_b = object.groupPolicyAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyDecisionPolicy() {
    return { admin: "", groupPolicyAddress: "", decisionPolicy: undefined };
}
export const MsgUpdateGroupPolicyDecisionPolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        if (message.decisionPolicy !== undefined) {
            Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groupPolicyAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.decisionPolicy = Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
            decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
        message.decisionPolicy !== undefined &&
            (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
        return obj;
    },
    create(base) {
        return MsgUpdateGroupPolicyDecisionPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.groupPolicyAddress = (_b = object.groupPolicyAddress) !== null && _b !== void 0 ? _b : "";
        message.decisionPolicy = (object.decisionPolicy !== undefined && object.decisionPolicy !== null)
            ? Any.fromPartial(object.decisionPolicy)
            : undefined;
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse() {
    return {};
}
export const MsgUpdateGroupPolicyDecisionPolicyResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgUpdateGroupPolicyDecisionPolicyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyMetadata() {
    return { admin: "", groupPolicyAddress: "", metadata: "" };
}
export const MsgUpdateGroupPolicyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groupPolicyAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    create(base) {
        return MsgUpdateGroupPolicyMetadata.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.groupPolicyAddress = (_b = object.groupPolicyAddress) !== null && _b !== void 0 ? _b : "";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyMetadataResponse() {
    return {};
}
export const MsgUpdateGroupPolicyMetadataResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgUpdateGroupPolicyMetadataResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
        return message;
    },
};
function createBaseMsgSubmitProposal() {
    return { groupPolicyAddress: "", proposers: [], metadata: "", messages: [], exec: 0, title: "", summary: "" };
}
export const MsgSubmitProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.groupPolicyAddress !== "") {
            writer.uint32(10).string(message.groupPolicyAddress);
        }
        for (const v of message.proposers) {
            writer.uint32(18).string(v);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        for (const v of message.messages) {
            Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        if (message.title !== "") {
            writer.uint32(50).string(message.title);
        }
        if (message.summary !== "") {
            writer.uint32(58).string(message.summary);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.groupPolicyAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proposers.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.metadata = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.messages.push(Any.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.exec = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.summary = reader.string();
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
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
            proposers: Array.isArray(object === null || object === void 0 ? void 0 : object.proposers) ? object.proposers.map((e) => String(e)) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map((e) => Any.fromJSON(e)) : [],
            exec: isSet(object.exec) ? execFromJSON(object.exec) : 0,
            title: isSet(object.title) ? String(object.title) : "",
            summary: isSet(object.summary) ? String(object.summary) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
        if (message.proposers) {
            obj.proposers = message.proposers.map((e) => e);
        }
        else {
            obj.proposers = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        if (message.messages) {
            obj.messages = message.messages.map((e) => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        message.exec !== undefined && (obj.exec = execToJSON(message.exec));
        message.title !== undefined && (obj.title = message.title);
        message.summary !== undefined && (obj.summary = message.summary);
        return obj;
    },
    create(base) {
        return MsgSubmitProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseMsgSubmitProposal();
        message.groupPolicyAddress = (_a = object.groupPolicyAddress) !== null && _a !== void 0 ? _a : "";
        message.proposers = ((_b = object.proposers) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        message.messages = ((_d = object.messages) === null || _d === void 0 ? void 0 : _d.map((e) => Any.fromPartial(e))) || [];
        message.exec = (_e = object.exec) !== null && _e !== void 0 ? _e : 0;
        message.title = (_f = object.title) !== null && _f !== void 0 ? _f : "";
        message.summary = (_g = object.summary) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseMsgSubmitProposalResponse() {
    return { proposalId: "0" };
}
export const MsgSubmitProposalResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposalId !== "0") {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.proposalId = longToString(reader.uint64());
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
        return { proposalId: isSet(object.proposalId) ? String(object.proposalId) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = message.proposalId);
        return obj;
    },
    create(base) {
        return MsgSubmitProposalResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgSubmitProposalResponse();
        message.proposalId = (_a = object.proposalId) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseMsgWithdrawProposal() {
    return { proposalId: "0", address: "" };
}
export const MsgWithdrawProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposalId !== "0") {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.proposalId = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.address = reader.string();
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
            proposalId: isSet(object.proposalId) ? String(object.proposalId) : "0",
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = message.proposalId);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    create(base) {
        return MsgWithdrawProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgWithdrawProposal();
        message.proposalId = (_a = object.proposalId) !== null && _a !== void 0 ? _a : "0";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgWithdrawProposalResponse() {
    return {};
}
export const MsgWithdrawProposalResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgWithdrawProposalResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawProposalResponse();
        return message;
    },
};
function createBaseMsgVote() {
    return { proposalId: "0", voter: "", option: 0, metadata: "", exec: 0 };
}
export const MsgVote = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposalId !== "0") {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.proposalId = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.voter = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.option = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.metadata = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.exec = reader.int32();
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
            proposalId: isSet(object.proposalId) ? String(object.proposalId) : "0",
            voter: isSet(object.voter) ? String(object.voter) : "",
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            exec: isSet(object.exec) ? execFromJSON(object.exec) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = message.proposalId);
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.exec !== undefined && (obj.exec = execToJSON(message.exec));
        return obj;
    },
    create(base) {
        return MsgVote.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgVote();
        message.proposalId = (_a = object.proposalId) !== null && _a !== void 0 ? _a : "0";
        message.voter = (_b = object.voter) !== null && _b !== void 0 ? _b : "";
        message.option = (_c = object.option) !== null && _c !== void 0 ? _c : 0;
        message.metadata = (_d = object.metadata) !== null && _d !== void 0 ? _d : "";
        message.exec = (_e = object.exec) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseMsgVoteResponse() {
    return {};
}
export const MsgVoteResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgVoteResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
};
function createBaseMsgExec() {
    return { proposalId: "0", executor: "" };
}
export const MsgExec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposalId !== "0") {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.executor !== "") {
            writer.uint32(18).string(message.executor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.proposalId = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.executor = reader.string();
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
            proposalId: isSet(object.proposalId) ? String(object.proposalId) : "0",
            executor: isSet(object.executor) ? String(object.executor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = message.proposalId);
        message.executor !== undefined && (obj.executor = message.executor);
        return obj;
    },
    create(base) {
        return MsgExec.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgExec();
        message.proposalId = (_a = object.proposalId) !== null && _a !== void 0 ? _a : "0";
        message.executor = (_b = object.executor) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgExecResponse() {
    return { result: 0 };
}
export const MsgExecResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(16).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.result = reader.int32();
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
        return { result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = proposalExecutorResultToJSON(message.result));
        return obj;
    },
    create(base) {
        return MsgExecResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgExecResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseMsgLeaveGroup() {
    return { address: "", groupId: "0" };
}
export const MsgLeaveGroup = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.groupId !== "0") {
            writer.uint32(16).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLeaveGroup();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.groupId = longToString(reader.uint64());
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
            groupId: isSet(object.groupId) ? String(object.groupId) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.groupId !== undefined && (obj.groupId = message.groupId);
        return obj;
    },
    create(base) {
        return MsgLeaveGroup.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgLeaveGroup();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.groupId = (_b = object.groupId) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseMsgLeaveGroupResponse() {
    return {};
}
export const MsgLeaveGroupResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLeaveGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgLeaveGroupResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgLeaveGroupResponse();
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateGroup = this.CreateGroup.bind(this);
        this.UpdateGroupMembers = this.UpdateGroupMembers.bind(this);
        this.UpdateGroupAdmin = this.UpdateGroupAdmin.bind(this);
        this.UpdateGroupMetadata = this.UpdateGroupMetadata.bind(this);
        this.CreateGroupPolicy = this.CreateGroupPolicy.bind(this);
        this.CreateGroupWithPolicy = this.CreateGroupWithPolicy.bind(this);
        this.UpdateGroupPolicyAdmin = this.UpdateGroupPolicyAdmin.bind(this);
        this.UpdateGroupPolicyDecisionPolicy = this.UpdateGroupPolicyDecisionPolicy.bind(this);
        this.UpdateGroupPolicyMetadata = this.UpdateGroupPolicyMetadata.bind(this);
        this.SubmitProposal = this.SubmitProposal.bind(this);
        this.WithdrawProposal = this.WithdrawProposal.bind(this);
        this.Vote = this.Vote.bind(this);
        this.Exec = this.Exec.bind(this);
        this.LeaveGroup = this.LeaveGroup.bind(this);
    }
    CreateGroup(request, metadata) {
        return this.rpc.unary(MsgCreateGroupDesc, MsgCreateGroup.fromPartial(request), metadata);
    }
    UpdateGroupMembers(request, metadata) {
        return this.rpc.unary(MsgUpdateGroupMembersDesc, MsgUpdateGroupMembers.fromPartial(request), metadata);
    }
    UpdateGroupAdmin(request, metadata) {
        return this.rpc.unary(MsgUpdateGroupAdminDesc, MsgUpdateGroupAdmin.fromPartial(request), metadata);
    }
    UpdateGroupMetadata(request, metadata) {
        return this.rpc.unary(MsgUpdateGroupMetadataDesc, MsgUpdateGroupMetadata.fromPartial(request), metadata);
    }
    CreateGroupPolicy(request, metadata) {
        return this.rpc.unary(MsgCreateGroupPolicyDesc, MsgCreateGroupPolicy.fromPartial(request), metadata);
    }
    CreateGroupWithPolicy(request, metadata) {
        return this.rpc.unary(MsgCreateGroupWithPolicyDesc, MsgCreateGroupWithPolicy.fromPartial(request), metadata);
    }
    UpdateGroupPolicyAdmin(request, metadata) {
        return this.rpc.unary(MsgUpdateGroupPolicyAdminDesc, MsgUpdateGroupPolicyAdmin.fromPartial(request), metadata);
    }
    UpdateGroupPolicyDecisionPolicy(request, metadata) {
        return this.rpc.unary(MsgUpdateGroupPolicyDecisionPolicyDesc, MsgUpdateGroupPolicyDecisionPolicy.fromPartial(request), metadata);
    }
    UpdateGroupPolicyMetadata(request, metadata) {
        return this.rpc.unary(MsgUpdateGroupPolicyMetadataDesc, MsgUpdateGroupPolicyMetadata.fromPartial(request), metadata);
    }
    SubmitProposal(request, metadata) {
        return this.rpc.unary(MsgSubmitProposalDesc, MsgSubmitProposal.fromPartial(request), metadata);
    }
    WithdrawProposal(request, metadata) {
        return this.rpc.unary(MsgWithdrawProposalDesc, MsgWithdrawProposal.fromPartial(request), metadata);
    }
    Vote(request, metadata) {
        return this.rpc.unary(MsgVoteDesc, MsgVote.fromPartial(request), metadata);
    }
    Exec(request, metadata) {
        return this.rpc.unary(MsgExecDesc, MsgExec.fromPartial(request), metadata);
    }
    LeaveGroup(request, metadata) {
        return this.rpc.unary(MsgLeaveGroupDesc, MsgLeaveGroup.fromPartial(request), metadata);
    }
}
export const MsgDesc = { serviceName: "cosmos.group.v1.Msg" };
export const MsgCreateGroupDesc = {
    methodName: "CreateGroup",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgCreateGroup.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgCreateGroupResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgUpdateGroupMembersDesc = {
    methodName: "UpdateGroupMembers",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgUpdateGroupMembers.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgUpdateGroupMembersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgUpdateGroupAdminDesc = {
    methodName: "UpdateGroupAdmin",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgUpdateGroupAdmin.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgUpdateGroupAdminResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgUpdateGroupMetadataDesc = {
    methodName: "UpdateGroupMetadata",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgUpdateGroupMetadata.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgUpdateGroupMetadataResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgCreateGroupPolicyDesc = {
    methodName: "CreateGroupPolicy",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgCreateGroupPolicy.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgCreateGroupPolicyResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgCreateGroupWithPolicyDesc = {
    methodName: "CreateGroupWithPolicy",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgCreateGroupWithPolicy.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgCreateGroupWithPolicyResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgUpdateGroupPolicyAdminDesc = {
    methodName: "UpdateGroupPolicyAdmin",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgUpdateGroupPolicyAdmin.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgUpdateGroupPolicyAdminResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgUpdateGroupPolicyDecisionPolicyDesc = {
    methodName: "UpdateGroupPolicyDecisionPolicy",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgUpdateGroupPolicyDecisionPolicy.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgUpdateGroupPolicyDecisionPolicyResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgUpdateGroupPolicyMetadataDesc = {
    methodName: "UpdateGroupPolicyMetadata",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgUpdateGroupPolicyMetadata.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgUpdateGroupPolicyMetadataResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgSubmitProposalDesc = {
    methodName: "SubmitProposal",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgSubmitProposal.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgSubmitProposalResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgWithdrawProposalDesc = {
    methodName: "WithdrawProposal",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgWithdrawProposal.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgWithdrawProposalResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgVoteDesc = {
    methodName: "Vote",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgVote.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgVoteResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgExecDesc = {
    methodName: "Exec",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgExec.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgExecResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgLeaveGroupDesc = {
    methodName: "LeaveGroup",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgLeaveGroup.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgLeaveGroupResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export class GrpcWebImpl {
    constructor(host, options) {
        this.host = host;
        this.options = options;
    }
    unary(methodDesc, _request, metadata) {
        var _a;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new Promise((resolve, reject) => {
            grpc.unary(methodDesc, {
                request,
                host: this.host,
                metadata: maybeCombinedMetadata,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (response) {
                    if (response.status === grpc.Code.OK) {
                        resolve(response.message.toObject());
                    }
                    else {
                        const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
                        reject(err);
                    }
                },
            });
        });
    }
}
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
export class GrpcWebError extends tsProtoGlobalThis.Error {
    constructor(message, code, metadata) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}
