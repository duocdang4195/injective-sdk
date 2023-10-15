"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSetPythPrices = exports.SetCoinbasePriceEvent = exports.SetProviderPriceEvent = exports.SetPriceFeedPriceEvent = exports.EventBandIBCResponseTimeout = exports.EventBandIBCAckError = exports.EventBandIBCAckSuccess = exports.SetBandIBCPriceEvent = exports.SetBandPriceEvent = exports.SetChainlinkPriceEvent = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const oracle_1 = require("./oracle");
function createBaseSetChainlinkPriceEvent() {
    return { feedId: "", answer: "", timestamp: "0" };
}
exports.SetChainlinkPriceEvent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.answer !== "") {
            writer.uint32(18).string(message.answer);
        }
        if (message.timestamp !== "0") {
            writer.uint32(24).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetChainlinkPriceEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feedId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.answer = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.timestamp = longToString(reader.uint64());
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
            feedId: isSet(object.feedId) ? String(object.feedId) : "",
            answer: isSet(object.answer) ? String(object.answer) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        message.answer !== undefined && (obj.answer = message.answer);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return exports.SetChainlinkPriceEvent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSetChainlinkPriceEvent();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        message.answer = (_b = object.answer) !== null && _b !== void 0 ? _b : "";
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseSetBandPriceEvent() {
    return { relayer: "", symbol: "", price: "", resolveTime: "0", requestId: "0" };
}
exports.SetBandPriceEvent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.relayer !== "") {
            writer.uint32(10).string(message.relayer);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (message.price !== "") {
            writer.uint32(26).string(message.price);
        }
        if (message.resolveTime !== "0") {
            writer.uint32(32).uint64(message.resolveTime);
        }
        if (message.requestId !== "0") {
            writer.uint32(40).uint64(message.requestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetBandPriceEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.relayer = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.symbol = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.price = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.resolveTime = longToString(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.requestId = longToString(reader.uint64());
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
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            price: isSet(object.price) ? String(object.price) : "",
            resolveTime: isSet(object.resolveTime) ? String(object.resolveTime) : "0",
            requestId: isSet(object.requestId) ? String(object.requestId) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.relayer !== undefined && (obj.relayer = message.relayer);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.price !== undefined && (obj.price = message.price);
        message.resolveTime !== undefined && (obj.resolveTime = message.resolveTime);
        message.requestId !== undefined && (obj.requestId = message.requestId);
        return obj;
    },
    create(base) {
        return exports.SetBandPriceEvent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseSetBandPriceEvent();
        message.relayer = (_a = object.relayer) !== null && _a !== void 0 ? _a : "";
        message.symbol = (_b = object.symbol) !== null && _b !== void 0 ? _b : "";
        message.price = (_c = object.price) !== null && _c !== void 0 ? _c : "";
        message.resolveTime = (_d = object.resolveTime) !== null && _d !== void 0 ? _d : "0";
        message.requestId = (_e = object.requestId) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
function createBaseSetBandIBCPriceEvent() {
    return { relayer: "", symbols: [], prices: [], resolveTime: "0", requestId: "0", clientId: "0" };
}
exports.SetBandIBCPriceEvent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.relayer !== "") {
            writer.uint32(10).string(message.relayer);
        }
        for (const v of message.symbols) {
            writer.uint32(18).string(v);
        }
        for (const v of message.prices) {
            writer.uint32(26).string(v);
        }
        if (message.resolveTime !== "0") {
            writer.uint32(32).uint64(message.resolveTime);
        }
        if (message.requestId !== "0") {
            writer.uint32(40).uint64(message.requestId);
        }
        if (message.clientId !== "0") {
            writer.uint32(48).int64(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetBandIBCPriceEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.relayer = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.symbols.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.prices.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.resolveTime = longToString(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.requestId = longToString(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.clientId = longToString(reader.int64());
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
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
            symbols: Array.isArray(object === null || object === void 0 ? void 0 : object.symbols) ? object.symbols.map((e) => String(e)) : [],
            prices: Array.isArray(object === null || object === void 0 ? void 0 : object.prices) ? object.prices.map((e) => String(e)) : [],
            resolveTime: isSet(object.resolveTime) ? String(object.resolveTime) : "0",
            requestId: isSet(object.requestId) ? String(object.requestId) : "0",
            clientId: isSet(object.clientId) ? String(object.clientId) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.relayer !== undefined && (obj.relayer = message.relayer);
        if (message.symbols) {
            obj.symbols = message.symbols.map((e) => e);
        }
        else {
            obj.symbols = [];
        }
        if (message.prices) {
            obj.prices = message.prices.map((e) => e);
        }
        else {
            obj.prices = [];
        }
        message.resolveTime !== undefined && (obj.resolveTime = message.resolveTime);
        message.requestId !== undefined && (obj.requestId = message.requestId);
        message.clientId !== undefined && (obj.clientId = message.clientId);
        return obj;
    },
    create(base) {
        return exports.SetBandIBCPriceEvent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseSetBandIBCPriceEvent();
        message.relayer = (_a = object.relayer) !== null && _a !== void 0 ? _a : "";
        message.symbols = ((_b = object.symbols) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.prices = ((_c = object.prices) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.resolveTime = (_d = object.resolveTime) !== null && _d !== void 0 ? _d : "0";
        message.requestId = (_e = object.requestId) !== null && _e !== void 0 ? _e : "0";
        message.clientId = (_f = object.clientId) !== null && _f !== void 0 ? _f : "0";
        return message;
    },
};
function createBaseEventBandIBCAckSuccess() {
    return { ackResult: "", clientId: "0" };
}
exports.EventBandIBCAckSuccess = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ackResult !== "") {
            writer.uint32(10).string(message.ackResult);
        }
        if (message.clientId !== "0") {
            writer.uint32(16).int64(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBandIBCAckSuccess();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ackResult = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.clientId = longToString(reader.int64());
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
            ackResult: isSet(object.ackResult) ? String(object.ackResult) : "",
            clientId: isSet(object.clientId) ? String(object.clientId) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.ackResult !== undefined && (obj.ackResult = message.ackResult);
        message.clientId !== undefined && (obj.clientId = message.clientId);
        return obj;
    },
    create(base) {
        return exports.EventBandIBCAckSuccess.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventBandIBCAckSuccess();
        message.ackResult = (_a = object.ackResult) !== null && _a !== void 0 ? _a : "";
        message.clientId = (_b = object.clientId) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseEventBandIBCAckError() {
    return { ackError: "", clientId: "0" };
}
exports.EventBandIBCAckError = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ackError !== "") {
            writer.uint32(10).string(message.ackError);
        }
        if (message.clientId !== "0") {
            writer.uint32(16).int64(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBandIBCAckError();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ackError = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.clientId = longToString(reader.int64());
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
            ackError: isSet(object.ackError) ? String(object.ackError) : "",
            clientId: isSet(object.clientId) ? String(object.clientId) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.ackError !== undefined && (obj.ackError = message.ackError);
        message.clientId !== undefined && (obj.clientId = message.clientId);
        return obj;
    },
    create(base) {
        return exports.EventBandIBCAckError.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventBandIBCAckError();
        message.ackError = (_a = object.ackError) !== null && _a !== void 0 ? _a : "";
        message.clientId = (_b = object.clientId) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseEventBandIBCResponseTimeout() {
    return { clientId: "0" };
}
exports.EventBandIBCResponseTimeout = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "0") {
            writer.uint32(8).int64(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBandIBCResponseTimeout();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.clientId = longToString(reader.int64());
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
        return { clientId: isSet(object.clientId) ? String(object.clientId) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        return obj;
    },
    create(base) {
        return exports.EventBandIBCResponseTimeout.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEventBandIBCResponseTimeout();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseSetPriceFeedPriceEvent() {
    return { relayer: "", base: "", quote: "", price: "" };
}
exports.SetPriceFeedPriceEvent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.relayer !== "") {
            writer.uint32(10).string(message.relayer);
        }
        if (message.base !== "") {
            writer.uint32(18).string(message.base);
        }
        if (message.quote !== "") {
            writer.uint32(26).string(message.quote);
        }
        if (message.price !== "") {
            writer.uint32(34).string(message.price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetPriceFeedPriceEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.relayer = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.base = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.quote = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.price = reader.string();
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
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
            base: isSet(object.base) ? String(object.base) : "",
            quote: isSet(object.quote) ? String(object.quote) : "",
            price: isSet(object.price) ? String(object.price) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.relayer !== undefined && (obj.relayer = message.relayer);
        message.base !== undefined && (obj.base = message.base);
        message.quote !== undefined && (obj.quote = message.quote);
        message.price !== undefined && (obj.price = message.price);
        return obj;
    },
    create(base) {
        return exports.SetPriceFeedPriceEvent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSetPriceFeedPriceEvent();
        message.relayer = (_a = object.relayer) !== null && _a !== void 0 ? _a : "";
        message.base = (_b = object.base) !== null && _b !== void 0 ? _b : "";
        message.quote = (_c = object.quote) !== null && _c !== void 0 ? _c : "";
        message.price = (_d = object.price) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseSetProviderPriceEvent() {
    return { provider: "", relayer: "", symbol: "", price: "" };
}
exports.SetProviderPriceEvent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.provider !== "") {
            writer.uint32(10).string(message.provider);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        if (message.symbol !== "") {
            writer.uint32(26).string(message.symbol);
        }
        if (message.price !== "") {
            writer.uint32(34).string(message.price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetProviderPriceEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.provider = reader.string();
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
                    message.symbol = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.price = reader.string();
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
            provider: isSet(object.provider) ? String(object.provider) : "",
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            price: isSet(object.price) ? String(object.price) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.provider !== undefined && (obj.provider = message.provider);
        message.relayer !== undefined && (obj.relayer = message.relayer);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.price !== undefined && (obj.price = message.price);
        return obj;
    },
    create(base) {
        return exports.SetProviderPriceEvent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSetProviderPriceEvent();
        message.provider = (_a = object.provider) !== null && _a !== void 0 ? _a : "";
        message.relayer = (_b = object.relayer) !== null && _b !== void 0 ? _b : "";
        message.symbol = (_c = object.symbol) !== null && _c !== void 0 ? _c : "";
        message.price = (_d = object.price) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseSetCoinbasePriceEvent() {
    return { symbol: "", price: "", timestamp: "0" };
}
exports.SetCoinbasePriceEvent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        if (message.price !== "") {
            writer.uint32(18).string(message.price);
        }
        if (message.timestamp !== "0") {
            writer.uint32(24).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetCoinbasePriceEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.symbol = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.price = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.timestamp = longToString(reader.uint64());
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
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            price: isSet(object.price) ? String(object.price) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.price !== undefined && (obj.price = message.price);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return exports.SetCoinbasePriceEvent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSetCoinbasePriceEvent();
        message.symbol = (_a = object.symbol) !== null && _a !== void 0 ? _a : "";
        message.price = (_b = object.price) !== null && _b !== void 0 ? _b : "";
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseEventSetPythPrices() {
    return { prices: [] };
}
exports.EventSetPythPrices = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.prices) {
            oracle_1.PythPriceState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSetPythPrices();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.prices.push(oracle_1.PythPriceState.decode(reader, reader.uint32()));
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
        return { prices: Array.isArray(object === null || object === void 0 ? void 0 : object.prices) ? object.prices.map((e) => oracle_1.PythPriceState.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.prices) {
            obj.prices = message.prices.map((e) => e ? oracle_1.PythPriceState.toJSON(e) : undefined);
        }
        else {
            obj.prices = [];
        }
        return obj;
    },
    create(base) {
        return exports.EventSetPythPrices.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEventSetPythPrices();
        message.prices = ((_a = object.prices) === null || _a === void 0 ? void 0 : _a.map((e) => oracle_1.PythPriceState.fromPartial(e))) || [];
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
