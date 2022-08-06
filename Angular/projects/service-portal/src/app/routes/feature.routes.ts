import { Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";

import { TenantListComponent } from "../tenants/components/tenant-list/tenant-list.component";

import { PropertyListComponent } from "../properties/components/property-list/property-list.component";

import { DashboardRoutes } from "../dashboard/routes/dashboard.routes";
import { PropertiesComponent } from "../properties/properties.component";

import { TenantsComponent } from "../tenants/tenants.component";
import { PropertiesRoutes } from "../properties/routes/properties.routes";

export const FeatureRoutes: Routes = [

        {path: 'dashboard',
        component: DashboardComponent},

        {path: 'properties', 
        component: PropertiesComponent,
        children: PropertiesRoutes},

        {path: 'tenants',
        component:TenantsComponent}

]
