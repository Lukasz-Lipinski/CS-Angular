import { Component, OnInit } from '@angular/core';
import { faUser } from "@fortawesome/free-solid-svg-icons";

export interface Link {
  href: string;
  label: string;
};

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  faUser = faUser;
  links: Link[] = [
    {href: "/agd", label: "AGD"},
    {href: "/rtv", label: "RTV"},
    {href: "/komputery", label: "Komputery"},
    {href: "/smartfony", label: "Smartfony"},
  ];

  searcher: string = '';
  subcategoryID: string = '';
  upperLinks: Link[] = [
    { href: '/special-offers', label: "Promocje" },
    { href: '/contact', label: "Kontakt" },
    { href: '/claims', label: "Reklamacje" },
  ]

  constructor() { }

  ngOnInit() {
  }

  showSubcategory(item: Link) {
    this.subcategoryID = item.label;
  }

  hideSubcategory() {
    this.subcategoryID = '';
  }

}
