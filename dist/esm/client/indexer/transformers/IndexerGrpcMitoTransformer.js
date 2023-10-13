/**
 * @category Indexer Grpc Transformer
 */
export class IndexerGrpcMitoTransformer {
    static grpcCoinToCoin(coin) {
        return {
            denom: coin.denom,
            amount: coin.amount,
        };
    }
    static grpcTokenInfoToTokenInfo(tokenInfo) {
        return {
            denom: tokenInfo.denom,
            supply: tokenInfo.supply,
            symbol: tokenInfo.symbol,
            decimal: tokenInfo.decimal,
            logoUrl: tokenInfo.logoUrl,
        };
    }
    static mitoPaginationToPagination(pagination) {
        if (!pagination) {
            return undefined;
        }
        return {
            total: pagination.total,
        };
    }
    static mitoDenomBalanceToDenomBalance(denomBalance) {
        return {
            denom: denomBalance.denom,
            totalBalance: denomBalance.totalBalance,
        };
    }
    static changesResponseToChanges(changes) {
        if (!changes) {
            return undefined;
        }
        return {
            allTimeChange: changes.allTimeChange,
            threeMonthsChange: changes.threeMonthsChange,
            oneMonthChange: changes.oneMonthChange,
            oneDayChange: changes.oneDayChange,
            oneWeekChange: changes.oneWeekChange,
            oneYearChange: changes.oneYearChange,
            threeYearsChange: changes.threeYearsChange,
            sixMonthsChange: changes.sixMonthsChange,
        };
    }
    static mitoSubaccountInfoToSubaccountInfo(mitoSubaccountInfo) {
        if (!mitoSubaccountInfo) {
            return;
        }
        return {
            subaccountId: mitoSubaccountInfo.subaccountId,
            balancesList: mitoSubaccountInfo.balances.map(IndexerGrpcMitoTransformer.mitoDenomBalanceToDenomBalance),
        };
    }
    static mitoVaultToVault(vault) {
        return {
            slug: vault.slug,
            codeId: vault.codeId,
            marketId: vault.marketId,
            vaultName: vault.vaultName,
            vaultType: vault.vaultType,
            currentTvl: vault.currentTvl,
            lpTokenPrice: vault.lpTokenPrice,
            totalLpAmount: vault.totalLpAmount,
            contractAddress: vault.contractAddress,
            notionalValueCap: vault.notionalValueCap,
            masterContractAddress: vault.masterContractAddress,
            updatedAt: parseInt(vault.updatedAt, 10),
            createdAt: parseInt(vault.createdAt, 10),
            apy: vault.apy,
            profits: IndexerGrpcMitoTransformer.changesResponseToChanges(vault.profits),
            tvlChanges: IndexerGrpcMitoTransformer.changesResponseToChanges(vault.tvlChanges),
            subaccountInfo: IndexerGrpcMitoTransformer.mitoSubaccountInfoToSubaccountInfo(vault.subaccountInfo),
        };
    }
    static mitoPriceSnapshotToPriceSnapshot(snapshot) {
        return {
            price: snapshot.price,
            updatedAt: parseInt(snapshot.updatedAt, 10),
        };
    }
    static portfolioResponseToPortfolio(portfolio) {
        return {
            pnl: portfolio.pnl,
            totalValue: portfolio.totalValue,
            totalValueChartList: portfolio.totalValueChart.map(IndexerGrpcMitoTransformer.mitoPriceSnapshotToPriceSnapshot),
            pnlChartList: portfolio.pnlChart.map(IndexerGrpcMitoTransformer.mitoPriceSnapshotToPriceSnapshot),
        };
    }
    static leaderboardResponseToLeaderboard(leaderboard) {
        return {
            epochId: leaderboard.epochId,
            snapshotBlock: leaderboard.snapshotBlock,
            updatedAt: parseInt(leaderboard.updatedAt, 10),
            entriesList: leaderboard.entries.map((entry) => ({
                address: entry.address,
                pnl: entry.pnl,
            })),
        };
    }
    static mitoTransferHistoryToTransferHistory(transfer) {
        return {
            vault: transfer.vault,
            txHash: transfer.txHash,
            account: transfer.account,
            lpAmount: transfer.lpAmount,
            usdValue: transfer.usdValue,
            isDeposit: transfer.isDeposit,
            tidByVault: transfer.tidByVault,
            tidByAccount: transfer.tidByAccount,
            executedAt: parseInt(transfer.executedAt, 10),
            coins: transfer.coins.map(IndexerGrpcMitoTransformer.grpcCoinToCoin),
        };
    }
    static mitoLeaderboardEpochToLeaderboardEpoch(leaderboardEpoch) {
        return {
            isLive: leaderboardEpoch.isLive,
            epochId: leaderboardEpoch.epochId,
            startAt: parseInt(leaderboardEpoch.startAt, 10),
            endAt: parseInt(leaderboardEpoch.endAt, 10),
        };
    }
    static mitoStakingRewardToStakingReward(stakingReward) {
        return {
            apr: stakingReward.apr,
            vaultName: stakingReward.vaultName,
            vaultAddress: stakingReward.vaultAddress,
            lockTimestamp: parseInt(stakingReward.lockTimestamp, 10),
            claimableRewards: stakingReward.claimableRewards.map(IndexerGrpcMitoTransformer.grpcCoinToCoin),
            stakedAmount: stakingReward.stakedAmount
                ? IndexerGrpcMitoTransformer.grpcCoinToCoin(stakingReward.stakedAmount)
                : undefined,
            lockedAmount: stakingReward.lockedAmount
                ? IndexerGrpcMitoTransformer.grpcCoinToCoin(stakingReward.lockedAmount)
                : undefined,
        };
    }
    static mitoGaugeToGauge(gauge) {
        return {
            id: gauge.id,
            owner: gauge.owner,
            lastDistribution: gauge.lastDistribution,
            endTimestamp: parseInt(gauge.endTimestamp, 10),
            startTimestamp: parseInt(gauge.startTimestamp, 10),
            rewardTokens: gauge.rewardTokens.map(IndexerGrpcMitoTransformer.grpcCoinToCoin),
        };
    }
    static mitoStakingPoolToStakingPool(stakingPool) {
        return {
            apr: stakingPool.apr,
            vaultName: stakingPool.vaultName,
            stakeDenom: stakingPool.stakeDenom,
            vaultAddress: stakingPool.vaultAddress,
            aprBreakdown: stakingPool.aprBreakdown,
            totalLiquidity: stakingPool.totalLiquidity,
            stakingAddress: stakingPool.stakingAddress,
            gauges: stakingPool.gauges.map(IndexerGrpcMitoTransformer.mitoGaugeToGauge),
        };
    }
    static mitoStakingActivityToStakingActivity(stakingActivity) {
        return {
            action: stakingActivity.action,
            txHash: stakingActivity.txHash,
            staker: stakingActivity.staker,
            vaultAddress: stakingActivity.vaultAddress,
            numberByAccount: stakingActivity.numberByAccount,
            timestamp: parseInt(stakingActivity.timestamp, 10),
            rewardedTokens: stakingActivity.rewardedTokens.map(IndexerGrpcMitoTransformer.grpcCoinToCoin),
            stakeAmount: stakingActivity.stakeAmount
                ? IndexerGrpcMitoTransformer.grpcCoinToCoin(stakingActivity.stakeAmount)
                : undefined,
        };
    }
    static mitoSubscriptionToSubscription(subscription) {
        const vaultInfo = subscription.vaultInfo
            ? IndexerGrpcMitoTransformer.mitoVaultToVault(subscription.vaultInfo)
            : undefined;
        return {
            vaultInfo,
            lpAmount: subscription.lpAmount,
            holderAddress: subscription.holderAddress,
            lpAmountPercentage: subscription.lpAmountPercentage,
        };
    }
    static mitoLpHolderToLPHolder(holder) {
        return {
            amount: holder.amount,
            vaultAddress: holder.vaultAddress,
            stakedAmount: holder.stakedAmount,
            holderAddress: holder.holderAddress,
            lpAmountPercentage: holder.lpAmountPercentage,
            redemptionLockTime: holder.redemptionLockTime,
            updatedAt: parseInt(holder.updatedAt, 10),
        };
    }
    static mitoMissionToMission(mission) {
        return {
            id: mission.id,
            points: mission.points,
            progress: mission.progress,
            expected: mission.expected,
            completed: mission.completed,
            accruedPoints: mission.accruedPoints,
            updatedAt: parseInt(mission.updatedAt, 10),
        };
    }
    static mitoMissionLeaderboardEntryToMissionLeaderboardEntry(entry) {
        return {
            address: entry.address,
            accruedPoints: entry.accruedPoints,
        };
    }
    static mitoIDOProgressToIDOProgress(progress) {
        return {
            status: progress.status,
            timestamp: parseInt(progress.timestamp, 10),
        };
    }
    static mitoStakedToSubscriptionToStakedToSubscription(data) {
        return {
            stakedAmount: data.field[0],
            subscribableAmount: data.field[1],
        };
    }
    static mitoIDOToIDO(IDO) {
        return {
            name: IDO.name,
            owner: IDO.owner,
            status: IDO.status,
            tokenPrice: IDO.tokenPrice,
            quoteDenom: IDO.quoteDenom,
            useWhitelist: IDO.useWhitelist,
            capPerAddress: IDO.capPerAddress,
            contractAddress: IDO.contractAddress,
            subscribedAmount: IDO.subscribedAmount,
            targetAmountInUsd: IDO.targetAmountInUsd,
            projectTokenAmount: IDO.projectTokenAmount,
            isAccountWhiteListed: IDO.isAccountWhiteListed,
            targetAmountInQuoteDenom: IDO.targetAmountInQuoteDenom,
            endTime: parseInt(IDO.endTime, 10),
            startTime: parseInt(IDO.startTime, 10),
            secondBeforeStartToSetQuotePrice: parseInt(IDO.secondBeforeStartToSetQuotePrice, 10),
            progress: IDO.progress.map(IndexerGrpcMitoTransformer.mitoIDOProgressToIDOProgress),
            tokenInfo: IDO.tokenInfo
                ? IndexerGrpcMitoTransformer.grpcTokenInfoToTokenInfo(IDO.tokenInfo)
                : undefined,
            stakeToSubscription: IDO.stakeToSubscription.map(IndexerGrpcMitoTransformer.mitoStakedToSubscriptionToStakedToSubscription),
        };
    }
    static mitoIDOSubscriberToIDOSubscriber(IDOSubscriber) {
        return {
            address: IDOSubscriber.address,
            lastSubscribeTime: parseInt(IDOSubscriber.lastSubscribeTime, 10),
            subscribedCoin: IDOSubscriber.subscribedCoin
                ? IndexerGrpcMitoTransformer.grpcCoinToCoin(IDOSubscriber.subscribedCoin)
                : undefined,
            estimateLpAmount: IDOSubscriber.estimateLpAmount
                ? IndexerGrpcMitoTransformer.grpcCoinToCoin(IDOSubscriber.estimateLpAmount)
                : undefined,
            estimateRefundAmount: IDOSubscriber.estimateRefundAmount
                ? IndexerGrpcMitoTransformer.grpcCoinToCoin(IDOSubscriber.estimateRefundAmount)
                : undefined,
            estimateTokenReceived: IDOSubscriber.estimateTokenReceived
                ? IndexerGrpcMitoTransformer.grpcCoinToCoin(IDOSubscriber.estimateTokenReceived)
                : undefined,
        };
    }
    static mitoIDOSubscriptionToIDOSubscription(subscription) {
        return {
            price: subscription.price,
            quoteDenom: subscription.quoteDenom,
            stakedAmount: subscription.stakedAmount,
            rewardClaimed: subscription.rewardClaimed,
            committedAmount: subscription.committedAmount,
            updatedAt: parseInt(subscription.updatedAt, 10),
            claimableCoins: subscription.claimableCoins.map(IndexerGrpcMitoTransformer.grpcCoinToCoin),
            claimTxHash: subscription.claimTxHash,
            maxSubscriptionCoin: subscription.maxSubscriptionCoin
                ? IndexerGrpcMitoTransformer.grpcCoinToCoin(subscription.maxSubscriptionCoin)
                : undefined,
            tokenInfo: subscription.tokenInfo
                ? IndexerGrpcMitoTransformer.grpcTokenInfoToTokenInfo(subscription.tokenInfo)
                : undefined,
        };
    }
    static mitoIDOSubscriptionActivityToIDOSubscriptionActivity(IDOSubscriptionActivity) {
        return {
            txHash: IDOSubscriptionActivity.txHash,
            address: IDOSubscriptionActivity.address,
            usdValue: IDOSubscriptionActivity.usdValue,
            timestamp: parseInt(IDOSubscriptionActivity.timestamp, 10),
            subscribedCoin: IDOSubscriptionActivity.subscribedCoin
                ? IndexerGrpcMitoTransformer.grpcCoinToCoin(IDOSubscriptionActivity.subscribedCoin)
                : undefined,
        };
    }
    static mitoWhitelistAccountToWhitelistAccount(account) {
        return {
            accountAddress: account.accountAddress,
            updatedAt: parseInt(account.updatedAt, 10),
        };
    }
    static vaultResponseToVault(response) {
        const [vault] = response.vault;
        return IndexerGrpcMitoTransformer.mitoVaultToVault(vault);
    }
    static vaultsResponseToVaults(response) {
        return {
            vaults: response.vaults.map(IndexerGrpcMitoTransformer.mitoVaultToVault),
            pagination: IndexerGrpcMitoTransformer.mitoPaginationToPagination(response.pagination),
        };
    }
    static lpTokenPriceChartResponseToLPTokenPriceChart(response) {
        return response.prices.map(IndexerGrpcMitoTransformer.mitoPriceSnapshotToPriceSnapshot);
    }
    static vaultsByHolderAddressResponseToVaultsByHolderAddress(response) {
        return response.subscriptions.map(IndexerGrpcMitoTransformer.mitoSubscriptionToSubscription);
    }
    static lpHoldersResponseToLPHolders(response) {
        return response.holders.map(IndexerGrpcMitoTransformer.mitoLpHolderToLPHolder);
    }
    static transferHistoryResponseToTransfer(response) {
        return {
            transfers: response.transfers.map(IndexerGrpcMitoTransformer.mitoTransferHistoryToTransferHistory),
            pagination: IndexerGrpcMitoTransformer.mitoPaginationToPagination(response.pagination),
        };
    }
    static leaderboardEpochsResponseToLeaderboardEpochs(response) {
        return {
            epochs: response.epochs.map(IndexerGrpcMitoTransformer.mitoLeaderboardEpochToLeaderboardEpoch),
            pagination: IndexerGrpcMitoTransformer.mitoPaginationToPagination(response.pagination),
        };
    }
    static stakingPoolsResponseToStakingPools(response) {
        return {
            pools: response.pools.map(IndexerGrpcMitoTransformer.mitoStakingPoolToStakingPool),
            pagination: IndexerGrpcMitoTransformer.mitoPaginationToPagination(response.pagination),
        };
    }
    static stakingRewardByAccountResponseToStakingRewardByAccount(response) {
        return {
            rewards: response.rewards.map(IndexerGrpcMitoTransformer.mitoStakingRewardToStakingReward),
            pagination: IndexerGrpcMitoTransformer.mitoPaginationToPagination(response.pagination),
        };
    }
    static mitoStakingHistoryResponseTpStakingHistory(response) {
        return {
            activities: response.activities.map(IndexerGrpcMitoTransformer.mitoStakingActivityToStakingActivity),
            pagination: IndexerGrpcMitoTransformer.mitoPaginationToPagination(response.pagination),
        };
    }
    static mitoMissionsResponseMissions(response) {
        return response.data.map(IndexerGrpcMitoTransformer.mitoMissionToMission);
    }
    static mitoMissionLeaderboardResponseToMissionLeaderboard(response) {
        return {
            entries: response.data.map(IndexerGrpcMitoTransformer.mitoMissionLeaderboardEntryToMissionLeaderboardEntry),
            updatedAt: parseInt(response.updatedAt, 10),
            rank: response.userRank,
        };
    }
    static mitoListIDOsResponseToIDOs(response) {
        return {
            idos: response.idos.map(IndexerGrpcMitoTransformer.mitoIDOToIDO),
            pagination: IndexerGrpcMitoTransformer.mitoPaginationToPagination(response.pagination),
        };
    }
    static mitoIDOResponseToIDO(response) {
        return {
            ido: response.ido
                ? IndexerGrpcMitoTransformer.mitoIDOToIDO(response.ido)
                : undefined,
        };
    }
    static mitoIDOSubscribersResponseToIDOSubscribers(response) {
        return {
            subscribers: response.subscribers.map(IndexerGrpcMitoTransformer.mitoIDOSubscriberToIDOSubscriber),
            pagination: IndexerGrpcMitoTransformer.mitoPaginationToPagination(response.pagination),
            tokenInfo: response.tokenInfo
                ? IndexerGrpcMitoTransformer.grpcTokenInfoToTokenInfo(response.tokenInfo)
                : undefined,
            quoteDenom: response.quoteDenom,
        };
    }
    static mitoIDOSubscriptionResponseToIDOSubscription(response) {
        return {
            subscription: response.subscription
                ? IndexerGrpcMitoTransformer.mitoIDOSubscriptionToIDOSubscription(response.subscription)
                : undefined,
        };
    }
    static mitoIDOActivitiesResponseToIDOActivities(response) {
        return {
            activities: response.activities.map(IndexerGrpcMitoTransformer.mitoIDOSubscriptionActivityToIDOSubscriptionActivity),
            pagination: IndexerGrpcMitoTransformer.mitoPaginationToPagination(response.pagination),
        };
    }
    static mitoWhitelistAccountResponseToWhitelistAccount(response) {
        return {
            idoAddress: response.idoAddress,
            accounts: response.accounts.map(IndexerGrpcMitoTransformer.mitoWhitelistAccountToWhitelistAccount),
            pagination: IndexerGrpcMitoTransformer.mitoPaginationToPagination(response.pagination),
        };
    }
}
//# sourceMappingURL=IndexerGrpcMitoTransformer.js.map