import { AuthServiceService } from './../Services/Auth/auth-service.service';
import { AppRoutingModule } from './../app-routing.module';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthServiceService
  ){}
  canActivate(){
    if (this.authService.getUser()) {
      return true;
    } else {
      this.router.navigate(['home'], {}); 
      return false;
    }
  }  
}
