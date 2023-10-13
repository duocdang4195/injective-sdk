export default class BaseConcreteStrategy {
    chainId;
    ethereumChainId;
    constructor({ chainId, ethereumOptions }) {
        this.ethereumChainId = ethereumOptions
            ? ethereumOptions.ethereumChainId
            : undefined;
        this.chainId = chainId;
    }
}
//# sourceMappingURL=Base.js.map