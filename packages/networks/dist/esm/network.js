import { devnetChainInfo, localChainInfo, mainnetChainInfo, testnetChainInfo, } from './chainInfos';
import { endpointsLocal, endpointsPublic, endpointsDevnet, endpointsTestnet, endpointsMainnet, endpointsStaging, endpointsDevnet1, endpointsDevnet2, endpointsInternal, endpointsMainnetLB, endpointsTestnetK8s, endpointsTestnetOld, endpointsMainnetK8s, endpointsTestnetSentry, } from './endpoints';
import { Network } from './types';
export const networkEndpoints = {
    [Network.MainnetLB]: endpointsMainnetLB,
    [Network.MainnetK8s]: endpointsMainnetK8s,
    [Network.Staging]: endpointsStaging,
    [Network.Mainnet]: endpointsMainnet,
    [Network.Public]: endpointsPublic,
    [Network.Internal]: endpointsInternal,
    [Network.Devnet]: endpointsDevnet,
    [Network.Devnet1]: endpointsDevnet1,
    [Network.Devnet2]: endpointsDevnet2,
    [Network.Testnet]: endpointsTestnet,
    [Network.TestnetK8s]: endpointsTestnetK8s,
    [Network.TestnetOld]: endpointsTestnetOld,
    [Network.TestnetSentry]: endpointsTestnetSentry,
    [Network.Local]: endpointsLocal,
};
export const chainInfos = {
    [Network.MainnetLB]: mainnetChainInfo,
    [Network.MainnetK8s]: mainnetChainInfo,
    [Network.Staging]: mainnetChainInfo,
    [Network.Mainnet]: mainnetChainInfo,
    [Network.Public]: mainnetChainInfo,
    [Network.Internal]: mainnetChainInfo,
    [Network.Devnet]: devnetChainInfo,
    [Network.Devnet1]: devnetChainInfo,
    [Network.Devnet2]: devnetChainInfo,
    [Network.Testnet]: testnetChainInfo,
    [Network.TestnetOld]: testnetChainInfo,
    [Network.TestnetK8s]: testnetChainInfo,
    [Network.TestnetSentry]: testnetChainInfo,
    [Network.Local]: localChainInfo,
};
export const getNetworkEndpoints = (network) => networkEndpoints[network];
/**
 * @deprecated - use getNetworkChainInfo instead
 * @param network de
 * @returns
 */
export const getChainInfoForNetwork = (network) => chainInfos[network];
export const getNetworkChainInfo = (network) => chainInfos[network];
export const getNetworkInfo = (network) => ({
    ...chainInfos[network],
    ...networkEndpoints[network],
});
export const isMainnet = (network) => [
    Network.Public,
    Network.Staging,
    Network.Mainnet,
    Network.MainnetK8s,
    Network.Internal,
    Network.MainnetLB,
].includes(network);
export const isDevnet = (network) => [Network.Devnet, Network.Devnet1, Network.Devnet2, Network.Local].includes(network);
export const isTestnet = (network) => [
    Network.Testnet,
    Network.TestnetOld,
    Network.TestnetK8s,
    Network.TestnetSentry,
].includes(network);
export const isTestnetOrDevnet = (network) => isDevnet(network) || isTestnet(network);
//# sourceMappingURL=network.js.map