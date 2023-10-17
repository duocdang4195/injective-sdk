/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { BaseAccount, Params } from "./auth";
function createBaseQueryAccountsRequest() {
    return { pagination: undefined };
}
export const QueryAccountsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryAccountsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryAccountsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAccountsResponse() {
    return { accounts: [], pagination: undefined };
}
export const QueryAccountsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accounts) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accounts.push(Any.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map((e) => Any.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryAccountsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAccountsResponse();
        message.accounts = ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map((e) => Any.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAccountRequest() {
    return { address: "" };
}
export const QueryAccountRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountRequest();
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
        return QueryAccountRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAccountRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryAccountResponse() {
    return { account: undefined };
}
export const QueryAccountResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== undefined) {
            Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.account = Any.decode(reader, reader.uint32());
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
        return { account: isSet(object.account) ? Any.fromJSON(object.account) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account ? Any.toJSON(message.account) : undefined);
        return obj;
    },
    create(base) {
        return QueryAccountResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryAccountResponse();
        message.account = (object.account !== undefined && object.account !== null)
            ? Any.fromPartial(object.account)
            : undefined;
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        return QueryParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return QueryParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryModuleAccountsRequest() {
    return {};
}
export const QueryModuleAccountsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountsRequest();
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
        return QueryModuleAccountsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryModuleAccountsRequest();
        return message;
    },
};
function createBaseQueryModuleAccountsResponse() {
    return { accounts: [] };
}
export const QueryModuleAccountsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accounts) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accounts.push(Any.decode(reader, reader.uint32()));
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
        return { accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map((e) => Any.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    create(base) {
        return QueryModuleAccountsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryModuleAccountsResponse();
        message.accounts = ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map((e) => Any.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryModuleAccountByNameRequest() {
    return { name: "" };
}
export const QueryModuleAccountByNameRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountByNameRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
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
        return { name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    create(base) {
        return QueryModuleAccountByNameRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryModuleAccountByNameRequest();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryModuleAccountByNameResponse() {
    return { account: undefined };
}
export const QueryModuleAccountByNameResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== undefined) {
            Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountByNameResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.account = Any.decode(reader, reader.uint32());
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
        return { account: isSet(object.account) ? Any.fromJSON(object.account) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account ? Any.toJSON(message.account) : undefined);
        return obj;
    },
    create(base) {
        return QueryModuleAccountByNameResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryModuleAccountByNameResponse();
        message.account = (object.account !== undefined && object.account !== null)
            ? Any.fromPartial(object.account)
            : undefined;
        return message;
    },
};
function createBaseBech32PrefixRequest() {
    return {};
}
export const Bech32PrefixRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBech32PrefixRequest();
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
        return Bech32PrefixRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseBech32PrefixRequest();
        return message;
    },
};
function createBaseBech32PrefixResponse() {
    return { bech32Prefix: "" };
}
export const Bech32PrefixResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bech32Prefix !== "") {
            writer.uint32(10).string(message.bech32Prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBech32PrefixResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.bech32Prefix = reader.string();
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
        return { bech32Prefix: isSet(object.bech32Prefix) ? String(object.bech32Prefix) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.bech32Prefix !== undefined && (obj.bech32Prefix = message.bech32Prefix);
        return obj;
    },
    create(base) {
        return Bech32PrefixResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBech32PrefixResponse();
        message.bech32Prefix = (_a = object.bech32Prefix) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAddressBytesToStringRequest() {
    return { addressBytes: new Uint8Array() };
}
export const AddressBytesToStringRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.addressBytes.length !== 0) {
            writer.uint32(10).bytes(message.addressBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressBytesToStringRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.addressBytes = reader.bytes();
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
        return { addressBytes: isSet(object.addressBytes) ? bytesFromBase64(object.addressBytes) : new Uint8Array() };
    },
    toJSON(message) {
        const obj = {};
        message.addressBytes !== undefined &&
            (obj.addressBytes = base64FromBytes(message.addressBytes !== undefined ? message.addressBytes : new Uint8Array()));
        return obj;
    },
    create(base) {
        return AddressBytesToStringRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAddressBytesToStringRequest();
        message.addressBytes = (_a = object.addressBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseAddressBytesToStringResponse() {
    return { addressString: "" };
}
export const AddressBytesToStringResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.addressString !== "") {
            writer.uint32(10).string(message.addressString);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressBytesToStringResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.addressString = reader.string();
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
        return { addressString: isSet(object.addressString) ? String(object.addressString) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.addressString !== undefined && (obj.addressString = message.addressString);
        return obj;
    },
    create(base) {
        return AddressBytesToStringResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAddressBytesToStringResponse();
        message.addressString = (_a = object.addressString) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAddressStringToBytesRequest() {
    return { addressString: "" };
}
export const AddressStringToBytesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.addressString !== "") {
            writer.uint32(10).string(message.addressString);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressStringToBytesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.addressString = reader.string();
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
        return { addressString: isSet(object.addressString) ? String(object.addressString) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.addressString !== undefined && (obj.addressString = message.addressString);
        return obj;
    },
    create(base) {
        return AddressStringToBytesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAddressStringToBytesRequest();
        message.addressString = (_a = object.addressString) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAddressStringToBytesResponse() {
    return { addressBytes: new Uint8Array() };
}
export const AddressStringToBytesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.addressBytes.length !== 0) {
            writer.uint32(10).bytes(message.addressBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressStringToBytesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.addressBytes = reader.bytes();
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
        return { addressBytes: isSet(object.addressBytes) ? bytesFromBase64(object.addressBytes) : new Uint8Array() };
    },
    toJSON(message) {
        const obj = {};
        message.addressBytes !== undefined &&
            (obj.addressBytes = base64FromBytes(message.addressBytes !== undefined ? message.addressBytes : new Uint8Array()));
        return obj;
    },
    create(base) {
        return AddressStringToBytesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAddressStringToBytesResponse();
        message.addressBytes = (_a = object.addressBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseQueryAccountAddressByIDRequest() {
    return { id: "0", accountId: "0" };
}
export const QueryAccountAddressByIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(8).int64(message.id);
        }
        if (message.accountId !== "0") {
            writer.uint32(16).uint64(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountAddressByIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.accountId = longToString(reader.uint64());
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
            id: isSet(object.id) ? String(object.id) : "0",
            accountId: isSet(object.accountId) ? String(object.accountId) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.accountId !== undefined && (obj.accountId = message.accountId);
        return obj;
    },
    create(base) {
        return QueryAccountAddressByIDRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryAccountAddressByIDRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.accountId = (_b = object.accountId) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseQueryAccountAddressByIDResponse() {
    return { accountAddress: "" };
}
export const QueryAccountAddressByIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountAddressByIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accountAddress = reader.string();
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
        return { accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return QueryAccountAddressByIDResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAccountAddressByIDResponse();
        message.accountAddress = (_a = object.accountAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryAccountInfoRequest() {
    return { address: "" };
}
export const QueryAccountInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountInfoRequest();
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
        return QueryAccountInfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAccountInfoRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryAccountInfoResponse() {
    return { info: undefined };
}
export const QueryAccountInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.info !== undefined) {
            BaseAccount.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.info = BaseAccount.decode(reader, reader.uint32());
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
        return { info: isSet(object.info) ? BaseAccount.fromJSON(object.info) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? BaseAccount.toJSON(message.info) : undefined);
        return obj;
    },
    create(base) {
        return QueryAccountInfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryAccountInfoResponse();
        message.info = (object.info !== undefined && object.info !== null)
            ? BaseAccount.fromPartial(object.info)
            : undefined;
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Accounts = this.Accounts.bind(this);
        this.Account = this.Account.bind(this);
        this.AccountAddressByID = this.AccountAddressByID.bind(this);
        this.Params = this.Params.bind(this);
        this.ModuleAccounts = this.ModuleAccounts.bind(this);
        this.ModuleAccountByName = this.ModuleAccountByName.bind(this);
        this.Bech32Prefix = this.Bech32Prefix.bind(this);
        this.AddressBytesToString = this.AddressBytesToString.bind(this);
        this.AddressStringToBytes = this.AddressStringToBytes.bind(this);
        this.AccountInfo = this.AccountInfo.bind(this);
    }
    Accounts(request, metadata) {
        return this.rpc.unary(QueryAccountsDesc, QueryAccountsRequest.fromPartial(request), metadata);
    }
    Account(request, metadata) {
        return this.rpc.unary(QueryAccountDesc, QueryAccountRequest.fromPartial(request), metadata);
    }
    AccountAddressByID(request, metadata) {
        return this.rpc.unary(QueryAccountAddressByIDDesc, QueryAccountAddressByIDRequest.fromPartial(request), metadata);
    }
    Params(request, metadata) {
        return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
    }
    ModuleAccounts(request, metadata) {
        return this.rpc.unary(QueryModuleAccountsDesc, QueryModuleAccountsRequest.fromPartial(request), metadata);
    }
    ModuleAccountByName(request, metadata) {
        return this.rpc.unary(QueryModuleAccountByNameDesc, QueryModuleAccountByNameRequest.fromPartial(request), metadata);
    }
    Bech32Prefix(request, metadata) {
        return this.rpc.unary(QueryBech32PrefixDesc, Bech32PrefixRequest.fromPartial(request), metadata);
    }
    AddressBytesToString(request, metadata) {
        return this.rpc.unary(QueryAddressBytesToStringDesc, AddressBytesToStringRequest.fromPartial(request), metadata);
    }
    AddressStringToBytes(request, metadata) {
        return this.rpc.unary(QueryAddressStringToBytesDesc, AddressStringToBytesRequest.fromPartial(request), metadata);
    }
    AccountInfo(request, metadata) {
        return this.rpc.unary(QueryAccountInfoDesc, QueryAccountInfoRequest.fromPartial(request), metadata);
    }
}
export const QueryDesc = { serviceName: "cosmos.auth.v1beta1.Query" };
export const QueryAccountsDesc = {
    methodName: "Accounts",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryAccountsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryAccountsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryAccountDesc = {
    methodName: "Account",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryAccountRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryAccountResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryAccountAddressByIDDesc = {
    methodName: "AccountAddressByID",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryAccountAddressByIDRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryAccountAddressByIDResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryParamsDesc = {
    methodName: "Params",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryParamsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryParamsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryModuleAccountsDesc = {
    methodName: "ModuleAccounts",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryModuleAccountsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryModuleAccountsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryModuleAccountByNameDesc = {
    methodName: "ModuleAccountByName",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryModuleAccountByNameRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryModuleAccountByNameResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryBech32PrefixDesc = {
    methodName: "Bech32Prefix",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return Bech32PrefixRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = Bech32PrefixResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryAddressBytesToStringDesc = {
    methodName: "AddressBytesToString",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return AddressBytesToStringRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = AddressBytesToStringResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryAddressStringToBytesDesc = {
    methodName: "AddressStringToBytes",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return AddressStringToBytesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = AddressStringToBytesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryAccountInfoDesc = {
    methodName: "AccountInfo",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryAccountInfoRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryAccountInfoResponse.decode(data);
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
export class GrpcWebError extends tsProtoGlobalThis.Error {
    constructor(message, code, metadata) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}
