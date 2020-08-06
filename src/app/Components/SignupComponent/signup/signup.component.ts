import { AlertsService } from './../../../Services/Alerts/alerts.service';
import { AuthServiceService } from './../../../Services/Auth/auth-service.service';
import { SignupServiceService } from './../../../Services/SignUp/signup-service.service';
import { Router } from '@angular/router';
import { User } from './../../../Interfaces/user';
import { Component, OnInit, enableProdMode, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { emailValidator } from 'src/app/Utilities/validators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Output() loginUpClick: EventEmitter<any> = new EventEmitter<any>();
  showPass= false;
  showConfirmPass = false;
  form: FormGroup;
 
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signUpService: SignupServiceService,
    private authService: AuthServiceService,
    private alertService: AlertsService
  ) { }
  loginClick(){
    this.loginUpClick.emit();
  }
  ngOnInit(): void {
    this.form = this.createForm();
  }

  onSubmit({ valid, value }: { valid: boolean, value: User }) {
    let result;
    let user: User;
    delete value['confirmPassword'];
    if (valid) {
      this.signUpService.createUser(value).subscribe(data=>{
          if (data) {
            this.authService.setUser(data);
            this.router.navigate(['home'], {}); 
            this.form = this.createForm();
          }
      },error =>{
        console.log("Error: "+error);
        if (error.status == 406) {
          this.alertService.emailExist();
        }else{
          this.alertService.errorAlert();
        }
      }
      );
    }
  }
  createForm(){
    return this.fb.group({
      name: [''],
      lastname: [''],
      role: ['user'],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required,Validators.minLength(8)]],
      email:['',[emailValidator,Validators.required]]
    })
  }
  get email():AbstractControl{
    return this.form.get('email');
  }
  get password():AbstractControl{
    return this.form.get('password');
  }
  get confirmPassword(): AbstractControl{
    return this.form.get('confirmPassword');
  }


}
