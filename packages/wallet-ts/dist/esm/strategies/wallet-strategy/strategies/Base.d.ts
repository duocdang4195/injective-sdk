import { ChainId, EthereumChainId } from '@injectivelabs/ts-types';
import { WalletStrategyArguments } from '../../types';
export default abstract class BaseConcreteStrategy {
    protected chainId: ChainId;
    protected ethereumChainId?: EthereumChainId;
    protected constructor({ chainId, ethereumOptions }: WalletStrategyArguments);
}
//# sourceMappingURL=Base.d.ts.map