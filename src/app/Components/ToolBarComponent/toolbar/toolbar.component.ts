import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/Auth/auth-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isLogged = false;
  showBar= true;
  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
    if (this.authService.getUser()) {
      this.isLogged = true;
    }
  }
  twitchSubscribe(){
    window.open("https://www.twitch.tv/products/enagena");
   
  }
  showNavBar(){
    this.showBar = this.showBar === false ? true : false; 
  }

  logOut(){
    this.authService.logOut();
  }
}
