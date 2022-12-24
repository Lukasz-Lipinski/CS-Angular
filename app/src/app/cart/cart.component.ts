import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../components/advert/advert.service';
import { UserService } from '../signin/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$?: Observable<Product[]>;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.cart$ = this.userService.cart;
  }
}
