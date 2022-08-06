import { Routes } from "@angular/router";

export const AppRoutes: Routes = [

  {
    path: '',
    
    pathMatch: 'full',

    redirectTo: "/dashboard"
  },

  {
    path: 'dashboard',

    loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
  },

  {
    path: 'properties',

    loadChildren: () => import('./properties/properties.module').then(module => module.PropertiesModule)
  },

  {
    path: 'tenants',

    loadChildren: () => import('./tenants/tenants.module').then(module => module.TenantsModule)
  },

  {
    path: '**',

    pathMatch: 'full',

    redirectTo: '/dashboard'
},



]