import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { TagDetails } from "../models/tag-details";
import { TagService } from "./tag.service";

@Injectable({
  providedIn: 'root'
})
export class TagStateService {
  private _tagsList: BehaviorSubject<TagDetails[]> = new BehaviorSubject<
    TagDetails[]
  >([]);

  get tagsList$(): Observable<TagDetails[]> {
    return this._tagsList.asObservable();
  }

  constructor(private tagSvc: TagService, private router: Router) {}

  refreshTags(): void {
    this.tagSvc.getTags().subscribe((tags) => {
      this._tagsList.next(tags);
    });
  }

  deleteTag(id: string): void {
    this.tagSvc.deleteTag(id).subscribe(() => {
      this.refreshTags();
      this.router.navigate(["/tags"]);
    });
  }
}
