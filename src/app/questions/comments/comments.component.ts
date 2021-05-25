import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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

  @ViewChild("commentsInput", { static: false }) commentsInput: ElementRef;

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

    if(this.isAddMode){
      setTimeout(() => {
        this.commentsInput.nativeElement.focus();  
      }, 5);
    }
  }

  submit(): void {
    if(this.form.valid){
      this.commentAdded.emit(this.form.value);
      this.toggle();
    }
  }
}
