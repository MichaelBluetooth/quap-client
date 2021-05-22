import { AnswerDetail } from "./answer-detail";

export interface QuestionDetail {
  id: string;
  title: string;
  body: string;
  createdByUsername: string;
  tags: string[];
  created: Date;
  lastModified: Date;
  answers: AnswerDetail[];
  votesCount: number;
  comments: any[]
  userVoteType: string;
}
