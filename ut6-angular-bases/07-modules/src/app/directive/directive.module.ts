import { NgModule } from '@angular/core';
import { DirectiveComponent } from './components/directive/directive.component';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [DirectiveComponent, MainPageComponent],
  exports: [MainPageComponent],
  imports: [CommonModule],
})
export class DirectiveModule {}
