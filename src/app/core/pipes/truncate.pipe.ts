import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "truncate",
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: number): unknown {
    if (value && value.length > length) {
      return value.substring(0, length - 3) + "...";
    } else {
      return value;
    }
  }
}
