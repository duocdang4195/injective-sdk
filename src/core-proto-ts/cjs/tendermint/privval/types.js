"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = exports.PingResponse = exports.PingRequest = exports.SignedProposalResponse = exports.SignProposalRequest = exports.SignedVoteResponse = exports.SignVoteRequest = exports.PubKeyResponse = exports.PubKeyRequest = exports.RemoteSignerError = exports.errorsToJSON = exports.errorsFromJSON = exports.Errors = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const keys_1 = require("../crypto/keys");
const types_1 = require("../types/types");
var Errors;
(function (Errors) {
    Errors[Errors["ERRORS_UNKNOWN"] = 0] = "ERRORS_UNKNOWN";
    Errors[Errors["ERRORS_UNEXPECTED_RESPONSE"] = 1] = "ERRORS_UNEXPECTED_RESPONSE";
    Errors[Errors["ERRORS_NO_CONNECTION"] = 2] = "ERRORS_NO_CONNECTION";
    Errors[Errors["ERRORS_CONNECTION_TIMEOUT"] = 3] = "ERRORS_CONNECTION_TIMEOUT";
    Errors[Errors["ERRORS_READ_TIMEOUT"] = 4] = "ERRORS_READ_TIMEOUT";
    Errors[Errors["ERRORS_WRITE_TIMEOUT"] = 5] = "ERRORS_WRITE_TIMEOUT";
    Errors[Errors["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Errors = exports.Errors || (exports.Errors = {}));
function errorsFromJSON(object) {
    switch (object) {
        case 0:
        case "ERRORS_UNKNOWN":
            return Errors.ERRORS_UNKNOWN;
        case 1:
        case "ERRORS_UNEXPECTED_RESPONSE":
            return Errors.ERRORS_UNEXPECTED_RESPONSE;
        case 2:
        case "ERRORS_NO_CONNECTION":
            return Errors.ERRORS_NO_CONNECTION;
        case 3:
        case "ERRORS_CONNECTION_TIMEOUT":
            return Errors.ERRORS_CONNECTION_TIMEOUT;
        case 4:
        case "ERRORS_READ_TIMEOUT":
            return Errors.ERRORS_READ_TIMEOUT;
        case 5:
        case "ERRORS_WRITE_TIMEOUT":
            return Errors.ERRORS_WRITE_TIMEOUT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Errors.UNRECOGNIZED;
    }
}
exports.errorsFromJSON = errorsFromJSON;
function errorsToJSON(object) {
    switch (object) {
        case Errors.ERRORS_UNKNOWN:
            return "ERRORS_UNKNOWN";
        case Errors.ERRORS_UNEXPECTED_RESPONSE:
            return "ERRORS_UNEXPECTED_RESPONSE";
        case Errors.ERRORS_NO_CONNECTION:
            return "ERRORS_NO_CONNECTION";
        case Errors.ERRORS_CONNECTION_TIMEOUT:
            return "ERRORS_CONNECTION_TIMEOUT";
        case Errors.ERRORS_READ_TIMEOUT:
            return "ERRORS_READ_TIMEOUT";
        case Errors.ERRORS_WRITE_TIMEOUT:
            return "ERRORS_WRITE_TIMEOUT";
        case Errors.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.errorsToJSON = errorsToJSON;
function createBaseRemoteSignerError() {
    return { code: 0, description: "" };
}
exports.RemoteSignerError = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).int32(message.code);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoteSignerError();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.code = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
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
            code: isSet(object.code) ? Number(object.code) : 0,
            description: isSet(object.description) ? String(object.description) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },
    create(base) {
        return exports.RemoteSignerError.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRemoteSignerError();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBasePubKeyRequest() {
    return { chainId: "" };
}
exports.PubKeyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePubKeyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.chainId = reader.string();
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
        return { chainId: isSet(object.chainId) ? String(object.chainId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    create(base) {
        return exports.PubKeyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePubKeyRequest();
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBasePubKeyResponse() {
    return { pubKey: undefined, error: undefined };
}
exports.PubKeyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pubKey !== undefined) {
            keys_1.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            exports.RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePubKeyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.error = exports.RemoteSignerError.decode(reader, reader.uint32());
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
            pubKey: isSet(object.pubKey) ? keys_1.PublicKey.fromJSON(object.pubKey) : undefined,
            error: isSet(object.error) ? exports.RemoteSignerError.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pubKey !== undefined && (obj.pubKey = message.pubKey ? keys_1.PublicKey.toJSON(message.pubKey) : undefined);
        message.error !== undefined && (obj.error = message.error ? exports.RemoteSignerError.toJSON(message.error) : undefined);
        return obj;
    },
    create(base) {
        return exports.PubKeyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBasePubKeyResponse();
        message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
            ? keys_1.PublicKey.fromPartial(object.pubKey)
            : undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? exports.RemoteSignerError.fromPartial(object.error)
            : undefined;
        return message;
    },
};
function createBaseSignVoteRequest() {
    return { vote: undefined, chainId: "" };
}
exports.SignVoteRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.vote !== undefined) {
            types_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignVoteRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.vote = types_1.Vote.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.chainId = reader.string();
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
            vote: isSet(object.vote) ? types_1.Vote.fromJSON(object.vote) : undefined,
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? types_1.Vote.toJSON(message.vote) : undefined);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    create(base) {
        return exports.SignVoteRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSignVoteRequest();
        message.vote = (object.vote !== undefined && object.vote !== null) ? types_1.Vote.fromPartial(object.vote) : undefined;
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSignedVoteResponse() {
    return { vote: undefined, error: undefined };
}
exports.SignedVoteResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.vote !== undefined) {
            types_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            exports.RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.vote = types_1.Vote.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.error = exports.RemoteSignerError.decode(reader, reader.uint32());
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
            vote: isSet(object.vote) ? types_1.Vote.fromJSON(object.vote) : undefined,
            error: isSet(object.error) ? exports.RemoteSignerError.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? types_1.Vote.toJSON(message.vote) : undefined);
        message.error !== undefined && (obj.error = message.error ? exports.RemoteSignerError.toJSON(message.error) : undefined);
        return obj;
    },
    create(base) {
        return exports.SignedVoteResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSignedVoteResponse();
        message.vote = (object.vote !== undefined && object.vote !== null) ? types_1.Vote.fromPartial(object.vote) : undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? exports.RemoteSignerError.fromPartial(object.error)
            : undefined;
        return message;
    },
};
function createBaseSignProposalRequest() {
    return { proposal: undefined, chainId: "" };
}
exports.SignProposalRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proposal !== undefined) {
            types_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignProposalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.proposal = types_1.Proposal.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.chainId = reader.string();
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
            proposal: isSet(object.proposal) ? types_1.Proposal.fromJSON(object.proposal) : undefined,
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined && (obj.proposal = message.proposal ? types_1.Proposal.toJSON(message.proposal) : undefined);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    create(base) {
        return exports.SignProposalRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSignProposalRequest();
        message.proposal = (object.proposal !== undefined && object.proposal !== null)
            ? types_1.Proposal.fromPartial(object.proposal)
            : undefined;
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSignedProposalResponse() {
    return { proposal: undefined, error: undefined };
}
exports.SignedProposalResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proposal !== undefined) {
            types_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            exports.RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.proposal = types_1.Proposal.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.error = exports.RemoteSignerError.decode(reader, reader.uint32());
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
            proposal: isSet(object.proposal) ? types_1.Proposal.fromJSON(object.proposal) : undefined,
            error: isSet(object.error) ? exports.RemoteSignerError.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined && (obj.proposal = message.proposal ? types_1.Proposal.toJSON(message.proposal) : undefined);
        message.error !== undefined && (obj.error = message.error ? exports.RemoteSignerError.toJSON(message.error) : undefined);
        return obj;
    },
    create(base) {
        return exports.SignedProposalResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSignedProposalResponse();
        message.proposal = (object.proposal !== undefined && object.proposal !== null)
            ? types_1.Proposal.fromPartial(object.proposal)
            : undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? exports.RemoteSignerError.fromPartial(object.error)
            : undefined;
        return message;
    },
};
function createBasePingRequest() {
    return {};
}
exports.PingRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePingRequest();
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
        return exports.PingRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBasePingRequest();
        return message;
    },
};
function createBasePingResponse() {
    return {};
}
exports.PingResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePingResponse();
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
        return exports.PingResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBasePingResponse();
        return message;
    },
};
function createBaseMessage() {
    return {
        pubKeyRequest: undefined,
        pubKeyResponse: undefined,
        signVoteRequest: undefined,
        signedVoteResponse: undefined,
        signProposalRequest: undefined,
        signedProposalResponse: undefined,
        pingRequest: undefined,
        pingResponse: undefined,
    };
}
exports.Message = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pubKeyRequest !== undefined) {
            exports.PubKeyRequest.encode(message.pubKeyRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.pubKeyResponse !== undefined) {
            exports.PubKeyResponse.encode(message.pubKeyResponse, writer.uint32(18).fork()).ldelim();
        }
        if (message.signVoteRequest !== undefined) {
            exports.SignVoteRequest.encode(message.signVoteRequest, writer.uint32(26).fork()).ldelim();
        }
        if (message.signedVoteResponse !== undefined) {
            exports.SignedVoteResponse.encode(message.signedVoteResponse, writer.uint32(34).fork()).ldelim();
        }
        if (message.signProposalRequest !== undefined) {
            exports.SignProposalRequest.encode(message.signProposalRequest, writer.uint32(42).fork()).ldelim();
        }
        if (message.signedProposalResponse !== undefined) {
            exports.SignedProposalResponse.encode(message.signedProposalResponse, writer.uint32(50).fork()).ldelim();
        }
        if (message.pingRequest !== undefined) {
            exports.PingRequest.encode(message.pingRequest, writer.uint32(58).fork()).ldelim();
        }
        if (message.pingResponse !== undefined) {
            exports.PingResponse.encode(message.pingResponse, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pubKeyRequest = exports.PubKeyRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pubKeyResponse = exports.PubKeyResponse.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.signVoteRequest = exports.SignVoteRequest.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.signedVoteResponse = exports.SignedVoteResponse.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.signProposalRequest = exports.SignProposalRequest.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.signedProposalResponse = exports.SignedProposalResponse.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.pingRequest = exports.PingRequest.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.pingResponse = exports.PingResponse.decode(reader, reader.uint32());
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
            pubKeyRequest: isSet(object.pubKeyRequest) ? exports.PubKeyRequest.fromJSON(object.pubKeyRequest) : undefined,
            pubKeyResponse: isSet(object.pubKeyResponse) ? exports.PubKeyResponse.fromJSON(object.pubKeyResponse) : undefined,
            signVoteRequest: isSet(object.signVoteRequest) ? exports.SignVoteRequest.fromJSON(object.signVoteRequest) : undefined,
            signedVoteResponse: isSet(object.signedVoteResponse)
                ? exports.SignedVoteResponse.fromJSON(object.signedVoteResponse)
                : undefined,
            signProposalRequest: isSet(object.signProposalRequest)
                ? exports.SignProposalRequest.fromJSON(object.signProposalRequest)
                : undefined,
            signedProposalResponse: isSet(object.signedProposalResponse)
                ? exports.SignedProposalResponse.fromJSON(object.signedProposalResponse)
                : undefined,
            pingRequest: isSet(object.pingRequest) ? exports.PingRequest.fromJSON(object.pingRequest) : undefined,
            pingResponse: isSet(object.pingResponse) ? exports.PingResponse.fromJSON(object.pingResponse) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pubKeyRequest !== undefined &&
            (obj.pubKeyRequest = message.pubKeyRequest ? exports.PubKeyRequest.toJSON(message.pubKeyRequest) : undefined);
        message.pubKeyResponse !== undefined &&
            (obj.pubKeyResponse = message.pubKeyResponse ? exports.PubKeyResponse.toJSON(message.pubKeyResponse) : undefined);
        message.signVoteRequest !== undefined &&
            (obj.signVoteRequest = message.signVoteRequest ? exports.SignVoteRequest.toJSON(message.signVoteRequest) : undefined);
        message.signedVoteResponse !== undefined && (obj.signedVoteResponse = message.signedVoteResponse
            ? exports.SignedVoteResponse.toJSON(message.signedVoteResponse)
            : undefined);
        message.signProposalRequest !== undefined && (obj.signProposalRequest = message.signProposalRequest
            ? exports.SignProposalRequest.toJSON(message.signProposalRequest)
            : undefined);
        message.signedProposalResponse !== undefined && (obj.signedProposalResponse = message.signedProposalResponse
            ? exports.SignedProposalResponse.toJSON(message.signedProposalResponse)
            : undefined);
        message.pingRequest !== undefined &&
            (obj.pingRequest = message.pingRequest ? exports.PingRequest.toJSON(message.pingRequest) : undefined);
        message.pingResponse !== undefined &&
            (obj.pingResponse = message.pingResponse ? exports.PingResponse.toJSON(message.pingResponse) : undefined);
        return obj;
    },
    create(base) {
        return exports.Message.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMessage();
        message.pubKeyRequest = (object.pubKeyRequest !== undefined && object.pubKeyRequest !== null)
            ? exports.PubKeyRequest.fromPartial(object.pubKeyRequest)
            : undefined;
        message.pubKeyResponse = (object.pubKeyResponse !== undefined && object.pubKeyResponse !== null)
            ? exports.PubKeyResponse.fromPartial(object.pubKeyResponse)
            : undefined;
        message.signVoteRequest = (object.signVoteRequest !== undefined && object.signVoteRequest !== null)
            ? exports.SignVoteRequest.fromPartial(object.signVoteRequest)
            : undefined;
        message.signedVoteResponse = (object.signedVoteResponse !== undefined && object.signedVoteResponse !== null)
            ? exports.SignedVoteResponse.fromPartial(object.signedVoteResponse)
            : undefined;
        message.signProposalRequest = (object.signProposalRequest !== undefined && object.signProposalRequest !== null)
            ? exports.SignProposalRequest.fromPartial(object.signProposalRequest)
            : undefined;
        message.signedProposalResponse =
            (object.signedProposalResponse !== undefined && object.signedProposalResponse !== null)
                ? exports.SignedProposalResponse.fromPartial(object.signedProposalResponse)
                : undefined;
        message.pingRequest = (object.pingRequest !== undefined && object.pingRequest !== null)
            ? exports.PingRequest.fromPartial(object.pingRequest)
            : undefined;
        message.pingResponse = (object.pingResponse !== undefined && object.pingResponse !== null)
            ? exports.PingResponse.fromPartial(object.pingResponse)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
