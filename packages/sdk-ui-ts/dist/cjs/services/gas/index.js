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
exports.fetchGasPrice = void 0;
const utils_1 = require("@injectivelabs/utils");
const networks_1 = require("@injectivelabs/networks");
const constants_1 = require("../../constants");
const exceptions_1 = require("@injectivelabs/exceptions");
const alchemy_sdk_1 = require("alchemy-sdk");
const estimator_1 = require("./estimator");
const fetchGasPriceFromAlchemy = (key, network = networks_1.Network.Mainnet) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const settings = {
            apiKey: key,
            network: (0, networks_1.isMainnet)(network)
                ? alchemy_sdk_1.Network.ETH_MAINNET
                : alchemy_sdk_1.Network.ETH_GOERLI,
        };
        const alchemy = new alchemy_sdk_1.Alchemy(settings);
        const response = yield alchemy.core.getFeeData();
        if (!response) {
            throw new exceptions_1.HttpRequestException(new Error('No response from Alchemy'));
        }
        if (response.maxFeePerGas) {
            return response.maxFeePerGas.toString();
        }
        const gasPrice = yield alchemy.core.getGasPrice();
        if (!gasPrice) {
            throw new exceptions_1.HttpRequestException(new Error('No gas price response from Alchemy'));
        }
        return new utils_1.BigNumberInBase(gasPrice.toString()).toFixed();
    }
    catch (e) {
        if (e instanceof exceptions_1.HttpRequestException) {
            throw e;
        }
        throw new exceptions_1.HttpRequestException(new Error(e.message));
    }
});
const fetchGasPriceFromEtherchain = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = (yield new utils_1.HttpClient('https://www.etherchain.org/api/').get('gasPriceOracle'));
        if (!response || (response && !response.data)) {
            throw new exceptions_1.HttpRequestException(new Error('No response from Etherchain'));
        }
        return new utils_1.BigNumberInWei(new utils_1.BigNumber(response.data.recommendedBaseFee).multipliedBy(constants_1.GWEI_IN_WEI)).toFixed(0);
    }
    catch (e) {
        if (e instanceof exceptions_1.HttpRequestException) {
            throw e;
        }
        throw new exceptions_1.HttpRequestException(new Error(e.message));
    }
});
const fetchGasPriceFromEthGasStation = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = (yield new utils_1.HttpClient('https://ethgasstation.info/json').get('ethgasAPI.json'));
        if (!response || (response && !response.data)) {
            throw new exceptions_1.HttpRequestException(new Error('No response from Ethgasstation'));
        }
        return new utils_1.BigNumberInWei(new utils_1.BigNumber(response.data.fastest / 10)
            .times(2.125)
            .multipliedBy(constants_1.GWEI_IN_WEI)).toFixed(0);
    }
    catch (e) {
        if (e instanceof exceptions_1.HttpRequestException) {
            throw e;
        }
        throw new exceptions_1.HttpRequestException(new Error(e.message));
    }
});
const fetchGasPrice = (network, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (options && options.alchemyKey) {
        try {
            const gasPrice = yield (0, estimator_1.fetchEstimatorGasPrice)(options.alchemyKey, network);
            if (gasPrice) {
                return gasPrice.fast.toString();
            }
        }
        catch (e) {
            //
        }
        try {
            const gasPrice = yield fetchGasPriceFromAlchemy(options.alchemyKey, network);
            if (gasPrice) {
                return gasPrice.toString();
            }
        }
        catch (e) {
            //
        }
    }
    if ((0, networks_1.isTestnetOrDevnet)(network)) {
        return new utils_1.BigNumberInWei(constants_1.DEFAULT_GAS_PRICE).toFixed(0);
    }
    try {
        const gasPrice = yield fetchGasPriceFromEtherchain();
        if (gasPrice) {
            return gasPrice.toString();
        }
    }
    catch (e) {
        //
    }
    try {
        const gasPrice = yield fetchGasPriceFromEthGasStation();
        if (gasPrice) {
            return gasPrice.toString();
        }
    }
    catch (e) {
        //
    }
    return new utils_1.BigNumberInWei(constants_1.DEFAULT_MAINNET_GAS_PRICE).toString();
});
exports.fetchGasPrice = fetchGasPrice;
//# sourceMappingURL=index.js.map