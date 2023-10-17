"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.QueryAccountInfoDesc = exports.QueryAddressStringToBytesDesc = exports.QueryAddressBytesToStringDesc = exports.QueryBech32PrefixDesc = exports.QueryModuleAccountByNameDesc = exports.QueryModuleAccountsDesc = exports.QueryParamsDesc = exports.QueryAccountAddressByIDDesc = exports.QueryAccountDesc = exports.QueryAccountsDesc = exports.QueryDesc = exports.QueryClientImpl = exports.QueryAccountInfoResponse = exports.QueryAccountInfoRequest = exports.QueryAccountAddressByIDResponse = exports.QueryAccountAddressByIDRequest = exports.AddressStringToBytesResponse = exports.AddressStringToBytesRequest = exports.AddressBytesToStringResponse = exports.AddressBytesToStringRequest = exports.Bech32PrefixResponse = exports.Bech32PrefixRequest = exports.QueryModuleAccountByNameResponse = exports.QueryModuleAccountByNameRequest = exports.QueryModuleAccountsResponse = exports.QueryModuleAccountsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryAccountResponse = exports.QueryAccountRequest = exports.QueryAccountsResponse = exports.QueryAccountsRequest = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../../../google/protobuf/any");
const pagination_1 = require("../../base/query/v1beta1/pagination");
const auth_1 = require("./auth");
function createBaseQueryAccountsRequest() {
    return { pagination: undefined };
}
exports.QueryAccountsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        return { pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryAccountsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryAccountsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAccountsResponse() {
    return { accounts: [], pagination: undefined };
}
exports.QueryAccountsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accounts) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accounts.push(any_1.Any.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map((e) => any_1.Any.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryAccountsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAccountsResponse();
        message.accounts = ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map((e) => any_1.Any.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAccountRequest() {
    return { address: "" };
}
exports.QueryAccountRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.QueryAccountRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.QueryAccountResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.account !== undefined) {
            any_1.Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.account = any_1.Any.decode(reader, reader.uint32());
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
        return { account: isSet(object.account) ? any_1.Any.fromJSON(object.account) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account ? any_1.Any.toJSON(message.account) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryAccountResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryAccountResponse();
        message.account = (object.account !== undefined && object.account !== null)
            ? any_1.Any.fromPartial(object.account)
            : undefined;
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.QueryParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            auth_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = auth_1.Params.decode(reader, reader.uint32());
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
        return { params: isSet(object.params) ? auth_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? auth_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? auth_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryModuleAccountsRequest() {
    return {};
}
exports.QueryModuleAccountsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.QueryModuleAccountsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryModuleAccountsRequest();
        return message;
    },
};
function createBaseQueryModuleAccountsResponse() {
    return { accounts: [] };
}
exports.QueryModuleAccountsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accounts) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accounts.push(any_1.Any.decode(reader, reader.uint32()));
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
        return { accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map((e) => any_1.Any.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryModuleAccountsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryModuleAccountsResponse();
        message.accounts = ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map((e) => any_1.Any.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryModuleAccountByNameRequest() {
    return { name: "" };
}
exports.QueryModuleAccountByNameRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.QueryModuleAccountByNameRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.QueryModuleAccountByNameResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.account !== undefined) {
            any_1.Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountByNameResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.account = any_1.Any.decode(reader, reader.uint32());
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
        return { account: isSet(object.account) ? any_1.Any.fromJSON(object.account) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account ? any_1.Any.toJSON(message.account) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryModuleAccountByNameResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryModuleAccountByNameResponse();
        message.account = (object.account !== undefined && object.account !== null)
            ? any_1.Any.fromPartial(object.account)
            : undefined;
        return message;
    },
};
function createBaseBech32PrefixRequest() {
    return {};
}
exports.Bech32PrefixRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.Bech32PrefixRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseBech32PrefixRequest();
        return message;
    },
};
function createBaseBech32PrefixResponse() {
    return { bech32Prefix: "" };
}
exports.Bech32PrefixResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bech32Prefix !== "") {
            writer.uint32(10).string(message.bech32Prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.Bech32PrefixResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.AddressBytesToStringRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressBytes.length !== 0) {
            writer.uint32(10).bytes(message.addressBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.AddressBytesToStringRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.AddressBytesToStringResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressString !== "") {
            writer.uint32(10).string(message.addressString);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.AddressBytesToStringResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.AddressStringToBytesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressString !== "") {
            writer.uint32(10).string(message.addressString);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.AddressStringToBytesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.AddressStringToBytesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressBytes.length !== 0) {
            writer.uint32(10).bytes(message.addressBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.AddressStringToBytesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.QueryAccountAddressByIDRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(8).int64(message.id);
        }
        if (message.accountId !== "0") {
            writer.uint32(16).uint64(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.QueryAccountAddressByIDRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.QueryAccountAddressByIDResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.QueryAccountAddressByIDResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.QueryAccountInfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.QueryAccountInfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.QueryAccountInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.info !== undefined) {
            auth_1.BaseAccount.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.info = auth_1.BaseAccount.decode(reader, reader.uint32());
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
        return { info: isSet(object.info) ? auth_1.BaseAccount.fromJSON(object.info) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? auth_1.BaseAccount.toJSON(message.info) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryAccountInfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryAccountInfoResponse();
        message.info = (object.info !== undefined && object.info !== null)
            ? auth_1.BaseAccount.fromPartial(object.info)
            : undefined;
        return message;
    },
};
class QueryClientImpl {
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
        return this.rpc.unary(exports.QueryAccountsDesc, exports.QueryAccountsRequest.fromPartial(request), metadata);
    }
    Account(request, metadata) {
        return this.rpc.unary(exports.QueryAccountDesc, exports.QueryAccountRequest.fromPartial(request), metadata);
    }
    AccountAddressByID(request, metadata) {
        return this.rpc.unary(exports.QueryAccountAddressByIDDesc, exports.QueryAccountAddressByIDRequest.fromPartial(request), metadata);
    }
    Params(request, metadata) {
        return this.rpc.unary(exports.QueryParamsDesc, exports.QueryParamsRequest.fromPartial(request), metadata);
    }
    ModuleAccounts(request, metadata) {
        return this.rpc.unary(exports.QueryModuleAccountsDesc, exports.QueryModuleAccountsRequest.fromPartial(request), metadata);
    }
    ModuleAccountByName(request, metadata) {
        return this.rpc.unary(exports.QueryModuleAccountByNameDesc, exports.QueryModuleAccountByNameRequest.fromPartial(request), metadata);
    }
    Bech32Prefix(request, metadata) {
        return this.rpc.unary(exports.QueryBech32PrefixDesc, exports.Bech32PrefixRequest.fromPartial(request), metadata);
    }
    AddressBytesToString(request, metadata) {
        return this.rpc.unary(exports.QueryAddressBytesToStringDesc, exports.AddressBytesToStringRequest.fromPartial(request), metadata);
    }
    AddressStringToBytes(request, metadata) {
        return this.rpc.unary(exports.QueryAddressStringToBytesDesc, exports.AddressStringToBytesRequest.fromPartial(request), metadata);
    }
    AccountInfo(request, metadata) {
        return this.rpc.unary(exports.QueryAccountInfoDesc, exports.QueryAccountInfoRequest.fromPartial(request), metadata);
    }
}
exports.QueryClientImpl = QueryClientImpl;
exports.QueryDesc = { serviceName: "cosmos.auth.v1beta1.Query" };
exports.QueryAccountsDesc = {
    methodName: "Accounts",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryAccountsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryAccountsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryAccountDesc = {
    methodName: "Account",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryAccountRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryAccountResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryAccountAddressByIDDesc = {
    methodName: "AccountAddressByID",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryAccountAddressByIDRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryAccountAddressByIDResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryParamsDesc = {
    methodName: "Params",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryParamsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryParamsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryModuleAccountsDesc = {
    methodName: "ModuleAccounts",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryModuleAccountsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryModuleAccountsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryModuleAccountByNameDesc = {
    methodName: "ModuleAccountByName",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryModuleAccountByNameRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryModuleAccountByNameResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryBech32PrefixDesc = {
    methodName: "Bech32Prefix",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.Bech32PrefixRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.Bech32PrefixResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryAddressBytesToStringDesc = {
    methodName: "AddressBytesToString",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.AddressBytesToStringRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.AddressBytesToStringResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryAddressStringToBytesDesc = {
    methodName: "AddressStringToBytes",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.AddressStringToBytesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.AddressStringToBytesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryAccountInfoDesc = {
    methodName: "AccountInfo",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryAccountInfoRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryAccountInfoResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
class GrpcWebImpl {
    constructor(host, options) {
        this.host = host;
        this.options = options;
    }
    unary(methodDesc, _request, metadata) {
        var _a;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new browser_headers_1.BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new Promise((resolve, reject) => {
            grpc_web_1.grpc.unary(methodDesc, {
                request,
                host: this.host,
                metadata: maybeCombinedMetadata,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (response) {
                    if (response.status === grpc_web_1.grpc.Code.OK) {
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
exports.GrpcWebImpl = GrpcWebImpl;
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
class GrpcWebError extends tsProtoGlobalThis.Error {
    constructor(message, code, metadata) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}
exports.GrpcWebError = GrpcWebError;
