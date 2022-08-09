import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { MaterialModule } from "../../modules/material.module";

import { FlexModule } from "../../modules/flex.module"

import { FontAModule } from "../../modules/font-awesome.module";

import { RouterModule } from "@angular/router";

import { TableTopContentComponent } from './table-top-content/table-top-content.component';

import { TableComponent } from "./table.component";
import { ColumnTextWidthPipe } from "../../pipes/column-text-width.pipe";

@NgModule({

    declarations: [
        TableComponent,

        TableTopContentComponent,

        ColumnTextWidthPipe,

    ],
    
    imports: [

        CommonModule,

        MaterialModule,

        FlexModule,

        FontAModule,

        RouterModule
    ],

    exports: [

        TableComponent,
        
        TableTopContentComponent

    ]
})

export class TableModule {}