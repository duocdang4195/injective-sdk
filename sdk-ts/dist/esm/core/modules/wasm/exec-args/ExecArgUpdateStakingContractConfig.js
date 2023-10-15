import { dataToExecData, ExecArgBase, } from '../ExecArgBase';
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgUpdateStakingContractConfig extends ExecArgBase {
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
        return dataToExecData('update_config', this.toData());
    }
}
//# sourceMappingURL=ExecArgUpdateStakingContractConfig.js.map