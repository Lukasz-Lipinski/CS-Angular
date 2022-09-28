import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  earIcon = faPhone;
  footerData: {header: string, links: string[]}[] = [
    {
      header: "zakupy",
      links: [
        'dostawa',
        'zwroty',
        'raty'
      ]
    },
    {
      header: 'Moje Konto',
      links: [
        'korzyści',
        'rejestracja paragonu'
      ],
    },
    {
      header: 'informacje',
      links: [
        'bezpieczeństwo',
        'polityka prywatności',
        'regulamin',
        'kontakt'
      ],
    },
    {
    header: 'CS',
    links: [
      'o firmie',
      'sklepy',
    ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
