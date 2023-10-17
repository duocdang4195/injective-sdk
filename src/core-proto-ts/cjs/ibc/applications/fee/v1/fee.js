"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifiedPacketFees = exports.PacketFees = exports.PacketFee = exports.Fee = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const channel_1 = require("../../../core/channel/v1/channel");
function createBaseFee() {
    return { recvFee: [], ackFee: [], timeoutFee: [] };
}
exports.Fee = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.recvFee) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.ackFee) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.timeoutFee) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.recvFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ackFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.timeoutFee.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            recvFee: Array.isArray(object === null || object === void 0 ? void 0 : object.recvFee) ? object.recvFee.map((e) => coin_1.Coin.fromJSON(e)) : [],
            ackFee: Array.isArray(object === null || object === void 0 ? void 0 : object.ackFee) ? object.ackFee.map((e) => coin_1.Coin.fromJSON(e)) : [],
            timeoutFee: Array.isArray(object === null || object === void 0 ? void 0 : object.timeoutFee) ? object.timeoutFee.map((e) => coin_1.Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.recvFee) {
            obj.recvFee = message.recvFee.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.recvFee = [];
        }
        if (message.ackFee) {
            obj.ackFee = message.ackFee.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.ackFee = [];
        }
        if (message.timeoutFee) {
            obj.timeoutFee = message.timeoutFee.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.timeoutFee = [];
        }
        return obj;
    },
    create(base) {
        return exports.Fee.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseFee();
        message.recvFee = ((_a = object.recvFee) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.ackFee = ((_b = object.ackFee) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.timeoutFee = ((_c = object.timeoutFee) === null || _c === void 0 ? void 0 : _c.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBasePacketFee() {
    return { fee: undefined, refundAddress: "", relayers: [] };
}
exports.PacketFee = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fee !== undefined) {
            exports.Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
        }
        if (message.refundAddress !== "") {
            writer.uint32(18).string(message.refundAddress);
        }
        for (const v of message.relayers) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fee = exports.Fee.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.refundAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.relayers.push(reader.string());
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
            fee: isSet(object.fee) ? exports.Fee.fromJSON(object.fee) : undefined,
            refundAddress: isSet(object.refundAddress) ? String(object.refundAddress) : "",
            relayers: Array.isArray(object === null || object === void 0 ? void 0 : object.relayers) ? object.relayers.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.fee !== undefined && (obj.fee = message.fee ? exports.Fee.toJSON(message.fee) : undefined);
        message.refundAddress !== undefined && (obj.refundAddress = message.refundAddress);
        if (message.relayers) {
            obj.relayers = message.relayers.map((e) => e);
        }
        else {
            obj.relayers = [];
        }
        return obj;
    },
    create(base) {
        return exports.PacketFee.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePacketFee();
        message.fee = (object.fee !== undefined && object.fee !== null) ? exports.Fee.fromPartial(object.fee) : undefined;
        message.refundAddress = (_a = object.refundAddress) !== null && _a !== void 0 ? _a : "";
        message.relayers = ((_b = object.relayers) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBasePacketFees() {
    return { packetFees: [] };
}
exports.PacketFees = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.packetFees) {
            exports.PacketFee.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketFees();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packetFees.push(exports.PacketFee.decode(reader, reader.uint32()));
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
            packetFees: Array.isArray(object === null || object === void 0 ? void 0 : object.packetFees) ? object.packetFees.map((e) => exports.PacketFee.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.packetFees) {
            obj.packetFees = message.packetFees.map((e) => e ? exports.PacketFee.toJSON(e) : undefined);
        }
        else {
            obj.packetFees = [];
        }
        return obj;
    },
    create(base) {
        return exports.PacketFees.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePacketFees();
        message.packetFees = ((_a = object.packetFees) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PacketFee.fromPartial(e))) || [];
        return message;
    },
};
function createBaseIdentifiedPacketFees() {
    return { packetId: undefined, packetFees: [] };
}
exports.IdentifiedPacketFees = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.packetId !== undefined) {
            channel_1.PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.packetFees) {
            exports.PacketFee.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedPacketFees();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packetId = channel_1.PacketId.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.packetFees.push(exports.PacketFee.decode(reader, reader.uint32()));
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
            packetId: isSet(object.packetId) ? channel_1.PacketId.fromJSON(object.packetId) : undefined,
            packetFees: Array.isArray(object === null || object === void 0 ? void 0 : object.packetFees) ? object.packetFees.map((e) => exports.PacketFee.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.packetId !== undefined && (obj.packetId = message.packetId ? channel_1.PacketId.toJSON(message.packetId) : undefined);
        if (message.packetFees) {
            obj.packetFees = message.packetFees.map((e) => e ? exports.PacketFee.toJSON(e) : undefined);
        }
        else {
            obj.packetFees = [];
        }
        return obj;
    },
    create(base) {
        return exports.IdentifiedPacketFees.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseIdentifiedPacketFees();
        message.packetId = (object.packetId !== undefined && object.packetId !== null)
            ? channel_1.PacketId.fromPartial(object.packetId)
            : undefined;
        message.packetFees = ((_a = object.packetFees) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PacketFee.fromPartial(e))) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
