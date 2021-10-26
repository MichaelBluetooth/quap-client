import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CurrentUserService {
  private _userDetails: any = null;

  loadUserDetails() {
    let userString = localStorage.getItem("user_details");
    if (userString) {
      this._userDetails = JSON.parse(userString);
    }
  }

  setUserDetails(userDetails) {
    localStorage.setItem("user_details", JSON.stringify(userDetails));
    this._userDetails = userDetails;
  }

  clearUserDetails() {
    localStorage.removeItem("user_details");
  }

  getUser() {
    return this._userDetails;
  }
}
