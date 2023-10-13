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
exports.attestFromInjective = void 0;
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const wormhole_sdk_1 = require("@injectivelabs/wormhole-sdk");
/**
 * Creates attestation message
 * @param tokenBridgeAddress Address of Inj token bridge contract
 * @param walletAddress Address of wallet in inj format
 * @param asset Name or address of the asset to be attested
 * For native assets the asset string is the denomination.
 * For foreign assets the asset string is the inj address of the foreign asset
 * @returns Message to be broadcast
 */
function attestFromInjective(tokenBridgeAddress, walletAddress, asset) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonce = Math.round(Math.random() * 100000);
        const isNativeAsset = (0, wormhole_sdk_1.isNativeDenomInjective)(asset);
        return sdk_ts_1.MsgExecuteContractCompat.fromJSON({
            contractAddress: tokenBridgeAddress,
            sender: walletAddress,
            exec: {
                msg: {
                    asset_info: isNativeAsset
                        ? {
                            native_token: { denom: asset },
                        }
                        : {
                            token: {
                                contract_addr: asset,
                            },
                        },
                    nonce: nonce,
                },
                action: 'create_asset_meta',
            },
        });
    });
}
exports.attestFromInjective = attestFromInjective;
//# sourceMappingURL=attest.js.map