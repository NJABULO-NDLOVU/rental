import {
  HttpClient,
  HttpErrorResponse,
  HttpResponseBase,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string;
  // private onLoadUrl:string;
  public currentUser: any = null;
  private isLoading = false;
  public authFlag: boolean = false;



  constructor(
    public httpClient: HttpClient,
    private router: Router,
    // @Inject('BASE_URL') baseUrl: string
  ) {
    this.url = 'http://localhost:4200/';
    this.getUser();
  }


  getUser(): Observable<| null> {

    this.httpClient.get(`${this.url}loggedin`)
      .pipe(

        catchError((err: HttpErrorResponse) => {
          this.isLoading = false;
          return of(null);

        })

      ).subscribe(result => {

        if (!!result) {
          sessionStorage.setItem('Current_User', JSON.stringify(result));
          this.currentUser = result;
        }
        else {
          this.currentUser = null;
        }
      });

    this.isLoading = true;

    return of(this.currentUser);

  }

  logIn() {

    if (!this.authFlag) {
      location.assign(`${this.url}login`);
    }

  }

  logOut() {
    this.currentUser = null;
    location.assign(`${this.url}logout`);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  isUserCookieValid(): Observable<boolean> {

    return this.getUser().pipe(
      switchMap((User: any | null) => of(User != null))
    )
  }

  isUserAuthenticated() {

    if (this.currentUser == null) {
      return false;
    }
    return true;
  }

  // setOnLoadUrl(url:string) {
  //   this.onLoadUrl = url;
  // }

}
