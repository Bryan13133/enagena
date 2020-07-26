import { AccountComponent } from './Components/AccountComponent/account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/HomeComponent/home/home.component';
import { SubscribeComponent } from './Components/SubscribeComponent/subscribe/subscribe.component';
import { StoreComponent } from './Components/StoreComponent/store/store.component';
import { NotFoundComponent } from './Components/NotFoundComponent/not-found/not-found.component';
import { ToolbarComponent } from './Components/ToolBarComponent/toolbar/toolbar.component';
import { FooterComponent } from './Components/FooterComponent/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './Components/CalendarComponent/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubscribeComponent,
    AccountComponent,
    StoreComponent,
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
