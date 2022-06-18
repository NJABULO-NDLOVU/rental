import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { GlobalConstants } from './global-constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = GlobalConstants.siteTitle;

  constructor(private authService: AuthService, private router: Router) {

  }

  logIn() {
    this.authService.logIn();
  }

  logOut() {
    this.authService.logOut();
  }

  isAuthenticated() {
    return this.authService.isUserAuthenticated();
  }

  whichIsActiveRoute(route: string) {
    return (this.router.url == route)
  }

  ngOnInit() { }

}
