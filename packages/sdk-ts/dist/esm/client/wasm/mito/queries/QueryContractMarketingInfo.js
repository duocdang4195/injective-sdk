import { BaseWasmQuery } from '../../BaseWasmQuery';
import { toBase64 } from '../../../../utils';
export class QueryContractMarketingInfo extends BaseWasmQuery {
    toPayload() {
        return toBase64({ marketing_info: {} });
    }
}
//# sourceMappingURL=QueryContractMarketingInfo.js.map