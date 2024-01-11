import { Component } from '@angular/core';
import { mockCars } from '../../mockcars';

@Component({
  selector: 'app-cars-car-one',
  templateUrl: './car-one.component.html',
  styleUrl: './car-one.component.css',
})
export class CarOneComponent {
  private id: number = mockCars[1].id;
  public year: number = mockCars[1].year;
  public make: string = mockCars[1].make;
  public model: string = mockCars[1].model;
  public type: string = mockCars[1].type;
}
