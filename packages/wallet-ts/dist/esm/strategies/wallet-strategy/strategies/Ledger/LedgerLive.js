import { LedgerDerivationPathType } from '../../types';
import LedgerBase from './Base';
export default class LedgerLive extends LedgerBase {
    constructor(args) {
        super({
            ...args,
            derivationPathType: LedgerDerivationPathType.LedgerLive,
        });
    }
}
//# sourceMappingURL=LedgerLive.js.map