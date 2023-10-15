import { ExecArgBase, ExecDataRepresentation } from '../ExecArgBase';
export declare namespace ExecArgUpdateAllocatorContractConfig {
    interface Params {
        owner?: string;
        stakingContractAddress?: string;
        maxRewardDenomsPerGauge?: string;
        minGaugeDurationInSeconds?: string;
        maxActiveGaugesPerLpToken?: string;
        gaugeAllocationFee?: {
            denom: string;
            amount: string;
        };
    }
    interface Data {
        owner?: string;
        staking_contract_address?: string;
        max_reward_denoms_per_gauge?: string;
        min_gauge_duration_in_seconds?: string;
        max_active_gauges_per_lp_token?: string;
        gauge_allocation_fee?: {
            denom: string;
            amount: string;
        };
    }
}
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgUpdateAllocatorContractConfig extends ExecArgBase<ExecArgUpdateAllocatorContractConfig.Params, ExecArgUpdateAllocatorContractConfig.Data> {
    static fromJSON(params: ExecArgUpdateAllocatorContractConfig.Params): ExecArgUpdateAllocatorContractConfig;
    toData(): ExecArgUpdateAllocatorContractConfig.Data;
    toExecData(): ExecDataRepresentation<ExecArgUpdateAllocatorContractConfig.Data>;
}
//# sourceMappingURL=ExecArgUpdateAllocatorContractConfig.d.ts.map