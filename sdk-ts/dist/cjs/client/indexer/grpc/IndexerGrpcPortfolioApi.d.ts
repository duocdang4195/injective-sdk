import { InjectivePortfolioRpc } from '@injectivelabs/indexer-proto-ts';
import BaseGrpcConsumer from '../../BaseGrpcConsumer';
/**
 * @category Indexer Grpc API
 */
export declare class IndexerGrpcAccountPortfolioApi extends BaseGrpcConsumer {
    protected module: string;
    protected client: InjectivePortfolioRpc.InjectivePortfolioRPCClientImpl;
    constructor(endpoint: string);
    fetchAccountPortfolio(address: string): Promise<import("../types").AccountPortfolioV2>;
}
//# sourceMappingURL=IndexerGrpcPortfolioApi.d.ts.map