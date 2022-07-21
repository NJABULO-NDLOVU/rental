import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AppRoutes } from './app-routing.module';

import { SideNavModule } from 'projects/core/src/lib/components/side-nav/side-nav.module';

import { MaterialModule } from 'projects/core/src/lib/modules/material.module';

import { FeatureModule } from './routes/feature.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    SideNavModule,

    MaterialModule,

    FeatureModule,

    HttpClientModule,

    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
