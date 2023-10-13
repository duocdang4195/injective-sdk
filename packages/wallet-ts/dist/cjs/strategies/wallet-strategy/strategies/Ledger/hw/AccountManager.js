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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethereumjs_util_1 = require("ethereumjs-util");
const hdkey_1 = __importDefault(require("hdkey"));
const types_1 = require("../../../types");
const constants_1 = require("../../../constants");
const addressOfHDKey = (hdKey) => {
    const shouldSanitizePublicKey = true;
    const derivedPublicKey = hdKey.publicKey;
    const ethereumAddressWithoutPrefix = (0, ethereumjs_util_1.publicToAddress)(derivedPublicKey, shouldSanitizePublicKey).toString('hex');
    const address = (0, ethereumjs_util_1.addHexPrefix)(ethereumAddressWithoutPrefix);
    return address;
};
class AccountManager {
    constructor(ledger) {
        this.wallets = [];
        this.getLedgerDerivationPathBasedOnType = ({ fullBaseDerivationPath, derivationPathType, index, }) => {
            if (derivationPathType === types_1.LedgerDerivationPathType.LedgerLive) {
                return `${fullBaseDerivationPath}/${index}'/0/0`;
            }
            return `${fullBaseDerivationPath}/0'/${index}`;
        };
        this.ledger = ledger;
        this.wallets = [];
    }
    getWallets(baseDerivationPath, derivationPathType) {
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
                    baseDerivationPath,
                    derivationPathType,
                });
            }
            return this.wallets.slice(start, end);
        });
    }
    getWalletsBasedOnIndex({ start, end, baseDerivationPath, derivationPathType, }) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let index = start; index < end; index += 1) {
                const path = this.getLedgerDerivationPathBasedOnType({
                    fullBaseDerivationPath: baseDerivationPath,
                    derivationPathType,
                    index,
                });
                const result = yield this.ledger.getAddress(path);
                const hdKey = new hdkey_1.default();
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