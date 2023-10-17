"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.QueryClassesDesc = exports.QueryClassDesc = exports.QueryNFTDesc = exports.QueryNFTsDesc = exports.QuerySupplyDesc = exports.QueryOwnerDesc = exports.QueryBalanceDesc = exports.QueryDesc = exports.QueryClientImpl = exports.QueryClassesResponse = exports.QueryClassesRequest = exports.QueryClassResponse = exports.QueryClassRequest = exports.QueryNFTResponse = exports.QueryNFTRequest = exports.QueryNFTsResponse = exports.QueryNFTsRequest = exports.QuerySupplyResponse = exports.QuerySupplyRequest = exports.QueryOwnerResponse = exports.QueryOwnerRequest = exports.QueryBalanceResponse = exports.QueryBalanceRequest = void 0;
/* eslint-disable */
const grpc_web_1 = require("@injectivelabs/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../base/query/v1beta1/pagination");
const nft_1 = require("./nft");
function createBaseQueryBalanceRequest() {
    return { classId: "", owner: "" };
}
exports.QueryBalanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.owner = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    create(base) {
        return exports.QueryBalanceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryBalanceRequest();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : "";
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryBalanceResponse() {
    return { amount: "0" };
}
exports.QueryBalanceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.amount !== "0") {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.amount = longToString(reader.uint64());
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
        return { amount: isSet(object.amount) ? String(object.amount) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    create(base) {
        return exports.QueryBalanceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBalanceResponse();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryOwnerRequest() {
    return { classId: "", id: "" };
}
exports.QueryOwnerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return exports.QueryOwnerRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryOwnerRequest();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryOwnerResponse() {
    return { owner: "" };
}
exports.QueryOwnerResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.owner = reader.string();
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
        return { owner: isSet(object.owner) ? String(object.owner) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    create(base) {
        return exports.QueryOwnerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOwnerResponse();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySupplyRequest() {
    return { classId: "" };
}
exports.QuerySupplyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.classId = reader.string();
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
        return { classId: isSet(object.classId) ? String(object.classId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        return obj;
    },
    create(base) {
        return exports.QuerySupplyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySupplyRequest();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySupplyResponse() {
    return { amount: "0" };
}
exports.QuerySupplyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.amount !== "0") {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.amount = longToString(reader.uint64());
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
        return { amount: isSet(object.amount) ? String(object.amount) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    create(base) {
        return exports.QuerySupplyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySupplyResponse();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryNFTsRequest() {
    return { classId: "", owner: "", pagination: undefined };
}
exports.QueryNFTsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryNFTsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryNFTsRequest();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : "";
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryNFTsResponse() {
    return { nfts: [], pagination: undefined };
}
exports.QueryNFTsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.nfts) {
            nft_1.NFT.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.nfts.push(nft_1.NFT.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            nfts: Array.isArray(object === null || object === void 0 ? void 0 : object.nfts) ? object.nfts.map((e) => nft_1.NFT.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nfts) {
            obj.nfts = message.nfts.map((e) => e ? nft_1.NFT.toJSON(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryNFTsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryNFTsResponse();
        message.nfts = ((_a = object.nfts) === null || _a === void 0 ? void 0 : _a.map((e) => nft_1.NFT.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryNFTRequest() {
    return { classId: "", id: "" };
}
exports.QueryNFTRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return exports.QueryNFTRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryNFTRequest();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryNFTResponse() {
    return { nft: undefined };
}
exports.QueryNFTResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nft !== undefined) {
            nft_1.NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.nft = nft_1.NFT.decode(reader, reader.uint32());
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
        return { nft: isSet(object.nft) ? nft_1.NFT.fromJSON(object.nft) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.nft !== undefined && (obj.nft = message.nft ? nft_1.NFT.toJSON(message.nft) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryNFTResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryNFTResponse();
        message.nft = (object.nft !== undefined && object.nft !== null) ? nft_1.NFT.fromPartial(object.nft) : undefined;
        return message;
    },
};
function createBaseQueryClassRequest() {
    return { classId: "" };
}
exports.QueryClassRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.classId = reader.string();
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
        return { classId: isSet(object.classId) ? String(object.classId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        return obj;
    },
    create(base) {
        return exports.QueryClassRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryClassRequest();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryClassResponse() {
    return { class: undefined };
}
exports.QueryClassResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.class !== undefined) {
            nft_1.Class.encode(message.class, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.class = nft_1.Class.decode(reader, reader.uint32());
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
        return { class: isSet(object.class) ? nft_1.Class.fromJSON(object.class) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.class !== undefined && (obj.class = message.class ? nft_1.Class.toJSON(message.class) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryClassResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryClassResponse();
        message.class = (object.class !== undefined && object.class !== null) ? nft_1.Class.fromPartial(object.class) : undefined;
        return message;
    },
};
function createBaseQueryClassesRequest() {
    return { pagination: undefined };
}
exports.QueryClassesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        return { pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryClassesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryClassesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryClassesResponse() {
    return { classes: [], pagination: undefined };
}
exports.QueryClassesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.classes) {
            nft_1.Class.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.classes.push(nft_1.Class.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            classes: Array.isArray(object === null || object === void 0 ? void 0 : object.classes) ? object.classes.map((e) => nft_1.Class.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map((e) => e ? nft_1.Class.toJSON(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryClassesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryClassesResponse();
        message.classes = ((_a = object.classes) === null || _a === void 0 ? void 0 : _a.map((e) => nft_1.Class.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Balance = this.Balance.bind(this);
        this.Owner = this.Owner.bind(this);
        this.Supply = this.Supply.bind(this);
        this.NFTs = this.NFTs.bind(this);
        this.NFT = this.NFT.bind(this);
        this.Class = this.Class.bind(this);
        this.Classes = this.Classes.bind(this);
    }
    Balance(request, metadata) {
        return this.rpc.unary(exports.QueryBalanceDesc, exports.QueryBalanceRequest.fromPartial(request), metadata);
    }
    Owner(request, metadata) {
        return this.rpc.unary(exports.QueryOwnerDesc, exports.QueryOwnerRequest.fromPartial(request), metadata);
    }
    Supply(request, metadata) {
        return this.rpc.unary(exports.QuerySupplyDesc, exports.QuerySupplyRequest.fromPartial(request), metadata);
    }
    NFTs(request, metadata) {
        return this.rpc.unary(exports.QueryNFTsDesc, exports.QueryNFTsRequest.fromPartial(request), metadata);
    }
    NFT(request, metadata) {
        return this.rpc.unary(exports.QueryNFTDesc, exports.QueryNFTRequest.fromPartial(request), metadata);
    }
    Class(request, metadata) {
        return this.rpc.unary(exports.QueryClassDesc, exports.QueryClassRequest.fromPartial(request), metadata);
    }
    Classes(request, metadata) {
        return this.rpc.unary(exports.QueryClassesDesc, exports.QueryClassesRequest.fromPartial(request), metadata);
    }
}
exports.QueryClientImpl = QueryClientImpl;
exports.QueryDesc = { serviceName: "cosmos.nft.v1beta1.Query" };
exports.QueryBalanceDesc = {
    methodName: "Balance",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryBalanceRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryBalanceResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryOwnerDesc = {
    methodName: "Owner",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryOwnerRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryOwnerResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QuerySupplyDesc = {
    methodName: "Supply",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QuerySupplyRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QuerySupplyResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryNFTsDesc = {
    methodName: "NFTs",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryNFTsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryNFTsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryNFTDesc = {
    methodName: "NFT",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryNFTRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryNFTResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryClassDesc = {
    methodName: "Class",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryClassRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryClassResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.QueryClassesDesc = {
    methodName: "Classes",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryClassesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.QueryClassesResponse.decode(data);
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
