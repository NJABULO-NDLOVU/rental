import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { MaterialModule } from "projects/core/src/lib/modules/material.module";

import { FontAModule } from "projects/core/src/lib/modules/font-awesome.module";

import { FlexModule } from "projects/core/src/lib/modules/flex.module";

import { RouterModule } from "@angular/router";

import { PropertyListComponent } from "./property-list.component";

import { TableModule } from "projects/core/src/lib/components/table/table.module";

@NgModule({

    declarations: [

        PropertyListComponent
    ],

    imports: [

        CommonModule,

        FontAModule,

        MaterialModule,
        
        FlexModule,

        RouterModule,

        TableModule

    ],

    exports: [

        PropertyListComponent
    ]
})

export class PropertyListModule {}