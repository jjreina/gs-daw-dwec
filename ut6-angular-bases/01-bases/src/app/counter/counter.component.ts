import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
  styleUrls: ['counter.component.css'],
})
export class CounterComponent {
  public title: string = 'Counter implemented in Angular';
  public counter: number = 0;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public reset(): void {
    this.counter = 0;
  }
}
