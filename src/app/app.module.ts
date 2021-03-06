import { AccountComponent } from './Components/AccountComponent/account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/HomeComponent/home/home.component';
import { StoreComponent } from './Components/StoreComponent/store/store.component';
import { NotFoundComponent } from './Components/NotFoundComponent/not-found/not-found.component';
import { ToolbarComponent } from './Components/ToolBarComponent/toolbar/toolbar.component';
import { FooterComponent } from './Components/FooterComponent/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {  MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './Components/LoginComponent/login/login.component';
import { SignupComponent } from './Components/SignupComponent/signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BnNgIdleService } from 'bn-ng-idle';
import { DatePipe } from '@angular/common'



FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    StoreComponent,
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BnNgIdleService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
