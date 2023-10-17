"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = exports.StatusResponse = exports.StatusRequest = exports.BlockResponse = exports.NoBlockResponse = exports.BlockRequest = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const block_1 = require("../types/block");
function createBaseBlockRequest() {
    return { height: "0" };
}
exports.BlockRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToString(reader.int64());
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
        return { height: isSet(object.height) ? String(object.height) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    create(base) {
        return exports.BlockRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBlockRequest();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseNoBlockResponse() {
    return { height: "0" };
}
exports.NoBlockResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNoBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToString(reader.int64());
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
        return { height: isSet(object.height) ? String(object.height) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    create(base) {
        return exports.NoBlockResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseNoBlockResponse();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseBlockResponse() {
    return { block: undefined };
}
exports.BlockResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.block = block_1.Block.decode(reader, reader.uint32());
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
        return { block: isSet(object.block) ? block_1.Block.fromJSON(object.block) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined && (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        return obj;
    },
    create(base) {
        return exports.BlockResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseBlockResponse();
        message.block = (object.block !== undefined && object.block !== null) ? block_1.Block.fromPartial(object.block) : undefined;
        return message;
    },
};
function createBaseStatusRequest() {
    return {};
}
exports.StatusRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatusRequest();
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
        return exports.StatusRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseStatusRequest();
        return message;
    },
};
function createBaseStatusResponse() {
    return { height: "0", base: "0" };
}
exports.StatusResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.base !== "0") {
            writer.uint32(16).int64(message.base);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.base = longToString(reader.int64());
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
            height: isSet(object.height) ? String(object.height) : "0",
            base: isSet(object.base) ? String(object.base) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.base !== undefined && (obj.base = message.base);
        return obj;
    },
    create(base) {
        return exports.StatusResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStatusResponse();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.base = (_b = object.base) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseMessage() {
    return {
        blockRequest: undefined,
        noBlockResponse: undefined,
        blockResponse: undefined,
        statusRequest: undefined,
        statusResponse: undefined,
    };
}
exports.Message = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.blockRequest !== undefined) {
            exports.BlockRequest.encode(message.blockRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.noBlockResponse !== undefined) {
            exports.NoBlockResponse.encode(message.noBlockResponse, writer.uint32(18).fork()).ldelim();
        }
        if (message.blockResponse !== undefined) {
            exports.BlockResponse.encode(message.blockResponse, writer.uint32(26).fork()).ldelim();
        }
        if (message.statusRequest !== undefined) {
            exports.StatusRequest.encode(message.statusRequest, writer.uint32(34).fork()).ldelim();
        }
        if (message.statusResponse !== undefined) {
            exports.StatusResponse.encode(message.statusResponse, writer.uint32(42).fork()).ldelim();
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
                    message.blockRequest = exports.BlockRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.noBlockResponse = exports.NoBlockResponse.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.blockResponse = exports.BlockResponse.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.statusRequest = exports.StatusRequest.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.statusResponse = exports.StatusResponse.decode(reader, reader.uint32());
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
            blockRequest: isSet(object.blockRequest) ? exports.BlockRequest.fromJSON(object.blockRequest) : undefined,
            noBlockResponse: isSet(object.noBlockResponse) ? exports.NoBlockResponse.fromJSON(object.noBlockResponse) : undefined,
            blockResponse: isSet(object.blockResponse) ? exports.BlockResponse.fromJSON(object.blockResponse) : undefined,
            statusRequest: isSet(object.statusRequest) ? exports.StatusRequest.fromJSON(object.statusRequest) : undefined,
            statusResponse: isSet(object.statusResponse) ? exports.StatusResponse.fromJSON(object.statusResponse) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockRequest !== undefined &&
            (obj.blockRequest = message.blockRequest ? exports.BlockRequest.toJSON(message.blockRequest) : undefined);
        message.noBlockResponse !== undefined &&
            (obj.noBlockResponse = message.noBlockResponse ? exports.NoBlockResponse.toJSON(message.noBlockResponse) : undefined);
        message.blockResponse !== undefined &&
            (obj.blockResponse = message.blockResponse ? exports.BlockResponse.toJSON(message.blockResponse) : undefined);
        message.statusRequest !== undefined &&
            (obj.statusRequest = message.statusRequest ? exports.StatusRequest.toJSON(message.statusRequest) : undefined);
        message.statusResponse !== undefined &&
            (obj.statusResponse = message.statusResponse ? exports.StatusResponse.toJSON(message.statusResponse) : undefined);
        return obj;
    },
    create(base) {
        return exports.Message.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMessage();
        message.blockRequest = (object.blockRequest !== undefined && object.blockRequest !== null)
            ? exports.BlockRequest.fromPartial(object.blockRequest)
            : undefined;
        message.noBlockResponse = (object.noBlockResponse !== undefined && object.noBlockResponse !== null)
            ? exports.NoBlockResponse.fromPartial(object.noBlockResponse)
            : undefined;
        message.blockResponse = (object.blockResponse !== undefined && object.blockResponse !== null)
            ? exports.BlockResponse.fromPartial(object.blockResponse)
            : undefined;
        message.statusRequest = (object.statusRequest !== undefined && object.statusRequest !== null)
            ? exports.StatusRequest.fromPartial(object.statusRequest)
            : undefined;
        message.statusResponse = (object.statusResponse !== undefined && object.statusResponse !== null)
            ? exports.StatusResponse.fromPartial(object.statusResponse)
            : undefined;
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
