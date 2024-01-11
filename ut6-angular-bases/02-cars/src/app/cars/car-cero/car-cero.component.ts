import { Component } from '@angular/core';
import { mockCars } from '../../mockcars';

@Component({
  selector: 'app-cars-car-cero',
  templateUrl: './car-cero.component.html',
  styleUrl: './car-cero.component.css',
})
export class CarCeroComponent {
  private id: number = mockCars[0].id;
  public year: number = mockCars[0].year;
  public make: string = mockCars[0].make;
  public model: string = mockCars[0].model;
  public type: string = mockCars[0].type;
}
