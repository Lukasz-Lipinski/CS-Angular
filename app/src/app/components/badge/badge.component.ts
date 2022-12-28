import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge[productsNumber]',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
})
export class BadgeComponent implements OnInit {
  @Input() productsNumber: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
