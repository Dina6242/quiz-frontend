import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Credentials} from './credentials';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private  http: HttpClient, private  router: Router) {
  }

  get isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  register(credentials: Credentials): void {
    this.http.post(`${environment.apiUrl}account`, credentials, {responseType: 'text'}).subscribe(res => {
      this.authenticate(res);
    });
  }

  login(credentials: Credentials): void {
    this.http.post(`${environment.apiUrl}account/login`, credentials, {responseType: 'text'}).subscribe(res => {
      this.authenticate(res);
    });
  }

  authenticate(res: string): void {
    localStorage.setItem('token', res);
    this.router.navigate(['/']);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
