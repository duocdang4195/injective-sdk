import { BaseWasmQuery } from '../../BaseWasmQuery';
import { toBase64 } from '../../../../utils';
export class QueryContractAllowance extends BaseWasmQuery {
    toPayload() {
        return toBase64({
            allowance: {
                owner: this.params.owner,
                spender: this.params.spender,
            },
        });
    }
}
//# sourceMappingURL=QueryContractAllowance.js.map