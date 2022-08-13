import { HttpClient, HttpHeaders, HttpResponseBase } from '@angular/common/http';

import { Inject, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// Core service is the base service;

export abstract class CoreService {

  //  Initiate new headers for requests;

  httpHeaders = {
    headers: new HttpHeaders({})
  }

  // We import the http client module and create the base url for other services; 

  constructor(public http: HttpClient, @Inject(String) public core_url: string) { }

  // Rental Core Get method that can be used across the project for Get requests;

  public get<T>(API_endpoint: string): Observable<T | null> {

    return this.http.get<T>(`${this.core_url}${API_endpoint}`, this.httpHeaders) // Set the API request and add additional headers to the request;

      .pipe(

        map((data) => data as T), // Map the data in the request;

        catchError((error: HttpResponseBase) => this.RentalErrorHandler<T>(error)) // Catch the error and handle it;

      );

  }

  public delete<T>(API_endpoint: string): Observable<T | null> {

    return this.http.delete<T>(`${this.core_url}${API_endpoint}`, this.httpHeaders) // Set the API request and add additional headers to the request;

      .pipe(

        map((data) => data as T), // Map the data in the request;

        catchError((error: HttpResponseBase) => this.RentalErrorHandler<T>(error)) // Catch the error and handle it;

      )

  }

  // Rental Core Post method that can be used across the project for Post requests;

  public post<TPayload, TResponse>(API_payload: TPayload, API_endpoint: string): Observable<TResponse | null> {

    return this.http.post<TResponse>(`${this.core_url}${API_endpoint}`, API_payload, this.httpHeaders) // Set the API request, pass the data in and add httpheaders to the request;

      .pipe(

        map((data) => data as TResponse), // Map the data in the request;

        catchError((error: HttpResponseBase) => this.RentalErrorHandler<TResponse>(error)) // Catch the error and handle it;

      );

  }

  // Rental Core Put method that can be used across the project for Put requests;

  public put<T>(API_model: T, API_endpoint: string): Observable<T | null> {

    return this.http.put<T>(`${this.core_url}${API_endpoint}`, API_model, this.httpHeaders) // Set the API request, add additional headers to the request and send the payload you want to update with;

      .pipe(

        map((data) => data as T), // Map the data in the request;

        catchError((error: HttpResponseBase) => this.RentalErrorHandler<T>(error)) // Catch the error and handle it;

      )

  }

  // Private error handler for Rental APi calls

  private RentalErrorHandler<T>(error: HttpResponseBase): Observable<T | null> {

    if (error.status == 500) {

      return of(null);

    } else if (error.status == 404) {

      return of(null);

    } else if (error.status == 401) {

      // window.location.href = `${this.core_url}login`;

      return of(null)

    }

    throw error;

  }

}
