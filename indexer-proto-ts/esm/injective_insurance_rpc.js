/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "injective_insurance_rpc";
function createBaseFundsRequest() {
    return {};
}
export const FundsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFundsRequest();
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
        return FundsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseFundsRequest();
        return message;
    },
};
function createBaseFundsResponse() {
    return { funds: [] };
}
export const FundsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.funds) {
            InsuranceFund.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFundsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funds.push(InsuranceFund.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map((e) => InsuranceFund.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.funds) {
            obj.funds = message.funds.map((e) => e ? InsuranceFund.toJSON(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        return obj;
    },
    create(base) {
        return FundsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFundsResponse();
        message.funds = ((_a = object.funds) === null || _a === void 0 ? void 0 : _a.map((e) => InsuranceFund.fromPartial(e))) || [];
        return message;
    },
};
function createBaseInsuranceFund() {
    return {
        marketTicker: "",
        marketId: "",
        depositDenom: "",
        poolTokenDenom: "",
        redemptionNoticePeriodDuration: "0",
        balance: "",
        totalShare: "",
        oracleBase: "",
        oracleQuote: "",
        oracleType: "",
        expiry: "0",
        depositTokenMeta: undefined,
    };
}
export const InsuranceFund = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketTicker !== "") {
            writer.uint32(10).string(message.marketTicker);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.depositDenom !== "") {
            writer.uint32(26).string(message.depositDenom);
        }
        if (message.poolTokenDenom !== "") {
            writer.uint32(34).string(message.poolTokenDenom);
        }
        if (message.redemptionNoticePeriodDuration !== "0") {
            writer.uint32(40).sint64(message.redemptionNoticePeriodDuration);
        }
        if (message.balance !== "") {
            writer.uint32(50).string(message.balance);
        }
        if (message.totalShare !== "") {
            writer.uint32(58).string(message.totalShare);
        }
        if (message.oracleBase !== "") {
            writer.uint32(66).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(74).string(message.oracleQuote);
        }
        if (message.oracleType !== "") {
            writer.uint32(82).string(message.oracleType);
        }
        if (message.expiry !== "0") {
            writer.uint32(88).sint64(message.expiry);
        }
        if (message.depositTokenMeta !== undefined) {
            TokenMeta.encode(message.depositTokenMeta, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInsuranceFund();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketTicker = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.depositDenom = reader.string();
                    break;
                case 4:
                    message.poolTokenDenom = reader.string();
                    break;
                case 5:
                    message.redemptionNoticePeriodDuration = longToString(reader.sint64());
                    break;
                case 6:
                    message.balance = reader.string();
                    break;
                case 7:
                    message.totalShare = reader.string();
                    break;
                case 8:
                    message.oracleBase = reader.string();
                    break;
                case 9:
                    message.oracleQuote = reader.string();
                    break;
                case 10:
                    message.oracleType = reader.string();
                    break;
                case 11:
                    message.expiry = longToString(reader.sint64());
                    break;
                case 12:
                    message.depositTokenMeta = TokenMeta.decode(reader, reader.uint32());
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
            marketTicker: isSet(object.marketTicker) ? String(object.marketTicker) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            depositDenom: isSet(object.depositDenom) ? String(object.depositDenom) : "",
            poolTokenDenom: isSet(object.poolTokenDenom) ? String(object.poolTokenDenom) : "",
            redemptionNoticePeriodDuration: isSet(object.redemptionNoticePeriodDuration)
                ? String(object.redemptionNoticePeriodDuration)
                : "0",
            balance: isSet(object.balance) ? String(object.balance) : "",
            totalShare: isSet(object.totalShare) ? String(object.totalShare) : "",
            oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
            oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
            oracleType: isSet(object.oracleType) ? String(object.oracleType) : "",
            expiry: isSet(object.expiry) ? String(object.expiry) : "0",
            depositTokenMeta: isSet(object.depositTokenMeta) ? TokenMeta.fromJSON(object.depositTokenMeta) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketTicker !== undefined && (obj.marketTicker = message.marketTicker);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
        message.poolTokenDenom !== undefined && (obj.poolTokenDenom = message.poolTokenDenom);
        message.redemptionNoticePeriodDuration !== undefined &&
            (obj.redemptionNoticePeriodDuration = message.redemptionNoticePeriodDuration);
        message.balance !== undefined && (obj.balance = message.balance);
        message.totalShare !== undefined && (obj.totalShare = message.totalShare);
        message.oracleBase !== undefined && (obj.oracleBase = message.oracleBase);
        message.oracleQuote !== undefined && (obj.oracleQuote = message.oracleQuote);
        message.oracleType !== undefined && (obj.oracleType = message.oracleType);
        message.expiry !== undefined && (obj.expiry = message.expiry);
        message.depositTokenMeta !== undefined &&
            (obj.depositTokenMeta = message.depositTokenMeta ? TokenMeta.toJSON(message.depositTokenMeta) : undefined);
        return obj;
    },
    create(base) {
        return InsuranceFund.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseInsuranceFund();
        message.marketTicker = (_a = object.marketTicker) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.depositDenom = (_c = object.depositDenom) !== null && _c !== void 0 ? _c : "";
        message.poolTokenDenom = (_d = object.poolTokenDenom) !== null && _d !== void 0 ? _d : "";
        message.redemptionNoticePeriodDuration = (_e = object.redemptionNoticePeriodDuration) !== null && _e !== void 0 ? _e : "0";
        message.balance = (_f = object.balance) !== null && _f !== void 0 ? _f : "";
        message.totalShare = (_g = object.totalShare) !== null && _g !== void 0 ? _g : "";
        message.oracleBase = (_h = object.oracleBase) !== null && _h !== void 0 ? _h : "";
        message.oracleQuote = (_j = object.oracleQuote) !== null && _j !== void 0 ? _j : "";
        message.oracleType = (_k = object.oracleType) !== null && _k !== void 0 ? _k : "";
        message.expiry = (_l = object.expiry) !== null && _l !== void 0 ? _l : "0";
        message.depositTokenMeta = (object.depositTokenMeta !== undefined && object.depositTokenMeta !== null)
            ? TokenMeta.fromPartial(object.depositTokenMeta)
            : undefined;
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
function createBaseRedemptionsRequest() {
    return { redeemer: "", redemptionDenom: "", status: "" };
}
export const RedemptionsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.redeemer !== "") {
            writer.uint32(10).string(message.redeemer);
        }
        if (message.redemptionDenom !== "") {
            writer.uint32(18).string(message.redemptionDenom);
        }
        if (message.status !== "") {
            writer.uint32(26).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedemptionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redeemer = reader.string();
                    break;
                case 2:
                    message.redemptionDenom = reader.string();
                    break;
                case 3:
                    message.status = reader.string();
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
            redeemer: isSet(object.redeemer) ? String(object.redeemer) : "",
            redemptionDenom: isSet(object.redemptionDenom) ? String(object.redemptionDenom) : "",
            status: isSet(object.status) ? String(object.status) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.redeemer !== undefined && (obj.redeemer = message.redeemer);
        message.redemptionDenom !== undefined && (obj.redemptionDenom = message.redemptionDenom);
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return RedemptionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRedemptionsRequest();
        message.redeemer = (_a = object.redeemer) !== null && _a !== void 0 ? _a : "";
        message.redemptionDenom = (_b = object.redemptionDenom) !== null && _b !== void 0 ? _b : "";
        message.status = (_c = object.status) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRedemptionsResponse() {
    return { redemptionSchedules: [] };
}
export const RedemptionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.redemptionSchedules) {
            RedemptionSchedule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedemptionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redemptionSchedules.push(RedemptionSchedule.decode(reader, reader.uint32()));
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
            redemptionSchedules: Array.isArray(object === null || object === void 0 ? void 0 : object.redemptionSchedules)
                ? object.redemptionSchedules.map((e) => RedemptionSchedule.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.redemptionSchedules) {
            obj.redemptionSchedules = message.redemptionSchedules.map((e) => e ? RedemptionSchedule.toJSON(e) : undefined);
        }
        else {
            obj.redemptionSchedules = [];
        }
        return obj;
    },
    create(base) {
        return RedemptionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRedemptionsResponse();
        message.redemptionSchedules = ((_a = object.redemptionSchedules) === null || _a === void 0 ? void 0 : _a.map((e) => RedemptionSchedule.fromPartial(e))) || [];
        return message;
    },
};
function createBaseRedemptionSchedule() {
    return {
        redemptionId: "0",
        status: "",
        redeemer: "",
        claimableRedemptionTime: "0",
        redemptionAmount: "",
        redemptionDenom: "",
        requestedAt: "0",
        disbursedAmount: "",
        disbursedDenom: "",
        disbursedAt: "0",
    };
}
export const RedemptionSchedule = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.redemptionId !== "0") {
            writer.uint32(8).uint64(message.redemptionId);
        }
        if (message.status !== "") {
            writer.uint32(18).string(message.status);
        }
        if (message.redeemer !== "") {
            writer.uint32(26).string(message.redeemer);
        }
        if (message.claimableRedemptionTime !== "0") {
            writer.uint32(32).sint64(message.claimableRedemptionTime);
        }
        if (message.redemptionAmount !== "") {
            writer.uint32(42).string(message.redemptionAmount);
        }
        if (message.redemptionDenom !== "") {
            writer.uint32(50).string(message.redemptionDenom);
        }
        if (message.requestedAt !== "0") {
            writer.uint32(56).sint64(message.requestedAt);
        }
        if (message.disbursedAmount !== "") {
            writer.uint32(66).string(message.disbursedAmount);
        }
        if (message.disbursedDenom !== "") {
            writer.uint32(74).string(message.disbursedDenom);
        }
        if (message.disbursedAt !== "0") {
            writer.uint32(80).sint64(message.disbursedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedemptionSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redemptionId = longToString(reader.uint64());
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.redeemer = reader.string();
                    break;
                case 4:
                    message.claimableRedemptionTime = longToString(reader.sint64());
                    break;
                case 5:
                    message.redemptionAmount = reader.string();
                    break;
                case 6:
                    message.redemptionDenom = reader.string();
                    break;
                case 7:
                    message.requestedAt = longToString(reader.sint64());
                    break;
                case 8:
                    message.disbursedAmount = reader.string();
                    break;
                case 9:
                    message.disbursedDenom = reader.string();
                    break;
                case 10:
                    message.disbursedAt = longToString(reader.sint64());
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
            redemptionId: isSet(object.redemptionId) ? String(object.redemptionId) : "0",
            status: isSet(object.status) ? String(object.status) : "",
            redeemer: isSet(object.redeemer) ? String(object.redeemer) : "",
            claimableRedemptionTime: isSet(object.claimableRedemptionTime) ? String(object.claimableRedemptionTime) : "0",
            redemptionAmount: isSet(object.redemptionAmount) ? String(object.redemptionAmount) : "",
            redemptionDenom: isSet(object.redemptionDenom) ? String(object.redemptionDenom) : "",
            requestedAt: isSet(object.requestedAt) ? String(object.requestedAt) : "0",
            disbursedAmount: isSet(object.disbursedAmount) ? String(object.disbursedAmount) : "",
            disbursedDenom: isSet(object.disbursedDenom) ? String(object.disbursedDenom) : "",
            disbursedAt: isSet(object.disbursedAt) ? String(object.disbursedAt) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.redemptionId !== undefined && (obj.redemptionId = message.redemptionId);
        message.status !== undefined && (obj.status = message.status);
        message.redeemer !== undefined && (obj.redeemer = message.redeemer);
        message.claimableRedemptionTime !== undefined && (obj.claimableRedemptionTime = message.claimableRedemptionTime);
        message.redemptionAmount !== undefined && (obj.redemptionAmount = message.redemptionAmount);
        message.redemptionDenom !== undefined && (obj.redemptionDenom = message.redemptionDenom);
        message.requestedAt !== undefined && (obj.requestedAt = message.requestedAt);
        message.disbursedAmount !== undefined && (obj.disbursedAmount = message.disbursedAmount);
        message.disbursedDenom !== undefined && (obj.disbursedDenom = message.disbursedDenom);
        message.disbursedAt !== undefined && (obj.disbursedAt = message.disbursedAt);
        return obj;
    },
    create(base) {
        return RedemptionSchedule.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseRedemptionSchedule();
        message.redemptionId = (_a = object.redemptionId) !== null && _a !== void 0 ? _a : "0";
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : "";
        message.redeemer = (_c = object.redeemer) !== null && _c !== void 0 ? _c : "";
        message.claimableRedemptionTime = (_d = object.claimableRedemptionTime) !== null && _d !== void 0 ? _d : "0";
        message.redemptionAmount = (_e = object.redemptionAmount) !== null && _e !== void 0 ? _e : "";
        message.redemptionDenom = (_f = object.redemptionDenom) !== null && _f !== void 0 ? _f : "";
        message.requestedAt = (_g = object.requestedAt) !== null && _g !== void 0 ? _g : "0";
        message.disbursedAmount = (_h = object.disbursedAmount) !== null && _h !== void 0 ? _h : "";
        message.disbursedDenom = (_j = object.disbursedDenom) !== null && _j !== void 0 ? _j : "";
        message.disbursedAt = (_k = object.disbursedAt) !== null && _k !== void 0 ? _k : "0";
        return message;
    },
};
export class InjectiveInsuranceRPCClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Funds = this.Funds.bind(this);
        this.Redemptions = this.Redemptions.bind(this);
    }
    Funds(request, metadata) {
        return this.rpc.unary(InjectiveInsuranceRPCFundsDesc, FundsRequest.fromPartial(request), metadata);
    }
    Redemptions(request, metadata) {
        return this.rpc.unary(InjectiveInsuranceRPCRedemptionsDesc, RedemptionsRequest.fromPartial(request), metadata);
    }
}
export const InjectiveInsuranceRPCDesc = { serviceName: "injective_insurance_rpc.InjectiveInsuranceRPC" };
export const InjectiveInsuranceRPCFundsDesc = {
    methodName: "Funds",
    service: InjectiveInsuranceRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return FundsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = FundsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveInsuranceRPCRedemptionsDesc = {
    methodName: "Redemptions",
    service: InjectiveInsuranceRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return RedemptionsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = RedemptionsResponse.decode(data);
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
