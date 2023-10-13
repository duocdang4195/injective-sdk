import { Network as InjNetwork } from '@injectivelabs/networks';
export declare const fetchEstimatorGasPrice: (alchemyRpcUrl: string, network?: InjNetwork) => Promise<{
    slow: number;
    average: number;
    fast: number;
}>;
//# sourceMappingURL=estimator.d.ts.map