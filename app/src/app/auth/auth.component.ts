import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  Params,
  Router,
} from '@angular/router';
import {
  faCartShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of, switchMap } from 'rxjs';
import { UserData } from '../signin/register-form/register-form.component';
import { UserService } from '../signin/user.service';
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
  faCart = faCartShopping;
  faUser = faUser;
  searcher: string = '';
  cat: string = 'all';
  subcategoryID: string = '';
  links: Link[] = [
    { href: '/agd', label: 'AGD' },
    { href: '/rtv', label: 'RTV' },
    { href: '/komputery', label: 'Komputery' },
    { href: '/smartfony', label: 'Smartfony' },
  ];
  upperLinks: Link[] = [
    {
      href: '/special-offers',
      label: 'Promocje',
    },
    { href: '/contact', label: 'Kontakt' },
    { href: '/claims', label: 'Reklamacje' },
  ];
  isLogged$!: Observable<boolean>;
  userData$!: Observable<Omit<
    UserData,
    'password'
  > | null>;
  badge$!: Observable<number>;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLogged$ = this.authService.isLogged$;
    this.userData$ = this.authService.user$;
    this.badge$ = this.userService.cart.pipe(
      switchMap((addedProduct) => {
        return of(addedProduct.length);
      })
    );
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

  onSearch() {
    this.router.navigate(['searcher'], {
      queryParams: {
        category: this.cat,
        product: this.searcher,
      },
    });
  }

  ngOnDestroy() {
    this.authService.isLogged$.next(false);
    this.authService.isLogged$.complete();

    this.authService.user$.next(null);
    this.authService.user$.complete();

    this.userService.cart.next([]);
    this.userService.cart.complete();
  }
}
