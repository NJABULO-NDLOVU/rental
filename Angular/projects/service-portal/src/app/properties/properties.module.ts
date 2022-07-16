import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";

import * as components from './components/index';

@NgModule({

    declarations:[

        ...components.propertiesComponents
    ],

    imports: [

        CommonModule,

        RouterModule,

    ]
})

export class PropertiesModule { }