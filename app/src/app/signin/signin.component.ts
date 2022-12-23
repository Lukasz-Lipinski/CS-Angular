import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { catchError, of, Subscription, switchMap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { UserData } from './register-form/register-form.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  private sub?: Subscription;

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {}

  onSignup(user: UserData) {
    this.userService.signup(user).subscribe({
      next: (res) => {},
    });
  }

  onSignin(user: Omit<UserData, 'name' | 'surname'>) {
    const signInStream$ = this.userService.signin(user);

    signInStream$
      .pipe(
        switchMap((val) => {
          const { status, token } = val;

          if (token && status === 200) {
            this.cookieService.set('token', token);
            return this.userService.getUserData(token);
          }

          throw of({
            ...val,
          });
        }),
        catchError((err: HttpErrorResponse) => {
          return of({
            ...err,
          });
        })
      )
      .subscribe({
        next: (val) => {
          if ('error' in val) {
            console.log(val);
          } else {
            this.authService.isLogged$.next(true);
            this.authService.user$.next(val as UserData);
            this.router.navigate(['/']);
          }
        },
      });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
