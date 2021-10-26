import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AnswerDetail } from "src/app/models/answer-detail";
import { AuthService } from "src/app/services/auth/auth.service";
import { CurrentQuestion } from "src/app/services/current-question/current-question.service";
import { PermissionsService } from "src/app/services/permissions/permissions.service";

@Component({
  selector: "app-answer",
  templateUrl: "./answer.component.html",
  styleUrls: ["./answer.component.css"],
})
export class AnswerComponent implements OnInit {
  @Input() answer: AnswerDetail;
  @Input() questionId: string;

  isEdit = false;
  answerForm: FormGroup;

  constructor(
    private question: CurrentQuestion,
    private perms: PermissionsService
  ) {}

  ngOnInit(): void {
    this.answerForm = new FormGroup({
      body: new FormControl(this.answer.body, Validators.required),
    });
  }

  canEdit() {
    return this.perms.canEditAnswer(this.answer);
  }

  canDelete() {
    return this.perms.canDeleteAnswer(this.answer);
  }

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

  edit(): void {
    this.isEdit = true;
  }

  cancelEdit(): void {
    this.isEdit = false;
  }

  submitEdit(): void {
    if (this.answerForm.valid) {
      this.question.updateAnswer(
        this.answer.id,
        this.answerForm.controls.body.value
      );
    }
  }
}
