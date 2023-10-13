import { BaseWasmQuery } from '../../BaseWasmQuery';
import { toBase64 } from '../../../../utils';
export class QueryLockedLpFunds extends BaseWasmQuery {
    toPayload() {
        return toBase64({
            get_locked_l_p_funds: {
                subaccount_id: this.params.subaccountId,
                user_address: this.params.userAddress,
            },
        });
    }
}
//# sourceMappingURL=QueryLockedLpFunds.js.map