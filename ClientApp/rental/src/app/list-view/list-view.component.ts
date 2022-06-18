import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { GlobalConstants } from '../global-constants';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  public mainList: any
  // private isLoading: boolean

  constructor(public httpClient: HttpClient,) { }

  getAllLists(): Observable<| null> {
    this.httpClient.get(`${GlobalConstants.apiURL}health`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('err',err);
          // this.isLoading = false
          return of(null);
        })
        ).subscribe(result => {
            console.log('result', result)
            if (!!result) {
              this.mainList = result
            }
          // this.isLoading = false
          })

      // this.isLoading = true
      return of(this.mainList)
  }


  ngOnInit(): void {
    this.getAllLists()
  }

}
