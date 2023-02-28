import { HttpHandler, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

import { AuthService } from './auth.service';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  // HTTP REQS

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user?.token as string | number),
        });
        return next.handle(modifiedReq);
      })
    );
  }

  // this interceptor will run before http requests
  // we have to use "next" so the reqs can run - if not they will not and it will break
  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   console.log('testing interceptors - req on its way');
  //   return next.handle(req);
  // }
}
