import { Component, OnInit } from '@angular/core';
import { ProvincesService } from './services/provinces.service';
import { ProvincesResponse, Province } from './interfaces/provincesInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'http';
  public provinces: Province[] = [];

  constructor(public provincesService: ProvincesService) {}

  ngOnInit() {
    this.provincesService.getProvices().subscribe((res: ProvincesResponse) => {
      this.provinces = res.results;
    });
  }
}
