import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Optional,
  ViewChild,
} from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Component({
  selector: "app-tags-input",
  templateUrl: "./tags-input.component.html",
  styleUrls: ["./tags-input.component.less"],
})
export class TagsInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild("tagsInput", { static: true }) tagsInput: ElementRef;

  @Input() placeholder: string = "";

  isFocus = false;
  currentTag: string = "";
  tags: string[] = ["test", "test2"];
  control: NgControl;
  disabled = false;

  constructor(@Optional() ngControl: NgControl) {
    if (ngControl) {
      this.control = ngControl;
      this.control.valueAccessor = this;
    }
  }

  writeValue(obj: string[]): void {
    this.tags = obj ?? [];
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  ngOnInit(): void {}

  focusMe() {
    this.isFocus = true;
  }

  blurMe() {
    this.isFocus = false;
  }

  checkAddTag(keyEvt: any) {
    if (this.currentTag && this.tags.indexOf(this.currentTag) === -1) {
      this.tags.push(this.currentTag);
      this.currentTag = "";
      this.onChangeCallback(this.tags);
    }
    this.tagsInput.nativeElement.focus();
    keyEvt.preventDefault();
  }

  removeTag(idx: number) {
    this.tags.splice(idx, 1);
  }

  @HostListener("document:keydown.enter", ["$event"])
  onKeydownHandler(event: KeyboardEvent) {
    if (this.isFocus) {
      event.preventDefault();
      this.tagsInput.nativeElement.focus();
    }
  }

  @HostListener("click")
  onClick() {
    this.focusMe();
    this.tagsInput.nativeElement.focus();
  }
}
