import { ErrorType, TransactionException, UnspecifiedErrorCode, CosmosWalletException, } from '@injectivelabs/exceptions';
import { createTxRawFromSigResponse, createSignDocFromTransaction, } from '@injectivelabs/sdk-ts';
import { makeSignDoc } from '@cosmjs/proto-signing';
import { cosmos, InstallError } from '@cosmostation/extension-client';
import { SEND_TRANSACTION_MODE } from '@cosmostation/extension-client/cosmos';
import { WalletAction, WalletDeviceType } from '../../../types/enums';
import { CosmosTxV1Beta1Tx } from '@injectivelabs/sdk-ts';
const getChainNameFromChainId = (chainId) => {
    const [chainName] = chainId.split('-');
    if (chainName.includes('cosmoshub')) {
        return 'cosmos';
    }
    if (chainName.includes('core')) {
        return 'persistence';
    }
    if (chainName.includes('evmos')) {
        return 'evmos';
    }
    return chainName;
};
export default class Cosmostation {
    chainName;
    provider;
    chainId;
    constructor(args) {
        this.chainId = args.chainId;
        this.chainName = getChainNameFromChainId(args.chainId);
    }
    async getWalletDeviceType() {
        return Promise.resolve(WalletDeviceType.Browser);
    }
    async isChainIdSupported(chainId) {
        const actualChainId = chainId || this.chainId;
        const provider = await this.getProvider();
        const supportedChainIds = await provider.getSupportedChainIds();
        return !!supportedChainIds.official.find((chainId) => chainId === actualChainId);
    }
    async getAddresses() {
        const { chainName } = this;
        const provider = await this.getProvider();
        try {
            const accounts = await provider.requestAccount(chainName);
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
    async sendTransaction(transaction) {
        const { chainName } = this;
        const provider = await this.getProvider();
        const txRaw = createTxRawFromSigResponse(transaction);
        try {
            const response = await provider.sendTransaction(chainName, CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish(), SEND_TRANSACTION_MODE.ASYNC);
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
    async signTransaction(transaction) {
        const { chainName, chainId } = this;
        const provider = await this.getProvider();
        const signDoc = createSignDocFromTransaction(transaction);
        try {
            /* Sign the transaction */
            const signDirectResponse = await provider.signDirect(chainName, {
                chain_id: chainId,
                body_bytes: signDoc.bodyBytes,
                auth_info_bytes: signDoc.authInfoBytes,
                account_number: transaction.accountNumber.toString(),
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
    async signAminoTransaction(_transaction) {
        throw new CosmosWalletException(new Error('signAminoTransaction not supported on Cosmostation'));
    }
    async getPubKey() {
        const { chainName } = this;
        const provider = await this.getProvider();
        try {
            const account = await provider.requestAccount(chainName);
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
            });
        }
    }
}
//# sourceMappingURL=Cosmostation.js.map