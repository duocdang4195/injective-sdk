import { TokenPriceType } from './types';
import CoinGeckoPriceUtil from './CoinGeckoPriceUtil';
export class TokenPriceUtilFactory {
    static make(type, options) {
        switch (type) {
            case TokenPriceType.CoinGecko:
                return new CoinGeckoPriceUtil(options);
            default:
                return new CoinGeckoPriceUtil(options);
        }
    }
}
//# sourceMappingURL=TokenPriceUtilFactory.js.map