import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { AlertService } from "../alert/alert.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router, private alertController: AlertService) {}

  login(username: string, password: string) {
    this.http.post("users/login", { username, password }).subscribe(() => {
      this._isAuthenticated.next(true);
      this.router.navigate([""]);
    }, () => {
      this.alertController.createAlert('Invalid login', 'danger');
    });
  }

  logout(doDeleteSession: boolean = true) {
    if (this._isAuthenticated.value && doDeleteSession) {
      this.http.delete("users/logout").subscribe((_) => {
        this._isAuthenticated.next(false);
        this.router.navigate(["login"]);
      });
    } else {
      this._isAuthenticated.next(false);
      this.router.navigate(["login"]);
    }
  }

  setLoggedInStatus(isLoggedIn: boolean) {
    this._isAuthenticated.next(isLoggedIn);
  }

  get isAuthenticated$() {
    return this._isAuthenticated.asObservable();
  }
}
