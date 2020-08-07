import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable()
export class AuthService {
  constructor(private  http: HttpClient) {}
  register(credentials): void {
    this.http.post(`http://localhost:60197/api/account`, credentials, {responseType: 'text'}).subscribe(res => {
    localStorage.setItem('token', res);
  });
}
}
