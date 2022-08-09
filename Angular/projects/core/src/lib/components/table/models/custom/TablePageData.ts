import BaseListResponse from "../../../../models/common/BaseListResponse";

export default interface TableDataPage {

    action: 'increment' | 'replace';

    data: BaseListResponse;
    
  }
  