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
  private _userDetails = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertController: AlertService
  ) {}

  login(username: string, password: string) {
    this.http.post("users/login", { username, password }).subscribe(
      (resp) => {
        this._userDetails = resp;
        this._isAuthenticated.next(true);
        this.router.navigate([""]);
      },
      () => {
        this.alertController.createAlert("Invalid login", "danger");
      }
    );
  }

  logout(doDeleteSession: boolean = true) {
    if (this._isAuthenticated.value && doDeleteSession) {
      this.http.delete("users/logout").subscribe((_) => {
        this._userDetails = null;
        this._isAuthenticated.next(false);
        this.router.navigate(["login"]);
      });
    } else {
      this._userDetails = null;
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

  get user() {
    return this._userDetails;
  }
}
