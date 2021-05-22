import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { QuestionDetail } from 'src/app/models/question-detail';

@Injectable({
  providedIn: 'root',
})
export class CurrentQuestion {
  private _question: BehaviorSubject<QuestionDetail> =
    new BehaviorSubject<QuestionDetail>(null);

  constructor(private http: HttpClient) {}

  public get question$() {
    return this._question.asObservable();
  }

  setQuestion(question: QuestionDetail) {
    this._question.next(question);
  }

  commentQuestion(comment: string): void {
    this.http
      .post('questions/comment', {
        postId: this._question.value.id,
        comment: comment,
      })
      .subscribe((resp: any) => {
        const q = this._question.value;
        q.comments.push(resp);
        this.setQuestion(q);
      });
  }

  commentAnswer(answerId: string, comment: string): void {
    this.http
      .post('answers/comment', {
        postId: answerId,
        comment: comment,
      })
      .subscribe((resp: any) => {
        const q = this._question.value;
        q.answers.forEach((a) => {
          if (a.id === answerId) {
            a.comments.push(resp);
          }
        });
        this.setQuestion(q);
      });
  }

  upvoteQuestion() {
    this.vote('upvote');
  }

  downvoteQuestion() {
    this.vote('downvote');
  }

  removevoteQuestion() {
    this.vote('none');
  }

  upvoteAnswer(answerId: string) {
    this.voteAnswer(answerId, 'upvote');
  }

  downvoteAnswer(answerId: string) {
    this.voteAnswer(answerId, 'downvote');
  }

  removevoteAnswer(answerId: string) {
    this.voteAnswer(answerId, 'none');
  }

  vote(voteType: string) {
    this.http
      .post('questions/vote', {
        voteType: voteType,
        postId: this._question.value.id,
      })
      .subscribe((resp: any) => {
        this._question.next(resp);
      });
  }

  voteAnswer(answerId: string, voteType: string) {
    this.http
      .post('answers/vote', {
        voteType: voteType,
        postId: answerId,
      })
      .subscribe((resp: any) => {
        const q = this._question.value;
        const idx = q.answers.findIndex((a) => a.id === resp.id);
        q.answers[idx] = resp;
        this.setQuestion(q);
      });
  }

  answerQuestion(body: string) {
    this.http
      .post('answers', {
        questionId: this._question.value.id,
        body: body,
      })
      .subscribe((resp: any) => {
        let q = this._question.value;
        q.answers.push(resp);
        this.setQuestion(q);
      });
  }

  acceptAnswer(answerId: string, accept: boolean) {
    this.http
      .post('answers/' + (accept ? 'accept' : 'unaccept'), { answerId })
      .subscribe((resp: any) => {
        const q = this._question.value;
        const idx = q.answers.findIndex((a) => a.id === resp.id);
        q.answers[idx] = resp;
        this.setQuestion(q);
      });
  }
}
