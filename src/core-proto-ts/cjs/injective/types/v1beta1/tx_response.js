"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxResponseData = exports.TxResponseGenericMessage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseTxResponseGenericMessage() {
    return { header: "", data: new Uint8Array() };
}
exports.TxResponseGenericMessage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.header !== "") {
            writer.uint32(10).string(message.header);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResponseGenericMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.header = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
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
            header: isSet(object.header) ? String(object.header) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.TxResponseGenericMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTxResponseGenericMessage();
        message.header = (_a = object.header) !== null && _a !== void 0 ? _a : "";
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseTxResponseData() {
    return { messages: [] };
}
exports.TxResponseData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.messages) {
            exports.TxResponseGenericMessage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResponseData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.messages.push(exports.TxResponseGenericMessage.decode(reader, reader.uint32()));
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
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages)
                ? object.messages.map((e) => exports.TxResponseGenericMessage.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map((e) => e ? exports.TxResponseGenericMessage.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    create(base) {
        return exports.TxResponseData.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTxResponseData();
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TxResponseGenericMessage.fromPartial(e))) || [];
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
