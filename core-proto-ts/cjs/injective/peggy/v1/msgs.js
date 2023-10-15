"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.MsgUpdateParamsDesc = exports.MsgSubmitBadSignatureEvidenceDesc = exports.MsgCancelSendToEthDesc = exports.MsgSetOrchestratorAddressesDesc = exports.MsgERC20DeployedClaimDesc = exports.MsgValsetUpdateClaimDesc = exports.MsgWithdrawClaimDesc = exports.MsgDepositClaimDesc = exports.MsgConfirmBatchDesc = exports.MsgRequestBatchDesc = exports.MsgSendToEthDesc = exports.MsgValsetConfirmDesc = exports.MsgDesc = exports.MsgClientImpl = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgValsetUpdatedClaimResponse = exports.MsgValsetUpdatedClaim = exports.MsgSubmitBadSignatureEvidenceResponse = exports.MsgSubmitBadSignatureEvidence = exports.MsgCancelSendToEthResponse = exports.MsgCancelSendToEth = exports.MsgERC20DeployedClaimResponse = exports.MsgERC20DeployedClaim = exports.MsgWithdrawClaimResponse = exports.MsgWithdrawClaim = exports.MsgDepositClaimResponse = exports.MsgDepositClaim = exports.MsgConfirmBatchResponse = exports.MsgConfirmBatch = exports.MsgRequestBatchResponse = exports.MsgRequestBatch = exports.MsgSendToEthResponse = exports.MsgSendToEth = exports.MsgValsetConfirmResponse = exports.MsgValsetConfirm = exports.MsgSetOrchestratorAddressesResponse = exports.MsgSetOrchestratorAddresses = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const any_1 = require("../../../google/protobuf/any");
const params_1 = require("./params");
const types_1 = require("./types");
function createBaseMsgSetOrchestratorAddresses() {
    return { sender: "", orchestrator: "", ethAddress: "" };
}
exports.MsgSetOrchestratorAddresses = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.orchestrator !== "") {
            writer.uint32(18).string(message.orchestrator);
        }
        if (message.ethAddress !== "") {
            writer.uint32(26).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetOrchestratorAddresses();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.orchestrator = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
            ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        return obj;
    },
    create(base) {
        return exports.MsgSetOrchestratorAddresses.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgSetOrchestratorAddresses();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.orchestrator = (_b = object.orchestrator) !== null && _b !== void 0 ? _b : "";
        message.ethAddress = (_c = object.ethAddress) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgSetOrchestratorAddressesResponse() {
    return {};
}
exports.MsgSetOrchestratorAddressesResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetOrchestratorAddressesResponse();
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
        return exports.MsgSetOrchestratorAddressesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgSetOrchestratorAddressesResponse();
        return message;
    },
};
function createBaseMsgValsetConfirm() {
    return { nonce: "0", orchestrator: "", ethAddress: "", signature: "" };
}
exports.MsgValsetConfirm = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nonce !== "0") {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.orchestrator !== "") {
            writer.uint32(18).string(message.orchestrator);
        }
        if (message.ethAddress !== "") {
            writer.uint32(26).string(message.ethAddress);
        }
        if (message.signature !== "") {
            writer.uint32(34).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetConfirm();
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
                    message.orchestrator = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.ethAddress = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.signature = reader.string();
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
            orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
            ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
            signature: isSet(object.signature) ? String(object.signature) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    create(base) {
        return exports.MsgValsetConfirm.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgValsetConfirm();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : "0";
        message.orchestrator = (_b = object.orchestrator) !== null && _b !== void 0 ? _b : "";
        message.ethAddress = (_c = object.ethAddress) !== null && _c !== void 0 ? _c : "";
        message.signature = (_d = object.signature) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgValsetConfirmResponse() {
    return {};
}
exports.MsgValsetConfirmResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetConfirmResponse();
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
        return exports.MsgValsetConfirmResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgValsetConfirmResponse();
        return message;
    },
};
function createBaseMsgSendToEth() {
    return { sender: "", ethDest: "", amount: undefined, bridgeFee: undefined };
}
exports.MsgSendToEth = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.ethDest !== "") {
            writer.uint32(18).string(message.ethDest);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.bridgeFee !== undefined) {
            coin_1.Coin.encode(message.bridgeFee, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendToEth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ethDest = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.bridgeFee = coin_1.Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            ethDest: isSet(object.ethDest) ? String(object.ethDest) : "",
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            bridgeFee: isSet(object.bridgeFee) ? coin_1.Coin.fromJSON(object.bridgeFee) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.ethDest !== undefined && (obj.ethDest = message.ethDest);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.bridgeFee !== undefined && (obj.bridgeFee = message.bridgeFee ? coin_1.Coin.toJSON(message.bridgeFee) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgSendToEth.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgSendToEth();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.ethDest = (_b = object.ethDest) !== null && _b !== void 0 ? _b : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? coin_1.Coin.fromPartial(object.amount)
            : undefined;
        message.bridgeFee = (object.bridgeFee !== undefined && object.bridgeFee !== null)
            ? coin_1.Coin.fromPartial(object.bridgeFee)
            : undefined;
        return message;
    },
};
function createBaseMsgSendToEthResponse() {
    return {};
}
exports.MsgSendToEthResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendToEthResponse();
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
        return exports.MsgSendToEthResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgSendToEthResponse();
        return message;
    },
};
function createBaseMsgRequestBatch() {
    return { orchestrator: "", denom: "" };
}
exports.MsgRequestBatch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orchestrator !== "") {
            writer.uint32(10).string(message.orchestrator);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orchestrator = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
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
        return {
            orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    create(base) {
        return exports.MsgRequestBatch.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgRequestBatch();
        message.orchestrator = (_a = object.orchestrator) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgRequestBatchResponse() {
    return {};
}
exports.MsgRequestBatchResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestBatchResponse();
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
        return exports.MsgRequestBatchResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRequestBatchResponse();
        return message;
    },
};
function createBaseMsgConfirmBatch() {
    return { nonce: "0", tokenContract: "", ethSigner: "", orchestrator: "", signature: "" };
}
exports.MsgConfirmBatch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nonce !== "0") {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.tokenContract !== "") {
            writer.uint32(18).string(message.tokenContract);
        }
        if (message.ethSigner !== "") {
            writer.uint32(26).string(message.ethSigner);
        }
        if (message.orchestrator !== "") {
            writer.uint32(34).string(message.orchestrator);
        }
        if (message.signature !== "") {
            writer.uint32(42).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmBatch();
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
                    message.tokenContract = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.ethSigner = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.orchestrator = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.signature = reader.string();
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
            tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
            ethSigner: isSet(object.ethSigner) ? String(object.ethSigner) : "",
            orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
            signature: isSet(object.signature) ? String(object.signature) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
        message.ethSigner !== undefined && (obj.ethSigner = message.ethSigner);
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    create(base) {
        return exports.MsgConfirmBatch.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgConfirmBatch();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : "0";
        message.tokenContract = (_b = object.tokenContract) !== null && _b !== void 0 ? _b : "";
        message.ethSigner = (_c = object.ethSigner) !== null && _c !== void 0 ? _c : "";
        message.orchestrator = (_d = object.orchestrator) !== null && _d !== void 0 ? _d : "";
        message.signature = (_e = object.signature) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseMsgConfirmBatchResponse() {
    return {};
}
exports.MsgConfirmBatchResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmBatchResponse();
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
        return exports.MsgConfirmBatchResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgConfirmBatchResponse();
        return message;
    },
};
function createBaseMsgDepositClaim() {
    return {
        eventNonce: "0",
        blockHeight: "0",
        tokenContract: "",
        amount: "",
        ethereumSender: "",
        cosmosReceiver: "",
        orchestrator: "",
        data: "",
    };
}
exports.MsgDepositClaim = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.eventNonce !== "0") {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.blockHeight !== "0") {
            writer.uint32(16).uint64(message.blockHeight);
        }
        if (message.tokenContract !== "") {
            writer.uint32(26).string(message.tokenContract);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.ethereumSender !== "") {
            writer.uint32(42).string(message.ethereumSender);
        }
        if (message.cosmosReceiver !== "") {
            writer.uint32(50).string(message.cosmosReceiver);
        }
        if (message.orchestrator !== "") {
            writer.uint32(58).string(message.orchestrator);
        }
        if (message.data !== "") {
            writer.uint32(66).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositClaim();
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
                    message.blockHeight = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.tokenContract = reader.string();
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
                    message.ethereumSender = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.cosmosReceiver = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.orchestrator = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
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
            blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "0",
            tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            ethereumSender: isSet(object.ethereumSender) ? String(object.ethereumSender) : "",
            cosmosReceiver: isSet(object.cosmosReceiver) ? String(object.cosmosReceiver) : "",
            orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
            data: isSet(object.data) ? String(object.data) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight);
        message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
        message.amount !== undefined && (obj.amount = message.amount);
        message.ethereumSender !== undefined && (obj.ethereumSender = message.ethereumSender);
        message.cosmosReceiver !== undefined && (obj.cosmosReceiver = message.cosmosReceiver);
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    create(base) {
        return exports.MsgDepositClaim.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseMsgDepositClaim();
        message.eventNonce = (_a = object.eventNonce) !== null && _a !== void 0 ? _a : "0";
        message.blockHeight = (_b = object.blockHeight) !== null && _b !== void 0 ? _b : "0";
        message.tokenContract = (_c = object.tokenContract) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "";
        message.ethereumSender = (_e = object.ethereumSender) !== null && _e !== void 0 ? _e : "";
        message.cosmosReceiver = (_f = object.cosmosReceiver) !== null && _f !== void 0 ? _f : "";
        message.orchestrator = (_g = object.orchestrator) !== null && _g !== void 0 ? _g : "";
        message.data = (_h = object.data) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseMsgDepositClaimResponse() {
    return {};
}
exports.MsgDepositClaimResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositClaimResponse();
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
        return exports.MsgDepositClaimResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgDepositClaimResponse();
        return message;
    },
};
function createBaseMsgWithdrawClaim() {
    return { eventNonce: "0", blockHeight: "0", batchNonce: "0", tokenContract: "", orchestrator: "" };
}
exports.MsgWithdrawClaim = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.eventNonce !== "0") {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.blockHeight !== "0") {
            writer.uint32(16).uint64(message.blockHeight);
        }
        if (message.batchNonce !== "0") {
            writer.uint32(24).uint64(message.batchNonce);
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.orchestrator !== "") {
            writer.uint32(42).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawClaim();
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
                    message.blockHeight = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.batchNonce = longToString(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.tokenContract = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.orchestrator = reader.string();
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
            blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "0",
            batchNonce: isSet(object.batchNonce) ? String(object.batchNonce) : "0",
            tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
            orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight);
        message.batchNonce !== undefined && (obj.batchNonce = message.batchNonce);
        message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        return obj;
    },
    create(base) {
        return exports.MsgWithdrawClaim.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgWithdrawClaim();
        message.eventNonce = (_a = object.eventNonce) !== null && _a !== void 0 ? _a : "0";
        message.blockHeight = (_b = object.blockHeight) !== null && _b !== void 0 ? _b : "0";
        message.batchNonce = (_c = object.batchNonce) !== null && _c !== void 0 ? _c : "0";
        message.tokenContract = (_d = object.tokenContract) !== null && _d !== void 0 ? _d : "";
        message.orchestrator = (_e = object.orchestrator) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseMsgWithdrawClaimResponse() {
    return {};
}
exports.MsgWithdrawClaimResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawClaimResponse();
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
        return exports.MsgWithdrawClaimResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawClaimResponse();
        return message;
    },
};
function createBaseMsgERC20DeployedClaim() {
    return {
        eventNonce: "0",
        blockHeight: "0",
        cosmosDenom: "",
        tokenContract: "",
        name: "",
        symbol: "",
        decimals: "0",
        orchestrator: "",
    };
}
exports.MsgERC20DeployedClaim = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.eventNonce !== "0") {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.blockHeight !== "0") {
            writer.uint32(16).uint64(message.blockHeight);
        }
        if (message.cosmosDenom !== "") {
            writer.uint32(26).string(message.cosmosDenom);
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(50).string(message.symbol);
        }
        if (message.decimals !== "0") {
            writer.uint32(56).uint64(message.decimals);
        }
        if (message.orchestrator !== "") {
            writer.uint32(66).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgERC20DeployedClaim();
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
                    message.blockHeight = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.cosmosDenom = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.tokenContract = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.symbol = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.decimals = longToString(reader.uint64());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.orchestrator = reader.string();
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
            blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "0",
            cosmosDenom: isSet(object.cosmosDenom) ? String(object.cosmosDenom) : "",
            tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
            name: isSet(object.name) ? String(object.name) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            decimals: isSet(object.decimals) ? String(object.decimals) : "0",
            orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight);
        message.cosmosDenom !== undefined && (obj.cosmosDenom = message.cosmosDenom);
        message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.decimals !== undefined && (obj.decimals = message.decimals);
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        return obj;
    },
    create(base) {
        return exports.MsgERC20DeployedClaim.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseMsgERC20DeployedClaim();
        message.eventNonce = (_a = object.eventNonce) !== null && _a !== void 0 ? _a : "0";
        message.blockHeight = (_b = object.blockHeight) !== null && _b !== void 0 ? _b : "0";
        message.cosmosDenom = (_c = object.cosmosDenom) !== null && _c !== void 0 ? _c : "";
        message.tokenContract = (_d = object.tokenContract) !== null && _d !== void 0 ? _d : "";
        message.name = (_e = object.name) !== null && _e !== void 0 ? _e : "";
        message.symbol = (_f = object.symbol) !== null && _f !== void 0 ? _f : "";
        message.decimals = (_g = object.decimals) !== null && _g !== void 0 ? _g : "0";
        message.orchestrator = (_h = object.orchestrator) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseMsgERC20DeployedClaimResponse() {
    return {};
}
exports.MsgERC20DeployedClaimResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgERC20DeployedClaimResponse();
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
        return exports.MsgERC20DeployedClaimResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgERC20DeployedClaimResponse();
        return message;
    },
};
function createBaseMsgCancelSendToEth() {
    return { transactionId: "0", sender: "" };
}
exports.MsgCancelSendToEth = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.transactionId !== "0") {
            writer.uint32(8).uint64(message.transactionId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelSendToEth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.transactionId = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sender = reader.string();
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
            transactionId: isSet(object.transactionId) ? String(object.transactionId) : "0",
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.transactionId !== undefined && (obj.transactionId = message.transactionId);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    create(base) {
        return exports.MsgCancelSendToEth.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgCancelSendToEth();
        message.transactionId = (_a = object.transactionId) !== null && _a !== void 0 ? _a : "0";
        message.sender = (_b = object.sender) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgCancelSendToEthResponse() {
    return {};
}
exports.MsgCancelSendToEthResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelSendToEthResponse();
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
        return exports.MsgCancelSendToEthResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCancelSendToEthResponse();
        return message;
    },
};
function createBaseMsgSubmitBadSignatureEvidence() {
    return { subject: undefined, signature: "", sender: "" };
}
exports.MsgSubmitBadSignatureEvidence = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subject !== undefined) {
            any_1.Any.encode(message.subject, writer.uint32(10).fork()).ldelim();
        }
        if (message.signature !== "") {
            writer.uint32(18).string(message.signature);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitBadSignatureEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subject = any_1.Any.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.signature = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.sender = reader.string();
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
            subject: isSet(object.subject) ? any_1.Any.fromJSON(object.subject) : undefined,
            signature: isSet(object.signature) ? String(object.signature) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.subject !== undefined && (obj.subject = message.subject ? any_1.Any.toJSON(message.subject) : undefined);
        message.signature !== undefined && (obj.signature = message.signature);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    create(base) {
        return exports.MsgSubmitBadSignatureEvidence.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgSubmitBadSignatureEvidence();
        message.subject = (object.subject !== undefined && object.subject !== null)
            ? any_1.Any.fromPartial(object.subject)
            : undefined;
        message.signature = (_a = object.signature) !== null && _a !== void 0 ? _a : "";
        message.sender = (_b = object.sender) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgSubmitBadSignatureEvidenceResponse() {
    return {};
}
exports.MsgSubmitBadSignatureEvidenceResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
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
        return exports.MsgSubmitBadSignatureEvidenceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
        return message;
    },
};
function createBaseMsgValsetUpdatedClaim() {
    return {
        eventNonce: "0",
        valsetNonce: "0",
        blockHeight: "0",
        members: [],
        rewardAmount: "",
        rewardToken: "",
        orchestrator: "",
    };
}
exports.MsgValsetUpdatedClaim = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.eventNonce !== "0") {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.valsetNonce !== "0") {
            writer.uint32(16).uint64(message.valsetNonce);
        }
        if (message.blockHeight !== "0") {
            writer.uint32(24).uint64(message.blockHeight);
        }
        for (const v of message.members) {
            types_1.BridgeValidator.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.rewardAmount !== "") {
            writer.uint32(42).string(message.rewardAmount);
        }
        if (message.rewardToken !== "") {
            writer.uint32(50).string(message.rewardToken);
        }
        if (message.orchestrator !== "") {
            writer.uint32(58).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetUpdatedClaim();
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
                    message.valsetNonce = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.blockHeight = longToString(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.members.push(types_1.BridgeValidator.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.rewardAmount = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.rewardToken = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.orchestrator = reader.string();
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
            valsetNonce: isSet(object.valsetNonce) ? String(object.valsetNonce) : "0",
            blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "0",
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map((e) => types_1.BridgeValidator.fromJSON(e)) : [],
            rewardAmount: isSet(object.rewardAmount) ? String(object.rewardAmount) : "",
            rewardToken: isSet(object.rewardToken) ? String(object.rewardToken) : "",
            orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = message.eventNonce);
        message.valsetNonce !== undefined && (obj.valsetNonce = message.valsetNonce);
        message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight);
        if (message.members) {
            obj.members = message.members.map((e) => e ? types_1.BridgeValidator.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.rewardAmount !== undefined && (obj.rewardAmount = message.rewardAmount);
        message.rewardToken !== undefined && (obj.rewardToken = message.rewardToken);
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        return obj;
    },
    create(base) {
        return exports.MsgValsetUpdatedClaim.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseMsgValsetUpdatedClaim();
        message.eventNonce = (_a = object.eventNonce) !== null && _a !== void 0 ? _a : "0";
        message.valsetNonce = (_b = object.valsetNonce) !== null && _b !== void 0 ? _b : "0";
        message.blockHeight = (_c = object.blockHeight) !== null && _c !== void 0 ? _c : "0";
        message.members = ((_d = object.members) === null || _d === void 0 ? void 0 : _d.map((e) => types_1.BridgeValidator.fromPartial(e))) || [];
        message.rewardAmount = (_e = object.rewardAmount) !== null && _e !== void 0 ? _e : "";
        message.rewardToken = (_f = object.rewardToken) !== null && _f !== void 0 ? _f : "";
        message.orchestrator = (_g = object.orchestrator) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseMsgValsetUpdatedClaimResponse() {
    return {};
}
exports.MsgValsetUpdatedClaimResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetUpdatedClaimResponse();
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
        return exports.MsgValsetUpdatedClaimResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgValsetUpdatedClaimResponse();
        return message;
    },
};
function createBaseMsgUpdateParams() {
    return { authority: "", params: undefined };
}
exports.MsgUpdateParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authority = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
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
        return {
            authority: isSet(object.authority) ? String(object.authority) : "",
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgUpdateParams.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgUpdateParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        return exports.MsgUpdateParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.ValsetConfirm = this.ValsetConfirm.bind(this);
        this.SendToEth = this.SendToEth.bind(this);
        this.RequestBatch = this.RequestBatch.bind(this);
        this.ConfirmBatch = this.ConfirmBatch.bind(this);
        this.DepositClaim = this.DepositClaim.bind(this);
        this.WithdrawClaim = this.WithdrawClaim.bind(this);
        this.ValsetUpdateClaim = this.ValsetUpdateClaim.bind(this);
        this.ERC20DeployedClaim = this.ERC20DeployedClaim.bind(this);
        this.SetOrchestratorAddresses = this.SetOrchestratorAddresses.bind(this);
        this.CancelSendToEth = this.CancelSendToEth.bind(this);
        this.SubmitBadSignatureEvidence = this.SubmitBadSignatureEvidence.bind(this);
        this.UpdateParams = this.UpdateParams.bind(this);
    }
    ValsetConfirm(request, metadata) {
        return this.rpc.unary(exports.MsgValsetConfirmDesc, exports.MsgValsetConfirm.fromPartial(request), metadata);
    }
    SendToEth(request, metadata) {
        return this.rpc.unary(exports.MsgSendToEthDesc, exports.MsgSendToEth.fromPartial(request), metadata);
    }
    RequestBatch(request, metadata) {
        return this.rpc.unary(exports.MsgRequestBatchDesc, exports.MsgRequestBatch.fromPartial(request), metadata);
    }
    ConfirmBatch(request, metadata) {
        return this.rpc.unary(exports.MsgConfirmBatchDesc, exports.MsgConfirmBatch.fromPartial(request), metadata);
    }
    DepositClaim(request, metadata) {
        return this.rpc.unary(exports.MsgDepositClaimDesc, exports.MsgDepositClaim.fromPartial(request), metadata);
    }
    WithdrawClaim(request, metadata) {
        return this.rpc.unary(exports.MsgWithdrawClaimDesc, exports.MsgWithdrawClaim.fromPartial(request), metadata);
    }
    ValsetUpdateClaim(request, metadata) {
        return this.rpc.unary(exports.MsgValsetUpdateClaimDesc, exports.MsgValsetUpdatedClaim.fromPartial(request), metadata);
    }
    ERC20DeployedClaim(request, metadata) {
        return this.rpc.unary(exports.MsgERC20DeployedClaimDesc, exports.MsgERC20DeployedClaim.fromPartial(request), metadata);
    }
    SetOrchestratorAddresses(request, metadata) {
        return this.rpc.unary(exports.MsgSetOrchestratorAddressesDesc, exports.MsgSetOrchestratorAddresses.fromPartial(request), metadata);
    }
    CancelSendToEth(request, metadata) {
        return this.rpc.unary(exports.MsgCancelSendToEthDesc, exports.MsgCancelSendToEth.fromPartial(request), metadata);
    }
    SubmitBadSignatureEvidence(request, metadata) {
        return this.rpc.unary(exports.MsgSubmitBadSignatureEvidenceDesc, exports.MsgSubmitBadSignatureEvidence.fromPartial(request), metadata);
    }
    UpdateParams(request, metadata) {
        return this.rpc.unary(exports.MsgUpdateParamsDesc, exports.MsgUpdateParams.fromPartial(request), metadata);
    }
}
exports.MsgClientImpl = MsgClientImpl;
exports.MsgDesc = { serviceName: "injective.peggy.v1.Msg" };
exports.MsgValsetConfirmDesc = {
    methodName: "ValsetConfirm",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgValsetConfirm.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgValsetConfirmResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgSendToEthDesc = {
    methodName: "SendToEth",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgSendToEth.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgSendToEthResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgRequestBatchDesc = {
    methodName: "RequestBatch",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgRequestBatch.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgRequestBatchResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgConfirmBatchDesc = {
    methodName: "ConfirmBatch",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgConfirmBatch.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgConfirmBatchResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgDepositClaimDesc = {
    methodName: "DepositClaim",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgDepositClaim.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgDepositClaimResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgWithdrawClaimDesc = {
    methodName: "WithdrawClaim",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgWithdrawClaim.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgWithdrawClaimResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgValsetUpdateClaimDesc = {
    methodName: "ValsetUpdateClaim",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgValsetUpdatedClaim.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgValsetUpdatedClaimResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgERC20DeployedClaimDesc = {
    methodName: "ERC20DeployedClaim",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgERC20DeployedClaim.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgERC20DeployedClaimResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgSetOrchestratorAddressesDesc = {
    methodName: "SetOrchestratorAddresses",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgSetOrchestratorAddresses.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgSetOrchestratorAddressesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgCancelSendToEthDesc = {
    methodName: "CancelSendToEth",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgCancelSendToEth.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgCancelSendToEthResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgSubmitBadSignatureEvidenceDesc = {
    methodName: "SubmitBadSignatureEvidence",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgSubmitBadSignatureEvidence.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgSubmitBadSignatureEvidenceResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgUpdateParamsDesc = {
    methodName: "UpdateParams",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgUpdateParams.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgUpdateParamsResponse.decode(data);
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
