/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Bid, Params } from "./auction";
function createBaseGenesisState() {
    return { params: undefined, auctionRound: "0", highestBid: undefined, auctionEndingTimestamp: "0" };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.auctionRound !== "0") {
            writer.uint32(16).uint64(message.auctionRound);
        }
        if (message.highestBid !== undefined) {
            Bid.encode(message.highestBid, writer.uint32(26).fork()).ldelim();
        }
        if (message.auctionEndingTimestamp !== "0") {
            writer.uint32(32).int64(message.auctionEndingTimestamp);
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
                    if (tag !== 16) {
                        break;
                    }
                    message.auctionRound = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.highestBid = Bid.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.auctionEndingTimestamp = longToString(reader.int64());
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
            auctionRound: isSet(object.auctionRound) ? String(object.auctionRound) : "0",
            highestBid: isSet(object.highestBid) ? Bid.fromJSON(object.highestBid) : undefined,
            auctionEndingTimestamp: isSet(object.auctionEndingTimestamp) ? String(object.auctionEndingTimestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.auctionRound !== undefined && (obj.auctionRound = message.auctionRound);
        message.highestBid !== undefined &&
            (obj.highestBid = message.highestBid ? Bid.toJSON(message.highestBid) : undefined);
        message.auctionEndingTimestamp !== undefined && (obj.auctionEndingTimestamp = message.auctionEndingTimestamp);
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        message.auctionRound = (_a = object.auctionRound) !== null && _a !== void 0 ? _a : "0";
        message.highestBid = (object.highestBid !== undefined && object.highestBid !== null)
            ? Bid.fromPartial(object.highestBid)
            : undefined;
        message.auctionEndingTimestamp = (_b = object.auctionEndingTimestamp) !== null && _b !== void 0 ? _b : "0";
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
