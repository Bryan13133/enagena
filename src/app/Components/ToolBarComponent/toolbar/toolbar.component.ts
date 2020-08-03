import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isLogged = false;
  showBar= true;
  constructor() { }

  ngOnInit(): void {
  }
  twitchSubscribe(){
    window.open("https://www.twitch.tv/products/enagena");
   
  }
  showNavBar(){
    this.showBar = this.showBar === false ? true : false; 
  }
}
