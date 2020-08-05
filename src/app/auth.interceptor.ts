import { HttpInterceptor} from '@angular/common/http';


export class AuthInterceptor implements HttpInterceptor{
  constructor() {}
  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  intercept(req , next) {}
   var token = localStorage.getItem('token');
  var authRequest = req.clone({
    headers: req.header.set('Authorization', `Bearer ${token}`)
  });

  return next.handle(authRequest);
}

