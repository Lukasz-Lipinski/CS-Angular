import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { environment as envProd } from 'src/environments/environment.prod';
import { UserData } from './register-form/register-form.component';

interface Req {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

interface Res {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = isDevMode() ? environment.userBaseAPI : envProd.userBaseAPI;
  backendApi = isDevMode() ? environment.backendAPI : envProd.backendAPI;

  constructor(private http: HttpClient) {}

  signin(user: Omit<Req, 'returnSecureToken'>) {
    return this.http.post<Res>(this.url, {
      ...user,
    });
  }

  signup(user: Omit<Req, 'returnSecureToken'>) {
    return this.http.post<Res>(this.url, user).subscribe({
      next: (res) => {
        if (res) {
          this.http.post(`${this.backendApi}api/user`, user).subscribe();
        }
      },
    });
  }
}
