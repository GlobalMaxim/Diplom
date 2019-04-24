import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainBoardComponent } from './main-board/main-board.component';
import { FormControl } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
  AppComponent,
  MainBoardComponent,

  ],
  imports: [ 
  BrowserModule,
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
