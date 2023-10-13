"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgeProgress = exports.BridgeTransactionState = exports.MintScanExplorerUrl = exports.BridgingNetwork = void 0;
var BridgingNetwork;
(function (BridgingNetwork) {
    BridgingNetwork["Axelar"] = "axelar";
    BridgingNetwork["Canto"] = "canto";
    BridgingNetwork["Chihuahua"] = "chihuahua";
    BridgingNetwork["CosmosHub"] = "cosmosHub";
    BridgingNetwork["CosmosHubTestnet"] = "cosmosHub-testnet";
    BridgingNetwork["Ethereum"] = "ethereum";
    BridgingNetwork["EthereumWh"] = "ethereumWh";
    BridgingNetwork["Evmos"] = "evmos";
    BridgingNetwork["Injective"] = "injective";
    BridgingNetwork["Juno"] = "juno";
    BridgingNetwork["Osmosis"] = "osmosis";
    BridgingNetwork["Persistence"] = "Persistence";
    BridgingNetwork["Terra"] = "terra";
    BridgingNetwork["Moonbeam"] = "moonbeam";
    BridgingNetwork["Secret"] = "secret";
    BridgingNetwork["Stride"] = "stride";
    BridgingNetwork["Crescent"] = "crescent";
    BridgingNetwork["Solana"] = "solana";
    BridgingNetwork["Sommelier"] = "sommelier";
    BridgingNetwork["Arbitrum"] = "arbitrum";
    BridgingNetwork["Polygon"] = "polygon";
    BridgingNetwork["Klaytn"] = "klaytn";
    BridgingNetwork["Sui"] = "sui";
    BridgingNetwork["Kava"] = "kava";
    BridgingNetwork["Oraichain"] = "oraichain";
})(BridgingNetwork = exports.BridgingNetwork || (exports.BridgingNetwork = {}));
exports.MintScanExplorerUrl = {
    [BridgingNetwork.CosmosHub]: 'cosmos',
    [BridgingNetwork.Chihuahua]: 'chihuahua',
    [BridgingNetwork.Axelar]: 'axelar',
    [BridgingNetwork.Evmos]: 'evmos',
    [BridgingNetwork.Persistence]: 'persistence',
    [BridgingNetwork.Osmosis]: 'osmosis',
    [BridgingNetwork.Secret]: 'secret',
    [BridgingNetwork.Stride]: 'stride',
    [BridgingNetwork.Crescent]: 'crescent',
    [BridgingNetwork.Sommelier]: 'sommelier',
    [BridgingNetwork.Canto]: 'canto',
    [BridgingNetwork.Kava]: 'kava',
};
var BridgeTransactionState;
(function (BridgeTransactionState) {
    BridgeTransactionState["Cancelled"] = "Cancelled";
    BridgeTransactionState["Completed"] = "Completed";
    BridgeTransactionState["Confirm"] = "Confirming";
    BridgeTransactionState["Redeemable"] = "Redeemable";
    BridgeTransactionState["Confirming"] = "Confirming";
    BridgeTransactionState["EthereumConfirming"] = "EthereumConfirming";
    BridgeTransactionState["Failed"] = "Failed";
    BridgeTransactionState["InjectiveConfirming"] = "InjectiveConfirming";
    BridgeTransactionState["RequestingVAA"] = "RequestingVAA";
    BridgeTransactionState["Submitted"] = "Submitted";
    BridgeTransactionState["FailedCancelled"] = "failed-cancelled";
    BridgeTransactionState["InProgress"] = "in-progress";
})(BridgeTransactionState = exports.BridgeTransactionState || (exports.BridgeTransactionState = {}));
var BridgeProgress;
(function (BridgeProgress) {
    BridgeProgress[BridgeProgress["EthereumDepositInitiated"] = 1] = "EthereumDepositInitiated";
    BridgeProgress[BridgeProgress["EthereumConfirming"] = 2] = "EthereumConfirming";
    BridgeProgress[BridgeProgress["InjectiveConfirming"] = 3] = "InjectiveConfirming";
    BridgeProgress[BridgeProgress["EthereumDepositCompleted"] = 4] = "EthereumDepositCompleted";
    BridgeProgress[BridgeProgress["InProgress"] = 1] = "InProgress";
    BridgeProgress[BridgeProgress["Completed"] = 2] = "Completed";
})(BridgeProgress = exports.BridgeProgress || (exports.BridgeProgress = {}));
//# sourceMappingURL=bridge.js.map