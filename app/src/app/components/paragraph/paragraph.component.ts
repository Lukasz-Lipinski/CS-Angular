import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-paragraph[content]',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css'],
})
export class ParagraphComponent
  implements OnInit
{
  @Input() content!: string | string[];

  constructor() {}

  ngOnInit() {}

  checkType(): boolean {
    return typeof this.content === 'string';
  }

  arrayContent(): Array<string> {
    return this.content as Array<string>;
  }

  stringContent(): string {
    return this.content as string;
  }
}
