import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const copiedReq = req.clone();
    // const copiedReq = req.clone({headers: req.headers.set('Access-Control-Allow-Credentials', '*')});
    console.log('Intercepted', copiedReq);

    return next.handle(copiedReq);
  }
}
