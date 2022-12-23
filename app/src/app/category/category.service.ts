import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { environment as devEnv } from 'src/environments/environment';
import { environment as prodEnv } from 'src/environments/environment.prod';
import { Product } from '../components/advert/advert.service';
import { UserService } from '../signin/user.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url = isDevMode()
    ? `${devEnv.backendAPI}/api/products`
    : `${prodEnv.backendAPI}/api/products`;

  constructor(private http: HttpClient, private userService: UserService) {}

  getProducts(category: string, subcategory: string): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(this.url).pipe(
      map(({ products }) => {
        return products.filter(
          (product) =>
            product.category === category && product.subcategory === subcategory
        );
      })
    );
  }
}
