import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { concat, concatMap, Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { UserService } from './signin/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sub!: Subscription;

  constructor(
    private cookieService: CookieService,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    if (this.cookieService.check('token')) {
      const token = this.cookieService.get('token');
      this.sub = this.userService.getUserData(token).subscribe({
        next: (user) => {
          this.authService.user$.next(user);
          this.authService.isLogged$.next(true);
        },
      });
    }
  }
}
