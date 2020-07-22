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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubscribeComponent,
    AccountComponent,
    StoreComponent,
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
