import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortRepo"
})
export class SortRepoPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value.sort((a, b) => {
      if (a.updated_at > b.updated_at) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
