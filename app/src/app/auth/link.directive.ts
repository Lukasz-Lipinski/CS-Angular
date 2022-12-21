import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appLink]'
})
export class LinkDirective {

  @HostBinding('class') class = 'pb-4 pt-2 px-6 text-blue-800 font-bold cursor-pointer hover:bg-white';

  constructor() { }

}
