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
const ethereumjs_util_1 = require("ethereumjs-util");
const constants_1 = require("../../../constants");
const addressOfHDKey = (hdKey) => {
    const shouldSanitizePublicKey = true;
    const derivedPublicKey = hdKey.publicKey;
    const ethereumAddressWithoutPrefix = (0, ethereumjs_util_1.publicToAddress)(derivedPublicKey, shouldSanitizePublicKey).toString('hex');
    const address = (0, ethereumjs_util_1.addHexPrefix)(ethereumAddressWithoutPrefix);
    return address;
};
class AccountManager {
    constructor(hdKey) {
        this.wallets = [];
        this.wallets = [];
        this.hdKey = hdKey;
    }
    getWallets() {
        return __awaiter(this, void 0, void 0, function* () {
            const { start, end } = this.getOffset();
            /**
             * 1. Wallets are not yet fetched at all,
             * 2. Wallets are not yet fetched for that offset
             */
            if (!this.hasWallets() || !this.hasWalletsInOffset(start)) {
                yield this.getWalletsBasedOnIndex({
                    start,
                    end,
                });
            }
            return this.wallets.slice(start, end);
        });
    }
    getWalletsBasedOnIndex({ start, end, }) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let index = start; index < end; index += 1) {
                const path = `m/${index}`;
                const hdKey = this.hdKey.derive(path);
                const address = addressOfHDKey(hdKey);
                this.wallets.push({
                    hdKey,
                    address: address.toLowerCase(),
                    derivationPath: `${constants_1.DEFAULT_BASE_DERIVATION_PATH}/0'/0/${index}`,
                });
            }
        });
    }
    hasWallets() {
        return this.wallets.length > 0;
    }
    hasWalletsInOffset(offset) {
        return this.wallets.length > offset;
    }
    getOffset() {
        const totalWallets = this.wallets.length;
        const nextBatchStart = totalWallets;
        const nextBatchEnd = totalWallets + constants_1.DEFAULT_NUM_ADDRESSES_TO_FETCH;
        return {
            start: nextBatchStart,
            end: nextBatchEnd,
        };
    }
    hasWalletForAddress(address) {
        return (this.wallets.find((wallet) => wallet.address.toLowerCase() === address.toLowerCase()) !== undefined);
    }
    getWalletForAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.wallets.find((wallet) => wallet.address.toLowerCase() === address.toLowerCase());
        });
    }
}
exports.default = AccountManager;
//# sourceMappingURL=AccountManager.js.map