import { NotFoundComponent } from './Components/NotFoundComponent/not-found/not-found.component';
import { StoreComponent } from './Components/StoreComponent/store/store.component';
import { AccountComponent } from './Components/AccountComponent/account/account.component';
import { HomeComponent } from './Components/HomeComponent/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes=[
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes)
  ],
  exports:
  [
    RouterModule
  ]

})
export class AppRoutingModule { }
