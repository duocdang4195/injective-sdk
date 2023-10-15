/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
export const protobufPackage = "injective_portfolio_rpc";
function createBaseAccountPortfolioRequest() {
    return { accountAddress: "" };
}
export const AccountPortfolioRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountPortfolioRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return AccountPortfolioRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAccountPortfolioRequest();
        message.accountAddress = (_a = object.accountAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAccountPortfolioResponse() {
    return { portfolio: undefined };
}
export const AccountPortfolioResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portfolio !== undefined) {
            Portfolio.encode(message.portfolio, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountPortfolioResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portfolio = Portfolio.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { portfolio: isSet(object.portfolio) ? Portfolio.fromJSON(object.portfolio) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.portfolio !== undefined &&
            (obj.portfolio = message.portfolio ? Portfolio.toJSON(message.portfolio) : undefined);
        return obj;
    },
    create(base) {
        return AccountPortfolioResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseAccountPortfolioResponse();
        message.portfolio = (object.portfolio !== undefined && object.portfolio !== null)
            ? Portfolio.fromPartial(object.portfolio)
            : undefined;
        return message;
    },
};
function createBasePortfolio() {
    return { accountAddress: "", bankBalances: [], subaccounts: [], positionsWithUpnl: [] };
}
export const Portfolio = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        for (const v of message.bankBalances) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.subaccounts) {
            SubaccountBalanceV2.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.positionsWithUpnl) {
            PositionsWithUPNL.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePortfolio();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountAddress = reader.string();
                    break;
                case 2:
                    message.bankBalances.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.subaccounts.push(SubaccountBalanceV2.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.positionsWithUpnl.push(PositionsWithUPNL.decode(reader, reader.uint32()));
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
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            bankBalances: Array.isArray(object === null || object === void 0 ? void 0 : object.bankBalances) ? object.bankBalances.map((e) => Coin.fromJSON(e)) : [],
            subaccounts: Array.isArray(object === null || object === void 0 ? void 0 : object.subaccounts)
                ? object.subaccounts.map((e) => SubaccountBalanceV2.fromJSON(e))
                : [],
            positionsWithUpnl: Array.isArray(object === null || object === void 0 ? void 0 : object.positionsWithUpnl)
                ? object.positionsWithUpnl.map((e) => PositionsWithUPNL.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        if (message.bankBalances) {
            obj.bankBalances = message.bankBalances.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.bankBalances = [];
        }
        if (message.subaccounts) {
            obj.subaccounts = message.subaccounts.map((e) => e ? SubaccountBalanceV2.toJSON(e) : undefined);
        }
        else {
            obj.subaccounts = [];
        }
        if (message.positionsWithUpnl) {
            obj.positionsWithUpnl = message.positionsWithUpnl.map((e) => e ? PositionsWithUPNL.toJSON(e) : undefined);
        }
        else {
            obj.positionsWithUpnl = [];
        }
        return obj;
    },
    create(base) {
        return Portfolio.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBasePortfolio();
        message.accountAddress = (_a = object.accountAddress) !== null && _a !== void 0 ? _a : "";
        message.bankBalances = ((_b = object.bankBalances) === null || _b === void 0 ? void 0 : _b.map((e) => Coin.fromPartial(e))) || [];
        message.subaccounts = ((_c = object.subaccounts) === null || _c === void 0 ? void 0 : _c.map((e) => SubaccountBalanceV2.fromPartial(e))) || [];
        message.positionsWithUpnl = ((_d = object.positionsWithUpnl) === null || _d === void 0 ? void 0 : _d.map((e) => PositionsWithUPNL.fromPartial(e))) || [];
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
function createBaseSubaccountBalanceV2() {
    return { subaccountId: "", denom: "", deposit: undefined };
}
export const SubaccountBalanceV2 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.deposit !== undefined) {
            SubaccountDeposit.encode(message.deposit, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountBalanceV2();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.deposit = SubaccountDeposit.decode(reader, reader.uint32());
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            deposit: isSet(object.deposit) ? SubaccountDeposit.fromJSON(object.deposit) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.denom !== undefined && (obj.denom = message.denom);
        message.deposit !== undefined &&
            (obj.deposit = message.deposit ? SubaccountDeposit.toJSON(message.deposit) : undefined);
        return obj;
    },
    create(base) {
        return SubaccountBalanceV2.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubaccountBalanceV2();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.deposit = (object.deposit !== undefined && object.deposit !== null)
            ? SubaccountDeposit.fromPartial(object.deposit)
            : undefined;
        return message;
    },
};
function createBaseSubaccountDeposit() {
    return { totalBalance: "", availableBalance: "" };
}
export const SubaccountDeposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.totalBalance !== "") {
            writer.uint32(10).string(message.totalBalance);
        }
        if (message.availableBalance !== "") {
            writer.uint32(18).string(message.availableBalance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalBalance = reader.string();
                    break;
                case 2:
                    message.availableBalance = reader.string();
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
            totalBalance: isSet(object.totalBalance) ? String(object.totalBalance) : "",
            availableBalance: isSet(object.availableBalance) ? String(object.availableBalance) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalBalance !== undefined && (obj.totalBalance = message.totalBalance);
        message.availableBalance !== undefined && (obj.availableBalance = message.availableBalance);
        return obj;
    },
    create(base) {
        return SubaccountDeposit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubaccountDeposit();
        message.totalBalance = (_a = object.totalBalance) !== null && _a !== void 0 ? _a : "";
        message.availableBalance = (_b = object.availableBalance) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBasePositionsWithUPNL() {
    return { position: undefined, unrealizedPnl: "" };
}
export const PositionsWithUPNL = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.position !== undefined) {
            DerivativePosition.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.unrealizedPnl !== "") {
            writer.uint32(18).string(message.unrealizedPnl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsWithUPNL();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.position = DerivativePosition.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.unrealizedPnl = reader.string();
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
            position: isSet(object.position) ? DerivativePosition.fromJSON(object.position) : undefined,
            unrealizedPnl: isSet(object.unrealizedPnl) ? String(object.unrealizedPnl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.position !== undefined &&
            (obj.position = message.position ? DerivativePosition.toJSON(message.position) : undefined);
        message.unrealizedPnl !== undefined && (obj.unrealizedPnl = message.unrealizedPnl);
        return obj;
    },
    create(base) {
        return PositionsWithUPNL.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePositionsWithUPNL();
        message.position = (object.position !== undefined && object.position !== null)
            ? DerivativePosition.fromPartial(object.position)
            : undefined;
        message.unrealizedPnl = (_a = object.unrealizedPnl) !== null && _a !== void 0 ? _a : "";
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
export const DerivativePosition = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        return DerivativePosition.fromPartial(base !== null && base !== void 0 ? base : {});
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
function createBaseStreamAccountPortfolioRequest() {
    return { accountAddress: "", subaccountId: "", type: "" };
}
export const StreamAccountPortfolioRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamAccountPortfolioRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountAddress = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.string();
                    break;
                case 3:
                    message.type = reader.string();
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
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            type: isSet(object.type) ? String(object.type) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    create(base) {
        return StreamAccountPortfolioRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseStreamAccountPortfolioRequest();
        message.accountAddress = (_a = object.accountAddress) !== null && _a !== void 0 ? _a : "";
        message.subaccountId = (_b = object.subaccountId) !== null && _b !== void 0 ? _b : "";
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseStreamAccountPortfolioResponse() {
    return { type: "", denom: "", amount: "", subaccountId: "", timestamp: "0" };
}
export const StreamAccountPortfolioResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.subaccountId !== "") {
            writer.uint32(34).string(message.subaccountId);
        }
        if (message.timestamp !== "0") {
            writer.uint32(40).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamAccountPortfolioResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.subaccountId = reader.string();
                    break;
                case 5:
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
            type: isSet(object.type) ? String(object.type) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return StreamAccountPortfolioResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseStreamAccountPortfolioResponse();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.subaccountId = (_d = object.subaccountId) !== null && _d !== void 0 ? _d : "";
        message.timestamp = (_e = object.timestamp) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
export class InjectivePortfolioRPCClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.AccountPortfolio = this.AccountPortfolio.bind(this);
        this.StreamAccountPortfolio = this.StreamAccountPortfolio.bind(this);
    }
    AccountPortfolio(request, metadata) {
        return this.rpc.unary(InjectivePortfolioRPCAccountPortfolioDesc, AccountPortfolioRequest.fromPartial(request), metadata);
    }
    StreamAccountPortfolio(request, metadata) {
        return this.rpc.invoke(InjectivePortfolioRPCStreamAccountPortfolioDesc, StreamAccountPortfolioRequest.fromPartial(request), metadata);
    }
}
export const InjectivePortfolioRPCDesc = { serviceName: "injective_portfolio_rpc.InjectivePortfolioRPC" };
export const InjectivePortfolioRPCAccountPortfolioDesc = {
    methodName: "AccountPortfolio",
    service: InjectivePortfolioRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return AccountPortfolioRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = AccountPortfolioResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectivePortfolioRPCStreamAccountPortfolioDesc = {
    methodName: "StreamAccountPortfolio",
    service: InjectivePortfolioRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return StreamAccountPortfolioRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = StreamAccountPortfolioResponse.decode(data);
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
