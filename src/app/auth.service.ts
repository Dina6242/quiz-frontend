import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()

export class AuthService {
  constructor(private  http: HttpClient) {}

  // tslint:disable-next-line:typedef
  register(credentials) {
    this.http.post<any>(`http://localhost:60197/api/account`, credentials).subscribe(res => {
      localStorage.setItem('token', res.token);
    });
  }
}

