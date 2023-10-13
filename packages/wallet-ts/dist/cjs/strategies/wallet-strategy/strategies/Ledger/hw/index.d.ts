import type EthereumApp from '@ledgerhq/hw-app-eth';
import type Transport from '@ledgerhq/hw-transport';
import AccountManager from './AccountManager';
export default class LedgerTransport {
    private ledger;
    private accountManager;
    protected static getTransport(): Promise<Transport>;
    getInstance(): Promise<EthereumApp>;
    getAccountManager(): Promise<AccountManager>;
}
//# sourceMappingURL=index.d.ts.map