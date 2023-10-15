import { grpc } from '@injectivelabs/grpc-web';
import { isBrowser } from '../utils/helpers';
import { getGrpcTransport } from '../utils/grpc';
import { InjectiveAccountRpc } from '@injectivelabs/indexer-proto-ts';
if (!isBrowser()) {
    grpc.setDefaultTransport(getGrpcTransport());
}
export default class BaseGrpcConsumer extends InjectiveAccountRpc.GrpcWebImpl {
    module = '';
    constructor(endpoint) {
        super(endpoint, { transport: getGrpcTransport() });
    }
    getGrpcWebImpl(endpoint) {
        return new BaseGrpcConsumer(endpoint);
    }
    retry(grpcCall, retries = 3, delay = 1000) {
        const retryGrpcCall = async (attempt = 1) => {
            try {
                return await grpcCall();
            }
            catch (e) {
                if (attempt >= retries) {
                    throw e;
                }
                return new Promise((resolve) => setTimeout(() => resolve(retryGrpcCall(attempt + 1)), delay * attempt));
            }
        };
        return retryGrpcCall();
    }
}
//# sourceMappingURL=BaseGrpcConsumer.js.map