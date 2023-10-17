"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExecArgBase_1 = require("../ExecArgBase");
/**
 * @category Contract Exec Arguments
 */
class ExecArgUpdateStakingContractConfig extends ExecArgBase_1.ExecArgBase {
    static fromJSON(params) {
        return new ExecArgUpdateStakingContractConfig(params);
    }
    toData() {
        const { params } = this;
        return {
            owner: params.owner,
            lockup_period: params.lockupPeriod,
            allocator_contract_address: params.allocatorContractAddress,
        };
    }
    toExecData() {
        return (0, ExecArgBase_1.dataToExecData)('update_config', this.toData());
    }
}
exports.default = ExecArgUpdateStakingContractConfig;
//# sourceMappingURL=ExecArgUpdateStakingContractConfig.js.map