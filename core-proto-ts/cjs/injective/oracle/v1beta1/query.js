"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebImpl = exports.QueryPythPriceDesc = exports.QueryOraclePriceDesc = exports.QueryOracleProviderPricesDesc = exports.QueryOracleProvidersInfoDesc = exports.QueryOracleVolatilityDesc = exports.QueryHistoricalPriceRecordsDesc = exports.QueryOracleModuleStateDesc = exports.QueryProviderPriceStateDesc = exports.QueryPythPriceStatesDesc = exports.QueryCoinbasePriceStatesDesc = exports.QueryPriceFeedPriceStatesDesc = exports.QueryBandIBCPriceStatesDesc = exports.QueryBandPriceStatesDesc = exports.QueryBandRelayersDesc = exports.QueryParamsDesc = exports.QueryDesc = exports.QueryClientImpl = exports.QueryOraclePriceResponse = exports.PricePairState = exports.QueryOraclePriceRequest = exports.QueryOracleProviderPricesResponse = exports.QueryOracleProviderPricesRequest = exports.QueryOracleProvidersInfoResponse = exports.QueryOracleProvidersInfoRequest = exports.QueryOracleVolatilityResponse = exports.QueryOracleVolatilityRequest = exports.OracleHistoryOptions = exports.QueryHistoricalPriceRecordsResponse = exports.QueryHistoricalPriceRecordsRequest = exports.QueryModuleStateResponse = exports.QueryModuleStateRequest = exports.QueryProviderPriceStateResponse = exports.QueryProviderPriceStateRequest = exports.QueryPythPriceStatesResponse = exports.QueryPythPriceStatesRequest = exports.QueryCoinbasePriceStatesResponse = exports.QueryCoinbasePriceStatesRequest = exports.QueryPriceFeedPriceStatesResponse = exports.QueryPriceFeedPriceStatesRequest = exports.QueryBandIBCPriceStatesResponse = exports.QueryBandIBCPriceStatesRequest = exports.QueryBandPriceStatesResponse = exports.QueryBandPriceStatesRequest = exports.QueryBandRelayersResponse = exports.QueryBandRelayersRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryPythPriceResponse = exports.QueryPythPriceRequest = void 0;
exports.GrpcWebError = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const genesis_1 = require("./genesis");
const oracle_1 = require("./oracle");
function createBaseQueryPythPriceRequest() {
    return { priceId: "" };
}
exports.QueryPythPriceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.priceId !== "") {
            writer.uint32(10).string(message.priceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPythPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceId = reader.string();
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
        return { priceId: isSet(object.priceId) ? String(object.priceId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.priceId !== undefined && (obj.priceId = message.priceId);
        return obj;
    },
    create(base) {
        return exports.QueryPythPriceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPythPriceRequest();
        message.priceId = (_a = object.priceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryPythPriceResponse() {
    return { priceState: undefined };
}
exports.QueryPythPriceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.priceState !== undefined) {
            oracle_1.PythPriceState.encode(message.priceState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPythPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceState = oracle_1.PythPriceState.decode(reader, reader.uint32());
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
        return { priceState: isSet(object.priceState) ? oracle_1.PythPriceState.fromJSON(object.priceState) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.priceState !== undefined &&
            (obj.priceState = message.priceState ? oracle_1.PythPriceState.toJSON(message.priceState) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryPythPriceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryPythPriceResponse();
        message.priceState = (object.priceState !== undefined && object.priceState !== null)
            ? oracle_1.PythPriceState.fromPartial(object.priceState)
            : undefined;
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        return exports.QueryParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            oracle_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { params: isSet(object.params) ? oracle_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? oracle_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? oracle_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryBandRelayersRequest() {
    return {};
}
exports.QueryBandRelayersRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBandRelayersRequest();
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
        return exports.QueryBandRelayersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryBandRelayersRequest();
        return message;
    },
};
function createBaseQueryBandRelayersResponse() {
    return { relayers: [] };
}
exports.QueryBandRelayersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.relayers) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBandRelayersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { relayers: Array.isArray(object === null || object === void 0 ? void 0 : object.relayers) ? object.relayers.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.relayers) {
            obj.relayers = message.relayers.map((e) => e);
        }
        else {
            obj.relayers = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryBandRelayersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBandRelayersResponse();
        message.relayers = ((_a = object.relayers) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryBandPriceStatesRequest() {
    return {};
}
exports.QueryBandPriceStatesRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBandPriceStatesRequest();
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
        return exports.QueryBandPriceStatesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryBandPriceStatesRequest();
        return message;
    },
};
function createBaseQueryBandPriceStatesResponse() {
    return { priceStates: [] };
}
exports.QueryBandPriceStatesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.priceStates) {
            oracle_1.BandPriceState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBandPriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceStates.push(oracle_1.BandPriceState.decode(reader, reader.uint32()));
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
            priceStates: Array.isArray(object === null || object === void 0 ? void 0 : object.priceStates)
                ? object.priceStates.map((e) => oracle_1.BandPriceState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.priceStates) {
            obj.priceStates = message.priceStates.map((e) => e ? oracle_1.BandPriceState.toJSON(e) : undefined);
        }
        else {
            obj.priceStates = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryBandPriceStatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBandPriceStatesResponse();
        message.priceStates = ((_a = object.priceStates) === null || _a === void 0 ? void 0 : _a.map((e) => oracle_1.BandPriceState.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryBandIBCPriceStatesRequest() {
    return {};
}
exports.QueryBandIBCPriceStatesRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBandIBCPriceStatesRequest();
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
        return exports.QueryBandIBCPriceStatesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryBandIBCPriceStatesRequest();
        return message;
    },
};
function createBaseQueryBandIBCPriceStatesResponse() {
    return { priceStates: [] };
}
exports.QueryBandIBCPriceStatesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.priceStates) {
            oracle_1.BandPriceState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBandIBCPriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceStates.push(oracle_1.BandPriceState.decode(reader, reader.uint32()));
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
            priceStates: Array.isArray(object === null || object === void 0 ? void 0 : object.priceStates)
                ? object.priceStates.map((e) => oracle_1.BandPriceState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.priceStates) {
            obj.priceStates = message.priceStates.map((e) => e ? oracle_1.BandPriceState.toJSON(e) : undefined);
        }
        else {
            obj.priceStates = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryBandIBCPriceStatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBandIBCPriceStatesResponse();
        message.priceStates = ((_a = object.priceStates) === null || _a === void 0 ? void 0 : _a.map((e) => oracle_1.BandPriceState.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryPriceFeedPriceStatesRequest() {
    return {};
}
exports.QueryPriceFeedPriceStatesRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPriceFeedPriceStatesRequest();
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
        return exports.QueryPriceFeedPriceStatesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryPriceFeedPriceStatesRequest();
        return message;
    },
};
function createBaseQueryPriceFeedPriceStatesResponse() {
    return { priceStates: [] };
}
exports.QueryPriceFeedPriceStatesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.priceStates) {
            oracle_1.PriceFeedState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPriceFeedPriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceStates.push(oracle_1.PriceFeedState.decode(reader, reader.uint32()));
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
            priceStates: Array.isArray(object === null || object === void 0 ? void 0 : object.priceStates)
                ? object.priceStates.map((e) => oracle_1.PriceFeedState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.priceStates) {
            obj.priceStates = message.priceStates.map((e) => e ? oracle_1.PriceFeedState.toJSON(e) : undefined);
        }
        else {
            obj.priceStates = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryPriceFeedPriceStatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPriceFeedPriceStatesResponse();
        message.priceStates = ((_a = object.priceStates) === null || _a === void 0 ? void 0 : _a.map((e) => oracle_1.PriceFeedState.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryCoinbasePriceStatesRequest() {
    return {};
}
exports.QueryCoinbasePriceStatesRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCoinbasePriceStatesRequest();
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
        return exports.QueryCoinbasePriceStatesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryCoinbasePriceStatesRequest();
        return message;
    },
};
function createBaseQueryCoinbasePriceStatesResponse() {
    return { priceStates: [] };
}
exports.QueryCoinbasePriceStatesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.priceStates) {
            oracle_1.CoinbasePriceState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCoinbasePriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceStates.push(oracle_1.CoinbasePriceState.decode(reader, reader.uint32()));
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
            priceStates: Array.isArray(object === null || object === void 0 ? void 0 : object.priceStates)
                ? object.priceStates.map((e) => oracle_1.CoinbasePriceState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.priceStates) {
            obj.priceStates = message.priceStates.map((e) => e ? oracle_1.CoinbasePriceState.toJSON(e) : undefined);
        }
        else {
            obj.priceStates = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryCoinbasePriceStatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryCoinbasePriceStatesResponse();
        message.priceStates = ((_a = object.priceStates) === null || _a === void 0 ? void 0 : _a.map((e) => oracle_1.CoinbasePriceState.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryPythPriceStatesRequest() {
    return {};
}
exports.QueryPythPriceStatesRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPythPriceStatesRequest();
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
        return exports.QueryPythPriceStatesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryPythPriceStatesRequest();
        return message;
    },
};
function createBaseQueryPythPriceStatesResponse() {
    return { priceStates: [] };
}
exports.QueryPythPriceStatesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.priceStates) {
            oracle_1.PythPriceState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPythPriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceStates.push(oracle_1.PythPriceState.decode(reader, reader.uint32()));
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
            priceStates: Array.isArray(object === null || object === void 0 ? void 0 : object.priceStates)
                ? object.priceStates.map((e) => oracle_1.PythPriceState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.priceStates) {
            obj.priceStates = message.priceStates.map((e) => e ? oracle_1.PythPriceState.toJSON(e) : undefined);
        }
        else {
            obj.priceStates = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryPythPriceStatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPythPriceStatesResponse();
        message.priceStates = ((_a = object.priceStates) === null || _a === void 0 ? void 0 : _a.map((e) => oracle_1.PythPriceState.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryProviderPriceStateRequest() {
    return { provider: "", symbol: "" };
}
exports.QueryProviderPriceStateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.provider !== "") {
            writer.uint32(10).string(message.provider);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderPriceStateRequest();
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
                    message.symbol = reader.string();
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
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.provider !== undefined && (obj.provider = message.provider);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        return obj;
    },
    create(base) {
        return exports.QueryProviderPriceStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryProviderPriceStateRequest();
        message.provider = (_a = object.provider) !== null && _a !== void 0 ? _a : "";
        message.symbol = (_b = object.symbol) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryProviderPriceStateResponse() {
    return { priceState: undefined };
}
exports.QueryProviderPriceStateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.priceState !== undefined) {
            oracle_1.PriceState.encode(message.priceState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderPriceStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceState = oracle_1.PriceState.decode(reader, reader.uint32());
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
        return { priceState: isSet(object.priceState) ? oracle_1.PriceState.fromJSON(object.priceState) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.priceState !== undefined &&
            (obj.priceState = message.priceState ? oracle_1.PriceState.toJSON(message.priceState) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryProviderPriceStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryProviderPriceStateResponse();
        message.priceState = (object.priceState !== undefined && object.priceState !== null)
            ? oracle_1.PriceState.fromPartial(object.priceState)
            : undefined;
        return message;
    },
};
function createBaseQueryModuleStateRequest() {
    return {};
}
exports.QueryModuleStateRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateRequest();
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
        return exports.QueryModuleStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
};
function createBaseQueryModuleStateResponse() {
    return { state: undefined };
}
exports.QueryModuleStateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== undefined) {
            genesis_1.GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state = genesis_1.GenesisState.decode(reader, reader.uint32());
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
        return { state: isSet(object.state) ? genesis_1.GenesisState.fromJSON(object.state) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state ? genesis_1.GenesisState.toJSON(message.state) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryModuleStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryModuleStateResponse();
        message.state = (object.state !== undefined && object.state !== null)
            ? genesis_1.GenesisState.fromPartial(object.state)
            : undefined;
        return message;
    },
};
function createBaseQueryHistoricalPriceRecordsRequest() {
    return { oracle: 0, symbolId: "" };
}
exports.QueryHistoricalPriceRecordsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.oracle !== 0) {
            writer.uint32(8).int32(message.oracle);
        }
        if (message.symbolId !== "") {
            writer.uint32(18).string(message.symbolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalPriceRecordsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.oracle = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.symbolId = reader.string();
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
            oracle: isSet(object.oracle) ? (0, oracle_1.oracleTypeFromJSON)(object.oracle) : 0,
            symbolId: isSet(object.symbolId) ? String(object.symbolId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.oracle !== undefined && (obj.oracle = (0, oracle_1.oracleTypeToJSON)(message.oracle));
        message.symbolId !== undefined && (obj.symbolId = message.symbolId);
        return obj;
    },
    create(base) {
        return exports.QueryHistoricalPriceRecordsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryHistoricalPriceRecordsRequest();
        message.oracle = (_a = object.oracle) !== null && _a !== void 0 ? _a : 0;
        message.symbolId = (_b = object.symbolId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryHistoricalPriceRecordsResponse() {
    return { priceRecords: [] };
}
exports.QueryHistoricalPriceRecordsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.priceRecords) {
            oracle_1.PriceRecords.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalPriceRecordsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceRecords.push(oracle_1.PriceRecords.decode(reader, reader.uint32()));
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
            priceRecords: Array.isArray(object === null || object === void 0 ? void 0 : object.priceRecords)
                ? object.priceRecords.map((e) => oracle_1.PriceRecords.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.priceRecords) {
            obj.priceRecords = message.priceRecords.map((e) => e ? oracle_1.PriceRecords.toJSON(e) : undefined);
        }
        else {
            obj.priceRecords = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryHistoricalPriceRecordsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryHistoricalPriceRecordsResponse();
        message.priceRecords = ((_a = object.priceRecords) === null || _a === void 0 ? void 0 : _a.map((e) => oracle_1.PriceRecords.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOracleHistoryOptions() {
    return { maxAge: "0", includeRawHistory: false, includeMetadata: false };
}
exports.OracleHistoryOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxAge !== "0") {
            writer.uint32(8).uint64(message.maxAge);
        }
        if (message.includeRawHistory === true) {
            writer.uint32(16).bool(message.includeRawHistory);
        }
        if (message.includeMetadata === true) {
            writer.uint32(24).bool(message.includeMetadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOracleHistoryOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.maxAge = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.includeRawHistory = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.includeMetadata = reader.bool();
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
            maxAge: isSet(object.maxAge) ? String(object.maxAge) : "0",
            includeRawHistory: isSet(object.includeRawHistory) ? Boolean(object.includeRawHistory) : false,
            includeMetadata: isSet(object.includeMetadata) ? Boolean(object.includeMetadata) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxAge !== undefined && (obj.maxAge = message.maxAge);
        message.includeRawHistory !== undefined && (obj.includeRawHistory = message.includeRawHistory);
        message.includeMetadata !== undefined && (obj.includeMetadata = message.includeMetadata);
        return obj;
    },
    create(base) {
        return exports.OracleHistoryOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseOracleHistoryOptions();
        message.maxAge = (_a = object.maxAge) !== null && _a !== void 0 ? _a : "0";
        message.includeRawHistory = (_b = object.includeRawHistory) !== null && _b !== void 0 ? _b : false;
        message.includeMetadata = (_c = object.includeMetadata) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseQueryOracleVolatilityRequest() {
    return { baseInfo: undefined, quoteInfo: undefined, oracleHistoryOptions: undefined };
}
exports.QueryOracleVolatilityRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.baseInfo !== undefined) {
            oracle_1.OracleInfo.encode(message.baseInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.quoteInfo !== undefined) {
            oracle_1.OracleInfo.encode(message.quoteInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.oracleHistoryOptions !== undefined) {
            exports.OracleHistoryOptions.encode(message.oracleHistoryOptions, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleVolatilityRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.baseInfo = oracle_1.OracleInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.quoteInfo = oracle_1.OracleInfo.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.oracleHistoryOptions = exports.OracleHistoryOptions.decode(reader, reader.uint32());
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
            baseInfo: isSet(object.baseInfo) ? oracle_1.OracleInfo.fromJSON(object.baseInfo) : undefined,
            quoteInfo: isSet(object.quoteInfo) ? oracle_1.OracleInfo.fromJSON(object.quoteInfo) : undefined,
            oracleHistoryOptions: isSet(object.oracleHistoryOptions)
                ? exports.OracleHistoryOptions.fromJSON(object.oracleHistoryOptions)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseInfo !== undefined &&
            (obj.baseInfo = message.baseInfo ? oracle_1.OracleInfo.toJSON(message.baseInfo) : undefined);
        message.quoteInfo !== undefined &&
            (obj.quoteInfo = message.quoteInfo ? oracle_1.OracleInfo.toJSON(message.quoteInfo) : undefined);
        message.oracleHistoryOptions !== undefined && (obj.oracleHistoryOptions = message.oracleHistoryOptions
            ? exports.OracleHistoryOptions.toJSON(message.oracleHistoryOptions)
            : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryOracleVolatilityRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryOracleVolatilityRequest();
        message.baseInfo = (object.baseInfo !== undefined && object.baseInfo !== null)
            ? oracle_1.OracleInfo.fromPartial(object.baseInfo)
            : undefined;
        message.quoteInfo = (object.quoteInfo !== undefined && object.quoteInfo !== null)
            ? oracle_1.OracleInfo.fromPartial(object.quoteInfo)
            : undefined;
        message.oracleHistoryOptions = (object.oracleHistoryOptions !== undefined && object.oracleHistoryOptions !== null)
            ? exports.OracleHistoryOptions.fromPartial(object.oracleHistoryOptions)
            : undefined;
        return message;
    },
};
function createBaseQueryOracleVolatilityResponse() {
    return { volatility: "", historyMetadata: undefined, rawHistory: [] };
}
exports.QueryOracleVolatilityResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.volatility !== "") {
            writer.uint32(10).string(message.volatility);
        }
        if (message.historyMetadata !== undefined) {
            oracle_1.MetadataStatistics.encode(message.historyMetadata, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.rawHistory) {
            oracle_1.PriceRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleVolatilityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.volatility = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.historyMetadata = oracle_1.MetadataStatistics.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.rawHistory.push(oracle_1.PriceRecord.decode(reader, reader.uint32()));
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
            volatility: isSet(object.volatility) ? String(object.volatility) : "",
            historyMetadata: isSet(object.historyMetadata) ? oracle_1.MetadataStatistics.fromJSON(object.historyMetadata) : undefined,
            rawHistory: Array.isArray(object === null || object === void 0 ? void 0 : object.rawHistory) ? object.rawHistory.map((e) => oracle_1.PriceRecord.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.volatility !== undefined && (obj.volatility = message.volatility);
        message.historyMetadata !== undefined &&
            (obj.historyMetadata = message.historyMetadata ? oracle_1.MetadataStatistics.toJSON(message.historyMetadata) : undefined);
        if (message.rawHistory) {
            obj.rawHistory = message.rawHistory.map((e) => e ? oracle_1.PriceRecord.toJSON(e) : undefined);
        }
        else {
            obj.rawHistory = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryOracleVolatilityResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryOracleVolatilityResponse();
        message.volatility = (_a = object.volatility) !== null && _a !== void 0 ? _a : "";
        message.historyMetadata = (object.historyMetadata !== undefined && object.historyMetadata !== null)
            ? oracle_1.MetadataStatistics.fromPartial(object.historyMetadata)
            : undefined;
        message.rawHistory = ((_b = object.rawHistory) === null || _b === void 0 ? void 0 : _b.map((e) => oracle_1.PriceRecord.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryOracleProvidersInfoRequest() {
    return {};
}
exports.QueryOracleProvidersInfoRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleProvidersInfoRequest();
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
        return exports.QueryOracleProvidersInfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryOracleProvidersInfoRequest();
        return message;
    },
};
function createBaseQueryOracleProvidersInfoResponse() {
    return { providers: [] };
}
exports.QueryOracleProvidersInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.providers) {
            oracle_1.ProviderInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleProvidersInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.providers.push(oracle_1.ProviderInfo.decode(reader, reader.uint32()));
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
            providers: Array.isArray(object === null || object === void 0 ? void 0 : object.providers) ? object.providers.map((e) => oracle_1.ProviderInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.providers) {
            obj.providers = message.providers.map((e) => e ? oracle_1.ProviderInfo.toJSON(e) : undefined);
        }
        else {
            obj.providers = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryOracleProvidersInfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOracleProvidersInfoResponse();
        message.providers = ((_a = object.providers) === null || _a === void 0 ? void 0 : _a.map((e) => oracle_1.ProviderInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryOracleProviderPricesRequest() {
    return { provider: "" };
}
exports.QueryOracleProviderPricesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.provider !== "") {
            writer.uint32(10).string(message.provider);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleProviderPricesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.provider = reader.string();
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
        return { provider: isSet(object.provider) ? String(object.provider) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.provider !== undefined && (obj.provider = message.provider);
        return obj;
    },
    create(base) {
        return exports.QueryOracleProviderPricesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOracleProviderPricesRequest();
        message.provider = (_a = object.provider) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryOracleProviderPricesResponse() {
    return { providerState: [] };
}
exports.QueryOracleProviderPricesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.providerState) {
            oracle_1.ProviderState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleProviderPricesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.providerState.push(oracle_1.ProviderState.decode(reader, reader.uint32()));
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
            providerState: Array.isArray(object === null || object === void 0 ? void 0 : object.providerState)
                ? object.providerState.map((e) => oracle_1.ProviderState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.providerState) {
            obj.providerState = message.providerState.map((e) => e ? oracle_1.ProviderState.toJSON(e) : undefined);
        }
        else {
            obj.providerState = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryOracleProviderPricesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOracleProviderPricesResponse();
        message.providerState = ((_a = object.providerState) === null || _a === void 0 ? void 0 : _a.map((e) => oracle_1.ProviderState.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryOraclePriceRequest() {
    return { oracleType: 0, base: "", quote: "" };
}
exports.QueryOraclePriceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.oracleType !== 0) {
            writer.uint32(8).int32(message.oracleType);
        }
        if (message.base !== "") {
            writer.uint32(18).string(message.base);
        }
        if (message.quote !== "") {
            writer.uint32(26).string(message.quote);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOraclePriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.oracleType = reader.int32();
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
            oracleType: isSet(object.oracleType) ? (0, oracle_1.oracleTypeFromJSON)(object.oracleType) : 0,
            base: isSet(object.base) ? String(object.base) : "",
            quote: isSet(object.quote) ? String(object.quote) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.oracleType !== undefined && (obj.oracleType = (0, oracle_1.oracleTypeToJSON)(message.oracleType));
        message.base !== undefined && (obj.base = message.base);
        message.quote !== undefined && (obj.quote = message.quote);
        return obj;
    },
    create(base) {
        return exports.QueryOraclePriceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryOraclePriceRequest();
        message.oracleType = (_a = object.oracleType) !== null && _a !== void 0 ? _a : 0;
        message.base = (_b = object.base) !== null && _b !== void 0 ? _b : "";
        message.quote = (_c = object.quote) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBasePricePairState() {
    return {
        pairPrice: "",
        basePrice: "",
        quotePrice: "",
        baseCumulativePrice: "",
        quoteCumulativePrice: "",
        baseTimestamp: "0",
        quoteTimestamp: "0",
    };
}
exports.PricePairState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pairPrice !== "") {
            writer.uint32(10).string(message.pairPrice);
        }
        if (message.basePrice !== "") {
            writer.uint32(18).string(message.basePrice);
        }
        if (message.quotePrice !== "") {
            writer.uint32(26).string(message.quotePrice);
        }
        if (message.baseCumulativePrice !== "") {
            writer.uint32(34).string(message.baseCumulativePrice);
        }
        if (message.quoteCumulativePrice !== "") {
            writer.uint32(42).string(message.quoteCumulativePrice);
        }
        if (message.baseTimestamp !== "0") {
            writer.uint32(48).int64(message.baseTimestamp);
        }
        if (message.quoteTimestamp !== "0") {
            writer.uint32(56).int64(message.quoteTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePricePairState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pairPrice = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.basePrice = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.quotePrice = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.baseCumulativePrice = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.quoteCumulativePrice = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.baseTimestamp = longToString(reader.int64());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.quoteTimestamp = longToString(reader.int64());
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
            pairPrice: isSet(object.pairPrice) ? String(object.pairPrice) : "",
            basePrice: isSet(object.basePrice) ? String(object.basePrice) : "",
            quotePrice: isSet(object.quotePrice) ? String(object.quotePrice) : "",
            baseCumulativePrice: isSet(object.baseCumulativePrice) ? String(object.baseCumulativePrice) : "",
            quoteCumulativePrice: isSet(object.quoteCumulativePrice) ? String(object.quoteCumulativePrice) : "",
            baseTimestamp: isSet(object.baseTimestamp) ? String(object.baseTimestamp) : "0",
            quoteTimestamp: isSet(object.quoteTimestamp) ? String(object.quoteTimestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.pairPrice !== undefined && (obj.pairPrice = message.pairPrice);
        message.basePrice !== undefined && (obj.basePrice = message.basePrice);
        message.quotePrice !== undefined && (obj.quotePrice = message.quotePrice);
        message.baseCumulativePrice !== undefined && (obj.baseCumulativePrice = message.baseCumulativePrice);
        message.quoteCumulativePrice !== undefined && (obj.quoteCumulativePrice = message.quoteCumulativePrice);
        message.baseTimestamp !== undefined && (obj.baseTimestamp = message.baseTimestamp);
        message.quoteTimestamp !== undefined && (obj.quoteTimestamp = message.quoteTimestamp);
        return obj;
    },
    create(base) {
        return exports.PricePairState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBasePricePairState();
        message.pairPrice = (_a = object.pairPrice) !== null && _a !== void 0 ? _a : "";
        message.basePrice = (_b = object.basePrice) !== null && _b !== void 0 ? _b : "";
        message.quotePrice = (_c = object.quotePrice) !== null && _c !== void 0 ? _c : "";
        message.baseCumulativePrice = (_d = object.baseCumulativePrice) !== null && _d !== void 0 ? _d : "";
        message.quoteCumulativePrice = (_e = object.quoteCumulativePrice) !== null && _e !== void 0 ? _e : "";
        message.baseTimestamp = (_f = object.baseTimestamp) !== null && _f !== void 0 ? _f : "0";
        message.quoteTimestamp = (_g = object.quoteTimestamp) !== null && _g !== void 0 ? _g : "0";
        return message;
    },
};
function createBaseQueryOraclePriceResponse() {
    return { pricePairState: undefined };
}
exports.QueryOraclePriceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pricePairState !== undefined) {
            exports.PricePairState.encode(message.pricePairState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOraclePriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pricePairState = exports.PricePairState.decode(reader, reader.uint32());
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
            pricePairState: isSet(object.pricePairState) ? exports.PricePairState.fromJSON(object.pricePairState) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pricePairState !== undefined &&
            (obj.pricePairState = message.pricePairState ? exports.PricePairState.toJSON(message.pricePairState) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryOraclePriceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryOraclePriceResponse();
        message.pricePairState = (object.pricePairState !== undefined && object.pricePairState !== null)
            ? exports.PricePairState.fromPartial(object.pricePairState)
            : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.BandRelayers = this.BandRelayers.bind(this);
        this.BandPriceStates = this.BandPriceStates.bind(this);
        this.BandIBCPriceStates = this.BandIBCPriceStates.bind(this);
        this.PriceFeedPriceStates = this.PriceFeedPriceStates.bind(this);
        this.CoinbasePriceStates = this.CoinbasePriceStates.bind(this);
        this.PythPriceStates = this.PythPriceStates.bind(this);
        this.ProviderPriceState = this.ProviderPriceState.bind(this);
        this.OracleModuleState = this.OracleModuleState.bind(this);
        this.HistoricalPriceRecords = this.HistoricalPriceRecords.bind(this);
        this.OracleVolatility = this.OracleVolatility.bind(this);
        this.OracleProvidersInfo = this.OracleProvidersInfo.bind(this);
        this.OracleProviderPrices = this.OracleProviderPrices.bind(this);
        this.OraclePrice = this.OraclePrice.bind(this);
        this.PythPrice = this.PythPrice.bind(this);
    }
    Params(request, metadata) {
        return this.rpc.unary(exports.QueryParamsDesc, exports.QueryParamsRequest.fromPartial(request), metadata);
    }
    BandRelayers(request, metadata) {
        return this.rpc.unary(exports.QueryBandRelayersDesc, exports.QueryBandRelayersRequest.fromPartial(request), metadata);
    }
    BandPriceStates(request, metadata) {
        return this.rpc.unary(exports.QueryBandPriceStatesDesc, exports.QueryBandPriceStatesRequest.fromPartial(request), metadata);
    }
    BandIBCPriceStates(request, metadata) {
        return this.rpc.unary(exports.QueryBandIBCPriceStatesDesc, exports.QueryBandIBCPriceStatesRequest.fromPartial(request), metadata);
    }
    PriceFeedPriceStates(request, metadata) {
        return this.rpc.unary(exports.QueryPriceFeedPriceStatesDesc, exports.QueryPriceFeedPriceStatesRequest.fromPartial(request), metadata);
    }
    CoinbasePriceStates(request, metadata) {
        return this.rpc.unary(exports.QueryCoinbasePriceStatesDesc, exports.QueryCoinbasePriceStatesRequest.fromPartial(request), metadata);
    }
    PythPriceStates(request, metadata) {
        return this.rpc.unary(exports.QueryPythPriceStatesDesc, exports.QueryPythPriceStatesRequest.fromPartial(request), metadata);
    }
    ProviderPriceState(request, metadata) {
        return this.rpc.unary(exports.QueryProviderPriceStateDesc, exports.QueryProviderPriceStateRequest.fromPartial(request), metadata);
    }
    OracleModuleState(request, metadata) {
        return this.rpc.unary(exports.QueryOracleModuleStateDesc, exports.QueryModuleStateRequest.fromPartial(request), metadata);
    }
    HistoricalPriceRecords(request, metadata) {
        return this.rpc.unary(exports.QueryHistoricalPriceRecordsDesc, exports.QueryHistoricalPriceRecordsRequest.fromPartial(request), metadata);
    }
    OracleVolatility(request, metadata) {
        return this.rpc.unary(exports.QueryOracleVolatilityDesc, exports.QueryOracleVolatilityRequest.fromPartial(request), metadata);
    }
    OracleProvidersInfo(request, metadata) {
        return this.rpc.unary(exports.QueryOracleProvidersInfoDesc, exports.QueryOracleProvidersInfoRequest.fromPartial(request), metadata);
    }
    OracleProviderPrices(request, metadata) {
        return this.rpc.unary(exports.QueryOracleProviderPricesDesc, exports.QueryOracleProviderPricesRequest.fromPartial(request), metadata);
    }
    OraclePrice(request, metadata) {
        return this.rpc.unary(exports.QueryOraclePriceDesc, exports.QueryOraclePriceRequest.fromPartial(request), metadata);
    }
    PythPrice(request, metadata) {
        return this.rpc.unary(exports.QueryPythPriceDesc, exports.QueryPythPriceRequest.fromPartial(request), metadata);
    }
}
exports.QueryClientImpl = QueryClientImpl;
exports.QueryDesc = { serviceName: "injective.oracle.v1beta1.Query" };
exports.QueryParamsDesc = {
    methodName: "Params",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryParamsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryParamsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryBandRelayersDesc = {
    methodName: "BandRelayers",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryBandRelayersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryBandRelayersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryBandPriceStatesDesc = {
    methodName: "BandPriceStates",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryBandPriceStatesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryBandPriceStatesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryBandIBCPriceStatesDesc = {
    methodName: "BandIBCPriceStates",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryBandIBCPriceStatesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryBandIBCPriceStatesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryPriceFeedPriceStatesDesc = {
    methodName: "PriceFeedPriceStates",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryPriceFeedPriceStatesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryPriceFeedPriceStatesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryCoinbasePriceStatesDesc = {
    methodName: "CoinbasePriceStates",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryCoinbasePriceStatesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryCoinbasePriceStatesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryPythPriceStatesDesc = {
    methodName: "PythPriceStates",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryPythPriceStatesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryPythPriceStatesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryProviderPriceStateDesc = {
    methodName: "ProviderPriceState",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryProviderPriceStateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryProviderPriceStateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryOracleModuleStateDesc = {
    methodName: "OracleModuleState",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryModuleStateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryModuleStateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryHistoricalPriceRecordsDesc = {
    methodName: "HistoricalPriceRecords",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryHistoricalPriceRecordsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryHistoricalPriceRecordsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryOracleVolatilityDesc = {
    methodName: "OracleVolatility",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryOracleVolatilityRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryOracleVolatilityResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryOracleProvidersInfoDesc = {
    methodName: "OracleProvidersInfo",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryOracleProvidersInfoRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryOracleProvidersInfoResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryOracleProviderPricesDesc = {
    methodName: "OracleProviderPrices",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryOracleProviderPricesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryOracleProviderPricesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryOraclePriceDesc = {
    methodName: "OraclePrice",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryOraclePriceRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryOraclePriceResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryPythPriceDesc = {
    methodName: "PythPrice",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryPythPriceRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryPythPriceResponse.decode(data);
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
