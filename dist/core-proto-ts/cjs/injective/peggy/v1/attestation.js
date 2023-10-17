"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20Token = exports.Attestation = exports.claimTypeToJSON = exports.claimTypeFromJSON = exports.ClaimType = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../../../google/protobuf/any");
/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 */
var ClaimType;
(function (ClaimType) {
    ClaimType[ClaimType["CLAIM_TYPE_UNKNOWN"] = 0] = "CLAIM_TYPE_UNKNOWN";
    ClaimType[ClaimType["CLAIM_TYPE_DEPOSIT"] = 1] = "CLAIM_TYPE_DEPOSIT";
    ClaimType[ClaimType["CLAIM_TYPE_WITHDRAW"] = 2] = "CLAIM_TYPE_WITHDRAW";
    ClaimType[ClaimType["CLAIM_TYPE_ERC20_DEPLOYED"] = 3] = "CLAIM_TYPE_ERC20_DEPLOYED";
    ClaimType[ClaimType["CLAIM_TYPE_VALSET_UPDATED"] = 4] = "CLAIM_TYPE_VALSET_UPDATED";
    ClaimType[ClaimType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClaimType = exports.ClaimType || (exports.ClaimType = {}));
function claimTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CLAIM_TYPE_UNKNOWN":
            return ClaimType.CLAIM_TYPE_UNKNOWN;
        case 1:
        case "CLAIM_TYPE_DEPOSIT":
            return ClaimType.CLAIM_TYPE_DEPOSIT;
        case 2:
        case "CLAIM_TYPE_WITHDRAW":
            return ClaimType.CLAIM_TYPE_WITHDRAW;
        case 3:
        case "CLAIM_TYPE_ERC20_DEPLOYED":
            return ClaimType.CLAIM_TYPE_ERC20_DEPLOYED;
        case 4:
        case "CLAIM_TYPE_VALSET_UPDATED":
            return ClaimType.CLAIM_TYPE_VALSET_UPDATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClaimType.UNRECOGNIZED;
    }
}
exports.claimTypeFromJSON = claimTypeFromJSON;
function claimTypeToJSON(object) {
    switch (object) {
        case ClaimType.CLAIM_TYPE_UNKNOWN:
            return "CLAIM_TYPE_UNKNOWN";
        case ClaimType.CLAIM_TYPE_DEPOSIT:
            return "CLAIM_TYPE_DEPOSIT";
        case ClaimType.CLAIM_TYPE_WITHDRAW:
            return "CLAIM_TYPE_WITHDRAW";
        case ClaimType.CLAIM_TYPE_ERC20_DEPLOYED:
            return "CLAIM_TYPE_ERC20_DEPLOYED";
        case ClaimType.CLAIM_TYPE_VALSET_UPDATED:
            return "CLAIM_TYPE_VALSET_UPDATED";
        case ClaimType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.claimTypeToJSON = claimTypeToJSON;
function createBaseAttestation() {
    return { observed: false, votes: [], height: "0", claim: undefined };
}
exports.Attestation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.observed === true) {
            writer.uint32(8).bool(message.observed);
        }
        for (const v of message.votes) {
            writer.uint32(18).string(v);
        }
        if (message.height !== "0") {
            writer.uint32(24).uint64(message.height);
        }
        if (message.claim !== undefined) {
            any_1.Any.encode(message.claim, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttestation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.observed = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.votes.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.height = longToString(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.claim = any_1.Any.decode(reader, reader.uint32());
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
            observed: isSet(object.observed) ? Boolean(object.observed) : false,
            votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map((e) => String(e)) : [],
            height: isSet(object.height) ? String(object.height) : "0",
            claim: isSet(object.claim) ? any_1.Any.fromJSON(object.claim) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.observed !== undefined && (obj.observed = message.observed);
        if (message.votes) {
            obj.votes = message.votes.map((e) => e);
        }
        else {
            obj.votes = [];
        }
        message.height !== undefined && (obj.height = message.height);
        message.claim !== undefined && (obj.claim = message.claim ? any_1.Any.toJSON(message.claim) : undefined);
        return obj;
    },
    create(base) {
        return exports.Attestation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAttestation();
        message.observed = (_a = object.observed) !== null && _a !== void 0 ? _a : false;
        message.votes = ((_b = object.votes) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.height = (_c = object.height) !== null && _c !== void 0 ? _c : "0";
        message.claim = (object.claim !== undefined && object.claim !== null) ? any_1.Any.fromPartial(object.claim) : undefined;
        return message;
    },
};
function createBaseERC20Token() {
    return { contract: "", amount: "" };
}
exports.ERC20Token = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseERC20Token();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.contract = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.amount = reader.string();
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
            contract: isSet(object.contract) ? String(object.contract) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.contract !== undefined && (obj.contract = message.contract);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    create(base) {
        return exports.ERC20Token.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseERC20Token();
        message.contract = (_a = object.contract) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
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
