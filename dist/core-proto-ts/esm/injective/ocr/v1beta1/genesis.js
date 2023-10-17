/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { EpochAndRound, FeedConfig, Params, Transmission } from "./ocr";
function createBaseGenesisState() {
    return {
        params: undefined,
        feedConfigs: [],
        latestEpochAndRounds: [],
        feedTransmissions: [],
        latestAggregatorRoundIds: [],
        rewardPools: [],
        feedObservationCounts: [],
        feedTransmissionCounts: [],
        pendingPayeeships: [],
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.feedConfigs) {
            FeedConfig.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.latestEpochAndRounds) {
            FeedEpochAndRound.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.feedTransmissions) {
            FeedTransmission.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.latestAggregatorRoundIds) {
            FeedLatestAggregatorRoundIDs.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.rewardPools) {
            RewardPool.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.feedObservationCounts) {
            FeedCounts.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.feedTransmissionCounts) {
            FeedCounts.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.pendingPayeeships) {
            PendingPayeeship.encode(v, writer.uint32(74).fork()).ldelim();
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
                    message.feedConfigs.push(FeedConfig.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.latestEpochAndRounds.push(FeedEpochAndRound.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.feedTransmissions.push(FeedTransmission.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.latestAggregatorRoundIds.push(FeedLatestAggregatorRoundIDs.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.rewardPools.push(RewardPool.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.feedObservationCounts.push(FeedCounts.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.feedTransmissionCounts.push(FeedCounts.decode(reader, reader.uint32()));
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.pendingPayeeships.push(PendingPayeeship.decode(reader, reader.uint32()));
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
            feedConfigs: Array.isArray(object === null || object === void 0 ? void 0 : object.feedConfigs) ? object.feedConfigs.map((e) => FeedConfig.fromJSON(e)) : [],
            latestEpochAndRounds: Array.isArray(object === null || object === void 0 ? void 0 : object.latestEpochAndRounds)
                ? object.latestEpochAndRounds.map((e) => FeedEpochAndRound.fromJSON(e))
                : [],
            feedTransmissions: Array.isArray(object === null || object === void 0 ? void 0 : object.feedTransmissions)
                ? object.feedTransmissions.map((e) => FeedTransmission.fromJSON(e))
                : [],
            latestAggregatorRoundIds: Array.isArray(object === null || object === void 0 ? void 0 : object.latestAggregatorRoundIds)
                ? object.latestAggregatorRoundIds.map((e) => FeedLatestAggregatorRoundIDs.fromJSON(e))
                : [],
            rewardPools: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardPools) ? object.rewardPools.map((e) => RewardPool.fromJSON(e)) : [],
            feedObservationCounts: Array.isArray(object === null || object === void 0 ? void 0 : object.feedObservationCounts)
                ? object.feedObservationCounts.map((e) => FeedCounts.fromJSON(e))
                : [],
            feedTransmissionCounts: Array.isArray(object === null || object === void 0 ? void 0 : object.feedTransmissionCounts)
                ? object.feedTransmissionCounts.map((e) => FeedCounts.fromJSON(e))
                : [],
            pendingPayeeships: Array.isArray(object === null || object === void 0 ? void 0 : object.pendingPayeeships)
                ? object.pendingPayeeships.map((e) => PendingPayeeship.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.feedConfigs) {
            obj.feedConfigs = message.feedConfigs.map((e) => e ? FeedConfig.toJSON(e) : undefined);
        }
        else {
            obj.feedConfigs = [];
        }
        if (message.latestEpochAndRounds) {
            obj.latestEpochAndRounds = message.latestEpochAndRounds.map((e) => e ? FeedEpochAndRound.toJSON(e) : undefined);
        }
        else {
            obj.latestEpochAndRounds = [];
        }
        if (message.feedTransmissions) {
            obj.feedTransmissions = message.feedTransmissions.map((e) => e ? FeedTransmission.toJSON(e) : undefined);
        }
        else {
            obj.feedTransmissions = [];
        }
        if (message.latestAggregatorRoundIds) {
            obj.latestAggregatorRoundIds = message.latestAggregatorRoundIds.map((e) => e ? FeedLatestAggregatorRoundIDs.toJSON(e) : undefined);
        }
        else {
            obj.latestAggregatorRoundIds = [];
        }
        if (message.rewardPools) {
            obj.rewardPools = message.rewardPools.map((e) => e ? RewardPool.toJSON(e) : undefined);
        }
        else {
            obj.rewardPools = [];
        }
        if (message.feedObservationCounts) {
            obj.feedObservationCounts = message.feedObservationCounts.map((e) => e ? FeedCounts.toJSON(e) : undefined);
        }
        else {
            obj.feedObservationCounts = [];
        }
        if (message.feedTransmissionCounts) {
            obj.feedTransmissionCounts = message.feedTransmissionCounts.map((e) => e ? FeedCounts.toJSON(e) : undefined);
        }
        else {
            obj.feedTransmissionCounts = [];
        }
        if (message.pendingPayeeships) {
            obj.pendingPayeeships = message.pendingPayeeships.map((e) => e ? PendingPayeeship.toJSON(e) : undefined);
        }
        else {
            obj.pendingPayeeships = [];
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        message.feedConfigs = ((_a = object.feedConfigs) === null || _a === void 0 ? void 0 : _a.map((e) => FeedConfig.fromPartial(e))) || [];
        message.latestEpochAndRounds = ((_b = object.latestEpochAndRounds) === null || _b === void 0 ? void 0 : _b.map((e) => FeedEpochAndRound.fromPartial(e))) || [];
        message.feedTransmissions = ((_c = object.feedTransmissions) === null || _c === void 0 ? void 0 : _c.map((e) => FeedTransmission.fromPartial(e))) || [];
        message.latestAggregatorRoundIds =
            ((_d = object.latestAggregatorRoundIds) === null || _d === void 0 ? void 0 : _d.map((e) => FeedLatestAggregatorRoundIDs.fromPartial(e))) || [];
        message.rewardPools = ((_e = object.rewardPools) === null || _e === void 0 ? void 0 : _e.map((e) => RewardPool.fromPartial(e))) || [];
        message.feedObservationCounts = ((_f = object.feedObservationCounts) === null || _f === void 0 ? void 0 : _f.map((e) => FeedCounts.fromPartial(e))) || [];
        message.feedTransmissionCounts = ((_g = object.feedTransmissionCounts) === null || _g === void 0 ? void 0 : _g.map((e) => FeedCounts.fromPartial(e))) || [];
        message.pendingPayeeships = ((_h = object.pendingPayeeships) === null || _h === void 0 ? void 0 : _h.map((e) => PendingPayeeship.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFeedTransmission() {
    return { feedId: "", transmission: undefined };
}
export const FeedTransmission = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.transmission !== undefined) {
            Transmission.encode(message.transmission, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeedTransmission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feedId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.transmission = Transmission.decode(reader, reader.uint32());
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
            feedId: isSet(object.feedId) ? String(object.feedId) : "",
            transmission: isSet(object.transmission) ? Transmission.fromJSON(object.transmission) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        message.transmission !== undefined &&
            (obj.transmission = message.transmission ? Transmission.toJSON(message.transmission) : undefined);
        return obj;
    },
    create(base) {
        return FeedTransmission.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFeedTransmission();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        message.transmission = (object.transmission !== undefined && object.transmission !== null)
            ? Transmission.fromPartial(object.transmission)
            : undefined;
        return message;
    },
};
function createBaseFeedEpochAndRound() {
    return { feedId: "", epochAndRound: undefined };
}
export const FeedEpochAndRound = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.epochAndRound !== undefined) {
            EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeedEpochAndRound();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feedId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.epochAndRound = EpochAndRound.decode(reader, reader.uint32());
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
            feedId: isSet(object.feedId) ? String(object.feedId) : "",
            epochAndRound: isSet(object.epochAndRound) ? EpochAndRound.fromJSON(object.epochAndRound) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        message.epochAndRound !== undefined &&
            (obj.epochAndRound = message.epochAndRound ? EpochAndRound.toJSON(message.epochAndRound) : undefined);
        return obj;
    },
    create(base) {
        return FeedEpochAndRound.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFeedEpochAndRound();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        message.epochAndRound = (object.epochAndRound !== undefined && object.epochAndRound !== null)
            ? EpochAndRound.fromPartial(object.epochAndRound)
            : undefined;
        return message;
    },
};
function createBaseFeedLatestAggregatorRoundIDs() {
    return { feedId: "", aggregatorRoundId: "0" };
}
export const FeedLatestAggregatorRoundIDs = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.aggregatorRoundId !== "0") {
            writer.uint32(16).uint64(message.aggregatorRoundId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeedLatestAggregatorRoundIDs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feedId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.aggregatorRoundId = longToString(reader.uint64());
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
            feedId: isSet(object.feedId) ? String(object.feedId) : "",
            aggregatorRoundId: isSet(object.aggregatorRoundId) ? String(object.aggregatorRoundId) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        message.aggregatorRoundId !== undefined && (obj.aggregatorRoundId = message.aggregatorRoundId);
        return obj;
    },
    create(base) {
        return FeedLatestAggregatorRoundIDs.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFeedLatestAggregatorRoundIDs();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        message.aggregatorRoundId = (_b = object.aggregatorRoundId) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseRewardPool() {
    return { feedId: "", amount: undefined };
}
export const RewardPool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feedId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.amount = Coin.decode(reader, reader.uint32());
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
            feedId: isSet(object.feedId) ? String(object.feedId) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return RewardPool.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRewardPool();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseFeedCounts() {
    return { feedId: "", counts: [] };
}
export const FeedCounts = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        for (const v of message.counts) {
            Count.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeedCounts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feedId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.counts.push(Count.decode(reader, reader.uint32()));
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
            feedId: isSet(object.feedId) ? String(object.feedId) : "",
            counts: Array.isArray(object === null || object === void 0 ? void 0 : object.counts) ? object.counts.map((e) => Count.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        if (message.counts) {
            obj.counts = message.counts.map((e) => e ? Count.toJSON(e) : undefined);
        }
        else {
            obj.counts = [];
        }
        return obj;
    },
    create(base) {
        return FeedCounts.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFeedCounts();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        message.counts = ((_b = object.counts) === null || _b === void 0 ? void 0 : _b.map((e) => Count.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCount() {
    return { address: "", count: "0" };
}
export const Count = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.count !== "0") {
            writer.uint32(16).uint64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCount();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.count = longToString(reader.uint64());
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
            count: isSet(object.count) ? String(object.count) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.count !== undefined && (obj.count = message.count);
        return obj;
    },
    create(base) {
        return Count.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCount();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.count = (_b = object.count) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBasePendingPayeeship() {
    return { feedId: "", transmitter: "", proposedPayee: "" };
}
export const PendingPayeeship = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.transmitter !== "") {
            writer.uint32(18).string(message.transmitter);
        }
        if (message.proposedPayee !== "") {
            writer.uint32(26).string(message.proposedPayee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePendingPayeeship();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feedId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.transmitter = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proposedPayee = reader.string();
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
            feedId: isSet(object.feedId) ? String(object.feedId) : "",
            transmitter: isSet(object.transmitter) ? String(object.transmitter) : "",
            proposedPayee: isSet(object.proposedPayee) ? String(object.proposedPayee) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        message.transmitter !== undefined && (obj.transmitter = message.transmitter);
        message.proposedPayee !== undefined && (obj.proposedPayee = message.proposedPayee);
        return obj;
    },
    create(base) {
        return PendingPayeeship.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePendingPayeeship();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        message.transmitter = (_b = object.transmitter) !== null && _b !== void 0 ? _b : "";
        message.proposedPayee = (_c = object.proposedPayee) !== null && _c !== void 0 ? _c : "";
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
