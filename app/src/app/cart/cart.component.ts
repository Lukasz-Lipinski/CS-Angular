import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Product } from '../components/advert/advert.service';
import { UserService } from '../signin/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$?: Observable<Product[] | null>;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.cart$ = this.userService.cart.pipe(
      map((products) => {
        return products.length ? products : null;
      })
    );
  }
}
