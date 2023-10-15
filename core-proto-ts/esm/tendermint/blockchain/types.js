/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Block } from "../types/block";
function createBaseBlockRequest() {
    return { height: "0" };
}
export const BlockRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return BlockRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const NoBlockResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return NoBlockResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const BlockResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.block !== undefined) {
            Block.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.block = Block.decode(reader, reader.uint32());
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
        return { block: isSet(object.block) ? Block.fromJSON(object.block) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
        return obj;
    },
    create(base) {
        return BlockResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseBlockResponse();
        message.block = (object.block !== undefined && object.block !== null) ? Block.fromPartial(object.block) : undefined;
        return message;
    },
};
function createBaseStatusRequest() {
    return {};
}
export const StatusRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return StatusRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseStatusRequest();
        return message;
    },
};
function createBaseStatusResponse() {
    return { height: "0", base: "0" };
}
export const StatusResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.base !== "0") {
            writer.uint32(16).int64(message.base);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return StatusResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const Message = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockRequest !== undefined) {
            BlockRequest.encode(message.blockRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.noBlockResponse !== undefined) {
            NoBlockResponse.encode(message.noBlockResponse, writer.uint32(18).fork()).ldelim();
        }
        if (message.blockResponse !== undefined) {
            BlockResponse.encode(message.blockResponse, writer.uint32(26).fork()).ldelim();
        }
        if (message.statusRequest !== undefined) {
            StatusRequest.encode(message.statusRequest, writer.uint32(34).fork()).ldelim();
        }
        if (message.statusResponse !== undefined) {
            StatusResponse.encode(message.statusResponse, writer.uint32(42).fork()).ldelim();
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
                    message.blockRequest = BlockRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.noBlockResponse = NoBlockResponse.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.blockResponse = BlockResponse.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.statusRequest = StatusRequest.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.statusResponse = StatusResponse.decode(reader, reader.uint32());
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
            blockRequest: isSet(object.blockRequest) ? BlockRequest.fromJSON(object.blockRequest) : undefined,
            noBlockResponse: isSet(object.noBlockResponse) ? NoBlockResponse.fromJSON(object.noBlockResponse) : undefined,
            blockResponse: isSet(object.blockResponse) ? BlockResponse.fromJSON(object.blockResponse) : undefined,
            statusRequest: isSet(object.statusRequest) ? StatusRequest.fromJSON(object.statusRequest) : undefined,
            statusResponse: isSet(object.statusResponse) ? StatusResponse.fromJSON(object.statusResponse) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockRequest !== undefined &&
            (obj.blockRequest = message.blockRequest ? BlockRequest.toJSON(message.blockRequest) : undefined);
        message.noBlockResponse !== undefined &&
            (obj.noBlockResponse = message.noBlockResponse ? NoBlockResponse.toJSON(message.noBlockResponse) : undefined);
        message.blockResponse !== undefined &&
            (obj.blockResponse = message.blockResponse ? BlockResponse.toJSON(message.blockResponse) : undefined);
        message.statusRequest !== undefined &&
            (obj.statusRequest = message.statusRequest ? StatusRequest.toJSON(message.statusRequest) : undefined);
        message.statusResponse !== undefined &&
            (obj.statusResponse = message.statusResponse ? StatusResponse.toJSON(message.statusResponse) : undefined);
        return obj;
    },
    create(base) {
        return Message.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMessage();
        message.blockRequest = (object.blockRequest !== undefined && object.blockRequest !== null)
            ? BlockRequest.fromPartial(object.blockRequest)
            : undefined;
        message.noBlockResponse = (object.noBlockResponse !== undefined && object.noBlockResponse !== null)
            ? NoBlockResponse.fromPartial(object.noBlockResponse)
            : undefined;
        message.blockResponse = (object.blockResponse !== undefined && object.blockResponse !== null)
            ? BlockResponse.fromPartial(object.blockResponse)
            : undefined;
        message.statusRequest = (object.statusRequest !== undefined && object.statusRequest !== null)
            ? StatusRequest.fromPartial(object.statusRequest)
            : undefined;
        message.statusResponse = (object.statusResponse !== undefined && object.statusResponse !== null)
            ? StatusResponse.fromPartial(object.statusResponse)
            : undefined;
        return message;
    },
};
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
