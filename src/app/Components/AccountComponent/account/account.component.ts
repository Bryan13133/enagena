import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
 showPass = false;
 loadComponent = false;
  constructor() { }
  ngOnInit(): void {
  }
  loadSignUp(value:any){
    this.loadComponent = true;
  }
  loadlogIn(value:any){
    this.loadComponent = false;
  }
}
