/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { InsuranceFund, Params, RedemptionSchedule } from "./insurance";
function createBaseGenesisState() {
    return {
        params: undefined,
        insuranceFunds: [],
        redemptionSchedule: [],
        nextShareDenomId: "0",
        nextRedemptionScheduleId: "0",
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.insuranceFunds) {
            InsuranceFund.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.redemptionSchedule) {
            RedemptionSchedule.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.nextShareDenomId !== "0") {
            writer.uint32(32).uint64(message.nextShareDenomId);
        }
        if (message.nextRedemptionScheduleId !== "0") {
            writer.uint32(40).uint64(message.nextRedemptionScheduleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.insuranceFunds.push(InsuranceFund.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.redemptionSchedule.push(RedemptionSchedule.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.nextShareDenomId = longToString(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.nextRedemptionScheduleId = longToString(reader.uint64());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            insuranceFunds: Array.isArray(object === null || object === void 0 ? void 0 : object.insuranceFunds)
                ? object.insuranceFunds.map((e) => InsuranceFund.fromJSON(e))
                : [],
            redemptionSchedule: Array.isArray(object === null || object === void 0 ? void 0 : object.redemptionSchedule)
                ? object.redemptionSchedule.map((e) => RedemptionSchedule.fromJSON(e))
                : [],
            nextShareDenomId: isSet(object.nextShareDenomId) ? String(object.nextShareDenomId) : "0",
            nextRedemptionScheduleId: isSet(object.nextRedemptionScheduleId) ? String(object.nextRedemptionScheduleId) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.insuranceFunds) {
            obj.insuranceFunds = message.insuranceFunds.map((e) => e ? InsuranceFund.toJSON(e) : undefined);
        }
        else {
            obj.insuranceFunds = [];
        }
        if (message.redemptionSchedule) {
            obj.redemptionSchedule = message.redemptionSchedule.map((e) => e ? RedemptionSchedule.toJSON(e) : undefined);
        }
        else {
            obj.redemptionSchedule = [];
        }
        message.nextShareDenomId !== undefined && (obj.nextShareDenomId = message.nextShareDenomId);
        message.nextRedemptionScheduleId !== undefined && (obj.nextRedemptionScheduleId = message.nextRedemptionScheduleId);
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        message.insuranceFunds = ((_a = object.insuranceFunds) === null || _a === void 0 ? void 0 : _a.map((e) => InsuranceFund.fromPartial(e))) || [];
        message.redemptionSchedule = ((_b = object.redemptionSchedule) === null || _b === void 0 ? void 0 : _b.map((e) => RedemptionSchedule.fromPartial(e))) || [];
        message.nextShareDenomId = (_c = object.nextShareDenomId) !== null && _c !== void 0 ? _c : "0";
        message.nextRedemptionScheduleId = (_d = object.nextRedemptionScheduleId) !== null && _d !== void 0 ? _d : "0";
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
