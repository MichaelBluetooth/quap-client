import { Component, Input, OnInit } from "@angular/core";
import { AnswerDetail } from "src/app/models/answer-detail";
import { CurrentQuestion } from "src/app/services/current-question/current-question.service";

@Component({
  selector: "app-answer",
  templateUrl: "./answer.component.html",
  styleUrls: ["./answer.component.css"],
})
export class AnswerComponent implements OnInit {
  @Input() answer: AnswerDetail;
  @Input() questionId: string;

  constructor(private question: CurrentQuestion) {}

  ngOnInit(): void {}

  answerComment(c: any): void {
    this.question.commentAnswer(this.answer.id, c.comment);
  }

  accept(): void {
    this.question.acceptAnswer(this.answer.id, !this.answer.accepted);
  }

  upvoteAnswer(): void {
    this.question.upvoteAnswer(this.answer.id);
  }

  downvoteAnswer(): void {
    this.question.downvoteAnswer(this.answer.id);
  }

  removevoteAnswer(): void {
    this.question.removevoteAnswer(this.answer.id);
  }

  deleteAnswer(): void {
    this.question.deleteAnswer(this.answer.id);
  }
}
