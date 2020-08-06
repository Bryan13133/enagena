import { DatabaseService } from './../DataBase/database.service';
import { User } from './../../Interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(
    private dataBase:DatabaseService
  ) { }
getUser(user: User):Observable<User>{
  return this.dataBase.login(user);
}
}
