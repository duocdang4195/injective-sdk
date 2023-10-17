/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PublicKey } from "../crypto/keys";
import { Proposal, Vote } from "../types/types";
export var Errors;
(function (Errors) {
    Errors[Errors["ERRORS_UNKNOWN"] = 0] = "ERRORS_UNKNOWN";
    Errors[Errors["ERRORS_UNEXPECTED_RESPONSE"] = 1] = "ERRORS_UNEXPECTED_RESPONSE";
    Errors[Errors["ERRORS_NO_CONNECTION"] = 2] = "ERRORS_NO_CONNECTION";
    Errors[Errors["ERRORS_CONNECTION_TIMEOUT"] = 3] = "ERRORS_CONNECTION_TIMEOUT";
    Errors[Errors["ERRORS_READ_TIMEOUT"] = 4] = "ERRORS_READ_TIMEOUT";
    Errors[Errors["ERRORS_WRITE_TIMEOUT"] = 5] = "ERRORS_WRITE_TIMEOUT";
    Errors[Errors["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Errors || (Errors = {}));
export function errorsFromJSON(object) {
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
export function errorsToJSON(object) {
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
function createBaseRemoteSignerError() {
    return { code: 0, description: "" };
}
export const RemoteSignerError = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).int32(message.code);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return RemoteSignerError.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const PubKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return PubKeyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const PubKeyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pubKey !== undefined) {
            PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePubKeyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pubKey = PublicKey.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.error = RemoteSignerError.decode(reader, reader.uint32());
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
            pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : undefined,
            error: isSet(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pubKey !== undefined && (obj.pubKey = message.pubKey ? PublicKey.toJSON(message.pubKey) : undefined);
        message.error !== undefined && (obj.error = message.error ? RemoteSignerError.toJSON(message.error) : undefined);
        return obj;
    },
    create(base) {
        return PubKeyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBasePubKeyResponse();
        message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
            ? PublicKey.fromPartial(object.pubKey)
            : undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? RemoteSignerError.fromPartial(object.error)
            : undefined;
        return message;
    },
};
function createBaseSignVoteRequest() {
    return { vote: undefined, chainId: "" };
}
export const SignVoteRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vote !== undefined) {
            Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignVoteRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.vote = Vote.decode(reader, reader.uint32());
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
            vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    create(base) {
        return SignVoteRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSignVoteRequest();
        message.vote = (object.vote !== undefined && object.vote !== null) ? Vote.fromPartial(object.vote) : undefined;
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSignedVoteResponse() {
    return { vote: undefined, error: undefined };
}
export const SignedVoteResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vote !== undefined) {
            Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.vote = Vote.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.error = RemoteSignerError.decode(reader, reader.uint32());
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
            vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
            error: isSet(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
        message.error !== undefined && (obj.error = message.error ? RemoteSignerError.toJSON(message.error) : undefined);
        return obj;
    },
    create(base) {
        return SignedVoteResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSignedVoteResponse();
        message.vote = (object.vote !== undefined && object.vote !== null) ? Vote.fromPartial(object.vote) : undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? RemoteSignerError.fromPartial(object.error)
            : undefined;
        return message;
    },
};
function createBaseSignProposalRequest() {
    return { proposal: undefined, chainId: "" };
}
export const SignProposalRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposal !== undefined) {
            Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignProposalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.proposal = Proposal.decode(reader, reader.uint32());
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
            proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    create(base) {
        return SignProposalRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSignProposalRequest();
        message.proposal = (object.proposal !== undefined && object.proposal !== null)
            ? Proposal.fromPartial(object.proposal)
            : undefined;
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSignedProposalResponse() {
    return { proposal: undefined, error: undefined };
}
export const SignedProposalResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposal !== undefined) {
            Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.proposal = Proposal.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.error = RemoteSignerError.decode(reader, reader.uint32());
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
            proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
            error: isSet(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
        message.error !== undefined && (obj.error = message.error ? RemoteSignerError.toJSON(message.error) : undefined);
        return obj;
    },
    create(base) {
        return SignedProposalResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSignedProposalResponse();
        message.proposal = (object.proposal !== undefined && object.proposal !== null)
            ? Proposal.fromPartial(object.proposal)
            : undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? RemoteSignerError.fromPartial(object.error)
            : undefined;
        return message;
    },
};
function createBasePingRequest() {
    return {};
}
export const PingRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return PingRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBasePingRequest();
        return message;
    },
};
function createBasePingResponse() {
    return {};
}
export const PingResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return PingResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const Message = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pubKeyRequest !== undefined) {
            PubKeyRequest.encode(message.pubKeyRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.pubKeyResponse !== undefined) {
            PubKeyResponse.encode(message.pubKeyResponse, writer.uint32(18).fork()).ldelim();
        }
        if (message.signVoteRequest !== undefined) {
            SignVoteRequest.encode(message.signVoteRequest, writer.uint32(26).fork()).ldelim();
        }
        if (message.signedVoteResponse !== undefined) {
            SignedVoteResponse.encode(message.signedVoteResponse, writer.uint32(34).fork()).ldelim();
        }
        if (message.signProposalRequest !== undefined) {
            SignProposalRequest.encode(message.signProposalRequest, writer.uint32(42).fork()).ldelim();
        }
        if (message.signedProposalResponse !== undefined) {
            SignedProposalResponse.encode(message.signedProposalResponse, writer.uint32(50).fork()).ldelim();
        }
        if (message.pingRequest !== undefined) {
            PingRequest.encode(message.pingRequest, writer.uint32(58).fork()).ldelim();
        }
        if (message.pingResponse !== undefined) {
            PingResponse.encode(message.pingResponse, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pubKeyRequest = PubKeyRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pubKeyResponse = PubKeyResponse.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.signVoteRequest = SignVoteRequest.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.signedVoteResponse = SignedVoteResponse.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.signProposalRequest = SignProposalRequest.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.signedProposalResponse = SignedProposalResponse.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.pingRequest = PingRequest.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.pingResponse = PingResponse.decode(reader, reader.uint32());
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
            pubKeyRequest: isSet(object.pubKeyRequest) ? PubKeyRequest.fromJSON(object.pubKeyRequest) : undefined,
            pubKeyResponse: isSet(object.pubKeyResponse) ? PubKeyResponse.fromJSON(object.pubKeyResponse) : undefined,
            signVoteRequest: isSet(object.signVoteRequest) ? SignVoteRequest.fromJSON(object.signVoteRequest) : undefined,
            signedVoteResponse: isSet(object.signedVoteResponse)
                ? SignedVoteResponse.fromJSON(object.signedVoteResponse)
                : undefined,
            signProposalRequest: isSet(object.signProposalRequest)
                ? SignProposalRequest.fromJSON(object.signProposalRequest)
                : undefined,
            signedProposalResponse: isSet(object.signedProposalResponse)
                ? SignedProposalResponse.fromJSON(object.signedProposalResponse)
                : undefined,
            pingRequest: isSet(object.pingRequest) ? PingRequest.fromJSON(object.pingRequest) : undefined,
            pingResponse: isSet(object.pingResponse) ? PingResponse.fromJSON(object.pingResponse) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pubKeyRequest !== undefined &&
            (obj.pubKeyRequest = message.pubKeyRequest ? PubKeyRequest.toJSON(message.pubKeyRequest) : undefined);
        message.pubKeyResponse !== undefined &&
            (obj.pubKeyResponse = message.pubKeyResponse ? PubKeyResponse.toJSON(message.pubKeyResponse) : undefined);
        message.signVoteRequest !== undefined &&
            (obj.signVoteRequest = message.signVoteRequest ? SignVoteRequest.toJSON(message.signVoteRequest) : undefined);
        message.signedVoteResponse !== undefined && (obj.signedVoteResponse = message.signedVoteResponse
            ? SignedVoteResponse.toJSON(message.signedVoteResponse)
            : undefined);
        message.signProposalRequest !== undefined && (obj.signProposalRequest = message.signProposalRequest
            ? SignProposalRequest.toJSON(message.signProposalRequest)
            : undefined);
        message.signedProposalResponse !== undefined && (obj.signedProposalResponse = message.signedProposalResponse
            ? SignedProposalResponse.toJSON(message.signedProposalResponse)
            : undefined);
        message.pingRequest !== undefined &&
            (obj.pingRequest = message.pingRequest ? PingRequest.toJSON(message.pingRequest) : undefined);
        message.pingResponse !== undefined &&
            (obj.pingResponse = message.pingResponse ? PingResponse.toJSON(message.pingResponse) : undefined);
        return obj;
    },
    create(base) {
        return Message.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMessage();
        message.pubKeyRequest = (object.pubKeyRequest !== undefined && object.pubKeyRequest !== null)
            ? PubKeyRequest.fromPartial(object.pubKeyRequest)
            : undefined;
        message.pubKeyResponse = (object.pubKeyResponse !== undefined && object.pubKeyResponse !== null)
            ? PubKeyResponse.fromPartial(object.pubKeyResponse)
            : undefined;
        message.signVoteRequest = (object.signVoteRequest !== undefined && object.signVoteRequest !== null)
            ? SignVoteRequest.fromPartial(object.signVoteRequest)
            : undefined;
        message.signedVoteResponse = (object.signedVoteResponse !== undefined && object.signedVoteResponse !== null)
            ? SignedVoteResponse.fromPartial(object.signedVoteResponse)
            : undefined;
        message.signProposalRequest = (object.signProposalRequest !== undefined && object.signProposalRequest !== null)
            ? SignProposalRequest.fromPartial(object.signProposalRequest)
            : undefined;
        message.signedProposalResponse =
            (object.signedProposalResponse !== undefined && object.signedProposalResponse !== null)
                ? SignedProposalResponse.fromPartial(object.signedProposalResponse)
                : undefined;
        message.pingRequest = (object.pingRequest !== undefined && object.pingRequest !== null)
            ? PingRequest.fromPartial(object.pingRequest)
            : undefined;
        message.pingResponse = (object.pingResponse !== undefined && object.pingResponse !== null)
            ? PingResponse.fromPartial(object.pingResponse)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
