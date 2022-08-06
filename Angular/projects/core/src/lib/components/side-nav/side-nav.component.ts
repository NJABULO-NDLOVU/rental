import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  sidenav!: MatSidenav;
  constructor( private router: Router){
    
  }
  
  logIn(){
    // this.authService.logIn();
  }

  logOut(){
    // this.authService.logOut();
  }

  isAuthenticated() {
    // return this.authService.isUserAuthenticated();
    return true
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  public toggle() {
    this.isExpanded = !this.isExpanded;
  }

  whichIsActiveRoute(route: string){
    return (this.router.url == route)
  }

  ngOnInit(): void {

  }
}
