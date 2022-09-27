import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  url: string = '';
  title: string = 'Apple Macbook PRO 15';
  description: string = 'Laptop marki Apple w super cenie! Macbook PRO 15, 8 gb Ramu, SSD 512 GB, karta graficzna intel HD 4600. W promocyjnej cenie za 4199 zł!';

constructor(private http: HttpClient) { }

downloadAdverts() {
  return {
    title: this.title,
    description: this.description
  }
};

}
