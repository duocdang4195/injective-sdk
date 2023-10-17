"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const attestation_1 = require("./attestation");
const batch_1 = require("./batch");
const msgs_1 = require("./msgs");
const params_1 = require("./params");
const types_1 = require("./types");
function createBaseGenesisState() {
    return {
        params: undefined,
        lastObservedNonce: "0",
        valsets: [],
        valsetConfirms: [],
        batches: [],
        batchConfirms: [],
        attestations: [],
        orchestratorAddresses: [],
        erc20ToDenoms: [],
        unbatchedTransfers: [],
        lastObservedEthereumHeight: "0",
        lastOutgoingBatchId: "0",
        lastOutgoingPoolId: "0",
        lastObservedValset: undefined,
        ethereumBlacklist: [],
    };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastObservedNonce !== "0") {
            writer.uint32(16).uint64(message.lastObservedNonce);
        }
        for (const v of message.valsets) {
            types_1.Valset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.valsetConfirms) {
            msgs_1.MsgValsetConfirm.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.batches) {
            batch_1.OutgoingTxBatch.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.batchConfirms) {
            msgs_1.MsgConfirmBatch.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.attestations) {
            attestation_1.Attestation.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.orchestratorAddresses) {
            msgs_1.MsgSetOrchestratorAddresses.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.erc20ToDenoms) {
            types_1.ERC20ToDenom.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.unbatchedTransfers) {
            batch_1.OutgoingTransferTx.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.lastObservedEthereumHeight !== "0") {
            writer.uint32(88).uint64(message.lastObservedEthereumHeight);
        }
        if (message.lastOutgoingBatchId !== "0") {
            writer.uint32(96).uint64(message.lastOutgoingBatchId);
        }
        if (message.lastOutgoingPoolId !== "0") {
            writer.uint32(104).uint64(message.lastOutgoingPoolId);
        }
        if (message.lastObservedValset !== undefined) {
            types_1.Valset.encode(message.lastObservedValset, writer.uint32(114).fork()).ldelim();
        }
        for (const v of message.ethereumBlacklist) {
            writer.uint32(122).string(v);
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
                    if (tag !== 10) {
                        break;
                    }
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.lastObservedNonce = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.valsets.push(types_1.Valset.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.valsetConfirms.push(msgs_1.MsgValsetConfirm.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.batches.push(batch_1.OutgoingTxBatch.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.batchConfirms.push(msgs_1.MsgConfirmBatch.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.attestations.push(attestation_1.Attestation.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.orchestratorAddresses.push(msgs_1.MsgSetOrchestratorAddresses.decode(reader, reader.uint32()));
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.erc20ToDenoms.push(types_1.ERC20ToDenom.decode(reader, reader.uint32()));
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.unbatchedTransfers.push(batch_1.OutgoingTransferTx.decode(reader, reader.uint32()));
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.lastObservedEthereumHeight = longToString(reader.uint64());
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.lastOutgoingBatchId = longToString(reader.uint64());
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }
                    message.lastOutgoingPoolId = longToString(reader.uint64());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.lastObservedValset = types_1.Valset.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.ethereumBlacklist.push(reader.string());
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            lastObservedNonce: isSet(object.lastObservedNonce) ? String(object.lastObservedNonce) : "0",
            valsets: Array.isArray(object === null || object === void 0 ? void 0 : object.valsets) ? object.valsets.map((e) => types_1.Valset.fromJSON(e)) : [],
            valsetConfirms: Array.isArray(object === null || object === void 0 ? void 0 : object.valsetConfirms)
                ? object.valsetConfirms.map((e) => msgs_1.MsgValsetConfirm.fromJSON(e))
                : [],
            batches: Array.isArray(object === null || object === void 0 ? void 0 : object.batches) ? object.batches.map((e) => batch_1.OutgoingTxBatch.fromJSON(e)) : [],
            batchConfirms: Array.isArray(object === null || object === void 0 ? void 0 : object.batchConfirms)
                ? object.batchConfirms.map((e) => msgs_1.MsgConfirmBatch.fromJSON(e))
                : [],
            attestations: Array.isArray(object === null || object === void 0 ? void 0 : object.attestations)
                ? object.attestations.map((e) => attestation_1.Attestation.fromJSON(e))
                : [],
            orchestratorAddresses: Array.isArray(object === null || object === void 0 ? void 0 : object.orchestratorAddresses)
                ? object.orchestratorAddresses.map((e) => msgs_1.MsgSetOrchestratorAddresses.fromJSON(e))
                : [],
            erc20ToDenoms: Array.isArray(object === null || object === void 0 ? void 0 : object.erc20ToDenoms)
                ? object.erc20ToDenoms.map((e) => types_1.ERC20ToDenom.fromJSON(e))
                : [],
            unbatchedTransfers: Array.isArray(object === null || object === void 0 ? void 0 : object.unbatchedTransfers)
                ? object.unbatchedTransfers.map((e) => batch_1.OutgoingTransferTx.fromJSON(e))
                : [],
            lastObservedEthereumHeight: isSet(object.lastObservedEthereumHeight)
                ? String(object.lastObservedEthereumHeight)
                : "0",
            lastOutgoingBatchId: isSet(object.lastOutgoingBatchId) ? String(object.lastOutgoingBatchId) : "0",
            lastOutgoingPoolId: isSet(object.lastOutgoingPoolId) ? String(object.lastOutgoingPoolId) : "0",
            lastObservedValset: isSet(object.lastObservedValset) ? types_1.Valset.fromJSON(object.lastObservedValset) : undefined,
            ethereumBlacklist: Array.isArray(object === null || object === void 0 ? void 0 : object.ethereumBlacklist)
                ? object.ethereumBlacklist.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        message.lastObservedNonce !== undefined && (obj.lastObservedNonce = message.lastObservedNonce);
        if (message.valsets) {
            obj.valsets = message.valsets.map((e) => e ? types_1.Valset.toJSON(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        if (message.valsetConfirms) {
            obj.valsetConfirms = message.valsetConfirms.map((e) => e ? msgs_1.MsgValsetConfirm.toJSON(e) : undefined);
        }
        else {
            obj.valsetConfirms = [];
        }
        if (message.batches) {
            obj.batches = message.batches.map((e) => e ? batch_1.OutgoingTxBatch.toJSON(e) : undefined);
        }
        else {
            obj.batches = [];
        }
        if (message.batchConfirms) {
            obj.batchConfirms = message.batchConfirms.map((e) => e ? msgs_1.MsgConfirmBatch.toJSON(e) : undefined);
        }
        else {
            obj.batchConfirms = [];
        }
        if (message.attestations) {
            obj.attestations = message.attestations.map((e) => e ? attestation_1.Attestation.toJSON(e) : undefined);
        }
        else {
            obj.attestations = [];
        }
        if (message.orchestratorAddresses) {
            obj.orchestratorAddresses = message.orchestratorAddresses.map((e) => e ? msgs_1.MsgSetOrchestratorAddresses.toJSON(e) : undefined);
        }
        else {
            obj.orchestratorAddresses = [];
        }
        if (message.erc20ToDenoms) {
            obj.erc20ToDenoms = message.erc20ToDenoms.map((e) => e ? types_1.ERC20ToDenom.toJSON(e) : undefined);
        }
        else {
            obj.erc20ToDenoms = [];
        }
        if (message.unbatchedTransfers) {
            obj.unbatchedTransfers = message.unbatchedTransfers.map((e) => e ? batch_1.OutgoingTransferTx.toJSON(e) : undefined);
        }
        else {
            obj.unbatchedTransfers = [];
        }
        message.lastObservedEthereumHeight !== undefined &&
            (obj.lastObservedEthereumHeight = message.lastObservedEthereumHeight);
        message.lastOutgoingBatchId !== undefined && (obj.lastOutgoingBatchId = message.lastOutgoingBatchId);
        message.lastOutgoingPoolId !== undefined && (obj.lastOutgoingPoolId = message.lastOutgoingPoolId);
        message.lastObservedValset !== undefined &&
            (obj.lastObservedValset = message.lastObservedValset ? types_1.Valset.toJSON(message.lastObservedValset) : undefined);
        if (message.ethereumBlacklist) {
            obj.ethereumBlacklist = message.ethereumBlacklist.map((e) => e);
        }
        else {
            obj.ethereumBlacklist = [];
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.Params.fromPartial(object.params)
            : undefined;
        message.lastObservedNonce = (_a = object.lastObservedNonce) !== null && _a !== void 0 ? _a : "0";
        message.valsets = ((_b = object.valsets) === null || _b === void 0 ? void 0 : _b.map((e) => types_1.Valset.fromPartial(e))) || [];
        message.valsetConfirms = ((_c = object.valsetConfirms) === null || _c === void 0 ? void 0 : _c.map((e) => msgs_1.MsgValsetConfirm.fromPartial(e))) || [];
        message.batches = ((_d = object.batches) === null || _d === void 0 ? void 0 : _d.map((e) => batch_1.OutgoingTxBatch.fromPartial(e))) || [];
        message.batchConfirms = ((_e = object.batchConfirms) === null || _e === void 0 ? void 0 : _e.map((e) => msgs_1.MsgConfirmBatch.fromPartial(e))) || [];
        message.attestations = ((_f = object.attestations) === null || _f === void 0 ? void 0 : _f.map((e) => attestation_1.Attestation.fromPartial(e))) || [];
        message.orchestratorAddresses =
            ((_g = object.orchestratorAddresses) === null || _g === void 0 ? void 0 : _g.map((e) => msgs_1.MsgSetOrchestratorAddresses.fromPartial(e))) || [];
        message.erc20ToDenoms = ((_h = object.erc20ToDenoms) === null || _h === void 0 ? void 0 : _h.map((e) => types_1.ERC20ToDenom.fromPartial(e))) || [];
        message.unbatchedTransfers = ((_j = object.unbatchedTransfers) === null || _j === void 0 ? void 0 : _j.map((e) => batch_1.OutgoingTransferTx.fromPartial(e))) || [];
        message.lastObservedEthereumHeight = (_k = object.lastObservedEthereumHeight) !== null && _k !== void 0 ? _k : "0";
        message.lastOutgoingBatchId = (_l = object.lastOutgoingBatchId) !== null && _l !== void 0 ? _l : "0";
        message.lastOutgoingPoolId = (_m = object.lastOutgoingPoolId) !== null && _m !== void 0 ? _m : "0";
        message.lastObservedValset = (object.lastObservedValset !== undefined && object.lastObservedValset !== null)
            ? types_1.Valset.fromPartial(object.lastObservedValset)
            : undefined;
        message.ethereumBlacklist = ((_o = object.ethereumBlacklist) === null || _o === void 0 ? void 0 : _o.map((e) => e)) || [];
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
