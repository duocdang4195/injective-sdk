/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState } from "./genesis";
import { EpochAndRound, FeedConfig, FeedConfigInfo, Params, Transmission } from "./ocr";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = Params.decode(reader, reader.uint32());
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
        return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return QueryParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryFeedConfigRequest() {
    return { feedId: "" };
}
export const QueryFeedConfigRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryFeedConfigRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryFeedConfigResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feedConfigInfo !== undefined) {
            FeedConfigInfo.encode(message.feedConfigInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.feedConfig !== undefined) {
            FeedConfig.encode(message.feedConfig, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeedConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feedConfigInfo = FeedConfigInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.feedConfig = FeedConfig.decode(reader, reader.uint32());
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
            feedConfigInfo: isSet(object.feedConfigInfo) ? FeedConfigInfo.fromJSON(object.feedConfigInfo) : undefined,
            feedConfig: isSet(object.feedConfig) ? FeedConfig.fromJSON(object.feedConfig) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedConfigInfo !== undefined &&
            (obj.feedConfigInfo = message.feedConfigInfo ? FeedConfigInfo.toJSON(message.feedConfigInfo) : undefined);
        message.feedConfig !== undefined &&
            (obj.feedConfig = message.feedConfig ? FeedConfig.toJSON(message.feedConfig) : undefined);
        return obj;
    },
    create(base) {
        return QueryFeedConfigResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryFeedConfigResponse();
        message.feedConfigInfo = (object.feedConfigInfo !== undefined && object.feedConfigInfo !== null)
            ? FeedConfigInfo.fromPartial(object.feedConfigInfo)
            : undefined;
        message.feedConfig = (object.feedConfig !== undefined && object.feedConfig !== null)
            ? FeedConfig.fromPartial(object.feedConfig)
            : undefined;
        return message;
    },
};
function createBaseQueryFeedConfigInfoRequest() {
    return { feedId: "" };
}
export const QueryFeedConfigInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryFeedConfigInfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryFeedConfigInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feedConfigInfo !== undefined) {
            FeedConfigInfo.encode(message.feedConfigInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.epochAndRound !== undefined) {
            EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeedConfigInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feedConfigInfo = FeedConfigInfo.decode(reader, reader.uint32());
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
            feedConfigInfo: isSet(object.feedConfigInfo) ? FeedConfigInfo.fromJSON(object.feedConfigInfo) : undefined,
            epochAndRound: isSet(object.epochAndRound) ? EpochAndRound.fromJSON(object.epochAndRound) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedConfigInfo !== undefined &&
            (obj.feedConfigInfo = message.feedConfigInfo ? FeedConfigInfo.toJSON(message.feedConfigInfo) : undefined);
        message.epochAndRound !== undefined &&
            (obj.epochAndRound = message.epochAndRound ? EpochAndRound.toJSON(message.epochAndRound) : undefined);
        return obj;
    },
    create(base) {
        return QueryFeedConfigInfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryFeedConfigInfoResponse();
        message.feedConfigInfo = (object.feedConfigInfo !== undefined && object.feedConfigInfo !== null)
            ? FeedConfigInfo.fromPartial(object.feedConfigInfo)
            : undefined;
        message.epochAndRound = (object.epochAndRound !== undefined && object.epochAndRound !== null)
            ? EpochAndRound.fromPartial(object.epochAndRound)
            : undefined;
        return message;
    },
};
function createBaseQueryLatestRoundRequest() {
    return { feedId: "" };
}
export const QueryLatestRoundRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryLatestRoundRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryLatestRoundResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.latestRoundId !== "0") {
            writer.uint32(8).uint64(message.latestRoundId);
        }
        if (message.data !== undefined) {
            Transmission.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.data = Transmission.decode(reader, reader.uint32());
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
            data: isSet(object.data) ? Transmission.fromJSON(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.latestRoundId !== undefined && (obj.latestRoundId = message.latestRoundId);
        message.data !== undefined && (obj.data = message.data ? Transmission.toJSON(message.data) : undefined);
        return obj;
    },
    create(base) {
        return QueryLatestRoundResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLatestRoundResponse();
        message.latestRoundId = (_a = object.latestRoundId) !== null && _a !== void 0 ? _a : "0";
        message.data = (object.data !== undefined && object.data !== null)
            ? Transmission.fromPartial(object.data)
            : undefined;
        return message;
    },
};
function createBaseQueryLatestTransmissionDetailsRequest() {
    return { feedId: "" };
}
export const QueryLatestTransmissionDetailsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryLatestTransmissionDetailsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryLatestTransmissionDetailsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.configDigest.length !== 0) {
            writer.uint32(10).bytes(message.configDigest);
        }
        if (message.epochAndRound !== undefined) {
            EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
        }
        if (message.data !== undefined) {
            Transmission.encode(message.data, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.epochAndRound = EpochAndRound.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.data = Transmission.decode(reader, reader.uint32());
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
            epochAndRound: isSet(object.epochAndRound) ? EpochAndRound.fromJSON(object.epochAndRound) : undefined,
            data: isSet(object.data) ? Transmission.fromJSON(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.configDigest !== undefined &&
            (obj.configDigest = base64FromBytes(message.configDigest !== undefined ? message.configDigest : new Uint8Array()));
        message.epochAndRound !== undefined &&
            (obj.epochAndRound = message.epochAndRound ? EpochAndRound.toJSON(message.epochAndRound) : undefined);
        message.data !== undefined && (obj.data = message.data ? Transmission.toJSON(message.data) : undefined);
        return obj;
    },
    create(base) {
        return QueryLatestTransmissionDetailsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLatestTransmissionDetailsResponse();
        message.configDigest = (_a = object.configDigest) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.epochAndRound = (object.epochAndRound !== undefined && object.epochAndRound !== null)
            ? EpochAndRound.fromPartial(object.epochAndRound)
            : undefined;
        message.data = (object.data !== undefined && object.data !== null)
            ? Transmission.fromPartial(object.data)
            : undefined;
        return message;
    },
};
function createBaseQueryOwedAmountRequest() {
    return { transmitter: "" };
}
export const QueryOwedAmountRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.transmitter !== "") {
            writer.uint32(10).string(message.transmitter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryOwedAmountRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryOwedAmountResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwedAmountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return QueryOwedAmountResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryOwedAmountResponse();
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseQueryModuleStateRequest() {
    return {};
}
export const QueryModuleStateRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryModuleStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
};
function createBaseQueryModuleStateResponse() {
    return { state: undefined };
}
export const QueryModuleStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.state !== undefined) {
            GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.state = GenesisState.decode(reader, reader.uint32());
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
        return { state: isSet(object.state) ? GenesisState.fromJSON(object.state) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state ? GenesisState.toJSON(message.state) : undefined);
        return obj;
    },
    create(base) {
        return QueryModuleStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryModuleStateResponse();
        message.state = (object.state !== undefined && object.state !== null)
            ? GenesisState.fromPartial(object.state)
            : undefined;
        return message;
    },
};
export class QueryClientImpl {
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
        return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
    }
    FeedConfig(request, metadata) {
        return this.rpc.unary(QueryFeedConfigDesc, QueryFeedConfigRequest.fromPartial(request), metadata);
    }
    FeedConfigInfo(request, metadata) {
        return this.rpc.unary(QueryFeedConfigInfoDesc, QueryFeedConfigInfoRequest.fromPartial(request), metadata);
    }
    LatestRound(request, metadata) {
        return this.rpc.unary(QueryLatestRoundDesc, QueryLatestRoundRequest.fromPartial(request), metadata);
    }
    LatestTransmissionDetails(request, metadata) {
        return this.rpc.unary(QueryLatestTransmissionDetailsDesc, QueryLatestTransmissionDetailsRequest.fromPartial(request), metadata);
    }
    OwedAmount(request, metadata) {
        return this.rpc.unary(QueryOwedAmountDesc, QueryOwedAmountRequest.fromPartial(request), metadata);
    }
    OcrModuleState(request, metadata) {
        return this.rpc.unary(QueryOcrModuleStateDesc, QueryModuleStateRequest.fromPartial(request), metadata);
    }
}
export const QueryDesc = { serviceName: "injective.ocr.v1beta1.Query" };
export const QueryParamsDesc = {
    methodName: "Params",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryParamsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryParamsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryFeedConfigDesc = {
    methodName: "FeedConfig",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryFeedConfigRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryFeedConfigResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryFeedConfigInfoDesc = {
    methodName: "FeedConfigInfo",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryFeedConfigInfoRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryFeedConfigInfoResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryLatestRoundDesc = {
    methodName: "LatestRound",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryLatestRoundRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryLatestRoundResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryLatestTransmissionDetailsDesc = {
    methodName: "LatestTransmissionDetails",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryLatestTransmissionDetailsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryLatestTransmissionDetailsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryOwedAmountDesc = {
    methodName: "OwedAmount",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryOwedAmountRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryOwedAmountResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const QueryOcrModuleStateDesc = {
    methodName: "OcrModuleState",
    service: QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return QueryModuleStateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = QueryModuleStateResponse.decode(data);
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
