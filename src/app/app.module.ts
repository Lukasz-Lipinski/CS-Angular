import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AuthSubcategoryComponent } from './auth/auth-subcategory/auth-subcategory.component';
import { BenefitsComponent } from './signin/benefits/benefits.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LinkDirective } from './auth/link.directive';
import { HomeComponent } from './Home/Home.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SigninComponent } from './signin/signin.component';
import { RegisterFormComponent } from './signin/register-form/register-form.component';
import { SigninFormComponent } from './signin/signin-form/signin-form.component';
import { MessageComponent } from './signin/message/message.component';
import { AdvertComponent } from './advert/advert.component';

@NgModule({
  declarations: [	
    AppComponent,
      AuthComponent,
      HomeComponent,
      LinkDirective,
      SpecialOffersComponent,
      SigninComponent,
      RegisterFormComponent,
      SigninFormComponent,
      BenefitsComponent,
      AuthSubcategoryComponent,
      MessageComponent,
      AdvertComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
