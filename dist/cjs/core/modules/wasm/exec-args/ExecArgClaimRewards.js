"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExecArgBase_1 = require("../ExecArgBase");
/**
 * @category Contract Exec Arguments
 */
class ExecArgClaimRewards extends ExecArgBase_1.ExecArgBase {
    static fromJSON(params) {
        return new ExecArgClaimRewards(params);
    }
    toData() {
        const { params } = this;
        return {
            lp_token: params.lpToken,
        };
    }
    toExecData() {
        return (0, ExecArgBase_1.dataToExecData)('claim_rewards', this.toData());
    }
}
exports.default = ExecArgClaimRewards;
//# sourceMappingURL=ExecArgClaimRewards.js.map