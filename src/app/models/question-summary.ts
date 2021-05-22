export interface QuestionSummary {
  id: string;
  title: string;
  createdByUsername: string;
  tags: string[];
  created: Date;
  lastModified: Date;  
  answersCount: number;
  hasAcceptedAnswer: boolean;
  votesCount: number;
}
