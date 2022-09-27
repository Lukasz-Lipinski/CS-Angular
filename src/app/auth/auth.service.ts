import { Injectable } from '@angular/core';

export interface Subcategory {
  [categoryName: string]: string[]
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  subcategories: Subcategory = {
    AGD: ['Kuchnia', 'Sprzątanie', 'Ekspresy i kawa', 'Do zabudowy'],
    RTV: ['Telewizory', 'Kino Domowe', 'Odtwarzacz wideo', 'Car Audio'],
    Komputery: ['Laptopy', 'Komputery stacjonarne', 'Tablety', 'Słuchawki'],
    Smartfony: ['Apple', 'Samsung', 'Nokia', 'Motorola', 'Lenovo'],
  };

constructor() { }

}
