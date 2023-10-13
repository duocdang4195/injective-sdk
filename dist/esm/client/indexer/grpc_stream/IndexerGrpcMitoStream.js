import { IndexerGrpcMitoStreamTransformer } from '../transformers';
import { getGrpcIndexerWebImpl } from '../../BaseIndexerGrpcWebConsumer';
import { MitoApi } from '@injectivelabs/mito-proto-ts';
/**
 * @category Indexer Grpc Stream
 */
export class IndexerGrpcMitoStream {
    client;
    constructor(endpoint) {
        this.client = new MitoApi.MitoAPIClientImpl(getGrpcIndexerWebImpl(endpoint));
    }
    streamTransfers({ vault, account, callback, onEndCallback, onStatusCallback, }) {
        const request = MitoApi.StreamTransfersRequest.create();
        if (vault) {
            request.vault = vault;
        }
        if (account) {
            request.account = account;
        }
        const subscription = this.client.StreamTransfers(request).subscribe({
            next(response) {
                callback(IndexerGrpcMitoStreamTransformer.transfersStreamCallback(response));
            },
            error(err) {
                if (onStatusCallback) {
                    onStatusCallback(err);
                }
            },
            complete() {
                if (onEndCallback) {
                    onEndCallback();
                }
            },
        });
        return subscription;
    }
    streamVault({ vault, callback, onEndCallback, onStatusCallback, }) {
        const request = MitoApi.StreamVaultRequest.create();
        if (vault) {
            request.vault = vault;
        }
        const subscription = this.client.StreamVault(request).subscribe({
            next(response) {
                callback(IndexerGrpcMitoStreamTransformer.vaultStreamCallback(response));
            },
            error(err) {
                if (onStatusCallback) {
                    onStatusCallback(err);
                }
            },
            complete() {
                if (onEndCallback) {
                    onEndCallback();
                }
            },
        });
        return subscription;
    }
    streamVaultHolderSubscriptions({ holderAddress, vaultAddress, stakingContractAddress, callback, onEndCallback, onStatusCallback, }) {
        const request = MitoApi.StreamHolderSubscriptionRequest.create();
        request.holderAddress = holderAddress;
        if (vaultAddress) {
            request.vaultAddress = vaultAddress;
        }
        if (stakingContractAddress) {
            request.stakingContractAddress = stakingContractAddress;
        }
        const subscription = this.client
            .StreamHolderSubscription(request)
            .subscribe({
            next(response) {
                callback(IndexerGrpcMitoStreamTransformer.vaultHolderSubscriptionStreamCallback(response));
            },
            error(err) {
                if (onStatusCallback) {
                    onStatusCallback(err);
                }
            },
            complete() {
                if (onEndCallback) {
                    onEndCallback();
                }
            },
        });
        return subscription;
    }
    streamStakingRewardsByAccount({ staker, callback, onEndCallback, onStatusCallback, stakingContractAddress, }) {
        const request = MitoApi.StreamStakingRewardByAccountRequest.create();
        request.staker = staker;
        request.stakingContractAddress = stakingContractAddress;
        const subscription = this.client
            .StreamStakingRewardByAccount(request)
            .subscribe({
            next(response) {
                callback(IndexerGrpcMitoStreamTransformer.stakingRewardByAccountStreamCallback(response));
            },
            error(err) {
                if (onStatusCallback) {
                    onStatusCallback(err);
                }
            },
            complete() {
                if (onEndCallback) {
                    onEndCallback();
                }
            },
        });
        return subscription;
    }
    streamHistoricalStaking({ staker, stakingContractAddress, callback, onEndCallback, onStatusCallback, }) {
        const request = MitoApi.StreamHistoricalStakingRequest.create();
        request.staker = staker;
        request.stakingContractAddress = stakingContractAddress;
        const subscription = this.client
            .StreamHistoricalStaking(request)
            .subscribe({
            next(response) {
                callback(IndexerGrpcMitoStreamTransformer.historicalStakingStreamCallback(response));
            },
            error(err) {
                if (onStatusCallback) {
                    onStatusCallback(err);
                }
            },
            complete() {
                if (onEndCallback) {
                    onEndCallback();
                }
            },
        });
        return subscription;
    }
}
//# sourceMappingURL=IndexerGrpcMitoStream.js.map