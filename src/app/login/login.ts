import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private auth = inject(Auth);
  private router = inject(Router);

  error = signal('');
  loading = signal(false);

  form = this.fb.group({
    userId: ['', Validators.required],
    password: ['', Validators.required],
    role: ['General User', Validators.required],
  });

  submit() {
    if (this.form.invalid) return;
    localStorage.removeItem('user');
    this.loading.set(true);
    this.error.set('');
    const { userId, password, role } = this.form.value;

    this.auth.login(userId!, password!, role!).subscribe({
      next: (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/home']);
      },
      error: () => {
        this.error.set('Invalid ID, password or role');
        this.loading.set(false);
      },
    });
  }
}