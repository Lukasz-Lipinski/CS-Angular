import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/components/advert/advert.service';

@Component({
  selector: 'app-category-tie[product]',
  templateUrl: './category-tie.component.html',
  styleUrls: ['./category-tie.component.css'],
})
export class CategoryTieComponent implements OnInit {
  @Input() product!: Product;

  constructor() {}

  get getTitle() {
    const { brand, model, subcategory } = this.product;
    return `${subcategory} ${brand} ${model}`;
  }

  ngOnInit() {}
}
