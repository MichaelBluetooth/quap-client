import { QuestionSummary } from "./question-summary";

export class QuestionSearchResults {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPrevious: boolean;
  hasNext: boolean;
  questions: QuestionSummary[];
}
