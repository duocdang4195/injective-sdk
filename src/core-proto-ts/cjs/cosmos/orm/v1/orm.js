"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonDescriptor = exports.SecondaryIndexDescriptor = exports.PrimaryKeyDescriptor = exports.TableDescriptor = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseTableDescriptor() {
    return { primaryKey: undefined, index: [], id: 0 };
}
exports.TableDescriptor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.primaryKey !== undefined) {
            exports.PrimaryKeyDescriptor.encode(message.primaryKey, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.index) {
            exports.SecondaryIndexDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.id !== 0) {
            writer.uint32(24).uint32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTableDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.primaryKey = exports.PrimaryKeyDescriptor.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.index.push(exports.SecondaryIndexDescriptor.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.id = reader.uint32();
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
            primaryKey: isSet(object.primaryKey) ? exports.PrimaryKeyDescriptor.fromJSON(object.primaryKey) : undefined,
            index: Array.isArray(object === null || object === void 0 ? void 0 : object.index) ? object.index.map((e) => exports.SecondaryIndexDescriptor.fromJSON(e)) : [],
            id: isSet(object.id) ? Number(object.id) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.primaryKey !== undefined &&
            (obj.primaryKey = message.primaryKey ? exports.PrimaryKeyDescriptor.toJSON(message.primaryKey) : undefined);
        if (message.index) {
            obj.index = message.index.map((e) => e ? exports.SecondaryIndexDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.index = [];
        }
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    create(base) {
        return exports.TableDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTableDescriptor();
        message.primaryKey = (object.primaryKey !== undefined && object.primaryKey !== null)
            ? exports.PrimaryKeyDescriptor.fromPartial(object.primaryKey)
            : undefined;
        message.index = ((_a = object.index) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SecondaryIndexDescriptor.fromPartial(e))) || [];
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBasePrimaryKeyDescriptor() {
    return { fields: "", autoIncrement: false };
}
exports.PrimaryKeyDescriptor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.autoIncrement === true) {
            writer.uint32(16).bool(message.autoIncrement);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrimaryKeyDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fields = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.autoIncrement = reader.bool();
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
            fields: isSet(object.fields) ? String(object.fields) : "",
            autoIncrement: isSet(object.autoIncrement) ? Boolean(object.autoIncrement) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.fields !== undefined && (obj.fields = message.fields);
        message.autoIncrement !== undefined && (obj.autoIncrement = message.autoIncrement);
        return obj;
    },
    create(base) {
        return exports.PrimaryKeyDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePrimaryKeyDescriptor();
        message.fields = (_a = object.fields) !== null && _a !== void 0 ? _a : "";
        message.autoIncrement = (_b = object.autoIncrement) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseSecondaryIndexDescriptor() {
    return { fields: "", id: 0, unique: false };
}
exports.SecondaryIndexDescriptor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint32(message.id);
        }
        if (message.unique === true) {
            writer.uint32(24).bool(message.unique);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecondaryIndexDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fields = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.id = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.unique = reader.bool();
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
            fields: isSet(object.fields) ? String(object.fields) : "",
            id: isSet(object.id) ? Number(object.id) : 0,
            unique: isSet(object.unique) ? Boolean(object.unique) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.fields !== undefined && (obj.fields = message.fields);
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.unique !== undefined && (obj.unique = message.unique);
        return obj;
    },
    create(base) {
        return exports.SecondaryIndexDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSecondaryIndexDescriptor();
        message.fields = (_a = object.fields) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : 0;
        message.unique = (_c = object.unique) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseSingletonDescriptor() {
    return { id: 0 };
}
exports.SingletonDescriptor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSingletonDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = reader.uint32();
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
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    create(base) {
        return exports.SingletonDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSingletonDescriptor();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
