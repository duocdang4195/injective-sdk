"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimedWALMessage = exports.WALMessage = exports.EndHeight = exports.TimeoutInfo = exports.MsgInfo = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../google/protobuf/duration");
const timestamp_1 = require("../../google/protobuf/timestamp");
const events_1 = require("../types/events");
const types_1 = require("./types");
function createBaseMsgInfo() {
    return { msg: undefined, peerId: "" };
}
exports.MsgInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.msg !== undefined) {
            types_1.Message.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        if (message.peerId !== "") {
            writer.uint32(18).string(message.peerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.msg = types_1.Message.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.peerId = reader.string();
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
            msg: isSet(object.msg) ? types_1.Message.fromJSON(object.msg) : undefined,
            peerId: isSet(object.peerId) ? String(object.peerId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined && (obj.msg = message.msg ? types_1.Message.toJSON(message.msg) : undefined);
        message.peerId !== undefined && (obj.peerId = message.peerId);
        return obj;
    },
    create(base) {
        return exports.MsgInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgInfo();
        message.msg = (object.msg !== undefined && object.msg !== null) ? types_1.Message.fromPartial(object.msg) : undefined;
        message.peerId = (_a = object.peerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseTimeoutInfo() {
    return { duration: undefined, height: "0", round: 0, step: 0 };
}
exports.TimeoutInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(10).fork()).ldelim();
        }
        if (message.height !== "0") {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.step !== 0) {
            writer.uint32(32).uint32(message.step);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimeoutInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.height = longToString(reader.int64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.round = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.step = reader.uint32();
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
            duration: isSet(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined,
            height: isSet(object.height) ? String(object.height) : "0",
            round: isSet(object.round) ? Number(object.round) : 0,
            step: isSet(object.step) ? Number(object.step) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.step !== undefined && (obj.step = Math.round(message.step));
        return obj;
    },
    create(base) {
        return exports.TimeoutInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTimeoutInfo();
        message.duration = (object.duration !== undefined && object.duration !== null)
            ? duration_1.Duration.fromPartial(object.duration)
            : undefined;
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.step = (_c = object.step) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseEndHeight() {
    return { height: "0" };
}
exports.EndHeight = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEndHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToString(reader.int64());
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
        return { height: isSet(object.height) ? String(object.height) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    create(base) {
        return exports.EndHeight.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEndHeight();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseWALMessage() {
    return { eventDataRoundState: undefined, msgInfo: undefined, timeoutInfo: undefined, endHeight: undefined };
}
exports.WALMessage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.eventDataRoundState !== undefined) {
            events_1.EventDataRoundState.encode(message.eventDataRoundState, writer.uint32(10).fork()).ldelim();
        }
        if (message.msgInfo !== undefined) {
            exports.MsgInfo.encode(message.msgInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.timeoutInfo !== undefined) {
            exports.TimeoutInfo.encode(message.timeoutInfo, writer.uint32(26).fork()).ldelim();
        }
        if (message.endHeight !== undefined) {
            exports.EndHeight.encode(message.endHeight, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWALMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.eventDataRoundState = events_1.EventDataRoundState.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.msgInfo = exports.MsgInfo.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.timeoutInfo = exports.TimeoutInfo.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.endHeight = exports.EndHeight.decode(reader, reader.uint32());
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
            eventDataRoundState: isSet(object.eventDataRoundState)
                ? events_1.EventDataRoundState.fromJSON(object.eventDataRoundState)
                : undefined,
            msgInfo: isSet(object.msgInfo) ? exports.MsgInfo.fromJSON(object.msgInfo) : undefined,
            timeoutInfo: isSet(object.timeoutInfo) ? exports.TimeoutInfo.fromJSON(object.timeoutInfo) : undefined,
            endHeight: isSet(object.endHeight) ? exports.EndHeight.fromJSON(object.endHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventDataRoundState !== undefined && (obj.eventDataRoundState = message.eventDataRoundState
            ? events_1.EventDataRoundState.toJSON(message.eventDataRoundState)
            : undefined);
        message.msgInfo !== undefined && (obj.msgInfo = message.msgInfo ? exports.MsgInfo.toJSON(message.msgInfo) : undefined);
        message.timeoutInfo !== undefined &&
            (obj.timeoutInfo = message.timeoutInfo ? exports.TimeoutInfo.toJSON(message.timeoutInfo) : undefined);
        message.endHeight !== undefined &&
            (obj.endHeight = message.endHeight ? exports.EndHeight.toJSON(message.endHeight) : undefined);
        return obj;
    },
    create(base) {
        return exports.WALMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseWALMessage();
        message.eventDataRoundState = (object.eventDataRoundState !== undefined && object.eventDataRoundState !== null)
            ? events_1.EventDataRoundState.fromPartial(object.eventDataRoundState)
            : undefined;
        message.msgInfo = (object.msgInfo !== undefined && object.msgInfo !== null)
            ? exports.MsgInfo.fromPartial(object.msgInfo)
            : undefined;
        message.timeoutInfo = (object.timeoutInfo !== undefined && object.timeoutInfo !== null)
            ? exports.TimeoutInfo.fromPartial(object.timeoutInfo)
            : undefined;
        message.endHeight = (object.endHeight !== undefined && object.endHeight !== null)
            ? exports.EndHeight.fromPartial(object.endHeight)
            : undefined;
        return message;
    },
};
function createBaseTimedWALMessage() {
    return { time: undefined, msg: undefined };
}
exports.TimedWALMessage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
        }
        if (message.msg !== undefined) {
            exports.WALMessage.encode(message.msg, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimedWALMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.msg = exports.WALMessage.decode(reader, reader.uint32());
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
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            msg: isSet(object.msg) ? exports.WALMessage.fromJSON(object.msg) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.msg !== undefined && (obj.msg = message.msg ? exports.WALMessage.toJSON(message.msg) : undefined);
        return obj;
    },
    create(base) {
        return exports.TimedWALMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTimedWALMessage();
        message.time = (_a = object.time) !== null && _a !== void 0 ? _a : undefined;
        message.msg = (object.msg !== undefined && object.msg !== null) ? exports.WALMessage.fromPartial(object.msg) : undefined;
        return message;
    },
};
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1000).toString();
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (Number(t.seconds) || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
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
