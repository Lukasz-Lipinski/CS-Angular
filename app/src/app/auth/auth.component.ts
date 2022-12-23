import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { UserData } from '../signin/register-form/register-form.component';
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
  isLogged$!: Observable<boolean>;
  userData$!: Observable<Omit<UserData, 'password'> | null>;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.isLogged$ = this.authService.isLogged$;
    this.userData$ = this.authService.user$;
  }

  showSubcategory(item: Link) {
    this.subcategoryID = item.label;
  }

  hideSubcategory() {
    this.subcategoryID = '';
  }

  onLogout() {
    this.authService.isLogged$.next(false);
    this.authService.user$.next(null);
    this.cookieService.delete('token');
  }

  ngOnDestroy() {
    this.authService.isLogged$.next(false);
    this.authService.isLogged$.complete();
    this.authService.user$.next(null);
    this.authService.user$.complete();
  }
}
