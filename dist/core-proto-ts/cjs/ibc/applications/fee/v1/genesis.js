"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForwardRelayerAddress = exports.RegisteredCounterpartyPayee = exports.RegisteredPayee = exports.FeeEnabledChannel = exports.GenesisState = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const channel_1 = require("../../../core/channel/v1/channel");
const fee_1 = require("./fee");
function createBaseGenesisState() {
    return {
        identifiedFees: [],
        feeEnabledChannels: [],
        registeredPayees: [],
        registeredCounterpartyPayees: [],
        forwardRelayers: [],
    };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.identifiedFees) {
            fee_1.IdentifiedPacketFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.feeEnabledChannels) {
            exports.FeeEnabledChannel.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.registeredPayees) {
            exports.RegisteredPayee.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.registeredCounterpartyPayees) {
            exports.RegisteredCounterpartyPayee.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.forwardRelayers) {
            exports.ForwardRelayerAddress.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.identifiedFees.push(fee_1.IdentifiedPacketFees.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.feeEnabledChannels.push(exports.FeeEnabledChannel.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.registeredPayees.push(exports.RegisteredPayee.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.registeredCounterpartyPayees.push(exports.RegisteredCounterpartyPayee.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.forwardRelayers.push(exports.ForwardRelayerAddress.decode(reader, reader.uint32()));
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
            identifiedFees: Array.isArray(object === null || object === void 0 ? void 0 : object.identifiedFees)
                ? object.identifiedFees.map((e) => fee_1.IdentifiedPacketFees.fromJSON(e))
                : [],
            feeEnabledChannels: Array.isArray(object === null || object === void 0 ? void 0 : object.feeEnabledChannels)
                ? object.feeEnabledChannels.map((e) => exports.FeeEnabledChannel.fromJSON(e))
                : [],
            registeredPayees: Array.isArray(object === null || object === void 0 ? void 0 : object.registeredPayees)
                ? object.registeredPayees.map((e) => exports.RegisteredPayee.fromJSON(e))
                : [],
            registeredCounterpartyPayees: Array.isArray(object === null || object === void 0 ? void 0 : object.registeredCounterpartyPayees)
                ? object.registeredCounterpartyPayees.map((e) => exports.RegisteredCounterpartyPayee.fromJSON(e))
                : [],
            forwardRelayers: Array.isArray(object === null || object === void 0 ? void 0 : object.forwardRelayers)
                ? object.forwardRelayers.map((e) => exports.ForwardRelayerAddress.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.identifiedFees) {
            obj.identifiedFees = message.identifiedFees.map((e) => e ? fee_1.IdentifiedPacketFees.toJSON(e) : undefined);
        }
        else {
            obj.identifiedFees = [];
        }
        if (message.feeEnabledChannels) {
            obj.feeEnabledChannels = message.feeEnabledChannels.map((e) => e ? exports.FeeEnabledChannel.toJSON(e) : undefined);
        }
        else {
            obj.feeEnabledChannels = [];
        }
        if (message.registeredPayees) {
            obj.registeredPayees = message.registeredPayees.map((e) => e ? exports.RegisteredPayee.toJSON(e) : undefined);
        }
        else {
            obj.registeredPayees = [];
        }
        if (message.registeredCounterpartyPayees) {
            obj.registeredCounterpartyPayees = message.registeredCounterpartyPayees.map((e) => e ? exports.RegisteredCounterpartyPayee.toJSON(e) : undefined);
        }
        else {
            obj.registeredCounterpartyPayees = [];
        }
        if (message.forwardRelayers) {
            obj.forwardRelayers = message.forwardRelayers.map((e) => e ? exports.ForwardRelayerAddress.toJSON(e) : undefined);
        }
        else {
            obj.forwardRelayers = [];
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseGenesisState();
        message.identifiedFees = ((_a = object.identifiedFees) === null || _a === void 0 ? void 0 : _a.map((e) => fee_1.IdentifiedPacketFees.fromPartial(e))) || [];
        message.feeEnabledChannels = ((_b = object.feeEnabledChannels) === null || _b === void 0 ? void 0 : _b.map((e) => exports.FeeEnabledChannel.fromPartial(e))) || [];
        message.registeredPayees = ((_c = object.registeredPayees) === null || _c === void 0 ? void 0 : _c.map((e) => exports.RegisteredPayee.fromPartial(e))) || [];
        message.registeredCounterpartyPayees =
            ((_d = object.registeredCounterpartyPayees) === null || _d === void 0 ? void 0 : _d.map((e) => exports.RegisteredCounterpartyPayee.fromPartial(e))) || [];
        message.forwardRelayers = ((_e = object.forwardRelayers) === null || _e === void 0 ? void 0 : _e.map((e) => exports.ForwardRelayerAddress.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFeeEnabledChannel() {
    return { portId: "", channelId: "" };
}
exports.FeeEnabledChannel = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeEnabledChannel();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    create(base) {
        return exports.FeeEnabledChannel.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFeeEnabledChannel();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRegisteredPayee() {
    return { channelId: "", relayer: "", payee: "" };
}
exports.RegisteredPayee = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        if (message.payee !== "") {
            writer.uint32(26).string(message.payee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisteredPayee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.channelId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.relayer = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.payee = reader.string();
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
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
            payee: isSet(object.payee) ? String(object.payee) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.relayer !== undefined && (obj.relayer = message.relayer);
        message.payee !== undefined && (obj.payee = message.payee);
        return obj;
    },
    create(base) {
        return exports.RegisteredPayee.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRegisteredPayee();
        message.channelId = (_a = object.channelId) !== null && _a !== void 0 ? _a : "";
        message.relayer = (_b = object.relayer) !== null && _b !== void 0 ? _b : "";
        message.payee = (_c = object.payee) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRegisteredCounterpartyPayee() {
    return { channelId: "", relayer: "", counterpartyPayee: "" };
}
exports.RegisteredCounterpartyPayee = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        if (message.counterpartyPayee !== "") {
            writer.uint32(26).string(message.counterpartyPayee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisteredCounterpartyPayee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.channelId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.relayer = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.counterpartyPayee = reader.string();
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
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
            counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.relayer !== undefined && (obj.relayer = message.relayer);
        message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
        return obj;
    },
    create(base) {
        return exports.RegisteredCounterpartyPayee.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRegisteredCounterpartyPayee();
        message.channelId = (_a = object.channelId) !== null && _a !== void 0 ? _a : "";
        message.relayer = (_b = object.relayer) !== null && _b !== void 0 ? _b : "";
        message.counterpartyPayee = (_c = object.counterpartyPayee) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseForwardRelayerAddress() {
    return { address: "", packetId: undefined };
}
exports.ForwardRelayerAddress = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.packetId !== undefined) {
            channel_1.PacketId.encode(message.packetId, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseForwardRelayerAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.packetId = channel_1.PacketId.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? String(object.address) : "",
            packetId: isSet(object.packetId) ? channel_1.PacketId.fromJSON(object.packetId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.packetId !== undefined && (obj.packetId = message.packetId ? channel_1.PacketId.toJSON(message.packetId) : undefined);
        return obj;
    },
    create(base) {
        return exports.ForwardRelayerAddress.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseForwardRelayerAddress();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.packetId = (object.packetId !== undefined && object.packetId !== null)
            ? channel_1.PacketId.fromPartial(object.packetId)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
