import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CurrentUserResolver } from "../services/current-user/current-user-resolver.service";
import { QuestionResolverService } from "../services/question-resolver/question-resolver.service";
import { QuestionsResolverService } from "../services/questions-resolver/questions-resolver.service";
import { UserDetailsResolver } from "../services/user-details/user-details-resolver.service";
import { AboutComponent } from "./about/about.component";
import { AskQuestionComponent } from "./ask-question/ask-question.component";
import { QuestionComponent } from "./question/question.component";
import { QuestionsContainerComponent } from "./questions-container/questions-container.component";
import { QuestionsListComponent } from "./questions-list/questions-list.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

const routes: Routes = [
  {
    path: "",
    component: QuestionsContainerComponent,
    children: [
      {
        path: "",
        component: QuestionsListComponent,
        runGuardsAndResolvers: "always",
        resolve: {
          results: QuestionsResolverService,
        },
      },
      {
        path: "questions",
        redirectTo: "",
      },
      {
        path: "about",
        component: AboutComponent,
      },
      {
        path: "questions/:id",
        component: QuestionComponent,
        resolve: {
          question: QuestionResolverService,
        },
      },
      {
        path: "ask",
        component: AskQuestionComponent,
      },
      {
        path: "users/profile",
        component: UserDetailsComponent,
        resolve: {
          user: CurrentUserResolver,
        },
      },
      {
        path: "users/:id",
        component: UserDetailsComponent,
        resolve: {
          user: UserDetailsResolver,
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule {}
