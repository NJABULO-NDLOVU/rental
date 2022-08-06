import EntityReferenceDTO from "./EntityReferenceDTO";

import ListResponseMetadata from "./ListResponseMetaData";


export default interface BaseListResponse {

    data: EntityReferenceDTO[];

    metadata: ListResponseMetadata

  }