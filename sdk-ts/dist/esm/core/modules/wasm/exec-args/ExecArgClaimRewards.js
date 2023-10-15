import { dataToExecData, ExecArgBase, } from '../ExecArgBase';
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgClaimRewards extends ExecArgBase {
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
        return dataToExecData('claim_rewards', this.toData());
    }
}
//# sourceMappingURL=ExecArgClaimRewards.js.map