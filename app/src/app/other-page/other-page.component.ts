import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params,
} from '@angular/router';
import { Observable, concatMap } from 'rxjs';
import { OtherPageService } from './other-page.service';

export interface Content {
  content: string;
  leftColumn?: string;
  rightColumn?: string;
}

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.component.html',
  styleUrls: ['./other-page.component.css'],
})
export class OtherPageComponent
  implements OnInit
{
  content$!: Observable<Content>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private otherPageService: OtherPageService
  ) {}

  ngOnInit(): void {
    this.content$ =
      this.activatedRoute.params.pipe(
        concatMap((params: Params) => {
          const id = params['info'] as string;

          return this.otherPageService.returnData(
            id
          );
        })
      );
  }
}
