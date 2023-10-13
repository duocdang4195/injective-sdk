import { TypedMessage, MessageTypes } from '@metamask/eth-sig-util';
/**
 * Calculates the domain_separator_hash and message_hash from an EIP-712 Typed Data object.
 *
 * The Trezor Model 1 does not currently support constructing the hash on the device,
 * so this function pre-computes them.
 *
 * @template {TypedMessage} T
 * @param {T} data - The EIP-712 Typed Data object.
 * @param {boolean} metamask_v4_compat - Set to `true` for compatibility with Metamask's signTypedData_v4 function.
 * @returns {{domain_separator_hash: string, message_hash?: string} & T} The hashes.
 */
export declare const transformTypedData: <T extends TypedMessage<MessageTypes>>(data: T, metamask_v4_compat?: boolean) => {
    domain_separator_hash: string;
    message_hash?: string | undefined;
} & T;
//# sourceMappingURL=utils.d.ts.map