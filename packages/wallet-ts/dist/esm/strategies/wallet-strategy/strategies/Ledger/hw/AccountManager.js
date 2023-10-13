import { publicToAddress, addHexPrefix } from 'ethereumjs-util';
import HDNode from 'hdkey';
import { LedgerDerivationPathType } from '../../../types';
import { DEFAULT_NUM_ADDRESSES_TO_FETCH } from '../../../constants';
const addressOfHDKey = (hdKey) => {
    const shouldSanitizePublicKey = true;
    const derivedPublicKey = hdKey.publicKey;
    const ethereumAddressWithoutPrefix = publicToAddress(derivedPublicKey, shouldSanitizePublicKey).toString('hex');
    const address = addHexPrefix(ethereumAddressWithoutPrefix);
    return address;
};
export default class AccountManager {
    wallets = [];
    ledger;
    constructor(ledger) {
        this.ledger = ledger;
        this.wallets = [];
    }
    async getWallets(baseDerivationPath, derivationPathType) {
        const { start, end } = this.getOffset();
        /**
         * 1. Wallets are not yet fetched at all,
         * 2. Wallets are not yet fetched for that offset
         */
        if (!this.hasWallets() || !this.hasWalletsInOffset(start)) {
            await this.getWalletsBasedOnIndex({
                start,
                end,
                baseDerivationPath,
                derivationPathType,
            });
        }
        return this.wallets.slice(start, end);
    }
    getLedgerDerivationPathBasedOnType = ({ fullBaseDerivationPath, derivationPathType, index, }) => {
        if (derivationPathType === LedgerDerivationPathType.LedgerLive) {
            return `${fullBaseDerivationPath}/${index}'/0/0`;
        }
        return `${fullBaseDerivationPath}/0'/${index}`;
    };
    async getWalletsBasedOnIndex({ start, end, baseDerivationPath, derivationPathType, }) {
        for (let index = start; index < end; index += 1) {
            const path = this.getLedgerDerivationPathBasedOnType({
                fullBaseDerivationPath: baseDerivationPath,
                derivationPathType,
                index,
            });
            const result = await this.ledger.getAddress(path);
            const hdKey = new HDNode();
            hdKey.publicKey = Buffer.from(result.publicKey, 'hex');
            hdKey.chainCode = Buffer.from(result.chainCode || '', 'hex');
            const address = result.address || addressOfHDKey(hdKey);
            this.wallets.push({
                hdKey,
                baseDerivationPath,
                address: address.toLowerCase(),
                derivationPath: path,
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