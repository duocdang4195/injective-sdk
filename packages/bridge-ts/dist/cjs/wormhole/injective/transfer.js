"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferFromInjective = exports.updateWrappedOnInjective = exports.createWrappedOnInjective = exports.redeemOnInjective = exports.submitVAAOnInjective = exports.getIsTransferCompletedInjective = void 0;
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const utils_1 = require("./utils");
const wormhole_sdk_1 = require("@injectivelabs/wormhole-sdk");
const js_base64_1 = require("js-base64");
/**
 * Return if the VAA has been redeemed or not
 * @param tokenBridgeAddress The Injective token bridge contract address
 * @param signedVAA The signed VAA byte array
 * @param client Holds the wallet and signing information
 * @returns true if the VAA has been redeemed.
 */
function getIsTransferCompletedInjective(tokenBridgeAddress, signedVAA, client) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryResult = yield client.fetchSmartContractState(tokenBridgeAddress, Buffer.from(JSON.stringify({
            is_vaa_redeemed: {
                vaa: (0, js_base64_1.fromUint8Array)(signedVAA),
            },
        })).toString('base64'));
        const parsed = (0, utils_1.parseSmartContractStateResponse)(queryResult);
        return parsed.is_redeemed;
    });
}
exports.getIsTransferCompletedInjective = getIsTransferCompletedInjective;
/**
 * Submits the supplied VAA to Injective
 * @param tokenBridgeAddress Address of Inj token bridge contract
 * @param walletAddress Address of wallet in inj format
 * @param signedVAA VAA with the attestation message
 * @returns Message to be broadcast
 */
function submitVAAOnInjective(tokenBridgeAddress, walletAddress, signedVAA) {
    return __awaiter(this, void 0, void 0, function* () {
        return sdk_ts_1.MsgExecuteContractCompat.fromJSON({
            contractAddress: tokenBridgeAddress,
            sender: walletAddress,
            exec: {
                msg: {
                    data: (0, js_base64_1.fromUint8Array)(signedVAA),
                },
                action: 'submit_vaa',
            },
        });
    });
}
exports.submitVAAOnInjective = submitVAAOnInjective;
exports.redeemOnInjective = submitVAAOnInjective;
exports.createWrappedOnInjective = submitVAAOnInjective;
exports.updateWrappedOnInjective = submitVAAOnInjective;
/**
 * Creates the necessary messages to transfer an asset
 * @param walletAddress Address of the Inj wallet
 * @param tokenBridgeAddress Address of the token bridge contract
 * @param tokenAddress Address of the token being transferred
 * @param amount Amount of token to be transferred
 * @param recipientChain Destination chain
 * @param recipientAddress Destination wallet address
 * @param relayerFee Relayer fee
 * @param payload Optional payload
 * @returns Transfer messages to be sent on chain
 */
function transferFromInjective(walletAddress, tokenBridgeAddress, tokenAddress, amount, recipientChain, recipientAddress, relayerFee = '0', payload = null) {
    return __awaiter(this, void 0, void 0, function* () {
        const recipientChainId = (0, wormhole_sdk_1.coalesceChainId)(recipientChain);
        const nonce = Math.round(Math.random() * 100000);
        const isNativeAsset = (0, wormhole_sdk_1.isNativeDenomInjective)(tokenAddress);
        const mk_action = payload
            ? 'initiate_transfer_with_payload'
            : 'initiate_transfer';
        const mk_initiate_transfer = (info) => payload
            ? {
                asset: {
                    amount,
                    info,
                },
                recipient_chain: recipientChainId,
                recipient: Buffer.from(recipientAddress).toString('base64'),
                fee: relayerFee,
                nonce,
                payload,
            }
            : {
                asset: {
                    amount,
                    info,
                },
                recipient_chain: recipientChainId,
                recipient: Buffer.from(recipientAddress).toString('base64'),
                fee: relayerFee,
                nonce,
            };
        return isNativeAsset
            ? [
                sdk_ts_1.MsgExecuteContractCompat.fromJSON({
                    contractAddress: tokenBridgeAddress,
                    sender: walletAddress,
                    exec: {
                        msg: {},
                        action: 'deposit_tokens',
                    },
                    funds: { denom: tokenAddress, amount },
                }),
                sdk_ts_1.MsgExecuteContractCompat.fromJSON({
                    contractAddress: tokenBridgeAddress,
                    sender: walletAddress,
                    exec: {
                        msg: mk_initiate_transfer({
                            native_token: { denom: tokenAddress },
                        }),
                        action: mk_action,
                    },
                }),
            ]
            : [
                sdk_ts_1.MsgExecuteContractCompat.fromJSON({
                    contractAddress: tokenAddress,
                    sender: walletAddress,
                    exec: {
                        msg: {
                            spender: tokenBridgeAddress,
                            amount,
                            expires: {
                                never: {},
                            },
                        },
                        action: 'increase_allowance',
                    },
                }),
                sdk_ts_1.MsgExecuteContractCompat.fromJSON({
                    contractAddress: tokenBridgeAddress,
                    sender: walletAddress,
                    exec: {
                        msg: mk_initiate_transfer({
                            token: { contract_addr: tokenAddress },
                        }),
                        action: mk_action,
                    },
                }),
            ];
    });
}
exports.transferFromInjective = transferFromInjective;
//# sourceMappingURL=transfer.js.map