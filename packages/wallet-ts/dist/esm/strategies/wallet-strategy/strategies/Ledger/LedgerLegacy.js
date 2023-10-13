import { LedgerDerivationPathType } from '../../types';
import LedgerBase from './Base';
export default class LedgerLegacy extends LedgerBase {
    constructor(args) {
        super({
            ...args,
            derivationPathType: LedgerDerivationPathType.LedgerMew,
        });
    }
}
//# sourceMappingURL=LedgerLegacy.js.map