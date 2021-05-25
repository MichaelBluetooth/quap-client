import { Component, Input } from "@angular/core";
import { QuestionSearchResults } from "src/app/models/question-search-results";

@Component({
  selector: "app-pager",
  templateUrl: "./pager.component.html",
  styleUrls: ["./pager.component.css"],
})
export class PagerComponent {
  @Input() results: QuestionSearchResults;
}
