import { StargateClient as CosmjsStargateClient, accountFromAny, } from '@cosmjs/stargate';
import { injectiveAccountParser } from '../accounts';
export class StargateClient extends CosmjsStargateClient {
    async getAccount(searchAddress) {
        try {
            const chainId = await this.getChainId();
            const isInjective = chainId.startsWith('injective');
            const account = await this.forceGetQueryClient().auth.account(searchAddress);
            if (!account) {
                return null;
            }
            if (isInjective) {
                return injectiveAccountParser(account);
            }
            return accountFromAny(account);
        }
        catch (error) {
            if (/rpc error: code = NotFound/i.test(error.toString())) {
                return null;
            }
            throw error;
        }
    }
}
//# sourceMappingURL=StargateClient.js.map