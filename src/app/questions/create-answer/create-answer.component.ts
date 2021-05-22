import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.less'],
})
export class CreateAnswerComponent implements OnInit {
  @Output() answered = new EventEmitter<string>();

  form = new FormGroup({
    body: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      this.answered.emit(this.form.value.body);

      this.form = new FormGroup({
        body: new FormControl('', Validators.required),
      });
    }
  }
}
