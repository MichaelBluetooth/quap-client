import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagDetailsComponent } from './components/tag-details/tag-details.component';
import { TagsListComponent } from './components/tags-list/tags-list.component';
import { TagFormComponent } from './components/tag-form/tag-form.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TagDetailsComponent,
    TagsListComponent,
    TagFormComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TagsRoutingModule
  ]
})
export class TagsModule { }
