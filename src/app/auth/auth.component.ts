import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthService } from './auth.service';

export interface Link {
  href: string;
  label: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  faUser = faUser;
  searcher: string = '';
  subcategoryID: string = '';
  links: Link[] = [
    { href: '/agd', label: 'AGD' },
    { href: '/rtv', label: 'RTV' },
    { href: '/komputery', label: 'Komputery' },
    { href: '/smartfony', label: 'Smartfony' },
  ];
  upperLinks: Link[] = [
    { href: '/special-offers', label: 'Promocje' },
    { href: '/contact', label: 'Kontakt' },
    { href: '/claims', label: 'Reklamacje' },
  ];
  isLogged!: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLogged$.subscribe({
      next: (value) => {
        this.isLogged = value;
      },
    });
  }

  showSubcategory(item: Link) {
    this.subcategoryID = item.label;
  }

  hideSubcategory() {
    this.subcategoryID = '';
  }

  onLogout() {
    this.isLogged && this.authService.isLogged$.next(false);
  }

  ngOnDestroy() {
    this.authService.isLogged$.next(this.isLogged);
    this.authService.isLogged$.complete();
  }
}
