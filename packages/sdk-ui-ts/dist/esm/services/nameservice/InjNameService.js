import { GeneralException } from '@injectivelabs/exceptions';
import { Network, getNetworkEndpoints, } from '@injectivelabs/networks';
import { nameToNode, normalizeName, QueryInjName, ChainGrpcWasmApi, QueryResolverAddress, QueryInjectiveAddress, InjNameServiceQueryTransformer, INJ_NAME_REGISTRY_CONTRACT_BY_NETWORK, INJ_NAME_REVERSE_RESOLVER_CONTRACT_BY_NETWORK, } from '@injectivelabs/sdk-ts';
export class InjNameService {
    client;
    registryAddress;
    reverseResolverAddress;
    constructor(network = Network.Testnet, endpoints) {
        const networkEndpoints = endpoints || getNetworkEndpoints(network);
        this.client = new ChainGrpcWasmApi(networkEndpoints.grpc);
        this.registryAddress = INJ_NAME_REGISTRY_CONTRACT_BY_NETWORK[network];
        this.reverseResolverAddress =
            INJ_NAME_REVERSE_RESOLVER_CONTRACT_BY_NETWORK[network];
    }
    async fetchResolverAddress(node) {
        const query = new QueryResolverAddress({ node }).toPayload();
        const response = await this.client.fetchSmartContractState(this.registryAddress, query);
        return InjNameServiceQueryTransformer.resolverAddressResponseToResolverAddress(response);
    }
    async fetchInjAddress(name) {
        const node = nameToNode(normalizeName(name));
        if (!node) {
            throw new GeneralException(new Error(`The ${name} can't be normalized`));
        }
        const resolverAddress = await this.fetchResolverAddress(node);
        if (!resolverAddress) {
            throw new GeneralException(new Error(`Resolver address not found`));
        }
        const query = new QueryInjectiveAddress({ node }).toPayload();
        const response = await this.client.fetchSmartContractState(resolverAddress, query);
        return InjNameServiceQueryTransformer.injectiveAddressResponseToInjectiveAddress(response);
    }
    async fetchInjName(address) {
        const query = new QueryInjName({ address }).toPayload();
        const response = await this.client.fetchSmartContractState(this.reverseResolverAddress, query);
        const name = InjNameServiceQueryTransformer.injectiveNameResponseToInjectiveName(response);
        if (!name) {
            throw new GeneralException(new Error(`.inj not found for ${address}`));
        }
        const addressFromName = await this.fetchInjAddress(name);
        if (addressFromName.toLowerCase() !== address.toLowerCase()) {
            throw new GeneralException(new Error(`.inj not found for ${address}`));
        }
        return name;
    }
}
//# sourceMappingURL=InjNameService.js.map