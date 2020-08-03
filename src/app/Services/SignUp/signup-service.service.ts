import { DatabaseService } from './../DataBase/database.service';
import { User } from './../../Interfaces/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {
API_URI = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    private dataBase: DatabaseService
  ) { }
 createUser(user: User): Observable<User>{
   return this.dataBase.createUser(user);
  }
}
