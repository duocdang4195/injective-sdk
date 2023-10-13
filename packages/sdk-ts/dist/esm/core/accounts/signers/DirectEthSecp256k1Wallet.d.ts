import { DirectSignResponse } from '@cosmjs/proto-signing';
import { AccountData, OfflineDirectSigner } from './types/proto-signer';
import { CosmosTxV1Beta1Tx } from '@injectivelabs/core-proto-ts';
import Long from 'long';
export declare class DirectEthSecp256k1Wallet implements OfflineDirectSigner {
    /**
     * Creates a DirectEthSecp256k1Wallet from the given private key
     *
     * @param privKey The private key.
     * @param prefix The bech32 address prefix (human readable part). Defaults to "inj".
     */
    static fromKey(privKey: Uint8Array, prefix?: string): Promise<DirectEthSecp256k1Wallet>;
    private readonly privateKey;
    private readonly publicKey;
    private readonly prefix;
    private constructor();
    private get address();
    getAccounts(): Promise<readonly AccountData[]>;
    signDirect(address: string, signDoc: Omit<CosmosTxV1Beta1Tx.SignDoc, 'accountNumber'> & {
        accountNumber: Long;
    }): Promise<DirectSignResponse>;
}
//# sourceMappingURL=DirectEthSecp256k1Wallet.d.ts.map