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
exports.fetchEstimatorGasPrice = void 0;
const alchemy_sdk_1 = require("alchemy-sdk");
const networks_1 = require("@injectivelabs/networks");
const utils_1 = require("@injectivelabs/utils");
const HISTORICAL_BLOCKS = 20;
const avg = (arr) => {
    const sum = arr.reduce((a, v) => a + v);
    return Math.round(sum / arr.length);
};
const formatFeeHistory = (result) => {
    let blockNum = result.oldestBlock;
    let index = 0;
    const blocks = [];
    while (blockNum < result.oldestBlock + HISTORICAL_BLOCKS) {
        blocks.push({
            number: blockNum,
            baseFeePerGas: Number(result.baseFeePerGas[index]),
            gasUsedRatio: Number(result.gasUsedRatio[index]),
            priorityFeePerGas: result.reward[index].map((x) => Number(x)),
        });
        blockNum += 1;
        index += 1;
    }
    return blocks;
};
const fetchEstimatorGasPrice = (alchemyRpcUrl, network = networks_1.Network.Mainnet) => __awaiter(void 0, void 0, void 0, function* () {
    const isMainnetNetwork = (0, networks_1.isMainnet)(network);
    const settings = {
        apiKey: alchemyRpcUrl,
        network: isMainnetNetwork ? alchemy_sdk_1.Network.ETH_MAINNET : alchemy_sdk_1.Network.ETH_GOERLI,
    };
    const url = `https://eth-${isMainnetNetwork ? 'mainnet' : 'goerli'}.alchemyapi.io/v2/`;
    const alchemy = new alchemy_sdk_1.Alchemy(settings);
    const httpClient = new utils_1.HttpClient(url);
    const feeHistory = (yield httpClient
        .setConfig({
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
        },
    })
        .post(alchemyRpcUrl, {
        id: Date.now().toString(16),
        jsonrpc: '2.0',
        method: 'eth_feeHistory',
        params: ['0x5', 'latest', [25, 50, 75]],
    }));
    const blocks = formatFeeHistory(feeHistory);
    const slow = avg(blocks.map((b) => b.priorityFeePerGas[0]));
    const average = avg(blocks.map((b) => b.priorityFeePerGas[1]));
    const fast = avg(blocks.map((b) => b.priorityFeePerGas[2]));
    const pendingBlock = yield alchemy.core.getBlock('pending');
    const baseFeePerGas = Number(pendingBlock.baseFeePerGas);
    return {
        slow: slow + baseFeePerGas,
        average: average + baseFeePerGas,
        fast: fast + baseFeePerGas,
    };
});
exports.fetchEstimatorGasPrice = fetchEstimatorGasPrice;
//# sourceMappingURL=estimator.js.map