import { addHexPrefix, publicToAddress } from 'ethereumjs-util';
import { DEFAULT_NUM_ADDRESSES_TO_FETCH, DEFAULT_BASE_DERIVATION_PATH, } from '../../../constants';
const addressOfHDKey = (hdKey) => {
    const shouldSanitizePublicKey = true;
    const derivedPublicKey = hdKey.publicKey;
    const ethereumAddressWithoutPrefix = publicToAddress(derivedPublicKey, shouldSanitizePublicKey).toString('hex');
    const address = addHexPrefix(ethereumAddressWithoutPrefix);
    return address;
};
export default class AccountManager {
    wallets = [];
    hdKey;
    constructor(hdKey) {
        this.wallets = [];
        this.hdKey = hdKey;
    }
    async getWallets() {
        const { start, end } = this.getOffset();
        /**
         * 1. Wallets are not yet fetched at all,
         * 2. Wallets are not yet fetched for that offset
         */
        if (!this.hasWallets() || !this.hasWalletsInOffset(start)) {
            await this.getWalletsBasedOnIndex({
                start,
                end,
            });
        }
        return this.wallets.slice(start, end);
    }
    async getWalletsBasedOnIndex({ start, end, }) {
        for (let index = start; index < end; index += 1) {
            const path = `m/${index}`;
            const hdKey = this.hdKey.derive(path);
            const address = addressOfHDKey(hdKey);
            this.wallets.push({
                hdKey,
                address: address.toLowerCase(),
                derivationPath: `${DEFAULT_BASE_DERIVATION_PATH}/0'/0/${index}`,
            });
        }
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
        const nextBatchEnd = totalWallets + DEFAULT_NUM_ADDRESSES_TO_FETCH;
        return {
            start: nextBatchStart,
            end: nextBatchEnd,
        };
    }
    hasWalletForAddress(address) {
        return (this.wallets.find((wallet) => wallet.address.toLowerCase() === address.toLowerCase()) !== undefined);
    }
    async getWalletForAddress(address) {
        return this.wallets.find((wallet) => wallet.address.toLowerCase() === address.toLowerCase());
    }
}
//# sourceMappingURL=AccountManager.js.map