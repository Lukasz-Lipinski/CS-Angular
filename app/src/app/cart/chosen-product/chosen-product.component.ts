import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/components/advert/advert.service';

@Component({
  selector: 'app-chosen-product[chosenProduct]',
  templateUrl: './chosen-product.component.html',
  styleUrls: ['./chosen-product.component.css'],
})
export class ChosenProductComponent implements OnInit {
  @Input() chosenProduct!: Product;
  private newPrice: number = 0;
  constructor() {}

  ngOnInit(): void {}

  getNewPrice() {
    return this.newPrice || this.chosenProduct.price;
  }

  countPrice(amount: number) {
    this.newPrice = amount * this.chosenProduct.price;
  }
}
