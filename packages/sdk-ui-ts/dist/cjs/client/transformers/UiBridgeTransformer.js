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
exports.UiBridgeTransformer = exports.computeLatestTransactions = exports.convertWormholeToUiBridgeTransaction = exports.convertMoonbeamToUiBridgeTransaction = exports.convertPeggyWithdrawalTxToUiBridgeTransaction = exports.convertPeggyDepositTxToUiBridgeTransaction = exports.convertIBCTransferTxToUiBridgeTransaction = exports.convertTerraToUiBridgeTransaction = exports.convertPeggoToUiBridgeTransaction = exports.convertInjectiveIBCToUiBridgeTransaction = exports.convertPeggyToUiBridgeTransaction = exports.convertCosmosWalletToUiBridgeTransaction = void 0;
const utils_1 = require("@injectivelabs/utils");
const bridge_1 = require("./../../types/bridge");
const bridge_2 = require("./../../utils/bridge");
const bridge_3 = require("./../utils/bridge");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const convertCosmosWalletToUiBridgeTransaction = ({ transaction, network, }) => __awaiter(void 0, void 0, void 0, function* () {
    const [events] = JSON.parse(transaction.rawLog);
    const sendPacketEvent = events.events.find(({ type }) => type === 'send_packet');
    if (!sendPacketEvent || !sendPacketEvent.attributes) {
        return undefined;
    }
    const packetTimeoutTimestamp = sendPacketEvent.attributes.find(({ key }) => key === 'packet_timeout_timestamp');
    const packetData = sendPacketEvent.attributes.find(({ key }) => key === 'packet_data');
    if (!packetData || !packetTimeoutTimestamp || !packetTimeoutTimestamp.value) {
        return undefined;
    }
    const { amount, denom, receiver, sender } = JSON.parse(packetData.value);
    const bridgingNetwork = (0, bridge_2.getNetworkFromAddress)(sender);
    return {
        amount,
        denom,
        receiver,
        sender,
        type: (0, bridge_2.getBridgeTransactionType)(bridgingNetwork, bridge_1.BridgingNetwork.Injective),
        timestamp: Date.now(),
        txHash: transaction.transactionHash,
        explorerLink: `${(0, bridge_2.getCosmosExplorerUrl)(bridgingNetwork, network)}/txs/${transaction.transactionHash}`,
        state: bridge_1.BridgeTransactionState.Submitted,
        timeoutTimestamp: packetTimeoutTimestamp.value,
    };
});
exports.convertCosmosWalletToUiBridgeTransaction = convertCosmosWalletToUiBridgeTransaction;
const convertPeggyToUiBridgeTransaction = ({ transaction, network, blockHeight, }) => __awaiter(void 0, void 0, void 0, function* () {
    const isDeposit = transaction.sender.startsWith('0x');
    return {
        blockHeight,
        type: isDeposit
            ? (0, bridge_2.getBridgeTransactionType)(bridge_1.BridgingNetwork.Ethereum, bridge_1.BridgingNetwork.Injective)
            : (0, bridge_2.getBridgeTransactionType)(bridge_1.BridgingNetwork.Injective, bridge_1.BridgingNetwork.Ethereum),
        bridgeFee: transaction.bridgeFee,
        denom: transaction.denom,
        amount: transaction.amount,
        receiver: transaction.receiver,
        sender: transaction.sender,
        txHash: transaction.txHash,
        explorerLink: isDeposit
            ? `${(0, bridge_2.getEthereumExplorerUrl)(network)}/tx/${transaction.txHash}`
            : `${(0, bridge_2.getExplorerUrl)(network)}/transaction/${transaction.txHash}/`,
        timestamp: Date.now(),
        state: bridge_1.BridgeTransactionState.Submitted,
    };
});
exports.convertPeggyToUiBridgeTransaction = convertPeggyToUiBridgeTransaction;
const convertInjectiveIBCToUiBridgeTransaction = ({ transaction, network, }) => __awaiter(void 0, void 0, void 0, function* () {
    const bridgingNetwork = (0, bridge_2.getNetworkFromAddress)(transaction.receiver);
    return {
        type: (0, bridge_2.getBridgeTransactionType)(bridge_1.BridgingNetwork.Injective, bridgingNetwork),
        denom: transaction.denom,
        amount: transaction.amount,
        receiver: transaction.receiver,
        sender: transaction.sender,
        txHash: transaction.txHash,
        explorerLink: `${(0, bridge_2.getExplorerUrl)(network)}/transaction/${transaction.txHash}/`,
        timeoutTimestamp: transaction.timeoutTimestamp,
        timestamp: Date.now(),
        state: bridge_1.BridgeTransactionState.Submitted,
    };
});
exports.convertInjectiveIBCToUiBridgeTransaction = convertInjectiveIBCToUiBridgeTransaction;
const convertPeggoToUiBridgeTransaction = ({ transaction, network, }) => __awaiter(void 0, void 0, void 0, function* () {
    const txHash = transaction.id.slice(0, 66);
    const receiver = transaction.destination.replace('0x000000000000000000000000', '0x');
    return {
        txHash,
        type: (0, bridge_2.getBridgeTransactionType)(bridge_1.BridgingNetwork.Ethereum, bridge_1.BridgingNetwork.Injective),
        amount: transaction.amount,
        blockHeight: transaction.blockHeight,
        denom: transaction.tokenContract,
        nonce: transaction.eventNonce,
        explorerLink: `${(0, bridge_2.getEthereumExplorerUrl)(network)}/tx/${txHash}`,
        receiver: (0, sdk_ts_1.getInjectiveAddress)(receiver),
        sender: transaction.sender,
        timestamp: (0, utils_1.convertTimestampToMilliseconds)(transaction.timestamp),
        state: bridge_1.BridgeTransactionState.EthereumConfirming,
    };
});
exports.convertPeggoToUiBridgeTransaction = convertPeggoToUiBridgeTransaction;
const convertTerraToUiBridgeTransaction = ({ transaction, network, }) => __awaiter(void 0, void 0, void 0, function* () {
    const { receiver, sender, timeout_timestamp: timeoutTimestamp, token: { amount, denom }, } = transaction.msgs[0];
    return {
        denom,
        sender,
        receiver,
        timeoutTimestamp,
        type: (0, bridge_2.getBridgeTransactionType)(bridge_1.BridgingNetwork.Terra, bridge_1.BridgingNetwork.Injective),
        amount: amount.toString(),
        timestamp: Date.now(),
        state: bridge_1.BridgeTransactionState.Submitted,
        txHash: transaction.result.txhash,
        explorerLink: `${(0, bridge_2.getTerraExplorerUrl)(network)}/tx/${transaction.result.txhash}`,
    };
});
exports.convertTerraToUiBridgeTransaction = convertTerraToUiBridgeTransaction;
const convertIBCTransferTxToUiBridgeTransaction = ({ transaction, network, }) => __awaiter(void 0, void 0, void 0, function* () {
    const txHash = transaction.txHashesList[0];
    const denom = transaction.denom.includes('transfer/channel')
        ? transaction.denom.split('/').slice(2).join('/')
        : transaction.denom;
    const bridgingNetwork = (0, bridge_2.getNetworkFromAddress)(transaction.receiver);
    return {
        denom,
        type: (0, bridge_2.getBridgeTransactionType)(bridge_1.BridgingNetwork.Injective, bridgingNetwork),
        amount: transaction.amount,
        receiver: transaction.receiver,
        sender: transaction.sender,
        txHash: txHash || '',
        txHashes: transaction.txHashesList,
        explorerLink: txHash
            ? `${(0, bridge_2.getExplorerUrl)(network)}/transaction/${txHash}/`
            : '',
        timestamp: Date.parse(transaction.createdAt),
        state: transaction.state,
        timeoutTimestamp: transaction.timeoutTimestamp.toString(),
    };
});
exports.convertIBCTransferTxToUiBridgeTransaction = convertIBCTransferTxToUiBridgeTransaction;
const convertPeggyDepositTxToUiBridgeTransaction = ({ transaction, network, }) => __awaiter(void 0, void 0, void 0, function* () {
    const isFailedOrCancelled = bridge_2.FailedStates.includes(transaction.state);
    const txHash = isFailedOrCancelled
        ? transaction.txHashesList.pop()
        : transaction.txHashesList[0];
    return {
        type: (0, bridge_2.getBridgeTransactionType)(bridge_1.BridgingNetwork.Ethereum, bridge_1.BridgingNetwork.Injective),
        amount: transaction.amount,
        denom: transaction.denom,
        receiver: transaction.receiver,
        sender: transaction.sender,
        txHash: txHash || '',
        txHashes: transaction.txHashesList,
        explorerLink: txHash
            ? `${(0, bridge_2.getExplorerUrl)(network)}/transaction/${txHash}/`
            : '',
        timestamp: Date.parse(transaction.createdAt),
        state: transaction.state,
        blockHeight: transaction.eventHeight,
        nonce: transaction.eventNonce,
    };
});
exports.convertPeggyDepositTxToUiBridgeTransaction = convertPeggyDepositTxToUiBridgeTransaction;
const convertPeggyWithdrawalTxToUiBridgeTransaction = ({ transaction, network, }) => __awaiter(void 0, void 0, void 0, function* () {
    const isFailedOrCancelled = bridge_2.FailedStates.includes(transaction.state);
    const txHash = isFailedOrCancelled
        ? transaction.txHashesList.pop()
        : transaction.txHashesList[0];
    const amountIncludingBridgeFee = new utils_1.BigNumberInBase(transaction.amount)
        .plus(new utils_1.BigNumberInBase(transaction.bridgeFee))
        .toString();
    return {
        type: (0, bridge_2.getBridgeTransactionType)(bridge_1.BridgingNetwork.Injective, bridge_1.BridgingNetwork.Ethereum),
        amount: amountIncludingBridgeFee,
        bridgeFee: transaction.bridgeFee,
        denom: transaction.denom,
        receiver: transaction.receiver,
        sender: transaction.sender,
        txHash: txHash || '',
        txHashes: transaction.txHashesList,
        explorerLink: txHash
            ? `${(0, bridge_2.getExplorerUrl)(network)}/transaction/${txHash}/`
            : '',
        timestamp: Date.parse(transaction.createdAt),
        state: transaction.state,
        blockHeight: transaction.eventHeight,
        nonce: transaction.eventNonce,
    };
});
exports.convertPeggyWithdrawalTxToUiBridgeTransaction = convertPeggyWithdrawalTxToUiBridgeTransaction;
const convertMoonbeamToUiBridgeTransaction = (transaction) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        type: (0, bridge_2.getBridgeTransactionType)(bridge_1.BridgingNetwork.Moonbeam, bridge_1.BridgingNetwork.Injective),
        denom: transaction.denom,
        amount: transaction.amount,
        receiver: transaction.receiver,
        sender: transaction.sender,
        txHash: transaction.txHash,
        explorerLink: transaction.explorerLink || '',
        timestamp: new utils_1.BigNumberInBase(Math.floor(new utils_1.BigNumberInBase(Date.now()).div(1000).toNumber()))
            .times(1000)
            .toNumber(),
        state: bridge_1.BridgeTransactionState.Confirming,
    };
});
exports.convertMoonbeamToUiBridgeTransaction = convertMoonbeamToUiBridgeTransaction;
const convertWormholeToUiBridgeTransaction = ({ transaction, network, }) => __awaiter(void 0, void 0, void 0, function* () {
    const isArbitrumTransfer = transaction.source === bridge_1.BridgingNetwork.Arbitrum ||
        transaction.destination === bridge_1.BridgingNetwork.Arbitrum;
    const isEthereumWhTransfer = transaction.source === bridge_1.BridgingNetwork.EthereumWh ||
        transaction.destination === bridge_1.BridgingNetwork.EthereumWh;
    const isSolanaTransfer = transaction.source === bridge_1.BridgingNetwork.Solana ||
        transaction.destination === bridge_1.BridgingNetwork.Solana;
    const isPolygonTransfer = transaction.source === bridge_1.BridgingNetwork.Polygon ||
        transaction.destination === bridge_1.BridgingNetwork.Polygon;
    const isEthereumDeposit = transaction.source === bridge_1.BridgingNetwork.EthereumWh;
    const isSolanaDeposit = transaction.source === bridge_1.BridgingNetwork.Solana;
    const isArbitrumDeposit = transaction.source === bridge_1.BridgingNetwork.Arbitrum;
    const isPolygonDeposit = transaction.source === bridge_1.BridgingNetwork.Polygon;
    const solanaWhExplorerLink = isSolanaDeposit
        ? `${(0, bridge_2.getSolanaExplorerUrl)(network)}/tx/${transaction.txHash}`
        : `${(0, bridge_2.getExplorerUrl)(network)}/transaction/${transaction.txHash}/`;
    const ethereumWhExplorerLink = isEthereumDeposit
        ? `${(0, bridge_2.getEthereumExplorerUrl)(network)}/tx/${transaction.txHash}`
        : `${(0, bridge_2.getExplorerUrl)(network)}/transaction/${transaction.txHash}/`;
    const arbitrumExplorerLink = isArbitrumDeposit
        ? `${(0, bridge_2.getArbitrumExplorerUrl)(network)}/tx/${transaction.txHash}`
        : `${(0, bridge_2.getExplorerUrl)(network)}/transaction/${transaction.txHash}/`;
    const polygonExplorerLink = isPolygonDeposit
        ? `${(0, bridge_2.getPolygonExplorerUrl)(network)}/tx/${transaction.txHash}`
        : `${(0, bridge_2.getExplorerUrl)(network)}/transaction/${transaction.txHash}/`;
    const getWhExplorerLink = () => {
        if (isSolanaTransfer) {
            return solanaWhExplorerLink;
        }
        if (isArbitrumTransfer) {
            return arbitrumExplorerLink;
        }
        if (isPolygonTransfer) {
            return polygonExplorerLink;
        }
        if (isEthereumWhTransfer) {
            return ethereumWhExplorerLink;
        }
        return transaction.explorerLink || '';
    };
    const explorerLink = getWhExplorerLink();
    return {
        type: (0, bridge_2.getBridgeTransactionType)(transaction.source, transaction.destination),
        denom: transaction.denom,
        amount: transaction.amount,
        receiver: transaction.receiver,
        sender: transaction.sender,
        txHash: transaction.txHash,
        explorerLink,
        timestamp: new utils_1.BigNumberInBase(Math.floor(new utils_1.BigNumberInBase(Date.now()).div(1000).toNumber()))
            .times(1000)
            .toNumber(),
        state: bridge_1.BridgeTransactionState.Confirming,
    };
});
exports.convertWormholeToUiBridgeTransaction = convertWormholeToUiBridgeTransaction;
/**
 * @deprecated - way to abstract for usage
 */
