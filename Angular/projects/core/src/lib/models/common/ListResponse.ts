import BaseListResponse from "./BaseListResponse";

import EntityReferenceDTO from "./EntityReferenceDTO";

export default interface ListResponse<T extends EntityReferenceDTO> extends BaseListResponse {

  data: T[];

}
