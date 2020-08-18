import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<void>, next: HttpHandler): Observable<HttpEvent<void>>  {
    const token = localStorage.getItem('token');
    const authRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
    },
    });
    return next.handle(authRequest);
  }
}
