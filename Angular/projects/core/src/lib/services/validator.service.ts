import { HttpClient } from '@angular/common/http';

import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PiribaAPI } from '../../piriba-api';

import { ApplicationAttributes, ApplicationsList } from '../../../../admin-portal/src/app/applications/models/ApplicationsList';

import { IdentitiesList } from '../models/IdentitiesList';

import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService extends CoreService {

  // We will use this service to generalize any methods for Validators;

  base_url: string;

  constructor(http: HttpClient, @Inject("BASE_URL") core_url: string) {

    super(http, core_url);

    this.base_url = this.core_url; // Assign variable to the base Url

  }

  // This is going to filter the List of Applications API call and return applications based on the search query;

  applicationExistsFilter(applicationName: string): Observable<ApplicationsList<ApplicationAttributes> | null> {

    return this.get<ApplicationsList<ApplicationAttributes>>(`${this.base_url}${PiribaAPI.Applications}` + Query('DisplayName', 'eq', applicationName));

  }

  // This is going to filter the List of Identities API call and return identities based on the search query;

  identityExistsFilter(ownerEmail: string): Observable<IdentitiesList | null> {

    return this.get<IdentitiesList>(`${this.base_url}${PiribaAPI.Identities}` + Query('SystemName', 'ci', ownerEmail));

  }

}

// Query Function for filtering;

function Query(SearchQuery: string, SearchOperator: string, SearchValue: string): string {

  return `?Limit=5&Filter=${`${SearchQuery}` + ' ' + `${SearchOperator}` + ' ' + `\"${SearchValue}\"`}`;

}
