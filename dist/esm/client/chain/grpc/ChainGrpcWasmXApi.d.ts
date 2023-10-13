import { InjectiveWasmxV1Beta1Query } from '@injectivelabs/core-proto-ts';
import BaseGrpcConsumer from '../../BaseGrpcConsumer';
/**
 * @category Chain Grpc API
 */
export declare class ChainGrpcWasmXApi extends BaseGrpcConsumer {
    protected module: string;
    protected client: InjectiveWasmxV1Beta1Query.QueryClientImpl;
    constructor(endpoint: string);
    fetchModuleParams(): Promise<InjectiveWasmxV1Beta1Query.QueryWasmxParamsResponse>;
    fetchModuleState(): Promise<import("@injectivelabs/core-proto-ts/cjs/injective/wasmx/v1/genesis").GenesisState | undefined>;
}
//# sourceMappingURL=ChainGrpcWasmXApi.d.ts.map