"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryVaultTotalLpSupply = void 0;
const BaseWasmQuery_1 = require("../../BaseWasmQuery");
const utils_1 = require("../../../../utils");
class QueryVaultTotalLpSupply extends BaseWasmQuery_1.BaseWasmQuery {
    toPayload() {
        return (0, utils_1.toBase64)({
            get_total_lp_supply: {
                subaccount_id: this.params.subaccountId,
            },
        });
    }
}
exports.QueryVaultTotalLpSupply = QueryVaultTotalLpSupply;
//# sourceMappingURL=QueryVaultTotalLpSupply.js.map