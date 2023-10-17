"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchStoreCodeProposal = exports.ContractRegistrationRequest = exports.BatchContractDeregistrationProposal = exports.BatchContractRegistrationRequestProposal = exports.ContractRegistrationRequestProposal = exports.fundingModeToJSON = exports.fundingModeFromJSON = exports.FundingMode = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const proposal_1 = require("../../../cosmwasm/wasm/v1/proposal");
var FundingMode;
(function (FundingMode) {
    FundingMode[FundingMode["Unspecified"] = 0] = "Unspecified";
    FundingMode[FundingMode["SelfFunded"] = 1] = "SelfFunded";
    FundingMode[FundingMode["GrantOnly"] = 2] = "GrantOnly";
    FundingMode[FundingMode["Dual"] = 3] = "Dual";
    FundingMode[FundingMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FundingMode = exports.FundingMode || (exports.FundingMode = {}));
function fundingModeFromJSON(object) {
    switch (object) {
        case 0:
        case "Unspecified":
            return FundingMode.Unspecified;
        case 1:
        case "SelfFunded":
            return FundingMode.SelfFunded;
        case 2:
        case "GrantOnly":
            return FundingMode.GrantOnly;
        case 3:
        case "Dual":
            return FundingMode.Dual;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FundingMode.UNRECOGNIZED;
    }
}
exports.fundingModeFromJSON = fundingModeFromJSON;
function fundingModeToJSON(object) {
    switch (object) {
        case FundingMode.Unspecified:
            return "Unspecified";
        case FundingMode.SelfFunded:
            return "SelfFunded";
        case FundingMode.GrantOnly:
            return "GrantOnly";
        case FundingMode.Dual:
            return "Dual";
        case FundingMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fundingModeToJSON = fundingModeToJSON;
function createBaseContractRegistrationRequestProposal() {
    return { title: "", description: "", contractRegistrationRequest: undefined };
}
exports.ContractRegistrationRequestProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contractRegistrationRequest !== undefined) {
            exports.ContractRegistrationRequest.encode(message.contractRegistrationRequest, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractRegistrationRequestProposal();
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
                    message.contractRegistrationRequest = exports.ContractRegistrationRequest.decode(reader, reader.uint32());
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
            contractRegistrationRequest: isSet(object.contractRegistrationRequest)
                ? exports.ContractRegistrationRequest.fromJSON(object.contractRegistrationRequest)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.contractRegistrationRequest !== undefined &&
            (obj.contractRegistrationRequest = message.contractRegistrationRequest
                ? exports.ContractRegistrationRequest.toJSON(message.contractRegistrationRequest)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.ContractRegistrationRequestProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseContractRegistrationRequestProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.contractRegistrationRequest =
            (object.contractRegistrationRequest !== undefined && object.contractRegistrationRequest !== null)
                ? exports.ContractRegistrationRequest.fromPartial(object.contractRegistrationRequest)
                : undefined;
        return message;
    },
};
function createBaseBatchContractRegistrationRequestProposal() {
    return { title: "", description: "", contractRegistrationRequests: [] };
}
exports.BatchContractRegistrationRequestProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.contractRegistrationRequests) {
            exports.ContractRegistrationRequest.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchContractRegistrationRequestProposal();
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
                    message.contractRegistrationRequests.push(exports.ContractRegistrationRequest.decode(reader, reader.uint32()));
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
            contractRegistrationRequests: Array.isArray(object === null || object === void 0 ? void 0 : object.contractRegistrationRequests)
                ? object.contractRegistrationRequests.map((e) => exports.ContractRegistrationRequest.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.contractRegistrationRequests) {
            obj.contractRegistrationRequests = message.contractRegistrationRequests.map((e) => e ? exports.ContractRegistrationRequest.toJSON(e) : undefined);
        }
        else {
            obj.contractRegistrationRequests = [];
        }
        return obj;
    },
    create(base) {
        return exports.BatchContractRegistrationRequestProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseBatchContractRegistrationRequestProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.contractRegistrationRequests =
            ((_c = object.contractRegistrationRequests) === null || _c === void 0 ? void 0 : _c.map((e) => exports.ContractRegistrationRequest.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBatchContractDeregistrationProposal() {
    return { title: "", description: "", contracts: [] };
}
exports.BatchContractDeregistrationProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.contracts) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchContractDeregistrationProposal();
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
                    message.contracts.push(reader.string());
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
            contracts: Array.isArray(object === null || object === void 0 ? void 0 : object.contracts) ? object.contracts.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.contracts) {
            obj.contracts = message.contracts.map((e) => e);
        }
        else {
            obj.contracts = [];
        }
        return obj;
    },
    create(base) {
        return exports.BatchContractDeregistrationProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseBatchContractDeregistrationProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.contracts = ((_c = object.contracts) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseContractRegistrationRequest() {
    return {
        contractAddress: "",
        gasLimit: "0",
        gasPrice: "0",
        shouldPinContract: false,
        isMigrationAllowed: false,
        codeId: "0",
        adminAddress: "",
        granterAddress: "",
        fundingMode: 0,
    };
}
exports.ContractRegistrationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.gasLimit !== "0") {
            writer.uint32(16).uint64(message.gasLimit);
        }
        if (message.gasPrice !== "0") {
            writer.uint32(24).uint64(message.gasPrice);
        }
        if (message.shouldPinContract === true) {
            writer.uint32(32).bool(message.shouldPinContract);
        }
        if (message.isMigrationAllowed === true) {
            writer.uint32(40).bool(message.isMigrationAllowed);
        }
        if (message.codeId !== "0") {
            writer.uint32(48).uint64(message.codeId);
        }
        if (message.adminAddress !== "") {
            writer.uint32(58).string(message.adminAddress);
        }
        if (message.granterAddress !== "") {
            writer.uint32(66).string(message.granterAddress);
        }
        if (message.fundingMode !== 0) {
            writer.uint32(72).int32(message.fundingMode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractRegistrationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.contractAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.gasLimit = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.gasPrice = longToString(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.shouldPinContract = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.isMigrationAllowed = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.codeId = longToString(reader.uint64());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.adminAddress = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.granterAddress = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.fundingMode = reader.int32();
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
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            gasLimit: isSet(object.gasLimit) ? String(object.gasLimit) : "0",
            gasPrice: isSet(object.gasPrice) ? String(object.gasPrice) : "0",
            shouldPinContract: isSet(object.shouldPinContract) ? Boolean(object.shouldPinContract) : false,
            isMigrationAllowed: isSet(object.isMigrationAllowed) ? Boolean(object.isMigrationAllowed) : false,
            codeId: isSet(object.codeId) ? String(object.codeId) : "0",
            adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : "",
            granterAddress: isSet(object.granterAddress) ? String(object.granterAddress) : "",
            fundingMode: isSet(object.fundingMode) ? fundingModeFromJSON(object.fundingMode) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.gasLimit !== undefined && (obj.gasLimit = message.gasLimit);
        message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice);
        message.shouldPinContract !== undefined && (obj.shouldPinContract = message.shouldPinContract);
        message.isMigrationAllowed !== undefined && (obj.isMigrationAllowed = message.isMigrationAllowed);
        message.codeId !== undefined && (obj.codeId = message.codeId);
        message.adminAddress !== undefined && (obj.adminAddress = message.adminAddress);
        message.granterAddress !== undefined && (obj.granterAddress = message.granterAddress);
        message.fundingMode !== undefined && (obj.fundingMode = fundingModeToJSON(message.fundingMode));
        return obj;
    },
    create(base) {
        return exports.ContractRegistrationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseContractRegistrationRequest();
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        message.gasLimit = (_b = object.gasLimit) !== null && _b !== void 0 ? _b : "0";
        message.gasPrice = (_c = object.gasPrice) !== null && _c !== void 0 ? _c : "0";
        message.shouldPinContract = (_d = object.shouldPinContract) !== null && _d !== void 0 ? _d : false;
        message.isMigrationAllowed = (_e = object.isMigrationAllowed) !== null && _e !== void 0 ? _e : false;
        message.codeId = (_f = object.codeId) !== null && _f !== void 0 ? _f : "0";
        message.adminAddress = (_g = object.adminAddress) !== null && _g !== void 0 ? _g : "";
        message.granterAddress = (_h = object.granterAddress) !== null && _h !== void 0 ? _h : "";
        message.fundingMode = (_j = object.fundingMode) !== null && _j !== void 0 ? _j : 0;
        return message;
    },
};
function createBaseBatchStoreCodeProposal() {
    return { title: "", description: "", proposals: [] };
}
exports.BatchStoreCodeProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.proposals) {
            proposal_1.StoreCodeProposal.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchStoreCodeProposal();
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
                    message.proposals.push(proposal_1.StoreCodeProposal.decode(reader, reader.uint32()));
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
            proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals)
                ? object.proposals.map((e) => proposal_1.StoreCodeProposal.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.proposals) {
            obj.proposals = message.proposals.map((e) => e ? proposal_1.StoreCodeProposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        return obj;
    },
    create(base) {
        return exports.BatchStoreCodeProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseBatchStoreCodeProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.proposals = ((_c = object.proposals) === null || _c === void 0 ? void 0 : _c.map((e) => proposal_1.StoreCodeProposal.fromPartial(e))) || [];
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
