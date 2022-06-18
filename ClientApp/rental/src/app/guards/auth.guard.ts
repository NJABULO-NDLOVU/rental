import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanLoad, CanActivate {

  private baseUrl: string;

  constructor(private router: Router, @Inject('BASE_URL') baseUrl: string, private authService: AuthService, private _route: ActivatedRoute) {

    this.baseUrl = baseUrl

  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return this.authService.isUserCookieValid().pipe(

      map((response: boolean) => {

        if (response != null) {
          return true;
        }

        window.location.href = `${this.baseUrl}login`;
        return false;

      }))

    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    return this.authService.isUserCookieValid().pipe(

      map((response: boolean) => {

        if (response != null) {
          return true;
        }

        window.location.href = `${this.baseUrl}login`;
          return false;

      }))
  }
}
