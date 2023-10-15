import { InjectivePeggyV1Beta1Query } from '@injectivelabs/core-proto-ts';
import BaseGrpcConsumer from '../../BaseGrpcConsumer';
/**
 * @category Chain Grpc API
 */
export declare class ChainGrpcPeggyApi extends BaseGrpcConsumer {
    protected module: string;
    protected client: InjectivePeggyV1Beta1Query.QueryClientImpl;
    constructor(endpoint: string);
    fetchModuleParams(): Promise<import("../types").PeggyModuleParams>;
}
//# sourceMappingURL=ChainGrpcPeggyApi.d.ts.map