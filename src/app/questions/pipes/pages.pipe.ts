import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "pages",
})
export class PagesPipe implements PipeTransform {
  transform(totalPages: number, currentPage: number) {
    const arr = [];

    if (currentPage === 1) {
      for (let i = 1; i < 5 && i <= totalPages; i++) {
        arr.push(i);
      }
    }
    return arr;
  }
}
