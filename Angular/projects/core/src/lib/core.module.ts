import { NgModule } from '@angular/core';

import { CoreComponent } from './core.component';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { FontAModule } from './modules/font-awesome.module';

import { MaterialModule } from './modules/material.module';

import { FlexModule } from './modules/flex.module';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [

    CoreComponent,
     TableComponent,
  ],
  imports: [
    CommonModule,

    FontAModule,

    MaterialModule,

    FlexModule

  ],
  exports: [

    CoreComponent,
     TableComponent
  ]
})
export class CoreModule { }
