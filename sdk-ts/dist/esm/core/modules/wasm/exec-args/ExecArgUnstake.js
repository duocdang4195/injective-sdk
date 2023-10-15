import { dataToExecData, ExecArgBase, } from '../ExecArgBase';
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgUnStake extends ExecArgBase {
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
        return dataToExecData('unstake', this.toData());
    }
}
//# sourceMappingURL=ExecArgUnstake.js.map