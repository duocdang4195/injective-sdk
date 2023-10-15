"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradesRequest = exports.StreamOrdersResponse = exports.StreamOrdersRequest = exports.StreamPositionsResponse = exports.StreamPositionsRequest = exports.FundingRate = exports.FundingRatesResponse = exports.FundingRatesRequest = exports.FundingPayment = exports.FundingPaymentsResponse = exports.FundingPaymentsRequest = exports.LiquidablePositionsResponse = exports.LiquidablePositionsRequest = exports.DerivativePosition = exports.PositionsResponse = exports.PositionsRequest = exports.DerivativeLimitOrder = exports.OrdersResponse = exports.OrdersRequest = exports.PriceLevelUpdate = exports.OrderbookLevelUpdates = exports.StreamOrderbookUpdateResponse = exports.StreamOrderbookUpdateRequest = exports.StreamOrderbookV2Response = exports.StreamOrderbookV2Request = exports.SingleDerivativeLimitOrderbookV2 = exports.OrderbooksV2Response = exports.OrderbooksV2Request = exports.PriceLevel = exports.DerivativeLimitOrderbookV2 = exports.OrderbookV2Response = exports.OrderbookV2Request = exports.BinaryOptionsMarketResponse = exports.BinaryOptionsMarketRequest = exports.Paging = exports.BinaryOptionsMarketInfo = exports.BinaryOptionsMarketsResponse = exports.BinaryOptionsMarketsRequest = exports.StreamMarketResponse = exports.StreamMarketRequest = exports.MarketResponse = exports.MarketRequest = exports.ExpiryFuturesMarketInfo = exports.PerpetualMarketFunding = exports.PerpetualMarketInfo = exports.TokenMeta = exports.DerivativeMarketInfo = exports.MarketsResponse = exports.MarketsRequest = exports.protobufPackage = void 0;
exports.GrpcWebError = exports.GrpcWebImpl = exports.InjectiveDerivativeExchangeRPCStreamOrdersHistoryDesc = exports.InjectiveDerivativeExchangeRPCOrdersHistoryDesc = exports.InjectiveDerivativeExchangeRPCSubaccountTradesListDesc = exports.InjectiveDerivativeExchangeRPCSubaccountOrdersListDesc = exports.InjectiveDerivativeExchangeRPCStreamTradesDesc = exports.InjectiveDerivativeExchangeRPCTradesDesc = exports.InjectiveDerivativeExchangeRPCStreamOrdersDesc = exports.InjectiveDerivativeExchangeRPCStreamPositionsDesc = exports.InjectiveDerivativeExchangeRPCFundingRatesDesc = exports.InjectiveDerivativeExchangeRPCFundingPaymentsDesc = exports.InjectiveDerivativeExchangeRPCLiquidablePositionsDesc = exports.InjectiveDerivativeExchangeRPCPositionsDesc = exports.InjectiveDerivativeExchangeRPCOrdersDesc = exports.InjectiveDerivativeExchangeRPCStreamOrderbookUpdateDesc = exports.InjectiveDerivativeExchangeRPCStreamOrderbookV2Desc = exports.InjectiveDerivativeExchangeRPCOrderbooksV2Desc = exports.InjectiveDerivativeExchangeRPCOrderbookV2Desc = exports.InjectiveDerivativeExchangeRPCBinaryOptionsMarketDesc = exports.InjectiveDerivativeExchangeRPCBinaryOptionsMarketsDesc = exports.InjectiveDerivativeExchangeRPCStreamMarketDesc = exports.InjectiveDerivativeExchangeRPCMarketDesc = exports.InjectiveDerivativeExchangeRPCMarketsDesc = exports.InjectiveDerivativeExchangeRPCDesc = exports.InjectiveDerivativeExchangeRPCClientImpl = exports.StreamOrdersHistoryResponse = exports.StreamOrdersHistoryRequest = exports.DerivativeOrderHistory = exports.OrdersHistoryResponse = exports.OrdersHistoryRequest = exports.SubaccountTradesListResponse = exports.SubaccountTradesListRequest = exports.SubaccountOrdersListResponse = exports.SubaccountOrdersListRequest = exports.StreamTradesResponse = exports.StreamTradesRequest = exports.PositionDelta = exports.DerivativeTrade = exports.TradesResponse = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.protobufPackage = "injective_derivative_exchange_rpc";
function createBaseMarketsRequest() {
    return { marketStatus: "", quoteDenom: "", marketStatuses: [] };
}
exports.MarketsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketStatus !== "") {
            writer.uint32(10).string(message.marketStatus);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(18).string(message.quoteDenom);
        }
        for (const v of message.marketStatuses) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketStatus = reader.string();
                    break;
                case 2:
                    message.quoteDenom = reader.string();
                    break;
                case 3:
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
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            marketStatuses: Array.isArray(object === null || object === void 0 ? void 0 : object.marketStatuses) ? object.marketStatuses.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketStatus !== undefined && (obj.marketStatus = message.marketStatus);
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
        return exports.MarketsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMarketsRequest();
        message.marketStatus = (_a = object.marketStatus) !== null && _a !== void 0 ? _a : "";
        message.quoteDenom = (_b = object.quoteDenom) !== null && _b !== void 0 ? _b : "";
        message.marketStatuses = ((_c = object.marketStatuses) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseMarketsResponse() {
    return { markets: [] };
}
exports.MarketsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.markets) {
            exports.DerivativeMarketInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.markets.push(exports.DerivativeMarketInfo.decode(reader, reader.uint32()));
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
            markets: Array.isArray(object === null || object === void 0 ? void 0 : object.markets) ? object.markets.map((e) => exports.DerivativeMarketInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map((e) => e ? exports.DerivativeMarketInfo.toJSON(e) : undefined);
        }
        else {
            obj.markets = [];
        }
        return obj;
    },
    create(base) {
        return exports.MarketsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMarketsResponse();
        message.markets = ((_a = object.markets) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DerivativeMarketInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDerivativeMarketInfo() {
    return {
        marketId: "",
        marketStatus: "",
        ticker: "",
        oracleBase: "",
        oracleQuote: "",
        oracleType: "",
        oracleScaleFactor: 0,
        initialMarginRatio: "",
        maintenanceMarginRatio: "",
        quoteDenom: "",
        quoteTokenMeta: undefined,
        makerFeeRate: "",
        takerFeeRate: "",
        serviceProviderFee: "",
        isPerpetual: false,
        minPriceTickSize: "",
        minQuantityTickSize: "",
        perpetualMarketInfo: undefined,
        perpetualMarketFunding: undefined,
        expiryFuturesMarketInfo: undefined,
    };
}
exports.DerivativeMarketInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.marketStatus !== "") {
            writer.uint32(18).string(message.marketStatus);
        }
        if (message.ticker !== "") {
            writer.uint32(26).string(message.ticker);
        }
        if (message.oracleBase !== "") {
            writer.uint32(34).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(42).string(message.oracleQuote);
        }
        if (message.oracleType !== "") {
            writer.uint32(50).string(message.oracleType);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(56).uint32(message.oracleScaleFactor);
        }
        if (message.initialMarginRatio !== "") {
            writer.uint32(66).string(message.initialMarginRatio);
        }
        if (message.maintenanceMarginRatio !== "") {
            writer.uint32(74).string(message.maintenanceMarginRatio);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(82).string(message.quoteDenom);
        }
        if (message.quoteTokenMeta !== undefined) {
            exports.TokenMeta.encode(message.quoteTokenMeta, writer.uint32(90).fork()).ldelim();
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(98).string(message.makerFeeRate);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(106).string(message.takerFeeRate);
        }
        if (message.serviceProviderFee !== "") {
            writer.uint32(114).string(message.serviceProviderFee);
        }
        if (message.isPerpetual === true) {
            writer.uint32(120).bool(message.isPerpetual);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(130).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(138).string(message.minQuantityTickSize);
        }
        if (message.perpetualMarketInfo !== undefined) {
            exports.PerpetualMarketInfo.encode(message.perpetualMarketInfo, writer.uint32(146).fork()).ldelim();
        }
        if (message.perpetualMarketFunding !== undefined) {
            exports.PerpetualMarketFunding.encode(message.perpetualMarketFunding, writer.uint32(154).fork()).ldelim();
        }
        if (message.expiryFuturesMarketInfo !== undefined) {
            exports.ExpiryFuturesMarketInfo.encode(message.expiryFuturesMarketInfo, writer.uint32(162).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeMarketInfo();
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
                    message.oracleBase = reader.string();
                    break;
                case 5:
                    message.oracleQuote = reader.string();
                    break;
                case 6:
                    message.oracleType = reader.string();
                    break;
                case 7:
                    message.oracleScaleFactor = reader.uint32();
                    break;
                case 8:
                    message.initialMarginRatio = reader.string();
                    break;
                case 9:
                    message.maintenanceMarginRatio = reader.string();
                    break;
                case 10:
                    message.quoteDenom = reader.string();
                    break;
                case 11:
                    message.quoteTokenMeta = exports.TokenMeta.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.makerFeeRate = reader.string();
                    break;
                case 13:
                    message.takerFeeRate = reader.string();
                    break;
                case 14:
                    message.serviceProviderFee = reader.string();
                    break;
                case 15:
                    message.isPerpetual = reader.bool();
                    break;
                case 16:
                    message.minPriceTickSize = reader.string();
                    break;
                case 17:
                    message.minQuantityTickSize = reader.string();
                    break;
                case 18:
                    message.perpetualMarketInfo = exports.PerpetualMarketInfo.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.perpetualMarketFunding = exports.PerpetualMarketFunding.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.expiryFuturesMarketInfo = exports.ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
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
            oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
            oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
            oracleType: isSet(object.oracleType) ? String(object.oracleType) : "",
            oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
            initialMarginRatio: isSet(object.initialMarginRatio) ? String(object.initialMarginRatio) : "",
            maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : "",
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            quoteTokenMeta: isSet(object.quoteTokenMeta) ? exports.TokenMeta.fromJSON(object.quoteTokenMeta) : undefined,
            makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
            takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
            serviceProviderFee: isSet(object.serviceProviderFee) ? String(object.serviceProviderFee) : "",
            isPerpetual: isSet(object.isPerpetual) ? Boolean(object.isPerpetual) : false,
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
            perpetualMarketInfo: isSet(object.perpetualMarketInfo)
                ? exports.PerpetualMarketInfo.fromJSON(object.perpetualMarketInfo)
                : undefined,
            perpetualMarketFunding: isSet(object.perpetualMarketFunding)
                ? exports.PerpetualMarketFunding.fromJSON(object.perpetualMarketFunding)
                : undefined,
            expiryFuturesMarketInfo: isSet(object.expiryFuturesMarketInfo)
                ? exports.ExpiryFuturesMarketInfo.fromJSON(object.expiryFuturesMarketInfo)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.marketStatus !== undefined && (obj.marketStatus = message.marketStatus);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.oracleBase !== undefined && (obj.oracleBase = message.oracleBase);
        message.oracleQuote !== undefined && (obj.oracleQuote = message.oracleQuote);
        message.oracleType !== undefined && (obj.oracleType = message.oracleType);
        message.oracleScaleFactor !== undefined && (obj.oracleScaleFactor = Math.round(message.oracleScaleFactor));
        message.initialMarginRatio !== undefined && (obj.initialMarginRatio = message.initialMarginRatio);
        message.maintenanceMarginRatio !== undefined && (obj.maintenanceMarginRatio = message.maintenanceMarginRatio);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.quoteTokenMeta !== undefined &&
            (obj.quoteTokenMeta = message.quoteTokenMeta ? exports.TokenMeta.toJSON(message.quoteTokenMeta) : undefined);
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.serviceProviderFee !== undefined && (obj.serviceProviderFee = message.serviceProviderFee);
        message.isPerpetual !== undefined && (obj.isPerpetual = message.isPerpetual);
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        message.perpetualMarketInfo !== undefined && (obj.perpetualMarketInfo = message.perpetualMarketInfo
            ? exports.PerpetualMarketInfo.toJSON(message.perpetualMarketInfo)
            : undefined);
        message.perpetualMarketFunding !== undefined && (obj.perpetualMarketFunding = message.perpetualMarketFunding
            ? exports.PerpetualMarketFunding.toJSON(message.perpetualMarketFunding)
            : undefined);
        message.expiryFuturesMarketInfo !== undefined && (obj.expiryFuturesMarketInfo = message.expiryFuturesMarketInfo
            ? exports.ExpiryFuturesMarketInfo.toJSON(message.expiryFuturesMarketInfo)
            : undefined);
        return obj;
    },
    create(base) {
        return exports.DerivativeMarketInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const message = createBaseDerivativeMarketInfo();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.marketStatus = (_b = object.marketStatus) !== null && _b !== void 0 ? _b : "";
        message.ticker = (_c = object.ticker) !== null && _c !== void 0 ? _c : "";
        message.oracleBase = (_d = object.oracleBase) !== null && _d !== void 0 ? _d : "";
        message.oracleQuote = (_e = object.oracleQuote) !== null && _e !== void 0 ? _e : "";
        message.oracleType = (_f = object.oracleType) !== null && _f !== void 0 ? _f : "";
        message.oracleScaleFactor = (_g = object.oracleScaleFactor) !== null && _g !== void 0 ? _g : 0;
        message.initialMarginRatio = (_h = object.initialMarginRatio) !== null && _h !== void 0 ? _h : "";
        message.maintenanceMarginRatio = (_j = object.maintenanceMarginRatio) !== null && _j !== void 0 ? _j : "";
        message.quoteDenom = (_k = object.quoteDenom) !== null && _k !== void 0 ? _k : "";
        message.quoteTokenMeta = (object.quoteTokenMeta !== undefined && object.quoteTokenMeta !== null)
            ? exports.TokenMeta.fromPartial(object.quoteTokenMeta)
            : undefined;
        message.makerFeeRate = (_l = object.makerFeeRate) !== null && _l !== void 0 ? _l : "";
        message.takerFeeRate = (_m = object.takerFeeRate) !== null && _m !== void 0 ? _m : "";
        message.serviceProviderFee = (_o = object.serviceProviderFee) !== null && _o !== void 0 ? _o : "";
        message.isPerpetual = (_p = object.isPerpetual) !== null && _p !== void 0 ? _p : false;
        message.minPriceTickSize = (_q = object.minPriceTickSize) !== null && _q !== void 0 ? _q : "";
        message.minQuantityTickSize = (_r = object.minQuantityTickSize) !== null && _r !== void 0 ? _r : "";
        message.perpetualMarketInfo = (object.perpetualMarketInfo !== undefined && object.perpetualMarketInfo !== null)
            ? exports.PerpetualMarketInfo.fromPartial(object.perpetualMarketInfo)
            : undefined;
        message.perpetualMarketFunding =
            (object.perpetualMarketFunding !== undefined && object.perpetualMarketFunding !== null)
                ? exports.PerpetualMarketFunding.fromPartial(object.perpetualMarketFunding)
                : undefined;
        message.expiryFuturesMarketInfo =
            (object.expiryFuturesMarketInfo !== undefined && object.expiryFuturesMarketInfo !== null)
                ? exports.ExpiryFuturesMarketInfo.fromPartial(object.expiryFuturesMarketInfo)
                : undefined;
        return message;
    },
};
function createBaseTokenMeta() {
    return { name: "", address: "", symbol: "", logo: "", decimals: 0, updatedAt: "0" };
}
exports.TokenMeta = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return exports.TokenMeta.fromPartial(base !== null && base !== void 0 ? base : {});
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
function createBasePerpetualMarketInfo() {
    return { hourlyFundingRateCap: "", hourlyInterestRate: "", nextFundingTimestamp: "0", fundingInterval: "0" };
}
exports.PerpetualMarketInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hourlyFundingRateCap !== "") {
            writer.uint32(10).string(message.hourlyFundingRateCap);
        }
        if (message.hourlyInterestRate !== "") {
            writer.uint32(18).string(message.hourlyInterestRate);
        }
        if (message.nextFundingTimestamp !== "0") {
            writer.uint32(24).sint64(message.nextFundingTimestamp);
        }
        if (message.fundingInterval !== "0") {
            writer.uint32(32).sint64(message.fundingInterval);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hourlyFundingRateCap = reader.string();
                    break;
                case 2:
                    message.hourlyInterestRate = reader.string();
                    break;
                case 3:
                    message.nextFundingTimestamp = longToString(reader.sint64());
                    break;
                case 4:
                    message.fundingInterval = longToString(reader.sint64());
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
            hourlyFundingRateCap: isSet(object.hourlyFundingRateCap) ? String(object.hourlyFundingRateCap) : "",
            hourlyInterestRate: isSet(object.hourlyInterestRate) ? String(object.hourlyInterestRate) : "",
            nextFundingTimestamp: isSet(object.nextFundingTimestamp) ? String(object.nextFundingTimestamp) : "0",
            fundingInterval: isSet(object.fundingInterval) ? String(object.fundingInterval) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.hourlyFundingRateCap !== undefined && (obj.hourlyFundingRateCap = message.hourlyFundingRateCap);
        message.hourlyInterestRate !== undefined && (obj.hourlyInterestRate = message.hourlyInterestRate);
        message.nextFundingTimestamp !== undefined && (obj.nextFundingTimestamp = message.nextFundingTimestamp);
        message.fundingInterval !== undefined && (obj.fundingInterval = message.fundingInterval);
        return obj;
    },
    create(base) {
        return exports.PerpetualMarketInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBasePerpetualMarketInfo();
        message.hourlyFundingRateCap = (_a = object.hourlyFundingRateCap) !== null && _a !== void 0 ? _a : "";
        message.hourlyInterestRate = (_b = object.hourlyInterestRate) !== null && _b !== void 0 ? _b : "";
        message.nextFundingTimestamp = (_c = object.nextFundingTimestamp) !== null && _c !== void 0 ? _c : "0";
        message.fundingInterval = (_d = object.fundingInterval) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBasePerpetualMarketFunding() {
    return { cumulativeFunding: "", cumulativePrice: "", lastTimestamp: "0" };
}
exports.PerpetualMarketFunding = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cumulativeFunding !== "") {
            writer.uint32(10).string(message.cumulativeFunding);
        }
        if (message.cumulativePrice !== "") {
            writer.uint32(18).string(message.cumulativePrice);
        }
        if (message.lastTimestamp !== "0") {
            writer.uint32(24).sint64(message.lastTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketFunding();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cumulativeFunding = reader.string();
                    break;
                case 2:
                    message.cumulativePrice = reader.string();
                    break;
                case 3:
                    message.lastTimestamp = longToString(reader.sint64());
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
            cumulativeFunding: isSet(object.cumulativeFunding) ? String(object.cumulativeFunding) : "",
            cumulativePrice: isSet(object.cumulativePrice) ? String(object.cumulativePrice) : "",
            lastTimestamp: isSet(object.lastTimestamp) ? String(object.lastTimestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.cumulativeFunding !== undefined && (obj.cumulativeFunding = message.cumulativeFunding);
        message.cumulativePrice !== undefined && (obj.cumulativePrice = message.cumulativePrice);
        message.lastTimestamp !== undefined && (obj.lastTimestamp = message.lastTimestamp);
        return obj;
    },
    create(base) {
        return exports.PerpetualMarketFunding.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePerpetualMarketFunding();
        message.cumulativeFunding = (_a = object.cumulativeFunding) !== null && _a !== void 0 ? _a : "";
        message.cumulativePrice = (_b = object.cumulativePrice) !== null && _b !== void 0 ? _b : "";
        message.lastTimestamp = (_c = object.lastTimestamp) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseExpiryFuturesMarketInfo() {
    return { expirationTimestamp: "0", settlementPrice: "" };
}
exports.ExpiryFuturesMarketInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.expirationTimestamp !== "0") {
            writer.uint32(8).sint64(message.expirationTimestamp);
        }
        if (message.settlementPrice !== "") {
            writer.uint32(18).string(message.settlementPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExpiryFuturesMarketInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.expirationTimestamp = longToString(reader.sint64());
                    break;
                case 2:
                    message.settlementPrice = reader.string();
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
            expirationTimestamp: isSet(object.expirationTimestamp) ? String(object.expirationTimestamp) : "0",
            settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.expirationTimestamp !== undefined && (obj.expirationTimestamp = message.expirationTimestamp);
        message.settlementPrice !== undefined && (obj.settlementPrice = message.settlementPrice);
        return obj;
    },
    create(base) {
        return exports.ExpiryFuturesMarketInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseExpiryFuturesMarketInfo();
        message.expirationTimestamp = (_a = object.expirationTimestamp) !== null && _a !== void 0 ? _a : "0";
        message.settlementPrice = (_b = object.settlementPrice) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMarketRequest() {
    return { marketId: "" };
}
exports.MarketRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return exports.MarketRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.MarketResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.market !== undefined) {
            exports.DerivativeMarketInfo.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = exports.DerivativeMarketInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { market: isSet(object.market) ? exports.DerivativeMarketInfo.fromJSON(object.market) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined &&
            (obj.market = message.market ? exports.DerivativeMarketInfo.toJSON(message.market) : undefined);
        return obj;
    },
    create(base) {
        return exports.MarketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMarketResponse();
        message.market = (object.market !== undefined && object.market !== null)
            ? exports.DerivativeMarketInfo.fromPartial(object.market)
            : undefined;
        return message;
    },
};
function createBaseStreamMarketRequest() {
    return { marketIds: [] };
}
exports.StreamMarketRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.marketIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamMarketRequest();
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
        return exports.StreamMarketRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStreamMarketRequest();
        message.marketIds = ((_a = object.marketIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseStreamMarketResponse() {
    return { market: undefined, operationType: "", timestamp: "0" };
}
exports.StreamMarketResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.market !== undefined) {
            exports.DerivativeMarketInfo.encode(message.market, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = exports.DerivativeMarketInfo.decode(reader, reader.uint32());
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
            market: isSet(object.market) ? exports.DerivativeMarketInfo.fromJSON(object.market) : undefined,
            operationType: isSet(object.operationType) ? String(object.operationType) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined &&
            (obj.market = message.market ? exports.DerivativeMarketInfo.toJSON(message.market) : undefined);
        message.operationType !== undefined && (obj.operationType = message.operationType);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return exports.StreamMarketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStreamMarketResponse();
        message.market = (object.market !== undefined && object.market !== null)
            ? exports.DerivativeMarketInfo.fromPartial(object.market)
            : undefined;
        message.operationType = (_a = object.operationType) !== null && _a !== void 0 ? _a : "";
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseBinaryOptionsMarketsRequest() {
    return { marketStatus: "", quoteDenom: "", skip: "0", limit: 0 };
}
exports.BinaryOptionsMarketsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketStatus !== "") {
            writer.uint32(10).string(message.marketStatus);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(18).string(message.quoteDenom);
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBinaryOptionsMarketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketStatus = reader.string();
                    break;
                case 2:
                    message.quoteDenom = reader.string();
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
            marketStatus: isSet(object.marketStatus) ? String(object.marketStatus) : "",
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            skip: isSet(object.skip) ? String(object.skip) : "0",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketStatus !== undefined && (obj.marketStatus = message.marketStatus);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.skip !== undefined && (obj.skip = message.skip);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        return obj;
    },
    create(base) {
        return exports.BinaryOptionsMarketsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseBinaryOptionsMarketsRequest();
        message.marketStatus = (_a = object.marketStatus) !== null && _a !== void 0 ? _a : "";
        message.quoteDenom = (_b = object.quoteDenom) !== null && _b !== void 0 ? _b : "";
        message.skip = (_c = object.skip) !== null && _c !== void 0 ? _c : "0";
        message.limit = (_d = object.limit) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseBinaryOptionsMarketsResponse() {
    return { markets: [], paging: undefined };
}
exports.BinaryOptionsMarketsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.markets) {
            exports.BinaryOptionsMarketInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBinaryOptionsMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.markets.push(exports.BinaryOptionsMarketInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.paging = exports.Paging.decode(reader, reader.uint32());
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
            markets: Array.isArray(object === null || object === void 0 ? void 0 : object.markets)
                ? object.markets.map((e) => exports.BinaryOptionsMarketInfo.fromJSON(e))
                : [],
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map((e) => e ? exports.BinaryOptionsMarketInfo.toJSON(e) : undefined);
        }
        else {
            obj.markets = [];
        }
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        return obj;
    },
    create(base) {
        return exports.BinaryOptionsMarketsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBinaryOptionsMarketsResponse();
        message.markets = ((_a = object.markets) === null || _a === void 0 ? void 0 : _a.map((e) => exports.BinaryOptionsMarketInfo.fromPartial(e))) || [];
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        return message;
    },
};
function createBaseBinaryOptionsMarketInfo() {
    return {
        marketId: "",
        marketStatus: "",
        ticker: "",
        oracleSymbol: "",
        oracleProvider: "",
        oracleType: "",
        oracleScaleFactor: 0,
        expirationTimestamp: "0",
        settlementTimestamp: "0",
        quoteDenom: "",
        quoteTokenMeta: undefined,
        makerFeeRate: "",
        takerFeeRate: "",
        serviceProviderFee: "",
        minPriceTickSize: "",
        minQuantityTickSize: "",
        settlementPrice: "",
    };
}
exports.BinaryOptionsMarketInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.marketStatus !== "") {
            writer.uint32(18).string(message.marketStatus);
        }
        if (message.ticker !== "") {
            writer.uint32(26).string(message.ticker);
        }
        if (message.oracleSymbol !== "") {
            writer.uint32(34).string(message.oracleSymbol);
        }
        if (message.oracleProvider !== "") {
            writer.uint32(42).string(message.oracleProvider);
        }
        if (message.oracleType !== "") {
            writer.uint32(50).string(message.oracleType);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(56).uint32(message.oracleScaleFactor);
        }
        if (message.expirationTimestamp !== "0") {
            writer.uint32(64).sint64(message.expirationTimestamp);
        }
        if (message.settlementTimestamp !== "0") {
            writer.uint32(72).sint64(message.settlementTimestamp);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(82).string(message.quoteDenom);
        }
        if (message.quoteTokenMeta !== undefined) {
            exports.TokenMeta.encode(message.quoteTokenMeta, writer.uint32(90).fork()).ldelim();
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(98).string(message.makerFeeRate);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(106).string(message.takerFeeRate);
        }
        if (message.serviceProviderFee !== "") {
            writer.uint32(114).string(message.serviceProviderFee);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(122).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(130).string(message.minQuantityTickSize);
        }
        if (message.settlementPrice !== "") {
            writer.uint32(138).string(message.settlementPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBinaryOptionsMarketInfo();
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
                    message.oracleSymbol = reader.string();
                    break;
                case 5:
                    message.oracleProvider = reader.string();
                    break;
                case 6:
                    message.oracleType = reader.string();
                    break;
                case 7:
                    message.oracleScaleFactor = reader.uint32();
                    break;
                case 8:
                    message.expirationTimestamp = longToString(reader.sint64());
                    break;
                case 9:
                    message.settlementTimestamp = longToString(reader.sint64());
                    break;
                case 10:
                    message.quoteDenom = reader.string();
                    break;
                case 11:
                    message.quoteTokenMeta = exports.TokenMeta.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.makerFeeRate = reader.string();
                    break;
                case 13:
                    message.takerFeeRate = reader.string();
                    break;
                case 14:
                    message.serviceProviderFee = reader.string();
                    break;
                case 15:
                    message.minPriceTickSize = reader.string();
                    break;
                case 16:
                    message.minQuantityTickSize = reader.string();
                    break;
                case 17:
                    message.settlementPrice = reader.string();
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
            oracleSymbol: isSet(object.oracleSymbol) ? String(object.oracleSymbol) : "",
            oracleProvider: isSet(object.oracleProvider) ? String(object.oracleProvider) : "",
            oracleType: isSet(object.oracleType) ? String(object.oracleType) : "",
            oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
            expirationTimestamp: isSet(object.expirationTimestamp) ? String(object.expirationTimestamp) : "0",
            settlementTimestamp: isSet(object.settlementTimestamp) ? String(object.settlementTimestamp) : "0",
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            quoteTokenMeta: isSet(object.quoteTokenMeta) ? exports.TokenMeta.fromJSON(object.quoteTokenMeta) : undefined,
            makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
            takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
            serviceProviderFee: isSet(object.serviceProviderFee) ? String(object.serviceProviderFee) : "",
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
            settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.marketStatus !== undefined && (obj.marketStatus = message.marketStatus);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.oracleSymbol !== undefined && (obj.oracleSymbol = message.oracleSymbol);
        message.oracleProvider !== undefined && (obj.oracleProvider = message.oracleProvider);
        message.oracleType !== undefined && (obj.oracleType = message.oracleType);
        message.oracleScaleFactor !== undefined && (obj.oracleScaleFactor = Math.round(message.oracleScaleFactor));
        message.expirationTimestamp !== undefined && (obj.expirationTimestamp = message.expirationTimestamp);
        message.settlementTimestamp !== undefined && (obj.settlementTimestamp = message.settlementTimestamp);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.quoteTokenMeta !== undefined &&
            (obj.quoteTokenMeta = message.quoteTokenMeta ? exports.TokenMeta.toJSON(message.quoteTokenMeta) : undefined);
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.serviceProviderFee !== undefined && (obj.serviceProviderFee = message.serviceProviderFee);
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        message.settlementPrice !== undefined && (obj.settlementPrice = message.settlementPrice);
        return obj;
    },
    create(base) {
        return exports.BinaryOptionsMarketInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const message = createBaseBinaryOptionsMarketInfo();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.marketStatus = (_b = object.marketStatus) !== null && _b !== void 0 ? _b : "";
        message.ticker = (_c = object.ticker) !== null && _c !== void 0 ? _c : "";
        message.oracleSymbol = (_d = object.oracleSymbol) !== null && _d !== void 0 ? _d : "";
        message.oracleProvider = (_e = object.oracleProvider) !== null && _e !== void 0 ? _e : "";
        message.oracleType = (_f = object.oracleType) !== null && _f !== void 0 ? _f : "";
        message.oracleScaleFactor = (_g = object.oracleScaleFactor) !== null && _g !== void 0 ? _g : 0;
        message.expirationTimestamp = (_h = object.expirationTimestamp) !== null && _h !== void 0 ? _h : "0";
        message.settlementTimestamp = (_j = object.settlementTimestamp) !== null && _j !== void 0 ? _j : "0";
        message.quoteDenom = (_k = object.quoteDenom) !== null && _k !== void 0 ? _k : "";
        message.quoteTokenMeta = (object.quoteTokenMeta !== undefined && object.quoteTokenMeta !== null)
            ? exports.TokenMeta.fromPartial(object.quoteTokenMeta)
            : undefined;
        message.makerFeeRate = (_l = object.makerFeeRate) !== null && _l !== void 0 ? _l : "";
        message.takerFeeRate = (_m = object.takerFeeRate) !== null && _m !== void 0 ? _m : "";
        message.serviceProviderFee = (_o = object.serviceProviderFee) !== null && _o !== void 0 ? _o : "";
        message.minPriceTickSize = (_p = object.minPriceTickSize) !== null && _p !== void 0 ? _p : "";
        message.minQuantityTickSize = (_q = object.minQuantityTickSize) !== null && _q !== void 0 ? _q : "";
        message.settlementPrice = (_r = object.settlementPrice) !== null && _r !== void 0 ? _r : "";
        return message;
    },
};
function createBasePaging() {
    return { total: "0", from: 0, to: 0, countBySubaccount: "0", next: [] };
}
exports.Paging = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return exports.Paging.fromPartial(base !== null && base !== void 0 ? base : {});
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
function createBaseBinaryOptionsMarketRequest() {
    return { marketId: "" };
}
exports.BinaryOptionsMarketRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBinaryOptionsMarketRequest();
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
        return exports.BinaryOptionsMarketRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBinaryOptionsMarketRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseBinaryOptionsMarketResponse() {
    return { market: undefined };
}
exports.BinaryOptionsMarketResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.market !== undefined) {
            exports.BinaryOptionsMarketInfo.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBinaryOptionsMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = exports.BinaryOptionsMarketInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { market: isSet(object.market) ? exports.BinaryOptionsMarketInfo.fromJSON(object.market) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined &&
            (obj.market = message.market ? exports.BinaryOptionsMarketInfo.toJSON(message.market) : undefined);
        return obj;
    },
    create(base) {
        return exports.BinaryOptionsMarketResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseBinaryOptionsMarketResponse();
        message.market = (object.market !== undefined && object.market !== null)
            ? exports.BinaryOptionsMarketInfo.fromPartial(object.market)
            : undefined;
        return message;
    },
};
function createBaseOrderbookV2Request() {
    return { marketId: "" };
}
exports.OrderbookV2Request = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return exports.OrderbookV2Request.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.OrderbookV2Response = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orderbook !== undefined) {
            exports.DerivativeLimitOrderbookV2.encode(message.orderbook, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderbookV2Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderbook = exports.DerivativeLimitOrderbookV2.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { orderbook: isSet(object.orderbook) ? exports.DerivativeLimitOrderbookV2.fromJSON(object.orderbook) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.orderbook !== undefined &&
            (obj.orderbook = message.orderbook ? exports.DerivativeLimitOrderbookV2.toJSON(message.orderbook) : undefined);
        return obj;
    },
    create(base) {
        return exports.OrderbookV2Response.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseOrderbookV2Response();
        message.orderbook = (object.orderbook !== undefined && object.orderbook !== null)
            ? exports.DerivativeLimitOrderbookV2.fromPartial(object.orderbook)
            : undefined;
        return message;
    },
};
function createBaseDerivativeLimitOrderbookV2() {
    return { buys: [], sells: [], sequence: "0", timestamp: "0" };
}
exports.DerivativeLimitOrderbookV2 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.buys) {
            exports.PriceLevel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sells) {
            exports.PriceLevel.encode(v, writer.uint32(18).fork()).ldelim();
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeLimitOrderbookV2();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buys.push(exports.PriceLevel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.sells.push(exports.PriceLevel.decode(reader, reader.uint32()));
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
            buys: Array.isArray(object === null || object === void 0 ? void 0 : object.buys) ? object.buys.map((e) => exports.PriceLevel.fromJSON(e)) : [],
            sells: Array.isArray(object === null || object === void 0 ? void 0 : object.sells) ? object.sells.map((e) => exports.PriceLevel.fromJSON(e)) : [],
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.buys) {
            obj.buys = message.buys.map((e) => e ? exports.PriceLevel.toJSON(e) : undefined);
        }
        else {
            obj.buys = [];
        }
        if (message.sells) {
            obj.sells = message.sells.map((e) => e ? exports.PriceLevel.toJSON(e) : undefined);
        }
        else {
            obj.sells = [];
        }
        message.sequence !== undefined && (obj.sequence = message.sequence);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return exports.DerivativeLimitOrderbookV2.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseDerivativeLimitOrderbookV2();
        message.buys = ((_a = object.buys) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PriceLevel.fromPartial(e))) || [];
        message.sells = ((_b = object.sells) === null || _b === void 0 ? void 0 : _b.map((e) => exports.PriceLevel.fromPartial(e))) || [];
        message.sequence = (_c = object.sequence) !== null && _c !== void 0 ? _c : "0";
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBasePriceLevel() {
    return { price: "", quantity: "", timestamp: "0" };
}
exports.PriceLevel = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return exports.PriceLevel.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.OrderbooksV2Request = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.marketIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return exports.OrderbooksV2Request.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.OrderbooksV2Response = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.orderbooks) {
            exports.SingleDerivativeLimitOrderbookV2.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderbooksV2Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderbooks.push(exports.SingleDerivativeLimitOrderbookV2.decode(reader, reader.uint32()));
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
                ? object.orderbooks.map((e) => exports.SingleDerivativeLimitOrderbookV2.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orderbooks) {
            obj.orderbooks = message.orderbooks.map((e) => e ? exports.SingleDerivativeLimitOrderbookV2.toJSON(e) : undefined);
        }
        else {
            obj.orderbooks = [];
        }
        return obj;
    },
    create(base) {
        return exports.OrderbooksV2Response.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrderbooksV2Response();
        message.orderbooks = ((_a = object.orderbooks) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SingleDerivativeLimitOrderbookV2.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSingleDerivativeLimitOrderbookV2() {
    return { marketId: "", orderbook: undefined };
}
exports.SingleDerivativeLimitOrderbookV2 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.orderbook !== undefined) {
            exports.DerivativeLimitOrderbookV2.encode(message.orderbook, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSingleDerivativeLimitOrderbookV2();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.orderbook = exports.DerivativeLimitOrderbookV2.decode(reader, reader.uint32());
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
            orderbook: isSet(object.orderbook) ? exports.DerivativeLimitOrderbookV2.fromJSON(object.orderbook) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.orderbook !== undefined &&
            (obj.orderbook = message.orderbook ? exports.DerivativeLimitOrderbookV2.toJSON(message.orderbook) : undefined);
        return obj;
    },
    create(base) {
        return exports.SingleDerivativeLimitOrderbookV2.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSingleDerivativeLimitOrderbookV2();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.orderbook = (object.orderbook !== undefined && object.orderbook !== null)
            ? exports.DerivativeLimitOrderbookV2.fromPartial(object.orderbook)
            : undefined;
        return message;
    },
};
function createBaseStreamOrderbookV2Request() {
    return { marketIds: [] };
}
exports.StreamOrderbookV2Request = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.marketIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return exports.StreamOrderbookV2Request.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.StreamOrderbookV2Response = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orderbook !== undefined) {
            exports.DerivativeLimitOrderbookV2.encode(message.orderbook, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOrderbookV2Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderbook = exports.DerivativeLimitOrderbookV2.decode(reader, reader.uint32());
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
            orderbook: isSet(object.orderbook) ? exports.DerivativeLimitOrderbookV2.fromJSON(object.orderbook) : undefined,
            operationType: isSet(object.operationType) ? String(object.operationType) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderbook !== undefined &&
            (obj.orderbook = message.orderbook ? exports.DerivativeLimitOrderbookV2.toJSON(message.orderbook) : undefined);
        message.operationType !== undefined && (obj.operationType = message.operationType);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.StreamOrderbookV2Response.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseStreamOrderbookV2Response();
        message.orderbook = (object.orderbook !== undefined && object.orderbook !== null)
            ? exports.DerivativeLimitOrderbookV2.fromPartial(object.orderbook)
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
exports.StreamOrderbookUpdateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.marketIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return exports.StreamOrderbookUpdateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.StreamOrderbookUpdateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orderbookLevelUpdates !== undefined) {
            exports.OrderbookLevelUpdates.encode(message.orderbookLevelUpdates, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOrderbookUpdateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderbookLevelUpdates = exports.OrderbookLevelUpdates.decode(reader, reader.uint32());
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
                ? exports.OrderbookLevelUpdates.fromJSON(object.orderbookLevelUpdates)
                : undefined,
            operationType: isSet(object.operationType) ? String(object.operationType) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderbookLevelUpdates !== undefined && (obj.orderbookLevelUpdates = message.orderbookLevelUpdates
            ? exports.OrderbookLevelUpdates.toJSON(message.orderbookLevelUpdates)
            : undefined);
        message.operationType !== undefined && (obj.operationType = message.operationType);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return exports.StreamOrderbookUpdateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseStreamOrderbookUpdateResponse();
        message.orderbookLevelUpdates =
            (object.orderbookLevelUpdates !== undefined && object.orderbookLevelUpdates !== null)
                ? exports.OrderbookLevelUpdates.fromPartial(object.orderbookLevelUpdates)
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
exports.OrderbookLevelUpdates = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.sequence !== "0") {
            writer.uint32(16).uint64(message.sequence);
        }
        for (const v of message.buys) {
            exports.PriceLevelUpdate.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sells) {
            exports.PriceLevelUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.updatedAt !== "0") {
            writer.uint32(40).sint64(message.updatedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.buys.push(exports.PriceLevelUpdate.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sells.push(exports.PriceLevelUpdate.decode(reader, reader.uint32()));
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
            buys: Array.isArray(object === null || object === void 0 ? void 0 : object.buys) ? object.buys.map((e) => exports.PriceLevelUpdate.fromJSON(e)) : [],
            sells: Array.isArray(object === null || object === void 0 ? void 0 : object.sells) ? object.sells.map((e) => exports.PriceLevelUpdate.fromJSON(e)) : [],
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        if (message.buys) {
            obj.buys = message.buys.map((e) => e ? exports.PriceLevelUpdate.toJSON(e) : undefined);
        }
        else {
            obj.buys = [];
        }
        if (message.sells) {
            obj.sells = message.sells.map((e) => e ? exports.PriceLevelUpdate.toJSON(e) : undefined);
        }
        else {
            obj.sells = [];
        }
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        return obj;
    },
    create(base) {
        return exports.OrderbookLevelUpdates.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseOrderbookLevelUpdates();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.sequence = (_b = object.sequence) !== null && _b !== void 0 ? _b : "0";
        message.buys = ((_c = object.buys) === null || _c === void 0 ? void 0 : _c.map((e) => exports.PriceLevelUpdate.fromPartial(e))) || [];
        message.sells = ((_d = object.sells) === null || _d === void 0 ? void 0 : _d.map((e) => exports.PriceLevelUpdate.fromPartial(e))) || [];
        message.updatedAt = (_e = object.updatedAt) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
function createBasePriceLevelUpdate() {
    return { price: "", quantity: "", isActive: false, timestamp: "0" };
}
exports.PriceLevelUpdate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return exports.PriceLevelUpdate.fromPartial(base !== null && base !== void 0 ? base : {});
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
        isConditional: "",
        orderType: "",
        includeInactive: false,
        subaccountTotalOrders: false,
        tradeId: "",
    };
}
exports.OrdersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        if (message.isConditional !== "") {
            writer.uint32(74).string(message.isConditional);
        }
        if (message.orderType !== "") {
            writer.uint32(82).string(message.orderType);
        }
        if (message.includeInactive === true) {
            writer.uint32(88).bool(message.includeInactive);
        }
        if (message.subaccountTotalOrders === true) {
            writer.uint32(96).bool(message.subaccountTotalOrders);
        }
        if (message.tradeId !== "") {
            writer.uint32(106).string(message.tradeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.isConditional = reader.string();
                    break;
                case 10:
                    message.orderType = reader.string();
                    break;
                case 11:
                    message.includeInactive = reader.bool();
                    break;
                case 12:
                    message.subaccountTotalOrders = reader.bool();
                    break;
                case 13:
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
            isConditional: isSet(object.isConditional) ? String(object.isConditional) : "",
            orderType: isSet(object.orderType) ? String(object.orderType) : "",
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
        message.isConditional !== undefined && (obj.isConditional = message.isConditional);
        message.orderType !== undefined && (obj.orderType = message.orderType);
        message.includeInactive !== undefined && (obj.includeInactive = message.includeInactive);
        message.subaccountTotalOrders !== undefined && (obj.subaccountTotalOrders = message.subaccountTotalOrders);
        message.tradeId !== undefined && (obj.tradeId = message.tradeId);
        return obj;
    },
    create(base) {
        return exports.OrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseOrdersRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.orderSide = (_b = object.orderSide) !== null && _b !== void 0 ? _b : "";
        message.subaccountId = (_c = object.subaccountId) !== null && _c !== void 0 ? _c : "";
        message.skip = (_d = object.skip) !== null && _d !== void 0 ? _d : "0";
        message.limit = (_e = object.limit) !== null && _e !== void 0 ? _e : 0;
        message.startTime = (_f = object.startTime) !== null && _f !== void 0 ? _f : "0";
        message.endTime = (_g = object.endTime) !== null && _g !== void 0 ? _g : "0";
        message.marketIds = ((_h = object.marketIds) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.isConditional = (_j = object.isConditional) !== null && _j !== void 0 ? _j : "";
        message.orderType = (_k = object.orderType) !== null && _k !== void 0 ? _k : "";
        message.includeInactive = (_l = object.includeInactive) !== null && _l !== void 0 ? _l : false;
        message.subaccountTotalOrders = (_m = object.subaccountTotalOrders) !== null && _m !== void 0 ? _m : false;
        message.tradeId = (_o = object.tradeId) !== null && _o !== void 0 ? _o : "";
        return message;
    },
};
function createBaseOrdersResponse() {
    return { orders: [], paging: undefined };
}
exports.OrdersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.orders) {
            exports.DerivativeLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(exports.DerivativeLimitOrder.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.paging = exports.Paging.decode(reader, reader.uint32());
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
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => exports.DerivativeLimitOrder.fromJSON(e)) : [],
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? exports.DerivativeLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        return obj;
    },
    create(base) {
        return exports.OrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrdersResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DerivativeLimitOrder.fromPartial(e))) || [];
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        return message;
    },
};
function createBaseDerivativeLimitOrder() {
    return {
        orderHash: "",
        orderSide: "",
        marketId: "",
        subaccountId: "",
        isReduceOnly: false,
        margin: "",
        price: "",
        quantity: "",
        unfilledQuantity: "",
        triggerPrice: "",
        feeRecipient: "",
        state: "",
        createdAt: "0",
        updatedAt: "0",
        orderNumber: "0",
        orderType: "",
        isConditional: false,
        triggerAt: "0",
        placedOrderHash: "",
        executionType: "",
        txHash: "",
    };
}
exports.DerivativeLimitOrder = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        if (message.isReduceOnly === true) {
            writer.uint32(40).bool(message.isReduceOnly);
        }
        if (message.margin !== "") {
            writer.uint32(50).string(message.margin);
        }
        if (message.price !== "") {
            writer.uint32(58).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(66).string(message.quantity);
        }
        if (message.unfilledQuantity !== "") {
            writer.uint32(74).string(message.unfilledQuantity);
        }
        if (message.triggerPrice !== "") {
            writer.uint32(82).string(message.triggerPrice);
        }
        if (message.feeRecipient !== "") {
            writer.uint32(90).string(message.feeRecipient);
        }
        if (message.state !== "") {
            writer.uint32(98).string(message.state);
        }
        if (message.createdAt !== "0") {
            writer.uint32(104).sint64(message.createdAt);
        }
        if (message.updatedAt !== "0") {
            writer.uint32(112).sint64(message.updatedAt);
        }
        if (message.orderNumber !== "0") {
            writer.uint32(120).sint64(message.orderNumber);
        }
        if (message.orderType !== "") {
            writer.uint32(130).string(message.orderType);
        }
        if (message.isConditional === true) {
            writer.uint32(136).bool(message.isConditional);
        }
        if (message.triggerAt !== "0") {
            writer.uint32(144).uint64(message.triggerAt);
        }
        if (message.placedOrderHash !== "") {
            writer.uint32(154).string(message.placedOrderHash);
        }
        if (message.executionType !== "") {
            writer.uint32(162).string(message.executionType);
        }
        if (message.txHash !== "") {
            writer.uint32(170).string(message.txHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeLimitOrder();
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
                    message.isReduceOnly = reader.bool();
                    break;
                case 6:
                    message.margin = reader.string();
                    break;
                case 7:
                    message.price = reader.string();
                    break;
                case 8:
                    message.quantity = reader.string();
                    break;
                case 9:
                    message.unfilledQuantity = reader.string();
                    break;
                case 10:
                    message.triggerPrice = reader.string();
                    break;
                case 11:
                    message.feeRecipient = reader.string();
                    break;
                case 12:
                    message.state = reader.string();
                    break;
                case 13:
                    message.createdAt = longToString(reader.sint64());
                    break;
                case 14:
                    message.updatedAt = longToString(reader.sint64());
                    break;
                case 15:
                    message.orderNumber = longToString(reader.sint64());
                    break;
                case 16:
                    message.orderType = reader.string();
                    break;
                case 17:
                    message.isConditional = reader.bool();
                    break;
                case 18:
                    message.triggerAt = longToString(reader.uint64());
                    break;
                case 19:
                    message.placedOrderHash = reader.string();
                    break;
                case 20:
                    message.executionType = reader.string();
                    break;
                case 21:
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
            isReduceOnly: isSet(object.isReduceOnly) ? Boolean(object.isReduceOnly) : false,
            margin: isSet(object.margin) ? String(object.margin) : "",
            price: isSet(object.price) ? String(object.price) : "",
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            unfilledQuantity: isSet(object.unfilledQuantity) ? String(object.unfilledQuantity) : "",
            triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : "",
            feeRecipient: isSet(object.feeRecipient) ? String(object.feeRecipient) : "",
            state: isSet(object.state) ? String(object.state) : "",
            createdAt: isSet(object.createdAt) ? String(object.createdAt) : "0",
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
            orderNumber: isSet(object.orderNumber) ? String(object.orderNumber) : "0",
            orderType: isSet(object.orderType) ? String(object.orderType) : "",
            isConditional: isSet(object.isConditional) ? Boolean(object.isConditional) : false,
            triggerAt: isSet(object.triggerAt) ? String(object.triggerAt) : "0",
            placedOrderHash: isSet(object.placedOrderHash) ? String(object.placedOrderHash) : "",
            executionType: isSet(object.executionType) ? String(object.executionType) : "",
            txHash: isSet(object.txHash) ? String(object.txHash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderHash !== undefined && (obj.orderHash = message.orderHash);
        message.orderSide !== undefined && (obj.orderSide = message.orderSide);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.isReduceOnly !== undefined && (obj.isReduceOnly = message.isReduceOnly);
        message.margin !== undefined && (obj.margin = message.margin);
        message.price !== undefined && (obj.price = message.price);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.unfilledQuantity !== undefined && (obj.unfilledQuantity = message.unfilledQuantity);
        message.triggerPrice !== undefined && (obj.triggerPrice = message.triggerPrice);
        message.feeRecipient !== undefined && (obj.feeRecipient = message.feeRecipient);
        message.state !== undefined && (obj.state = message.state);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        message.orderNumber !== undefined && (obj.orderNumber = message.orderNumber);
        message.orderType !== undefined && (obj.orderType = message.orderType);
        message.isConditional !== undefined && (obj.isConditional = message.isConditional);
        message.triggerAt !== undefined && (obj.triggerAt = message.triggerAt);
        message.placedOrderHash !== undefined && (obj.placedOrderHash = message.placedOrderHash);
        message.executionType !== undefined && (obj.executionType = message.executionType);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        return obj;
    },
    create(base) {
        return exports.DerivativeLimitOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        const message = createBaseDerivativeLimitOrder();
        message.orderHash = (_a = object.orderHash) !== null && _a !== void 0 ? _a : "";
        message.orderSide = (_b = object.orderSide) !== null && _b !== void 0 ? _b : "";
        message.marketId = (_c = object.marketId) !== null && _c !== void 0 ? _c : "";
        message.subaccountId = (_d = object.subaccountId) !== null && _d !== void 0 ? _d : "";
        message.isReduceOnly = (_e = object.isReduceOnly) !== null && _e !== void 0 ? _e : false;
        message.margin = (_f = object.margin) !== null && _f !== void 0 ? _f : "";
        message.price = (_g = object.price) !== null && _g !== void 0 ? _g : "";
        message.quantity = (_h = object.quantity) !== null && _h !== void 0 ? _h : "";
        message.unfilledQuantity = (_j = object.unfilledQuantity) !== null && _j !== void 0 ? _j : "";
        message.triggerPrice = (_k = object.triggerPrice) !== null && _k !== void 0 ? _k : "";
        message.feeRecipient = (_l = object.feeRecipient) !== null && _l !== void 0 ? _l : "";
        message.state = (_m = object.state) !== null && _m !== void 0 ? _m : "";
        message.createdAt = (_o = object.createdAt) !== null && _o !== void 0 ? _o : "0";
        message.updatedAt = (_p = object.updatedAt) !== null && _p !== void 0 ? _p : "0";
        message.orderNumber = (_q = object.orderNumber) !== null && _q !== void 0 ? _q : "0";
        message.orderType = (_r = object.orderType) !== null && _r !== void 0 ? _r : "";
        message.isConditional = (_s = object.isConditional) !== null && _s !== void 0 ? _s : false;
        message.triggerAt = (_t = object.triggerAt) !== null && _t !== void 0 ? _t : "0";
        message.placedOrderHash = (_u = object.placedOrderHash) !== null && _u !== void 0 ? _u : "";
        message.executionType = (_v = object.executionType) !== null && _v !== void 0 ? _v : "";
        message.txHash = (_w = object.txHash) !== null && _w !== void 0 ? _w : "";
        return message;
    },
};
function createBasePositionsRequest() {
    return {
        subaccountId: "",
        marketId: "",
        skip: "0",
        limit: 0,
        startTime: "0",
        endTime: "0",
        marketIds: [],
        direction: "",
        subaccountTotalPositions: false,
    };
}
exports.PositionsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        if (message.startTime !== "0") {
            writer.uint32(40).sint64(message.startTime);
        }
        if (message.endTime !== "0") {
            writer.uint32(48).sint64(message.endTime);
        }
        for (const v of message.marketIds) {
            writer.uint32(58).string(v);
        }
        if (message.direction !== "") {
            writer.uint32(66).string(message.direction);
        }
        if (message.subaccountTotalPositions === true) {
            writer.uint32(72).bool(message.subaccountTotalPositions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsRequest();
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
                    message.startTime = longToString(reader.sint64());
                    break;
                case 6:
                    message.endTime = longToString(reader.sint64());
                    break;
                case 7:
                    message.marketIds.push(reader.string());
                    break;
                case 8:
                    message.direction = reader.string();
                    break;
                case 9:
                    message.subaccountTotalPositions = reader.bool();
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
            startTime: isSet(object.startTime) ? String(object.startTime) : "0",
            endTime: isSet(object.endTime) ? String(object.endTime) : "0",
            marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [],
            direction: isSet(object.direction) ? String(object.direction) : "",
            subaccountTotalPositions: isSet(object.subaccountTotalPositions)
                ? Boolean(object.subaccountTotalPositions)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
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
        message.direction !== undefined && (obj.direction = message.direction);
        message.subaccountTotalPositions !== undefined && (obj.subaccountTotalPositions = message.subaccountTotalPositions);
        return obj;
    },
    create(base) {
        return exports.PositionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBasePositionsRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.skip = (_c = object.skip) !== null && _c !== void 0 ? _c : "0";
        message.limit = (_d = object.limit) !== null && _d !== void 0 ? _d : 0;
        message.startTime = (_e = object.startTime) !== null && _e !== void 0 ? _e : "0";
        message.endTime = (_f = object.endTime) !== null && _f !== void 0 ? _f : "0";
        message.marketIds = ((_g = object.marketIds) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.direction = (_h = object.direction) !== null && _h !== void 0 ? _h : "";
        message.subaccountTotalPositions = (_j = object.subaccountTotalPositions) !== null && _j !== void 0 ? _j : false;
        return message;
    },
};
function createBasePositionsResponse() {
    return { positions: [], paging: undefined };
}
exports.PositionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.positions) {
            exports.DerivativePosition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positions.push(exports.DerivativePosition.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.paging = exports.Paging.decode(reader, reader.uint32());
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
            positions: Array.isArray(object === null || object === void 0 ? void 0 : object.positions)
                ? object.positions.map((e) => exports.DerivativePosition.fromJSON(e))
                : [],
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.positions) {
            obj.positions = message.positions.map((e) => e ? exports.DerivativePosition.toJSON(e) : undefined);
        }
        else {
            obj.positions = [];
        }
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        return obj;
    },
    create(base) {
        return exports.PositionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePositionsResponse();
        message.positions = ((_a = object.positions) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DerivativePosition.fromPartial(e))) || [];
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        return message;
    },
};
function createBaseDerivativePosition() {
    return {
        ticker: "",
        marketId: "",
        subaccountId: "",
        direction: "",
        quantity: "",
        entryPrice: "",
        margin: "",
        liquidationPrice: "",
        markPrice: "",
        aggregateReduceOnlyQuantity: "",
        updatedAt: "0",
        createdAt: "0",
    };
}
exports.DerivativePosition = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ticker !== "") {
            writer.uint32(10).string(message.ticker);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(26).string(message.subaccountId);
        }
        if (message.direction !== "") {
            writer.uint32(34).string(message.direction);
        }
        if (message.quantity !== "") {
            writer.uint32(42).string(message.quantity);
        }
        if (message.entryPrice !== "") {
            writer.uint32(50).string(message.entryPrice);
        }
        if (message.margin !== "") {
            writer.uint32(58).string(message.margin);
        }
        if (message.liquidationPrice !== "") {
            writer.uint32(66).string(message.liquidationPrice);
        }
        if (message.markPrice !== "") {
            writer.uint32(74).string(message.markPrice);
        }
        if (message.aggregateReduceOnlyQuantity !== "") {
            writer.uint32(90).string(message.aggregateReduceOnlyQuantity);
        }
        if (message.updatedAt !== "0") {
            writer.uint32(96).sint64(message.updatedAt);
        }
        if (message.createdAt !== "0") {
            writer.uint32(104).sint64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativePosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ticker = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.subaccountId = reader.string();
                    break;
                case 4:
                    message.direction = reader.string();
                    break;
                case 5:
                    message.quantity = reader.string();
                    break;
                case 6:
                    message.entryPrice = reader.string();
                    break;
                case 7:
                    message.margin = reader.string();
                    break;
                case 8:
                    message.liquidationPrice = reader.string();
                    break;
                case 9:
                    message.markPrice = reader.string();
                    break;
                case 11:
                    message.aggregateReduceOnlyQuantity = reader.string();
                    break;
                case 12:
                    message.updatedAt = longToString(reader.sint64());
                    break;
                case 13:
                    message.createdAt = longToString(reader.sint64());
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
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            direction: isSet(object.direction) ? String(object.direction) : "",
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            entryPrice: isSet(object.entryPrice) ? String(object.entryPrice) : "",
            margin: isSet(object.margin) ? String(object.margin) : "",
            liquidationPrice: isSet(object.liquidationPrice) ? String(object.liquidationPrice) : "",
            markPrice: isSet(object.markPrice) ? String(object.markPrice) : "",
            aggregateReduceOnlyQuantity: isSet(object.aggregateReduceOnlyQuantity)
                ? String(object.aggregateReduceOnlyQuantity)
                : "",
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
            createdAt: isSet(object.createdAt) ? String(object.createdAt) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.direction !== undefined && (obj.direction = message.direction);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.entryPrice !== undefined && (obj.entryPrice = message.entryPrice);
        message.margin !== undefined && (obj.margin = message.margin);
        message.liquidationPrice !== undefined && (obj.liquidationPrice = message.liquidationPrice);
        message.markPrice !== undefined && (obj.markPrice = message.markPrice);
        message.aggregateReduceOnlyQuantity !== undefined &&
            (obj.aggregateReduceOnlyQuantity = message.aggregateReduceOnlyQuantity);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        return obj;
    },
    create(base) {
        return exports.DerivativePosition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBaseDerivativePosition();
        message.ticker = (_a = object.ticker) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.subaccountId = (_c = object.subaccountId) !== null && _c !== void 0 ? _c : "";
        message.direction = (_d = object.direction) !== null && _d !== void 0 ? _d : "";
        message.quantity = (_e = object.quantity) !== null && _e !== void 0 ? _e : "";
        message.entryPrice = (_f = object.entryPrice) !== null && _f !== void 0 ? _f : "";
        message.margin = (_g = object.margin) !== null && _g !== void 0 ? _g : "";
        message.liquidationPrice = (_h = object.liquidationPrice) !== null && _h !== void 0 ? _h : "";
        message.markPrice = (_j = object.markPrice) !== null && _j !== void 0 ? _j : "";
        message.aggregateReduceOnlyQuantity = (_k = object.aggregateReduceOnlyQuantity) !== null && _k !== void 0 ? _k : "";
        message.updatedAt = (_l = object.updatedAt) !== null && _l !== void 0 ? _l : "0";
        message.createdAt = (_m = object.createdAt) !== null && _m !== void 0 ? _m : "0";
        return message;
    },
};
function createBaseLiquidablePositionsRequest() {
    return { marketId: "", skip: "0", limit: 0 };
}
exports.LiquidablePositionsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.skip !== "0") {
            writer.uint32(16).uint64(message.skip);
        }
        if (message.limit !== 0) {
            writer.uint32(24).sint32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidablePositionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.skip = longToString(reader.uint64());
                    break;
                case 3:
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
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            skip: isSet(object.skip) ? String(object.skip) : "0",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.skip !== undefined && (obj.skip = message.skip);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        return obj;
    },
    create(base) {
        return exports.LiquidablePositionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseLiquidablePositionsRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.skip = (_b = object.skip) !== null && _b !== void 0 ? _b : "0";
        message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseLiquidablePositionsResponse() {
    return { positions: [] };
}
exports.LiquidablePositionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.positions) {
            exports.DerivativePosition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidablePositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positions.push(exports.DerivativePosition.decode(reader, reader.uint32()));
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
            positions: Array.isArray(object === null || object === void 0 ? void 0 : object.positions)
                ? object.positions.map((e) => exports.DerivativePosition.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.positions) {
            obj.positions = message.positions.map((e) => e ? exports.DerivativePosition.toJSON(e) : undefined);
        }
        else {
            obj.positions = [];
        }
        return obj;
    },
    create(base) {
        return exports.LiquidablePositionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLiquidablePositionsResponse();
        message.positions = ((_a = object.positions) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DerivativePosition.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFundingPaymentsRequest() {
    return { subaccountId: "", marketId: "", skip: "0", limit: 0, endTime: "0", marketIds: [] };
}
exports.FundingPaymentsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        if (message.endTime !== "0") {
            writer.uint32(40).sint64(message.endTime);
        }
        for (const v of message.marketIds) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFundingPaymentsRequest();
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
                    message.endTime = longToString(reader.sint64());
                    break;
                case 6:
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
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            skip: isSet(object.skip) ? String(object.skip) : "0",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            endTime: isSet(object.endTime) ? String(object.endTime) : "0",
            marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.skip !== undefined && (obj.skip = message.skip);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.endTime !== undefined && (obj.endTime = message.endTime);
        if (message.marketIds) {
            obj.marketIds = message.marketIds.map((e) => e);
        }
        else {
            obj.marketIds = [];
        }
        return obj;
    },
    create(base) {
        return exports.FundingPaymentsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseFundingPaymentsRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.skip = (_c = object.skip) !== null && _c !== void 0 ? _c : "0";
        message.limit = (_d = object.limit) !== null && _d !== void 0 ? _d : 0;
        message.endTime = (_e = object.endTime) !== null && _e !== void 0 ? _e : "0";
        message.marketIds = ((_f = object.marketIds) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        return message;
    },
};
function createBaseFundingPaymentsResponse() {
    return { payments: [], paging: undefined };
}
exports.FundingPaymentsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.payments) {
            exports.FundingPayment.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFundingPaymentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payments.push(exports.FundingPayment.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.paging = exports.Paging.decode(reader, reader.uint32());
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
            payments: Array.isArray(object === null || object === void 0 ? void 0 : object.payments) ? object.payments.map((e) => exports.FundingPayment.fromJSON(e)) : [],
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.payments) {
            obj.payments = message.payments.map((e) => e ? exports.FundingPayment.toJSON(e) : undefined);
        }
        else {
            obj.payments = [];
        }
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        return obj;
    },
    create(base) {
        return exports.FundingPaymentsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFundingPaymentsResponse();
        message.payments = ((_a = object.payments) === null || _a === void 0 ? void 0 : _a.map((e) => exports.FundingPayment.fromPartial(e))) || [];
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        return message;
    },
};
function createBaseFundingPayment() {
    return { marketId: "", subaccountId: "", amount: "", timestamp: "0" };
}
exports.FundingPayment = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.timestamp !== "0") {
            writer.uint32(32).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFundingPayment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
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
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.amount !== undefined && (obj.amount = message.amount);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return exports.FundingPayment.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseFundingPayment();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseFundingRatesRequest() {
    return { marketId: "", skip: "0", limit: 0, endTime: "0" };
}
exports.FundingRatesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.skip !== "0") {
            writer.uint32(16).uint64(message.skip);
        }
        if (message.limit !== 0) {
            writer.uint32(24).sint32(message.limit);
        }
        if (message.endTime !== "0") {
            writer.uint32(32).sint64(message.endTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFundingRatesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.skip = longToString(reader.uint64());
                    break;
                case 3:
                    message.limit = reader.sint32();
                    break;
                case 4:
                    message.endTime = longToString(reader.sint64());
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
            skip: isSet(object.skip) ? String(object.skip) : "0",
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            endTime: isSet(object.endTime) ? String(object.endTime) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.skip !== undefined && (obj.skip = message.skip);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.endTime !== undefined && (obj.endTime = message.endTime);
        return obj;
    },
    create(base) {
        return exports.FundingRatesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseFundingRatesRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.skip = (_b = object.skip) !== null && _b !== void 0 ? _b : "0";
        message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : 0;
        message.endTime = (_d = object.endTime) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseFundingRatesResponse() {
    return { fundingRates: [], paging: undefined };
}
exports.FundingRatesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.fundingRates) {
            exports.FundingRate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFundingRatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fundingRates.push(exports.FundingRate.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.paging = exports.Paging.decode(reader, reader.uint32());
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
            fundingRates: Array.isArray(object === null || object === void 0 ? void 0 : object.fundingRates)
                ? object.fundingRates.map((e) => exports.FundingRate.fromJSON(e))
                : [],
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fundingRates) {
            obj.fundingRates = message.fundingRates.map((e) => e ? exports.FundingRate.toJSON(e) : undefined);
        }
        else {
            obj.fundingRates = [];
        }
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        return obj;
    },
    create(base) {
        return exports.FundingRatesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFundingRatesResponse();
        message.fundingRates = ((_a = object.fundingRates) === null || _a === void 0 ? void 0 : _a.map((e) => exports.FundingRate.fromPartial(e))) || [];
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        return message;
    },
};
function createBaseFundingRate() {
    return { marketId: "", rate: "", timestamp: "0" };
}
exports.FundingRate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.rate !== "") {
            writer.uint32(18).string(message.rate);
        }
        if (message.timestamp !== "0") {
            writer.uint32(24).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFundingRate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.rate = reader.string();
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
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            rate: isSet(object.rate) ? String(object.rate) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.rate !== undefined && (obj.rate = message.rate);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return exports.FundingRate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseFundingRate();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.rate = (_b = object.rate) !== null && _b !== void 0 ? _b : "";
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseStreamPositionsRequest() {
    return { subaccountId: "", marketId: "", marketIds: [], subaccountIds: [] };
}
exports.StreamPositionsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        for (const v of message.marketIds) {
            writer.uint32(26).string(v);
        }
        for (const v of message.subaccountIds) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamPositionsRequest();
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
                    message.marketIds.push(reader.string());
                    break;
                case 4:
                    message.subaccountIds.push(reader.string());
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
            marketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.marketIds) ? object.marketIds.map((e) => String(e)) : [],
            subaccountIds: Array.isArray(object === null || object === void 0 ? void 0 : object.subaccountIds) ? object.subaccountIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
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
        return obj;
    },
    create(base) {
        return exports.StreamPositionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseStreamPositionsRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.marketIds = ((_c = object.marketIds) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.subaccountIds = ((_d = object.subaccountIds) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
function createBaseStreamPositionsResponse() {
    return { position: undefined, timestamp: "0" };
}
exports.StreamPositionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.position !== undefined) {
            exports.DerivativePosition.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.timestamp !== "0") {
            writer.uint32(16).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.position = exports.DerivativePosition.decode(reader, reader.uint32());
                    break;
                case 2:
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
            position: isSet(object.position) ? exports.DerivativePosition.fromJSON(object.position) : undefined,
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.position !== undefined &&
            (obj.position = message.position ? exports.DerivativePosition.toJSON(message.position) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return exports.StreamPositionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStreamPositionsResponse();
        message.position = (object.position !== undefined && object.position !== null)
            ? exports.DerivativePosition.fromPartial(object.position)
            : undefined;
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : "0";
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
        isConditional: "",
        orderType: "",
        includeInactive: false,
        subaccountTotalOrders: false,
        tradeId: "",
    };
}
exports.StreamOrdersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        if (message.isConditional !== "") {
            writer.uint32(74).string(message.isConditional);
        }
        if (message.orderType !== "") {
            writer.uint32(82).string(message.orderType);
        }
        if (message.includeInactive === true) {
            writer.uint32(88).bool(message.includeInactive);
        }
        if (message.subaccountTotalOrders === true) {
            writer.uint32(96).bool(message.subaccountTotalOrders);
        }
        if (message.tradeId !== "") {
            writer.uint32(106).string(message.tradeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.isConditional = reader.string();
                    break;
                case 10:
                    message.orderType = reader.string();
                    break;
                case 11:
                    message.includeInactive = reader.bool();
                    break;
                case 12:
                    message.subaccountTotalOrders = reader.bool();
                    break;
                case 13:
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
            isConditional: isSet(object.isConditional) ? String(object.isConditional) : "",
            orderType: isSet(object.orderType) ? String(object.orderType) : "",
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
        message.isConditional !== undefined && (obj.isConditional = message.isConditional);
        message.orderType !== undefined && (obj.orderType = message.orderType);
        message.includeInactive !== undefined && (obj.includeInactive = message.includeInactive);
        message.subaccountTotalOrders !== undefined && (obj.subaccountTotalOrders = message.subaccountTotalOrders);
        message.tradeId !== undefined && (obj.tradeId = message.tradeId);
        return obj;
    },
    create(base) {
        return exports.StreamOrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseStreamOrdersRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.orderSide = (_b = object.orderSide) !== null && _b !== void 0 ? _b : "";
        message.subaccountId = (_c = object.subaccountId) !== null && _c !== void 0 ? _c : "";
        message.skip = (_d = object.skip) !== null && _d !== void 0 ? _d : "0";
        message.limit = (_e = object.limit) !== null && _e !== void 0 ? _e : 0;
        message.startTime = (_f = object.startTime) !== null && _f !== void 0 ? _f : "0";
        message.endTime = (_g = object.endTime) !== null && _g !== void 0 ? _g : "0";
        message.marketIds = ((_h = object.marketIds) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.isConditional = (_j = object.isConditional) !== null && _j !== void 0 ? _j : "";
        message.orderType = (_k = object.orderType) !== null && _k !== void 0 ? _k : "";
        message.includeInactive = (_l = object.includeInactive) !== null && _l !== void 0 ? _l : false;
        message.subaccountTotalOrders = (_m = object.subaccountTotalOrders) !== null && _m !== void 0 ? _m : false;
        message.tradeId = (_o = object.tradeId) !== null && _o !== void 0 ? _o : "";
        return message;
    },
};
function createBaseStreamOrdersResponse() {
    return { order: undefined, operationType: "", timestamp: "0" };
}
exports.StreamOrdersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.order !== undefined) {
            exports.DerivativeLimitOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = exports.DerivativeLimitOrder.decode(reader, reader.uint32());
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
            order: isSet(object.order) ? exports.DerivativeLimitOrder.fromJSON(object.order) : undefined,
            operationType: isSet(object.operationType) ? String(object.operationType) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.order !== undefined && (obj.order = message.order ? exports.DerivativeLimitOrder.toJSON(message.order) : undefined);
        message.operationType !== undefined && (obj.operationType = message.operationType);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return exports.StreamOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStreamOrdersResponse();
        message.order = (object.order !== undefined && object.order !== null)
            ? exports.DerivativeLimitOrder.fromPartial(object.order)
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
exports.TradesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return exports.TradesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.TradesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.trades) {
            exports.DerivativeTrade.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trades.push(exports.DerivativeTrade.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.paging = exports.Paging.decode(reader, reader.uint32());
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
            trades: Array.isArray(object === null || object === void 0 ? void 0 : object.trades) ? object.trades.map((e) => exports.DerivativeTrade.fromJSON(e)) : [],
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.trades) {
            obj.trades = message.trades.map((e) => e ? exports.DerivativeTrade.toJSON(e) : undefined);
        }
        else {
            obj.trades = [];
        }
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        return obj;
    },
    create(base) {
        return exports.TradesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTradesResponse();
        message.trades = ((_a = object.trades) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DerivativeTrade.fromPartial(e))) || [];
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        return message;
    },
};
function createBaseDerivativeTrade() {
    return {
        orderHash: "",
        subaccountId: "",
        marketId: "",
        tradeExecutionType: "",
        isLiquidation: false,
        positionDelta: undefined,
        payout: "",
        fee: "",
        executedAt: "0",
        feeRecipient: "",
        tradeId: "",
        executionSide: "",
    };
}
exports.DerivativeTrade = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        if (message.isLiquidation === true) {
            writer.uint32(40).bool(message.isLiquidation);
        }
        if (message.positionDelta !== undefined) {
            exports.PositionDelta.encode(message.positionDelta, writer.uint32(50).fork()).ldelim();
        }
        if (message.payout !== "") {
            writer.uint32(58).string(message.payout);
        }
        if (message.fee !== "") {
            writer.uint32(66).string(message.fee);
        }
        if (message.executedAt !== "0") {
            writer.uint32(72).sint64(message.executedAt);
        }
        if (message.feeRecipient !== "") {
            writer.uint32(82).string(message.feeRecipient);
        }
        if (message.tradeId !== "") {
            writer.uint32(90).string(message.tradeId);
        }
        if (message.executionSide !== "") {
            writer.uint32(98).string(message.executionSide);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeTrade();
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
                    message.isLiquidation = reader.bool();
                    break;
                case 6:
                    message.positionDelta = exports.PositionDelta.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.payout = reader.string();
                    break;
                case 8:
                    message.fee = reader.string();
                    break;
                case 9:
                    message.executedAt = longToString(reader.sint64());
                    break;
                case 10:
                    message.feeRecipient = reader.string();
                    break;
                case 11:
                    message.tradeId = reader.string();
                    break;
                case 12:
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
            isLiquidation: isSet(object.isLiquidation) ? Boolean(object.isLiquidation) : false,
            positionDelta: isSet(object.positionDelta) ? exports.PositionDelta.fromJSON(object.positionDelta) : undefined,
            payout: isSet(object.payout) ? String(object.payout) : "",
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
        message.isLiquidation !== undefined && (obj.isLiquidation = message.isLiquidation);
        message.positionDelta !== undefined &&
            (obj.positionDelta = message.positionDelta ? exports.PositionDelta.toJSON(message.positionDelta) : undefined);
        message.payout !== undefined && (obj.payout = message.payout);
        message.fee !== undefined && (obj.fee = message.fee);
        message.executedAt !== undefined && (obj.executedAt = message.executedAt);
        message.feeRecipient !== undefined && (obj.feeRecipient = message.feeRecipient);
        message.tradeId !== undefined && (obj.tradeId = message.tradeId);
        message.executionSide !== undefined && (obj.executionSide = message.executionSide);
        return obj;
    },
    create(base) {
        return exports.DerivativeTrade.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseDerivativeTrade();
        message.orderHash = (_a = object.orderHash) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.marketId = (_c = object.marketId) !== null && _c !== void 0 ? _c : "";
        message.tradeExecutionType = (_d = object.tradeExecutionType) !== null && _d !== void 0 ? _d : "";
        message.isLiquidation = (_e = object.isLiquidation) !== null && _e !== void 0 ? _e : false;
        message.positionDelta = (object.positionDelta !== undefined && object.positionDelta !== null)
            ? exports.PositionDelta.fromPartial(object.positionDelta)
            : undefined;
        message.payout = (_f = object.payout) !== null && _f !== void 0 ? _f : "";
        message.fee = (_g = object.fee) !== null && _g !== void 0 ? _g : "";
        message.executedAt = (_h = object.executedAt) !== null && _h !== void 0 ? _h : "0";
        message.feeRecipient = (_j = object.feeRecipient) !== null && _j !== void 0 ? _j : "";
        message.tradeId = (_k = object.tradeId) !== null && _k !== void 0 ? _k : "";
        message.executionSide = (_l = object.executionSide) !== null && _l !== void 0 ? _l : "";
        return message;
    },
};
function createBasePositionDelta() {
    return { tradeDirection: "", executionPrice: "", executionQuantity: "", executionMargin: "" };
}
exports.PositionDelta = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tradeDirection !== "") {
            writer.uint32(10).string(message.tradeDirection);
        }
        if (message.executionPrice !== "") {
            writer.uint32(18).string(message.executionPrice);
        }
        if (message.executionQuantity !== "") {
            writer.uint32(26).string(message.executionQuantity);
        }
        if (message.executionMargin !== "") {
            writer.uint32(34).string(message.executionMargin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionDelta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradeDirection = reader.string();
                    break;
                case 2:
                    message.executionPrice = reader.string();
                    break;
                case 3:
                    message.executionQuantity = reader.string();
                    break;
                case 4:
                    message.executionMargin = reader.string();
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
            tradeDirection: isSet(object.tradeDirection) ? String(object.tradeDirection) : "",
            executionPrice: isSet(object.executionPrice) ? String(object.executionPrice) : "",
            executionQuantity: isSet(object.executionQuantity) ? String(object.executionQuantity) : "",
            executionMargin: isSet(object.executionMargin) ? String(object.executionMargin) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.tradeDirection !== undefined && (obj.tradeDirection = message.tradeDirection);
        message.executionPrice !== undefined && (obj.executionPrice = message.executionPrice);
        message.executionQuantity !== undefined && (obj.executionQuantity = message.executionQuantity);
        message.executionMargin !== undefined && (obj.executionMargin = message.executionMargin);
        return obj;
    },
    create(base) {
        return exports.PositionDelta.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBasePositionDelta();
        message.tradeDirection = (_a = object.tradeDirection) !== null && _a !== void 0 ? _a : "";
        message.executionPrice = (_b = object.executionPrice) !== null && _b !== void 0 ? _b : "";
        message.executionQuantity = (_c = object.executionQuantity) !== null && _c !== void 0 ? _c : "";
        message.executionMargin = (_d = object.executionMargin) !== null && _d !== void 0 ? _d : "";
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
exports.StreamTradesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return exports.StreamTradesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.StreamTradesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.trade !== undefined) {
            exports.DerivativeTrade.encode(message.trade, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamTradesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trade = exports.DerivativeTrade.decode(reader, reader.uint32());
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
            trade: isSet(object.trade) ? exports.DerivativeTrade.fromJSON(object.trade) : undefined,
            operationType: isSet(object.operationType) ? String(object.operationType) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.trade !== undefined && (obj.trade = message.trade ? exports.DerivativeTrade.toJSON(message.trade) : undefined);
        message.operationType !== undefined && (obj.operationType = message.operationType);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return exports.StreamTradesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStreamTradesResponse();
        message.trade = (object.trade !== undefined && object.trade !== null)
            ? exports.DerivativeTrade.fromPartial(object.trade)
            : undefined;
        message.operationType = (_a = object.operationType) !== null && _a !== void 0 ? _a : "";
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseSubaccountOrdersListRequest() {
    return { subaccountId: "", marketId: "", skip: "0", limit: 0 };
}
exports.SubaccountOrdersListRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return exports.SubaccountOrdersListRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.SubaccountOrdersListResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.orders) {
            exports.DerivativeLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountOrdersListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(exports.DerivativeLimitOrder.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.paging = exports.Paging.decode(reader, reader.uint32());
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
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => exports.DerivativeLimitOrder.fromJSON(e)) : [],
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? exports.DerivativeLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        return obj;
    },
    create(base) {
        return exports.SubaccountOrdersListResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSubaccountOrdersListResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DerivativeLimitOrder.fromPartial(e))) || [];
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        return message;
    },
};
function createBaseSubaccountTradesListRequest() {
    return { subaccountId: "", marketId: "", executionType: "", direction: "", skip: "0", limit: 0 };
}
exports.SubaccountTradesListRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return exports.SubaccountTradesListRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.SubaccountTradesListResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.trades) {
            exports.DerivativeTrade.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountTradesListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trades.push(exports.DerivativeTrade.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { trades: Array.isArray(object === null || object === void 0 ? void 0 : object.trades) ? object.trades.map((e) => exports.DerivativeTrade.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.trades) {
            obj.trades = message.trades.map((e) => e ? exports.DerivativeTrade.toJSON(e) : undefined);
        }
        else {
            obj.trades = [];
        }
        return obj;
    },
    create(base) {
        return exports.SubaccountTradesListResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSubaccountTradesListResponse();
        message.trades = ((_a = object.trades) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DerivativeTrade.fromPartial(e))) || [];
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
        isConditional: "",
        orderType: "",
        state: "",
        executionTypes: [],
        marketIds: [],
        tradeId: "",
        activeMarketsOnly: false,
    };
}
exports.OrdersHistoryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        if (message.isConditional !== "") {
            writer.uint32(74).string(message.isConditional);
        }
        if (message.orderType !== "") {
            writer.uint32(82).string(message.orderType);
        }
        if (message.state !== "") {
            writer.uint32(90).string(message.state);
        }
        for (const v of message.executionTypes) {
            writer.uint32(98).string(v);
        }
        for (const v of message.marketIds) {
            writer.uint32(106).string(v);
        }
        if (message.tradeId !== "") {
            writer.uint32(114).string(message.tradeId);
        }
        if (message.activeMarketsOnly === true) {
            writer.uint32(120).bool(message.activeMarketsOnly);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.isConditional = reader.string();
                    break;
                case 10:
                    message.orderType = reader.string();
                    break;
                case 11:
                    message.state = reader.string();
                    break;
                case 12:
                    message.executionTypes.push(reader.string());
                    break;
                case 13:
                    message.marketIds.push(reader.string());
                    break;
                case 14:
                    message.tradeId = reader.string();
                    break;
                case 15:
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
            isConditional: isSet(object.isConditional) ? String(object.isConditional) : "",
            orderType: isSet(object.orderType) ? String(object.orderType) : "",
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
        message.isConditional !== undefined && (obj.isConditional = message.isConditional);
        message.orderType !== undefined && (obj.orderType = message.orderType);
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
        return exports.OrdersHistoryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const message = createBaseOrdersHistoryRequest();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.skip = (_c = object.skip) !== null && _c !== void 0 ? _c : "0";
        message.limit = (_d = object.limit) !== null && _d !== void 0 ? _d : 0;
        message.orderTypes = ((_e = object.orderTypes) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.direction = (_f = object.direction) !== null && _f !== void 0 ? _f : "";
        message.startTime = (_g = object.startTime) !== null && _g !== void 0 ? _g : "0";
        message.endTime = (_h = object.endTime) !== null && _h !== void 0 ? _h : "0";
        message.isConditional = (_j = object.isConditional) !== null && _j !== void 0 ? _j : "";
        message.orderType = (_k = object.orderType) !== null && _k !== void 0 ? _k : "";
        message.state = (_l = object.state) !== null && _l !== void 0 ? _l : "";
        message.executionTypes = ((_m = object.executionTypes) === null || _m === void 0 ? void 0 : _m.map((e) => e)) || [];
        message.marketIds = ((_o = object.marketIds) === null || _o === void 0 ? void 0 : _o.map((e) => e)) || [];
        message.tradeId = (_p = object.tradeId) !== null && _p !== void 0 ? _p : "";
        message.activeMarketsOnly = (_q = object.activeMarketsOnly) !== null && _q !== void 0 ? _q : false;
        return message;
    },
};
function createBaseOrdersHistoryResponse() {
    return { orders: [], paging: undefined };
}
exports.OrdersHistoryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.orders) {
            exports.DerivativeOrderHistory.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.paging !== undefined) {
            exports.Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrdersHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(exports.DerivativeOrderHistory.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.paging = exports.Paging.decode(reader, reader.uint32());
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
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => exports.DerivativeOrderHistory.fromJSON(e)) : [],
            paging: isSet(object.paging) ? exports.Paging.fromJSON(object.paging) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? exports.DerivativeOrderHistory.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        message.paging !== undefined && (obj.paging = message.paging ? exports.Paging.toJSON(message.paging) : undefined);
        return obj;
    },
    create(base) {
        return exports.OrdersHistoryResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrdersHistoryResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DerivativeOrderHistory.fromPartial(e))) || [];
        message.paging = (object.paging !== undefined && object.paging !== null)
            ? exports.Paging.fromPartial(object.paging)
            : undefined;
        return message;
    },
};
function createBaseDerivativeOrderHistory() {
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
        isReduceOnly: false,
        direction: "",
        isConditional: false,
        triggerAt: "0",
        placedOrderHash: "",
        margin: "",
        txHash: "",
    };
}
exports.DerivativeOrderHistory = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        if (message.isReduceOnly === true) {
            writer.uint32(112).bool(message.isReduceOnly);
        }
        if (message.direction !== "") {
            writer.uint32(122).string(message.direction);
        }
        if (message.isConditional === true) {
            writer.uint32(128).bool(message.isConditional);
        }
        if (message.triggerAt !== "0") {
            writer.uint32(136).uint64(message.triggerAt);
        }
        if (message.placedOrderHash !== "") {
            writer.uint32(146).string(message.placedOrderHash);
        }
        if (message.margin !== "") {
            writer.uint32(154).string(message.margin);
        }
        if (message.txHash !== "") {
            writer.uint32(162).string(message.txHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeOrderHistory();
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
                    message.isReduceOnly = reader.bool();
                    break;
                case 15:
                    message.direction = reader.string();
                    break;
                case 16:
                    message.isConditional = reader.bool();
                    break;
                case 17:
                    message.triggerAt = longToString(reader.uint64());
                    break;
                case 18:
                    message.placedOrderHash = reader.string();
                    break;
                case 19:
                    message.margin = reader.string();
                    break;
                case 20:
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
            isReduceOnly: isSet(object.isReduceOnly) ? Boolean(object.isReduceOnly) : false,
            direction: isSet(object.direction) ? String(object.direction) : "",
            isConditional: isSet(object.isConditional) ? Boolean(object.isConditional) : false,
            triggerAt: isSet(object.triggerAt) ? String(object.triggerAt) : "0",
            placedOrderHash: isSet(object.placedOrderHash) ? String(object.placedOrderHash) : "",
            margin: isSet(object.margin) ? String(object.margin) : "",
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
        message.isReduceOnly !== undefined && (obj.isReduceOnly = message.isReduceOnly);
        message.direction !== undefined && (obj.direction = message.direction);
        message.isConditional !== undefined && (obj.isConditional = message.isConditional);
        message.triggerAt !== undefined && (obj.triggerAt = message.triggerAt);
        message.placedOrderHash !== undefined && (obj.placedOrderHash = message.placedOrderHash);
        message.margin !== undefined && (obj.margin = message.margin);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        return obj;
    },
    create(base) {
        return exports.DerivativeOrderHistory.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        const message = createBaseDerivativeOrderHistory();
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
        message.isReduceOnly = (_p = object.isReduceOnly) !== null && _p !== void 0 ? _p : false;
        message.direction = (_q = object.direction) !== null && _q !== void 0 ? _q : "";
        message.isConditional = (_r = object.isConditional) !== null && _r !== void 0 ? _r : false;
        message.triggerAt = (_s = object.triggerAt) !== null && _s !== void 0 ? _s : "0";
        message.placedOrderHash = (_t = object.placedOrderHash) !== null && _t !== void 0 ? _t : "";
        message.margin = (_u = object.margin) !== null && _u !== void 0 ? _u : "";
        message.txHash = (_v = object.txHash) !== null && _v !== void 0 ? _v : "";
        return message;
    },
};
function createBaseStreamOrdersHistoryRequest() {
    return { subaccountId: "", marketId: "", orderTypes: [], direction: "", state: "", executionTypes: [] };
}
exports.StreamOrdersHistoryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return exports.StreamOrdersHistoryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.StreamOrdersHistoryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.order !== undefined) {
            exports.DerivativeOrderHistory.encode(message.order, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOrdersHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = exports.DerivativeOrderHistory.decode(reader, reader.uint32());
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
            order: isSet(object.order) ? exports.DerivativeOrderHistory.fromJSON(object.order) : undefined,
            operationType: isSet(object.operationType) ? String(object.operationType) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.order !== undefined &&
            (obj.order = message.order ? exports.DerivativeOrderHistory.toJSON(message.order) : undefined);
        message.operationType !== undefined && (obj.operationType = message.operationType);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return exports.StreamOrdersHistoryResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStreamOrdersHistoryResponse();
        message.order = (object.order !== undefined && object.order !== null)
            ? exports.DerivativeOrderHistory.fromPartial(object.order)
            : undefined;
        message.operationType = (_a = object.operationType) !== null && _a !== void 0 ? _a : "";
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
class InjectiveDerivativeExchangeRPCClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Markets = this.Markets.bind(this);
        this.Market = this.Market.bind(this);
        this.StreamMarket = this.StreamMarket.bind(this);
        this.BinaryOptionsMarkets = this.BinaryOptionsMarkets.bind(this);
        this.BinaryOptionsMarket = this.BinaryOptionsMarket.bind(this);
        this.OrderbookV2 = this.OrderbookV2.bind(this);
        this.OrderbooksV2 = this.OrderbooksV2.bind(this);
        this.StreamOrderbookV2 = this.StreamOrderbookV2.bind(this);
        this.StreamOrderbookUpdate = this.StreamOrderbookUpdate.bind(this);
        this.Orders = this.Orders.bind(this);
        this.Positions = this.Positions.bind(this);
        this.LiquidablePositions = this.LiquidablePositions.bind(this);
        this.FundingPayments = this.FundingPayments.bind(this);
        this.FundingRates = this.FundingRates.bind(this);
        this.StreamPositions = this.StreamPositions.bind(this);
        this.StreamOrders = this.StreamOrders.bind(this);
        this.Trades = this.Trades.bind(this);
        this.StreamTrades = this.StreamTrades.bind(this);
        this.SubaccountOrdersList = this.SubaccountOrdersList.bind(this);
        this.SubaccountTradesList = this.SubaccountTradesList.bind(this);
        this.OrdersHistory = this.OrdersHistory.bind(this);
        this.StreamOrdersHistory = this.StreamOrdersHistory.bind(this);
    }
    Markets(request, metadata) {
        return this.rpc.unary(exports.InjectiveDerivativeExchangeRPCMarketsDesc, exports.MarketsRequest.fromPartial(request), metadata);
    }
    Market(request, metadata) {
        return this.rpc.unary(exports.InjectiveDerivativeExchangeRPCMarketDesc, exports.MarketRequest.fromPartial(request), metadata);
    }
    StreamMarket(request, metadata) {
        return this.rpc.invoke(exports.InjectiveDerivativeExchangeRPCStreamMarketDesc, exports.StreamMarketRequest.fromPartial(request), metadata);
    }
    BinaryOptionsMarkets(request, metadata) {
        return this.rpc.unary(exports.InjectiveDerivativeExchangeRPCBinaryOptionsMarketsDesc, exports.BinaryOptionsMarketsRequest.fromPartial(request), metadata);
    }
    BinaryOptionsMarket(request, metadata) {
        return this.rpc.unary(exports.InjectiveDerivativeExchangeRPCBinaryOptionsMarketDesc, exports.BinaryOptionsMarketRequest.fromPartial(request), metadata);
    }
    OrderbookV2(request, metadata) {
        return this.rpc.unary(exports.InjectiveDerivativeExchangeRPCOrderbookV2Desc, exports.OrderbookV2Request.fromPartial(request), metadata);
    }
    OrderbooksV2(request, metadata) {
        return this.rpc.unary(exports.InjectiveDerivativeExchangeRPCOrderbooksV2Desc, exports.OrderbooksV2Request.fromPartial(request), metadata);
    }
    StreamOrderbookV2(request, metadata) {
        return this.rpc.invoke(exports.InjectiveDerivativeExchangeRPCStreamOrderbookV2Desc, exports.StreamOrderbookV2Request.fromPartial(request), metadata);
    }
    StreamOrderbookUpdate(request, metadata) {
        return this.rpc.invoke(exports.InjectiveDerivativeExchangeRPCStreamOrderbookUpdateDesc, exports.StreamOrderbookUpdateRequest.fromPartial(request), metadata);
    }
    Orders(request, metadata) {
        return this.rpc.unary(exports.InjectiveDerivativeExchangeRPCOrdersDesc, exports.OrdersRequest.fromPartial(request), metadata);
    }
    Positions(request, metadata) {
        return this.rpc.unary(exports.InjectiveDerivativeExchangeRPCPositionsDesc, exports.PositionsRequest.fromPartial(request), metadata);
    }
    LiquidablePositions(request, metadata) {
        return this.rpc.unary(exports.InjectiveDerivativeExchangeRPCLiquidablePositionsDesc, exports.LiquidablePositionsRequest.fromPartial(request), metadata);
    }
    FundingPayments(request, metadata) {
        return this.rpc.unary(exports.InjectiveDerivativeExchangeRPCFundingPaymentsDesc, exports.FundingPaymentsRequest.fromPartial(request), metadata);
    }
    FundingRates(request, metadata) {
        return this.rpc.unary(exports.InjectiveDerivativeExchangeRPCFundingRatesDesc, exports.FundingRatesRequest.fromPartial(request), metadata);
    }
    StreamPositions(request, metadata) {
        return this.rpc.invoke(exports.InjectiveDerivativeExchangeRPCStreamPositionsDesc, exports.StreamPositionsRequest.fromPartial(request), metadata);
    }
    StreamOrders(request, metadata) {
        return this.rpc.invoke(exports.InjectiveDerivativeExchangeRPCStreamOrdersDesc, exports.StreamOrdersRequest.fromPartial(request), metadata);
    }
    Trades(request, metadata) {
        return this.rpc.unary(exports.InjectiveDerivativeExchangeRPCTradesDesc, exports.TradesRequest.fromPartial(request), metadata);
    }
    StreamTrades(request, metadata) {
        return this.rpc.invoke(exports.InjectiveDerivativeExchangeRPCStreamTradesDesc, exports.StreamTradesRequest.fromPartial(request), metadata);
    }
    SubaccountOrdersList(request, metadata) {
        return this.rpc.unary(exports.InjectiveDerivativeExchangeRPCSubaccountOrdersListDesc, exports.SubaccountOrdersListRequest.fromPartial(request), metadata);
    }
    SubaccountTradesList(request, metadata) {
        return this.rpc.unary(exports.InjectiveDerivativeExchangeRPCSubaccountTradesListDesc, exports.SubaccountTradesListRequest.fromPartial(request), metadata);
    }
    OrdersHistory(request, metadata) {
        return this.rpc.unary(exports.InjectiveDerivativeExchangeRPCOrdersHistoryDesc, exports.OrdersHistoryRequest.fromPartial(request), metadata);
    }
    StreamOrdersHistory(request, metadata) {
        return this.rpc.invoke(exports.InjectiveDerivativeExchangeRPCStreamOrdersHistoryDesc, exports.StreamOrdersHistoryRequest.fromPartial(request), metadata);
    }
}
exports.InjectiveDerivativeExchangeRPCClientImpl = InjectiveDerivativeExchangeRPCClientImpl;
exports.InjectiveDerivativeExchangeRPCDesc = {
    serviceName: "injective_derivative_exchange_rpc.InjectiveDerivativeExchangeRPC",
};
exports.InjectiveDerivativeExchangeRPCMarketsDesc = {
    methodName: "Markets",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MarketsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MarketsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCMarketDesc = {
    methodName: "Market",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MarketRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MarketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCStreamMarketDesc = {
    methodName: "StreamMarket",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return exports.StreamMarketRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.StreamMarketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCBinaryOptionsMarketsDesc = {
    methodName: "BinaryOptionsMarkets",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.BinaryOptionsMarketsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.BinaryOptionsMarketsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCBinaryOptionsMarketDesc = {
    methodName: "BinaryOptionsMarket",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.BinaryOptionsMarketRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.BinaryOptionsMarketResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCOrderbookV2Desc = {
    methodName: "OrderbookV2",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.OrderbookV2Request.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.OrderbookV2Response.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCOrderbooksV2Desc = {
    methodName: "OrderbooksV2",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.OrderbooksV2Request.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.OrderbooksV2Response.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCStreamOrderbookV2Desc = {
    methodName: "StreamOrderbookV2",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return exports.StreamOrderbookV2Request.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.StreamOrderbookV2Response.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCStreamOrderbookUpdateDesc = {
    methodName: "StreamOrderbookUpdate",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return exports.StreamOrderbookUpdateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.StreamOrderbookUpdateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCOrdersDesc = {
    methodName: "Orders",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.OrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.OrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCPositionsDesc = {
    methodName: "Positions",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.PositionsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.PositionsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCLiquidablePositionsDesc = {
    methodName: "LiquidablePositions",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.LiquidablePositionsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.LiquidablePositionsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCFundingPaymentsDesc = {
    methodName: "FundingPayments",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.FundingPaymentsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.FundingPaymentsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCFundingRatesDesc = {
    methodName: "FundingRates",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.FundingRatesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.FundingRatesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCStreamPositionsDesc = {
    methodName: "StreamPositions",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return exports.StreamPositionsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.StreamPositionsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCStreamOrdersDesc = {
    methodName: "StreamOrders",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return exports.StreamOrdersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.StreamOrdersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCTradesDesc = {
    methodName: "Trades",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.TradesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.TradesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCStreamTradesDesc = {
    methodName: "StreamTrades",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return exports.StreamTradesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.StreamTradesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCSubaccountOrdersListDesc = {
    methodName: "SubaccountOrdersList",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.SubaccountOrdersListRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.SubaccountOrdersListResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCSubaccountTradesListDesc = {
    methodName: "SubaccountTradesList",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.SubaccountTradesListRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.SubaccountTradesListResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCOrdersHistoryDesc = {
    methodName: "OrdersHistory",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.OrdersHistoryRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.OrdersHistoryResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDerivativeExchangeRPCStreamOrdersHistoryDesc = {
    methodName: "StreamOrdersHistory",
    service: exports.InjectiveDerivativeExchangeRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return exports.StreamOrdersHistoryRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.StreamOrdersHistoryResponse.decode(data);
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
