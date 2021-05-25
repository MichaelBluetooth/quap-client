import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AnswerDetail } from "src/app/models/answer-detail";
import { QuestionDetail } from "src/app/models/question-detail";
import { CurrentQuestion } from "src/app/services/current-question/current-question.service";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.less"],
})
export class QuestionComponent implements OnInit {
  question$: Observable<QuestionDetail> = this.currentQuestion.question$;

  constructor(private currentQuestion: CurrentQuestion) {}

  ngOnInit(): void {}

  questionComment(c: any) {
    this.currentQuestion.commentQuestion(c.comment);
  }

  answerComment(answerId: string, c: any) {
    this.currentQuestion.commentAnswer(answerId, c.comment);
  }

  upvoteQuestion() {
    this.currentQuestion.upvoteQuestion();
  }

  downvoteQuestion() {
    this.currentQuestion.downvoteQuestion();
  }

  removevoteQuestion() {
    this.currentQuestion.removevoteQuestion();
  }

  upvoteAnswer(anwerId: string) {
    this.currentQuestion.upvoteAnswer(anwerId);
  }

  downvoteAnswer(anwerId: string) {
    this.currentQuestion.downvoteAnswer(anwerId);
  }

  answerQuestion(answer: string) {
    this.currentQuestion.answerQuestion(answer);
  }

  removevoteAnswer(answerId: string) {
    this.currentQuestion.removevoteAnswer(answerId);
  }

  accept(answer: AnswerDetail) {
    this.currentQuestion.acceptAnswer(answer.id, !answer.accepted);
  }

  deleteQuestion() {
    this.currentQuestion.delete();
  }
}
