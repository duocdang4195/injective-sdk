"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_STD_FEE_BY_DENOM = exports.DEFAULT_STD_FEE = exports.INJ_NAME_REVERSE_RESOLVER_CONTRACT_BY_NETWORK = exports.INJ_NAME_REGISTRY_CONTRACT_BY_NETWORK = exports.CW20_SWAP_CONTRACT_BY_NETWORK = exports.CW20_ADAPTER_CONTRACT_BY_NETWORK = exports.DEFAULT_PAGINATION_TOTAL_COUNT = exports.PAGINATION_TOTAL_PAGE_LIMIT = exports.DUST_AMOUNT = exports.DEFAULT_DERIVATION_PATH = exports.BECH32_ADDR_CONS_PREFIX = exports.BECH32_ADDR_VAL_PREFIX = exports.BECH32_ADDR_ACC_PREFIX = exports.BECH32_PUBKEY_CONS_PREFIX = exports.BECH32_PUBKEY_VAL_PREFIX = exports.BECH32_PUBKEY_ACC_PREFIX = void 0;
const networks_1 = require("@injectivelabs/networks");
const utils_1 = require("@injectivelabs/utils");
Object.defineProperty(exports, "DEFAULT_STD_FEE", { enumerable: true, get: function () { return utils_1.DEFAULT_STD_FEE; } });
Object.defineProperty(exports, "DEFAULT_STD_FEE_BY_DENOM", { enumerable: true, get: function () { return utils_1.DEFAULT_STD_FEE_BY_DENOM; } });
exports.BECH32_PUBKEY_ACC_PREFIX = 'injpub';
exports.BECH32_PUBKEY_VAL_PREFIX = 'injvaloperpub';
exports.BECH32_PUBKEY_CONS_PREFIX = 'injvalconspub';
exports.BECH32_ADDR_ACC_PREFIX = 'inj';
exports.BECH32_ADDR_VAL_PREFIX = 'injvaloper';
exports.BECH32_ADDR_CONS_PREFIX = 'injvalcons';
exports.DEFAULT_DERIVATION_PATH = "m/44'/60'/0'/0/0";
exports.DUST_AMOUNT = 0.0001;
exports.PAGINATION_TOTAL_PAGE_LIMIT = 10000;
exports.DEFAULT_PAGINATION_TOTAL_COUNT = 1000000;
exports.CW20_ADAPTER_CONTRACT_BY_NETWORK = {
    [networks_1.Network.Mainnet]: 'inj14ejqjyq8um4p3xfqj74yld5waqljf88f9eneuk',
    [networks_1.Network.MainnetLB]: 'inj14ejqjyq8um4p3xfqj74yld5waqljf88f9eneuk',
    [networks_1.Network.MainnetK8s]: 'inj14ejqjyq8um4p3xfqj74yld5waqljf88f9eneuk',
    [networks_1.Network.Public]: 'inj14ejqjyq8um4p3xfqj74yld5waqljf88f9eneuk',
    [networks_1.Network.Staging]: 'inj14ejqjyq8um4p3xfqj74yld5waqljf88f9eneuk',
    [networks_1.Network.Internal]: 'inj14ejqjyq8um4p3xfqj74yld5waqljf88f9eneuk',
    [networks_1.Network.Testnet]: 'inj1hdvy6tl89llqy3ze8lv6mz5qh66sx9enn0jxg6',
    [networks_1.Network.TestnetK8s]: 'inj1hdvy6tl89llqy3ze8lv6mz5qh66sx9enn0jxg6',
    [networks_1.Network.TestnetSentry]: 'inj1hdvy6tl89llqy3ze8lv6mz5qh66sx9enn0jxg6',
    [networks_1.Network.TestnetOld]: 'inj1hdvy6tl89llqy3ze8lv6mz5qh66sx9enn0jxg6',
    [networks_1.Network.Devnet]: 'inj1hdvy6tl89llqy3ze8lv6mz5qh66sx9enn0jxg6',
    [networks_1.Network.Devnet1]: 'inj1hdvy6tl89llqy3ze8lv6mz5qh66sx9enn0jxg6',
    [networks_1.Network.Devnet2]: 'inj1hdvy6tl89llqy3ze8lv6mz5qh66sx9enn0jxg6',
    [networks_1.Network.Local]: 'inj1hdvy6tl89llqy3ze8lv6mz5qh66sx9enn0jxg6',
};
exports.CW20_SWAP_CONTRACT_BY_NETWORK = {
    [networks_1.Network.Mainnet]: 'inj1psk3468yr9teahgz73amwvpfjehnhczvkrhhqx',
    [networks_1.Network.MainnetLB]: 'inj1psk3468yr9teahgz73amwvpfjehnhczvkrhhqx',
    [networks_1.Network.MainnetK8s]: 'inj1psk3468yr9teahgz73amwvpfjehnhczvkrhhqx',
    [networks_1.Network.Public]: 'inj1psk3468yr9teahgz73amwvpfjehnhczvkrhhqx',
    [networks_1.Network.Staging]: 'inj1psk3468yr9teahgz73amwvpfjehnhczvkrhhqx',
    [networks_1.Network.Internal]: 'inj1psk3468yr9teahgz73amwvpfjehnhczvkrhhqx',
    [networks_1.Network.Testnet]: 'inj14d7h5j6ddq6pqppl65z24w7xrtmpcrqjxj8d43',
    [networks_1.Network.TestnetK8s]: 'inj14d7h5j6ddq6pqppl65z24w7xrtmpcrqjxj8d43',
    [networks_1.Network.TestnetSentry]: 'inj14d7h5j6ddq6pqppl65z24w7xrtmpcrqjxj8d43',
    [networks_1.Network.TestnetOld]: 'inj14d7h5j6ddq6pqppl65z24w7xrtmpcrqjxj8d43',
    [networks_1.Network.Devnet]: 'inj177yh38g3ctu7cemxpa3c2kvwh2yslfxfmfa66h',
    [networks_1.Network.Devnet1]: 'inj177yh38g3ctu7cemxpa3c2kvwh2yslfxfmfa66h',
    [networks_1.Network.Devnet2]: 'inj177yh38g3ctu7cemxpa3c2kvwh2yslfxfmfa66h',
    [networks_1.Network.Local]: 'inj177yh38g3ctu7cemxpa3c2kvwh2yslfxfmfa66h',
};
exports.INJ_NAME_REGISTRY_CONTRACT_BY_NETWORK = {
    [networks_1.Network.Mainnet]: 'inj1hm8vs8sr2h9nk0x66vctfs528wrp6k3gtgg275',
    [networks_1.Network.MainnetLB]: 'inj1hm8vs8sr2h9nk0x66vctfs528wrp6k3gtgg275',
    [networks_1.Network.MainnetK8s]: 'inj1hm8vs8sr2h9nk0x66vctfs528wrp6k3gtgg275',
    [networks_1.Network.Public]: 'inj1hm8vs8sr2h9nk0x66vctfs528wrp6k3gtgg275',
    [networks_1.Network.Staging]: 'inj1hm8vs8sr2h9nk0x66vctfs528wrp6k3gtgg275',
    [networks_1.Network.Internal]: 'inj1hm8vs8sr2h9nk0x66vctfs528wrp6k3gtgg275',
    [networks_1.Network.Testnet]: 'inj1aw59rkpd9afp2ws6rx23nz5mrvq8dlckeslwfa',
    [networks_1.Network.TestnetK8s]: 'inj1aw59rkpd9afp2ws6rx23nz5mrvq8dlckeslwfa',
    [networks_1.Network.TestnetSentry]: 'inj1aw59rkpd9afp2ws6rx23nz5mrvq8dlckeslwfa',
    [networks_1.Network.TestnetOld]: 'inj1aw59rkpd9afp2ws6rx23nz5mrvq8dlckeslwfa',
    [networks_1.Network.Devnet]: 'inj1aw59rkpd9afp2ws6rx23nz5mrvq8dlckeslwfa',
    [networks_1.Network.Devnet1]: 'inj1aw59rkpd9afp2ws6rx23nz5mrvq8dlckeslwfa',
    [networks_1.Network.Devnet2]: 'inj1aw59rkpd9afp2ws6rx23nz5mrvq8dlckeslwfa',
    [networks_1.Network.Local]: 'inj1aw59rkpd9afp2ws6rx23nz5mrvq8dlckeslwfa',
};
exports.INJ_NAME_REVERSE_RESOLVER_CONTRACT_BY_NETWORK = {
    [networks_1.Network.Mainnet]: 'inj1x9m0hceug9qylcyrrtwqtytslv2jrph433thgu',
    [networks_1.Network.MainnetLB]: 'inj1x9m0hceug9qylcyrrtwqtytslv2jrph433thgu',
    [networks_1.Network.MainnetK8s]: 'inj1x9m0hceug9qylcyrrtwqtytslv2jrph433thgu',
    [networks_1.Network.Public]: 'inj1x9m0hceug9qylcyrrtwqtytslv2jrph433thgu',
    [networks_1.Network.Staging]: 'inj1x9m0hceug9qylcyrrtwqtytslv2jrph433thgu',
    [networks_1.Network.Internal]: 'inj1x9m0hceug9qylcyrrtwqtytslv2jrph433thgu',
    [networks_1.Network.Testnet]: 'inj1knf6puyscuuqqhgqglskfc0k99d4885qw5uv7v',
    [networks_1.Network.TestnetK8s]: 'inj1knf6puyscuuqqhgqglskfc0k99d4885qw5uv7v',
    [networks_1.Network.TestnetSentry]: 'inj1knf6puyscuuqqhgqglskfc0k99d4885qw5uv7v',
    [networks_1.Network.TestnetOld]: 'inj1knf6puyscuuqqhgqglskfc0k99d4885qw5uv7v',
    [networks_1.Network.Devnet]: 'inj1knf6puyscuuqqhgqglskfc0k99d4885qw5uv7v',
    [networks_1.Network.Devnet1]: 'inj1knf6puyscuuqqhgqglskfc0k99d4885qw5uv7v',
    [networks_1.Network.Devnet2]: 'inj1knf6puyscuuqqhgqglskfc0k99d4885qw5uv7v',
    [networks_1.Network.Local]: 'inj1knf6puyscuuqqhgqglskfc0k99d4885qw5uv7v',
};
//# sourceMappingURL=constants.js.map