/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { EventDataRoundState } from "../types/events";
import { Message } from "./types";
function createBaseMsgInfo() {
    return { msg: undefined, peerId: "" };
}
export const MsgInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.msg !== undefined) {
            Message.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        if (message.peerId !== "") {
            writer.uint32(18).string(message.peerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.msg = Message.decode(reader, reader.uint32());
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
            msg: isSet(object.msg) ? Message.fromJSON(object.msg) : undefined,
            peerId: isSet(object.peerId) ? String(object.peerId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined && (obj.msg = message.msg ? Message.toJSON(message.msg) : undefined);
        message.peerId !== undefined && (obj.peerId = message.peerId);
        return obj;
    },
    create(base) {
        return MsgInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgInfo();
        message.msg = (object.msg !== undefined && object.msg !== null) ? Message.fromPartial(object.msg) : undefined;
        message.peerId = (_a = object.peerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseTimeoutInfo() {
    return { duration: undefined, height: "0", round: 0, step: 0 };
}
export const TimeoutInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimeoutInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.duration = Duration.decode(reader, reader.uint32());
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
            duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
            height: isSet(object.height) ? String(object.height) : "0",
            round: isSet(object.round) ? Number(object.round) : 0,
            step: isSet(object.step) ? Number(object.step) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.step !== undefined && (obj.step = Math.round(message.step));
        return obj;
    },
    create(base) {
        return TimeoutInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTimeoutInfo();
        message.duration = (object.duration !== undefined && object.duration !== null)
            ? Duration.fromPartial(object.duration)
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
export const EndHeight = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return EndHeight.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const WALMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.eventDataRoundState !== undefined) {
            EventDataRoundState.encode(message.eventDataRoundState, writer.uint32(10).fork()).ldelim();
        }
        if (message.msgInfo !== undefined) {
            MsgInfo.encode(message.msgInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.timeoutInfo !== undefined) {
            TimeoutInfo.encode(message.timeoutInfo, writer.uint32(26).fork()).ldelim();
        }
        if (message.endHeight !== undefined) {
            EndHeight.encode(message.endHeight, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWALMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.eventDataRoundState = EventDataRoundState.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.msgInfo = MsgInfo.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.timeoutInfo = TimeoutInfo.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.endHeight = EndHeight.decode(reader, reader.uint32());
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
                ? EventDataRoundState.fromJSON(object.eventDataRoundState)
                : undefined,
            msgInfo: isSet(object.msgInfo) ? MsgInfo.fromJSON(object.msgInfo) : undefined,
            timeoutInfo: isSet(object.timeoutInfo) ? TimeoutInfo.fromJSON(object.timeoutInfo) : undefined,
            endHeight: isSet(object.endHeight) ? EndHeight.fromJSON(object.endHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.eventDataRoundState !== undefined && (obj.eventDataRoundState = message.eventDataRoundState
            ? EventDataRoundState.toJSON(message.eventDataRoundState)
            : undefined);
        message.msgInfo !== undefined && (obj.msgInfo = message.msgInfo ? MsgInfo.toJSON(message.msgInfo) : undefined);
        message.timeoutInfo !== undefined &&
            (obj.timeoutInfo = message.timeoutInfo ? TimeoutInfo.toJSON(message.timeoutInfo) : undefined);
        message.endHeight !== undefined &&
            (obj.endHeight = message.endHeight ? EndHeight.toJSON(message.endHeight) : undefined);
        return obj;
    },
    create(base) {
        return WALMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseWALMessage();
        message.eventDataRoundState = (object.eventDataRoundState !== undefined && object.eventDataRoundState !== null)
            ? EventDataRoundState.fromPartial(object.eventDataRoundState)
            : undefined;
        message.msgInfo = (object.msgInfo !== undefined && object.msgInfo !== null)
            ? MsgInfo.fromPartial(object.msgInfo)
            : undefined;
        message.timeoutInfo = (object.timeoutInfo !== undefined && object.timeoutInfo !== null)
            ? TimeoutInfo.fromPartial(object.timeoutInfo)
            : undefined;
        message.endHeight = (object.endHeight !== undefined && object.endHeight !== null)
            ? EndHeight.fromPartial(object.endHeight)
            : undefined;
        return message;
    },
};
function createBaseTimedWALMessage() {
    return { time: undefined, msg: undefined };
}
export const TimedWALMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
        }
        if (message.msg !== undefined) {
            WALMessage.encode(message.msg, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimedWALMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.msg = WALMessage.decode(reader, reader.uint32());
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
            msg: isSet(object.msg) ? WALMessage.fromJSON(object.msg) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.msg !== undefined && (obj.msg = message.msg ? WALMessage.toJSON(message.msg) : undefined);
        return obj;
    },
    create(base) {
        return TimedWALMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTimedWALMessage();
        message.time = (_a = object.time) !== null && _a !== void 0 ? _a : undefined;
        message.msg = (object.msg !== undefined && object.msg !== null) ? WALMessage.fromPartial(object.msg) : undefined;
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
        return fromTimestamp(Timestamp.fromJSON(o));
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
