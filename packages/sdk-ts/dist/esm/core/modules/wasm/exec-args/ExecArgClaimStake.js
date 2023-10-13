import { dataToExecData, ExecArgBase, } from '../ExecArgBase';
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgClaimStake extends ExecArgBase {
    static fromJSON(params) {
        return new ExecArgClaimStake(params);
    }
    toData() {
        const { params } = this;
        return {
            lp_token: params.lpToken,
        };
    }
    toExecData() {
        return dataToExecData('claim_stake', this.toData());
    }
}
//# sourceMappingURL=ExecArgClaimStake.js.map