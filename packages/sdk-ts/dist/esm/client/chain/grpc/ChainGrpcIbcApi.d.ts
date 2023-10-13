import { IbcApplicationsTransferV1Query } from '@injectivelabs/core-proto-ts';
import BaseGrpcConsumer from '../../BaseGrpcConsumer';
/**
 * @category Chain Grpc API
 */
export declare class ChainGrpcIbcApi extends BaseGrpcConsumer {
    protected module: string;
    protected client: IbcApplicationsTransferV1Query.QueryClientImpl;
    constructor(endpoint: string);
    fetchDenomTrace(hash: string): Promise<import("@injectivelabs/core-proto-ts/cjs/ibc/applications/transfer/v1/transfer").DenomTrace>;
    fetchDenomsTrace(): Promise<import("@injectivelabs/core-proto-ts/cjs/ibc/applications/transfer/v1/transfer").DenomTrace[]>;
}
//# sourceMappingURL=ChainGrpcIbcApi.d.ts.map