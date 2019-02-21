import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserService} from './user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.userService.getUserToken() !== undefined) {
      const tk = this.userService.getUserToken().token;
      const copiedReq = req.clone({headers: req.headers.append('Authorization', tk)});
      console.log('Auth Log', copiedReq)
      return next.handle(copiedReq);
    }
    // const copiedReq = req.clone({headers: req.headers.set('Access-Control-Allow-Credentials', '*')});
    console.log(req);
    return next.handle(req);
  }
}
