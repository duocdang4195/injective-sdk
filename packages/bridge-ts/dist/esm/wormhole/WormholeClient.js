import { parseVaa, parseTransferPayload, tryHexToNativeString, } from '@injectivelabs/wormhole-sdk';
export class BaseWormholeClient {
    network;
    wormholeRpcUrl;
    constructor({ network, wormholeRpcUrl, }) {
        this.network = network;
        this.wormholeRpcUrl = wormholeRpcUrl;
    }
    parseSignedVAA(signedVAA /* base64 */) {
        return parseVaa(Buffer.from(signedVAA, 'base64'));
    }
    getTransferDetailsFromSignedVAA(signedVAA /* base64 */) {
        const parsedSignedVaa = this.parseSignedVAA(signedVAA);
        const parsedTransferPayload = parseTransferPayload(parsedSignedVaa.payload);
        const nativeOrigin = tryHexToNativeString(parsedTransferPayload.originAddress, parsedTransferPayload.originChain);
        return {
            ...parsedTransferPayload,
            originAddress: nativeOrigin,
            amount: parsedTransferPayload.amount.toString(),
        };
    }
}
//# sourceMappingURL=WormholeClient.js.map