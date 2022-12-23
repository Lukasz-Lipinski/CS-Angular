import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/components/advert/advert.service';

@Component({
  selector: 'app-category-tie[product]',
  templateUrl: './category-tie.component.html',
  styleUrls: ['./category-tie.component.css'],
})
export class CategoryTieComponent implements OnInit {
  @Input() product!: Product;
  @Input() last?: boolean;
  @Output() addToCartEmitter = new EventEmitter<Product>();

  constructor() {}

  get getTitle() {
    const { brand, model, subcategory } = this.product;
    return `${subcategory} ${brand} ${model}`;
  }

  ngOnInit() {}

  onAddToCart() {
    this.addToCartEmitter.emit(this.product);
  }
}
