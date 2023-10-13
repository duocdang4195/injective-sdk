import { ethers } from 'ethers';
export default class BaseContract {
    abi;
    address;
    contract;
    ethersInterface;
    constructor({ abi, address, provider, }) {
        this.abi = abi;
        this.address = address;
        this.contract = new ethers.Contract(address, abi, provider);
        this.ethersInterface = new ethers.utils.Interface(abi);
    }
}
//# sourceMappingURL=BaseContract.js.map