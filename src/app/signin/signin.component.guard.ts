import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class SigninPageGuard implements OnInit, CanActivate {
  isLogged: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLogged$.subscribe({
      next: (state) => {
        this.isLogged = state;
      },
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return !this.isLogged;
  }
}
