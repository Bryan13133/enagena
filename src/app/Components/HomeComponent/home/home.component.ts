import { DatabaseService } from './../../../Services/DataBase/database.service';
import { EventsService } from './../../../Services/Events/events.service';
import { AlertsService } from './../../../Services/Alerts/alerts.service';
import { Event } from './../../../Interfaces/event';
import { AuthServiceService } from './../../../Services/Auth/auth-service.service';

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JsonPipe, DatePipe } from '@angular/common';
import { CalendarOptions } from '@fullcalendar/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private twitter: any;
  isLogged: boolean;
  form: FormGroup;
  editForm: FormGroup;
  eventsCalendar: any = [];
  date: any;
  events: any;
  globalContent: any;
  calendarOptions: CalendarOptions;
  datas: any = [];
  isAdmin:boolean;
  constructor(
    private _router: Router,
    private authService: AuthServiceService,
    private alertsService: AlertsService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private eventsService: EventsService,
    private dataService: DatabaseService,
  ) {
    this.initTwitterWidget();
  }

  async ngOnInit() {
    this.form = this.createForm();
    if (this.authService.getUser()) {
      this.isLogged = true;
      console.log(this.authService.getRole());
      if (this.authService.getRole()== 'admin') {
        this.isAdmin = true;
      }else{
        this.isAdmin = false;
      }
      if (this.authService.getCounter() != "1") {
        this.alertsService.welcomeAlert(this.authService.getUser());
        this.authService.setCounter("1");
      }
    } else {
      this.isLogged = false;
    }
    this.getAllData();
  }
  createForm() {
    return this.fb.group({
      title: ['', [Validators.required]],
      start: ['', [Validators.required]],
      end: ['', [Validators.required]]
    })
  }
  dateClick(info) {
    if (this.date != null) {
      let currentDate = getCurrentDate();
      if (this.date.dateStr == currentDate) {
        this.date.dayEl.style.backgroundColor = '#fffadf';
      } else {
        this.date.dayEl.style.backgroundColor = '#FFFFFF80';
      }
    }
    info.dayEl.style.backgroundColor = '#bce8f14d';
    this.date = info;
  }
  getAllData() {
    this.eventsService.getAll().subscribe(data => {
      var calendarHeight:number;
      if(this.isLogged){
       calendarHeight = 520;
      }else{
        calendarHeight = 555;
      }
      if (data) {
        this.datas = data;
        this.eventsCalendar = data;
        this.calendarOptions = {
          height: calendarHeight,
          initialView: 'dayGridMonth',
          weekends: true,
          timeZone: 'local',
          locale: 'es',
          editable: true,
          headerToolbar: {
            right: 'today,prev,next'
          },
          selectable: false,
          dateClick: this.dateClick,
          events: this.datas
        }
      }
    });
  }

  initTwitterWidget() {
    this.twitter = this._router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        (<any>window).twttr = (function (d, s, id) {
          let js: any, fjs = d.getElementsByTagName(s)[0],
            t = (<any>window).twttr || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);

          t._e = [];
          t.ready = function (f: any) {
            t._e.push(f);
          };

          return t;
        }(document, "script", "twitter-wjs"));

        if ((<any>window).twttr.ready())
          (<any>window).twttr.widgets.load();

      }
    });
  }
  open(content) {
    console.log(this.eventsCalendar);
    this.modalService.open(content);
  }
  editEventModal(content, title: string, start: string, end: string,id:number) {
    this.editForm = this.fb.group({
      id:[id,[Validators.required]],
      title: [title, [Validators.required]],
      start: [start, [Validators.required]],
      end: [end, [Validators.required]]
    })
    this.modalService.open(content);
  }
  editar({ valid, value}: { valid: boolean, value: Event }) {
    if (valid) {
      console.log(value);
      this.eventsService.editEvent(value).subscribe(data => {
        if (data) {
          this.editForm = this.createForm();
          this.alertsService.successAlert('Evento editado correctamente', '');
          this.getAllData();
        }
      }, error => {
        this.alertsService.errorAlert();
      });
    }
  }
  async onSubmit({ valid, value }: { valid: boolean, value: Event }) {
    if (valid) {
      this.eventsService.newEvent(value).subscribe(data => {
        if (data) {
          this.form = this.createForm();
          this.alertsService.successAlert('Evento agendado correctamente', '');
          this.getAllData();
        }
      }, error => {
        this.alertsService.errorAlert();
      });
    }
  }
  deleteEvent(id: number) {
    this.eventsService.deleteEvent(id).subscribe(data => {
      this.getAllData();
    });
  }

}
function getCurrentDate() {
  var date = new Date();
  var day = String(date.getDate()).padStart(2, '0');
  var month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  var year = date.getFullYear();
  return year + '-' + month + '-' + day;
}