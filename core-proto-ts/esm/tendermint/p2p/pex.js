/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { NetAddress } from "./types";
function createBasePexRequest() {
    return {};
}
export const PexRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return PexRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBasePexRequest();
        return message;
    },
};
function createBasePexAddrs() {
    return { addrs: [] };
}
export const PexAddrs = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.addrs) {
            NetAddress.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePexAddrs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.addrs.push(NetAddress.decode(reader, reader.uint32()));
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
        return { addrs: Array.isArray(object === null || object === void 0 ? void 0 : object.addrs) ? object.addrs.map((e) => NetAddress.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.addrs) {
            obj.addrs = message.addrs.map((e) => e ? NetAddress.toJSON(e) : undefined);
        }
        else {
            obj.addrs = [];
        }
        return obj;
    },
    create(base) {
        return PexAddrs.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePexAddrs();
        message.addrs = ((_a = object.addrs) === null || _a === void 0 ? void 0 : _a.map((e) => NetAddress.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMessage() {
    return { pexRequest: undefined, pexAddrs: undefined };
}
export const Message = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pexRequest !== undefined) {
            PexRequest.encode(message.pexRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.pexAddrs !== undefined) {
            PexAddrs.encode(message.pexAddrs, writer.uint32(18).fork()).ldelim();
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
                    message.pexRequest = PexRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pexAddrs = PexAddrs.decode(reader, reader.uint32());
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
            pexRequest: isSet(object.pexRequest) ? PexRequest.fromJSON(object.pexRequest) : undefined,
            pexAddrs: isSet(object.pexAddrs) ? PexAddrs.fromJSON(object.pexAddrs) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pexRequest !== undefined &&
            (obj.pexRequest = message.pexRequest ? PexRequest.toJSON(message.pexRequest) : undefined);
        message.pexAddrs !== undefined && (obj.pexAddrs = message.pexAddrs ? PexAddrs.toJSON(message.pexAddrs) : undefined);
        return obj;
    },
    create(base) {
        return Message.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMessage();
        message.pexRequest = (object.pexRequest !== undefined && object.pexRequest !== null)
            ? PexRequest.fromPartial(object.pexRequest)
            : undefined;
        message.pexAddrs = (object.pexAddrs !== undefined && object.pexAddrs !== null)
            ? PexAddrs.fromPartial(object.pexAddrs)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
