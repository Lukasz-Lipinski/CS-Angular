import { HttpClient } from '@angular/common/http';
import {
  Injectable,
  isDevMode,
} from '@angular/core';
import {
  Observable,
  take,
  catchError,
  BehaviorSubject,
} from 'rxjs';
import { environment as envDev } from 'src/environments/environment';
import { environment as envProd } from 'src/environments/environment.prod';
import { Product } from '../components/advert/advert.service';
import { UserData } from './register-form/register-form.component';

interface Res {
  status: number;
  msg: string;
  token?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private backendApi = isDevMode()
    ? `${envDev.backendAPI}/api/user`
    : `${envProd.backendAPI}/api/user`;

  cart = new BehaviorSubject<Product[]>([]);
  private currCart: Product[] = [];

  constructor(private http: HttpClient) {}

  signin(
    user: Omit<UserData, 'name' | 'surname'>
  ): Observable<Res> {
    return this.http
      .post<Res>(`${this.backendApi}/login`, user)
      .pipe(
        catchError((err) => {
          throw err;
        })
      );
  }

  signup(user: UserData): Observable<Res> {
    return this.http
      .post<Res>(
        `${this.backendApi}/register`,
        user
      )
      .pipe(take(1));
  }

  getUserData(
    token: string
  ): Observable<UserData> {
    return this.http.get<UserData>(
      this.backendApi,
      {
        headers: {
          authorization: token,
        },
      }
    );
  }

  saveProduct(product: Product) {
    const isExsist = this.currCart.find(
      (item) =>
        item.brand === product.brand &&
        item.model === product.model
    );

    !isExsist && this.currCart.push(product);
    !isExsist && this.cart.next(this.currCart);
  }
}
