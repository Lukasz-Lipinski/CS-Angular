import { HttpClient } from '@angular/common/http';
import {
  Injectable,
  isDevMode,
} from '@angular/core';
import { environment as prodEnv } from 'src/environments/environment.prod';
import { environment as devEnv } from 'src/environments/environment';
import { map, Observable, of } from 'rxjs';
import { Product } from '../advert/advert.service';

@Injectable({
  providedIn: 'root',
})
export class FoundItemsService {
  url = isDevMode()
    ? `${devEnv.backendAPI}/api/products`
    : `${prodEnv.backendAPI}/api/products`;

  constructor(private http: HttpClient) {}

  getProducts(
    requiredCategory: string,
    requiredProductName: string
  ): Observable<Product[]> {
    return this.http
      .get<{ products: Product[] }>(this.url)
      .pipe(
        map(({ products }) => {
          let filtredProducts: Product[];

          if (requiredCategory === 'all') {
            filtredProducts = products.filter(
              (product) =>
                (product.brand + product.model)
                  .toLowerCase()
                  .includes(
                    requiredProductName
                      .trim()
                      .toLowerCase()
                  )
            );
          } else {
            filtredProducts = products.filter(
              (product) =>
                (product.brand + product.model)
                  .toLowerCase()
                  .includes(
                    requiredProductName
                      .trim()
                      .toLowerCase()
                  ) &&
                product.category.toLowerCase() ===
                  requiredCategory.toLowerCase()
            );
          }

          return filtredProducts;
        })
      );
  }
}
