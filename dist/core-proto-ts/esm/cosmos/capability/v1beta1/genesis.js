/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CapabilityOwners } from "./capability";
function createBaseGenesisOwners() {
    return { index: "0", indexOwners: undefined };
}
export const GenesisOwners = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        if (message.indexOwners !== undefined) {
            CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.indexOwners = CapabilityOwners.decode(reader, reader.uint32());
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
            indexOwners: isSet(object.indexOwners) ? CapabilityOwners.fromJSON(object.indexOwners) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.indexOwners !== undefined &&
            (obj.indexOwners = message.indexOwners ? CapabilityOwners.toJSON(message.indexOwners) : undefined);
        return obj;
    },
    create(base) {
        return GenesisOwners.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisOwners();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.indexOwners = (object.indexOwners !== undefined && object.indexOwners !== null)
            ? CapabilityOwners.fromPartial(object.indexOwners)
            : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return { index: "0", owners: [] };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        for (const v of message.owners) {
            GenesisOwners.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
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
            owners: Array.isArray(object === null || object === void 0 ? void 0 : object.owners) ? object.owners.map((e) => GenesisOwners.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        if (message.owners) {
            obj.owners = message.owners.map((e) => e ? GenesisOwners.toJSON(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGenesisState();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.owners = ((_b = object.owners) === null || _b === void 0 ? void 0 : _b.map((e) => GenesisOwners.fromPartial(e))) || [];
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
