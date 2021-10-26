import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-confirm",
  templateUrl: "./confirm.component.html",
  styleUrls: ["./confirm.component.css"],
})
export class ConfirmComponent {
  @Input() title: string;
  @Input() body: string;
  @Output() confirm = new EventEmitter();
  @Output() cancel = new EventEmitter();
}
