import { Component, inject, signal } from '@angular/core';
import { UserService, RecordItem } from '../user';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private userService = inject(UserService);

  user = JSON.parse(localStorage.getItem('user') || 'null');
  records = signal<RecordItem[]>([]);
  loading = signal(true);

  constructor() {
    const role = this.user?.role ?? 'General User';
    this.userService.getRecords(role, 1500).subscribe((data) => {
      this.records.set(data);
      this.loading.set(false);
    });
  }
}