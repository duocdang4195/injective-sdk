/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { OutgoingTransferTx, OutgoingTxBatch } from "./batch";
import { GenesisState } from "./genesis";
import { MsgConfirmBatch, MsgValsetConfirm } from "./msgs";
import { Params } from "./params";
import { BatchFees } from "./pool";
import { LastClaimEvent, Valset } from "./types";
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
function createBaseQueryCurrentValsetRequest() {
    return {};
}
export const QueryCurrentValsetRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryCurrentValsetRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryCurrentValsetRequest();
        return message;
    },
};
function createBaseQueryCurrentValsetResponse() {
    return { valset: undefined };
}
export const QueryCurrentValsetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.valset !== undefined) {
            Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentValsetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.valset = Valset.decode(reader, reader.uint32());
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
        return { valset: isSet(object.valset) ? Valset.fromJSON(object.valset) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.valset !== undefined && (obj.valset = message.valset ? Valset.toJSON(message.valset) : undefined);
        return obj;
    },
    create(base) {
        return QueryCurrentValsetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentValsetResponse();
        message.valset = (object.valset !== undefined && object.valset !== null)
            ? Valset.fromPartial(object.valset)
            : undefined;
        return message;
    },
};
function createBaseQueryValsetRequestRequest() {
    return { nonce: "0" };
}
export const QueryValsetRequestRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nonce !== "0") {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryValsetRequestRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryValsetRequestResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.valset !== undefined) {
            Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetRequestResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.valset = Valset.decode(reader, reader.uint32());
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
        return { valset: isSet(object.valset) ? Valset.fromJSON(object.valset) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.valset !== undefined && (obj.valset = message.valset ? Valset.toJSON(message.valset) : undefined);
        return obj;
    },
    create(base) {
        return QueryValsetRequestResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryValsetRequestResponse();
        message.valset = (object.valset !== undefined && object.valset !== null)
            ? Valset.fromPartial(object.valset)
            : undefined;
        return message;
    },
};
function createBaseQueryValsetConfirmRequest() {
    return { nonce: "0", address: "" };
}
export const QueryValsetConfirmRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nonce !== "0") {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryValsetConfirmRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryValsetConfirmResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.confirm !== undefined) {
            MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.confirm = MsgValsetConfirm.decode(reader, reader.uint32());
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
        return { confirm: isSet(object.confirm) ? MsgValsetConfirm.fromJSON(object.confirm) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.confirm !== undefined &&
            (obj.confirm = message.confirm ? MsgValsetConfirm.toJSON(message.confirm) : undefined);
        return obj;
    },
    create(base) {
        return QueryValsetConfirmResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryValsetConfirmResponse();
        message.confirm = (object.confirm !== undefined && object.confirm !== null)
            ? MsgValsetConfirm.fromPartial(object.confirm)
            : undefined;
        return message;
    },
};
function createBaseQueryValsetConfirmsByNonceRequest() {
    return { nonce: "0" };
}
export const QueryValsetConfirmsByNonceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nonce !== "0") {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryValsetConfirmsByNonceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryValsetConfirmsByNonceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.confirms) {
            MsgValsetConfirm.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.confirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
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
            confirms: Array.isArray(object === null || object === void 0 ? void 0 : object.confirms) ? object.confirms.map((e) => MsgValsetConfirm.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e) => e ? MsgValsetConfirm.toJSON(e) : undefined);
        }
        else {
            obj.confirms = [];
        }
        return obj;
    },
    create(base) {
        return QueryValsetConfirmsByNonceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        message.confirms = ((_a = object.confirms) === null || _a === void 0 ? void 0 : _a.map((e) => MsgValsetConfirm.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastValsetRequestsRequest() {
    return {};
}
export const QueryLastValsetRequestsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryLastValsetRequestsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryLastValsetRequestsRequest();
        return message;
    },
};
function createBaseQueryLastValsetRequestsResponse() {
    return { valsets: [] };
}
export const QueryLastValsetRequestsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.valsets) {
            Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastValsetRequestsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.valsets.push(Valset.decode(reader, reader.uint32()));
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
        return { valsets: Array.isArray(object === null || object === void 0 ? void 0 : object.valsets) ? object.valsets.map((e) => Valset.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map((e) => e ? Valset.toJSON(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        return obj;
    },
    create(base) {
        return QueryLastValsetRequestsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastValsetRequestsResponse();
        message.valsets = ((_a = object.valsets) === null || _a === void 0 ? void 0 : _a.map((e) => Valset.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastPendingValsetRequestByAddrRequest() {
    return { address: "" };
}
export const QueryLastPendingValsetRequestByAddrRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryLastPendingValsetRequestByAddrRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryLastPendingValsetRequestByAddrResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.valsets) {
            Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.valsets.push(Valset.decode(reader, reader.uint32()));
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
        return { valsets: Array.isArray(object === null || object === void 0 ? void 0 : object.valsets) ? object.valsets.map((e) => Valset.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map((e) => e ? Valset.toJSON(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        return obj;
    },
    create(base) {
        return QueryLastPendingValsetRequestByAddrResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        message.valsets = ((_a = object.valsets) === null || _a === void 0 ? void 0 : _a.map((e) => Valset.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryBatchFeeRequest() {
    return {};
}
export const QueryBatchFeeRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryBatchFeeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryBatchFeeRequest();
        return message;
    },
};
function createBaseQueryBatchFeeResponse() {
    return { batchFees: [] };
}
export const QueryBatchFeeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.batchFees) {
            BatchFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.batchFees.push(BatchFees.decode(reader, reader.uint32()));
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
            batchFees: Array.isArray(object === null || object === void 0 ? void 0 : object.batchFees) ? object.batchFees.map((e) => BatchFees.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.batchFees) {
            obj.batchFees = message.batchFees.map((e) => e ? BatchFees.toJSON(e) : undefined);
        }
        else {
            obj.batchFees = [];
        }
        return obj;
    },
    create(base) {
        return QueryBatchFeeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBatchFeeResponse();
        message.batchFees = ((_a = object.batchFees) === null || _a === void 0 ? void 0 : _a.map((e) => BatchFees.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastPendingBatchRequestByAddrRequest() {
    return { address: "" };
}
export const QueryLastPendingBatchRequestByAddrRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryLastPendingBatchRequestByAddrRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryLastPendingBatchRequestByAddrResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.batch !== undefined) {
            OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
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
        return { batch: isSet(object.batch) ? OutgoingTxBatch.fromJSON(object.batch) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.batch !== undefined && (obj.batch = message.batch ? OutgoingTxBatch.toJSON(message.batch) : undefined);
        return obj;
    },
    create(base) {
        return QueryLastPendingBatchRequestByAddrResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        message.batch = (object.batch !== undefined && object.batch !== null)
            ? OutgoingTxBatch.fromPartial(object.batch)
            : undefined;
        return message;
    },
};
function createBaseQueryOutgoingTxBatchesRequest() {
    return {};
}
export const QueryOutgoingTxBatchesRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryOutgoingTxBatchesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryOutgoingTxBatchesRequest();
        return message;
    },
};
function createBaseQueryOutgoingTxBatchesResponse() {
    return { batches: [] };
}
export const QueryOutgoingTxBatchesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.batches) {
            OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingTxBatchesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
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
            batches: Array.isArray(object === null || object === void 0 ? void 0 : object.batches) ? object.batches.map((e) => OutgoingTxBatch.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map((e) => e ? OutgoingTxBatch.toJSON(e) : undefined);
        }
        else {
            obj.batches = [];
        }
        return obj;
    },
    create(base) {
        return QueryOutgoingTxBatchesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOutgoingTxBatchesResponse();
        message.batches = ((_a = object.batches) === null || _a === void 0 ? void 0 : _a.map((e) => OutgoingTxBatch.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryBatchRequestByNonceRequest() {
    return { nonce: "0", contractAddress: "" };
}
export const QueryBatchRequestByNonceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nonce !== "0") {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryBatchRequestByNonceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryBatchRequestByNonceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.batch !== undefined) {
            OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchRequestByNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
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
        return { batch: isSet(object.batch) ? OutgoingTxBatch.fromJSON(object.batch) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.batch !== undefined && (obj.batch = message.batch ? OutgoingTxBatch.toJSON(message.batch) : undefined);
        return obj;
    },
    create(base) {
        return QueryBatchRequestByNonceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryBatchRequestByNonceResponse();
        message.batch = (object.batch !== undefined && object.batch !== null)
            ? OutgoingTxBatch.fromPartial(object.batch)
            : undefined;
        return message;
    },
};
function createBaseQueryBatchConfirmsRequest() {
    return { nonce: "0", contractAddress: "" };
}
export const QueryBatchConfirmsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nonce !== "0") {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryBatchConfirmsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryBatchConfirmsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.confirms) {
            MsgConfirmBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchConfirmsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.confirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
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
            confirms: Array.isArray(object === null || object === void 0 ? void 0 : object.confirms) ? object.confirms.map((e) => MsgConfirmBatch.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e) => e ? MsgConfirmBatch.toJSON(e) : undefined);
        }
        else {
            obj.confirms = [];
        }
        return obj;
    },
    create(base) {
        return QueryBatchConfirmsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBatchConfirmsResponse();
        message.confirms = ((_a = object.confirms) === null || _a === void 0 ? void 0 : _a.map((e) => MsgConfirmBatch.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLastEventByAddrRequest() {
    return { address: "" };
}
export const QueryLastEventByAddrRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryLastEventByAddrRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryLastEventByAddrResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lastClaimEvent !== undefined) {
            LastClaimEvent.encode(message.lastClaimEvent, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastEventByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.lastClaimEvent = LastClaimEvent.decode(reader, reader.uint32());
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
            lastClaimEvent: isSet(object.lastClaimEvent) ? LastClaimEvent.fromJSON(object.lastClaimEvent) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lastClaimEvent !== undefined &&
            (obj.lastClaimEvent = message.lastClaimEvent ? LastClaimEvent.toJSON(message.lastClaimEvent) : undefined);
        return obj;
    },
    create(base) {
        return QueryLastEventByAddrResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryLastEventByAddrResponse();
        message.lastClaimEvent = (object.lastClaimEvent !== undefined && object.lastClaimEvent !== null)
            ? LastClaimEvent.fromPartial(object.lastClaimEvent)
            : undefined;
        return message;
    },
};
function createBaseQueryERC20ToDenomRequest() {
    return { erc20: "" };
}
export const QueryERC20ToDenomRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryERC20ToDenomRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryERC20ToDenomResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryERC20ToDenomResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDenomToERC20Request = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDenomToERC20Request.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDenomToERC20Response = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDenomToERC20Response.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDelegateKeysByValidatorAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDelegateKeysByValidatorAddress.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDelegateKeysByValidatorAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDelegateKeysByValidatorAddressResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDelegateKeysByEthAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDelegateKeysByEthAddress.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDelegateKeysByEthAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDelegateKeysByEthAddressResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDelegateKeysByOrchestratorAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orchestratorAddress !== "") {
            writer.uint32(10).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDelegateKeysByOrchestratorAddress.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryDelegateKeysByOrchestratorAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.ethAddress !== "") {
            writer.uint32(18).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryDelegateKeysByOrchestratorAddressResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryPendingSendToEth = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderAddress !== "") {
            writer.uint32(10).string(message.senderAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryPendingSendToEth.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryPendingSendToEthResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.transfersInBatches) {
            OutgoingTransferTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.unbatchedTransfers) {
            OutgoingTransferTx.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingSendToEthResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.transfersInBatches.push(OutgoingTransferTx.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
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
                ? object.transfersInBatches.map((e) => OutgoingTransferTx.fromJSON(e))
                : [],
            unbatchedTransfers: Array.isArray(object === null || object === void 0 ? void 0 : object.unbatchedTransfers)
                ? object.unbatchedTransfers.map((e) => OutgoingTransferTx.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.transfersInBatches) {
            obj.transfersInBatches = message.transfersInBatches.map((e) => e ? OutgoingTransferTx.toJSON(e) : undefined);
        }
        else {
            obj.transfersInBatches = [];
        }
        if (message.unbatchedTransfers) {
            obj.unbatchedTransfers = message.unbatchedTransfers.map((e) => e ? OutgoingTransferTx.toJSON(e) : undefined);
        }
        else {
            obj.unbatchedTransfers = [];
        }
        return obj;
    },
    create(base) {
        return QueryPendingSendToEthResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryPendingSendToEthResponse();
        message.transfersInBatches = ((_a = object.transfersInBatches) === null || _a === void 0 ? void 0 : _a.map((e) => OutgoingTransferTx.fromPartial(e))) || [];
        message.unbatchedTransfers = ((_b = object.unbatchedTransfers) === null || _b === void 0 ? void 0 : _b.map((e) => OutgoingTransferTx.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryModuleStateRequest() {
    return {};
}
export const QueryModuleStateRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryModuleStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
};
function createBaseQueryModuleStateResponse() {
    return { state: undefined };
}
export const QueryModuleStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.state !== undefined) {
            GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state = GenesisState.decode(reader, reader.uint32());
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
        return { state: isSet(object.state) ? GenesisState.fromJSON(object.state) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state ? GenesisState.toJSON(message.state) : undefined);
        return obj;
    },
    create(base) {
        return QueryModuleStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryModuleStateResponse();
        message.state = (object.state !== undefined && object.state !== null)
            ? GenesisState.fromPartial(object.state)
            : undefined;
        return message;
    },
};
function createBaseMissingNoncesRequest() {
    return {};
}
export const MissingNoncesRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return MissingNoncesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMissingNoncesRequest();
        return message;
    },
};
function createBaseMissingNoncesResponse() {
    return { operatorAddresses: [] };
}
export const MissingNoncesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.operatorAddresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return MissingNoncesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMissingNoncesResponse();
        message.operatorAddresses = ((_a = object.operatorAddresses) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
export class QueryClientImpl {
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
        return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
    }
    CurrentValset(request, metadata) {
        return this.rpc.unary(QueryCurrentValsetDesc, QueryCurrentValsetRequest.fromPartial(request), metadata);
    }
    ValsetRequest(request, metadata) {
        return this.rpc.unary(QueryValsetRequestDesc, QueryValsetRequestRequest.fromPartial(request), metadata);
    }
    ValsetConfirm(request, metadata) {
        return this.rpc.unary(QueryValsetConfirmDesc, QueryValsetConfirmRequest.fromPartial(request), metadata);
    }
    ValsetConfirmsByNonce(request, metadata) {
        return this.rpc.unary(QueryValsetConfirmsByNonceDesc, QueryValsetConfirmsByNonceRequest.fromPartial(request), metadata);
    }
    LastValsetRequests(request, metadata) {
        return this.rpc.unary(QueryLastValsetRequestsDesc, QueryLastValsetRequestsRequest.fromPartial(request), metadata);
    }
    LastPendingValsetRequestByAddr(request, metadata) {
        return this.rpc.unary(QueryLastPendingValsetRequestByAddrDesc, QueryLastPendingValsetRequestByAddrRequest.fromPartial(request), metadata);
    }
    LastEventByAddr(request, metadata) {
        return this.rpc.unary(QueryLastEventByAddrDesc, QueryLastEventByAddrRequest.fromPartial(request), metadata);
    }
    GetPendingSendToEth(request, metadata) {
        return this.rpc.unary(QueryGetPendingSendToEthDesc, QueryPendingSendToEth.fromPartial(request), metadata);
    }
    BatchFees(request, metadata) {
        return this.rpc.unary(QueryBatchFeesDesc, QueryBatchFeeRequest.fromPartial(request), metadata);
    }
    OutgoingTxBatches(request, metadata) {
        return this.rpc.unary(QueryOutgoingTxBatchesDesc, QueryOutgoingTxBatchesRequest.fromPartial(request), metadata);
    }
    LastPendingBatchRequestByAddr(request, metadata) {
        return this.rpc.unary(QueryLastPendingBatchRequestByAddrDesc, QueryLastPendingBatchRequestByAddrRequest.fromPartial(request), metadata);
    }
    BatchRequestByNonce(request, metadata) {
        return this.rpc.unary(QueryBatchRequestByNonceDesc, QueryBatchRequestByNonceRequest.fromPartial(request), metadata);
    }
    BatchConfirms(request, metadata) {
        return this.rpc.unary(QueryBatchConfirmsDesc, QueryBatchConfirmsRequest.fromPartial(request), metadata);
    }
    ERC20ToDenom(request, metadata) {
        return this.rpc.unary(QueryERC20ToDenomDesc, QueryERC20ToDenomRequest.fromPartial(request), metadata);
    }
    DenomToERC20(request, metadata) {
        return this.rpc.unary(QueryDenomToERC20Desc, QueryDenomToERC20Request.fromPartial(request), metadata);
    }
    GetDelegateKeyByValidator(request, metadata) {
        return this.rpc.unary(QueryGetDelegateKeyByValidatorDesc, QueryDelegateKeysByValidatorAddress.fromPartial(request), metadata);
    }
    GetDelegateKeyByEth(request, metadata) {
        return this.rpc.unary(QueryGetDelegateKeyByEthDesc, QueryDelegateKeysByEthAddress.fromPartial(request), metadata);
    }
    GetDelegateKeyByOrchestrator(request, metadata) {
        return this.rpc.unary(QueryGetDelegateKeyByOrchestratorDesc, QueryDelegateKeysByOrchestratorAddress.fromPartial(request), metadata);
    }
    PeggyModuleState(request, metadata) {
        return this.rpc.unary(QueryPeggyModuleStateDesc, QueryModuleStateRequest.fromPartial(request), metadata);
    }
    MissingPeggoNonces(request, metadata) {
        return this.rpc.unary(QueryMissingPeggoNoncesDesc, MissingNoncesRequest.fromPartial(request), metadata);
    }
}
export const QueryDesc = { serviceName: "injective.peggy.v1.Query" };
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
export const QueryCurrentValsetDesc = {
    methodName: "CurrentValset",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryCurrentValsetRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryCurrentValsetResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryValsetRequestDesc = {
    methodName: "ValsetRequest",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryValsetRequestRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryValsetRequestResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryValsetConfirmDesc = {
    methodName: "ValsetConfirm",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryValsetConfirmRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryValsetConfirmResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryValsetConfirmsByNonceDesc = {
    methodName: "ValsetConfirmsByNonce",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryValsetConfirmsByNonceRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryValsetConfirmsByNonceResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryLastValsetRequestsDesc = {
    methodName: "LastValsetRequests",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryLastValsetRequestsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryLastValsetRequestsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryLastPendingValsetRequestByAddrDesc = {
    methodName: "LastPendingValsetRequestByAddr",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryLastPendingValsetRequestByAddrRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryLastPendingValsetRequestByAddrResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryLastEventByAddrDesc = {
    methodName: "LastEventByAddr",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryLastEventByAddrRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryLastEventByAddrResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryGetPendingSendToEthDesc = {
    methodName: "GetPendingSendToEth",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryPendingSendToEth.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryPendingSendToEthResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryBatchFeesDesc = {
    methodName: "BatchFees",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryBatchFeeRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryBatchFeeResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryOutgoingTxBatchesDesc = {
    methodName: "OutgoingTxBatches",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryOutgoingTxBatchesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryOutgoingTxBatchesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryLastPendingBatchRequestByAddrDesc = {
    methodName: "LastPendingBatchRequestByAddr",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryLastPendingBatchRequestByAddrRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryLastPendingBatchRequestByAddrResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryBatchRequestByNonceDesc = {
    methodName: "BatchRequestByNonce",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryBatchRequestByNonceRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryBatchRequestByNonceResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryBatchConfirmsDesc = {
    methodName: "BatchConfirms",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryBatchConfirmsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryBatchConfirmsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryERC20ToDenomDesc = {
    methodName: "ERC20ToDenom",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryERC20ToDenomRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryERC20ToDenomResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryDenomToERC20Desc = {
    methodName: "DenomToERC20",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryDenomToERC20Request.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryDenomToERC20Response.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryGetDelegateKeyByValidatorDesc = {
    methodName: "GetDelegateKeyByValidator",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryDelegateKeysByValidatorAddress.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryDelegateKeysByValidatorAddressResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryGetDelegateKeyByEthDesc = {
    methodName: "GetDelegateKeyByEth",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryDelegateKeysByEthAddress.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryDelegateKeysByEthAddressResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryGetDelegateKeyByOrchestratorDesc = {
    methodName: "GetDelegateKeyByOrchestrator",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryDelegateKeysByOrchestratorAddress.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryDelegateKeysByOrchestratorAddressResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryPeggyModuleStateDesc = {
    methodName: "PeggyModuleState",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryModuleStateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryModuleStateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryMissingPeggoNoncesDesc = {
    methodName: "MissingPeggoNonces",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MissingNoncesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MissingNoncesResponse.decode(data);
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
