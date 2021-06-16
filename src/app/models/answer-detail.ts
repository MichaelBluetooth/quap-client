export interface AnswerDetail {
  id: string;
  body: string;
  createdByUsername: string;
  createdByUserId: string;
  created: Date;
  lastModified: Date;
  comments: any[];
  votesCount: number;
  userVoteType: string;
  accepted: boolean;
}
