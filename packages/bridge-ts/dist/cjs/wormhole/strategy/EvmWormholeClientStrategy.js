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
exports.EvmWormholeClientStrategy = void 0;
const EvmWormholeClient_1 = require("../clients/EvmWormholeClient");
const __1 = require("..");
const exceptions_1 = require("@injectivelabs/exceptions");
const WormholeClient_1 = require("../WormholeClient");
class EvmWormholeClientStrategy extends WormholeClient_1.BaseWormholeClient {
    constructor(args) {
        super(args);
        this.wormholeSource = __1.WormholeSource.Ethereum;
        this.wormholeSource = args.wormholeSource || __1.WormholeSource.Ethereum;
        this.strategies = {
            [__1.WormholeSource.Ethereum]: new EvmWormholeClient_1.EvmWormholeClient(Object.assign(Object.assign({}, args), { wormholeSource: __1.WormholeSource.Ethereum })),
            [__1.WormholeSource.Polygon]: new EvmWormholeClient_1.EvmWormholeClient(Object.assign(Object.assign({}, args), { wormholeSource: __1.WormholeSource.Polygon })),
            [__1.WormholeSource.Arbitrum]: new EvmWormholeClient_1.EvmWormholeClient(Object.assign(Object.assign({}, args), { wormholeSource: __1.WormholeSource.Arbitrum })),
        };
    }
    setWormholeSource(wormholeSource) {
        this.wormholeSource = wormholeSource;
    }
    get strategy() {
        const { wormholeSource, strategies } = this;
        if (!wormholeSource || !strategies[wormholeSource]) {
            throw new exceptions_1.GeneralException(new Error(`The strategy for ${wormholeSource} not found.`));
        }
        return strategies[wormholeSource];
    }
    getAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.strategy.getAddress();
        });
    }
    getBalance(address, tokenAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.strategy.getBalance(address, tokenAddress);
        });
    }
    transfer(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.strategy.transfer(args);
        });
    }
    getTxResponse(txHash) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.strategy.getTxResponse(txHash);
        });
    }
    getSignedVAA(txResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.strategy.getSignedVAA(txResponse);
        });
    }
    getSignedVAANoRetry(txResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.strategy.getSignedVAANoRetry(txResponse);
        });
    }
    getIsTransferCompleted(signedVAA /* in base 64 */) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.strategy.getIsTransferCompleted(signedVAA);
        });
    }
    getIsTransferCompletedRetry(signedVAA /* in base 64 */) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.strategy.getIsTransferCompletedRetry(signedVAA);
        });
    }
    redeem(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.strategy.redeem(args);
        });
    }
    redeemNative(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.strategy.redeemNative(args);
        });
    }
    parseSignedVAA(signedVAA /* base64 */) {
        return this.strategy.parseSignedVAA(signedVAA);
    }
    getForeignAsset(originChain, originAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.strategy.getForeignAsset(originChain, originAddress);
        });
    }
}
exports.EvmWormholeClientStrategy = EvmWormholeClientStrategy;
//# sourceMappingURL=EvmWormholeClientStrategy.js.map