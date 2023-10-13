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
exports.Web3Client = void 0;
const networks_1 = require("@injectivelabs/networks");
const utils_1 = require("@injectivelabs/utils");
const contracts_1 = require("@injectivelabs/contracts");
const exceptions_1 = require("@injectivelabs/exceptions");
const utils_2 = require("./utils");
const constants_1 = require("../../constants");
const alchemy_1 = require("../../utils/alchemy");
const alchemy_sdk_1 = require("alchemy-sdk");
/**
 * Preparing and broadcasting
 * Ethereum transactions
 */
class Web3Client {
    constructor({ rpc, network }) {
        this.rpc = rpc;
        this.network = network;
    }
    fetchTokenBalanceAndAllowance({ address, contractAddress, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network } = this;
            if (!contractAddress.startsWith('peggy') &&
                !contractAddress.startsWith('0x') &&
                contractAddress !== constants_1.INJ_DENOM) {
                return {
                    balance: new utils_1.BigNumberInWei(0).toFixed(),
                    allowance: new utils_1.BigNumberInWei(0).toFixed(),
                };
            }
            try {
                const alchemy = yield this.getAlchemy();
                const ethersProvider = yield alchemy.config.getProvider();
                const tokenAddress = (0, utils_2.peggyDenomToContractAddress)(contractAddress);
                const contractAddresses = (0, contracts_1.getContractAddressesForNetworkOrThrow)(network);
                const tokenContractAddress = tokenAddress === constants_1.INJ_DENOM ? contractAddresses.injective : tokenAddress;
                const tokenBalances = yield alchemy.core.getTokenBalances(address, [
                    tokenContractAddress,
                ]);
                const tokenBalance = tokenBalances.tokenBalances
                    .filter((tokenBalance) => tokenBalance.tokenBalance)
                    .find((tokenBalance) => tokenBalance.contractAddress === tokenContractAddress);
                const balance = tokenBalance ? tokenBalance.tokenBalance || 0 : 0;
                const allowance = yield ethersProvider.send('alchemy_getTokenAllowance', [
                    {
                        owner: address,
                        spender: contractAddresses.peggy,
                        contract: tokenContractAddress,
                    },
                ]);
                return {
                    balance: new utils_1.BigNumberInWei(balance || 0).toFixed(),
                    allowance: new utils_1.BigNumberInWei(allowance || 0).toFixed(),
                };
            }
            catch (e) {
                return {
                    balance: new utils_1.BigNumberInWei(0).toFixed(),
                    allowance: new utils_1.BigNumberInWei(0).toFixed(),
                };
            }
        });
    }
    fetchTokenMetaData(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const alchemy = yield this.getAlchemy();
            try {
                return yield alchemy.core.getTokenMetadata(address);
            }
            catch (e) {
                throw new exceptions_1.Web3Exception(new Error(e.message));
            }
        });
    }
    getAlchemy() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.alchemy) {
                return this.alchemy;
            }
            const { rpc, network } = this;
            this.alchemy = new alchemy_sdk_1.Alchemy({
                apiKey: (0, alchemy_1.getKeyFromRpcUrl)(rpc),
                network: !(0, networks_1.isTestnetOrDevnet)(network)
                    ? alchemy_sdk_1.Network.ETH_MAINNET
                    : alchemy_sdk_1.Network.ETH_GOERLI,
            });
            return this.alchemy;
        });
    }
}
exports.Web3Client = Web3Client;
//# sourceMappingURL=Web3Client.js.map