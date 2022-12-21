import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../advert/advert.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() product!: Product;
  hour = new Date().getHours();

  constructor() {}

  ngOnInit() {}

  get getTransportInfo() {
    return this.product.price >= 400 ? 'Darmowy transport' : 'Transport 40zł';
  }

  get getCapabilityOfHomeTransport() {
    return this.hour < 13 ? 'Dzisiaj u Ciebie - sprawdź' : 'Dostawa jutro!';
  }
}
