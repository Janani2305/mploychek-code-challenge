import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router';
imports: [RouterOutlet, RouterLink]

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mploychek-app');
}
