import { ChainId } from '@injectivelabs/ts-types';
import { Network } from '@injectivelabs/networks';
import { ContractAddressesForChainId, ContractAddressesForNetwork, ContractAddresses } from './types';
export declare const contractAddresses: ContractAddressesForChainId;
export declare const contractAddressesByNetwork: ContractAddressesForNetwork;
export declare const getContractAddressesForChainOrThrow: (chainId: ChainId) => ContractAddresses;
export declare const getContractAddressesForNetworkOrThrow: (network: Network) => ContractAddresses;
//# sourceMappingURL=addresses.d.ts.map