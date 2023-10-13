import { BaseWasmQuery } from '../../BaseWasmQuery';
import { toBase64 } from '../../../../utils';
export class QueryRegisteredVaults extends BaseWasmQuery {
    toPayload() {
        return toBase64({ get_registered_vaults: {} });
    }
}
//# sourceMappingURL=QueryRegisteredVault.js.map