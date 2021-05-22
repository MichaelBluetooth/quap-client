import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionDetail } from 'src/app/models/question-detail';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.less'],
})
export class AskQuestionComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    tags: new FormControl([], Validators.required),
  });

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      this.http
        .post('questions', this.form.value)
        .subscribe((question: any) => {
          this.router.navigate(['questions', question.id]);
        });
    }
  }
}
