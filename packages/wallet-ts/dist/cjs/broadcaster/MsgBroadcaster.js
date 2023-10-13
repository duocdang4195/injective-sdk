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
exports.MsgBroadcaster = void 0;
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const utils_1 = require("@injectivelabs/utils");
const exceptions_1 = require("@injectivelabs/exceptions");
const networks_1 = require("@injectivelabs/networks");
const utils_2 = require("../utils/utils");
const cosmos_1 = require("../utils/wallets/cosmos");
const types_1 = require("../types");
const keplr_1 = require("../utils/wallets/keplr");
/**
 * This class is used to broadcast transactions
 * using the WalletStrategy as a handler
 * for the sign/broadcast flow of the transactions
 *
 * Mainly used for building UI products
 */
class MsgBroadcaster {
    constructor(options) {
        const networkInfo = (0, networks_1.getNetworkInfo)(options.network);
        const endpoints = options.networkEndpoints || (0, networks_1.getNetworkEndpoints)(options.network);
        this.options = options;
        this.chainId = networkInfo.chainId;
        this.ethereumChainId = networkInfo.ethereumChainId;
        this.endpoints = endpoints;
    }
    /**
     * Broadcasting the transaction using the client
     * side approach for both cosmos and ethereum native wallets
     *
     * @param tx
     * @returns {string} transaction hash
     */
    broadcast(tx) {
        return __awaiter(this, void 0, void 0, function* () {
            const { options } = this;
            const { walletStrategy } = options;
            const txWithAddresses = Object.assign(Object.assign({}, tx), { ethereumAddress: (0, utils_2.getEthereumSignerAddress)(tx.injectiveAddress || tx.address), injectiveAddress: (0, utils_2.getInjectiveSignerAddress)(tx.injectiveAddress || tx.address) });
            return (0, cosmos_1.isCosmosWallet)(walletStrategy.wallet)
                ? this.broadcastCosmos(txWithAddresses)
                : this.broadcastWeb3(txWithAddresses);
        });
    }
    /**
     * Broadcasting the transaction using the client
     * side approach for cosmos native wallets
     * and feeDelegation support approach for ethereum native
     * wallets (default one)
     *
     * @param tx
     * @returns {string} transaction hash
     * @deprecated
     */
    broadcastOld(tx) {
        return __awaiter(this, void 0, void 0, function* () {
            const { options } = this;
            const { walletStrategy } = options;
            const txWithAddresses = Object.assign(Object.assign({}, tx), { ethereumAddress: (0, utils_2.getEthereumSignerAddress)(tx.injectiveAddress || tx.address), injectiveAddress: (0, utils_2.getInjectiveSignerAddress)(tx.injectiveAddress || tx.address) });
            return (0, cosmos_1.isCosmosWallet)(walletStrategy.wallet)
                ? this.broadcastCosmos(txWithAddresses)
                : this.broadcastWeb3WithFeeDelegation(txWithAddresses);
        });
    }
    /**
     * Broadcasting the transaction using the feeDelegation
     * support approach for both cosmos and ethereum native wallets
     *
     * @param tx
     * @returns {string} transaction hash
     */
    broadcastWithFeeDelegation(tx) {
        return __awaiter(this, void 0, void 0, function* () {
            const { options } = this;
            const { walletStrategy } = options;
            const txWithAddresses = Object.assign(Object.assign({}, tx), { ethereumAddress: (0, utils_2.getEthereumSignerAddress)(tx.injectiveAddress || tx.address), injectiveAddress: (0, utils_2.getInjectiveSignerAddress)(tx.injectiveAddress || tx.address) });
            return (0, cosmos_1.isCosmosWallet)(walletStrategy.wallet)
                ? this.broadcastCosmosWithFeeDelegation(txWithAddresses)
                : this.broadcastWeb3WithFeeDelegation(txWithAddresses);
        });
    }
    /**
     * Prepare/sign/broadcast transaction using
     * Ethereum native wallets on the client side.
     *
     * Note: Gas estimation not available
     *
     * @param tx The transaction that needs to be broadcasted
     * @returns transaction hash
     */
    broadcastWeb3(tx) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { options, endpoints, chainId, ethereumChainId } = this;
            const { walletStrategy } = options;
            const msgs = Array.isArray(tx.msgs) ? tx.msgs : [tx.msgs];
            if (!ethereumChainId) {
                throw new exceptions_1.GeneralException(new Error('Please provide ethereumChainId'));
            }
            /** Account Details * */
            const chainRestAuthApi = new sdk_ts_1.ChainRestAuthApi(endpoints.rest);
            const accountDetailsResponse = yield chainRestAuthApi.fetchAccount(tx.injectiveAddress);
            const baseAccount = sdk_ts_1.BaseAccount.fromRestApi(accountDetailsResponse);
            const accountDetails = baseAccount.toAccountDetails();
            /** Block Details */
            const chainRestTendermintApi = new sdk_ts_1.ChainRestTendermintApi(endpoints.rest);
            const latestBlock = yield chainRestTendermintApi.fetchLatestBlock();
            const latestHeight = latestBlock.header.height;
            const timeoutHeight = new utils_1.BigNumberInBase(latestHeight).plus(utils_1.DEFAULT_BLOCK_TIMEOUT_HEIGHT);
            const gas = (((_a = tx.gas) === null || _a === void 0 ? void 0 : _a.gas) || (0, sdk_ts_1.getGasPriceBasedOnMessage)(msgs)).toString();
            /** EIP712 for signing on Ethereum wallets */
            const eip712TypedData = (0, sdk_ts_1.getEip712TypedData)({
                msgs,
                fee: (0, utils_1.getStdFee)(Object.assign(Object.assign({}, tx.gas), { gas })),
                tx: {
                    memo: tx.memo,
                    accountNumber: accountDetails.accountNumber.toString(),
                    sequence: accountDetails.sequence.toString(),
                    timeoutHeight: timeoutHeight.toFixed(),
                    chainId,
                },
                ethereumChainId,
            });
            /** Signing on Ethereum */
            const signature = (yield walletStrategy.signEip712TypedData(JSON.stringify(eip712TypedData), tx.ethereumAddress));
            const signatureBuff = (0, sdk_ts_1.hexToBuff)(signature);
            /** Get Public Key of the signer */
            const publicKeyHex = (0, sdk_ts_1.recoverTypedSignaturePubKey)(eip712TypedData, signature);
            const publicKeyBase64 = (0, sdk_ts_1.hexToBase64)(publicKeyHex);
            /** Preparing the transaction for client broadcasting */
            const { txRaw } = (0, sdk_ts_1.createTransaction)({
                message: msgs,
                memo: tx.memo,
                signMode: sdk_ts_1.SIGN_AMINO,
                fee: (0, utils_1.getStdFee)(Object.assign(Object.assign({}, tx.gas), { gas })),
                pubKey: publicKeyBase64,
                sequence: baseAccount.sequence,
                timeoutHeight: timeoutHeight.toNumber(),
                accountNumber: baseAccount.accountNumber,
                chainId,
            });
            const web3Extension = (0, sdk_ts_1.createWeb3Extension)({
                ethereumChainId,
            });
            const txRawEip712 = (0, sdk_ts_1.createTxRawEIP712)(txRaw, web3Extension);
            if (options.simulateTx) {
                yield this.simulateTxRaw(txRawEip712);
            }
            /** Append Signatures */
            txRawEip712.signatures = [signatureBuff];
            return walletStrategy.sendTransaction(txRawEip712, {
                chainId,
                endpoints,
                address: tx.injectiveAddress,
            });
        });
    }
    /**
     * Prepare/sign/broadcast transaction using
     * Ethereum native wallets using the Web3Gateway.
     *
     * @param tx The transaction that needs to be broadcasted
     * @returns transaction hash
     */
    broadcastWeb3WithFeeDelegation(tx) {
        return __awaiter(this, void 0, void 0, function* () {
            const { options, ethereumChainId, endpoints } = this;
            const { walletStrategy } = options;
            const msgs = Array.isArray(tx.msgs) ? tx.msgs : [tx.msgs];
            const web3Msgs = msgs.map((msg) => msg.toWeb3());
            if (!ethereumChainId) {
                throw new exceptions_1.GeneralException(new Error('Please provide ethereumChainId'));
            }
            const transactionApi = new sdk_ts_1.IndexerGrpcTransactionApi(endpoints.indexer);
            const txResponse = yield transactionApi.prepareTxRequest({
                memo: tx.memo,
                message: web3Msgs,
                address: tx.ethereumAddress,
                chainId: ethereumChainId,
                gasLimit: (0, sdk_ts_1.getGasPriceBasedOnMessage)(msgs),
                estimateGas: options.simulateTx || false,
            });
            const signature = yield walletStrategy.signEip712TypedData(txResponse.data, tx.ethereumAddress);
            const response = yield transactionApi.broadcastTxRequest({
                signature,
                txResponse,
                message: web3Msgs,
                chainId: ethereumChainId,
            });
            return yield new sdk_ts_1.TxGrpcApi(endpoints.grpc).fetchTxPoll(response.txHash);
        });
    }
    /**
     * Prepare/sign/broadcast transaction using
     * Cosmos native wallets on the client side.
     *
     * @param tx The transaction that needs to be broadcasted
     * @returns transaction hash
     */
    broadcastCosmos(tx) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { options, endpoints, chainId } = this;
            const { walletStrategy } = options;
            const msgs = Array.isArray(tx.msgs) ? tx.msgs : [tx.msgs];
            /**
             * When using Ledger with Keplr we have
             * to send EIP712 to sign on Keplr
             */
            if (walletStrategy.getWallet() === types_1.Wallet.Keplr) {
                const walletDeviceType = yield walletStrategy.getWalletDeviceType();
                const isLedgerConnectedOnKeplr = walletDeviceType === types_1.WalletDeviceType.Hardware;
                if (isLedgerConnectedOnKeplr) {
                    return this.experimentalBroadcastKeplrWithLedger(tx);
                }
            }
            /** Account Details * */
            const chainRestAuthApi = new sdk_ts_1.ChainRestAuthApi(endpoints.rest);
            const accountDetailsResponse = yield chainRestAuthApi.fetchAccount(tx.injectiveAddress);
            const baseAccount = sdk_ts_1.BaseAccount.fromRestApi(accountDetailsResponse);
            const accountDetails = baseAccount.toAccountDetails();
            /** Block Details */
            const chainRestTendermintApi = new sdk_ts_1.ChainRestTendermintApi(endpoints.rest);
            const latestBlock = yield chainRestTendermintApi.fetchLatestBlock();
            const latestHeight = latestBlock.header.height;
            const timeoutHeight = new utils_1.BigNumberInBase(latestHeight).plus(utils_1.DEFAULT_BLOCK_TIMEOUT_HEIGHT);
            const pubKey = yield walletStrategy.getPubKey();
            const gas = (((_a = tx.gas) === null || _a === void 0 ? void 0 : _a.gas) || (0, sdk_ts_1.getGasPriceBasedOnMessage)(msgs)).toString();
            /** Prepare the Transaction * */
            const { txRaw } = yield this.getTxWithSignersAndStdFee({
                chainId,
                memo: tx.memo,
                message: msgs,
                timeoutHeight: timeoutHeight.toNumber(),
                signers: {
                    pubKey,
                    accountNumber: accountDetails.accountNumber,
                    sequence: accountDetails.sequence,
                },
                fee: (0, utils_1.getStdFee)(Object.assign(Object.assign({}, tx.gas), { gas })),
            });
            const directSignResponse = (yield walletStrategy.signCosmosTransaction({
                txRaw,
                chainId,
                address: tx.injectiveAddress,
                accountNumber: accountDetails.accountNumber,
            }));
            return walletStrategy.sendTransaction(directSignResponse, {
                chainId,
                endpoints,
                address: tx.injectiveAddress,
            });
        });
    }
    /**
     * We use this method only when we want to broadcast a transaction using Ledger on Keplr for Injective
     *
     * Note: Gas estimation not available
     * @param tx the transaction that needs to be broadcasted
     */
    experimentalBroadcastKeplrWithLedger(tx) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const { options, endpoints, chainId, ethereumChainId } = this;
            const { walletStrategy } = options;
            const msgs = Array.isArray(tx.msgs) ? tx.msgs : [tx.msgs];
            /**
             * We can only use this method when Keplr is connected
             * with ledger
             */
            if (walletStrategy.getWallet() === types_1.Wallet.Keplr) {
                const walletDeviceType = yield walletStrategy.getWalletDeviceType();
                const isLedgerConnectedOnKeplr = walletDeviceType === types_1.WalletDeviceType.Hardware;
                if (!isLedgerConnectedOnKeplr) {
                    throw new exceptions_1.GeneralException(new Error('This method can only be used when Keplr is connected with Ledger'));
                }
            }
            if (!ethereumChainId) {
                throw new exceptions_1.GeneralException(new Error('Please provide ethereumChainId'));
            }
            const keplrWallet = new keplr_1.KeplrWallet(chainId, {
                rest: endpoints.rest,
                rpc: endpoints.rpc,
            });
            /** Account Details * */
            const chainRestAuthApi = new sdk_ts_1.ChainRestAuthApi(endpoints.rest);
            const accountDetailsResponse = yield chainRestAuthApi.fetchAccount(tx.injectiveAddress);
            const baseAccount = sdk_ts_1.BaseAccount.fromRestApi(accountDetailsResponse);
            const accountDetails = baseAccount.toAccountDetails();
            /** Block Details */
            const chainRestTendermintApi = new sdk_ts_1.ChainRestTendermintApi(endpoints.rest);
            const latestBlock = yield chainRestTendermintApi.fetchLatestBlock();
            const latestHeight = latestBlock.header.height;
            const timeoutHeight = new utils_1.BigNumberInBase(latestHeight).plus(utils_1.DEFAULT_BLOCK_TIMEOUT_HEIGHT);
            const pubKey = yield walletStrategy.getPubKey();
            const gas = (((_a = tx.gas) === null || _a === void 0 ? void 0 : _a.gas) || (0, sdk_ts_1.getGasPriceBasedOnMessage)(msgs)).toString();
            /** EIP712 for signing on Ethereum wallets */
            const eip712TypedData = (0, sdk_ts_1.getEip712TypedData)({
                msgs,
                fee: (0, utils_1.getStdFee)(Object.assign(Object.assign({}, tx.gas), { gas })),
                tx: {
                    memo: tx.memo,
                    accountNumber: accountDetails.accountNumber.toString(),
                    sequence: accountDetails.sequence.toString(),
                    timeoutHeight: timeoutHeight.toFixed(),
                    chainId,
                },
                ethereumChainId,
            });
            const aminoSignResponse = yield keplrWallet.signEIP712CosmosTx({
                eip712: eip712TypedData,
                signDoc: (0, keplr_1.createEip712StdSignDoc)(Object.assign(Object.assign(Object.assign({}, tx), baseAccount), { msgs,
                    chainId, gas: gas || ((_c = (_b = tx.gas) === null || _b === void 0 ? void 0 : _b.gas) === null || _c === void 0 ? void 0 : _c.toString()), timeoutHeight: timeoutHeight.toFixed() })),
            });
            /**
             * Create TxRaw from the signed tx that we
             * get as a response in case the user changed the fee/memo
             * on the Keplr popup
             */
            const { txRaw } = (0, sdk_ts_1.createTransaction)({
                pubKey,
                message: msgs,
                memo: aminoSignResponse.signed.memo,
                signMode: sdk_ts_1.SIGN_AMINO,
                fee: aminoSignResponse.signed.fee,
                sequence: parseInt(aminoSignResponse.signed.sequence, 10),
                timeoutHeight: parseInt(aminoSignResponse.signed.timeout_height, 10),
                accountNumber: parseInt(aminoSignResponse.signed.account_number, 10),
                chainId,
            });
            /** Preparing the transaction for client broadcasting */
            const web3Extension = (0, sdk_ts_1.createWeb3Extension)({
                ethereumChainId,
            });
            const txRawEip712 = (0, sdk_ts_1.createTxRawEIP712)(txRaw, web3Extension);
            if (options.simulateTx) {
                yield this.simulateTxRaw(txRawEip712);
            }
            /** Append Signatures */
            const signatureBuff = Buffer.from(aminoSignResponse.signature.signature, 'base64');
            txRawEip712.signatures = [signatureBuff];
            /** Broadcast the transaction */
            const response = yield new sdk_ts_1.TxGrpcApi(endpoints.grpc).broadcast(txRawEip712);
            if (response.code !== 0) {
                throw new exceptions_1.TransactionException(new Error(response.rawLog), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    contextCode: response.code,
                    contextModule: response.codespace,
                });
            }
            return response;
        });
    }
    /**
     * Prepare/sign/broadcast transaction using
     * Cosmos native wallets using the Web3Gateway.
     *
     * @param tx The transaction that needs to be broadcasted
     * @returns transaction hash
     */
    broadcastCosmosWithFeeDelegation(tx) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { options, chainId, endpoints } = this;
            const { walletStrategy } = options;
            const msgs = Array.isArray(tx.msgs) ? tx.msgs : [tx.msgs];
            const feePayerPubKey = yield this.fetchFeePayerPubKey(options.feePayerPubKey);
            const feePayerPublicKey = sdk_ts_1.PublicKey.fromBase64(feePayerPubKey);
            const feePayer = feePayerPublicKey.toAddress().address;
            /** Account Details * */
            const chainRestAuthApi = new sdk_ts_1.ChainRestAuthApi(endpoints.rest);
            const accountDetailsResponse = yield chainRestAuthApi.fetchAccount(tx.injectiveAddress);
            const baseAccount = sdk_ts_1.BaseAccount.fromRestApi(accountDetailsResponse);
            const accountDetails = baseAccount.toAccountDetails();
            /** Fee Payer Account Details */
            const feePayerAccountDetailsResponse = yield chainRestAuthApi.fetchAccount(feePayer);
            const feePayerBaseAccount = sdk_ts_1.BaseAccount.fromRestApi(feePayerAccountDetailsResponse);
            const feePayerAccountDetails = feePayerBaseAccount.toAccountDetails();
            /** Block Details */
            const chainRestTendermintApi = new sdk_ts_1.ChainRestTendermintApi(endpoints.rest);
            const latestBlock = yield chainRestTendermintApi.fetchLatestBlock();
            const latestHeight = latestBlock.header.height;
            const timeoutHeight = new utils_1.BigNumberInBase(latestHeight).plus(utils_1.DEFAULT_BLOCK_TIMEOUT_HEIGHT);
            const pubKey = yield walletStrategy.getPubKey();
            const gas = (((_a = tx.gas) === null || _a === void 0 ? void 0 : _a.gas) || (0, sdk_ts_1.getGasPriceBasedOnMessage)(msgs)).toString();
            /** Prepare the Transaction * */
            const { txRaw } = yield this.getTxWithSignersAndStdFee({
                chainId,
                memo: tx.memo,
                message: msgs,
                timeoutHeight: timeoutHeight.toNumber(),
                signers: [
                    {
                        pubKey,
                        accountNumber: accountDetails.accountNumber,
                        sequence: accountDetails.sequence,
                    },
                    {
                        pubKey: feePayerPublicKey.toBase64(),
                        accountNumber: feePayerAccountDetails.accountNumber,
                        sequence: feePayerAccountDetails.sequence,
                    },
                ],
                fee: (0, utils_1.getStdFee)(Object.assign(Object.assign({}, tx.gas), { gas, payer: feePayer })),
            });
            // Temporary remove tx gas check because Keplr doesn't recognize feePayer
            if (walletStrategy.wallet === types_1.Wallet.Keplr) {
                new keplr_1.KeplrWallet(chainId).disableGasCheck();
            }
            const directSignResponse = (yield walletStrategy.signCosmosTransaction({
                txRaw,
                chainId,
                address: tx.injectiveAddress,
                accountNumber: accountDetails.accountNumber,
            }));
            const transactionApi = new sdk_ts_1.IndexerGrpcTransactionApi(endpoints.indexer);
            const response = yield transactionApi.broadcastCosmosTxRequest({
                address: tx.injectiveAddress,
                txRaw: (0, sdk_ts_1.createTxRawFromSigResponse)(directSignResponse),
                signature: directSignResponse.signature.signature,
                pubKey: directSignResponse.signature.pub_key,
            });
            // Re-enable tx gas check removed above
            if (walletStrategy.wallet === types_1.Wallet.Keplr) {
                new keplr_1.KeplrWallet(chainId).enableGasCheck();
            }
            return yield new sdk_ts_1.TxGrpcApi(endpoints.grpc).fetchTxPoll(response.txHash);
        });
    }
    /**
     * Fetch the fee payer's pub key from the web3 gateway
     *
     * Returns a base64 version of it
     */
    fetchFeePayerPubKey(existingFeePayerPubKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (existingFeePayerPubKey) {
                return existingFeePayerPubKey;
            }
            const { endpoints } = this;
            const transactionApi = new sdk_ts_1.IndexerGrpcTransactionApi(endpoints.indexer);
            const response = yield transactionApi.fetchFeePayer();
            if (!response.feePayerPubKey) {
                throw new exceptions_1.GeneralException(new Error('Please provide a feePayerPubKey'));
            }
            if (response.feePayerPubKey.key.startsWith('0x') ||
                response.feePayerPubKey.key.length === 66) {
                return Buffer.from(response.feePayerPubKey.key, 'hex').toString('base64');
            }
            return response.feePayerPubKey.key;
        });
    }
    /**
     * In case we don't want to simulate the transaction
     * we get the gas limit based on the message type.
     *
     * If we want to simulate the transaction we set the
     * gas limit based on the simulation and add a small multiplier
     * to be safe (factor of 1.2)
     */
    getTxWithSignersAndStdFee(args) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { options } = this;
            const { simulateTx } = options;
            if (!simulateTx) {
                return Object.assign(Object.assign({}, (0, sdk_ts_1.createTransactionWithSigners)(args)), { stdFee: (0, utils_1.getStdFee)(Object.assign({}, args.fee)) });
            }
            const result = yield this.simulateTxWithSigners(args);
            if (!((_a = result.gasInfo) === null || _a === void 0 ? void 0 : _a.gasUsed)) {
                return Object.assign(Object.assign({}, (0, sdk_ts_1.createTransactionWithSigners)(args)), { stdFee: (0, utils_1.getStdFee)(Object.assign({}, args.fee)) });
            }
            const stdGasFee = Object.assign({}, (0, utils_1.getStdFee)(Object.assign(Object.assign({}, args.fee), { gas: new utils_1.BigNumberInBase(result.gasInfo.gasUsed).times(1.2).toFixed() })));
            return Object.assign(Object.assign({}, (0, sdk_ts_1.createTransactionWithSigners)(Object.assign(Object.assign({}, args), { fee: stdGasFee }))), { stdFee: stdGasFee });
        });
    }
    /**
     * Create TxRaw and simulate it
     */
    simulateTxRaw(txRaw) {
        return __awaiter(this, void 0, void 0, function* () {
            const { endpoints } = this;
            txRaw.signatures = [new Uint8Array(0)];
            const simulationResponse = yield new sdk_ts_1.TxGrpcApi(endpoints.grpc).simulate(txRaw);
            return simulationResponse;
        });
    }
    /**
     * Create TxRaw and simulate it
     */
    simulateTxWithSigners(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { endpoints } = this;
            const { txRaw } = (0, sdk_ts_1.createTransactionWithSigners)(args);
            txRaw.signatures = Array(Array.isArray(args.signers) ? args.signers.length : 1).fill(new Uint8Array(0));
            const simulationResponse = yield new sdk_ts_1.TxGrpcApi(endpoints.grpc).simulate(txRaw);
            return simulationResponse;
        });
    }
}
exports.MsgBroadcaster = MsgBroadcaster;
//# sourceMappingURL=MsgBroadcaster.js.map