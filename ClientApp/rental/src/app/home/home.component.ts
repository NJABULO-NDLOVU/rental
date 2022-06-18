import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent {

  public authFlag: any;


  constructor(private authService: AuthService) {
    this.authService.getUser();
   }
  
 isAuthenticated(){
    return this.authService.isUserAuthenticated();
  }
  
  isUserCookieValid(){

    this.authService.isUserCookieValid()
    .subscribe(result => {

    })
  }

  navigate(route: any){
    location.assign(route);
  }

  ngOnInit() {

    this.isUserCookieValid();

  }
}

