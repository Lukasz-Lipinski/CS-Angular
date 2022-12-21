import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { environment as envProd } from 'src/environments/environment.prod';
import { UserData } from './register-form/register-form.component';

interface Res {
  status: number;
  msg: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private backendApi = isDevMode()
    ? `${environment.backendAPI}/api/user`
    : `${envProd.backendAPI}/api/user`;

  constructor(private http: HttpClient) {}

  signin(user: Omit<UserData, 'name' | 'surname'>): Observable<Res> {
    return this.http.post<Res>(`${this.backendApi}/login`, user).pipe(take(1));
  }

  signup(user: UserData): Observable<Res> {
    return this.http
      .post<Res>(`${this.backendApi}/register`, user)
      .pipe(take(1));
  }
}
