/* eslint-disable */
import _m0 from "protobufjs/minimal";
export var HashOp;
(function (HashOp) {
    /** NO_HASH - NO_HASH is the default if no data passed. Note this is an illegal argument some places. */
    HashOp[HashOp["NO_HASH"] = 0] = "NO_HASH";
    HashOp[HashOp["SHA256"] = 1] = "SHA256";
    HashOp[HashOp["SHA512"] = 2] = "SHA512";
    HashOp[HashOp["KECCAK"] = 3] = "KECCAK";
    HashOp[HashOp["RIPEMD160"] = 4] = "RIPEMD160";
    /** BITCOIN - ripemd160(sha256(x)) */
    HashOp[HashOp["BITCOIN"] = 5] = "BITCOIN";
    HashOp[HashOp["SHA512_256"] = 6] = "SHA512_256";
    HashOp[HashOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HashOp || (HashOp = {}));
export function hashOpFromJSON(object) {
    switch (object) {
        case 0:
        case "NO_HASH":
            return HashOp.NO_HASH;
        case 1:
        case "SHA256":
            return HashOp.SHA256;
        case 2:
        case "SHA512":
            return HashOp.SHA512;
        case 3:
        case "KECCAK":
            return HashOp.KECCAK;
        case 4:
        case "RIPEMD160":
            return HashOp.RIPEMD160;
        case 5:
        case "BITCOIN":
            return HashOp.BITCOIN;
        case 6:
        case "SHA512_256":
            return HashOp.SHA512_256;
        case -1:
        case "UNRECOGNIZED":
        default:
            return HashOp.UNRECOGNIZED;
    }
}
export function hashOpToJSON(object) {
    switch (object) {
        case HashOp.NO_HASH:
            return "NO_HASH";
        case HashOp.SHA256:
            return "SHA256";
        case HashOp.SHA512:
            return "SHA512";
        case HashOp.KECCAK:
            return "KECCAK";
        case HashOp.RIPEMD160:
            return "RIPEMD160";
        case HashOp.BITCOIN:
            return "BITCOIN";
        case HashOp.SHA512_256:
            return "SHA512_256";
        case HashOp.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/**
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 */
export var LengthOp;
(function (LengthOp) {
    /** NO_PREFIX - NO_PREFIX don't include any length info */
    LengthOp[LengthOp["NO_PREFIX"] = 0] = "NO_PREFIX";
    /** VAR_PROTO - VAR_PROTO uses protobuf (and go-amino) varint encoding of the length */
    LengthOp[LengthOp["VAR_PROTO"] = 1] = "VAR_PROTO";
    /** VAR_RLP - VAR_RLP uses rlp int encoding of the length */
    LengthOp[LengthOp["VAR_RLP"] = 2] = "VAR_RLP";
    /** FIXED32_BIG - FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer */
    LengthOp[LengthOp["FIXED32_BIG"] = 3] = "FIXED32_BIG";
    /** FIXED32_LITTLE - FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer */
    LengthOp[LengthOp["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
    /** FIXED64_BIG - FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer */
    LengthOp[LengthOp["FIXED64_BIG"] = 5] = "FIXED64_BIG";
    /** FIXED64_LITTLE - FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer */
    LengthOp[LengthOp["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
    /** REQUIRE_32_BYTES - REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output) */
    LengthOp[LengthOp["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
    /** REQUIRE_64_BYTES - REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output) */
    LengthOp[LengthOp["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
    LengthOp[LengthOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LengthOp || (LengthOp = {}));
export function lengthOpFromJSON(object) {
    switch (object) {
        case 0:
        case "NO_PREFIX":
            return LengthOp.NO_PREFIX;
        case 1:
        case "VAR_PROTO":
            return LengthOp.VAR_PROTO;
        case 2:
        case "VAR_RLP":
            return LengthOp.VAR_RLP;
        case 3:
        case "FIXED32_BIG":
            return LengthOp.FIXED32_BIG;
        case 4:
        case "FIXED32_LITTLE":
            return LengthOp.FIXED32_LITTLE;
        case 5:
        case "FIXED64_BIG":
            return LengthOp.FIXED64_BIG;
        case 6:
        case "FIXED64_LITTLE":
            return LengthOp.FIXED64_LITTLE;
        case 7:
        case "REQUIRE_32_BYTES":
            return LengthOp.REQUIRE_32_BYTES;
        case 8:
        case "REQUIRE_64_BYTES":
            return LengthOp.REQUIRE_64_BYTES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LengthOp.UNRECOGNIZED;
    }
}
export function lengthOpToJSON(object) {
    switch (object) {
        case LengthOp.NO_PREFIX:
            return "NO_PREFIX";
        case LengthOp.VAR_PROTO:
            return "VAR_PROTO";
        case LengthOp.VAR_RLP:
            return "VAR_RLP";
        case LengthOp.FIXED32_BIG:
            return "FIXED32_BIG";
        case LengthOp.FIXED32_LITTLE:
            return "FIXED32_LITTLE";
        case LengthOp.FIXED64_BIG:
            return "FIXED64_BIG";
        case LengthOp.FIXED64_LITTLE:
            return "FIXED64_LITTLE";
        case LengthOp.REQUIRE_32_BYTES:
            return "REQUIRE_32_BYTES";
        case LengthOp.REQUIRE_64_BYTES:
            return "REQUIRE_64_BYTES";
        case LengthOp.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseExistenceProof() {
    return { key: new Uint8Array(), value: new Uint8Array(), leaf: undefined, path: [] };
}
export const ExistenceProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.leaf !== undefined) {
            LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.path) {
            InnerOp.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.leaf = LeafOp.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.path.push(InnerOp.decode(reader, reader.uint32()));
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
            leaf: isSet(object.leaf) ? LeafOp.fromJSON(object.leaf) : undefined,
            path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map((e) => InnerOp.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.leaf !== undefined && (obj.leaf = message.leaf ? LeafOp.toJSON(message.leaf) : undefined);
        if (message.path) {
            obj.path = message.path.map((e) => e ? InnerOp.toJSON(e) : undefined);
        }
        else {
            obj.path = [];
        }
        return obj;
    },
    create(base) {
        return ExistenceProof.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseExistenceProof();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.leaf = (object.leaf !== undefined && object.leaf !== null) ? LeafOp.fromPartial(object.leaf) : undefined;
        message.path = ((_c = object.path) === null || _c === void 0 ? void 0 : _c.map((e) => InnerOp.fromPartial(e))) || [];
        return message;
    },
};
function createBaseNonExistenceProof() {
    return { key: new Uint8Array(), left: undefined, right: undefined };
}
export const NonExistenceProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.left !== undefined) {
            ExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
        }
        if (message.right !== undefined) {
            ExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNonExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.left = ExistenceProof.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.right = ExistenceProof.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            left: isSet(object.left) ? ExistenceProof.fromJSON(object.left) : undefined,
            right: isSet(object.right) ? ExistenceProof.fromJSON(object.right) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.left !== undefined && (obj.left = message.left ? ExistenceProof.toJSON(message.left) : undefined);
        message.right !== undefined && (obj.right = message.right ? ExistenceProof.toJSON(message.right) : undefined);
        return obj;
    },
    create(base) {
        return NonExistenceProof.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseNonExistenceProof();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.left = (object.left !== undefined && object.left !== null)
            ? ExistenceProof.fromPartial(object.left)
            : undefined;
        message.right = (object.right !== undefined && object.right !== null)
            ? ExistenceProof.fromPartial(object.right)
            : undefined;
        return message;
    },
};
function createBaseCommitmentProof() {
    return { exist: undefined, nonexist: undefined, batch: undefined, compressed: undefined };
}
export const CommitmentProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exist !== undefined) {
            ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        if (message.batch !== undefined) {
            BatchProof.encode(message.batch, writer.uint32(26).fork()).ldelim();
        }
        if (message.compressed !== undefined) {
            CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitmentProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.exist = ExistenceProof.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.batch = BatchProof.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.compressed = CompressedBatchProof.decode(reader, reader.uint32());
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
            exist: isSet(object.exist) ? ExistenceProof.fromJSON(object.exist) : undefined,
            nonexist: isSet(object.nonexist) ? NonExistenceProof.fromJSON(object.nonexist) : undefined,
            batch: isSet(object.batch) ? BatchProof.fromJSON(object.batch) : undefined,
            compressed: isSet(object.compressed) ? CompressedBatchProof.fromJSON(object.compressed) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.exist !== undefined && (obj.exist = message.exist ? ExistenceProof.toJSON(message.exist) : undefined);
        message.nonexist !== undefined &&
            (obj.nonexist = message.nonexist ? NonExistenceProof.toJSON(message.nonexist) : undefined);
        message.batch !== undefined && (obj.batch = message.batch ? BatchProof.toJSON(message.batch) : undefined);
        message.compressed !== undefined &&
            (obj.compressed = message.compressed ? CompressedBatchProof.toJSON(message.compressed) : undefined);
        return obj;
    },
    create(base) {
        return CommitmentProof.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCommitmentProof();
        message.exist = (object.exist !== undefined && object.exist !== null)
            ? ExistenceProof.fromPartial(object.exist)
            : undefined;
        message.nonexist = (object.nonexist !== undefined && object.nonexist !== null)
            ? NonExistenceProof.fromPartial(object.nonexist)
            : undefined;
        message.batch = (object.batch !== undefined && object.batch !== null)
            ? BatchProof.fromPartial(object.batch)
            : undefined;
        message.compressed = (object.compressed !== undefined && object.compressed !== null)
            ? CompressedBatchProof.fromPartial(object.compressed)
            : undefined;
        return message;
    },
};
function createBaseLeafOp() {
    return { hash: 0, prehashKey: 0, prehashValue: 0, length: 0, prefix: new Uint8Array() };
}
export const LeafOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== 0) {
            writer.uint32(8).int32(message.hash);
        }
        if (message.prehashKey !== 0) {
            writer.uint32(16).int32(message.prehashKey);
        }
        if (message.prehashValue !== 0) {
            writer.uint32(24).int32(message.prehashValue);
        }
        if (message.length !== 0) {
            writer.uint32(32).int32(message.length);
        }
        if (message.prefix.length !== 0) {
            writer.uint32(42).bytes(message.prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeafOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.hash = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.prehashKey = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.prehashValue = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.length = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.prefix = reader.bytes();
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
            hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
            prehashKey: isSet(object.prehashKey) ? hashOpFromJSON(object.prehashKey) : 0,
            prehashValue: isSet(object.prehashValue) ? hashOpFromJSON(object.prehashValue) : 0,
            length: isSet(object.length) ? lengthOpFromJSON(object.length) : 0,
            prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
        message.prehashKey !== undefined && (obj.prehashKey = hashOpToJSON(message.prehashKey));
        message.prehashValue !== undefined && (obj.prehashValue = hashOpToJSON(message.prehashValue));
        message.length !== undefined && (obj.length = lengthOpToJSON(message.length));
        message.prefix !== undefined &&
            (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
        return obj;
    },
    create(base) {
        return LeafOp.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseLeafOp();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : 0;
        message.prehashKey = (_b = object.prehashKey) !== null && _b !== void 0 ? _b : 0;
        message.prehashValue = (_c = object.prehashValue) !== null && _c !== void 0 ? _c : 0;
        message.length = (_d = object.length) !== null && _d !== void 0 ? _d : 0;
        message.prefix = (_e = object.prefix) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    },
};
function createBaseInnerOp() {
    return { hash: 0, prefix: new Uint8Array(), suffix: new Uint8Array() };
}
export const InnerOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== 0) {
            writer.uint32(8).int32(message.hash);
        }
        if (message.prefix.length !== 0) {
            writer.uint32(18).bytes(message.prefix);
        }
        if (message.suffix.length !== 0) {
            writer.uint32(26).bytes(message.suffix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInnerOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.hash = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.prefix = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.suffix = reader.bytes();
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
            hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
            prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(),
            suffix: isSet(object.suffix) ? bytesFromBase64(object.suffix) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
        message.prefix !== undefined &&
            (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
        message.suffix !== undefined &&
            (obj.suffix = base64FromBytes(message.suffix !== undefined ? message.suffix : new Uint8Array()));
        return obj;
    },
    create(base) {
        return InnerOp.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseInnerOp();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : 0;
        message.prefix = (_b = object.prefix) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.suffix = (_c = object.suffix) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseProofSpec() {
    return { leafSpec: undefined, innerSpec: undefined, maxDepth: 0, minDepth: 0, prehashKeyBeforeComparison: false };
}
export const ProofSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.leafSpec !== undefined) {
            LeafOp.encode(message.leafSpec, writer.uint32(10).fork()).ldelim();
        }
        if (message.innerSpec !== undefined) {
            InnerSpec.encode(message.innerSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxDepth !== 0) {
            writer.uint32(24).int32(message.maxDepth);
        }
        if (message.minDepth !== 0) {
            writer.uint32(32).int32(message.minDepth);
        }
        if (message.prehashKeyBeforeComparison === true) {
            writer.uint32(40).bool(message.prehashKeyBeforeComparison);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.leafSpec = LeafOp.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.innerSpec = InnerSpec.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.maxDepth = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.minDepth = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.prehashKeyBeforeComparison = reader.bool();
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
            leafSpec: isSet(object.leafSpec) ? LeafOp.fromJSON(object.leafSpec) : undefined,
            innerSpec: isSet(object.innerSpec) ? InnerSpec.fromJSON(object.innerSpec) : undefined,
            maxDepth: isSet(object.maxDepth) ? Number(object.maxDepth) : 0,
            minDepth: isSet(object.minDepth) ? Number(object.minDepth) : 0,
            prehashKeyBeforeComparison: isSet(object.prehashKeyBeforeComparison)
                ? Boolean(object.prehashKeyBeforeComparison)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.leafSpec !== undefined && (obj.leafSpec = message.leafSpec ? LeafOp.toJSON(message.leafSpec) : undefined);
        message.innerSpec !== undefined &&
            (obj.innerSpec = message.innerSpec ? InnerSpec.toJSON(message.innerSpec) : undefined);
        message.maxDepth !== undefined && (obj.maxDepth = Math.round(message.maxDepth));
        message.minDepth !== undefined && (obj.minDepth = Math.round(message.minDepth));
        message.prehashKeyBeforeComparison !== undefined &&
            (obj.prehashKeyBeforeComparison = message.prehashKeyBeforeComparison);
        return obj;
    },
    create(base) {
        return ProofSpec.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseProofSpec();
        message.leafSpec = (object.leafSpec !== undefined && object.leafSpec !== null)
            ? LeafOp.fromPartial(object.leafSpec)
            : undefined;
        message.innerSpec = (object.innerSpec !== undefined && object.innerSpec !== null)
            ? InnerSpec.fromPartial(object.innerSpec)
            : undefined;
        message.maxDepth = (_a = object.maxDepth) !== null && _a !== void 0 ? _a : 0;
        message.minDepth = (_b = object.minDepth) !== null && _b !== void 0 ? _b : 0;
        message.prehashKeyBeforeComparison = (_c = object.prehashKeyBeforeComparison) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseInnerSpec() {
    return {
        childOrder: [],
        childSize: 0,
        minPrefixLength: 0,
        maxPrefixLength: 0,
        emptyChild: new Uint8Array(),
        hash: 0,
    };
}
export const InnerSpec = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.childOrder) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.childSize !== 0) {
            writer.uint32(16).int32(message.childSize);
        }
        if (message.minPrefixLength !== 0) {
            writer.uint32(24).int32(message.minPrefixLength);
        }
        if (message.maxPrefixLength !== 0) {
            writer.uint32(32).int32(message.maxPrefixLength);
        }
        if (message.emptyChild.length !== 0) {
            writer.uint32(42).bytes(message.emptyChild);
        }
        if (message.hash !== 0) {
            writer.uint32(48).int32(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInnerSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        message.childOrder.push(reader.int32());
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.childOrder.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.childSize = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.minPrefixLength = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.maxPrefixLength = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.emptyChild = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.hash = reader.int32();
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
            childOrder: Array.isArray(object === null || object === void 0 ? void 0 : object.childOrder) ? object.childOrder.map((e) => Number(e)) : [],
            childSize: isSet(object.childSize) ? Number(object.childSize) : 0,
            minPrefixLength: isSet(object.minPrefixLength) ? Number(object.minPrefixLength) : 0,
            maxPrefixLength: isSet(object.maxPrefixLength) ? Number(object.maxPrefixLength) : 0,
            emptyChild: isSet(object.emptyChild) ? bytesFromBase64(object.emptyChild) : new Uint8Array(),
            hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.childOrder) {
            obj.childOrder = message.childOrder.map((e) => Math.round(e));
        }
        else {
            obj.childOrder = [];
        }
        message.childSize !== undefined && (obj.childSize = Math.round(message.childSize));
        message.minPrefixLength !== undefined && (obj.minPrefixLength = Math.round(message.minPrefixLength));
        message.maxPrefixLength !== undefined && (obj.maxPrefixLength = Math.round(message.maxPrefixLength));
        message.emptyChild !== undefined &&
            (obj.emptyChild = base64FromBytes(message.emptyChild !== undefined ? message.emptyChild : new Uint8Array()));
        message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
        return obj;
    },
    create(base) {
        return InnerSpec.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseInnerSpec();
        message.childOrder = ((_a = object.childOrder) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.childSize = (_b = object.childSize) !== null && _b !== void 0 ? _b : 0;
        message.minPrefixLength = (_c = object.minPrefixLength) !== null && _c !== void 0 ? _c : 0;
        message.maxPrefixLength = (_d = object.maxPrefixLength) !== null && _d !== void 0 ? _d : 0;
        message.emptyChild = (_e = object.emptyChild) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.hash = (_f = object.hash) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseBatchProof() {
    return { entries: [] };
}
export const BatchProof = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.entries) {
            BatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.entries.push(BatchEntry.decode(reader, reader.uint32()));
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
        return { entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map((e) => BatchEntry.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? BatchEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    create(base) {
        return BatchProof.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBatchProof();
        message.entries = ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map((e) => BatchEntry.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBatchEntry() {
    return { exist: undefined, nonexist: undefined };
}
export const BatchEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exist !== undefined) {
            ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.exist = ExistenceProof.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
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
            exist: isSet(object.exist) ? ExistenceProof.fromJSON(object.exist) : undefined,
            nonexist: isSet(object.nonexist) ? NonExistenceProof.fromJSON(object.nonexist) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.exist !== undefined && (obj.exist = message.exist ? ExistenceProof.toJSON(message.exist) : undefined);
        message.nonexist !== undefined &&
            (obj.nonexist = message.nonexist ? NonExistenceProof.toJSON(message.nonexist) : undefined);
        return obj;
    },
    create(base) {
        return BatchEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseBatchEntry();
        message.exist = (object.exist !== undefined && object.exist !== null)
            ? ExistenceProof.fromPartial(object.exist)
            : undefined;
        message.nonexist = (object.nonexist !== undefined && object.nonexist !== null)
            ? NonExistenceProof.fromPartial(object.nonexist)
            : undefined;
        return message;
    },
};
function createBaseCompressedBatchProof() {
    return { entries: [], lookupInners: [] };
}
export const CompressedBatchProof = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.entries) {
            CompressedBatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lookupInners) {
            InnerOp.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedBatchProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.entries.push(CompressedBatchEntry.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.lookupInners.push(InnerOp.decode(reader, reader.uint32()));
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
            entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map((e) => CompressedBatchEntry.fromJSON(e)) : [],
            lookupInners: Array.isArray(object === null || object === void 0 ? void 0 : object.lookupInners) ? object.lookupInners.map((e) => InnerOp.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? CompressedBatchEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        if (message.lookupInners) {
            obj.lookupInners = message.lookupInners.map((e) => e ? InnerOp.toJSON(e) : undefined);
        }
        else {
            obj.lookupInners = [];
        }
        return obj;
    },
    create(base) {
        return CompressedBatchProof.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCompressedBatchProof();
        message.entries = ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map((e) => CompressedBatchEntry.fromPartial(e))) || [];
        message.lookupInners = ((_b = object.lookupInners) === null || _b === void 0 ? void 0 : _b.map((e) => InnerOp.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCompressedBatchEntry() {
    return { exist: undefined, nonexist: undefined };
}
export const CompressedBatchEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exist !== undefined) {
            CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedBatchEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.exist = CompressedExistenceProof.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.nonexist = CompressedNonExistenceProof.decode(reader, reader.uint32());
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
            exist: isSet(object.exist) ? CompressedExistenceProof.fromJSON(object.exist) : undefined,
            nonexist: isSet(object.nonexist) ? CompressedNonExistenceProof.fromJSON(object.nonexist) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.exist !== undefined &&
            (obj.exist = message.exist ? CompressedExistenceProof.toJSON(message.exist) : undefined);
        message.nonexist !== undefined &&
            (obj.nonexist = message.nonexist ? CompressedNonExistenceProof.toJSON(message.nonexist) : undefined);
        return obj;
    },
    create(base) {
        return CompressedBatchEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCompressedBatchEntry();
        message.exist = (object.exist !== undefined && object.exist !== null)
            ? CompressedExistenceProof.fromPartial(object.exist)
            : undefined;
        message.nonexist = (object.nonexist !== undefined && object.nonexist !== null)
            ? CompressedNonExistenceProof.fromPartial(object.nonexist)
            : undefined;
        return message;
    },
};
function createBaseCompressedExistenceProof() {
    return { key: new Uint8Array(), value: new Uint8Array(), leaf: undefined, path: [] };
}
export const CompressedExistenceProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.leaf !== undefined) {
            LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.leaf = LeafOp.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag === 32) {
                        message.path.push(reader.int32());
                        continue;
                    }
                    if (tag === 34) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                        continue;
                    }
                    break;
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
            leaf: isSet(object.leaf) ? LeafOp.fromJSON(object.leaf) : undefined,
            path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map((e) => Number(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.leaf !== undefined && (obj.leaf = message.leaf ? LeafOp.toJSON(message.leaf) : undefined);
        if (message.path) {
            obj.path = message.path.map((e) => Math.round(e));
        }
        else {
            obj.path = [];
        }
        return obj;
    },
    create(base) {
        return CompressedExistenceProof.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCompressedExistenceProof();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.leaf = (object.leaf !== undefined && object.leaf !== null) ? LeafOp.fromPartial(object.leaf) : undefined;
        message.path = ((_c = object.path) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseCompressedNonExistenceProof() {
    return { key: new Uint8Array(), left: undefined, right: undefined };
}
export const CompressedNonExistenceProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.left !== undefined) {
            CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
        }
        if (message.right !== undefined) {
            CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedNonExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.left = CompressedExistenceProof.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.right = CompressedExistenceProof.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            left: isSet(object.left) ? CompressedExistenceProof.fromJSON(object.left) : undefined,
            right: isSet(object.right) ? CompressedExistenceProof.fromJSON(object.right) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.left !== undefined && (obj.left = message.left ? CompressedExistenceProof.toJSON(message.left) : undefined);
        message.right !== undefined &&
            (obj.right = message.right ? CompressedExistenceProof.toJSON(message.right) : undefined);
        return obj;
    },
    create(base) {
        return CompressedNonExistenceProof.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCompressedNonExistenceProof();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.left = (object.left !== undefined && object.left !== null)
            ? CompressedExistenceProof.fromPartial(object.left)
            : undefined;
        message.right = (object.right !== undefined && object.right !== null)
            ? CompressedExistenceProof.fromPartial(object.right)
            : undefined;
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
function isSet(value) {
    return value !== null && value !== undefined;
}
