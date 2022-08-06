import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";

import { FlexModule } from "projects/core/src/lib/modules/flex.module";

import { MaterialModule } from "projects/core/src/lib/modules/material.module";

import * as components from './components/index';

import { PropertiesComponent } from "./components/index";

import { PropertyListModule } from "./components/property-list/property-list.module";

import { TableModule } from "projects/core/src/lib/components/table/table.module";
@NgModule({

    declarations:[

        // ...components.propertiesComponents
        PropertiesComponent
    ],

    imports: [

        CommonModule,

        RouterModule,
        MaterialModule,

        FlexModule,

        TableModule,

        PropertyListModule,

    ],

    exports: [

        // ...components.propertiesComponents
        PropertiesComponent

    ]
})

export class PropertiesModule { }