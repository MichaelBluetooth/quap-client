import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { QuestionSearchResults } from "src/app/models/question-search-results";

@Component({
  selector: "app-questions-list",
  templateUrl: "./questions-list.component.html",
  styleUrls: ["./questions-list.component.less"],
})
export class QuestionsListComponent implements OnInit {
  questions$: Observable<QuestionSearchResults> = this.route.data.pipe(
    map((d) => d.results)
  );
  queryData$: Observable<any> = this.route.queryParams.pipe(
    map((d) => {
      return { tag: d.tag, text: d.text };
    })
  );

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  clearTag() {
  }

  clearText() {}
}
