import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { PropertiesComponent } from './properties/properties.component';

import { TenantsComponent } from './tenants/tenants.component';

import { PropertyListComponent } from './properties/components/property-list/property-list.component';

import { PropertyViewComponent } from './properties/components/property-view/property-view.component';

import { TenantListComponent } from './tenants/components/tenant-list/tenant-list.component';

import { TenantViewComponent } from './tenants/components/tenant-view/tenant-view.component';

import { PropertyDetailsComponent } from './properties/components/property-view/property-details/property-details.component';

import { AppRoutes } from './app.routes';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PropertiesComponent,
    // TenantsComponent,
    PropertyListComponent,
    PropertyViewComponent,
    TenantListComponent,
    TenantViewComponent,
    PropertyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
