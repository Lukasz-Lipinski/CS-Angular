import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap, Observable, Subject, Subscription, switchMap } from 'rxjs';
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
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onSignup(user: UserData) {
    this.userService.signup(user).subscribe({
      next: (res) => {},
    });
  }

  onSignin(user: Omit<UserData, 'name' | 'surname'>) {
    this.sub = this.userService.signin(user).subscribe({
      next: (res) => {
        res.status === 200
          ? this.authService.isLogged$.next(true)
          : this.authService.isLogged$.next(false);
        this.router.navigate(['/']);
      },
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
