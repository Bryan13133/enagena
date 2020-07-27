import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
showPass= false;
@Output() signUpClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  ngOnInit(): void {
  }
  signClick(){
    this.signUpClick.emit(1);
  }
}
