import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TagDetails } from "../models/tag-details";
import { TagRequest } from "../models/tag-request";

@Injectable({
  providedIn: 'root'
})
export class TagService {
  constructor(private http: HttpClient) {}

  getTags(): Observable<TagDetails[]> {
    return this.http.get<TagDetails[]>("tags");
  }

  getTag(id: string): Observable<TagDetails> {
    return this.http.get<TagDetails>(`tags/${id}`);
  }

  createTag(tag: TagRequest): Observable<TagDetails> {
    return this.http.post<TagDetails>("tags", tag);
  }

  updateTag(id: string, tag: TagRequest): Observable<TagDetails> {
    return this.http.put<TagDetails>(`tags/${id}`, tag);
  }

  deleteTag(id: string): Observable<any> {
    return this.http.delete(`tags/${id}`);
  }
}
