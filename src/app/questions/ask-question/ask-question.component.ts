import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { QuestionDetail } from "src/app/models/question-detail";

@Component({
  selector: "app-ask-question",
  templateUrl: "./ask-question.component.html",
  styleUrls: ["./ask-question.component.less"],
})
export class AskQuestionComponent implements OnInit {
  questionId: string = null;
  form: FormGroup = new FormGroup({
    title: new FormControl("", Validators.required),
    body: new FormControl("", Validators.required),
    tags: new FormControl([], Validators.required),
  });

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      if (data.question) {
        this.questionId = data.question.id;
        this.form.controls.title.setValue(data.question.title);
        this.form.controls.body.setValue(data.question.body);
        this.form.controls.tags.setValue(data.question.tags);
      } else {
        this.questionId = null;
        this.form.reset();
      }
    });
  }

  submit() {
    if (this.form.valid) {
      if(this.questionId){
        this.http
        .put(`questions/${this.questionId}`, this.form.value)
        .subscribe((question: any) => {
          this.router.navigate(["questions", question.id]);
        });
      }else {
        this.http
        .post("questions", this.form.value)
        .subscribe((question: any) => {
          this.router.navigate(["questions", question.id]);
        });
      }
    }
  }
}
