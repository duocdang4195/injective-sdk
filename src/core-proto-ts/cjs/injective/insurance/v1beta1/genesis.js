"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const insurance_1 = require("./insurance");
function createBaseGenesisState() {
    return {
        params: undefined,
        insuranceFunds: [],
        redemptionSchedule: [],
        nextShareDenomId: "0",
        nextRedemptionScheduleId: "0",
    };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            insurance_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.insuranceFunds) {
            insurance_1.InsuranceFund.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.redemptionSchedule) {
            insurance_1.RedemptionSchedule.encode(v, writer.uint32(26).fork()).ldelim();
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = insurance_1.Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.insuranceFunds.push(insurance_1.InsuranceFund.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.redemptionSchedule.push(insurance_1.RedemptionSchedule.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? insurance_1.Params.fromJSON(object.params) : undefined,
            insuranceFunds: Array.isArray(object === null || object === void 0 ? void 0 : object.insuranceFunds)
                ? object.insuranceFunds.map((e) => insurance_1.InsuranceFund.fromJSON(e))
                : [],
            redemptionSchedule: Array.isArray(object === null || object === void 0 ? void 0 : object.redemptionSchedule)
                ? object.redemptionSchedule.map((e) => insurance_1.RedemptionSchedule.fromJSON(e))
                : [],
            nextShareDenomId: isSet(object.nextShareDenomId) ? String(object.nextShareDenomId) : "0",
            nextRedemptionScheduleId: isSet(object.nextRedemptionScheduleId) ? String(object.nextRedemptionScheduleId) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? insurance_1.Params.toJSON(message.params) : undefined);
        if (message.insuranceFunds) {
            obj.insuranceFunds = message.insuranceFunds.map((e) => e ? insurance_1.InsuranceFund.toJSON(e) : undefined);
        }
        else {
            obj.insuranceFunds = [];
        }
        if (message.redemptionSchedule) {
            obj.redemptionSchedule = message.redemptionSchedule.map((e) => e ? insurance_1.RedemptionSchedule.toJSON(e) : undefined);
        }
        else {
            obj.redemptionSchedule = [];
        }
        message.nextShareDenomId !== undefined && (obj.nextShareDenomId = message.nextShareDenomId);
        message.nextRedemptionScheduleId !== undefined && (obj.nextRedemptionScheduleId = message.nextRedemptionScheduleId);
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? insurance_1.Params.fromPartial(object.params)
            : undefined;
        message.insuranceFunds = ((_a = object.insuranceFunds) === null || _a === void 0 ? void 0 : _a.map((e) => insurance_1.InsuranceFund.fromPartial(e))) || [];
        message.redemptionSchedule = ((_b = object.redemptionSchedule) === null || _b === void 0 ? void 0 : _b.map((e) => insurance_1.RedemptionSchedule.fromPartial(e))) || [];
        message.nextShareDenomId = (_c = object.nextShareDenomId) !== null && _c !== void 0 ? _c : "0";
        message.nextRedemptionScheduleId = (_d = object.nextRedemptionScheduleId) !== null && _d !== void 0 ? _d : "0";
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
