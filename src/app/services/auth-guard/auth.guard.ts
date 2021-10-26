import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(): Observable<boolean> {
    return this.auth.isAuthenticated$.pipe(
      tap((isAuthed) => {
        if (isAuthed) {
          this.auth.loadUserDetails();
          this.router.navigate(['']);
        } else {
          this.router.navigate(['login']);
        }
      })
    );
  }
}
