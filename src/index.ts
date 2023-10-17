import * as SigningStargateClient from './SigningStargateClient'
import * as StargateClient from './StargateClient'
import * as accountParser from './accountParser'
import * as CoreProto from './core-proto-ts/cjs'

export default { ...SigningStargateClient, ...StargateClient, ...accountParser, ...CoreProto }
// export default {  ...StargateClient }
