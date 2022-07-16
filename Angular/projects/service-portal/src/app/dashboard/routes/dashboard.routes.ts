import { Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard.component";


export const DashboardRoutes: Routes = [

    {
        path: '',

        pathMatch: 'full',

        redirectTo:'/dashboard'
    },

    {
        path: 'dashboard',

        component: DashboardComponent
    }
    
]