import { Component } from '@angular/core';
import { mockCars } from '../../mockcars';

@Component({
  selector: 'app-cars-car-two',
  templateUrl: './car-two.component.html',
  styleUrl: './car-two.component.css',
})
export class CarTwoComponent {
  private id: number = mockCars[2].id;
  public year: number = mockCars[2].year;
  public make: string = mockCars[2].make;
  public model: string = mockCars[2].model;
  public type: string = mockCars[2].type;
}
