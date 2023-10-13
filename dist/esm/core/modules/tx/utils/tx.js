import { createAny, createAnyMessage } from './helpers';
import { CosmosTxV1Beta1Tx, CosmosBaseV1Beta1Coin, InjectiveTypesV1TxExt, CosmosCryptoSecp256k1Keys, } from '@injectivelabs/core-proto-ts';
import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
export const getPublicKey = ({ chainId, key, }) => {
    if (typeof key !== 'string') {
        return key;
    }
    let proto;
    let path;
    let baseProto;
    if (chainId.startsWith('injective')) {
        proto = CosmosCryptoSecp256k1Keys.PubKey.create();
        baseProto = CosmosCryptoSecp256k1Keys.PubKey;
        path = '/injective.crypto.v1beta1.ethsecp256k1.PubKey';
    }
    else if (chainId.startsWith('evmos')) {
        proto = CosmosCryptoSecp256k1Keys.PubKey.create();
        baseProto = CosmosCryptoSecp256k1Keys.PubKey;
        path = '/ethermint.crypto.v1.ethsecp256k1.PubKey';
    }
    else {
        proto = CosmosCryptoSecp256k1Keys.PubKey.create();
        baseProto = CosmosCryptoSecp256k1Keys.PubKey;
        path = '/cosmos.crypto.secp256k1.PubKey';
    }
    proto.key = Buffer.from(key, 'base64');
    return createAny(baseProto.encode(proto).finish(), path);
};
export const createBody = ({ message, memo = '', timeoutHeight, }) => {
    const messages = Array.isArray(message) ? message : [message];
    const txBody = CosmosTxV1Beta1Tx.TxBody.create();
    txBody.messages = messages.map((message) => createAnyMessage({
        value: message.toBinary(),
        type: message.toDirectSign().type,
    }));
    txBody.memo = memo;
    if (timeoutHeight) {
        txBody.timeoutHeight = timeoutHeight.toString();
    }
    return txBody;
};
export const createFee = ({ fee, payer, granter, gasLimit, }) => {
    const feeAmount = CosmosBaseV1Beta1Coin.Coin.create();
    feeAmount.amount = fee.amount;
    feeAmount.denom = fee.denom;
    const feeProto = CosmosTxV1Beta1Tx.Fee.create();
    feeProto.gasLimit = gasLimit.toString();
    feeProto.amount = [feeAmount];
    if (payer) {
        feeProto.payer = payer;
    }
    if (granter) {
        feeProto.granter = granter;
    }
    return feeProto;
};
export const createSigners = ({ chainId, mode, signers, }) => {
    return signers.map((s) => createSignerInfo({
        mode,
        chainId,
        publicKey: s.pubKey,
        sequence: s.sequence,
    }));
};
export const createSignerInfo = ({ chainId, publicKey, sequence, mode, }) => {
    const pubKey = getPublicKey({ chainId, key: publicKey });
    const single = CosmosTxV1Beta1Tx.ModeInfo_Single.create();
    single.mode = mode;
    const modeInfo = CosmosTxV1Beta1Tx.ModeInfo.create();
    modeInfo.single = single;
    const signerInfo = CosmosTxV1Beta1Tx.SignerInfo.create();
    signerInfo.publicKey = pubKey;
    signerInfo.sequence = sequence.toString();
    signerInfo.modeInfo = modeInfo;
    return signerInfo;
};
export const createAuthInfo = ({ signerInfo, fee, }) => {
    const authInfo = CosmosTxV1Beta1Tx.AuthInfo.create();
    authInfo.signerInfos = signerInfo;
    authInfo.fee = fee;
    return authInfo;
};
export const createSignDoc = ({ bodyBytes, authInfoBytes, chainId, accountNumber, }) => {
    const signDoc = CosmosTxV1Beta1Tx.SignDoc.create();
    signDoc.accountNumber = accountNumber.toString();
    signDoc.chainId = chainId;
    signDoc.bodyBytes = bodyBytes;
    signDoc.authInfoBytes = authInfoBytes;
    return signDoc;
};
export const createSignDocFromTransaction = (args) => {
    return CosmosTxV1Beta1Tx.SignDoc.fromPartial({
        bodyBytes: args.txRaw.bodyBytes,
        authInfoBytes: args.txRaw.authInfoBytes,
        accountNumber: args.accountNumber.toString(),
        chainId: args.chainId,
    });
};
export const createCosmosSignDocFromSignDoc = (signDoc) => {
    return SignDoc.fromPartial({
        bodyBytes: signDoc.bodyBytes,
        authInfoBytes: signDoc.authInfoBytes,
        accountNumber: signDoc.accountNumber,
        chainId: signDoc.chainId,
    });
};
export const createTxRawEIP712 = (txRaw, extension) => {
    const body = CosmosTxV1Beta1Tx.TxBody.decode(txRaw.bodyBytes);
    const extensionAny = createAny(InjectiveTypesV1TxExt.ExtensionOptionsWeb3Tx.encode(extension).finish(), '/injective.types.v1beta1.ExtensionOptionsWeb3Tx');
    body.extensionOptions = [extensionAny];
    txRaw.bodyBytes = CosmosTxV1Beta1Tx.TxBody.encode(body).finish();
    return txRaw;
};
export const createWeb3Extension = ({ ethereumChainId, feePayer, feePayerSig, }) => {
    const web3Extension = InjectiveTypesV1TxExt.ExtensionOptionsWeb3Tx.create();
    web3Extension.typedDataChainID = ethereumChainId.toString();
    if (feePayer) {
        web3Extension.feePayer = feePayer;
    }
    if (feePayerSig) {
        web3Extension.feePayerSig = feePayerSig;
    }
    return web3Extension;
};
export const getTransactionPartsFromTxRaw = (txRaw) => {
    const authInfo = CosmosTxV1Beta1Tx.AuthInfo.decode(txRaw.authInfoBytes);
    const body = CosmosTxV1Beta1Tx.TxBody.decode(txRaw.bodyBytes);
    return {
        body,
        authInfo,
        signatures: txRaw.signatures,
    };
};
//# sourceMappingURL=tx.js.map