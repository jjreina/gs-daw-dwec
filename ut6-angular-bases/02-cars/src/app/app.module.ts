import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarCeroComponent } from './cars/car-cero/car-cero.component';
import { CarOneComponent } from './cars/car-one/car-one.component';
import { CarTwoComponent } from './cars/car-two/car-two.component';

@NgModule({
  declarations: [AppComponent, CarCeroComponent, CarOneComponent, CarTwoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
