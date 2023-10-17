"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = exports.GenesisState = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../base/v1beta1/coin");
const bank_1 = require("./bank");
function createBaseGenesisState() {
    return { params: undefined, balances: [], supply: [], denomMetadata: [], sendEnabled: [] };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            bank_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.balances) {
            exports.Balance.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.supply) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.denomMetadata) {
            bank_1.Metadata.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.sendEnabled) {
            bank_1.SendEnabled.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.params = bank_1.Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.balances.push(exports.Balance.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.supply.push(coin_1.Coin.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.denomMetadata.push(bank_1.Metadata.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.sendEnabled.push(bank_1.SendEnabled.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? bank_1.Params.fromJSON(object.params) : undefined,
            balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances) ? object.balances.map((e) => exports.Balance.fromJSON(e)) : [],
            supply: Array.isArray(object === null || object === void 0 ? void 0 : object.supply) ? object.supply.map((e) => coin_1.Coin.fromJSON(e)) : [],
            denomMetadata: Array.isArray(object === null || object === void 0 ? void 0 : object.denomMetadata)
                ? object.denomMetadata.map((e) => bank_1.Metadata.fromJSON(e))
                : [],
            sendEnabled: Array.isArray(object === null || object === void 0 ? void 0 : object.sendEnabled)
                ? object.sendEnabled.map((e) => bank_1.SendEnabled.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? bank_1.Params.toJSON(message.params) : undefined);
        if (message.balances) {
            obj.balances = message.balances.map((e) => e ? exports.Balance.toJSON(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        if (message.supply) {
            obj.supply = message.supply.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.supply = [];
        }
        if (message.denomMetadata) {
            obj.denomMetadata = message.denomMetadata.map((e) => e ? bank_1.Metadata.toJSON(e) : undefined);
        }
        else {
            obj.denomMetadata = [];
        }
        if (message.sendEnabled) {
            obj.sendEnabled = message.sendEnabled.map((e) => e ? bank_1.SendEnabled.toJSON(e) : undefined);
        }
        else {
            obj.sendEnabled = [];
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? bank_1.Params.fromPartial(object.params)
            : undefined;
        message.balances = ((_a = object.balances) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Balance.fromPartial(e))) || [];
        message.supply = ((_b = object.supply) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.denomMetadata = ((_c = object.denomMetadata) === null || _c === void 0 ? void 0 : _c.map((e) => bank_1.Metadata.fromPartial(e))) || [];
        message.sendEnabled = ((_d = object.sendEnabled) === null || _d === void 0 ? void 0 : _d.map((e) => bank_1.SendEnabled.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBalance() {
    return { address: "", coins: [] };
}
exports.Balance = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            address: isSet(object.address) ? String(object.address) : "",
            coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    create(base) {
        return exports.Balance.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBalance();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.coins = ((_b = object.coins) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
