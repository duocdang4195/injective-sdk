"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.MsgUpdateParamsDesc = exports.MsgRelayPythPricesDesc = exports.MsgRelayCoinbaseMessagesDesc = exports.MsgRequestBandIBCRatesDesc = exports.MsgRelayBandRatesDesc = exports.MsgRelayPriceFeedPriceDesc = exports.MsgRelayProviderPricesDesc = exports.MsgDesc = exports.MsgClientImpl = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgRelayPythPricesResponse = exports.MsgRelayPythPrices = exports.MsgRequestBandIBCRatesResponse = exports.MsgRequestBandIBCRates = exports.MsgRelayCoinbaseMessagesResponse = exports.MsgRelayCoinbaseMessages = exports.MsgRelayBandRatesResponse = exports.MsgRelayBandRates = exports.MsgRelayPriceFeedPriceResponse = exports.MsgRelayPriceFeedPrice = exports.MsgRelayProviderPricesResponse = exports.MsgRelayProviderPrices = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const oracle_1 = require("./oracle");
function createBaseMsgRelayProviderPrices() {
    return { sender: "", provider: "", symbols: [], prices: [] };
}
exports.MsgRelayProviderPrices = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.provider !== "") {
            writer.uint32(18).string(message.provider);
        }
        for (const v of message.symbols) {
            writer.uint32(26).string(v);
        }
        for (const v of message.prices) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayProviderPrices();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.provider = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.symbols.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.prices.push(reader.string());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            provider: isSet(object.provider) ? String(object.provider) : "",
            symbols: Array.isArray(object === null || object === void 0 ? void 0 : object.symbols) ? object.symbols.map((e) => String(e)) : [],
            prices: Array.isArray(object === null || object === void 0 ? void 0 : object.prices) ? object.prices.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.provider !== undefined && (obj.provider = message.provider);
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
        return obj;
    },
    create(base) {
        return exports.MsgRelayProviderPrices.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgRelayProviderPrices();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.provider = (_b = object.provider) !== null && _b !== void 0 ? _b : "";
        message.symbols = ((_c = object.symbols) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.prices = ((_d = object.prices) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgRelayProviderPricesResponse() {
    return {};
}
exports.MsgRelayProviderPricesResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayProviderPricesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
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
        return exports.MsgRelayProviderPricesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRelayProviderPricesResponse();
        return message;
    },
};
function createBaseMsgRelayPriceFeedPrice() {
    return { sender: "", base: [], quote: [], price: [] };
}
exports.MsgRelayPriceFeedPrice = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.base) {
            writer.uint32(18).string(v);
        }
        for (const v of message.quote) {
            writer.uint32(26).string(v);
        }
        for (const v of message.price) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayPriceFeedPrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.base.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.quote.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.price.push(reader.string());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            base: Array.isArray(object === null || object === void 0 ? void 0 : object.base) ? object.base.map((e) => String(e)) : [],
            quote: Array.isArray(object === null || object === void 0 ? void 0 : object.quote) ? object.quote.map((e) => String(e)) : [],
            price: Array.isArray(object === null || object === void 0 ? void 0 : object.price) ? object.price.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.base) {
            obj.base = message.base.map((e) => e);
        }
        else {
            obj.base = [];
        }
        if (message.quote) {
            obj.quote = message.quote.map((e) => e);
        }
        else {
            obj.quote = [];
        }
        if (message.price) {
            obj.price = message.price.map((e) => e);
        }
        else {
            obj.price = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgRelayPriceFeedPrice.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgRelayPriceFeedPrice();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.base = ((_b = object.base) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.quote = ((_c = object.quote) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.price = ((_d = object.price) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgRelayPriceFeedPriceResponse() {
    return {};
}
exports.MsgRelayPriceFeedPriceResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayPriceFeedPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
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
        return exports.MsgRelayPriceFeedPriceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRelayPriceFeedPriceResponse();
        return message;
    },
};
function createBaseMsgRelayBandRates() {
    return { relayer: "", symbols: [], rates: [], resolveTimes: [], requestIDs: [] };
}
exports.MsgRelayBandRates = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.relayer !== "") {
            writer.uint32(10).string(message.relayer);
        }
        for (const v of message.symbols) {
            writer.uint32(18).string(v);
        }
        writer.uint32(26).fork();
        for (const v of message.rates) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(34).fork();
        for (const v of message.resolveTimes) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(42).fork();
        for (const v of message.requestIDs) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayBandRates();
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
                    if (tag === 24) {
                        message.rates.push(longToString(reader.uint64()));
                        continue;
                    }
                    if (tag === 26) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.rates.push(longToString(reader.uint64()));
                        }
                        continue;
                    }
                    break;
                case 4:
                    if (tag === 32) {
                        message.resolveTimes.push(longToString(reader.uint64()));
                        continue;
                    }
                    if (tag === 34) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.resolveTimes.push(longToString(reader.uint64()));
                        }
                        continue;
                    }
                    break;
                case 5:
                    if (tag === 40) {
                        message.requestIDs.push(longToString(reader.uint64()));
                        continue;
                    }
                    if (tag === 42) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.requestIDs.push(longToString(reader.uint64()));
                        }
                        continue;
                    }
                    break;
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
            rates: Array.isArray(object === null || object === void 0 ? void 0 : object.rates) ? object.rates.map((e) => String(e)) : [],
            resolveTimes: Array.isArray(object === null || object === void 0 ? void 0 : object.resolveTimes) ? object.resolveTimes.map((e) => String(e)) : [],
            requestIDs: Array.isArray(object === null || object === void 0 ? void 0 : object.requestIDs) ? object.requestIDs.map((e) => String(e)) : [],
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
        if (message.rates) {
            obj.rates = message.rates.map((e) => e);
        }
        else {
            obj.rates = [];
        }
        if (message.resolveTimes) {
            obj.resolveTimes = message.resolveTimes.map((e) => e);
        }
        else {
            obj.resolveTimes = [];
        }
        if (message.requestIDs) {
            obj.requestIDs = message.requestIDs.map((e) => e);
        }
        else {
            obj.requestIDs = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgRelayBandRates.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgRelayBandRates();
        message.relayer = (_a = object.relayer) !== null && _a !== void 0 ? _a : "";
        message.symbols = ((_b = object.symbols) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.rates = ((_c = object.rates) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.resolveTimes = ((_d = object.resolveTimes) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.requestIDs = ((_e = object.requestIDs) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgRelayBandRatesResponse() {
    return {};
}
exports.MsgRelayBandRatesResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayBandRatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
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
        return exports.MsgRelayBandRatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRelayBandRatesResponse();
        return message;
    },
};
function createBaseMsgRelayCoinbaseMessages() {
    return { sender: "", messages: [], signatures: [] };
}
exports.MsgRelayCoinbaseMessages = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.messages) {
            writer.uint32(18).bytes(v);
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayCoinbaseMessages();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.messages.push(reader.bytes());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.signatures.push(reader.bytes());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map((e) => bytesFromBase64(e)) : [],
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map((e) => bytesFromBase64(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.messages) {
            obj.messages = message.messages.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.messages = [];
        }
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgRelayCoinbaseMessages.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgRelayCoinbaseMessages();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.messages = ((_b = object.messages) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.signatures = ((_c = object.signatures) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgRelayCoinbaseMessagesResponse() {
    return {};
}
exports.MsgRelayCoinbaseMessagesResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayCoinbaseMessagesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
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
        return exports.MsgRelayCoinbaseMessagesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRelayCoinbaseMessagesResponse();
        return message;
    },
};
function createBaseMsgRequestBandIBCRates() {
    return { sender: "", requestId: "0" };
}
exports.MsgRequestBandIBCRates = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.requestId !== "0") {
            writer.uint32(16).uint64(message.requestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestBandIBCRates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            requestId: isSet(object.requestId) ? String(object.requestId) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.requestId !== undefined && (obj.requestId = message.requestId);
        return obj;
    },
    create(base) {
        return exports.MsgRequestBandIBCRates.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgRequestBandIBCRates();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.requestId = (_b = object.requestId) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseMsgRequestBandIBCRatesResponse() {
    return {};
}
exports.MsgRequestBandIBCRatesResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestBandIBCRatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
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
        return exports.MsgRequestBandIBCRatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRequestBandIBCRatesResponse();
        return message;
    },
};
function createBaseMsgRelayPythPrices() {
    return { sender: "", priceAttestations: [] };
}
exports.MsgRelayPythPrices = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.priceAttestations) {
            oracle_1.PriceAttestation.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayPythPrices();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.priceAttestations.push(oracle_1.PriceAttestation.decode(reader, reader.uint32()));
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            priceAttestations: Array.isArray(object === null || object === void 0 ? void 0 : object.priceAttestations)
                ? object.priceAttestations.map((e) => oracle_1.PriceAttestation.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.priceAttestations) {
            obj.priceAttestations = message.priceAttestations.map((e) => e ? oracle_1.PriceAttestation.toJSON(e) : undefined);
        }
        else {
            obj.priceAttestations = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgRelayPythPrices.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgRelayPythPrices();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.priceAttestations = ((_b = object.priceAttestations) === null || _b === void 0 ? void 0 : _b.map((e) => oracle_1.PriceAttestation.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgRelayPythPricesResponse() {
    return {};
}
exports.MsgRelayPythPricesResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayPythPricesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
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
        return exports.MsgRelayPythPricesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRelayPythPricesResponse();
        return message;
    },
};
function createBaseMsgUpdateParams() {
    return { authority: "", params: undefined };
}
exports.MsgUpdateParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            oracle_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authority = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.params = oracle_1.Params.decode(reader, reader.uint32());
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            params: isSet(object.params) ? oracle_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? oracle_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgUpdateParams.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgUpdateParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = (object.params !== undefined && object.params !== null)
            ? oracle_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
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
        return exports.MsgUpdateParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.RelayProviderPrices = this.RelayProviderPrices.bind(this);
        this.RelayPriceFeedPrice = this.RelayPriceFeedPrice.bind(this);
        this.RelayBandRates = this.RelayBandRates.bind(this);
        this.RequestBandIBCRates = this.RequestBandIBCRates.bind(this);
        this.RelayCoinbaseMessages = this.RelayCoinbaseMessages.bind(this);
        this.RelayPythPrices = this.RelayPythPrices.bind(this);
        this.UpdateParams = this.UpdateParams.bind(this);
    }
    RelayProviderPrices(request, metadata) {
        return this.rpc.unary(exports.MsgRelayProviderPricesDesc, exports.MsgRelayProviderPrices.fromPartial(request), metadata);
    }
    RelayPriceFeedPrice(request, metadata) {
        return this.rpc.unary(exports.MsgRelayPriceFeedPriceDesc, exports.MsgRelayPriceFeedPrice.fromPartial(request), metadata);
    }
    RelayBandRates(request, metadata) {
        return this.rpc.unary(exports.MsgRelayBandRatesDesc, exports.MsgRelayBandRates.fromPartial(request), metadata);
    }
    RequestBandIBCRates(request, metadata) {
        return this.rpc.unary(exports.MsgRequestBandIBCRatesDesc, exports.MsgRequestBandIBCRates.fromPartial(request), metadata);
    }
    RelayCoinbaseMessages(request, metadata) {
        return this.rpc.unary(exports.MsgRelayCoinbaseMessagesDesc, exports.MsgRelayCoinbaseMessages.fromPartial(request), metadata);
    }
    RelayPythPrices(request, metadata) {
        return this.rpc.unary(exports.MsgRelayPythPricesDesc, exports.MsgRelayPythPrices.fromPartial(request), metadata);
    }
    UpdateParams(request, metadata) {
        return this.rpc.unary(exports.MsgUpdateParamsDesc, exports.MsgUpdateParams.fromPartial(request), metadata);
    }
}
exports.MsgClientImpl = MsgClientImpl;
exports.MsgDesc = { serviceName: "injective.oracle.v1beta1.Msg" };
exports.MsgRelayProviderPricesDesc = {
    methodName: "RelayProviderPrices",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgRelayProviderPrices.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgRelayProviderPricesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgRelayPriceFeedPriceDesc = {
    methodName: "RelayPriceFeedPrice",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgRelayPriceFeedPrice.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgRelayPriceFeedPriceResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgRelayBandRatesDesc = {
    methodName: "RelayBandRates",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgRelayBandRates.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgRelayBandRatesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgRequestBandIBCRatesDesc = {
    methodName: "RequestBandIBCRates",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgRequestBandIBCRates.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgRequestBandIBCRatesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgRelayCoinbaseMessagesDesc = {
    methodName: "RelayCoinbaseMessages",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgRelayCoinbaseMessages.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgRelayCoinbaseMessagesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgRelayPythPricesDesc = {
    methodName: "RelayPythPrices",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgRelayPythPrices.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgRelayPythPricesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgUpdateParamsDesc = {
    methodName: "UpdateParams",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgUpdateParams.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgUpdateParamsResponse.decode(data);
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
class GrpcWebError extends tsProtoGlobalThis.Error {
    constructor(message, code, metadata) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}
exports.GrpcWebError = GrpcWebError;
