import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserData } from '../register-form/register-form.component';

type LoginDataType = Omit<UserData, 'name' | 'surname'>;

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css'],
})
export class SigninFormComponent implements OnInit {
  signinForm!: FormGroup;
  errorMsg: string = '';
  @Output() signinEmitter = new EventEmitter<LoginDataType>();

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.signinForm = this.builder.group({
      email: this.builder.control('', [Validators.required]),
      password: this.builder.control('', [Validators.required]),
    });
  }

  signin() {
    const loginData: LoginDataType = {
      email: '',
      password: '',
    };

    if (this.signinForm.valid) {
      for (let control in this.signinForm.controls) {
        Object.defineProperty(loginData, control, {
          value: this.signinForm.controls[control].value,
        });
      }
      console.log(loginData);

      this.signinEmitter.emit(loginData);
    }
  }
}
