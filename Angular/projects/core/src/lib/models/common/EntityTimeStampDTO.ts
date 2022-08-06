import EntityReferenceDTO from "./EntityReferenceDTO";

export default interface EntityTimeStampsDTO extends EntityReferenceDTO {

    dateCreated: Date;

    dateModified: Date;

}