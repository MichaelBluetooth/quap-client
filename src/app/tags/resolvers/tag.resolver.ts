import { Injectable } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { TagDetails } from "../models/tag-details";
import { TagService } from "../services/tag.service";

@Injectable({
  providedIn: "root",
})
export class TagResolver implements Resolve<TagDetails> {
  constructor(private tagsSvc: TagService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<TagDetails> {
    return this.tagsSvc.getTag(route.params.id);
  }
}
