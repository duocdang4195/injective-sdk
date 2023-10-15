/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
function createBaseCapability() {
    return { index: "0" };
}
export const Capability = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCapability();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.index = longToString(reader.uint64());
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
        return { index: isSet(object.index) ? String(object.index) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    create(base) {
        return Capability.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCapability();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseOwner() {
    return { module: "", name: "" };
}
export const Owner = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.module = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
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
            module: isSet(object.module) ? String(object.module) : "",
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    create(base) {
        return Owner.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOwner();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCapabilityOwners() {
    return { owners: [] };
}
export const CapabilityOwners = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.owners) {
            Owner.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCapabilityOwners();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.owners.push(Owner.decode(reader, reader.uint32()));
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
        return { owners: Array.isArray(object === null || object === void 0 ? void 0 : object.owners) ? object.owners.map((e) => Owner.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.owners) {
            obj.owners = message.owners.map((e) => e ? Owner.toJSON(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    create(base) {
        return CapabilityOwners.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCapabilityOwners();
        message.owners = ((_a = object.owners) === null || _a === void 0 ? void 0 : _a.map((e) => Owner.fromPartial(e))) || [];
        return message;
    },
};
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
