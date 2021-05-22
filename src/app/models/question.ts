export interface Question {
  title: string;
  body: string;
  createdById: string;
  createdBy: any;
  tags: any[];
  comments: any[];
  created: Date;
  lastModified: Date;
}
