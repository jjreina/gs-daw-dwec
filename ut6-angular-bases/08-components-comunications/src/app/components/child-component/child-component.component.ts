import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css',
})
export class ChildComponentComponent {
  constructor(public testService: TestService) {}

  @Input()
  public item: string = '';

  @Output()
  public newItemEvent: EventEmitter<string> = new EventEmitter<string>();

  public title = this.testService.titleChild;

  public addNewItem(value: string): void {
    this.newItemEvent.emit(value);
  }
}
