import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "filter",
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], key: string, value: string): any {
    if (!items || !key || !value) {
      return items;
    }

    return items.filter((item) => item[key] == value);
  }
}
