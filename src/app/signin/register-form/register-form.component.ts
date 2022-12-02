import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type InuptTypes = 'text' | 'email' | 'password';

interface LabelField {
  text: string;
  inputType: InuptTypes;
  controlName: string;
}

export interface UserData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  labelFields: LabelField[] = [
    { text: 'Imię', inputType: 'text', controlName: 'name' },
    { text: 'Nazwisko', inputType: 'text', controlName: 'surname' },
    { text: 'Email', inputType: 'email', controlName: 'email' },
    { text: 'Hasło', inputType: 'password', controlName: 'password' },
  ];
  registerForm!: FormGroup;
  passwordConditions: { text: string; validator: string }[] = [
    { text: 'Małą literę (od a do z)', validator: '[a-z]' },
    { text: 'Wielką literę (od A do Z)', validator: '[A-Z]' },
    { text: '1 cyfrę (od 0 do 9)', validator: '[0-9]' },
    { text: '1 znak specjlany (np. ! @ # $ % &)', validator: '[!@#$%^&]' },
    { text: 'Minimum 8 znaków', validator: 'minlength' },
  ];
  @Output() registerEmitter = new EventEmitter<UserData>();

  constructor(private builder: FormBuilder) {}

  checkError(validator: string): boolean {
    const control = this.registerForm.controls['password'];
    const controlValue = control.value as string;
    const reqExp = new RegExp(`${validator}`);
    const errorFlags = [];

    if (control.getError('required') && control.dirty) {
      errorFlags.push('required');
    }

    if (controlValue.length < 8 && validator === 'minlength' && control.dirty) {
      errorFlags.push('minlength');
    }

    if (
      !reqExp.test(controlValue) &&
      validator !== 'minlength' &&
      control.dirty
    ) {
      errorFlags.push(validator);
    }

    return !!errorFlags.find((el) => el === validator || el === 'required');
  }

  ngOnInit(): void {
    this.registerForm = this.builder.group({
      name: this.builder.control('', [Validators.required]),
      surname: this.builder.control('', [Validators.required]),
      email: this.builder.control('', [Validators.required, Validators.email]),
      password: this.builder.control('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/[A-Z]/),
        Validators.pattern(/[0-9]/),
        Validators.pattern(/[a-z]/),
        Validators.pattern(/[!@#$%^&]/),
      ]),
    });
  }

  submit() {
    if (this.registerForm.valid) {
      const user: UserData = {
        email: '',
        name: '',
        password: '',
        surname: '',
      };

      for (let controlName in this.registerForm.controls) {
        Object.defineProperty(user, controlName, {
          value: this.registerForm.controls[controlName].value,
        });
      }

      this.registerEmitter.next(user);
    }
  }
}
