import { AlertsService } from './../../../Services/Alerts/alerts.service';
import { User } from './../../../Interfaces/user';
import { AuthServiceService } from './../../../Services/Auth/auth-service.service';

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private twitter: any;
  isLogged: boolean = false;
  constructor(
    private _router: Router,
    private authService:AuthServiceService,
    private alertsService: AlertsService
    ) { 
    this.initTwitterWidget();
  }

  ngOnInit(): void {  
    if (this.authService.getUser()) {
      this.isLogged = true;
      if (this.authService.getCounter() != "1") {
        this.alertsService.welcomeAlert(this.authService.getUser());
        this.authService.setCounter("1");
      }
    }
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

}
