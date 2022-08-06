import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { MaterialModule } from "../../modules/material.module";

import { MatSidenavModule } from "@angular/material/sidenav";

import { FontAModule } from "../../modules/font-awesome.module";

import { RouterModule } from "@angular/router";

import { FlexModule } from "../../modules/flex.module";

import * as components from '../index';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({

    declarations: [
        ...components.NavComponents
    ],

    imports: [

        CommonModule,

        BrowserAnimationsModule,

        MatSidenavModule,

        MaterialModule,

        FontAModule,

        RouterModule,
        
        FlexModule
    ],

    exports: [

        ...components.NavComponents

    ]

})

export class SideNavModule {}