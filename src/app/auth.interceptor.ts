import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { BackService } from './shared/back.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private bs: BackService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let headers = req.headers;
    headers = headers.set('Authorization', `Bearer ${this.bs.currentToken}`);
    req = req.clone({ headers });
    return next.handle(req);
  }
}
