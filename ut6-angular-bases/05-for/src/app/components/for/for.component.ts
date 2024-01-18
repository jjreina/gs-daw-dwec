import { Component } from '@angular/core';
import { cars } from '../../../mock/mockDataCars';

@Component({
  selector: 'app-components-for',
  templateUrl: './for.component.html',
  styleUrl: './for.component.css',
})
export class ForComponent {
  public cars: any[] = cars;
}
