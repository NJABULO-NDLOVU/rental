import { EntityClaimsDTO } from "./common/authentication/EntityClaimsDTO";

import { EntityPayloadDTO } from "./common/authentication/EntityPayloadDTO";

export interface UserInfo {

    audiences: Array<string>;

    claims: EntityClaimsDTO[];

    encodedHeader: string;

    encodedPayload: string;

    id: string;

    issuer: string;

    payload: EntityPayloadDTO;

    rawData: string;

    rawPayload: string;

    rawSignature: string;

    signatureAlgorithim: string;

    subject: string;

    validFrom: string;

    validTo: string;

    issuedAt: string;

}