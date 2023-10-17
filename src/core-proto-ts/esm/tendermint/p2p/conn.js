/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PublicKey } from "../crypto/keys";
function createBasePacketPing() {
    return {};
}
export const PacketPing = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketPing();
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
        return PacketPing.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBasePacketPing();
        return message;
    },
};
function createBasePacketPong() {
    return {};
}
export const PacketPong = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketPong();
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
        return PacketPong.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBasePacketPong();
        return message;
    },
};
function createBasePacketMsg() {
    return { channelId: 0, eof: false, data: new Uint8Array() };
}
export const PacketMsg = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== 0) {
            writer.uint32(8).int32(message.channelId);
        }
        if (message.eof === true) {
            writer.uint32(16).bool(message.eof);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.channelId = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.eof = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.data = reader.bytes();
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
            channelId: isSet(object.channelId) ? Number(object.channelId) : 0,
            eof: isSet(object.eof) ? Boolean(object.eof) : false,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
        message.eof !== undefined && (obj.eof = message.eof);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    create(base) {
        return PacketMsg.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePacketMsg();
        message.channelId = (_a = object.channelId) !== null && _a !== void 0 ? _a : 0;
        message.eof = (_b = object.eof) !== null && _b !== void 0 ? _b : false;
        message.data = (_c = object.data) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBasePacket() {
    return { packetPing: undefined, packetPong: undefined, packetMsg: undefined };
}
export const Packet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packetPing !== undefined) {
            PacketPing.encode(message.packetPing, writer.uint32(10).fork()).ldelim();
        }
        if (message.packetPong !== undefined) {
            PacketPong.encode(message.packetPong, writer.uint32(18).fork()).ldelim();
        }
        if (message.packetMsg !== undefined) {
            PacketMsg.encode(message.packetMsg, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packetPing = PacketPing.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.packetPong = PacketPong.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.packetMsg = PacketMsg.decode(reader, reader.uint32());
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
            packetPing: isSet(object.packetPing) ? PacketPing.fromJSON(object.packetPing) : undefined,
            packetPong: isSet(object.packetPong) ? PacketPong.fromJSON(object.packetPong) : undefined,
            packetMsg: isSet(object.packetMsg) ? PacketMsg.fromJSON(object.packetMsg) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.packetPing !== undefined &&
            (obj.packetPing = message.packetPing ? PacketPing.toJSON(message.packetPing) : undefined);
        message.packetPong !== undefined &&
            (obj.packetPong = message.packetPong ? PacketPong.toJSON(message.packetPong) : undefined);
        message.packetMsg !== undefined &&
            (obj.packetMsg = message.packetMsg ? PacketMsg.toJSON(message.packetMsg) : undefined);
        return obj;
    },
    create(base) {
        return Packet.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBasePacket();
        message.packetPing = (object.packetPing !== undefined && object.packetPing !== null)
            ? PacketPing.fromPartial(object.packetPing)
            : undefined;
        message.packetPong = (object.packetPong !== undefined && object.packetPong !== null)
            ? PacketPong.fromPartial(object.packetPong)
            : undefined;
        message.packetMsg = (object.packetMsg !== undefined && object.packetMsg !== null)
            ? PacketMsg.fromPartial(object.packetMsg)
            : undefined;
        return message;
    },
};
function createBaseAuthSigMessage() {
    return { pubKey: undefined, sig: new Uint8Array() };
}
export const AuthSigMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pubKey !== undefined) {
            PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.sig.length !== 0) {
            writer.uint32(18).bytes(message.sig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthSigMessage();
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
                    message.sig = reader.bytes();
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
            sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.pubKey !== undefined && (obj.pubKey = message.pubKey ? PublicKey.toJSON(message.pubKey) : undefined);
        message.sig !== undefined &&
            (obj.sig = base64FromBytes(message.sig !== undefined ? message.sig : new Uint8Array()));
        return obj;
    },
    create(base) {
        return AuthSigMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAuthSigMessage();
        message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
            ? PublicKey.fromPartial(object.pubKey)
            : undefined;
        message.sig = (_a = object.sig) !== null && _a !== void 0 ? _a : new Uint8Array();
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
function isSet(value) {
    return value !== null && value !== undefined;
}
