import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
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
    this.sub = this.userService.signin(user).subscribe({
      next: ({ token, status }) => {
        if (status === 200 && token) {
          this.cookieService.set('token', token);
          this.authService.isLogged$.next(true);
          this.router.navigate(['/']);
        }
      },
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
