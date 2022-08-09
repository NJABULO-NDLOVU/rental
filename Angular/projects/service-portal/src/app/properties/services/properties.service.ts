import { HttpClient } from '@angular/common/http';

import { Inject, Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { CoreService } from 'projects/core/src/public-api';

import ListResponse from 'projects/core/src/lib/models/common/ListResponse';

import PropertyInfo from '../models/propertyInfo';

// import { environment } from 'projects/management-portal/src/environments/environment.prod';


// import IdentityInfo from '../models/IdentityInfo';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService extends CoreService {

  public data: any;

  url: string;


  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: any ) {

    super();
    this.url = baseUrl;

  }


  getPropertyListData<T>(
    offset: string,
    sortBy: string,
    cursor?: any,
    searchQuery?: string): Observable<ListResponse<PropertyInfo> | null> {

    let apiEndpoint = this.url + '/assets/data/propertyData.json'


    let cursorUrl = apiEndpoint + '?Limit=30' + '&' + `Offset=${offset}`;// + '&' + `SortBy=${sortBy}`;
    if (!!searchQuery) {

      cursorUrl = apiEndpoint + '?Limit=30' + '&' + `Offset=${offset}` + '&' + `Filter=DisplayName ci "${searchQuery}"` + '&' + `SortBy=${sortBy}`;
    }
    if (!!cursor) {
      cursorUrl = apiEndpoint + "?Cursor=" + cursor
    }

    return this.httpClient.get<ListResponse<PropertyInfo>>(cursorUrl);
  }

  getPropertyListDataLocal (): Observable<ListResponse<PropertyInfo> | null> {

    return this.httpClient.get<ListResponse<PropertyInfo>>('../../assets/data/propertyData.json')   
  }

  getProperty(tenantId: any): Observable<ListResponse<PropertyInfo> | null> {
    let testProperty : PropertyInfo | any = {
      propetyName: "big house",
      shortAddress: "123 big street",
      isVacant: true,
      isDeleted: false,
      id: 1,
      uniqueId: "fb07cb0f-f057-41f2-a657-c9e130af2ed8",
      propertyType: "Free standing"
    }
    return of(testProperty)   
  }
}
