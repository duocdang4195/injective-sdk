import { BaseWasmQuery } from '../../BaseWasmQuery';
import { toBase64 } from '../../../../utils';
export class QueryContractConfig extends BaseWasmQuery {
    toPayload() {
        return toBase64({ config: {} });
    }
}
//# sourceMappingURL=QueryContractConfig.js.map