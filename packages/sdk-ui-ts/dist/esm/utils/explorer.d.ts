import { SupportedChains } from '../types/explorer';
import { BridgingNetwork } from '../types/bridge';
import { Network } from '@injectivelabs/networks';
export declare const getSupportedNetworkFromAddress: (address: string) => SupportedChains | BridgingNetwork;
export declare const getBlockExplorerPathFromNetworkType: ({ network, chain, address, }: {
    network: Network;
    chain: SupportedChains | BridgingNetwork;
    address: string;
}) => string | undefined;
//# sourceMappingURL=explorer.d.ts.map