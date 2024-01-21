import { NgModule } from '@angular/core';
import { DirectiveComponent } from './components/directive/directive.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DirectiveComponent],
  exports: [DirectiveComponent],
  imports: [CommonModule],
})
export class DirectiveModule {}
