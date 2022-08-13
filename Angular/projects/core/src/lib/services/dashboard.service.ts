import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import IdentityInfo from 'projects/core/src/lib/models/IdentityInfo';

import { Observable } from 'rxjs';

import { RentalAPI } from '../../rental-api';

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

    return this.get(RentalAPI.Tenant + RentalAPI.Dashboard);
    
  }

  //  TODO Dylan F to strong type
  getDashboard(userId: number): Observable<DashboardData<Totals> | null> {

    return this.get(RentalAPI.Identities + '/' + userId + RentalAPI.Dashboard);

  }

  getSelfIdentity(): Observable<IdentityInfo | null>{

    return this.get(RentalAPI.Identities + RentalAPI.Self);

  }

}
