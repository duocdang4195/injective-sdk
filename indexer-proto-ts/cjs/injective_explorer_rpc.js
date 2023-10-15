"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWasmCodeByIDResponse = exports.GetWasmCodeByIDRequest = exports.ContractPermission = exports.Checksum = exports.WasmCode = exports.GetWasmCodesResponse = exports.GetWasmCodesRequest = exports.IBCTransferTx = exports.GetIBCTransferTxsResponse = exports.GetIBCTransferTxsRequest = exports.PeggyWithdrawalTx = exports.GetPeggyWithdrawalTxsResponse = exports.GetPeggyWithdrawalTxsRequest = exports.PeggyDepositTx = exports.GetPeggyDepositTxsResponse = exports.GetPeggyDepositTxsRequest = exports.GetTxByTxHashResponse = exports.GetTxByTxHashRequest = exports.GetTxsResponse = exports.GetTxsRequest = exports.GetValidatorUptimeResponse = exports.GetValidatorUptimeRequest = exports.GetValidatorResponse = exports.GetValidatorRequest = exports.SlashingEvent = exports.ValidatorUptime = exports.ValidatorDescription = exports.Validator = exports.GetValidatorsResponse = exports.GetValidatorsRequest = exports.TxData = exports.BlockDetailInfo = exports.GetBlockResponse = exports.GetBlockRequest = exports.TxDataRPC = exports.BlockInfo = exports.GetBlocksResponse = exports.GetBlocksRequest = exports.GetContractTxsResponse = exports.GetContractTxsRequest = exports.Signature = exports.Event_AttributesEntry = exports.Event = exports.CosmosCoin = exports.GasFee = exports.TxDetailData = exports.Paging = exports.GetAccountTxsResponse = exports.GetAccountTxsRequest = exports.protobufPackage = void 0;
exports.GrpcWebError = exports.GrpcWebImpl = exports.InjectiveExplorerRPCStreamBlocksDesc = exports.InjectiveExplorerRPCStreamTxsDesc = exports.InjectiveExplorerRPCGetBankTransfersDesc = exports.InjectiveExplorerRPCRelayersDesc = exports.InjectiveExplorerRPCGetCw20BalanceDesc = exports.InjectiveExplorerRPCGetWasmContractByAddressDesc = exports.InjectiveExplorerRPCGetWasmContractsDesc = exports.InjectiveExplorerRPCGetWasmCodeByIDDesc = exports.InjectiveExplorerRPCGetWasmCodesDesc = exports.InjectiveExplorerRPCGetIBCTransferTxsDesc = exports.InjectiveExplorerRPCGetPeggyWithdrawalTxsDesc = exports.InjectiveExplorerRPCGetPeggyDepositTxsDesc = exports.InjectiveExplorerRPCGetTxByTxHashDesc = exports.InjectiveExplorerRPCGetTxsDesc = exports.InjectiveExplorerRPCGetValidatorUptimeDesc = exports.InjectiveExplorerRPCGetValidatorDesc = exports.InjectiveExplorerRPCGetValidatorsDesc = exports.InjectiveExplorerRPCGetBlockDesc = exports.InjectiveExplorerRPCGetBlocksDesc = exports.InjectiveExplorerRPCGetContractTxsDesc = exports.InjectiveExplorerRPCGetAccountTxsDesc = exports.InjectiveExplorerRPCDesc = exports.InjectiveExplorerRPCClientImpl = exports.StreamBlocksResponse = exports.StreamBlocksRequest = exports.StreamTxsResponse = exports.StreamTxsRequest = exports.Coin = exports.BankTransfer = exports.GetBankTransfersResponse = exports.GetBankTransfersRequest = exports.Relayer = exports.RelayerMarkets = exports.RelayersResponse = exports.RelayersRequest = exports.WasmCw20Balance = exports.GetCw20BalanceResponse = exports.GetCw20BalanceRequest = exports.GetWasmContractByAddressResponse = exports.GetWasmContractByAddressRequest = exports.Cw20MarketingInfo = exports.Cw20TokenInfo = exports.Cw20Metadata = exports.ContractFund = exports.WasmContract = exports.GetWasmContractsResponse = exports.GetWasmContractsRequest = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.protobufPackage = "injective_explorer_rpc";
function createBaseGetAccountTxsRequest() {
    return {
        address: "",
        before: "0",
        after: "0",
        limit: 0,
        skip: "0",
        type: "",
        module: "",
        fromNumber: "0",
        toNumber: "0",
        startTime: "0",
        endTime: "0",
        status: "",
    };
}
exports.GetAccountTxsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.before !== "0") {
            writer.uint32(16).uint64(message.before);
        }
        if (message.after !== "0") {
            writer.uint32(24).uint64(message.after);
        }
        if (message.limit !== 0) {
            writer.uint32(32).sint32(message.limit);
        }
        if (message.skip !== "0") {
            writer.uint32(40).uint64(message.skip);
        }
        if (message.type !== "") {
            writer.uint32(50).string(message.type);
        }
        if (message.module !== "") {
            writer.uint32(58).string(message.module);
        }
        if (message.fromNumber !== "0") {
            writer.uint32(64).sint64(message.fromNumber);
        }
        if (message.toNumber !== "0") {
            writer.uint32(72).sint64(message.toNumber);
        }
        if (message.startTime !== "0") {
            writer.uint32(80).sint64(message.startTime);
        }
        if (message.endTime !== "0") {
            writer.uint32(88).sint64(message.endTime);
        }
        if (message.status !== "") {
            writer.uint32(98).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAccountTxsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.before = longToString(reader.uint64());
                    break;
                case 3:
                    message.after = longToString(reader.uint64());
                    break;
                case 4:
                    message.limit = reader.sint32();
                    break;
                case 5:
                    message.skip = longToString(reader.uint64());
                    break;
                case 6:
                    message.type = reader.string();
                    break;
                case 7:
                    message.module = reader.string();
                    break;
                case 8:
                    message.fromNumber = longToString(reader.sint64());
                    break;
                case 9:
                    message.toNumber = longToString(reader.sint64());
                    break;
                case 10:
                    message.startTime = longToString(reader.sint64());
                    break;
                case 11:
                    message.endTime = longToString(reader.sint64());
                    break;
                case 12:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            before: isSet(object.before) ? String(object.before) : "0",
            after: isSet(object.after) ? String(object.after) : "0",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            skip: isSet(object.skip) ? String(object.skip) : "0",
            type: isSet(object.type) ? String(object.type) : "",
            module: isSet(object.module) ? String(object.module) : "",
            fromNumber: isSet(object.fromNumber) ? String(object.fromNumber) : "0",
            toNumber: isSet(object.toNumber) ? String(object.toNumber) : "0",
            startTime: isSet(object.startTime) ? String(object.startTime) : "0",
            endTime: isSet(object.endTime) ? String(object.endTime) : "0",
            status: isSet(object.status) ? String(object.status) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.before !== undefined && (obj.before = message.before);
        message.after !== undefined && (obj.after = message.after);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.skip !== undefined && (obj.skip = message.skip);
        message.type !== undefined && (obj.type = message.type);
        message.module !== undefined && (obj.module = message.module);
        message.fromNumber !== undefined && (obj.fromNumber = message.fromNumber);
        message.toNumber !== undefined && (obj.toNumber = message.toNumber);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return exports.GetAccountTxsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBaseGetAccountTxsRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.before = (_b = object.before) !== null && _b !== void 0 ? _b : "0";
        message.after = (_c = object.after) !== null && _c !== void 0 ? _c : "0";
        message.limit = (_d = object.limit) !== null && _d !== void 0 ? _d : 0;
        message.skip = (_e = object.skip) !== null && _e !== void 0 ? _e : "0";
        message.type = (_f = object.type) !== null && _f !== void 0 ? _f : "";
        message.module = (_g = object.module) !== null && _g !== void 0 ? _g : "";
        message.fromNumber = (_h = object.fromNumber) !== null && _h !== void 0 ? _h : "0";
        message.toNumber = (_j = object.toNumber) !== null && _j !== void 0 ? _j : "0";
        message.startTime = (_k = object.startTime) !== null && _k !== void 0 ? _k : "0";
        message.endTime = (_l = object.endTime) !== null && _l !== void 0 ? _l : "0";
        message.status = (_m = object.status) !== null && _m !== void 0 ? _m : "";
        return message;
    },
};
function createBaseGetAccountTxsResponse() {
    return { paging: undefined, data: [] };
}
exports.GetAccountTxsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.data) {
            exports.TxDetailData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAccountTxsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paging = exports.Paging.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data.push(exports.TxDetailData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => exports.TxDetailData.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        if (message.data) {
            obj.data = message.data.map((e) => e ? exports.TxDetailData.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetAccountTxsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAccountTxsResponse();
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        message.data = ((_a = object.data) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TxDetailData.fromPartial(e))) || [];
        return message;
    },
};
function createBasePaging() {
    return { total: "0", from: 0, to: 0, countBySubaccount: "0", next: [] };
}
exports.Paging = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.total !== "0") {
            writer.uint32(8).sint64(message.total);
        }
        if (message.from !== 0) {
            writer.uint32(16).sint32(message.from);
        }
        if (message.to !== 0) {
            writer.uint32(24).sint32(message.to);
        }
        if (message.countBySubaccount !== "0") {
            writer.uint32(32).sint64(message.countBySubaccount);
        }
        for (const v of message.next) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePaging();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = longToString(reader.sint64());
                    break;
                case 2:
                    message.from = reader.sint32();
                    break;
                case 3:
                    message.to = reader.sint32();
                    break;
                case 4:
                    message.countBySubaccount = longToString(reader.sint64());
                    break;
                case 5:
                    message.next.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            total: isSet(object.total) ? String(object.total) : "0",
            from: isSet(object.from) ? Number(object.from) : 0,
            to: isSet(object.to) ? Number(object.to) : 0,
            countBySubaccount: isSet(object.countBySubaccount) ? String(object.countBySubaccount) : "0",
            next: Array.isArray(object === null || object === void 0 ? void 0 : object.next) ? object.next.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.total !== undefined && (obj.total = message.total);
        message.from !== undefined && (obj.from = Math.round(message.from));
        message.to !== undefined && (obj.to = Math.round(message.to));
        message.countBySubaccount !== undefined && (obj.countBySubaccount = message.countBySubaccount);
        if (message.next) {
            obj.next = message.next.map((e) => e);
        }
        else {
            obj.next = [];
        }
        return obj;
    },
    create(base) {
        return exports.Paging.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBasePaging();
        message.total = (_a = object.total) !== null && _a !== void 0 ? _a : "0";
        message.from = (_b = object.from) !== null && _b !== void 0 ? _b : 0;
        message.to = (_c = object.to) !== null && _c !== void 0 ? _c : 0;
        message.countBySubaccount = (_d = object.countBySubaccount) !== null && _d !== void 0 ? _d : "0";
        message.next = ((_e = object.next) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
function createBaseTxDetailData() {
    return {
        id: "",
        blockNumber: "0",
        blockTimestamp: "",
        hash: "",
        code: 0,
        data: new Uint8Array(),
        info: "",
        gasWanted: "0",
        gasUsed: "0",
        gasFee: undefined,
        codespace: "",
        events: [],
        txType: "",
        messages: new Uint8Array(),
        signatures: [],
        memo: "",
        txNumber: "0",
        blockUnixTimestamp: "0",
        errorLog: "",
        logs: new Uint8Array(),
        claimIds: [],
    };
}
exports.TxDetailData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.blockNumber !== "0") {
            writer.uint32(16).uint64(message.blockNumber);
        }
        if (message.blockTimestamp !== "") {
            writer.uint32(26).string(message.blockTimestamp);
        }
        if (message.hash !== "") {
            writer.uint32(34).string(message.hash);
        }
        if (message.code !== 0) {
            writer.uint32(40).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        if (message.info !== "") {
            writer.uint32(66).string(message.info);
        }
        if (message.gasWanted !== "0") {
            writer.uint32(72).sint64(message.gasWanted);
        }
        if (message.gasUsed !== "0") {
            writer.uint32(80).sint64(message.gasUsed);
        }
        if (message.gasFee !== undefined) {
            exports.GasFee.encode(message.gasFee, writer.uint32(90).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(98).string(message.codespace);
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(106).fork()).ldelim();
        }
        if (message.txType !== "") {
            writer.uint32(114).string(message.txType);
        }
        if (message.messages.length !== 0) {
            writer.uint32(122).bytes(message.messages);
        }
        for (const v of message.signatures) {
            exports.Signature.encode(v, writer.uint32(130).fork()).ldelim();
        }
        if (message.memo !== "") {
            writer.uint32(138).string(message.memo);
        }
        if (message.txNumber !== "0") {
            writer.uint32(144).uint64(message.txNumber);
        }
        if (message.blockUnixTimestamp !== "0") {
            writer.uint32(152).uint64(message.blockUnixTimestamp);
        }
        if (message.errorLog !== "") {
            writer.uint32(162).string(message.errorLog);
        }
        if (message.logs.length !== 0) {
            writer.uint32(170).bytes(message.logs);
        }
        writer.uint32(178).fork();
        for (const v of message.claimIds) {
            writer.sint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDetailData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.blockNumber = longToString(reader.uint64());
                    break;
                case 3:
                    message.blockTimestamp = reader.string();
                    break;
                case 4:
                    message.hash = reader.string();
                    break;
                case 5:
                    message.code = reader.uint32();
                    break;
                case 6:
                    message.data = reader.bytes();
                    break;
                case 8:
                    message.info = reader.string();
                    break;
                case 9:
                    message.gasWanted = longToString(reader.sint64());
                    break;
                case 10:
                    message.gasUsed = longToString(reader.sint64());
                    break;
                case 11:
                    message.gasFee = exports.GasFee.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.codespace = reader.string();
                    break;
                case 13:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.txType = reader.string();
                    break;
                case 15:
                    message.messages = reader.bytes();
                    break;
                case 16:
                    message.signatures.push(exports.Signature.decode(reader, reader.uint32()));
                    break;
                case 17:
                    message.memo = reader.string();
                    break;
                case 18:
                    message.txNumber = longToString(reader.uint64());
                    break;
                case 19:
                    message.blockUnixTimestamp = longToString(reader.uint64());
                    break;
                case 20:
                    message.errorLog = reader.string();
                    break;
                case 21:
                    message.logs = reader.bytes();
                    break;
                case 22:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.claimIds.push(longToString(reader.sint64()));
                        }
                    }
                    else {
                        message.claimIds.push(longToString(reader.sint64()));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            blockNumber: isSet(object.blockNumber) ? String(object.blockNumber) : "0",
            blockTimestamp: isSet(object.blockTimestamp) ? String(object.blockTimestamp) : "",
            hash: isSet(object.hash) ? String(object.hash) : "",
            code: isSet(object.code) ? Number(object.code) : 0,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            info: isSet(object.info) ? String(object.info) : "",
            gasWanted: isSet(object.gasWanted) ? String(object.gasWanted) : "0",
            gasUsed: isSet(object.gasUsed) ? String(object.gasUsed) : "0",
            gasFee: isSet(object.gasFee) ? exports.GasFee.fromJSON(object.gasFee) : undefined,
            codespace: isSet(object.codespace) ? String(object.codespace) : "",
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : [],
            txType: isSet(object.txType) ? String(object.txType) : "",
            messages: isSet(object.messages) ? bytesFromBase64(object.messages) : new Uint8Array(),
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map((e) => exports.Signature.fromJSON(e)) : [],
            memo: isSet(object.memo) ? String(object.memo) : "",
            txNumber: isSet(object.txNumber) ? String(object.txNumber) : "0",
            blockUnixTimestamp: isSet(object.blockUnixTimestamp) ? String(object.blockUnixTimestamp) : "0",
            errorLog: isSet(object.errorLog) ? String(object.errorLog) : "",
            logs: isSet(object.logs) ? bytesFromBase64(object.logs) : new Uint8Array(),
            claimIds: Array.isArray(object === null || object === void 0 ? void 0 : object.claimIds) ? object.claimIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.blockNumber !== undefined && (obj.blockNumber = message.blockNumber);
        message.blockTimestamp !== undefined && (obj.blockTimestamp = message.blockTimestamp);
        message.hash !== undefined && (obj.hash = message.hash);
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.info !== undefined && (obj.info = message.info);
        message.gasWanted !== undefined && (obj.gasWanted = message.gasWanted);
        message.gasUsed !== undefined && (obj.gasUsed = message.gasUsed);
        message.gasFee !== undefined && (obj.gasFee = message.gasFee ? exports.GasFee.toJSON(message.gasFee) : undefined);
        message.codespace !== undefined && (obj.codespace = message.codespace);
        if (message.events) {
            obj.events = message.events.map((e) => e ? exports.Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        message.txType !== undefined && (obj.txType = message.txType);
        message.messages !== undefined &&
            (obj.messages = base64FromBytes(message.messages !== undefined ? message.messages : new Uint8Array()));
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => e ? exports.Signature.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        message.memo !== undefined && (obj.memo = message.memo);
        message.txNumber !== undefined && (obj.txNumber = message.txNumber);
        message.blockUnixTimestamp !== undefined && (obj.blockUnixTimestamp = message.blockUnixTimestamp);
        message.errorLog !== undefined && (obj.errorLog = message.errorLog);
        message.logs !== undefined &&
            (obj.logs = base64FromBytes(message.logs !== undefined ? message.logs : new Uint8Array()));
        if (message.claimIds) {
            obj.claimIds = message.claimIds.map((e) => e);
        }
        else {
            obj.claimIds = [];
        }
        return obj;
    },
    create(base) {
        return exports.TxDetailData.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        const message = createBaseTxDetailData();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.blockNumber = (_b = object.blockNumber) !== null && _b !== void 0 ? _b : "0";
        message.blockTimestamp = (_c = object.blockTimestamp) !== null && _c !== void 0 ? _c : "";
        message.hash = (_d = object.hash) !== null && _d !== void 0 ? _d : "";
        message.code = (_e = object.code) !== null && _e !== void 0 ? _e : 0;
        message.data = (_f = object.data) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.info = (_g = object.info) !== null && _g !== void 0 ? _g : "";
        message.gasWanted = (_h = object.gasWanted) !== null && _h !== void 0 ? _h : "0";
        message.gasUsed = (_j = object.gasUsed) !== null && _j !== void 0 ? _j : "0";
        message.gasFee = (object.gasFee !== undefined && object.gasFee !== null)
            ? exports.GasFee.fromPartial(object.gasFee)
            : undefined;
        message.codespace = (_k = object.codespace) !== null && _k !== void 0 ? _k : "";
        message.events = ((_l = object.events) === null || _l === void 0 ? void 0 : _l.map((e) => exports.Event.fromPartial(e))) || [];
        message.txType = (_m = object.txType) !== null && _m !== void 0 ? _m : "";
        message.messages = (_o = object.messages) !== null && _o !== void 0 ? _o : new Uint8Array();
        message.signatures = ((_p = object.signatures) === null || _p === void 0 ? void 0 : _p.map((e) => exports.Signature.fromPartial(e))) || [];
        message.memo = (_q = object.memo) !== null && _q !== void 0 ? _q : "";
        message.txNumber = (_r = object.txNumber) !== null && _r !== void 0 ? _r : "0";
        message.blockUnixTimestamp = (_s = object.blockUnixTimestamp) !== null && _s !== void 0 ? _s : "0";
        message.errorLog = (_t = object.errorLog) !== null && _t !== void 0 ? _t : "";
        message.logs = (_u = object.logs) !== null && _u !== void 0 ? _u : new Uint8Array();
        message.claimIds = ((_v = object.claimIds) === null || _v === void 0 ? void 0 : _v.map((e) => e)) || [];
        return message;
    },
};
function createBaseGasFee() {
    return { amount: [], gasLimit: "0", payer: "", granter: "" };
}
exports.GasFee = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.amount) {
            exports.CosmosCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.gasLimit !== "0") {
            writer.uint32(16).uint64(message.gasLimit);
        }
        if (message.payer !== "") {
            writer.uint32(26).string(message.payer);
        }
        if (message.granter !== "") {
            writer.uint32(34).string(message.granter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGasFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(exports.CosmosCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.gasLimit = longToString(reader.uint64());
                    break;
                case 3:
                    message.payer = reader.string();
                    break;
                case 4:
                    message.granter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => exports.CosmosCoin.fromJSON(e)) : [],
            gasLimit: isSet(object.gasLimit) ? String(object.gasLimit) : "0",
            payer: isSet(object.payer) ? String(object.payer) : "",
            granter: isSet(object.granter) ? String(object.granter) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map((e) => e ? exports.CosmosCoin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.gasLimit !== undefined && (obj.gasLimit = message.gasLimit);
        message.payer !== undefined && (obj.payer = message.payer);
        message.granter !== undefined && (obj.granter = message.granter);
        return obj;
    },
    create(base) {
        return exports.GasFee.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGasFee();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map((e) => exports.CosmosCoin.fromPartial(e))) || [];
        message.gasLimit = (_b = object.gasLimit) !== null && _b !== void 0 ? _b : "0";
        message.payer = (_c = object.payer) !== null && _c !== void 0 ? _c : "";
        message.granter = (_d = object.granter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseCosmosCoin() {
    return { denom: "", amount: "" };
}
exports.CosmosCoin = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCosmosCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            denom: isSet(object.denom) ? String(object.denom) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    create(base) {
        return exports.CosmosCoin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCosmosCoin();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEvent() {
    return { type: "", attributes: {} };
}
exports.Event = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        Object.entries(message.attributes).forEach(([key, value]) => {
            exports.Event_AttributesEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    const entry2 = exports.Event_AttributesEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.attributes[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            type: isSet(object.type) ? String(object.type) : "",
            attributes: isObject(object.attributes)
                ? Object.entries(object.attributes).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        obj.attributes = {};
        if (message.attributes) {
            Object.entries(message.attributes).forEach(([k, v]) => {
                obj.attributes[k] = v;
            });
        }
        return obj;
    },
    create(base) {
        return exports.Event.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEvent();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.attributes = Object.entries((_b = object.attributes) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseEvent_AttributesEntry() {
    return { key: "", value: "" };
}
exports.Event_AttributesEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent_AttributesEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return exports.Event_AttributesEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEvent_AttributesEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseSignature() {
    return { pubkey: "", address: "", sequence: "0", signature: "" };
}
exports.Signature = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pubkey !== "") {
            writer.uint32(10).string(message.pubkey);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.sequence !== "0") {
            writer.uint32(24).uint64(message.sequence);
        }
        if (message.signature !== "") {
            writer.uint32(34).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignature();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubkey = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.sequence = longToString(reader.uint64());
                    break;
                case 4:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pubkey: isSet(object.pubkey) ? String(object.pubkey) : "",
            address: isSet(object.address) ? String(object.address) : "",
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
            signature: isSet(object.signature) ? String(object.signature) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.pubkey !== undefined && (obj.pubkey = message.pubkey);
        message.address !== undefined && (obj.address = message.address);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    create(base) {
        return exports.Signature.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSignature();
        message.pubkey = (_a = object.pubkey) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.sequence = (_c = object.sequence) !== null && _c !== void 0 ? _c : "0";
        message.signature = (_d = object.signature) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseGetContractTxsRequest() {
    return { address: "", limit: 0, skip: "0", fromNumber: "0", toNumber: "0" };
}
exports.GetContractTxsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.limit !== 0) {
            writer.uint32(16).sint32(message.limit);
        }
        if (message.skip !== "0") {
            writer.uint32(24).uint64(message.skip);
        }
        if (message.fromNumber !== "0") {
            writer.uint32(32).sint64(message.fromNumber);
        }
        if (message.toNumber !== "0") {
            writer.uint32(40).sint64(message.toNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetContractTxsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.limit = reader.sint32();
                    break;
                case 3:
                    message.skip = longToString(reader.uint64());
                    break;
                case 4:
                    message.fromNumber = longToString(reader.sint64());
                    break;
                case 5:
                    message.toNumber = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            skip: isSet(object.skip) ? String(object.skip) : "0",
            fromNumber: isSet(object.fromNumber) ? String(object.fromNumber) : "0",
            toNumber: isSet(object.toNumber) ? String(object.toNumber) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.skip !== undefined && (obj.skip = message.skip);
        message.fromNumber !== undefined && (obj.fromNumber = message.fromNumber);
        message.toNumber !== undefined && (obj.toNumber = message.toNumber);
        return obj;
    },
    create(base) {
        return exports.GetContractTxsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseGetContractTxsRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.limit = (_b = object.limit) !== null && _b !== void 0 ? _b : 0;
        message.skip = (_c = object.skip) !== null && _c !== void 0 ? _c : "0";
        message.fromNumber = (_d = object.fromNumber) !== null && _d !== void 0 ? _d : "0";
        message.toNumber = (_e = object.toNumber) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
function createBaseGetContractTxsResponse() {
    return { paging: undefined, data: [] };
}
exports.GetContractTxsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.data) {
            exports.TxDetailData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetContractTxsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paging = exports.Paging.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data.push(exports.TxDetailData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => exports.TxDetailData.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        if (message.data) {
            obj.data = message.data.map((e) => e ? exports.TxDetailData.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetContractTxsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetContractTxsResponse();
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        message.data = ((_a = object.data) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TxDetailData.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetBlocksRequest() {
    return { before: "0", after: "0", limit: 0 };
}
exports.GetBlocksRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.before !== "0") {
            writer.uint32(8).uint64(message.before);
        }
        if (message.after !== "0") {
            writer.uint32(16).uint64(message.after);
        }
        if (message.limit !== 0) {
            writer.uint32(24).sint32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlocksRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.before = longToString(reader.uint64());
                    break;
                case 2:
                    message.after = longToString(reader.uint64());
                    break;
                case 3:
                    message.limit = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            before: isSet(object.before) ? String(object.before) : "0",
            after: isSet(object.after) ? String(object.after) : "0",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.before !== undefined && (obj.before = message.before);
        message.after !== undefined && (obj.after = message.after);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        return obj;
    },
    create(base) {
        return exports.GetBlocksRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetBlocksRequest();
        message.before = (_a = object.before) !== null && _a !== void 0 ? _a : "0";
        message.after = (_b = object.after) !== null && _b !== void 0 ? _b : "0";
        message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseGetBlocksResponse() {
    return { paging: undefined, data: [] };
}
exports.GetBlocksResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.data) {
            exports.BlockInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlocksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paging = exports.Paging.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data.push(exports.BlockInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => exports.BlockInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        if (message.data) {
            obj.data = message.data.map((e) => e ? exports.BlockInfo.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetBlocksResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetBlocksResponse();
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        message.data = ((_a = object.data) === null || _a === void 0 ? void 0 : _a.map((e) => exports.BlockInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBlockInfo() {
    return {
        height: "0",
        proposer: "",
        moniker: "",
        blockHash: "",
        parentHash: "",
        numPreCommits: "0",
        numTxs: "0",
        txs: [],
        timestamp: "",
    };
}
exports.BlockInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).uint64(message.height);
        }
        if (message.proposer !== "") {
            writer.uint32(18).string(message.proposer);
        }
        if (message.moniker !== "") {
            writer.uint32(26).string(message.moniker);
        }
        if (message.blockHash !== "") {
            writer.uint32(34).string(message.blockHash);
        }
        if (message.parentHash !== "") {
            writer.uint32(42).string(message.parentHash);
        }
        if (message.numPreCommits !== "0") {
            writer.uint32(48).sint64(message.numPreCommits);
        }
        if (message.numTxs !== "0") {
            writer.uint32(56).sint64(message.numTxs);
        }
        for (const v of message.txs) {
            exports.TxDataRPC.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.timestamp !== "") {
            writer.uint32(74).string(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.uint64());
                    break;
                case 2:
                    message.proposer = reader.string();
                    break;
                case 3:
                    message.moniker = reader.string();
                    break;
                case 4:
                    message.blockHash = reader.string();
                    break;
                case 5:
                    message.parentHash = reader.string();
                    break;
                case 6:
                    message.numPreCommits = longToString(reader.sint64());
                    break;
                case 7:
                    message.numTxs = longToString(reader.sint64());
                    break;
                case 8:
                    message.txs.push(exports.TxDataRPC.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.timestamp = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            height: isSet(object.height) ? String(object.height) : "0",
            proposer: isSet(object.proposer) ? String(object.proposer) : "",
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
            parentHash: isSet(object.parentHash) ? String(object.parentHash) : "",
            numPreCommits: isSet(object.numPreCommits) ? String(object.numPreCommits) : "0",
            numTxs: isSet(object.numTxs) ? String(object.numTxs) : "0",
            txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map((e) => exports.TxDataRPC.fromJSON(e)) : [],
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.proposer !== undefined && (obj.proposer = message.proposer);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.blockHash !== undefined && (obj.blockHash = message.blockHash);
        message.parentHash !== undefined && (obj.parentHash = message.parentHash);
        message.numPreCommits !== undefined && (obj.numPreCommits = message.numPreCommits);
        message.numTxs !== undefined && (obj.numTxs = message.numTxs);
        if (message.txs) {
            obj.txs = message.txs.map((e) => e ? exports.TxDataRPC.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return exports.BlockInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseBlockInfo();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.proposer = (_b = object.proposer) !== null && _b !== void 0 ? _b : "";
        message.moniker = (_c = object.moniker) !== null && _c !== void 0 ? _c : "";
        message.blockHash = (_d = object.blockHash) !== null && _d !== void 0 ? _d : "";
        message.parentHash = (_e = object.parentHash) !== null && _e !== void 0 ? _e : "";
        message.numPreCommits = (_f = object.numPreCommits) !== null && _f !== void 0 ? _f : "0";
        message.numTxs = (_g = object.numTxs) !== null && _g !== void 0 ? _g : "0";
        message.txs = ((_h = object.txs) === null || _h === void 0 ? void 0 : _h.map((e) => exports.TxDataRPC.fromPartial(e))) || [];
        message.timestamp = (_j = object.timestamp) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
function createBaseTxDataRPC() {
    return {
        id: "",
        blockNumber: "0",
        blockTimestamp: "",
        hash: "",
        codespace: "",
        messages: "",
        txNumber: "0",
        errorLog: "",
        code: 0,
        claimIds: [],
    };
}
exports.TxDataRPC = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.blockNumber !== "0") {
            writer.uint32(16).uint64(message.blockNumber);
        }
        if (message.blockTimestamp !== "") {
            writer.uint32(26).string(message.blockTimestamp);
        }
        if (message.hash !== "") {
            writer.uint32(34).string(message.hash);
        }
        if (message.codespace !== "") {
            writer.uint32(42).string(message.codespace);
        }
        if (message.messages !== "") {
            writer.uint32(50).string(message.messages);
        }
        if (message.txNumber !== "0") {
            writer.uint32(56).uint64(message.txNumber);
        }
        if (message.errorLog !== "") {
            writer.uint32(66).string(message.errorLog);
        }
        if (message.code !== 0) {
            writer.uint32(72).uint32(message.code);
        }
        writer.uint32(82).fork();
        for (const v of message.claimIds) {
            writer.sint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDataRPC();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.blockNumber = longToString(reader.uint64());
                    break;
                case 3:
                    message.blockTimestamp = reader.string();
                    break;
                case 4:
                    message.hash = reader.string();
                    break;
                case 5:
                    message.codespace = reader.string();
                    break;
                case 6:
                    message.messages = reader.string();
                    break;
                case 7:
                    message.txNumber = longToString(reader.uint64());
                    break;
                case 8:
                    message.errorLog = reader.string();
                    break;
                case 9:
                    message.code = reader.uint32();
                    break;
                case 10:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.claimIds.push(longToString(reader.sint64()));
                        }
                    }
                    else {
                        message.claimIds.push(longToString(reader.sint64()));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            blockNumber: isSet(object.blockNumber) ? String(object.blockNumber) : "0",
            blockTimestamp: isSet(object.blockTimestamp) ? String(object.blockTimestamp) : "",
            hash: isSet(object.hash) ? String(object.hash) : "",
            codespace: isSet(object.codespace) ? String(object.codespace) : "",
            messages: isSet(object.messages) ? String(object.messages) : "",
            txNumber: isSet(object.txNumber) ? String(object.txNumber) : "0",
            errorLog: isSet(object.errorLog) ? String(object.errorLog) : "",
            code: isSet(object.code) ? Number(object.code) : 0,
            claimIds: Array.isArray(object === null || object === void 0 ? void 0 : object.claimIds) ? object.claimIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.blockNumber !== undefined && (obj.blockNumber = message.blockNumber);
        message.blockTimestamp !== undefined && (obj.blockTimestamp = message.blockTimestamp);
        message.hash !== undefined && (obj.hash = message.hash);
        message.codespace !== undefined && (obj.codespace = message.codespace);
        message.messages !== undefined && (obj.messages = message.messages);
        message.txNumber !== undefined && (obj.txNumber = message.txNumber);
        message.errorLog !== undefined && (obj.errorLog = message.errorLog);
        message.code !== undefined && (obj.code = Math.round(message.code));
        if (message.claimIds) {
            obj.claimIds = message.claimIds.map((e) => e);
        }
        else {
            obj.claimIds = [];
        }
        return obj;
    },
    create(base) {
        return exports.TxDataRPC.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseTxDataRPC();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.blockNumber = (_b = object.blockNumber) !== null && _b !== void 0 ? _b : "0";
        message.blockTimestamp = (_c = object.blockTimestamp) !== null && _c !== void 0 ? _c : "";
        message.hash = (_d = object.hash) !== null && _d !== void 0 ? _d : "";
        message.codespace = (_e = object.codespace) !== null && _e !== void 0 ? _e : "";
        message.messages = (_f = object.messages) !== null && _f !== void 0 ? _f : "";
        message.txNumber = (_g = object.txNumber) !== null && _g !== void 0 ? _g : "0";
        message.errorLog = (_h = object.errorLog) !== null && _h !== void 0 ? _h : "";
        message.code = (_j = object.code) !== null && _j !== void 0 ? _j : 0;
        message.claimIds = ((_k = object.claimIds) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        return message;
    },
};
function createBaseGetBlockRequest() {
    return { id: "" };
}
exports.GetBlockRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return exports.GetBlockRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetBlockRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetBlockResponse() {
    return { s: "", errmsg: "", data: undefined };
}
exports.GetBlockResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.s !== "") {
            writer.uint32(10).string(message.s);
        }
        if (message.errmsg !== "") {
            writer.uint32(18).string(message.errmsg);
        }
        if (message.data !== undefined) {
            exports.BlockDetailInfo.encode(message.data, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.s = reader.string();
                    break;
                case 2:
                    message.errmsg = reader.string();
                    break;
                case 3:
                    message.data = exports.BlockDetailInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            s: isSet(object.s) ? String(object.s) : "",
            errmsg: isSet(object.errmsg) ? String(object.errmsg) : "",
            data: isSet(object.data) ? exports.BlockDetailInfo.fromJSON(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.s !== undefined && (obj.s = message.s);
        message.errmsg !== undefined && (obj.errmsg = message.errmsg);
        message.data !== undefined && (obj.data = message.data ? exports.BlockDetailInfo.toJSON(message.data) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetBlockResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetBlockResponse();
        message.s = (_a = object.s) !== null && _a !== void 0 ? _a : "";
        message.errmsg = (_b = object.errmsg) !== null && _b !== void 0 ? _b : "";
        message.data = (object.data !== undefined && object.data !== null)
            ? exports.BlockDetailInfo.fromPartial(object.data)
            : undefined;
        return message;
    },
};
function createBaseBlockDetailInfo() {
    return {
        height: "0",
        proposer: "",
        moniker: "",
        blockHash: "",
        parentHash: "",
        numPreCommits: "0",
        numTxs: "0",
        totalTxs: "0",
        txs: [],
        timestamp: "",
    };
}
exports.BlockDetailInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).uint64(message.height);
        }
        if (message.proposer !== "") {
            writer.uint32(18).string(message.proposer);
        }
        if (message.moniker !== "") {
            writer.uint32(26).string(message.moniker);
        }
        if (message.blockHash !== "") {
            writer.uint32(34).string(message.blockHash);
        }
        if (message.parentHash !== "") {
            writer.uint32(42).string(message.parentHash);
        }
        if (message.numPreCommits !== "0") {
            writer.uint32(48).sint64(message.numPreCommits);
        }
        if (message.numTxs !== "0") {
            writer.uint32(56).sint64(message.numTxs);
        }
        if (message.totalTxs !== "0") {
            writer.uint32(64).sint64(message.totalTxs);
        }
        for (const v of message.txs) {
            exports.TxData.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.timestamp !== "") {
            writer.uint32(82).string(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockDetailInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.uint64());
                    break;
                case 2:
                    message.proposer = reader.string();
                    break;
                case 3:
                    message.moniker = reader.string();
                    break;
                case 4:
                    message.blockHash = reader.string();
                    break;
                case 5:
                    message.parentHash = reader.string();
                    break;
                case 6:
                    message.numPreCommits = longToString(reader.sint64());
                    break;
                case 7:
                    message.numTxs = longToString(reader.sint64());
                    break;
                case 8:
                    message.totalTxs = longToString(reader.sint64());
                    break;
                case 9:
                    message.txs.push(exports.TxData.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.timestamp = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            height: isSet(object.height) ? String(object.height) : "0",
            proposer: isSet(object.proposer) ? String(object.proposer) : "",
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
            parentHash: isSet(object.parentHash) ? String(object.parentHash) : "",
            numPreCommits: isSet(object.numPreCommits) ? String(object.numPreCommits) : "0",
            numTxs: isSet(object.numTxs) ? String(object.numTxs) : "0",
            totalTxs: isSet(object.totalTxs) ? String(object.totalTxs) : "0",
            txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map((e) => exports.TxData.fromJSON(e)) : [],
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.proposer !== undefined && (obj.proposer = message.proposer);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.blockHash !== undefined && (obj.blockHash = message.blockHash);
        message.parentHash !== undefined && (obj.parentHash = message.parentHash);
        message.numPreCommits !== undefined && (obj.numPreCommits = message.numPreCommits);
        message.numTxs !== undefined && (obj.numTxs = message.numTxs);
        message.totalTxs !== undefined && (obj.totalTxs = message.totalTxs);
        if (message.txs) {
            obj.txs = message.txs.map((e) => e ? exports.TxData.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return exports.BlockDetailInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseBlockDetailInfo();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.proposer = (_b = object.proposer) !== null && _b !== void 0 ? _b : "";
        message.moniker = (_c = object.moniker) !== null && _c !== void 0 ? _c : "";
        message.blockHash = (_d = object.blockHash) !== null && _d !== void 0 ? _d : "";
        message.parentHash = (_e = object.parentHash) !== null && _e !== void 0 ? _e : "";
        message.numPreCommits = (_f = object.numPreCommits) !== null && _f !== void 0 ? _f : "0";
        message.numTxs = (_g = object.numTxs) !== null && _g !== void 0 ? _g : "0";
        message.totalTxs = (_h = object.totalTxs) !== null && _h !== void 0 ? _h : "0";
        message.txs = ((_j = object.txs) === null || _j === void 0 ? void 0 : _j.map((e) => exports.TxData.fromPartial(e))) || [];
        message.timestamp = (_k = object.timestamp) !== null && _k !== void 0 ? _k : "";
        return message;
    },
};
function createBaseTxData() {
    return {
        id: "",
        blockNumber: "0",
        blockTimestamp: "",
        hash: "",
        codespace: "",
        messages: new Uint8Array(),
        txNumber: "0",
        errorLog: "",
        code: 0,
        txMsgTypes: new Uint8Array(),
        logs: new Uint8Array(),
        claimIds: [],
    };
}
exports.TxData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.blockNumber !== "0") {
            writer.uint32(16).uint64(message.blockNumber);
        }
        if (message.blockTimestamp !== "") {
            writer.uint32(26).string(message.blockTimestamp);
        }
        if (message.hash !== "") {
            writer.uint32(34).string(message.hash);
        }
        if (message.codespace !== "") {
            writer.uint32(42).string(message.codespace);
        }
        if (message.messages.length !== 0) {
            writer.uint32(50).bytes(message.messages);
        }
        if (message.txNumber !== "0") {
            writer.uint32(56).uint64(message.txNumber);
        }
        if (message.errorLog !== "") {
            writer.uint32(66).string(message.errorLog);
        }
        if (message.code !== 0) {
            writer.uint32(72).uint32(message.code);
        }
        if (message.txMsgTypes.length !== 0) {
            writer.uint32(82).bytes(message.txMsgTypes);
        }
        if (message.logs.length !== 0) {
            writer.uint32(90).bytes(message.logs);
        }
        writer.uint32(98).fork();
        for (const v of message.claimIds) {
            writer.sint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.blockNumber = longToString(reader.uint64());
                    break;
                case 3:
                    message.blockTimestamp = reader.string();
                    break;
                case 4:
                    message.hash = reader.string();
                    break;
                case 5:
                    message.codespace = reader.string();
                    break;
                case 6:
                    message.messages = reader.bytes();
                    break;
                case 7:
                    message.txNumber = longToString(reader.uint64());
                    break;
                case 8:
                    message.errorLog = reader.string();
                    break;
                case 9:
                    message.code = reader.uint32();
                    break;
                case 10:
                    message.txMsgTypes = reader.bytes();
                    break;
                case 11:
                    message.logs = reader.bytes();
                    break;
                case 12:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.claimIds.push(longToString(reader.sint64()));
                        }
                    }
                    else {
                        message.claimIds.push(longToString(reader.sint64()));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            blockNumber: isSet(object.blockNumber) ? String(object.blockNumber) : "0",
            blockTimestamp: isSet(object.blockTimestamp) ? String(object.blockTimestamp) : "",
            hash: isSet(object.hash) ? String(object.hash) : "",
            codespace: isSet(object.codespace) ? String(object.codespace) : "",
            messages: isSet(object.messages) ? bytesFromBase64(object.messages) : new Uint8Array(),
            txNumber: isSet(object.txNumber) ? String(object.txNumber) : "0",
            errorLog: isSet(object.errorLog) ? String(object.errorLog) : "",
            code: isSet(object.code) ? Number(object.code) : 0,
            txMsgTypes: isSet(object.txMsgTypes) ? bytesFromBase64(object.txMsgTypes) : new Uint8Array(),
            logs: isSet(object.logs) ? bytesFromBase64(object.logs) : new Uint8Array(),
            claimIds: Array.isArray(object === null || object === void 0 ? void 0 : object.claimIds) ? object.claimIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.blockNumber !== undefined && (obj.blockNumber = message.blockNumber);
        message.blockTimestamp !== undefined && (obj.blockTimestamp = message.blockTimestamp);
        message.hash !== undefined && (obj.hash = message.hash);
        message.codespace !== undefined && (obj.codespace = message.codespace);
        message.messages !== undefined &&
            (obj.messages = base64FromBytes(message.messages !== undefined ? message.messages : new Uint8Array()));
        message.txNumber !== undefined && (obj.txNumber = message.txNumber);
        message.errorLog !== undefined && (obj.errorLog = message.errorLog);
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.txMsgTypes !== undefined &&
            (obj.txMsgTypes = base64FromBytes(message.txMsgTypes !== undefined ? message.txMsgTypes : new Uint8Array()));
        message.logs !== undefined &&
            (obj.logs = base64FromBytes(message.logs !== undefined ? message.logs : new Uint8Array()));
        if (message.claimIds) {
            obj.claimIds = message.claimIds.map((e) => e);
        }
        else {
            obj.claimIds = [];
        }
        return obj;
    },
    create(base) {
        return exports.TxData.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBaseTxData();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.blockNumber = (_b = object.blockNumber) !== null && _b !== void 0 ? _b : "0";
        message.blockTimestamp = (_c = object.blockTimestamp) !== null && _c !== void 0 ? _c : "";
        message.hash = (_d = object.hash) !== null && _d !== void 0 ? _d : "";
        message.codespace = (_e = object.codespace) !== null && _e !== void 0 ? _e : "";
        message.messages = (_f = object.messages) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.txNumber = (_g = object.txNumber) !== null && _g !== void 0 ? _g : "0";
        message.errorLog = (_h = object.errorLog) !== null && _h !== void 0 ? _h : "";
        message.code = (_j = object.code) !== null && _j !== void 0 ? _j : 0;
        message.txMsgTypes = (_k = object.txMsgTypes) !== null && _k !== void 0 ? _k : new Uint8Array();
        message.logs = (_l = object.logs) !== null && _l !== void 0 ? _l : new Uint8Array();
        message.claimIds = ((_m = object.claimIds) === null || _m === void 0 ? void 0 : _m.map((e) => e)) || [];
        return message;
    },
};
function createBaseGetValidatorsRequest() {
    return {};
}
exports.GetValidatorsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
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
        return exports.GetValidatorsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseGetValidatorsRequest();
        return message;
    },
};
function createBaseGetValidatorsResponse() {
    return { s: "", errmsg: "", data: [] };
}
exports.GetValidatorsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.s !== "") {
            writer.uint32(10).string(message.s);
        }
        if (message.errmsg !== "") {
            writer.uint32(18).string(message.errmsg);
        }
        for (const v of message.data) {
            exports.Validator.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.s = reader.string();
                    break;
                case 2:
                    message.errmsg = reader.string();
                    break;
                case 3:
                    message.data.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            s: isSet(object.s) ? String(object.s) : "",
            errmsg: isSet(object.errmsg) ? String(object.errmsg) : "",
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => exports.Validator.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.s !== undefined && (obj.s = message.s);
        message.errmsg !== undefined && (obj.errmsg = message.errmsg);
        if (message.data) {
            obj.data = message.data.map((e) => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetValidatorsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetValidatorsResponse();
        message.s = (_a = object.s) !== null && _a !== void 0 ? _a : "";
        message.errmsg = (_b = object.errmsg) !== null && _b !== void 0 ? _b : "";
        message.data = ((_c = object.data) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Validator.fromPartial(e))) || [];
        return message;
    },
};
function createBaseValidator() {
    return {
        id: "",
        moniker: "",
        operatorAddress: "",
        consensusAddress: "",
        jailed: false,
        status: 0,
        tokens: "",
        delegatorShares: "",
        description: undefined,
        unbondingHeight: "0",
        unbondingTime: "",
        commissionRate: "",
        commissionMaxRate: "",
        commissionMaxChangeRate: "",
        commissionUpdateTime: "",
        proposed: "0",
        signed: "0",
        missed: "0",
        timestamp: "",
        uptimes: [],
        slashingEvents: [],
        uptimePercentage: 0,
        imageUrl: "",
    };
}
exports.Validator = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.moniker !== "") {
            writer.uint32(18).string(message.moniker);
        }
        if (message.operatorAddress !== "") {
            writer.uint32(26).string(message.operatorAddress);
        }
        if (message.consensusAddress !== "") {
            writer.uint32(34).string(message.consensusAddress);
        }
        if (message.jailed === true) {
            writer.uint32(40).bool(message.jailed);
        }
        if (message.status !== 0) {
            writer.uint32(48).sint32(message.status);
        }
        if (message.tokens !== "") {
            writer.uint32(58).string(message.tokens);
        }
        if (message.delegatorShares !== "") {
            writer.uint32(66).string(message.delegatorShares);
        }
        if (message.description !== undefined) {
            exports.ValidatorDescription.encode(message.description, writer.uint32(74).fork()).ldelim();
        }
        if (message.unbondingHeight !== "0") {
            writer.uint32(80).sint64(message.unbondingHeight);
        }
        if (message.unbondingTime !== "") {
            writer.uint32(90).string(message.unbondingTime);
        }
        if (message.commissionRate !== "") {
            writer.uint32(98).string(message.commissionRate);
        }
        if (message.commissionMaxRate !== "") {
            writer.uint32(106).string(message.commissionMaxRate);
        }
        if (message.commissionMaxChangeRate !== "") {
            writer.uint32(114).string(message.commissionMaxChangeRate);
        }
        if (message.commissionUpdateTime !== "") {
            writer.uint32(122).string(message.commissionUpdateTime);
        }
        if (message.proposed !== "0") {
            writer.uint32(128).uint64(message.proposed);
        }
        if (message.signed !== "0") {
            writer.uint32(136).uint64(message.signed);
        }
        if (message.missed !== "0") {
            writer.uint32(144).uint64(message.missed);
        }
        if (message.timestamp !== "") {
            writer.uint32(154).string(message.timestamp);
        }
        for (const v of message.uptimes) {
            exports.ValidatorUptime.encode(v, writer.uint32(162).fork()).ldelim();
        }
        for (const v of message.slashingEvents) {
            exports.SlashingEvent.encode(v, writer.uint32(170).fork()).ldelim();
        }
        if (message.uptimePercentage !== 0) {
            writer.uint32(177).double(message.uptimePercentage);
        }
        if (message.imageUrl !== "") {
            writer.uint32(186).string(message.imageUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.moniker = reader.string();
                    break;
                case 3:
                    message.operatorAddress = reader.string();
                    break;
                case 4:
                    message.consensusAddress = reader.string();
                    break;
                case 5:
                    message.jailed = reader.bool();
                    break;
                case 6:
                    message.status = reader.sint32();
                    break;
                case 7:
                    message.tokens = reader.string();
                    break;
                case 8:
                    message.delegatorShares = reader.string();
                    break;
                case 9:
                    message.description = exports.ValidatorDescription.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.unbondingHeight = longToString(reader.sint64());
                    break;
                case 11:
                    message.unbondingTime = reader.string();
                    break;
                case 12:
                    message.commissionRate = reader.string();
                    break;
                case 13:
                    message.commissionMaxRate = reader.string();
                    break;
                case 14:
                    message.commissionMaxChangeRate = reader.string();
                    break;
                case 15:
                    message.commissionUpdateTime = reader.string();
                    break;
                case 16:
                    message.proposed = longToString(reader.uint64());
                    break;
                case 17:
                    message.signed = longToString(reader.uint64());
                    break;
                case 18:
                    message.missed = longToString(reader.uint64());
                    break;
                case 19:
                    message.timestamp = reader.string();
                    break;
                case 20:
                    message.uptimes.push(exports.ValidatorUptime.decode(reader, reader.uint32()));
                    break;
                case 21:
                    message.slashingEvents.push(exports.SlashingEvent.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.uptimePercentage = reader.double();
                    break;
                case 23:
                    message.imageUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
            consensusAddress: isSet(object.consensusAddress) ? String(object.consensusAddress) : "",
            jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
            status: isSet(object.status) ? Number(object.status) : 0,
            tokens: isSet(object.tokens) ? String(object.tokens) : "",
            delegatorShares: isSet(object.delegatorShares) ? String(object.delegatorShares) : "",
            description: isSet(object.description) ? exports.ValidatorDescription.fromJSON(object.description) : undefined,
            unbondingHeight: isSet(object.unbondingHeight) ? String(object.unbondingHeight) : "0",
            unbondingTime: isSet(object.unbondingTime) ? String(object.unbondingTime) : "",
            commissionRate: isSet(object.commissionRate) ? String(object.commissionRate) : "",
            commissionMaxRate: isSet(object.commissionMaxRate) ? String(object.commissionMaxRate) : "",
            commissionMaxChangeRate: isSet(object.commissionMaxChangeRate) ? String(object.commissionMaxChangeRate) : "",
            commissionUpdateTime: isSet(object.commissionUpdateTime) ? String(object.commissionUpdateTime) : "",
            proposed: isSet(object.proposed) ? String(object.proposed) : "0",
            signed: isSet(object.signed) ? String(object.signed) : "0",
            missed: isSet(object.missed) ? String(object.missed) : "0",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
            uptimes: Array.isArray(object === null || object === void 0 ? void 0 : object.uptimes) ? object.uptimes.map((e) => exports.ValidatorUptime.fromJSON(e)) : [],
            slashingEvents: Array.isArray(object === null || object === void 0 ? void 0 : object.slashingEvents)
                ? object.slashingEvents.map((e) => exports.SlashingEvent.fromJSON(e))
                : [],
            uptimePercentage: isSet(object.uptimePercentage) ? Number(object.uptimePercentage) : 0,
            imageUrl: isSet(object.imageUrl) ? String(object.imageUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
        message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
        message.jailed !== undefined && (obj.jailed = message.jailed);
        message.status !== undefined && (obj.status = Math.round(message.status));
        message.tokens !== undefined && (obj.tokens = message.tokens);
        message.delegatorShares !== undefined && (obj.delegatorShares = message.delegatorShares);
        message.description !== undefined &&
            (obj.description = message.description ? exports.ValidatorDescription.toJSON(message.description) : undefined);
        message.unbondingHeight !== undefined && (obj.unbondingHeight = message.unbondingHeight);
        message.unbondingTime !== undefined && (obj.unbondingTime = message.unbondingTime);
        message.commissionRate !== undefined && (obj.commissionRate = message.commissionRate);
        message.commissionMaxRate !== undefined && (obj.commissionMaxRate = message.commissionMaxRate);
        message.commissionMaxChangeRate !== undefined && (obj.commissionMaxChangeRate = message.commissionMaxChangeRate);
        message.commissionUpdateTime !== undefined && (obj.commissionUpdateTime = message.commissionUpdateTime);
        message.proposed !== undefined && (obj.proposed = message.proposed);
        message.signed !== undefined && (obj.signed = message.signed);
        message.missed !== undefined && (obj.missed = message.missed);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        if (message.uptimes) {
            obj.uptimes = message.uptimes.map((e) => e ? exports.ValidatorUptime.toJSON(e) : undefined);
        }
        else {
            obj.uptimes = [];
        }
        if (message.slashingEvents) {
            obj.slashingEvents = message.slashingEvents.map((e) => e ? exports.SlashingEvent.toJSON(e) : undefined);
        }
        else {
            obj.slashingEvents = [];
        }
        message.uptimePercentage !== undefined && (obj.uptimePercentage = message.uptimePercentage);
        message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
        return obj;
    },
    create(base) {
        return exports.Validator.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        const message = createBaseValidator();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.moniker = (_b = object.moniker) !== null && _b !== void 0 ? _b : "";
        message.operatorAddress = (_c = object.operatorAddress) !== null && _c !== void 0 ? _c : "";
        message.consensusAddress = (_d = object.consensusAddress) !== null && _d !== void 0 ? _d : "";
        message.jailed = (_e = object.jailed) !== null && _e !== void 0 ? _e : false;
        message.status = (_f = object.status) !== null && _f !== void 0 ? _f : 0;
        message.tokens = (_g = object.tokens) !== null && _g !== void 0 ? _g : "";
        message.delegatorShares = (_h = object.delegatorShares) !== null && _h !== void 0 ? _h : "";
        message.description = (object.description !== undefined && object.description !== null)
            ? exports.ValidatorDescription.fromPartial(object.description)
            : undefined;
        message.unbondingHeight = (_j = object.unbondingHeight) !== null && _j !== void 0 ? _j : "0";
        message.unbondingTime = (_k = object.unbondingTime) !== null && _k !== void 0 ? _k : "";
        message.commissionRate = (_l = object.commissionRate) !== null && _l !== void 0 ? _l : "";
        message.commissionMaxRate = (_m = object.commissionMaxRate) !== null && _m !== void 0 ? _m : "";
        message.commissionMaxChangeRate = (_o = object.commissionMaxChangeRate) !== null && _o !== void 0 ? _o : "";
        message.commissionUpdateTime = (_p = object.commissionUpdateTime) !== null && _p !== void 0 ? _p : "";
        message.proposed = (_q = object.proposed) !== null && _q !== void 0 ? _q : "0";
        message.signed = (_r = object.signed) !== null && _r !== void 0 ? _r : "0";
        message.missed = (_s = object.missed) !== null && _s !== void 0 ? _s : "0";
        message.timestamp = (_t = object.timestamp) !== null && _t !== void 0 ? _t : "";
        message.uptimes = ((_u = object.uptimes) === null || _u === void 0 ? void 0 : _u.map((e) => exports.ValidatorUptime.fromPartial(e))) || [];
        message.slashingEvents = ((_v = object.slashingEvents) === null || _v === void 0 ? void 0 : _v.map((e) => exports.SlashingEvent.fromPartial(e))) || [];
        message.uptimePercentage = (_w = object.uptimePercentage) !== null && _w !== void 0 ? _w : 0;
        message.imageUrl = (_x = object.imageUrl) !== null && _x !== void 0 ? _x : "";
        return message;
    },
};
function createBaseValidatorDescription() {
    return { moniker: "", identity: "", website: "", securityContact: "", details: "", imageUrl: "" };
}
exports.ValidatorDescription = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.moniker !== "") {
            writer.uint32(10).string(message.moniker);
        }
        if (message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.website !== "") {
            writer.uint32(26).string(message.website);
        }
        if (message.securityContact !== "") {
            writer.uint32(34).string(message.securityContact);
        }
        if (message.details !== "") {
            writer.uint32(42).string(message.details);
        }
        if (message.imageUrl !== "") {
            writer.uint32(50).string(message.imageUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorDescription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moniker = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.website = reader.string();
                    break;
                case 4:
                    message.securityContact = reader.string();
                    break;
                case 5:
                    message.details = reader.string();
                    break;
                case 6:
                    message.imageUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            identity: isSet(object.identity) ? String(object.identity) : "",
            website: isSet(object.website) ? String(object.website) : "",
            securityContact: isSet(object.securityContact) ? String(object.securityContact) : "",
            details: isSet(object.details) ? String(object.details) : "",
            imageUrl: isSet(object.imageUrl) ? String(object.imageUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.identity !== undefined && (obj.identity = message.identity);
        message.website !== undefined && (obj.website = message.website);
        message.securityContact !== undefined && (obj.securityContact = message.securityContact);
        message.details !== undefined && (obj.details = message.details);
        message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
        return obj;
    },
    create(base) {
        return exports.ValidatorDescription.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseValidatorDescription();
        message.moniker = (_a = object.moniker) !== null && _a !== void 0 ? _a : "";
        message.identity = (_b = object.identity) !== null && _b !== void 0 ? _b : "";
        message.website = (_c = object.website) !== null && _c !== void 0 ? _c : "";
        message.securityContact = (_d = object.securityContact) !== null && _d !== void 0 ? _d : "";
        message.details = (_e = object.details) !== null && _e !== void 0 ? _e : "";
        message.imageUrl = (_f = object.imageUrl) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseValidatorUptime() {
    return { blockNumber: "0", status: "" };
}
exports.ValidatorUptime = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.blockNumber !== "0") {
            writer.uint32(8).uint64(message.blockNumber);
        }
        if (message.status !== "") {
            writer.uint32(18).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorUptime();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockNumber = longToString(reader.uint64());
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            blockNumber: isSet(object.blockNumber) ? String(object.blockNumber) : "0",
            status: isSet(object.status) ? String(object.status) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockNumber !== undefined && (obj.blockNumber = message.blockNumber);
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return exports.ValidatorUptime.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseValidatorUptime();
        message.blockNumber = (_a = object.blockNumber) !== null && _a !== void 0 ? _a : "0";
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseSlashingEvent() {
    return { blockNumber: "0", blockTimestamp: "", address: "", power: "0", reason: "", jailed: "", missedBlocks: "0" };
}
exports.SlashingEvent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.blockNumber !== "0") {
            writer.uint32(8).uint64(message.blockNumber);
        }
        if (message.blockTimestamp !== "") {
            writer.uint32(18).string(message.blockTimestamp);
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        if (message.power !== "0") {
            writer.uint32(32).uint64(message.power);
        }
        if (message.reason !== "") {
            writer.uint32(42).string(message.reason);
        }
        if (message.jailed !== "") {
            writer.uint32(50).string(message.jailed);
        }
        if (message.missedBlocks !== "0") {
            writer.uint32(56).uint64(message.missedBlocks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSlashingEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockNumber = longToString(reader.uint64());
                    break;
                case 2:
                    message.blockTimestamp = reader.string();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                case 4:
                    message.power = longToString(reader.uint64());
                    break;
                case 5:
                    message.reason = reader.string();
                    break;
                case 6:
                    message.jailed = reader.string();
                    break;
                case 7:
                    message.missedBlocks = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            blockNumber: isSet(object.blockNumber) ? String(object.blockNumber) : "0",
            blockTimestamp: isSet(object.blockTimestamp) ? String(object.blockTimestamp) : "",
            address: isSet(object.address) ? String(object.address) : "",
            power: isSet(object.power) ? String(object.power) : "0",
            reason: isSet(object.reason) ? String(object.reason) : "",
            jailed: isSet(object.jailed) ? String(object.jailed) : "",
            missedBlocks: isSet(object.missedBlocks) ? String(object.missedBlocks) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockNumber !== undefined && (obj.blockNumber = message.blockNumber);
        message.blockTimestamp !== undefined && (obj.blockTimestamp = message.blockTimestamp);
        message.address !== undefined && (obj.address = message.address);
        message.power !== undefined && (obj.power = message.power);
        message.reason !== undefined && (obj.reason = message.reason);
        message.jailed !== undefined && (obj.jailed = message.jailed);
        message.missedBlocks !== undefined && (obj.missedBlocks = message.missedBlocks);
        return obj;
    },
    create(base) {
        return exports.SlashingEvent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseSlashingEvent();
        message.blockNumber = (_a = object.blockNumber) !== null && _a !== void 0 ? _a : "0";
        message.blockTimestamp = (_b = object.blockTimestamp) !== null && _b !== void 0 ? _b : "";
        message.address = (_c = object.address) !== null && _c !== void 0 ? _c : "";
        message.power = (_d = object.power) !== null && _d !== void 0 ? _d : "0";
        message.reason = (_e = object.reason) !== null && _e !== void 0 ? _e : "";
        message.jailed = (_f = object.jailed) !== null && _f !== void 0 ? _f : "";
        message.missedBlocks = (_g = object.missedBlocks) !== null && _g !== void 0 ? _g : "0";
        return message;
    },
};
function createBaseGetValidatorRequest() {
    return { address: "" };
}
exports.GetValidatorRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
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
        return exports.GetValidatorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetValidatorRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetValidatorResponse() {
    return { s: "", errmsg: "", data: undefined };
}
exports.GetValidatorResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.s !== "") {
            writer.uint32(10).string(message.s);
        }
        if (message.errmsg !== "") {
            writer.uint32(18).string(message.errmsg);
        }
        if (message.data !== undefined) {
            exports.Validator.encode(message.data, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.s = reader.string();
                    break;
                case 2:
                    message.errmsg = reader.string();
                    break;
                case 3:
                    message.data = exports.Validator.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            s: isSet(object.s) ? String(object.s) : "",
            errmsg: isSet(object.errmsg) ? String(object.errmsg) : "",
            data: isSet(object.data) ? exports.Validator.fromJSON(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.s !== undefined && (obj.s = message.s);
        message.errmsg !== undefined && (obj.errmsg = message.errmsg);
        message.data !== undefined && (obj.data = message.data ? exports.Validator.toJSON(message.data) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetValidatorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetValidatorResponse();
        message.s = (_a = object.s) !== null && _a !== void 0 ? _a : "";
        message.errmsg = (_b = object.errmsg) !== null && _b !== void 0 ? _b : "";
        message.data = (object.data !== undefined && object.data !== null) ? exports.Validator.fromPartial(object.data) : undefined;
        return message;
    },
};
function createBaseGetValidatorUptimeRequest() {
    return { address: "" };
}
exports.GetValidatorUptimeRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorUptimeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
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
        return exports.GetValidatorUptimeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetValidatorUptimeRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetValidatorUptimeResponse() {
    return { s: "", errmsg: "", data: [] };
}
exports.GetValidatorUptimeResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.s !== "") {
            writer.uint32(10).string(message.s);
        }
        if (message.errmsg !== "") {
            writer.uint32(18).string(message.errmsg);
        }
        for (const v of message.data) {
            exports.ValidatorUptime.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorUptimeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.s = reader.string();
                    break;
                case 2:
                    message.errmsg = reader.string();
                    break;
                case 3:
                    message.data.push(exports.ValidatorUptime.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            s: isSet(object.s) ? String(object.s) : "",
            errmsg: isSet(object.errmsg) ? String(object.errmsg) : "",
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => exports.ValidatorUptime.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.s !== undefined && (obj.s = message.s);
        message.errmsg !== undefined && (obj.errmsg = message.errmsg);
        if (message.data) {
            obj.data = message.data.map((e) => e ? exports.ValidatorUptime.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetValidatorUptimeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetValidatorUptimeResponse();
        message.s = (_a = object.s) !== null && _a !== void 0 ? _a : "";
        message.errmsg = (_b = object.errmsg) !== null && _b !== void 0 ? _b : "";
        message.data = ((_c = object.data) === null || _c === void 0 ? void 0 : _c.map((e) => exports.ValidatorUptime.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetTxsRequest() {
    return {
        before: "0",
        after: "0",
        limit: 0,
        skip: "0",
        type: "",
        module: "",
        fromNumber: "0",
        toNumber: "0",
        startTime: "0",
        endTime: "0",
        status: "",
    };
}
exports.GetTxsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.before !== "0") {
            writer.uint32(8).uint64(message.before);
        }
        if (message.after !== "0") {
            writer.uint32(16).uint64(message.after);
        }
        if (message.limit !== 0) {
            writer.uint32(24).sint32(message.limit);
        }
        if (message.skip !== "0") {
            writer.uint32(32).uint64(message.skip);
        }
        if (message.type !== "") {
            writer.uint32(42).string(message.type);
        }
        if (message.module !== "") {
            writer.uint32(50).string(message.module);
        }
        if (message.fromNumber !== "0") {
            writer.uint32(56).sint64(message.fromNumber);
        }
        if (message.toNumber !== "0") {
            writer.uint32(64).sint64(message.toNumber);
        }
        if (message.startTime !== "0") {
            writer.uint32(72).sint64(message.startTime);
        }
        if (message.endTime !== "0") {
            writer.uint32(80).sint64(message.endTime);
        }
        if (message.status !== "") {
            writer.uint32(90).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.before = longToString(reader.uint64());
                    break;
                case 2:
                    message.after = longToString(reader.uint64());
                    break;
                case 3:
                    message.limit = reader.sint32();
                    break;
                case 4:
                    message.skip = longToString(reader.uint64());
                    break;
                case 5:
                    message.type = reader.string();
                    break;
                case 6:
                    message.module = reader.string();
                    break;
                case 7:
                    message.fromNumber = longToString(reader.sint64());
                    break;
                case 8:
                    message.toNumber = longToString(reader.sint64());
                    break;
                case 9:
                    message.startTime = longToString(reader.sint64());
                    break;
                case 10:
                    message.endTime = longToString(reader.sint64());
                    break;
                case 11:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            before: isSet(object.before) ? String(object.before) : "0",
            after: isSet(object.after) ? String(object.after) : "0",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            skip: isSet(object.skip) ? String(object.skip) : "0",
            type: isSet(object.type) ? String(object.type) : "",
            module: isSet(object.module) ? String(object.module) : "",
            fromNumber: isSet(object.fromNumber) ? String(object.fromNumber) : "0",
            toNumber: isSet(object.toNumber) ? String(object.toNumber) : "0",
            startTime: isSet(object.startTime) ? String(object.startTime) : "0",
            endTime: isSet(object.endTime) ? String(object.endTime) : "0",
            status: isSet(object.status) ? String(object.status) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.before !== undefined && (obj.before = message.before);
        message.after !== undefined && (obj.after = message.after);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.skip !== undefined && (obj.skip = message.skip);
        message.type !== undefined && (obj.type = message.type);
        message.module !== undefined && (obj.module = message.module);
        message.fromNumber !== undefined && (obj.fromNumber = message.fromNumber);
        message.toNumber !== undefined && (obj.toNumber = message.toNumber);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return exports.GetTxsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseGetTxsRequest();
        message.before = (_a = object.before) !== null && _a !== void 0 ? _a : "0";
        message.after = (_b = object.after) !== null && _b !== void 0 ? _b : "0";
        message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : 0;
        message.skip = (_d = object.skip) !== null && _d !== void 0 ? _d : "0";
        message.type = (_e = object.type) !== null && _e !== void 0 ? _e : "";
        message.module = (_f = object.module) !== null && _f !== void 0 ? _f : "";
        message.fromNumber = (_g = object.fromNumber) !== null && _g !== void 0 ? _g : "0";
        message.toNumber = (_h = object.toNumber) !== null && _h !== void 0 ? _h : "0";
        message.startTime = (_j = object.startTime) !== null && _j !== void 0 ? _j : "0";
        message.endTime = (_k = object.endTime) !== null && _k !== void 0 ? _k : "0";
        message.status = (_l = object.status) !== null && _l !== void 0 ? _l : "";
        return message;
    },
};
function createBaseGetTxsResponse() {
    return { paging: undefined, data: [] };
}
exports.GetTxsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.data) {
            exports.TxData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paging = exports.Paging.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data.push(exports.TxData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => exports.TxData.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        if (message.data) {
            obj.data = message.data.map((e) => e ? exports.TxData.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetTxsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetTxsResponse();
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        message.data = ((_a = object.data) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TxData.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetTxByTxHashRequest() {
    return { hash: "" };
}
exports.GetTxByTxHashRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxByTxHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
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
        return exports.GetTxByTxHashRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetTxByTxHashRequest();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetTxByTxHashResponse() {
    return { s: "", errmsg: "", data: undefined };
}
exports.GetTxByTxHashResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.s !== "") {
            writer.uint32(10).string(message.s);
        }
        if (message.errmsg !== "") {
            writer.uint32(18).string(message.errmsg);
        }
        if (message.data !== undefined) {
            exports.TxDetailData.encode(message.data, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxByTxHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.s = reader.string();
                    break;
                case 2:
                    message.errmsg = reader.string();
                    break;
                case 3:
                    message.data = exports.TxDetailData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            s: isSet(object.s) ? String(object.s) : "",
            errmsg: isSet(object.errmsg) ? String(object.errmsg) : "",
            data: isSet(object.data) ? exports.TxDetailData.fromJSON(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.s !== undefined && (obj.s = message.s);
        message.errmsg !== undefined && (obj.errmsg = message.errmsg);
        message.data !== undefined && (obj.data = message.data ? exports.TxDetailData.toJSON(message.data) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetTxByTxHashResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetTxByTxHashResponse();
        message.s = (_a = object.s) !== null && _a !== void 0 ? _a : "";
        message.errmsg = (_b = object.errmsg) !== null && _b !== void 0 ? _b : "";
        message.data = (object.data !== undefined && object.data !== null)
            ? exports.TxDetailData.fromPartial(object.data)
            : undefined;
        return message;
    },
};
function createBaseGetPeggyDepositTxsRequest() {
    return { sender: "", receiver: "", limit: 0, skip: "0" };
}
exports.GetPeggyDepositTxsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.limit !== 0) {
            writer.uint32(24).sint32(message.limit);
        }
        if (message.skip !== "0") {
            writer.uint32(32).uint64(message.skip);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPeggyDepositTxsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.limit = reader.sint32();
                    break;
                case 4:
                    message.skip = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            skip: isSet(object.skip) ? String(object.skip) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.skip !== undefined && (obj.skip = message.skip);
        return obj;
    },
    create(base) {
        return exports.GetPeggyDepositTxsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGetPeggyDepositTxsRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.receiver = (_b = object.receiver) !== null && _b !== void 0 ? _b : "";
        message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : 0;
        message.skip = (_d = object.skip) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseGetPeggyDepositTxsResponse() {
    return { field: [] };
}
exports.GetPeggyDepositTxsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.field) {
            exports.PeggyDepositTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPeggyDepositTxsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.field.push(exports.PeggyDepositTx.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { field: Array.isArray(object === null || object === void 0 ? void 0 : object.field) ? object.field.map((e) => exports.PeggyDepositTx.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.field) {
            obj.field = message.field.map((e) => e ? exports.PeggyDepositTx.toJSON(e) : undefined);
        }
        else {
            obj.field = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetPeggyDepositTxsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetPeggyDepositTxsResponse();
        message.field = ((_a = object.field) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PeggyDepositTx.fromPartial(e))) || [];
        return message;
    },
};
function createBasePeggyDepositTx() {
    return {
        sender: "",
        receiver: "",
        eventNonce: "0",
        eventHeight: "0",
        amount: "",
        denom: "",
        orchestratorAddress: "",
        state: "",
        claimType: 0,
        txHashes: [],
        createdAt: "",
        updatedAt: "",
    };
}
exports.PeggyDepositTx = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.eventNonce !== "0") {
            writer.uint32(24).uint64(message.eventNonce);
        }
        if (message.eventHeight !== "0") {
            writer.uint32(32).uint64(message.eventHeight);
        }
        if (message.amount !== "") {
            writer.uint32(42).string(message.amount);
        }
        if (message.denom !== "") {
            writer.uint32(50).string(message.denom);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(58).string(message.orchestratorAddress);
        }
        if (message.state !== "") {
            writer.uint32(66).string(message.state);
        }
        if (message.claimType !== 0) {
            writer.uint32(72).sint32(message.claimType);
        }
        for (const v of message.txHashes) {
            writer.uint32(82).string(v);
        }
        if (message.createdAt !== "") {
            writer.uint32(90).string(message.createdAt);
        }
        if (message.updatedAt !== "") {
            writer.uint32(98).string(message.updatedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeggyDepositTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.eventNonce = longToString(reader.uint64());
                    break;
                case 4:
                    message.eventHeight = longToString(reader.uint64());
                    break;
                case 5:
                    message.amount = reader.string();
                    break;
                case 6:
                    message.denom = reader.string();
                    break;
                case 7:
                    message.orchestratorAddress = reader.string();
                    break;
                case 8:
                    message.state = reader.string();
                    break;
                case 9:
                    message.claimType = reader.sint32();
                    break;
                case 10:
                    message.txHashes.push(reader.string());
                    break;
                case 11:
                    message.createdAt = reader.string();
                    break;
                case 12:
                    message.updatedAt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            eventNonce: isSet(object.eventNonce) ? String(object.eventNonce) : "0",
            eventHeight: isSet(object.eventHeight) ? String(object.eventHeight) : "0",
            amount: isSet(object.amount) ? String(object.amount) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : "",
            state: isSet(object.state) ? String(object.state) : "",
            claimType: isSet(object.claimType) ? Number(object.claimType) : 0,
            txHashes: Array.isArray(object === null || object === void 0 ? void 0 : object.txHashes) ? object.txHashes.map((e) => String(e)) : [],
            createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        message.eventHeight !== undefined && (obj.eventHeight = message.eventHeight);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
        message.state !== undefined && (obj.state = message.state);
        message.claimType !== undefined && (obj.claimType = Math.round(message.claimType));
        if (message.txHashes) {
            obj.txHashes = message.txHashes.map((e) => e);
        }
        else {
            obj.txHashes = [];
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        return obj;
    },
    create(base) {
        return exports.PeggyDepositTx.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBasePeggyDepositTx();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.receiver = (_b = object.receiver) !== null && _b !== void 0 ? _b : "";
        message.eventNonce = (_c = object.eventNonce) !== null && _c !== void 0 ? _c : "0";
        message.eventHeight = (_d = object.eventHeight) !== null && _d !== void 0 ? _d : "0";
        message.amount = (_e = object.amount) !== null && _e !== void 0 ? _e : "";
        message.denom = (_f = object.denom) !== null && _f !== void 0 ? _f : "";
        message.orchestratorAddress = (_g = object.orchestratorAddress) !== null && _g !== void 0 ? _g : "";
        message.state = (_h = object.state) !== null && _h !== void 0 ? _h : "";
        message.claimType = (_j = object.claimType) !== null && _j !== void 0 ? _j : 0;
        message.txHashes = ((_k = object.txHashes) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.createdAt = (_l = object.createdAt) !== null && _l !== void 0 ? _l : "";
        message.updatedAt = (_m = object.updatedAt) !== null && _m !== void 0 ? _m : "";
        return message;
    },
};
function createBaseGetPeggyWithdrawalTxsRequest() {
    return { sender: "", receiver: "", limit: 0, skip: "0" };
}
exports.GetPeggyWithdrawalTxsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.limit !== 0) {
            writer.uint32(24).sint32(message.limit);
        }
        if (message.skip !== "0") {
            writer.uint32(32).uint64(message.skip);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPeggyWithdrawalTxsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.limit = reader.sint32();
                    break;
                case 4:
                    message.skip = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            skip: isSet(object.skip) ? String(object.skip) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.skip !== undefined && (obj.skip = message.skip);
        return obj;
    },
    create(base) {
        return exports.GetPeggyWithdrawalTxsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGetPeggyWithdrawalTxsRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.receiver = (_b = object.receiver) !== null && _b !== void 0 ? _b : "";
        message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : 0;
        message.skip = (_d = object.skip) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseGetPeggyWithdrawalTxsResponse() {
    return { field: [] };
}
exports.GetPeggyWithdrawalTxsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.field) {
            exports.PeggyWithdrawalTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPeggyWithdrawalTxsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.field.push(exports.PeggyWithdrawalTx.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { field: Array.isArray(object === null || object === void 0 ? void 0 : object.field) ? object.field.map((e) => exports.PeggyWithdrawalTx.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.field) {
            obj.field = message.field.map((e) => e ? exports.PeggyWithdrawalTx.toJSON(e) : undefined);
        }
        else {
            obj.field = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetPeggyWithdrawalTxsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetPeggyWithdrawalTxsResponse();
        message.field = ((_a = object.field) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PeggyWithdrawalTx.fromPartial(e))) || [];
        return message;
    },
};
function createBasePeggyWithdrawalTx() {
    return {
        sender: "",
        receiver: "",
        amount: "",
        denom: "",
        bridgeFee: "",
        outgoingTxId: "0",
        batchTimeout: "0",
        batchNonce: "0",
        orchestratorAddress: "",
        eventNonce: "0",
        eventHeight: "0",
        state: "",
        claimType: 0,
        txHashes: [],
        createdAt: "",
        updatedAt: "",
    };
}
exports.PeggyWithdrawalTx = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.denom !== "") {
            writer.uint32(34).string(message.denom);
        }
        if (message.bridgeFee !== "") {
            writer.uint32(42).string(message.bridgeFee);
        }
        if (message.outgoingTxId !== "0") {
            writer.uint32(48).uint64(message.outgoingTxId);
        }
        if (message.batchTimeout !== "0") {
            writer.uint32(56).uint64(message.batchTimeout);
        }
        if (message.batchNonce !== "0") {
            writer.uint32(64).uint64(message.batchNonce);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(74).string(message.orchestratorAddress);
        }
        if (message.eventNonce !== "0") {
            writer.uint32(80).uint64(message.eventNonce);
        }
        if (message.eventHeight !== "0") {
            writer.uint32(88).uint64(message.eventHeight);
        }
        if (message.state !== "") {
            writer.uint32(98).string(message.state);
        }
        if (message.claimType !== 0) {
            writer.uint32(104).sint32(message.claimType);
        }
        for (const v of message.txHashes) {
            writer.uint32(114).string(v);
        }
        if (message.createdAt !== "") {
            writer.uint32(122).string(message.createdAt);
        }
        if (message.updatedAt !== "") {
            writer.uint32(130).string(message.updatedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeggyWithdrawalTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.denom = reader.string();
                    break;
                case 5:
                    message.bridgeFee = reader.string();
                    break;
                case 6:
                    message.outgoingTxId = longToString(reader.uint64());
                    break;
                case 7:
                    message.batchTimeout = longToString(reader.uint64());
                    break;
                case 8:
                    message.batchNonce = longToString(reader.uint64());
                    break;
                case 9:
                    message.orchestratorAddress = reader.string();
                    break;
                case 10:
                    message.eventNonce = longToString(reader.uint64());
                    break;
                case 11:
                    message.eventHeight = longToString(reader.uint64());
                    break;
                case 12:
                    message.state = reader.string();
                    break;
                case 13:
                    message.claimType = reader.sint32();
                    break;
                case 14:
                    message.txHashes.push(reader.string());
                    break;
                case 15:
                    message.createdAt = reader.string();
                    break;
                case 16:
                    message.updatedAt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            bridgeFee: isSet(object.bridgeFee) ? String(object.bridgeFee) : "",
            outgoingTxId: isSet(object.outgoingTxId) ? String(object.outgoingTxId) : "0",
            batchTimeout: isSet(object.batchTimeout) ? String(object.batchTimeout) : "0",
            batchNonce: isSet(object.batchNonce) ? String(object.batchNonce) : "0",
            orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : "",
            eventNonce: isSet(object.eventNonce) ? String(object.eventNonce) : "0",
            eventHeight: isSet(object.eventHeight) ? String(object.eventHeight) : "0",
            state: isSet(object.state) ? String(object.state) : "",
            claimType: isSet(object.claimType) ? Number(object.claimType) : 0,
            txHashes: Array.isArray(object === null || object === void 0 ? void 0 : object.txHashes) ? object.txHashes.map((e) => String(e)) : [],
            createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        message.bridgeFee !== undefined && (obj.bridgeFee = message.bridgeFee);
        message.outgoingTxId !== undefined && (obj.outgoingTxId = message.outgoingTxId);
        message.batchTimeout !== undefined && (obj.batchTimeout = message.batchTimeout);
        message.batchNonce !== undefined && (obj.batchNonce = message.batchNonce);
        message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        message.eventHeight !== undefined && (obj.eventHeight = message.eventHeight);
        message.state !== undefined && (obj.state = message.state);
        message.claimType !== undefined && (obj.claimType = Math.round(message.claimType));
        if (message.txHashes) {
            obj.txHashes = message.txHashes.map((e) => e);
        }
        else {
            obj.txHashes = [];
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        return obj;
    },
    create(base) {
        return exports.PeggyWithdrawalTx.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const message = createBasePeggyWithdrawalTx();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.receiver = (_b = object.receiver) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.denom = (_d = object.denom) !== null && _d !== void 0 ? _d : "";
        message.bridgeFee = (_e = object.bridgeFee) !== null && _e !== void 0 ? _e : "";
        message.outgoingTxId = (_f = object.outgoingTxId) !== null && _f !== void 0 ? _f : "0";
        message.batchTimeout = (_g = object.batchTimeout) !== null && _g !== void 0 ? _g : "0";
        message.batchNonce = (_h = object.batchNonce) !== null && _h !== void 0 ? _h : "0";
        message.orchestratorAddress = (_j = object.orchestratorAddress) !== null && _j !== void 0 ? _j : "";
        message.eventNonce = (_k = object.eventNonce) !== null && _k !== void 0 ? _k : "0";
        message.eventHeight = (_l = object.eventHeight) !== null && _l !== void 0 ? _l : "0";
        message.state = (_m = object.state) !== null && _m !== void 0 ? _m : "";
        message.claimType = (_o = object.claimType) !== null && _o !== void 0 ? _o : 0;
        message.txHashes = ((_p = object.txHashes) === null || _p === void 0 ? void 0 : _p.map((e) => e)) || [];
        message.createdAt = (_q = object.createdAt) !== null && _q !== void 0 ? _q : "";
        message.updatedAt = (_r = object.updatedAt) !== null && _r !== void 0 ? _r : "";
        return message;
    },
};
function createBaseGetIBCTransferTxsRequest() {
    return { sender: "", receiver: "", srcChannel: "", srcPort: "", destChannel: "", destPort: "", limit: 0, skip: "0" };
}
exports.GetIBCTransferTxsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.srcChannel !== "") {
            writer.uint32(26).string(message.srcChannel);
        }
        if (message.srcPort !== "") {
            writer.uint32(34).string(message.srcPort);
        }
        if (message.destChannel !== "") {
            writer.uint32(42).string(message.destChannel);
        }
        if (message.destPort !== "") {
            writer.uint32(50).string(message.destPort);
        }
        if (message.limit !== 0) {
            writer.uint32(56).sint32(message.limit);
        }
        if (message.skip !== "0") {
            writer.uint32(64).uint64(message.skip);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetIBCTransferTxsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.srcChannel = reader.string();
                    break;
                case 4:
                    message.srcPort = reader.string();
                    break;
                case 5:
                    message.destChannel = reader.string();
                    break;
                case 6:
                    message.destPort = reader.string();
                    break;
                case 7:
                    message.limit = reader.sint32();
                    break;
                case 8:
                    message.skip = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            srcChannel: isSet(object.srcChannel) ? String(object.srcChannel) : "",
            srcPort: isSet(object.srcPort) ? String(object.srcPort) : "",
            destChannel: isSet(object.destChannel) ? String(object.destChannel) : "",
            destPort: isSet(object.destPort) ? String(object.destPort) : "",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            skip: isSet(object.skip) ? String(object.skip) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.srcChannel !== undefined && (obj.srcChannel = message.srcChannel);
        message.srcPort !== undefined && (obj.srcPort = message.srcPort);
        message.destChannel !== undefined && (obj.destChannel = message.destChannel);
        message.destPort !== undefined && (obj.destPort = message.destPort);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.skip !== undefined && (obj.skip = message.skip);
        return obj;
    },
    create(base) {
        return exports.GetIBCTransferTxsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseGetIBCTransferTxsRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.receiver = (_b = object.receiver) !== null && _b !== void 0 ? _b : "";
        message.srcChannel = (_c = object.srcChannel) !== null && _c !== void 0 ? _c : "";
        message.srcPort = (_d = object.srcPort) !== null && _d !== void 0 ? _d : "";
        message.destChannel = (_e = object.destChannel) !== null && _e !== void 0 ? _e : "";
        message.destPort = (_f = object.destPort) !== null && _f !== void 0 ? _f : "";
        message.limit = (_g = object.limit) !== null && _g !== void 0 ? _g : 0;
        message.skip = (_h = object.skip) !== null && _h !== void 0 ? _h : "0";
        return message;
    },
};
function createBaseGetIBCTransferTxsResponse() {
    return { field: [] };
}
exports.GetIBCTransferTxsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.field) {
            exports.IBCTransferTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetIBCTransferTxsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.field.push(exports.IBCTransferTx.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { field: Array.isArray(object === null || object === void 0 ? void 0 : object.field) ? object.field.map((e) => exports.IBCTransferTx.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.field) {
            obj.field = message.field.map((e) => e ? exports.IBCTransferTx.toJSON(e) : undefined);
        }
        else {
            obj.field = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetIBCTransferTxsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetIBCTransferTxsResponse();
        message.field = ((_a = object.field) === null || _a === void 0 ? void 0 : _a.map((e) => exports.IBCTransferTx.fromPartial(e))) || [];
        return message;
    },
};
function createBaseIBCTransferTx() {
    return {
        sender: "",
        receiver: "",
        sourcePort: "",
        sourceChannel: "",
        destinationPort: "",
        destinationChannel: "",
        amount: "",
        denom: "",
        timeoutHeight: "",
        timeoutTimestamp: "0",
        packetSequence: "0",
        dataHex: new Uint8Array(),
        state: "",
        txHashes: [],
        createdAt: "",
        updatedAt: "",
    };
}
exports.IBCTransferTx = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.sourcePort !== "") {
            writer.uint32(26).string(message.sourcePort);
        }
        if (message.sourceChannel !== "") {
            writer.uint32(34).string(message.sourceChannel);
        }
        if (message.destinationPort !== "") {
            writer.uint32(42).string(message.destinationPort);
        }
        if (message.destinationChannel !== "") {
            writer.uint32(50).string(message.destinationChannel);
        }
        if (message.amount !== "") {
            writer.uint32(58).string(message.amount);
        }
        if (message.denom !== "") {
            writer.uint32(66).string(message.denom);
        }
        if (message.timeoutHeight !== "") {
            writer.uint32(74).string(message.timeoutHeight);
        }
        if (message.timeoutTimestamp !== "0") {
            writer.uint32(80).uint64(message.timeoutTimestamp);
        }
        if (message.packetSequence !== "0") {
            writer.uint32(88).uint64(message.packetSequence);
        }
        if (message.dataHex.length !== 0) {
            writer.uint32(98).bytes(message.dataHex);
        }
        if (message.state !== "") {
            writer.uint32(106).string(message.state);
        }
        for (const v of message.txHashes) {
            writer.uint32(114).string(v);
        }
        if (message.createdAt !== "") {
            writer.uint32(122).string(message.createdAt);
        }
        if (message.updatedAt !== "") {
            writer.uint32(130).string(message.updatedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIBCTransferTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.sourcePort = reader.string();
                    break;
                case 4:
                    message.sourceChannel = reader.string();
                    break;
                case 5:
                    message.destinationPort = reader.string();
                    break;
                case 6:
                    message.destinationChannel = reader.string();
                    break;
                case 7:
                    message.amount = reader.string();
                    break;
                case 8:
                    message.denom = reader.string();
                    break;
                case 9:
                    message.timeoutHeight = reader.string();
                    break;
                case 10:
                    message.timeoutTimestamp = longToString(reader.uint64());
                    break;
                case 11:
                    message.packetSequence = longToString(reader.uint64());
                    break;
                case 12:
                    message.dataHex = reader.bytes();
                    break;
                case 13:
                    message.state = reader.string();
                    break;
                case 14:
                    message.txHashes.push(reader.string());
                    break;
                case 15:
                    message.createdAt = reader.string();
                    break;
                case 16:
                    message.updatedAt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
            sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
            destinationPort: isSet(object.destinationPort) ? String(object.destinationPort) : "",
            destinationChannel: isSet(object.destinationChannel) ? String(object.destinationChannel) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            timeoutHeight: isSet(object.timeoutHeight) ? String(object.timeoutHeight) : "",
            timeoutTimestamp: isSet(object.timeoutTimestamp) ? String(object.timeoutTimestamp) : "0",
            packetSequence: isSet(object.packetSequence) ? String(object.packetSequence) : "0",
            dataHex: isSet(object.dataHex) ? bytesFromBase64(object.dataHex) : new Uint8Array(),
            state: isSet(object.state) ? String(object.state) : "",
            txHashes: Array.isArray(object === null || object === void 0 ? void 0 : object.txHashes) ? object.txHashes.map((e) => String(e)) : [],
            createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
        message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
        message.destinationPort !== undefined && (obj.destinationPort = message.destinationPort);
        message.destinationChannel !== undefined && (obj.destinationChannel = message.destinationChannel);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        message.timeoutHeight !== undefined && (obj.timeoutHeight = message.timeoutHeight);
        message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = message.timeoutTimestamp);
        message.packetSequence !== undefined && (obj.packetSequence = message.packetSequence);
        message.dataHex !== undefined &&
            (obj.dataHex = base64FromBytes(message.dataHex !== undefined ? message.dataHex : new Uint8Array()));
        message.state !== undefined && (obj.state = message.state);
        if (message.txHashes) {
            obj.txHashes = message.txHashes.map((e) => e);
        }
        else {
            obj.txHashes = [];
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        return obj;
    },
    create(base) {
        return exports.IBCTransferTx.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const message = createBaseIBCTransferTx();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.receiver = (_b = object.receiver) !== null && _b !== void 0 ? _b : "";
        message.sourcePort = (_c = object.sourcePort) !== null && _c !== void 0 ? _c : "";
        message.sourceChannel = (_d = object.sourceChannel) !== null && _d !== void 0 ? _d : "";
        message.destinationPort = (_e = object.destinationPort) !== null && _e !== void 0 ? _e : "";
        message.destinationChannel = (_f = object.destinationChannel) !== null && _f !== void 0 ? _f : "";
        message.amount = (_g = object.amount) !== null && _g !== void 0 ? _g : "";
        message.denom = (_h = object.denom) !== null && _h !== void 0 ? _h : "";
        message.timeoutHeight = (_j = object.timeoutHeight) !== null && _j !== void 0 ? _j : "";
        message.timeoutTimestamp = (_k = object.timeoutTimestamp) !== null && _k !== void 0 ? _k : "0";
        message.packetSequence = (_l = object.packetSequence) !== null && _l !== void 0 ? _l : "0";
        message.dataHex = (_m = object.dataHex) !== null && _m !== void 0 ? _m : new Uint8Array();
        message.state = (_o = object.state) !== null && _o !== void 0 ? _o : "";
        message.txHashes = ((_p = object.txHashes) === null || _p === void 0 ? void 0 : _p.map((e) => e)) || [];
        message.createdAt = (_q = object.createdAt) !== null && _q !== void 0 ? _q : "";
        message.updatedAt = (_r = object.updatedAt) !== null && _r !== void 0 ? _r : "";
        return message;
    },
};
function createBaseGetWasmCodesRequest() {
    return { limit: 0, fromNumber: "0", toNumber: "0" };
}
exports.GetWasmCodesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.limit !== 0) {
            writer.uint32(8).sint32(message.limit);
        }
        if (message.fromNumber !== "0") {
            writer.uint32(16).sint64(message.fromNumber);
        }
        if (message.toNumber !== "0") {
            writer.uint32(24).sint64(message.toNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetWasmCodesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limit = reader.sint32();
                    break;
                case 2:
                    message.fromNumber = longToString(reader.sint64());
                    break;
                case 3:
                    message.toNumber = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            fromNumber: isSet(object.fromNumber) ? String(object.fromNumber) : "0",
            toNumber: isSet(object.toNumber) ? String(object.toNumber) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.fromNumber !== undefined && (obj.fromNumber = message.fromNumber);
        message.toNumber !== undefined && (obj.toNumber = message.toNumber);
        return obj;
    },
    create(base) {
        return exports.GetWasmCodesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetWasmCodesRequest();
        message.limit = (_a = object.limit) !== null && _a !== void 0 ? _a : 0;
        message.fromNumber = (_b = object.fromNumber) !== null && _b !== void 0 ? _b : "0";
        message.toNumber = (_c = object.toNumber) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseGetWasmCodesResponse() {
    return { paging: undefined, data: [] };
}
exports.GetWasmCodesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.data) {
            exports.WasmCode.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetWasmCodesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paging = exports.Paging.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data.push(exports.WasmCode.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => exports.WasmCode.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        if (message.data) {
            obj.data = message.data.map((e) => e ? exports.WasmCode.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetWasmCodesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetWasmCodesResponse();
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        message.data = ((_a = object.data) === null || _a === void 0 ? void 0 : _a.map((e) => exports.WasmCode.fromPartial(e))) || [];
        return message;
    },
};
function createBaseWasmCode() {
    return {
        codeId: "0",
        txHash: "",
        checksum: undefined,
        createdAt: "0",
        contractType: "",
        version: "",
        permission: undefined,
        codeSchema: "",
        codeView: "",
        instantiates: "0",
        creator: "",
        codeNumber: "0",
        proposalId: "0",
    };
}
exports.WasmCode = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.codeId !== "0") {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.txHash !== "") {
            writer.uint32(18).string(message.txHash);
        }
        if (message.checksum !== undefined) {
            exports.Checksum.encode(message.checksum, writer.uint32(26).fork()).ldelim();
        }
        if (message.createdAt !== "0") {
            writer.uint32(32).uint64(message.createdAt);
        }
        if (message.contractType !== "") {
            writer.uint32(42).string(message.contractType);
        }
        if (message.version !== "") {
            writer.uint32(50).string(message.version);
        }
        if (message.permission !== undefined) {
            exports.ContractPermission.encode(message.permission, writer.uint32(58).fork()).ldelim();
        }
        if (message.codeSchema !== "") {
            writer.uint32(66).string(message.codeSchema);
        }
        if (message.codeView !== "") {
            writer.uint32(74).string(message.codeView);
        }
        if (message.instantiates !== "0") {
            writer.uint32(80).uint64(message.instantiates);
        }
        if (message.creator !== "") {
            writer.uint32(90).string(message.creator);
        }
        if (message.codeNumber !== "0") {
            writer.uint32(96).sint64(message.codeNumber);
        }
        if (message.proposalId !== "0") {
            writer.uint32(104).sint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWasmCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = longToString(reader.uint64());
                    break;
                case 2:
                    message.txHash = reader.string();
                    break;
                case 3:
                    message.checksum = exports.Checksum.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.createdAt = longToString(reader.uint64());
                    break;
                case 5:
                    message.contractType = reader.string();
                    break;
                case 6:
                    message.version = reader.string();
                    break;
                case 7:
                    message.permission = exports.ContractPermission.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.codeSchema = reader.string();
                    break;
                case 9:
                    message.codeView = reader.string();
                    break;
                case 10:
                    message.instantiates = longToString(reader.uint64());
                    break;
                case 11:
                    message.creator = reader.string();
                    break;
                case 12:
                    message.codeNumber = longToString(reader.sint64());
                    break;
                case 13:
                    message.proposalId = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            codeId: isSet(object.codeId) ? String(object.codeId) : "0",
            txHash: isSet(object.txHash) ? String(object.txHash) : "",
            checksum: isSet(object.checksum) ? exports.Checksum.fromJSON(object.checksum) : undefined,
            createdAt: isSet(object.createdAt) ? String(object.createdAt) : "0",
            contractType: isSet(object.contractType) ? String(object.contractType) : "",
            version: isSet(object.version) ? String(object.version) : "",
            permission: isSet(object.permission) ? exports.ContractPermission.fromJSON(object.permission) : undefined,
            codeSchema: isSet(object.codeSchema) ? String(object.codeSchema) : "",
            codeView: isSet(object.codeView) ? String(object.codeView) : "",
            instantiates: isSet(object.instantiates) ? String(object.instantiates) : "0",
            creator: isSet(object.creator) ? String(object.creator) : "",
            codeNumber: isSet(object.codeNumber) ? String(object.codeNumber) : "0",
            proposalId: isSet(object.proposalId) ? String(object.proposalId) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = message.codeId);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        message.checksum !== undefined && (obj.checksum = message.checksum ? exports.Checksum.toJSON(message.checksum) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        message.contractType !== undefined && (obj.contractType = message.contractType);
        message.version !== undefined && (obj.version = message.version);
        message.permission !== undefined &&
            (obj.permission = message.permission ? exports.ContractPermission.toJSON(message.permission) : undefined);
        message.codeSchema !== undefined && (obj.codeSchema = message.codeSchema);
        message.codeView !== undefined && (obj.codeView = message.codeView);
        message.instantiates !== undefined && (obj.instantiates = message.instantiates);
        message.creator !== undefined && (obj.creator = message.creator);
        message.codeNumber !== undefined && (obj.codeNumber = message.codeNumber);
        message.proposalId !== undefined && (obj.proposalId = message.proposalId);
        return obj;
    },
    create(base) {
        return exports.WasmCode.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseWasmCode();
        message.codeId = (_a = object.codeId) !== null && _a !== void 0 ? _a : "0";
        message.txHash = (_b = object.txHash) !== null && _b !== void 0 ? _b : "";
        message.checksum = (object.checksum !== undefined && object.checksum !== null)
            ? exports.Checksum.fromPartial(object.checksum)
            : undefined;
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : "0";
        message.contractType = (_d = object.contractType) !== null && _d !== void 0 ? _d : "";
        message.version = (_e = object.version) !== null && _e !== void 0 ? _e : "";
        message.permission = (object.permission !== undefined && object.permission !== null)
            ? exports.ContractPermission.fromPartial(object.permission)
            : undefined;
        message.codeSchema = (_f = object.codeSchema) !== null && _f !== void 0 ? _f : "";
        message.codeView = (_g = object.codeView) !== null && _g !== void 0 ? _g : "";
        message.instantiates = (_h = object.instantiates) !== null && _h !== void 0 ? _h : "0";
        message.creator = (_j = object.creator) !== null && _j !== void 0 ? _j : "";
        message.codeNumber = (_k = object.codeNumber) !== null && _k !== void 0 ? _k : "0";
        message.proposalId = (_l = object.proposalId) !== null && _l !== void 0 ? _l : "0";
        return message;
    },
};
function createBaseChecksum() {
    return { algorithm: "", hash: "" };
}
exports.Checksum = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.algorithm !== "") {
            writer.uint32(10).string(message.algorithm);
        }
        if (message.hash !== "") {
            writer.uint32(18).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChecksum();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.algorithm = reader.string();
                    break;
                case 2:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            algorithm: isSet(object.algorithm) ? String(object.algorithm) : "",
            hash: isSet(object.hash) ? String(object.hash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.algorithm !== undefined && (obj.algorithm = message.algorithm);
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    create(base) {
        return exports.Checksum.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseChecksum();
        message.algorithm = (_a = object.algorithm) !== null && _a !== void 0 ? _a : "";
        message.hash = (_b = object.hash) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseContractPermission() {
    return { accessType: 0, address: "" };
}
exports.ContractPermission = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessType !== 0) {
            writer.uint32(8).sint32(message.accessType);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractPermission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessType = reader.sint32();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accessType: isSet(object.accessType) ? Number(object.accessType) : 0,
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.accessType !== undefined && (obj.accessType = Math.round(message.accessType));
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    create(base) {
        return exports.ContractPermission.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseContractPermission();
        message.accessType = (_a = object.accessType) !== null && _a !== void 0 ? _a : 0;
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetWasmCodeByIDRequest() {
    return { codeId: "0" };
}
exports.GetWasmCodeByIDRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.codeId !== "0") {
            writer.uint32(8).sint64(message.codeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetWasmCodeByIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { codeId: isSet(object.codeId) ? String(object.codeId) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = message.codeId);
        return obj;
    },
    create(base) {
        return exports.GetWasmCodeByIDRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetWasmCodeByIDRequest();
        message.codeId = (_a = object.codeId) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseGetWasmCodeByIDResponse() {
    return {
        codeId: "0",
        txHash: "",
        checksum: undefined,
        createdAt: "0",
        contractType: "",
        version: "",
        permission: undefined,
        codeSchema: "",
        codeView: "",
        instantiates: "0",
        creator: "",
        codeNumber: "0",
        proposalId: "0",
    };
}
exports.GetWasmCodeByIDResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.codeId !== "0") {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.txHash !== "") {
            writer.uint32(18).string(message.txHash);
        }
        if (message.checksum !== undefined) {
            exports.Checksum.encode(message.checksum, writer.uint32(26).fork()).ldelim();
        }
        if (message.createdAt !== "0") {
            writer.uint32(32).uint64(message.createdAt);
        }
        if (message.contractType !== "") {
            writer.uint32(42).string(message.contractType);
        }
        if (message.version !== "") {
            writer.uint32(50).string(message.version);
        }
        if (message.permission !== undefined) {
            exports.ContractPermission.encode(message.permission, writer.uint32(58).fork()).ldelim();
        }
        if (message.codeSchema !== "") {
            writer.uint32(66).string(message.codeSchema);
        }
        if (message.codeView !== "") {
            writer.uint32(74).string(message.codeView);
        }
        if (message.instantiates !== "0") {
            writer.uint32(80).uint64(message.instantiates);
        }
        if (message.creator !== "") {
            writer.uint32(90).string(message.creator);
        }
        if (message.codeNumber !== "0") {
            writer.uint32(96).sint64(message.codeNumber);
        }
        if (message.proposalId !== "0") {
            writer.uint32(104).sint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetWasmCodeByIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = longToString(reader.uint64());
                    break;
                case 2:
                    message.txHash = reader.string();
                    break;
                case 3:
                    message.checksum = exports.Checksum.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.createdAt = longToString(reader.uint64());
                    break;
                case 5:
                    message.contractType = reader.string();
                    break;
                case 6:
                    message.version = reader.string();
                    break;
                case 7:
                    message.permission = exports.ContractPermission.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.codeSchema = reader.string();
                    break;
                case 9:
                    message.codeView = reader.string();
                    break;
                case 10:
                    message.instantiates = longToString(reader.uint64());
                    break;
                case 11:
                    message.creator = reader.string();
                    break;
                case 12:
                    message.codeNumber = longToString(reader.sint64());
                    break;
                case 13:
                    message.proposalId = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            codeId: isSet(object.codeId) ? String(object.codeId) : "0",
            txHash: isSet(object.txHash) ? String(object.txHash) : "",
            checksum: isSet(object.checksum) ? exports.Checksum.fromJSON(object.checksum) : undefined,
            createdAt: isSet(object.createdAt) ? String(object.createdAt) : "0",
            contractType: isSet(object.contractType) ? String(object.contractType) : "",
            version: isSet(object.version) ? String(object.version) : "",
            permission: isSet(object.permission) ? exports.ContractPermission.fromJSON(object.permission) : undefined,
            codeSchema: isSet(object.codeSchema) ? String(object.codeSchema) : "",
            codeView: isSet(object.codeView) ? String(object.codeView) : "",
            instantiates: isSet(object.instantiates) ? String(object.instantiates) : "0",
            creator: isSet(object.creator) ? String(object.creator) : "",
            codeNumber: isSet(object.codeNumber) ? String(object.codeNumber) : "0",
            proposalId: isSet(object.proposalId) ? String(object.proposalId) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = message.codeId);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        message.checksum !== undefined && (obj.checksum = message.checksum ? exports.Checksum.toJSON(message.checksum) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        message.contractType !== undefined && (obj.contractType = message.contractType);
        message.version !== undefined && (obj.version = message.version);
        message.permission !== undefined &&
            (obj.permission = message.permission ? exports.ContractPermission.toJSON(message.permission) : undefined);
        message.codeSchema !== undefined && (obj.codeSchema = message.codeSchema);
        message.codeView !== undefined && (obj.codeView = message.codeView);
        message.instantiates !== undefined && (obj.instantiates = message.instantiates);
        message.creator !== undefined && (obj.creator = message.creator);
        message.codeNumber !== undefined && (obj.codeNumber = message.codeNumber);
        message.proposalId !== undefined && (obj.proposalId = message.proposalId);
        return obj;
    },
    create(base) {
        return exports.GetWasmCodeByIDResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseGetWasmCodeByIDResponse();
        message.codeId = (_a = object.codeId) !== null && _a !== void 0 ? _a : "0";
        message.txHash = (_b = object.txHash) !== null && _b !== void 0 ? _b : "";
        message.checksum = (object.checksum !== undefined && object.checksum !== null)
            ? exports.Checksum.fromPartial(object.checksum)
            : undefined;
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : "0";
        message.contractType = (_d = object.contractType) !== null && _d !== void 0 ? _d : "";
        message.version = (_e = object.version) !== null && _e !== void 0 ? _e : "";
        message.permission = (object.permission !== undefined && object.permission !== null)
            ? exports.ContractPermission.fromPartial(object.permission)
            : undefined;
        message.codeSchema = (_f = object.codeSchema) !== null && _f !== void 0 ? _f : "";
        message.codeView = (_g = object.codeView) !== null && _g !== void 0 ? _g : "";
        message.instantiates = (_h = object.instantiates) !== null && _h !== void 0 ? _h : "0";
        message.creator = (_j = object.creator) !== null && _j !== void 0 ? _j : "";
        message.codeNumber = (_k = object.codeNumber) !== null && _k !== void 0 ? _k : "0";
        message.proposalId = (_l = object.proposalId) !== null && _l !== void 0 ? _l : "0";
        return message;
    },
};
function createBaseGetWasmContractsRequest() {
    return { limit: 0, codeId: "0", fromNumber: "0", toNumber: "0", assetsOnly: false, skip: "0", label: "" };
}
exports.GetWasmContractsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.limit !== 0) {
            writer.uint32(8).sint32(message.limit);
        }
        if (message.codeId !== "0") {
            writer.uint32(16).sint64(message.codeId);
        }
        if (message.fromNumber !== "0") {
            writer.uint32(24).sint64(message.fromNumber);
        }
        if (message.toNumber !== "0") {
            writer.uint32(32).sint64(message.toNumber);
        }
        if (message.assetsOnly === true) {
            writer.uint32(40).bool(message.assetsOnly);
        }
        if (message.skip !== "0") {
            writer.uint32(48).sint64(message.skip);
        }
        if (message.label !== "") {
            writer.uint32(58).string(message.label);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetWasmContractsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limit = reader.sint32();
                    break;
                case 2:
                    message.codeId = longToString(reader.sint64());
                    break;
                case 3:
                    message.fromNumber = longToString(reader.sint64());
                    break;
                case 4:
                    message.toNumber = longToString(reader.sint64());
                    break;
                case 5:
                    message.assetsOnly = reader.bool();
                    break;
                case 6:
                    message.skip = longToString(reader.sint64());
                    break;
                case 7:
                    message.label = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            codeId: isSet(object.codeId) ? String(object.codeId) : "0",
            fromNumber: isSet(object.fromNumber) ? String(object.fromNumber) : "0",
            toNumber: isSet(object.toNumber) ? String(object.toNumber) : "0",
            assetsOnly: isSet(object.assetsOnly) ? Boolean(object.assetsOnly) : false,
            skip: isSet(object.skip) ? String(object.skip) : "0",
            label: isSet(object.label) ? String(object.label) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.codeId !== undefined && (obj.codeId = message.codeId);
        message.fromNumber !== undefined && (obj.fromNumber = message.fromNumber);
        message.toNumber !== undefined && (obj.toNumber = message.toNumber);
        message.assetsOnly !== undefined && (obj.assetsOnly = message.assetsOnly);
        message.skip !== undefined && (obj.skip = message.skip);
        message.label !== undefined && (obj.label = message.label);
        return obj;
    },
    create(base) {
        return exports.GetWasmContractsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseGetWasmContractsRequest();
        message.limit = (_a = object.limit) !== null && _a !== void 0 ? _a : 0;
        message.codeId = (_b = object.codeId) !== null && _b !== void 0 ? _b : "0";
        message.fromNumber = (_c = object.fromNumber) !== null && _c !== void 0 ? _c : "0";
        message.toNumber = (_d = object.toNumber) !== null && _d !== void 0 ? _d : "0";
        message.assetsOnly = (_e = object.assetsOnly) !== null && _e !== void 0 ? _e : false;
        message.skip = (_f = object.skip) !== null && _f !== void 0 ? _f : "0";
        message.label = (_g = object.label) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseGetWasmContractsResponse() {
    return { paging: undefined, data: [] };
}
exports.GetWasmContractsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.data) {
            exports.WasmContract.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetWasmContractsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paging = exports.Paging.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data.push(exports.WasmContract.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => exports.WasmContract.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        if (message.data) {
            obj.data = message.data.map((e) => e ? exports.WasmContract.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetWasmContractsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetWasmContractsResponse();
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        message.data = ((_a = object.data) === null || _a === void 0 ? void 0 : _a.map((e) => exports.WasmContract.fromPartial(e))) || [];
        return message;
    },
};
function createBaseWasmContract() {
    return {
        label: "",
        address: "",
        txHash: "",
        creator: "",
        executes: "0",
        instantiatedAt: "0",
        initMessage: "",
        lastExecutedAt: "0",
        funds: [],
        codeId: "0",
        admin: "",
        currentMigrateMessage: "",
        contractNumber: "0",
        version: "",
        type: "",
        cw20Metadata: undefined,
        proposalId: "0",
    };
}
exports.WasmContract = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.label !== "") {
            writer.uint32(10).string(message.label);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.txHash !== "") {
            writer.uint32(26).string(message.txHash);
        }
        if (message.creator !== "") {
            writer.uint32(34).string(message.creator);
        }
        if (message.executes !== "0") {
            writer.uint32(40).uint64(message.executes);
        }
        if (message.instantiatedAt !== "0") {
            writer.uint32(48).uint64(message.instantiatedAt);
        }
        if (message.initMessage !== "") {
            writer.uint32(58).string(message.initMessage);
        }
        if (message.lastExecutedAt !== "0") {
            writer.uint32(64).uint64(message.lastExecutedAt);
        }
        for (const v of message.funds) {
            exports.ContractFund.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.codeId !== "0") {
            writer.uint32(80).uint64(message.codeId);
        }
        if (message.admin !== "") {
            writer.uint32(90).string(message.admin);
        }
        if (message.currentMigrateMessage !== "") {
            writer.uint32(98).string(message.currentMigrateMessage);
        }
        if (message.contractNumber !== "0") {
            writer.uint32(104).sint64(message.contractNumber);
        }
        if (message.version !== "") {
            writer.uint32(114).string(message.version);
        }
        if (message.type !== "") {
            writer.uint32(122).string(message.type);
        }
        if (message.cw20Metadata !== undefined) {
            exports.Cw20Metadata.encode(message.cw20Metadata, writer.uint32(130).fork()).ldelim();
        }
        if (message.proposalId !== "0") {
            writer.uint32(136).sint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWasmContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.label = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.txHash = reader.string();
                    break;
                case 4:
                    message.creator = reader.string();
                    break;
                case 5:
                    message.executes = longToString(reader.uint64());
                    break;
                case 6:
                    message.instantiatedAt = longToString(reader.uint64());
                    break;
                case 7:
                    message.initMessage = reader.string();
                    break;
                case 8:
                    message.lastExecutedAt = longToString(reader.uint64());
                    break;
                case 9:
                    message.funds.push(exports.ContractFund.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.codeId = longToString(reader.uint64());
                    break;
                case 11:
                    message.admin = reader.string();
                    break;
                case 12:
                    message.currentMigrateMessage = reader.string();
                    break;
                case 13:
                    message.contractNumber = longToString(reader.sint64());
                    break;
                case 14:
                    message.version = reader.string();
                    break;
                case 15:
                    message.type = reader.string();
                    break;
                case 16:
                    message.cw20Metadata = exports.Cw20Metadata.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.proposalId = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            label: isSet(object.label) ? String(object.label) : "",
            address: isSet(object.address) ? String(object.address) : "",
            txHash: isSet(object.txHash) ? String(object.txHash) : "",
            creator: isSet(object.creator) ? String(object.creator) : "",
            executes: isSet(object.executes) ? String(object.executes) : "0",
            instantiatedAt: isSet(object.instantiatedAt) ? String(object.instantiatedAt) : "0",
            initMessage: isSet(object.initMessage) ? String(object.initMessage) : "",
            lastExecutedAt: isSet(object.lastExecutedAt) ? String(object.lastExecutedAt) : "0",
            funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map((e) => exports.ContractFund.fromJSON(e)) : [],
            codeId: isSet(object.codeId) ? String(object.codeId) : "0",
            admin: isSet(object.admin) ? String(object.admin) : "",
            currentMigrateMessage: isSet(object.currentMigrateMessage) ? String(object.currentMigrateMessage) : "",
            contractNumber: isSet(object.contractNumber) ? String(object.contractNumber) : "0",
            version: isSet(object.version) ? String(object.version) : "",
            type: isSet(object.type) ? String(object.type) : "",
            cw20Metadata: isSet(object.cw20Metadata) ? exports.Cw20Metadata.fromJSON(object.cw20Metadata) : undefined,
            proposalId: isSet(object.proposalId) ? String(object.proposalId) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.label !== undefined && (obj.label = message.label);
        message.address !== undefined && (obj.address = message.address);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        message.creator !== undefined && (obj.creator = message.creator);
        message.executes !== undefined && (obj.executes = message.executes);
        message.instantiatedAt !== undefined && (obj.instantiatedAt = message.instantiatedAt);
        message.initMessage !== undefined && (obj.initMessage = message.initMessage);
        message.lastExecutedAt !== undefined && (obj.lastExecutedAt = message.lastExecutedAt);
        if (message.funds) {
            obj.funds = message.funds.map((e) => e ? exports.ContractFund.toJSON(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        message.codeId !== undefined && (obj.codeId = message.codeId);
        message.admin !== undefined && (obj.admin = message.admin);
        message.currentMigrateMessage !== undefined && (obj.currentMigrateMessage = message.currentMigrateMessage);
        message.contractNumber !== undefined && (obj.contractNumber = message.contractNumber);
        message.version !== undefined && (obj.version = message.version);
        message.type !== undefined && (obj.type = message.type);
        message.cw20Metadata !== undefined &&
            (obj.cw20Metadata = message.cw20Metadata ? exports.Cw20Metadata.toJSON(message.cw20Metadata) : undefined);
        message.proposalId !== undefined && (obj.proposalId = message.proposalId);
        return obj;
    },
    create(base) {
        return exports.WasmContract.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const message = createBaseWasmContract();
        message.label = (_a = object.label) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.txHash = (_c = object.txHash) !== null && _c !== void 0 ? _c : "";
        message.creator = (_d = object.creator) !== null && _d !== void 0 ? _d : "";
        message.executes = (_e = object.executes) !== null && _e !== void 0 ? _e : "0";
        message.instantiatedAt = (_f = object.instantiatedAt) !== null && _f !== void 0 ? _f : "0";
        message.initMessage = (_g = object.initMessage) !== null && _g !== void 0 ? _g : "";
        message.lastExecutedAt = (_h = object.lastExecutedAt) !== null && _h !== void 0 ? _h : "0";
        message.funds = ((_j = object.funds) === null || _j === void 0 ? void 0 : _j.map((e) => exports.ContractFund.fromPartial(e))) || [];
        message.codeId = (_k = object.codeId) !== null && _k !== void 0 ? _k : "0";
        message.admin = (_l = object.admin) !== null && _l !== void 0 ? _l : "";
        message.currentMigrateMessage = (_m = object.currentMigrateMessage) !== null && _m !== void 0 ? _m : "";
        message.contractNumber = (_o = object.contractNumber) !== null && _o !== void 0 ? _o : "0";
        message.version = (_p = object.version) !== null && _p !== void 0 ? _p : "";
        message.type = (_q = object.type) !== null && _q !== void 0 ? _q : "";
        message.cw20Metadata = (object.cw20Metadata !== undefined && object.cw20Metadata !== null)
            ? exports.Cw20Metadata.fromPartial(object.cw20Metadata)
            : undefined;
        message.proposalId = (_r = object.proposalId) !== null && _r !== void 0 ? _r : "0";
        return message;
    },
};
function createBaseContractFund() {
    return { denom: "", amount: "" };
}
exports.ContractFund = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractFund();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            denom: isSet(object.denom) ? String(object.denom) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    create(base) {
        return exports.ContractFund.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseContractFund();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCw20Metadata() {
    return { tokenInfo: undefined, marketingInfo: undefined };
}
exports.Cw20Metadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tokenInfo !== undefined) {
            exports.Cw20TokenInfo.encode(message.tokenInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.marketingInfo !== undefined) {
            exports.Cw20MarketingInfo.encode(message.marketingInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCw20Metadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenInfo = exports.Cw20TokenInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.marketingInfo = exports.Cw20MarketingInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tokenInfo: isSet(object.tokenInfo) ? exports.Cw20TokenInfo.fromJSON(object.tokenInfo) : undefined,
            marketingInfo: isSet(object.marketingInfo) ? exports.Cw20MarketingInfo.fromJSON(object.marketingInfo) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tokenInfo !== undefined &&
            (obj.tokenInfo = message.tokenInfo ? exports.Cw20TokenInfo.toJSON(message.tokenInfo) : undefined);
        message.marketingInfo !== undefined &&
            (obj.marketingInfo = message.marketingInfo ? exports.Cw20MarketingInfo.toJSON(message.marketingInfo) : undefined);
        return obj;
    },
    create(base) {
        return exports.Cw20Metadata.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCw20Metadata();
        message.tokenInfo = (object.tokenInfo !== undefined && object.tokenInfo !== null)
            ? exports.Cw20TokenInfo.fromPartial(object.tokenInfo)
            : undefined;
        message.marketingInfo = (object.marketingInfo !== undefined && object.marketingInfo !== null)
            ? exports.Cw20MarketingInfo.fromPartial(object.marketingInfo)
            : undefined;
        return message;
    },
};
function createBaseCw20TokenInfo() {
    return { name: "", symbol: "", decimals: "0", totalSupply: "" };
}
exports.Cw20TokenInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (message.decimals !== "0") {
            writer.uint32(24).sint64(message.decimals);
        }
        if (message.totalSupply !== "") {
            writer.uint32(34).string(message.totalSupply);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCw20TokenInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.decimals = longToString(reader.sint64());
                    break;
                case 4:
                    message.totalSupply = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            decimals: isSet(object.decimals) ? String(object.decimals) : "0",
            totalSupply: isSet(object.totalSupply) ? String(object.totalSupply) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.decimals !== undefined && (obj.decimals = message.decimals);
        message.totalSupply !== undefined && (obj.totalSupply = message.totalSupply);
        return obj;
    },
    create(base) {
        return exports.Cw20TokenInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCw20TokenInfo();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.symbol = (_b = object.symbol) !== null && _b !== void 0 ? _b : "";
        message.decimals = (_c = object.decimals) !== null && _c !== void 0 ? _c : "0";
        message.totalSupply = (_d = object.totalSupply) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseCw20MarketingInfo() {
    return { project: "", description: "", logo: "", marketing: new Uint8Array() };
}
exports.Cw20MarketingInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.project !== "") {
            writer.uint32(10).string(message.project);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.logo !== "") {
            writer.uint32(26).string(message.logo);
        }
        if (message.marketing.length !== 0) {
            writer.uint32(34).bytes(message.marketing);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCw20MarketingInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.project = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.logo = reader.string();
                    break;
                case 4:
                    message.marketing = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            project: isSet(object.project) ? String(object.project) : "",
            description: isSet(object.description) ? String(object.description) : "",
            logo: isSet(object.logo) ? String(object.logo) : "",
            marketing: isSet(object.marketing) ? bytesFromBase64(object.marketing) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.project !== undefined && (obj.project = message.project);
        message.description !== undefined && (obj.description = message.description);
        message.logo !== undefined && (obj.logo = message.logo);
        message.marketing !== undefined &&
            (obj.marketing = base64FromBytes(message.marketing !== undefined ? message.marketing : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.Cw20MarketingInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCw20MarketingInfo();
        message.project = (_a = object.project) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.logo = (_c = object.logo) !== null && _c !== void 0 ? _c : "";
        message.marketing = (_d = object.marketing) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseGetWasmContractByAddressRequest() {
    return { contractAddress: "" };
}
exports.GetWasmContractByAddressRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetWasmContractByAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        return obj;
    },
    create(base) {
        return exports.GetWasmContractByAddressRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetWasmContractByAddressRequest();
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetWasmContractByAddressResponse() {
    return {
        label: "",
        address: "",
        txHash: "",
        creator: "",
        executes: "0",
        instantiatedAt: "0",
        initMessage: "",
        lastExecutedAt: "0",
        funds: [],
        codeId: "0",
        admin: "",
        currentMigrateMessage: "",
        contractNumber: "0",
        version: "",
        type: "",
        cw20Metadata: undefined,
        proposalId: "0",
    };
}
exports.GetWasmContractByAddressResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.label !== "") {
            writer.uint32(10).string(message.label);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.txHash !== "") {
            writer.uint32(26).string(message.txHash);
        }
        if (message.creator !== "") {
            writer.uint32(34).string(message.creator);
        }
        if (message.executes !== "0") {
            writer.uint32(40).uint64(message.executes);
        }
        if (message.instantiatedAt !== "0") {
            writer.uint32(48).uint64(message.instantiatedAt);
        }
        if (message.initMessage !== "") {
            writer.uint32(58).string(message.initMessage);
        }
        if (message.lastExecutedAt !== "0") {
            writer.uint32(64).uint64(message.lastExecutedAt);
        }
        for (const v of message.funds) {
            exports.ContractFund.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.codeId !== "0") {
            writer.uint32(80).uint64(message.codeId);
        }
        if (message.admin !== "") {
            writer.uint32(90).string(message.admin);
        }
        if (message.currentMigrateMessage !== "") {
            writer.uint32(98).string(message.currentMigrateMessage);
        }
        if (message.contractNumber !== "0") {
            writer.uint32(104).sint64(message.contractNumber);
        }
        if (message.version !== "") {
            writer.uint32(114).string(message.version);
        }
        if (message.type !== "") {
            writer.uint32(122).string(message.type);
        }
        if (message.cw20Metadata !== undefined) {
            exports.Cw20Metadata.encode(message.cw20Metadata, writer.uint32(130).fork()).ldelim();
        }
        if (message.proposalId !== "0") {
            writer.uint32(136).sint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetWasmContractByAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.label = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.txHash = reader.string();
                    break;
                case 4:
                    message.creator = reader.string();
                    break;
                case 5:
                    message.executes = longToString(reader.uint64());
                    break;
                case 6:
                    message.instantiatedAt = longToString(reader.uint64());
                    break;
                case 7:
                    message.initMessage = reader.string();
                    break;
                case 8:
                    message.lastExecutedAt = longToString(reader.uint64());
                    break;
                case 9:
                    message.funds.push(exports.ContractFund.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.codeId = longToString(reader.uint64());
                    break;
                case 11:
                    message.admin = reader.string();
                    break;
                case 12:
                    message.currentMigrateMessage = reader.string();
                    break;
                case 13:
                    message.contractNumber = longToString(reader.sint64());
                    break;
                case 14:
                    message.version = reader.string();
                    break;
                case 15:
                    message.type = reader.string();
                    break;
                case 16:
                    message.cw20Metadata = exports.Cw20Metadata.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.proposalId = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            label: isSet(object.label) ? String(object.label) : "",
            address: isSet(object.address) ? String(object.address) : "",
            txHash: isSet(object.txHash) ? String(object.txHash) : "",
            creator: isSet(object.creator) ? String(object.creator) : "",
            executes: isSet(object.executes) ? String(object.executes) : "0",
            instantiatedAt: isSet(object.instantiatedAt) ? String(object.instantiatedAt) : "0",
            initMessage: isSet(object.initMessage) ? String(object.initMessage) : "",
            lastExecutedAt: isSet(object.lastExecutedAt) ? String(object.lastExecutedAt) : "0",
            funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map((e) => exports.ContractFund.fromJSON(e)) : [],
            codeId: isSet(object.codeId) ? String(object.codeId) : "0",
            admin: isSet(object.admin) ? String(object.admin) : "",
            currentMigrateMessage: isSet(object.currentMigrateMessage) ? String(object.currentMigrateMessage) : "",
            contractNumber: isSet(object.contractNumber) ? String(object.contractNumber) : "0",
            version: isSet(object.version) ? String(object.version) : "",
            type: isSet(object.type) ? String(object.type) : "",
            cw20Metadata: isSet(object.cw20Metadata) ? exports.Cw20Metadata.fromJSON(object.cw20Metadata) : undefined,
            proposalId: isSet(object.proposalId) ? String(object.proposalId) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.label !== undefined && (obj.label = message.label);
        message.address !== undefined && (obj.address = message.address);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        message.creator !== undefined && (obj.creator = message.creator);
        message.executes !== undefined && (obj.executes = message.executes);
        message.instantiatedAt !== undefined && (obj.instantiatedAt = message.instantiatedAt);
        message.initMessage !== undefined && (obj.initMessage = message.initMessage);
        message.lastExecutedAt !== undefined && (obj.lastExecutedAt = message.lastExecutedAt);
        if (message.funds) {
            obj.funds = message.funds.map((e) => e ? exports.ContractFund.toJSON(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        message.codeId !== undefined && (obj.codeId = message.codeId);
        message.admin !== undefined && (obj.admin = message.admin);
        message.currentMigrateMessage !== undefined && (obj.currentMigrateMessage = message.currentMigrateMessage);
        message.contractNumber !== undefined && (obj.contractNumber = message.contractNumber);
        message.version !== undefined && (obj.version = message.version);
        message.type !== undefined && (obj.type = message.type);
        message.cw20Metadata !== undefined &&
            (obj.cw20Metadata = message.cw20Metadata ? exports.Cw20Metadata.toJSON(message.cw20Metadata) : undefined);
        message.proposalId !== undefined && (obj.proposalId = message.proposalId);
        return obj;
    },
    create(base) {
        return exports.GetWasmContractByAddressResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const message = createBaseGetWasmContractByAddressResponse();
        message.label = (_a = object.label) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.txHash = (_c = object.txHash) !== null && _c !== void 0 ? _c : "";
        message.creator = (_d = object.creator) !== null && _d !== void 0 ? _d : "";
        message.executes = (_e = object.executes) !== null && _e !== void 0 ? _e : "0";
        message.instantiatedAt = (_f = object.instantiatedAt) !== null && _f !== void 0 ? _f : "0";
        message.initMessage = (_g = object.initMessage) !== null && _g !== void 0 ? _g : "";
        message.lastExecutedAt = (_h = object.lastExecutedAt) !== null && _h !== void 0 ? _h : "0";
        message.funds = ((_j = object.funds) === null || _j === void 0 ? void 0 : _j.map((e) => exports.ContractFund.fromPartial(e))) || [];
        message.codeId = (_k = object.codeId) !== null && _k !== void 0 ? _k : "0";
        message.admin = (_l = object.admin) !== null && _l !== void 0 ? _l : "";
        message.currentMigrateMessage = (_m = object.currentMigrateMessage) !== null && _m !== void 0 ? _m : "";
        message.contractNumber = (_o = object.contractNumber) !== null && _o !== void 0 ? _o : "0";
        message.version = (_p = object.version) !== null && _p !== void 0 ? _p : "";
        message.type = (_q = object.type) !== null && _q !== void 0 ? _q : "";
        message.cw20Metadata = (object.cw20Metadata !== undefined && object.cw20Metadata !== null)
            ? exports.Cw20Metadata.fromPartial(object.cw20Metadata)
            : undefined;
        message.proposalId = (_r = object.proposalId) !== null && _r !== void 0 ? _r : "0";
        return message;
    },
};
function createBaseGetCw20BalanceRequest() {
    return { address: "", limit: 0 };
}
exports.GetCw20BalanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.limit !== 0) {
            writer.uint32(16).sint32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCw20BalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.limit = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        return obj;
    },
    create(base) {
        return exports.GetCw20BalanceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetCw20BalanceRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.limit = (_b = object.limit) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseGetCw20BalanceResponse() {
    return { field: [] };
}
exports.GetCw20BalanceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.field) {
            exports.WasmCw20Balance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCw20BalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.field.push(exports.WasmCw20Balance.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { field: Array.isArray(object === null || object === void 0 ? void 0 : object.field) ? object.field.map((e) => exports.WasmCw20Balance.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.field) {
            obj.field = message.field.map((e) => e ? exports.WasmCw20Balance.toJSON(e) : undefined);
        }
        else {
            obj.field = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetCw20BalanceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetCw20BalanceResponse();
        message.field = ((_a = object.field) === null || _a === void 0 ? void 0 : _a.map((e) => exports.WasmCw20Balance.fromPartial(e))) || [];
        return message;
    },
};
function createBaseWasmCw20Balance() {
    return { contractAddress: "", account: "", balance: "", updatedAt: "0", cw20Metadata: undefined };
}
exports.WasmCw20Balance = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        if (message.balance !== "") {
            writer.uint32(26).string(message.balance);
        }
        if (message.updatedAt !== "0") {
            writer.uint32(32).sint64(message.updatedAt);
        }
        if (message.cw20Metadata !== undefined) {
            exports.Cw20Metadata.encode(message.cw20Metadata, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWasmCw20Balance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.account = reader.string();
                    break;
                case 3:
                    message.balance = reader.string();
                    break;
                case 4:
                    message.updatedAt = longToString(reader.sint64());
                    break;
                case 5:
                    message.cw20Metadata = exports.Cw20Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            account: isSet(object.account) ? String(object.account) : "",
            balance: isSet(object.balance) ? String(object.balance) : "",
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
            cw20Metadata: isSet(object.cw20Metadata) ? exports.Cw20Metadata.fromJSON(object.cw20Metadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.account !== undefined && (obj.account = message.account);
        message.balance !== undefined && (obj.balance = message.balance);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        message.cw20Metadata !== undefined &&
            (obj.cw20Metadata = message.cw20Metadata ? exports.Cw20Metadata.toJSON(message.cw20Metadata) : undefined);
        return obj;
    },
    create(base) {
        return exports.WasmCw20Balance.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseWasmCw20Balance();
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        message.account = (_b = object.account) !== null && _b !== void 0 ? _b : "";
        message.balance = (_c = object.balance) !== null && _c !== void 0 ? _c : "";
        message.updatedAt = (_d = object.updatedAt) !== null && _d !== void 0 ? _d : "0";
        message.cw20Metadata = (object.cw20Metadata !== undefined && object.cw20Metadata !== null)
            ? exports.Cw20Metadata.fromPartial(object.cw20Metadata)
            : undefined;
        return message;
    },
};
function createBaseRelayersRequest() {
    return { marketIDs: [] };
}
exports.RelayersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.marketIDs) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRelayersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketIDs.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { marketIDs: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIDs) ? object.marketIDs.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.marketIDs) {
            obj.marketIDs = message.marketIDs.map((e) => e);
        }
        else {
            obj.marketIDs = [];
        }
        return obj;
    },
    create(base) {
        return exports.RelayersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRelayersRequest();
        message.marketIDs = ((_a = object.marketIDs) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseRelayersResponse() {
    return { field: [] };
}
exports.RelayersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.field) {
            exports.RelayerMarkets.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRelayersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.field.push(exports.RelayerMarkets.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { field: Array.isArray(object === null || object === void 0 ? void 0 : object.field) ? object.field.map((e) => exports.RelayerMarkets.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.field) {
            obj.field = message.field.map((e) => e ? exports.RelayerMarkets.toJSON(e) : undefined);
        }
        else {
            obj.field = [];
        }
        return obj;
    },
    create(base) {
        return exports.RelayersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRelayersResponse();
        message.field = ((_a = object.field) === null || _a === void 0 ? void 0 : _a.map((e) => exports.RelayerMarkets.fromPartial(e))) || [];
        return message;
    },
};
function createBaseRelayerMarkets() {
    return { marketId: "", relayers: [] };
}
exports.RelayerMarkets = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        for (const v of message.relayers) {
            exports.Relayer.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRelayerMarkets();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.relayers.push(exports.Relayer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            relayers: Array.isArray(object === null || object === void 0 ? void 0 : object.relayers) ? object.relayers.map((e) => exports.Relayer.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        if (message.relayers) {
            obj.relayers = message.relayers.map((e) => e ? exports.Relayer.toJSON(e) : undefined);
        }
        else {
            obj.relayers = [];
        }
        return obj;
    },
    create(base) {
        return exports.RelayerMarkets.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRelayerMarkets();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.relayers = ((_b = object.relayers) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Relayer.fromPartial(e))) || [];
        return message;
    },
};
function createBaseRelayer() {
    return { name: "", cta: "" };
}
exports.Relayer = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.cta !== "") {
            writer.uint32(18).string(message.cta);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRelayer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.cta = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { name: isSet(object.name) ? String(object.name) : "", cta: isSet(object.cta) ? String(object.cta) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.cta !== undefined && (obj.cta = message.cta);
        return obj;
    },
    create(base) {
        return exports.Relayer.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRelayer();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.cta = (_b = object.cta) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetBankTransfersRequest() {
    return {
        senders: [],
        recipients: [],
        isCommunityPoolRelated: false,
        limit: 0,
        skip: "0",
        startTime: "0",
        endTime: "0",
        address: [],
        perPage: 0,
        token: "",
    };
}
exports.GetBankTransfersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.senders) {
            writer.uint32(10).string(v);
        }
        for (const v of message.recipients) {
            writer.uint32(18).string(v);
        }
        if (message.isCommunityPoolRelated === true) {
            writer.uint32(24).bool(message.isCommunityPoolRelated);
        }
        if (message.limit !== 0) {
            writer.uint32(32).sint32(message.limit);
        }
        if (message.skip !== "0") {
            writer.uint32(40).uint64(message.skip);
        }
        if (message.startTime !== "0") {
            writer.uint32(48).sint64(message.startTime);
        }
        if (message.endTime !== "0") {
            writer.uint32(56).sint64(message.endTime);
        }
        for (const v of message.address) {
            writer.uint32(66).string(v);
        }
        if (message.perPage !== 0) {
            writer.uint32(72).sint32(message.perPage);
        }
        if (message.token !== "") {
            writer.uint32(82).string(message.token);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBankTransfersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senders.push(reader.string());
                    break;
                case 2:
                    message.recipients.push(reader.string());
                    break;
                case 3:
                    message.isCommunityPoolRelated = reader.bool();
                    break;
                case 4:
                    message.limit = reader.sint32();
                    break;
                case 5:
                    message.skip = longToString(reader.uint64());
                    break;
                case 6:
                    message.startTime = longToString(reader.sint64());
                    break;
                case 7:
                    message.endTime = longToString(reader.sint64());
                    break;
                case 8:
                    message.address.push(reader.string());
                    break;
                case 9:
                    message.perPage = reader.sint32();
                    break;
                case 10:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            senders: Array.isArray(object === null || object === void 0 ? void 0 : object.senders) ? object.senders.map((e) => String(e)) : [],
            recipients: Array.isArray(object === null || object === void 0 ? void 0 : object.recipients) ? object.recipients.map((e) => String(e)) : [],
            isCommunityPoolRelated: isSet(object.isCommunityPoolRelated) ? Boolean(object.isCommunityPoolRelated) : false,
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            skip: isSet(object.skip) ? String(object.skip) : "0",
            startTime: isSet(object.startTime) ? String(object.startTime) : "0",
            endTime: isSet(object.endTime) ? String(object.endTime) : "0",
            address: Array.isArray(object === null || object === void 0 ? void 0 : object.address) ? object.address.map((e) => String(e)) : [],
            perPage: isSet(object.perPage) ? Number(object.perPage) : 0,
            token: isSet(object.token) ? String(object.token) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.senders) {
            obj.senders = message.senders.map((e) => e);
        }
        else {
            obj.senders = [];
        }
        if (message.recipients) {
            obj.recipients = message.recipients.map((e) => e);
        }
        else {
            obj.recipients = [];
        }
        message.isCommunityPoolRelated !== undefined && (obj.isCommunityPoolRelated = message.isCommunityPoolRelated);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.skip !== undefined && (obj.skip = message.skip);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        if (message.address) {
            obj.address = message.address.map((e) => e);
        }
        else {
            obj.address = [];
        }
        message.perPage !== undefined && (obj.perPage = Math.round(message.perPage));
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },
    create(base) {
        return exports.GetBankTransfersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseGetBankTransfersRequest();
        message.senders = ((_a = object.senders) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.recipients = ((_b = object.recipients) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.isCommunityPoolRelated = (_c = object.isCommunityPoolRelated) !== null && _c !== void 0 ? _c : false;
        message.limit = (_d = object.limit) !== null && _d !== void 0 ? _d : 0;
        message.skip = (_e = object.skip) !== null && _e !== void 0 ? _e : "0";
        message.startTime = (_f = object.startTime) !== null && _f !== void 0 ? _f : "0";
        message.endTime = (_g = object.endTime) !== null && _g !== void 0 ? _g : "0";
        message.address = ((_h = object.address) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.perPage = (_j = object.perPage) !== null && _j !== void 0 ? _j : 0;
        message.token = (_k = object.token) !== null && _k !== void 0 ? _k : "";
        return message;
    },
};
function createBaseGetBankTransfersResponse() {
    return { paging: undefined, data: [] };
}
exports.GetBankTransfersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.data) {
            exports.BankTransfer.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBankTransfersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paging = exports.Paging.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data.push(exports.BankTransfer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => exports.BankTransfer.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        if (message.data) {
            obj.data = message.data.map((e) => e ? exports.BankTransfer.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetBankTransfersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetBankTransfersResponse();
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        message.data = ((_a = object.data) === null || _a === void 0 ? void 0 : _a.map((e) => exports.BankTransfer.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBankTransfer() {
    return { sender: "", recipient: "", amounts: [], blockNumber: "0", blockTimestamp: "" };
}
exports.BankTransfer = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(18).string(message.recipient);
        }
        for (const v of message.amounts) {
            exports.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.blockNumber !== "0") {
            writer.uint32(32).uint64(message.blockNumber);
        }
        if (message.blockTimestamp !== "") {
            writer.uint32(42).string(message.blockTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBankTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.recipient = reader.string();
                    break;
                case 3:
                    message.amounts.push(exports.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.blockNumber = longToString(reader.uint64());
                    break;
                case 5:
                    message.blockTimestamp = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            amounts: Array.isArray(object === null || object === void 0 ? void 0 : object.amounts) ? object.amounts.map((e) => exports.Coin.fromJSON(e)) : [],
            blockNumber: isSet(object.blockNumber) ? String(object.blockNumber) : "0",
            blockTimestamp: isSet(object.blockTimestamp) ? String(object.blockTimestamp) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        if (message.amounts) {
            obj.amounts = message.amounts.map((e) => e ? exports.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amounts = [];
        }
        message.blockNumber !== undefined && (obj.blockNumber = message.blockNumber);
        message.blockTimestamp !== undefined && (obj.blockTimestamp = message.blockTimestamp);
        return obj;
    },
    create(base) {
        return exports.BankTransfer.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseBankTransfer();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.recipient = (_b = object.recipient) !== null && _b !== void 0 ? _b : "";
        message.amounts = ((_c = object.amounts) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Coin.fromPartial(e))) || [];
        message.blockNumber = (_d = object.blockNumber) !== null && _d !== void 0 ? _d : "0";
        message.blockTimestamp = (_e = object.blockTimestamp) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseCoin() {
    return { denom: "", amount: "" };
}
exports.Coin = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            denom: isSet(object.denom) ? String(object.denom) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    create(base) {
        return exports.Coin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCoin();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseStreamTxsRequest() {
    return {};
}
exports.StreamTxsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamTxsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
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
        return exports.StreamTxsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseStreamTxsRequest();
        return message;
    },
};
function createBaseStreamTxsResponse() {
    return {
        id: "",
        blockNumber: "0",
        blockTimestamp: "",
        hash: "",
        codespace: "",
        messages: "",
        txNumber: "0",
        errorLog: "",
        code: 0,
        claimIds: [],
    };
}
exports.StreamTxsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.blockNumber !== "0") {
            writer.uint32(16).uint64(message.blockNumber);
        }
        if (message.blockTimestamp !== "") {
            writer.uint32(26).string(message.blockTimestamp);
        }
        if (message.hash !== "") {
            writer.uint32(34).string(message.hash);
        }
        if (message.codespace !== "") {
            writer.uint32(42).string(message.codespace);
        }
        if (message.messages !== "") {
            writer.uint32(50).string(message.messages);
        }
        if (message.txNumber !== "0") {
            writer.uint32(56).uint64(message.txNumber);
        }
        if (message.errorLog !== "") {
            writer.uint32(66).string(message.errorLog);
        }
        if (message.code !== 0) {
            writer.uint32(72).uint32(message.code);
        }
        writer.uint32(82).fork();
        for (const v of message.claimIds) {
            writer.sint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamTxsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.blockNumber = longToString(reader.uint64());
                    break;
                case 3:
                    message.blockTimestamp = reader.string();
                    break;
                case 4:
                    message.hash = reader.string();
                    break;
                case 5:
                    message.codespace = reader.string();
                    break;
                case 6:
                    message.messages = reader.string();
                    break;
                case 7:
                    message.txNumber = longToString(reader.uint64());
                    break;
                case 8:
                    message.errorLog = reader.string();
                    break;
                case 9:
                    message.code = reader.uint32();
                    break;
                case 10:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.claimIds.push(longToString(reader.sint64()));
                        }
                    }
                    else {
                        message.claimIds.push(longToString(reader.sint64()));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            blockNumber: isSet(object.blockNumber) ? String(object.blockNumber) : "0",
            blockTimestamp: isSet(object.blockTimestamp) ? String(object.blockTimestamp) : "",
            hash: isSet(object.hash) ? String(object.hash) : "",
            codespace: isSet(object.codespace) ? String(object.codespace) : "",
            messages: isSet(object.messages) ? String(object.messages) : "",
            txNumber: isSet(object.txNumber) ? String(object.txNumber) : "0",
            errorLog: isSet(object.errorLog) ? String(object.errorLog) : "",
            code: isSet(object.code) ? Number(object.code) : 0,
            claimIds: Array.isArray(object === null || object === void 0 ? void 0 : object.claimIds) ? object.claimIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.blockNumber !== undefined && (obj.blockNumber = message.blockNumber);
        message.blockTimestamp !== undefined && (obj.blockTimestamp = message.blockTimestamp);
        message.hash !== undefined && (obj.hash = message.hash);
        message.codespace !== undefined && (obj.codespace = message.codespace);
        message.messages !== undefined && (obj.messages = message.messages);
        message.txNumber !== undefined && (obj.txNumber = message.txNumber);
        message.errorLog !== undefined && (obj.errorLog = message.errorLog);
        message.code !== undefined && (obj.code = Math.round(message.code));
        if (message.claimIds) {
            obj.claimIds = message.claimIds.map((e) => e);
        }
        else {
            obj.claimIds = [];
        }
        return obj;
    },
    create(base) {
        return exports.StreamTxsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseStreamTxsResponse();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.blockNumber = (_b = object.blockNumber) !== null && _b !== void 0 ? _b : "0";
        message.blockTimestamp = (_c = object.blockTimestamp) !== null && _c !== void 0 ? _c : "";
        message.hash = (_d = object.hash) !== null && _d !== void 0 ? _d : "";
        message.codespace = (_e = object.codespace) !== null && _e !== void 0 ? _e : "";
        message.messages = (_f = object.messages) !== null && _f !== void 0 ? _f : "";
        message.txNumber = (_g = object.txNumber) !== null && _g !== void 0 ? _g : "0";
        message.errorLog = (_h = object.errorLog) !== null && _h !== void 0 ? _h : "";
        message.code = (_j = object.code) !== null && _j !== void 0 ? _j : 0;
        message.claimIds = ((_k = object.claimIds) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        return message;
    },
};
function createBaseStreamBlocksRequest() {
    return {};
}
exports.StreamBlocksRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamBlocksRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
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
        return exports.StreamBlocksRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseStreamBlocksRequest();
        return message;
    },
};
function createBaseStreamBlocksResponse() {
    return {
        height: "0",
        proposer: "",
        moniker: "",
        blockHash: "",
        parentHash: "",
        numPreCommits: "0",
        numTxs: "0",
        txs: [],
        timestamp: "",
    };
}
exports.StreamBlocksResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).uint64(message.height);
        }
        if (message.proposer !== "") {
            writer.uint32(18).string(message.proposer);
        }
        if (message.moniker !== "") {
            writer.uint32(26).string(message.moniker);
        }
        if (message.blockHash !== "") {
            writer.uint32(34).string(message.blockHash);
        }
        if (message.parentHash !== "") {
            writer.uint32(42).string(message.parentHash);
        }
        if (message.numPreCommits !== "0") {
            writer.uint32(48).sint64(message.numPreCommits);
        }
        if (message.numTxs !== "0") {
            writer.uint32(56).sint64(message.numTxs);
        }
        for (const v of message.txs) {
            exports.TxDataRPC.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.timestamp !== "") {
            writer.uint32(74).string(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamBlocksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.uint64());
                    break;
                case 2:
                    message.proposer = reader.string();
                    break;
                case 3:
                    message.moniker = reader.string();
                    break;
                case 4:
                    message.blockHash = reader.string();
                    break;
                case 5:
                    message.parentHash = reader.string();
                    break;
                case 6:
                    message.numPreCommits = longToString(reader.sint64());
                    break;
                case 7:
                    message.numTxs = longToString(reader.sint64());
                    break;
                case 8:
                    message.txs.push(exports.TxDataRPC.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.timestamp = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            height: isSet(object.height) ? String(object.height) : "0",
            proposer: isSet(object.proposer) ? String(object.proposer) : "",
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
            parentHash: isSet(object.parentHash) ? String(object.parentHash) : "",
            numPreCommits: isSet(object.numPreCommits) ? String(object.numPreCommits) : "0",
            numTxs: isSet(object.numTxs) ? String(object.numTxs) : "0",
            txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map((e) => exports.TxDataRPC.fromJSON(e)) : [],
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.proposer !== undefined && (obj.proposer = message.proposer);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.blockHash !== undefined && (obj.blockHash = message.blockHash);
        message.parentHash !== undefined && (obj.parentHash = message.parentHash);
        message.numPreCommits !== undefined && (obj.numPreCommits = message.numPreCommits);
        message.numTxs !== undefined && (obj.numTxs = message.numTxs);
        if (message.txs) {
            obj.txs = message.txs.map((e) => e ? exports.TxDataRPC.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return exports.StreamBlocksResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseStreamBlocksResponse();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.proposer = (_b = object.proposer) !== null && _b !== void 0 ? _b : "";
        message.moniker = (_c = object.moniker) !== null && _c !== void 0 ? _c : "";
        message.blockHash = (_d = object.blockHash) !== null && _d !== void 0 ? _d : "";
        message.parentHash = (_e = object.parentHash) !== null && _e !== void 0 ? _e : "";
        message.numPreCommits = (_f = object.numPreCommits) !== null && _f !== void 0 ? _f : "0";
        message.numTxs = (_g = object.numTxs) !== null && _g !== void 0 ? _g : "0";
        message.txs = ((_h = object.txs) === null || _h === void 0 ? void 0 : _h.map((e) => exports.TxDataRPC.fromPartial(e))) || [];
        message.timestamp = (_j = object.timestamp) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
class InjectiveExplorerRPCClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.GetAccountTxs = this.GetAccountTxs.bind(this);
        this.GetContractTxs = this.GetContractTxs.bind(this);
        this.GetBlocks = this.GetBlocks.bind(this);
        this.GetBlock = this.GetBlock.bind(this);
        this.GetValidators = this.GetValidators.bind(this);
        this.GetValidator = this.GetValidator.bind(this);
        this.GetValidatorUptime = this.GetValidatorUptime.bind(this);
        this.GetTxs = this.GetTxs.bind(this);
        this.GetTxByTxHash = this.GetTxByTxHash.bind(this);
        this.GetPeggyDepositTxs = this.GetPeggyDepositTxs.bind(this);
        this.GetPeggyWithdrawalTxs = this.GetPeggyWithdrawalTxs.bind(this);
        this.GetIBCTransferTxs = this.GetIBCTransferTxs.bind(this);
        this.GetWasmCodes = this.GetWasmCodes.bind(this);
        this.GetWasmCodeByID = this.GetWasmCodeByID.bind(this);
        this.GetWasmContracts = this.GetWasmContracts.bind(this);
        this.GetWasmContractByAddress = this.GetWasmContractByAddress.bind(this);
        this.GetCw20Balance = this.GetCw20Balance.bind(this);
        this.Relayers = this.Relayers.bind(this);
        this.GetBankTransfers = this.GetBankTransfers.bind(this);
        this.StreamTxs = this.StreamTxs.bind(this);
        this.StreamBlocks = this.StreamBlocks.bind(this);
    }
    GetAccountTxs(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetAccountTxsDesc, exports.GetAccountTxsRequest.fromPartial(request), metadata);
    }
    GetContractTxs(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetContractTxsDesc, exports.GetContractTxsRequest.fromPartial(request), metadata);
    }
    GetBlocks(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetBlocksDesc, exports.GetBlocksRequest.fromPartial(request), metadata);
    }
    GetBlock(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetBlockDesc, exports.GetBlockRequest.fromPartial(request), metadata);
    }
    GetValidators(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetValidatorsDesc, exports.GetValidatorsRequest.fromPartial(request), metadata);
    }
    GetValidator(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetValidatorDesc, exports.GetValidatorRequest.fromPartial(request), metadata);
    }
    GetValidatorUptime(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetValidatorUptimeDesc, exports.GetValidatorUptimeRequest.fromPartial(request), metadata);
    }
    GetTxs(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetTxsDesc, exports.GetTxsRequest.fromPartial(request), metadata);
    }
    GetTxByTxHash(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetTxByTxHashDesc, exports.GetTxByTxHashRequest.fromPartial(request), metadata);
    }
    GetPeggyDepositTxs(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetPeggyDepositTxsDesc, exports.GetPeggyDepositTxsRequest.fromPartial(request), metadata);
    }
    GetPeggyWithdrawalTxs(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetPeggyWithdrawalTxsDesc, exports.GetPeggyWithdrawalTxsRequest.fromPartial(request), metadata);
    }
    GetIBCTransferTxs(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetIBCTransferTxsDesc, exports.GetIBCTransferTxsRequest.fromPartial(request), metadata);
    }
    GetWasmCodes(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetWasmCodesDesc, exports.GetWasmCodesRequest.fromPartial(request), metadata);
    }
    GetWasmCodeByID(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetWasmCodeByIDDesc, exports.GetWasmCodeByIDRequest.fromPartial(request), metadata);
    }
    GetWasmContracts(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetWasmContractsDesc, exports.GetWasmContractsRequest.fromPartial(request), metadata);
    }
    GetWasmContractByAddress(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetWasmContractByAddressDesc, exports.GetWasmContractByAddressRequest.fromPartial(request), metadata);
    }
    GetCw20Balance(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetCw20BalanceDesc, exports.GetCw20BalanceRequest.fromPartial(request), metadata);
    }
    Relayers(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCRelayersDesc, exports.RelayersRequest.fromPartial(request), metadata);
    }
    GetBankTransfers(request, metadata) {
        return this.rpc.unary(exports.InjectiveExplorerRPCGetBankTransfersDesc, exports.GetBankTransfersRequest.fromPartial(request), metadata);
    }
    StreamTxs(request, metadata) {
        return this.rpc.invoke(exports.InjectiveExplorerRPCStreamTxsDesc, exports.StreamTxsRequest.fromPartial(request), metadata);
    }
    StreamBlocks(request, metadata) {
        return this.rpc.invoke(exports.InjectiveExplorerRPCStreamBlocksDesc, exports.StreamBlocksRequest.fromPartial(request), metadata);
    }
}
exports.InjectiveExplorerRPCClientImpl = InjectiveExplorerRPCClientImpl;
exports.InjectiveExplorerRPCDesc = { serviceName: "injective_explorer_rpc.InjectiveExplorerRPC" };
exports.InjectiveExplorerRPCGetAccountTxsDesc = {
    methodName: "GetAccountTxs",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetAccountTxsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetAccountTxsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetContractTxsDesc = {
    methodName: "GetContractTxs",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetContractTxsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetContractTxsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetBlocksDesc = {
    methodName: "GetBlocks",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetBlocksRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetBlocksResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetBlockDesc = {
    methodName: "GetBlock",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetBlockRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetBlockResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetValidatorsDesc = {
    methodName: "GetValidators",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetValidatorsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetValidatorsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetValidatorDesc = {
    methodName: "GetValidator",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetValidatorRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetValidatorResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetValidatorUptimeDesc = {
    methodName: "GetValidatorUptime",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetValidatorUptimeRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetValidatorUptimeResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetTxsDesc = {
    methodName: "GetTxs",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetTxsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetTxsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetTxByTxHashDesc = {
    methodName: "GetTxByTxHash",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetTxByTxHashRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetTxByTxHashResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetPeggyDepositTxsDesc = {
    methodName: "GetPeggyDepositTxs",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetPeggyDepositTxsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetPeggyDepositTxsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetPeggyWithdrawalTxsDesc = {
    methodName: "GetPeggyWithdrawalTxs",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetPeggyWithdrawalTxsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetPeggyWithdrawalTxsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetIBCTransferTxsDesc = {
    methodName: "GetIBCTransferTxs",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetIBCTransferTxsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetIBCTransferTxsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetWasmCodesDesc = {
    methodName: "GetWasmCodes",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetWasmCodesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetWasmCodesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetWasmCodeByIDDesc = {
    methodName: "GetWasmCodeByID",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetWasmCodeByIDRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetWasmCodeByIDResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetWasmContractsDesc = {
    methodName: "GetWasmContracts",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetWasmContractsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetWasmContractsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetWasmContractByAddressDesc = {
    methodName: "GetWasmContractByAddress",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetWasmContractByAddressRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetWasmContractByAddressResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetCw20BalanceDesc = {
    methodName: "GetCw20Balance",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetCw20BalanceRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetCw20BalanceResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCRelayersDesc = {
    methodName: "Relayers",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.RelayersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.RelayersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCGetBankTransfersDesc = {
    methodName: "GetBankTransfers",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetBankTransfersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetBankTransfersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCStreamTxsDesc = {
    methodName: "StreamTxs",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return exports.StreamTxsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.StreamTxsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveExplorerRPCStreamBlocksDesc = {
    methodName: "StreamBlocks",
    service: exports.InjectiveExplorerRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return exports.StreamBlocksRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.StreamBlocksResponse.decode(data);
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
    invoke(methodDesc, _request, metadata) {
        var _a;
        const upStreamCodes = this.options.upStreamRetryCodes || [];
        const DEFAULT_TIMEOUT_TIME = 3000;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new browser_headers_1.BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new rxjs_1.Observable((observer) => {
            const upStream = (() => {
                const client = grpc_web_1.grpc.invoke(methodDesc, {
                    host: this.host,
                    request,
                    transport: this.options.streamingTransport || this.options.transport,
                    metadata: maybeCombinedMetadata,
                    debug: this.options.debug,
                    onMessage: (next) => observer.next(next),
                    onEnd: (code, message, trailers) => {
                        if (code === 0) {
                            observer.complete();
                        }
                        else if (upStreamCodes.includes(code)) {
                            setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
                        }
                        else {
                            const err = new Error(message);
                            err.code = code;
                            err.metadata = trailers;
                            observer.error(err);
                        }
                    },
                });
                observer.add(() => client.close());
            });
            upStream();
        }).pipe((0, operators_1.share)());
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
function isObject(value) {
    return typeof value === "object" && value !== null;
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
