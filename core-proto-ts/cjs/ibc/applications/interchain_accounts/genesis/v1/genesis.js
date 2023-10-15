"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisteredInterchainAccount = exports.ActiveChannel = exports.HostGenesisState = exports.ControllerGenesisState = exports.GenesisState = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const controller_1 = require("../../controller/v1/controller");
const host_1 = require("../../host/v1/host");
function createBaseGenesisState() {
    return { controllerGenesisState: undefined, hostGenesisState: undefined };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.controllerGenesisState !== undefined) {
            exports.ControllerGenesisState.encode(message.controllerGenesisState, writer.uint32(10).fork()).ldelim();
        }
        if (message.hostGenesisState !== undefined) {
            exports.HostGenesisState.encode(message.hostGenesisState, writer.uint32(18).fork()).ldelim();
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
                    message.controllerGenesisState = exports.ControllerGenesisState.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.hostGenesisState = exports.HostGenesisState.decode(reader, reader.uint32());
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
            controllerGenesisState: isSet(object.controllerGenesisState)
                ? exports.ControllerGenesisState.fromJSON(object.controllerGenesisState)
                : undefined,
            hostGenesisState: isSet(object.hostGenesisState) ? exports.HostGenesisState.fromJSON(object.hostGenesisState) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.controllerGenesisState !== undefined && (obj.controllerGenesisState = message.controllerGenesisState
            ? exports.ControllerGenesisState.toJSON(message.controllerGenesisState)
            : undefined);
        message.hostGenesisState !== undefined &&
            (obj.hostGenesisState = message.hostGenesisState ? exports.HostGenesisState.toJSON(message.hostGenesisState) : undefined);
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.controllerGenesisState =
            (object.controllerGenesisState !== undefined && object.controllerGenesisState !== null)
                ? exports.ControllerGenesisState.fromPartial(object.controllerGenesisState)
                : undefined;
        message.hostGenesisState = (object.hostGenesisState !== undefined && object.hostGenesisState !== null)
            ? exports.HostGenesisState.fromPartial(object.hostGenesisState)
            : undefined;
        return message;
    },
};
function createBaseControllerGenesisState() {
    return { activeChannels: [], interchainAccounts: [], ports: [], params: undefined };
}
exports.ControllerGenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.activeChannels) {
            exports.ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.interchainAccounts) {
            exports.RegisteredInterchainAccount.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.ports) {
            writer.uint32(26).string(v);
        }
        if (message.params !== undefined) {
            controller_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseControllerGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.activeChannels.push(exports.ActiveChannel.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.interchainAccounts.push(exports.RegisteredInterchainAccount.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.ports.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.params = controller_1.Params.decode(reader, reader.uint32());
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
            activeChannels: Array.isArray(object === null || object === void 0 ? void 0 : object.activeChannels)
                ? object.activeChannels.map((e) => exports.ActiveChannel.fromJSON(e))
                : [],
            interchainAccounts: Array.isArray(object === null || object === void 0 ? void 0 : object.interchainAccounts)
                ? object.interchainAccounts.map((e) => exports.RegisteredInterchainAccount.fromJSON(e))
                : [],
            ports: Array.isArray(object === null || object === void 0 ? void 0 : object.ports) ? object.ports.map((e) => String(e)) : [],
            params: isSet(object.params) ? controller_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.activeChannels) {
            obj.activeChannels = message.activeChannels.map((e) => e ? exports.ActiveChannel.toJSON(e) : undefined);
        }
        else {
            obj.activeChannels = [];
        }
        if (message.interchainAccounts) {
            obj.interchainAccounts = message.interchainAccounts.map((e) => e ? exports.RegisteredInterchainAccount.toJSON(e) : undefined);
        }
        else {
            obj.interchainAccounts = [];
        }
        if (message.ports) {
            obj.ports = message.ports.map((e) => e);
        }
        else {
            obj.ports = [];
        }
        message.params !== undefined && (obj.params = message.params ? controller_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.ControllerGenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseControllerGenesisState();
        message.activeChannels = ((_a = object.activeChannels) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ActiveChannel.fromPartial(e))) || [];
        message.interchainAccounts = ((_b = object.interchainAccounts) === null || _b === void 0 ? void 0 : _b.map((e) => exports.RegisteredInterchainAccount.fromPartial(e))) ||
            [];
        message.ports = ((_c = object.ports) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.params = (object.params !== undefined && object.params !== null)
            ? controller_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseHostGenesisState() {
    return { activeChannels: [], interchainAccounts: [], port: "", params: undefined };
}
exports.HostGenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.activeChannels) {
            exports.ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.interchainAccounts) {
            exports.RegisteredInterchainAccount.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.port !== "") {
            writer.uint32(26).string(message.port);
        }
        if (message.params !== undefined) {
            host_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHostGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.activeChannels.push(exports.ActiveChannel.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.interchainAccounts.push(exports.RegisteredInterchainAccount.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.port = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.params = host_1.Params.decode(reader, reader.uint32());
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
            activeChannels: Array.isArray(object === null || object === void 0 ? void 0 : object.activeChannels)
                ? object.activeChannels.map((e) => exports.ActiveChannel.fromJSON(e))
                : [],
            interchainAccounts: Array.isArray(object === null || object === void 0 ? void 0 : object.interchainAccounts)
                ? object.interchainAccounts.map((e) => exports.RegisteredInterchainAccount.fromJSON(e))
                : [],
            port: isSet(object.port) ? String(object.port) : "",
            params: isSet(object.params) ? host_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.activeChannels) {
            obj.activeChannels = message.activeChannels.map((e) => e ? exports.ActiveChannel.toJSON(e) : undefined);
        }
        else {
            obj.activeChannels = [];
        }
        if (message.interchainAccounts) {
            obj.interchainAccounts = message.interchainAccounts.map((e) => e ? exports.RegisteredInterchainAccount.toJSON(e) : undefined);
        }
        else {
            obj.interchainAccounts = [];
        }
        message.port !== undefined && (obj.port = message.port);
        message.params !== undefined && (obj.params = message.params ? host_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.HostGenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseHostGenesisState();
        message.activeChannels = ((_a = object.activeChannels) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ActiveChannel.fromPartial(e))) || [];
        message.interchainAccounts = ((_b = object.interchainAccounts) === null || _b === void 0 ? void 0 : _b.map((e) => exports.RegisteredInterchainAccount.fromPartial(e))) ||
            [];
        message.port = (_c = object.port) !== null && _c !== void 0 ? _c : "";
        message.params = (object.params !== undefined && object.params !== null)
            ? host_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseActiveChannel() {
    return { connectionId: "", portId: "", channelId: "", isMiddlewareEnabled: false };
}
exports.ActiveChannel = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(26).string(message.channelId);
        }
        if (message.isMiddlewareEnabled === true) {
            writer.uint32(32).bool(message.isMiddlewareEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.connectionId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.portId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.channelId = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isMiddlewareEnabled = reader.bool();
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
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            isMiddlewareEnabled: isSet(object.isMiddlewareEnabled) ? Boolean(object.isMiddlewareEnabled) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.isMiddlewareEnabled !== undefined && (obj.isMiddlewareEnabled = message.isMiddlewareEnabled);
        return obj;
    },
    create(base) {
        return exports.ActiveChannel.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseActiveChannel();
        message.connectionId = (_a = object.connectionId) !== null && _a !== void 0 ? _a : "";
        message.portId = (_b = object.portId) !== null && _b !== void 0 ? _b : "";
        message.channelId = (_c = object.channelId) !== null && _c !== void 0 ? _c : "";
        message.isMiddlewareEnabled = (_d = object.isMiddlewareEnabled) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseRegisteredInterchainAccount() {
    return { connectionId: "", portId: "", accountAddress: "" };
}
exports.RegisteredInterchainAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(26).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisteredInterchainAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.connectionId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.portId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.accountAddress = reader.string();
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
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            portId: isSet(object.portId) ? String(object.portId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.portId !== undefined && (obj.portId = message.portId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return exports.RegisteredInterchainAccount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRegisteredInterchainAccount();
        message.connectionId = (_a = object.connectionId) !== null && _a !== void 0 ? _a : "";
        message.portId = (_b = object.portId) !== null && _b !== void 0 ? _b : "";
        message.accountAddress = (_c = object.accountAddress) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
