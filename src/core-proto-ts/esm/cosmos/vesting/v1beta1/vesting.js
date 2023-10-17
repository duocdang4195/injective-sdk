/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BaseAccount } from "../../auth/v1beta1/auth";
import { Coin } from "../../base/v1beta1/coin";
function createBaseBaseVestingAccount() {
    return { baseAccount: undefined, originalVesting: [], delegatedFree: [], delegatedVesting: [], endTime: "0" };
}
export const BaseVestingAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseAccount !== undefined) {
            BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.originalVesting) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegatedFree) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.delegatedVesting) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.endTime !== "0") {
            writer.uint32(40).int64(message.endTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.baseAccount = BaseAccount.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.originalVesting.push(Coin.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.delegatedFree.push(Coin.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.delegatedVesting.push(Coin.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.endTime = longToString(reader.int64());
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
            baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
            originalVesting: Array.isArray(object === null || object === void 0 ? void 0 : object.originalVesting)
                ? object.originalVesting.map((e) => Coin.fromJSON(e))
                : [],
            delegatedFree: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatedFree) ? object.delegatedFree.map((e) => Coin.fromJSON(e)) : [],
            delegatedVesting: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatedVesting)
                ? object.delegatedVesting.map((e) => Coin.fromJSON(e))
                : [],
            endTime: isSet(object.endTime) ? String(object.endTime) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseAccount !== undefined &&
            (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
        if (message.originalVesting) {
            obj.originalVesting = message.originalVesting.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.originalVesting = [];
        }
        if (message.delegatedFree) {
            obj.delegatedFree = message.delegatedFree.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.delegatedFree = [];
        }
        if (message.delegatedVesting) {
            obj.delegatedVesting = message.delegatedVesting.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.delegatedVesting = [];
        }
        message.endTime !== undefined && (obj.endTime = message.endTime);
        return obj;
    },
    create(base) {
        return BaseVestingAccount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseBaseVestingAccount();
        message.baseAccount = (object.baseAccount !== undefined && object.baseAccount !== null)
            ? BaseAccount.fromPartial(object.baseAccount)
            : undefined;
        message.originalVesting = ((_a = object.originalVesting) === null || _a === void 0 ? void 0 : _a.map((e) => Coin.fromPartial(e))) || [];
        message.delegatedFree = ((_b = object.delegatedFree) === null || _b === void 0 ? void 0 : _b.map((e) => Coin.fromPartial(e))) || [];
        message.delegatedVesting = ((_c = object.delegatedVesting) === null || _c === void 0 ? void 0 : _c.map((e) => Coin.fromPartial(e))) || [];
        message.endTime = (_d = object.endTime) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseContinuousVestingAccount() {
    return { baseVestingAccount: undefined, startTime: "0" };
}
export const ContinuousVestingAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.startTime !== "0") {
            writer.uint32(16).int64(message.startTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContinuousVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.startTime = longToString(reader.int64());
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
            baseVestingAccount: isSet(object.baseVestingAccount)
                ? BaseVestingAccount.fromJSON(object.baseVestingAccount)
                : undefined,
            startTime: isSet(object.startTime) ? String(object.startTime) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount
            ? BaseVestingAccount.toJSON(message.baseVestingAccount)
            : undefined);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        return obj;
    },
    create(base) {
        return ContinuousVestingAccount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseContinuousVestingAccount();
        message.baseVestingAccount = (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null)
            ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
            : undefined;
        message.startTime = (_a = object.startTime) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseDelayedVestingAccount() {
    return { baseVestingAccount: undefined };
}
export const DelayedVestingAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelayedVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
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
            baseVestingAccount: isSet(object.baseVestingAccount)
                ? BaseVestingAccount.fromJSON(object.baseVestingAccount)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount
            ? BaseVestingAccount.toJSON(message.baseVestingAccount)
            : undefined);
        return obj;
    },
    create(base) {
        return DelayedVestingAccount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseDelayedVestingAccount();
        message.baseVestingAccount = (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null)
            ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
            : undefined;
        return message;
    },
};
function createBasePeriod() {
    return { length: "0", amount: [] };
}
export const Period = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.length !== "0") {
            writer.uint32(8).int64(message.length);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriod();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.length = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
            length: isSet(object.length) ? String(object.length) : "0",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.length !== undefined && (obj.length = message.length);
        if (message.amount) {
            obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    create(base) {
        return Period.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePeriod();
        message.length = (_a = object.length) !== null && _a !== void 0 ? _a : "0";
        message.amount = ((_b = object.amount) === null || _b === void 0 ? void 0 : _b.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBasePeriodicVestingAccount() {
    return { baseVestingAccount: undefined, startTime: "0", vestingPeriods: [] };
}
export const PeriodicVestingAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.startTime !== "0") {
            writer.uint32(16).int64(message.startTime);
        }
        for (const v of message.vestingPeriods) {
            Period.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriodicVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.startTime = longToString(reader.int64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
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
            baseVestingAccount: isSet(object.baseVestingAccount)
                ? BaseVestingAccount.fromJSON(object.baseVestingAccount)
                : undefined,
            startTime: isSet(object.startTime) ? String(object.startTime) : "0",
            vestingPeriods: Array.isArray(object === null || object === void 0 ? void 0 : object.vestingPeriods)
                ? object.vestingPeriods.map((e) => Period.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount
            ? BaseVestingAccount.toJSON(message.baseVestingAccount)
            : undefined);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        if (message.vestingPeriods) {
            obj.vestingPeriods = message.vestingPeriods.map((e) => e ? Period.toJSON(e) : undefined);
        }
        else {
            obj.vestingPeriods = [];
        }
        return obj;
    },
    create(base) {
        return PeriodicVestingAccount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePeriodicVestingAccount();
        message.baseVestingAccount = (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null)
            ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
            : undefined;
        message.startTime = (_a = object.startTime) !== null && _a !== void 0 ? _a : "0";
        message.vestingPeriods = ((_b = object.vestingPeriods) === null || _b === void 0 ? void 0 : _b.map((e) => Period.fromPartial(e))) || [];
        return message;
    },
};
function createBasePermanentLockedAccount() {
    return { baseVestingAccount: undefined };
}
export const PermanentLockedAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermanentLockedAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
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
            baseVestingAccount: isSet(object.baseVestingAccount)
                ? BaseVestingAccount.fromJSON(object.baseVestingAccount)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount
            ? BaseVestingAccount.toJSON(message.baseVestingAccount)
            : undefined);
        return obj;
    },
    create(base) {
        return PermanentLockedAccount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBasePermanentLockedAccount();
        message.baseVestingAccount = (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null)
            ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
            : undefined;
        return message;
    },
};
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
