import { Injectable } from '@angular/core';

export interface FooterLink {
  header: string;
  links: { href: string; label: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private links: FooterLink[] = [
    {
      header: 'zakupy',
      links: [
        { label: 'dostawa', href: 'delivery' },
        { label: 'zwroty', href: 'claims' },
        { label: 'raty', href: 'installments' },
      ],
    },
    {
      header: 'Moje Konto',
      links: [
        { label: 'korzyści', href: 'benefits' },
        {
          label: 'rejestracja paragonu',
          href: 'recipe-registration',
        },
      ],
    },
    {
      header: 'informacje',
      links: [
        {
          label: 'bezpieczeństwo',
          href: 'security',
        },
        {
          label: 'polityka prywatności',
          href: 'privacy-politics',
        },
        { label: 'regulamin', href: 'regulamin' },
        { label: 'kontakt', href: 'contact' },
      ],
    },
    {
      header: 'CS',
      links: [
        { label: 'o firmie', href: 'about' },
        { label: 'sklepy', href: 'shops' },
      ],
    },
  ];

  constructor() {}

  getLinks(): FooterLink[] {
    return this.links;
  }
}
