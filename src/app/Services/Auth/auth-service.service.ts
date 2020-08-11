import { AlertsService } from './../Alerts/alerts.service';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { Router, NavigationEnd } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
counter=0;
  constructor(private http: HttpClient,
    private bnIdle: BnNgIdleService,
    private alerts:AlertsService,
    private router:Router) {}
setUser(user):void{
let user_string = JSON.stringify(user);
localStorage.setItem("currentUser",user_string);
this.bnIdle.startWatching(10).subscribe((res)=>{
  if (res) {
    this.sessionExpired();
  }
})
}
getUser(){
  let user_string = localStorage.getItem("currentUser");
  if (user_string != null) {
    let user = JSON.parse(user_string);
    return user;
  }else{
    return null;
  }
}
setRole(role){
  let user_string = JSON.stringify(role);
localStorage.setItem("role",user_string);
}
getRole(){
  let user_string = localStorage.getItem("role");
  if (user_string != null) {
    let role = JSON.parse(user_string);
    return role;
  }else{
    return null;
  }
}
getCounter(){
  return localStorage.getItem("counter");
}
setCounter(i:string){
return localStorage.setItem("counter",i);
}
sessionExpired():void{
  localStorage.removeItem("currentUser");
  localStorage.removeItem("counter");
  this.alerts.sessionExpired();
  this.router.navigate(['home'], {}); 
}
logOut():void{
  localStorage.removeItem("currentUser");
  localStorage.removeItem("counter");
  this.router.navigate(['home'], {}); 
}
}
