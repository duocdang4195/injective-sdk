/* eslint-disable */
import _m0 from "protobufjs/minimal";
function createBaseModule() {
    return { appName: "", beginBlockers: [], endBlockers: [], initGenesis: [], exportGenesis: [], overrideStoreKeys: [] };
}
export const Module = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.appName !== "") {
            writer.uint32(10).string(message.appName);
        }
        for (const v of message.beginBlockers) {
            writer.uint32(18).string(v);
        }
        for (const v of message.endBlockers) {
            writer.uint32(26).string(v);
        }
        for (const v of message.initGenesis) {
            writer.uint32(34).string(v);
        }
        for (const v of message.exportGenesis) {
            writer.uint32(42).string(v);
        }
        for (const v of message.overrideStoreKeys) {
            StoreKeyConfig.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.appName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.beginBlockers.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.endBlockers.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.initGenesis.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.exportGenesis.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.overrideStoreKeys.push(StoreKeyConfig.decode(reader, reader.uint32()));
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
            appName: isSet(object.appName) ? String(object.appName) : "",
            beginBlockers: Array.isArray(object === null || object === void 0 ? void 0 : object.beginBlockers) ? object.beginBlockers.map((e) => String(e)) : [],
            endBlockers: Array.isArray(object === null || object === void 0 ? void 0 : object.endBlockers) ? object.endBlockers.map((e) => String(e)) : [],
            initGenesis: Array.isArray(object === null || object === void 0 ? void 0 : object.initGenesis) ? object.initGenesis.map((e) => String(e)) : [],
            exportGenesis: Array.isArray(object === null || object === void 0 ? void 0 : object.exportGenesis) ? object.exportGenesis.map((e) => String(e)) : [],
            overrideStoreKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.overrideStoreKeys)
                ? object.overrideStoreKeys.map((e) => StoreKeyConfig.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appName !== undefined && (obj.appName = message.appName);
        if (message.beginBlockers) {
            obj.beginBlockers = message.beginBlockers.map((e) => e);
        }
        else {
            obj.beginBlockers = [];
        }
        if (message.endBlockers) {
            obj.endBlockers = message.endBlockers.map((e) => e);
        }
        else {
            obj.endBlockers = [];
        }
        if (message.initGenesis) {
            obj.initGenesis = message.initGenesis.map((e) => e);
        }
        else {
            obj.initGenesis = [];
        }
        if (message.exportGenesis) {
            obj.exportGenesis = message.exportGenesis.map((e) => e);
        }
        else {
            obj.exportGenesis = [];
        }
        if (message.overrideStoreKeys) {
            obj.overrideStoreKeys = message.overrideStoreKeys.map((e) => e ? StoreKeyConfig.toJSON(e) : undefined);
        }
        else {
            obj.overrideStoreKeys = [];
        }
        return obj;
    },
    create(base) {
        return Module.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseModule();
        message.appName = (_a = object.appName) !== null && _a !== void 0 ? _a : "";
        message.beginBlockers = ((_b = object.beginBlockers) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.endBlockers = ((_c = object.endBlockers) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.initGenesis = ((_d = object.initGenesis) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.exportGenesis = ((_e = object.exportGenesis) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.overrideStoreKeys = ((_f = object.overrideStoreKeys) === null || _f === void 0 ? void 0 : _f.map((e) => StoreKeyConfig.fromPartial(e))) || [];
        return message;
    },
};
function createBaseStoreKeyConfig() {
    return { moduleName: "", kvStoreKey: "" };
}
export const StoreKeyConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.moduleName !== "") {
            writer.uint32(10).string(message.moduleName);
        }
        if (message.kvStoreKey !== "") {
            writer.uint32(18).string(message.kvStoreKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreKeyConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.moduleName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.kvStoreKey = reader.string();
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
            moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
            kvStoreKey: isSet(object.kvStoreKey) ? String(object.kvStoreKey) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.moduleName !== undefined && (obj.moduleName = message.moduleName);
        message.kvStoreKey !== undefined && (obj.kvStoreKey = message.kvStoreKey);
        return obj;
    },
    create(base) {
        return StoreKeyConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStoreKeyConfig();
        message.moduleName = (_a = object.moduleName) !== null && _a !== void 0 ? _a : "";
        message.kvStoreKey = (_b = object.kvStoreKey) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
