import {
  encodeSecp256k1Pubkey,
  makeSignDoc as makeSignDocAmino,
  StdFee,
} from '@cosmjs/amino';
import { fromBase64 } from '@cosmjs/encoding';
import { Int53, Uint53 } from '@cosmjs/math';
import {
  EncodeObject,
  encodePubkey,
  isOfflineDirectSigner,
  makeAuthInfoBytes,
  makeSignDoc,
  OfflineSigner,
  Registry,
  TxBodyEncodeObject,
} from '@cosmjs/proto-signing';
import {
  HttpEndpoint,
  Tendermint37Client,
  TendermintClient,
} from '@cosmjs/tendermint-rpc';
import { assert, assertDefined } from '@cosmjs/utils';

import { SignMode } from 'cosmjs-types/cosmos/tx/signing/v1beta1/signing';
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';

import { AminoConverters, AminoTypes } from '@cosmjs/stargate';
import { GasPrice } from '@cosmjs/stargate';

import {
  createAuthzAminoConverters,
  createBankAminoConverters,
  createDistributionAminoConverters,
  createFeegrantAminoConverters,
  createGovAminoConverters,
  createIbcAminoConverters,
  createStakingAminoConverters,
  createVestingAminoConverters,
} from '@cosmjs/stargate';
import {
  DeliverTxResponse,
  defaultRegistryTypes,
  StargateClientOptions,
} from '@cosmjs/stargate';
import { StargateClient } from './StargateClient';
import { getPublicKey } from './accountParser';
import {
  MsgExecuteContract,
  MsgInstantiateContract,
} from '@injectivelabs/core-proto-ts/cjs/cosmwasm/wasm/v1/tx';

/**
 * Signing information for a single signer that is not included in the transaction.
 *
 * @see https://github.com/cosmos/cosmos-sdk/blob/v0.42.2/x/auth/signing/sign_mode_handler.go#L23-L37
 */
export interface SignerData {
  readonly accountNumber: number;
  readonly sequence: number;
  readonly chainId: string;
}

export interface SigningStargateClientOptions extends StargateClientOptions {
  readonly registry?: Registry;
  readonly aminoTypes?: AminoTypes;
  readonly broadcastTimeoutMs?: number;
  readonly broadcastPollIntervalMs?: number;
  readonly gasPrice?: GasPrice;
}

export function createDefaultAminoConverters(): AminoConverters {
  return {
    ...createAuthzAminoConverters(),
    ...createBankAminoConverters(),
    ...createDistributionAminoConverters(),
    ...createGovAminoConverters(),
    ...createStakingAminoConverters(),
    ...createIbcAminoConverters(),
    ...createFeegrantAminoConverters(),
    ...createVestingAminoConverters(),
  };
}

export class SigningStargateClient extends StargateClient {
  public readonly registry: Registry;
  public readonly broadcastTimeoutMs: number | undefined;
  public readonly broadcastPollIntervalMs: number | undefined;

  protected readonly signer: OfflineSigner;
  protected readonly aminoTypes: AminoTypes;
  protected readonly gasPrice: GasPrice | undefined;

