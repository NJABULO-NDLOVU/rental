import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { MaterialModule } from "projects/core/src/lib/modules/material.module";

import { FlexModule } from "projects/core/src/lib/modules/flex.module";

import * as components from './components/index';


@NgModule({

    declarations:[

        ...components.DashboardComponents
    ],

    imports: [

        CommonModule,
        MaterialModule,
        FlexModule

    ],

    exports: [
        ...components.DashboardComponents,
    ]
})

export class DashboardModule {}
