"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutgoingTransferTx = exports.OutgoingTxBatch = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const attestation_1 = require("./attestation");
function createBaseOutgoingTxBatch() {
    return { batchNonce: "0", batchTimeout: "0", transactions: [], tokenContract: "", block: "0" };
}
exports.OutgoingTxBatch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.batchNonce !== "0") {
            writer.uint32(8).uint64(message.batchNonce);
        }
        if (message.batchTimeout !== "0") {
            writer.uint32(16).uint64(message.batchTimeout);
        }
        for (const v of message.transactions) {
            exports.OutgoingTransferTx.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.block !== "0") {
            writer.uint32(40).uint64(message.block);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutgoingTxBatch();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.batchTimeout = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.transactions.push(exports.OutgoingTransferTx.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.tokenContract = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.block = longToString(reader.uint64());
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
            batchTimeout: isSet(object.batchTimeout) ? String(object.batchTimeout) : "0",
            transactions: Array.isArray(object === null || object === void 0 ? void 0 : object.transactions)
                ? object.transactions.map((e) => exports.OutgoingTransferTx.fromJSON(e))
                : [],
            tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
            block: isSet(object.block) ? String(object.block) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.batchNonce !== undefined && (obj.batchNonce = message.batchNonce);
        message.batchTimeout !== undefined && (obj.batchTimeout = message.batchTimeout);
        if (message.transactions) {
            obj.transactions = message.transactions.map((e) => e ? exports.OutgoingTransferTx.toJSON(e) : undefined);
        }
        else {
            obj.transactions = [];
        }
        message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
        message.block !== undefined && (obj.block = message.block);
        return obj;
    },
    create(base) {
        return exports.OutgoingTxBatch.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseOutgoingTxBatch();
        message.batchNonce = (_a = object.batchNonce) !== null && _a !== void 0 ? _a : "0";
        message.batchTimeout = (_b = object.batchTimeout) !== null && _b !== void 0 ? _b : "0";
        message.transactions = ((_c = object.transactions) === null || _c === void 0 ? void 0 : _c.map((e) => exports.OutgoingTransferTx.fromPartial(e))) || [];
        message.tokenContract = (_d = object.tokenContract) !== null && _d !== void 0 ? _d : "";
        message.block = (_e = object.block) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
function createBaseOutgoingTransferTx() {
    return { id: "0", sender: "", destAddress: "", erc20Token: undefined, erc20Fee: undefined };
}
exports.OutgoingTransferTx = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(8).uint64(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.destAddress !== "") {
            writer.uint32(26).string(message.destAddress);
        }
        if (message.erc20Token !== undefined) {
            attestation_1.ERC20Token.encode(message.erc20Token, writer.uint32(34).fork()).ldelim();
        }
        if (message.erc20Fee !== undefined) {
            attestation_1.ERC20Token.encode(message.erc20Fee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutgoingTransferTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = longToString(reader.uint64());
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
                    message.destAddress = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.erc20Token = attestation_1.ERC20Token.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.erc20Fee = attestation_1.ERC20Token.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            destAddress: isSet(object.destAddress) ? String(object.destAddress) : "",
            erc20Token: isSet(object.erc20Token) ? attestation_1.ERC20Token.fromJSON(object.erc20Token) : undefined,
            erc20Fee: isSet(object.erc20Fee) ? attestation_1.ERC20Token.fromJSON(object.erc20Fee) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.sender !== undefined && (obj.sender = message.sender);
        message.destAddress !== undefined && (obj.destAddress = message.destAddress);
        message.erc20Token !== undefined &&
            (obj.erc20Token = message.erc20Token ? attestation_1.ERC20Token.toJSON(message.erc20Token) : undefined);
        message.erc20Fee !== undefined &&
            (obj.erc20Fee = message.erc20Fee ? attestation_1.ERC20Token.toJSON(message.erc20Fee) : undefined);
        return obj;
    },
    create(base) {
        return exports.OutgoingTransferTx.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseOutgoingTransferTx();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.sender = (_b = object.sender) !== null && _b !== void 0 ? _b : "";
        message.destAddress = (_c = object.destAddress) !== null && _c !== void 0 ? _c : "";
        message.erc20Token = (object.erc20Token !== undefined && object.erc20Token !== null)
            ? attestation_1.ERC20Token.fromPartial(object.erc20Token)
            : undefined;
        message.erc20Fee = (object.erc20Fee !== undefined && object.erc20Fee !== null)
            ? attestation_1.ERC20Token.fromPartial(object.erc20Fee)
            : undefined;
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
