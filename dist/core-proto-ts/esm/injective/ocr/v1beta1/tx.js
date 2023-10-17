/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { FeedConfig, Params, Report } from "./ocr";
function createBaseMsgCreateFeed() {
    return { sender: "", config: undefined };
}
export const MsgCreateFeed = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.config !== undefined) {
            FeedConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateFeed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.config = FeedConfig.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            config: isSet(object.config) ? FeedConfig.fromJSON(object.config) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.config !== undefined && (obj.config = message.config ? FeedConfig.toJSON(message.config) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateFeed.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateFeed();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.config = (object.config !== undefined && object.config !== null)
            ? FeedConfig.fromPartial(object.config)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateFeedResponse() {
    return {};
}
export const MsgCreateFeedResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateFeedResponse();
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
        return MsgCreateFeedResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateFeedResponse();
        return message;
    },
};
function createBaseMsgUpdateFeed() {
    return {
        sender: "",
        feedId: "",
        signers: [],
        transmitters: [],
        linkPerObservation: "",
        linkPerTransmission: "",
        linkDenom: "",
        feedAdmin: "",
        billingAdmin: "",
    };
}
export const MsgUpdateFeed = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.feedId !== "") {
            writer.uint32(18).string(message.feedId);
        }
        for (const v of message.signers) {
            writer.uint32(26).string(v);
        }
        for (const v of message.transmitters) {
            writer.uint32(34).string(v);
        }
        if (message.linkPerObservation !== "") {
            writer.uint32(42).string(message.linkPerObservation);
        }
        if (message.linkPerTransmission !== "") {
            writer.uint32(50).string(message.linkPerTransmission);
        }
        if (message.linkDenom !== "") {
            writer.uint32(58).string(message.linkDenom);
        }
        if (message.feedAdmin !== "") {
            writer.uint32(66).string(message.feedAdmin);
        }
        if (message.billingAdmin !== "") {
            writer.uint32(74).string(message.billingAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateFeed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.feedId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.signers.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.transmitters.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.linkPerObservation = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.linkPerTransmission = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.linkDenom = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.feedAdmin = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.billingAdmin = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            feedId: isSet(object.feedId) ? String(object.feedId) : "",
            signers: Array.isArray(object === null || object === void 0 ? void 0 : object.signers) ? object.signers.map((e) => String(e)) : [],
            transmitters: Array.isArray(object === null || object === void 0 ? void 0 : object.transmitters) ? object.transmitters.map((e) => String(e)) : [],
            linkPerObservation: isSet(object.linkPerObservation) ? String(object.linkPerObservation) : "",
            linkPerTransmission: isSet(object.linkPerTransmission) ? String(object.linkPerTransmission) : "",
            linkDenom: isSet(object.linkDenom) ? String(object.linkDenom) : "",
            feedAdmin: isSet(object.feedAdmin) ? String(object.feedAdmin) : "",
            billingAdmin: isSet(object.billingAdmin) ? String(object.billingAdmin) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.feedId !== undefined && (obj.feedId = message.feedId);
        if (message.signers) {
            obj.signers = message.signers.map((e) => e);
        }
        else {
            obj.signers = [];
        }
        if (message.transmitters) {
            obj.transmitters = message.transmitters.map((e) => e);
        }
        else {
            obj.transmitters = [];
        }
        message.linkPerObservation !== undefined && (obj.linkPerObservation = message.linkPerObservation);
        message.linkPerTransmission !== undefined && (obj.linkPerTransmission = message.linkPerTransmission);
        message.linkDenom !== undefined && (obj.linkDenom = message.linkDenom);
        message.feedAdmin !== undefined && (obj.feedAdmin = message.feedAdmin);
        message.billingAdmin !== undefined && (obj.billingAdmin = message.billingAdmin);
        return obj;
    },
    create(base) {
        return MsgUpdateFeed.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseMsgUpdateFeed();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.feedId = (_b = object.feedId) !== null && _b !== void 0 ? _b : "";
        message.signers = ((_c = object.signers) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.transmitters = ((_d = object.transmitters) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.linkPerObservation = (_e = object.linkPerObservation) !== null && _e !== void 0 ? _e : "";
        message.linkPerTransmission = (_f = object.linkPerTransmission) !== null && _f !== void 0 ? _f : "";
        message.linkDenom = (_g = object.linkDenom) !== null && _g !== void 0 ? _g : "";
        message.feedAdmin = (_h = object.feedAdmin) !== null && _h !== void 0 ? _h : "";
        message.billingAdmin = (_j = object.billingAdmin) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
function createBaseMsgUpdateFeedResponse() {
    return {};
}
export const MsgUpdateFeedResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateFeedResponse();
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
        return MsgUpdateFeedResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateFeedResponse();
        return message;
    },
};
function createBaseMsgTransmit() {
    return {
        transmitter: "",
        configDigest: new Uint8Array(),
        feedId: "",
        epoch: "0",
        round: "0",
        extraHash: new Uint8Array(),
        report: undefined,
        signatures: [],
    };
}
export const MsgTransmit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.transmitter !== "") {
            writer.uint32(10).string(message.transmitter);
        }
        if (message.configDigest.length !== 0) {
            writer.uint32(18).bytes(message.configDigest);
        }
        if (message.feedId !== "") {
            writer.uint32(26).string(message.feedId);
        }
        if (message.epoch !== "0") {
            writer.uint32(32).uint64(message.epoch);
        }
        if (message.round !== "0") {
            writer.uint32(40).uint64(message.round);
        }
        if (message.extraHash.length !== 0) {
            writer.uint32(50).bytes(message.extraHash);
        }
        if (message.report !== undefined) {
            Report.encode(message.report, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.signatures) {
            writer.uint32(66).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransmit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.transmitter = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.configDigest = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.feedId = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.epoch = longToString(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.round = longToString(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.extraHash = reader.bytes();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.report = Report.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.signatures.push(reader.bytes());
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
            transmitter: isSet(object.transmitter) ? String(object.transmitter) : "",
            configDigest: isSet(object.configDigest) ? bytesFromBase64(object.configDigest) : new Uint8Array(),
            feedId: isSet(object.feedId) ? String(object.feedId) : "",
            epoch: isSet(object.epoch) ? String(object.epoch) : "0",
            round: isSet(object.round) ? String(object.round) : "0",
            extraHash: isSet(object.extraHash) ? bytesFromBase64(object.extraHash) : new Uint8Array(),
            report: isSet(object.report) ? Report.fromJSON(object.report) : undefined,
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map((e) => bytesFromBase64(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.transmitter !== undefined && (obj.transmitter = message.transmitter);
        message.configDigest !== undefined &&
            (obj.configDigest = base64FromBytes(message.configDigest !== undefined ? message.configDigest : new Uint8Array()));
        message.feedId !== undefined && (obj.feedId = message.feedId);
        message.epoch !== undefined && (obj.epoch = message.epoch);
        message.round !== undefined && (obj.round = message.round);
        message.extraHash !== undefined &&
            (obj.extraHash = base64FromBytes(message.extraHash !== undefined ? message.extraHash : new Uint8Array()));
        message.report !== undefined && (obj.report = message.report ? Report.toJSON(message.report) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    create(base) {
        return MsgTransmit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseMsgTransmit();
        message.transmitter = (_a = object.transmitter) !== null && _a !== void 0 ? _a : "";
        message.configDigest = (_b = object.configDigest) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.feedId = (_c = object.feedId) !== null && _c !== void 0 ? _c : "";
        message.epoch = (_d = object.epoch) !== null && _d !== void 0 ? _d : "0";
        message.round = (_e = object.round) !== null && _e !== void 0 ? _e : "0";
        message.extraHash = (_f = object.extraHash) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.report = (object.report !== undefined && object.report !== null)
            ? Report.fromPartial(object.report)
            : undefined;
        message.signatures = ((_g = object.signatures) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgTransmitResponse() {
    return {};
}
export const MsgTransmitResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransmitResponse();
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
        return MsgTransmitResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgTransmitResponse();
        return message;
    },
};
function createBaseMsgFundFeedRewardPool() {
    return { sender: "", feedId: "", amount: undefined };
}
export const MsgFundFeedRewardPool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.feedId !== "") {
            writer.uint32(18).string(message.feedId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundFeedRewardPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.feedId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            feedId: isSet(object.feedId) ? String(object.feedId) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.feedId !== undefined && (obj.feedId = message.feedId);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return MsgFundFeedRewardPool.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgFundFeedRewardPool();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.feedId = (_b = object.feedId) !== null && _b !== void 0 ? _b : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgFundFeedRewardPoolResponse() {
    return {};
}
export const MsgFundFeedRewardPoolResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundFeedRewardPoolResponse();
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
        return MsgFundFeedRewardPoolResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgFundFeedRewardPoolResponse();
        return message;
    },
};
function createBaseMsgWithdrawFeedRewardPool() {
    return { sender: "", feedId: "", amount: undefined };
}
export const MsgWithdrawFeedRewardPool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.feedId !== "") {
            writer.uint32(18).string(message.feedId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawFeedRewardPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.feedId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            feedId: isSet(object.feedId) ? String(object.feedId) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.feedId !== undefined && (obj.feedId = message.feedId);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return MsgWithdrawFeedRewardPool.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgWithdrawFeedRewardPool();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.feedId = (_b = object.feedId) !== null && _b !== void 0 ? _b : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgWithdrawFeedRewardPoolResponse() {
    return {};
}
export const MsgWithdrawFeedRewardPoolResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawFeedRewardPoolResponse();
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
        return MsgWithdrawFeedRewardPoolResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawFeedRewardPoolResponse();
        return message;
    },
};
function createBaseMsgSetPayees() {
    return { sender: "", feedId: "", transmitters: [], payees: [] };
}
export const MsgSetPayees = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.feedId !== "") {
            writer.uint32(18).string(message.feedId);
        }
        for (const v of message.transmitters) {
            writer.uint32(26).string(v);
        }
        for (const v of message.payees) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetPayees();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.feedId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.transmitters.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.payees.push(reader.string());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            feedId: isSet(object.feedId) ? String(object.feedId) : "",
            transmitters: Array.isArray(object === null || object === void 0 ? void 0 : object.transmitters) ? object.transmitters.map((e) => String(e)) : [],
            payees: Array.isArray(object === null || object === void 0 ? void 0 : object.payees) ? object.payees.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.feedId !== undefined && (obj.feedId = message.feedId);
        if (message.transmitters) {
            obj.transmitters = message.transmitters.map((e) => e);
        }
        else {
            obj.transmitters = [];
        }
        if (message.payees) {
            obj.payees = message.payees.map((e) => e);
        }
        else {
            obj.payees = [];
        }
        return obj;
    },
    create(base) {
        return MsgSetPayees.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgSetPayees();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.feedId = (_b = object.feedId) !== null && _b !== void 0 ? _b : "";
        message.transmitters = ((_c = object.transmitters) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.payees = ((_d = object.payees) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgSetPayeesResponse() {
    return {};
}
export const MsgSetPayeesResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetPayeesResponse();
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
        return MsgSetPayeesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgSetPayeesResponse();
        return message;
    },
};
function createBaseMsgTransferPayeeship() {
    return { sender: "", transmitter: "", feedId: "", proposed: "" };
}
export const MsgTransferPayeeship = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.transmitter !== "") {
            writer.uint32(18).string(message.transmitter);
        }
        if (message.feedId !== "") {
            writer.uint32(26).string(message.feedId);
        }
        if (message.proposed !== "") {
            writer.uint32(34).string(message.proposed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferPayeeship();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
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
                    message.feedId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proposed = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            transmitter: isSet(object.transmitter) ? String(object.transmitter) : "",
            feedId: isSet(object.feedId) ? String(object.feedId) : "",
            proposed: isSet(object.proposed) ? String(object.proposed) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.transmitter !== undefined && (obj.transmitter = message.transmitter);
        message.feedId !== undefined && (obj.feedId = message.feedId);
        message.proposed !== undefined && (obj.proposed = message.proposed);
        return obj;
    },
    create(base) {
        return MsgTransferPayeeship.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgTransferPayeeship();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.transmitter = (_b = object.transmitter) !== null && _b !== void 0 ? _b : "";
        message.feedId = (_c = object.feedId) !== null && _c !== void 0 ? _c : "";
        message.proposed = (_d = object.proposed) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgTransferPayeeshipResponse() {
    return {};
}
export const MsgTransferPayeeshipResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferPayeeshipResponse();
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
        return MsgTransferPayeeshipResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgTransferPayeeshipResponse();
        return message;
    },
};
function createBaseMsgAcceptPayeeship() {
    return { payee: "", transmitter: "", feedId: "" };
}
export const MsgAcceptPayeeship = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payee !== "") {
            writer.uint32(10).string(message.payee);
        }
        if (message.transmitter !== "") {
            writer.uint32(18).string(message.transmitter);
        }
        if (message.feedId !== "") {
            writer.uint32(26).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcceptPayeeship();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.payee = reader.string();
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
        return {
            payee: isSet(object.payee) ? String(object.payee) : "",
            transmitter: isSet(object.transmitter) ? String(object.transmitter) : "",
            feedId: isSet(object.feedId) ? String(object.feedId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.payee !== undefined && (obj.payee = message.payee);
        message.transmitter !== undefined && (obj.transmitter = message.transmitter);
        message.feedId !== undefined && (obj.feedId = message.feedId);
        return obj;
    },
    create(base) {
        return MsgAcceptPayeeship.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgAcceptPayeeship();
        message.payee = (_a = object.payee) !== null && _a !== void 0 ? _a : "";
        message.transmitter = (_b = object.transmitter) !== null && _b !== void 0 ? _b : "";
        message.feedId = (_c = object.feedId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgAcceptPayeeshipResponse() {
    return {};
}
export const MsgAcceptPayeeshipResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcceptPayeeshipResponse();
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
        return MsgAcceptPayeeshipResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgAcceptPayeeshipResponse();
        return message;
    },
};
function createBaseMsgUpdateParams() {
    return { authority: "", params: undefined };
}
export const MsgUpdateParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return {
            authority: isSet(object.authority) ? String(object.authority) : "",
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return MsgUpdateParams.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgUpdateParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return MsgUpdateParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateFeed = this.CreateFeed.bind(this);
        this.UpdateFeed = this.UpdateFeed.bind(this);
        this.Transmit = this.Transmit.bind(this);
        this.FundFeedRewardPool = this.FundFeedRewardPool.bind(this);
        this.WithdrawFeedRewardPool = this.WithdrawFeedRewardPool.bind(this);
        this.SetPayees = this.SetPayees.bind(this);
        this.TransferPayeeship = this.TransferPayeeship.bind(this);
        this.AcceptPayeeship = this.AcceptPayeeship.bind(this);
        this.UpdateParams = this.UpdateParams.bind(this);
    }
    CreateFeed(request, metadata) {
        return this.rpc.unary(MsgCreateFeedDesc, MsgCreateFeed.fromPartial(request), metadata);
    }
    UpdateFeed(request, metadata) {
        return this.rpc.unary(MsgUpdateFeedDesc, MsgUpdateFeed.fromPartial(request), metadata);
    }
    Transmit(request, metadata) {
        return this.rpc.unary(MsgTransmitDesc, MsgTransmit.fromPartial(request), metadata);
    }
    FundFeedRewardPool(request, metadata) {
        return this.rpc.unary(MsgFundFeedRewardPoolDesc, MsgFundFeedRewardPool.fromPartial(request), metadata);
    }
    WithdrawFeedRewardPool(request, metadata) {
        return this.rpc.unary(MsgWithdrawFeedRewardPoolDesc, MsgWithdrawFeedRewardPool.fromPartial(request), metadata);
    }
    SetPayees(request, metadata) {
        return this.rpc.unary(MsgSetPayeesDesc, MsgSetPayees.fromPartial(request), metadata);
    }
    TransferPayeeship(request, metadata) {
        return this.rpc.unary(MsgTransferPayeeshipDesc, MsgTransferPayeeship.fromPartial(request), metadata);
    }
    AcceptPayeeship(request, metadata) {
        return this.rpc.unary(MsgAcceptPayeeshipDesc, MsgAcceptPayeeship.fromPartial(request), metadata);
    }
    UpdateParams(request, metadata) {
        return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request), metadata);
    }
}
export const MsgDesc = { serviceName: "injective.ocr.v1beta1.Msg" };
export const MsgCreateFeedDesc = {
    methodName: "CreateFeed",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgCreateFeed.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgCreateFeedResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgUpdateFeedDesc = {
    methodName: "UpdateFeed",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgUpdateFeed.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgUpdateFeedResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgTransmitDesc = {
    methodName: "Transmit",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgTransmit.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgTransmitResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgFundFeedRewardPoolDesc = {
    methodName: "FundFeedRewardPool",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgFundFeedRewardPool.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgFundFeedRewardPoolResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgWithdrawFeedRewardPoolDesc = {
    methodName: "WithdrawFeedRewardPool",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgWithdrawFeedRewardPool.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgWithdrawFeedRewardPoolResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgSetPayeesDesc = {
    methodName: "SetPayees",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgSetPayees.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgSetPayeesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgTransferPayeeshipDesc = {
    methodName: "TransferPayeeship",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgTransferPayeeship.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgTransferPayeeshipResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgAcceptPayeeshipDesc = {
    methodName: "AcceptPayeeship",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgAcceptPayeeship.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgAcceptPayeeshipResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MsgUpdateParamsDesc = {
    methodName: "UpdateParams",
    service: MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MsgUpdateParams.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MsgUpdateParamsResponse.decode(data);
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
