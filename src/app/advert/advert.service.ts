import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Advert {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  url: string = '';
  adverts: Advert[] = [
    {
      title: 'Apple Macbook PRO 15',
      description: 'Laptop marki Apple w super cenie! Macbook PRO 15, 8 gb Ramu, SSD 512 GB, karta graficzna intel HD 4600. W promocyjnej cenie za 4199 zł!',
    },
    {
      title: 'Apple Macbook PRO 13',
      description: 'Laptop marki Apple w super cenie! Macbook PRO 13, 16 gb Ramu, SSD 512 GB, karta graficzna intel HD 4600. W promocyjnej cenie za 3499 zł!',
    },
    {
      title: 'Apple Macbook PRO 12',
      description: 'Laptop marki Apple w super cenie! Macbook PRO 12, 12 gb Ramu, SSD 256 GB, karta graficzna intel HD 4600. W promocyjnej cenie za 2599 zł!',
    }
  ]

constructor(private http: HttpClient) { }

downloadAdverts() {
  return this.adverts;
};

}
