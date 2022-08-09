import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import IdentityInfo from 'projects/core/src/lib/models/IdentityInfo';

import { Observable } from 'rxjs';

import { PiribaAPI } from '../../piriba-api';

import { DashboardData, TenantTotals, Totals } from '../models/common/dashboard/DashboardData';

import { CoreService } from './core.service';


@Injectable({
  providedIn: 'root'
})
export class DashboardService extends CoreService {

  constructor(http: HttpClient) {
    
    super(http, '')

  }

  //  TODO Dylan F to strong type
  getTenantData(): Observable<DashboardData<TenantTotals> | null> {

    return this.get(PiribaAPI.Tenant + PiribaAPI.Dashboard);
    
  }

  //  TODO Dylan F to strong type
  getDashboard(userId: number): Observable<DashboardData<Totals> | null> {

    return this.get(PiribaAPI.Identities + '/' + userId + PiribaAPI.Dashboard);

  }

  getSelfIdentity(): Observable<IdentityInfo | null>{

    return this.get(PiribaAPI.Identities + PiribaAPI.Self);

  }

}
