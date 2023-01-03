import {
  Pipe,
  PipeTransform,
} from '@angular/core';

@Pipe({
  name: 'ListPipe',
})
export class ListPipe implements PipeTransform {
  constructor() {}

  transform(
    value: string | undefined,
    ...args: any[]
  ): string | Array<string> {
    let newRegulamin: Array<string>;

    if (value?.includes('*')) {
      newRegulamin = value.split(' * ');
      return newRegulamin;
    }
    console.log(value);
    return value as string;
  }
}
