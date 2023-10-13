"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class BaseContract {
    constructor({ abi, address, provider, }) {
        this.abi = abi;
        this.address = address;
        this.contract = new ethers_1.ethers.Contract(address, abi, provider);
        this.ethersInterface = new ethers_1.ethers.utils.Interface(abi);
    }
}
exports.default = BaseContract;
//# sourceMappingURL=BaseContract.js.map