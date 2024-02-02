import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}

  public titleParent: string = 'Parent Component';

  public titleChild: string = 'Child Component';
}
