import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService, AppUser } from '../user';

@Component({
  selector: 'app-admin',
  imports: [ReactiveFormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  private userService = inject(UserService);
  private fb = inject(FormBuilder);

  users = signal<AppUser[]>([]);
  loading = signal(true);

  form = this.fb.group({
    userId: ['', Validators.required],
    password: ['', Validators.required],
    name: ['', Validators.required],
    role: ['General User', Validators.required],
  });

  constructor() {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.userService.getUsers(2000).subscribe((data) => {
      this.users.set(data);
      this.loading.set(false);
    });
  }

  add() {
    if (this.form.invalid) return;
    this.userService.addUser(this.form.getRawValue() as AppUser).subscribe(() => {
      this.form.reset({ role: 'General User' });
      this.load();
    });
  }

  remove(userId: string) {
    this.userService.deleteUser(userId).subscribe(() => this.load());
  }
}