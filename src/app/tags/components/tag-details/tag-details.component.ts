import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmService } from "src/app/services/confirm/confirm.service";
import { TagDetails } from "../../models/tag-details";
import { TagStateService } from "../../services/tag-state.service";

@Component({
  selector: "app-tag-details",
  templateUrl: "./tag-details.component.html",
  styleUrls: ["./tag-details.component.css"],
})
export class TagDetailsComponent implements OnInit {
  @Input() tag: TagDetails;

  constructor(
    private confirm: ConfirmService,
    private tags: TagStateService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  delete() {
    this.confirm
      .createAlert(
        "Confirm Delete",
        "Are you sure you want to delete this tag? This cannot be undone."
      )
      .subscribe(() => {
        this.tags.deleteTag(this.tag.id);
      });
  }
}
