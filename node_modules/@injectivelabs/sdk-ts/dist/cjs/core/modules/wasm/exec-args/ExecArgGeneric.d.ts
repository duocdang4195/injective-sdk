import { ExecArgBase, ExecDataRepresentation } from '../ExecArgBase';
/**
 * @category Contract Exec Arguments for messages that do not require any additional params
 */
export declare namespace ExecArgGeneric {
    interface Params {
        name: string;
    }
    interface Data {
    }
}
export default class ExecArgGeneric extends ExecArgBase<ExecArgGeneric.Params, ExecArgGeneric.Data> {
    static fromJSON(params: ExecArgGeneric.Params): ExecArgGeneric;
    toData(): ExecArgGeneric.Data;
    toExecData(): ExecDataRepresentation<ExecArgGeneric.Data>;
}
//# sourceMappingURL=ExecArgGeneric.d.ts.map