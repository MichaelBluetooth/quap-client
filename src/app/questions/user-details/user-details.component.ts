import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent implements OnInit {

  questionSliceCount = 5;
  isQuestionCollapsed = true;
  answerSliceCount = 5;
  isAnswerCollapsed = true;

  user$ = this.route.data.pipe(map((d) => d.user));

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  showAllQuestions(cnt){
    this.questionSliceCount = cnt;
    this.isQuestionCollapsed = false;
  }

  collapseQuestions(): void {
    this.questionSliceCount = 5;
    this.isQuestionCollapsed = true;
  }

  showAllAnswers(cnt){
    this.answerSliceCount = cnt;
    this.isAnswerCollapsed = false;
  }

  collapseAnswers(): void {
    this.answerSliceCount = 5;
    this.isAnswerCollapsed = true;
  }
}
