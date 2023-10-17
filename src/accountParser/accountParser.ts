import { Account } from '@cosmjs/stargate';
import { CosmosCryptoSecp256k1Keys, GoogleProtobufAny, InjectiveTypesV1Beta1Account } from '../core-proto-ts/cjs';

export const accountParser = (ethAccount: any): Account => {
  const account = InjectiveTypesV1Beta1Account.EthAccount.decode(
    ethAccount.value as Uint8Array,
  );
  const baseAccount = account.baseAccount!;
  const pubKey = baseAccount.pubKey;

  return {
    address: baseAccount.address,
    pubkey: pubKey
      ? {
          type: '/injective.crypto.v1beta1.ethsecp256k1.PubKey',
          value: Buffer.from(pubKey.value).toString('base64'),
        }
      : null,
    accountNumber: parseInt(baseAccount.accountNumber, 10),
    sequence: parseInt(baseAccount.sequence, 10),
  };
};

export const createAny = (value: any, type: string) => {
  const message = GoogleProtobufAny.Any.create();
  message.typeUrl = type;
  message.value = value;

  return message;
};

export const getPublicKey = ({
  chainId,
  key,
}: {
  chainId: string;
  key: string | GoogleProtobufAny.Any;
}) => {
  if (typeof key !== 'string') {
    return key;
  }

  let proto;
  let path;
  let baseProto;

  if (chainId.startsWith('injective')) {
    proto = CosmosCryptoSecp256k1Keys.PubKey.create();
    baseProto = CosmosCryptoSecp256k1Keys.PubKey;
    // path = '/injective.crypto.v1beta1.ethsecp256k1.PubKey';
    path = '/cosmos.crypto.secp256k1.PubKey';

  } else if (chainId.startsWith('evmos')) {
    proto = CosmosCryptoSecp256k1Keys.PubKey.create();
    baseProto = CosmosCryptoSecp256k1Keys.PubKey;
    path = '/ethermint.crypto.v1.ethsecp256k1.PubKey';
  } else {
    proto = CosmosCryptoSecp256k1Keys.PubKey.create();
    baseProto = CosmosCryptoSecp256k1Keys.PubKey;
    path = '/cosmos.crypto.secp256k1.PubKey';
  }

  proto.key = Buffer.from(key, 'base64');

  return createAny(baseProto.encode(proto).finish(), path);
};
