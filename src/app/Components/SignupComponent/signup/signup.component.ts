import { SignupServiceService } from './../../../Services/SignUp/signup-service.service';
import { Router } from '@angular/router';
import { User } from './../../../Interfaces/user';
import { Component, OnInit, enableProdMode, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { emailValidator } from 'src/app/Utilities/validators';

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
    private signUpService: SignupServiceService
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
    if (valid) {
      this.signUpService.createUser(value).subscribe(data=>{
          if (data) {
            result = {
              success: 'User created successfully!'
            };
          }else{
            result = {
              error: 'There was a problem, try again!'
            };
          }
          console.log(result);
      this.router.navigate(['login'], {
        queryParams: data
      });
      });
     
    }
  }
  createForm(){
    return this.fb.group({
      name: [''],
      lastName: [''],
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
