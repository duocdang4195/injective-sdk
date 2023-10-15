import * as SigningStargateClient from './SigningStargateClient'
import * as StargateClient from './StargateClient'
import * as accountParser from './accountParser'

export default { ...SigningStargateClient, ...StargateClient, ...accountParser }
// export default {  ...StargateClient }
