import { Injectable } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { urlMapping } from '../models/UrlMapping';

@Injectable({

  providedIn: 'root'

})

export class UrlService {

  constructor(private navRouter: Router, private router: ActivatedRoute) { }

  getQueryParams(): {[key: string]: any}  {

    let previousComponent: string = '';

    let id: string = '';

    let r: {[key: string]: any} = {}; 

    let params = this.router.queryParams;

    params.forEach(param => {

      if(param['previousComponent'] != '') {

        previousComponent = param['previousComponent'];

        id = param['id'];

        r = {'previousComponent': previousComponent, 'id': id};

      }

    })

    return r;

  }


  navigateBack() {

    let currentUrl = this.navRouter.url

    let navUrl: string = "";

    let params = this.router.queryParams;

    urlMapping.forEach(element => {

      if (currentUrl.match(/[0-9]/) != null) {

        if (currentUrl.includes(element.route)) {

          if (element?.params != null) {

              params.subscribe(param => {

                if (param['previousComponent'] == element.params.previousComponent) {

                  if ( param['id'] != null) {

                    navUrl = element.params.navigation + param['id'] + '/' + param['previousComponent'];

                  }
                } else if (param['previousComponent'] == null) {
                    
                  navUrl = element.defaultNavigation;

                }

              })

          } 

        } 

      } else if (currentUrl.localeCompare(element.route) == 0) {

        navUrl = element.defaultNavigation;

      }

    });

    this.navRouter.navigate([navUrl]);
  }

}
