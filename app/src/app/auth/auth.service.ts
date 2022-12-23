import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { UserData } from '../signin/register-form/register-form.component';

export interface Subcategory {
  [categoryName: string]: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  subcategories: Subcategory = {
    AGD: ['Kuchnia', 'Sprzątanie', 'Ekspresy i kawa', 'Do zabudowy'],
    RTV: ['Telewizory', 'Kino Domowe', 'Odtwarzacz wideo', 'Car Audio'],
    Komputery: ['Laptopy', 'Komputery stacjonarne', 'Tablety', 'Słuchawki'],
    Smartfony: ['Apple', 'Samsung', 'Nokia', 'Motorola', 'Lenovo'],
  };
  isLogged$ = new BehaviorSubject<boolean>(false);
  user$ = new Subject<Omit<UserData, 'password'> | null>();

  constructor(private cookieService: CookieService) {}

  checkAuth(): boolean {
    return this.cookieService.check('token');
  }
}
