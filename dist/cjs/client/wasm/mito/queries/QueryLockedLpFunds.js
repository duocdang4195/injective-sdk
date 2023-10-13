"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryLockedLpFunds = void 0;
const BaseWasmQuery_1 = require("../../BaseWasmQuery");
const utils_1 = require("../../../../utils");
class QueryLockedLpFunds extends BaseWasmQuery_1.BaseWasmQuery {
    toPayload() {
        return (0, utils_1.toBase64)({
            get_locked_l_p_funds: {
                subaccount_id: this.params.subaccountId,
                user_address: this.params.userAddress,
            },
        });
    }
}
exports.QueryLockedLpFunds = QueryLockedLpFunds;
//# sourceMappingURL=QueryLockedLpFunds.js.map