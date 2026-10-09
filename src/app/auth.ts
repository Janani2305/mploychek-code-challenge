// import { inject} from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export interface User{
//     userid: string;
//     name: string;
//     role: string;
// }
// export class Auth {
//     private http= inject(HttpClient);
//     private api='http://localhost:3000';

//     login(userid: string, password: string, role: string): Observable<User> {
//         return this.http.post<User>(`${this.api}/login`, { userid, password, role });
//     }
// }


import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  userId: string;
  name: string;
  role: string;
}

@Service()
export class Auth {
  private http = inject(HttpClient);
  private api = 'http://localhost:3000';

  login(userId: string, password: string, role: string): Observable<User> {
    return this.http.post<User>(`${this.api}/login`, { userId, password, role });
  }
}