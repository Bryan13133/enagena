import { User } from './../../Interfaces/user';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  successAlert(title:string,text:string){
    Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  }

  welcomeAlert(user:User){
    Swal.fire({
      title: 'Bienvenido a enagena '+user.name+" "+user.lastname,
      imageUrl: 'assets/enagenaName.png',
      imageWidth: 200,
      imageHeight: 100,
      timer:3500,
      showConfirmButton: false,
      allowOutsideClick: true
    });
  }
 errorAlert(){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Algo salio mal, por favor intentalo mas tarde!',
  });
 }
 emailExist(){
  Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: 'Parece que el email ya esta en uso, por favor intentalo de nuevo!',
  });
 }
 sessionExpired(){
  Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: 'Tu sesion a expirado!!',
  });
 }
 verifyEmailPassword(){
  Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: 'Verifica que el usuario o contraseña sean correctos!!',
  });
 }
}
