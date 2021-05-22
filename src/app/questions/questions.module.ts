import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionsContainerComponent } from './questions-container/questions-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { QuestionComponent } from './question/question.component';
import { CommentsComponent } from './comments/comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoteTickerComponent } from './vote-ticker/vote-ticker.component';
import { CreateAnswerComponent } from './create-answer/create-answer.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { TagsInputComponent } from './tags-input/tags-input.component';

@NgModule({
  declarations: [
    NavbarComponent,
    QuestionsListComponent,
    QuestionsContainerComponent,
    TimeAgoPipe,
    QuestionComponent,
    CommentsComponent,
    VoteTickerComponent,
    CreateAnswerComponent,
    AskQuestionComponent,
    TagsInputComponent,
  ],
  imports: [
    MarkdownModule.forRoot(),
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    QuestionsRoutingModule
  ],
})
export class QuestionsModule {}
