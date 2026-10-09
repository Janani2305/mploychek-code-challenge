import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RecordItem {
  id: number;
  title: string;
  access: string;
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
}