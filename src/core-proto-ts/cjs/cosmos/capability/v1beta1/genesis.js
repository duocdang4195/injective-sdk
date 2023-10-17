"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.GenesisOwners = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const capability_1 = require("./capability");
function createBaseGenesisOwners() {
    return { index: "0", indexOwners: undefined };
}
exports.GenesisOwners = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        if (message.indexOwners !== undefined) {
            capability_1.CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisOwners();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.index = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.indexOwners = capability_1.CapabilityOwners.decode(reader, reader.uint32());
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
            index: isSet(object.index) ? String(object.index) : "0",
            indexOwners: isSet(object.indexOwners) ? capability_1.CapabilityOwners.fromJSON(object.indexOwners) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.indexOwners !== undefined &&
            (obj.indexOwners = message.indexOwners ? capability_1.CapabilityOwners.toJSON(message.indexOwners) : undefined);
        return obj;
    },
    create(base) {
        return exports.GenesisOwners.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisOwners();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.indexOwners = (object.indexOwners !== undefined && object.indexOwners !== null)
            ? capability_1.CapabilityOwners.fromPartial(object.indexOwners)
            : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return { index: "0", owners: [] };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        for (const v of message.owners) {
            exports.GenesisOwners.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.index = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.owners.push(exports.GenesisOwners.decode(reader, reader.uint32()));
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
            index: isSet(object.index) ? String(object.index) : "0",
            owners: Array.isArray(object === null || object === void 0 ? void 0 : object.owners) ? object.owners.map((e) => exports.GenesisOwners.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        if (message.owners) {
            obj.owners = message.owners.map((e) => e ? exports.GenesisOwners.toJSON(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGenesisState();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.owners = ((_b = object.owners) === null || _b === void 0 ? void 0 : _b.map((e) => exports.GenesisOwners.fromPartial(e))) || [];
        return message;
    },
};
function longToString(long) {
    return long.toString();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
