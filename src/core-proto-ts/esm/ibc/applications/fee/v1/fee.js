/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { PacketId } from "../../../core/channel/v1/channel";
function createBaseFee() {
    return { recvFee: [], ackFee: [], timeoutFee: [] };
}
export const Fee = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.recvFee) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.ackFee) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.timeoutFee) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.recvFee.push(Coin.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ackFee.push(Coin.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.timeoutFee.push(Coin.decode(reader, reader.uint32()));
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
            recvFee: Array.isArray(object === null || object === void 0 ? void 0 : object.recvFee) ? object.recvFee.map((e) => Coin.fromJSON(e)) : [],
            ackFee: Array.isArray(object === null || object === void 0 ? void 0 : object.ackFee) ? object.ackFee.map((e) => Coin.fromJSON(e)) : [],
            timeoutFee: Array.isArray(object === null || object === void 0 ? void 0 : object.timeoutFee) ? object.timeoutFee.map((e) => Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.recvFee) {
            obj.recvFee = message.recvFee.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.recvFee = [];
        }
        if (message.ackFee) {
            obj.ackFee = message.ackFee.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.ackFee = [];
        }
        if (message.timeoutFee) {
            obj.timeoutFee = message.timeoutFee.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.timeoutFee = [];
        }
        return obj;
    },
    create(base) {
        return Fee.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseFee();
        message.recvFee = ((_a = object.recvFee) === null || _a === void 0 ? void 0 : _a.map((e) => Coin.fromPartial(e))) || [];
        message.ackFee = ((_b = object.ackFee) === null || _b === void 0 ? void 0 : _b.map((e) => Coin.fromPartial(e))) || [];
        message.timeoutFee = ((_c = object.timeoutFee) === null || _c === void 0 ? void 0 : _c.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBasePacketFee() {
    return { fee: undefined, refundAddress: "", relayers: [] };
}
export const PacketFee = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fee !== undefined) {
            Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fee = Fee.decode(reader, reader.uint32());
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
            fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
            refundAddress: isSet(object.refundAddress) ? String(object.refundAddress) : "",
            relayers: Array.isArray(object === null || object === void 0 ? void 0 : object.relayers) ? object.relayers.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
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
        return PacketFee.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePacketFee();
        message.fee = (object.fee !== undefined && object.fee !== null) ? Fee.fromPartial(object.fee) : undefined;
        message.refundAddress = (_a = object.refundAddress) !== null && _a !== void 0 ? _a : "";
        message.relayers = ((_b = object.relayers) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBasePacketFees() {
    return { packetFees: [] };
}
export const PacketFees = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.packetFees) {
            PacketFee.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketFees();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packetFees.push(PacketFee.decode(reader, reader.uint32()));
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
            packetFees: Array.isArray(object === null || object === void 0 ? void 0 : object.packetFees) ? object.packetFees.map((e) => PacketFee.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.packetFees) {
            obj.packetFees = message.packetFees.map((e) => e ? PacketFee.toJSON(e) : undefined);
        }
        else {
            obj.packetFees = [];
        }
        return obj;
    },
    create(base) {
        return PacketFees.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePacketFees();
        message.packetFees = ((_a = object.packetFees) === null || _a === void 0 ? void 0 : _a.map((e) => PacketFee.fromPartial(e))) || [];
        return message;
    },
};
function createBaseIdentifiedPacketFees() {
    return { packetId: undefined, packetFees: [] };
}
export const IdentifiedPacketFees = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packetId !== undefined) {
            PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.packetFees) {
            PacketFee.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedPacketFees();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packetId = PacketId.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.packetFees.push(PacketFee.decode(reader, reader.uint32()));
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
            packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined,
            packetFees: Array.isArray(object === null || object === void 0 ? void 0 : object.packetFees) ? object.packetFees.map((e) => PacketFee.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
        if (message.packetFees) {
            obj.packetFees = message.packetFees.map((e) => e ? PacketFee.toJSON(e) : undefined);
        }
        else {
            obj.packetFees = [];
        }
        return obj;
    },
    create(base) {
        return IdentifiedPacketFees.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseIdentifiedPacketFees();
        message.packetId = (object.packetId !== undefined && object.packetId !== null)
            ? PacketId.fromPartial(object.packetId)
            : undefined;
        message.packetFees = ((_a = object.packetFees) === null || _a === void 0 ? void 0 : _a.map((e) => PacketFee.fromPartial(e))) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
