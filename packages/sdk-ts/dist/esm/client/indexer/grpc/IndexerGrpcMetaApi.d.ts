import { InjectiveMetaRpc } from '@injectivelabs/indexer-proto-ts';
import BaseGrpcConsumer from '../../BaseGrpcConsumer';
/**
 * @category Indexer Grpc API
 */
export declare class IndexerGrpcMetaApi extends BaseGrpcConsumer {
    protected module: string;
    protected client: InjectiveMetaRpc.InjectiveMetaRPCClientImpl;
    constructor(endpoint: string);
    fetchPing(): Promise<InjectiveMetaRpc.PingResponse>;
    fetchVersion(): Promise<InjectiveMetaRpc.VersionResponse>;
    fetchInfo(): Promise<InjectiveMetaRpc.InfoResponse>;
}
//# sourceMappingURL=IndexerGrpcMetaApi.d.ts.map