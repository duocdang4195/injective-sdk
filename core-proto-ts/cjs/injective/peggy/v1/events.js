"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventValidatorSlash = exports.EventSubmitBadSignatureEvidence = exports.EventCancelSendToEth = exports.EventValsetUpdateClaim = exports.EventERC20DeployedClaim = exports.EventWithdrawClaim = exports.EventDepositClaim = exports.EventAttestationVote = exports.EventConfirmBatch = exports.EventSendToEth = exports.EventValsetConfirm = exports.EventSetOrchestratorAddresses = exports.EventValsetUpdateRequest = exports.EventOutgoingBatchCanceled = exports.EventOutgoingBatch = exports.EventBridgeWithdrawCanceled = exports.EventAttestationObserved = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const attestation_1 = require("./attestation");
const types_1 = require("./types");
function createBaseEventAttestationObserved() {
    return { attestationType: 0, bridgeContract: "", bridgeChainId: "0", attestationId: new Uint8Array(), nonce: "0" };
}
exports.EventAttestationObserved = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.attestationType !== 0) {
            writer.uint32(8).int32(message.attestationType);
        }
        if (message.bridgeContract !== "") {
            writer.uint32(18).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== "0") {
            writer.uint32(24).uint64(message.bridgeChainId);
        }
        if (message.attestationId.length !== 0) {
            writer.uint32(34).bytes(message.attestationId);
        }
        if (message.nonce !== "0") {
            writer.uint32(40).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAttestationObserved();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.attestationType = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.bridgeContract = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.bridgeChainId = longToString(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.attestationId = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 40) {
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
        return {
            attestationType: isSet(object.attestationType) ? (0, attestation_1.claimTypeFromJSON)(object.attestationType) : 0,
            bridgeContract: isSet(object.bridgeContract) ? String(object.bridgeContract) : "",
            bridgeChainId: isSet(object.bridgeChainId) ? String(object.bridgeChainId) : "0",
            attestationId: isSet(object.attestationId) ? bytesFromBase64(object.attestationId) : new Uint8Array(),
            nonce: isSet(object.nonce) ? String(object.nonce) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.attestationType !== undefined && (obj.attestationType = (0, attestation_1.claimTypeToJSON)(message.attestationType));
        message.bridgeContract !== undefined && (obj.bridgeContract = message.bridgeContract);
        message.bridgeChainId !== undefined && (obj.bridgeChainId = message.bridgeChainId);
        message.attestationId !== undefined &&
            (obj.attestationId = base64FromBytes(message.attestationId !== undefined ? message.attestationId : new Uint8Array()));
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    create(base) {
        return exports.EventAttestationObserved.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseEventAttestationObserved();
        message.attestationType = (_a = object.attestationType) !== null && _a !== void 0 ? _a : 0;
        message.bridgeContract = (_b = object.bridgeContract) !== null && _b !== void 0 ? _b : "";
        message.bridgeChainId = (_c = object.bridgeChainId) !== null && _c !== void 0 ? _c : "0";
        message.attestationId = (_d = object.attestationId) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.nonce = (_e = object.nonce) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
function createBaseEventBridgeWithdrawCanceled() {
    return { bridgeContract: "", bridgeChainId: "0" };
}
exports.EventBridgeWithdrawCanceled = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bridgeContract !== "") {
            writer.uint32(10).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== "0") {
            writer.uint32(16).uint64(message.bridgeChainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBridgeWithdrawCanceled();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.bridgeContract = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.bridgeChainId = longToString(reader.uint64());
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
            bridgeContract: isSet(object.bridgeContract) ? String(object.bridgeContract) : "",
            bridgeChainId: isSet(object.bridgeChainId) ? String(object.bridgeChainId) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.bridgeContract !== undefined && (obj.bridgeContract = message.bridgeContract);
        message.bridgeChainId !== undefined && (obj.bridgeChainId = message.bridgeChainId);
        return obj;
    },
    create(base) {
        return exports.EventBridgeWithdrawCanceled.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventBridgeWithdrawCanceled();
        message.bridgeContract = (_a = object.bridgeContract) !== null && _a !== void 0 ? _a : "";
        message.bridgeChainId = (_b = object.bridgeChainId) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseEventOutgoingBatch() {
    return { denom: "", orchestratorAddress: "", batchNonce: "0", batchTimeout: "0", batchTxIds: [] };
}
exports.EventOutgoingBatch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        if (message.batchNonce !== "0") {
            writer.uint32(24).uint64(message.batchNonce);
        }
        if (message.batchTimeout !== "0") {
            writer.uint32(32).uint64(message.batchTimeout);
        }
        writer.uint32(42).fork();
        for (const v of message.batchTxIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOutgoingBatch();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.orchestratorAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.batchNonce = longToString(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.batchTimeout = longToString(reader.uint64());
                    continue;
                case 5:
                    if (tag === 40) {
                        message.batchTxIds.push(longToString(reader.uint64()));
                        continue;
                    }
                    if (tag === 42) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.batchTxIds.push(longToString(reader.uint64()));
                        }
                        continue;
                    }
                    break;
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
            orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : "",
            batchNonce: isSet(object.batchNonce) ? String(object.batchNonce) : "0",
            batchTimeout: isSet(object.batchTimeout) ? String(object.batchTimeout) : "0",
            batchTxIds: Array.isArray(object === null || object === void 0 ? void 0 : object.batchTxIds) ? object.batchTxIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
        message.batchNonce !== undefined && (obj.batchNonce = message.batchNonce);
        message.batchTimeout !== undefined && (obj.batchTimeout = message.batchTimeout);
        if (message.batchTxIds) {
            obj.batchTxIds = message.batchTxIds.map((e) => e);
        }
        else {
            obj.batchTxIds = [];
        }
        return obj;
    },
    create(base) {
        return exports.EventOutgoingBatch.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseEventOutgoingBatch();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.orchestratorAddress = (_b = object.orchestratorAddress) !== null && _b !== void 0 ? _b : "";
        message.batchNonce = (_c = object.batchNonce) !== null && _c !== void 0 ? _c : "0";
        message.batchTimeout = (_d = object.batchTimeout) !== null && _d !== void 0 ? _d : "0";
        message.batchTxIds = ((_e = object.batchTxIds) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
function createBaseEventOutgoingBatchCanceled() {
    return { bridgeContract: "", bridgeChainId: "0", batchId: "0", nonce: "0" };
}
exports.EventOutgoingBatchCanceled = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bridgeContract !== "") {
            writer.uint32(10).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== "0") {
            writer.uint32(16).uint64(message.bridgeChainId);
        }
        if (message.batchId !== "0") {
            writer.uint32(24).uint64(message.batchId);
        }
        if (message.nonce !== "0") {
            writer.uint32(32).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOutgoingBatchCanceled();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.bridgeContract = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.bridgeChainId = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.batchId = longToString(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
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
        return {
            bridgeContract: isSet(object.bridgeContract) ? String(object.bridgeContract) : "",
            bridgeChainId: isSet(object.bridgeChainId) ? String(object.bridgeChainId) : "0",
            batchId: isSet(object.batchId) ? String(object.batchId) : "0",
            nonce: isSet(object.nonce) ? String(object.nonce) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.bridgeContract !== undefined && (obj.bridgeContract = message.bridgeContract);
        message.bridgeChainId !== undefined && (obj.bridgeChainId = message.bridgeChainId);
        message.batchId !== undefined && (obj.batchId = message.batchId);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    create(base) {
        return exports.EventOutgoingBatchCanceled.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseEventOutgoingBatchCanceled();
        message.bridgeContract = (_a = object.bridgeContract) !== null && _a !== void 0 ? _a : "";
        message.bridgeChainId = (_b = object.bridgeChainId) !== null && _b !== void 0 ? _b : "0";
        message.batchId = (_c = object.batchId) !== null && _c !== void 0 ? _c : "0";
        message.nonce = (_d = object.nonce) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseEventValsetUpdateRequest() {
    return { valsetNonce: "0", valsetHeight: "0", valsetMembers: [], rewardAmount: "", rewardToken: "" };
}
exports.EventValsetUpdateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.valsetNonce !== "0") {
            writer.uint32(8).uint64(message.valsetNonce);
        }
        if (message.valsetHeight !== "0") {
            writer.uint32(16).uint64(message.valsetHeight);
        }
        for (const v of message.valsetMembers) {
            types_1.BridgeValidator.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.rewardAmount !== "") {
            writer.uint32(34).string(message.rewardAmount);
        }
        if (message.rewardToken !== "") {
            writer.uint32(42).string(message.rewardToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventValsetUpdateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.valsetNonce = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.valsetHeight = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.valsetMembers.push(types_1.BridgeValidator.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.rewardAmount = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.rewardToken = reader.string();
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
            valsetNonce: isSet(object.valsetNonce) ? String(object.valsetNonce) : "0",
            valsetHeight: isSet(object.valsetHeight) ? String(object.valsetHeight) : "0",
            valsetMembers: Array.isArray(object === null || object === void 0 ? void 0 : object.valsetMembers)
                ? object.valsetMembers.map((e) => types_1.BridgeValidator.fromJSON(e))
                : [],
            rewardAmount: isSet(object.rewardAmount) ? String(object.rewardAmount) : "",
            rewardToken: isSet(object.rewardToken) ? String(object.rewardToken) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.valsetNonce !== undefined && (obj.valsetNonce = message.valsetNonce);
        message.valsetHeight !== undefined && (obj.valsetHeight = message.valsetHeight);
        if (message.valsetMembers) {
            obj.valsetMembers = message.valsetMembers.map((e) => e ? types_1.BridgeValidator.toJSON(e) : undefined);
        }
        else {
            obj.valsetMembers = [];
        }
        message.rewardAmount !== undefined && (obj.rewardAmount = message.rewardAmount);
        message.rewardToken !== undefined && (obj.rewardToken = message.rewardToken);
        return obj;
    },
    create(base) {
        return exports.EventValsetUpdateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseEventValsetUpdateRequest();
        message.valsetNonce = (_a = object.valsetNonce) !== null && _a !== void 0 ? _a : "0";
        message.valsetHeight = (_b = object.valsetHeight) !== null && _b !== void 0 ? _b : "0";
        message.valsetMembers = ((_c = object.valsetMembers) === null || _c === void 0 ? void 0 : _c.map((e) => types_1.BridgeValidator.fromPartial(e))) || [];
        message.rewardAmount = (_d = object.rewardAmount) !== null && _d !== void 0 ? _d : "";
        message.rewardToken = (_e = object.rewardToken) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseEventSetOrchestratorAddresses() {
    return { validatorAddress: "", orchestratorAddress: "", operatorEthAddress: "" };
}
exports.EventSetOrchestratorAddresses = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        if (message.operatorEthAddress !== "") {
            writer.uint32(26).string(message.operatorEthAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSetOrchestratorAddresses();
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
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.operatorEthAddress = reader.string();
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
            operatorEthAddress: isSet(object.operatorEthAddress) ? String(object.operatorEthAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
        message.operatorEthAddress !== undefined && (obj.operatorEthAddress = message.operatorEthAddress);
        return obj;
    },
    create(base) {
        return exports.EventSetOrchestratorAddresses.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEventSetOrchestratorAddresses();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.orchestratorAddress = (_b = object.orchestratorAddress) !== null && _b !== void 0 ? _b : "";
        message.operatorEthAddress = (_c = object.operatorEthAddress) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseEventValsetConfirm() {
    return { valsetNonce: "0", orchestratorAddress: "" };
}
exports.EventValsetConfirm = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.valsetNonce !== "0") {
            writer.uint32(8).uint64(message.valsetNonce);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventValsetConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.valsetNonce = longToString(reader.uint64());
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
            valsetNonce: isSet(object.valsetNonce) ? String(object.valsetNonce) : "0",
            orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.valsetNonce !== undefined && (obj.valsetNonce = message.valsetNonce);
        message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    create(base) {
        return exports.EventValsetConfirm.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventValsetConfirm();
        message.valsetNonce = (_a = object.valsetNonce) !== null && _a !== void 0 ? _a : "0";
        message.orchestratorAddress = (_b = object.orchestratorAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventSendToEth() {
    return { outgoingTxId: "0", sender: "", receiver: "", amount: "", bridgeFee: "" };
}
exports.EventSendToEth = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.outgoingTxId !== "0") {
            writer.uint32(8).uint64(message.outgoingTxId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(26).string(message.receiver);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.bridgeFee !== "") {
            writer.uint32(42).string(message.bridgeFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSendToEth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.outgoingTxId = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.receiver = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.amount = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.bridgeFee = reader.string();
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
            outgoingTxId: isSet(object.outgoingTxId) ? String(object.outgoingTxId) : "0",
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            bridgeFee: isSet(object.bridgeFee) ? String(object.bridgeFee) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.outgoingTxId !== undefined && (obj.outgoingTxId = message.outgoingTxId);
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.amount !== undefined && (obj.amount = message.amount);
        message.bridgeFee !== undefined && (obj.bridgeFee = message.bridgeFee);
        return obj;
    },
    create(base) {
        return exports.EventSendToEth.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseEventSendToEth();
        message.outgoingTxId = (_a = object.outgoingTxId) !== null && _a !== void 0 ? _a : "0";
        message.sender = (_b = object.sender) !== null && _b !== void 0 ? _b : "";
        message.receiver = (_c = object.receiver) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "";
        message.bridgeFee = (_e = object.bridgeFee) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseEventConfirmBatch() {
    return { batchNonce: "0", orchestratorAddress: "" };
}
exports.EventConfirmBatch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.batchNonce !== "0") {
            writer.uint32(8).uint64(message.batchNonce);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventConfirmBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.batchNonce = longToString(reader.uint64());
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
            batchNonce: isSet(object.batchNonce) ? String(object.batchNonce) : "0",
            orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.batchNonce !== undefined && (obj.batchNonce = message.batchNonce);
        message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    create(base) {
        return exports.EventConfirmBatch.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventConfirmBatch();
        message.batchNonce = (_a = object.batchNonce) !== null && _a !== void 0 ? _a : "0";
        message.orchestratorAddress = (_b = object.orchestratorAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventAttestationVote() {
    return { eventNonce: "0", attestationId: new Uint8Array(), voter: "" };
}
exports.EventAttestationVote = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.eventNonce !== "0") {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.attestationId.length !== 0) {
            writer.uint32(18).bytes(message.attestationId);
        }
        if (message.voter !== "") {
            writer.uint32(26).string(message.voter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAttestationVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.eventNonce = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.attestationId = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.voter = reader.string();
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
            eventNonce: isSet(object.eventNonce) ? String(object.eventNonce) : "0",
            attestationId: isSet(object.attestationId) ? bytesFromBase64(object.attestationId) : new Uint8Array(),
            voter: isSet(object.voter) ? String(object.voter) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        message.attestationId !== undefined &&
            (obj.attestationId = base64FromBytes(message.attestationId !== undefined ? message.attestationId : new Uint8Array()));
        message.voter !== undefined && (obj.voter = message.voter);
        return obj;
    },
    create(base) {
        return exports.EventAttestationVote.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEventAttestationVote();
        message.eventNonce = (_a = object.eventNonce) !== null && _a !== void 0 ? _a : "0";
        message.attestationId = (_b = object.attestationId) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.voter = (_c = object.voter) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseEventDepositClaim() {
    return {
        eventNonce: "0",
        eventHeight: "0",
        attestationId: new Uint8Array(),
        ethereumSender: "",
        cosmosReceiver: "",
        tokenContract: "",
        amount: "",
        orchestratorAddress: "",
        data: "",
    };
}
exports.EventDepositClaim = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.eventNonce !== "0") {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.eventHeight !== "0") {
            writer.uint32(16).uint64(message.eventHeight);
        }
        if (message.attestationId.length !== 0) {
            writer.uint32(26).bytes(message.attestationId);
        }
        if (message.ethereumSender !== "") {
            writer.uint32(34).string(message.ethereumSender);
        }
        if (message.cosmosReceiver !== "") {
            writer.uint32(42).string(message.cosmosReceiver);
        }
        if (message.tokenContract !== "") {
            writer.uint32(50).string(message.tokenContract);
        }
        if (message.amount !== "") {
            writer.uint32(58).string(message.amount);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(66).string(message.orchestratorAddress);
        }
        if (message.data !== "") {
            writer.uint32(74).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventDepositClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.eventNonce = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.eventHeight = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.attestationId = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.ethereumSender = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.cosmosReceiver = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.tokenContract = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.amount = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.orchestratorAddress = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.data = reader.string();
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
            eventNonce: isSet(object.eventNonce) ? String(object.eventNonce) : "0",
            eventHeight: isSet(object.eventHeight) ? String(object.eventHeight) : "0",
            attestationId: isSet(object.attestationId) ? bytesFromBase64(object.attestationId) : new Uint8Array(),
            ethereumSender: isSet(object.ethereumSender) ? String(object.ethereumSender) : "",
            cosmosReceiver: isSet(object.cosmosReceiver) ? String(object.cosmosReceiver) : "",
            tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : "",
            data: isSet(object.data) ? String(object.data) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        message.eventHeight !== undefined && (obj.eventHeight = message.eventHeight);
        message.attestationId !== undefined &&
            (obj.attestationId = base64FromBytes(message.attestationId !== undefined ? message.attestationId : new Uint8Array()));
        message.ethereumSender !== undefined && (obj.ethereumSender = message.ethereumSender);
        message.cosmosReceiver !== undefined && (obj.cosmosReceiver = message.cosmosReceiver);
        message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
        message.amount !== undefined && (obj.amount = message.amount);
        message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    create(base) {
        return exports.EventDepositClaim.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseEventDepositClaim();
        message.eventNonce = (_a = object.eventNonce) !== null && _a !== void 0 ? _a : "0";
        message.eventHeight = (_b = object.eventHeight) !== null && _b !== void 0 ? _b : "0";
        message.attestationId = (_c = object.attestationId) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.ethereumSender = (_d = object.ethereumSender) !== null && _d !== void 0 ? _d : "";
        message.cosmosReceiver = (_e = object.cosmosReceiver) !== null && _e !== void 0 ? _e : "";
        message.tokenContract = (_f = object.tokenContract) !== null && _f !== void 0 ? _f : "";
        message.amount = (_g = object.amount) !== null && _g !== void 0 ? _g : "";
        message.orchestratorAddress = (_h = object.orchestratorAddress) !== null && _h !== void 0 ? _h : "";
        message.data = (_j = object.data) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
function createBaseEventWithdrawClaim() {
    return {
        eventNonce: "0",
        eventHeight: "0",
        attestationId: new Uint8Array(),
        batchNonce: "0",
        tokenContract: "",
        orchestratorAddress: "",
    };
}
exports.EventWithdrawClaim = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.eventNonce !== "0") {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.eventHeight !== "0") {
            writer.uint32(16).uint64(message.eventHeight);
        }
        if (message.attestationId.length !== 0) {
            writer.uint32(26).bytes(message.attestationId);
        }
        if (message.batchNonce !== "0") {
            writer.uint32(32).uint64(message.batchNonce);
        }
        if (message.tokenContract !== "") {
            writer.uint32(42).string(message.tokenContract);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(50).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdrawClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.eventNonce = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.eventHeight = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.attestationId = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.batchNonce = longToString(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.tokenContract = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
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
            eventNonce: isSet(object.eventNonce) ? String(object.eventNonce) : "0",
            eventHeight: isSet(object.eventHeight) ? String(object.eventHeight) : "0",
            attestationId: isSet(object.attestationId) ? bytesFromBase64(object.attestationId) : new Uint8Array(),
            batchNonce: isSet(object.batchNonce) ? String(object.batchNonce) : "0",
            tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
            orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        message.eventHeight !== undefined && (obj.eventHeight = message.eventHeight);
        message.attestationId !== undefined &&
            (obj.attestationId = base64FromBytes(message.attestationId !== undefined ? message.attestationId : new Uint8Array()));
        message.batchNonce !== undefined && (obj.batchNonce = message.batchNonce);
        message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
        message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    create(base) {
        return exports.EventWithdrawClaim.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseEventWithdrawClaim();
        message.eventNonce = (_a = object.eventNonce) !== null && _a !== void 0 ? _a : "0";
        message.eventHeight = (_b = object.eventHeight) !== null && _b !== void 0 ? _b : "0";
        message.attestationId = (_c = object.attestationId) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.batchNonce = (_d = object.batchNonce) !== null && _d !== void 0 ? _d : "0";
        message.tokenContract = (_e = object.tokenContract) !== null && _e !== void 0 ? _e : "";
        message.orchestratorAddress = (_f = object.orchestratorAddress) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseEventERC20DeployedClaim() {
    return {
        eventNonce: "0",
        eventHeight: "0",
        attestationId: new Uint8Array(),
        cosmosDenom: "",
        tokenContract: "",
        name: "",
        symbol: "",
        decimals: "0",
        orchestratorAddress: "",
    };
}
exports.EventERC20DeployedClaim = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.eventNonce !== "0") {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.eventHeight !== "0") {
            writer.uint32(16).uint64(message.eventHeight);
        }
        if (message.attestationId.length !== 0) {
            writer.uint32(26).bytes(message.attestationId);
        }
        if (message.cosmosDenom !== "") {
            writer.uint32(34).string(message.cosmosDenom);
        }
        if (message.tokenContract !== "") {
            writer.uint32(42).string(message.tokenContract);
        }
        if (message.name !== "") {
            writer.uint32(50).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(58).string(message.symbol);
        }
        if (message.decimals !== "0") {
            writer.uint32(64).uint64(message.decimals);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(74).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventERC20DeployedClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.eventNonce = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.eventHeight = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.attestationId = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.cosmosDenom = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.tokenContract = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.symbol = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.decimals = longToString(reader.uint64());
                    continue;
                case 9:
                    if (tag !== 74) {
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
            eventNonce: isSet(object.eventNonce) ? String(object.eventNonce) : "0",
            eventHeight: isSet(object.eventHeight) ? String(object.eventHeight) : "0",
            attestationId: isSet(object.attestationId) ? bytesFromBase64(object.attestationId) : new Uint8Array(),
            cosmosDenom: isSet(object.cosmosDenom) ? String(object.cosmosDenom) : "",
            tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
            name: isSet(object.name) ? String(object.name) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            decimals: isSet(object.decimals) ? String(object.decimals) : "0",
            orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        message.eventHeight !== undefined && (obj.eventHeight = message.eventHeight);
        message.attestationId !== undefined &&
            (obj.attestationId = base64FromBytes(message.attestationId !== undefined ? message.attestationId : new Uint8Array()));
        message.cosmosDenom !== undefined && (obj.cosmosDenom = message.cosmosDenom);
        message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.decimals !== undefined && (obj.decimals = message.decimals);
        message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    create(base) {
        return exports.EventERC20DeployedClaim.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseEventERC20DeployedClaim();
        message.eventNonce = (_a = object.eventNonce) !== null && _a !== void 0 ? _a : "0";
        message.eventHeight = (_b = object.eventHeight) !== null && _b !== void 0 ? _b : "0";
        message.attestationId = (_c = object.attestationId) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.cosmosDenom = (_d = object.cosmosDenom) !== null && _d !== void 0 ? _d : "";
        message.tokenContract = (_e = object.tokenContract) !== null && _e !== void 0 ? _e : "";
        message.name = (_f = object.name) !== null && _f !== void 0 ? _f : "";
        message.symbol = (_g = object.symbol) !== null && _g !== void 0 ? _g : "";
        message.decimals = (_h = object.decimals) !== null && _h !== void 0 ? _h : "0";
        message.orchestratorAddress = (_j = object.orchestratorAddress) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
function createBaseEventValsetUpdateClaim() {
    return {
        eventNonce: "0",
        eventHeight: "0",
        attestationId: new Uint8Array(),
        valsetNonce: "0",
        valsetMembers: [],
        rewardAmount: "",
        rewardToken: "",
        orchestratorAddress: "",
    };
}
exports.EventValsetUpdateClaim = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.eventNonce !== "0") {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.eventHeight !== "0") {
            writer.uint32(16).uint64(message.eventHeight);
        }
        if (message.attestationId.length !== 0) {
            writer.uint32(26).bytes(message.attestationId);
        }
        if (message.valsetNonce !== "0") {
            writer.uint32(32).uint64(message.valsetNonce);
        }
        for (const v of message.valsetMembers) {
            types_1.BridgeValidator.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.rewardAmount !== "") {
            writer.uint32(50).string(message.rewardAmount);
        }
        if (message.rewardToken !== "") {
            writer.uint32(58).string(message.rewardToken);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(66).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventValsetUpdateClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.eventNonce = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.eventHeight = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.attestationId = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.valsetNonce = longToString(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.valsetMembers.push(types_1.BridgeValidator.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.rewardAmount = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.rewardToken = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
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
            eventNonce: isSet(object.eventNonce) ? String(object.eventNonce) : "0",
            eventHeight: isSet(object.eventHeight) ? String(object.eventHeight) : "0",
            attestationId: isSet(object.attestationId) ? bytesFromBase64(object.attestationId) : new Uint8Array(),
            valsetNonce: isSet(object.valsetNonce) ? String(object.valsetNonce) : "0",
            valsetMembers: Array.isArray(object === null || object === void 0 ? void 0 : object.valsetMembers)
                ? object.valsetMembers.map((e) => types_1.BridgeValidator.fromJSON(e))
                : [],
            rewardAmount: isSet(object.rewardAmount) ? String(object.rewardAmount) : "",
            rewardToken: isSet(object.rewardToken) ? String(object.rewardToken) : "",
            orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        message.eventHeight !== undefined && (obj.eventHeight = message.eventHeight);
        message.attestationId !== undefined &&
            (obj.attestationId = base64FromBytes(message.attestationId !== undefined ? message.attestationId : new Uint8Array()));
        message.valsetNonce !== undefined && (obj.valsetNonce = message.valsetNonce);
        if (message.valsetMembers) {
            obj.valsetMembers = message.valsetMembers.map((e) => e ? types_1.BridgeValidator.toJSON(e) : undefined);
        }
        else {
            obj.valsetMembers = [];
        }
        message.rewardAmount !== undefined && (obj.rewardAmount = message.rewardAmount);
        message.rewardToken !== undefined && (obj.rewardToken = message.rewardToken);
        message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    create(base) {
        return exports.EventValsetUpdateClaim.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseEventValsetUpdateClaim();
        message.eventNonce = (_a = object.eventNonce) !== null && _a !== void 0 ? _a : "0";
        message.eventHeight = (_b = object.eventHeight) !== null && _b !== void 0 ? _b : "0";
        message.attestationId = (_c = object.attestationId) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.valsetNonce = (_d = object.valsetNonce) !== null && _d !== void 0 ? _d : "0";
        message.valsetMembers = ((_e = object.valsetMembers) === null || _e === void 0 ? void 0 : _e.map((e) => types_1.BridgeValidator.fromPartial(e))) || [];
        message.rewardAmount = (_f = object.rewardAmount) !== null && _f !== void 0 ? _f : "";
        message.rewardToken = (_g = object.rewardToken) !== null && _g !== void 0 ? _g : "";
        message.orchestratorAddress = (_h = object.orchestratorAddress) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseEventCancelSendToEth() {
    return { outgoingTxId: "0" };
}
exports.EventCancelSendToEth = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.outgoingTxId !== "0") {
            writer.uint32(8).uint64(message.outgoingTxId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCancelSendToEth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.outgoingTxId = longToString(reader.uint64());
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
        return { outgoingTxId: isSet(object.outgoingTxId) ? String(object.outgoingTxId) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.outgoingTxId !== undefined && (obj.outgoingTxId = message.outgoingTxId);
        return obj;
    },
    create(base) {
        return exports.EventCancelSendToEth.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEventCancelSendToEth();
        message.outgoingTxId = (_a = object.outgoingTxId) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseEventSubmitBadSignatureEvidence() {
    return { badEthSignature: "", badEthSignatureSubject: "" };
}
exports.EventSubmitBadSignatureEvidence = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.badEthSignature !== "") {
            writer.uint32(10).string(message.badEthSignature);
        }
        if (message.badEthSignatureSubject !== "") {
            writer.uint32(18).string(message.badEthSignatureSubject);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSubmitBadSignatureEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.badEthSignature = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.badEthSignatureSubject = reader.string();
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
            badEthSignature: isSet(object.badEthSignature) ? String(object.badEthSignature) : "",
            badEthSignatureSubject: isSet(object.badEthSignatureSubject) ? String(object.badEthSignatureSubject) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.badEthSignature !== undefined && (obj.badEthSignature = message.badEthSignature);
        message.badEthSignatureSubject !== undefined && (obj.badEthSignatureSubject = message.badEthSignatureSubject);
        return obj;
    },
    create(base) {
        return exports.EventSubmitBadSignatureEvidence.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventSubmitBadSignatureEvidence();
        message.badEthSignature = (_a = object.badEthSignature) !== null && _a !== void 0 ? _a : "";
        message.badEthSignatureSubject = (_b = object.badEthSignatureSubject) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventValidatorSlash() {
    return { power: "0", reason: "", consensusAddress: "", operatorAddress: "", moniker: "" };
}
exports.EventValidatorSlash = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.power !== "0") {
            writer.uint32(8).int64(message.power);
        }
        if (message.reason !== "") {
            writer.uint32(18).string(message.reason);
        }
        if (message.consensusAddress !== "") {
            writer.uint32(26).string(message.consensusAddress);
        }
        if (message.operatorAddress !== "") {
            writer.uint32(34).string(message.operatorAddress);
        }
        if (message.moniker !== "") {
            writer.uint32(42).string(message.moniker);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventValidatorSlash();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.power = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.reason = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.consensusAddress = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.operatorAddress = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.moniker = reader.string();
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
            power: isSet(object.power) ? String(object.power) : "0",
            reason: isSet(object.reason) ? String(object.reason) : "",
            consensusAddress: isSet(object.consensusAddress) ? String(object.consensusAddress) : "",
            operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.power !== undefined && (obj.power = message.power);
        message.reason !== undefined && (obj.reason = message.reason);
        message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
        message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        return obj;
    },
    create(base) {
        return exports.EventValidatorSlash.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseEventValidatorSlash();
        message.power = (_a = object.power) !== null && _a !== void 0 ? _a : "0";
        message.reason = (_b = object.reason) !== null && _b !== void 0 ? _b : "";
        message.consensusAddress = (_c = object.consensusAddress) !== null && _c !== void 0 ? _c : "";
        message.operatorAddress = (_d = object.operatorAddress) !== null && _d !== void 0 ? _d : "";
        message.moniker = (_e = object.moniker) !== null && _e !== void 0 ? _e : "";
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
