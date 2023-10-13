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
exports.InjNameService = void 0;
const exceptions_1 = require("@injectivelabs/exceptions");
const networks_1 = require("@injectivelabs/networks");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
class InjNameService {
    constructor(network = networks_1.Network.Testnet, endpoints) {
        const networkEndpoints = endpoints || (0, networks_1.getNetworkEndpoints)(network);
        this.client = new sdk_ts_1.ChainGrpcWasmApi(networkEndpoints.grpc);
        this.registryAddress = sdk_ts_1.INJ_NAME_REGISTRY_CONTRACT_BY_NETWORK[network];
        this.reverseResolverAddress =
            sdk_ts_1.INJ_NAME_REVERSE_RESOLVER_CONTRACT_BY_NETWORK[network];
    }
    fetchResolverAddress(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = new sdk_ts_1.QueryResolverAddress({ node }).toPayload();
            const response = yield this.client.fetchSmartContractState(this.registryAddress, query);
            return sdk_ts_1.InjNameServiceQueryTransformer.resolverAddressResponseToResolverAddress(response);
        });
    }
    fetchInjAddress(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const node = (0, sdk_ts_1.nameToNode)((0, sdk_ts_1.normalizeName)(name));
            if (!node) {
                throw new exceptions_1.GeneralException(new Error(`The ${name} can't be normalized`));
            }
            const resolverAddress = yield this.fetchResolverAddress(node);
            if (!resolverAddress) {
                throw new exceptions_1.GeneralException(new Error(`Resolver address not found`));
            }
            const query = new sdk_ts_1.QueryInjectiveAddress({ node }).toPayload();
            const response = yield this.client.fetchSmartContractState(resolverAddress, query);
            return sdk_ts_1.InjNameServiceQueryTransformer.injectiveAddressResponseToInjectiveAddress(response);
        });
    }
    fetchInjName(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = new sdk_ts_1.QueryInjName({ address }).toPayload();
            const response = yield this.client.fetchSmartContractState(this.reverseResolverAddress, query);
            const name = sdk_ts_1.InjNameServiceQueryTransformer.injectiveNameResponseToInjectiveName(response);
            if (!name) {
                throw new exceptions_1.GeneralException(new Error(`.inj not found for ${address}`));
            }
            const addressFromName = yield this.fetchInjAddress(name);
            if (addressFromName.toLowerCase() !== address.toLowerCase()) {
                throw new exceptions_1.GeneralException(new Error(`.inj not found for ${address}`));
            }
            return name;
        });
    }
}
exports.InjNameService = InjNameService;
//# sourceMappingURL=InjNameService.js.map