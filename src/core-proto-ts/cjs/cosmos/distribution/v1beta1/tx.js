"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.MsgCommunityPoolSpendDesc = exports.MsgUpdateParamsDesc = exports.MsgFundCommunityPoolDesc = exports.MsgWithdrawValidatorCommissionDesc = exports.MsgWithdrawDelegatorRewardDesc = exports.MsgSetWithdrawAddressDesc = exports.MsgDesc = exports.MsgClientImpl = exports.MsgCommunityPoolSpendResponse = exports.MsgCommunityPoolSpend = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgFundCommunityPoolResponse = exports.MsgFundCommunityPool = exports.MsgWithdrawValidatorCommissionResponse = exports.MsgWithdrawValidatorCommission = exports.MsgWithdrawDelegatorRewardResponse = exports.MsgWithdrawDelegatorReward = exports.MsgSetWithdrawAddressResponse = exports.MsgSetWithdrawAddress = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../base/v1beta1/coin");
const distribution_1 = require("./distribution");
function createBaseMsgSetWithdrawAddress() {
    return { delegatorAddress: "", withdrawAddress: "" };
}
exports.MsgSetWithdrawAddress = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.withdrawAddress !== "") {
            writer.uint32(18).string(message.withdrawAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetWithdrawAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.delegatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.withdrawAddress = reader.string();
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
        return obj;
    },
    create(base) {
        return exports.MsgSetWithdrawAddress.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgSetWithdrawAddress();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.withdrawAddress = (_b = object.withdrawAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgSetWithdrawAddressResponse() {
    return {};
}
exports.MsgSetWithdrawAddressResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetWithdrawAddressResponse();
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
        return exports.MsgSetWithdrawAddressResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgSetWithdrawAddressResponse();
        return message;
    },
};
function createBaseMsgWithdrawDelegatorReward() {
    return { delegatorAddress: "", validatorAddress: "" };
}
exports.MsgWithdrawDelegatorReward = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDelegatorReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.delegatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.validatorAddress = reader.string();
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    create(base) {
        return exports.MsgWithdrawDelegatorReward.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgWithdrawDelegatorReward();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgWithdrawDelegatorRewardResponse() {
    return { amount: [] };
}
exports.MsgWithdrawDelegatorRewardResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDelegatorRewardResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        return { amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgWithdrawDelegatorRewardResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgWithdrawDelegatorRewardResponse();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgWithdrawValidatorCommission() {
    return { validatorAddress: "" };
}
exports.MsgWithdrawValidatorCommission = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawValidatorCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validatorAddress = reader.string();
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
        return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    create(base) {
        return exports.MsgWithdrawValidatorCommission.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgWithdrawValidatorCommission();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgWithdrawValidatorCommissionResponse() {
    return { amount: [] };
}
exports.MsgWithdrawValidatorCommissionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawValidatorCommissionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        return { amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgWithdrawValidatorCommissionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgWithdrawValidatorCommissionResponse();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgFundCommunityPool() {
    return { amount: [], depositor: "" };
}
exports.MsgFundCommunityPool = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundCommunityPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.depositor = reader.string();
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
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.depositor !== undefined && (obj.depositor = message.depositor);
        return obj;
    },
    create(base) {
        return exports.MsgFundCommunityPool.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgFundCommunityPool();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.depositor = (_b = object.depositor) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgFundCommunityPoolResponse() {
    return {};
}
exports.MsgFundCommunityPoolResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundCommunityPoolResponse();
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
        return exports.MsgFundCommunityPoolResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgFundCommunityPoolResponse();
        return message;
    },
};
function createBaseMsgUpdateParams() {
    return { authority: "", params: undefined };
}
exports.MsgUpdateParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            distribution_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authority = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.params = distribution_1.Params.decode(reader, reader.uint32());
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            params: isSet(object.params) ? distribution_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? distribution_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgUpdateParams.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgUpdateParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = (object.params !== undefined && object.params !== null)
            ? distribution_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        return exports.MsgUpdateParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};
function createBaseMsgCommunityPoolSpend() {
    return { authority: "", recipient: "", amount: [] };
}
exports.MsgCommunityPoolSpend = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.recipient !== "") {
            writer.uint32(18).string(message.recipient);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCommunityPoolSpend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authority = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.recipient = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        if (message.amount) {
            obj.amount = message.amount.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgCommunityPoolSpend.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgCommunityPoolSpend();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.recipient = (_b = object.recipient) !== null && _b !== void 0 ? _b : "";
        message.amount = ((_c = object.amount) === null || _c === void 0 ? void 0 : _c.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgCommunityPoolSpendResponse() {
    return {};
}
exports.MsgCommunityPoolSpendResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCommunityPoolSpendResponse();
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
        return exports.MsgCommunityPoolSpendResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCommunityPoolSpendResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.SetWithdrawAddress = this.SetWithdrawAddress.bind(this);
        this.WithdrawDelegatorReward = this.WithdrawDelegatorReward.bind(this);
        this.WithdrawValidatorCommission = this.WithdrawValidatorCommission.bind(this);
        this.FundCommunityPool = this.FundCommunityPool.bind(this);
        this.UpdateParams = this.UpdateParams.bind(this);
        this.CommunityPoolSpend = this.CommunityPoolSpend.bind(this);
    }
    SetWithdrawAddress(request, metadata) {
        return this.rpc.unary(exports.MsgSetWithdrawAddressDesc, exports.MsgSetWithdrawAddress.fromPartial(request), metadata);
    }
    WithdrawDelegatorReward(request, metadata) {
        return this.rpc.unary(exports.MsgWithdrawDelegatorRewardDesc, exports.MsgWithdrawDelegatorReward.fromPartial(request), metadata);
    }
    WithdrawValidatorCommission(request, metadata) {
        return this.rpc.unary(exports.MsgWithdrawValidatorCommissionDesc, exports.MsgWithdrawValidatorCommission.fromPartial(request), metadata);
    }
    FundCommunityPool(request, metadata) {
        return this.rpc.unary(exports.MsgFundCommunityPoolDesc, exports.MsgFundCommunityPool.fromPartial(request), metadata);
    }
    UpdateParams(request, metadata) {
        return this.rpc.unary(exports.MsgUpdateParamsDesc, exports.MsgUpdateParams.fromPartial(request), metadata);
    }
    CommunityPoolSpend(request, metadata) {
        return this.rpc.unary(exports.MsgCommunityPoolSpendDesc, exports.MsgCommunityPoolSpend.fromPartial(request), metadata);
    }
}
exports.MsgClientImpl = MsgClientImpl;
exports.MsgDesc = { serviceName: "cosmos.distribution.v1beta1.Msg" };
exports.MsgSetWithdrawAddressDesc = {
    methodName: "SetWithdrawAddress",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgSetWithdrawAddress.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgSetWithdrawAddressResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgWithdrawDelegatorRewardDesc = {
    methodName: "WithdrawDelegatorReward",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgWithdrawDelegatorReward.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgWithdrawDelegatorRewardResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgWithdrawValidatorCommissionDesc = {
    methodName: "WithdrawValidatorCommission",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgWithdrawValidatorCommission.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgWithdrawValidatorCommissionResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgFundCommunityPoolDesc = {
    methodName: "FundCommunityPool",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgFundCommunityPool.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgFundCommunityPoolResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgUpdateParamsDesc = {
    methodName: "UpdateParams",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgUpdateParams.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgUpdateParamsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MsgCommunityPoolSpendDesc = {
    methodName: "CommunityPoolSpend",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgCommunityPoolSpend.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.MsgCommunityPoolSpendResponse.decode(data);
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
