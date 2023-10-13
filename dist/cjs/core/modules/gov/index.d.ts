import MsgVote from './msgs/MsgVote';
import MsgGovDeposit from './msgs/MsgDeposit';
import MsgSubmitProposalExpiryFuturesMarketLaunch from './msgs/MsgSubmitProposalExpiryFuturesMarketLaunch';
import MsgSubmitProposalPerpetualMarketLaunch from './msgs/MsgSubmitProposalPerpetualMarketLaunch';
import MsgSubmitProposalSpotMarketLaunch from './msgs/MsgSubmitProposalSpotMarketLaunch';
import MsgSubmitProposalSpotMarketParamUpdate from './msgs/MsgSubmitProposalSpotMarketParamUpdate';
import MsgSubmitTextProposal from './msgs/MsgSubmitTextProposal';
export type MsgSubmitProposal = MsgSubmitProposalExpiryFuturesMarketLaunch | MsgSubmitProposalPerpetualMarketLaunch | MsgSubmitProposalSpotMarketLaunch | MsgSubmitProposalSpotMarketParamUpdate | MsgSubmitTextProposal;
export { MsgSubmitProposalExpiryFuturesMarketLaunch, MsgSubmitProposalPerpetualMarketLaunch, MsgSubmitProposalSpotMarketLaunch, MsgSubmitProposalSpotMarketParamUpdate, MsgSubmitTextProposal, };
export * from './ProposalContentDecomposer';
export { MsgVote, MsgGovDeposit };
//# sourceMappingURL=index.d.ts.map