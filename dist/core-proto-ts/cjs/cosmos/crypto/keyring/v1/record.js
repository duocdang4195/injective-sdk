"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Record_Offline = exports.Record_Multi = exports.Record_Ledger = exports.Record_Local = exports.Record = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../../../../google/protobuf/any");
const hd_1 = require("../../hd/v1/hd");
function createBaseRecord() {
    return { name: "", pubKey: undefined, local: undefined, ledger: undefined, multi: undefined, offline: undefined };
}
exports.Record = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.pubKey !== undefined) {
            any_1.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.local !== undefined) {
            exports.Record_Local.encode(message.local, writer.uint32(26).fork()).ldelim();
        }
        if (message.ledger !== undefined) {
            exports.Record_Ledger.encode(message.ledger, writer.uint32(34).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            exports.Record_Multi.encode(message.multi, writer.uint32(42).fork()).ldelim();
        }
        if (message.offline !== undefined) {
            exports.Record_Offline.encode(message.offline, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pubKey = any_1.Any.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.local = exports.Record_Local.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.ledger = exports.Record_Ledger.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.multi = exports.Record_Multi.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.offline = exports.Record_Offline.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? String(object.name) : "",
            pubKey: isSet(object.pubKey) ? any_1.Any.fromJSON(object.pubKey) : undefined,
            local: isSet(object.local) ? exports.Record_Local.fromJSON(object.local) : undefined,
            ledger: isSet(object.ledger) ? exports.Record_Ledger.fromJSON(object.ledger) : undefined,
            multi: isSet(object.multi) ? exports.Record_Multi.fromJSON(object.multi) : undefined,
            offline: isSet(object.offline) ? exports.Record_Offline.fromJSON(object.offline) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey ? any_1.Any.toJSON(message.pubKey) : undefined);
        message.local !== undefined && (obj.local = message.local ? exports.Record_Local.toJSON(message.local) : undefined);
        message.ledger !== undefined && (obj.ledger = message.ledger ? exports.Record_Ledger.toJSON(message.ledger) : undefined);
        message.multi !== undefined && (obj.multi = message.multi ? exports.Record_Multi.toJSON(message.multi) : undefined);
        message.offline !== undefined &&
            (obj.offline = message.offline ? exports.Record_Offline.toJSON(message.offline) : undefined);
        return obj;
    },
    create(base) {
        return exports.Record.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRecord();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
            ? any_1.Any.fromPartial(object.pubKey)
            : undefined;
        message.local = (object.local !== undefined && object.local !== null)
            ? exports.Record_Local.fromPartial(object.local)
            : undefined;
        message.ledger = (object.ledger !== undefined && object.ledger !== null)
            ? exports.Record_Ledger.fromPartial(object.ledger)
            : undefined;
        message.multi = (object.multi !== undefined && object.multi !== null)
            ? exports.Record_Multi.fromPartial(object.multi)
            : undefined;
        message.offline = (object.offline !== undefined && object.offline !== null)
            ? exports.Record_Offline.fromPartial(object.offline)
            : undefined;
        return message;
    },
};
function createBaseRecord_Local() {
    return { privKey: undefined };
}
exports.Record_Local = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.privKey !== undefined) {
            any_1.Any.encode(message.privKey, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Local();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.privKey = any_1.Any.decode(reader, reader.uint32());
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
        return { privKey: isSet(object.privKey) ? any_1.Any.fromJSON(object.privKey) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.privKey !== undefined && (obj.privKey = message.privKey ? any_1.Any.toJSON(message.privKey) : undefined);
        return obj;
    },
    create(base) {
        return exports.Record_Local.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseRecord_Local();
        message.privKey = (object.privKey !== undefined && object.privKey !== null)
            ? any_1.Any.fromPartial(object.privKey)
            : undefined;
        return message;
    },
};
function createBaseRecord_Ledger() {
    return { path: undefined };
}
exports.Record_Ledger = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.path !== undefined) {
            hd_1.BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Ledger();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.path = hd_1.BIP44Params.decode(reader, reader.uint32());
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
        return { path: isSet(object.path) ? hd_1.BIP44Params.fromJSON(object.path) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path ? hd_1.BIP44Params.toJSON(message.path) : undefined);
        return obj;
    },
    create(base) {
        return exports.Record_Ledger.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseRecord_Ledger();
        message.path = (object.path !== undefined && object.path !== null)
            ? hd_1.BIP44Params.fromPartial(object.path)
            : undefined;
        return message;
    },
};
function createBaseRecord_Multi() {
    return {};
}
exports.Record_Multi = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Multi();
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
        return exports.Record_Multi.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseRecord_Multi();
        return message;
    },
};
function createBaseRecord_Offline() {
    return {};
}
exports.Record_Offline = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Offline();
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
        return exports.Record_Offline.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseRecord_Offline();
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
