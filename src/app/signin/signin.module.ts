import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { BenefitsComponent } from "./benefits/benefits.component";
import { RegisterFormComponent } from './register-form/register-form.component';
import { MessageComponent } from './message/message.component';

const Components = [
  BenefitsComponent,
  MessageComponent,
  RegisterFormComponent,
  SigninFormComponent,
  SigninComponent
]


@NgModule({
  declarations: Components,
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
})
export class SigninModule {}