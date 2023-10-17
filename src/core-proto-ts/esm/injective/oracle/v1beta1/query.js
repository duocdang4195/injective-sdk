/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { GenesisState } from "./genesis";
import { BandPriceState, CoinbasePriceState, MetadataStatistics, OracleInfo, oracleTypeFromJSON, oracleTypeToJSON, Params, PriceFeedState, PriceRecord, PriceRecords, PriceState, ProviderInfo, ProviderState, PythPriceState, } from "./oracle";
function createBaseQueryPythPriceRequest() {
    return { priceId: "" };
}
export const QueryPythPriceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.priceId !== "") {
            writer.uint32(10).string(message.priceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryPythPriceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryPythPriceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.priceState !== undefined) {
            PythPriceState.encode(message.priceState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPythPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceState = PythPriceState.decode(reader, reader.uint32());
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
        return { priceState: isSet(object.priceState) ? PythPriceState.fromJSON(object.priceState) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.priceState !== undefined &&
            (obj.priceState = message.priceState ? PythPriceState.toJSON(message.priceState) : undefined);
        return obj;
    },
    create(base) {
        return QueryPythPriceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryPythPriceResponse();
        message.priceState = (object.priceState !== undefined && object.priceState !== null)
            ? PythPriceState.fromPartial(object.priceState)
            : undefined;
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = Params.decode(reader, reader.uint32());
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
        return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return QueryParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryBandRelayersRequest() {
    return {};
}
export const QueryBandRelayersRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryBandRelayersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryBandRelayersRequest();
        return message;
    },
};
function createBaseQueryBandRelayersResponse() {
    return { relayers: [] };
}
export const QueryBandRelayersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.relayers) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryBandRelayersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryBandPriceStatesRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryBandPriceStatesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryBandPriceStatesRequest();
        return message;
    },
};
function createBaseQueryBandPriceStatesResponse() {
    return { priceStates: [] };
}
export const QueryBandPriceStatesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.priceStates) {
            BandPriceState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBandPriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceStates.push(BandPriceState.decode(reader, reader.uint32()));
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
                ? object.priceStates.map((e) => BandPriceState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.priceStates) {
            obj.priceStates = message.priceStates.map((e) => e ? BandPriceState.toJSON(e) : undefined);
        }
        else {
            obj.priceStates = [];
        }
        return obj;
    },
    create(base) {
        return QueryBandPriceStatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBandPriceStatesResponse();
        message.priceStates = ((_a = object.priceStates) === null || _a === void 0 ? void 0 : _a.map((e) => BandPriceState.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryBandIBCPriceStatesRequest() {
    return {};
}
export const QueryBandIBCPriceStatesRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryBandIBCPriceStatesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryBandIBCPriceStatesRequest();
        return message;
    },
};
function createBaseQueryBandIBCPriceStatesResponse() {
    return { priceStates: [] };
}
export const QueryBandIBCPriceStatesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.priceStates) {
            BandPriceState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBandIBCPriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceStates.push(BandPriceState.decode(reader, reader.uint32()));
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
                ? object.priceStates.map((e) => BandPriceState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.priceStates) {
            obj.priceStates = message.priceStates.map((e) => e ? BandPriceState.toJSON(e) : undefined);
        }
        else {
            obj.priceStates = [];
        }
        return obj;
    },
    create(base) {
        return QueryBandIBCPriceStatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBandIBCPriceStatesResponse();
        message.priceStates = ((_a = object.priceStates) === null || _a === void 0 ? void 0 : _a.map((e) => BandPriceState.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryPriceFeedPriceStatesRequest() {
    return {};
}
export const QueryPriceFeedPriceStatesRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryPriceFeedPriceStatesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryPriceFeedPriceStatesRequest();
        return message;
    },
};
function createBaseQueryPriceFeedPriceStatesResponse() {
    return { priceStates: [] };
}
export const QueryPriceFeedPriceStatesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.priceStates) {
            PriceFeedState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPriceFeedPriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceStates.push(PriceFeedState.decode(reader, reader.uint32()));
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
                ? object.priceStates.map((e) => PriceFeedState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.priceStates) {
            obj.priceStates = message.priceStates.map((e) => e ? PriceFeedState.toJSON(e) : undefined);
        }
        else {
            obj.priceStates = [];
        }
        return obj;
    },
    create(base) {
        return QueryPriceFeedPriceStatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPriceFeedPriceStatesResponse();
        message.priceStates = ((_a = object.priceStates) === null || _a === void 0 ? void 0 : _a.map((e) => PriceFeedState.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryCoinbasePriceStatesRequest() {
    return {};
}
export const QueryCoinbasePriceStatesRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryCoinbasePriceStatesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryCoinbasePriceStatesRequest();
        return message;
    },
};
function createBaseQueryCoinbasePriceStatesResponse() {
    return { priceStates: [] };
}
export const QueryCoinbasePriceStatesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.priceStates) {
            CoinbasePriceState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCoinbasePriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceStates.push(CoinbasePriceState.decode(reader, reader.uint32()));
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
                ? object.priceStates.map((e) => CoinbasePriceState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.priceStates) {
            obj.priceStates = message.priceStates.map((e) => e ? CoinbasePriceState.toJSON(e) : undefined);
        }
        else {
            obj.priceStates = [];
        }
        return obj;
    },
    create(base) {
        return QueryCoinbasePriceStatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryCoinbasePriceStatesResponse();
        message.priceStates = ((_a = object.priceStates) === null || _a === void 0 ? void 0 : _a.map((e) => CoinbasePriceState.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryPythPriceStatesRequest() {
    return {};
}
export const QueryPythPriceStatesRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryPythPriceStatesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryPythPriceStatesRequest();
        return message;
    },
};
function createBaseQueryPythPriceStatesResponse() {
    return { priceStates: [] };
}
export const QueryPythPriceStatesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.priceStates) {
            PythPriceState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPythPriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceStates.push(PythPriceState.decode(reader, reader.uint32()));
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
                ? object.priceStates.map((e) => PythPriceState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.priceStates) {
            obj.priceStates = message.priceStates.map((e) => e ? PythPriceState.toJSON(e) : undefined);
        }
        else {
            obj.priceStates = [];
        }
        return obj;
    },
    create(base) {
        return QueryPythPriceStatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPythPriceStatesResponse();
        message.priceStates = ((_a = object.priceStates) === null || _a === void 0 ? void 0 : _a.map((e) => PythPriceState.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryProviderPriceStateRequest() {
    return { provider: "", symbol: "" };
}
export const QueryProviderPriceStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.provider !== "") {
            writer.uint32(10).string(message.provider);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryProviderPriceStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryProviderPriceStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.priceState !== undefined) {
            PriceState.encode(message.priceState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderPriceStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceState = PriceState.decode(reader, reader.uint32());
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
        return { priceState: isSet(object.priceState) ? PriceState.fromJSON(object.priceState) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.priceState !== undefined &&
            (obj.priceState = message.priceState ? PriceState.toJSON(message.priceState) : undefined);
        return obj;
    },
    create(base) {
        return QueryProviderPriceStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryProviderPriceStateResponse();
        message.priceState = (object.priceState !== undefined && object.priceState !== null)
            ? PriceState.fromPartial(object.priceState)
            : undefined;
        return message;
    },
};
function createBaseQueryModuleStateRequest() {
    return {};
}
export const QueryModuleStateRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryModuleStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
};
function createBaseQueryModuleStateResponse() {
    return { state: undefined };
}
export const QueryModuleStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.state !== undefined) {
            GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state = GenesisState.decode(reader, reader.uint32());
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
        return { state: isSet(object.state) ? GenesisState.fromJSON(object.state) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state ? GenesisState.toJSON(message.state) : undefined);
        return obj;
    },
    create(base) {
        return QueryModuleStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryModuleStateResponse();
        message.state = (object.state !== undefined && object.state !== null)
            ? GenesisState.fromPartial(object.state)
            : undefined;
        return message;
    },
};
function createBaseQueryHistoricalPriceRecordsRequest() {
    return { oracle: 0, symbolId: "" };
}
export const QueryHistoricalPriceRecordsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.oracle !== 0) {
            writer.uint32(8).int32(message.oracle);
        }
        if (message.symbolId !== "") {
            writer.uint32(18).string(message.symbolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
            oracle: isSet(object.oracle) ? oracleTypeFromJSON(object.oracle) : 0,
            symbolId: isSet(object.symbolId) ? String(object.symbolId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.oracle !== undefined && (obj.oracle = oracleTypeToJSON(message.oracle));
        message.symbolId !== undefined && (obj.symbolId = message.symbolId);
        return obj;
    },
    create(base) {
        return QueryHistoricalPriceRecordsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryHistoricalPriceRecordsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.priceRecords) {
            PriceRecords.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalPriceRecordsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.priceRecords.push(PriceRecords.decode(reader, reader.uint32()));
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
                ? object.priceRecords.map((e) => PriceRecords.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.priceRecords) {
            obj.priceRecords = message.priceRecords.map((e) => e ? PriceRecords.toJSON(e) : undefined);
        }
        else {
            obj.priceRecords = [];
        }
        return obj;
    },
    create(base) {
        return QueryHistoricalPriceRecordsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryHistoricalPriceRecordsResponse();
        message.priceRecords = ((_a = object.priceRecords) === null || _a === void 0 ? void 0 : _a.map((e) => PriceRecords.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOracleHistoryOptions() {
    return { maxAge: "0", includeRawHistory: false, includeMetadata: false };
}
export const OracleHistoryOptions = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return OracleHistoryOptions.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryOracleVolatilityRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseInfo !== undefined) {
            OracleInfo.encode(message.baseInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.quoteInfo !== undefined) {
            OracleInfo.encode(message.quoteInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.oracleHistoryOptions !== undefined) {
            OracleHistoryOptions.encode(message.oracleHistoryOptions, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleVolatilityRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.baseInfo = OracleInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.quoteInfo = OracleInfo.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.oracleHistoryOptions = OracleHistoryOptions.decode(reader, reader.uint32());
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
            baseInfo: isSet(object.baseInfo) ? OracleInfo.fromJSON(object.baseInfo) : undefined,
            quoteInfo: isSet(object.quoteInfo) ? OracleInfo.fromJSON(object.quoteInfo) : undefined,
            oracleHistoryOptions: isSet(object.oracleHistoryOptions)
                ? OracleHistoryOptions.fromJSON(object.oracleHistoryOptions)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseInfo !== undefined &&
            (obj.baseInfo = message.baseInfo ? OracleInfo.toJSON(message.baseInfo) : undefined);
        message.quoteInfo !== undefined &&
            (obj.quoteInfo = message.quoteInfo ? OracleInfo.toJSON(message.quoteInfo) : undefined);
        message.oracleHistoryOptions !== undefined && (obj.oracleHistoryOptions = message.oracleHistoryOptions
            ? OracleHistoryOptions.toJSON(message.oracleHistoryOptions)
            : undefined);
        return obj;
    },
    create(base) {
        return QueryOracleVolatilityRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryOracleVolatilityRequest();
        message.baseInfo = (object.baseInfo !== undefined && object.baseInfo !== null)
            ? OracleInfo.fromPartial(object.baseInfo)
            : undefined;
        message.quoteInfo = (object.quoteInfo !== undefined && object.quoteInfo !== null)
            ? OracleInfo.fromPartial(object.quoteInfo)
            : undefined;
        message.oracleHistoryOptions = (object.oracleHistoryOptions !== undefined && object.oracleHistoryOptions !== null)
            ? OracleHistoryOptions.fromPartial(object.oracleHistoryOptions)
            : undefined;
        return message;
    },
};
function createBaseQueryOracleVolatilityResponse() {
    return { volatility: "", historyMetadata: undefined, rawHistory: [] };
}
export const QueryOracleVolatilityResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.volatility !== "") {
            writer.uint32(10).string(message.volatility);
        }
        if (message.historyMetadata !== undefined) {
            MetadataStatistics.encode(message.historyMetadata, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.rawHistory) {
            PriceRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.historyMetadata = MetadataStatistics.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.rawHistory.push(PriceRecord.decode(reader, reader.uint32()));
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
            historyMetadata: isSet(object.historyMetadata) ? MetadataStatistics.fromJSON(object.historyMetadata) : undefined,
            rawHistory: Array.isArray(object === null || object === void 0 ? void 0 : object.rawHistory) ? object.rawHistory.map((e) => PriceRecord.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.volatility !== undefined && (obj.volatility = message.volatility);
        message.historyMetadata !== undefined &&
            (obj.historyMetadata = message.historyMetadata ? MetadataStatistics.toJSON(message.historyMetadata) : undefined);
        if (message.rawHistory) {
            obj.rawHistory = message.rawHistory.map((e) => e ? PriceRecord.toJSON(e) : undefined);
        }
        else {
            obj.rawHistory = [];
        }
        return obj;
    },
    create(base) {
        return QueryOracleVolatilityResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryOracleVolatilityResponse();
        message.volatility = (_a = object.volatility) !== null && _a !== void 0 ? _a : "";
        message.historyMetadata = (object.historyMetadata !== undefined && object.historyMetadata !== null)
            ? MetadataStatistics.fromPartial(object.historyMetadata)
            : undefined;
        message.rawHistory = ((_b = object.rawHistory) === null || _b === void 0 ? void 0 : _b.map((e) => PriceRecord.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryOracleProvidersInfoRequest() {
    return {};
}
export const QueryOracleProvidersInfoRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryOracleProvidersInfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryOracleProvidersInfoRequest();
        return message;
    },
};
function createBaseQueryOracleProvidersInfoResponse() {
    return { providers: [] };
}
export const QueryOracleProvidersInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.providers) {
            ProviderInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleProvidersInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.providers.push(ProviderInfo.decode(reader, reader.uint32()));
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
            providers: Array.isArray(object === null || object === void 0 ? void 0 : object.providers) ? object.providers.map((e) => ProviderInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.providers) {
            obj.providers = message.providers.map((e) => e ? ProviderInfo.toJSON(e) : undefined);
        }
        else {
            obj.providers = [];
        }
        return obj;
    },
    create(base) {
        return QueryOracleProvidersInfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOracleProvidersInfoResponse();
        message.providers = ((_a = object.providers) === null || _a === void 0 ? void 0 : _a.map((e) => ProviderInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryOracleProviderPricesRequest() {
    return { provider: "" };
}
export const QueryOracleProviderPricesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.provider !== "") {
            writer.uint32(10).string(message.provider);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryOracleProviderPricesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryOracleProviderPricesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.providerState) {
            ProviderState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleProviderPricesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.providerState.push(ProviderState.decode(reader, reader.uint32()));
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
                ? object.providerState.map((e) => ProviderState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.providerState) {
            obj.providerState = message.providerState.map((e) => e ? ProviderState.toJSON(e) : undefined);
        }
        else {
            obj.providerState = [];
        }
        return obj;
    },
    create(base) {
        return QueryOracleProviderPricesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOracleProviderPricesResponse();
        message.providerState = ((_a = object.providerState) === null || _a === void 0 ? void 0 : _a.map((e) => ProviderState.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryOraclePriceRequest() {
    return { oracleType: 0, base: "", quote: "" };
}
export const QueryOraclePriceRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
            oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
            base: isSet(object.base) ? String(object.base) : "",
            quote: isSet(object.quote) ? String(object.quote) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.oracleType !== undefined && (obj.oracleType = oracleTypeToJSON(message.oracleType));
        message.base !== undefined && (obj.base = message.base);
        message.quote !== undefined && (obj.quote = message.quote);
        return obj;
    },
    create(base) {
        return QueryOraclePriceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const PricePairState = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return PricePairState.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryOraclePriceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pricePairState !== undefined) {
            PricePairState.encode(message.pricePairState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOraclePriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pricePairState = PricePairState.decode(reader, reader.uint32());
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
            pricePairState: isSet(object.pricePairState) ? PricePairState.fromJSON(object.pricePairState) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pricePairState !== undefined &&
            (obj.pricePairState = message.pricePairState ? PricePairState.toJSON(message.pricePairState) : undefined);
        return obj;
    },
    create(base) {
        return QueryOraclePriceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryOraclePriceResponse();
        message.pricePairState = (object.pricePairState !== undefined && object.pricePairState !== null)
            ? PricePairState.fromPartial(object.pricePairState)
            : undefined;
        return message;
    },
};
export class QueryClientImpl {
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
        return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
    }
    BandRelayers(request, metadata) {
        return this.rpc.unary(QueryBandRelayersDesc, QueryBandRelayersRequest.fromPartial(request), metadata);
    }
    BandPriceStates(request, metadata) {
        return this.rpc.unary(QueryBandPriceStatesDesc, QueryBandPriceStatesRequest.fromPartial(request), metadata);
    }
    BandIBCPriceStates(request, metadata) {
        return this.rpc.unary(QueryBandIBCPriceStatesDesc, QueryBandIBCPriceStatesRequest.fromPartial(request), metadata);
    }
    PriceFeedPriceStates(request, metadata) {
        return this.rpc.unary(QueryPriceFeedPriceStatesDesc, QueryPriceFeedPriceStatesRequest.fromPartial(request), metadata);
    }
    CoinbasePriceStates(request, metadata) {
        return this.rpc.unary(QueryCoinbasePriceStatesDesc, QueryCoinbasePriceStatesRequest.fromPartial(request), metadata);
    }
    PythPriceStates(request, metadata) {
        return this.rpc.unary(QueryPythPriceStatesDesc, QueryPythPriceStatesRequest.fromPartial(request), metadata);
    }
    ProviderPriceState(request, metadata) {
        return this.rpc.unary(QueryProviderPriceStateDesc, QueryProviderPriceStateRequest.fromPartial(request), metadata);
    }
    OracleModuleState(request, metadata) {
        return this.rpc.unary(QueryOracleModuleStateDesc, QueryModuleStateRequest.fromPartial(request), metadata);
    }
    HistoricalPriceRecords(request, metadata) {
        return this.rpc.unary(QueryHistoricalPriceRecordsDesc, QueryHistoricalPriceRecordsRequest.fromPartial(request), metadata);
    }
    OracleVolatility(request, metadata) {
        return this.rpc.unary(QueryOracleVolatilityDesc, QueryOracleVolatilityRequest.fromPartial(request), metadata);
    }
    OracleProvidersInfo(request, metadata) {
        return this.rpc.unary(QueryOracleProvidersInfoDesc, QueryOracleProvidersInfoRequest.fromPartial(request), metadata);
    }
    OracleProviderPrices(request, metadata) {
        return this.rpc.unary(QueryOracleProviderPricesDesc, QueryOracleProviderPricesRequest.fromPartial(request), metadata);
    }
    OraclePrice(request, metadata) {
        return this.rpc.unary(QueryOraclePriceDesc, QueryOraclePriceRequest.fromPartial(request), metadata);
    }
    PythPrice(request, metadata) {
        return this.rpc.unary(QueryPythPriceDesc, QueryPythPriceRequest.fromPartial(request), metadata);
    }
}
export const QueryDesc = { serviceName: "injective.oracle.v1beta1.Query" };
export const QueryParamsDesc = {
    methodName: "Params",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryParamsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryParamsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryBandRelayersDesc = {
    methodName: "BandRelayers",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryBandRelayersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryBandRelayersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryBandPriceStatesDesc = {
    methodName: "BandPriceStates",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryBandPriceStatesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryBandPriceStatesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryBandIBCPriceStatesDesc = {
    methodName: "BandIBCPriceStates",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryBandIBCPriceStatesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryBandIBCPriceStatesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryPriceFeedPriceStatesDesc = {
    methodName: "PriceFeedPriceStates",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryPriceFeedPriceStatesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryPriceFeedPriceStatesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryCoinbasePriceStatesDesc = {
    methodName: "CoinbasePriceStates",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryCoinbasePriceStatesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryCoinbasePriceStatesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryPythPriceStatesDesc = {
    methodName: "PythPriceStates",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryPythPriceStatesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryPythPriceStatesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryProviderPriceStateDesc = {
    methodName: "ProviderPriceState",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryProviderPriceStateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryProviderPriceStateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryOracleModuleStateDesc = {
    methodName: "OracleModuleState",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryModuleStateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryModuleStateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryHistoricalPriceRecordsDesc = {
    methodName: "HistoricalPriceRecords",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryHistoricalPriceRecordsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryHistoricalPriceRecordsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryOracleVolatilityDesc = {
    methodName: "OracleVolatility",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryOracleVolatilityRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryOracleVolatilityResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryOracleProvidersInfoDesc = {
    methodName: "OracleProvidersInfo",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryOracleProvidersInfoRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryOracleProvidersInfoResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryOracleProviderPricesDesc = {
    methodName: "OracleProviderPrices",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryOracleProviderPricesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryOracleProviderPricesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryOraclePriceDesc = {
    methodName: "OraclePrice",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryOraclePriceRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryOraclePriceResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryPythPriceDesc = {
    methodName: "PythPrice",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryPythPriceRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryPythPriceResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export class GrpcWebImpl {
    constructor(host, options) {
        this.host = host;
        this.options = options;
    }
    unary(methodDesc, _request, metadata) {
        var _a;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new Promise((resolve, reject) => {
            grpc.unary(methodDesc, {
                request,
                host: this.host,
                metadata: maybeCombinedMetadata,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (response) {
                    if (response.status === grpc.Code.OK) {
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
export class GrpcWebError extends tsProtoGlobalThis.Error {
    constructor(message, code, metadata) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}
