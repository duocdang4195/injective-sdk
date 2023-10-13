import { ExecArgBase, ExecDataRepresentation } from '../ExecArgBase';
export declare namespace ExecArgUpdateStakingContractConfig {
    interface Params {
        owner: string;
        lockupPeriod?: string;
        allocatorContractAddress: string;
    }
    interface Data {
        owner: string;
        lockup_period?: string;
        allocator_contract_address: string;
    }
}
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgUpdateStakingContractConfig extends ExecArgBase<ExecArgUpdateStakingContractConfig.Params, ExecArgUpdateStakingContractConfig.Data> {
    static fromJSON(params: ExecArgUpdateStakingContractConfig.Params): ExecArgUpdateStakingContractConfig;
    toData(): ExecArgUpdateStakingContractConfig.Data;
    toExecData(): ExecDataRepresentation<ExecArgUpdateStakingContractConfig.Data>;
}
//# sourceMappingURL=ExecArgUpdateStakingContractConfig.d.ts.map