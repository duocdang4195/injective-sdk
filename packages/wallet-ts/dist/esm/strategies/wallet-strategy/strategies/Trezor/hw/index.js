import TrezorConnect from '@trezor/connect-web';
import HDNode from 'hdkey';
import { DEFAULT_BASE_DERIVATION_PATH } from '../../../constants';
import AccountManager from './AccountManager';
// @ts-ignore
const trezorConnect = TrezorConnect.default || TrezorConnect;
const TREZOR_CONNECT_MANIFEST = {
    email: 'contact@injectivelabs.org',
    appUrl: 'https://injectivelabs.org',
};
export default class TrezorTransport {
    accountManager = null;
    hdKey = new HDNode();
    constructor() {
        trezorConnect.init({ lazyLoad: true, manifest: TREZOR_CONNECT_MANIFEST });
    }
    async connect() {
        await this.init();
    }
    async getAccountManager() {
        if (!this.accountManager) {
            this.accountManager = new AccountManager(this.hdKey);
        }
        return this.accountManager;
    }
    isUnlocked() {
        return Boolean(this.hdKey && this.hdKey.publicKey);
    }
    async init() {
        if (this.isUnlocked()) {
            return Promise.resolve();
        }
        return new Promise((resolve, reject) => {
            TrezorConnect.getPublicKey({
                path: `${DEFAULT_BASE_DERIVATION_PATH}/0'/0`,
                coin: 'ETH',
            })
                .then((response) => {
                if (!response.success) {
                    return reject(new Error((response.payload && response.payload.error) ||
                        'Please make sure your Trezor is connected and unlocked'));
                }
                this.hdKey.publicKey = Buffer.from(response.payload.publicKey, 'hex');
                this.hdKey.chainCode = Buffer.from(response.payload.chainCode, 'hex');
                return resolve(TrezorConnect);
            })
                .catch((e) => {
                reject(new Error((e && e.toString()) ||
                    'Please make sure your Trezor is connected and unlocked'));
            });
        });
    }
}
//# sourceMappingURL=index.js.map