import { Component } from '@angular/core';

@Component({
  selector: 'app-components-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  public title: string = 'Counter Component implemented in Angular';
  public counter: number = 0;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public reset(): void {
    this.counter = 0;
  }
}
