import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FillPipe } from './pipes/fill.pipe';
import { PagesPipe } from './pipes/pages.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ConfirmComponent } from './components/confirm/confirm.component';



@NgModule({
  declarations: [
    TruncatePipe,
    FillPipe,
    PagesPipe,
    TimeAgoPipe,
    ConfirmComponent
  ],
  exports: [
    TruncatePipe,
    FillPipe,
    PagesPipe,
    TimeAgoPipe,
    ConfirmComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
