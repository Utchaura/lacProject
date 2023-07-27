import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserData } from '../model/UserData';
import { LacModel } from '../model/lacmodel';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LacService {



  constructor(private httpClient: HttpClient, private router: Router) { }

  apiurl='http://localhost:3000/LacModel';


  create(data:any){
    return this.httpClient.post<LacModel>(this.apiurl + '//', JSON.stringify(data))
    .pipe(
      catchError(this.errorHandler)
    )
  }


  // create(userData: any): Observable<UserData> {
  //   return this.httpClient.post<UserData>(this.apiServer + '//', JSON.stringify(userData), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler))
  // }


  // getById(id: string): Observable<UserData> {
  //   return this.httpClient.get<UserData>(this.apiServer + '/NAMES/' + id)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  // getAll(): Observable<UserData[]> {
  //   return this.httpClient.get<UserData[]>(this.apiServer + '/COLORS/')
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  // update(id: string,userData: any): Observable<UserData> {
  //   return this.httpClient.put<UserData>(this.apiServer + '/products/' + id, JSON.stringify(userData), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
