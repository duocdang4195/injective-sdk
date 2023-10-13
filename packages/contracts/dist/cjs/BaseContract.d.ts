import { EthereumChainId } from '@injectivelabs/ts-types';
export default class BaseContract<T extends any> {
    readonly abi: any;
    readonly address: string;
    protected readonly contract: T;
    protected readonly ethersInterface: any;
    constructor({ abi, address, provider, }: {
        abi: any;
        provider: any;
        address: string;
        ethereumChainId?: EthereumChainId;
    });
}
//# sourceMappingURL=BaseContract.d.ts.map