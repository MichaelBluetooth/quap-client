import { Injectable } from "@angular/core";
import { AnswerDetail } from "src/app/models/answer-detail";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class PermissionsService {
  constructor(private auth: AuthService) {}

  canEditAnswer(answer: AnswerDetail) {
    return this.auth.user.id == answer.createdByUserId;
  }

  canDeleteAnswer(answer: AnswerDetail) {
    return this.auth.user.id == answer.createdByUserId;
  }
}
