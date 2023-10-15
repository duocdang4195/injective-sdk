"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExecArgBase_1 = require("../ExecArgBase");
/**
 * @category Contract Exec Arguments
 */
class ExecArgUpdateAllocatorContractConfig extends ExecArgBase_1.ExecArgBase {
    static fromJSON(params) {
        return new ExecArgUpdateAllocatorContractConfig(params);
    }
    toData() {
        const { params } = this;
        return {
            owner: params.owner,
            staking_contract_address: params.stakingContractAddress,
            max_reward_denoms_per_gauge: params.maxRewardDenomsPerGauge,
            min_gauge_duration_in_seconds: params.minGaugeDurationInSeconds,
            max_active_gauges_per_lp_token: params.maxActiveGaugesPerLpToken,
            gauge_allocation_fee: params.gaugeAllocationFee,
        };
    }
    toExecData() {
        return (0, ExecArgBase_1.dataToExecData)('update_config', this.toData());
    }
}
exports.default = ExecArgUpdateAllocatorContractConfig;
//# sourceMappingURL=ExecArgUpdateAllocatorContractConfig.js.map