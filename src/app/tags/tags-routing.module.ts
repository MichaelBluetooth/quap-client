import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TagFormComponent } from "./components/tag-form/tag-form.component";
import { TagsListComponent } from "./components/tags-list/tags-list.component";
import { TagResolver } from "./resolvers/tag.resolver";

const routes: Routes = [
  {
    path: "",
    component: TagsListComponent
  },
  {
    path: "add",
    component: TagFormComponent,
  },
  {
    path: ":id/edit",
    component: TagFormComponent,
    resolve: {
      tag: TagResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsRoutingModule {}
