import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserData } from './register-form/register-form.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  subscription!: Subscription;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSignup(user: UserData) {
    this.subscription = this.userService.signup(user);
  }

  onSignin(user: Omit<UserData, 'name' | 'surname'>) {
    this.subscription = this.userService.signin(user).subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
