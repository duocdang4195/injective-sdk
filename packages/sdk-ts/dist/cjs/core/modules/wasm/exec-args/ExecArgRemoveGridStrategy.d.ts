import { ExecArgBase, ExecDataRepresentation } from '../ExecArgBase';
export declare namespace ExecArgRemoveGridStrategy {
    interface Params {
    }
    interface Data {
    }
}
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgRemoveGridStrategy extends ExecArgBase<ExecArgRemoveGridStrategy.Params, ExecArgRemoveGridStrategy.Data> {
    static fromJSON(params: ExecArgRemoveGridStrategy.Params): ExecArgRemoveGridStrategy;
    toData(): ExecArgRemoveGridStrategy.Data;
    toExecData(): ExecDataRepresentation<ExecArgRemoveGridStrategy.Data>;
}
//# sourceMappingURL=ExecArgRemoveGridStrategy.d.ts.map