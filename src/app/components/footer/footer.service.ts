import { Injectable } from '@angular/core';

export interface FooterLink {
  header: string;
  links: string[];
}

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private links: FooterLink[] = [
    {
      header: 'zakupy',
      links: ['dostawa', 'zwroty', 'raty'],
    },
    {
      header: 'Moje Konto',
      links: ['korzyści', 'rejestracja paragonu'],
    },
    {
      header: 'informacje',
      links: ['bezpieczeństwo', 'polityka prywatności', 'regulamin', 'contact'],
    },
    {
      header: 'CS',
      links: ['o firmie', 'sklepy'],
    },
  ];

  constructor() {}

  getLinks(): FooterLink[] {
    return this.links;
  }
}
