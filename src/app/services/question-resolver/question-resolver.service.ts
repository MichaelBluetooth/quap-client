import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuestionDetail } from 'src/app/models/question-detail';
import { CurrentQuestion } from '../current-question/current-question.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionResolverService implements Resolve<QuestionDetail> {
  constructor(
    private http: HttpClient,
    private currentQuestion: CurrentQuestion
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<QuestionDetail> {
    return this.http.get(`questions/${route.params.id}`).pipe(
      map((resp: any) => {
        this.currentQuestion.setQuestion(resp);
        return resp as QuestionDetail;
      })
    );
  }
}
