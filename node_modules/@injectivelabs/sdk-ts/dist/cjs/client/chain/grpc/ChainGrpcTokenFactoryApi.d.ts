import { InjectiveTokenFactoryV1Beta1Query } from '@injectivelabs/core-proto-ts';
import BaseGrpcConsumer from '../../BaseGrpcConsumer';
/**
 * @category TokenFactory Grpc API
 */
export declare class ChainGrpcTokenFactoryApi extends BaseGrpcConsumer {
    protected module: string;
    protected client: InjectiveTokenFactoryV1Beta1Query.QueryClientImpl;
    constructor(endpoint: string);
    fetchDenomsFromCreator(creator: string): Promise<string[]>;
    fetchDenomAuthorityMetadata(creator: string, subDenom: string): Promise<import("../types/tokenfactory").AuthorityMetadata>;
    fetchModuleParams(): Promise<import("../types/tokenfactory").TokenFactoryModuleParams>;
    fetchModuleState(): Promise<import("../types/tokenfactory").TokenFactoryModuleState>;
}
//# sourceMappingURL=ChainGrpcTokenFactoryApi.d.ts.map