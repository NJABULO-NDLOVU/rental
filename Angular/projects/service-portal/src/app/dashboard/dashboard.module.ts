import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import * as components from './components/index';


@NgModule({

    declarations:[

        ...components.DashboardComponents
    ],

    imports: [

        CommonModule,

    ]
})

export class DashboardModule {}
