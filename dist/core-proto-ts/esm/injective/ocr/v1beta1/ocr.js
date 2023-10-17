/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
function createBaseParams() {
    return { linkDenom: "", payoutBlockInterval: "0", moduleAdmin: "" };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.linkDenom !== "") {
            writer.uint32(10).string(message.linkDenom);
        }
        if (message.payoutBlockInterval !== "0") {
            writer.uint32(16).uint64(message.payoutBlockInterval);
        }
        if (message.moduleAdmin !== "") {
            writer.uint32(26).string(message.moduleAdmin);
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
                    if (tag !== 10) {
                        break;
                    }
                    message.linkDenom = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.payoutBlockInterval = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.moduleAdmin = reader.string();
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
            linkDenom: isSet(object.linkDenom) ? String(object.linkDenom) : "",
            payoutBlockInterval: isSet(object.payoutBlockInterval) ? String(object.payoutBlockInterval) : "0",
            moduleAdmin: isSet(object.moduleAdmin) ? String(object.moduleAdmin) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.linkDenom !== undefined && (obj.linkDenom = message.linkDenom);
        message.payoutBlockInterval !== undefined && (obj.payoutBlockInterval = message.payoutBlockInterval);
        message.moduleAdmin !== undefined && (obj.moduleAdmin = message.moduleAdmin);
        return obj;
    },
    create(base) {
        return Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseParams();
        message.linkDenom = (_a = object.linkDenom) !== null && _a !== void 0 ? _a : "";
        message.payoutBlockInterval = (_b = object.payoutBlockInterval) !== null && _b !== void 0 ? _b : "0";
        message.moduleAdmin = (_c = object.moduleAdmin) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseFeedConfig() {
    return {
        signers: [],
        transmitters: [],
        f: 0,
        onchainConfig: new Uint8Array(),
        offchainConfigVersion: "0",
        offchainConfig: new Uint8Array(),
        moduleParams: undefined,
    };
}
export const FeedConfig = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.signers) {
            writer.uint32(10).string(v);
        }
        for (const v of message.transmitters) {
            writer.uint32(18).string(v);
        }
        if (message.f !== 0) {
            writer.uint32(24).uint32(message.f);
        }
        if (message.onchainConfig.length !== 0) {
            writer.uint32(34).bytes(message.onchainConfig);
        }
        if (message.offchainConfigVersion !== "0") {
            writer.uint32(40).uint64(message.offchainConfigVersion);
        }
        if (message.offchainConfig.length !== 0) {
            writer.uint32(50).bytes(message.offchainConfig);
        }
        if (message.moduleParams !== undefined) {
            ModuleParams.encode(message.moduleParams, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeedConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.signers.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.transmitters.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.f = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.onchainConfig = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.offchainConfigVersion = longToString(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.offchainConfig = reader.bytes();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.moduleParams = ModuleParams.decode(reader, reader.uint32());
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
            signers: Array.isArray(object === null || object === void 0 ? void 0 : object.signers) ? object.signers.map((e) => String(e)) : [],
            transmitters: Array.isArray(object === null || object === void 0 ? void 0 : object.transmitters) ? object.transmitters.map((e) => String(e)) : [],
            f: isSet(object.f) ? Number(object.f) : 0,
            onchainConfig: isSet(object.onchainConfig) ? bytesFromBase64(object.onchainConfig) : new Uint8Array(),
            offchainConfigVersion: isSet(object.offchainConfigVersion) ? String(object.offchainConfigVersion) : "0",
            offchainConfig: isSet(object.offchainConfig) ? bytesFromBase64(object.offchainConfig) : new Uint8Array(),
            moduleParams: isSet(object.moduleParams) ? ModuleParams.fromJSON(object.moduleParams) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
        message.f !== undefined && (obj.f = Math.round(message.f));
        message.onchainConfig !== undefined &&
            (obj.onchainConfig = base64FromBytes(message.onchainConfig !== undefined ? message.onchainConfig : new Uint8Array()));
        message.offchainConfigVersion !== undefined && (obj.offchainConfigVersion = message.offchainConfigVersion);
        message.offchainConfig !== undefined &&
            (obj.offchainConfig = base64FromBytes(message.offchainConfig !== undefined ? message.offchainConfig : new Uint8Array()));
        message.moduleParams !== undefined &&
            (obj.moduleParams = message.moduleParams ? ModuleParams.toJSON(message.moduleParams) : undefined);
        return obj;
    },
    create(base) {
        return FeedConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseFeedConfig();
        message.signers = ((_a = object.signers) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.transmitters = ((_b = object.transmitters) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.f = (_c = object.f) !== null && _c !== void 0 ? _c : 0;
        message.onchainConfig = (_d = object.onchainConfig) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.offchainConfigVersion = (_e = object.offchainConfigVersion) !== null && _e !== void 0 ? _e : "0";
        message.offchainConfig = (_f = object.offchainConfig) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.moduleParams = (object.moduleParams !== undefined && object.moduleParams !== null)
            ? ModuleParams.fromPartial(object.moduleParams)
            : undefined;
        return message;
    },
};
function createBaseFeedConfigInfo() {
    return { latestConfigDigest: new Uint8Array(), f: 0, n: 0, configCount: "0", latestConfigBlockNumber: "0" };
}
export const FeedConfigInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.latestConfigDigest.length !== 0) {
            writer.uint32(10).bytes(message.latestConfigDigest);
        }
        if (message.f !== 0) {
            writer.uint32(16).uint32(message.f);
        }
        if (message.n !== 0) {
            writer.uint32(24).uint32(message.n);
        }
        if (message.configCount !== "0") {
            writer.uint32(32).uint64(message.configCount);
        }
        if (message.latestConfigBlockNumber !== "0") {
            writer.uint32(40).int64(message.latestConfigBlockNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeedConfigInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.latestConfigDigest = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.f = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.n = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.configCount = longToString(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.latestConfigBlockNumber = longToString(reader.int64());
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
            latestConfigDigest: isSet(object.latestConfigDigest)
                ? bytesFromBase64(object.latestConfigDigest)
                : new Uint8Array(),
            f: isSet(object.f) ? Number(object.f) : 0,
            n: isSet(object.n) ? Number(object.n) : 0,
            configCount: isSet(object.configCount) ? String(object.configCount) : "0",
            latestConfigBlockNumber: isSet(object.latestConfigBlockNumber) ? String(object.latestConfigBlockNumber) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.latestConfigDigest !== undefined &&
            (obj.latestConfigDigest = base64FromBytes(message.latestConfigDigest !== undefined ? message.latestConfigDigest : new Uint8Array()));
        message.f !== undefined && (obj.f = Math.round(message.f));
        message.n !== undefined && (obj.n = Math.round(message.n));
        message.configCount !== undefined && (obj.configCount = message.configCount);
        message.latestConfigBlockNumber !== undefined && (obj.latestConfigBlockNumber = message.latestConfigBlockNumber);
        return obj;
    },
    create(base) {
        return FeedConfigInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseFeedConfigInfo();
        message.latestConfigDigest = (_a = object.latestConfigDigest) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.f = (_b = object.f) !== null && _b !== void 0 ? _b : 0;
        message.n = (_c = object.n) !== null && _c !== void 0 ? _c : 0;
        message.configCount = (_d = object.configCount) !== null && _d !== void 0 ? _d : "0";
        message.latestConfigBlockNumber = (_e = object.latestConfigBlockNumber) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
function createBaseModuleParams() {
    return {
        feedId: "",
        minAnswer: "",
        maxAnswer: "",
        linkPerObservation: "",
        linkPerTransmission: "",
        linkDenom: "",
        uniqueReports: false,
        description: "",
        feedAdmin: "",
        billingAdmin: "",
    };
}
export const ModuleParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.minAnswer !== "") {
            writer.uint32(18).string(message.minAnswer);
        }
        if (message.maxAnswer !== "") {
            writer.uint32(26).string(message.maxAnswer);
        }
        if (message.linkPerObservation !== "") {
            writer.uint32(34).string(message.linkPerObservation);
        }
        if (message.linkPerTransmission !== "") {
            writer.uint32(42).string(message.linkPerTransmission);
        }
        if (message.linkDenom !== "") {
            writer.uint32(50).string(message.linkDenom);
        }
        if (message.uniqueReports === true) {
            writer.uint32(56).bool(message.uniqueReports);
        }
        if (message.description !== "") {
            writer.uint32(66).string(message.description);
        }
        if (message.feedAdmin !== "") {
            writer.uint32(74).string(message.feedAdmin);
        }
        if (message.billingAdmin !== "") {
            writer.uint32(82).string(message.billingAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleParams();
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
                    message.minAnswer = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.maxAnswer = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.linkPerObservation = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.linkPerTransmission = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.linkDenom = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.uniqueReports = reader.bool();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.feedAdmin = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
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
            feedId: isSet(object.feedId) ? String(object.feedId) : "",
            minAnswer: isSet(object.minAnswer) ? String(object.minAnswer) : "",
            maxAnswer: isSet(object.maxAnswer) ? String(object.maxAnswer) : "",
            linkPerObservation: isSet(object.linkPerObservation) ? String(object.linkPerObservation) : "",
            linkPerTransmission: isSet(object.linkPerTransmission) ? String(object.linkPerTransmission) : "",
            linkDenom: isSet(object.linkDenom) ? String(object.linkDenom) : "",
            uniqueReports: isSet(object.uniqueReports) ? Boolean(object.uniqueReports) : false,
            description: isSet(object.description) ? String(object.description) : "",
            feedAdmin: isSet(object.feedAdmin) ? String(object.feedAdmin) : "",
            billingAdmin: isSet(object.billingAdmin) ? String(object.billingAdmin) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        message.minAnswer !== undefined && (obj.minAnswer = message.minAnswer);
        message.maxAnswer !== undefined && (obj.maxAnswer = message.maxAnswer);
        message.linkPerObservation !== undefined && (obj.linkPerObservation = message.linkPerObservation);
        message.linkPerTransmission !== undefined && (obj.linkPerTransmission = message.linkPerTransmission);
        message.linkDenom !== undefined && (obj.linkDenom = message.linkDenom);
        message.uniqueReports !== undefined && (obj.uniqueReports = message.uniqueReports);
        message.description !== undefined && (obj.description = message.description);
        message.feedAdmin !== undefined && (obj.feedAdmin = message.feedAdmin);
        message.billingAdmin !== undefined && (obj.billingAdmin = message.billingAdmin);
        return obj;
    },
    create(base) {
        return ModuleParams.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseModuleParams();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        message.minAnswer = (_b = object.minAnswer) !== null && _b !== void 0 ? _b : "";
        message.maxAnswer = (_c = object.maxAnswer) !== null && _c !== void 0 ? _c : "";
        message.linkPerObservation = (_d = object.linkPerObservation) !== null && _d !== void 0 ? _d : "";
        message.linkPerTransmission = (_e = object.linkPerTransmission) !== null && _e !== void 0 ? _e : "";
        message.linkDenom = (_f = object.linkDenom) !== null && _f !== void 0 ? _f : "";
        message.uniqueReports = (_g = object.uniqueReports) !== null && _g !== void 0 ? _g : false;
        message.description = (_h = object.description) !== null && _h !== void 0 ? _h : "";
        message.feedAdmin = (_j = object.feedAdmin) !== null && _j !== void 0 ? _j : "";
        message.billingAdmin = (_k = object.billingAdmin) !== null && _k !== void 0 ? _k : "";
        return message;
    },
};
function createBaseContractConfig() {
    return {
        configCount: "0",
        signers: [],
        transmitters: [],
        f: 0,
        onchainConfig: new Uint8Array(),
        offchainConfigVersion: "0",
        offchainConfig: new Uint8Array(),
    };
}
export const ContractConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.configCount !== "0") {
            writer.uint32(8).uint64(message.configCount);
        }
        for (const v of message.signers) {
            writer.uint32(18).string(v);
        }
        for (const v of message.transmitters) {
            writer.uint32(26).string(v);
        }
        if (message.f !== 0) {
            writer.uint32(32).uint32(message.f);
        }
        if (message.onchainConfig.length !== 0) {
            writer.uint32(42).bytes(message.onchainConfig);
        }
        if (message.offchainConfigVersion !== "0") {
            writer.uint32(48).uint64(message.offchainConfigVersion);
        }
        if (message.offchainConfig.length !== 0) {
            writer.uint32(58).bytes(message.offchainConfig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.configCount = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.signers.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.transmitters.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.f = reader.uint32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.onchainConfig = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.offchainConfigVersion = longToString(reader.uint64());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.offchainConfig = reader.bytes();
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
            configCount: isSet(object.configCount) ? String(object.configCount) : "0",
            signers: Array.isArray(object === null || object === void 0 ? void 0 : object.signers) ? object.signers.map((e) => String(e)) : [],
            transmitters: Array.isArray(object === null || object === void 0 ? void 0 : object.transmitters) ? object.transmitters.map((e) => String(e)) : [],
            f: isSet(object.f) ? Number(object.f) : 0,
            onchainConfig: isSet(object.onchainConfig) ? bytesFromBase64(object.onchainConfig) : new Uint8Array(),
            offchainConfigVersion: isSet(object.offchainConfigVersion) ? String(object.offchainConfigVersion) : "0",
            offchainConfig: isSet(object.offchainConfig) ? bytesFromBase64(object.offchainConfig) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.configCount !== undefined && (obj.configCount = message.configCount);
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
        message.f !== undefined && (obj.f = Math.round(message.f));
        message.onchainConfig !== undefined &&
            (obj.onchainConfig = base64FromBytes(message.onchainConfig !== undefined ? message.onchainConfig : new Uint8Array()));
        message.offchainConfigVersion !== undefined && (obj.offchainConfigVersion = message.offchainConfigVersion);
        message.offchainConfig !== undefined &&
            (obj.offchainConfig = base64FromBytes(message.offchainConfig !== undefined ? message.offchainConfig : new Uint8Array()));
        return obj;
    },
    create(base) {
        return ContractConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseContractConfig();
        message.configCount = (_a = object.configCount) !== null && _a !== void 0 ? _a : "0";
        message.signers = ((_b = object.signers) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.transmitters = ((_c = object.transmitters) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.f = (_d = object.f) !== null && _d !== void 0 ? _d : 0;
        message.onchainConfig = (_e = object.onchainConfig) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.offchainConfigVersion = (_f = object.offchainConfigVersion) !== null && _f !== void 0 ? _f : "0";
        message.offchainConfig = (_g = object.offchainConfig) !== null && _g !== void 0 ? _g : new Uint8Array();
        return message;
    },
};
function createBaseSetConfigProposal() {
    return { title: "", description: "", config: undefined };
}
export const SetConfigProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.config !== undefined) {
            FeedConfig.encode(message.config, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetConfigProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            config: isSet(object.config) ? FeedConfig.fromJSON(object.config) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.config !== undefined && (obj.config = message.config ? FeedConfig.toJSON(message.config) : undefined);
        return obj;
    },
    create(base) {
        return SetConfigProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSetConfigProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.config = (object.config !== undefined && object.config !== null)
            ? FeedConfig.fromPartial(object.config)
            : undefined;
        return message;
    },
};
function createBaseFeedProperties() {
    return {
        feedId: "",
        f: 0,
        onchainConfig: new Uint8Array(),
        offchainConfigVersion: "0",
        offchainConfig: new Uint8Array(),
        minAnswer: "",
        maxAnswer: "",
        linkPerObservation: "",
        linkPerTransmission: "",
        uniqueReports: false,
        description: "",
    };
}
export const FeedProperties = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.f !== 0) {
            writer.uint32(16).uint32(message.f);
        }
        if (message.onchainConfig.length !== 0) {
            writer.uint32(26).bytes(message.onchainConfig);
        }
        if (message.offchainConfigVersion !== "0") {
            writer.uint32(32).uint64(message.offchainConfigVersion);
        }
        if (message.offchainConfig.length !== 0) {
            writer.uint32(42).bytes(message.offchainConfig);
        }
        if (message.minAnswer !== "") {
            writer.uint32(50).string(message.minAnswer);
        }
        if (message.maxAnswer !== "") {
            writer.uint32(58).string(message.maxAnswer);
        }
        if (message.linkPerObservation !== "") {
            writer.uint32(66).string(message.linkPerObservation);
        }
        if (message.linkPerTransmission !== "") {
            writer.uint32(74).string(message.linkPerTransmission);
        }
        if (message.uniqueReports === true) {
            writer.uint32(80).bool(message.uniqueReports);
        }
        if (message.description !== "") {
            writer.uint32(90).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeedProperties();
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
                    message.f = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.onchainConfig = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.offchainConfigVersion = longToString(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.offchainConfig = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.minAnswer = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.maxAnswer = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.linkPerObservation = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.linkPerTransmission = reader.string();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.uniqueReports = reader.bool();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.description = reader.string();
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
            f: isSet(object.f) ? Number(object.f) : 0,
            onchainConfig: isSet(object.onchainConfig) ? bytesFromBase64(object.onchainConfig) : new Uint8Array(),
            offchainConfigVersion: isSet(object.offchainConfigVersion) ? String(object.offchainConfigVersion) : "0",
            offchainConfig: isSet(object.offchainConfig) ? bytesFromBase64(object.offchainConfig) : new Uint8Array(),
            minAnswer: isSet(object.minAnswer) ? String(object.minAnswer) : "",
            maxAnswer: isSet(object.maxAnswer) ? String(object.maxAnswer) : "",
            linkPerObservation: isSet(object.linkPerObservation) ? String(object.linkPerObservation) : "",
            linkPerTransmission: isSet(object.linkPerTransmission) ? String(object.linkPerTransmission) : "",
            uniqueReports: isSet(object.uniqueReports) ? Boolean(object.uniqueReports) : false,
            description: isSet(object.description) ? String(object.description) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        message.f !== undefined && (obj.f = Math.round(message.f));
        message.onchainConfig !== undefined &&
            (obj.onchainConfig = base64FromBytes(message.onchainConfig !== undefined ? message.onchainConfig : new Uint8Array()));
        message.offchainConfigVersion !== undefined && (obj.offchainConfigVersion = message.offchainConfigVersion);
        message.offchainConfig !== undefined &&
            (obj.offchainConfig = base64FromBytes(message.offchainConfig !== undefined ? message.offchainConfig : new Uint8Array()));
        message.minAnswer !== undefined && (obj.minAnswer = message.minAnswer);
        message.maxAnswer !== undefined && (obj.maxAnswer = message.maxAnswer);
        message.linkPerObservation !== undefined && (obj.linkPerObservation = message.linkPerObservation);
        message.linkPerTransmission !== undefined && (obj.linkPerTransmission = message.linkPerTransmission);
        message.uniqueReports !== undefined && (obj.uniqueReports = message.uniqueReports);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },
    create(base) {
        return FeedProperties.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseFeedProperties();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        message.f = (_b = object.f) !== null && _b !== void 0 ? _b : 0;
        message.onchainConfig = (_c = object.onchainConfig) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.offchainConfigVersion = (_d = object.offchainConfigVersion) !== null && _d !== void 0 ? _d : "0";
        message.offchainConfig = (_e = object.offchainConfig) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.minAnswer = (_f = object.minAnswer) !== null && _f !== void 0 ? _f : "";
        message.maxAnswer = (_g = object.maxAnswer) !== null && _g !== void 0 ? _g : "";
        message.linkPerObservation = (_h = object.linkPerObservation) !== null && _h !== void 0 ? _h : "";
        message.linkPerTransmission = (_j = object.linkPerTransmission) !== null && _j !== void 0 ? _j : "";
        message.uniqueReports = (_k = object.uniqueReports) !== null && _k !== void 0 ? _k : false;
        message.description = (_l = object.description) !== null && _l !== void 0 ? _l : "";
        return message;
    },
};
function createBaseSetBatchConfigProposal() {
    return { title: "", description: "", signers: [], transmitters: [], linkDenom: "", feedProperties: [] };
}
export const SetBatchConfigProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.signers) {
            writer.uint32(26).string(v);
        }
        for (const v of message.transmitters) {
            writer.uint32(34).string(v);
        }
        if (message.linkDenom !== "") {
            writer.uint32(42).string(message.linkDenom);
        }
        for (const v of message.feedProperties) {
            FeedProperties.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetBatchConfigProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
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
                    message.linkDenom = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.feedProperties.push(FeedProperties.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            signers: Array.isArray(object === null || object === void 0 ? void 0 : object.signers) ? object.signers.map((e) => String(e)) : [],
            transmitters: Array.isArray(object === null || object === void 0 ? void 0 : object.transmitters) ? object.transmitters.map((e) => String(e)) : [],
            linkDenom: isSet(object.linkDenom) ? String(object.linkDenom) : "",
            feedProperties: Array.isArray(object === null || object === void 0 ? void 0 : object.feedProperties)
                ? object.feedProperties.map((e) => FeedProperties.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
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
        message.linkDenom !== undefined && (obj.linkDenom = message.linkDenom);
        if (message.feedProperties) {
            obj.feedProperties = message.feedProperties.map((e) => e ? FeedProperties.toJSON(e) : undefined);
        }
        else {
            obj.feedProperties = [];
        }
        return obj;
    },
    create(base) {
        return SetBatchConfigProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseSetBatchConfigProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.signers = ((_c = object.signers) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.transmitters = ((_d = object.transmitters) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.linkDenom = (_e = object.linkDenom) !== null && _e !== void 0 ? _e : "";
        message.feedProperties = ((_f = object.feedProperties) === null || _f === void 0 ? void 0 : _f.map((e) => FeedProperties.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOracleObservationsCounts() {
    return { counts: [] };
}
export const OracleObservationsCounts = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.counts) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOracleObservationsCounts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        message.counts.push(reader.uint32());
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.counts.push(reader.uint32());
                        }
                        continue;
                    }
                    break;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { counts: Array.isArray(object === null || object === void 0 ? void 0 : object.counts) ? object.counts.map((e) => Number(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.counts) {
            obj.counts = message.counts.map((e) => Math.round(e));
        }
        else {
            obj.counts = [];
        }
        return obj;
    },
    create(base) {
        return OracleObservationsCounts.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOracleObservationsCounts();
        message.counts = ((_a = object.counts) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseGasReimbursements() {
    return { reimbursements: [] };
}
export const GasReimbursements = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.reimbursements) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGasReimbursements();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.reimbursements.push(Coin.decode(reader, reader.uint32()));
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
            reimbursements: Array.isArray(object === null || object === void 0 ? void 0 : object.reimbursements)
                ? object.reimbursements.map((e) => Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.reimbursements) {
            obj.reimbursements = message.reimbursements.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.reimbursements = [];
        }
        return obj;
    },
    create(base) {
        return GasReimbursements.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGasReimbursements();
        message.reimbursements = ((_a = object.reimbursements) === null || _a === void 0 ? void 0 : _a.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBasePayee() {
    return { transmitterAddr: "", paymentAddr: "" };
}
export const Payee = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.transmitterAddr !== "") {
            writer.uint32(10).string(message.transmitterAddr);
        }
        if (message.paymentAddr !== "") {
            writer.uint32(18).string(message.paymentAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePayee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.transmitterAddr = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.paymentAddr = reader.string();
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
            transmitterAddr: isSet(object.transmitterAddr) ? String(object.transmitterAddr) : "",
            paymentAddr: isSet(object.paymentAddr) ? String(object.paymentAddr) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.transmitterAddr !== undefined && (obj.transmitterAddr = message.transmitterAddr);
        message.paymentAddr !== undefined && (obj.paymentAddr = message.paymentAddr);
        return obj;
    },
    create(base) {
        return Payee.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePayee();
        message.transmitterAddr = (_a = object.transmitterAddr) !== null && _a !== void 0 ? _a : "";
        message.paymentAddr = (_b = object.paymentAddr) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTransmission() {
    return { answer: "", observationsTimestamp: "0", transmissionTimestamp: "0" };
}
export const Transmission = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.answer !== "") {
            writer.uint32(10).string(message.answer);
        }
        if (message.observationsTimestamp !== "0") {
            writer.uint32(16).int64(message.observationsTimestamp);
        }
        if (message.transmissionTimestamp !== "0") {
            writer.uint32(24).int64(message.transmissionTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransmission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.answer = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.observationsTimestamp = longToString(reader.int64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.transmissionTimestamp = longToString(reader.int64());
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
            answer: isSet(object.answer) ? String(object.answer) : "",
            observationsTimestamp: isSet(object.observationsTimestamp) ? String(object.observationsTimestamp) : "0",
            transmissionTimestamp: isSet(object.transmissionTimestamp) ? String(object.transmissionTimestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.answer !== undefined && (obj.answer = message.answer);
        message.observationsTimestamp !== undefined && (obj.observationsTimestamp = message.observationsTimestamp);
        message.transmissionTimestamp !== undefined && (obj.transmissionTimestamp = message.transmissionTimestamp);
        return obj;
    },
    create(base) {
        return Transmission.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTransmission();
        message.answer = (_a = object.answer) !== null && _a !== void 0 ? _a : "";
        message.observationsTimestamp = (_b = object.observationsTimestamp) !== null && _b !== void 0 ? _b : "0";
        message.transmissionTimestamp = (_c = object.transmissionTimestamp) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseEpochAndRound() {
    return { epoch: "0", round: "0" };
}
export const EpochAndRound = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epoch !== "0") {
            writer.uint32(8).uint64(message.epoch);
        }
        if (message.round !== "0") {
            writer.uint32(16).uint64(message.round);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochAndRound();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.epoch = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
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
            epoch: isSet(object.epoch) ? String(object.epoch) : "0",
            round: isSet(object.round) ? String(object.round) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.epoch !== undefined && (obj.epoch = message.epoch);
        message.round !== undefined && (obj.round = message.round);
        return obj;
    },
    create(base) {
        return EpochAndRound.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEpochAndRound();
        message.epoch = (_a = object.epoch) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseReport() {
    return { observationsTimestamp: "0", observers: new Uint8Array(), observations: [] };
}
export const Report = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.observationsTimestamp !== "0") {
            writer.uint32(8).int64(message.observationsTimestamp);
        }
        if (message.observers.length !== 0) {
            writer.uint32(18).bytes(message.observers);
        }
        for (const v of message.observations) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.observationsTimestamp = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.observers = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.observations.push(reader.string());
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
            observationsTimestamp: isSet(object.observationsTimestamp) ? String(object.observationsTimestamp) : "0",
            observers: isSet(object.observers) ? bytesFromBase64(object.observers) : new Uint8Array(),
            observations: Array.isArray(object === null || object === void 0 ? void 0 : object.observations) ? object.observations.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.observationsTimestamp !== undefined && (obj.observationsTimestamp = message.observationsTimestamp);
        message.observers !== undefined &&
            (obj.observers = base64FromBytes(message.observers !== undefined ? message.observers : new Uint8Array()));
        if (message.observations) {
            obj.observations = message.observations.map((e) => e);
        }
        else {
            obj.observations = [];
        }
        return obj;
    },
    create(base) {
        return Report.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseReport();
        message.observationsTimestamp = (_a = object.observationsTimestamp) !== null && _a !== void 0 ? _a : "0";
        message.observers = (_b = object.observers) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.observations = ((_c = object.observations) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseReportToSign() {
    return {
        configDigest: new Uint8Array(),
        epoch: "0",
        round: "0",
        extraHash: new Uint8Array(),
        report: new Uint8Array(),
    };
}
export const ReportToSign = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.configDigest.length !== 0) {
            writer.uint32(10).bytes(message.configDigest);
        }
        if (message.epoch !== "0") {
            writer.uint32(16).uint64(message.epoch);
        }
        if (message.round !== "0") {
            writer.uint32(24).uint64(message.round);
        }
        if (message.extraHash.length !== 0) {
            writer.uint32(34).bytes(message.extraHash);
        }
        if (message.report.length !== 0) {
            writer.uint32(42).bytes(message.report);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReportToSign();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.epoch = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.round = longToString(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.extraHash = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.report = reader.bytes();
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
            epoch: isSet(object.epoch) ? String(object.epoch) : "0",
            round: isSet(object.round) ? String(object.round) : "0",
            extraHash: isSet(object.extraHash) ? bytesFromBase64(object.extraHash) : new Uint8Array(),
            report: isSet(object.report) ? bytesFromBase64(object.report) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.configDigest !== undefined &&
            (obj.configDigest = base64FromBytes(message.configDigest !== undefined ? message.configDigest : new Uint8Array()));
        message.epoch !== undefined && (obj.epoch = message.epoch);
        message.round !== undefined && (obj.round = message.round);
        message.extraHash !== undefined &&
            (obj.extraHash = base64FromBytes(message.extraHash !== undefined ? message.extraHash : new Uint8Array()));
        message.report !== undefined &&
            (obj.report = base64FromBytes(message.report !== undefined ? message.report : new Uint8Array()));
        return obj;
    },
    create(base) {
        return ReportToSign.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseReportToSign();
        message.configDigest = (_a = object.configDigest) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.epoch = (_b = object.epoch) !== null && _b !== void 0 ? _b : "0";
        message.round = (_c = object.round) !== null && _c !== void 0 ? _c : "0";
        message.extraHash = (_d = object.extraHash) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.report = (_e = object.report) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    },
};
function createBaseEventOraclePaid() {
    return { transmitterAddr: "", payeeAddr: "", amount: undefined };
}
export const EventOraclePaid = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.transmitterAddr !== "") {
            writer.uint32(10).string(message.transmitterAddr);
        }
        if (message.payeeAddr !== "") {
            writer.uint32(18).string(message.payeeAddr);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOraclePaid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.transmitterAddr = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.payeeAddr = reader.string();
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
            transmitterAddr: isSet(object.transmitterAddr) ? String(object.transmitterAddr) : "",
            payeeAddr: isSet(object.payeeAddr) ? String(object.payeeAddr) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.transmitterAddr !== undefined && (obj.transmitterAddr = message.transmitterAddr);
        message.payeeAddr !== undefined && (obj.payeeAddr = message.payeeAddr);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return EventOraclePaid.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventOraclePaid();
        message.transmitterAddr = (_a = object.transmitterAddr) !== null && _a !== void 0 ? _a : "";
        message.payeeAddr = (_b = object.payeeAddr) !== null && _b !== void 0 ? _b : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseEventAnswerUpdated() {
    return { current: "", roundId: "", updatedAt: undefined };
}
export const EventAnswerUpdated = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.current !== "") {
            writer.uint32(10).string(message.current);
        }
        if (message.roundId !== "") {
            writer.uint32(18).string(message.roundId);
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAnswerUpdated();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.current = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.roundId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            current: isSet(object.current) ? String(object.current) : "",
            roundId: isSet(object.roundId) ? String(object.roundId) : "",
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.current !== undefined && (obj.current = message.current);
        message.roundId !== undefined && (obj.roundId = message.roundId);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return EventAnswerUpdated.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEventAnswerUpdated();
        message.current = (_a = object.current) !== null && _a !== void 0 ? _a : "";
        message.roundId = (_b = object.roundId) !== null && _b !== void 0 ? _b : "";
        message.updatedAt = (_c = object.updatedAt) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseEventNewRound() {
    return { roundId: "", startedBy: "", startedAt: undefined };
}
export const EventNewRound = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.roundId !== "") {
            writer.uint32(10).string(message.roundId);
        }
        if (message.startedBy !== "") {
            writer.uint32(18).string(message.startedBy);
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventNewRound();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.roundId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.startedBy = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            roundId: isSet(object.roundId) ? String(object.roundId) : "",
            startedBy: isSet(object.startedBy) ? String(object.startedBy) : "",
            startedAt: isSet(object.startedAt) ? fromJsonTimestamp(object.startedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.roundId !== undefined && (obj.roundId = message.roundId);
        message.startedBy !== undefined && (obj.startedBy = message.startedBy);
        message.startedAt !== undefined && (obj.startedAt = message.startedAt.toISOString());
        return obj;
    },
    create(base) {
        return EventNewRound.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEventNewRound();
        message.roundId = (_a = object.roundId) !== null && _a !== void 0 ? _a : "";
        message.startedBy = (_b = object.startedBy) !== null && _b !== void 0 ? _b : "";
        message.startedAt = (_c = object.startedAt) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseEventTransmitted() {
    return { configDigest: new Uint8Array(), epoch: "0" };
}
export const EventTransmitted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.configDigest.length !== 0) {
            writer.uint32(10).bytes(message.configDigest);
        }
        if (message.epoch !== "0") {
            writer.uint32(16).uint64(message.epoch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTransmitted();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.epoch = longToString(reader.uint64());
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
            epoch: isSet(object.epoch) ? String(object.epoch) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.configDigest !== undefined &&
            (obj.configDigest = base64FromBytes(message.configDigest !== undefined ? message.configDigest : new Uint8Array()));
        message.epoch !== undefined && (obj.epoch = message.epoch);
        return obj;
    },
    create(base) {
        return EventTransmitted.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventTransmitted();
        message.configDigest = (_a = object.configDigest) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.epoch = (_b = object.epoch) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseEventNewTransmission() {
    return {
        feedId: "",
        aggregatorRoundId: 0,
        answer: "",
        transmitter: "",
        observationsTimestamp: "0",
        observations: [],
        observers: new Uint8Array(),
        configDigest: new Uint8Array(),
        epochAndRound: undefined,
    };
}
export const EventNewTransmission = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.aggregatorRoundId !== 0) {
            writer.uint32(16).uint32(message.aggregatorRoundId);
        }
        if (message.answer !== "") {
            writer.uint32(26).string(message.answer);
        }
        if (message.transmitter !== "") {
            writer.uint32(34).string(message.transmitter);
        }
        if (message.observationsTimestamp !== "0") {
            writer.uint32(40).int64(message.observationsTimestamp);
        }
        for (const v of message.observations) {
            writer.uint32(50).string(v);
        }
        if (message.observers.length !== 0) {
            writer.uint32(58).bytes(message.observers);
        }
        if (message.configDigest.length !== 0) {
            writer.uint32(66).bytes(message.configDigest);
        }
        if (message.epochAndRound !== undefined) {
            EpochAndRound.encode(message.epochAndRound, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventNewTransmission();
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
                    message.aggregatorRoundId = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.answer = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.transmitter = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.observationsTimestamp = longToString(reader.int64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.observations.push(reader.string());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.observers = reader.bytes();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.configDigest = reader.bytes();
                    continue;
                case 9:
                    if (tag !== 74) {
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
            aggregatorRoundId: isSet(object.aggregatorRoundId) ? Number(object.aggregatorRoundId) : 0,
            answer: isSet(object.answer) ? String(object.answer) : "",
            transmitter: isSet(object.transmitter) ? String(object.transmitter) : "",
            observationsTimestamp: isSet(object.observationsTimestamp) ? String(object.observationsTimestamp) : "0",
            observations: Array.isArray(object === null || object === void 0 ? void 0 : object.observations) ? object.observations.map((e) => String(e)) : [],
            observers: isSet(object.observers) ? bytesFromBase64(object.observers) : new Uint8Array(),
            configDigest: isSet(object.configDigest) ? bytesFromBase64(object.configDigest) : new Uint8Array(),
            epochAndRound: isSet(object.epochAndRound) ? EpochAndRound.fromJSON(object.epochAndRound) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.feedId !== undefined && (obj.feedId = message.feedId);
        message.aggregatorRoundId !== undefined && (obj.aggregatorRoundId = Math.round(message.aggregatorRoundId));
        message.answer !== undefined && (obj.answer = message.answer);
        message.transmitter !== undefined && (obj.transmitter = message.transmitter);
        message.observationsTimestamp !== undefined && (obj.observationsTimestamp = message.observationsTimestamp);
        if (message.observations) {
            obj.observations = message.observations.map((e) => e);
        }
        else {
            obj.observations = [];
        }
        message.observers !== undefined &&
            (obj.observers = base64FromBytes(message.observers !== undefined ? message.observers : new Uint8Array()));
        message.configDigest !== undefined &&
            (obj.configDigest = base64FromBytes(message.configDigest !== undefined ? message.configDigest : new Uint8Array()));
        message.epochAndRound !== undefined &&
            (obj.epochAndRound = message.epochAndRound ? EpochAndRound.toJSON(message.epochAndRound) : undefined);
        return obj;
    },
    create(base) {
        return EventNewTransmission.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseEventNewTransmission();
        message.feedId = (_a = object.feedId) !== null && _a !== void 0 ? _a : "";
        message.aggregatorRoundId = (_b = object.aggregatorRoundId) !== null && _b !== void 0 ? _b : 0;
        message.answer = (_c = object.answer) !== null && _c !== void 0 ? _c : "";
        message.transmitter = (_d = object.transmitter) !== null && _d !== void 0 ? _d : "";
        message.observationsTimestamp = (_e = object.observationsTimestamp) !== null && _e !== void 0 ? _e : "0";
        message.observations = ((_f = object.observations) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.observers = (_g = object.observers) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.configDigest = (_h = object.configDigest) !== null && _h !== void 0 ? _h : new Uint8Array();
        message.epochAndRound = (object.epochAndRound !== undefined && object.epochAndRound !== null)
            ? EpochAndRound.fromPartial(object.epochAndRound)
            : undefined;
        return message;
    },
};
function createBaseEventConfigSet() {
    return { configDigest: new Uint8Array(), previousConfigBlockNumber: "0", config: undefined, configInfo: undefined };
}
export const EventConfigSet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.configDigest.length !== 0) {
            writer.uint32(10).bytes(message.configDigest);
        }
        if (message.previousConfigBlockNumber !== "0") {
            writer.uint32(16).int64(message.previousConfigBlockNumber);
        }
        if (message.config !== undefined) {
            FeedConfig.encode(message.config, writer.uint32(26).fork()).ldelim();
        }
        if (message.configInfo !== undefined) {
            FeedConfigInfo.encode(message.configInfo, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventConfigSet();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.previousConfigBlockNumber = longToString(reader.int64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.config = FeedConfig.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.configInfo = FeedConfigInfo.decode(reader, reader.uint32());
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
            previousConfigBlockNumber: isSet(object.previousConfigBlockNumber)
                ? String(object.previousConfigBlockNumber)
                : "0",
            config: isSet(object.config) ? FeedConfig.fromJSON(object.config) : undefined,
            configInfo: isSet(object.configInfo) ? FeedConfigInfo.fromJSON(object.configInfo) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.configDigest !== undefined &&
            (obj.configDigest = base64FromBytes(message.configDigest !== undefined ? message.configDigest : new Uint8Array()));
        message.previousConfigBlockNumber !== undefined &&
            (obj.previousConfigBlockNumber = message.previousConfigBlockNumber);
        message.config !== undefined && (obj.config = message.config ? FeedConfig.toJSON(message.config) : undefined);
        message.configInfo !== undefined &&
            (obj.configInfo = message.configInfo ? FeedConfigInfo.toJSON(message.configInfo) : undefined);
        return obj;
    },
    create(base) {
        return EventConfigSet.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventConfigSet();
        message.configDigest = (_a = object.configDigest) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.previousConfigBlockNumber = (_b = object.previousConfigBlockNumber) !== null && _b !== void 0 ? _b : "0";
        message.config = (object.config !== undefined && object.config !== null)
            ? FeedConfig.fromPartial(object.config)
            : undefined;
        message.configInfo = (object.configInfo !== undefined && object.configInfo !== null)
            ? FeedConfigInfo.fromPartial(object.configInfo)
            : undefined;
        return message;
    },
};
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
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1000).toString();
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (Number(t.seconds) || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
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
        return fromTimestamp(Timestamp.fromJSON(o));
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
