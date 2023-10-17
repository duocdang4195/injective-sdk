"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
function createBaseParams() {
    return {
        peggyId: "",
        contractSourceHash: "",
        bridgeEthereumAddress: "",
        bridgeChainId: "0",
        signedValsetsWindow: "0",
        signedBatchesWindow: "0",
        signedClaimsWindow: "0",
        targetBatchTimeout: "0",
        averageBlockTime: "0",
        averageEthereumBlockTime: "0",
        slashFractionValset: new Uint8Array(),
        slashFractionBatch: new Uint8Array(),
        slashFractionClaim: new Uint8Array(),
        slashFractionConflictingClaim: new Uint8Array(),
        unbondSlashingValsetsWindow: "0",
        slashFractionBadEthSignature: new Uint8Array(),
        cosmosCoinDenom: "",
        cosmosCoinErc20Contract: "",
        claimSlashingEnabled: false,
        bridgeContractStartHeight: "0",
        valsetReward: undefined,
    };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.peggyId !== "") {
            writer.uint32(10).string(message.peggyId);
        }
        if (message.contractSourceHash !== "") {
            writer.uint32(18).string(message.contractSourceHash);
        }
        if (message.bridgeEthereumAddress !== "") {
            writer.uint32(26).string(message.bridgeEthereumAddress);
        }
        if (message.bridgeChainId !== "0") {
            writer.uint32(32).uint64(message.bridgeChainId);
        }
        if (message.signedValsetsWindow !== "0") {
            writer.uint32(40).uint64(message.signedValsetsWindow);
        }
        if (message.signedBatchesWindow !== "0") {
            writer.uint32(48).uint64(message.signedBatchesWindow);
        }
        if (message.signedClaimsWindow !== "0") {
            writer.uint32(56).uint64(message.signedClaimsWindow);
        }
        if (message.targetBatchTimeout !== "0") {
            writer.uint32(64).uint64(message.targetBatchTimeout);
        }
        if (message.averageBlockTime !== "0") {
            writer.uint32(72).uint64(message.averageBlockTime);
        }
        if (message.averageEthereumBlockTime !== "0") {
            writer.uint32(80).uint64(message.averageEthereumBlockTime);
        }
        if (message.slashFractionValset.length !== 0) {
            writer.uint32(90).bytes(message.slashFractionValset);
        }
        if (message.slashFractionBatch.length !== 0) {
            writer.uint32(98).bytes(message.slashFractionBatch);
        }
        if (message.slashFractionClaim.length !== 0) {
            writer.uint32(106).bytes(message.slashFractionClaim);
        }
        if (message.slashFractionConflictingClaim.length !== 0) {
            writer.uint32(114).bytes(message.slashFractionConflictingClaim);
        }
        if (message.unbondSlashingValsetsWindow !== "0") {
            writer.uint32(120).uint64(message.unbondSlashingValsetsWindow);
        }
        if (message.slashFractionBadEthSignature.length !== 0) {
            writer.uint32(130).bytes(message.slashFractionBadEthSignature);
        }
        if (message.cosmosCoinDenom !== "") {
            writer.uint32(138).string(message.cosmosCoinDenom);
        }
        if (message.cosmosCoinErc20Contract !== "") {
            writer.uint32(146).string(message.cosmosCoinErc20Contract);
        }
        if (message.claimSlashingEnabled === true) {
            writer.uint32(152).bool(message.claimSlashingEnabled);
        }
        if (message.bridgeContractStartHeight !== "0") {
            writer.uint32(160).uint64(message.bridgeContractStartHeight);
        }
        if (message.valsetReward !== undefined) {
            coin_1.Coin.encode(message.valsetReward, writer.uint32(170).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.peggyId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.contractSourceHash = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.bridgeEthereumAddress = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.bridgeChainId = longToString(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.signedValsetsWindow = longToString(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.signedBatchesWindow = longToString(reader.uint64());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.signedClaimsWindow = longToString(reader.uint64());
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.targetBatchTimeout = longToString(reader.uint64());
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.averageBlockTime = longToString(reader.uint64());
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.averageEthereumBlockTime = longToString(reader.uint64());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.slashFractionValset = reader.bytes();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.slashFractionBatch = reader.bytes();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.slashFractionClaim = reader.bytes();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.slashFractionConflictingClaim = reader.bytes();
                    continue;
                case 15:
                    if (tag !== 120) {
                        break;
                    }
                    message.unbondSlashingValsetsWindow = longToString(reader.uint64());
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.slashFractionBadEthSignature = reader.bytes();
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.cosmosCoinDenom = reader.string();
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.cosmosCoinErc20Contract = reader.string();
                    continue;
                case 19:
                    if (tag !== 152) {
                        break;
                    }
                    message.claimSlashingEnabled = reader.bool();
                    continue;
                case 20:
                    if (tag !== 160) {
                        break;
                    }
                    message.bridgeContractStartHeight = longToString(reader.uint64());
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.valsetReward = coin_1.Coin.decode(reader, reader.uint32());
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
            peggyId: isSet(object.peggyId) ? String(object.peggyId) : "",
            contractSourceHash: isSet(object.contractSourceHash) ? String(object.contractSourceHash) : "",
            bridgeEthereumAddress: isSet(object.bridgeEthereumAddress) ? String(object.bridgeEthereumAddress) : "",
            bridgeChainId: isSet(object.bridgeChainId) ? String(object.bridgeChainId) : "0",
            signedValsetsWindow: isSet(object.signedValsetsWindow) ? String(object.signedValsetsWindow) : "0",
            signedBatchesWindow: isSet(object.signedBatchesWindow) ? String(object.signedBatchesWindow) : "0",
            signedClaimsWindow: isSet(object.signedClaimsWindow) ? String(object.signedClaimsWindow) : "0",
            targetBatchTimeout: isSet(object.targetBatchTimeout) ? String(object.targetBatchTimeout) : "0",
            averageBlockTime: isSet(object.averageBlockTime) ? String(object.averageBlockTime) : "0",
            averageEthereumBlockTime: isSet(object.averageEthereumBlockTime) ? String(object.averageEthereumBlockTime) : "0",
            slashFractionValset: isSet(object.slashFractionValset)
                ? bytesFromBase64(object.slashFractionValset)
                : new Uint8Array(),
            slashFractionBatch: isSet(object.slashFractionBatch)
                ? bytesFromBase64(object.slashFractionBatch)
                : new Uint8Array(),
            slashFractionClaim: isSet(object.slashFractionClaim)
                ? bytesFromBase64(object.slashFractionClaim)
                : new Uint8Array(),
            slashFractionConflictingClaim: isSet(object.slashFractionConflictingClaim)
                ? bytesFromBase64(object.slashFractionConflictingClaim)
                : new Uint8Array(),
            unbondSlashingValsetsWindow: isSet(object.unbondSlashingValsetsWindow)
                ? String(object.unbondSlashingValsetsWindow)
                : "0",
            slashFractionBadEthSignature: isSet(object.slashFractionBadEthSignature)
                ? bytesFromBase64(object.slashFractionBadEthSignature)
                : new Uint8Array(),
            cosmosCoinDenom: isSet(object.cosmosCoinDenom) ? String(object.cosmosCoinDenom) : "",
            cosmosCoinErc20Contract: isSet(object.cosmosCoinErc20Contract) ? String(object.cosmosCoinErc20Contract) : "",
            claimSlashingEnabled: isSet(object.claimSlashingEnabled) ? Boolean(object.claimSlashingEnabled) : false,
            bridgeContractStartHeight: isSet(object.bridgeContractStartHeight)
                ? String(object.bridgeContractStartHeight)
                : "0",
            valsetReward: isSet(object.valsetReward) ? coin_1.Coin.fromJSON(object.valsetReward) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.peggyId !== undefined && (obj.peggyId = message.peggyId);
        message.contractSourceHash !== undefined && (obj.contractSourceHash = message.contractSourceHash);
        message.bridgeEthereumAddress !== undefined && (obj.bridgeEthereumAddress = message.bridgeEthereumAddress);
        message.bridgeChainId !== undefined && (obj.bridgeChainId = message.bridgeChainId);
        message.signedValsetsWindow !== undefined && (obj.signedValsetsWindow = message.signedValsetsWindow);
        message.signedBatchesWindow !== undefined && (obj.signedBatchesWindow = message.signedBatchesWindow);
        message.signedClaimsWindow !== undefined && (obj.signedClaimsWindow = message.signedClaimsWindow);
        message.targetBatchTimeout !== undefined && (obj.targetBatchTimeout = message.targetBatchTimeout);
        message.averageBlockTime !== undefined && (obj.averageBlockTime = message.averageBlockTime);
        message.averageEthereumBlockTime !== undefined && (obj.averageEthereumBlockTime = message.averageEthereumBlockTime);
        message.slashFractionValset !== undefined &&
            (obj.slashFractionValset = base64FromBytes(message.slashFractionValset !== undefined ? message.slashFractionValset : new Uint8Array()));
        message.slashFractionBatch !== undefined &&
            (obj.slashFractionBatch = base64FromBytes(message.slashFractionBatch !== undefined ? message.slashFractionBatch : new Uint8Array()));
        message.slashFractionClaim !== undefined &&
            (obj.slashFractionClaim = base64FromBytes(message.slashFractionClaim !== undefined ? message.slashFractionClaim : new Uint8Array()));
        message.slashFractionConflictingClaim !== undefined &&
            (obj.slashFractionConflictingClaim = base64FromBytes(message.slashFractionConflictingClaim !== undefined ? message.slashFractionConflictingClaim : new Uint8Array()));
        message.unbondSlashingValsetsWindow !== undefined &&
            (obj.unbondSlashingValsetsWindow = message.unbondSlashingValsetsWindow);
        message.slashFractionBadEthSignature !== undefined &&
            (obj.slashFractionBadEthSignature = base64FromBytes(message.slashFractionBadEthSignature !== undefined ? message.slashFractionBadEthSignature : new Uint8Array()));
        message.cosmosCoinDenom !== undefined && (obj.cosmosCoinDenom = message.cosmosCoinDenom);
        message.cosmosCoinErc20Contract !== undefined && (obj.cosmosCoinErc20Contract = message.cosmosCoinErc20Contract);
        message.claimSlashingEnabled !== undefined && (obj.claimSlashingEnabled = message.claimSlashingEnabled);
        message.bridgeContractStartHeight !== undefined &&
            (obj.bridgeContractStartHeight = message.bridgeContractStartHeight);
        message.valsetReward !== undefined &&
            (obj.valsetReward = message.valsetReward ? coin_1.Coin.toJSON(message.valsetReward) : undefined);
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        const message = createBaseParams();
        message.peggyId = (_a = object.peggyId) !== null && _a !== void 0 ? _a : "";
        message.contractSourceHash = (_b = object.contractSourceHash) !== null && _b !== void 0 ? _b : "";
        message.bridgeEthereumAddress = (_c = object.bridgeEthereumAddress) !== null && _c !== void 0 ? _c : "";
        message.bridgeChainId = (_d = object.bridgeChainId) !== null && _d !== void 0 ? _d : "0";
        message.signedValsetsWindow = (_e = object.signedValsetsWindow) !== null && _e !== void 0 ? _e : "0";
        message.signedBatchesWindow = (_f = object.signedBatchesWindow) !== null && _f !== void 0 ? _f : "0";
        message.signedClaimsWindow = (_g = object.signedClaimsWindow) !== null && _g !== void 0 ? _g : "0";
        message.targetBatchTimeout = (_h = object.targetBatchTimeout) !== null && _h !== void 0 ? _h : "0";
        message.averageBlockTime = (_j = object.averageBlockTime) !== null && _j !== void 0 ? _j : "0";
        message.averageEthereumBlockTime = (_k = object.averageEthereumBlockTime) !== null && _k !== void 0 ? _k : "0";
        message.slashFractionValset = (_l = object.slashFractionValset) !== null && _l !== void 0 ? _l : new Uint8Array();
        message.slashFractionBatch = (_m = object.slashFractionBatch) !== null && _m !== void 0 ? _m : new Uint8Array();
        message.slashFractionClaim = (_o = object.slashFractionClaim) !== null && _o !== void 0 ? _o : new Uint8Array();
        message.slashFractionConflictingClaim = (_p = object.slashFractionConflictingClaim) !== null && _p !== void 0 ? _p : new Uint8Array();
        message.unbondSlashingValsetsWindow = (_q = object.unbondSlashingValsetsWindow) !== null && _q !== void 0 ? _q : "0";
        message.slashFractionBadEthSignature = (_r = object.slashFractionBadEthSignature) !== null && _r !== void 0 ? _r : new Uint8Array();
        message.cosmosCoinDenom = (_s = object.cosmosCoinDenom) !== null && _s !== void 0 ? _s : "";
        message.cosmosCoinErc20Contract = (_t = object.cosmosCoinErc20Contract) !== null && _t !== void 0 ? _t : "";
        message.claimSlashingEnabled = (_u = object.claimSlashingEnabled) !== null && _u !== void 0 ? _u : false;
        message.bridgeContractStartHeight = (_v = object.bridgeContractStartHeight) !== null && _v !== void 0 ? _v : "0";
        message.valsetReward = (object.valsetReward !== undefined && object.valsetReward !== null)
            ? coin_1.Coin.fromPartial(object.valsetReward)
            : undefined;
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
