import { BaseWasmQuery } from '../../BaseWasmQuery';
import { toBase64 } from '../../../../utils';
export class QueryVaultTotalLpSupply extends BaseWasmQuery {
    toPayload() {
        return toBase64({
            get_total_lp_supply: {
                subaccount_id: this.params.subaccountId,
            },
        });
    }
}
//# sourceMappingURL=QueryVaultTotalLpSupply.js.map