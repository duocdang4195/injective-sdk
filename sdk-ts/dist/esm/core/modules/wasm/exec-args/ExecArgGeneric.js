import { dataToExecData, ExecArgBase, } from '../ExecArgBase';
export default class ExecArgGeneric extends ExecArgBase {
    static fromJSON(params) {
        return new ExecArgGeneric(params);
    }
    toData() {
        return {};
    }
    toExecData() {
        const { params } = this;
        return dataToExecData(params.name, this.toData());
    }
}
//# sourceMappingURL=ExecArgGeneric.js.map