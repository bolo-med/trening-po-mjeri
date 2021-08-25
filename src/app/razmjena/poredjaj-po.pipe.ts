import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poredjajPo'
})
export class PoredjajPoPipe implements PipeTransform {

  transform(value: any[], field: string): any {

    if (value === null || value.length <= 1) {
      return value;
    }

    if (value[0][field]) {
      if (typeof value[0][field] === 'string' || value[0][field] instanceof String) {
        return value.sort((a, b) => (a[field] > b[field]) ? 1 : (a[field] < b[field]) ? -1 : 0);
      }
      else {
        return value.sort((a, b) => b[field] - a[field]);
      }
    }
    else {
      return null;
    }
  }

}
