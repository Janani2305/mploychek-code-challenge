import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RecordItem {
  id: number;
  title: string;
  access: string;
}

export interface AppUser {
  userId: string;
  password: string;
  name: string;
  role: string;
}

@Service()
export class UserService {
  private http = inject(HttpClient);
  private api = 'http://localhost:3000';

  getRecords(role: string, delay = 0): Observable<RecordItem[]> {
    return this.http.get<RecordItem[]>(`${this.api}/records`, {
      params: { role, delay },
    });
  }

  getUsers(delay = 0): Observable<AppUser[]> {
    return this.http.get<AppUser[]>(`${this.api}/users`, { params: { delay } });
  }

  addUser(user: AppUser): Observable<AppUser> {
    return this.http.post<AppUser>(`${this.api}/users`, user);
  }

  deleteUser(userId: string): Observable<unknown> {
    return this.http.delete(`${this.api}/users/${userId}`);
  }
}