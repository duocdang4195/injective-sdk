import { dataToExecData, ExecArgBase, } from '../ExecArgBase';
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgUpdateAllocatorContractConfig extends ExecArgBase {
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
        return dataToExecData('update_config', this.toData());
    }
}
//# sourceMappingURL=ExecArgUpdateAllocatorContractConfig.js.map