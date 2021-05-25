import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { QuestionSearchResults } from "src/app/models/question-search-results";

@Injectable({
  providedIn: "root",
})
export class QuestionsResolverService
  implements Resolve<QuestionSearchResults>
{
  constructor(
    private http: HttpClient
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<QuestionSearchResults> {
    const urlParts = [];

    if (route.queryParams.pageNumber) {
      urlParts.push("pageNumber=" + route.queryParams.pageNumber);
    }

    if (route.queryParams.pageSize) {
      urlParts.push("pageSize=" + route.queryParams.pageSize);
    }

    if (route.queryParams.text) {
      urlParts.push("text=" + route.queryParams.text);
    }

    if (route.queryParams.tag) {
      urlParts.push("tag=" + route.queryParams.tag);
    }

    return this.http.get("questions?" + urlParts.join("&")).pipe(
      map((resp: any) => {
        return resp as QuestionSearchResults;
      })
    );
  }
}
