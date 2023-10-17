import { ExecArgBase, ExecDataRepresentation } from '../ExecArgBase';
export declare namespace ExecArgUnStake {
    interface Params {
        denom: string;
        amount: string;
    }
    interface Data {
        coin: {
            denom: string;
            amount: string;
        };
    }
}
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgUnStake extends ExecArgBase<ExecArgUnStake.Params, ExecArgUnStake.Data> {
    static fromJSON(params: ExecArgUnStake.Params): ExecArgUnStake;
    toData(): ExecArgUnStake.Data;
    toExecData(): ExecDataRepresentation<ExecArgUnStake.Data>;
}
//# sourceMappingURL=ExecArgUnstake.d.ts.map