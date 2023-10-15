"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalldataRecord = exports.GenesisState = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const oracle_1 = require("./oracle");
function createBaseGenesisState() {
    return {
        params: undefined,
        bandRelayers: [],
        bandPriceStates: [],
        priceFeedPriceStates: [],
        coinbasePriceStates: [],
        bandIbcPriceStates: [],
        bandIbcOracleRequests: [],
        bandIbcParams: undefined,
        bandIbcLatestClientId: "0",
        calldataRecords: [],
        bandIbcLatestRequestId: "0",
        chainlinkPriceStates: [],
        historicalPriceRecords: [],
        providerStates: [],
        pythPriceStates: [],
    };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            oracle_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.bandRelayers) {
            writer.uint32(18).string(v);
        }
        for (const v of message.bandPriceStates) {
            oracle_1.BandPriceState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.priceFeedPriceStates) {
            oracle_1.PriceFeedState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.coinbasePriceStates) {
            oracle_1.CoinbasePriceState.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.bandIbcPriceStates) {
            oracle_1.BandPriceState.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.bandIbcOracleRequests) {
            oracle_1.BandOracleRequest.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.bandIbcParams !== undefined) {
            oracle_1.BandIBCParams.encode(message.bandIbcParams, writer.uint32(66).fork()).ldelim();
        }
        if (message.bandIbcLatestClientId !== "0") {
            writer.uint32(72).uint64(message.bandIbcLatestClientId);
        }
        for (const v of message.calldataRecords) {
            exports.CalldataRecord.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.bandIbcLatestRequestId !== "0") {
            writer.uint32(88).uint64(message.bandIbcLatestRequestId);
        }
        for (const v of message.chainlinkPriceStates) {
            oracle_1.ChainlinkPriceState.encode(v, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.historicalPriceRecords) {
            oracle_1.PriceRecords.encode(v, writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.providerStates) {
            oracle_1.ProviderState.encode(v, writer.uint32(114).fork()).ldelim();
        }
        for (const v of message.pythPriceStates) {
            oracle_1.PythPriceState.encode(v, writer.uint32(122).fork()).ldelim();
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
                    message.params = oracle_1.Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.bandRelayers.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.bandPriceStates.push(oracle_1.BandPriceState.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.priceFeedPriceStates.push(oracle_1.PriceFeedState.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.coinbasePriceStates.push(oracle_1.CoinbasePriceState.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.bandIbcPriceStates.push(oracle_1.BandPriceState.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.bandIbcOracleRequests.push(oracle_1.BandOracleRequest.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.bandIbcParams = oracle_1.BandIBCParams.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.bandIbcLatestClientId = longToString(reader.uint64());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.calldataRecords.push(exports.CalldataRecord.decode(reader, reader.uint32()));
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.bandIbcLatestRequestId = longToString(reader.uint64());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.chainlinkPriceStates.push(oracle_1.ChainlinkPriceState.decode(reader, reader.uint32()));
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.historicalPriceRecords.push(oracle_1.PriceRecords.decode(reader, reader.uint32()));
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.providerStates.push(oracle_1.ProviderState.decode(reader, reader.uint32()));
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.pythPriceStates.push(oracle_1.PythPriceState.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? oracle_1.Params.fromJSON(object.params) : undefined,
            bandRelayers: Array.isArray(object === null || object === void 0 ? void 0 : object.bandRelayers) ? object.bandRelayers.map((e) => String(e)) : [],
            bandPriceStates: Array.isArray(object === null || object === void 0 ? void 0 : object.bandPriceStates)
                ? object.bandPriceStates.map((e) => oracle_1.BandPriceState.fromJSON(e))
                : [],
            priceFeedPriceStates: Array.isArray(object === null || object === void 0 ? void 0 : object.priceFeedPriceStates)
                ? object.priceFeedPriceStates.map((e) => oracle_1.PriceFeedState.fromJSON(e))
                : [],
            coinbasePriceStates: Array.isArray(object === null || object === void 0 ? void 0 : object.coinbasePriceStates)
                ? object.coinbasePriceStates.map((e) => oracle_1.CoinbasePriceState.fromJSON(e))
                : [],
            bandIbcPriceStates: Array.isArray(object === null || object === void 0 ? void 0 : object.bandIbcPriceStates)
                ? object.bandIbcPriceStates.map((e) => oracle_1.BandPriceState.fromJSON(e))
                : [],
            bandIbcOracleRequests: Array.isArray(object === null || object === void 0 ? void 0 : object.bandIbcOracleRequests)
                ? object.bandIbcOracleRequests.map((e) => oracle_1.BandOracleRequest.fromJSON(e))
                : [],
            bandIbcParams: isSet(object.bandIbcParams) ? oracle_1.BandIBCParams.fromJSON(object.bandIbcParams) : undefined,
            bandIbcLatestClientId: isSet(object.bandIbcLatestClientId) ? String(object.bandIbcLatestClientId) : "0",
            calldataRecords: Array.isArray(object === null || object === void 0 ? void 0 : object.calldataRecords)
                ? object.calldataRecords.map((e) => exports.CalldataRecord.fromJSON(e))
                : [],
            bandIbcLatestRequestId: isSet(object.bandIbcLatestRequestId) ? String(object.bandIbcLatestRequestId) : "0",
            chainlinkPriceStates: Array.isArray(object === null || object === void 0 ? void 0 : object.chainlinkPriceStates)
                ? object.chainlinkPriceStates.map((e) => oracle_1.ChainlinkPriceState.fromJSON(e))
                : [],
            historicalPriceRecords: Array.isArray(object === null || object === void 0 ? void 0 : object.historicalPriceRecords)
                ? object.historicalPriceRecords.map((e) => oracle_1.PriceRecords.fromJSON(e))
                : [],
            providerStates: Array.isArray(object === null || object === void 0 ? void 0 : object.providerStates)
                ? object.providerStates.map((e) => oracle_1.ProviderState.fromJSON(e))
                : [],
            pythPriceStates: Array.isArray(object === null || object === void 0 ? void 0 : object.pythPriceStates)
                ? object.pythPriceStates.map((e) => oracle_1.PythPriceState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? oracle_1.Params.toJSON(message.params) : undefined);
        if (message.bandRelayers) {
            obj.bandRelayers = message.bandRelayers.map((e) => e);
        }
        else {
            obj.bandRelayers = [];
        }
        if (message.bandPriceStates) {
            obj.bandPriceStates = message.bandPriceStates.map((e) => e ? oracle_1.BandPriceState.toJSON(e) : undefined);
        }
        else {
            obj.bandPriceStates = [];
        }
        if (message.priceFeedPriceStates) {
            obj.priceFeedPriceStates = message.priceFeedPriceStates.map((e) => e ? oracle_1.PriceFeedState.toJSON(e) : undefined);
        }
        else {
            obj.priceFeedPriceStates = [];
        }
        if (message.coinbasePriceStates) {
            obj.coinbasePriceStates = message.coinbasePriceStates.map((e) => e ? oracle_1.CoinbasePriceState.toJSON(e) : undefined);
        }
        else {
            obj.coinbasePriceStates = [];
        }
        if (message.bandIbcPriceStates) {
            obj.bandIbcPriceStates = message.bandIbcPriceStates.map((e) => e ? oracle_1.BandPriceState.toJSON(e) : undefined);
        }
        else {
            obj.bandIbcPriceStates = [];
        }
        if (message.bandIbcOracleRequests) {
            obj.bandIbcOracleRequests = message.bandIbcOracleRequests.map((e) => e ? oracle_1.BandOracleRequest.toJSON(e) : undefined);
        }
        else {
            obj.bandIbcOracleRequests = [];
        }
        message.bandIbcParams !== undefined &&
            (obj.bandIbcParams = message.bandIbcParams ? oracle_1.BandIBCParams.toJSON(message.bandIbcParams) : undefined);
        message.bandIbcLatestClientId !== undefined && (obj.bandIbcLatestClientId = message.bandIbcLatestClientId);
        if (message.calldataRecords) {
            obj.calldataRecords = message.calldataRecords.map((e) => e ? exports.CalldataRecord.toJSON(e) : undefined);
        }
        else {
            obj.calldataRecords = [];
        }
        message.bandIbcLatestRequestId !== undefined && (obj.bandIbcLatestRequestId = message.bandIbcLatestRequestId);
        if (message.chainlinkPriceStates) {
            obj.chainlinkPriceStates = message.chainlinkPriceStates.map((e) => e ? oracle_1.ChainlinkPriceState.toJSON(e) : undefined);
        }
        else {
            obj.chainlinkPriceStates = [];
        }
        if (message.historicalPriceRecords) {
            obj.historicalPriceRecords = message.historicalPriceRecords.map((e) => e ? oracle_1.PriceRecords.toJSON(e) : undefined);
        }
        else {
            obj.historicalPriceRecords = [];
        }
        if (message.providerStates) {
            obj.providerStates = message.providerStates.map((e) => e ? oracle_1.ProviderState.toJSON(e) : undefined);
        }
        else {
            obj.providerStates = [];
        }
        if (message.pythPriceStates) {
            obj.pythPriceStates = message.pythPriceStates.map((e) => e ? oracle_1.PythPriceState.toJSON(e) : undefined);
        }
        else {
            obj.pythPriceStates = [];
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? oracle_1.Params.fromPartial(object.params)
            : undefined;
        message.bandRelayers = ((_a = object.bandRelayers) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.bandPriceStates = ((_b = object.bandPriceStates) === null || _b === void 0 ? void 0 : _b.map((e) => oracle_1.BandPriceState.fromPartial(e))) || [];
        message.priceFeedPriceStates = ((_c = object.priceFeedPriceStates) === null || _c === void 0 ? void 0 : _c.map((e) => oracle_1.PriceFeedState.fromPartial(e))) || [];
        message.coinbasePriceStates = ((_d = object.coinbasePriceStates) === null || _d === void 0 ? void 0 : _d.map((e) => oracle_1.CoinbasePriceState.fromPartial(e))) || [];
        message.bandIbcPriceStates = ((_e = object.bandIbcPriceStates) === null || _e === void 0 ? void 0 : _e.map((e) => oracle_1.BandPriceState.fromPartial(e))) || [];
        message.bandIbcOracleRequests = ((_f = object.bandIbcOracleRequests) === null || _f === void 0 ? void 0 : _f.map((e) => oracle_1.BandOracleRequest.fromPartial(e))) || [];
        message.bandIbcParams = (object.bandIbcParams !== undefined && object.bandIbcParams !== null)
            ? oracle_1.BandIBCParams.fromPartial(object.bandIbcParams)
            : undefined;
        message.bandIbcLatestClientId = (_g = object.bandIbcLatestClientId) !== null && _g !== void 0 ? _g : "0";
        message.calldataRecords = ((_h = object.calldataRecords) === null || _h === void 0 ? void 0 : _h.map((e) => exports.CalldataRecord.fromPartial(e))) || [];
        message.bandIbcLatestRequestId = (_j = object.bandIbcLatestRequestId) !== null && _j !== void 0 ? _j : "0";
        message.chainlinkPriceStates = ((_k = object.chainlinkPriceStates) === null || _k === void 0 ? void 0 : _k.map((e) => oracle_1.ChainlinkPriceState.fromPartial(e))) || [];
        message.historicalPriceRecords = ((_l = object.historicalPriceRecords) === null || _l === void 0 ? void 0 : _l.map((e) => oracle_1.PriceRecords.fromPartial(e))) || [];
        message.providerStates = ((_m = object.providerStates) === null || _m === void 0 ? void 0 : _m.map((e) => oracle_1.ProviderState.fromPartial(e))) || [];
        message.pythPriceStates = ((_o = object.pythPriceStates) === null || _o === void 0 ? void 0 : _o.map((e) => oracle_1.PythPriceState.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCalldataRecord() {
    return { clientId: "0", calldata: new Uint8Array() };
}
exports.CalldataRecord = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "0") {
            writer.uint32(8).uint64(message.clientId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(18).bytes(message.calldata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalldataRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.clientId = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.calldata = reader.bytes();
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "0",
            calldata: isSet(object.calldata) ? bytesFromBase64(object.calldata) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.calldata !== undefined &&
            (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.CalldataRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCalldataRecord();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "0";
        message.calldata = (_b = object.calldata) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
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
