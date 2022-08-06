import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { MaterialModule } from "../../modules/material.module";

import { FlexModule } from "../../modules/flex.module"

import { FontAModule } from "../../modules/font-awesome.module";

import { RouterModule } from "@angular/router";

import * as components from '../index';

@NgModule({

    declarations: [
        ...components.TableComponents
    ],
    
    imports: [

        CommonModule,

        MaterialModule,

        FlexModule,

        FontAModule,

        RouterModule
    ],

    exports: [

        ...components.TableComponents

    ]
})

export class TableModule {}