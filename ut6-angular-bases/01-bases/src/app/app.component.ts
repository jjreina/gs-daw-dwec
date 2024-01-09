import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  public title: string = 'Counter implemented in Angular';
  public counter: number = 0;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public reset(): void {
    this.counter = 0;
  }
}
