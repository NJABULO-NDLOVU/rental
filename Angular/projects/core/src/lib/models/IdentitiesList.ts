import EntityReferenceDTO from "./common/EntityReferenceDTO";

import ListResponseMetadata from "./common/ListResponseMetaData";

export interface IdentitiesList {

    data: IdentityAttributes[]

    metaData: ListResponseMetadata;

}

interface IdentityAttributes {

    id: number;

    uniqueId: string;

    self: string;

    systemName: string;

    displayName: string;

    dateCreated: string;

    dateModified: string;

    extendedAttributes: any;

    firstName: string;

    lastName: string;

    employeeId: string;

    employeeType: string;

    location: string;

    mobileTelephone: string;

    company: string;

    grade: string;

    dateHire: Date;

    dateLeave: Date;

    jobTitle: string;

    photoUrl: string;

    risk: string;

    manager: EntityReferenceDTO;

    roles: EntityReferenceDTO[];

    applicationsOwned: EntityReferenceDTO[];

    accountsOwned: EntityReferenceDTO[];

}