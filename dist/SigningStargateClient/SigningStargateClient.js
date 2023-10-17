"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigningStargateClient = exports.createDefaultAminoConverters = void 0;
var amino_1 = require("@cosmjs/amino");
var encoding_1 = require("@cosmjs/encoding");
var math_1 = require("@cosmjs/math");
var proto_signing_1 = require("@cosmjs/proto-signing");
var tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
var utils_1 = require("@cosmjs/utils");
var signing_1 = require("cosmjs-types/cosmos/tx/signing/v1beta1/signing");
var tx_1 = require("cosmjs-types/cosmos/tx/v1beta1/tx");
var stargate_1 = require("@cosmjs/stargate");
var stargate_2 = require("@cosmjs/stargate");
var stargate_3 = require("@cosmjs/stargate");
var StargateClient_1 = require("../StargateClient");
var accountParser_1 = require("../accountParser/accountParser");
var tx_2 = require("@injectivelabs/core-proto-ts/cjs/cosmwasm/wasm/v1/tx");
function createDefaultAminoConverters() {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (0, stargate_2.createAuthzAminoConverters)()), (0, stargate_2.createBankAminoConverters)()), (0, stargate_2.createDistributionAminoConverters)()), (0, stargate_2.createGovAminoConverters)()), (0, stargate_2.createStakingAminoConverters)()), (0, stargate_2.createIbcAminoConverters)()), (0, stargate_2.createFeegrantAminoConverters)()), (0, stargate_2.createVestingAminoConverters)());
}
exports.createDefaultAminoConverters = createDefaultAminoConverters;
var SigningStargateClient = /** @class */ (function (_super) {
    __extends(SigningStargateClient, _super);
    function SigningStargateClient(tmClient, signer, options) {
        var _this = _super.call(this, tmClient, options) || this;
        var _a = options.registry, registry = _a === void 0 ? new proto_signing_1.Registry(stargate_3.defaultRegistryTypes) : _a, _b = options.aminoTypes, aminoTypes = _b === void 0 ? new stargate_1.AminoTypes(createDefaultAminoConverters()) : _b;
        _this.registry = registry;
        _this.aminoTypes = aminoTypes;
        _this.signer = signer;
        _this.broadcastTimeoutMs = options.broadcastTimeoutMs;
        _this.broadcastPollIntervalMs = options.broadcastPollIntervalMs;
        _this.gasPrice = options.gasPrice;
        _this.registry.register('/cosmwasm.wasm.v1.MsgExecuteContract', tx_2.MsgExecuteContract);
        _this.registry.register('/cosmwasm.wasm.v1.MsgInstantiateContract', tx_2.MsgInstantiateContract);
        return _this;
    }
    /**
     * Creates an instance by connecting to the given Tendermint RPC endpoint.
     *
     * For now this uses the Tendermint 0.34 client. If you need Tendermint 0.37
     * support, see `createWithSigner`.
     */
    SigningStargateClient.connectWithSigner = function (endpoint, signer, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var tmClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, tendermint_rpc_1.Tendermint37Client.connect(endpoint)];
                    case 1:
                        tmClient = _a.sent();
                        return [2 /*return*/, SigningStargateClient.createWithSigner(tmClient, signer, options)];
                }
            });
        });
    };
    /**
     * Creates an instance from a manually created Tendermint client.
     * Use this to use `Tendermint37Client` instead of `Tendermint34Client`.
     */
    SigningStargateClient.createWithSigner = function (tmClient, signer, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new SigningStargateClient(tmClient, signer, options)];
            });
        });
    };
    SigningStargateClient.prototype.simulate = function (signerAddress, messages, memo) {
        return __awaiter(this, void 0, void 0, function () {
            var anyMsgs, accountFromSigner, pubkey, sequence, gasInfo;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        anyMsgs = messages.map(function (m) { return _this.registry.encodeAsAny(m); });
                        return [4 /*yield*/, this.signer.getAccounts()];
                    case 1:
                        accountFromSigner = (_a.sent()).find(function (account) { return account.address === signerAddress; });
                        if (!accountFromSigner) {
                            throw new Error('Failed to retrieve account from signer');
                        }
                        pubkey = (0, amino_1.encodeSecp256k1Pubkey)(accountFromSigner.pubkey);
                        return [4 /*yield*/, this.getSequence(signerAddress)];
                    case 2:
                        sequence = (_a.sent()).sequence;
                        return [4 /*yield*/, this.forceGetQueryClient().tx.simulate(anyMsgs, memo, pubkey, sequence)];
                    case 3:
                        gasInfo = (_a.sent()).gasInfo;
                        (0, utils_1.assertDefined)(gasInfo);
                        return [2 /*return*/, math_1.Uint53.fromString(gasInfo === null || gasInfo === void 0 ? void 0 : gasInfo.gasUsed.toString()).toNumber()];
                }
            });
        });
    };
    SigningStargateClient.prototype.signAndBroadcast = function (signerAddress, messages, fee, memo) {
        if (memo === void 0) { memo = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var usedFee, txRaw, txBytes, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usedFee = fee;
                        return [4 /*yield*/, this.sign(signerAddress, messages, usedFee, memo)];
                    case 1:
                        txRaw = _a.sent();
                        txBytes = tx_1.TxRaw.encode(txRaw).finish();
                        return [4 /*yield*/, this.broadcastTx(txBytes)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * Gets account number and sequence from the API, creates a sign doc,
     * creates a single signature and assembles the signed transaction.
     *
     * The sign mode (SIGN_MODE_DIRECT or SIGN_MODE_LEGACY_AMINO_JSON) is determined by this client's signer.
     *
     * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
     * from the chain. This is needed when signing for a multisig account, but it also allows for offline signing
     * (See the SigningStargateClient.offline constructor).
     */
    SigningStargateClient.prototype.sign = function (signerAddress, messages, fee, memo, explicitSignerData) {
        return __awaiter(this, void 0, void 0, function () {
            var signerData, _a, accountNumber, sequence, chainId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!explicitSignerData) return [3 /*break*/, 1];
                        signerData = explicitSignerData;
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.getSequence(signerAddress)];
                    case 2:
                        _a = _b.sent(), accountNumber = _a.accountNumber, sequence = _a.sequence;
                        return [4 /*yield*/, this.getChainId()];
                    case 3:
                        chainId = _b.sent();
                        signerData = {
                            accountNumber: accountNumber,
                            sequence: sequence,
                            chainId: chainId,
                        };
                        _b.label = 4;
                    case 4: return [2 /*return*/, (0, proto_signing_1.isOfflineDirectSigner)(this.signer)
                            ? this.signDirect(signerAddress, messages, fee, memo, signerData)
                            : this.signAmino(signerAddress, messages, fee, memo, signerData)];
                }
            });
        });
    };
    SigningStargateClient.prototype.signAmino = function (signerAddress, messages, fee, memo, _a) {
        var accountNumber = _a.accountNumber, sequence = _a.sequence, chainId = _a.chainId;
        return __awaiter(this, void 0, void 0, function () {
            var accountFromSigner, pubkey, signMode, msgs, signDoc, _b, signature, signed, signedTxBody, signedTxBodyEncodeObject, signedTxBodyBytes, signedGasLimit, signedSequence, signedAuthInfoBytes;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        (0, utils_1.assert)(!(0, proto_signing_1.isOfflineDirectSigner)(this.signer));
                        return [4 /*yield*/, this.signer.getAccounts()];
                    case 1:
                        accountFromSigner = (_c.sent()).find(function (account) { return account.address === signerAddress; });
                        if (!accountFromSigner) {
                            throw new Error('Failed to retrieve account from signer');
                        }
                        pubkey = chainId.startsWith('injective')
                            ? (0, accountParser_1.getPublicKey)({
                                chainId: chainId,
                                key: Buffer.from(accountFromSigner.pubkey).toString('base64'),
                            })
                            : (0, proto_signing_1.encodePubkey)((0, amino_1.encodeSecp256k1Pubkey)(accountFromSigner.pubkey));
                        signMode = signing_1.SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
                        msgs = messages.map(function (msg) { return _this.aminoTypes.toAmino(msg); });
                        signDoc = (0, amino_1.makeSignDoc)(msgs, fee, chainId, memo, accountNumber, sequence);
                        return [4 /*yield*/, this.signer.signAmino(signerAddress, signDoc)];
                    case 2:
                        _b = _c.sent(), signature = _b.signature, signed = _b.signed;
                        signedTxBody = {
                            messages: signed.msgs.map(function (msg) { return _this.aminoTypes.fromAmino(msg); }),
                            memo: signed.memo,
                        };
                        signedTxBodyEncodeObject = {
                            typeUrl: '/cosmos.tx.v1beta1.TxBody',
                            value: signedTxBody,
                        };
                        signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);
                        signedGasLimit = math_1.Int53.fromString(signed.fee.gas).toNumber();
                        signedSequence = math_1.Int53.fromString(signed.sequence).toNumber();
                        signedAuthInfoBytes = (0, proto_signing_1.makeAuthInfoBytes)([{ pubkey: pubkey, sequence: signedSequence }], signed.fee.amount, signedGasLimit, signed.fee.granter, signed.fee.payer, signMode);
                        return [2 /*return*/, tx_1.TxRaw.fromPartial({
                                bodyBytes: signedTxBodyBytes,
                                authInfoBytes: signedAuthInfoBytes,
                                signatures: [(0, encoding_1.fromBase64)(signature.signature)],
                            })];
                }
            });
        });
    };
    SigningStargateClient.prototype.signDirect = function (signerAddress, messages, fee, memo, _a) {
        var accountNumber = _a.accountNumber, sequence = _a.sequence, chainId = _a.chainId;
        return __awaiter(this, void 0, void 0, function () {
            var accountFromSigner, pubkey, txBodyEncodeObject, txBodyBytes, gasLimit, authInfoBytes, signDoc, _b, signature, signed;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        (0, utils_1.assert)((0, proto_signing_1.isOfflineDirectSigner)(this.signer));
                        return [4 /*yield*/, this.signer.getAccounts()];
                    case 1:
                        accountFromSigner = (_c.sent()).find(function (account) { return account.address === signerAddress; });
                        if (!accountFromSigner) {
                            throw new Error('Failed to retrieve account from signer');
                        }
                        pubkey = chainId.startsWith('injective')
                            ? (0, accountParser_1.getPublicKey)({
                                chainId: chainId,
                                key: Buffer.from(accountFromSigner.pubkey).toString('base64'),
                            })
                            : (0, proto_signing_1.encodePubkey)((0, amino_1.encodeSecp256k1Pubkey)(accountFromSigner.pubkey));
                        txBodyEncodeObject = {
                            typeUrl: '/cosmos.tx.v1beta1.TxBody',
                            value: {
                                messages: messages,
                                memo: memo,
                            },
                        };
                        txBodyBytes = this.registry.encode(txBodyEncodeObject);
                        gasLimit = math_1.Int53.fromString(fee.gas).toNumber();
                        authInfoBytes = (0, proto_signing_1.makeAuthInfoBytes)([{ pubkey: pubkey, sequence: sequence }], fee.amount, gasLimit, fee.granter, fee.payer);
                        signDoc = (0, proto_signing_1.makeSignDoc)(txBodyBytes, authInfoBytes, chainId, accountNumber);
                        return [4 /*yield*/, this.signer.signDirect(signerAddress, signDoc)];
                    case 2:
                        _b = _c.sent(), signature = _b.signature, signed = _b.signed;
                        return [2 /*return*/, tx_1.TxRaw.fromPartial({
                                bodyBytes: signed.bodyBytes,
                                authInfoBytes: signed.authInfoBytes,
                                signatures: [(0, encoding_1.fromBase64)(signature.signature)],
                            })];
                }
            });
        });
    };
    return SigningStargateClient;
}(StargateClient_1.StargateClient));
exports.SigningStargateClient = SigningStargateClient;
