export interface AnswerDetail {
  id: string;
  body: string;
  createdByUsername: string;
  created: Date;
  lastModified: Date;
  comments: any[];
  votesCount: number;
  userVoteType: string;
  accepted: boolean;
}
