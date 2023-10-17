/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
function createBaseParams() {
    return { auctionPeriod: "0", minNextBidIncrementRate: "" };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.auctionPeriod !== "0") {
            writer.uint32(8).int64(message.auctionPeriod);
        }
        if (message.minNextBidIncrementRate !== "") {
            writer.uint32(18).string(message.minNextBidIncrementRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.auctionPeriod = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.minNextBidIncrementRate = reader.string();
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
            auctionPeriod: isSet(object.auctionPeriod) ? String(object.auctionPeriod) : "0",
            minNextBidIncrementRate: isSet(object.minNextBidIncrementRate) ? String(object.minNextBidIncrementRate) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionPeriod !== undefined && (obj.auctionPeriod = message.auctionPeriod);
        message.minNextBidIncrementRate !== undefined && (obj.minNextBidIncrementRate = message.minNextBidIncrementRate);
        return obj;
    },
    create(base) {
        return Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseParams();
        message.auctionPeriod = (_a = object.auctionPeriod) !== null && _a !== void 0 ? _a : "0";
        message.minNextBidIncrementRate = (_b = object.minNextBidIncrementRate) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseBid() {
    return { bidder: "", amount: "" };
}
export const Bid = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bidder !== "") {
            writer.uint32(10).string(message.bidder);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.bidder = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.amount = reader.string();
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
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    create(base) {
        return Bid.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBid();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventBid() {
    return { bidder: "", amount: "", round: "0" };
}
export const EventBid = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bidder !== "") {
            writer.uint32(10).string(message.bidder);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.round !== "0") {
            writer.uint32(24).uint64(message.round);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.bidder = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.amount = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.round = longToString(reader.uint64());
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
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            round: isSet(object.round) ? String(object.round) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.amount !== undefined && (obj.amount = message.amount);
        message.round !== undefined && (obj.round = message.round);
        return obj;
    },
    create(base) {
        return EventBid.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEventBid();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.round = (_c = object.round) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseEventAuctionResult() {
    return { winner: "", amount: "", round: "0" };
}
export const EventAuctionResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.winner !== "") {
            writer.uint32(10).string(message.winner);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.round !== "0") {
            writer.uint32(24).uint64(message.round);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAuctionResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.winner = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.amount = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.round = longToString(reader.uint64());
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
            winner: isSet(object.winner) ? String(object.winner) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            round: isSet(object.round) ? String(object.round) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.winner !== undefined && (obj.winner = message.winner);
        message.amount !== undefined && (obj.amount = message.amount);
        message.round !== undefined && (obj.round = message.round);
        return obj;
    },
    create(base) {
        return EventAuctionResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEventAuctionResult();
        message.winner = (_a = object.winner) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.round = (_c = object.round) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseEventAuctionStart() {
    return { round: "0", endingTimestamp: "0", newBasket: [] };
}
export const EventAuctionStart = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.round !== "0") {
            writer.uint32(8).uint64(message.round);
        }
        if (message.endingTimestamp !== "0") {
            writer.uint32(16).int64(message.endingTimestamp);
        }
        for (const v of message.newBasket) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAuctionStart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.round = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.endingTimestamp = longToString(reader.int64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.newBasket.push(Coin.decode(reader, reader.uint32()));
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
            round: isSet(object.round) ? String(object.round) : "0",
            endingTimestamp: isSet(object.endingTimestamp) ? String(object.endingTimestamp) : "0",
            newBasket: Array.isArray(object === null || object === void 0 ? void 0 : object.newBasket) ? object.newBasket.map((e) => Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.round !== undefined && (obj.round = message.round);
        message.endingTimestamp !== undefined && (obj.endingTimestamp = message.endingTimestamp);
        if (message.newBasket) {
            obj.newBasket = message.newBasket.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.newBasket = [];
        }
        return obj;
    },
    create(base) {
        return EventAuctionStart.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEventAuctionStart();
        message.round = (_a = object.round) !== null && _a !== void 0 ? _a : "0";
        message.endingTimestamp = (_b = object.endingTimestamp) !== null && _b !== void 0 ? _b : "0";
        message.newBasket = ((_c = object.newBasket) === null || _c === void 0 ? void 0 : _c.map((e) => Coin.fromPartial(e))) || [];
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
