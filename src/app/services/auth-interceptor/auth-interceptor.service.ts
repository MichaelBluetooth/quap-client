import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { AlertService } from "../alert/alert.service";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private alertController: AlertService,
    private auth: AuthService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.alertController.removeAlert();

    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.auth.logout(false);
          } else if (err.status === 400 || err.status === 500 || err.status === 403) {
            this.alertController.createAlert(err.error, "danger", 10000);
          }
        }
        return throwError(err);
      }),
      tap((_) => {
        this.auth.setLoggedInStatus(true);
      })
    );
  }
}
