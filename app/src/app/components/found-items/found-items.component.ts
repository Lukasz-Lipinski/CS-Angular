import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params,
} from '@angular/router';
import { concatMap } from 'rxjs';
import { FoundItemsService } from './found-items.service';

@Component({
  selector: 'app-found-items',
  templateUrl: './found-items.component.html',
  styleUrls: ['./found-items.component.css'],
})
export class FoundItemsComponent
  implements OnInit
{
  constructor(
    private activatedRoute: ActivatedRoute,
    private foundItemsService: FoundItemsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(
        concatMap((activatedRoute: Params) => {
          const productName =
            activatedRoute['product'];
          const category =
            activatedRoute['category'];

          return this.foundItemsService.getProducts(
            category,
            productName
          );
        })
      )
      .subscribe({
        next: (products) => console.log(products),
      });
  }
}
