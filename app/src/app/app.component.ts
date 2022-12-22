import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private cookieService: CookieService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.cookieService.check('token') && this.authService.isLogged$.next(true);
  }
}
