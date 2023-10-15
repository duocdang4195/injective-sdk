import {
  Account,
  StargateClient as CosmjsStargateClient,
  accountFromAny,
} from '@cosmjs/stargate';

import { accountParser } from './accountParser';

export class StargateClient extends CosmjsStargateClient {
  public async getAccount(searchAddress: string): Promise<Account | null> {
    try {
      const chainId = await this.getChainId();
      const isInjective = chainId.startsWith('injective');
      const account = await this.forceGetQueryClient().auth.account(
        searchAddress,
      );

      if (!account) {
        return null;
      }

      if (isInjective) {
        return accountParser(account);
      }

      return accountFromAny(account);
    } catch (error: any) {
      if (/rpc error: code = NotFound/i.test(error.toString())) {
        return null;
      }

      throw error;
    }
  }
}
