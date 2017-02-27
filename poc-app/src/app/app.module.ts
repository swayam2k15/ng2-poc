import { NgModule }      from '@angular/core';
// import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
// import {RouterModule,Router} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent }   from './app.component';
import {routingComponents} from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule],
  declarations: [ AppComponent,routingComponents],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
