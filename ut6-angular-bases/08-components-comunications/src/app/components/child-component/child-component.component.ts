import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css',
})
export class ChildComponentComponent {
  @Input()
  public item: string = '';

  @Output()
  public newItemEvent: EventEmitter<string> = new EventEmitter<string>();

  public addNewItem(value: string): void {
    this.newItemEvent.emit(value);
  }
}
