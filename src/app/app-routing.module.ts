import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./questions/about/about.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./questions/questions.module").then((m) => m.QuestionsModule),
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // relativeLinkResolution: "legacy",
      anchorScrolling: 'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
