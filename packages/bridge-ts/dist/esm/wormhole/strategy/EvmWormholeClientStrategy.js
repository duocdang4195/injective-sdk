import { EvmWormholeClient } from '../clients/EvmWormholeClient';
import { WormholeSource } from '..';
import { GeneralException } from '@injectivelabs/exceptions';
import { BaseWormholeClient } from '../WormholeClient';
export class EvmWormholeClientStrategy extends BaseWormholeClient {
    wormholeSource = WormholeSource.Ethereum;
    strategies;
    constructor(args) {
        super(args);
        this.wormholeSource = args.wormholeSource || WormholeSource.Ethereum;
        this.strategies = {
            [WormholeSource.Ethereum]: new EvmWormholeClient({
                ...args,
                wormholeSource: WormholeSource.Ethereum,
            }),
            [WormholeSource.Polygon]: new EvmWormholeClient({
                ...args,
                wormholeSource: WormholeSource.Polygon,
            }),
            [WormholeSource.Arbitrum]: new EvmWormholeClient({
                ...args,
                wormholeSource: WormholeSource.Arbitrum,
            }),
        };
    }
    setWormholeSource(wormholeSource) {
        this.wormholeSource = wormholeSource;
    }
    get strategy() {
        const { wormholeSource, strategies } = this;
        if (!wormholeSource || !strategies[wormholeSource]) {
            throw new GeneralException(new Error(`The strategy for ${wormholeSource} not found.`));
        }
        return strategies[wormholeSource];
    }
    async getAddress() {
        return this.strategy.getAddress();
    }
    async getBalance(address, tokenAddress) {
        return this.strategy.getBalance(address, tokenAddress);
    }
    async transfer(args) {
        return this.strategy.transfer(args);
    }
    async getTxResponse(txHash) {
        return this.strategy.getTxResponse(txHash);
    }
    async getSignedVAA(txResponse) {
        return this.strategy.getSignedVAA(txResponse);
    }
    async getSignedVAANoRetry(txResponse) {
        return this.strategy.getSignedVAANoRetry(txResponse);
    }
    async getIsTransferCompleted(signedVAA /* in base 64 */) {
        return this.strategy.getIsTransferCompleted(signedVAA);
    }
    async getIsTransferCompletedRetry(signedVAA /* in base 64 */) {
        return this.strategy.getIsTransferCompletedRetry(signedVAA);
    }
    async redeem(args) {
        return this.strategy.redeem(args);
    }
    async redeemNative(args) {
        return this.strategy.redeemNative(args);
    }
    parseSignedVAA(signedVAA /* base64 */) {
        return this.strategy.parseSignedVAA(signedVAA);
    }
    async getForeignAsset(originChain, originAddress) {
        return await this.strategy.getForeignAsset(originChain, originAddress);
    }
}
//# sourceMappingURL=EvmWormholeClientStrategy.js.map