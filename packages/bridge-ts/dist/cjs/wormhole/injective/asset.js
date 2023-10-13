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
exports.queryExternalIdInjective = exports.getOriginalAssetInjective = exports.getIsWrappedAssetInjective = exports.getForeignAssetInjective = void 0;
const utils_1 = require("./utils");
const wormhole_sdk_1 = require("@injectivelabs/wormhole-sdk");
const js_base64_1 = require("js-base64");
/**
 * Returns the address of the foreign asset
 * @param tokenBridgeAddress Address of token bridge contact
 * @param client Holds the wallet and signing information
 * @param originChain The chainId of the origin of the asset
 * @param originAsset The address of the origin asset
 * @returns The foreign asset address or null
 */
function getForeignAssetInjective(tokenBridgeAddress, client, originChain, originAsset) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const queryResult = yield client.fetchSmartContractState(tokenBridgeAddress, Buffer.from(JSON.stringify({
                wrapped_registry: {
                    chain: (0, wormhole_sdk_1.coalesceChainId)(originChain),
                    address: (0, js_base64_1.fromUint8Array)(originAsset),
                },
            })).toString('base64'));
            const parsed = (0, utils_1.parseSmartContractStateResponse)(queryResult);
            return parsed.address;
        }
        catch (e) {
            return null;
        }
    });
}
exports.getForeignAssetInjective = getForeignAssetInjective;
/**
 * Checks if the asset is a wrapped asset
 * @param tokenBridgeAddress The address of the Injective token bridge contract
 * @param client Connection/wallet information
 * @param assetAddress Address of the asset in Injective format
 * @returns true if asset is a wormhole wrapped asset
 */
function getIsWrappedAssetInjective(tokenBridgeAddress, client, assetAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        const hexified = (0, wormhole_sdk_1.tryNativeToHexString)(assetAddress, 'injective');
        const result = yield getForeignAssetInjective(tokenBridgeAddress, client, wormhole_sdk_1.CHAIN_ID_INJECTIVE, new Uint8Array(Buffer.from(hexified)));
        if (result === null) {
            return false;
        }
        return true;
    });
}
exports.getIsWrappedAssetInjective = getIsWrappedAssetInjective;
/**
 * Returns information about the asset
 * @param wrappedAddress Address of the asset in wormhole wrapped format (hex string)
 * @param client WASM api client
 * @returns Information about the asset
 */
function getOriginalAssetInjective(wrappedAddress, client) {
    return __awaiter(this, void 0, void 0, function* () {
        const chainId = wormhole_sdk_1.CHAIN_ID_INJECTIVE;
        if ((0, wormhole_sdk_1.isNativeCosmWasmDenom)(chainId, wrappedAddress)) {
            return {
                isWrapped: false,
                chainId,
                assetAddress: (0, wormhole_sdk_1.hexToUint8Array)((0, wormhole_sdk_1.buildTokenId)(chainId, wrappedAddress)),
            };
        }
        try {
            const response = yield client.fetchSmartContractState(wrappedAddress, Buffer.from(JSON.stringify({
                wrapped_asset_info: {},
            })).toString('base64'));
            const parsed = (0, utils_1.parseSmartContractStateResponse)(response);
            return {
                isWrapped: true,
                chainId: parsed.asset_chain,
                assetAddress: new Uint8Array(Buffer.from(parsed.asset_address, 'base64')),
            };
        }
        catch (_a) {
            //
        }
        return {
            isWrapped: false,
            chainId: chainId,
            assetAddress: (0, wormhole_sdk_1.hexToUint8Array)((0, wormhole_sdk_1.buildTokenId)(chainId, wrappedAddress)),
        };
    });
}
exports.getOriginalAssetInjective = getOriginalAssetInjective;
const queryExternalIdInjective = (client, tokenBridgeAddress, externalTokenId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    try {
        const response = yield client.fetchSmartContractState(tokenBridgeAddress, Buffer.from(JSON.stringify({
            external_id: {
                external_id: Buffer.from(externalTokenId, 'hex').toString('base64'),
            },
        })).toString('base64'));
        const parsedResponse = (0, utils_1.parseSmartContractStateResponse)(response);
        const denomOrAddress = ((_a = parsedResponse.token_id.Bank) === null || _a === void 0 ? void 0 : _a.denom) ||
            ((_c = (_b = parsedResponse.token_id.Contract) === null || _b === void 0 ? void 0 : _b.NativeCW20) === null || _c === void 0 ? void 0 : _c.contract_address) ||
            ((_e = (_d = parsedResponse.token_id.Contract) === null || _d === void 0 ? void 0 : _d.ForeignToken) === null || _e === void 0 ? void 0 : _e.foreign_address);
        return denomOrAddress || null;
    }
    catch (_f) {
        return null;
    }
});
exports.queryExternalIdInjective = queryExternalIdInjective;
//# sourceMappingURL=asset.js.map