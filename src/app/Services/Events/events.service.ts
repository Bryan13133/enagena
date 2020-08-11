import { Observable } from 'rxjs';
import {Event} from 'src/app/Interfaces/event';
import { DatabaseService } from './../DataBase/database.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private dataBase:DatabaseService
  ) { }
  getAll():Observable<Event[]>{
    return this.dataBase.getAllEvents();
  }
  newEvent(event: Event):Observable<Event>{
    return this.dataBase.createEvent(event);
  }
  editEvent(event: Event):Observable<Event>{
    return this.dataBase.editEvent(event);
  }
  deleteEvent(id: number):Observable<any>{
    return this.dataBase.deleteEvent(id);
  }
}
