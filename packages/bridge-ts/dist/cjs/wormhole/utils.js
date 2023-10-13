"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvmChainName = exports.getEvmNativeAddress = exports.getAssociatedChainRecipient = exports.getAssociatedChain = exports.getContractAddresses = exports.getAptosContractAddresses = exports.getKlaytnContractAddresses = exports.getSuiContractAddresses = exports.getPolygonContractAddresses = exports.getArbitrumContractAddresses = exports.getSolanaContractAddresses = exports.getEthereumContractAddresses = exports.getSolanaTransactionInfo = void 0;
const web3_js_1 = require("@solana/web3.js");
const exceptions_1 = require("@injectivelabs/exceptions");
const types_1 = require("./types");
const constants_1 = require("./constants");
const getSolanaTransactionInfo = (transactionId, connection) => __awaiter(void 0, void 0, void 0, function* () {
    const POLL_INTERVAL = 5000;
    const timeout = 30000;
    for (let i = 0; i <= timeout / POLL_INTERVAL; i += 1) {
        try {
            const txResponse = yield connection.getTransaction(transactionId);
            if (txResponse) {
                return txResponse;
            }
        }
        catch (error) { }
        yield new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL));
    }
    return null;
});
exports.getSolanaTransactionInfo = getSolanaTransactionInfo;
const getEthereumContractAddresses = (network) => {
    const associatedChainContractAddresses = (0, constants_1.WORMHOLE_ETHEREUM_CONTRACT_BY_NETWORK)(network);
    const injectiveContractAddresses = (0, constants_1.WORMHOLE_CONTRACT_BY_NETWORK)(network);
    if (!injectiveContractAddresses) {
        throw new exceptions_1.GeneralException(new Error(`Contracts for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses) {
        throw new exceptions_1.GeneralException(new Error(`Contracts for ${network} on Solana not found`));
    }
    if (!injectiveContractAddresses.token_bridge) {
        throw new exceptions_1.GeneralException(new Error(`Token Bridge Address for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses.token_bridge) {
        throw new exceptions_1.GeneralException(new Error(`Token Bridge Address for ${network} on Ethereum not found`));
    }
    return {
        injectiveContractAddresses,
        associatedChainContractAddresses,
    };
};
exports.getEthereumContractAddresses = getEthereumContractAddresses;
const getSolanaContractAddresses = (network) => {
    const associatedChainContractAddresses = (0, constants_1.WORMHOLE_SOLANA_CONTRACT_BY_NETWORK)(network);
    const injectiveContractAddresses = (0, constants_1.WORMHOLE_CONTRACT_BY_NETWORK)(network);
    if (!injectiveContractAddresses) {
        throw new exceptions_1.GeneralException(new Error(`Contracts for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses) {
        throw new exceptions_1.GeneralException(new Error(`Contracts for ${network} on Solana not found`));
    }
    if (!injectiveContractAddresses.token_bridge) {
        throw new exceptions_1.GeneralException(new Error(`Token Bridge Address for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses.token_bridge) {
        throw new exceptions_1.GeneralException(new Error(`Token Bridge Address for ${network} on Solana not found`));
    }
    return {
        injectiveContractAddresses,
        associatedChainContractAddresses,
    };
};
exports.getSolanaContractAddresses = getSolanaContractAddresses;
const getArbitrumContractAddresses = (network) => {
    const associatedChainContractAddresses = (0, constants_1.WORMHOLE_ARBITRUM_CONTRACT_BY_NETWORK)(network);
    const injectiveContractAddresses = (0, constants_1.WORMHOLE_CONTRACT_BY_NETWORK)(network);
    if (!injectiveContractAddresses) {
        throw new exceptions_1.GeneralException(new Error(`Contracts for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses) {
        throw new exceptions_1.GeneralException(new Error(`Contracts for ${network} on Arbitrum not found`));
    }
    if (!injectiveContractAddresses.token_bridge) {
        throw new exceptions_1.GeneralException(new Error(`Token Bridge Address for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses.token_bridge) {
        throw new exceptions_1.GeneralException(new Error(`Token Bridge Address for ${network} on Arbitrum not found`));
    }
    return {
        injectiveContractAddresses,
        associatedChainContractAddresses,
    };
};
exports.getArbitrumContractAddresses = getArbitrumContractAddresses;
const getPolygonContractAddresses = (network) => {
    const associatedChainContractAddresses = (0, constants_1.WORMHOLE_POLYGON_CONTRACT_BY_NETWORK)(network);
    const injectiveContractAddresses = (0, constants_1.WORMHOLE_CONTRACT_BY_NETWORK)(network);
    if (!injectiveContractAddresses) {
        throw new exceptions_1.GeneralException(new Error(`Contracts for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses) {
        throw new exceptions_1.GeneralException(new Error(`Contracts for ${network} on Polygon not found`));
    }
    if (!injectiveContractAddresses.token_bridge) {
        throw new exceptions_1.GeneralException(new Error(`Token Bridge Address for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses.token_bridge) {
        throw new exceptions_1.GeneralException(new Error(`Token Bridge Address for ${network} on Polygon not found`));
    }
    return {
        injectiveContractAddresses,
        associatedChainContractAddresses,
    };
};
exports.getPolygonContractAddresses = getPolygonContractAddresses;
const getSuiContractAddresses = (network) => {
    const associatedChainContractAddresses = (0, constants_1.WORMHOLE_SUI_CONTRACT_BY_NETWORK)(network);
    const injectiveContractAddresses = (0, constants_1.WORMHOLE_CONTRACT_BY_NETWORK)(network);
    if (!injectiveContractAddresses) {
        throw new exceptions_1.GeneralException(new Error(`Contracts for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses) {
        throw new exceptions_1.GeneralException(new Error(`Contracts for ${network} on Sui not found`));
    }
    if (!injectiveContractAddresses.token_bridge) {
        throw new exceptions_1.GeneralException(new Error(`Token Bridge Address for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses.token_bridge) {
        throw new exceptions_1.GeneralException(new Error(`Token Bridge Address for ${network} on Sui not found`));
    }
    return {
        injectiveContractAddresses,
        associatedChainContractAddresses,
    };
};
exports.getSuiContractAddresses = getSuiContractAddresses;
const getKlaytnContractAddresses = (network) => {
    const associatedChainContractAddresses = (0, constants_1.WORMHOLE_KLAYTN_CONTRACT_BY_NETWORK)(network);
    const injectiveContractAddresses = (0, constants_1.WORMHOLE_CONTRACT_BY_NETWORK)(network);
    if (!injectiveContractAddresses) {
        throw new exceptions_1.GeneralException(new Error(`Contracts for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses) {
        throw new exceptions_1.GeneralException(new Error(`Contracts for ${network} on Klaytn not found`));
    }
    if (!injectiveContractAddresses.token_bridge) {
        throw new exceptions_1.GeneralException(new Error(`Token Bridge Address for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses.token_bridge) {
        throw new exceptions_1.GeneralException(new Error(`Token Bridge Address for ${network} on Klaytn not found`));
    }
    return {
        injectiveContractAddresses,
        associatedChainContractAddresses,
    };
};
exports.getKlaytnContractAddresses = getKlaytnContractAddresses;
const getAptosContractAddresses = (network) => {
    const associatedChainContractAddresses = (0, constants_1.WORMHOLE_APTOS_CONTRACT_BY_NETWORK)(network);
    const injectiveContractAddresses = (0, constants_1.WORMHOLE_CONTRACT_BY_NETWORK)(network);
    if (!injectiveContractAddresses) {
        throw new exceptions_1.GeneralException(new Error(`Contracts for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses) {
        throw new exceptions_1.GeneralException(new Error(`Contracts for ${network} on Aptos not found`));
    }
    if (!injectiveContractAddresses.token_bridge) {
        throw new exceptions_1.GeneralException(new Error(`Token Bridge Address for ${network} on Injective not found`));
    }
    if (!associatedChainContractAddresses.token_bridge) {
        throw new exceptions_1.GeneralException(new Error(`Token Bridge Address for ${network} on Aptos not found`));
    }
    return {
        injectiveContractAddresses,
        associatedChainContractAddresses,
    };
};
exports.getAptosContractAddresses = getAptosContractAddresses;
const getContractAddresses = (network, source = types_1.WormholeSource.Solana) => {
    switch (source) {
        case types_1.WormholeSource.Solana:
            return (0, exports.getSolanaContractAddresses)(network);
        case types_1.WormholeSource.Ethereum:
            return (0, exports.getEthereumContractAddresses)(network);
        case types_1.WormholeSource.Arbitrum:
            return (0, exports.getArbitrumContractAddresses)(network);
        case types_1.WormholeSource.Sui:
            return (0, exports.getSuiContractAddresses)(network);
        case types_1.WormholeSource.Polygon:
            return (0, exports.getPolygonContractAddresses)(network);
        case types_1.WormholeSource.Klaytn:
            return (0, exports.getKlaytnContractAddresses)(network);
        case types_1.WormholeSource.Aptos:
            return (0, exports.getAptosContractAddresses)(network);
        default:
            return (0, exports.getSolanaContractAddresses)(network);
    }
};
exports.getContractAddresses = getContractAddresses;
const getAssociatedChain = (source = types_1.WormholeSource.Solana) => {
    switch (source) {
        case types_1.WormholeSource.Solana:
            return constants_1.WORMHOLE_CHAINS.solana;
        case types_1.WormholeSource.Ethereum:
            return constants_1.WORMHOLE_CHAINS.ethereum;
        case types_1.WormholeSource.Arbitrum:
            return constants_1.WORMHOLE_CHAINS.arbitrum;
        case types_1.WormholeSource.Sui:
            return constants_1.WORMHOLE_CHAINS.sui;
        case types_1.WormholeSource.Polygon:
            return constants_1.WORMHOLE_CHAINS.polygon;
        case types_1.WormholeSource.Klaytn:
            return constants_1.WORMHOLE_CHAINS.klaytn;
        case types_1.WormholeSource.Aptos:
            return constants_1.WORMHOLE_CHAINS.aptos;
        default:
            return constants_1.WORMHOLE_CHAINS.solana;
    }
};
exports.getAssociatedChain = getAssociatedChain;
const getAssociatedChainRecipient = (recipient, source = types_1.WormholeSource.Solana) => {
    switch (source) {
        case types_1.WormholeSource.Solana:
            return new web3_js_1.PublicKey(recipient).toString();
        case types_1.WormholeSource.Ethereum:
            return recipient; /* Hex Ethereum Address */
        case types_1.WormholeSource.Arbitrum:
            return recipient; /* Hex Address */
        case types_1.WormholeSource.Polygon:
            return recipient; /* Hex Address */
        case types_1.WormholeSource.Klaytn:
            return recipient; /* Hex Address */
        case types_1.WormholeSource.Aptos:
            throw Error('Aptos not yet implemented');
        case types_1.WormholeSource.Sui:
            throw Error('Sui not yet implemented');
        default:
            return new web3_js_1.PublicKey(recipient).toString();
    }
};
exports.getAssociatedChainRecipient = getAssociatedChainRecipient;
const getEvmNativeAddress = (network, source = types_1.WormholeSource.Ethereum) => {
    const addresses = (0, constants_1.WORMHOLE_NATIVE_WRAPPED_ADDRESS)(network);
    if (source === types_1.WormholeSource.Ethereum) {
        if (!addresses.ethereum) {
            throw new exceptions_1.GeneralException(new Error(`Ethereum native address for ${network} not found`));
        }
        return addresses.ethereum;
    }
    if (source === types_1.WormholeSource.Polygon) {
        if (!addresses.polygon) {
            throw new exceptions_1.GeneralException(new Error(`Polygon native address for ${network} not found`));
        }
        return addresses.polygon;
    }
    throw new exceptions_1.GeneralException(new Error(`Native address for ${network} and ${source} not found`));
};
exports.getEvmNativeAddress = getEvmNativeAddress;
const getEvmChainName = (chainId) => {
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
exports.getEvmChainName = getEvmChainName;
//# sourceMappingURL=utils.js.map