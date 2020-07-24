import { ToolbarComponent } from './../../ToolBarComponent/toolbar/toolbar.component';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  constructor() { }
date: any;

  ngOnInit(): void {
  }
  calendarOptions: CalendarOptions ={
    initialView : 'dayGridMonth',
    weekends: true,
    timeZone: 'local',
    locale: 'es',
    editable: true,
    selectable: false,
    dateClick:this.dateClick,
    events: [
      { title: 'event 1', date: '2020-07-01' },
      { title: 'event 2', date: '2020-07-02' }
    ]
  }

dateClick(info){

 if (this.date != null) {
  let currentDate =  getCurrentDate();
    if (this.date.dateStr == currentDate) {
      this.date.dayEl.style.backgroundColor = '#fffadf';
    }else{
      this.date.dayEl.style.backgroundColor = '#ffffff';
    }
    
 }
  info.dayEl.style.backgroundColor = '#bce8f14d';
  this.date = info;
}

}

function getCurrentDate(){
  var date = new Date();
  var day = String(date.getDate()).padStart(2, '0');
  var month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  var year = date.getFullYear();
  return year + '-' + month + '-' + day;
}