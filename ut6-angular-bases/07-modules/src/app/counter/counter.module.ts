import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';
import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [CounterComponent, MainPageComponent],
  exports: [MainPageComponent],
})
export class CounterModule {}
