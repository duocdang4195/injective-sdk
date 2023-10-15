/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
function createBaseContractExecutionAuthorization() {
    return { grants: [] };
}
export const ContractExecutionAuthorization = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.grants) {
            ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractExecutionAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.grants.push(ContractGrant.decode(reader, reader.uint32()));
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
        return { grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map((e) => ContractGrant.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map((e) => e ? ContractGrant.toJSON(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        return obj;
    },
    create(base) {
        return ContractExecutionAuthorization.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseContractExecutionAuthorization();
        message.grants = ((_a = object.grants) === null || _a === void 0 ? void 0 : _a.map((e) => ContractGrant.fromPartial(e))) || [];
        return message;
    },
};
function createBaseContractMigrationAuthorization() {
    return { grants: [] };
}
export const ContractMigrationAuthorization = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.grants) {
            ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractMigrationAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.grants.push(ContractGrant.decode(reader, reader.uint32()));
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
        return { grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map((e) => ContractGrant.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map((e) => e ? ContractGrant.toJSON(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        return obj;
    },
    create(base) {
        return ContractMigrationAuthorization.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseContractMigrationAuthorization();
        message.grants = ((_a = object.grants) === null || _a === void 0 ? void 0 : _a.map((e) => ContractGrant.fromPartial(e))) || [];
        return message;
    },
};
function createBaseContractGrant() {
    return { contract: "", limit: undefined, filter: undefined };
}
export const ContractGrant = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        if (message.limit !== undefined) {
            Any.encode(message.limit, writer.uint32(18).fork()).ldelim();
        }
        if (message.filter !== undefined) {
            Any.encode(message.filter, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.contract = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.limit = Any.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.filter = Any.decode(reader, reader.uint32());
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
            contract: isSet(object.contract) ? String(object.contract) : "",
            limit: isSet(object.limit) ? Any.fromJSON(object.limit) : undefined,
            filter: isSet(object.filter) ? Any.fromJSON(object.filter) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.contract !== undefined && (obj.contract = message.contract);
        message.limit !== undefined && (obj.limit = message.limit ? Any.toJSON(message.limit) : undefined);
        message.filter !== undefined && (obj.filter = message.filter ? Any.toJSON(message.filter) : undefined);
        return obj;
    },
    create(base) {
        return ContractGrant.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseContractGrant();
        message.contract = (_a = object.contract) !== null && _a !== void 0 ? _a : "";
        message.limit = (object.limit !== undefined && object.limit !== null) ? Any.fromPartial(object.limit) : undefined;
        message.filter = (object.filter !== undefined && object.filter !== null)
            ? Any.fromPartial(object.filter)
            : undefined;
        return message;
    },
};
function createBaseMaxCallsLimit() {
    return { remaining: "0" };
}
export const MaxCallsLimit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.remaining !== "0") {
            writer.uint32(8).uint64(message.remaining);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMaxCallsLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.remaining = longToString(reader.uint64());
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
        return { remaining: isSet(object.remaining) ? String(object.remaining) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.remaining !== undefined && (obj.remaining = message.remaining);
        return obj;
    },
    create(base) {
        return MaxCallsLimit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMaxCallsLimit();
        message.remaining = (_a = object.remaining) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseMaxFundsLimit() {
    return { amounts: [] };
}
export const MaxFundsLimit = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.amounts) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMaxFundsLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.amounts.push(Coin.decode(reader, reader.uint32()));
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
        return { amounts: Array.isArray(object === null || object === void 0 ? void 0 : object.amounts) ? object.amounts.map((e) => Coin.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.amounts) {
            obj.amounts = message.amounts.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.amounts = [];
        }
        return obj;
    },
    create(base) {
        return MaxFundsLimit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMaxFundsLimit();
        message.amounts = ((_a = object.amounts) === null || _a === void 0 ? void 0 : _a.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCombinedLimit() {
    return { callsRemaining: "0", amounts: [] };
}
export const CombinedLimit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.callsRemaining !== "0") {
            writer.uint32(8).uint64(message.callsRemaining);
        }
        for (const v of message.amounts) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCombinedLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.callsRemaining = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.amounts.push(Coin.decode(reader, reader.uint32()));
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
            callsRemaining: isSet(object.callsRemaining) ? String(object.callsRemaining) : "0",
            amounts: Array.isArray(object === null || object === void 0 ? void 0 : object.amounts) ? object.amounts.map((e) => Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.callsRemaining !== undefined && (obj.callsRemaining = message.callsRemaining);
        if (message.amounts) {
            obj.amounts = message.amounts.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.amounts = [];
        }
        return obj;
    },
    create(base) {
        return CombinedLimit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCombinedLimit();
        message.callsRemaining = (_a = object.callsRemaining) !== null && _a !== void 0 ? _a : "0";
        message.amounts = ((_b = object.amounts) === null || _b === void 0 ? void 0 : _b.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAllowAllMessagesFilter() {
    return {};
}
export const AllowAllMessagesFilter = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllowAllMessagesFilter();
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
        return AllowAllMessagesFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseAllowAllMessagesFilter();
        return message;
    },
};
function createBaseAcceptedMessageKeysFilter() {
    return { keys: [] };
}
export const AcceptedMessageKeysFilter = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.keys) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAcceptedMessageKeysFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.keys.push(reader.string());
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
        return { keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map((e) => e);
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    create(base) {
        return AcceptedMessageKeysFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAcceptedMessageKeysFilter();
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseAcceptedMessagesFilter() {
    return { messages: [] };
}
export const AcceptedMessagesFilter = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.messages) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAcceptedMessagesFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.messages.push(reader.bytes());
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
        return { messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map((e) => bytesFromBase64(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    create(base) {
        return AcceptedMessagesFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAcceptedMessagesFilter();
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
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
