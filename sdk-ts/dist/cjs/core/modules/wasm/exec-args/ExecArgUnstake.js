"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExecArgBase_1 = require("../ExecArgBase");
/**
 * @category Contract Exec Arguments
 */
class ExecArgUnStake extends ExecArgBase_1.ExecArgBase {
    static fromJSON(params) {
        return new ExecArgUnStake(params);
    }
    toData() {
        const { params } = this;
        return {
            coin: {
                denom: params.denom,
                amount: params.amount,
            },
        };
    }
    toExecData() {
        return (0, ExecArgBase_1.dataToExecData)('unstake', this.toData());
    }
}
exports.default = ExecArgUnStake;
//# sourceMappingURL=ExecArgUnstake.js.map