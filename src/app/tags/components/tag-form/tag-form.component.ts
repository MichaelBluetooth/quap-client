import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TagService } from "../../services/tag.service";

@Component({
  selector: "app-tag-form",
  templateUrl: "./tag-form.component.html",
  styleUrls: ["./tag-form.component.css"],
})
export class TagFormComponent implements OnInit {
  tagId: string = null;
  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.maxLength(512)),
  });

  constructor(
    private tagSvc: TagService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((d) => {
      if (d.tag) {
        this.tagId = d.tag.id;
        this.form.controls.name.setValue(d.tag.name);
        this.form.controls.description.setValue(d.tag.description);
      } else {
        this.tagId = null;
        this.form.reset();
      }
    });
  }

  submit() {
    if (this.form.valid) {
      if (this.tagId) {
        this.tagSvc.updateTag(this.tagId, this.form.value).subscribe((tag) => {
          this.router.navigate(["/tags"]);
        });
      } else {
        this.tagSvc.createTag(this.form.value).subscribe((tag) => {
          this.router.navigate(["/tags"]);
        });
      }
    }
  }
}
