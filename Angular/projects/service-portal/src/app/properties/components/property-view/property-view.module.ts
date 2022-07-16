import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";

import * as components from './property-view.index';

@NgModule({

    declarations: [
        ...components.PropertyViewComponents
    ],

    imports: [

        CommonModule,

        RouterModule
    ],

    exports: [

        ...components.PropertyViewComponents
    ]
})

export class PropertyViewModule { }