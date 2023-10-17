/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
function createBaseExtensionOptionsWeb3Tx() {
    return { typedDataChainID: "0", feePayer: "", feePayerSig: new Uint8Array() };
}
export const ExtensionOptionsWeb3Tx = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.typedDataChainID !== "0") {
            writer.uint32(8).uint64(message.typedDataChainID);
        }
        if (message.feePayer !== "") {
            writer.uint32(18).string(message.feePayer);
        }
        if (message.feePayerSig.length !== 0) {
            writer.uint32(26).bytes(message.feePayerSig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionOptionsWeb3Tx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.typedDataChainID = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.feePayer = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.feePayerSig = reader.bytes();
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
            typedDataChainID: isSet(object.typedDataChainID) ? String(object.typedDataChainID) : "0",
            feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
            feePayerSig: isSet(object.feePayerSig) ? bytesFromBase64(object.feePayerSig) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.typedDataChainID !== undefined && (obj.typedDataChainID = message.typedDataChainID);
        message.feePayer !== undefined && (obj.feePayer = message.feePayer);
        message.feePayerSig !== undefined &&
            (obj.feePayerSig = base64FromBytes(message.feePayerSig !== undefined ? message.feePayerSig : new Uint8Array()));
        return obj;
    },
    create(base) {
        return ExtensionOptionsWeb3Tx.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseExtensionOptionsWeb3Tx();
        message.typedDataChainID = (_a = object.typedDataChainID) !== null && _a !== void 0 ? _a : "0";
        message.feePayer = (_b = object.feePayer) !== null && _b !== void 0 ? _b : "";
        message.feePayerSig = (_c = object.feePayerSig) !== null && _c !== void 0 ? _c : new Uint8Array();
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
