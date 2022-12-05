import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment as productionMode } from 'src/environments/environment.prod';
import { environment as developmentMode } from 'src/environments/environment';

export interface Advert {
  title: string;
  description: string;
}

export interface Product {
  specialOffering: boolean;
  brand: string;
  model: string;
  price: number;
  category: string;
  subcategory: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdvertService {
  url: string = isDevMode()
    ? productionMode.backendAPI
    : developmentMode.backendAPI;

  constructor(private http: HttpClient) {}

  downloadAdverts(): Observable<Advert[]> {
    const url = `${this.url}/api/products`;

    return this.http.get<{ products: Product[] }>(url).pipe(
      map(({ products }) => {
        const adverts: Advert[] = [];

        products.forEach((item) => {
          if (item.specialOffering) {
            adverts.push({
              title: `${item.brand} ${item.model}`,
              description: item.description,
            });
          }
        });
        return adverts;
      })
    );
  }
}
