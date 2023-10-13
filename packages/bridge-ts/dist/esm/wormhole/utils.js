import { PublicKey as SolanaPublicKey } from '@solana/web3.js';
import { GeneralException } from '@injectivelabs/exceptions';
import { WormholeSource, } from './types';
import { WORMHOLE_CHAINS, WORMHOLE_CONTRACT_BY_NETWORK, WORMHOLE_SUI_CONTRACT_BY_NETWORK, WORMHOLE_APTOS_CONTRACT_BY_NETWORK, WORMHOLE_SOLANA_CONTRACT_BY_NETWORK, WORMHOLE_KLAYTN_CONTRACT_BY_NETWORK, WORMHOLE_POLYGON_CONTRACT_BY_NETWORK, WORMHOLE_ARBITRUM_CONTRACT_BY_NETWORK, WORMHOLE_ETHEREUM_CONTRACT_BY_NETWORK, WORMHOLE_NATIVE_WRAPPED_ADDRESS, } from './constants';
export const getSolanaTransactionInfo = async (transactionId, connection) => {
    const POLL_INTERVAL = 5000;
    const timeout = 30000;
    for (let i = 0; i <= timeout / POLL_INTERVAL; i += 1) {
        try {
            const txResponse = await connection.getTransaction(transactionId);
            if (txResponse) {
                return txResponse;
            }
        }
        catch (error) { }
        await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL));
    }
    return null;
};
export const getEthereumContractAddresses = (network) => {
    const associatedChainContractAddresses = WORMHOLE_ETHEREUM_CONTRACT_BY_NETWORK(network);
    const injectiveContractAddresses = WORMHOLE_CONTRACT_BY_NETWORK(network);
    if (!injectiveContractAddresses) {
        throw new GeneralException(new Error(`Contracts for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses) {
        throw new GeneralException(new Error(`Contracts for ${network} on Solana not found`));
    }
    if (!injectiveContractAddresses.token_bridge) {
        throw new GeneralException(new Error(`Token Bridge Address for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses.token_bridge) {
        throw new GeneralException(new Error(`Token Bridge Address for ${network} on Ethereum not found`));
    }
    return {
        injectiveContractAddresses,
        associatedChainContractAddresses,
    };
};
export const getSolanaContractAddresses = (network) => {
    const associatedChainContractAddresses = WORMHOLE_SOLANA_CONTRACT_BY_NETWORK(network);
    const injectiveContractAddresses = WORMHOLE_CONTRACT_BY_NETWORK(network);
    if (!injectiveContractAddresses) {
        throw new GeneralException(new Error(`Contracts for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses) {
        throw new GeneralException(new Error(`Contracts for ${network} on Solana not found`));
    }
    if (!injectiveContractAddresses.token_bridge) {
        throw new GeneralException(new Error(`Token Bridge Address for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses.token_bridge) {
        throw new GeneralException(new Error(`Token Bridge Address for ${network} on Solana not found`));
    }
    return {
        injectiveContractAddresses,
        associatedChainContractAddresses,
    };
};
export const getArbitrumContractAddresses = (network) => {
    const associatedChainContractAddresses = WORMHOLE_ARBITRUM_CONTRACT_BY_NETWORK(network);
    const injectiveContractAddresses = WORMHOLE_CONTRACT_BY_NETWORK(network);
    if (!injectiveContractAddresses) {
        throw new GeneralException(new Error(`Contracts for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses) {
        throw new GeneralException(new Error(`Contracts for ${network} on Arbitrum not found`));
    }
    if (!injectiveContractAddresses.token_bridge) {
        throw new GeneralException(new Error(`Token Bridge Address for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses.token_bridge) {
        throw new GeneralException(new Error(`Token Bridge Address for ${network} on Arbitrum not found`));
    }
    return {
        injectiveContractAddresses,
        associatedChainContractAddresses,
    };
};
export const getPolygonContractAddresses = (network) => {
    const associatedChainContractAddresses = WORMHOLE_POLYGON_CONTRACT_BY_NETWORK(network);
    const injectiveContractAddresses = WORMHOLE_CONTRACT_BY_NETWORK(network);
    if (!injectiveContractAddresses) {
        throw new GeneralException(new Error(`Contracts for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses) {
        throw new GeneralException(new Error(`Contracts for ${network} on Polygon not found`));
    }
    if (!injectiveContractAddresses.token_bridge) {
        throw new GeneralException(new Error(`Token Bridge Address for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses.token_bridge) {
        throw new GeneralException(new Error(`Token Bridge Address for ${network} on Polygon not found`));
    }
    return {
        injectiveContractAddresses,
        associatedChainContractAddresses,
    };
};
export const getSuiContractAddresses = (network) => {
    const associatedChainContractAddresses = WORMHOLE_SUI_CONTRACT_BY_NETWORK(network);
    const injectiveContractAddresses = WORMHOLE_CONTRACT_BY_NETWORK(network);
    if (!injectiveContractAddresses) {
        throw new GeneralException(new Error(`Contracts for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses) {
        throw new GeneralException(new Error(`Contracts for ${network} on Sui not found`));
    }
    if (!injectiveContractAddresses.token_bridge) {
        throw new GeneralException(new Error(`Token Bridge Address for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses.token_bridge) {
        throw new GeneralException(new Error(`Token Bridge Address for ${network} on Sui not found`));
    }
    return {
        injectiveContractAddresses,
        associatedChainContractAddresses,
    };
};
export const getKlaytnContractAddresses = (network) => {
    const associatedChainContractAddresses = WORMHOLE_KLAYTN_CONTRACT_BY_NETWORK(network);
    const injectiveContractAddresses = WORMHOLE_CONTRACT_BY_NETWORK(network);
    if (!injectiveContractAddresses) {
        throw new GeneralException(new Error(`Contracts for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses) {
        throw new GeneralException(new Error(`Contracts for ${network} on Klaytn not found`));
    }
    if (!injectiveContractAddresses.token_bridge) {
        throw new GeneralException(new Error(`Token Bridge Address for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses.token_bridge) {
        throw new GeneralException(new Error(`Token Bridge Address for ${network} on Klaytn not found`));
    }
    return {
        injectiveContractAddresses,
        associatedChainContractAddresses,
    };
};
export const getAptosContractAddresses = (network) => {
    const associatedChainContractAddresses = WORMHOLE_APTOS_CONTRACT_BY_NETWORK(network);
    const injectiveContractAddresses = WORMHOLE_CONTRACT_BY_NETWORK(network);
    if (!injectiveContractAddresses) {
        throw new GeneralException(new Error(`Contracts for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses) {
        throw new GeneralException(new Error(`Contracts for ${network} on Aptos not found`));
    }
    if (!injectiveContractAddresses.token_bridge) {
        throw new GeneralException(new Error(`Token Bridge Address for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses.token_bridge) {
        throw new GeneralException(new Error(`Token Bridge Address for ${network} on Aptos not found`));
    }
    return {
        injectiveContractAddresses,
        associatedChainContractAddresses,
    };
};
export const getContractAddresses = (network, source = WormholeSource.Solana) => {
    switch (source) {
        case WormholeSource.Solana:
            return getSolanaContractAddresses(network);
        case WormholeSource.Ethereum:
            return getEthereumContractAddresses(network);
        case WormholeSource.Arbitrum:
            return getArbitrumContractAddresses(network);
        case WormholeSource.Sui:
            return getSuiContractAddresses(network);
        case WormholeSource.Polygon:
            return getPolygonContractAddresses(network);
        case WormholeSource.Klaytn:
            return getKlaytnContractAddresses(network);
        case WormholeSource.Aptos:
            return getAptosContractAddresses(network);
        default:
            return getSolanaContractAddresses(network);
    }
};
export const getAssociatedChain = (source = WormholeSource.Solana) => {
    switch (source) {
        case WormholeSource.Solana:
            return WORMHOLE_CHAINS.solana;
        case WormholeSource.Ethereum:
            return WORMHOLE_CHAINS.ethereum;
        case WormholeSource.Arbitrum:
            return WORMHOLE_CHAINS.arbitrum;
        case WormholeSource.Sui:
            return WORMHOLE_CHAINS.sui;
        case WormholeSource.Polygon:
            return WORMHOLE_CHAINS.polygon;
        case WormholeSource.Klaytn:
            return WORMHOLE_CHAINS.klaytn;
        case WormholeSource.Aptos:
            return WORMHOLE_CHAINS.aptos;
        default:
            return WORMHOLE_CHAINS.solana;
    }
};
export const getAssociatedChainRecipient = (recipient, source = WormholeSource.Solana) => {
    switch (source) {
        case WormholeSource.Solana:
            return new SolanaPublicKey(recipient).toString();
        case WormholeSource.Ethereum:
            return recipient; /* Hex Ethereum Address */
        case WormholeSource.Arbitrum:
            return recipient; /* Hex Address */
        case WormholeSource.Polygon:
            return recipient; /* Hex Address */
        case WormholeSource.Klaytn:
            return recipient; /* Hex Address */
        case WormholeSource.Aptos:
            throw Error('Aptos not yet implemented');
        case WormholeSource.Sui:
            throw Error('Sui not yet implemented');
        default:
            return new SolanaPublicKey(recipient).toString();
    }
};
export const getEvmNativeAddress = (network, source = WormholeSource.Ethereum) => {
    const addresses = WORMHOLE_NATIVE_WRAPPED_ADDRESS(network);
    if (source === WormholeSource.Ethereum) {
        if (!addresses.ethereum) {
            throw new GeneralException(new Error(`Ethereum native address for ${network} not found`));
        }
        return addresses.ethereum;
    }
    if (source === WormholeSource.Polygon) {
        if (!addresses.polygon) {
            throw new GeneralException(new Error(`Polygon native address for ${network} not found`));
        }
        return addresses.polygon;
    }
    throw new GeneralException(new Error(`Native address for ${network} and ${source} not found`));
};
export const getEvmChainName = (chainId) => {
    switch (chainId) {
        case 1:
            return 'Ethereum';
        case 42161:
            return 'Arbitrum';
        case 137:
            return 'Polygon';
        default:
            return 'Ethereum';
    }
};
//# sourceMappingURL=utils.js.map