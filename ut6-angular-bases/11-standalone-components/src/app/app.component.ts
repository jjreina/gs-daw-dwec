import { Component } from '@angular/core';
import { MainPageComponent } from './components/pages/main-pages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MainPageComponent],
  standalone: true,
})
export class AppComponent {
  title = 'Angular Movies';
}
