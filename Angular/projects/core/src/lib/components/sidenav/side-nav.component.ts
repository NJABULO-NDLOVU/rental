import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
// import { AuthService } from '../auth/auth.service';
import { FontAModule } from '../../modules/font-awesome.module';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
//   styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  sidenav: MatSidenav;
  constructor(/*private authService: AuthService,*/ private router: Router){
    
  }
  
  // logIn(){
  //   this.authService.logIn();
  // }

  // logOut(){
  //   this.authService.logOut();
  // }

  isAuthenticated() {
    return true; //this.authService.isUserAuthenticated();
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  whichIsActiveRoute(route: string){
    return (this.router.url == route)
  }

  ngOnInit(): void {

  }
}
