import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CurrentUserResolver implements Resolve<any> {
  constructor(private http: HttpClient) {}

  resolve(): Observable<any> {
    return this.http.get(`users/currentuser`).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }
}
