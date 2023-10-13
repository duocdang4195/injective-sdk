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
const connect_web_1 = __importDefault(require("@trezor/connect-web"));
const hdkey_1 = __importDefault(require("hdkey"));
const constants_1 = require("../../../constants");
const AccountManager_1 = __importDefault(require("./AccountManager"));
// @ts-ignore
const trezorConnect = connect_web_1.default.default || connect_web_1.default;
const TREZOR_CONNECT_MANIFEST = {
    email: 'contact@injectivelabs.org',
    appUrl: 'https://injectivelabs.org',
};
class TrezorTransport {
    constructor() {
        this.accountManager = null;
        this.hdKey = new hdkey_1.default();
        trezorConnect.init({ lazyLoad: true, manifest: TREZOR_CONNECT_MANIFEST });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.init();
        });
    }
    getAccountManager() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.accountManager) {
                this.accountManager = new AccountManager_1.default(this.hdKey);
            }
            return this.accountManager;
        });
    }
    isUnlocked() {
        return Boolean(this.hdKey && this.hdKey.publicKey);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isUnlocked()) {
                return Promise.resolve();
            }
            return new Promise((resolve, reject) => {
                connect_web_1.default.getPublicKey({
                    path: `${constants_1.DEFAULT_BASE_DERIVATION_PATH}/0'/0`,
                    coin: 'ETH',
                })
                    .then((response) => {
                    if (!response.success) {
                        return reject(new Error((response.payload && response.payload.error) ||
                            'Please make sure your Trezor is connected and unlocked'));
                    }
                    this.hdKey.publicKey = Buffer.from(response.payload.publicKey, 'hex');
                    this.hdKey.chainCode = Buffer.from(response.payload.chainCode, 'hex');
                    return resolve(connect_web_1.default);
                })
                    .catch((e) => {
                    reject(new Error((e && e.toString()) ||
                        'Please make sure your Trezor is connected and unlocked'));
                });
            });
        });
    }
}
exports.default = TrezorTransport;
//# sourceMappingURL=index.js.map