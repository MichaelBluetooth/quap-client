import { Component, OnInit } from "@angular/core";
import { TagStateService } from "../../services/tag-state.service";

@Component({
  selector: "app-tags-list",
  templateUrl: "./tags-list.component.html",
  styleUrls: ["./tags-list.component.css"],
})
export class TagsListComponent implements OnInit {
  tags$ = this.tagSvc.tagsList$;

  constructor(private tagSvc: TagStateService) {}

  ngOnInit(): void {    
    this.tagSvc.refreshTags();
  }
}
