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
exports.MsgBroadcasterWithPk = void 0;
const accounts_1 = require("../../../accounts");
const tx_1 = require("../tx");
const TxGrpcApi_1 = require("../api/TxGrpcApi");
const rest_1 = require("../../../../client/chain/rest");
const utils_1 = require("@injectivelabs/utils");
const exceptions_1 = require("@injectivelabs/exceptions");
const helpers_1 = require("../utils/helpers");
const networks_1 = require("@injectivelabs/networks");
const msgs_1 = require("../../../../utils/msgs");
const client_1 = require("../../../../client");
/**
 * This class is used to broadcast transactions
 * using a privateKey as a signer
 * for the transactions and broadcasting
 * the transactions directly to the node
 *
 * Mainly used for working in a Node Environment
 */
class MsgBroadcasterWithPk {
    constructor(options) {
        this.simulateTx = false;
        const networkInfo = (0, networks_1.getNetworkInfo)(options.network);
        const endpoints = (0, networks_1.getNetworkEndpoints)(options.network);
        this.simulateTx = options.simulateTx || false;
        this.chainId = networkInfo.chainId;
        this.ethereumChainId =
            options.ethereumChainId || networkInfo.ethereumChainId;
        this.endpoints = Object.assign(Object.assign({}, endpoints), (options.endpoints || {}));
        this.privateKey =
            options.privateKey instanceof accounts_1.PrivateKey
                ? options.privateKey
                : accounts_1.PrivateKey.fromHex(options.privateKey);
    }
    /**
     * Broadcasting the transaction using the client
     *
     * @param tx
     * @returns {string} transaction hash
     */
    broadcast(transaction) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId, privateKey, endpoints } = this;
            const msgs = Array.isArray(transaction.msgs)
                ? transaction.msgs
                : [transaction.msgs];
            const tx = Object.assign(Object.assign({}, transaction), { msgs: msgs, ethereumAddress: (0, helpers_1.getEthereumSignerAddress)(transaction.injectiveAddress), injectiveAddress: (0, helpers_1.getInjectiveSignerAddress)(transaction.injectiveAddress) });
            /** Account Details * */
            const publicKey = privateKey.toPublicKey();
            const chainRestAuthApi = new rest_1.ChainRestAuthApi(endpoints.rest);
            const accountDetailsResponse = yield chainRestAuthApi.fetchAccount(tx.injectiveAddress);
            const baseAccount = accounts_1.BaseAccount.fromRestApi(accountDetailsResponse);
            const accountDetails = baseAccount.toAccountDetails();
            /** Block Details */
            const chainRestTendermintApi = new rest_1.ChainRestTendermintApi(endpoints.rest);
            const latestBlock = yield chainRestTendermintApi.fetchLatestBlock();
            const latestHeight = latestBlock.header.height;
            const timeoutHeight = new utils_1.BigNumberInBase(latestHeight).plus(utils_1.DEFAULT_BLOCK_TIMEOUT_HEIGHT);
            const gas = (((_a = transaction.gas) === null || _a === void 0 ? void 0 : _a.gas) || (0, msgs_1.getGasPriceBasedOnMessage)(msgs)).toString();
            /** Prepare the Transaction * */
            const { signBytes, txRaw } = yield this.getTxWithStdFee({
                memo: tx.memo || '',
                message: msgs,
                fee: (0, utils_1.getStdFee)(Object.assign(Object.assign({}, tx.gas), { gas })),
                timeoutHeight: timeoutHeight.toNumber(),
                pubKey: publicKey.toBase64(),
                sequence: accountDetails.sequence,
                accountNumber: accountDetails.accountNumber,
                chainId: chainId,
            });
            /** Sign transaction */
            const signature = yield privateKey.sign(Buffer.from(signBytes));
            /** Append Signatures */
            txRaw.signatures = [signature];
            /** Broadcast transaction */
            const txResponse = yield new TxGrpcApi_1.TxGrpcApi(endpoints.grpc).broadcast(txRaw);
            if (txResponse.code !== 0) {
                throw new exceptions_1.GeneralException(new Error(`Transaction failed to be broadcasted - ${txResponse.rawLog}`));
            }
            return txResponse;
        });
    }
    /**
     * Broadcasting the transaction with fee delegation services
     *
     * @param tx
     * @returns {string} transaction hash
     */
    broadcastWithFeeDelegation(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const { simulateTx, privateKey, ethereumChainId, endpoints } = this;
            const msgs = Array.isArray(transaction.msgs)
                ? transaction.msgs
                : [transaction.msgs];
            const tx = Object.assign(Object.assign({}, transaction), { msgs: msgs, ethereumAddress: (0, helpers_1.getEthereumSignerAddress)(transaction.injectiveAddress), injectiveAddress: (0, helpers_1.getInjectiveSignerAddress)(transaction.injectiveAddress) });
            const web3Msgs = msgs.map((msg) => msg.toWeb3());
            if (!ethereumChainId) {
                throw new exceptions_1.GeneralException(new Error('Please provide ethereumChainId'));
            }
            const transactionApi = new client_1.IndexerGrpcTransactionApi(endpoints.indexer);
            const txResponse = yield transactionApi.prepareTxRequest({
                memo: tx.memo,
                message: web3Msgs,
                address: tx.ethereumAddress,
                chainId: ethereumChainId,
                gasLimit: (0, msgs_1.getGasPriceBasedOnMessage)(msgs),
                estimateGas: simulateTx || false,
            });
            const signature = yield privateKey.signTypedData(JSON.parse(txResponse.data));
            const response = yield transactionApi.broadcastTxRequest({
                txResponse,
                message: web3Msgs,
                chainId: ethereumChainId,
                signature: `0x${Buffer.from(signature).toString('hex')}`,
            });
            return yield new TxGrpcApi_1.TxGrpcApi(endpoints.grpc).fetchTxPoll(response.txHash);
        });
    }
    /**
     * Broadcasting the transaction using the client
     *
     * @param tx
     * @returns {string} transaction hash
     */
    simulate(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const { privateKey, endpoints, chainId } = this;
            const tx = Object.assign(Object.assign({}, transaction), { msgs: Array.isArray(transaction.msgs)
                    ? transaction.msgs
                    : [transaction.msgs], ethereumAddress: (0, helpers_1.getEthereumSignerAddress)(transaction.injectiveAddress), injectiveAddress: (0, helpers_1.getInjectiveSignerAddress)(transaction.injectiveAddress) });
            /** Account Details * */
            const publicKey = privateKey.toPublicKey();
            const chainRestAuthApi = new rest_1.ChainRestAuthApi(endpoints.rest);
            const accountDetailsResponse = yield chainRestAuthApi.fetchAccount(tx.injectiveAddress);
            const baseAccount = accounts_1.BaseAccount.fromRestApi(accountDetailsResponse);
            const accountDetails = baseAccount.toAccountDetails();
            /** Block Details */
            const chainRestTendermintApi = new rest_1.ChainRestTendermintApi(endpoints.rest);
            const latestBlock = yield chainRestTendermintApi.fetchLatestBlock();
            const latestHeight = latestBlock.header.height;
            const timeoutHeight = new utils_1.BigNumberInBase(latestHeight).plus(utils_1.DEFAULT_BLOCK_TIMEOUT_HEIGHT);
            /** Prepare the Transaction * */
            const { txRaw } = (0, tx_1.createTransaction)({
                memo: tx.memo || '',
                fee: utils_1.DEFAULT_STD_FEE,
                message: tx.msgs,
                timeoutHeight: timeoutHeight.toNumber(),
                pubKey: publicKey.toBase64(),
                sequence: accountDetails.sequence,
                accountNumber: accountDetails.accountNumber,
                chainId: chainId,
            });
            /** Append Blank Signatures */
            txRaw.signatures = [new Uint8Array(0)];
            /** Simulate transaction */
            const simulationResponse = yield new TxGrpcApi_1.TxGrpcApi(endpoints.grpc).simulate(txRaw);
            return simulationResponse;
        });
    }
    /**
     * In case we don't want to simulate the transaction
     * we get the gas limit based on the message type.
     *
     * If we want to simulate the transaction we set the
     * gas limit based on the simulation and add a small multiplier
     * to be safe (factor of 1.1)
     */
    getTxWithStdFee(args) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { simulateTx } = this;
            if (!simulateTx) {
                return (0, tx_1.createTransaction)(args);
            }
            const result = yield this.simulateTxRaw(args);
            if (!((_a = result.gasInfo) === null || _a === void 0 ? void 0 : _a.gasUsed)) {
                return (0, tx_1.createTransaction)(args);
            }
            const stdGasFee = (0, utils_1.getStdFee)(Object.assign(Object.assign({}, args.fee), { gas: new utils_1.BigNumberInBase(result.gasInfo.gasUsed).times(1.1).toFixed() }));
            return (0, tx_1.createTransaction)(Object.assign(Object.assign({}, args), { fee: stdGasFee }));
        });
    }
    /**
     * Create TxRaw and simulate it
     */
    simulateTxRaw(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { endpoints } = this;
            const { txRaw } = (0, tx_1.createTransaction)(args);
            txRaw.signatures = [new Uint8Array(0)];
            const simulationResponse = yield new TxGrpcApi_1.TxGrpcApi(endpoints.grpc).simulate(txRaw);
            return simulationResponse;
        });
    }
}
exports.MsgBroadcasterWithPk = MsgBroadcasterWithPk;
//# sourceMappingURL=MsgBroadcasterWithPk.js.map