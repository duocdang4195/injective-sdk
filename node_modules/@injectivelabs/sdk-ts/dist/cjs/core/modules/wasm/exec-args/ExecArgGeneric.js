"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExecArgBase_1 = require("../ExecArgBase");
class ExecArgGeneric extends ExecArgBase_1.ExecArgBase {
    static fromJSON(params) {
        return new ExecArgGeneric(params);
    }
    toData() {
        return {};
    }
    toExecData() {
        const { params } = this;
        return (0, ExecArgBase_1.dataToExecData)(params.name, this.toData());
    }
}
exports.default = ExecArgGeneric;
//# sourceMappingURL=ExecArgGeneric.js.map