import BaseRestConsumer from '../../BaseRestConsumer';
import { HttpRequestException, UnspecifiedErrorCode, } from '@injectivelabs/exceptions';
import { IndexerRestExplorerTransformer } from '../transformers';
import { IndexerModule } from '../types';
const explorerEndpointSuffix = 'api/explorer/v1';
/**
 * @category Indexer Rest API
 */
export class IndexerRestExplorerApi extends BaseRestConsumer {
    constructor(endpoint) {
        super(endpoint.includes(explorerEndpointSuffix)
            ? endpoint
            : `${endpoint}/${explorerEndpointSuffix}`);
    }
    async fetchBlock(blockHashHeight) {
        const endpoint = `blocks/${blockHashHeight}`;
        try {
            const response = await this.retry(() => this.get(`blocks/${blockHashHeight}`));
            return IndexerRestExplorerTransformer.blockWithTxToBlockWithTx(response.data.data);
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: `${this.endpoint}/${endpoint}`,
                contextModule: IndexerModule.Explorer,
            });
        }
    }
    async fetchBlocks(params) {
        const endpoint = 'blocks';
        try {
            const { before, limit } = params || { limit: 12 };
            const response = await this.retry(() => this.get(endpoint, {
                before,
                limit,
            }));
            const { paging, data } = response.data;
            return {
                paging,
                blocks: IndexerRestExplorerTransformer.blocksToBlocks(data),
            };
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: `${this.endpoint}/${endpoint}`,
                contextModule: IndexerModule.Explorer,
            });
        }
    }
    async fetchBlocksWithTx(params) {
        const endpoint = 'blocks';
        try {
            const { before, limit } = params || { limit: 12 };
            const response = await this.retry(() => this.get(endpoint, {
                before,
                limit,
            }));
            const { paging, data } = response.data;
            return {
                paging,
                blocks: data
                    ? IndexerRestExplorerTransformer.blocksWithTxsToBlocksWithTxs(data)
                    : [],
            };
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: `${this.endpoint}/${endpoint}`,
                contextModule: IndexerModule.Explorer,
            });
        }
    }
    async fetchTransactions(params) {
        const endpoint = 'txs';
        try {
            const { fromNumber, before, after, limit, toNumber, endTime, skip, startTime, status, type, } = params || {
                limit: 12,
            };
            const response = await this.retry(() => this.get(endpoint, {
                limit,
                after,
                before,
                from_number: fromNumber,
                to_number: toNumber,
                skip,
                status,
                type: type ? type.join(',') : undefined,
                end_time: endTime,
                start_time: startTime,
            }));
            const { paging, data } = response.data;
            return {
                paging,
                transactions: data
                    ? IndexerRestExplorerTransformer.transactionsToTransactions(data)
                    : [],
            };
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: `${this.endpoint}/${endpoint}`,
                contextModule: IndexerModule.Explorer,
            });
        }
    }
    async fetchAccountTransactions({ account, params, }) {
        const endpoint = `accountTxs/${account}`;
        try {
            const { fromNumber, before, after, limit, skip, toNumber, endTime, startTime, status, type, } = params || {
                limit: 12,
            };
            const response = await this.retry(() => this.get(endpoint, {
                skip,
                limit,
                after,
                before,
                from_number: fromNumber,
                to_number: toNumber,
                status,
                type: type ? type.join(',') : undefined,
                end_time: endTime,
                start_time: startTime,
            }));
            const { paging, data } = response.data;
            return {
                paging,
                transactions: data
                    ? IndexerRestExplorerTransformer.transactionsToTransactions(data)
                    : [],
            };
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: `${this.endpoint}/${endpoint}`,
                contextModule: IndexerModule.Explorer,
            });
        }
    }
    async fetchTransaction(hash) {
        const endpoint = `txs/${hash}`;
        try {
            const response = await this.retry(() => this.get(endpoint));
            return IndexerRestExplorerTransformer.transactionToTransaction(response.data.data);
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                contextModule: IndexerModule.Explorer,
            });
        }
    }
    async fetchValidators() {
        const endpoint = 'validators';
        try {
            const response = await this.retry(() => this.get(endpoint));
            if (!response.data || !response.data.data) {
                return [];
            }
            return IndexerRestExplorerTransformer.validatorExplorerToValidator(response.data.data);
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: `${this.endpoint}/${endpoint}`,
                contextModule: IndexerModule.Explorer,
            });
        }
    }
    async fetchValidatorUptime(validatorConsensusAddress) {
        const endpoint = `validator_uptime/${validatorConsensusAddress}`;
        try {
            const response = await this.retry(() => this.get(endpoint));
            if (!response.data || !response.data.data) {
                return [];
            }
            return IndexerRestExplorerTransformer.validatorUptimeToExplorerValidatorUptime(response.data.data);
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: `${this.endpoint}/${endpoint}`,
                contextModule: IndexerModule.Explorer,
            });
        }
    }
    async fetchContract(contractAddress) {
        const endpoint = `/wasm/contracts/${contractAddress}`;
        try {
            const response = await this.retry(() => this.get(endpoint));
            return IndexerRestExplorerTransformer.contractToExplorerContract(response.data);
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: `${this.endpoint}/${endpoint}`,
                contextModule: IndexerModule.Explorer,
            });
        }
    }
    async fetchContracts(params) {
        const endpoint = `/wasm/contracts`;
        try {
            const { assetsOnly, fromNumber, limit, skip, label } = params || {
                limit: 12,
            };
            const response = await this.retry(() => this.get(endpoint, {
                skip,
                limit,
                assets_only: assetsOnly,
                from_number: fromNumber,
                label,
            }));
            const { paging, data } = response.data;
            return {
                paging,
                contracts: data
                    ? data.map(IndexerRestExplorerTransformer.contractToExplorerContract)
                    : [],
            };
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: `${this.endpoint}/${endpoint}`,
                contextModule: IndexerModule.Explorer,
            });
        }
    }
    async fetchContractTransactions({ contractAddress, params, }) {
        const endpoint = `/contractTxs/${contractAddress}`;
        try {
            const { fromNumber, limit, skip, toNumber } = params || { limit: 12 };
            const response = await this.retry(() => this.get(endpoint, {
                skip,
                limit,
                to_number: toNumber,
                from_number: fromNumber,
            }));
            const { paging, data } = response.data;
            return {
                paging,
                transactions: data
                    ? data.map(IndexerRestExplorerTransformer.contractTransactionToExplorerContractTransaction)
                    : [],
            };
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: `${this.endpoint}/${endpoint}`,
                contextModule: IndexerModule.Explorer,
            });
        }
    }
    async fetchWasmCode(codeId) {
        const endpoint = `/wasm/codes/${codeId}`;
        try {
            const response = await this.retry(() => this.get(endpoint));
            return IndexerRestExplorerTransformer.wasmCodeToExplorerWasmCode(response.data);
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: `${this.endpoint}/${endpoint}`,
                contextModule: IndexerModule.Explorer,
            });
        }
    }
    async fetchWasmCodes(params) {
        const endpoint = `/wasm/codes`;
        try {
            const { fromNumber, limit, toNumber } = params || { limit: 12 };
            const response = await this.retry(() => this.get(endpoint, {
                limit,
                from_number: fromNumber,
                to_number: toNumber,
            }));
            const { paging, data } = response.data;
            return {
                paging,
                wasmCodes: data
                    ? data.map(IndexerRestExplorerTransformer.wasmCodeToExplorerWasmCode)
                    : [],
            };
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: `${this.endpoint}/${endpoint}`,
                contextModule: IndexerModule.Explorer,
            });
        }
    }
    async fetchCW20Balances(address) {
        const endpoint = `/wasm/${address}/cw20-balance`;
        try {
            const response = await this.retry(() => this.get(endpoint));
            if (response.data.length === 0) {
                return [];
            }
            return response.data.map(IndexerRestExplorerTransformer.CW20BalanceToExplorerCW20Balance);
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: `${this.endpoint}/${endpoint}`,
                contextModule: IndexerModule.Explorer,
            });
        }
    }
    async fetchCW20BalancesNoThrow(address) {
        const endpoint = `/wasm/${address}/cw20-balance`;
        try {
            const response = await this.retry(() => this.get(endpoint));
            if (response.data.length === 0) {
                return [];
            }
            return response.data.map(IndexerRestExplorerTransformer.CW20BalanceToExplorerCW20Balance);
        }
        catch (e) {
            const error = e;
            if (error.message.includes(404) || error.message.includes(500)) {
                return [];
            }
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: `${this.endpoint}/${endpoint}`,
                contextModule: IndexerModule.Explorer,
            });
        }
    }
    async fetchBankTransfers(params) {
        const endpoint = `/bank/transfers`;
        const { endTime, limit, skip, startTime, address, recipients, senders } = params || { limit: 10 };
        try {
            const response = await this.retry(() => this.get(endpoint, {
                skip,
                limit,
                senders,
                address,
                recipients,
                end_time: endTime,
                start_time: startTime,
                is_community_pool_related: params.isCommunitySpendPool,
            }));
            const { data, paging } = response.data;
            return {
                paging,
                data: IndexerRestExplorerTransformer.bankTransfersToBankTransfers(data || []),
            };
        }
        catch (e) {
            if (e instanceof HttpRequestException) {
                throw e;
            }
            throw new HttpRequestException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: `${this.endpoint}/${endpoint}`,
                contextModule: IndexerModule.Explorer,
            });
        }
    }
}
//# sourceMappingURL=IndexerRestExplorerApi.js.map