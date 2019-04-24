import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainBoardComponent } from './main-board/main-board.component';
import { FormControl } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MetricsComponent } from './metrics/metrics.component';
import { MetricsModule } from './metrics/metrics.module';

const routes: Routes = [
  {path: '', redirectTo: 'template', pathMatch: 'full'},
  {path: 'template', component: MainBoardComponent},
  {path: 'metrics', component: MetricsComponent}
]

@NgModule({
  declarations: [
  AppComponent,
  MainBoardComponent,
  MetricsComponent,

  ],
  imports: [ 
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forRoot(routes),
  AppRoutingModule,
  MetricsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
