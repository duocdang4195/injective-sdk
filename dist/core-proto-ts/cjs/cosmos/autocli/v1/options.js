"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionalArgDescriptor = exports.FlagOptions = exports.RpcCommandOptions_FlagOptionsEntry = exports.RpcCommandOptions = exports.ServiceCommandDescriptor_SubCommandsEntry = exports.ServiceCommandDescriptor = exports.ModuleOptions = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseModuleOptions() {
    return { tx: undefined, query: undefined };
}
exports.ModuleOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tx !== undefined) {
            exports.ServiceCommandDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.ServiceCommandDescriptor.encode(message.query, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tx = exports.ServiceCommandDescriptor.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.query = exports.ServiceCommandDescriptor.decode(reader, reader.uint32());
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
            tx: isSet(object.tx) ? exports.ServiceCommandDescriptor.fromJSON(object.tx) : undefined,
            query: isSet(object.query) ? exports.ServiceCommandDescriptor.fromJSON(object.query) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? exports.ServiceCommandDescriptor.toJSON(message.tx) : undefined);
        message.query !== undefined &&
            (obj.query = message.query ? exports.ServiceCommandDescriptor.toJSON(message.query) : undefined);
        return obj;
    },
    create(base) {
        return exports.ModuleOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseModuleOptions();
        message.tx = (object.tx !== undefined && object.tx !== null)
            ? exports.ServiceCommandDescriptor.fromPartial(object.tx)
            : undefined;
        message.query = (object.query !== undefined && object.query !== null)
            ? exports.ServiceCommandDescriptor.fromPartial(object.query)
            : undefined;
        return message;
    },
};
function createBaseServiceCommandDescriptor() {
    return { service: "", rpcCommandOptions: [], subCommands: {} };
}
exports.ServiceCommandDescriptor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.service !== "") {
            writer.uint32(10).string(message.service);
        }
        for (const v of message.rpcCommandOptions) {
            exports.RpcCommandOptions.encode(v, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.subCommands).forEach(([key, value]) => {
            exports.ServiceCommandDescriptor_SubCommandsEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceCommandDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.rpcCommandOptions.push(exports.RpcCommandOptions.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    const entry3 = exports.ServiceCommandDescriptor_SubCommandsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.subCommands[entry3.key] = entry3.value;
                    }
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
            service: isSet(object.service) ? String(object.service) : "",
            rpcCommandOptions: Array.isArray(object === null || object === void 0 ? void 0 : object.rpcCommandOptions)
                ? object.rpcCommandOptions.map((e) => exports.RpcCommandOptions.fromJSON(e))
                : [],
            subCommands: isObject(object.subCommands)
                ? Object.entries(object.subCommands).reduce((acc, [key, value]) => {
                    acc[key] = exports.ServiceCommandDescriptor.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.service !== undefined && (obj.service = message.service);
        if (message.rpcCommandOptions) {
            obj.rpcCommandOptions = message.rpcCommandOptions.map((e) => e ? exports.RpcCommandOptions.toJSON(e) : undefined);
        }
        else {
            obj.rpcCommandOptions = [];
        }
        obj.subCommands = {};
        if (message.subCommands) {
            Object.entries(message.subCommands).forEach(([k, v]) => {
                obj.subCommands[k] = exports.ServiceCommandDescriptor.toJSON(v);
            });
        }
        return obj;
    },
    create(base) {
        return exports.ServiceCommandDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseServiceCommandDescriptor();
        message.service = (_a = object.service) !== null && _a !== void 0 ? _a : "";
        message.rpcCommandOptions = ((_b = object.rpcCommandOptions) === null || _b === void 0 ? void 0 : _b.map((e) => exports.RpcCommandOptions.fromPartial(e))) || [];
        message.subCommands = Object.entries((_c = object.subCommands) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.ServiceCommandDescriptor.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseServiceCommandDescriptor_SubCommandsEntry() {
    return { key: "", value: undefined };
}
exports.ServiceCommandDescriptor_SubCommandsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.ServiceCommandDescriptor.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.ServiceCommandDescriptor.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.ServiceCommandDescriptor.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.ServiceCommandDescriptor.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return exports.ServiceCommandDescriptor_SubCommandsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.ServiceCommandDescriptor.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseRpcCommandOptions() {
    return {
        rpcMethod: "",
        use: "",
        long: "",
        short: "",
        example: "",
        alias: [],
        suggestFor: [],
        deprecated: "",
        version: "",
        flagOptions: {},
        positionalArgs: [],
        skip: false,
    };
}
exports.RpcCommandOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.rpcMethod !== "") {
            writer.uint32(10).string(message.rpcMethod);
        }
        if (message.use !== "") {
            writer.uint32(18).string(message.use);
        }
        if (message.long !== "") {
            writer.uint32(26).string(message.long);
        }
        if (message.short !== "") {
            writer.uint32(34).string(message.short);
        }
        if (message.example !== "") {
            writer.uint32(42).string(message.example);
        }
        for (const v of message.alias) {
            writer.uint32(50).string(v);
        }
        for (const v of message.suggestFor) {
            writer.uint32(58).string(v);
        }
        if (message.deprecated !== "") {
            writer.uint32(66).string(message.deprecated);
        }
        if (message.version !== "") {
            writer.uint32(74).string(message.version);
        }
        Object.entries(message.flagOptions).forEach(([key, value]) => {
            exports.RpcCommandOptions_FlagOptionsEntry.encode({ key: key, value }, writer.uint32(82).fork()).ldelim();
        });
        for (const v of message.positionalArgs) {
            exports.PositionalArgDescriptor.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.skip === true) {
            writer.uint32(96).bool(message.skip);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRpcCommandOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.rpcMethod = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.use = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.long = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.short = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.example = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.alias.push(reader.string());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.suggestFor.push(reader.string());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.deprecated = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    const entry10 = exports.RpcCommandOptions_FlagOptionsEntry.decode(reader, reader.uint32());
                    if (entry10.value !== undefined) {
                        message.flagOptions[entry10.key] = entry10.value;
                    }
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.positionalArgs.push(exports.PositionalArgDescriptor.decode(reader, reader.uint32()));
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.skip = reader.bool();
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
            rpcMethod: isSet(object.rpcMethod) ? String(object.rpcMethod) : "",
            use: isSet(object.use) ? String(object.use) : "",
            long: isSet(object.long) ? String(object.long) : "",
            short: isSet(object.short) ? String(object.short) : "",
            example: isSet(object.example) ? String(object.example) : "",
            alias: Array.isArray(object === null || object === void 0 ? void 0 : object.alias) ? object.alias.map((e) => String(e)) : [],
            suggestFor: Array.isArray(object === null || object === void 0 ? void 0 : object.suggestFor) ? object.suggestFor.map((e) => String(e)) : [],
            deprecated: isSet(object.deprecated) ? String(object.deprecated) : "",
            version: isSet(object.version) ? String(object.version) : "",
            flagOptions: isObject(object.flagOptions)
                ? Object.entries(object.flagOptions).reduce((acc, [key, value]) => {
                    acc[key] = exports.FlagOptions.fromJSON(value);
                    return acc;
                }, {})
                : {},
            positionalArgs: Array.isArray(object === null || object === void 0 ? void 0 : object.positionalArgs)
                ? object.positionalArgs.map((e) => exports.PositionalArgDescriptor.fromJSON(e))
                : [],
            skip: isSet(object.skip) ? Boolean(object.skip) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.rpcMethod !== undefined && (obj.rpcMethod = message.rpcMethod);
        message.use !== undefined && (obj.use = message.use);
        message.long !== undefined && (obj.long = message.long);
        message.short !== undefined && (obj.short = message.short);
        message.example !== undefined && (obj.example = message.example);
        if (message.alias) {
            obj.alias = message.alias.map((e) => e);
        }
        else {
            obj.alias = [];
        }
        if (message.suggestFor) {
            obj.suggestFor = message.suggestFor.map((e) => e);
        }
        else {
            obj.suggestFor = [];
        }
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.version !== undefined && (obj.version = message.version);
        obj.flagOptions = {};
        if (message.flagOptions) {
            Object.entries(message.flagOptions).forEach(([k, v]) => {
                obj.flagOptions[k] = exports.FlagOptions.toJSON(v);
            });
        }
        if (message.positionalArgs) {
            obj.positionalArgs = message.positionalArgs.map((e) => e ? exports.PositionalArgDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.positionalArgs = [];
        }
        message.skip !== undefined && (obj.skip = message.skip);
        return obj;
    },
    create(base) {
        return exports.RpcCommandOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBaseRpcCommandOptions();
        message.rpcMethod = (_a = object.rpcMethod) !== null && _a !== void 0 ? _a : "";
        message.use = (_b = object.use) !== null && _b !== void 0 ? _b : "";
        message.long = (_c = object.long) !== null && _c !== void 0 ? _c : "";
        message.short = (_d = object.short) !== null && _d !== void 0 ? _d : "";
        message.example = (_e = object.example) !== null && _e !== void 0 ? _e : "";
        message.alias = ((_f = object.alias) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.suggestFor = ((_g = object.suggestFor) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.deprecated = (_h = object.deprecated) !== null && _h !== void 0 ? _h : "";
        message.version = (_j = object.version) !== null && _j !== void 0 ? _j : "";
        message.flagOptions = Object.entries((_k = object.flagOptions) !== null && _k !== void 0 ? _k : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.FlagOptions.fromPartial(value);
            }
            return acc;
        }, {});
        message.positionalArgs = ((_l = object.positionalArgs) === null || _l === void 0 ? void 0 : _l.map((e) => exports.PositionalArgDescriptor.fromPartial(e))) || [];
        message.skip = (_m = object.skip) !== null && _m !== void 0 ? _m : false;
        return message;
    },
};
function createBaseRpcCommandOptions_FlagOptionsEntry() {
    return { key: "", value: undefined };
}
exports.RpcCommandOptions_FlagOptionsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.FlagOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRpcCommandOptions_FlagOptionsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.FlagOptions.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.FlagOptions.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? exports.FlagOptions.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return exports.RpcCommandOptions_FlagOptionsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRpcCommandOptions_FlagOptionsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.FlagOptions.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseFlagOptions() {
    return {
        name: "",
        shorthand: "",
        usage: "",
        defaultValue: "",
        noOptDefaultValue: "",
        deprecated: "",
        shorthandDeprecated: "",
        hidden: false,
    };
}
exports.FlagOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.shorthand !== "") {
            writer.uint32(18).string(message.shorthand);
        }
        if (message.usage !== "") {
            writer.uint32(26).string(message.usage);
        }
        if (message.defaultValue !== "") {
            writer.uint32(34).string(message.defaultValue);
        }
        if (message.noOptDefaultValue !== "") {
            writer.uint32(42).string(message.noOptDefaultValue);
        }
        if (message.deprecated !== "") {
            writer.uint32(50).string(message.deprecated);
        }
        if (message.shorthandDeprecated !== "") {
            writer.uint32(58).string(message.shorthandDeprecated);
        }
        if (message.hidden === true) {
            writer.uint32(64).bool(message.hidden);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFlagOptions();
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
                    message.shorthand = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.usage = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.defaultValue = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.noOptDefaultValue = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.deprecated = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.shorthandDeprecated = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.hidden = reader.bool();
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
            shorthand: isSet(object.shorthand) ? String(object.shorthand) : "",
            usage: isSet(object.usage) ? String(object.usage) : "",
            defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
            noOptDefaultValue: isSet(object.noOptDefaultValue) ? String(object.noOptDefaultValue) : "",
            deprecated: isSet(object.deprecated) ? String(object.deprecated) : "",
            shorthandDeprecated: isSet(object.shorthandDeprecated) ? String(object.shorthandDeprecated) : "",
            hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.shorthand !== undefined && (obj.shorthand = message.shorthand);
        message.usage !== undefined && (obj.usage = message.usage);
        message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
        message.noOptDefaultValue !== undefined && (obj.noOptDefaultValue = message.noOptDefaultValue);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.shorthandDeprecated !== undefined && (obj.shorthandDeprecated = message.shorthandDeprecated);
        message.hidden !== undefined && (obj.hidden = message.hidden);
        return obj;
    },
    create(base) {
        return exports.FlagOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseFlagOptions();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.shorthand = (_b = object.shorthand) !== null && _b !== void 0 ? _b : "";
        message.usage = (_c = object.usage) !== null && _c !== void 0 ? _c : "";
        message.defaultValue = (_d = object.defaultValue) !== null && _d !== void 0 ? _d : "";
        message.noOptDefaultValue = (_e = object.noOptDefaultValue) !== null && _e !== void 0 ? _e : "";
        message.deprecated = (_f = object.deprecated) !== null && _f !== void 0 ? _f : "";
        message.shorthandDeprecated = (_g = object.shorthandDeprecated) !== null && _g !== void 0 ? _g : "";
        message.hidden = (_h = object.hidden) !== null && _h !== void 0 ? _h : false;
        return message;
    },
};
function createBasePositionalArgDescriptor() {
    return { protoField: "", varargs: false };
}
exports.PositionalArgDescriptor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.protoField !== "") {
            writer.uint32(10).string(message.protoField);
        }
        if (message.varargs === true) {
            writer.uint32(16).bool(message.varargs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionalArgDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.protoField = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.varargs = reader.bool();
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
            protoField: isSet(object.protoField) ? String(object.protoField) : "",
            varargs: isSet(object.varargs) ? Boolean(object.varargs) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.protoField !== undefined && (obj.protoField = message.protoField);
        message.varargs !== undefined && (obj.varargs = message.varargs);
        return obj;
    },
    create(base) {
        return exports.PositionalArgDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePositionalArgDescriptor();
        message.protoField = (_a = object.protoField) !== null && _a !== void 0 ? _a : "";
        message.varargs = (_b = object.varargs) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