const computeLatestTransactions = ({ latestTransactions = [], peggoUserDeposits = [], ibcTransferBridgeTransactions = [], peggyDepositBridgeTransactions = [], peggyWithdrawalBridgeTransactions = [], }) => latestTransactions
    .map((transaction) => {
    const [origin, destination] = transaction.type.split('-');
    const isIBCTransaction = bridge_2.CosmosNetworks.includes(origin) || bridge_2.CosmosNetworks.includes(destination);
    if (!isIBCTransaction) {
        return transaction;
    }
    return Object.assign(Object.assign({}, transaction), { state: (0, bridge_3.getCachedIBCTransactionState)(transaction) });
})
    .filter((0, bridge_3.ibcTxNotPartOfInjectiveIbcTxs)(ibcTransferBridgeTransactions))
    .filter((0, bridge_3.txNotPartOfPeggoDeposit)(peggoUserDeposits))
    .filter((0, bridge_3.txNotPartOfInjectivePeggyTxs)([
    ...peggyDepositBridgeTransactions,
    ...peggyWithdrawalBridgeTransactions,
]));
exports.computeLatestTransactions = computeLatestTransactions;
class UiBridgeTransformer {
    constructor(network) {
        this.network = network;
    }
    convertCosmosWalletToUiBridgeTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.convertCosmosWalletToUiBridgeTransaction)({
                transaction,
                network: this.network,
            });
        });
    }
    convertMoonbeamToUiBridgeTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.convertMoonbeamToUiBridgeTransaction)(transaction);
        });
    }
    convertWormholeToUiBridgeTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.convertWormholeToUiBridgeTransaction)({
                transaction,
                network: this.network,
            });
        });
    }
    convertPeggyToUiBridgeTransaction(transaction, blockHeight) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.convertPeggyToUiBridgeTransaction)({
                transaction,
                blockHeight,
                network: this.network,
            });
        });
    }
    convertInjectiveIBCToUiBridgeTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.convertInjectiveIBCToUiBridgeTransaction)({
                transaction,
                network: this.network,
            });
        });
    }
    convertPeggoToUiBridgeTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.convertPeggoToUiBridgeTransaction)({
                transaction,
                network: this.network,
            });
        });
    }
    convertTerraToUiBridgeTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.convertTerraToUiBridgeTransaction)({
                transaction,
                network: this.network,
            });
        });
    }
    convertIBCTransferTxToUiBridgeTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.convertIBCTransferTxToUiBridgeTransaction)({
                transaction,
                network: this.network,
            });
        });
    }
    convertPeggyDepositTxToUiBridgeTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.convertPeggyDepositTxToUiBridgeTransaction)({
                transaction,
                network: this.network,
            });
        });
    }
    convertPeggyWithdrawalTxToUiBridgeTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.convertPeggyWithdrawalTxToUiBridgeTransaction)({
                transaction,
                network: this.network,
            });
        });
    }
}
exports.UiBridgeTransformer = UiBridgeTransformer;
UiBridgeTransformer.getNetworkFromAddress = bridge_2.getNetworkFromAddress;
UiBridgeTransformer.mergeAllTransactions = ({ latestTransactions = [], peggoUserDeposits = [], ibcTransferBridgeTransactions = [], peggyDepositBridgeTransactions = [], peggyWithdrawalBridgeTransactions = [], }) => {
    const filteredPeggoUserDeposits = peggoUserDeposits.filter((0, bridge_3.txNotPartOfInjectivePeggyTxs)(peggyDepositBridgeTransactions));
    return [
        ...latestTransactions,
        ...filteredPeggoUserDeposits,
        ...ibcTransferBridgeTransactions,
        ...peggyDepositBridgeTransactions,
        ...peggyWithdrawalBridgeTransactions,
    ];
};
/**
 * We use this method to update the
 * current transaction state based on
 * the transactions fetched from the API
 */
