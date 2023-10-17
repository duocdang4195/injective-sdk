"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUnderwrite = exports.EventWithdrawRedemption = exports.EventRequestRedemption = exports.EventInsuranceFundUpdate = exports.RedemptionSchedule = exports.InsuranceFund = exports.Params = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const duration_1 = require("../../../google/protobuf/duration");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const oracle_1 = require("../../oracle/v1beta1/oracle");
function createBaseParams() {
    return { defaultRedemptionNoticePeriodDuration: undefined };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.defaultRedemptionNoticePeriodDuration !== undefined) {
            duration_1.Duration.encode(message.defaultRedemptionNoticePeriodDuration, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.defaultRedemptionNoticePeriodDuration = duration_1.Duration.decode(reader, reader.uint32());
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
            defaultRedemptionNoticePeriodDuration: isSet(object.defaultRedemptionNoticePeriodDuration)
                ? duration_1.Duration.fromJSON(object.defaultRedemptionNoticePeriodDuration)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.defaultRedemptionNoticePeriodDuration !== undefined &&
            (obj.defaultRedemptionNoticePeriodDuration = message.defaultRedemptionNoticePeriodDuration
                ? duration_1.Duration.toJSON(message.defaultRedemptionNoticePeriodDuration)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.defaultRedemptionNoticePeriodDuration =
            (object.defaultRedemptionNoticePeriodDuration !== undefined &&
                object.defaultRedemptionNoticePeriodDuration !== null)
                ? duration_1.Duration.fromPartial(object.defaultRedemptionNoticePeriodDuration)
                : undefined;
        return message;
    },
};
function createBaseInsuranceFund() {
    return {
        depositDenom: "",
        insurancePoolTokenDenom: "",
        redemptionNoticePeriodDuration: undefined,
        balance: "",
        totalShare: "",
        marketId: "",
        marketTicker: "",
        oracleBase: "",
        oracleQuote: "",
        oracleType: 0,
        expiry: "0",
    };
}
exports.InsuranceFund = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.depositDenom !== "") {
            writer.uint32(10).string(message.depositDenom);
        }
        if (message.insurancePoolTokenDenom !== "") {
            writer.uint32(18).string(message.insurancePoolTokenDenom);
        }
        if (message.redemptionNoticePeriodDuration !== undefined) {
            duration_1.Duration.encode(message.redemptionNoticePeriodDuration, writer.uint32(26).fork()).ldelim();
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        if (message.totalShare !== "") {
            writer.uint32(42).string(message.totalShare);
        }
        if (message.marketId !== "") {
            writer.uint32(50).string(message.marketId);
        }
        if (message.marketTicker !== "") {
            writer.uint32(58).string(message.marketTicker);
        }
        if (message.oracleBase !== "") {
            writer.uint32(66).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(74).string(message.oracleQuote);
        }
        if (message.oracleType !== 0) {
            writer.uint32(80).int32(message.oracleType);
        }
        if (message.expiry !== "0") {
            writer.uint32(88).int64(message.expiry);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInsuranceFund();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.depositDenom = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.insurancePoolTokenDenom = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.redemptionNoticePeriodDuration = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.balance = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.totalShare = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.marketTicker = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.oracleBase = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.oracleQuote = reader.string();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.oracleType = reader.int32();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.expiry = longToString(reader.int64());
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
            depositDenom: isSet(object.depositDenom) ? String(object.depositDenom) : "",
            insurancePoolTokenDenom: isSet(object.insurancePoolTokenDenom) ? String(object.insurancePoolTokenDenom) : "",
            redemptionNoticePeriodDuration: isSet(object.redemptionNoticePeriodDuration)
                ? duration_1.Duration.fromJSON(object.redemptionNoticePeriodDuration)
                : undefined,
            balance: isSet(object.balance) ? String(object.balance) : "",
            totalShare: isSet(object.totalShare) ? String(object.totalShare) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            marketTicker: isSet(object.marketTicker) ? String(object.marketTicker) : "",
            oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
            oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
            oracleType: isSet(object.oracleType) ? (0, oracle_1.oracleTypeFromJSON)(object.oracleType) : 0,
            expiry: isSet(object.expiry) ? String(object.expiry) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
        message.insurancePoolTokenDenom !== undefined && (obj.insurancePoolTokenDenom = message.insurancePoolTokenDenom);
        message.redemptionNoticePeriodDuration !== undefined &&
            (obj.redemptionNoticePeriodDuration = message.redemptionNoticePeriodDuration
                ? duration_1.Duration.toJSON(message.redemptionNoticePeriodDuration)
                : undefined);
        message.balance !== undefined && (obj.balance = message.balance);
        message.totalShare !== undefined && (obj.totalShare = message.totalShare);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.marketTicker !== undefined && (obj.marketTicker = message.marketTicker);
        message.oracleBase !== undefined && (obj.oracleBase = message.oracleBase);
        message.oracleQuote !== undefined && (obj.oracleQuote = message.oracleQuote);
        message.oracleType !== undefined && (obj.oracleType = (0, oracle_1.oracleTypeToJSON)(message.oracleType));
        message.expiry !== undefined && (obj.expiry = message.expiry);
        return obj;
    },
    create(base) {
        return exports.InsuranceFund.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseInsuranceFund();
        message.depositDenom = (_a = object.depositDenom) !== null && _a !== void 0 ? _a : "";
        message.insurancePoolTokenDenom = (_b = object.insurancePoolTokenDenom) !== null && _b !== void 0 ? _b : "";
        message.redemptionNoticePeriodDuration =
            (object.redemptionNoticePeriodDuration !== undefined && object.redemptionNoticePeriodDuration !== null)
                ? duration_1.Duration.fromPartial(object.redemptionNoticePeriodDuration)
                : undefined;
        message.balance = (_c = object.balance) !== null && _c !== void 0 ? _c : "";
        message.totalShare = (_d = object.totalShare) !== null && _d !== void 0 ? _d : "";
        message.marketId = (_e = object.marketId) !== null && _e !== void 0 ? _e : "";
        message.marketTicker = (_f = object.marketTicker) !== null && _f !== void 0 ? _f : "";
        message.oracleBase = (_g = object.oracleBase) !== null && _g !== void 0 ? _g : "";
        message.oracleQuote = (_h = object.oracleQuote) !== null && _h !== void 0 ? _h : "";
        message.oracleType = (_j = object.oracleType) !== null && _j !== void 0 ? _j : 0;
        message.expiry = (_k = object.expiry) !== null && _k !== void 0 ? _k : "0";
        return message;
    },
};
function createBaseRedemptionSchedule() {
    return { id: "0", marketId: "", redeemer: "", claimableRedemptionTime: undefined, redemptionAmount: undefined };
}
exports.RedemptionSchedule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(8).uint64(message.id);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.redeemer !== "") {
            writer.uint32(26).string(message.redeemer);
        }
        if (message.claimableRedemptionTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.claimableRedemptionTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.redemptionAmount !== undefined) {
            coin_1.Coin.encode(message.redemptionAmount, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedemptionSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.redeemer = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.claimableRedemptionTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.redemptionAmount = coin_1.Coin.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? String(object.id) : "0",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            redeemer: isSet(object.redeemer) ? String(object.redeemer) : "",
            claimableRedemptionTime: isSet(object.claimableRedemptionTime)
                ? fromJsonTimestamp(object.claimableRedemptionTime)
                : undefined,
            redemptionAmount: isSet(object.redemptionAmount) ? coin_1.Coin.fromJSON(object.redemptionAmount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.redeemer !== undefined && (obj.redeemer = message.redeemer);
        message.claimableRedemptionTime !== undefined &&
            (obj.claimableRedemptionTime = message.claimableRedemptionTime.toISOString());
        message.redemptionAmount !== undefined &&
            (obj.redemptionAmount = message.redemptionAmount ? coin_1.Coin.toJSON(message.redemptionAmount) : undefined);
        return obj;
    },
    create(base) {
        return exports.RedemptionSchedule.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseRedemptionSchedule();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.redeemer = (_c = object.redeemer) !== null && _c !== void 0 ? _c : "";
        message.claimableRedemptionTime = (_d = object.claimableRedemptionTime) !== null && _d !== void 0 ? _d : undefined;
        message.redemptionAmount = (object.redemptionAmount !== undefined && object.redemptionAmount !== null)
            ? coin_1.Coin.fromPartial(object.redemptionAmount)
            : undefined;
        return message;
    },
};
function createBaseEventInsuranceFundUpdate() {
    return { fund: undefined };
}
exports.EventInsuranceFundUpdate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fund !== undefined) {
            exports.InsuranceFund.encode(message.fund, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventInsuranceFundUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fund = exports.InsuranceFund.decode(reader, reader.uint32());
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
        return { fund: isSet(object.fund) ? exports.InsuranceFund.fromJSON(object.fund) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.fund !== undefined && (obj.fund = message.fund ? exports.InsuranceFund.toJSON(message.fund) : undefined);
        return obj;
    },
    create(base) {
        return exports.EventInsuranceFundUpdate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseEventInsuranceFundUpdate();
        message.fund = (object.fund !== undefined && object.fund !== null)
            ? exports.InsuranceFund.fromPartial(object.fund)
            : undefined;
        return message;
    },
};
function createBaseEventRequestRedemption() {
    return { schedule: undefined };
}
exports.EventRequestRedemption = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.schedule !== undefined) {
            exports.RedemptionSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRequestRedemption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.schedule = exports.RedemptionSchedule.decode(reader, reader.uint32());
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
        return { schedule: isSet(object.schedule) ? exports.RedemptionSchedule.fromJSON(object.schedule) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.schedule !== undefined &&
            (obj.schedule = message.schedule ? exports.RedemptionSchedule.toJSON(message.schedule) : undefined);
        return obj;
    },
    create(base) {
        return exports.EventRequestRedemption.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseEventRequestRedemption();
        message.schedule = (object.schedule !== undefined && object.schedule !== null)
            ? exports.RedemptionSchedule.fromPartial(object.schedule)
            : undefined;
        return message;
    },
};
function createBaseEventWithdrawRedemption() {
    return { schedule: undefined, redeemCoin: undefined };
}
exports.EventWithdrawRedemption = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.schedule !== undefined) {
            exports.RedemptionSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
        }
        if (message.redeemCoin !== undefined) {
            coin_1.Coin.encode(message.redeemCoin, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdrawRedemption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.schedule = exports.RedemptionSchedule.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.redeemCoin = coin_1.Coin.decode(reader, reader.uint32());
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
            schedule: isSet(object.schedule) ? exports.RedemptionSchedule.fromJSON(object.schedule) : undefined,
            redeemCoin: isSet(object.redeemCoin) ? coin_1.Coin.fromJSON(object.redeemCoin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.schedule !== undefined &&
            (obj.schedule = message.schedule ? exports.RedemptionSchedule.toJSON(message.schedule) : undefined);
        message.redeemCoin !== undefined &&
            (obj.redeemCoin = message.redeemCoin ? coin_1.Coin.toJSON(message.redeemCoin) : undefined);
        return obj;
    },
    create(base) {
        return exports.EventWithdrawRedemption.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseEventWithdrawRedemption();
        message.schedule = (object.schedule !== undefined && object.schedule !== null)
            ? exports.RedemptionSchedule.fromPartial(object.schedule)
            : undefined;
        message.redeemCoin = (object.redeemCoin !== undefined && object.redeemCoin !== null)
            ? coin_1.Coin.fromPartial(object.redeemCoin)
            : undefined;
        return message;
    },
};
function createBaseEventUnderwrite() {
    return { underwriter: "", marketId: "", deposit: undefined, shares: undefined };
}
exports.EventUnderwrite = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.underwriter !== "") {
            writer.uint32(10).string(message.underwriter);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
        }
        if (message.shares !== undefined) {
            coin_1.Coin.encode(message.shares, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUnderwrite();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.underwriter = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.deposit = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.shares = coin_1.Coin.decode(reader, reader.uint32());
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
            underwriter: isSet(object.underwriter) ? String(object.underwriter) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            deposit: isSet(object.deposit) ? coin_1.Coin.fromJSON(object.deposit) : undefined,
            shares: isSet(object.shares) ? coin_1.Coin.fromJSON(object.shares) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.underwriter !== undefined && (obj.underwriter = message.underwriter);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.deposit !== undefined && (obj.deposit = message.deposit ? coin_1.Coin.toJSON(message.deposit) : undefined);
        message.shares !== undefined && (obj.shares = message.shares ? coin_1.Coin.toJSON(message.shares) : undefined);
        return obj;
    },
    create(base) {
        return exports.EventUnderwrite.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventUnderwrite();
        message.underwriter = (_a = object.underwriter) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.deposit = (object.deposit !== undefined && object.deposit !== null)
            ? coin_1.Coin.fromPartial(object.deposit)
            : undefined;
        message.shares = (object.shares !== undefined && object.shares !== null)
            ? coin_1.Coin.fromPartial(object.shares)
            : undefined;
        return message;
    },
};
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1000).toString();
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (Number(t.seconds) || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
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
