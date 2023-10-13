import { InjectiveOracleV1Beta1Query } from '@injectivelabs/core-proto-ts';
import BaseGrpcConsumer from '../../BaseGrpcConsumer';
import { OracleModuleParams } from '../types';
/**
 * @category Chain Grpc API
 */
export declare class ChainGrpcOracleApi extends BaseGrpcConsumer {
    protected module: string;
    protected client: InjectiveOracleV1Beta1Query.QueryClientImpl;
    constructor(endpoint: string);
    fetchModuleParams(): Promise<OracleModuleParams>;
}
//# sourceMappingURL=ChainGrpcOracleApi.d.ts.map