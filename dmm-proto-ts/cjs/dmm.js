"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.InjectiveDmmV2RPCGetRewardsEligibilityDesc = exports.InjectiveDmmV2RPCGetAccountVolumesDesc = exports.InjectiveDmmV2RPCGetRewardsDistributionDesc = exports.InjectiveDmmV2RPCGetEligibleAddressesDesc = exports.InjectiveDmmV2RPCGetMarketRewardsDesc = exports.InjectiveDmmV2RPCGetEpochScoresHistoryDesc = exports.InjectiveDmmV2RPCGetEpochScoresDesc = exports.InjectiveDmmV2RPCGetTotalScoresHistoryDesc = exports.InjectiveDmmV2RPCGetTotalScoresDesc = exports.InjectiveDmmV2RPCGetLiquiditySnapshotsDesc = exports.InjectiveDmmV2RPCGetEpochsDesc = exports.InjectiveDmmV2RPCDesc = exports.InjectiveDmmV2RPCClientImpl = exports.AccountVolume = exports.RewardDistribution = exports.EligibleAddress = exports.MarketReward = exports.EpochScore = exports.TotalScore = exports.LiquidityScoreSnapshot = exports.EpochConfigV2 = exports.Market = exports.EpochV2 = exports.GetRewardsEligibilityResponse = exports.GetRewardsEligibilityRequest = exports.GetAccountVolumesResponse = exports.GetAccountVolumesRequest = exports.GetRewardsDistributionResponse = exports.GetRewardsDistributionRequest = exports.GetEligibleAddressesResponse = exports.GetEligibleAddressesRequest = exports.GetMarketRewardsResponse = exports.GetMarketRewardsRequest = exports.GetEpochScoresHistoryResponse = exports.GetEpochScoresHistoryRequest = exports.GetEpochScoresResponse = exports.GetEpochScoresRequest = exports.GetTotalScoresHistoryResponse = exports.GetTotalScoresHistoryRequest = exports.GetTotalScoresResponse = exports.GetTotalScoresRequest = exports.GetLiquiditySnapshotsResponse = exports.GetLiquiditySnapshotsRequest = exports.GetEpochsResponse = exports.GetEpochsRequest = exports.Pagination = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("./google/protobuf/timestamp");
exports.protobufPackage = "injective_dmm_v2_rpc";
function createBasePagination() {
    return { from: undefined, height: undefined, perPage: undefined, total: undefined };
}
exports.Pagination = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== undefined) {
            writer.uint32(8).int32(message.from);
        }
        if (message.height !== undefined) {
            writer.uint32(16).int32(message.height);
        }
        if (message.perPage !== undefined) {
            writer.uint32(24).int32(message.perPage);
        }
        if (message.total !== undefined) {
            writer.uint32(32).int32(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePagination();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.from = reader.int32();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.height = reader.int32();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.perPage = reader.int32();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.total = reader.int32();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? Number(object.from) : undefined,
            height: isSet(object.height) ? Number(object.height) : undefined,
            perPage: isSet(object.perPage) ? Number(object.perPage) : undefined,
            total: isSet(object.total) ? Number(object.total) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = Math.round(message.from));
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.perPage !== undefined && (obj.perPage = Math.round(message.perPage));
        message.total !== undefined && (obj.total = Math.round(message.total));
        return obj;
    },
    create(base) {
        return exports.Pagination.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBasePagination();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : undefined;
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : undefined;
        message.perPage = (_c = object.perPage) !== null && _c !== void 0 ? _c : undefined;
        message.total = (_d = object.total) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseGetEpochsRequest() {
    return { status: "" };
}
exports.GetEpochsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEpochsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return exports.GetEpochsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetEpochsRequest();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetEpochsResponse() {
    return { epochs: [] };
}
exports.GetEpochsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.epochs) {
            exports.EpochV2.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEpochsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochs.push(exports.EpochV2.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { epochs: Array.isArray(object === null || object === void 0 ? void 0 : object.epochs) ? object.epochs.map((e) => exports.EpochV2.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map((e) => e ? exports.EpochV2.toJSON(e) : undefined);
        }
        else {
            obj.epochs = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetEpochsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetEpochsResponse();
        message.epochs = ((_a = object.epochs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.EpochV2.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetLiquiditySnapshotsRequest() {
    return { epochId: "", marketId: "", accountAddress: "", page: undefined };
}
exports.GetLiquiditySnapshotsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(26).string(message.accountAddress);
        }
        if (message.page !== undefined) {
            exports.Pagination.encode(message.page, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLiquiditySnapshotsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.page = exports.Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            page: isSet(object.page) ? exports.Pagination.fromJSON(object.page) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.page !== undefined && (obj.page = message.page ? exports.Pagination.toJSON(message.page) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetLiquiditySnapshotsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetLiquiditySnapshotsRequest();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.accountAddress = (_c = object.accountAddress) !== null && _c !== void 0 ? _c : "";
        message.page = (object.page !== undefined && object.page !== null)
            ? exports.Pagination.fromPartial(object.page)
            : undefined;
        return message;
    },
};
function createBaseGetLiquiditySnapshotsResponse() {
    return { snapshots: [], next: undefined };
}
exports.GetLiquiditySnapshotsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.snapshots) {
            exports.LiquidityScoreSnapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.next !== undefined) {
            exports.Pagination.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLiquiditySnapshotsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.snapshots.push(exports.LiquidityScoreSnapshot.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.next = exports.Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            snapshots: Array.isArray(object === null || object === void 0 ? void 0 : object.snapshots)
                ? object.snapshots.map((e) => exports.LiquidityScoreSnapshot.fromJSON(e))
                : [],
            next: isSet(object.next) ? exports.Pagination.fromJSON(object.next) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map((e) => e ? exports.LiquidityScoreSnapshot.toJSON(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        message.next !== undefined && (obj.next = message.next ? exports.Pagination.toJSON(message.next) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetLiquiditySnapshotsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetLiquiditySnapshotsResponse();
        message.snapshots = ((_a = object.snapshots) === null || _a === void 0 ? void 0 : _a.map((e) => exports.LiquidityScoreSnapshot.fromPartial(e))) || [];
        message.next = (object.next !== undefined && object.next !== null)
            ? exports.Pagination.fromPartial(object.next)
            : undefined;
        return message;
    },
};
function createBaseGetTotalScoresRequest() {
    return { epochId: "", marketId: "", page: undefined };
}
exports.GetTotalScoresRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.page !== undefined) {
            exports.Pagination.encode(message.page, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalScoresRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.page = exports.Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            page: isSet(object.page) ? exports.Pagination.fromJSON(object.page) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.page !== undefined && (obj.page = message.page ? exports.Pagination.toJSON(message.page) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetTotalScoresRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetTotalScoresRequest();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.page = (object.page !== undefined && object.page !== null)
            ? exports.Pagination.fromPartial(object.page)
            : undefined;
        return message;
    },
};
function createBaseGetTotalScoresResponse() {
    return { scores: [], next: undefined };
}
exports.GetTotalScoresResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.scores) {
            exports.TotalScore.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.next !== undefined) {
            exports.Pagination.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalScoresResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.scores.push(exports.TotalScore.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.next = exports.Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            scores: Array.isArray(object === null || object === void 0 ? void 0 : object.scores) ? object.scores.map((e) => exports.TotalScore.fromJSON(e)) : [],
            next: isSet(object.next) ? exports.Pagination.fromJSON(object.next) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.scores) {
            obj.scores = message.scores.map((e) => e ? exports.TotalScore.toJSON(e) : undefined);
        }
        else {
            obj.scores = [];
        }
        message.next !== undefined && (obj.next = message.next ? exports.Pagination.toJSON(message.next) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetTotalScoresResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetTotalScoresResponse();
        message.scores = ((_a = object.scores) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TotalScore.fromPartial(e))) || [];
        message.next = (object.next !== undefined && object.next !== null)
            ? exports.Pagination.fromPartial(object.next)
            : undefined;
        return message;
    },
};
function createBaseGetTotalScoresHistoryRequest() {
    return { epochId: "", marketId: "", accountAddress: "", page: undefined };
}
exports.GetTotalScoresHistoryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(26).string(message.accountAddress);
        }
        if (message.page !== undefined) {
            exports.Pagination.encode(message.page, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalScoresHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.page = exports.Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            page: isSet(object.page) ? exports.Pagination.fromJSON(object.page) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.page !== undefined && (obj.page = message.page ? exports.Pagination.toJSON(message.page) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetTotalScoresHistoryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetTotalScoresHistoryRequest();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.accountAddress = (_c = object.accountAddress) !== null && _c !== void 0 ? _c : "";
        message.page = (object.page !== undefined && object.page !== null)
            ? exports.Pagination.fromPartial(object.page)
            : undefined;
        return message;
    },
};
function createBaseGetTotalScoresHistoryResponse() {
    return { scores: [], next: undefined };
}
exports.GetTotalScoresHistoryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.scores) {
            exports.TotalScore.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.next !== undefined) {
            exports.Pagination.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalScoresHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.scores.push(exports.TotalScore.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.next = exports.Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            scores: Array.isArray(object === null || object === void 0 ? void 0 : object.scores) ? object.scores.map((e) => exports.TotalScore.fromJSON(e)) : [],
            next: isSet(object.next) ? exports.Pagination.fromJSON(object.next) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.scores) {
            obj.scores = message.scores.map((e) => e ? exports.TotalScore.toJSON(e) : undefined);
        }
        else {
            obj.scores = [];
        }
        message.next !== undefined && (obj.next = message.next ? exports.Pagination.toJSON(message.next) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetTotalScoresHistoryResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetTotalScoresHistoryResponse();
        message.scores = ((_a = object.scores) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TotalScore.fromPartial(e))) || [];
        message.next = (object.next !== undefined && object.next !== null)
            ? exports.Pagination.fromPartial(object.next)
            : undefined;
        return message;
    },
};
function createBaseGetEpochScoresRequest() {
    return { epochId: "", page: undefined };
}
exports.GetEpochScoresRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.page !== undefined) {
            exports.Pagination.encode(message.page, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEpochScoresRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.page = exports.Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            page: isSet(object.page) ? exports.Pagination.fromJSON(object.page) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.page !== undefined && (obj.page = message.page ? exports.Pagination.toJSON(message.page) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetEpochScoresRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetEpochScoresRequest();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.page = (object.page !== undefined && object.page !== null)
            ? exports.Pagination.fromPartial(object.page)
            : undefined;
        return message;
    },
};
function createBaseGetEpochScoresResponse() {
    return { scores: [], next: undefined };
}
exports.GetEpochScoresResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.scores) {
            exports.EpochScore.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.next !== undefined) {
            exports.Pagination.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEpochScoresResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.scores.push(exports.EpochScore.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.next = exports.Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            scores: Array.isArray(object === null || object === void 0 ? void 0 : object.scores) ? object.scores.map((e) => exports.EpochScore.fromJSON(e)) : [],
            next: isSet(object.next) ? exports.Pagination.fromJSON(object.next) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.scores) {
            obj.scores = message.scores.map((e) => e ? exports.EpochScore.toJSON(e) : undefined);
        }
        else {
            obj.scores = [];
        }
        message.next !== undefined && (obj.next = message.next ? exports.Pagination.toJSON(message.next) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetEpochScoresResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetEpochScoresResponse();
        message.scores = ((_a = object.scores) === null || _a === void 0 ? void 0 : _a.map((e) => exports.EpochScore.fromPartial(e))) || [];
        message.next = (object.next !== undefined && object.next !== null)
            ? exports.Pagination.fromPartial(object.next)
            : undefined;
        return message;
    },
};
function createBaseGetEpochScoresHistoryRequest() {
    return { epochId: "", accountAddress: "", page: undefined };
}
exports.GetEpochScoresHistoryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        if (message.page !== undefined) {
            exports.Pagination.encode(message.page, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEpochScoresHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.page = exports.Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            page: isSet(object.page) ? exports.Pagination.fromJSON(object.page) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.page !== undefined && (obj.page = message.page ? exports.Pagination.toJSON(message.page) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetEpochScoresHistoryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetEpochScoresHistoryRequest();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.accountAddress = (_b = object.accountAddress) !== null && _b !== void 0 ? _b : "";
        message.page = (object.page !== undefined && object.page !== null)
            ? exports.Pagination.fromPartial(object.page)
            : undefined;
        return message;
    },
};
function createBaseGetEpochScoresHistoryResponse() {
    return { scores: [], next: undefined };
}
exports.GetEpochScoresHistoryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.scores) {
            exports.EpochScore.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.next !== undefined) {
            exports.Pagination.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEpochScoresHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.scores.push(exports.EpochScore.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.next = exports.Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            scores: Array.isArray(object === null || object === void 0 ? void 0 : object.scores) ? object.scores.map((e) => exports.EpochScore.fromJSON(e)) : [],
            next: isSet(object.next) ? exports.Pagination.fromJSON(object.next) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.scores) {
            obj.scores = message.scores.map((e) => e ? exports.EpochScore.toJSON(e) : undefined);
        }
        else {
            obj.scores = [];
        }
        message.next !== undefined && (obj.next = message.next ? exports.Pagination.toJSON(message.next) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetEpochScoresHistoryResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetEpochScoresHistoryResponse();
        message.scores = ((_a = object.scores) === null || _a === void 0 ? void 0 : _a.map((e) => exports.EpochScore.fromPartial(e))) || [];
        message.next = (object.next !== undefined && object.next !== null)
            ? exports.Pagination.fromPartial(object.next)
            : undefined;
        return message;
    },
};
function createBaseGetMarketRewardsRequest() {
    return { epochId: "" };
}
exports.GetMarketRewardsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMarketRewardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { epochId: isSet(object.epochId) ? String(object.epochId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        return obj;
    },
    create(base) {
        return exports.GetMarketRewardsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetMarketRewardsRequest();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetMarketRewardsResponse() {
    return { rewards: [] };
}
exports.GetMarketRewardsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.rewards) {
            exports.MarketReward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMarketRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.rewards.push(exports.MarketReward.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map((e) => exports.MarketReward.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => e ? exports.MarketReward.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetMarketRewardsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetMarketRewardsResponse();
        message.rewards = ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map((e) => exports.MarketReward.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetEligibleAddressesRequest() {
    return { epochId: "", page: undefined };
}
exports.GetEligibleAddressesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.page !== undefined) {
            exports.Pagination.encode(message.page, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEligibleAddressesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.page = exports.Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            page: isSet(object.page) ? exports.Pagination.fromJSON(object.page) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.page !== undefined && (obj.page = message.page ? exports.Pagination.toJSON(message.page) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetEligibleAddressesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetEligibleAddressesRequest();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.page = (object.page !== undefined && object.page !== null)
            ? exports.Pagination.fromPartial(object.page)
            : undefined;
        return message;
    },
};
function createBaseGetEligibleAddressesResponse() {
    return { addresses: [], next: undefined };
}
exports.GetEligibleAddressesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.addresses) {
            exports.EligibleAddress.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.next !== undefined) {
            exports.Pagination.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEligibleAddressesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.addresses.push(exports.EligibleAddress.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.next = exports.Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            addresses: Array.isArray(object === null || object === void 0 ? void 0 : object.addresses) ? object.addresses.map((e) => exports.EligibleAddress.fromJSON(e)) : [],
            next: isSet(object.next) ? exports.Pagination.fromJSON(object.next) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map((e) => e ? exports.EligibleAddress.toJSON(e) : undefined);
        }
        else {
            obj.addresses = [];
        }
        message.next !== undefined && (obj.next = message.next ? exports.Pagination.toJSON(message.next) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetEligibleAddressesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetEligibleAddressesResponse();
        message.addresses = ((_a = object.addresses) === null || _a === void 0 ? void 0 : _a.map((e) => exports.EligibleAddress.fromPartial(e))) || [];
        message.next = (object.next !== undefined && object.next !== null)
            ? exports.Pagination.fromPartial(object.next)
            : undefined;
        return message;
    },
};
function createBaseGetRewardsDistributionRequest() {
    return { epochId: "", height: "0", page: undefined };
}
exports.GetRewardsDistributionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.height !== "0") {
            writer.uint32(24).int64(message.height);
        }
        if (message.page !== undefined) {
            exports.Pagination.encode(message.page, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRewardsDistributionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.page = exports.Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            page: isSet(object.page) ? exports.Pagination.fromJSON(object.page) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.height !== undefined && (obj.height = message.height);
        message.page !== undefined && (obj.page = message.page ? exports.Pagination.toJSON(message.page) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetRewardsDistributionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetRewardsDistributionRequest();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : "0";
        message.page = (object.page !== undefined && object.page !== null)
            ? exports.Pagination.fromPartial(object.page)
            : undefined;
        return message;
    },
};
function createBaseGetRewardsDistributionResponse() {
    return { rewards: [], next: undefined };
}
exports.GetRewardsDistributionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.rewards) {
            exports.RewardDistribution.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.next !== undefined) {
            exports.Pagination.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRewardsDistributionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.rewards.push(exports.RewardDistribution.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.next = exports.Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map((e) => exports.RewardDistribution.fromJSON(e)) : [],
            next: isSet(object.next) ? exports.Pagination.fromJSON(object.next) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => e ? exports.RewardDistribution.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        message.next !== undefined && (obj.next = message.next ? exports.Pagination.toJSON(message.next) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetRewardsDistributionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetRewardsDistributionResponse();
        message.rewards = ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map((e) => exports.RewardDistribution.fromPartial(e))) || [];
        message.next = (object.next !== undefined && object.next !== null)
            ? exports.Pagination.fromPartial(object.next)
            : undefined;
        return message;
    },
};
function createBaseGetAccountVolumesRequest() {
    return { epochId: "", accountAddress: "" };
}
exports.GetAccountVolumesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAccountVolumesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return exports.GetAccountVolumesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetAccountVolumesRequest();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.accountAddress = (_b = object.accountAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetAccountVolumesResponse() {
    return { volumes: [] };
}
exports.GetAccountVolumesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.volumes) {
            exports.AccountVolume.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAccountVolumesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.volumes.push(exports.AccountVolume.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { volumes: Array.isArray(object === null || object === void 0 ? void 0 : object.volumes) ? object.volumes.map((e) => exports.AccountVolume.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.volumes) {
            obj.volumes = message.volumes.map((e) => e ? exports.AccountVolume.toJSON(e) : undefined);
        }
        else {
            obj.volumes = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetAccountVolumesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAccountVolumesResponse();
        message.volumes = ((_a = object.volumes) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AccountVolume.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetRewardsEligibilityRequest() {
    return { epochId: "", accountAddress: "" };
}
exports.GetRewardsEligibilityRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRewardsEligibilityRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return exports.GetRewardsEligibilityRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetRewardsEligibilityRequest();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.accountAddress = (_b = object.accountAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetRewardsEligibilityResponse() {
    return {
        volumes: [],
        currentMakerVolumePercentage: "",
        averageDailyMakerVolumePercentage: "",
        eligibleForNextEpoch: false,
        eligibleForCurrentEpoch: false,
        estimatedReward: "",
        updatedAt: undefined,
    };
}
exports.GetRewardsEligibilityResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.volumes) {
            exports.AccountVolume.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.currentMakerVolumePercentage !== "") {
            writer.uint32(18).string(message.currentMakerVolumePercentage);
        }
        if (message.averageDailyMakerVolumePercentage !== "") {
            writer.uint32(26).string(message.averageDailyMakerVolumePercentage);
        }
        if (message.eligibleForNextEpoch === true) {
            writer.uint32(32).bool(message.eligibleForNextEpoch);
        }
        if (message.eligibleForCurrentEpoch === true) {
            writer.uint32(48).bool(message.eligibleForCurrentEpoch);
        }
        if (message.estimatedReward !== "") {
            writer.uint32(42).string(message.estimatedReward);
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRewardsEligibilityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.volumes.push(exports.AccountVolume.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.currentMakerVolumePercentage = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.averageDailyMakerVolumePercentage = reader.string();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.eligibleForNextEpoch = reader.bool();
                    continue;
                case 6:
                    if (tag != 48) {
                        break;
                    }
                    message.eligibleForCurrentEpoch = reader.bool();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.estimatedReward = reader.string();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            volumes: Array.isArray(object === null || object === void 0 ? void 0 : object.volumes) ? object.volumes.map((e) => exports.AccountVolume.fromJSON(e)) : [],
            currentMakerVolumePercentage: isSet(object.currentMakerVolumePercentage)
                ? String(object.currentMakerVolumePercentage)
                : "",
            averageDailyMakerVolumePercentage: isSet(object.averageDailyMakerVolumePercentage)
                ? String(object.averageDailyMakerVolumePercentage)
                : "",
            eligibleForNextEpoch: isSet(object.eligibleForNextEpoch) ? Boolean(object.eligibleForNextEpoch) : false,
            eligibleForCurrentEpoch: isSet(object.eligibleForCurrentEpoch) ? Boolean(object.eligibleForCurrentEpoch) : false,
            estimatedReward: isSet(object.estimatedReward) ? String(object.estimatedReward) : "",
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.volumes) {
            obj.volumes = message.volumes.map((e) => e ? exports.AccountVolume.toJSON(e) : undefined);
        }
        else {
            obj.volumes = [];
        }
        message.currentMakerVolumePercentage !== undefined &&
            (obj.currentMakerVolumePercentage = message.currentMakerVolumePercentage);
        message.averageDailyMakerVolumePercentage !== undefined &&
            (obj.averageDailyMakerVolumePercentage = message.averageDailyMakerVolumePercentage);
        message.eligibleForNextEpoch !== undefined && (obj.eligibleForNextEpoch = message.eligibleForNextEpoch);
        message.eligibleForCurrentEpoch !== undefined && (obj.eligibleForCurrentEpoch = message.eligibleForCurrentEpoch);
        message.estimatedReward !== undefined && (obj.estimatedReward = message.estimatedReward);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.GetRewardsEligibilityResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseGetRewardsEligibilityResponse();
        message.volumes = ((_a = object.volumes) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AccountVolume.fromPartial(e))) || [];
        message.currentMakerVolumePercentage = (_b = object.currentMakerVolumePercentage) !== null && _b !== void 0 ? _b : "";
        message.averageDailyMakerVolumePercentage = (_c = object.averageDailyMakerVolumePercentage) !== null && _c !== void 0 ? _c : "";
        message.eligibleForNextEpoch = (_d = object.eligibleForNextEpoch) !== null && _d !== void 0 ? _d : false;
        message.eligibleForCurrentEpoch = (_e = object.eligibleForCurrentEpoch) !== null && _e !== void 0 ? _e : false;
        message.estimatedReward = (_f = object.estimatedReward) !== null && _f !== void 0 ? _f : "";
        message.updatedAt = (_g = object.updatedAt) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
function createBaseEpochV2() {
    return {
        epochId: "",
        status: "",
        startHeight: "0",
        endHeight: "0",
        snapshotCount: 0,
        resultCount: 0,
        config: undefined,
        createdAt: undefined,
        updatedAt: undefined,
    };
}
exports.EpochV2 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.status !== "") {
            writer.uint32(18).string(message.status);
        }
        if (message.startHeight !== "0") {
            writer.uint32(24).int64(message.startHeight);
        }
        if (message.endHeight !== "0") {
            writer.uint32(32).int64(message.endHeight);
        }
        if (message.snapshotCount !== 0) {
            writer.uint32(40).int32(message.snapshotCount);
        }
        if (message.resultCount !== 0) {
            writer.uint32(48).int32(message.resultCount);
        }
        if (message.config !== undefined) {
            exports.EpochConfigV2.encode(message.config, writer.uint32(58).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochV2();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.startHeight = longToString(reader.int64());
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.endHeight = longToString(reader.int64());
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.snapshotCount = reader.int32();
                    continue;
                case 6:
                    if (tag != 48) {
                        break;
                    }
                    message.resultCount = reader.int32();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.config = exports.EpochConfigV2.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            status: isSet(object.status) ? String(object.status) : "",
            startHeight: isSet(object.startHeight) ? String(object.startHeight) : "0",
            endHeight: isSet(object.endHeight) ? String(object.endHeight) : "0",
            snapshotCount: isSet(object.snapshotCount) ? Number(object.snapshotCount) : 0,
            resultCount: isSet(object.resultCount) ? Number(object.resultCount) : 0,
            config: isSet(object.config) ? exports.EpochConfigV2.fromJSON(object.config) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.status !== undefined && (obj.status = message.status);
        message.startHeight !== undefined && (obj.startHeight = message.startHeight);
        message.endHeight !== undefined && (obj.endHeight = message.endHeight);
        message.snapshotCount !== undefined && (obj.snapshotCount = Math.round(message.snapshotCount));
        message.resultCount !== undefined && (obj.resultCount = Math.round(message.resultCount));
        message.config !== undefined && (obj.config = message.config ? exports.EpochConfigV2.toJSON(message.config) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.EpochV2.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseEpochV2();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : "";
        message.startHeight = (_c = object.startHeight) !== null && _c !== void 0 ? _c : "0";
        message.endHeight = (_d = object.endHeight) !== null && _d !== void 0 ? _d : "0";
        message.snapshotCount = (_e = object.snapshotCount) !== null && _e !== void 0 ? _e : 0;
        message.resultCount = (_f = object.resultCount) !== null && _f !== void 0 ? _f : 0;
        message.config = (object.config !== undefined && object.config !== null)
            ? exports.EpochConfigV2.fromPartial(object.config)
            : undefined;
        message.createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : undefined;
        message.updatedAt = (_h = object.updatedAt) !== null && _h !== void 0 ? _h : undefined;
        return message;
    },
};
function createBaseMarket() {
    return { marketId: "", ticker: "", startDate: undefined, preAllocatedReward: undefined };
}
exports.Market = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.ticker !== "") {
            writer.uint32(18).string(message.ticker);
        }
        if (message.startDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startDate), writer.uint32(26).fork()).ldelim();
        }
        if (message.preAllocatedReward !== undefined) {
            writer.uint32(34).string(message.preAllocatedReward);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.ticker = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.startDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.preAllocatedReward = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
            preAllocatedReward: isSet(object.preAllocatedReward) ? String(object.preAllocatedReward) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
        message.preAllocatedReward !== undefined && (obj.preAllocatedReward = message.preAllocatedReward);
        return obj;
    },
    create(base) {
        return exports.Market.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMarket();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.ticker = (_b = object.ticker) !== null && _b !== void 0 ? _b : "";
        message.startDate = (_c = object.startDate) !== null && _c !== void 0 ? _c : undefined;
        message.preAllocatedReward = (_d = object.preAllocatedReward) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseEpochConfigV2() {
    return {
        number: 0,
        startDate: undefined,
        endDate: undefined,
        rewardInj: "",
        markets: [],
        liquidityScoreExponent: "",
        uptimeExponent: "",
        volumeExponent: "",
        permanenceVolumeThreshold: "",
        qualifyingVolumeThreshold: "",
    };
}
exports.EpochConfigV2 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.number !== 0) {
            writer.uint32(80).int32(message.number);
        }
        if (message.startDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startDate), writer.uint32(10).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.endDate), writer.uint32(18).fork()).ldelim();
        }
        if (message.rewardInj !== "") {
            writer.uint32(26).string(message.rewardInj);
        }
        for (const v of message.markets) {
            exports.Market.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.liquidityScoreExponent !== "") {
            writer.uint32(42).string(message.liquidityScoreExponent);
        }
        if (message.uptimeExponent !== "") {
            writer.uint32(50).string(message.uptimeExponent);
        }
        if (message.volumeExponent !== "") {
            writer.uint32(58).string(message.volumeExponent);
        }
        if (message.permanenceVolumeThreshold !== "") {
            writer.uint32(66).string(message.permanenceVolumeThreshold);
        }
        if (message.qualifyingVolumeThreshold !== "") {
            writer.uint32(74).string(message.qualifyingVolumeThreshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochConfigV2();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 10:
                    if (tag != 80) {
                        break;
                    }
                    message.number = reader.int32();
                    continue;
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.startDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.endDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.rewardInj = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.markets.push(exports.Market.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.liquidityScoreExponent = reader.string();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.uptimeExponent = reader.string();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.volumeExponent = reader.string();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.permanenceVolumeThreshold = reader.string();
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.qualifyingVolumeThreshold = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            number: isSet(object.number) ? Number(object.number) : 0,
            startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
            endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
            rewardInj: isSet(object.rewardInj) ? String(object.rewardInj) : "",
            markets: Array.isArray(object === null || object === void 0 ? void 0 : object.markets) ? object.markets.map((e) => exports.Market.fromJSON(e)) : [],
            liquidityScoreExponent: isSet(object.liquidityScoreExponent) ? String(object.liquidityScoreExponent) : "",
            uptimeExponent: isSet(object.uptimeExponent) ? String(object.uptimeExponent) : "",
            volumeExponent: isSet(object.volumeExponent) ? String(object.volumeExponent) : "",
            permanenceVolumeThreshold: isSet(object.permanenceVolumeThreshold)
                ? String(object.permanenceVolumeThreshold)
                : "",
            qualifyingVolumeThreshold: isSet(object.qualifyingVolumeThreshold)
                ? String(object.qualifyingVolumeThreshold)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
        message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
        message.rewardInj !== undefined && (obj.rewardInj = message.rewardInj);
        if (message.markets) {
            obj.markets = message.markets.map((e) => e ? exports.Market.toJSON(e) : undefined);
        }
        else {
            obj.markets = [];
        }
        message.liquidityScoreExponent !== undefined && (obj.liquidityScoreExponent = message.liquidityScoreExponent);
        message.uptimeExponent !== undefined && (obj.uptimeExponent = message.uptimeExponent);
        message.volumeExponent !== undefined && (obj.volumeExponent = message.volumeExponent);
        message.permanenceVolumeThreshold !== undefined &&
            (obj.permanenceVolumeThreshold = message.permanenceVolumeThreshold);
        message.qualifyingVolumeThreshold !== undefined &&
            (obj.qualifyingVolumeThreshold = message.qualifyingVolumeThreshold);
        return obj;
    },
    create(base) {
        return exports.EpochConfigV2.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseEpochConfigV2();
        message.number = (_a = object.number) !== null && _a !== void 0 ? _a : 0;
        message.startDate = (_b = object.startDate) !== null && _b !== void 0 ? _b : undefined;
        message.endDate = (_c = object.endDate) !== null && _c !== void 0 ? _c : undefined;
        message.rewardInj = (_d = object.rewardInj) !== null && _d !== void 0 ? _d : "";
        message.markets = ((_e = object.markets) === null || _e === void 0 ? void 0 : _e.map((e) => exports.Market.fromPartial(e))) || [];
        message.liquidityScoreExponent = (_f = object.liquidityScoreExponent) !== null && _f !== void 0 ? _f : "";
        message.uptimeExponent = (_g = object.uptimeExponent) !== null && _g !== void 0 ? _g : "";
        message.volumeExponent = (_h = object.volumeExponent) !== null && _h !== void 0 ? _h : "";
        message.permanenceVolumeThreshold = (_j = object.permanenceVolumeThreshold) !== null && _j !== void 0 ? _j : "";
        message.qualifyingVolumeThreshold = (_k = object.qualifyingVolumeThreshold) !== null && _k !== void 0 ? _k : "";
        return message;
    },
};
function createBaseLiquidityScoreSnapshot() {
    return {
        epochId: "",
        marketId: "",
        accountAddress: "",
        height: "0",
        blockTime: undefined,
        bid: "",
        ask: "",
        depth: "",
        liquidityScore: "",
        uptimeScore: "",
        createdAt: undefined,
        updatedAt: undefined,
    };
}
exports.LiquidityScoreSnapshot = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(26).string(message.accountAddress);
        }
        if (message.height !== "0") {
            writer.uint32(32).int64(message.height);
        }
        if (message.blockTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.bid !== "") {
            writer.uint32(50).string(message.bid);
        }
        if (message.ask !== "") {
            writer.uint32(58).string(message.ask);
        }
        if (message.depth !== "") {
            writer.uint32(66).string(message.depth);
        }
        if (message.liquidityScore !== "") {
            writer.uint32(74).string(message.liquidityScore);
        }
        if (message.uptimeScore !== "") {
            writer.uint32(82).string(message.uptimeScore);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(98).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidityScoreSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.blockTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.bid = reader.string();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.ask = reader.string();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.depth = reader.string();
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.liquidityScore = reader.string();
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.uptimeScore = reader.string();
                    continue;
                case 12:
                    if (tag != 98) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 13:
                    if (tag != 106) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
            bid: isSet(object.bid) ? String(object.bid) : "",
            ask: isSet(object.ask) ? String(object.ask) : "",
            depth: isSet(object.depth) ? String(object.depth) : "",
            liquidityScore: isSet(object.liquidityScore) ? String(object.liquidityScore) : "",
            uptimeScore: isSet(object.uptimeScore) ? String(object.uptimeScore) : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.height !== undefined && (obj.height = message.height);
        message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
        message.bid !== undefined && (obj.bid = message.bid);
        message.ask !== undefined && (obj.ask = message.ask);
        message.depth !== undefined && (obj.depth = message.depth);
        message.liquidityScore !== undefined && (obj.liquidityScore = message.liquidityScore);
        message.uptimeScore !== undefined && (obj.uptimeScore = message.uptimeScore);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.LiquidityScoreSnapshot.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBaseLiquidityScoreSnapshot();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.accountAddress = (_c = object.accountAddress) !== null && _c !== void 0 ? _c : "";
        message.height = (_d = object.height) !== null && _d !== void 0 ? _d : "0";
        message.blockTime = (_e = object.blockTime) !== null && _e !== void 0 ? _e : undefined;
        message.bid = (_f = object.bid) !== null && _f !== void 0 ? _f : "";
        message.ask = (_g = object.ask) !== null && _g !== void 0 ? _g : "";
        message.depth = (_h = object.depth) !== null && _h !== void 0 ? _h : "";
        message.liquidityScore = (_j = object.liquidityScore) !== null && _j !== void 0 ? _j : "";
        message.uptimeScore = (_k = object.uptimeScore) !== null && _k !== void 0 ? _k : "";
        message.createdAt = (_l = object.createdAt) !== null && _l !== void 0 ? _l : undefined;
        message.updatedAt = (_m = object.updatedAt) !== null && _m !== void 0 ? _m : undefined;
        return message;
    },
};
function createBaseTotalScore() {
    return {
        epochId: "",
        marketId: "",
        accountAddress: "",
        height: "0",
        startHeight: "0",
        blockTime: undefined,
        bid: "",
        ask: "",
        depth: "",
        snapshotCount: 0,
        liquidityScore: "",
        liquidityScorePonderated: "",
        uptimeScore: "",
        bidSnapshot: "",
        askSnapshot: "",
        depthSnapshot: "",
        liquidityScoreSnapshot: "",
        uptimeScoreSnapshot: "",
        uptimeScorePonderated: "",
        uptimePercentage: "",
        startVolume: "",
        currentVolume: "",
        volume: "",
        volumeScore: "",
        volumeScorePonderated: "",
        takerStartVolume: "",
        takerCurrentVolume: "",
        takerVolume: "",
        makerStartVolume: "",
        makerCurrentVolume: "",
        makerVolume: "",
        totalScore: "",
        reward: "",
        rewardPercentage: "",
        createdAt: undefined,
        updatedAt: undefined,
    };
}
exports.TotalScore = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(26).string(message.accountAddress);
        }
        if (message.height !== "0") {
            writer.uint32(32).int64(message.height);
        }
        if (message.startHeight !== "0") {
            writer.uint32(40).int64(message.startHeight);
        }
        if (message.blockTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(50).fork()).ldelim();
        }
        if (message.bid !== "") {
            writer.uint32(58).string(message.bid);
        }
        if (message.ask !== "") {
            writer.uint32(66).string(message.ask);
        }
        if (message.depth !== "") {
            writer.uint32(74).string(message.depth);
        }
        if (message.snapshotCount !== 0) {
            writer.uint32(224).int32(message.snapshotCount);
        }
        if (message.liquidityScore !== "") {
            writer.uint32(82).string(message.liquidityScore);
        }
        if (message.liquidityScorePonderated !== "") {
            writer.uint32(90).string(message.liquidityScorePonderated);
        }
        if (message.uptimeScore !== "") {
            writer.uint32(98).string(message.uptimeScore);
        }
        if (message.bidSnapshot !== "") {
            writer.uint32(290).string(message.bidSnapshot);
        }
        if (message.askSnapshot !== "") {
            writer.uint32(298).string(message.askSnapshot);
        }
        if (message.depthSnapshot !== "") {
            writer.uint32(306).string(message.depthSnapshot);
        }
        if (message.liquidityScoreSnapshot !== "") {
            writer.uint32(314).string(message.liquidityScoreSnapshot);
        }
        if (message.uptimeScoreSnapshot !== "") {
            writer.uint32(322).string(message.uptimeScoreSnapshot);
        }
        if (message.uptimeScorePonderated !== "") {
            writer.uint32(106).string(message.uptimeScorePonderated);
        }
        if (message.uptimePercentage !== "") {
            writer.uint32(114).string(message.uptimePercentage);
        }
        if (message.startVolume !== "") {
            writer.uint32(122).string(message.startVolume);
        }
        if (message.currentVolume !== "") {
            writer.uint32(130).string(message.currentVolume);
        }
        if (message.volume !== "") {
            writer.uint32(234).string(message.volume);
        }
        if (message.volumeScore !== "") {
            writer.uint32(138).string(message.volumeScore);
        }
        if (message.volumeScorePonderated !== "") {
            writer.uint32(146).string(message.volumeScorePonderated);
        }
        if (message.takerStartVolume !== "") {
            writer.uint32(242).string(message.takerStartVolume);
        }
        if (message.takerCurrentVolume !== "") {
            writer.uint32(250).string(message.takerCurrentVolume);
        }
        if (message.takerVolume !== "") {
            writer.uint32(258).string(message.takerVolume);
        }
        if (message.makerStartVolume !== "") {
            writer.uint32(266).string(message.makerStartVolume);
        }
        if (message.makerCurrentVolume !== "") {
            writer.uint32(274).string(message.makerCurrentVolume);
        }
        if (message.makerVolume !== "") {
            writer.uint32(282).string(message.makerVolume);
        }
        if (message.totalScore !== "") {
            writer.uint32(178).string(message.totalScore);
        }
        if (message.reward !== "") {
            writer.uint32(186).string(message.reward);
        }
        if (message.rewardPercentage !== "") {
            writer.uint32(194).string(message.rewardPercentage);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(210).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(218).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalScore();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.startHeight = longToString(reader.int64());
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.blockTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.bid = reader.string();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.ask = reader.string();
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.depth = reader.string();
                    continue;
                case 28:
                    if (tag != 224) {
                        break;
                    }
                    message.snapshotCount = reader.int32();
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.liquidityScore = reader.string();
                    continue;
                case 11:
                    if (tag != 90) {
                        break;
                    }
                    message.liquidityScorePonderated = reader.string();
                    continue;
                case 12:
                    if (tag != 98) {
                        break;
                    }
                    message.uptimeScore = reader.string();
                    continue;
                case 36:
                    if (tag != 290) {
                        break;
                    }
                    message.bidSnapshot = reader.string();
                    continue;
                case 37:
                    if (tag != 298) {
                        break;
                    }
                    message.askSnapshot = reader.string();
                    continue;
                case 38:
                    if (tag != 306) {
                        break;
                    }
                    message.depthSnapshot = reader.string();
                    continue;
                case 39:
                    if (tag != 314) {
                        break;
                    }
                    message.liquidityScoreSnapshot = reader.string();
                    continue;
                case 40:
                    if (tag != 322) {
                        break;
                    }
                    message.uptimeScoreSnapshot = reader.string();
                    continue;
                case 13:
                    if (tag != 106) {
                        break;
                    }
                    message.uptimeScorePonderated = reader.string();
                    continue;
                case 14:
                    if (tag != 114) {
                        break;
                    }
                    message.uptimePercentage = reader.string();
                    continue;
                case 15:
                    if (tag != 122) {
                        break;
                    }
                    message.startVolume = reader.string();
                    continue;
                case 16:
                    if (tag != 130) {
                        break;
                    }
                    message.currentVolume = reader.string();
                    continue;
                case 29:
                    if (tag != 234) {
                        break;
                    }
                    message.volume = reader.string();
                    continue;
                case 17:
                    if (tag != 138) {
                        break;
                    }
                    message.volumeScore = reader.string();
                    continue;
                case 18:
                    if (tag != 146) {
                        break;
                    }
                    message.volumeScorePonderated = reader.string();
                    continue;
                case 30:
                    if (tag != 242) {
                        break;
                    }
                    message.takerStartVolume = reader.string();
                    continue;
                case 31:
                    if (tag != 250) {
                        break;
                    }
                    message.takerCurrentVolume = reader.string();
                    continue;
                case 32:
                    if (tag != 258) {
                        break;
                    }
                    message.takerVolume = reader.string();
                    continue;
                case 33:
                    if (tag != 266) {
                        break;
                    }
                    message.makerStartVolume = reader.string();
                    continue;
                case 34:
                    if (tag != 274) {
                        break;
                    }
                    message.makerCurrentVolume = reader.string();
                    continue;
                case 35:
                    if (tag != 282) {
                        break;
                    }
                    message.makerVolume = reader.string();
                    continue;
                case 22:
                    if (tag != 178) {
                        break;
                    }
                    message.totalScore = reader.string();
                    continue;
                case 23:
                    if (tag != 186) {
                        break;
                    }
                    message.reward = reader.string();
                    continue;
                case 24:
                    if (tag != 194) {
                        break;
                    }
                    message.rewardPercentage = reader.string();
                    continue;
                case 26:
                    if (tag != 210) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 27:
                    if (tag != 218) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            startHeight: isSet(object.startHeight) ? String(object.startHeight) : "0",
            blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
            bid: isSet(object.bid) ? String(object.bid) : "",
            ask: isSet(object.ask) ? String(object.ask) : "",
            depth: isSet(object.depth) ? String(object.depth) : "",
            snapshotCount: isSet(object.snapshotCount) ? Number(object.snapshotCount) : 0,
            liquidityScore: isSet(object.liquidityScore) ? String(object.liquidityScore) : "",
            liquidityScorePonderated: isSet(object.liquidityScorePonderated) ? String(object.liquidityScorePonderated) : "",
            uptimeScore: isSet(object.uptimeScore) ? String(object.uptimeScore) : "",
            bidSnapshot: isSet(object.bidSnapshot) ? String(object.bidSnapshot) : "",
            askSnapshot: isSet(object.askSnapshot) ? String(object.askSnapshot) : "",
            depthSnapshot: isSet(object.depthSnapshot) ? String(object.depthSnapshot) : "",
            liquidityScoreSnapshot: isSet(object.liquidityScoreSnapshot) ? String(object.liquidityScoreSnapshot) : "",
            uptimeScoreSnapshot: isSet(object.uptimeScoreSnapshot) ? String(object.uptimeScoreSnapshot) : "",
            uptimeScorePonderated: isSet(object.uptimeScorePonderated) ? String(object.uptimeScorePonderated) : "",
            uptimePercentage: isSet(object.uptimePercentage) ? String(object.uptimePercentage) : "",
            startVolume: isSet(object.startVolume) ? String(object.startVolume) : "",
            currentVolume: isSet(object.currentVolume) ? String(object.currentVolume) : "",
            volume: isSet(object.volume) ? String(object.volume) : "",
            volumeScore: isSet(object.volumeScore) ? String(object.volumeScore) : "",
            volumeScorePonderated: isSet(object.volumeScorePonderated) ? String(object.volumeScorePonderated) : "",
            takerStartVolume: isSet(object.takerStartVolume) ? String(object.takerStartVolume) : "",
            takerCurrentVolume: isSet(object.takerCurrentVolume) ? String(object.takerCurrentVolume) : "",
            takerVolume: isSet(object.takerVolume) ? String(object.takerVolume) : "",
            makerStartVolume: isSet(object.makerStartVolume) ? String(object.makerStartVolume) : "",
            makerCurrentVolume: isSet(object.makerCurrentVolume) ? String(object.makerCurrentVolume) : "",
            makerVolume: isSet(object.makerVolume) ? String(object.makerVolume) : "",
            totalScore: isSet(object.totalScore) ? String(object.totalScore) : "",
            reward: isSet(object.reward) ? String(object.reward) : "",
            rewardPercentage: isSet(object.rewardPercentage) ? String(object.rewardPercentage) : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.height !== undefined && (obj.height = message.height);
        message.startHeight !== undefined && (obj.startHeight = message.startHeight);
        message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
        message.bid !== undefined && (obj.bid = message.bid);
        message.ask !== undefined && (obj.ask = message.ask);
        message.depth !== undefined && (obj.depth = message.depth);
        message.snapshotCount !== undefined && (obj.snapshotCount = Math.round(message.snapshotCount));
        message.liquidityScore !== undefined && (obj.liquidityScore = message.liquidityScore);
        message.liquidityScorePonderated !== undefined && (obj.liquidityScorePonderated = message.liquidityScorePonderated);
        message.uptimeScore !== undefined && (obj.uptimeScore = message.uptimeScore);
        message.bidSnapshot !== undefined && (obj.bidSnapshot = message.bidSnapshot);
        message.askSnapshot !== undefined && (obj.askSnapshot = message.askSnapshot);
        message.depthSnapshot !== undefined && (obj.depthSnapshot = message.depthSnapshot);
        message.liquidityScoreSnapshot !== undefined && (obj.liquidityScoreSnapshot = message.liquidityScoreSnapshot);
        message.uptimeScoreSnapshot !== undefined && (obj.uptimeScoreSnapshot = message.uptimeScoreSnapshot);
        message.uptimeScorePonderated !== undefined && (obj.uptimeScorePonderated = message.uptimeScorePonderated);
        message.uptimePercentage !== undefined && (obj.uptimePercentage = message.uptimePercentage);
        message.startVolume !== undefined && (obj.startVolume = message.startVolume);
        message.currentVolume !== undefined && (obj.currentVolume = message.currentVolume);
        message.volume !== undefined && (obj.volume = message.volume);
        message.volumeScore !== undefined && (obj.volumeScore = message.volumeScore);
        message.volumeScorePonderated !== undefined && (obj.volumeScorePonderated = message.volumeScorePonderated);
        message.takerStartVolume !== undefined && (obj.takerStartVolume = message.takerStartVolume);
        message.takerCurrentVolume !== undefined && (obj.takerCurrentVolume = message.takerCurrentVolume);
        message.takerVolume !== undefined && (obj.takerVolume = message.takerVolume);
        message.makerStartVolume !== undefined && (obj.makerStartVolume = message.makerStartVolume);
        message.makerCurrentVolume !== undefined && (obj.makerCurrentVolume = message.makerCurrentVolume);
        message.makerVolume !== undefined && (obj.makerVolume = message.makerVolume);
        message.totalScore !== undefined && (obj.totalScore = message.totalScore);
        message.reward !== undefined && (obj.reward = message.reward);
        message.rewardPercentage !== undefined && (obj.rewardPercentage = message.rewardPercentage);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.TotalScore.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
        const message = createBaseTotalScore();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.accountAddress = (_c = object.accountAddress) !== null && _c !== void 0 ? _c : "";
        message.height = (_d = object.height) !== null && _d !== void 0 ? _d : "0";
        message.startHeight = (_e = object.startHeight) !== null && _e !== void 0 ? _e : "0";
        message.blockTime = (_f = object.blockTime) !== null && _f !== void 0 ? _f : undefined;
        message.bid = (_g = object.bid) !== null && _g !== void 0 ? _g : "";
        message.ask = (_h = object.ask) !== null && _h !== void 0 ? _h : "";
        message.depth = (_j = object.depth) !== null && _j !== void 0 ? _j : "";
        message.snapshotCount = (_k = object.snapshotCount) !== null && _k !== void 0 ? _k : 0;
        message.liquidityScore = (_l = object.liquidityScore) !== null && _l !== void 0 ? _l : "";
        message.liquidityScorePonderated = (_m = object.liquidityScorePonderated) !== null && _m !== void 0 ? _m : "";
        message.uptimeScore = (_o = object.uptimeScore) !== null && _o !== void 0 ? _o : "";
        message.bidSnapshot = (_p = object.bidSnapshot) !== null && _p !== void 0 ? _p : "";
        message.askSnapshot = (_q = object.askSnapshot) !== null && _q !== void 0 ? _q : "";
        message.depthSnapshot = (_r = object.depthSnapshot) !== null && _r !== void 0 ? _r : "";
        message.liquidityScoreSnapshot = (_s = object.liquidityScoreSnapshot) !== null && _s !== void 0 ? _s : "";
        message.uptimeScoreSnapshot = (_t = object.uptimeScoreSnapshot) !== null && _t !== void 0 ? _t : "";
        message.uptimeScorePonderated = (_u = object.uptimeScorePonderated) !== null && _u !== void 0 ? _u : "";
        message.uptimePercentage = (_v = object.uptimePercentage) !== null && _v !== void 0 ? _v : "";
        message.startVolume = (_w = object.startVolume) !== null && _w !== void 0 ? _w : "";
        message.currentVolume = (_x = object.currentVolume) !== null && _x !== void 0 ? _x : "";
        message.volume = (_y = object.volume) !== null && _y !== void 0 ? _y : "";
        message.volumeScore = (_z = object.volumeScore) !== null && _z !== void 0 ? _z : "";
        message.volumeScorePonderated = (_0 = object.volumeScorePonderated) !== null && _0 !== void 0 ? _0 : "";
        message.takerStartVolume = (_1 = object.takerStartVolume) !== null && _1 !== void 0 ? _1 : "";
        message.takerCurrentVolume = (_2 = object.takerCurrentVolume) !== null && _2 !== void 0 ? _2 : "";
        message.takerVolume = (_3 = object.takerVolume) !== null && _3 !== void 0 ? _3 : "";
        message.makerStartVolume = (_4 = object.makerStartVolume) !== null && _4 !== void 0 ? _4 : "";
        message.makerCurrentVolume = (_5 = object.makerCurrentVolume) !== null && _5 !== void 0 ? _5 : "";
        message.makerVolume = (_6 = object.makerVolume) !== null && _6 !== void 0 ? _6 : "";
        message.totalScore = (_7 = object.totalScore) !== null && _7 !== void 0 ? _7 : "";
        message.reward = (_8 = object.reward) !== null && _8 !== void 0 ? _8 : "";
        message.rewardPercentage = (_9 = object.rewardPercentage) !== null && _9 !== void 0 ? _9 : "";
        message.createdAt = (_10 = object.createdAt) !== null && _10 !== void 0 ? _10 : undefined;
        message.updatedAt = (_11 = object.updatedAt) !== null && _11 !== void 0 ? _11 : undefined;
        return message;
    },
};
function createBaseEpochScore() {
    return {
        epochId: "",
        accountAddress: "",
        height: "0",
        blockTime: undefined,
        startHeight: "0",
        depth: "",
        liquidityScore: "",
        liquidityScorePonderated: "",
        uptimeScore: "",
        uptimeScorePonderated: "",
        uptimePercentage: "",
        volumeScore: "",
        volumeScorePonderated: "",
        totalScore: "",
        volume: "",
        makerVolume: "",
        takerVolume: "",
        reward: "",
        rewardPercentage: "",
        qualifies: false,
        volumePercentage: "",
        createdAt: undefined,
        updatedAt: undefined,
    };
}
exports.EpochScore = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        if (message.height !== "0") {
            writer.uint32(24).int64(message.height);
        }
        if (message.blockTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.startHeight !== "0") {
            writer.uint32(40).int64(message.startHeight);
        }
        if (message.depth !== "") {
            writer.uint32(186).string(message.depth);
        }
        if (message.liquidityScore !== "") {
            writer.uint32(50).string(message.liquidityScore);
        }
        if (message.liquidityScorePonderated !== "") {
            writer.uint32(58).string(message.liquidityScorePonderated);
        }
        if (message.uptimeScore !== "") {
            writer.uint32(66).string(message.uptimeScore);
        }
        if (message.uptimeScorePonderated !== "") {
            writer.uint32(74).string(message.uptimeScorePonderated);
        }
        if (message.uptimePercentage !== "") {
            writer.uint32(178).string(message.uptimePercentage);
        }
        if (message.volumeScore !== "") {
            writer.uint32(82).string(message.volumeScore);
        }
        if (message.volumeScorePonderated !== "") {
            writer.uint32(90).string(message.volumeScorePonderated);
        }
        if (message.totalScore !== "") {
            writer.uint32(98).string(message.totalScore);
        }
        if (message.volume !== "") {
            writer.uint32(106).string(message.volume);
        }
        if (message.makerVolume !== "") {
            writer.uint32(114).string(message.makerVolume);
        }
        if (message.takerVolume !== "") {
            writer.uint32(122).string(message.takerVolume);
        }
        if (message.reward !== "") {
            writer.uint32(130).string(message.reward);
        }
        if (message.rewardPercentage !== "") {
            writer.uint32(138).string(message.rewardPercentage);
        }
        if (message.qualifies === true) {
            writer.uint32(144).bool(message.qualifies);
        }
        if (message.volumePercentage !== "") {
            writer.uint32(154).string(message.volumePercentage);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(162).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(170).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochScore();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.blockTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.startHeight = longToString(reader.int64());
                    continue;
                case 23:
                    if (tag != 186) {
                        break;
                    }
                    message.depth = reader.string();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.liquidityScore = reader.string();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.liquidityScorePonderated = reader.string();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.uptimeScore = reader.string();
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.uptimeScorePonderated = reader.string();
                    continue;
                case 22:
                    if (tag != 178) {
                        break;
                    }
                    message.uptimePercentage = reader.string();
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.volumeScore = reader.string();
                    continue;
                case 11:
                    if (tag != 90) {
                        break;
                    }
                    message.volumeScorePonderated = reader.string();
                    continue;
                case 12:
                    if (tag != 98) {
                        break;
                    }
                    message.totalScore = reader.string();
                    continue;
                case 13:
                    if (tag != 106) {
                        break;
                    }
                    message.volume = reader.string();
                    continue;
                case 14:
                    if (tag != 114) {
                        break;
                    }
                    message.makerVolume = reader.string();
                    continue;
                case 15:
                    if (tag != 122) {
                        break;
                    }
                    message.takerVolume = reader.string();
                    continue;
                case 16:
                    if (tag != 130) {
                        break;
                    }
                    message.reward = reader.string();
                    continue;
                case 17:
                    if (tag != 138) {
                        break;
                    }
                    message.rewardPercentage = reader.string();
                    continue;
                case 18:
                    if (tag != 144) {
                        break;
                    }
                    message.qualifies = reader.bool();
                    continue;
                case 19:
                    if (tag != 154) {
                        break;
                    }
                    message.volumePercentage = reader.string();
                    continue;
                case 20:
                    if (tag != 162) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 21:
                    if (tag != 170) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
            startHeight: isSet(object.startHeight) ? String(object.startHeight) : "0",
            depth: isSet(object.depth) ? String(object.depth) : "",
            liquidityScore: isSet(object.liquidityScore) ? String(object.liquidityScore) : "",
            liquidityScorePonderated: isSet(object.liquidityScorePonderated) ? String(object.liquidityScorePonderated) : "",
            uptimeScore: isSet(object.uptimeScore) ? String(object.uptimeScore) : "",
            uptimeScorePonderated: isSet(object.uptimeScorePonderated) ? String(object.uptimeScorePonderated) : "",
            uptimePercentage: isSet(object.uptimePercentage) ? String(object.uptimePercentage) : "",
            volumeScore: isSet(object.volumeScore) ? String(object.volumeScore) : "",
            volumeScorePonderated: isSet(object.volumeScorePonderated) ? String(object.volumeScorePonderated) : "",
            totalScore: isSet(object.totalScore) ? String(object.totalScore) : "",
            volume: isSet(object.volume) ? String(object.volume) : "",
            makerVolume: isSet(object.makerVolume) ? String(object.makerVolume) : "",
            takerVolume: isSet(object.takerVolume) ? String(object.takerVolume) : "",
            reward: isSet(object.reward) ? String(object.reward) : "",
            rewardPercentage: isSet(object.rewardPercentage) ? String(object.rewardPercentage) : "",
            qualifies: isSet(object.qualifies) ? Boolean(object.qualifies) : false,
            volumePercentage: isSet(object.volumePercentage) ? String(object.volumePercentage) : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.height !== undefined && (obj.height = message.height);
        message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
        message.startHeight !== undefined && (obj.startHeight = message.startHeight);
        message.depth !== undefined && (obj.depth = message.depth);
        message.liquidityScore !== undefined && (obj.liquidityScore = message.liquidityScore);
        message.liquidityScorePonderated !== undefined && (obj.liquidityScorePonderated = message.liquidityScorePonderated);
        message.uptimeScore !== undefined && (obj.uptimeScore = message.uptimeScore);
        message.uptimeScorePonderated !== undefined && (obj.uptimeScorePonderated = message.uptimeScorePonderated);
        message.uptimePercentage !== undefined && (obj.uptimePercentage = message.uptimePercentage);
        message.volumeScore !== undefined && (obj.volumeScore = message.volumeScore);
        message.volumeScorePonderated !== undefined && (obj.volumeScorePonderated = message.volumeScorePonderated);
        message.totalScore !== undefined && (obj.totalScore = message.totalScore);
        message.volume !== undefined && (obj.volume = message.volume);
        message.makerVolume !== undefined && (obj.makerVolume = message.makerVolume);
        message.takerVolume !== undefined && (obj.takerVolume = message.takerVolume);
        message.reward !== undefined && (obj.reward = message.reward);
        message.rewardPercentage !== undefined && (obj.rewardPercentage = message.rewardPercentage);
        message.qualifies !== undefined && (obj.qualifies = message.qualifies);
        message.volumePercentage !== undefined && (obj.volumePercentage = message.volumePercentage);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.EpochScore.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
        const message = createBaseEpochScore();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.accountAddress = (_b = object.accountAddress) !== null && _b !== void 0 ? _b : "";
        message.height = (_c = object.height) !== null && _c !== void 0 ? _c : "0";
        message.blockTime = (_d = object.blockTime) !== null && _d !== void 0 ? _d : undefined;
        message.startHeight = (_e = object.startHeight) !== null && _e !== void 0 ? _e : "0";
        message.depth = (_f = object.depth) !== null && _f !== void 0 ? _f : "";
        message.liquidityScore = (_g = object.liquidityScore) !== null && _g !== void 0 ? _g : "";
        message.liquidityScorePonderated = (_h = object.liquidityScorePonderated) !== null && _h !== void 0 ? _h : "";
        message.uptimeScore = (_j = object.uptimeScore) !== null && _j !== void 0 ? _j : "";
        message.uptimeScorePonderated = (_k = object.uptimeScorePonderated) !== null && _k !== void 0 ? _k : "";
        message.uptimePercentage = (_l = object.uptimePercentage) !== null && _l !== void 0 ? _l : "";
        message.volumeScore = (_m = object.volumeScore) !== null && _m !== void 0 ? _m : "";
        message.volumeScorePonderated = (_o = object.volumeScorePonderated) !== null && _o !== void 0 ? _o : "";
        message.totalScore = (_p = object.totalScore) !== null && _p !== void 0 ? _p : "";
        message.volume = (_q = object.volume) !== null && _q !== void 0 ? _q : "";
        message.makerVolume = (_r = object.makerVolume) !== null && _r !== void 0 ? _r : "";
        message.takerVolume = (_s = object.takerVolume) !== null && _s !== void 0 ? _s : "";
        message.reward = (_t = object.reward) !== null && _t !== void 0 ? _t : "";
        message.rewardPercentage = (_u = object.rewardPercentage) !== null && _u !== void 0 ? _u : "";
        message.qualifies = (_v = object.qualifies) !== null && _v !== void 0 ? _v : false;
        message.volumePercentage = (_w = object.volumePercentage) !== null && _w !== void 0 ? _w : "";
        message.createdAt = (_x = object.createdAt) !== null && _x !== void 0 ? _x : undefined;
        message.updatedAt = (_y = object.updatedAt) !== null && _y !== void 0 ? _y : undefined;
        return message;
    },
};
function createBaseMarketReward() {
    return {
        epochId: "",
        marketId: "",
        height: "0",
        reward: "",
        rewardPercentage: "",
        liquidity: "",
        startDate: undefined,
        endDate: undefined,
        totalScore: "",
        createdAt: undefined,
        updatedAt: undefined,
    };
}
exports.MarketReward = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.height !== "0") {
            writer.uint32(96).int64(message.height);
        }
        if (message.reward !== "") {
            writer.uint32(26).string(message.reward);
        }
        if (message.rewardPercentage !== "") {
            writer.uint32(34).string(message.rewardPercentage);
        }
        if (message.liquidity !== "") {
            writer.uint32(106).string(message.liquidity);
        }
        if (message.startDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startDate), writer.uint32(42).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.endDate), writer.uint32(50).fork()).ldelim();
        }
        if (message.totalScore !== "") {
            writer.uint32(74).string(message.totalScore);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(82).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 12:
                    if (tag != 96) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.reward = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.rewardPercentage = reader.string();
                    continue;
                case 13:
                    if (tag != 106) {
                        break;
                    }
                    message.liquidity = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.startDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.endDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.totalScore = reader.string();
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 11:
                    if (tag != 90) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            reward: isSet(object.reward) ? String(object.reward) : "",
            rewardPercentage: isSet(object.rewardPercentage) ? String(object.rewardPercentage) : "",
            liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
            startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
            endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
            totalScore: isSet(object.totalScore) ? String(object.totalScore) : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.height !== undefined && (obj.height = message.height);
        message.reward !== undefined && (obj.reward = message.reward);
        message.rewardPercentage !== undefined && (obj.rewardPercentage = message.rewardPercentage);
        message.liquidity !== undefined && (obj.liquidity = message.liquidity);
        message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
        message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
        message.totalScore !== undefined && (obj.totalScore = message.totalScore);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.MarketReward.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseMarketReward();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.height = (_c = object.height) !== null && _c !== void 0 ? _c : "0";
        message.reward = (_d = object.reward) !== null && _d !== void 0 ? _d : "";
        message.rewardPercentage = (_e = object.rewardPercentage) !== null && _e !== void 0 ? _e : "";
        message.liquidity = (_f = object.liquidity) !== null && _f !== void 0 ? _f : "";
        message.startDate = (_g = object.startDate) !== null && _g !== void 0 ? _g : undefined;
        message.endDate = (_h = object.endDate) !== null && _h !== void 0 ? _h : undefined;
        message.totalScore = (_j = object.totalScore) !== null && _j !== void 0 ? _j : "";
        message.createdAt = (_k = object.createdAt) !== null && _k !== void 0 ? _k : undefined;
        message.updatedAt = (_l = object.updatedAt) !== null && _l !== void 0 ? _l : undefined;
        return message;
    },
};
function createBaseEligibleAddress() {
    return { epochId: "", accountAddress: "", height: "0", source: "", createdAt: undefined, updatedAt: undefined };
}
exports.EligibleAddress = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        if (message.height !== "0") {
            writer.uint32(24).int64(message.height);
        }
        if (message.source !== "") {
            writer.uint32(34).string(message.source);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEligibleAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.source = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            source: isSet(object.source) ? String(object.source) : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.height !== undefined && (obj.height = message.height);
        message.source !== undefined && (obj.source = message.source);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.EligibleAddress.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseEligibleAddress();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.accountAddress = (_b = object.accountAddress) !== null && _b !== void 0 ? _b : "";
        message.height = (_c = object.height) !== null && _c !== void 0 ? _c : "0";
        message.source = (_d = object.source) !== null && _d !== void 0 ? _d : "";
        message.createdAt = (_e = object.createdAt) !== null && _e !== void 0 ? _e : undefined;
        message.updatedAt = (_f = object.updatedAt) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
};
function createBaseRewardDistribution() {
    return {
        epochId: "",
        accountAddress: "",
        height: "0",
        startHeight: "0",
        blockTime: undefined,
        depth: "",
        reward: "",
        createdAt: undefined,
        updatedAt: undefined,
    };
}
exports.RewardDistribution = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        if (message.height !== "0") {
            writer.uint32(24).int64(message.height);
        }
        if (message.startHeight !== "0") {
            writer.uint32(32).int64(message.startHeight);
        }
        if (message.blockTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.depth !== "") {
            writer.uint32(50).string(message.depth);
        }
        if (message.reward !== "") {
            writer.uint32(58).string(message.reward);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardDistribution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.startHeight = longToString(reader.int64());
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.blockTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.depth = reader.string();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.reward = reader.string();
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            startHeight: isSet(object.startHeight) ? String(object.startHeight) : "0",
            blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
            depth: isSet(object.depth) ? String(object.depth) : "",
            reward: isSet(object.reward) ? String(object.reward) : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.height !== undefined && (obj.height = message.height);
        message.startHeight !== undefined && (obj.startHeight = message.startHeight);
        message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
        message.depth !== undefined && (obj.depth = message.depth);
        message.reward !== undefined && (obj.reward = message.reward);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.RewardDistribution.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseRewardDistribution();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.accountAddress = (_b = object.accountAddress) !== null && _b !== void 0 ? _b : "";
        message.height = (_c = object.height) !== null && _c !== void 0 ? _c : "0";
        message.startHeight = (_d = object.startHeight) !== null && _d !== void 0 ? _d : "0";
        message.blockTime = (_e = object.blockTime) !== null && _e !== void 0 ? _e : undefined;
        message.depth = (_f = object.depth) !== null && _f !== void 0 ? _f : "";
        message.reward = (_g = object.reward) !== null && _g !== void 0 ? _g : "";
        message.createdAt = (_h = object.createdAt) !== null && _h !== void 0 ? _h : undefined;
        message.updatedAt = (_j = object.updatedAt) !== null && _j !== void 0 ? _j : undefined;
        return message;
    },
};
function createBaseAccountVolume() {
    return {
        epochId: "",
        accountAddress: "",
        height: "0",
        blockTime: undefined,
        date: "",
        dateTimestamp: undefined,
        volume: "",
        takerVolume: "",
        makerVolume: "",
        volumePercentage: "",
        makerVolumePercentage: "",
        takerVolumePercentage: "",
        dailyVolume: "",
        dailyMakerVolume: "",
        dailyTakerVolume: "",
        dailyVolumePercentage: "",
        dailyMakerVolumePercentage: "",
        dailyTakerVolumePercentage: "",
        createdAt: undefined,
        updatedAt: undefined,
    };
}
exports.AccountVolume = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        if (message.height !== "0") {
            writer.uint32(24).int64(message.height);
        }
        if (message.blockTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.date !== "") {
            writer.uint32(50).string(message.date);
        }
        if (message.dateTimestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.dateTimestamp), writer.uint32(122).fork()).ldelim();
        }
        if (message.volume !== "") {
            writer.uint32(58).string(message.volume);
        }
        if (message.takerVolume !== "") {
            writer.uint32(66).string(message.takerVolume);
        }
        if (message.makerVolume !== "") {
            writer.uint32(74).string(message.makerVolume);
        }
        if (message.volumePercentage !== "") {
            writer.uint32(82).string(message.volumePercentage);
        }
        if (message.makerVolumePercentage !== "") {
            writer.uint32(90).string(message.makerVolumePercentage);
        }
        if (message.takerVolumePercentage !== "") {
            writer.uint32(98).string(message.takerVolumePercentage);
        }
        if (message.dailyVolume !== "") {
            writer.uint32(130).string(message.dailyVolume);
        }
        if (message.dailyMakerVolume !== "") {
            writer.uint32(138).string(message.dailyMakerVolume);
        }
        if (message.dailyTakerVolume !== "") {
            writer.uint32(146).string(message.dailyTakerVolume);
        }
        if (message.dailyVolumePercentage !== "") {
            writer.uint32(154).string(message.dailyVolumePercentage);
        }
        if (message.dailyMakerVolumePercentage !== "") {
            writer.uint32(162).string(message.dailyMakerVolumePercentage);
        }
        if (message.dailyTakerVolumePercentage !== "") {
            writer.uint32(170).string(message.dailyTakerVolumePercentage);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(106).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountVolume();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.blockTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.date = reader.string();
                    continue;
                case 15:
                    if (tag != 122) {
                        break;
                    }
                    message.dateTimestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.volume = reader.string();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.takerVolume = reader.string();
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.makerVolume = reader.string();
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.volumePercentage = reader.string();
                    continue;
                case 11:
                    if (tag != 90) {
                        break;
                    }
                    message.makerVolumePercentage = reader.string();
                    continue;
                case 12:
                    if (tag != 98) {
                        break;
                    }
                    message.takerVolumePercentage = reader.string();
                    continue;
                case 16:
                    if (tag != 130) {
                        break;
                    }
                    message.dailyVolume = reader.string();
                    continue;
                case 17:
                    if (tag != 138) {
                        break;
                    }
                    message.dailyMakerVolume = reader.string();
                    continue;
                case 18:
                    if (tag != 146) {
                        break;
                    }
                    message.dailyTakerVolume = reader.string();
                    continue;
                case 19:
                    if (tag != 154) {
                        break;
                    }
                    message.dailyVolumePercentage = reader.string();
                    continue;
                case 20:
                    if (tag != 162) {
                        break;
                    }
                    message.dailyMakerVolumePercentage = reader.string();
                    continue;
                case 21:
                    if (tag != 170) {
                        break;
                    }
                    message.dailyTakerVolumePercentage = reader.string();
                    continue;
                case 13:
                    if (tag != 106) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 14:
                    if (tag != 114) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
            date: isSet(object.date) ? String(object.date) : "",
            dateTimestamp: isSet(object.dateTimestamp) ? fromJsonTimestamp(object.dateTimestamp) : undefined,
            volume: isSet(object.volume) ? String(object.volume) : "",
            takerVolume: isSet(object.takerVolume) ? String(object.takerVolume) : "",
            makerVolume: isSet(object.makerVolume) ? String(object.makerVolume) : "",
            volumePercentage: isSet(object.volumePercentage) ? String(object.volumePercentage) : "",
            makerVolumePercentage: isSet(object.makerVolumePercentage) ? String(object.makerVolumePercentage) : "",
            takerVolumePercentage: isSet(object.takerVolumePercentage) ? String(object.takerVolumePercentage) : "",
            dailyVolume: isSet(object.dailyVolume) ? String(object.dailyVolume) : "",
            dailyMakerVolume: isSet(object.dailyMakerVolume) ? String(object.dailyMakerVolume) : "",
            dailyTakerVolume: isSet(object.dailyTakerVolume) ? String(object.dailyTakerVolume) : "",
            dailyVolumePercentage: isSet(object.dailyVolumePercentage) ? String(object.dailyVolumePercentage) : "",
            dailyMakerVolumePercentage: isSet(object.dailyMakerVolumePercentage)
                ? String(object.dailyMakerVolumePercentage)
                : "",
            dailyTakerVolumePercentage: isSet(object.dailyTakerVolumePercentage)
                ? String(object.dailyTakerVolumePercentage)
                : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.height !== undefined && (obj.height = message.height);
        message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
        message.date !== undefined && (obj.date = message.date);
        message.dateTimestamp !== undefined && (obj.dateTimestamp = message.dateTimestamp.toISOString());
        message.volume !== undefined && (obj.volume = message.volume);
        message.takerVolume !== undefined && (obj.takerVolume = message.takerVolume);
        message.makerVolume !== undefined && (obj.makerVolume = message.makerVolume);
        message.volumePercentage !== undefined && (obj.volumePercentage = message.volumePercentage);
        message.makerVolumePercentage !== undefined && (obj.makerVolumePercentage = message.makerVolumePercentage);
        message.takerVolumePercentage !== undefined && (obj.takerVolumePercentage = message.takerVolumePercentage);
        message.dailyVolume !== undefined && (obj.dailyVolume = message.dailyVolume);
        message.dailyMakerVolume !== undefined && (obj.dailyMakerVolume = message.dailyMakerVolume);
        message.dailyTakerVolume !== undefined && (obj.dailyTakerVolume = message.dailyTakerVolume);
        message.dailyVolumePercentage !== undefined && (obj.dailyVolumePercentage = message.dailyVolumePercentage);
        message.dailyMakerVolumePercentage !== undefined &&
            (obj.dailyMakerVolumePercentage = message.dailyMakerVolumePercentage);
        message.dailyTakerVolumePercentage !== undefined &&
            (obj.dailyTakerVolumePercentage = message.dailyTakerVolumePercentage);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.AccountVolume.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        const message = createBaseAccountVolume();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : "";
        message.accountAddress = (_b = object.accountAddress) !== null && _b !== void 0 ? _b : "";
        message.height = (_c = object.height) !== null && _c !== void 0 ? _c : "0";
        message.blockTime = (_d = object.blockTime) !== null && _d !== void 0 ? _d : undefined;
        message.date = (_e = object.date) !== null && _e !== void 0 ? _e : "";
        message.dateTimestamp = (_f = object.dateTimestamp) !== null && _f !== void 0 ? _f : undefined;
        message.volume = (_g = object.volume) !== null && _g !== void 0 ? _g : "";
        message.takerVolume = (_h = object.takerVolume) !== null && _h !== void 0 ? _h : "";
        message.makerVolume = (_j = object.makerVolume) !== null && _j !== void 0 ? _j : "";
        message.volumePercentage = (_k = object.volumePercentage) !== null && _k !== void 0 ? _k : "";
        message.makerVolumePercentage = (_l = object.makerVolumePercentage) !== null && _l !== void 0 ? _l : "";
        message.takerVolumePercentage = (_m = object.takerVolumePercentage) !== null && _m !== void 0 ? _m : "";
        message.dailyVolume = (_o = object.dailyVolume) !== null && _o !== void 0 ? _o : "";
        message.dailyMakerVolume = (_p = object.dailyMakerVolume) !== null && _p !== void 0 ? _p : "";
        message.dailyTakerVolume = (_q = object.dailyTakerVolume) !== null && _q !== void 0 ? _q : "";
        message.dailyVolumePercentage = (_r = object.dailyVolumePercentage) !== null && _r !== void 0 ? _r : "";
        message.dailyMakerVolumePercentage = (_s = object.dailyMakerVolumePercentage) !== null && _s !== void 0 ? _s : "";
        message.dailyTakerVolumePercentage = (_t = object.dailyTakerVolumePercentage) !== null && _t !== void 0 ? _t : "";
        message.createdAt = (_u = object.createdAt) !== null && _u !== void 0 ? _u : undefined;
        message.updatedAt = (_v = object.updatedAt) !== null && _v !== void 0 ? _v : undefined;
        return message;
    },
};
class InjectiveDmmV2RPCClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.GetEpochs = this.GetEpochs.bind(this);
        this.GetLiquiditySnapshots = this.GetLiquiditySnapshots.bind(this);
        this.GetTotalScores = this.GetTotalScores.bind(this);
        this.GetTotalScoresHistory = this.GetTotalScoresHistory.bind(this);
        this.GetEpochScores = this.GetEpochScores.bind(this);
        this.GetEpochScoresHistory = this.GetEpochScoresHistory.bind(this);
        this.GetMarketRewards = this.GetMarketRewards.bind(this);
        this.GetEligibleAddresses = this.GetEligibleAddresses.bind(this);
        this.GetRewardsDistribution = this.GetRewardsDistribution.bind(this);
        this.GetAccountVolumes = this.GetAccountVolumes.bind(this);
        this.GetRewardsEligibility = this.GetRewardsEligibility.bind(this);
    }
    GetEpochs(request, metadata) {
        return this.rpc.unary(exports.InjectiveDmmV2RPCGetEpochsDesc, exports.GetEpochsRequest.fromPartial(request), metadata);
    }
    GetLiquiditySnapshots(request, metadata) {
        return this.rpc.unary(exports.InjectiveDmmV2RPCGetLiquiditySnapshotsDesc, exports.GetLiquiditySnapshotsRequest.fromPartial(request), metadata);
    }
    GetTotalScores(request, metadata) {
        return this.rpc.unary(exports.InjectiveDmmV2RPCGetTotalScoresDesc, exports.GetTotalScoresRequest.fromPartial(request), metadata);
    }
    GetTotalScoresHistory(request, metadata) {
        return this.rpc.unary(exports.InjectiveDmmV2RPCGetTotalScoresHistoryDesc, exports.GetTotalScoresHistoryRequest.fromPartial(request), metadata);
    }
    GetEpochScores(request, metadata) {
        return this.rpc.unary(exports.InjectiveDmmV2RPCGetEpochScoresDesc, exports.GetEpochScoresRequest.fromPartial(request), metadata);
    }
    GetEpochScoresHistory(request, metadata) {
        return this.rpc.unary(exports.InjectiveDmmV2RPCGetEpochScoresHistoryDesc, exports.GetEpochScoresHistoryRequest.fromPartial(request), metadata);
    }
    GetMarketRewards(request, metadata) {
        return this.rpc.unary(exports.InjectiveDmmV2RPCGetMarketRewardsDesc, exports.GetMarketRewardsRequest.fromPartial(request), metadata);
    }
    GetEligibleAddresses(request, metadata) {
        return this.rpc.unary(exports.InjectiveDmmV2RPCGetEligibleAddressesDesc, exports.GetEligibleAddressesRequest.fromPartial(request), metadata);
    }
    GetRewardsDistribution(request, metadata) {
        return this.rpc.unary(exports.InjectiveDmmV2RPCGetRewardsDistributionDesc, exports.GetRewardsDistributionRequest.fromPartial(request), metadata);
    }
    GetAccountVolumes(request, metadata) {
        return this.rpc.unary(exports.InjectiveDmmV2RPCGetAccountVolumesDesc, exports.GetAccountVolumesRequest.fromPartial(request), metadata);
    }
    GetRewardsEligibility(request, metadata) {
        return this.rpc.unary(exports.InjectiveDmmV2RPCGetRewardsEligibilityDesc, exports.GetRewardsEligibilityRequest.fromPartial(request), metadata);
    }
}
exports.InjectiveDmmV2RPCClientImpl = InjectiveDmmV2RPCClientImpl;
exports.InjectiveDmmV2RPCDesc = { serviceName: "injective_dmm_v2_rpc.InjectiveDmmV2RPC" };
exports.InjectiveDmmV2RPCGetEpochsDesc = {
    methodName: "GetEpochs",
    service: exports.InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetEpochsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetEpochsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDmmV2RPCGetLiquiditySnapshotsDesc = {
    methodName: "GetLiquiditySnapshots",
    service: exports.InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetLiquiditySnapshotsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetLiquiditySnapshotsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDmmV2RPCGetTotalScoresDesc = {
    methodName: "GetTotalScores",
    service: exports.InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetTotalScoresRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetTotalScoresResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDmmV2RPCGetTotalScoresHistoryDesc = {
    methodName: "GetTotalScoresHistory",
    service: exports.InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetTotalScoresHistoryRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetTotalScoresHistoryResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDmmV2RPCGetEpochScoresDesc = {
    methodName: "GetEpochScores",
    service: exports.InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetEpochScoresRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetEpochScoresResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDmmV2RPCGetEpochScoresHistoryDesc = {
    methodName: "GetEpochScoresHistory",
    service: exports.InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetEpochScoresHistoryRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetEpochScoresHistoryResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDmmV2RPCGetMarketRewardsDesc = {
    methodName: "GetMarketRewards",
    service: exports.InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetMarketRewardsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetMarketRewardsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDmmV2RPCGetEligibleAddressesDesc = {
    methodName: "GetEligibleAddresses",
    service: exports.InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetEligibleAddressesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetEligibleAddressesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDmmV2RPCGetRewardsDistributionDesc = {
    methodName: "GetRewardsDistribution",
    service: exports.InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetRewardsDistributionRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetRewardsDistributionResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDmmV2RPCGetAccountVolumesDesc = {
    methodName: "GetAccountVolumes",
    service: exports.InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetAccountVolumesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetAccountVolumesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.InjectiveDmmV2RPCGetRewardsEligibilityDesc = {
    methodName: "GetRewardsEligibility",
    service: exports.InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetRewardsEligibilityRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetRewardsEligibilityResponse.decode(data);
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
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1000).toString();
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = Number(t.seconds) * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
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
