import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
import { PublicKey } from "../crypto/keys";
import { ProofOps } from "../crypto/proof";
import { EvidenceParams, ValidatorParams, VersionParams } from "../types/params";
import { Header } from "../types/types";
export declare enum CheckTxType {
    NEW = 0,
    RECHECK = 1,
    UNRECOGNIZED = -1
}
export declare function checkTxTypeFromJSON(object: any): CheckTxType;
export declare function checkTxTypeToJSON(object: CheckTxType): string;
export declare enum EvidenceType {
    UNKNOWN = 0,
    DUPLICATE_VOTE = 1,
    LIGHT_CLIENT_ATTACK = 2,
    UNRECOGNIZED = -1
}
export declare function evidenceTypeFromJSON(object: any): EvidenceType;
export declare function evidenceTypeToJSON(object: EvidenceType): string;
export interface Request {
    echo?: RequestEcho | undefined;
    flush?: RequestFlush | undefined;
    info?: RequestInfo | undefined;
    setOption?: RequestSetOption | undefined;
    initChain?: RequestInitChain | undefined;
    query?: RequestQuery | undefined;
    beginBlock?: RequestBeginBlock | undefined;
    checkTx?: RequestCheckTx | undefined;
    deliverTx?: RequestDeliverTx | undefined;
    endBlock?: RequestEndBlock | undefined;
    commit?: RequestCommit | undefined;
    listSnapshots?: RequestListSnapshots | undefined;
    offerSnapshot?: RequestOfferSnapshot | undefined;
    loadSnapshotChunk?: RequestLoadSnapshotChunk | undefined;
    applySnapshotChunk?: RequestApplySnapshotChunk | undefined;
}
export interface RequestEcho {
    message: string;
}
export interface RequestFlush {
}
export interface RequestInfo {
    version: string;
    blockVersion: string;
    p2pVersion: string;
}
/** nondeterministic */
export interface RequestSetOption {
    key: string;
    value: string;
}
export interface RequestInitChain {
    time: Date | undefined;
    chainId: string;
    consensusParams: ConsensusParams | undefined;
    validators: ValidatorUpdate[];
    appStateBytes: Uint8Array;
    initialHeight: string;
}
export interface RequestQuery {
    data: Uint8Array;
    path: string;
    height: string;
    prove: boolean;
}
export interface RequestBeginBlock {
    hash: Uint8Array;
    header: Header | undefined;
    lastCommitInfo: LastCommitInfo | undefined;
    byzantineValidators: Evidence[];
}
export interface RequestCheckTx {
    tx: Uint8Array;
    type: CheckTxType;
}
export interface RequestDeliverTx {
    tx: Uint8Array;
}
export interface RequestEndBlock {
    height: string;
}
export interface RequestCommit {
}
/** lists available snapshots */
export interface RequestListSnapshots {
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
    /** snapshot offered by peers */
    snapshot: Snapshot | undefined;
    /** light client-verified app hash for snapshot height */
    appHash: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
    height: string;
    format: number;
    chunk: number;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
export interface Response {
    exception?: ResponseException | undefined;
    echo?: ResponseEcho | undefined;
    flush?: ResponseFlush | undefined;
    info?: ResponseInfo | undefined;
    setOption?: ResponseSetOption | undefined;
    initChain?: ResponseInitChain | undefined;
    query?: ResponseQuery | undefined;
    beginBlock?: ResponseBeginBlock | undefined;
    checkTx?: ResponseCheckTx | undefined;
    deliverTx?: ResponseDeliverTx | undefined;
    endBlock?: ResponseEndBlock | undefined;
    commit?: ResponseCommit | undefined;
    listSnapshots?: ResponseListSnapshots | undefined;
    offerSnapshot?: ResponseOfferSnapshot | undefined;
    loadSnapshotChunk?: ResponseLoadSnapshotChunk | undefined;
    applySnapshotChunk?: ResponseApplySnapshotChunk | undefined;
}
/** nondeterministic */
export interface ResponseException {
    error: string;
}
export interface ResponseEcho {
    message: string;
}
export interface ResponseFlush {
}
export interface ResponseInfo {
    data: string;
    version: string;
    appVersion: string;
    lastBlockHeight: string;
    lastBlockAppHash: Uint8Array;
}
/** nondeterministic */
export interface ResponseSetOption {
    code: number;
    /** bytes data = 2; */
    log: string;
    info: string;
}
export interface ResponseInitChain {
    consensusParams: ConsensusParams | undefined;
    validators: ValidatorUpdate[];
    appHash: Uint8Array;
}
export interface ResponseQuery {
    code: number;
    /** bytes data = 2; // use "value" instead. */
    log: string;
    /** nondeterministic */
    info: string;
    index: string;
    key: Uint8Array;
    value: Uint8Array;
    proofOps: ProofOps | undefined;
    height: string;
    codespace: string;
}
export interface ResponseBeginBlock {
    events: Event[];
}
export interface ResponseCheckTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: string;
    gasUsed: string;
    events: Event[];
    codespace: string;
    sender: string;
    priority: string;
    /**
     * mempool_error is set by Tendermint.
     * ABCI applictions creating a ResponseCheckTX should not set mempool_error.
     */
    mempoolError: string;
}
export interface ResponseDeliverTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: string;
    gasUsed: string;
    /** nondeterministic */
    events: Event[];
    codespace: string;
}
export interface ResponseEndBlock {
    validatorUpdates: ValidatorUpdate[];
    consensusParamUpdates: ConsensusParams | undefined;
    events: Event[];
}
export interface ResponseCommit {
    /** reserve 1 */
    data: Uint8Array;
    retainHeight: string;
}
export interface ResponseListSnapshots {
    snapshots: Snapshot[];
}
export interface ResponseOfferSnapshot {
    result: ResponseOfferSnapshot_Result;
}
export declare enum ResponseOfferSnapshot_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Snapshot accepted, apply chunks */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** REJECT - Reject this specific snapshot, try others */
    REJECT = 3,
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    REJECT_FORMAT = 4,
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    REJECT_SENDER = 5,
    UNRECOGNIZED = -1
}
export declare function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string;
export interface ResponseLoadSnapshotChunk {
    chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
    result: ResponseApplySnapshotChunk_Result;
    /** Chunks to refetch and reapply */
    refetchChunks: number[];
    /** Chunk senders to reject and ban */
    rejectSenders: string[];
}
export declare enum ResponseApplySnapshotChunk_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Chunk successfully accepted */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** RETRY - Retry chunk (combine with refetch and reject) */
    RETRY = 3,
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    RETRY_SNAPSHOT = 4,
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    REJECT_SNAPSHOT = 5,
    UNRECOGNIZED = -1
}
export declare function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string;
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParams {
    block: BlockParams | undefined;
    evidence: EvidenceParams | undefined;
    validator: ValidatorParams | undefined;
    version: VersionParams | undefined;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /** Note: must be greater than 0 */
    maxBytes: string;
    /** Note: must be greater or equal to -1 */
    maxGas: string;
}
export interface LastCommitInfo {
    round: number;
    votes: VoteInfo[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
    type: string;
    attributes: EventAttribute[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
    key: Uint8Array;
    value: Uint8Array;
    /** nondeterministic */
    index: boolean;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResult {
    height: string;
    index: number;
    tx: Uint8Array;
    result: ResponseDeliverTx | undefined;
}
/** Validator */
export interface Validator {
    /** The first 20 bytes of SHA256(public key) */
    address: Uint8Array;
    /** PubKey pub_key = 2 [(gogoproto.nullable)=false]; */
    power: string;
}
/** ValidatorUpdate */
export interface ValidatorUpdate {
    pubKey: PublicKey | undefined;
    power: string;
}
/** VoteInfo */
export interface VoteInfo {
    validator: Validator | undefined;
    signedLastBlock: boolean;
}
export interface Evidence {
    type: EvidenceType;
    /** The offending validator */
    validator: Validator | undefined;
    /** The height when the offense occurred */
    height: string;
    /** The corresponding time where the offense occurred */
    time: Date | undefined;
    /**
     * Total voting power of the validator set in case the ABCI application does
     * not store historical validators.
     * https://github.com/tendermint/tendermint/issues/4581
     */
    totalVotingPower: string;
}
export interface Snapshot {
    /** The height at which the snapshot was taken */
    height: string;
    /** The application-specific snapshot format */
    format: number;
    /** Number of chunks in the snapshot */
    chunks: number;
    /** Arbitrary snapshot hash, equal only if identical */
    hash: Uint8Array;
    /** Arbitrary application metadata */
    metadata: Uint8Array;
}
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    create(base?: DeepPartial<Request>): Request;
    fromPartial(object: DeepPartial<Request>): Request;
};
export declare const RequestEcho: {
    encode(message: RequestEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEcho;
    fromJSON(object: any): RequestEcho;
    toJSON(message: RequestEcho): unknown;
    create(base?: DeepPartial<RequestEcho>): RequestEcho;
    fromPartial(object: DeepPartial<RequestEcho>): RequestEcho;
};
export declare const RequestFlush: {
    encode(_: RequestFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestFlush;
    fromJSON(_: any): RequestFlush;
    toJSON(_: RequestFlush): unknown;
    create(base?: DeepPartial<RequestFlush>): RequestFlush;
    fromPartial(_: DeepPartial<RequestFlush>): RequestFlush;
};
export declare const RequestInfo: {
    encode(message: RequestInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo;
    fromJSON(object: any): RequestInfo;
    toJSON(message: RequestInfo): unknown;
    create(base?: DeepPartial<RequestInfo>): RequestInfo;
    fromPartial(object: DeepPartial<RequestInfo>): RequestInfo;
};
export declare const RequestSetOption: {
    encode(message: RequestSetOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestSetOption;
    fromJSON(object: any): RequestSetOption;
    toJSON(message: RequestSetOption): unknown;
    create(base?: DeepPartial<RequestSetOption>): RequestSetOption;
    fromPartial(object: DeepPartial<RequestSetOption>): RequestSetOption;
};
export declare const RequestInitChain: {
    encode(message: RequestInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInitChain;
    fromJSON(object: any): RequestInitChain;
    toJSON(message: RequestInitChain): unknown;
    create(base?: DeepPartial<RequestInitChain>): RequestInitChain;
    fromPartial(object: DeepPartial<RequestInitChain>): RequestInitChain;
};
export declare const RequestQuery: {
    encode(message: RequestQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuery;
    fromJSON(object: any): RequestQuery;
    toJSON(message: RequestQuery): unknown;
    create(base?: DeepPartial<RequestQuery>): RequestQuery;
    fromPartial(object: DeepPartial<RequestQuery>): RequestQuery;
};
export declare const RequestBeginBlock: {
    encode(message: RequestBeginBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestBeginBlock;
    fromJSON(object: any): RequestBeginBlock;
    toJSON(message: RequestBeginBlock): unknown;
    create(base?: DeepPartial<RequestBeginBlock>): RequestBeginBlock;
    fromPartial(object: DeepPartial<RequestBeginBlock>): RequestBeginBlock;
};
export declare const RequestCheckTx: {
    encode(message: RequestCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCheckTx;
    fromJSON(object: any): RequestCheckTx;
    toJSON(message: RequestCheckTx): unknown;
    create(base?: DeepPartial<RequestCheckTx>): RequestCheckTx;
    fromPartial(object: DeepPartial<RequestCheckTx>): RequestCheckTx;
};
export declare const RequestDeliverTx: {
    encode(message: RequestDeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestDeliverTx;
    fromJSON(object: any): RequestDeliverTx;
    toJSON(message: RequestDeliverTx): unknown;
    create(base?: DeepPartial<RequestDeliverTx>): RequestDeliverTx;
    fromPartial(object: DeepPartial<RequestDeliverTx>): RequestDeliverTx;
};
export declare const RequestEndBlock: {
    encode(message: RequestEndBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEndBlock;
    fromJSON(object: any): RequestEndBlock;
    toJSON(message: RequestEndBlock): unknown;
    create(base?: DeepPartial<RequestEndBlock>): RequestEndBlock;
    fromPartial(object: DeepPartial<RequestEndBlock>): RequestEndBlock;
};
export declare const RequestCommit: {
    encode(_: RequestCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCommit;
    fromJSON(_: any): RequestCommit;
    toJSON(_: RequestCommit): unknown;
    create(base?: DeepPartial<RequestCommit>): RequestCommit;
    fromPartial(_: DeepPartial<RequestCommit>): RequestCommit;
};
export declare const RequestListSnapshots: {
    encode(_: RequestListSnapshots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestListSnapshots;
    fromJSON(_: any): RequestListSnapshots;
    toJSON(_: RequestListSnapshots): unknown;
    create(base?: DeepPartial<RequestListSnapshots>): RequestListSnapshots;
    fromPartial(_: DeepPartial<RequestListSnapshots>): RequestListSnapshots;
};
export declare const RequestOfferSnapshot: {
    encode(message: RequestOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestOfferSnapshot;
    fromJSON(object: any): RequestOfferSnapshot;
    toJSON(message: RequestOfferSnapshot): unknown;
    create(base?: DeepPartial<RequestOfferSnapshot>): RequestOfferSnapshot;
    fromPartial(object: DeepPartial<RequestOfferSnapshot>): RequestOfferSnapshot;
};
export declare const RequestLoadSnapshotChunk: {
    encode(message: RequestLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestLoadSnapshotChunk;
    fromJSON(object: any): RequestLoadSnapshotChunk;
    toJSON(message: RequestLoadSnapshotChunk): unknown;
    create(base?: DeepPartial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk;
    fromPartial(object: DeepPartial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk;
};
export declare const RequestApplySnapshotChunk: {
    encode(message: RequestApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestApplySnapshotChunk;
    fromJSON(object: any): RequestApplySnapshotChunk;
    toJSON(message: RequestApplySnapshotChunk): unknown;
    create(base?: DeepPartial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk;
    fromPartial(object: DeepPartial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    create(base?: DeepPartial<Response>): Response;
    fromPartial(object: DeepPartial<Response>): Response;
};
export declare const ResponseException: {
    encode(message: ResponseException, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseException;
    fromJSON(object: any): ResponseException;
    toJSON(message: ResponseException): unknown;
    create(base?: DeepPartial<ResponseException>): ResponseException;
    fromPartial(object: DeepPartial<ResponseException>): ResponseException;
};
export declare const ResponseEcho: {
    encode(message: ResponseEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEcho;
    fromJSON(object: any): ResponseEcho;
    toJSON(message: ResponseEcho): unknown;
    create(base?: DeepPartial<ResponseEcho>): ResponseEcho;
    fromPartial(object: DeepPartial<ResponseEcho>): ResponseEcho;
};
export declare const ResponseFlush: {
    encode(_: ResponseFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFlush;
    fromJSON(_: any): ResponseFlush;
    toJSON(_: ResponseFlush): unknown;
    create(base?: DeepPartial<ResponseFlush>): ResponseFlush;
    fromPartial(_: DeepPartial<ResponseFlush>): ResponseFlush;
};
export declare const ResponseInfo: {
    encode(message: ResponseInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInfo;
    fromJSON(object: any): ResponseInfo;
    toJSON(message: ResponseInfo): unknown;
    create(base?: DeepPartial<ResponseInfo>): ResponseInfo;
    fromPartial(object: DeepPartial<ResponseInfo>): ResponseInfo;
};
export declare const ResponseSetOption: {
    encode(message: ResponseSetOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseSetOption;
    fromJSON(object: any): ResponseSetOption;
    toJSON(message: ResponseSetOption): unknown;
    create(base?: DeepPartial<ResponseSetOption>): ResponseSetOption;
    fromPartial(object: DeepPartial<ResponseSetOption>): ResponseSetOption;
};
export declare const ResponseInitChain: {
    encode(message: ResponseInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInitChain;
    fromJSON(object: any): ResponseInitChain;
    toJSON(message: ResponseInitChain): unknown;
    create(base?: DeepPartial<ResponseInitChain>): ResponseInitChain;
    fromPartial(object: DeepPartial<ResponseInitChain>): ResponseInitChain;
};
export declare const ResponseQuery: {
    encode(message: ResponseQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuery;
    fromJSON(object: any): ResponseQuery;
    toJSON(message: ResponseQuery): unknown;
    create(base?: DeepPartial<ResponseQuery>): ResponseQuery;
    fromPartial(object: DeepPartial<ResponseQuery>): ResponseQuery;
};
export declare const ResponseBeginBlock: {
    encode(message: ResponseBeginBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBeginBlock;
    fromJSON(object: any): ResponseBeginBlock;
    toJSON(message: ResponseBeginBlock): unknown;
    create(base?: DeepPartial<ResponseBeginBlock>): ResponseBeginBlock;
    fromPartial(object: DeepPartial<ResponseBeginBlock>): ResponseBeginBlock;
};
export declare const ResponseCheckTx: {
    encode(message: ResponseCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTx;
    fromJSON(object: any): ResponseCheckTx;
    toJSON(message: ResponseCheckTx): unknown;
    create(base?: DeepPartial<ResponseCheckTx>): ResponseCheckTx;
    fromPartial(object: DeepPartial<ResponseCheckTx>): ResponseCheckTx;
};
export declare const ResponseDeliverTx: {
    encode(message: ResponseDeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseDeliverTx;
    fromJSON(object: any): ResponseDeliverTx;
    toJSON(message: ResponseDeliverTx): unknown;
    create(base?: DeepPartial<ResponseDeliverTx>): ResponseDeliverTx;
    fromPartial(object: DeepPartial<ResponseDeliverTx>): ResponseDeliverTx;
};
export declare const ResponseEndBlock: {
    encode(message: ResponseEndBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEndBlock;
    fromJSON(object: any): ResponseEndBlock;
    toJSON(message: ResponseEndBlock): unknown;
    create(base?: DeepPartial<ResponseEndBlock>): ResponseEndBlock;
    fromPartial(object: DeepPartial<ResponseEndBlock>): ResponseEndBlock;
};
export declare const ResponseCommit: {
    encode(message: ResponseCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCommit;
    fromJSON(object: any): ResponseCommit;
    toJSON(message: ResponseCommit): unknown;
    create(base?: DeepPartial<ResponseCommit>): ResponseCommit;
    fromPartial(object: DeepPartial<ResponseCommit>): ResponseCommit;
};
export declare const ResponseListSnapshots: {
    encode(message: ResponseListSnapshots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseListSnapshots;
    fromJSON(object: any): ResponseListSnapshots;
    toJSON(message: ResponseListSnapshots): unknown;
    create(base?: DeepPartial<ResponseListSnapshots>): ResponseListSnapshots;
    fromPartial(object: DeepPartial<ResponseListSnapshots>): ResponseListSnapshots;
};
export declare const ResponseOfferSnapshot: {
    encode(message: ResponseOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseOfferSnapshot;
    fromJSON(object: any): ResponseOfferSnapshot;
    toJSON(message: ResponseOfferSnapshot): unknown;
    create(base?: DeepPartial<ResponseOfferSnapshot>): ResponseOfferSnapshot;
    fromPartial(object: DeepPartial<ResponseOfferSnapshot>): ResponseOfferSnapshot;
};
export declare const ResponseLoadSnapshotChunk: {
    encode(message: ResponseLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseLoadSnapshotChunk;
    fromJSON(object: any): ResponseLoadSnapshotChunk;
    toJSON(message: ResponseLoadSnapshotChunk): unknown;
    create(base?: DeepPartial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk;
    fromPartial(object: DeepPartial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk;
};
export declare const ResponseApplySnapshotChunk: {
    encode(message: ResponseApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseApplySnapshotChunk;
    fromJSON(object: any): ResponseApplySnapshotChunk;
    toJSON(message: ResponseApplySnapshotChunk): unknown;
    create(base?: DeepPartial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk;
    fromPartial(object: DeepPartial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk;
};
export declare const ConsensusParams: {
    encode(message: ConsensusParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams;
    fromJSON(object: any): ConsensusParams;
    toJSON(message: ConsensusParams): unknown;
    create(base?: DeepPartial<ConsensusParams>): ConsensusParams;
    fromPartial(object: DeepPartial<ConsensusParams>): ConsensusParams;
};
export declare const BlockParams: {
    encode(message: BlockParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams;
    fromJSON(object: any): BlockParams;
    toJSON(message: BlockParams): unknown;
    create(base?: DeepPartial<BlockParams>): BlockParams;
    fromPartial(object: DeepPartial<BlockParams>): BlockParams;
};
export declare const LastCommitInfo: {
    encode(message: LastCommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastCommitInfo;
    fromJSON(object: any): LastCommitInfo;
    toJSON(message: LastCommitInfo): unknown;
    create(base?: DeepPartial<LastCommitInfo>): LastCommitInfo;
    fromPartial(object: DeepPartial<LastCommitInfo>): LastCommitInfo;
};
export declare const Event: {
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event;
    fromJSON(object: any): Event;
    toJSON(message: Event): unknown;
    create(base?: DeepPartial<Event>): Event;
    fromPartial(object: DeepPartial<Event>): Event;
};
export declare const EventAttribute: {
    encode(message: EventAttribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAttribute;
    fromJSON(object: any): EventAttribute;
    toJSON(message: EventAttribute): unknown;
    create(base?: DeepPartial<EventAttribute>): EventAttribute;
    fromPartial(object: DeepPartial<EventAttribute>): EventAttribute;
};
export declare const TxResult: {
    encode(message: TxResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResult;
    fromJSON(object: any): TxResult;
    toJSON(message: TxResult): unknown;
    create(base?: DeepPartial<TxResult>): TxResult;
    fromPartial(object: DeepPartial<TxResult>): TxResult;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    create(base?: DeepPartial<Validator>): Validator;
    fromPartial(object: DeepPartial<Validator>): Validator;
};
export declare const ValidatorUpdate: {
    encode(message: ValidatorUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate;
    fromJSON(object: any): ValidatorUpdate;
    toJSON(message: ValidatorUpdate): unknown;
    create(base?: DeepPartial<ValidatorUpdate>): ValidatorUpdate;
    fromPartial(object: DeepPartial<ValidatorUpdate>): ValidatorUpdate;
};
export declare const VoteInfo: {
    encode(message: VoteInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteInfo;
    fromJSON(object: any): VoteInfo;
    toJSON(message: VoteInfo): unknown;
    create(base?: DeepPartial<VoteInfo>): VoteInfo;
    fromPartial(object: DeepPartial<VoteInfo>): VoteInfo;
};
export declare const Evidence: {
    encode(message: Evidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Evidence;
    fromJSON(object: any): Evidence;
    toJSON(message: Evidence): unknown;
    create(base?: DeepPartial<Evidence>): Evidence;
    fromPartial(object: DeepPartial<Evidence>): Evidence;
};
export declare const Snapshot: {
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot;
    fromJSON(object: any): Snapshot;
    toJSON(message: Snapshot): unknown;
    create(base?: DeepPartial<Snapshot>): Snapshot;
    fromPartial(object: DeepPartial<Snapshot>): Snapshot;
};
export interface ABCIApplication {
    Echo(request: DeepPartial<RequestEcho>, metadata?: grpc.Metadata): Promise<ResponseEcho>;
    Flush(request: DeepPartial<RequestFlush>, metadata?: grpc.Metadata): Promise<ResponseFlush>;
    Info(request: DeepPartial<RequestInfo>, metadata?: grpc.Metadata): Promise<ResponseInfo>;
    SetOption(request: DeepPartial<RequestSetOption>, metadata?: grpc.Metadata): Promise<ResponseSetOption>;
    DeliverTx(request: DeepPartial<RequestDeliverTx>, metadata?: grpc.Metadata): Promise<ResponseDeliverTx>;
    CheckTx(request: DeepPartial<RequestCheckTx>, metadata?: grpc.Metadata): Promise<ResponseCheckTx>;
    Query(request: DeepPartial<RequestQuery>, metadata?: grpc.Metadata): Promise<ResponseQuery>;
    Commit(request: DeepPartial<RequestCommit>, metadata?: grpc.Metadata): Promise<ResponseCommit>;
    InitChain(request: DeepPartial<RequestInitChain>, metadata?: grpc.Metadata): Promise<ResponseInitChain>;
    BeginBlock(request: DeepPartial<RequestBeginBlock>, metadata?: grpc.Metadata): Promise<ResponseBeginBlock>;
    EndBlock(request: DeepPartial<RequestEndBlock>, metadata?: grpc.Metadata): Promise<ResponseEndBlock>;
    ListSnapshots(request: DeepPartial<RequestListSnapshots>, metadata?: grpc.Metadata): Promise<ResponseListSnapshots>;
    OfferSnapshot(request: DeepPartial<RequestOfferSnapshot>, metadata?: grpc.Metadata): Promise<ResponseOfferSnapshot>;
    LoadSnapshotChunk(request: DeepPartial<RequestLoadSnapshotChunk>, metadata?: grpc.Metadata): Promise<ResponseLoadSnapshotChunk>;
    ApplySnapshotChunk(request: DeepPartial<RequestApplySnapshotChunk>, metadata?: grpc.Metadata): Promise<ResponseApplySnapshotChunk>;
}
export declare class ABCIApplicationClientImpl implements ABCIApplication {
    private readonly rpc;
    constructor(rpc: Rpc);
    Echo(request: DeepPartial<RequestEcho>, metadata?: grpc.Metadata): Promise<ResponseEcho>;
    Flush(request: DeepPartial<RequestFlush>, metadata?: grpc.Metadata): Promise<ResponseFlush>;
    Info(request: DeepPartial<RequestInfo>, metadata?: grpc.Metadata): Promise<ResponseInfo>;
    SetOption(request: DeepPartial<RequestSetOption>, metadata?: grpc.Metadata): Promise<ResponseSetOption>;
    DeliverTx(request: DeepPartial<RequestDeliverTx>, metadata?: grpc.Metadata): Promise<ResponseDeliverTx>;
    CheckTx(request: DeepPartial<RequestCheckTx>, metadata?: grpc.Metadata): Promise<ResponseCheckTx>;
    Query(request: DeepPartial<RequestQuery>, metadata?: grpc.Metadata): Promise<ResponseQuery>;
    Commit(request: DeepPartial<RequestCommit>, metadata?: grpc.Metadata): Promise<ResponseCommit>;
    InitChain(request: DeepPartial<RequestInitChain>, metadata?: grpc.Metadata): Promise<ResponseInitChain>;
    BeginBlock(request: DeepPartial<RequestBeginBlock>, metadata?: grpc.Metadata): Promise<ResponseBeginBlock>;
    EndBlock(request: DeepPartial<RequestEndBlock>, metadata?: grpc.Metadata): Promise<ResponseEndBlock>;
    ListSnapshots(request: DeepPartial<RequestListSnapshots>, metadata?: grpc.Metadata): Promise<ResponseListSnapshots>;
    OfferSnapshot(request: DeepPartial<RequestOfferSnapshot>, metadata?: grpc.Metadata): Promise<ResponseOfferSnapshot>;
    LoadSnapshotChunk(request: DeepPartial<RequestLoadSnapshotChunk>, metadata?: grpc.Metadata): Promise<ResponseLoadSnapshotChunk>;
    ApplySnapshotChunk(request: DeepPartial<RequestApplySnapshotChunk>, metadata?: grpc.Metadata): Promise<ResponseApplySnapshotChunk>;
}
export declare const ABCIApplicationDesc: {
    serviceName: string;
};
export declare const ABCIApplicationEchoDesc: UnaryMethodDefinitionish;
export declare const ABCIApplicationFlushDesc: UnaryMethodDefinitionish;
export declare const ABCIApplicationInfoDesc: UnaryMethodDefinitionish;
export declare const ABCIApplicationSetOptionDesc: UnaryMethodDefinitionish;
export declare const ABCIApplicationDeliverTxDesc: UnaryMethodDefinitionish;
export declare const ABCIApplicationCheckTxDesc: UnaryMethodDefinitionish;
export declare const ABCIApplicationQueryDesc: UnaryMethodDefinitionish;
export declare const ABCIApplicationCommitDesc: UnaryMethodDefinitionish;
export declare const ABCIApplicationInitChainDesc: UnaryMethodDefinitionish;
export declare const ABCIApplicationBeginBlockDesc: UnaryMethodDefinitionish;
export declare const ABCIApplicationEndBlockDesc: UnaryMethodDefinitionish;
export declare const ABCIApplicationListSnapshotsDesc: UnaryMethodDefinitionish;
export declare const ABCIApplicationOfferSnapshotDesc: UnaryMethodDefinitionish;
export declare const ABCIApplicationLoadSnapshotChunkDesc: UnaryMethodDefinitionish;
export declare const ABCIApplicationApplySnapshotChunkDesc: UnaryMethodDefinitionish;
interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
    requestStream: any;
    responseStream: any;
}
type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;
interface Rpc {
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export declare class GrpcWebImpl {
    private host;
    private options;
    constructor(host: string, options: {
        transport?: grpc.TransportFactory;
        debug?: boolean;
        metadata?: grpc.Metadata;
        upStreamRetryCodes?: number[];
    });
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
declare var tsProtoGlobalThis: any;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export declare class GrpcWebError extends tsProtoGlobalThis.Error {
    code: grpc.Code;
    metadata: grpc.Metadata;
    constructor(message: string, code: grpc.Code, metadata: grpc.Metadata);
}
export {};
