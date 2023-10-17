"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryLastValsetRequestsDesc = exports.QueryValsetConfirmsByNonceDesc = exports.QueryValsetConfirmDesc = exports.QueryValsetRequestDesc = exports.QueryCurrentValsetDesc = exports.QueryParamsDesc = exports.QueryDesc = exports.QueryClientImpl = exports.MissingNoncesResponse = exports.MissingNoncesRequest = exports.QueryModuleStateResponse = exports.QueryModuleStateRequest = exports.QueryPendingSendToEthResponse = exports.QueryPendingSendToEth = exports.QueryDelegateKeysByOrchestratorAddressResponse = exports.QueryDelegateKeysByOrchestratorAddress = exports.QueryDelegateKeysByEthAddressResponse = exports.QueryDelegateKeysByEthAddress = exports.QueryDelegateKeysByValidatorAddressResponse = exports.QueryDelegateKeysByValidatorAddress = exports.QueryDenomToERC20Response = exports.QueryDenomToERC20Request = exports.QueryERC20ToDenomResponse = exports.QueryERC20ToDenomRequest = exports.QueryLastEventByAddrResponse = exports.QueryLastEventByAddrRequest = exports.QueryBatchConfirmsResponse = exports.QueryBatchConfirmsRequest = exports.QueryBatchRequestByNonceResponse = exports.QueryBatchRequestByNonceRequest = exports.QueryOutgoingTxBatchesResponse = exports.QueryOutgoingTxBatchesRequest = exports.QueryLastPendingBatchRequestByAddrResponse = exports.QueryLastPendingBatchRequestByAddrRequest = exports.QueryBatchFeeResponse = exports.QueryBatchFeeRequest = exports.QueryLastPendingValsetRequestByAddrResponse = exports.QueryLastPendingValsetRequestByAddrRequest = exports.QueryLastValsetRequestsResponse = exports.QueryLastValsetRequestsRequest = exports.QueryValsetConfirmsByNonceResponse = exports.QueryValsetConfirmsByNonceRequest = exports.QueryValsetConfirmResponse = exports.QueryValsetConfirmRequest = exports.QueryValsetRequestResponse = exports.QueryValsetRequestRequest = exports.QueryCurrentValsetResponse = exports.QueryCurrentValsetRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
exports.GrpcWebError = exports.GrpcWebImpl = exports.QueryMissingPeggoNoncesDesc = exports.QueryPeggyModuleStateDesc = exports.QueryGetDelegateKeyByOrchestratorDesc = exports.QueryGetDelegateKeyByEthDesc = exports.QueryGetDelegateKeyByValidatorDesc = exports.QueryDenomToERC20Desc = exports.QueryERC20ToDenomDesc = exports.QueryBatchConfirmsDesc = exports.QueryBatchRequestByNonceDesc = exports.QueryLastPendingBatchRequestByAddrDesc = exports.QueryOutgoingTxBatchesDesc = exports.QueryBatchFeesDesc = exports.QueryGetPendingSendToEthDesc = exports.QueryLastEventByAddrDesc = exports.QueryLastPendingValsetRequestByAddrDesc = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const batch_1 = require("./batch");
const genesis_1 = require("./genesis");
const msgs_1 = require("./msgs");
const params_1 = require("./params");
const pool_1 = require("./pool");
const types_1 = require("./types");
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
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
        return { params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryCurrentValsetRequest() {
    return {};
}
exports.QueryCurrentValsetRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentValsetRequest();
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
        return exports.QueryCurrentValsetRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryCurrentValsetRequest();
        return message;
    },
};
function createBaseQueryCurrentValsetResponse() {
    return { valset: undefined };
}
exports.QueryCurrentValsetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.valset !== undefined) {
            types_1.Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentValsetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.valset = types_1.Valset.decode(reader, reader.uint32());
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
        return { valset: isSet(object.valset) ? types_1.Valset.fromJSON(object.valset) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.valset !== undefined && (obj.valset = message.valset ? types_1.Valset.toJSON(message.valset) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryCurrentValsetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentValsetResponse();
        message.valset = (object.valset !== undefined && object.valset !== null)
            ? types_1.Valset.fromPartial(object.valset)
            : undefined;
        return message;
    },
};
function createBaseQueryValsetRequestRequest() {
    return { nonce: "0" };
}
exports.QueryValsetRequestRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nonce !== "0") {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetRequestRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nonce = longToString(reader.uint64());
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
        return { nonce: isSet(object.nonce) ? String(object.nonce) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    create(base) {
        return exports.QueryValsetRequestRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValsetRequestRequest();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryValsetRequestResponse() {
    return { valset: undefined };
}
exports.QueryValsetRequestResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.valset !== undefined) {
            types_1.Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetRequestResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.valset = types_1.Valset.decode(reader, reader.uint32());
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
        return { valset: isSet(object.valset) ? types_1.Valset.fromJSON(object.valset) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.valset !== undefined && (obj.valset = message.valset ? types_1.Valset.toJSON(message.valset) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryValsetRequestResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryValsetRequestResponse();
        message.valset = (object.valset !== undefined && object.valset !== null)
            ? types_1.Valset.fromPartial(object.valset)
            : undefined;
        return message;
    },
};
function createBaseQueryValsetConfirmRequest() {
    return { nonce: "0", address: "" };
}
exports.QueryValsetConfirmRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nonce !== "0") {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nonce = longToString(reader.uint64());
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
            nonce: isSet(object.nonce) ? String(object.nonce) : "0",
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    create(base) {
        return exports.QueryValsetConfirmRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryValsetConfirmRequest();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : "0";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryValsetConfirmResponse() {
    return { confirm: undefined };
}
exports.QueryValsetConfirmResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.confirm !== undefined) {
            msgs_1.MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.confirm = msgs_1.MsgValsetConfirm.decode(reader, reader.uint32());
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
        return { confirm: isSet(object.confirm) ? msgs_1.MsgValsetConfirm.fromJSON(object.confirm) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.confirm !== undefined &&
            (obj.confirm = message.confirm ? msgs_1.MsgValsetConfirm.toJSON(message.confirm) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryValsetConfirmResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryValsetConfirmResponse();
        message.confirm = (object.confirm !== undefined && object.confirm !== null)
            ? msgs_1.MsgValsetConfirm.fromPartial(object.confirm)
            : undefined;
        return message;
    },
};
function createBaseQueryValsetConfirmsByNonceRequest() {
    return { nonce: "0" };
}
exports.QueryValsetConfirmsByNonceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nonce !== "0") {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmsByNonceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nonce = longToString(reader.uint64());
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
        return { nonce: isSet(object.nonce) ? String(object.nonce) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    create(base) {
        return exports.QueryValsetConfirmsByNonceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValsetConfirmsByNonceRequest();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryValsetConfirmsByNonceResponse() {
    return { confirms: [] };
}
exports.QueryValsetConfirmsByNonceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.confirms) {
            msgs_1.MsgValsetConfirm.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.confirms.push(msgs_1.MsgValsetConfirm.decode(reader, reader.uint32()));
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
            confirms: Array.isArray(object === null || object === void 0 ? void 0 : object.confirms) ? object.confirms.map((e) => msgs_1.MsgValsetConfirm.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e) => e ? msgs_1.MsgValsetConfirm.toJSON(e) : undefined);
        }
        else {
            obj.confirms = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryValsetConfirmsByNonceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        message.confirms = ((_a = object.confirms) === null || _a === void 0 ? void 0 : _a.map((e) => msgs_1.MsgValsetConfirm.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastValsetRequestsRequest() {
    return {};
}
exports.QueryLastValsetRequestsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastValsetRequestsRequest();
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
        return exports.QueryLastValsetRequestsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryLastValsetRequestsRequest();
        return message;
    },
};
function createBaseQueryLastValsetRequestsResponse() {
    return { valsets: [] };
}
exports.QueryLastValsetRequestsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.valsets) {
            types_1.Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastValsetRequestsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.valsets.push(types_1.Valset.decode(reader, reader.uint32()));
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
        return { valsets: Array.isArray(object === null || object === void 0 ? void 0 : object.valsets) ? object.valsets.map((e) => types_1.Valset.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map((e) => e ? types_1.Valset.toJSON(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryLastValsetRequestsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastValsetRequestsResponse();
        message.valsets = ((_a = object.valsets) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.Valset.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastPendingValsetRequestByAddrRequest() {
    return { address: "" };
}
exports.QueryLastPendingValsetRequestByAddrRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
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
        return exports.QueryLastPendingValsetRequestByAddrRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryLastPendingValsetRequestByAddrResponse() {
    return { valsets: [] };
}
exports.QueryLastPendingValsetRequestByAddrResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.valsets) {
            types_1.Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.valsets.push(types_1.Valset.decode(reader, reader.uint32()));
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
        return { valsets: Array.isArray(object === null || object === void 0 ? void 0 : object.valsets) ? object.valsets.map((e) => types_1.Valset.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map((e) => e ? types_1.Valset.toJSON(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryLastPendingValsetRequestByAddrResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        message.valsets = ((_a = object.valsets) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.Valset.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryBatchFeeRequest() {
    return {};
}
exports.QueryBatchFeeRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchFeeRequest();
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
        return exports.QueryBatchFeeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryBatchFeeRequest();
        return message;
    },
};
function createBaseQueryBatchFeeResponse() {
    return { batchFees: [] };
}
exports.QueryBatchFeeResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.batchFees) {
            pool_1.BatchFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.batchFees.push(pool_1.BatchFees.decode(reader, reader.uint32()));
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
            batchFees: Array.isArray(object === null || object === void 0 ? void 0 : object.batchFees) ? object.batchFees.map((e) => pool_1.BatchFees.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.batchFees) {
            obj.batchFees = message.batchFees.map((e) => e ? pool_1.BatchFees.toJSON(e) : undefined);
        }
        else {
            obj.batchFees = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryBatchFeeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBatchFeeResponse();
        message.batchFees = ((_a = object.batchFees) === null || _a === void 0 ? void 0 : _a.map((e) => pool_1.BatchFees.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastPendingBatchRequestByAddrRequest() {
    return { address: "" };
}
exports.QueryLastPendingBatchRequestByAddrRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
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
        return exports.QueryLastPendingBatchRequestByAddrRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryLastPendingBatchRequestByAddrResponse() {
    return { batch: undefined };
}
exports.QueryLastPendingBatchRequestByAddrResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.batch !== undefined) {
            batch_1.OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.batch = batch_1.OutgoingTxBatch.decode(reader, reader.uint32());
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
        return { batch: isSet(object.batch) ? batch_1.OutgoingTxBatch.fromJSON(object.batch) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.batch !== undefined && (obj.batch = message.batch ? batch_1.OutgoingTxBatch.toJSON(message.batch) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryLastPendingBatchRequestByAddrResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        message.batch = (object.batch !== undefined && object.batch !== null)
            ? batch_1.OutgoingTxBatch.fromPartial(object.batch)
            : undefined;
        return message;
    },
};
function createBaseQueryOutgoingTxBatchesRequest() {
    return {};
}
exports.QueryOutgoingTxBatchesRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingTxBatchesRequest();
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
        return exports.QueryOutgoingTxBatchesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryOutgoingTxBatchesRequest();
        return message;
    },
};
function createBaseQueryOutgoingTxBatchesResponse() {
    return { batches: [] };
}
exports.QueryOutgoingTxBatchesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.batches) {
            batch_1.OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingTxBatchesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.batches.push(batch_1.OutgoingTxBatch.decode(reader, reader.uint32()));
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
            batches: Array.isArray(object === null || object === void 0 ? void 0 : object.batches) ? object.batches.map((e) => batch_1.OutgoingTxBatch.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map((e) => e ? batch_1.OutgoingTxBatch.toJSON(e) : undefined);
        }
        else {
            obj.batches = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryOutgoingTxBatchesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOutgoingTxBatchesResponse();
        message.batches = ((_a = object.batches) === null || _a === void 0 ? void 0 : _a.map((e) => batch_1.OutgoingTxBatch.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryBatchRequestByNonceRequest() {
    return { nonce: "0", contractAddress: "" };
}
exports.QueryBatchRequestByNonceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nonce !== "0") {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchRequestByNonceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nonce = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.contractAddress = reader.string();
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
            nonce: isSet(object.nonce) ? String(object.nonce) : "0",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        return obj;
    },
    create(base) {
        return exports.QueryBatchRequestByNonceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryBatchRequestByNonceRequest();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : "0";
        message.contractAddress = (_b = object.contractAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryBatchRequestByNonceResponse() {
    return { batch: undefined };
}
exports.QueryBatchRequestByNonceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.batch !== undefined) {
            batch_1.OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchRequestByNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.batch = batch_1.OutgoingTxBatch.decode(reader, reader.uint32());
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
        return { batch: isSet(object.batch) ? batch_1.OutgoingTxBatch.fromJSON(object.batch) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.batch !== undefined && (obj.batch = message.batch ? batch_1.OutgoingTxBatch.toJSON(message.batch) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryBatchRequestByNonceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryBatchRequestByNonceResponse();
        message.batch = (object.batch !== undefined && object.batch !== null)
            ? batch_1.OutgoingTxBatch.fromPartial(object.batch)
            : undefined;
        return message;
    },
};
function createBaseQueryBatchConfirmsRequest() {
    return { nonce: "0", contractAddress: "" };
}
exports.QueryBatchConfirmsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nonce !== "0") {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchConfirmsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nonce = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.contractAddress = reader.string();
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
            nonce: isSet(object.nonce) ? String(object.nonce) : "0",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        return obj;
    },
    create(base) {
        return exports.QueryBatchConfirmsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryBatchConfirmsRequest();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : "0";
        message.contractAddress = (_b = object.contractAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryBatchConfirmsResponse() {
    return { confirms: [] };
}
exports.QueryBatchConfirmsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.confirms) {
            msgs_1.MsgConfirmBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchConfirmsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.confirms.push(msgs_1.MsgConfirmBatch.decode(reader, reader.uint32()));
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
            confirms: Array.isArray(object === null || object === void 0 ? void 0 : object.confirms) ? object.confirms.map((e) => msgs_1.MsgConfirmBatch.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e) => e ? msgs_1.MsgConfirmBatch.toJSON(e) : undefined);
        }
        else {
            obj.confirms = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryBatchConfirmsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBatchConfirmsResponse();
        message.confirms = ((_a = object.confirms) === null || _a === void 0 ? void 0 : _a.map((e) => msgs_1.MsgConfirmBatch.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastEventByAddrRequest() {
    return { address: "" };
}
exports.QueryLastEventByAddrRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastEventByAddrRequest();
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
        return exports.QueryLastEventByAddrRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastEventByAddrRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryLastEventByAddrResponse() {
    return { lastClaimEvent: undefined };
}
exports.QueryLastEventByAddrResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lastClaimEvent !== undefined) {
            types_1.LastClaimEvent.encode(message.lastClaimEvent, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastEventByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.lastClaimEvent = types_1.LastClaimEvent.decode(reader, reader.uint32());
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
            lastClaimEvent: isSet(object.lastClaimEvent) ? types_1.LastClaimEvent.fromJSON(object.lastClaimEvent) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lastClaimEvent !== undefined &&
            (obj.lastClaimEvent = message.lastClaimEvent ? types_1.LastClaimEvent.toJSON(message.lastClaimEvent) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryLastEventByAddrResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryLastEventByAddrResponse();
        message.lastClaimEvent = (object.lastClaimEvent !== undefined && object.lastClaimEvent !== null)
            ? types_1.LastClaimEvent.fromPartial(object.lastClaimEvent)
            : undefined;
        return message;
    },
};
function createBaseQueryERC20ToDenomRequest() {
    return { erc20: "" };
}
exports.QueryERC20ToDenomRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryERC20ToDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.erc20 = reader.string();
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
        return { erc20: isSet(object.erc20) ? String(object.erc20) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.erc20 !== undefined && (obj.erc20 = message.erc20);
        return obj;
    },
    create(base) {
        return exports.QueryERC20ToDenomRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryERC20ToDenomRequest();
        message.erc20 = (_a = object.erc20) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryERC20ToDenomResponse() {
    return { denom: "", cosmosOriginated: false };
}
exports.QueryERC20ToDenomResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryERC20ToDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.cosmosOriginated = reader.bool();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            cosmosOriginated: isSet(object.cosmosOriginated) ? Boolean(object.cosmosOriginated) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.cosmosOriginated !== undefined && (obj.cosmosOriginated = message.cosmosOriginated);
        return obj;
    },
    create(base) {
        return exports.QueryERC20ToDenomResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryERC20ToDenomResponse();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.cosmosOriginated = (_b = object.cosmosOriginated) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseQueryDenomToERC20Request() {
    return { denom: "" };
}
exports.QueryDenomToERC20Request = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomToERC20Request();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denom = reader.string();
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
        return { denom: isSet(object.denom) ? String(object.denom) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    create(base) {
        return exports.QueryDenomToERC20Request.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomToERC20Request();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDenomToERC20Response() {
    return { erc20: "", cosmosOriginated: false };
}
exports.QueryDenomToERC20Response = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomToERC20Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.erc20 = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.cosmosOriginated = reader.bool();
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
            erc20: isSet(object.erc20) ? String(object.erc20) : "",
            cosmosOriginated: isSet(object.cosmosOriginated) ? Boolean(object.cosmosOriginated) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.erc20 !== undefined && (obj.erc20 = message.erc20);
        message.cosmosOriginated !== undefined && (obj.cosmosOriginated = message.cosmosOriginated);
        return obj;
    },
    create(base) {
        return exports.QueryDenomToERC20Response.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDenomToERC20Response();
        message.erc20 = (_a = object.erc20) !== null && _a !== void 0 ? _a : "";
        message.cosmosOriginated = (_b = object.cosmosOriginated) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseQueryDelegateKeysByValidatorAddress() {
    return { validatorAddress: "" };
}
exports.QueryDelegateKeysByValidatorAddress = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByValidatorAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validatorAddress = reader.string();
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
        return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    create(base) {
        return exports.QueryDelegateKeysByValidatorAddress.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegateKeysByValidatorAddress();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDelegateKeysByValidatorAddressResponse() {
    return { ethAddress: "", orchestratorAddress: "" };
}
exports.QueryDelegateKeysByValidatorAddressResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ethAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.orchestratorAddress = reader.string();
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
            ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
            orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    create(base) {
        return exports.QueryDelegateKeysByValidatorAddressResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
        message.ethAddress = (_a = object.ethAddress) !== null && _a !== void 0 ? _a : "";
        message.orchestratorAddress = (_b = object.orchestratorAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryDelegateKeysByEthAddress() {
    return { ethAddress: "" };
}
exports.QueryDelegateKeysByEthAddress = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByEthAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ethAddress = reader.string();
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
        return { ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        return obj;
    },
    create(base) {
        return exports.QueryDelegateKeysByEthAddress.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegateKeysByEthAddress();
        message.ethAddress = (_a = object.ethAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDelegateKeysByEthAddressResponse() {
    return { validatorAddress: "", orchestratorAddress: "" };
}
exports.QueryDelegateKeysByEthAddressResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByEthAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.orchestratorAddress = reader.string();
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    create(base) {
        return exports.QueryDelegateKeysByEthAddressResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDelegateKeysByEthAddressResponse();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.orchestratorAddress = (_b = object.orchestratorAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryDelegateKeysByOrchestratorAddress() {
    return { orchestratorAddress: "" };
}
exports.QueryDelegateKeysByOrchestratorAddress = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orchestratorAddress !== "") {
            writer.uint32(10).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByOrchestratorAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orchestratorAddress = reader.string();
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
        return { orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    create(base) {
        return exports.QueryDelegateKeysByOrchestratorAddress.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegateKeysByOrchestratorAddress();
        message.orchestratorAddress = (_a = object.orchestratorAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDelegateKeysByOrchestratorAddressResponse() {
    return { validatorAddress: "", ethAddress: "" };
}
exports.QueryDelegateKeysByOrchestratorAddressResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.ethAddress !== "") {
            writer.uint32(18).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ethAddress = reader.string();
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        return obj;
    },
    create(base) {
        return exports.QueryDelegateKeysByOrchestratorAddressResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.ethAddress = (_b = object.ethAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryPendingSendToEth() {
    return { senderAddress: "" };
}
exports.QueryPendingSendToEth = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.senderAddress !== "") {
            writer.uint32(10).string(message.senderAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingSendToEth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.senderAddress = reader.string();
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
        return { senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.senderAddress !== undefined && (obj.senderAddress = message.senderAddress);
        return obj;
    },
    create(base) {
        return exports.QueryPendingSendToEth.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPendingSendToEth();
        message.senderAddress = (_a = object.senderAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryPendingSendToEthResponse() {
    return { transfersInBatches: [], unbatchedTransfers: [] };
}
exports.QueryPendingSendToEthResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.transfersInBatches) {
            batch_1.OutgoingTransferTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.unbatchedTransfers) {
            batch_1.OutgoingTransferTx.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingSendToEthResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.transfersInBatches.push(batch_1.OutgoingTransferTx.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.unbatchedTransfers.push(batch_1.OutgoingTransferTx.decode(reader, reader.uint32()));
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
            transfersInBatches: Array.isArray(object === null || object === void 0 ? void 0 : object.transfersInBatches)
                ? object.transfersInBatches.map((e) => batch_1.OutgoingTransferTx.fromJSON(e))
                : [],
            unbatchedTransfers: Array.isArray(object === null || object === void 0 ? void 0 : object.unbatchedTransfers)
                ? object.unbatchedTransfers.map((e) => batch_1.OutgoingTransferTx.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.transfersInBatches) {
            obj.transfersInBatches = message.transfersInBatches.map((e) => e ? batch_1.OutgoingTransferTx.toJSON(e) : undefined);
        }
        else {
            obj.transfersInBatches = [];
        }
        if (message.unbatchedTransfers) {
            obj.unbatchedTransfers = message.unbatchedTransfers.map((e) => e ? batch_1.OutgoingTransferTx.toJSON(e) : undefined);
        }
        else {
            obj.unbatchedTransfers = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryPendingSendToEthResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryPendingSendToEthResponse();
        message.transfersInBatches = ((_a = object.transfersInBatches) === null || _a === void 0 ? void 0 : _a.map((e) => batch_1.OutgoingTransferTx.fromPartial(e))) || [];
        message.unbatchedTransfers = ((_b = object.unbatchedTransfers) === null || _b === void 0 ? void 0 : _b.map((e) => batch_1.OutgoingTransferTx.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryModuleStateRequest() {
    return {};
}
exports.QueryModuleStateRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateRequest();
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
        return exports.QueryModuleStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
};
function createBaseQueryModuleStateResponse() {
    return { state: undefined };
}
exports.QueryModuleStateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== undefined) {
            genesis_1.GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state = genesis_1.GenesisState.decode(reader, reader.uint32());
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
        return { state: isSet(object.state) ? genesis_1.GenesisState.fromJSON(object.state) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state ? genesis_1.GenesisState.toJSON(message.state) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryModuleStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryModuleStateResponse();
        message.state = (object.state !== undefined && object.state !== null)
            ? genesis_1.GenesisState.fromPartial(object.state)
            : undefined;
        return message;
    },
};
function createBaseMissingNoncesRequest() {
    return {};
}
exports.MissingNoncesRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissingNoncesRequest();
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
        return exports.MissingNoncesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMissingNoncesRequest();
        return message;
    },
};
function createBaseMissingNoncesResponse() {
    return { operatorAddresses: [] };
}
exports.MissingNoncesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.operatorAddresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissingNoncesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.operatorAddresses.push(reader.string());
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
            operatorAddresses: Array.isArray(object === null || object === void 0 ? void 0 : object.operatorAddresses)
                ? object.operatorAddresses.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.operatorAddresses) {
            obj.operatorAddresses = message.operatorAddresses.map((e) => e);
        }
        else {
            obj.operatorAddresses = [];
        }
        return obj;
    },
    create(base) {
        return exports.MissingNoncesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMissingNoncesResponse();
        message.operatorAddresses = ((_a = object.operatorAddresses) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.CurrentValset = this.CurrentValset.bind(this);
        this.ValsetRequest = this.ValsetRequest.bind(this);
        this.ValsetConfirm = this.ValsetConfirm.bind(this);
        this.ValsetConfirmsByNonce = this.ValsetConfirmsByNonce.bind(this);
        this.LastValsetRequests = this.LastValsetRequests.bind(this);
        this.LastPendingValsetRequestByAddr = this.LastPendingValsetRequestByAddr.bind(this);
        this.LastEventByAddr = this.LastEventByAddr.bind(this);
        this.GetPendingSendToEth = this.GetPendingSendToEth.bind(this);
        this.BatchFees = this.BatchFees.bind(this);
        this.OutgoingTxBatches = this.OutgoingTxBatches.bind(this);
        this.LastPendingBatchRequestByAddr = this.LastPendingBatchRequestByAddr.bind(this);
        this.BatchRequestByNonce = this.BatchRequestByNonce.bind(this);
        this.BatchConfirms = this.BatchConfirms.bind(this);
        this.ERC20ToDenom = this.ERC20ToDenom.bind(this);
        this.DenomToERC20 = this.DenomToERC20.bind(this);
        this.GetDelegateKeyByValidator = this.GetDelegateKeyByValidator.bind(this);
        this.GetDelegateKeyByEth = this.GetDelegateKeyByEth.bind(this);
        this.GetDelegateKeyByOrchestrator = this.GetDelegateKeyByOrchestrator.bind(this);
        this.PeggyModuleState = this.PeggyModuleState.bind(this);
        this.MissingPeggoNonces = this.MissingPeggoNonces.bind(this);
    }
    Params(request, metadata) {
        return this.rpc.unary(exports.QueryParamsDesc, exports.QueryParamsRequest.fromPartial(request), metadata);
    }
    CurrentValset(request, metadata) {
        return this.rpc.unary(exports.QueryCurrentValsetDesc, exports.QueryCurrentValsetRequest.fromPartial(request), metadata);
    }
    ValsetRequest(request, metadata) {
        return this.rpc.unary(exports.QueryValsetRequestDesc, exports.QueryValsetRequestRequest.fromPartial(request), metadata);
    }
    ValsetConfirm(request, metadata) {
        return this.rpc.unary(exports.QueryValsetConfirmDesc, exports.QueryValsetConfirmRequest.fromPartial(request), metadata);
    }
    ValsetConfirmsByNonce(request, metadata) {
        return this.rpc.unary(exports.QueryValsetConfirmsByNonceDesc, exports.QueryValsetConfirmsByNonceRequest.fromPartial(request), metadata);
    }
    LastValsetRequests(request, metadata) {
        return this.rpc.unary(exports.QueryLastValsetRequestsDesc, exports.QueryLastValsetRequestsRequest.fromPartial(request), metadata);
    }
    LastPendingValsetRequestByAddr(request, metadata) {
        return this.rpc.unary(exports.QueryLastPendingValsetRequestByAddrDesc, exports.QueryLastPendingValsetRequestByAddrRequest.fromPartial(request), metadata);
    }
    LastEventByAddr(request, metadata) {
        return this.rpc.unary(exports.QueryLastEventByAddrDesc, exports.QueryLastEventByAddrRequest.fromPartial(request), metadata);
    }
    GetPendingSendToEth(request, metadata) {
        return this.rpc.unary(exports.QueryGetPendingSendToEthDesc, exports.QueryPendingSendToEth.fromPartial(request), metadata);
    }
    BatchFees(request, metadata) {
        return this.rpc.unary(exports.QueryBatchFeesDesc, exports.QueryBatchFeeRequest.fromPartial(request), metadata);
    }
    OutgoingTxBatches(request, metadata) {
        return this.rpc.unary(exports.QueryOutgoingTxBatchesDesc, exports.QueryOutgoingTxBatchesRequest.fromPartial(request), metadata);
    }
    LastPendingBatchRequestByAddr(request, metadata) {
        return this.rpc.unary(exports.QueryLastPendingBatchRequestByAddrDesc, exports.QueryLastPendingBatchRequestByAddrRequest.fromPartial(request), metadata);
    }
    BatchRequestByNonce(request, metadata) {
        return this.rpc.unary(exports.QueryBatchRequestByNonceDesc, exports.QueryBatchRequestByNonceRequest.fromPartial(request), metadata);
    }
    BatchConfirms(request, metadata) {
        return this.rpc.unary(exports.QueryBatchConfirmsDesc, exports.QueryBatchConfirmsRequest.fromPartial(request), metadata);
    }
    ERC20ToDenom(request, metadata) {
        return this.rpc.unary(exports.QueryERC20ToDenomDesc, exports.QueryERC20ToDenomRequest.fromPartial(request), metadata);
    }
    DenomToERC20(request, metadata) {
        return this.rpc.unary(exports.QueryDenomToERC20Desc, exports.QueryDenomToERC20Request.fromPartial(request), metadata);
    }
    GetDelegateKeyByValidator(request, metadata) {
        return this.rpc.unary(exports.QueryGetDelegateKeyByValidatorDesc, exports.QueryDelegateKeysByValidatorAddress.fromPartial(request), metadata);
    }
    GetDelegateKeyByEth(request, metadata) {
        return this.rpc.unary(exports.QueryGetDelegateKeyByEthDesc, exports.QueryDelegateKeysByEthAddress.fromPartial(request), metadata);
    }
    GetDelegateKeyByOrchestrator(request, metadata) {
        return this.rpc.unary(exports.QueryGetDelegateKeyByOrchestratorDesc, exports.QueryDelegateKeysByOrchestratorAddress.fromPartial(request), metadata);
    }
    PeggyModuleState(request, metadata) {
        return this.rpc.unary(exports.QueryPeggyModuleStateDesc, exports.QueryModuleStateRequest.fromPartial(request), metadata);
    }
    MissingPeggoNonces(request, metadata) {
        return this.rpc.unary(exports.QueryMissingPeggoNoncesDesc, exports.MissingNoncesRequest.fromPartial(request), metadata);
    }
}
exports.QueryClientImpl = QueryClientImpl;
exports.QueryDesc = { serviceName: "injective.peggy.v1.Query" };
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
exports.QueryCurrentValsetDesc = {
    methodName: "CurrentValset",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryCurrentValsetRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryCurrentValsetResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryValsetRequestDesc = {
    methodName: "ValsetRequest",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryValsetRequestRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryValsetRequestResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryValsetConfirmDesc = {
    methodName: "ValsetConfirm",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryValsetConfirmRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryValsetConfirmResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryValsetConfirmsByNonceDesc = {
    methodName: "ValsetConfirmsByNonce",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryValsetConfirmsByNonceRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryValsetConfirmsByNonceResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryLastValsetRequestsDesc = {
    methodName: "LastValsetRequests",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryLastValsetRequestsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryLastValsetRequestsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryLastPendingValsetRequestByAddrDesc = {
    methodName: "LastPendingValsetRequestByAddr",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryLastPendingValsetRequestByAddrRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryLastPendingValsetRequestByAddrResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryLastEventByAddrDesc = {
    methodName: "LastEventByAddr",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryLastEventByAddrRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryLastEventByAddrResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryGetPendingSendToEthDesc = {
    methodName: "GetPendingSendToEth",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryPendingSendToEth.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryPendingSendToEthResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryBatchFeesDesc = {
    methodName: "BatchFees",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryBatchFeeRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryBatchFeeResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryOutgoingTxBatchesDesc = {
    methodName: "OutgoingTxBatches",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryOutgoingTxBatchesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryOutgoingTxBatchesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryLastPendingBatchRequestByAddrDesc = {
    methodName: "LastPendingBatchRequestByAddr",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryLastPendingBatchRequestByAddrRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryLastPendingBatchRequestByAddrResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryBatchRequestByNonceDesc = {
    methodName: "BatchRequestByNonce",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryBatchRequestByNonceRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryBatchRequestByNonceResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryBatchConfirmsDesc = {
    methodName: "BatchConfirms",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryBatchConfirmsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryBatchConfirmsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryERC20ToDenomDesc = {
    methodName: "ERC20ToDenom",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryERC20ToDenomRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryERC20ToDenomResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryDenomToERC20Desc = {
    methodName: "DenomToERC20",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryDenomToERC20Request.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryDenomToERC20Response.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryGetDelegateKeyByValidatorDesc = {
    methodName: "GetDelegateKeyByValidator",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryDelegateKeysByValidatorAddress.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryDelegateKeysByValidatorAddressResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryGetDelegateKeyByEthDesc = {
    methodName: "GetDelegateKeyByEth",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryDelegateKeysByEthAddress.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryDelegateKeysByEthAddressResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryGetDelegateKeyByOrchestratorDesc = {
    methodName: "GetDelegateKeyByOrchestrator",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryDelegateKeysByOrchestratorAddress.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryDelegateKeysByOrchestratorAddressResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryPeggyModuleStateDesc = {
    methodName: "PeggyModuleState",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryModuleStateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryModuleStateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryMissingPeggoNoncesDesc = {
    methodName: "MissingPeggoNonces",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MissingNoncesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MissingNoncesResponse.decode(data);
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
