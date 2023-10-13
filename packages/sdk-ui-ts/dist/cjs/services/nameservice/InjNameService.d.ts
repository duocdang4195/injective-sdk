import { Network, NetworkEndpoints } from '@injectivelabs/networks';
import { ChainGrpcWasmApi } from '@injectivelabs/sdk-ts';
export declare class InjNameService {
    protected client: ChainGrpcWasmApi;
    private registryAddress;
    private reverseResolverAddress;
    constructor(network?: Network, endpoints?: NetworkEndpoints);
    private fetchResolverAddress;
    fetchInjAddress(name: string): Promise<any>;
    fetchInjName(address: string): Promise<any>;
}
//# sourceMappingURL=InjNameService.d.ts.map