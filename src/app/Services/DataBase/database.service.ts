import { User } from './../../Interfaces/user';
import { Event } from './../../Interfaces/event';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'jquery';


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
  getAllEvents():Observable<Event[]>{
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin','*')
    .set('Access-Control-Allow-Methods','GET,POST');
    return this.http.get<any[]>('http://localhost:8081/api/enagena/events',{headers:headers});
   
  }
  createEvent(event:Event):Observable<any>{
    console.log(event);
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Origin','*')
          .set('Access-Control-Allow-Methods','GET,POST');
    return this.http.post<any>('http://localhost:8081/api/enagena/events',event,{headers:headers});
  }
  editEvent(event:Event):Observable<any>{
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Origin','*')
          .set('Access-Control-Allow-Methods','GET,POST');
    return this.http.put<any>('http://localhost:8081/api/enagena/events/'+event.id,event,{headers:headers});
  }
  deleteEvent(id:number):Observable<any>{
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Origin','*')
          .set('Access-Control-Allow-Methods','GET,POST');
    return this.http.delete<any>('http://localhost:8081/api/enagena/events/'+id);
  }
}
