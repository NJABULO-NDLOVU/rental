import EntityReferenceDTO from "./common/EntityReferenceDTO";

export default interface IdentityInfo extends EntityReferenceDTO {

    firstName: string;

    lastName: string;

    employeeId: string;

    employeeType: string;

    department: string;

    location: string;

    language: string;

    mobileNumber: string;

    company: string;

    systemName: string;

    grade: string;

    dateHired: Date;

    dateLeave: Date;

    jobTitle: string;

    photoUrl: string;

    risk: string;

    manager: EntityReferenceDTO;

    rolesOwned: EntityReferenceDTO[];

    roles: EntityReferenceDTO[];

    applicationsOwned: EntityReferenceDTO[];

    accountsOwned: EntityReferenceDTO[];

}