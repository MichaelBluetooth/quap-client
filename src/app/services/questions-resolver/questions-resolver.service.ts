import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuestionSummary } from 'src/app/models/question-summary';

@Injectable({
  providedIn: 'root',
})
export class QuestionsResolverService implements Resolve<QuestionSummary[]> {
  constructor(private http: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<QuestionSummary[]> {
    return this.http.get('questions').pipe(
      map((resp: any) => {
        return resp as QuestionSummary[];
      })
    );
  }
}
