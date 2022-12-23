import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Product } from '../components/advert/advert.service';
import { UserService } from '../signin/user.service';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  products$?: Observable<Product[]>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private userService: UserService,
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: (value: Params) => {
        const { category, products } = value;
        this.products$ = this.categoryService.getProducts(category, products);
      },
    });
  }

  checkIfLast(index: number, products: Product[] | null): boolean {
    if (products) {
      return index === products.length - 1;
    }
    return false;
  }

  onAddToCart(product: Product) {
    console.log(this.authService.isLogged$.value);

    if (this.authService.isLogged$.value) {
      const token = this.cookieService.get('token');
      this.userService.saveProduct(product, token);
    }
  }
}
