import { Routes } from "@angular/router";
import { PropertyViewComponent } from "../property-view/property-view.component";

import { PropertyListComponent } from "./property-list.component";

export const PropertyListRoutes: Routes = [

    {
        path: '',

        component: PropertyListComponent
    },

    {
        path: 'x',
        component: PropertyViewComponent
    }
]