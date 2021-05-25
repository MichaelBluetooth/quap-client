import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionResolverService } from '../services/question-resolver/question-resolver.service';
import { QuestionsResolverService } from '../services/questions-resolver/questions-resolver.service';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsContainerComponent } from './questions-container/questions-container.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionsContainerComponent,
    children: [
      {
        path: '',
        component: QuestionsListComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          results: QuestionsResolverService,
        },
      },
      {
        path: 'questions',
        redirectTo: '',
      },
      {
        path: 'questions/:id',
        component: QuestionComponent,
        resolve: {
          question: QuestionResolverService,
        },
      },
      {
        path: 'ask',
        component: AskQuestionComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule {}
