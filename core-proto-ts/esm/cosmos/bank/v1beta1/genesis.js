/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../base/v1beta1/coin";
import { Metadata, Params, SendEnabled } from "./bank";
function createBaseGenesisState() {
    return { params: undefined, balances: [], supply: [], denomMetadata: [], sendEnabled: [] };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.balances) {
            Balance.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.supply) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.denomMetadata) {
            Metadata.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.sendEnabled) {
            SendEnabled.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.balances.push(Balance.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.supply.push(Coin.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.denomMetadata.push(Metadata.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
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
            balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances) ? object.balances.map((e) => Balance.fromJSON(e)) : [],
            supply: Array.isArray(object === null || object === void 0 ? void 0 : object.supply) ? object.supply.map((e) => Coin.fromJSON(e)) : [],
            denomMetadata: Array.isArray(object === null || object === void 0 ? void 0 : object.denomMetadata)
                ? object.denomMetadata.map((e) => Metadata.fromJSON(e))
                : [],
            sendEnabled: Array.isArray(object === null || object === void 0 ? void 0 : object.sendEnabled)
                ? object.sendEnabled.map((e) => SendEnabled.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.balances) {
            obj.balances = message.balances.map((e) => e ? Balance.toJSON(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        if (message.supply) {
            obj.supply = message.supply.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.supply = [];
        }
        if (message.denomMetadata) {
            obj.denomMetadata = message.denomMetadata.map((e) => e ? Metadata.toJSON(e) : undefined);
        }
        else {
            obj.denomMetadata = [];
        }
        if (message.sendEnabled) {
            obj.sendEnabled = message.sendEnabled.map((e) => e ? SendEnabled.toJSON(e) : undefined);
        }
        else {
            obj.sendEnabled = [];
        }
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
        message.balances = ((_a = object.balances) === null || _a === void 0 ? void 0 : _a.map((e) => Balance.fromPartial(e))) || [];
        message.supply = ((_b = object.supply) === null || _b === void 0 ? void 0 : _b.map((e) => Coin.fromPartial(e))) || [];
        message.denomMetadata = ((_c = object.denomMetadata) === null || _c === void 0 ? void 0 : _c.map((e) => Metadata.fromPartial(e))) || [];
        message.sendEnabled = ((_d = object.sendEnabled) === null || _d === void 0 ? void 0 : _d.map((e) => SendEnabled.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBalance() {
    return { address: "", coins: [] };
}
export const Balance = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.coins.push(Coin.decode(reader, reader.uint32()));
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
            coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    create(base) {
        return Balance.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBalance();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.coins = ((_b = object.coins) === null || _b === void 0 ? void 0 : _b.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
