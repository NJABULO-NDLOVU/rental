import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FontAModule } from '../font-awesome.module';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  sidenav!: MatSidenav;
  public authFlag: any;
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

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  whichIsActiveRoute(route: string) {
    return (this.router.url == route)
  }

  ngOnInit(): void {
    this.isAuthenticated();
  }
}
