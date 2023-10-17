/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Block } from "../../../tendermint/types/block";
import { BlockID } from "../../../tendermint/types/types";
import { GasInfo, Result, TxResponse } from "../../base/abci/v1beta1/abci";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Tx } from "./tx";
/** OrderBy defines the sorting order */
export var OrderBy;
(function (OrderBy) {
    /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
    OrderBy[OrderBy["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    OrderBy[OrderBy["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    OrderBy[OrderBy["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
    OrderBy[OrderBy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderBy || (OrderBy = {}));
export function orderByFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_BY_UNSPECIFIED":
            return OrderBy.ORDER_BY_UNSPECIFIED;
        case 1:
        case "ORDER_BY_ASC":
            return OrderBy.ORDER_BY_ASC;
        case 2:
        case "ORDER_BY_DESC":
            return OrderBy.ORDER_BY_DESC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderBy.UNRECOGNIZED;
    }
}
export function orderByToJSON(object) {
    switch (object) {
        case OrderBy.ORDER_BY_UNSPECIFIED:
            return "ORDER_BY_UNSPECIFIED";
        case OrderBy.ORDER_BY_ASC:
            return "ORDER_BY_ASC";
        case OrderBy.ORDER_BY_DESC:
            return "ORDER_BY_DESC";
        case OrderBy.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
export var BroadcastMode;
(function (BroadcastMode) {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
    /**
     * BROADCAST_MODE_BLOCK - DEPRECATED: use BROADCAST_MODE_SYNC instead,
     * BROADCAST_MODE_BLOCK is not supported by the SDK from v0.47.x onwards.
     *
     * @deprecated
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
     * a CheckTx execution response only.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
     * immediately.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
    BroadcastMode[BroadcastMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BroadcastMode || (BroadcastMode = {}));
export function broadcastModeFromJSON(object) {
    switch (object) {
        case 0:
        case "BROADCAST_MODE_UNSPECIFIED":
            return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
        case 1:
        case "BROADCAST_MODE_BLOCK":
            return BroadcastMode.BROADCAST_MODE_BLOCK;
        case 2:
        case "BROADCAST_MODE_SYNC":
            return BroadcastMode.BROADCAST_MODE_SYNC;
        case 3:
        case "BROADCAST_MODE_ASYNC":
            return BroadcastMode.BROADCAST_MODE_ASYNC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BroadcastMode.UNRECOGNIZED;
    }
}
export function broadcastModeToJSON(object) {
    switch (object) {
        case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
            return "BROADCAST_MODE_UNSPECIFIED";
        case BroadcastMode.BROADCAST_MODE_BLOCK:
            return "BROADCAST_MODE_BLOCK";
        case BroadcastMode.BROADCAST_MODE_SYNC:
            return "BROADCAST_MODE_SYNC";
        case BroadcastMode.BROADCAST_MODE_ASYNC:
            return "BROADCAST_MODE_ASYNC";
        case BroadcastMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseGetTxsEventRequest() {
    return { events: [], pagination: undefined, orderBy: 0, page: "0", limit: "0" };
}
export const GetTxsEventRequest = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.events) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.orderBy !== 0) {
            writer.uint32(24).int32(message.orderBy);
        }
        if (message.page !== "0") {
            writer.uint32(32).uint64(message.page);
        }
        if (message.limit !== "0") {
            writer.uint32(40).uint64(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxsEventRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.events.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.orderBy = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.page = longToString(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.limit = longToString(reader.uint64());
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
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => String(e)) : [],
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
            orderBy: isSet(object.orderBy) ? orderByFromJSON(object.orderBy) : 0,
            page: isSet(object.page) ? String(object.page) : "0",
            limit: isSet(object.limit) ? String(object.limit) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map((e) => e);
        }
        else {
            obj.events = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        message.orderBy !== undefined && (obj.orderBy = orderByToJSON(message.orderBy));
        message.page !== undefined && (obj.page = message.page);
        message.limit !== undefined && (obj.limit = message.limit);
        return obj;
    },
    create(base) {
        return GetTxsEventRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGetTxsEventRequest();
        message.events = ((_a = object.events) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        message.orderBy = (_b = object.orderBy) !== null && _b !== void 0 ? _b : 0;
        message.page = (_c = object.page) !== null && _c !== void 0 ? _c : "0";
        message.limit = (_d = object.limit) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseGetTxsEventResponse() {
    return { txs: [], txResponses: [], pagination: undefined, total: "0" };
}
export const GetTxsEventResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.txs) {
            Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.txResponses) {
            TxResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        if (message.total !== "0") {
            writer.uint32(32).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxsEventResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.txs.push(Tx.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.txResponses.push(TxResponse.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.total = longToString(reader.uint64());
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
            txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map((e) => Tx.fromJSON(e)) : [],
            txResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.txResponses) ? object.txResponses.map((e) => TxResponse.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            total: isSet(object.total) ? String(object.total) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map((e) => e ? Tx.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        if (message.txResponses) {
            obj.txResponses = message.txResponses.map((e) => e ? TxResponse.toJSON(e) : undefined);
        }
        else {
            obj.txResponses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.total !== undefined && (obj.total = message.total);
        return obj;
    },
    create(base) {
        return GetTxsEventResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetTxsEventResponse();
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map((e) => Tx.fromPartial(e))) || [];
        message.txResponses = ((_b = object.txResponses) === null || _b === void 0 ? void 0 : _b.map((e) => TxResponse.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        message.total = (_c = object.total) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseBroadcastTxRequest() {
    return { txBytes: new Uint8Array(), mode: 0 };
}
export const BroadcastTxRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txBytes.length !== 0) {
            writer.uint32(10).bytes(message.txBytes);
        }
        if (message.mode !== 0) {
            writer.uint32(16).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBroadcastTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.txBytes = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.mode = reader.int32();
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
            txBytes: isSet(object.txBytes) ? bytesFromBase64(object.txBytes) : new Uint8Array(),
            mode: isSet(object.mode) ? broadcastModeFromJSON(object.mode) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.txBytes !== undefined &&
            (obj.txBytes = base64FromBytes(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
        message.mode !== undefined && (obj.mode = broadcastModeToJSON(message.mode));
        return obj;
    },
    create(base) {
        return BroadcastTxRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBroadcastTxRequest();
        message.txBytes = (_a = object.txBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.mode = (_b = object.mode) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseBroadcastTxResponse() {
    return { txResponse: undefined };
}
export const BroadcastTxResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txResponse !== undefined) {
            TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBroadcastTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.txResponse = TxResponse.decode(reader, reader.uint32());
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
        return { txResponse: isSet(object.txResponse) ? TxResponse.fromJSON(object.txResponse) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.txResponse !== undefined &&
            (obj.txResponse = message.txResponse ? TxResponse.toJSON(message.txResponse) : undefined);
        return obj;
    },
    create(base) {
        return BroadcastTxResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseBroadcastTxResponse();
        message.txResponse = (object.txResponse !== undefined && object.txResponse !== null)
            ? TxResponse.fromPartial(object.txResponse)
            : undefined;
        return message;
    },
};
function createBaseSimulateRequest() {
    return { tx: undefined, txBytes: new Uint8Array() };
}
export const SimulateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx !== undefined) {
            Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.txBytes.length !== 0) {
            writer.uint32(18).bytes(message.txBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tx = Tx.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.txBytes = reader.bytes();
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
            tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
            txBytes: isSet(object.txBytes) ? bytesFromBase64(object.txBytes) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
        message.txBytes !== undefined &&
            (obj.txBytes = base64FromBytes(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
        return obj;
    },
    create(base) {
        return SimulateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSimulateRequest();
        message.tx = (object.tx !== undefined && object.tx !== null) ? Tx.fromPartial(object.tx) : undefined;
        message.txBytes = (_a = object.txBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseSimulateResponse() {
    return { gasInfo: undefined, result: undefined };
}
export const SimulateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.gasInfo !== undefined) {
            GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.gasInfo = GasInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.result = Result.decode(reader, reader.uint32());
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
            gasInfo: isSet(object.gasInfo) ? GasInfo.fromJSON(object.gasInfo) : undefined,
            result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.gasInfo !== undefined && (obj.gasInfo = message.gasInfo ? GasInfo.toJSON(message.gasInfo) : undefined);
        message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return SimulateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSimulateResponse();
        message.gasInfo = (object.gasInfo !== undefined && object.gasInfo !== null)
            ? GasInfo.fromPartial(object.gasInfo)
            : undefined;
        message.result = (object.result !== undefined && object.result !== null)
            ? Result.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseGetTxRequest() {
    return { hash: "" };
}
export const GetTxRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.hash = reader.string();
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
        return { hash: isSet(object.hash) ? String(object.hash) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    create(base) {
        return GetTxRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetTxRequest();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetTxResponse() {
    return { tx: undefined, txResponse: undefined };
}
export const GetTxResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx !== undefined) {
            Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.txResponse !== undefined) {
            TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tx = Tx.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.txResponse = TxResponse.decode(reader, reader.uint32());
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
            tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
            txResponse: isSet(object.txResponse) ? TxResponse.fromJSON(object.txResponse) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
        message.txResponse !== undefined &&
            (obj.txResponse = message.txResponse ? TxResponse.toJSON(message.txResponse) : undefined);
        return obj;
    },
    create(base) {
        return GetTxResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetTxResponse();
        message.tx = (object.tx !== undefined && object.tx !== null) ? Tx.fromPartial(object.tx) : undefined;
        message.txResponse = (object.txResponse !== undefined && object.txResponse !== null)
            ? TxResponse.fromPartial(object.txResponse)
            : undefined;
        return message;
    },
};
function createBaseGetBlockWithTxsRequest() {
    return { height: "0", pagination: undefined };
}
export const GetBlockWithTxsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockWithTxsRequest();
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
                    if (tag !== 18) {
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
        return {
            height: isSet(object.height) ? String(object.height) : "0",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return GetBlockWithTxsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetBlockWithTxsRequest();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseGetBlockWithTxsResponse() {
    return { txs: [], blockId: undefined, block: undefined, pagination: undefined };
}
export const GetBlockWithTxsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.txs) {
            Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockId !== undefined) {
            BlockID.encode(message.blockId, writer.uint32(18).fork()).ldelim();
        }
        if (message.block !== undefined) {
            Block.encode(message.block, writer.uint32(26).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockWithTxsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.txs.push(Tx.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.blockId = BlockID.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.block = Block.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
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
            txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map((e) => Tx.fromJSON(e)) : [],
            blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
            block: isSet(object.block) ? Block.fromJSON(object.block) : undefined,
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map((e) => e ? Tx.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
        message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return GetBlockWithTxsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetBlockWithTxsResponse();
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map((e) => Tx.fromPartial(e))) || [];
        message.blockId = (object.blockId !== undefined && object.blockId !== null)
            ? BlockID.fromPartial(object.blockId)
            : undefined;
        message.block = (object.block !== undefined && object.block !== null) ? Block.fromPartial(object.block) : undefined;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseTxDecodeRequest() {
    return { txBytes: new Uint8Array() };
}
export const TxDecodeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txBytes.length !== 0) {
            writer.uint32(10).bytes(message.txBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDecodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.txBytes = reader.bytes();
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
        return { txBytes: isSet(object.txBytes) ? bytesFromBase64(object.txBytes) : new Uint8Array() };
    },
    toJSON(message) {
        const obj = {};
        message.txBytes !== undefined &&
            (obj.txBytes = base64FromBytes(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
        return obj;
    },
    create(base) {
        return TxDecodeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTxDecodeRequest();
        message.txBytes = (_a = object.txBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseTxDecodeResponse() {
    return { tx: undefined };
}
export const TxDecodeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx !== undefined) {
            Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDecodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tx = Tx.decode(reader, reader.uint32());
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
        return { tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
        return obj;
    },
    create(base) {
        return TxDecodeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseTxDecodeResponse();
        message.tx = (object.tx !== undefined && object.tx !== null) ? Tx.fromPartial(object.tx) : undefined;
        return message;
    },
};
function createBaseTxEncodeRequest() {
    return { tx: undefined };
}
export const TxEncodeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx !== undefined) {
            Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxEncodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tx = Tx.decode(reader, reader.uint32());
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
        return { tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
        return obj;
    },
    create(base) {
        return TxEncodeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseTxEncodeRequest();
        message.tx = (object.tx !== undefined && object.tx !== null) ? Tx.fromPartial(object.tx) : undefined;
        return message;
    },
};
function createBaseTxEncodeResponse() {
    return { txBytes: new Uint8Array() };
}
export const TxEncodeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txBytes.length !== 0) {
            writer.uint32(10).bytes(message.txBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxEncodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.txBytes = reader.bytes();
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
        return { txBytes: isSet(object.txBytes) ? bytesFromBase64(object.txBytes) : new Uint8Array() };
    },
    toJSON(message) {
        const obj = {};
        message.txBytes !== undefined &&
            (obj.txBytes = base64FromBytes(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
        return obj;
    },
    create(base) {
        return TxEncodeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTxEncodeResponse();
        message.txBytes = (_a = object.txBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseTxEncodeAminoRequest() {
    return { aminoJson: "" };
}
export const TxEncodeAminoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.aminoJson !== "") {
            writer.uint32(10).string(message.aminoJson);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxEncodeAminoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.aminoJson = reader.string();
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
        return { aminoJson: isSet(object.aminoJson) ? String(object.aminoJson) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.aminoJson !== undefined && (obj.aminoJson = message.aminoJson);
        return obj;
    },
    create(base) {
        return TxEncodeAminoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTxEncodeAminoRequest();
        message.aminoJson = (_a = object.aminoJson) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseTxEncodeAminoResponse() {
    return { aminoBinary: new Uint8Array() };
}
export const TxEncodeAminoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.aminoBinary.length !== 0) {
            writer.uint32(10).bytes(message.aminoBinary);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxEncodeAminoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.aminoBinary = reader.bytes();
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
        return { aminoBinary: isSet(object.aminoBinary) ? bytesFromBase64(object.aminoBinary) : new Uint8Array() };
    },
    toJSON(message) {
        const obj = {};
        message.aminoBinary !== undefined &&
            (obj.aminoBinary = base64FromBytes(message.aminoBinary !== undefined ? message.aminoBinary : new Uint8Array()));
        return obj;
    },
    create(base) {
        return TxEncodeAminoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTxEncodeAminoResponse();
        message.aminoBinary = (_a = object.aminoBinary) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseTxDecodeAminoRequest() {
    return { aminoBinary: new Uint8Array() };
}
export const TxDecodeAminoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.aminoBinary.length !== 0) {
            writer.uint32(10).bytes(message.aminoBinary);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDecodeAminoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.aminoBinary = reader.bytes();
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
        return { aminoBinary: isSet(object.aminoBinary) ? bytesFromBase64(object.aminoBinary) : new Uint8Array() };
    },
    toJSON(message) {
        const obj = {};
        message.aminoBinary !== undefined &&
            (obj.aminoBinary = base64FromBytes(message.aminoBinary !== undefined ? message.aminoBinary : new Uint8Array()));
        return obj;
    },
    create(base) {
        return TxDecodeAminoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTxDecodeAminoRequest();
        message.aminoBinary = (_a = object.aminoBinary) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseTxDecodeAminoResponse() {
    return { aminoJson: "" };
}
export const TxDecodeAminoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.aminoJson !== "") {
            writer.uint32(10).string(message.aminoJson);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDecodeAminoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.aminoJson = reader.string();
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
        return { aminoJson: isSet(object.aminoJson) ? String(object.aminoJson) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.aminoJson !== undefined && (obj.aminoJson = message.aminoJson);
        return obj;
    },
    create(base) {
        return TxDecodeAminoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTxDecodeAminoResponse();
        message.aminoJson = (_a = object.aminoJson) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
export class ServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Simulate = this.Simulate.bind(this);
        this.GetTx = this.GetTx.bind(this);
        this.BroadcastTx = this.BroadcastTx.bind(this);
        this.GetTxsEvent = this.GetTxsEvent.bind(this);
        this.GetBlockWithTxs = this.GetBlockWithTxs.bind(this);
        this.TxDecode = this.TxDecode.bind(this);
        this.TxEncode = this.TxEncode.bind(this);
        this.TxEncodeAmino = this.TxEncodeAmino.bind(this);
        this.TxDecodeAmino = this.TxDecodeAmino.bind(this);
    }
    Simulate(request, metadata) {
        return this.rpc.unary(ServiceSimulateDesc, SimulateRequest.fromPartial(request), metadata);
    }
    GetTx(request, metadata) {
        return this.rpc.unary(ServiceGetTxDesc, GetTxRequest.fromPartial(request), metadata);
    }
    BroadcastTx(request, metadata) {
        return this.rpc.unary(ServiceBroadcastTxDesc, BroadcastTxRequest.fromPartial(request), metadata);
    }
    GetTxsEvent(request, metadata) {
        return this.rpc.unary(ServiceGetTxsEventDesc, GetTxsEventRequest.fromPartial(request), metadata);
    }
    GetBlockWithTxs(request, metadata) {
        return this.rpc.unary(ServiceGetBlockWithTxsDesc, GetBlockWithTxsRequest.fromPartial(request), metadata);
    }
    TxDecode(request, metadata) {
        return this.rpc.unary(ServiceTxDecodeDesc, TxDecodeRequest.fromPartial(request), metadata);
    }
    TxEncode(request, metadata) {
        return this.rpc.unary(ServiceTxEncodeDesc, TxEncodeRequest.fromPartial(request), metadata);
    }
    TxEncodeAmino(request, metadata) {
        return this.rpc.unary(ServiceTxEncodeAminoDesc, TxEncodeAminoRequest.fromPartial(request), metadata);
    }
    TxDecodeAmino(request, metadata) {
        return this.rpc.unary(ServiceTxDecodeAminoDesc, TxDecodeAminoRequest.fromPartial(request), metadata);
    }
}
export const ServiceDesc = { serviceName: "cosmos.tx.v1beta1.Service" };
export const ServiceSimulateDesc = {
    methodName: "Simulate",
    service: ServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return SimulateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = SimulateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const ServiceGetTxDesc = {
    methodName: "GetTx",
    service: ServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetTxRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetTxResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const ServiceBroadcastTxDesc = {
    methodName: "BroadcastTx",
    service: ServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return BroadcastTxRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = BroadcastTxResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const ServiceGetTxsEventDesc = {
    methodName: "GetTxsEvent",
    service: ServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetTxsEventRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetTxsEventResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const ServiceGetBlockWithTxsDesc = {
    methodName: "GetBlockWithTxs",
    service: ServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetBlockWithTxsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetBlockWithTxsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const ServiceTxDecodeDesc = {
    methodName: "TxDecode",
    service: ServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return TxDecodeRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = TxDecodeResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const ServiceTxEncodeDesc = {
    methodName: "TxEncode",
    service: ServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return TxEncodeRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = TxEncodeResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const ServiceTxEncodeAminoDesc = {
    methodName: "TxEncodeAmino",
    service: ServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return TxEncodeAminoRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = TxEncodeAminoResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const ServiceTxDecodeAminoDesc = {
    methodName: "TxDecodeAmino",
    service: ServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return TxDecodeAminoRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = TxDecodeAminoResponse.decode(data);
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
