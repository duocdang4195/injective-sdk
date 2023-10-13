import { BaseWasmQuery } from '../../BaseWasmQuery';
import { toBase64 } from '../../../../utils';
export class QueryContractBaseConfig extends BaseWasmQuery {
    toPayload() {
        return toBase64({ base: { config: {} } });
    }
}
//# sourceMappingURL=QueryContractBaseConfig.js.map