"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.QueryOcrModuleStateDesc = exports.QueryOwedAmountDesc = exports.QueryLatestTransmissionDetailsDesc = exports.QueryLatestRoundDesc = exports.QueryFeedConfigInfoDesc = exports.QueryFeedConfigDesc = exports.QueryParamsDesc = exports.QueryDesc = exports.QueryClientImpl = exports.QueryModuleStateResponse = exports.QueryModuleStateRequest = exports.QueryOwedAmountResponse = exports.QueryOwedAmountRequest = exports.QueryLatestTransmissionDetailsResponse = exports.QueryLatestTransmissionDetailsRequest = exports.QueryLatestRoundResponse = exports.QueryLatestRoundRequest = exports.QueryFeedConfigInfoResponse = exports.QueryFeedConfigInfoRequest = exports.QueryFeedConfigResponse = exports.QueryFeedConfigRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const genesis_1 = require("./genesis");
const ocr_1 = require("./ocr");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.QueryParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            ocr_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = ocr_1.Params.decode(reader, reader.uint32());
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
        return { params: isSet(object.params) ? ocr_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? ocr_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? ocr_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryFeedConfigRequest() {
    return { feedId: "" };
}
exports.QueryFeedConfigRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeedConfigRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feedId = reader.string();
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
        return { feedId: isSet(object.feedId) ? String(object.feedId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        return obj;
    },
    create(base) {
        return exports.QueryFeedConfigRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFeedConfigRequest();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryFeedConfigResponse() {
    return { feedConfigInfo: undefined, feedConfig: undefined };
}
exports.QueryFeedConfigResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feedConfigInfo !== undefined) {
            ocr_1.FeedConfigInfo.encode(message.feedConfigInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.feedConfig !== undefined) {
            ocr_1.FeedConfig.encode(message.feedConfig, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeedConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feedConfigInfo = ocr_1.FeedConfigInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.feedConfig = ocr_1.FeedConfig.decode(reader, reader.uint32());
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
            feedConfigInfo: isSet(object.feedConfigInfo) ? ocr_1.FeedConfigInfo.fromJSON(object.feedConfigInfo) : undefined,
            feedConfig: isSet(object.feedConfig) ? ocr_1.FeedConfig.fromJSON(object.feedConfig) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedConfigInfo !== undefined &&
            (obj.feedConfigInfo = message.feedConfigInfo ? ocr_1.FeedConfigInfo.toJSON(message.feedConfigInfo) : undefined);
        message.feedConfig !== undefined &&
            (obj.feedConfig = message.feedConfig ? ocr_1.FeedConfig.toJSON(message.feedConfig) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryFeedConfigResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryFeedConfigResponse();
        message.feedConfigInfo = (object.feedConfigInfo !== undefined && object.feedConfigInfo !== null)
            ? ocr_1.FeedConfigInfo.fromPartial(object.feedConfigInfo)
            : undefined;
        message.feedConfig = (object.feedConfig !== undefined && object.feedConfig !== null)
            ? ocr_1.FeedConfig.fromPartial(object.feedConfig)
            : undefined;
        return message;
    },
};
function createBaseQueryFeedConfigInfoRequest() {
    return { feedId: "" };
}
exports.QueryFeedConfigInfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeedConfigInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feedId = reader.string();
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
        return { feedId: isSet(object.feedId) ? String(object.feedId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        return obj;
    },
    create(base) {
        return exports.QueryFeedConfigInfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFeedConfigInfoRequest();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryFeedConfigInfoResponse() {
    return { feedConfigInfo: undefined, epochAndRound: undefined };
}
exports.QueryFeedConfigInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feedConfigInfo !== undefined) {
            ocr_1.FeedConfigInfo.encode(message.feedConfigInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.epochAndRound !== undefined) {
            ocr_1.EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeedConfigInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feedConfigInfo = ocr_1.FeedConfigInfo.decode(reader, reader.uint32());
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
            feedConfigInfo: isSet(object.feedConfigInfo) ? ocr_1.FeedConfigInfo.fromJSON(object.feedConfigInfo) : undefined,
            epochAndRound: isSet(object.epochAndRound) ? ocr_1.EpochAndRound.fromJSON(object.epochAndRound) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedConfigInfo !== undefined &&
            (obj.feedConfigInfo = message.feedConfigInfo ? ocr_1.FeedConfigInfo.toJSON(message.feedConfigInfo) : undefined);
        message.epochAndRound !== undefined &&
            (obj.epochAndRound = message.epochAndRound ? ocr_1.EpochAndRound.toJSON(message.epochAndRound) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryFeedConfigInfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryFeedConfigInfoResponse();
        message.feedConfigInfo = (object.feedConfigInfo !== undefined && object.feedConfigInfo !== null)
            ? ocr_1.FeedConfigInfo.fromPartial(object.feedConfigInfo)
            : undefined;
        message.epochAndRound = (object.epochAndRound !== undefined && object.epochAndRound !== null)
            ? ocr_1.EpochAndRound.fromPartial(object.epochAndRound)
            : undefined;
        return message;
    },
};
function createBaseQueryLatestRoundRequest() {
    return { feedId: "" };
}
exports.QueryLatestRoundRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLatestRoundRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feedId = reader.string();
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
        return { feedId: isSet(object.feedId) ? String(object.feedId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        return obj;
    },
    create(base) {
        return exports.QueryLatestRoundRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLatestRoundRequest();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryLatestRoundResponse() {
    return { latestRoundId: "0", data: undefined };
}
exports.QueryLatestRoundResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.latestRoundId !== "0") {
            writer.uint32(8).uint64(message.latestRoundId);
        }
        if (message.data !== undefined) {
            ocr_1.Transmission.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLatestRoundResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.latestRoundId = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.data = ocr_1.Transmission.decode(reader, reader.uint32());
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
            latestRoundId: isSet(object.latestRoundId) ? String(object.latestRoundId) : "0",
            data: isSet(object.data) ? ocr_1.Transmission.fromJSON(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.latestRoundId !== undefined && (obj.latestRoundId = message.latestRoundId);
        message.data !== undefined && (obj.data = message.data ? ocr_1.Transmission.toJSON(message.data) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryLatestRoundResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLatestRoundResponse();
        message.latestRoundId = (_a = object.latestRoundId) !== null && _a !== void 0 ? _a : "0";
        message.data = (object.data !== undefined && object.data !== null)
            ? ocr_1.Transmission.fromPartial(object.data)
            : undefined;
        return message;
    },
};
function createBaseQueryLatestTransmissionDetailsRequest() {
    return { feedId: "" };
}
exports.QueryLatestTransmissionDetailsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLatestTransmissionDetailsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feedId = reader.string();
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
        return { feedId: isSet(object.feedId) ? String(object.feedId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        return obj;
    },
    create(base) {
        return exports.QueryLatestTransmissionDetailsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLatestTransmissionDetailsRequest();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryLatestTransmissionDetailsResponse() {
    return { configDigest: new Uint8Array(), epochAndRound: undefined, data: undefined };
}
exports.QueryLatestTransmissionDetailsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configDigest.length !== 0) {
            writer.uint32(10).bytes(message.configDigest);
        }
        if (message.epochAndRound !== undefined) {
            ocr_1.EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
        }
        if (message.data !== undefined) {
            ocr_1.Transmission.encode(message.data, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLatestTransmissionDetailsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.configDigest = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.epochAndRound = ocr_1.EpochAndRound.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.data = ocr_1.Transmission.decode(reader, reader.uint32());
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
            configDigest: isSet(object.configDigest) ? bytesFromBase64(object.configDigest) : new Uint8Array(),
            epochAndRound: isSet(object.epochAndRound) ? ocr_1.EpochAndRound.fromJSON(object.epochAndRound) : undefined,
            data: isSet(object.data) ? ocr_1.Transmission.fromJSON(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.configDigest !== undefined &&
            (obj.configDigest = base64FromBytes(message.configDigest !== undefined ? message.configDigest : new Uint8Array()));
        message.epochAndRound !== undefined &&
            (obj.epochAndRound = message.epochAndRound ? ocr_1.EpochAndRound.toJSON(message.epochAndRound) : undefined);
        message.data !== undefined && (obj.data = message.data ? ocr_1.Transmission.toJSON(message.data) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryLatestTransmissionDetailsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLatestTransmissionDetailsResponse();
        message.configDigest = (_a = object.configDigest) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.epochAndRound = (object.epochAndRound !== undefined && object.epochAndRound !== null)
            ? ocr_1.EpochAndRound.fromPartial(object.epochAndRound)
            : undefined;
        message.data = (object.data !== undefined && object.data !== null)
            ? ocr_1.Transmission.fromPartial(object.data)
            : undefined;
        return message;
    },
};
function createBaseQueryOwedAmountRequest() {
    return { transmitter: "" };
}
exports.QueryOwedAmountRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.transmitter !== "") {
            writer.uint32(10).string(message.transmitter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwedAmountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.transmitter = reader.string();
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
        return { transmitter: isSet(object.transmitter) ? String(object.transmitter) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.transmitter !== undefined && (obj.transmitter = message.transmitter);
        return obj;
    },
    create(base) {
        return exports.QueryOwedAmountRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOwedAmountRequest();
        message.transmitter = (_a = object.transmitter) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryOwedAmountResponse() {
    return { amount: undefined };
}
exports.QueryOwedAmountResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwedAmountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryOwedAmountResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryOwedAmountResponse();
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? coin_1.Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseQueryModuleStateRequest() {
    return {};
}
exports.QueryModuleStateRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.QueryModuleStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
};
function createBaseQueryModuleStateResponse() {
    return { state: undefined };
}
exports.QueryModuleStateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== undefined) {
            genesis_1.GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state = genesis_1.GenesisState.decode(reader, reader.uint32());
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
        return { state: isSet(object.state) ? genesis_1.GenesisState.fromJSON(object.state) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state ? genesis_1.GenesisState.toJSON(message.state) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryModuleStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryModuleStateResponse();
        message.state = (object.state !== undefined && object.state !== null)
            ? genesis_1.GenesisState.fromPartial(object.state)
            : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.FeedConfig = this.FeedConfig.bind(this);
        this.FeedConfigInfo = this.FeedConfigInfo.bind(this);
        this.LatestRound = this.LatestRound.bind(this);
        this.LatestTransmissionDetails = this.LatestTransmissionDetails.bind(this);
        this.OwedAmount = this.OwedAmount.bind(this);
        this.OcrModuleState = this.OcrModuleState.bind(this);
    }
    Params(request, metadata) {
        return this.rpc.unary(exports.QueryParamsDesc, exports.QueryParamsRequest.fromPartial(request), metadata);
    }
    FeedConfig(request, metadata) {
        return this.rpc.unary(exports.QueryFeedConfigDesc, exports.QueryFeedConfigRequest.fromPartial(request), metadata);
    }
    FeedConfigInfo(request, metadata) {
        return this.rpc.unary(exports.QueryFeedConfigInfoDesc, exports.QueryFeedConfigInfoRequest.fromPartial(request), metadata);
    }
    LatestRound(request, metadata) {
        return this.rpc.unary(exports.QueryLatestRoundDesc, exports.QueryLatestRoundRequest.fromPartial(request), metadata);
    }
    LatestTransmissionDetails(request, metadata) {
        return this.rpc.unary(exports.QueryLatestTransmissionDetailsDesc, exports.QueryLatestTransmissionDetailsRequest.fromPartial(request), metadata);
    }
    OwedAmount(request, metadata) {
        return this.rpc.unary(exports.QueryOwedAmountDesc, exports.QueryOwedAmountRequest.fromPartial(request), metadata);
    }
    OcrModuleState(request, metadata) {
        return this.rpc.unary(exports.QueryOcrModuleStateDesc, exports.QueryModuleStateRequest.fromPartial(request), metadata);
    }
}
exports.QueryClientImpl = QueryClientImpl;
exports.QueryDesc = { serviceName: "injective.ocr.v1beta1.Query" };
exports.QueryParamsDesc = {
    methodName: "Params",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryParamsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryParamsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryFeedConfigDesc = {
    methodName: "FeedConfig",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryFeedConfigRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryFeedConfigResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryFeedConfigInfoDesc = {
    methodName: "FeedConfigInfo",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryFeedConfigInfoRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryFeedConfigInfoResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryLatestRoundDesc = {
    methodName: "LatestRound",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryLatestRoundRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryLatestRoundResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryLatestTransmissionDetailsDesc = {
    methodName: "LatestTransmissionDetails",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryLatestTransmissionDetailsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryLatestTransmissionDetailsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryOwedAmountDesc = {
    methodName: "OwedAmount",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryOwedAmountRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryOwedAmountResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryOcrModuleStateDesc = {
    methodName: "OcrModuleState",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryModuleStateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryModuleStateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
class GrpcWebImpl {
    constructor(host, options) {
        this.host = host;
        this.options = options;
    }
    unary(methodDesc, _request, metadata) {
        var _a;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new browser_headers_1.BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new Promise((resolve, reject) => {
            grpc_web_1.grpc.unary(methodDesc, {
                request,
                host: this.host,
                metadata: maybeCombinedMetadata,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (response) {
                    if (response.status === grpc_web_1.grpc.Code.OK) {
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
}
exports.GrpcWebImpl = GrpcWebImpl;
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
class GrpcWebError extends tsProtoGlobalThis.Error {
    constructor(message, code, metadata) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}
exports.GrpcWebError = GrpcWebError;
