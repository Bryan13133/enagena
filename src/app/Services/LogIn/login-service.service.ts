import { DatabaseService } from './../DataBase/database.service';
import { User } from './../../Interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url = 'http://localhost:3000';
  constructor(
    private dataBase:DatabaseService
  ) { }
getUser(user: User){
  return this.dataBase.getUser(user);
  
}

}
