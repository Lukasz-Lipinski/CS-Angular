import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chosen-product[chosenProduct]',
  templateUrl: './chosen-product.component.html',
  styleUrls: ['./chosen-product.component.css'],
})
export class ChosenProductComponent implements OnInit {
  @Input() chosenProduct!: object;

  constructor() {}

  ngOnInit(): void {}
}