  /**
   * Creates an instance by connecting to the given Tendermint RPC endpoint.
   *
   * For now this uses the Tendermint 0.34 client. If you need Tendermint 0.37
   * support, see `createWithSigner`.
   */
  public static async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: SigningStargateClientOptions = {},
  ): Promise<SigningStargateClient> {
    const tmClient = await Tendermint37Client.connect(endpoint);
    return SigningStargateClient.createWithSigner(tmClient, signer, options);
  }

  /**
   * Creates an instance from a manually created Tendermint client.
   * Use this to use `Tendermint37Client` instead of `Tendermint34Client`.
   */
  public static async createWithSigner(
    tmClient: TendermintClient,
    signer: OfflineSigner,
    options: SigningStargateClientOptions = {},
  ): Promise<SigningStargateClient> {
    return new SigningStargateClient(tmClient, signer, options);
  }

  protected constructor(
    tmClient: TendermintClient | undefined,
    signer: OfflineSigner,
    options: SigningStargateClientOptions,
  ) {
    super(tmClient, options);
    const {
      registry = new Registry(defaultRegistryTypes),
      aminoTypes = new AminoTypes(createDefaultAminoConverters()),
    } = options;
    this.registry = registry;
    this.aminoTypes = aminoTypes;
    this.signer = signer;
    this.broadcastTimeoutMs = options.broadcastTimeoutMs;
    this.broadcastPollIntervalMs = options.broadcastPollIntervalMs;
    this.gasPrice = options.gasPrice;
    this.registry.register(
      '/cosmwasm.wasm.v1.MsgExecuteContract',
      MsgExecuteContract,
    );
    this.registry.register(
      '/cosmwasm.wasm.v1.MsgInstantiateContract',
      MsgInstantiateContract,
    );
  }

  public async simulate(
    signerAddress: string,
    messages: readonly EncodeObject[],
    memo: string | undefined,
  ): Promise<number> {
    const anyMsgs = messages.map((m) => this.registry.encodeAsAny(m));
    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress,
    );
    if (!accountFromSigner) {
      throw new Error('Failed to retrieve account from signer');
    }
    const pubkey = encodeSecp256k1Pubkey(accountFromSigner.pubkey);
    const { sequence } = await this.getSequence(signerAddress);
    const { gasInfo } = await this.forceGetQueryClient().tx.simulate(
      anyMsgs,
      memo,
      pubkey,
      sequence,
    );
    assertDefined(gasInfo);
    return Uint53.fromString(gasInfo?.gasUsed.toString()).toNumber();
  }

  public async signAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee | number,
    memo = '',
  ): Promise<DeliverTxResponse> {
    let usedFee = fee as StdFee;

    const txRaw = await this.sign(signerAddress, messages, usedFee, memo);
    const txBytes = TxRaw.encode(txRaw).finish();
    const response = await this.broadcastTx(
      txBytes,
      // this.broadcastTimeoutMs,
      // this.broadcastPollIntervalMs,
    );
    return response;
  }

  /**
   * Gets account number and sequence from the API, creates a sign doc,
   * creates a single signature and assembles the signed transaction.
   *
   * The sign mode (SIGN_MODE_DIRECT or SIGN_MODE_LEGACY_AMINO_JSON) is determined by this client's signer.
   *
   * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
   * from the chain. This is needed when signing for a multisig account, but it also allows for offline signing
   * (See the SigningStargateClient.offline constructor).
   */
  public async sign(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    explicitSignerData?: SignerData,
  ): Promise<TxRaw> {
    let signerData: SignerData;
    if (explicitSignerData) {
      signerData = explicitSignerData;
    } else {
      const { accountNumber, sequence } = await this.getSequence(signerAddress);
      const chainId = await this.getChainId();
      signerData = {
        accountNumber: accountNumber,
        sequence: sequence,
        chainId: chainId,
      };
    }

    return isOfflineDirectSigner(this.signer)
      ? this.signDirect(signerAddress, messages, fee, memo, signerData)
      : this.signAmino(signerAddress, messages, fee, memo, signerData);
  }

  protected async signAmino(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId }: SignerData,
  ): Promise<TxRaw> {
    assert(!isOfflineDirectSigner(this.signer));

    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress,
    );

    if (!accountFromSigner) {
      throw new Error('Failed to retrieve account from signer');
    }

    const pubkey = chainId.startsWith('injective')
      ? getPublicKey({
          chainId,
          key: Buffer.from(accountFromSigner.pubkey).toString('base64'),
        })
      : encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
    const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    const msgs = messages.map((msg) => this.aminoTypes.toAmino(msg));
    const signDoc = makeSignDocAmino(
      msgs,
      fee,
      chainId,
      memo,
      accountNumber,
      sequence,
    );
    const { signature, signed } = await this.signer.signAmino(
      signerAddress,
      signDoc,
    );
    const signedTxBody = {
      messages: signed.msgs.map((msg) => this.aminoTypes.fromAmino(msg)),
      memo: signed.memo,
    };
    const signedTxBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: '/cosmos.tx.v1beta1.TxBody',
      value: signedTxBody,
    };
    const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signed.sequence).toNumber();
    const signedAuthInfoBytes = makeAuthInfoBytes(
      [{ pubkey, sequence: signedSequence }],
      signed.fee.amount,
      signedGasLimit,
      signed.fee.granter,
      signed.fee.payer,
      signMode,
    );
    return TxRaw.fromPartial({
      bodyBytes: signedTxBodyBytes,
      authInfoBytes: signedAuthInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }

  protected async signDirect(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId }: SignerData,
  ): Promise<TxRaw> {
    assert(isOfflineDirectSigner(this.signer));

    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress,
    );

    if (!accountFromSigner) {
      throw new Error('Failed to retrieve account from signer');
    }

    const pubkey = chainId.startsWith('injective')
      ? getPublicKey({
          chainId,
          key: Buffer.from(accountFromSigner.pubkey).toString('base64'),
        })
      : encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));

    const txBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: '/cosmos.tx.v1beta1.TxBody',
      value: {
        messages: messages,
        memo: memo,
      },
    };
    const txBodyBytes = this.registry.encode(txBodyEncodeObject);
    const gasLimit = Int53.fromString(fee.gas).toNumber();
    const authInfoBytes = makeAuthInfoBytes(
      [{ pubkey, sequence }],
      fee.amount,
      gasLimit,
      fee.granter,
      fee.payer,
    );
    const signDoc = makeSignDoc(
      txBodyBytes,
      authInfoBytes,
      chainId,
      accountNumber,
    );
    const { signature, signed } = await this.signer.signDirect(
      signerAddress,
      signDoc,
    );
    return TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }
}
