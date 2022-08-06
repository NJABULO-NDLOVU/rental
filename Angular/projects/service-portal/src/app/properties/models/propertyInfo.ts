import EntityReferenceDTO from "../../../../../core/src/lib/models/common/EntityReferenceDTO";

export default interface PropertyInfo extends EntityReferenceDTO {

    propertyName: string;

    shortAddress: string;

    isVacant: boolean;

    isDeleted: boolean;

    propertyType: string;
}