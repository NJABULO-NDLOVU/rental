import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";

import { FeatureRoutes } from "./feature.routes";

NgModule({

    declarations: [

    ],

    imports: [

        CommonModule,

        RouterModule.forChild(FeatureRoutes)
    ],

    providers: [],
})

export class FeatureModule {}