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

import { AppRoutes } from './app-routing.module';

import { SideNavModule } from 'projects/core/src/lib/components/side-nav/side-nav.module';

import { MaterialModule } from 'projects/core/src/lib/modules/material.module';

import { FeatureModule } from './routes/feature.module';
import { HttpClientModule } from '@angular/common/http';
import { TenantsModule } from './tenants/tenants.module';
import { PropertiesModule } from './properties/properties.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatDialog, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    SideNavModule,

    DashboardModule,

    TenantsModule,

    PropertiesModule,

    MaterialModule,

    FeatureModule,

    HttpClientModule,

    RouterModule.forRoot(AppRoutes)
  ],
  providers: [

    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false} },

    { provide: MatDialogRef, useValue: {}},

    { provide: MatDialog, useValue: {}}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
