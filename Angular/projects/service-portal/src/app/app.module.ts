import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertiesComponent } from './properties/properties.component';
import { TenantsComponent } from './tenants/tenants.component';
import { PropertyListComponent } from './properties/components/property-list/property-list.component';
import { PropertyViewComponent } from './properties/components/property-view/property-view.component';
import { TenantListComponent } from './tenants/components/tenant-list/tenant-list.component';
import { TenantViewComponent } from './tenants/components/tenant-view/tenant-view.component';
import { DashboardComponentComponent } from './dashboard/components/dashboard-component/dashboard-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PropertiesComponent,
    TenantsComponent,
    PropertyListComponent,
    PropertyViewComponent,
    TenantListComponent,
    TenantViewComponent,
    DashboardComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
