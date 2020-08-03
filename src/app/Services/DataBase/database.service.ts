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
    private http:HttpClient
  ) { }
  handleErros(error: HttpErrorResponse){
    let errorMessage= 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    }else{
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  login(user:User):Observable<User>{
    return this.http.get<User>(`${this.url}/login`).pipe(catchError(this.handleErros));
  }
  createUser(user:User):Observable<User>{
    const headers = { 'Authorization': 'Bearer my-token','Access-Control-Allow-Origin':'*'};
    return this.http.post<User>(`${this.url}/register`,JSON.stringify(user),{headers:headers}).pipe(
      catchError(this.handleErros)
      );
  }
}
