import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperletter'
})
export class UpperletterPipe implements PipeTransform {

  transform(value: string): string {
    const firstLetter = value[0].toUpperCase();
    return firstLetter + value.substring(1, value.length).toLowerCase();
  }

}
