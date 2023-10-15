"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.InjectiveMetaRPCTokenMetadataDesc = exports.InjectiveMetaRPCStreamKeepaliveDesc = exports.InjectiveMetaRPCInfoDesc = exports.InjectiveMetaRPCVersionDesc = exports.InjectiveMetaRPCPingDesc = exports.InjectiveMetaRPCDesc = exports.InjectiveMetaRPCClientImpl = exports.TokenMetadataElement = exports.TokenMetadataResponse = exports.TokenMetadataRequest = exports.StreamKeepaliveResponse = exports.StreamKeepaliveRequest = exports.InfoResponse_BuildEntry = exports.InfoResponse = exports.InfoRequest = exports.VersionResponse_BuildEntry = exports.VersionResponse = exports.VersionRequest = exports.PingResponse = exports.PingRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.protobufPackage = "injective_meta_rpc";
function createBasePingRequest() {
    return {};
}
exports.PingRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePingRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
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
        return exports.PingRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBasePingRequest();
        return message;
    },
};
function createBasePingResponse() {
    return {};
}
exports.PingResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
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
        return exports.PingResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBasePingResponse();
        return message;
    },
};
function createBaseVersionRequest() {
    return {};
}
exports.VersionRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
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
        return exports.VersionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseVersionRequest();
        return message;
    },
};
function createBaseVersionResponse() {
    return { version: "", build: {} };
}
exports.VersionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        Object.entries(message.build).forEach(([key, value]) => {
            exports.VersionResponse_BuildEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    const entry2 = exports.VersionResponse_BuildEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.build[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            version: isSet(object.version) ? String(object.version) : "",
            build: isObject(object.build)
                ? Object.entries(object.build).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        obj.build = {};
        if (message.build) {
            Object.entries(message.build).forEach(([k, v]) => {
                obj.build[k] = v;
            });
        }
        return obj;
    },
    create(base) {
        return exports.VersionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseVersionResponse();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.build = Object.entries((_b = object.build) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseVersionResponse_BuildEntry() {
    return { key: "", value: "" };
}
exports.VersionResponse_BuildEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionResponse_BuildEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return exports.VersionResponse_BuildEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseVersionResponse_BuildEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseInfoRequest() {
    return { timestamp: "0" };
}
exports.InfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== "0") {
            writer.uint32(8).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return exports.InfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseInfoRequest();
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseInfoResponse() {
    return { timestamp: "0", serverTime: "0", version: "", build: {}, region: "" };
}
exports.InfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== "0") {
            writer.uint32(8).sint64(message.timestamp);
        }
        if (message.serverTime !== "0") {
            writer.uint32(16).sint64(message.serverTime);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        Object.entries(message.build).forEach(([key, value]) => {
            exports.InfoResponse_BuildEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.region !== "") {
            writer.uint32(42).string(message.region);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = longToString(reader.sint64());
                    break;
                case 2:
                    message.serverTime = longToString(reader.sint64());
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    const entry4 = exports.InfoResponse_BuildEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.build[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.region = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
            serverTime: isSet(object.serverTime) ? String(object.serverTime) : "0",
            version: isSet(object.version) ? String(object.version) : "",
            build: isObject(object.build)
                ? Object.entries(object.build).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            region: isSet(object.region) ? String(object.region) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.serverTime !== undefined && (obj.serverTime = message.serverTime);
        message.version !== undefined && (obj.version = message.version);
        obj.build = {};
        if (message.build) {
            Object.entries(message.build).forEach(([k, v]) => {
                obj.build[k] = v;
            });
        }
        message.region !== undefined && (obj.region = message.region);
        return obj;
    },
    create(base) {
        return exports.InfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseInfoResponse();
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : "0";
        message.serverTime = (_b = object.serverTime) !== null && _b !== void 0 ? _b : "0";
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : "";
        message.build = Object.entries((_d = object.build) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.region = (_e = object.region) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseInfoResponse_BuildEntry() {
    return { key: "", value: "" };
}
exports.InfoResponse_BuildEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInfoResponse_BuildEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return exports.InfoResponse_BuildEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseInfoResponse_BuildEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseStreamKeepaliveRequest() {
    return {};
}
exports.StreamKeepaliveRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamKeepaliveRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
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
        return exports.StreamKeepaliveRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseStreamKeepaliveRequest();
        return message;
    },
};
function createBaseStreamKeepaliveResponse() {
    return { event: "", newEndpoint: "", timestamp: "0" };
}
exports.StreamKeepaliveResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.event !== "") {
            writer.uint32(10).string(message.event);
        }
        if (message.newEndpoint !== "") {
            writer.uint32(18).string(message.newEndpoint);
        }
        if (message.timestamp !== "0") {
            writer.uint32(24).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamKeepaliveResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.event = reader.string();
                    break;
                case 2:
                    message.newEndpoint = reader.string();
                    break;
                case 3:
                    message.timestamp = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            event: isSet(object.event) ? String(object.event) : "",
            newEndpoint: isSet(object.newEndpoint) ? String(object.newEndpoint) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.event !== undefined && (obj.event = message.event);
        message.newEndpoint !== undefined && (obj.newEndpoint = message.newEndpoint);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return exports.StreamKeepaliveResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseStreamKeepaliveResponse();
        message.event = (_a = object.event) !== null && _a !== void 0 ? _a : "";
        message.newEndpoint = (_b = object.newEndpoint) !== null && _b !== void 0 ? _b : "";
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseTokenMetadataRequest() {
    return { denoms: [] };
}
exports.TokenMetadataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { denoms: Array.isArray(object === null || object === void 0 ? void 0 : object.denoms) ? object.denoms.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map((e) => e);
        }
        else {
            obj.denoms = [];
        }
        return obj;
    },
    create(base) {
        return exports.TokenMetadataRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTokenMetadataRequest();
        message.denoms = ((_a = object.denoms) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseTokenMetadataResponse() {
    return { tokens: [] };
}
exports.TokenMetadataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.tokens) {
            exports.TokenMetadataElement.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokens.push(exports.TokenMetadataElement.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tokens: Array.isArray(object === null || object === void 0 ? void 0 : object.tokens) ? object.tokens.map((e) => exports.TokenMetadataElement.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tokens) {
            obj.tokens = message.tokens.map((e) => e ? exports.TokenMetadataElement.toJSON(e) : undefined);
        }
        else {
            obj.tokens = [];
        }
        return obj;
    },
    create(base) {
        return exports.TokenMetadataResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTokenMetadataResponse();
        message.tokens = ((_a = object.tokens) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TokenMetadataElement.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTokenMetadataElement() {
    return { ethereumAddress: "", coingeckoId: "", denom: "", name: "", symbol: "", decimals: 0, logo: "" };
}
exports.TokenMetadataElement = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ethereumAddress !== "") {
            writer.uint32(10).string(message.ethereumAddress);
        }
        if (message.coingeckoId !== "") {
            writer.uint32(18).string(message.coingeckoId);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(42).string(message.symbol);
        }
        if (message.decimals !== 0) {
            writer.uint32(48).sint32(message.decimals);
        }
        if (message.logo !== "") {
            writer.uint32(58).string(message.logo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenMetadataElement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ethereumAddress = reader.string();
                    break;
                case 2:
                    message.coingeckoId = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.symbol = reader.string();
                    break;
                case 6:
                    message.decimals = reader.sint32();
                    break;
                case 7:
                    message.logo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            ethereumAddress: isSet(object.ethereumAddress) ? String(object.ethereumAddress) : "",
            coingeckoId: isSet(object.coingeckoId) ? String(object.coingeckoId) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            name: isSet(object.name) ? String(object.name) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
            logo: isSet(object.logo) ? String(object.logo) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.ethereumAddress !== undefined && (obj.ethereumAddress = message.ethereumAddress);
        message.coingeckoId !== undefined && (obj.coingeckoId = message.coingeckoId);
        message.denom !== undefined && (obj.denom = message.denom);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.decimals !== undefined && (obj.decimals = Math.round(message.decimals));
        message.logo !== undefined && (obj.logo = message.logo);
        return obj;
    },
    create(base) {
        return exports.TokenMetadataElement.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseTokenMetadataElement();
        message.ethereumAddress = (_a = object.ethereumAddress) !== null && _a !== void 0 ? _a : "";
        message.coingeckoId = (_b = object.coingeckoId) !== null && _b !== void 0 ? _b : "";
        message.denom = (_c = object.denom) !== null && _c !== void 0 ? _c : "";
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.symbol = (_e = object.symbol) !== null && _e !== void 0 ? _e : "";
        message.decimals = (_f = object.decimals) !== null && _f !== void 0 ? _f : 0;
        message.logo = (_g = object.logo) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
class InjectiveMetaRPCClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Ping = this.Ping.bind(this);
        this.Version = this.Version.bind(this);
        this.Info = this.Info.bind(this);
        this.StreamKeepalive = this.StreamKeepalive.bind(this);
        this.TokenMetadata = this.TokenMetadata.bind(this);
    }
    Ping(request, metadata) {
        return this.rpc.unary(exports.InjectiveMetaRPCPingDesc, exports.PingRequest.fromPartial(request), metadata);
    }
    Version(request, metadata) {
        return this.rpc.unary(exports.InjectiveMetaRPCVersionDesc, exports.VersionRequest.fromPartial(request), metadata);
    }
    Info(request, metadata) {
        return this.rpc.unary(exports.InjectiveMetaRPCInfoDesc, exports.InfoRequest.fromPartial(request), metadata);
    }
    StreamKeepalive(request, metadata) {
        return this.rpc.invoke(exports.InjectiveMetaRPCStreamKeepaliveDesc, exports.StreamKeepaliveRequest.fromPartial(request), metadata);
    }
    TokenMetadata(request, metadata) {
        return this.rpc.unary(exports.InjectiveMetaRPCTokenMetadataDesc, exports.TokenMetadataRequest.fromPartial(request), metadata);
    }
}
exports.InjectiveMetaRPCClientImpl = InjectiveMetaRPCClientImpl;
exports.InjectiveMetaRPCDesc = { serviceName: "injective_meta_rpc.InjectiveMetaRPC" };
exports.InjectiveMetaRPCPingDesc = {
    methodName: "Ping",
    service: exports.InjectiveMetaRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.PingRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.PingResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveMetaRPCVersionDesc = {
    methodName: "Version",
    service: exports.InjectiveMetaRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.VersionRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.VersionResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveMetaRPCInfoDesc = {
    methodName: "Info",
    service: exports.InjectiveMetaRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.InfoRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.InfoResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveMetaRPCStreamKeepaliveDesc = {
    methodName: "StreamKeepalive",
    service: exports.InjectiveMetaRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return exports.StreamKeepaliveRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.StreamKeepaliveResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveMetaRPCTokenMetadataDesc = {
    methodName: "TokenMetadata",
    service: exports.InjectiveMetaRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.TokenMetadataRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.TokenMetadataResponse.decode(data);
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
    invoke(methodDesc, _request, metadata) {
        var _a;
        const upStreamCodes = this.options.upStreamRetryCodes || [];
        const DEFAULT_TIMEOUT_TIME = 3000;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new browser_headers_1.BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new rxjs_1.Observable((observer) => {
            const upStream = (() => {
                const client = grpc_web_1.grpc.invoke(methodDesc, {
                    host: this.host,
                    request,
                    transport: this.options.streamingTransport || this.options.transport,
                    metadata: maybeCombinedMetadata,
                    debug: this.options.debug,
                    onMessage: (next) => observer.next(next),
                    onEnd: (code, message, trailers) => {
                        if (code === 0) {
                            observer.complete();
                        }
                        else if (upStreamCodes.includes(code)) {
                            setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
                        }
                        else {
                            const err = new Error(message);
                            err.code = code;
                            err.metadata = trailers;
                            observer.error(err);
                        }
                    },
                });
                observer.add(() => client.close());
            });
            upStream();
        }).pipe((0, operators_1.share)());
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
function isObject(value) {
    return typeof value === "object" && value !== null;
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
