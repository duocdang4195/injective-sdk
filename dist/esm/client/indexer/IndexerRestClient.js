import { IndexerRestDerivativesChronosApi } from './rest/IndexerRestDerivativesChronosApi';
import { IndexerRestExplorerApi } from './rest/IndexerRestExplorerApi';
import { IndexerRestSpotChronosApi } from './rest/IndexerRestSpotChronosApi';
/**
 * @category Indexer Grpc API
 * @hidden
 */
export class IndexerRestClient {
    derivativesChronos;
    spotChronos;
    explorer;
    constructor(endpoints) {
        const chronosBase = `${endpoints.chronosApi
            ? `${endpoints.chronosApi}/api/v1`
            : `${endpoints.indexerApi}/api/chronos/v1`}`;
        this.explorer = new IndexerRestExplorerApi(`${chronosBase}/api/explorer/v1`);
        this.derivativesChronos = new IndexerRestDerivativesChronosApi(`${chronosBase}/derivative`);
        this.spotChronos = new IndexerRestSpotChronosApi(`${chronosBase}/spot`);
    }
}
//# sourceMappingURL=IndexerRestClient.js.map