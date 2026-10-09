import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private router = inject(Router);
  protected readonly title = signal('mploychek-app');

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}