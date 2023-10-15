/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
export const protobufPackage = "injective_spot_exchange_rpc";
function createBaseMarketsRequest() {
    return { marketStatus: "", baseDenom: "", quoteDenom: "", marketStatuses: [] };
}
export const MarketsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketStatus !== "") {
            writer.uint32(10).string(message.marketStatus);
        }
        if (message.baseDenom !== "") {
            writer.uint32(18).string(message.baseDenom);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(26).string(message.quoteDenom);
        }
        for (const v of message.marketStatuses) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketStatus = reader.string();
                    break;
                case 2:
                    message.baseDenom = reader.string();
                    break;
                case 3:
                    message.quoteDenom = reader.string();
                    break;
                case 4:
                    message.marketStatuses.push(reader.string());
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
            marketStatus: isSet(object.marketStatus) ? String(object.marketStatus) : "",
            baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            marketStatuses: Array.isArray(object === null || object === void 0 ? void 0 : object.marketStatuses) ? object.marketStatuses.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketStatus !== undefined && (obj.marketStatus = message.marketStatus);
        message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        if (message.marketStatuses) {
            obj.marketStatuses = message.marketStatuses.map((e) => e);
        }
        else {
            obj.marketStatuses = [];
        }
        return obj;
    },
    create(base) {
        return MarketsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMarketsRequest();
        message.marketStatus = (_a = object.marketStatus) !== null && _a !== void 0 ? _a : "";
        message.baseDenom = (_b = object.baseDenom) !== null && _b !== void 0 ? _b : "";
        message.quoteDenom = (_c = object.quoteDenom) !== null && _c !== void 0 ? _c : "";
        message.marketStatuses = ((_d = object.marketStatuses) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
function createBaseMarketsResponse() {
    return { markets: [] };
}
export const MarketsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.markets) {
            SpotMarketInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.markets.push(SpotMarketInfo.decode(reader, reader.uint32()));
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
            markets: Array.isArray(object === null || object === void 0 ? void 0 : object.markets) ? object.markets.map((e) => SpotMarketInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map((e) => e ? SpotMarketInfo.toJSON(e) : undefined);
        }
        else {
            obj.markets = [];
        }
        return obj;
    },
    create(base) {
        return MarketsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMarketsResponse();
        message.markets = ((_a = object.markets) === null || _a === void 0 ? void 0 : _a.map((e) => SpotMarketInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSpotMarketInfo() {
    return {
        marketId: "",
        marketStatus: "",
        ticker: "",
        baseDenom: "",
        baseTokenMeta: undefined,
        quoteDenom: "",
        quoteTokenMeta: undefined,
        makerFeeRate: "",
        takerFeeRate: "",
        serviceProviderFee: "",
        minPriceTickSize: "",
        minQuantityTickSize: "",
    };
}
export const SpotMarketInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.marketStatus !== "") {
            writer.uint32(18).string(message.marketStatus);
        }
        if (message.ticker !== "") {
            writer.uint32(26).string(message.ticker);
        }
        if (message.baseDenom !== "") {
            writer.uint32(34).string(message.baseDenom);
        }
        if (message.baseTokenMeta !== undefined) {
            TokenMeta.encode(message.baseTokenMeta, writer.uint32(42).fork()).ldelim();
        }
        if (message.quoteDenom !== "") {
            writer.uint32(50).string(message.quoteDenom);
        }
        if (message.quoteTokenMeta !== undefined) {
            TokenMeta.encode(message.quoteTokenMeta, writer.uint32(58).fork()).ldelim();
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(66).string(message.makerFeeRate);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(74).string(message.takerFeeRate);
        }
        if (message.serviceProviderFee !== "") {
            writer.uint32(82).string(message.serviceProviderFee);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(90).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(98).string(message.minQuantityTickSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotMarketInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.marketStatus = reader.string();
                    break;
                case 3:
                    message.ticker = reader.string();
                    break;
                case 4:
                    message.baseDenom = reader.string();
                    break;
                case 5:
                    message.baseTokenMeta = TokenMeta.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.quoteDenom = reader.string();
                    break;
                case 7:
                    message.quoteTokenMeta = TokenMeta.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.makerFeeRate = reader.string();
                    break;
                case 9:
                    message.takerFeeRate = reader.string();
                    break;
                case 10:
                    message.serviceProviderFee = reader.string();
                    break;
                case 11:
                    message.minPriceTickSize = reader.string();
                    break;
                case 12:
                    message.minQuantityTickSize = reader.string();
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
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            marketStatus: isSet(object.marketStatus) ? String(object.marketStatus) : "",
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
            baseTokenMeta: isSet(object.baseTokenMeta) ? TokenMeta.fromJSON(object.baseTokenMeta) : undefined,
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            quoteTokenMeta: isSet(object.quoteTokenMeta) ? TokenMeta.fromJSON(object.quoteTokenMeta) : undefined,
            makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
            takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
            serviceProviderFee: isSet(object.serviceProviderFee) ? String(object.serviceProviderFee) : "",
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.marketStatus !== undefined && (obj.marketStatus = message.marketStatus);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
        message.baseTokenMeta !== undefined &&
            (obj.baseTokenMeta = message.baseTokenMeta ? TokenMeta.toJSON(message.baseTokenMeta) : undefined);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.quoteTokenMeta !== undefined &&
            (obj.quoteTokenMeta = message.quoteTokenMeta ? TokenMeta.toJSON(message.quoteTokenMeta) : undefined);
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.serviceProviderFee !== undefined && (obj.serviceProviderFee = message.serviceProviderFee);
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        return obj;
    },
    create(base) {
        return SpotMarketInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseSpotMarketInfo();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.marketStatus = (_b = object.marketStatus) !== null && _b !== void 0 ? _b : "";
        message.ticker = (_c = object.ticker) !== null && _c !== void 0 ? _c : "";
        message.baseDenom = (_d = object.baseDenom) !== null && _d !== void 0 ? _d : "";
        message.baseTokenMeta = (object.baseTokenMeta !== undefined && object.baseTokenMeta !== null)
            ? TokenMeta.fromPartial(object.baseTokenMeta)
            : undefined;
        message.quoteDenom = (_e = object.quoteDenom) !== null && _e !== void 0 ? _e : "";
        message.quoteTokenMeta = (object.quoteTokenMeta !== undefined && object.quoteTokenMeta !== null)
            ? TokenMeta.fromPartial(object.quoteTokenMeta)
            : undefined;
        message.makerFeeRate = (_f = object.makerFeeRate) !== null && _f !== void 0 ? _f : "";
        message.takerFeeRate = (_g = object.takerFeeRate) !== null && _g !== void 0 ? _g : "";
        message.serviceProviderFee = (_h = object.serviceProviderFee) !== null && _h !== void 0 ? _h : "";
        message.minPriceTickSize = (_j = object.minPriceTickSize) !== null && _j !== void 0 ? _j : "";
        message.minQuantityTickSize = (_k = object.minQuantityTickSize) !== null && _k !== void 0 ? _k : "";
        return message;
    },
};
function createBaseTokenMeta() {
    return { name: "", address: "", symbol: "", logo: "", decimals: 0, updatedAt: "0" };
}
export const TokenMeta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.symbol !== "") {
            writer.uint32(26).string(message.symbol);
        }
        if (message.logo !== "") {
            writer.uint32(34).string(message.logo);
        }
        if (message.decimals !== 0) {
            writer.uint32(40).sint32(message.decimals);
        }
        if (message.updatedAt !== "0") {
            writer.uint32(48).sint64(message.updatedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.symbol = reader.string();
                    break;
                case 4:
                    message.logo = reader.string();
                    break;
                case 5:
                    message.decimals = reader.sint32();
                    break;
                case 6:
                    message.updatedAt = longToString(reader.sint64());
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
            name: isSet(object.name) ? String(object.name) : "",
            address: isSet(object.address) ? String(object.address) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            logo: isSet(object.logo) ? String(object.logo) : "",
            decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.address !== undefined && (obj.address = message.address);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.logo !== undefined && (obj.logo = message.logo);
        message.decimals !== undefined && (obj.decimals = Math.round(message.decimals));
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        return obj;
    },
    create(base) {
        return TokenMeta.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseTokenMeta();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.symbol = (_c = object.symbol) !== null && _c !== void 0 ? _c : "";
        message.logo = (_d = object.logo) !== null && _d !== void 0 ? _d : "";
        message.decimals = (_e = object.decimals) !== null && _e !== void 0 ? _e : 0;
        message.updatedAt = (_f = object.updatedAt) !== null && _f !== void 0 ? _f : "0";
        return message;
    },
};
function createBaseMarketRequest() {
    return { marketId: "" };
}
export const MarketRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return MarketRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMarketRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMarketResponse() {
    return { market: undefined };
}
export const MarketResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.market !== undefined) {
            SpotMarketInfo.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = SpotMarketInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { market: isSet(object.market) ? SpotMarketInfo.fromJSON(object.market) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined && (obj.market = message.market ? SpotMarketInfo.toJSON(message.market) : undefined);
        return obj;
    },
    create(base) {
        return MarketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMarketResponse();
        message.market = (object.market !== undefined && object.market !== null)
            ? SpotMarketInfo.fromPartial(object.market)
            : undefined;
        return message;
    },
};
function createBaseStreamMarketsRequest() {
    return { marketIds: [] };
}
export const StreamMarketsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.marketIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamMarketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.marketIds) {
            obj.marketIds = message.marketIds.map((e) => e);
        }
        else {
            obj.marketIds = [];
        }
        return obj;
    },
    create(base) {
        return StreamMarketsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStreamMarketsRequest();
        message.marketIds = ((_a = object.marketIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseStreamMarketsResponse() {
    return { market: undefined, operationType: "", timestamp: "0" };
}
export const StreamMarketsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.market !== undefined) {
            SpotMarketInfo.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationType !== "") {
            writer.uint32(18).string(message.operationType);
        }
        if (message.timestamp !== "0") {
            writer.uint32(24).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = SpotMarketInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationType = reader.string();
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
            market: isSet(object.market) ? SpotMarketInfo.fromJSON(object.market) : undefined,
            operationType: isSet(object.operationType) ? String(object.operationType) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined && (obj.market = message.market ? SpotMarketInfo.toJSON(message.market) : undefined);
        message.operationType !== undefined && (obj.operationType = message.operationType);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return StreamMarketsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStreamMarketsResponse();
        message.market = (object.market !== undefined && object.market !== null)
            ? SpotMarketInfo.fromPartial(object.market)
            : undefined;
        message.operationType = (_a = object.operationType) !== null && _a !== void 0 ? _a : "";
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseOrderbookV2Request() {
    return { marketId: "" };
}
export const OrderbookV2Request = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderbookV2Request();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return OrderbookV2Request.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrderbookV2Request();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseOrderbookV2Response() {
    return { orderbook: undefined };
}
export const OrderbookV2Response = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderbook !== undefined) {
            SpotLimitOrderbookV2.encode(message.orderbook, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderbookV2Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderbook = SpotLimitOrderbookV2.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { orderbook: isSet(object.orderbook) ? SpotLimitOrderbookV2.fromJSON(object.orderbook) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.orderbook !== undefined &&
            (obj.orderbook = message.orderbook ? SpotLimitOrderbookV2.toJSON(message.orderbook) : undefined);
        return obj;
    },
    create(base) {
        return OrderbookV2Response.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseOrderbookV2Response();
        message.orderbook = (object.orderbook !== undefined && object.orderbook !== null)
            ? SpotLimitOrderbookV2.fromPartial(object.orderbook)
            : undefined;
        return message;
    },
};
function createBaseSpotLimitOrderbookV2() {
    return { buys: [], sells: [], sequence: "0", timestamp: "0" };
}
export const SpotLimitOrderbookV2 = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.buys) {
            PriceLevel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sells) {
            PriceLevel.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.sequence !== "0") {
            writer.uint32(24).uint64(message.sequence);
        }
        if (message.timestamp !== "0") {
            writer.uint32(32).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotLimitOrderbookV2();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buys.push(PriceLevel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.sells.push(PriceLevel.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.sequence = longToString(reader.uint64());
                    break;
                case 4:
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
            buys: Array.isArray(object === null || object === void 0 ? void 0 : object.buys) ? object.buys.map((e) => PriceLevel.fromJSON(e)) : [],
            sells: Array.isArray(object === null || object === void 0 ? void 0 : object.sells) ? object.sells.map((e) => PriceLevel.fromJSON(e)) : [],
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.buys) {
            obj.buys = message.buys.map((e) => e ? PriceLevel.toJSON(e) : undefined);
        }
        else {
            obj.buys = [];
        }
        if (message.sells) {
            obj.sells = message.sells.map((e) => e ? PriceLevel.toJSON(e) : undefined);
        }
        else {
            obj.sells = [];
        }
        message.sequence !== undefined && (obj.sequence = message.sequence);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return SpotLimitOrderbookV2.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSpotLimitOrderbookV2();
        message.buys = ((_a = object.buys) === null || _a === void 0 ? void 0 : _a.map((e) => PriceLevel.fromPartial(e))) || [];
        message.sells = ((_b = object.sells) === null || _b === void 0 ? void 0 : _b.map((e) => PriceLevel.fromPartial(e))) || [];
        message.sequence = (_c = object.sequence) !== null && _c !== void 0 ? _c : "0";
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBasePriceLevel() {
    return { price: "", quantity: "", timestamp: "0" };
}
export const PriceLevel = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(message.quantity);
        }
        if (message.timestamp !== "0") {
            writer.uint32(24).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePriceLevel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = reader.string();
                    break;
                case 2:
                    message.quantity = reader.string();
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
            price: isSet(object.price) ? String(object.price) : "",
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return PriceLevel.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePriceLevel();
        message.price = (_a = object.price) !== null && _a !== void 0 ? _a : "";
        message.quantity = (_b = object.quantity) !== null && _b !== void 0 ? _b : "";
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseOrderbooksV2Request() {
    return { marketIds: [] };
}
export const OrderbooksV2Request = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.marketIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderbooksV2Request();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.marketIds) {
            obj.marketIds = message.marketIds.map((e) => e);
        }
        else {
            obj.marketIds = [];
        }
        return obj;
    },
    create(base) {
        return OrderbooksV2Request.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrderbooksV2Request();
        message.marketIds = ((_a = object.marketIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseOrderbooksV2Response() {
    return { orderbooks: [] };
}
export const OrderbooksV2Response = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orderbooks) {
            SingleSpotLimitOrderbookV2.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderbooksV2Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderbooks.push(SingleSpotLimitOrderbookV2.decode(reader, reader.uint32()));
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
            orderbooks: Array.isArray(object === null || object === void 0 ? void 0 : object.orderbooks)
                ? object.orderbooks.map((e) => SingleSpotLimitOrderbookV2.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orderbooks) {
            obj.orderbooks = message.orderbooks.map((e) => e ? SingleSpotLimitOrderbookV2.toJSON(e) : undefined);
        }
        else {
            obj.orderbooks = [];
        }
        return obj;
    },
    create(base) {
        return OrderbooksV2Response.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrderbooksV2Response();
        message.orderbooks = ((_a = object.orderbooks) === null || _a === void 0 ? void 0 : _a.map((e) => SingleSpotLimitOrderbookV2.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSingleSpotLimitOrderbookV2() {
    return { marketId: "", orderbook: undefined };
}
export const SingleSpotLimitOrderbookV2 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.orderbook !== undefined) {
            SpotLimitOrderbookV2.encode(message.orderbook, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSingleSpotLimitOrderbookV2();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.orderbook = SpotLimitOrderbookV2.decode(reader, reader.uint32());
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
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            orderbook: isSet(object.orderbook) ? SpotLimitOrderbookV2.fromJSON(object.orderbook) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.orderbook !== undefined &&
            (obj.orderbook = message.orderbook ? SpotLimitOrderbookV2.toJSON(message.orderbook) : undefined);
        return obj;
    },
    create(base) {
        return SingleSpotLimitOrderbookV2.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSingleSpotLimitOrderbookV2();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.orderbook = (object.orderbook !== undefined && object.orderbook !== null)
            ? SpotLimitOrderbookV2.fromPartial(object.orderbook)
            : undefined;
        return message;
    },
};
function createBaseStreamOrderbookV2Request() {
    return { marketIds: [] };
}
export const StreamOrderbookV2Request = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.marketIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOrderbookV2Request();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.marketIds) {
            obj.marketIds = message.marketIds.map((e) => e);
        }
        else {
            obj.marketIds = [];
        }
        return obj;
    },
    create(base) {
        return StreamOrderbookV2Request.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStreamOrderbookV2Request();
        message.marketIds = ((_a = object.marketIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseStreamOrderbookV2Response() {
    return { orderbook: undefined, operationType: "", timestamp: "0", marketId: "" };
}
export const StreamOrderbookV2Response = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderbook !== undefined) {
            SpotLimitOrderbookV2.encode(message.orderbook, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationType !== "") {
            writer.uint32(18).string(message.operationType);
        }
        if (message.timestamp !== "0") {
            writer.uint32(24).sint64(message.timestamp);
        }
        if (message.marketId !== "") {
            writer.uint32(34).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOrderbookV2Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderbook = SpotLimitOrderbookV2.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationType = reader.string();
                    break;
                case 3:
                    message.timestamp = longToString(reader.sint64());
                    break;
                case 4:
                    message.marketId = reader.string();
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
            orderbook: isSet(object.orderbook) ? SpotLimitOrderbookV2.fromJSON(object.orderbook) : undefined,
            operationType: isSet(object.operationType) ? String(object.operationType) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderbook !== undefined &&
            (obj.orderbook = message.orderbook ? SpotLimitOrderbookV2.toJSON(message.orderbook) : undefined);
        message.operationType !== undefined && (obj.operationType = message.operationType);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return StreamOrderbookV2Response.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseStreamOrderbookV2Response();
        message.orderbook = (object.orderbook !== undefined && object.orderbook !== null)
            ? SpotLimitOrderbookV2.fromPartial(object.orderbook)
            : undefined;
        message.operationType = (_a = object.operationType) !== null && _a !== void 0 ? _a : "";
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : "0";
        message.marketId = (_c = object.marketId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseStreamOrderbookUpdateRequest() {
    return { marketIds: [] };
}
export const StreamOrderbookUpdateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.marketIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOrderbookUpdateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.marketIds) {
            obj.marketIds = message.marketIds.map((e) => e);
        }
        else {
            obj.marketIds = [];
        }
        return obj;
    },
    create(base) {
        return StreamOrderbookUpdateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStreamOrderbookUpdateRequest();
        message.marketIds = ((_a = object.marketIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseStreamOrderbookUpdateResponse() {
    return { orderbookLevelUpdates: undefined, operationType: "", timestamp: "0", marketId: "" };
}
export const StreamOrderbookUpdateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderbookLevelUpdates !== undefined) {
            OrderbookLevelUpdates.encode(message.orderbookLevelUpdates, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationType !== "") {
            writer.uint32(18).string(message.operationType);
        }
        if (message.timestamp !== "0") {
            writer.uint32(24).sint64(message.timestamp);
        }
        if (message.marketId !== "") {
            writer.uint32(34).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOrderbookUpdateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderbookLevelUpdates = OrderbookLevelUpdates.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationType = reader.string();
                    break;
                case 3:
                    message.timestamp = longToString(reader.sint64());
                    break;
                case 4:
                    message.marketId = reader.string();
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
            orderbookLevelUpdates: isSet(object.orderbookLevelUpdates)
                ? OrderbookLevelUpdates.fromJSON(object.orderbookLevelUpdates)
                : undefined,
            operationType: isSet(object.operationType) ? String(object.operationType) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderbookLevelUpdates !== undefined && (obj.orderbookLevelUpdates = message.orderbookLevelUpdates
            ? OrderbookLevelUpdates.toJSON(message.orderbookLevelUpdates)
            : undefined);
        message.operationType !== undefined && (obj.operationType = message.operationType);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return StreamOrderbookUpdateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseStreamOrderbookUpdateResponse();
        message.orderbookLevelUpdates =
            (object.orderbookLevelUpdates !== undefined && object.orderbookLevelUpdates !== null)
                ? OrderbookLevelUpdates.fromPartial(object.orderbookLevelUpdates)
                : undefined;
        message.operationType = (_a = object.operationType) !== null && _a !== void 0 ? _a : "";
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : "0";
        message.marketId = (_c = object.marketId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseOrderbookLevelUpdates() {
    return { marketId: "", sequence: "0", buys: [], sells: [], updatedAt: "0" };
}
export const OrderbookLevelUpdates = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.sequence !== "0") {
            writer.uint32(16).uint64(message.sequence);
        }
        for (const v of message.buys) {
            PriceLevelUpdate.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sells) {
            PriceLevelUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.updatedAt !== "0") {
            writer.uint32(40).sint64(message.updatedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderbookLevelUpdates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.sequence = longToString(reader.uint64());
                    break;
                case 3:
                    message.buys.push(PriceLevelUpdate.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sells.push(PriceLevelUpdate.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.updatedAt = longToString(reader.sint64());
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
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
            buys: Array.isArray(object === null || object === void 0 ? void 0 : object.buys) ? object.buys.map((e) => PriceLevelUpdate.fromJSON(e)) : [],
            sells: Array.isArray(object === null || object === void 0 ? void 0 : object.sells) ? object.sells.map((e) => PriceLevelUpdate.fromJSON(e)) : [],
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        if (message.buys) {
            obj.buys = message.buys.map((e) => e ? PriceLevelUpdate.toJSON(e) : undefined);
        }
        else {
            obj.buys = [];
        }
        if (message.sells) {
            obj.sells = message.sells.map((e) => e ? PriceLevelUpdate.toJSON(e) : undefined);
        }
        else {
            obj.sells = [];
        }
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        return obj;
    },
    create(base) {
        return OrderbookLevelUpdates.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseOrderbookLevelUpdates();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.sequence = (_b = object.sequence) !== null && _b !== void 0 ? _b : "0";
        message.buys = ((_c = object.buys) === null || _c === void 0 ? void 0 : _c.map((e) => PriceLevelUpdate.fromPartial(e))) || [];
        message.sells = ((_d = object.sells) === null || _d === void 0 ? void 0 : _d.map((e) => PriceLevelUpdate.fromPartial(e))) || [];
        message.updatedAt = (_e = object.updatedAt) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
function createBasePriceLevelUpdate() {
    return { price: "", quantity: "", isActive: false, timestamp: "0" };
}
export const PriceLevelUpdate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(message.quantity);
        }
        if (message.isActive === true) {
            writer.uint32(24).bool(message.isActive);
        }
        if (message.timestamp !== "0") {
            writer.uint32(32).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePriceLevelUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = reader.string();
                    break;
                case 2:
                    message.quantity = reader.string();
                    break;
                case 3:
                    message.isActive = reader.bool();
                    break;
                case 4:
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
            price: isSet(object.price) ? String(object.price) : "",
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.isActive !== undefined && (obj.isActive = message.isActive);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return PriceLevelUpdate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBasePriceLevelUpdate();
        message.price = (_a = object.price) !== null && _a !== void 0 ? _a : "";
        message.quantity = (_b = object.quantity) !== null && _b !== void 0 ? _b : "";
        message.isActive = (_c = object.isActive) !== null && _c !== void 0 ? _c : false;
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseOrdersRequest() {
    return {
        marketId: "",
        orderSide: "",
        subaccountId: "",
        skip: "0",
        limit: 0,
        startTime: "0",
        endTime: "0",
        marketIds: [],
        includeInactive: false,
        subaccountTotalOrders: false,
        tradeId: "",
    };
}
export const OrdersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.orderSide !== "") {
            writer.uint32(18).string(message.orderSide);
        }
        if (message.subaccountId !== "") {
            writer.uint32(26).string(message.subaccountId);
        }
        if (message.skip !== "0") {
            writer.uint32(32).uint64(message.skip);
        }
        if (message.limit !== 0) {
            writer.uint32(40).sint32(message.limit);
        }
        if (message.startTime !== "0") {
            writer.uint32(48).sint64(message.startTime);
        }
        if (message.endTime !== "0") {
            writer.uint32(56).sint64(message.endTime);
        }
        for (const v of message.marketIds) {
            writer.uint32(66).string(v);
        }
        if (message.includeInactive === true) {
            writer.uint32(72).bool(message.includeInactive);
        }
        if (message.subaccountTotalOrders === true) {
            writer.uint32(80).bool(message.subaccountTotalOrders);
        }
        if (message.tradeId !== "") {
            writer.uint32(90).string(message.tradeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.orderSide = reader.string();
                    break;
                case 3:
                    message.subaccountId = reader.string();
                    break;
                case 4:
                    message.skip = longToString(reader.uint64());
                    break;
                case 5:
                    message.limit = reader.sint32();
                    break;
                case 6:
                    message.startTime = longToString(reader.sint64());
                    break;
                case 7:
                    message.endTime = longToString(reader.sint64());
                    break;
                case 8:
                    message.marketIds.push(reader.string());
                    break;
                case 9:
                    message.includeInactive = reader.bool();
                    break;
                case 10:
                    message.subaccountTotalOrders = reader.bool();
                    break;
                case 11:
                    message.tradeId = reader.string();
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
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            orderSide: isSet(object.orderSide) ? String(object.orderSide) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            skip: isSet(object.skip) ? String(object.skip) : "0",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            startTime: isSet(object.startTime) ? String(object.startTime) : "0",
            endTime: isSet(object.endTime) ? String(object.endTime) : "0",
            marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [],
            includeInactive: isSet(object.includeInactive) ? Boolean(object.includeInactive) : false,
            subaccountTotalOrders: isSet(object.subaccountTotalOrders) ? Boolean(object.subaccountTotalOrders) : false,
            tradeId: isSet(object.tradeId) ? String(object.tradeId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.orderSide !== undefined && (obj.orderSide = message.orderSide);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.skip !== undefined && (obj.skip = message.skip);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        if (message.marketIds) {
            obj.marketIds = message.marketIds.map((e) => e);
        }
        else {
            obj.marketIds = [];
        }
        message.includeInactive !== undefined && (obj.includeInactive = message.includeInactive);
        message.subaccountTotalOrders !== undefined && (obj.subaccountTotalOrders = message.subaccountTotalOrders);
        message.tradeId !== undefined && (obj.tradeId = message.tradeId);
        return obj;
    },
    create(base) {
        return OrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseOrdersRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.orderSide = (_b = object.orderSide) !== null && _b !== void 0 ? _b : "";
        message.subaccountId = (_c = object.subaccountId) !== null && _c !== void 0 ? _c : "";
        message.skip = (_d = object.skip) !== null && _d !== void 0 ? _d : "0";
        message.limit = (_e = object.limit) !== null && _e !== void 0 ? _e : 0;
        message.startTime = (_f = object.startTime) !== null && _f !== void 0 ? _f : "0";
        message.endTime = (_g = object.endTime) !== null && _g !== void 0 ? _g : "0";
        message.marketIds = ((_h = object.marketIds) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.includeInactive = (_j = object.includeInactive) !== null && _j !== void 0 ? _j : false;
        message.subaccountTotalOrders = (_k = object.subaccountTotalOrders) !== null && _k !== void 0 ? _k : false;
        message.tradeId = (_l = object.tradeId) !== null && _l !== void 0 ? _l : "";
        return message;
    },
};
function createBaseOrdersResponse() {
    return { orders: [], paging: undefined };
}
export const OrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            SpotLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.paging !== undefined) {
            Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(SpotLimitOrder.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.paging = Paging.decode(reader, reader.uint32());
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
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => SpotLimitOrder.fromJSON(e)) : [],
            paging: isSet(object.paging) ? Paging.fromJSON(object.paging) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? SpotLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        message.paging !== undefined && (obj.paging = message.paging ? Paging.toJSON(message.paging) : undefined);
        return obj;
    },
    create(base) {
        return OrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrdersResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => SpotLimitOrder.fromPartial(e))) || [];
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? Paging.fromPartial(object.paging)
            : undefined;
        return message;
    },
};
function createBaseSpotLimitOrder() {
    return {
        orderHash: "",
        orderSide: "",
        marketId: "",
        subaccountId: "",
        price: "",
        quantity: "",
        unfilledQuantity: "",
        triggerPrice: "",
        feeRecipient: "",
        state: "",
        createdAt: "0",
        updatedAt: "0",
        txHash: "",
    };
}
export const SpotLimitOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        if (message.orderSide !== "") {
            writer.uint32(18).string(message.orderSide);
        }
        if (message.marketId !== "") {
            writer.uint32(26).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(34).string(message.subaccountId);
        }
        if (message.price !== "") {
            writer.uint32(42).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(50).string(message.quantity);
        }
        if (message.unfilledQuantity !== "") {
            writer.uint32(58).string(message.unfilledQuantity);
        }
        if (message.triggerPrice !== "") {
            writer.uint32(66).string(message.triggerPrice);
        }
        if (message.feeRecipient !== "") {
            writer.uint32(74).string(message.feeRecipient);
        }
        if (message.state !== "") {
            writer.uint32(82).string(message.state);
        }
        if (message.createdAt !== "0") {
            writer.uint32(88).sint64(message.createdAt);
        }
        if (message.updatedAt !== "0") {
            writer.uint32(96).sint64(message.updatedAt);
        }
        if (message.txHash !== "") {
            writer.uint32(106).string(message.txHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderHash = reader.string();
                    break;
                case 2:
                    message.orderSide = reader.string();
                    break;
                case 3:
                    message.marketId = reader.string();
                    break;
                case 4:
                    message.subaccountId = reader.string();
                    break;
                case 5:
                    message.price = reader.string();
                    break;
                case 6:
                    message.quantity = reader.string();
                    break;
                case 7:
                    message.unfilledQuantity = reader.string();
                    break;
                case 8:
                    message.triggerPrice = reader.string();
                    break;
                case 9:
                    message.feeRecipient = reader.string();
                    break;
                case 10:
                    message.state = reader.string();
                    break;
                case 11:
                    message.createdAt = longToString(reader.sint64());
                    break;
                case 12:
                    message.updatedAt = longToString(reader.sint64());
                    break;
                case 13:
                    message.txHash = reader.string();
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
            orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
            orderSide: isSet(object.orderSide) ? String(object.orderSide) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            price: isSet(object.price) ? String(object.price) : "",
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            unfilledQuantity: isSet(object.unfilledQuantity) ? String(object.unfilledQuantity) : "",
            triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : "",
            feeRecipient: isSet(object.feeRecipient) ? String(object.feeRecipient) : "",
            state: isSet(object.state) ? String(object.state) : "",
            createdAt: isSet(object.createdAt) ? String(object.createdAt) : "0",
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
            txHash: isSet(object.txHash) ? String(object.txHash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        message.orderSide !== undefined && (obj.orderSide = message.orderSide);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.price !== undefined && (obj.price = message.price);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.unfilledQuantity !== undefined && (obj.unfilledQuantity = message.unfilledQuantity);
        message.triggerPrice !== undefined && (obj.triggerPrice = message.triggerPrice);
        message.feeRecipient !== undefined && (obj.feeRecipient = message.feeRecipient);
        message.state !== undefined && (obj.state = message.state);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        return obj;
    },
    create(base) {
        return SpotLimitOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseSpotLimitOrder();
        message.orderHash = (_a = object.orderHash) !== null && _a !== void 0 ? _a : "";
        message.orderSide = (_b = object.orderSide) !== null && _b !== void 0 ? _b : "";
        message.marketId = (_c = object.marketId) !== null && _c !== void 0 ? _c : "";
        message.subaccountId = (_d = object.subaccountId) !== null && _d !== void 0 ? _d : "";
        message.price = (_e = object.price) !== null && _e !== void 0 ? _e : "";
        message.quantity = (_f = object.quantity) !== null && _f !== void 0 ? _f : "";
        message.unfilledQuantity = (_g = object.unfilledQuantity) !== null && _g !== void 0 ? _g : "";
        message.triggerPrice = (_h = object.triggerPrice) !== null && _h !== void 0 ? _h : "";
        message.feeRecipient = (_j = object.feeRecipient) !== null && _j !== void 0 ? _j : "";
        message.state = (_k = object.state) !== null && _k !== void 0 ? _k : "";
        message.createdAt = (_l = object.createdAt) !== null && _l !== void 0 ? _l : "0";
        message.updatedAt = (_m = object.updatedAt) !== null && _m !== void 0 ? _m : "0";
        message.txHash = (_o = object.txHash) !== null && _o !== void 0 ? _o : "";
        return message;
    },
};
function createBasePaging() {
    return { total: "0", from: 0, to: 0, countBySubaccount: "0", next: [] };
}
export const Paging = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.total !== "0") {
            writer.uint32(8).sint64(message.total);
        }
        if (message.from !== 0) {
            writer.uint32(16).sint32(message.from);
        }
        if (message.to !== 0) {
            writer.uint32(24).sint32(message.to);
        }
        if (message.countBySubaccount !== "0") {
            writer.uint32(32).sint64(message.countBySubaccount);
        }
        for (const v of message.next) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePaging();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = longToString(reader.sint64());
                    break;
                case 2:
                    message.from = reader.sint32();
                    break;
                case 3:
                    message.to = reader.sint32();
                    break;
                case 4:
                    message.countBySubaccount = longToString(reader.sint64());
                    break;
                case 5:
                    message.next.push(reader.string());
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
            total: isSet(object.total) ? String(object.total) : "0",
            from: isSet(object.from) ? Number(object.from) : 0,
            to: isSet(object.to) ? Number(object.to) : 0,
            countBySubaccount: isSet(object.countBySubaccount) ? String(object.countBySubaccount) : "0",
            next: Array.isArray(object === null || object === void 0 ? void 0 : object.next) ? object.next.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.total !== undefined && (obj.total = message.total);
        message.from !== undefined && (obj.from = Math.round(message.from));
        message.to !== undefined && (obj.to = Math.round(message.to));
        message.countBySubaccount !== undefined && (obj.countBySubaccount = message.countBySubaccount);
        if (message.next) {
            obj.next = message.next.map((e) => e);
        }
        else {
            obj.next = [];
        }
        return obj;
    },
    create(base) {
        return Paging.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBasePaging();
        message.total = (_a = object.total) !== null && _a !== void 0 ? _a : "0";
        message.from = (_b = object.from) !== null && _b !== void 0 ? _b : 0;
        message.to = (_c = object.to) !== null && _c !== void 0 ? _c : 0;
        message.countBySubaccount = (_d = object.countBySubaccount) !== null && _d !== void 0 ? _d : "0";
        message.next = ((_e = object.next) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
function createBaseStreamOrdersRequest() {
    return {
        marketId: "",
        orderSide: "",
        subaccountId: "",
        skip: "0",
        limit: 0,
        startTime: "0",
        endTime: "0",
        marketIds: [],
        includeInactive: false,
        subaccountTotalOrders: false,
        tradeId: "",
    };
}
export const StreamOrdersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.orderSide !== "") {
            writer.uint32(18).string(message.orderSide);
        }
        if (message.subaccountId !== "") {
            writer.uint32(26).string(message.subaccountId);
        }
        if (message.skip !== "0") {
            writer.uint32(32).uint64(message.skip);
        }
        if (message.limit !== 0) {
            writer.uint32(40).sint32(message.limit);
        }
        if (message.startTime !== "0") {
            writer.uint32(48).sint64(message.startTime);
        }
        if (message.endTime !== "0") {
            writer.uint32(56).sint64(message.endTime);
        }
        for (const v of message.marketIds) {
            writer.uint32(66).string(v);
        }
        if (message.includeInactive === true) {
            writer.uint32(72).bool(message.includeInactive);
        }
        if (message.subaccountTotalOrders === true) {
            writer.uint32(80).bool(message.subaccountTotalOrders);
        }
        if (message.tradeId !== "") {
            writer.uint32(90).string(message.tradeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.orderSide = reader.string();
                    break;
                case 3:
                    message.subaccountId = reader.string();
                    break;
                case 4:
                    message.skip = longToString(reader.uint64());
                    break;
                case 5:
                    message.limit = reader.sint32();
                    break;
                case 6:
                    message.startTime = longToString(reader.sint64());
                    break;
                case 7:
                    message.endTime = longToString(reader.sint64());
                    break;
                case 8:
                    message.marketIds.push(reader.string());
                    break;
                case 9:
                    message.includeInactive = reader.bool();
                    break;
                case 10:
                    message.subaccountTotalOrders = reader.bool();
                    break;
                case 11:
                    message.tradeId = reader.string();
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
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            orderSide: isSet(object.orderSide) ? String(object.orderSide) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            skip: isSet(object.skip) ? String(object.skip) : "0",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            startTime: isSet(object.startTime) ? String(object.startTime) : "0",
            endTime: isSet(object.endTime) ? String(object.endTime) : "0",
            marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [],
            includeInactive: isSet(object.includeInactive) ? Boolean(object.includeInactive) : false,
            subaccountTotalOrders: isSet(object.subaccountTotalOrders) ? Boolean(object.subaccountTotalOrders) : false,
            tradeId: isSet(object.tradeId) ? String(object.tradeId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.orderSide !== undefined && (obj.orderSide = message.orderSide);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.skip !== undefined && (obj.skip = message.skip);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        if (message.marketIds) {
            obj.marketIds = message.marketIds.map((e) => e);
        }
        else {
            obj.marketIds = [];
        }
        message.includeInactive !== undefined && (obj.includeInactive = message.includeInactive);
        message.subaccountTotalOrders !== undefined && (obj.subaccountTotalOrders = message.subaccountTotalOrders);
        message.tradeId !== undefined && (obj.tradeId = message.tradeId);
        return obj;
    },
    create(base) {
        return StreamOrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseStreamOrdersRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.orderSide = (_b = object.orderSide) !== null && _b !== void 0 ? _b : "";
        message.subaccountId = (_c = object.subaccountId) !== null && _c !== void 0 ? _c : "";
        message.skip = (_d = object.skip) !== null && _d !== void 0 ? _d : "0";
        message.limit = (_e = object.limit) !== null && _e !== void 0 ? _e : 0;
        message.startTime = (_f = object.startTime) !== null && _f !== void 0 ? _f : "0";
        message.endTime = (_g = object.endTime) !== null && _g !== void 0 ? _g : "0";
        message.marketIds = ((_h = object.marketIds) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.includeInactive = (_j = object.includeInactive) !== null && _j !== void 0 ? _j : false;
        message.subaccountTotalOrders = (_k = object.subaccountTotalOrders) !== null && _k !== void 0 ? _k : false;
        message.tradeId = (_l = object.tradeId) !== null && _l !== void 0 ? _l : "";
        return message;
    },
};
function createBaseStreamOrdersResponse() {
    return { order: undefined, operationType: "", timestamp: "0" };
}
export const StreamOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            SpotLimitOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationType !== "") {
            writer.uint32(18).string(message.operationType);
        }
        if (message.timestamp !== "0") {
            writer.uint32(24).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = SpotLimitOrder.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationType = reader.string();
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
            order: isSet(object.order) ? SpotLimitOrder.fromJSON(object.order) : undefined,
            operationType: isSet(object.operationType) ? String(object.operationType) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.order !== undefined && (obj.order = message.order ? SpotLimitOrder.toJSON(message.order) : undefined);
        message.operationType !== undefined && (obj.operationType = message.operationType);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return StreamOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStreamOrdersResponse();
        message.order = (object.order !== undefined && object.order !== null)
            ? SpotLimitOrder.fromPartial(object.order)
            : undefined;
        message.operationType = (_a = object.operationType) !== null && _a !== void 0 ? _a : "";
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseTradesRequest() {
    return {
        marketId: "",
        executionSide: "",
        direction: "",
        subaccountId: "",
        skip: "0",
        limit: 0,
        startTime: "0",
        endTime: "0",
        marketIds: [],
        subaccountIds: [],
        executionTypes: [],
        tradeId: "",
        accountAddress: "",
    };
}
export const TradesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.executionSide !== "") {
            writer.uint32(18).string(message.executionSide);
        }
        if (message.direction !== "") {
            writer.uint32(26).string(message.direction);
        }
        if (message.subaccountId !== "") {
            writer.uint32(34).string(message.subaccountId);
        }
        if (message.skip !== "0") {
            writer.uint32(40).uint64(message.skip);
        }
        if (message.limit !== 0) {
            writer.uint32(48).sint32(message.limit);
        }
        if (message.startTime !== "0") {
            writer.uint32(56).sint64(message.startTime);
        }
        if (message.endTime !== "0") {
            writer.uint32(64).sint64(message.endTime);
        }
        for (const v of message.marketIds) {
            writer.uint32(74).string(v);
        }
        for (const v of message.subaccountIds) {
            writer.uint32(82).string(v);
        }
        for (const v of message.executionTypes) {
            writer.uint32(90).string(v);
        }
        if (message.tradeId !== "") {
            writer.uint32(98).string(message.tradeId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(106).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.executionSide = reader.string();
                    break;
                case 3:
                    message.direction = reader.string();
                    break;
                case 4:
                    message.subaccountId = reader.string();
                    break;
                case 5:
                    message.skip = longToString(reader.uint64());
                    break;
                case 6:
                    message.limit = reader.sint32();
                    break;
                case 7:
                    message.startTime = longToString(reader.sint64());
                    break;
                case 8:
                    message.endTime = longToString(reader.sint64());
                    break;
                case 9:
                    message.marketIds.push(reader.string());
                    break;
                case 10:
                    message.subaccountIds.push(reader.string());
                    break;
                case 11:
                    message.executionTypes.push(reader.string());
                    break;
                case 12:
                    message.tradeId = reader.string();
                    break;
                case 13:
                    message.accountAddress = reader.string();
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
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            executionSide: isSet(object.executionSide) ? String(object.executionSide) : "",
            direction: isSet(object.direction) ? String(object.direction) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            skip: isSet(object.skip) ? String(object.skip) : "0",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            startTime: isSet(object.startTime) ? String(object.startTime) : "0",
            endTime: isSet(object.endTime) ? String(object.endTime) : "0",
            marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [],
            subaccountIds: Array.isArray(object === null || object === void 0 ? void 0 : object.subaccountIds) ? object.subaccountIds.map((e) => String(e)) : [],
            executionTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.executionTypes) ? object.executionTypes.map((e) => String(e)) : [],
            tradeId: isSet(object.tradeId) ? String(object.tradeId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.executionSide !== undefined && (obj.executionSide = message.executionSide);
        message.direction !== undefined && (obj.direction = message.direction);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.skip !== undefined && (obj.skip = message.skip);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        if (message.marketIds) {
            obj.marketIds = message.marketIds.map((e) => e);
        }
        else {
            obj.marketIds = [];
        }
        if (message.subaccountIds) {
            obj.subaccountIds = message.subaccountIds.map((e) => e);
        }
        else {
            obj.subaccountIds = [];
        }
        if (message.executionTypes) {
            obj.executionTypes = message.executionTypes.map((e) => e);
        }
        else {
            obj.executionTypes = [];
        }
        message.tradeId !== undefined && (obj.tradeId = message.tradeId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return TradesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseTradesRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.executionSide = (_b = object.executionSide) !== null && _b !== void 0 ? _b : "";
        message.direction = (_c = object.direction) !== null && _c !== void 0 ? _c : "";
        message.subaccountId = (_d = object.subaccountId) !== null && _d !== void 0 ? _d : "";
        message.skip = (_e = object.skip) !== null && _e !== void 0 ? _e : "0";
        message.limit = (_f = object.limit) !== null && _f !== void 0 ? _f : 0;
        message.startTime = (_g = object.startTime) !== null && _g !== void 0 ? _g : "0";
        message.endTime = (_h = object.endTime) !== null && _h !== void 0 ? _h : "0";
        message.marketIds = ((_j = object.marketIds) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.subaccountIds = ((_k = object.subaccountIds) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.executionTypes = ((_l = object.executionTypes) === null || _l === void 0 ? void 0 : _l.map((e) => e)) || [];
        message.tradeId = (_m = object.tradeId) !== null && _m !== void 0 ? _m : "";
        message.accountAddress = (_o = object.accountAddress) !== null && _o !== void 0 ? _o : "";
        return message;
    },
};
function createBaseTradesResponse() {
    return { trades: [], paging: undefined };
}
export const TradesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.trades) {
            SpotTrade.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.paging !== undefined) {
            Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trades.push(SpotTrade.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.paging = Paging.decode(reader, reader.uint32());
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
            trades: Array.isArray(object === null || object === void 0 ? void 0 : object.trades) ? object.trades.map((e) => SpotTrade.fromJSON(e)) : [],
            paging: isSet(object.paging) ? Paging.fromJSON(object.paging) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.trades) {
            obj.trades = message.trades.map((e) => e ? SpotTrade.toJSON(e) : undefined);
        }
        else {
            obj.trades = [];
        }
        message.paging !== undefined && (obj.paging = message.paging ? Paging.toJSON(message.paging) : undefined);
        return obj;
    },
    create(base) {
        return TradesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTradesResponse();
        message.trades = ((_a = object.trades) === null || _a === void 0 ? void 0 : _a.map((e) => SpotTrade.fromPartial(e))) || [];
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? Paging.fromPartial(object.paging)
            : undefined;
        return message;
    },
};
function createBaseSpotTrade() {
    return {
        orderHash: "",
        subaccountId: "",
        marketId: "",
        tradeExecutionType: "",
        tradeDirection: "",
        price: undefined,
        fee: "",
        executedAt: "0",
        feeRecipient: "",
        tradeId: "",
        executionSide: "",
    };
}
export const SpotTrade = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(26).string(message.marketId);
        }
        if (message.tradeExecutionType !== "") {
            writer.uint32(34).string(message.tradeExecutionType);
        }
        if (message.tradeDirection !== "") {
            writer.uint32(42).string(message.tradeDirection);
        }
        if (message.price !== undefined) {
            PriceLevel.encode(message.price, writer.uint32(50).fork()).ldelim();
        }
        if (message.fee !== "") {
            writer.uint32(58).string(message.fee);
        }
        if (message.executedAt !== "0") {
            writer.uint32(64).sint64(message.executedAt);
        }
        if (message.feeRecipient !== "") {
            writer.uint32(74).string(message.feeRecipient);
        }
        if (message.tradeId !== "") {
            writer.uint32(82).string(message.tradeId);
        }
        if (message.executionSide !== "") {
            writer.uint32(90).string(message.executionSide);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotTrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderHash = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.string();
                    break;
                case 3:
                    message.marketId = reader.string();
                    break;
                case 4:
                    message.tradeExecutionType = reader.string();
                    break;
                case 5:
                    message.tradeDirection = reader.string();
                    break;
                case 6:
                    message.price = PriceLevel.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.fee = reader.string();
                    break;
                case 8:
                    message.executedAt = longToString(reader.sint64());
                    break;
                case 9:
                    message.feeRecipient = reader.string();
                    break;
                case 10:
                    message.tradeId = reader.string();
                    break;
                case 11:
                    message.executionSide = reader.string();
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
            orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            tradeExecutionType: isSet(object.tradeExecutionType) ? String(object.tradeExecutionType) : "",
            tradeDirection: isSet(object.tradeDirection) ? String(object.tradeDirection) : "",
            price: isSet(object.price) ? PriceLevel.fromJSON(object.price) : undefined,
            fee: isSet(object.fee) ? String(object.fee) : "",
            executedAt: isSet(object.executedAt) ? String(object.executedAt) : "0",
            feeRecipient: isSet(object.feeRecipient) ? String(object.feeRecipient) : "",
            tradeId: isSet(object.tradeId) ? String(object.tradeId) : "",
            executionSide: isSet(object.executionSide) ? String(object.executionSide) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.tradeExecutionType !== undefined && (obj.tradeExecutionType = message.tradeExecutionType);
        message.tradeDirection !== undefined && (obj.tradeDirection = message.tradeDirection);
        message.price !== undefined && (obj.price = message.price ? PriceLevel.toJSON(message.price) : undefined);
        message.fee !== undefined && (obj.fee = message.fee);
        message.executedAt !== undefined && (obj.executedAt = message.executedAt);
        message.feeRecipient !== undefined && (obj.feeRecipient = message.feeRecipient);
        message.tradeId !== undefined && (obj.tradeId = message.tradeId);
        message.executionSide !== undefined && (obj.executionSide = message.executionSide);
        return obj;
    },
    create(base) {
        return SpotTrade.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseSpotTrade();
        message.orderHash = (_a = object.orderHash) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.marketId = (_c = object.marketId) !== null && _c !== void 0 ? _c : "";
        message.tradeExecutionType = (_d = object.tradeExecutionType) !== null && _d !== void 0 ? _d : "";
        message.tradeDirection = (_e = object.tradeDirection) !== null && _e !== void 0 ? _e : "";
        message.price = (object.price !== undefined && object.price !== null)
            ? PriceLevel.fromPartial(object.price)
            : undefined;
        message.fee = (_f = object.fee) !== null && _f !== void 0 ? _f : "";
        message.executedAt = (_g = object.executedAt) !== null && _g !== void 0 ? _g : "0";
        message.feeRecipient = (_h = object.feeRecipient) !== null && _h !== void 0 ? _h : "";
        message.tradeId = (_j = object.tradeId) !== null && _j !== void 0 ? _j : "";
        message.executionSide = (_k = object.executionSide) !== null && _k !== void 0 ? _k : "";
        return message;
    },
};
function createBaseStreamTradesRequest() {
    return {
        marketId: "",
        executionSide: "",
        direction: "",
        subaccountId: "",
        skip: "0",
        limit: 0,
        startTime: "0",
        endTime: "0",
        marketIds: [],
        subaccountIds: [],
        executionTypes: [],
        tradeId: "",
        accountAddress: "",
    };
}
export const StreamTradesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.executionSide !== "") {
            writer.uint32(18).string(message.executionSide);
        }
        if (message.direction !== "") {
            writer.uint32(26).string(message.direction);
        }
        if (message.subaccountId !== "") {
            writer.uint32(34).string(message.subaccountId);
        }
        if (message.skip !== "0") {
            writer.uint32(40).uint64(message.skip);
        }
        if (message.limit !== 0) {
            writer.uint32(48).sint32(message.limit);
        }
        if (message.startTime !== "0") {
            writer.uint32(56).sint64(message.startTime);
        }
        if (message.endTime !== "0") {
            writer.uint32(64).sint64(message.endTime);
        }
        for (const v of message.marketIds) {
            writer.uint32(74).string(v);
        }
        for (const v of message.subaccountIds) {
            writer.uint32(82).string(v);
        }
        for (const v of message.executionTypes) {
            writer.uint32(90).string(v);
        }
        if (message.tradeId !== "") {
            writer.uint32(98).string(message.tradeId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(106).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamTradesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.executionSide = reader.string();
                    break;
                case 3:
                    message.direction = reader.string();
                    break;
                case 4:
                    message.subaccountId = reader.string();
                    break;
                case 5:
                    message.skip = longToString(reader.uint64());
                    break;
                case 6:
                    message.limit = reader.sint32();
                    break;
                case 7:
                    message.startTime = longToString(reader.sint64());
                    break;
                case 8:
                    message.endTime = longToString(reader.sint64());
                    break;
                case 9:
                    message.marketIds.push(reader.string());
                    break;
                case 10:
                    message.subaccountIds.push(reader.string());
                    break;
                case 11:
                    message.executionTypes.push(reader.string());
                    break;
                case 12:
                    message.tradeId = reader.string();
                    break;
                case 13:
                    message.accountAddress = reader.string();
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
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            executionSide: isSet(object.executionSide) ? String(object.executionSide) : "",
            direction: isSet(object.direction) ? String(object.direction) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            skip: isSet(object.skip) ? String(object.skip) : "0",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            startTime: isSet(object.startTime) ? String(object.startTime) : "0",
            endTime: isSet(object.endTime) ? String(object.endTime) : "0",
            marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [],
            subaccountIds: Array.isArray(object === null || object === void 0 ? void 0 : object.subaccountIds) ? object.subaccountIds.map((e) => String(e)) : [],
            executionTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.executionTypes) ? object.executionTypes.map((e) => String(e)) : [],
            tradeId: isSet(object.tradeId) ? String(object.tradeId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.executionSide !== undefined && (obj.executionSide = message.executionSide);
        message.direction !== undefined && (obj.direction = message.direction);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.skip !== undefined && (obj.skip = message.skip);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        if (message.marketIds) {
            obj.marketIds = message.marketIds.map((e) => e);
        }
        else {
            obj.marketIds = [];
        }
        if (message.subaccountIds) {
            obj.subaccountIds = message.subaccountIds.map((e) => e);
        }
        else {
            obj.subaccountIds = [];
        }
        if (message.executionTypes) {
            obj.executionTypes = message.executionTypes.map((e) => e);
        }
        else {
            obj.executionTypes = [];
        }
        message.tradeId !== undefined && (obj.tradeId = message.tradeId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return StreamTradesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseStreamTradesRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.executionSide = (_b = object.executionSide) !== null && _b !== void 0 ? _b : "";
        message.direction = (_c = object.direction) !== null && _c !== void 0 ? _c : "";
        message.subaccountId = (_d = object.subaccountId) !== null && _d !== void 0 ? _d : "";
        message.skip = (_e = object.skip) !== null && _e !== void 0 ? _e : "0";
        message.limit = (_f = object.limit) !== null && _f !== void 0 ? _f : 0;
        message.startTime = (_g = object.startTime) !== null && _g !== void 0 ? _g : "0";
        message.endTime = (_h = object.endTime) !== null && _h !== void 0 ? _h : "0";
        message.marketIds = ((_j = object.marketIds) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.subaccountIds = ((_k = object.subaccountIds) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.executionTypes = ((_l = object.executionTypes) === null || _l === void 0 ? void 0 : _l.map((e) => e)) || [];
        message.tradeId = (_m = object.tradeId) !== null && _m !== void 0 ? _m : "";
        message.accountAddress = (_o = object.accountAddress) !== null && _o !== void 0 ? _o : "";
        return message;
    },
};
function createBaseStreamTradesResponse() {
    return { trade: undefined, operationType: "", timestamp: "0" };
}
export const StreamTradesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.trade !== undefined) {
            SpotTrade.encode(message.trade, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationType !== "") {
            writer.uint32(18).string(message.operationType);
        }
        if (message.timestamp !== "0") {
            writer.uint32(24).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamTradesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trade = SpotTrade.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationType = reader.string();
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
            trade: isSet(object.trade) ? SpotTrade.fromJSON(object.trade) : undefined,
            operationType: isSet(object.operationType) ? String(object.operationType) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.trade !== undefined && (obj.trade = message.trade ? SpotTrade.toJSON(message.trade) : undefined);
        message.operationType !== undefined && (obj.operationType = message.operationType);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return StreamTradesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStreamTradesResponse();
        message.trade = (object.trade !== undefined && object.trade !== null)
            ? SpotTrade.fromPartial(object.trade)
            : undefined;
        message.operationType = (_a = object.operationType) !== null && _a !== void 0 ? _a : "";
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseSubaccountOrdersListRequest() {
    return { subaccountId: "", marketId: "", skip: "0", limit: 0 };
}
export const SubaccountOrdersListRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.skip !== "0") {
            writer.uint32(24).uint64(message.skip);
        }
        if (message.limit !== 0) {
            writer.uint32(32).sint32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountOrdersListRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.skip = longToString(reader.uint64());
                    break;
                case 4:
                    message.limit = reader.sint32();
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
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            skip: isSet(object.skip) ? String(object.skip) : "0",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.skip !== undefined && (obj.skip = message.skip);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        return obj;
    },
    create(base) {
        return SubaccountOrdersListRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSubaccountOrdersListRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.skip = (_c = object.skip) !== null && _c !== void 0 ? _c : "0";
        message.limit = (_d = object.limit) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseSubaccountOrdersListResponse() {
    return { orders: [], paging: undefined };
}
export const SubaccountOrdersListResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            SpotLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.paging !== undefined) {
            Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountOrdersListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(SpotLimitOrder.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.paging = Paging.decode(reader, reader.uint32());
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
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => SpotLimitOrder.fromJSON(e)) : [],
            paging: isSet(object.paging) ? Paging.fromJSON(object.paging) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? SpotLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        message.paging !== undefined && (obj.paging = message.paging ? Paging.toJSON(message.paging) : undefined);
        return obj;
    },
    create(base) {
        return SubaccountOrdersListResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSubaccountOrdersListResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => SpotLimitOrder.fromPartial(e))) || [];
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? Paging.fromPartial(object.paging)
            : undefined;
        return message;
    },
};
function createBaseSubaccountTradesListRequest() {
    return { subaccountId: "", marketId: "", executionType: "", direction: "", skip: "0", limit: 0 };
}
export const SubaccountTradesListRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.executionType !== "") {
            writer.uint32(26).string(message.executionType);
        }
        if (message.direction !== "") {
            writer.uint32(34).string(message.direction);
        }
        if (message.skip !== "0") {
            writer.uint32(40).uint64(message.skip);
        }
        if (message.limit !== 0) {
            writer.uint32(48).sint32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountTradesListRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.executionType = reader.string();
                    break;
                case 4:
                    message.direction = reader.string();
                    break;
                case 5:
                    message.skip = longToString(reader.uint64());
                    break;
                case 6:
                    message.limit = reader.sint32();
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
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            executionType: isSet(object.executionType) ? String(object.executionType) : "",
            direction: isSet(object.direction) ? String(object.direction) : "",
            skip: isSet(object.skip) ? String(object.skip) : "0",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.executionType !== undefined && (obj.executionType = message.executionType);
        message.direction !== undefined && (obj.direction = message.direction);
        message.skip !== undefined && (obj.skip = message.skip);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        return obj;
    },
    create(base) {
        return SubaccountTradesListRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseSubaccountTradesListRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.executionType = (_c = object.executionType) !== null && _c !== void 0 ? _c : "";
        message.direction = (_d = object.direction) !== null && _d !== void 0 ? _d : "";
        message.skip = (_e = object.skip) !== null && _e !== void 0 ? _e : "0";
        message.limit = (_f = object.limit) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseSubaccountTradesListResponse() {
    return { trades: [] };
}
export const SubaccountTradesListResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.trades) {
            SpotTrade.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountTradesListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trades.push(SpotTrade.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { trades: Array.isArray(object === null || object === void 0 ? void 0 : object.trades) ? object.trades.map((e) => SpotTrade.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.trades) {
            obj.trades = message.trades.map((e) => e ? SpotTrade.toJSON(e) : undefined);
        }
        else {
            obj.trades = [];
        }
        return obj;
    },
    create(base) {
        return SubaccountTradesListResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSubaccountTradesListResponse();
        message.trades = ((_a = object.trades) === null || _a === void 0 ? void 0 : _a.map((e) => SpotTrade.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOrdersHistoryRequest() {
    return {
        subaccountId: "",
        marketId: "",
        skip: "0",
        limit: 0,
        orderTypes: [],
        direction: "",
        startTime: "0",
        endTime: "0",
        state: "",
        executionTypes: [],
        marketIds: [],
        tradeId: "",
        activeMarketsOnly: false,
    };
}
export const OrdersHistoryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.skip !== "0") {
            writer.uint32(24).uint64(message.skip);
        }
        if (message.limit !== 0) {
            writer.uint32(32).sint32(message.limit);
        }
        for (const v of message.orderTypes) {
            writer.uint32(42).string(v);
        }
        if (message.direction !== "") {
            writer.uint32(50).string(message.direction);
        }
        if (message.startTime !== "0") {
            writer.uint32(56).sint64(message.startTime);
        }
        if (message.endTime !== "0") {
            writer.uint32(64).sint64(message.endTime);
        }
        if (message.state !== "") {
            writer.uint32(74).string(message.state);
        }
        for (const v of message.executionTypes) {
            writer.uint32(82).string(v);
        }
        for (const v of message.marketIds) {
            writer.uint32(90).string(v);
        }
        if (message.tradeId !== "") {
            writer.uint32(98).string(message.tradeId);
        }
        if (message.activeMarketsOnly === true) {
            writer.uint32(104).bool(message.activeMarketsOnly);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrdersHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.skip = longToString(reader.uint64());
                    break;
                case 4:
                    message.limit = reader.sint32();
                    break;
                case 5:
                    message.orderTypes.push(reader.string());
                    break;
                case 6:
                    message.direction = reader.string();
                    break;
                case 7:
                    message.startTime = longToString(reader.sint64());
                    break;
                case 8:
                    message.endTime = longToString(reader.sint64());
                    break;
                case 9:
                    message.state = reader.string();
                    break;
                case 10:
                    message.executionTypes.push(reader.string());
                    break;
                case 11:
                    message.marketIds.push(reader.string());
                    break;
                case 12:
                    message.tradeId = reader.string();
                    break;
                case 13:
                    message.activeMarketsOnly = reader.bool();
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
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            skip: isSet(object.skip) ? String(object.skip) : "0",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            orderTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.orderTypes) ? object.orderTypes.map((e) => String(e)) : [],
            direction: isSet(object.direction) ? String(object.direction) : "",
            startTime: isSet(object.startTime) ? String(object.startTime) : "0",
            endTime: isSet(object.endTime) ? String(object.endTime) : "0",
            state: isSet(object.state) ? String(object.state) : "",
            executionTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.executionTypes) ? object.executionTypes.map((e) => String(e)) : [],
            marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [],
            tradeId: isSet(object.tradeId) ? String(object.tradeId) : "",
            activeMarketsOnly: isSet(object.activeMarketsOnly) ? Boolean(object.activeMarketsOnly) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.skip !== undefined && (obj.skip = message.skip);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        if (message.orderTypes) {
            obj.orderTypes = message.orderTypes.map((e) => e);
        }
        else {
            obj.orderTypes = [];
        }
        message.direction !== undefined && (obj.direction = message.direction);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        message.state !== undefined && (obj.state = message.state);
        if (message.executionTypes) {
            obj.executionTypes = message.executionTypes.map((e) => e);
        }
        else {
            obj.executionTypes = [];
        }
        if (message.marketIds) {
            obj.marketIds = message.marketIds.map((e) => e);
        }
        else {
            obj.marketIds = [];
        }
        message.tradeId !== undefined && (obj.tradeId = message.tradeId);
        message.activeMarketsOnly !== undefined && (obj.activeMarketsOnly = message.activeMarketsOnly);
        return obj;
    },
    create(base) {
        return OrdersHistoryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseOrdersHistoryRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.skip = (_c = object.skip) !== null && _c !== void 0 ? _c : "0";
        message.limit = (_d = object.limit) !== null && _d !== void 0 ? _d : 0;
        message.orderTypes = ((_e = object.orderTypes) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.direction = (_f = object.direction) !== null && _f !== void 0 ? _f : "";
        message.startTime = (_g = object.startTime) !== null && _g !== void 0 ? _g : "0";
        message.endTime = (_h = object.endTime) !== null && _h !== void 0 ? _h : "0";
        message.state = (_j = object.state) !== null && _j !== void 0 ? _j : "";
        message.executionTypes = ((_k = object.executionTypes) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.marketIds = ((_l = object.marketIds) === null || _l === void 0 ? void 0 : _l.map((e) => e)) || [];
        message.tradeId = (_m = object.tradeId) !== null && _m !== void 0 ? _m : "";
        message.activeMarketsOnly = (_o = object.activeMarketsOnly) !== null && _o !== void 0 ? _o : false;
        return message;
    },
};
function createBaseOrdersHistoryResponse() {
    return { orders: [], paging: undefined };
}
export const OrdersHistoryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            SpotOrderHistory.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.paging !== undefined) {
            Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrdersHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(SpotOrderHistory.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.paging = Paging.decode(reader, reader.uint32());
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
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => SpotOrderHistory.fromJSON(e)) : [],
            paging: isSet(object.paging) ? Paging.fromJSON(object.paging) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? SpotOrderHistory.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        message.paging !== undefined && (obj.paging = message.paging ? Paging.toJSON(message.paging) : undefined);
        return obj;
    },
    create(base) {
        return OrdersHistoryResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrdersHistoryResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => SpotOrderHistory.fromPartial(e))) || [];
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? Paging.fromPartial(object.paging)
            : undefined;
        return message;
    },
};
function createBaseSpotOrderHistory() {
    return {
        orderHash: "",
        marketId: "",
        isActive: false,
        subaccountId: "",
        executionType: "",
        orderType: "",
        price: "",
        triggerPrice: "",
        quantity: "",
        filledQuantity: "",
        state: "",
        createdAt: "0",
        updatedAt: "0",
        direction: "",
        txHash: "",
    };
}
export const SpotOrderHistory = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.isActive === true) {
            writer.uint32(24).bool(message.isActive);
        }
        if (message.subaccountId !== "") {
            writer.uint32(34).string(message.subaccountId);
        }
        if (message.executionType !== "") {
            writer.uint32(42).string(message.executionType);
        }
        if (message.orderType !== "") {
            writer.uint32(50).string(message.orderType);
        }
        if (message.price !== "") {
            writer.uint32(58).string(message.price);
        }
        if (message.triggerPrice !== "") {
            writer.uint32(66).string(message.triggerPrice);
        }
        if (message.quantity !== "") {
            writer.uint32(74).string(message.quantity);
        }
        if (message.filledQuantity !== "") {
            writer.uint32(82).string(message.filledQuantity);
        }
        if (message.state !== "") {
            writer.uint32(90).string(message.state);
        }
        if (message.createdAt !== "0") {
            writer.uint32(96).sint64(message.createdAt);
        }
        if (message.updatedAt !== "0") {
            writer.uint32(104).sint64(message.updatedAt);
        }
        if (message.direction !== "") {
            writer.uint32(114).string(message.direction);
        }
        if (message.txHash !== "") {
            writer.uint32(122).string(message.txHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotOrderHistory();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderHash = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.isActive = reader.bool();
                    break;
                case 4:
                    message.subaccountId = reader.string();
                    break;
                case 5:
                    message.executionType = reader.string();
                    break;
                case 6:
                    message.orderType = reader.string();
                    break;
                case 7:
                    message.price = reader.string();
                    break;
                case 8:
                    message.triggerPrice = reader.string();
                    break;
                case 9:
                    message.quantity = reader.string();
                    break;
                case 10:
                    message.filledQuantity = reader.string();
                    break;
                case 11:
                    message.state = reader.string();
                    break;
                case 12:
                    message.createdAt = longToString(reader.sint64());
                    break;
                case 13:
                    message.updatedAt = longToString(reader.sint64());
                    break;
                case 14:
                    message.direction = reader.string();
                    break;
                case 15:
                    message.txHash = reader.string();
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
            orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            executionType: isSet(object.executionType) ? String(object.executionType) : "",
            orderType: isSet(object.orderType) ? String(object.orderType) : "",
            price: isSet(object.price) ? String(object.price) : "",
            triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : "",
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            filledQuantity: isSet(object.filledQuantity) ? String(object.filledQuantity) : "",
            state: isSet(object.state) ? String(object.state) : "",
            createdAt: isSet(object.createdAt) ? String(object.createdAt) : "0",
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
            direction: isSet(object.direction) ? String(object.direction) : "",
            txHash: isSet(object.txHash) ? String(object.txHash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.isActive !== undefined && (obj.isActive = message.isActive);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.executionType !== undefined && (obj.executionType = message.executionType);
        message.orderType !== undefined && (obj.orderType = message.orderType);
        message.price !== undefined && (obj.price = message.price);
        message.triggerPrice !== undefined && (obj.triggerPrice = message.triggerPrice);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.filledQuantity !== undefined && (obj.filledQuantity = message.filledQuantity);
        message.state !== undefined && (obj.state = message.state);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        message.direction !== undefined && (obj.direction = message.direction);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        return obj;
    },
    create(base) {
        return SpotOrderHistory.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const message = createBaseSpotOrderHistory();
        message.orderHash = (_a = object.orderHash) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.isActive = (_c = object.isActive) !== null && _c !== void 0 ? _c : false;
        message.subaccountId = (_d = object.subaccountId) !== null && _d !== void 0 ? _d : "";
        message.executionType = (_e = object.executionType) !== null && _e !== void 0 ? _e : "";
        message.orderType = (_f = object.orderType) !== null && _f !== void 0 ? _f : "";
        message.price = (_g = object.price) !== null && _g !== void 0 ? _g : "";
        message.triggerPrice = (_h = object.triggerPrice) !== null && _h !== void 0 ? _h : "";
        message.quantity = (_j = object.quantity) !== null && _j !== void 0 ? _j : "";
        message.filledQuantity = (_k = object.filledQuantity) !== null && _k !== void 0 ? _k : "";
        message.state = (_l = object.state) !== null && _l !== void 0 ? _l : "";
        message.createdAt = (_m = object.createdAt) !== null && _m !== void 0 ? _m : "0";
        message.updatedAt = (_o = object.updatedAt) !== null && _o !== void 0 ? _o : "0";
        message.direction = (_p = object.direction) !== null && _p !== void 0 ? _p : "";
        message.txHash = (_q = object.txHash) !== null && _q !== void 0 ? _q : "";
        return message;
    },
};
function createBaseStreamOrdersHistoryRequest() {
    return { subaccountId: "", marketId: "", orderTypes: [], direction: "", state: "", executionTypes: [] };
}
export const StreamOrdersHistoryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        for (const v of message.orderTypes) {
            writer.uint32(26).string(v);
        }
        if (message.direction !== "") {
            writer.uint32(34).string(message.direction);
        }
        if (message.state !== "") {
            writer.uint32(42).string(message.state);
        }
        for (const v of message.executionTypes) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOrdersHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.orderTypes.push(reader.string());
                    break;
                case 4:
                    message.direction = reader.string();
                    break;
                case 5:
                    message.state = reader.string();
                    break;
                case 6:
                    message.executionTypes.push(reader.string());
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
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            orderTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.orderTypes) ? object.orderTypes.map((e) => String(e)) : [],
            direction: isSet(object.direction) ? String(object.direction) : "",
            state: isSet(object.state) ? String(object.state) : "",
            executionTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.executionTypes) ? object.executionTypes.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        if (message.orderTypes) {
            obj.orderTypes = message.orderTypes.map((e) => e);
        }
        else {
            obj.orderTypes = [];
        }
        message.direction !== undefined && (obj.direction = message.direction);
        message.state !== undefined && (obj.state = message.state);
        if (message.executionTypes) {
            obj.executionTypes = message.executionTypes.map((e) => e);
        }
        else {
            obj.executionTypes = [];
        }
        return obj;
    },
    create(base) {
        return StreamOrdersHistoryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseStreamOrdersHistoryRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.orderTypes = ((_c = object.orderTypes) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.direction = (_d = object.direction) !== null && _d !== void 0 ? _d : "";
        message.state = (_e = object.state) !== null && _e !== void 0 ? _e : "";
        message.executionTypes = ((_f = object.executionTypes) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        return message;
    },
};
function createBaseStreamOrdersHistoryResponse() {
    return { order: undefined, operationType: "", timestamp: "0" };
}
export const StreamOrdersHistoryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            SpotOrderHistory.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationType !== "") {
            writer.uint32(18).string(message.operationType);
        }
        if (message.timestamp !== "0") {
            writer.uint32(24).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOrdersHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = SpotOrderHistory.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationType = reader.string();
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
            order: isSet(object.order) ? SpotOrderHistory.fromJSON(object.order) : undefined,
            operationType: isSet(object.operationType) ? String(object.operationType) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.order !== undefined && (obj.order = message.order ? SpotOrderHistory.toJSON(message.order) : undefined);
        message.operationType !== undefined && (obj.operationType = message.operationType);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return StreamOrdersHistoryResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStreamOrdersHistoryResponse();
        message.order = (object.order !== undefined && object.order !== null)
            ? SpotOrderHistory.fromPartial(object.order)
            : undefined;
        message.operationType = (_a = object.operationType) !== null && _a !== void 0 ? _a : "";
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseAtomicSwapHistoryRequest() {
    return { address: "", contractAddress: "", skip: 0, limit: 0, fromNumber: 0, toNumber: 0 };
}
export const AtomicSwapHistoryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        if (message.skip !== 0) {
            writer.uint32(24).sint32(message.skip);
        }
        if (message.limit !== 0) {
            writer.uint32(32).sint32(message.limit);
        }
        if (message.fromNumber !== 0) {
            writer.uint32(40).sint32(message.fromNumber);
        }
        if (message.toNumber !== 0) {
            writer.uint32(48).sint32(message.toNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAtomicSwapHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.contractAddress = reader.string();
                    break;
                case 3:
                    message.skip = reader.sint32();
                    break;
                case 4:
                    message.limit = reader.sint32();
                    break;
                case 5:
                    message.fromNumber = reader.sint32();
                    break;
                case 6:
                    message.toNumber = reader.sint32();
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
            address: isSet(object.address) ? String(object.address) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            skip: isSet(object.skip) ? Number(object.skip) : 0,
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            fromNumber: isSet(object.fromNumber) ? Number(object.fromNumber) : 0,
            toNumber: isSet(object.toNumber) ? Number(object.toNumber) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.skip !== undefined && (obj.skip = Math.round(message.skip));
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.fromNumber !== undefined && (obj.fromNumber = Math.round(message.fromNumber));
        message.toNumber !== undefined && (obj.toNumber = Math.round(message.toNumber));
        return obj;
    },
    create(base) {
        return AtomicSwapHistoryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseAtomicSwapHistoryRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.contractAddress = (_b = object.contractAddress) !== null && _b !== void 0 ? _b : "";
        message.skip = (_c = object.skip) !== null && _c !== void 0 ? _c : 0;
        message.limit = (_d = object.limit) !== null && _d !== void 0 ? _d : 0;
        message.fromNumber = (_e = object.fromNumber) !== null && _e !== void 0 ? _e : 0;
        message.toNumber = (_f = object.toNumber) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseAtomicSwapHistoryResponse() {
    return { paging: undefined, data: [] };
}
export const AtomicSwapHistoryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.paging !== undefined) {
            Paging.encode(message.paging, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.data) {
            AtomicSwap.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAtomicSwapHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paging = Paging.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data.push(AtomicSwap.decode(reader, reader.uint32()));
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
            paging: isSet(object.paging) ? Paging.fromJSON(object.paging) : undefined,
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => AtomicSwap.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.paging !== undefined && (obj.paging = message.paging ? Paging.toJSON(message.paging) : undefined);
        if (message.data) {
            obj.data = message.data.map((e) => e ? AtomicSwap.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    create(base) {
        return AtomicSwapHistoryResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAtomicSwapHistoryResponse();
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? Paging.fromPartial(object.paging)
            : undefined;
        message.data = ((_a = object.data) === null || _a === void 0 ? void 0 : _a.map((e) => AtomicSwap.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAtomicSwap() {
    return {
        sender: "",
        route: "",
        sourceCoin: undefined,
        destCoin: undefined,
        fees: [],
        contractAddress: "",
        indexBySender: 0,
        indexBySenderContract: 0,
        txHash: "",
        executedAt: "0",
        refundAmount: "",
    };
}
export const AtomicSwap = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.route !== "") {
            writer.uint32(18).string(message.route);
        }
        if (message.sourceCoin !== undefined) {
            Coin.encode(message.sourceCoin, writer.uint32(26).fork()).ldelim();
        }
        if (message.destCoin !== undefined) {
            Coin.encode(message.destCoin, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.fees) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.contractAddress !== "") {
            writer.uint32(50).string(message.contractAddress);
        }
        if (message.indexBySender !== 0) {
            writer.uint32(56).sint32(message.indexBySender);
        }
        if (message.indexBySenderContract !== 0) {
            writer.uint32(64).sint32(message.indexBySenderContract);
        }
        if (message.txHash !== "") {
            writer.uint32(74).string(message.txHash);
        }
        if (message.executedAt !== "0") {
            writer.uint32(80).sint64(message.executedAt);
        }
        if (message.refundAmount !== "") {
            writer.uint32(90).string(message.refundAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAtomicSwap();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.route = reader.string();
                    break;
                case 3:
                    message.sourceCoin = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.destCoin = Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.fees.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.contractAddress = reader.string();
                    break;
                case 7:
                    message.indexBySender = reader.sint32();
                    break;
                case 8:
                    message.indexBySenderContract = reader.sint32();
                    break;
                case 9:
                    message.txHash = reader.string();
                    break;
                case 10:
                    message.executedAt = longToString(reader.sint64());
                    break;
                case 11:
                    message.refundAmount = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            route: isSet(object.route) ? String(object.route) : "",
            sourceCoin: isSet(object.sourceCoin) ? Coin.fromJSON(object.sourceCoin) : undefined,
            destCoin: isSet(object.destCoin) ? Coin.fromJSON(object.destCoin) : undefined,
            fees: Array.isArray(object === null || object === void 0 ? void 0 : object.fees) ? object.fees.map((e) => Coin.fromJSON(e)) : [],
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            indexBySender: isSet(object.indexBySender) ? Number(object.indexBySender) : 0,
            indexBySenderContract: isSet(object.indexBySenderContract) ? Number(object.indexBySenderContract) : 0,
            txHash: isSet(object.txHash) ? String(object.txHash) : "",
            executedAt: isSet(object.executedAt) ? String(object.executedAt) : "0",
            refundAmount: isSet(object.refundAmount) ? String(object.refundAmount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.route !== undefined && (obj.route = message.route);
        message.sourceCoin !== undefined &&
            (obj.sourceCoin = message.sourceCoin ? Coin.toJSON(message.sourceCoin) : undefined);
        message.destCoin !== undefined && (obj.destCoin = message.destCoin ? Coin.toJSON(message.destCoin) : undefined);
        if (message.fees) {
            obj.fees = message.fees.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.fees = [];
        }
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.indexBySender !== undefined && (obj.indexBySender = Math.round(message.indexBySender));
        message.indexBySenderContract !== undefined &&
            (obj.indexBySenderContract = Math.round(message.indexBySenderContract));
        message.txHash !== undefined && (obj.txHash = message.txHash);
        message.executedAt !== undefined && (obj.executedAt = message.executedAt);
        message.refundAmount !== undefined && (obj.refundAmount = message.refundAmount);
        return obj;
    },
    create(base) {
        return AtomicSwap.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseAtomicSwap();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.route = (_b = object.route) !== null && _b !== void 0 ? _b : "";
        message.sourceCoin = (object.sourceCoin !== undefined && object.sourceCoin !== null)
            ? Coin.fromPartial(object.sourceCoin)
            : undefined;
        message.destCoin = (object.destCoin !== undefined && object.destCoin !== null)
            ? Coin.fromPartial(object.destCoin)
            : undefined;
        message.fees = ((_c = object.fees) === null || _c === void 0 ? void 0 : _c.map((e) => Coin.fromPartial(e))) || [];
        message.contractAddress = (_d = object.contractAddress) !== null && _d !== void 0 ? _d : "";
        message.indexBySender = (_e = object.indexBySender) !== null && _e !== void 0 ? _e : 0;
        message.indexBySenderContract = (_f = object.indexBySenderContract) !== null && _f !== void 0 ? _f : 0;
        message.txHash = (_g = object.txHash) !== null && _g !== void 0 ? _g : "";
        message.executedAt = (_h = object.executedAt) !== null && _h !== void 0 ? _h : "0";
        message.refundAmount = (_j = object.refundAmount) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
function createBaseCoin() {
    return { denom: "", amount: "" };
}
export const Coin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    create(base) {
        return Coin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCoin();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
export class InjectiveSpotExchangeRPCClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Markets = this.Markets.bind(this);
        this.Market = this.Market.bind(this);
        this.StreamMarkets = this.StreamMarkets.bind(this);
        this.OrderbookV2 = this.OrderbookV2.bind(this);
        this.OrderbooksV2 = this.OrderbooksV2.bind(this);
        this.StreamOrderbookV2 = this.StreamOrderbookV2.bind(this);
        this.StreamOrderbookUpdate = this.StreamOrderbookUpdate.bind(this);
        this.Orders = this.Orders.bind(this);
        this.StreamOrders = this.StreamOrders.bind(this);
        this.Trades = this.Trades.bind(this);
        this.StreamTrades = this.StreamTrades.bind(this);
        this.SubaccountOrdersList = this.SubaccountOrdersList.bind(this);
        this.SubaccountTradesList = this.SubaccountTradesList.bind(this);
        this.OrdersHistory = this.OrdersHistory.bind(this);
        this.StreamOrdersHistory = this.StreamOrdersHistory.bind(this);
        this.AtomicSwapHistory = this.AtomicSwapHistory.bind(this);
    }
    Markets(request, metadata) {
        return this.rpc.unary(InjectiveSpotExchangeRPCMarketsDesc, MarketsRequest.fromPartial(request), metadata);
    }
    Market(request, metadata) {
        return this.rpc.unary(InjectiveSpotExchangeRPCMarketDesc, MarketRequest.fromPartial(request), metadata);
    }
    StreamMarkets(request, metadata) {
        return this.rpc.invoke(InjectiveSpotExchangeRPCStreamMarketsDesc, StreamMarketsRequest.fromPartial(request), metadata);
    }
    OrderbookV2(request, metadata) {
        return this.rpc.unary(InjectiveSpotExchangeRPCOrderbookV2Desc, OrderbookV2Request.fromPartial(request), metadata);
    }
    OrderbooksV2(request, metadata) {
        return this.rpc.unary(InjectiveSpotExchangeRPCOrderbooksV2Desc, OrderbooksV2Request.fromPartial(request), metadata);
    }
    StreamOrderbookV2(request, metadata) {
        return this.rpc.invoke(InjectiveSpotExchangeRPCStreamOrderbookV2Desc, StreamOrderbookV2Request.fromPartial(request), metadata);
    }
    StreamOrderbookUpdate(request, metadata) {
        return this.rpc.invoke(InjectiveSpotExchangeRPCStreamOrderbookUpdateDesc, StreamOrderbookUpdateRequest.fromPartial(request), metadata);
    }
    Orders(request, metadata) {
        return this.rpc.unary(InjectiveSpotExchangeRPCOrdersDesc, OrdersRequest.fromPartial(request), metadata);
    }
    StreamOrders(request, metadata) {
        return this.rpc.invoke(InjectiveSpotExchangeRPCStreamOrdersDesc, StreamOrdersRequest.fromPartial(request), metadata);
    }
    Trades(request, metadata) {
        return this.rpc.unary(InjectiveSpotExchangeRPCTradesDesc, TradesRequest.fromPartial(request), metadata);
    }
    StreamTrades(request, metadata) {
        return this.rpc.invoke(InjectiveSpotExchangeRPCStreamTradesDesc, StreamTradesRequest.fromPartial(request), metadata);
    }
    SubaccountOrdersList(request, metadata) {
        return this.rpc.unary(InjectiveSpotExchangeRPCSubaccountOrdersListDesc, SubaccountOrdersListRequest.fromPartial(request), metadata);
    }
    SubaccountTradesList(request, metadata) {
        return this.rpc.unary(InjectiveSpotExchangeRPCSubaccountTradesListDesc, SubaccountTradesListRequest.fromPartial(request), metadata);
    }
    OrdersHistory(request, metadata) {
        return this.rpc.unary(InjectiveSpotExchangeRPCOrdersHistoryDesc, OrdersHistoryRequest.fromPartial(request), metadata);
    }
    StreamOrdersHistory(request, metadata) {
        return this.rpc.invoke(InjectiveSpotExchangeRPCStreamOrdersHistoryDesc, StreamOrdersHistoryRequest.fromPartial(request), metadata);
    }
    AtomicSwapHistory(request, metadata) {
        return this.rpc.unary(InjectiveSpotExchangeRPCAtomicSwapHistoryDesc, AtomicSwapHistoryRequest.fromPartial(request), metadata);
    }
}
export const InjectiveSpotExchangeRPCDesc = { serviceName: "injective_spot_exchange_rpc.InjectiveSpotExchangeRPC" };
export const InjectiveSpotExchangeRPCMarketsDesc = {
    methodName: "Markets",
    service: InjectiveSpotExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MarketsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MarketsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveSpotExchangeRPCMarketDesc = {
    methodName: "Market",
    service: InjectiveSpotExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MarketRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MarketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveSpotExchangeRPCStreamMarketsDesc = {
    methodName: "StreamMarkets",
    service: InjectiveSpotExchangeRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return StreamMarketsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = StreamMarketsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveSpotExchangeRPCOrderbookV2Desc = {
    methodName: "OrderbookV2",
    service: InjectiveSpotExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return OrderbookV2Request.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = OrderbookV2Response.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveSpotExchangeRPCOrderbooksV2Desc = {
    methodName: "OrderbooksV2",
    service: InjectiveSpotExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return OrderbooksV2Request.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = OrderbooksV2Response.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveSpotExchangeRPCStreamOrderbookV2Desc = {
    methodName: "StreamOrderbookV2",
    service: InjectiveSpotExchangeRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return StreamOrderbookV2Request.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = StreamOrderbookV2Response.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveSpotExchangeRPCStreamOrderbookUpdateDesc = {
    methodName: "StreamOrderbookUpdate",
    service: InjectiveSpotExchangeRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return StreamOrderbookUpdateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = StreamOrderbookUpdateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveSpotExchangeRPCOrdersDesc = {
    methodName: "Orders",
    service: InjectiveSpotExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return OrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = OrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveSpotExchangeRPCStreamOrdersDesc = {
    methodName: "StreamOrders",
    service: InjectiveSpotExchangeRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return StreamOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = StreamOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveSpotExchangeRPCTradesDesc = {
    methodName: "Trades",
    service: InjectiveSpotExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return TradesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = TradesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveSpotExchangeRPCStreamTradesDesc = {
    methodName: "StreamTrades",
    service: InjectiveSpotExchangeRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return StreamTradesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = StreamTradesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveSpotExchangeRPCSubaccountOrdersListDesc = {
    methodName: "SubaccountOrdersList",
    service: InjectiveSpotExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return SubaccountOrdersListRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = SubaccountOrdersListResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveSpotExchangeRPCSubaccountTradesListDesc = {
    methodName: "SubaccountTradesList",
    service: InjectiveSpotExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return SubaccountTradesListRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = SubaccountTradesListResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveSpotExchangeRPCOrdersHistoryDesc = {
    methodName: "OrdersHistory",
    service: InjectiveSpotExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return OrdersHistoryRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = OrdersHistoryResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveSpotExchangeRPCStreamOrdersHistoryDesc = {
    methodName: "StreamOrdersHistory",
    service: InjectiveSpotExchangeRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return StreamOrdersHistoryRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = StreamOrdersHistoryResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveSpotExchangeRPCAtomicSwapHistoryDesc = {
    methodName: "AtomicSwapHistory",
    service: InjectiveSpotExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return AtomicSwapHistoryRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = AtomicSwapHistoryResponse.decode(data);
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
    invoke(methodDesc, _request, metadata) {
        var _a;
        const upStreamCodes = this.options.upStreamRetryCodes || [];
        const DEFAULT_TIMEOUT_TIME = 3000;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new Observable((observer) => {
            const upStream = (() => {
                const client = grpc.invoke(methodDesc, {
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
        }).pipe(share());
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
