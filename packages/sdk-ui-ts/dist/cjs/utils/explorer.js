"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlockExplorerPathFromNetworkType = exports.getSupportedNetworkFromAddress = void 0;
const explorer_1 = require("../types/explorer");
const bridge_1 = require("./bridge");
const bridge_2 = require("../types/bridge");
const bridge_3 = require("./bridge");
const getSupportedNetworkFromAddress = (address) => {
    if (address.includes('inj')) {
        return explorer_1.SupportedChains.Injective;
    }
    if (address.startsWith('0x')) {
        return explorer_1.SupportedChains.Ethereum;
    }
    return (0, bridge_3.getNetworkFromAddress)(address);
};
exports.getSupportedNetworkFromAddress = getSupportedNetworkFromAddress;
const getBlockExplorerPathFromNetworkType = ({ network, chain, address, }) => {
    if (chain === explorer_1.SupportedChains.Injective) {
        return undefined;
    }
    if (chain === explorer_1.SupportedChains.Solana) {
        return `${(0, bridge_1.getSolanaExplorerUrl)(network)}/address/${address}`;
    }
    if (chain === explorer_1.SupportedChains.Ethereum) {
        return `${(0, bridge_3.getEthereumExplorerUrl)(network)}/address/${address}`;
    }
    if (chain === bridge_2.BridgingNetwork.EthereumWh) {
        return `${(0, bridge_3.getEthereumExplorerUrl)(network)}/address/${address}`;
    }
    if (chain === bridge_2.BridgingNetwork.Polygon) {
        return `${(0, bridge_1.getPolygonExplorerUrl)(network)}/address/${address}`;
    }
    if (Object.values(bridge_2.BridgingNetwork).includes(chain)) {
        return `${(0, bridge_1.getCosmosExplorerUrl)(chain, network)}/account/${address}`;
    }
    return undefined;
};
exports.getBlockExplorerPathFromNetworkType = getBlockExplorerPathFromNetworkType;
//# sourceMappingURL=explorer.js.map