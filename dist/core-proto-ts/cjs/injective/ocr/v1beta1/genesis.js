"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PendingPayeeship = exports.Count = exports.FeedCounts = exports.RewardPool = exports.FeedLatestAggregatorRoundIDs = exports.FeedEpochAndRound = exports.FeedTransmission = exports.GenesisState = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const ocr_1 = require("./ocr");
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
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            ocr_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.feedConfigs) {
            ocr_1.FeedConfig.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.latestEpochAndRounds) {
            exports.FeedEpochAndRound.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.feedTransmissions) {
            exports.FeedTransmission.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.latestAggregatorRoundIds) {
            exports.FeedLatestAggregatorRoundIDs.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.rewardPools) {
            exports.RewardPool.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.feedObservationCounts) {
            exports.FeedCounts.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.feedTransmissionCounts) {
            exports.FeedCounts.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.pendingPayeeships) {
            exports.PendingPayeeship.encode(v, writer.uint32(74).fork()).ldelim();
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
                    message.params = ocr_1.Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.feedConfigs.push(ocr_1.FeedConfig.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.latestEpochAndRounds.push(exports.FeedEpochAndRound.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.feedTransmissions.push(exports.FeedTransmission.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.latestAggregatorRoundIds.push(exports.FeedLatestAggregatorRoundIDs.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.rewardPools.push(exports.RewardPool.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.feedObservationCounts.push(exports.FeedCounts.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.feedTransmissionCounts.push(exports.FeedCounts.decode(reader, reader.uint32()));
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.pendingPayeeships.push(exports.PendingPayeeship.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? ocr_1.Params.fromJSON(object.params) : undefined,
            feedConfigs: Array.isArray(object === null || object === void 0 ? void 0 : object.feedConfigs) ? object.feedConfigs.map((e) => ocr_1.FeedConfig.fromJSON(e)) : [],
            latestEpochAndRounds: Array.isArray(object === null || object === void 0 ? void 0 : object.latestEpochAndRounds)
                ? object.latestEpochAndRounds.map((e) => exports.FeedEpochAndRound.fromJSON(e))
                : [],
            feedTransmissions: Array.isArray(object === null || object === void 0 ? void 0 : object.feedTransmissions)
                ? object.feedTransmissions.map((e) => exports.FeedTransmission.fromJSON(e))
                : [],
            latestAggregatorRoundIds: Array.isArray(object === null || object === void 0 ? void 0 : object.latestAggregatorRoundIds)
                ? object.latestAggregatorRoundIds.map((e) => exports.FeedLatestAggregatorRoundIDs.fromJSON(e))
                : [],
            rewardPools: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardPools) ? object.rewardPools.map((e) => exports.RewardPool.fromJSON(e)) : [],
            feedObservationCounts: Array.isArray(object === null || object === void 0 ? void 0 : object.feedObservationCounts)
                ? object.feedObservationCounts.map((e) => exports.FeedCounts.fromJSON(e))
                : [],
            feedTransmissionCounts: Array.isArray(object === null || object === void 0 ? void 0 : object.feedTransmissionCounts)
                ? object.feedTransmissionCounts.map((e) => exports.FeedCounts.fromJSON(e))
                : [],
            pendingPayeeships: Array.isArray(object === null || object === void 0 ? void 0 : object.pendingPayeeships)
                ? object.pendingPayeeships.map((e) => exports.PendingPayeeship.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? ocr_1.Params.toJSON(message.params) : undefined);
        if (message.feedConfigs) {
            obj.feedConfigs = message.feedConfigs.map((e) => e ? ocr_1.FeedConfig.toJSON(e) : undefined);
        }
        else {
            obj.feedConfigs = [];
        }
        if (message.latestEpochAndRounds) {
            obj.latestEpochAndRounds = message.latestEpochAndRounds.map((e) => e ? exports.FeedEpochAndRound.toJSON(e) : undefined);
        }
        else {
            obj.latestEpochAndRounds = [];
        }
        if (message.feedTransmissions) {
            obj.feedTransmissions = message.feedTransmissions.map((e) => e ? exports.FeedTransmission.toJSON(e) : undefined);
        }
        else {
            obj.feedTransmissions = [];
        }
        if (message.latestAggregatorRoundIds) {
            obj.latestAggregatorRoundIds = message.latestAggregatorRoundIds.map((e) => e ? exports.FeedLatestAggregatorRoundIDs.toJSON(e) : undefined);
        }
        else {
            obj.latestAggregatorRoundIds = [];
        }
        if (message.rewardPools) {
            obj.rewardPools = message.rewardPools.map((e) => e ? exports.RewardPool.toJSON(e) : undefined);
        }
        else {
            obj.rewardPools = [];
        }
        if (message.feedObservationCounts) {
            obj.feedObservationCounts = message.feedObservationCounts.map((e) => e ? exports.FeedCounts.toJSON(e) : undefined);
        }
        else {
            obj.feedObservationCounts = [];
        }
        if (message.feedTransmissionCounts) {
            obj.feedTransmissionCounts = message.feedTransmissionCounts.map((e) => e ? exports.FeedCounts.toJSON(e) : undefined);
        }
        else {
            obj.feedTransmissionCounts = [];
        }
        if (message.pendingPayeeships) {
            obj.pendingPayeeships = message.pendingPayeeships.map((e) => e ? exports.PendingPayeeship.toJSON(e) : undefined);
        }
        else {
            obj.pendingPayeeships = [];
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? ocr_1.Params.fromPartial(object.params)
            : undefined;
        message.feedConfigs = ((_a = object.feedConfigs) === null || _a === void 0 ? void 0 : _a.map((e) => ocr_1.FeedConfig.fromPartial(e))) || [];
        message.latestEpochAndRounds = ((_b = object.latestEpochAndRounds) === null || _b === void 0 ? void 0 : _b.map((e) => exports.FeedEpochAndRound.fromPartial(e))) || [];
        message.feedTransmissions = ((_c = object.feedTransmissions) === null || _c === void 0 ? void 0 : _c.map((e) => exports.FeedTransmission.fromPartial(e))) || [];
        message.latestAggregatorRoundIds =
            ((_d = object.latestAggregatorRoundIds) === null || _d === void 0 ? void 0 : _d.map((e) => exports.FeedLatestAggregatorRoundIDs.fromPartial(e))) || [];
        message.rewardPools = ((_e = object.rewardPools) === null || _e === void 0 ? void 0 : _e.map((e) => exports.RewardPool.fromPartial(e))) || [];
        message.feedObservationCounts = ((_f = object.feedObservationCounts) === null || _f === void 0 ? void 0 : _f.map((e) => exports.FeedCounts.fromPartial(e))) || [];
        message.feedTransmissionCounts = ((_g = object.feedTransmissionCounts) === null || _g === void 0 ? void 0 : _g.map((e) => exports.FeedCounts.fromPartial(e))) || [];
        message.pendingPayeeships = ((_h = object.pendingPayeeships) === null || _h === void 0 ? void 0 : _h.map((e) => exports.PendingPayeeship.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFeedTransmission() {
    return { feedId: "", transmission: undefined };
}
exports.FeedTransmission = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.transmission !== undefined) {
            ocr_1.Transmission.encode(message.transmission, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.transmission = ocr_1.Transmission.decode(reader, reader.uint32());
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
            transmission: isSet(object.transmission) ? ocr_1.Transmission.fromJSON(object.transmission) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        message.transmission !== undefined &&
            (obj.transmission = message.transmission ? ocr_1.Transmission.toJSON(message.transmission) : undefined);
        return obj;
    },
    create(base) {
        return exports.FeedTransmission.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFeedTransmission();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        message.transmission = (object.transmission !== undefined && object.transmission !== null)
            ? ocr_1.Transmission.fromPartial(object.transmission)
            : undefined;
        return message;
    },
};
function createBaseFeedEpochAndRound() {
    return { feedId: "", epochAndRound: undefined };
}
exports.FeedEpochAndRound = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.epochAndRound !== undefined) {
            ocr_1.EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.epochAndRound = ocr_1.EpochAndRound.decode(reader, reader.uint32());
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
            epochAndRound: isSet(object.epochAndRound) ? ocr_1.EpochAndRound.fromJSON(object.epochAndRound) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        message.epochAndRound !== undefined &&
            (obj.epochAndRound = message.epochAndRound ? ocr_1.EpochAndRound.toJSON(message.epochAndRound) : undefined);
        return obj;
    },
    create(base) {
        return exports.FeedEpochAndRound.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFeedEpochAndRound();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        message.epochAndRound = (object.epochAndRound !== undefined && object.epochAndRound !== null)
            ? ocr_1.EpochAndRound.fromPartial(object.epochAndRound)
            : undefined;
        return message;
    },
};
function createBaseFeedLatestAggregatorRoundIDs() {
    return { feedId: "", aggregatorRoundId: "0" };
}
exports.FeedLatestAggregatorRoundIDs = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.aggregatorRoundId !== "0") {
            writer.uint32(16).uint64(message.aggregatorRoundId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.FeedLatestAggregatorRoundIDs.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.RewardPool = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return exports.RewardPool.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRewardPool();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? coin_1.Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseFeedCounts() {
    return { feedId: "", counts: [] };
}
exports.FeedCounts = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        for (const v of message.counts) {
            exports.Count.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.counts.push(exports.Count.decode(reader, reader.uint32()));
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
            counts: Array.isArray(object === null || object === void 0 ? void 0 : object.counts) ? object.counts.map((e) => exports.Count.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        if (message.counts) {
            obj.counts = message.counts.map((e) => e ? exports.Count.toJSON(e) : undefined);
        }
        else {
            obj.counts = [];
        }
        return obj;
    },
    create(base) {
        return exports.FeedCounts.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFeedCounts();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        message.counts = ((_b = object.counts) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Count.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCount() {
    return { address: "", count: "0" };
}
exports.Count = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.count !== "0") {
            writer.uint32(16).uint64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.Count.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.PendingPayeeship = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.PendingPayeeship.fromPartial(base !== null && base !== void 0 ? base : {});
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
