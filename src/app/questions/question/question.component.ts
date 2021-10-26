import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
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

  upvoteQuestion() {
    this.currentQuestion.upvoteQuestion();
  }

  downvoteQuestion() {
    this.currentQuestion.downvoteQuestion();
  }

  removevoteQuestion() {
    this.currentQuestion.removevoteQuestion();
  }

  answerQuestion(answer: string) {
    this.currentQuestion.answerQuestion(answer);
  }

  deleteQuestion() {
    this.currentQuestion.delete();
  }
}
