import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BaseUrlService implements HttpInterceptor {

  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    let withCreds = true;
    if(request.url.indexOf('users/login') > 0){
      withCreds = false;
    }

    const req = request.clone({
      withCredentials: withCreds,
      url: 'https://localhost:5001/api/' + request.url
    });

    return next.handle(req);
  }
}
