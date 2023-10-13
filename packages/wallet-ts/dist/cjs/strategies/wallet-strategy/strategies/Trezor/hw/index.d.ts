import AccountManager from './AccountManager';
export default class TrezorTransport {
    private accountManager;
    private hdKey;
    constructor();
    connect(): Promise<void>;
    getAccountManager(): Promise<AccountManager>;
    private isUnlocked;
    private init;
}
//# sourceMappingURL=index.d.ts.map