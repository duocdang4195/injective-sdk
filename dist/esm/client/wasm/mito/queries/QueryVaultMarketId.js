import { BaseWasmQuery } from '../../BaseWasmQuery';
import { toBase64 } from '../../../../utils';
export class QueryVaultMarketId extends BaseWasmQuery {
    toPayload() {
        return toBase64({
            get_market_id: {
                subaccount_id: this.params.subaccountId,
            },
        });
    }
}
//# sourceMappingURL=QueryVaultMarketId.js.map