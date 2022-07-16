import { Routes } from "@angular/router";

import { PropertyListRoutes } from "../components/property-list/property-list.routes";



export const PropertiesRoutes: Routes = [

    {
        path: '',
        children:  PropertyListRoutes

    }
]