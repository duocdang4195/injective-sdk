import { InjectiveAccountRpc } from '@injectivelabs/indexer-proto-ts';
export default class BaseGrpcConsumer extends InjectiveAccountRpc.GrpcWebImpl {
    protected module: string;
    constructor(endpoint: string);
    getGrpcWebImpl(endpoint: string): BaseGrpcConsumer;
    protected retry<TResponse>(grpcCall: Function, retries?: number, delay?: number): Promise<TResponse>;
}
//# sourceMappingURL=BaseGrpcConsumer.d.ts.map