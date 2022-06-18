import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { AuthorizedHome } from './home/authHome/authorized.component';
import { UnAuthorizedHome } from './home/unauthHome/unauthorized.component';
// import { UserInfoComponent } from './user-info/user-info.component';
import { ExpiredSessionComponent } from './shared/expired-session/expired-session.component';


import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards';

import { MaterialModule } from './material.module';
import { FontAModule } from './font-awesome.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexModule } from './flex.module';
import { ListViewComponent } from './list-view/list-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SideNavComponent,
    ExpiredSessionComponent,
    AuthorizedHome,
    UnAuthorizedHome,
    ListViewComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexModule,
    MaterialModule,
    FontAModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },//, canActivate: [AuthGuard] },
      { path: 'mylists', component: ListViewComponent, pathMatch: 'full'},
      // { path: 'user_info', component: UserInfoComponent, canActivate: [AuthGuard] },
    ]),

  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
