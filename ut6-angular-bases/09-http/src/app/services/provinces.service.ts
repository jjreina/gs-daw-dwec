import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProvincesResponse } from '../interfaces/provincesInterface';

@Injectable({
  providedIn: 'root',
})
export class ProvincesService {
  private url: string = 'https://apimocha.com/jjreina/provinces1';

  constructor(private http: HttpClient) {}

  public getProvices(): Observable<ProvincesResponse> {
    return this.http.get<ProvincesResponse>(this.url);
  }
}
