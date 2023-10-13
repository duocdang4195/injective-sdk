/* eslint-disable class-methods-use-this */
import { CosmosChainId, } from '@injectivelabs/ts-types';
import { ErrorType, UnspecifiedErrorCode, CosmosWalletException, TransactionException, } from '@injectivelabs/exceptions';
import { createTxRawFromSigResponse, createSignDocFromTransaction, toUtf8, } from '@injectivelabs/sdk-ts';
import { makeSignDoc } from '@cosmjs/proto-signing';
import { cosmos, InstallError } from '@cosmostation/extension-client';
import { SEND_TRANSACTION_MODE } from '@cosmostation/extension-client/cosmos';
import BaseConcreteStrategy from './Base';
import { WalletAction, WalletDeviceType } from '../../../types/enums';
import { CosmosTxV1Beta1Tx } from '@injectivelabs/sdk-ts';
const INJECTIVE_CHAIN_NAME = 'injective';
export default class Cosmostation extends BaseConcreteStrategy {
    provider;
    constructor(args) {
        super(args);
        this.chainId = args.chainId || CosmosChainId.Injective;
    }
    async getWalletDeviceType() {
        return Promise.resolve(WalletDeviceType.Browser);
    }
    async getAddresses() {
        const provider = await this.getProvider();
        try {
            const accounts = await provider.requestAccount(INJECTIVE_CHAIN_NAME);
            return [accounts.address];
        }
        catch (e) {
            if (e.code === 4001) {
                throw new CosmosWalletException(new Error('The user rejected the request'), {
                    code: UnspecifiedErrorCode,
                    context: WalletAction.GetAccounts,
                });
            }
            throw new CosmosWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: WalletAction.GetAccounts,
            });
        }
    }
    async confirm(address) {
        return Promise.resolve(`0x${Buffer.from(`Confirmation for ${address} at time: ${Date.now()}`).toString('hex')}`);
    }
    // eslint-disable-next-line class-methods-use-this
    async sendEthereumTransaction(_transaction, _options) {
        throw new CosmosWalletException(new Error('sendEthereumTransaction is not supported. Cosmostation only supports sending cosmos transactions'), {
            code: UnspecifiedErrorCode,
            context: WalletAction.SendEthereumTransaction,
        });
    }
    async sendTransaction(transaction, _options) {
        const provider = await this.getProvider();
        const txRaw = createTxRawFromSigResponse(transaction);
        try {
            const response = await provider.sendTransaction(INJECTIVE_CHAIN_NAME, CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish(), SEND_TRANSACTION_MODE.SYNC);
            return {
                ...response.tx_response,
                gasUsed: parseInt((response.tx_response.gas_used || '0'), 10),
                gasWanted: parseInt((response.tx_response.gas_wanted || '0'), 10),
                height: parseInt((response.tx_response.height || '0'), 10),
                txHash: response.tx_response.txhash,
                rawLog: response.tx_response.raw_log,
            };
        }
        catch (e) {
            if (e instanceof TransactionException) {
                throw e;
            }
            throw new TransactionException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: WalletAction.SendTransaction,
            });
        }
    }
    /** @deprecated * */
    async signTransaction(transaction, address) {
        return this.signCosmosTransaction({ ...transaction, address });
    }
    async signCosmosTransaction(transaction) {
        const { chainId } = this;
        const provider = await this.getProvider();
        const signDoc = createSignDocFromTransaction(transaction);
        try {
            /* Sign the transaction */
            const signDirectResponse = await provider.signDirect(INJECTIVE_CHAIN_NAME, {
                chain_id: chainId,
                body_bytes: signDoc.bodyBytes,
                auth_info_bytes: signDoc.authInfoBytes,
                account_number: signDoc.accountNumber.toString(),
            }, { fee: true, memo: true });
            return {
                signed: makeSignDoc(signDirectResponse.signed_doc.body_bytes, signDirectResponse.signed_doc.auth_info_bytes, signDirectResponse.signed_doc.chain_id, parseInt(signDirectResponse.signed_doc.account_number, 10)),
                signature: {
                    signature: signDirectResponse.signature,
                },
            };
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: WalletAction.SendTransaction,
            });
        }
    }
    async getPubKey() {
        const provider = await this.getProvider();
        try {
            const account = await provider.requestAccount(INJECTIVE_CHAIN_NAME);
            return Buffer.from(account.publicKey).toString('base64');
        }
        catch (e) {
            if (e.code === 4001) {
                throw new CosmosWalletException(new Error('The user rejected the request'), {
                    code: UnspecifiedErrorCode,
                    context: WalletAction.GetAccounts,
                });
            }
            throw new CosmosWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: WalletAction.GetAccounts,
            });
        }
    }
    async signEip712TypedData(_eip712TypedData, _address) {
        throw new CosmosWalletException(new Error('This wallet does not support signing Ethereum transactions'), {
            code: UnspecifiedErrorCode,
            context: WalletAction.SendTransaction,
        });
    }
    async signArbitrary(signer, data) {
        try {
            const provider = await this.getProvider();
            const signature = await provider.signMessage(INJECTIVE_CHAIN_NAME, signer, toUtf8(data));
            return signature.signature;
        }
        catch (e) {
            throw new CosmosWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                context: WalletAction.SignArbitrary,
            });
        }
    }
    async getEthereumChainId() {
        throw new CosmosWalletException(new Error('getEthereumChainId is not supported on Cosmostation'), {
            code: UnspecifiedErrorCode,
            context: WalletAction.GetChainId,
        });
    }
    async getEthereumTransactionReceipt(_txHash) {
        throw new CosmosWalletException(new Error('getEthereumTransactionReceipt is not supported on Cosmostation'), {
            code: UnspecifiedErrorCode,
            type: ErrorType.WalletError,
            context: WalletAction.GetEthereumTransactionReceipt,
        });
    }
    async getProvider() {
        if (this.provider) {
            return this.provider;
        }
        try {
            const provider = await cosmos();
            this.provider = provider;
            return provider;
        }
        catch (e) {
            if (e instanceof InstallError) {
                throw new CosmosWalletException(new Error('Please install the Cosmostation extension'), {
                    code: UnspecifiedErrorCode,
                    type: ErrorType.WalletNotInstalledError,
                });
            }
            throw new CosmosWalletException(new Error(e.message), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
            });
        }
    }
}
//# sourceMappingURL=Cosmostation.js.map