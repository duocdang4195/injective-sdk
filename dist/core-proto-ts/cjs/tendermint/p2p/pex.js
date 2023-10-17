"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = exports.PexAddrs = exports.PexRequest = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const types_1 = require("./types");
function createBasePexRequest() {
    return {};
}
exports.PexRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePexRequest();
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
        return exports.PexRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBasePexRequest();
        return message;
    },
};
function createBasePexAddrs() {
    return { addrs: [] };
}
exports.PexAddrs = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.addrs) {
            types_1.NetAddress.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePexAddrs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.addrs.push(types_1.NetAddress.decode(reader, reader.uint32()));
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
        return { addrs: Array.isArray(object === null || object === void 0 ? void 0 : object.addrs) ? object.addrs.map((e) => types_1.NetAddress.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.addrs) {
            obj.addrs = message.addrs.map((e) => e ? types_1.NetAddress.toJSON(e) : undefined);
        }
        else {
            obj.addrs = [];
        }
        return obj;
    },
    create(base) {
        return exports.PexAddrs.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePexAddrs();
        message.addrs = ((_a = object.addrs) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.NetAddress.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMessage() {
    return { pexRequest: undefined, pexAddrs: undefined };
}
exports.Message = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pexRequest !== undefined) {
            exports.PexRequest.encode(message.pexRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.pexAddrs !== undefined) {
            exports.PexAddrs.encode(message.pexAddrs, writer.uint32(18).fork()).ldelim();
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
                    message.pexRequest = exports.PexRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pexAddrs = exports.PexAddrs.decode(reader, reader.uint32());
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
            pexRequest: isSet(object.pexRequest) ? exports.PexRequest.fromJSON(object.pexRequest) : undefined,
            pexAddrs: isSet(object.pexAddrs) ? exports.PexAddrs.fromJSON(object.pexAddrs) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pexRequest !== undefined &&
            (obj.pexRequest = message.pexRequest ? exports.PexRequest.toJSON(message.pexRequest) : undefined);
        message.pexAddrs !== undefined && (obj.pexAddrs = message.pexAddrs ? exports.PexAddrs.toJSON(message.pexAddrs) : undefined);
        return obj;
    },
    create(base) {
        return exports.Message.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMessage();
        message.pexRequest = (object.pexRequest !== undefined && object.pexRequest !== null)
            ? exports.PexRequest.fromPartial(object.pexRequest)
            : undefined;
        message.pexAddrs = (object.pexAddrs !== undefined && object.pexAddrs !== null)
            ? exports.PexAddrs.fromPartial(object.pexAddrs)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
