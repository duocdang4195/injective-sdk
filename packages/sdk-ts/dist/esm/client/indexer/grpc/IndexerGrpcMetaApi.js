import { GrpcUnaryRequestException, UnspecifiedErrorCode, } from '@injectivelabs/exceptions';
import { InjectiveMetaRpc } from '@injectivelabs/indexer-proto-ts';
import BaseGrpcConsumer from '../../BaseGrpcConsumer';
import { IndexerModule } from '../types';
/**
 * @category Indexer Grpc API
 */
export class IndexerGrpcMetaApi extends BaseGrpcConsumer {
    module = IndexerModule.Meta;
    client;
    constructor(endpoint) {
        super(endpoint);
        this.client = new InjectiveMetaRpc.InjectiveMetaRPCClientImpl(this.getGrpcWebImpl(endpoint));
    }
    async fetchPing() {
        const request = InjectiveMetaRpc.PingRequest.create();
        try {
            const response = await this.retry(() => this.client.Ping(request));
            return response;
        }
        catch (e) {
            if (e instanceof InjectiveMetaRpc.GrpcWebError) {
                throw new GrpcUnaryRequestException(new Error(e.toString()), {
                    code: e.code,
                    context: 'Ping',
                    contextModule: this.module,
                });
            }
            throw new GrpcUnaryRequestException(e, {
                code: UnspecifiedErrorCode,
                context: 'Ping',
                contextModule: this.module,
            });
        }
    }
    async fetchVersion() {
        const request = InjectiveMetaRpc.VersionRequest.create();
        try {
            const response = await this.retry(() => this.client.Version(request));
            return response;
        }
        catch (e) {
            if (e instanceof InjectiveMetaRpc.GrpcWebError) {
                throw new GrpcUnaryRequestException(new Error(e.toString()), {
                    code: e.code,
                    context: 'Version',
                    contextModule: this.module,
                });
            }
            throw new GrpcUnaryRequestException(e, {
                code: UnspecifiedErrorCode,
                context: 'Version',
                contextModule: this.module,
            });
        }
    }
    async fetchInfo() {
        const request = InjectiveMetaRpc.InfoRequest.create();
        request.timestamp = Date.now().toString();
        try {
            const response = await this.retry(() => this.client.Info(request));
            return response;
        }
        catch (e) {
            if (e instanceof InjectiveMetaRpc.GrpcWebError) {
                throw new GrpcUnaryRequestException(new Error(e.toString()), {
                    code: e.code,
                    context: 'Info',
                    contextModule: this.module,
                });
            }
            throw new GrpcUnaryRequestException(e, {
                code: UnspecifiedErrorCode,
                context: 'Info',
                contextModule: this.module,
            });
        }
    }
}
//# sourceMappingURL=IndexerGrpcMetaApi.js.map