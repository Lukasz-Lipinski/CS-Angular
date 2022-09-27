import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {
  signinForm!: FormGroup;
  constructor(private builder: FormBuilder) { }
  errorMsg: string = '';

  ngOnInit() {
    this.signinForm = this.builder.group({
        login: this.builder.control('', [Validators.required]),
        password: this.builder.control('', [Validators.required]),
      })
  }

  signin() {
    this.errorMsg = '';

    if(!this.signinForm.valid) {

      for (let formElementName in this.signinForm.controls) {
        if (this.signinForm.controls[formElementName].getError('required')) {
          this.errorMsg = 'Empty fields!';
          return;
        }
      }
      
      this.errorMsg = "Invalid data!";
      return;
    };

    console.log('signin', this.signinForm);
  }

}
