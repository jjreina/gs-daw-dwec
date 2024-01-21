import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { DirectiveModule } from './directive/directive.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule, DirectiveModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
