"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20ToDenom = exports.LastClaimEvent = exports.LastObservedEthereumBlockHeight = exports.Valset = exports.BridgeValidator = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseBridgeValidator() {
    return { power: "0", ethereumAddress: "" };
}
exports.BridgeValidator = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.power !== "0") {
            writer.uint32(8).uint64(message.power);
        }
        if (message.ethereumAddress !== "") {
            writer.uint32(18).string(message.ethereumAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBridgeValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.power = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ethereumAddress = reader.string();
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
            ethereumAddress: isSet(object.ethereumAddress) ? String(object.ethereumAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.power !== undefined && (obj.power = message.power);
        message.ethereumAddress !== undefined && (obj.ethereumAddress = message.ethereumAddress);
        return obj;
    },
    create(base) {
        return exports.BridgeValidator.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBridgeValidator();
        message.power = (_a = object.power) !== null && _a !== void 0 ? _a : "0";
        message.ethereumAddress = (_b = object.ethereumAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseValset() {
    return { nonce: "0", members: [], height: "0", rewardAmount: "", rewardToken: "" };
}
exports.Valset = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nonce !== "0") {
            writer.uint32(8).uint64(message.nonce);
        }
        for (const v of message.members) {
            exports.BridgeValidator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== "0") {
            writer.uint32(24).uint64(message.height);
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
        const message = createBaseValset();
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
                    message.members.push(exports.BridgeValidator.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.height = longToString(reader.uint64());
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
            nonce: isSet(object.nonce) ? String(object.nonce) : "0",
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map((e) => exports.BridgeValidator.fromJSON(e)) : [],
            height: isSet(object.height) ? String(object.height) : "0",
            rewardAmount: isSet(object.rewardAmount) ? String(object.rewardAmount) : "",
            rewardToken: isSet(object.rewardToken) ? String(object.rewardToken) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        if (message.members) {
            obj.members = message.members.map((e) => e ? exports.BridgeValidator.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.height !== undefined && (obj.height = message.height);
        message.rewardAmount !== undefined && (obj.rewardAmount = message.rewardAmount);
        message.rewardToken !== undefined && (obj.rewardToken = message.rewardToken);
        return obj;
    },
    create(base) {
        return exports.Valset.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseValset();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : "0";
        message.members = ((_b = object.members) === null || _b === void 0 ? void 0 : _b.map((e) => exports.BridgeValidator.fromPartial(e))) || [];
        message.height = (_c = object.height) !== null && _c !== void 0 ? _c : "0";
        message.rewardAmount = (_d = object.rewardAmount) !== null && _d !== void 0 ? _d : "";
        message.rewardToken = (_e = object.rewardToken) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseLastObservedEthereumBlockHeight() {
    return { cosmosBlockHeight: "0", ethereumBlockHeight: "0" };
}
exports.LastObservedEthereumBlockHeight = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cosmosBlockHeight !== "0") {
            writer.uint32(8).uint64(message.cosmosBlockHeight);
        }
        if (message.ethereumBlockHeight !== "0") {
            writer.uint32(16).uint64(message.ethereumBlockHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastObservedEthereumBlockHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.cosmosBlockHeight = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.ethereumBlockHeight = longToString(reader.uint64());
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
            cosmosBlockHeight: isSet(object.cosmosBlockHeight) ? String(object.cosmosBlockHeight) : "0",
            ethereumBlockHeight: isSet(object.ethereumBlockHeight) ? String(object.ethereumBlockHeight) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.cosmosBlockHeight !== undefined && (obj.cosmosBlockHeight = message.cosmosBlockHeight);
        message.ethereumBlockHeight !== undefined && (obj.ethereumBlockHeight = message.ethereumBlockHeight);
        return obj;
    },
    create(base) {
        return exports.LastObservedEthereumBlockHeight.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLastObservedEthereumBlockHeight();
        message.cosmosBlockHeight = (_a = object.cosmosBlockHeight) !== null && _a !== void 0 ? _a : "0";
        message.ethereumBlockHeight = (_b = object.ethereumBlockHeight) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseLastClaimEvent() {
    return { ethereumEventNonce: "0", ethereumEventHeight: "0" };
}
exports.LastClaimEvent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ethereumEventNonce !== "0") {
            writer.uint32(8).uint64(message.ethereumEventNonce);
        }
        if (message.ethereumEventHeight !== "0") {
            writer.uint32(16).uint64(message.ethereumEventHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastClaimEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.ethereumEventNonce = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.ethereumEventHeight = longToString(reader.uint64());
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
            ethereumEventNonce: isSet(object.ethereumEventNonce) ? String(object.ethereumEventNonce) : "0",
            ethereumEventHeight: isSet(object.ethereumEventHeight) ? String(object.ethereumEventHeight) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.ethereumEventNonce !== undefined && (obj.ethereumEventNonce = message.ethereumEventNonce);
        message.ethereumEventHeight !== undefined && (obj.ethereumEventHeight = message.ethereumEventHeight);
        return obj;
    },
    create(base) {
        return exports.LastClaimEvent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLastClaimEvent();
        message.ethereumEventNonce = (_a = object.ethereumEventNonce) !== null && _a !== void 0 ? _a : "0";
        message.ethereumEventHeight = (_b = object.ethereumEventHeight) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseERC20ToDenom() {
    return { erc20: "", denom: "" };
}
exports.ERC20ToDenom = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseERC20ToDenom();
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
            erc20: isSet(object.erc20) ? String(object.erc20) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.erc20 !== undefined && (obj.erc20 = message.erc20);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    create(base) {
        return exports.ERC20ToDenom.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseERC20ToDenom();
        message.erc20 = (_a = object.erc20) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
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
