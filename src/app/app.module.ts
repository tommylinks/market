import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from "@angular/http";

import { RouterModule, Routes } from "@angular/router";

import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import {ItemsListComponent} from "./items-list/items-list.component";
import { DetailComponent } from './detail/detail.component'
import {LoginComponent} from "./login/login.component";

import {AuthGuardService} from "./serice/auth-guard.service";
import {AuthService} from "./serice/auth.service";
import {DbService} from "./serice/db.service";

const routs: Routes = [
    {path: "login", component: LoginComponent},
    {path: "catalog", component: ItemsListComponent, canActivate: [AuthGuardService]},
    {path: "detail/:id", component: DetailComponent},
    {path: "", redirectTo: '/login', pathMatch: 'full'},
    {path: "**", redirectTo: '/login'}

];

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    DetailComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routs),
    FormsModule
  ],
  providers: [AuthService, AuthGuardService, DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