UiBridgeTransformer.getLatestSelectedTransaction = ({ selectedTransaction, peggoUserDeposits, transactions, }) => {
    if (!selectedTransaction.receiver || !selectedTransaction.sender) {
        return selectedTransaction;
    }
    const newSelectedTransaction = peggoUserDeposits.find((peggoTransaction) => (0, bridge_3.findEthereumTransactionByTxHash)(peggoTransaction, selectedTransaction)) || selectedTransaction;
    const selectedTransactionExistInTransactions = transactions.find((transaction) => (0, bridge_3.findEthereumTransactionByNonce)(transaction, newSelectedTransaction) ||
        (0, bridge_3.findEthereumTransactionByTxHashes)(transaction, newSelectedTransaction) ||
        (0, bridge_3.findIBCTransactionByTimeoutTimestamp)(transaction, newSelectedTransaction));
    return selectedTransactionExistInTransactions || newSelectedTransaction;
};
/**
 * BE returns 2 in progress transaction
 **/
UiBridgeTransformer.removeDuplicatedTransactionByTxHash = (ibcTransferBridgeTransactions) => {
    const filteredList = ibcTransferBridgeTransactions.reduce((list, transaction) => {
        if (!transaction.txHashes || transaction.txHashes.length === 0) {
            return list;
        }
        const initialTxHash = transaction.txHashes[0];
        if (!list[initialTxHash]) {
            list[initialTxHash] = transaction;
        }
        else if ([
            bridge_1.BridgeTransactionState.Completed,
            bridge_1.BridgeTransactionState.Failed,
        ].includes(transaction.state)) {
            list[initialTxHash] = transaction;
        }
        return Object.assign({}, list);
    }, {});
    return Object.values(filteredList);
};
/**
 * remove stuck in progress transactions
 **/
UiBridgeTransformer.removeDuplicatedInProgressIbxTransfers = (ibcTransferBridgeTransactions) => {
    const transactions = UiBridgeTransformer.removeDuplicatedTransactionByTxHash(ibcTransferBridgeTransactions);
    return transactions.filter(({ txHashes, state }) => {
        if (state !== bridge_1.BridgeTransactionState.Submitted) {
            return true;
        }
        const [txHash] = txHashes;
        return (transactions.find((transaction) => {
            var _a;
            return transaction.state !== bridge_1.BridgeTransactionState.Submitted &&
                ((_a = transaction.txHashes) === null || _a === void 0 ? void 0 : _a.includes(txHash));
        }) === undefined);
    });
};
//# sourceMappingURL=UiBridgeTransformer.js.map