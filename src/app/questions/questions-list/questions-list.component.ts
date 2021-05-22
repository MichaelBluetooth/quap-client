import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuestionSummary } from 'src/app/models/question-summary';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.less'],
})
export class QuestionsListComponent implements OnInit {
  questions$: Observable<QuestionSummary[]> = this.route.data.pipe(
    map((d) => d.questions)
  );

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
