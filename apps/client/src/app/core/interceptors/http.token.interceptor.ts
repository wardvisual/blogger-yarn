import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor() {}
  // TODO: make jwt service
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const headersConfig: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const token = '';

    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
    }

    const appRequest = request.clone({ setHeaders: headersConfig });

    return next.handle(appRequest);
  }
}
