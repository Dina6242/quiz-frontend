import { HttpInterceptor } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req, next): any {
    const token = localStorage.getItem('token');
    const authRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
    },
    });
    return next.handle(authRequest);
  }
}
