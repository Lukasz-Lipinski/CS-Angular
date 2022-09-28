
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AuthSubcategoryComponent } from './auth/auth-subcategory/auth-subcategory.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LinkDirective } from './auth/link.directive';
import { HomeComponent } from './Home/Home.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AdvertComponent } from './advert/advert.component';
import { CategoryComponent } from './category/category.component';
import { SigninModule } from './signin/signin.module';
import { FooterComponent } from './footer/footer.component';
import { UpperletterPipe } from './footer/upperletter.pipe';

@NgModule({
  declarations: [	
    AppComponent,
      AuthComponent,
      HomeComponent,
      LinkDirective,
      SpecialOffersComponent,
      AuthSubcategoryComponent,
      AdvertComponent,
      CategoryComponent,
      FooterComponent,
      UpperletterPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    SigninModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
