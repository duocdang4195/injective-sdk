import { Address } from './Address';
/**
 * @category Utility Classes
 */
export class BaseAccount extends Address {
    accountNumber;
    sequence;
    pubKey;
    constructor({ address, accountNumber, sequence, pubKey, }) {
        super(address);
        this.accountNumber = accountNumber;
        this.sequence = sequence;
        this.pubKey = pubKey;
    }
    static fromRestApi(accountResponse) {
        const { base_account: baseAccount } = accountResponse.account;
        return new BaseAccount({
            address: baseAccount.address,
            accountNumber: baseAccount.account_number
                ? parseInt(baseAccount.account_number, 10)
                : 0,
            sequence: baseAccount.sequence ? parseInt(baseAccount.sequence, 10) : 0,
            pubKey: baseAccount.pub_key
                ? {
                    type: baseAccount.pub_key['@type'],
                    key: baseAccount.pub_key.key,
                }
                : {
                    type: '',
                    key: '',
                },
        });
    }
    static fromRestCosmosApi(accountResponse) {
        return new BaseAccount({
            address: accountResponse.address,
            accountNumber: accountResponse.account_number
                ? parseInt(accountResponse.account_number, 10)
                : 0,
            sequence: accountResponse.sequence
                ? parseInt(accountResponse.sequence, 10)
                : 0,
            pubKey: accountResponse.pub_key
                ? {
                    type: accountResponse.pub_key['@type'],
                    key: accountResponse.pub_key.key,
                }
                : {
                    type: '',
                    key: '',
                },
        });
    }
    incrementSequence() {
        this.sequence += 1;
    }
    toAccountDetails() {
        return {
            address: this.bech32Address,
            pubKey: this.pubKey,
            accountNumber: this.accountNumber,
            sequence: this.sequence,
        };
    }
}
//# sourceMappingURL=BaseAccount.js.map