import { AlertsService } from './../../../Services/Alerts/alerts.service';
import { Router } from '@angular/router';
import { LoginServiceService } from './../../../Services/LogIn/login-service.service';
import { User } from './../../../Interfaces/user';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {emailValidator} from '../../../Utilities/validators';
import { AuthServiceService } from 'src/app/Services/Auth/auth-service.service';

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
    private fb: FormBuilder,
    private logIn: LoginServiceService,
    private authService: AuthServiceService,
    private router: Router,
    private alertService: AlertsService
  ) { }
  ngOnInit(): void {
    this.form = this.createForm();
  }
  signClick(){
    this.signUpClick.emit();
  }
  onSubmit({ valid, value }: { valid: boolean, value: User }) {
    if (valid) {
      this.logIn.getUser(value).subscribe(data=>{
          if (data) {
            console.log(data);
            this.authService.setUser(data);
            this.authService.setRole(data.role);
            
            this.router.navigate(['home']).then(()=>{
              window.location.reload();
            }); 
            this.form = this.createForm();
          }
      },error =>{
        if (error.status == 401) {
          this.alertService.verifyEmailPassword();
        }else{
          this.alertService.errorAlert();
        }
      }
      );
    }
  }
  createForm(){
    return this.fb.group({
      email:['',[emailValidator,Validators.required]],
      password: ['',[Validators.required]]
    })
  }

}
