import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import {Credentials} from './credentials';

@Injectable()
export class AuthService {
  constructor(private  http: HttpClient, private  router: Router) {}
  get isAuthenticated(): boolean{
    return !!localStorage.getItem('token');
  }
  register(credentials: Credentials): void {
    this.http.post(`http://localhost:60197/api/account`, credentials, {responseType: 'text'}).subscribe(res => {
      this.authenticate(res);
  });
}
  login(credentials: Credentials): void {
    this.http.post(`http://localhost:60197/api/account/login`, credentials, {responseType: 'text'}).subscribe(res => {
      this.authenticate(res);
    });
  }
  authenticate(res: string): void{
    localStorage.setItem('token', res);
    this.router.navigate(['/']);
  }
  logout(): void{
    localStorage.removeItem('token');
  }
}
