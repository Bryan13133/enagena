import { DatabaseService } from './../DataBase/database.service';
import { User } from './../../Interfaces/user';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {
  constructor(
    private dataBase: DatabaseService
  ) { }
 createUser(user: User): Observable<User>{
   return this.dataBase.createUser(user);
  }
}
