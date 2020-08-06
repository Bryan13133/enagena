import { AlertsService } from './../Alerts/alerts.service';
import { User } from './../../Interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  url = 'localhost:8080/api/enagena';
  constructor(
    private http:HttpClient,
    
  ) { }

  handleErros(error: HttpErrorResponse){
    let errorMessage= 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    }else{
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  login(user:User):Observable<User>{
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin','*')
    .set('Access-Control-Allow-Methods','GET,POST');
    return this.http.post<any>('http://localhost:8080/api/enagena/login',user,{headers:headers});
  }
  createUser(user:User):Observable<User>{
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Origin','*')
          .set('Access-Control-Allow-Methods','GET,POST');
    return this.http.post<any>('http://localhost:8080/api/enagena/register',user,{headers:headers});
  }
}
