"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketSequence = exports.GenesisState = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const channel_1 = require("./channel");
function createBaseGenesisState() {
    return {
        channels: [],
        acknowledgements: [],
        commitments: [],
        receipts: [],
        sendSequences: [],
        recvSequences: [],
        ackSequences: [],
        nextChannelSequence: "0",
    };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.channels) {
            channel_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.acknowledgements) {
            channel_1.PacketState.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.commitments) {
            channel_1.PacketState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.receipts) {
            channel_1.PacketState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.sendSequences) {
            exports.PacketSequence.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.recvSequences) {
            exports.PacketSequence.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.ackSequences) {
            exports.PacketSequence.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.nextChannelSequence !== "0") {
            writer.uint32(64).uint64(message.nextChannelSequence);
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
                    message.channels.push(channel_1.IdentifiedChannel.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.acknowledgements.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.commitments.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.receipts.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.sendSequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.recvSequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.ackSequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.nextChannelSequence = longToString(reader.uint64());
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
            channels: Array.isArray(object === null || object === void 0 ? void 0 : object.channels) ? object.channels.map((e) => channel_1.IdentifiedChannel.fromJSON(e)) : [],
            acknowledgements: Array.isArray(object === null || object === void 0 ? void 0 : object.acknowledgements)
                ? object.acknowledgements.map((e) => channel_1.PacketState.fromJSON(e))
                : [],
            commitments: Array.isArray(object === null || object === void 0 ? void 0 : object.commitments)
                ? object.commitments.map((e) => channel_1.PacketState.fromJSON(e))
                : [],
            receipts: Array.isArray(object === null || object === void 0 ? void 0 : object.receipts) ? object.receipts.map((e) => channel_1.PacketState.fromJSON(e)) : [],
            sendSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sendSequences)
                ? object.sendSequences.map((e) => exports.PacketSequence.fromJSON(e))
                : [],
            recvSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.recvSequences)
                ? object.recvSequences.map((e) => exports.PacketSequence.fromJSON(e))
                : [],
            ackSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.ackSequences)
                ? object.ackSequences.map((e) => exports.PacketSequence.fromJSON(e))
                : [],
            nextChannelSequence: isSet(object.nextChannelSequence) ? String(object.nextChannelSequence) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map((e) => e ? channel_1.IdentifiedChannel.toJSON(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map((e) => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        if (message.commitments) {
            obj.commitments = message.commitments.map((e) => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map((e) => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        if (message.sendSequences) {
            obj.sendSequences = message.sendSequences.map((e) => e ? exports.PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.sendSequences = [];
        }
        if (message.recvSequences) {
            obj.recvSequences = message.recvSequences.map((e) => e ? exports.PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.recvSequences = [];
        }
        if (message.ackSequences) {
            obj.ackSequences = message.ackSequences.map((e) => e ? exports.PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.ackSequences = [];
        }
        message.nextChannelSequence !== undefined && (obj.nextChannelSequence = message.nextChannelSequence);
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseGenesisState();
        message.channels = ((_a = object.channels) === null || _a === void 0 ? void 0 : _a.map((e) => channel_1.IdentifiedChannel.fromPartial(e))) || [];
        message.acknowledgements = ((_b = object.acknowledgements) === null || _b === void 0 ? void 0 : _b.map((e) => channel_1.PacketState.fromPartial(e))) || [];
        message.commitments = ((_c = object.commitments) === null || _c === void 0 ? void 0 : _c.map((e) => channel_1.PacketState.fromPartial(e))) || [];
        message.receipts = ((_d = object.receipts) === null || _d === void 0 ? void 0 : _d.map((e) => channel_1.PacketState.fromPartial(e))) || [];
        message.sendSequences = ((_e = object.sendSequences) === null || _e === void 0 ? void 0 : _e.map((e) => exports.PacketSequence.fromPartial(e))) || [];
        message.recvSequences = ((_f = object.recvSequences) === null || _f === void 0 ? void 0 : _f.map((e) => exports.PacketSequence.fromPartial(e))) || [];
        message.ackSequences = ((_g = object.ackSequences) === null || _g === void 0 ? void 0 : _g.map((e) => exports.PacketSequence.fromPartial(e))) || [];
        message.nextChannelSequence = (_h = object.nextChannelSequence) !== null && _h !== void 0 ? _h : "0";
        return message;
    },
};
function createBasePacketSequence() {
    return { portId: "", channelId: "", sequence: "0" };
}
exports.PacketSequence = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== "0") {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.portId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.channelId = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.sequence = longToString(reader.uint64());
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    create(base) {
        return exports.PacketSequence.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePacketSequence();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.sequence = (_c = object.sequence) !== null && _c !== void 0 ? _c : "0";
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
