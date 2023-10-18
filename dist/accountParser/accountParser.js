"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicKey = exports.createAny = exports.accountParser = void 0;
var cjs_1 = require("@injectivelabs/core-proto-ts/cjs");
var accountParser = function (ethAccount) {
    var account = cjs_1.InjectiveTypesV1Beta1Account.EthAccount.decode(ethAccount.value);
    var baseAccount = account.baseAccount;
    var pubKey = baseAccount.pubKey;
    return {
        address: baseAccount.address,
        pubkey: pubKey
            ? {
                type: '/injective.crypto.v1beta1.ethsecp256k1.PubKey',
                value: Buffer.from(pubKey.value).toString('base64'),
            }
            : null,
        accountNumber: parseInt(baseAccount.accountNumber, 10),
        sequence: parseInt(baseAccount.sequence, 10),
    };
};
exports.accountParser = accountParser;
var createAny = function (value, type) {
    var message = cjs_1.GoogleProtobufAny.Any.create();
    message.typeUrl = type;
    message.value = value;
    return message;
};
exports.createAny = createAny;
var getPublicKey = function (_a) {
    var chainId = _a.chainId, key = _a.key;
    if (typeof key !== 'string') {
        return key;
    }
    var proto;
    var path;
    var baseProto;
    if (chainId.startsWith('injective')) {
        proto = cjs_1.CosmosCryptoSecp256k1Keys.PubKey.create();
        baseProto = cjs_1.CosmosCryptoSecp256k1Keys.PubKey;
        path = '/cosmos.crypto.secp256k1.PubKey';
        // path = '/injective.crypto.v1beta1.ethsecp256k1.PubKey';
    }
    else if (chainId.startsWith('evmos')) {
        proto = cjs_1.CosmosCryptoSecp256k1Keys.PubKey.create();
        baseProto = cjs_1.CosmosCryptoSecp256k1Keys.PubKey;
        path = '/ethermint.crypto.v1.ethsecp256k1.PubKey';
    }
    else {
        proto = cjs_1.CosmosCryptoSecp256k1Keys.PubKey.create();
        baseProto = cjs_1.CosmosCryptoSecp256k1Keys.PubKey;
        path = '/cosmos.crypto.secp256k1.PubKey';
    }
    proto.key = Buffer.from(key, 'base64');
    return (0, exports.createAny)(baseProto.encode(proto).finish(), path);
};
exports.getPublicKey = getPublicKey;
