"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseWormholeClient = void 0;
const wormhole_sdk_1 = require("@injectivelabs/wormhole-sdk");
class BaseWormholeClient {
    constructor({ network, wormholeRpcUrl, }) {
        this.network = network;
        this.wormholeRpcUrl = wormholeRpcUrl;
    }
    parseSignedVAA(signedVAA /* base64 */) {
        return (0, wormhole_sdk_1.parseVaa)(Buffer.from(signedVAA, 'base64'));
    }
    getTransferDetailsFromSignedVAA(signedVAA /* base64 */) {
        const parsedSignedVaa = this.parseSignedVAA(signedVAA);
        const parsedTransferPayload = (0, wormhole_sdk_1.parseTransferPayload)(parsedSignedVaa.payload);
        const nativeOrigin = (0, wormhole_sdk_1.tryHexToNativeString)(parsedTransferPayload.originAddress, parsedTransferPayload.originChain);
        return Object.assign(Object.assign({}, parsedTransferPayload), { originAddress: nativeOrigin, amount: parsedTransferPayload.amount.toString() });
    }
}
exports.BaseWormholeClient = BaseWormholeClient;
//# sourceMappingURL=WormholeClient.js.map