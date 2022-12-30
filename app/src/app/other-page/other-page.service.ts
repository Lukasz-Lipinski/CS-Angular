import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './other-page.component';

type ContentFlags =
  | 'delivery'
  | 'claims'
  | 'installments'
  | 'benefits'
  | 'recipe-registration'
  | 'security'
  | 'privacy-politics'
  | 'regulamin'
  | 'contact'
  | 'about'
  | 'shops'
  | 'special-offers';

@Injectable({
  providedIn: 'root',
})
export class OtherPageService {
  content: { [key: string]: Content } = {
    delivery: {
      content:
        'Zamówienia kompletowane są w ciągu kilku dniu. W przypadku braku towaru na magazynie wysyłamy informację do klienta z informacją i czasem oczekiwania na dostępność produktu.',
      leftColumn:
        'Aktulanie nasze zamówienia wysyłamy firmami kurierskimi: X i Z oraz Y. W przypadku mniejszych gabarytów jest możliwość wysyłki przez paczkomat. Zamówiony towart można również odebrać w jednym z naszych sklepów.',
      rightColumn:
        'Zamówienia złożone do godziny 13:00 wysyłane i dostarczane tego samego na wskazany adres. W przypadku zamówień złożonych po godzinie 13:00 towar zostanie wysłany następnego dnia.',
    },
    claims: {
      content:
        'Produkty zakupione w sklepie można zwrócić tylko z paragonem oraz nienaruszonym opakowaniem i towarem. W przypadku zamówień internetowych klient ma prawo zwrócić produkt do 14 dni od dnia odebrania towaru. Może tego dokonać w jednym z naszych sklepów lub wysyłając na adres zwrotny wraz z paragonem.',
      leftColumn: '',
      rightColumn: '',
    },
    installments: {
      content:
        'Oferujemy raty zarówno w sklepach stajonarnych jak i dla zamówień internetowych. Oferujemy raty 0%! Sprawdź naszą ofertę ratalną!',
    },
    benefits: {
      content: 'test',
    },
    'recipe-registration': {
      content: 'test',
    },
    security: {
      content: 'test',
    },
    'privacy-politics': {
      content: 'test',
    },
    regulamin: {
      content: 'test',
    },
    contact: {
      content: 'test',
    },
    about: {
      content: 'test',
    },
    shops: {
      content: 'test',
    },
    'special-offers': {
      content: 'test',
    },
  };
  constructor() {}

  returnData(
    id: ContentFlags | string
  ): Observable<Content> {
    const { [id]: requiredContent } =
      this.content;
    return of(requiredContent);
  }
}
