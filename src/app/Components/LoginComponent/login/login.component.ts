import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {emailValidator} from '../../../Utilities/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
showPass= false;
form: FormGroup;
@Output() signUpClick: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.form = this.createForm();
  }
  signClick(){
    this.signUpClick.emit();
  }
  onSubmit(value:any){

  }
  createForm(){
    return this.fb.group({
      email:['',[emailValidator,Validators.required]],
      password: ['',[Validators.required]]
    })
  }

}
