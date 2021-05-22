import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less'],
})
export class CommentsComponent implements OnInit {
  @Input() comments: any[] = [];
  @Input() createdByUsername: string = '';

  @Output() commentAdded: EventEmitter<string> = new EventEmitter<string>();

  isAddMode: boolean = false;
  form: FormGroup = new FormGroup({
    comment: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.isAddMode = !this.isAddMode;
    this.form = new FormGroup({
      comment: new FormControl('', Validators.required),
    });
  }

  submit(): void {
    if(this.form.valid){
      this.commentAdded.emit(this.form.value);
      this.toggle();
    }
  }
}
